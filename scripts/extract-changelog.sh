#!/usr/bin/env bash
# Extract changelog content for a specific version
# Usage: ./scripts/extract-changelog.sh 0.6.0
set -euo pipefail

if [ "$#" -lt 1 ]; then
  echo "Usage: $0 <version>" >&2
  exit 2
fi

VERSION="$1"
CHANGELOG_FILE="$(dirname "$0")/../CHANGELOG.md"

if [ ! -f "$CHANGELOG_FILE" ]; then
  echo "CHANGELOG.md not found" >&2
  exit 1
fi

# Normalize version (remove leading v if present)
VERSION_CLEAN="${VERSION#v}"
## Find the header line for the requested version. Accept headers like:
## [0.5.0] - DATE
## [0.6.0]
## 0.6.0 - DATE

# Escape dots in version for grep regex
VER_ESCAPED=$(printf '%s' "$VERSION_CLEAN" | sed 's/\./\\./g')

# Look for a line starting with '## ' that contains the version (with or without brackets)
START_LINE=$(grep -nE "^## .*\[?${VER_ESCAPED}\]?" "$CHANGELOG_FILE" | head -n 1 | cut -d: -f1 || true)

if [ -z "$START_LINE" ]; then
  echo "Version $VERSION_CLEAN not found in CHANGELOG.md" >&2
  exit 3
fi

TMPFILE=$(mktemp)
trap 'rm -f "$TMPFILE"' EXIT

# Search for the next header after the start line
NEXT_REL=$(tail -n +$((START_LINE + 1)) "$CHANGELOG_FILE" | grep -nE "^## " | head -n 1 | cut -d: -f1 || true)

if [ -z "$NEXT_REL" ]; then
  # No next header: print until EOF
  sed -n "$((START_LINE + 1)),\$p" "$CHANGELOG_FILE" > "$TMPFILE"
else
  END_LINE=$((START_LINE + NEXT_REL - 1))
  sed -n "$((START_LINE + 1)),$END_LINE p" "$CHANGELOG_FILE" > "$TMPFILE"
fi
## Trim leading/trailing blank lines (whitespace only) to match JS extractor behavior
awk '
  { lines[NR] = $0 }
  END {
    start = 1
    for (i = 1; i <= NR; i++) if (lines[i] !~ /^[[:space:]]*$/) { start = i; break }
    end = NR
    for (i = NR; i >= start; i--) if (lines[i] !~ /^[[:space:]]*$/) { end = i; break }
    for (i = start; i <= end; i++) print lines[i]
  }
' "$TMPFILE" | sed 's/^\t/    /'

rm -f "$TMPFILE"
