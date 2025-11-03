#!/usr/bin/env bash
# Fetch package.json from the last version tag
# Usage: ./scripts/get-package-from-last-tag.sh
set -euo pipefail

SCRIPT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)

# Find the last version tag
LAST_TAG=$(git describe --tags --abbrev=0 2>/dev/null || echo "")

if [ -z "$LAST_TAG" ]; then
  echo "Error: No version tags found in repository" >&2
  exit 1
fi

# Try to get package.json from the tag (try nuxt/ path first, then root)
TAGGED_PACKAGE=$(git show "$LAST_TAG:nuxt/package.json" 2>/dev/null || git show "$LAST_TAG:package.json" 2>/dev/null || echo "")

if [ -z "$TAGGED_PACKAGE" ]; then
  echo "Error: Could not find package.json in tag $LAST_TAG" >&2
  exit 1
fi

# Output the tag name to stderr for informational purposes
echo "Fetched package.json from tag: $LAST_TAG" >&2

# Output the package.json content to stdout
echo "$TAGGED_PACKAGE"
