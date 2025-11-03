#!/usr/bin/env bash
# Update CHANGELOG.md with dependency changes
#
# This script automatically detects dependency changes by comparing the current
# package.json with the last version tag and adds them to the CHANGELOG.md file.
#
# Usage: 
#   ./scripts/update-changelog.sh [version]
#   pnpm run update-changelog
#
# Arguments:
#   version - (optional) The version to update in CHANGELOG. 
#             If not provided, uses the version from package.json
#
# Prerequisites:
#   - The version must already exist in CHANGELOG.md with a "## [version]" header
#   - Git tags must exist for version comparison
#
# Example:
#   ./scripts/update-changelog.sh 0.0.8
#
set -euo pipefail

SCRIPT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)
CHANGELOG="$SCRIPT_DIR/../CHANGELOG.md"
VERSION="${1:-}"

if [ -z "$VERSION" ]; then
  # Get current version from package.json
  VERSION=$("$SCRIPT_DIR/get-current-version.sh")
fi

# Create temp directory for processing
TMPDIR=$(mktemp -d)
trap 'rm -rf "$TMPDIR"' EXIT

# Get dependency changes as JSON
echo "Analyzing dependency changes..."
"$SCRIPT_DIR/get-package-from-last-tag.sh" > "$TMPDIR/old-package.json" 2>/dev/null || {
  echo "Error: Could not fetch package.json from last tag"
  exit 1
}

cp "$SCRIPT_DIR/../package.json" "$TMPDIR/new-package.json"

# Compare and get JSON output
"$SCRIPT_DIR/compare-package-json.cjs" "$TMPDIR/old-package.json" "$TMPDIR/new-package.json" > "$TMPDIR/changes.json"

# Format for CHANGELOG
"$SCRIPT_DIR/format-deps-for-changelog.cjs" "$TMPDIR/changes.json" > "$TMPDIR/formatted-deps.txt"

# Check if there are any changes to add
if [ ! -s "$TMPDIR/formatted-deps.txt" ]; then
  echo "No dependency changes detected."
  exit 0
fi

# Read the formatted dependencies
FORMATTED_DEPS=$(cat "$TMPDIR/formatted-deps.txt")

# Check if version already exists in CHANGELOG
if grep -q "## \[$VERSION\]" "$CHANGELOG"; then
  echo "Version $VERSION already exists in CHANGELOG.md"
  echo "Adding dependency changes to existing version entry..."
  
  # Find the line number of the version header
  VERSION_LINE=$(grep -n "## \[$VERSION\]" "$CHANGELOG" | head -1 | cut -d: -f1)
  
  # Check if ### Changed section exists for this version
  CHANGED_LINE=$(awk -v start="$VERSION_LINE" 'NR > start && /^### Changed/ {print NR; exit}' "$CHANGELOG")
  
  if [ -n "$CHANGED_LINE" ]; then
    # Insert after ### Changed line
    echo "Updating existing ### Changed section..."
    {
      head -n "$CHANGED_LINE" "$CHANGELOG"
      echo ""
      echo "$FORMATTED_DEPS"
      tail -n +$((CHANGED_LINE + 1)) "$CHANGELOG"
    } > "$TMPDIR/new-changelog.md"
  else
    # No ### Changed section, find where to insert it (after version line and any ### Added section)
    NEXT_SECTION=$(awk -v start="$VERSION_LINE" 'NR > start && /^###/ {print NR; exit}' "$CHANGELOG")
    
    if [ -n "$NEXT_SECTION" ]; then
      INSERT_LINE=$((NEXT_SECTION - 1))
    else
      # No other sections, insert before next version
      NEXT_VERSION=$(awk -v start="$VERSION_LINE" 'NR > start && /^## \[/ {print NR; exit}' "$CHANGELOG")
      if [ -n "$NEXT_VERSION" ]; then
        INSERT_LINE=$((NEXT_VERSION - 1))
      else
        # No next version, append at end
        INSERT_LINE=$(wc -l < "$CHANGELOG")
      fi
    fi
    
    echo "Creating new ### Changed section..."
    {
      head -n "$INSERT_LINE" "$CHANGELOG"
      echo ""
      echo "### Changed"
      echo ""
      echo "$FORMATTED_DEPS"
      tail -n +$((INSERT_LINE + 1)) "$CHANGELOG"
    } > "$TMPDIR/new-changelog.md"
  fi
  
  mv "$TMPDIR/new-changelog.md" "$CHANGELOG"
  echo "✓ CHANGELOG.md updated successfully"
else
  echo "Version $VERSION not found in CHANGELOG.md"
  echo "Please add the version header first, then run this script again."
  echo ""
  echo "Add something like this to your CHANGELOG.md:"
  echo ""
  echo "## [$VERSION] - $(date +%Y-%m-%d)"
  echo ""
  echo "### Changed"
  echo ""
  exit 1
fi
