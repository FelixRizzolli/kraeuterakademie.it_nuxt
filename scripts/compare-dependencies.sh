#!/usr/bin/env bash
# Compare dependencies between current package.json and the last version tag
#
# This script fetches the package.json from the last git tag and compares
# it with the current package.json, displaying the changes in a human-readable format.
#
# Usage: ./scripts/compare-dependencies.sh
#
set -euo pipefail

SCRIPT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)
PACKAGE_JSON="$SCRIPT_DIR/../package.json"

# Create temp directory for comparison
TMPDIR=$(mktemp -d)
trap 'rm -rf "$TMPDIR"' EXIT

# Fetch package.json from last tag
"$SCRIPT_DIR/get-package-from-last-tag.sh" > "$TMPDIR/old-package.json" 2> "$TMPDIR/tag-info.txt"

if [ $? -ne 0 ]; then
  cat "$TMPDIR/tag-info.txt" >&2
  exit 1
fi

# Show which tag we're comparing against
echo "Comparing dependencies with last version tag: $(cat "$TMPDIR/tag-info.txt" | sed 's/Fetched package.json from tag: //')"
echo "================================================"

# Copy current package.json
cp "$PACKAGE_JSON" "$TMPDIR/new-package.json"

# Compare and format for console output
"$SCRIPT_DIR/compare-package-json.cjs" "$TMPDIR/old-package.json" "$TMPDIR/new-package.json" | \
  "$SCRIPT_DIR/format-deps-for-console.cjs"

echo "Comparison complete!"
