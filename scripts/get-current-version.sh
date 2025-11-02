#!/usr/bin/env bash
# Print the version from package.json
# Usage: ./scripts/get-current-version.sh [path-to-repo-root]
set -euo pipefail

ROOT_DIR=${1:-$(pwd)}
PACKAGE_JSON="$ROOT_DIR/package.json"

if [ ! -f "$PACKAGE_JSON" ]; then
  # try relative to script location (workflow sometimes runs from repo root inside nuxt)
  SCRIPT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)
  PACKAGE_JSON="$SCRIPT_DIR/../package.json"
fi

if [ ! -f "$PACKAGE_JSON" ]; then
  echo ""
  exit 0
fi

# Extract the version field robustly
VERSION=$(grep -m1 '"version"' "$PACKAGE_JSON" | sed -E 's/.*"version"[[:space:]]*:[[:space:]]*"([^"]+)".*/\1/')

printf '%s' "$VERSION"
