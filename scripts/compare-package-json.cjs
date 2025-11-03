#!/usr/bin/env node
/**
 * Compare two package.json files and output changes as JSON
 * 
 * Usage: node compare-package-json.cjs <old-package.json> <new-package.json>
 * 
 * Output format:
 * {
 *   "dependencies": {
 *     "added": [{ "name": "package", "version": "1.0.0" }],
 *     "removed": [{ "name": "package", "version": "1.0.0" }],
 *     "updated": [{ "name": "package", "oldVersion": "1.0.0", "newVersion": "2.0.0" }]
 *   },
 *   "devDependencies": { ... },
 *   "peerDependencies": { ... },
 *   "optionalDependencies": { ... }
 * }
 */

const fs = require('fs');

if (process.argv.length < 4) {
  console.error('Usage: node compare-package-json.cjs <old-package.json> <new-package.json>');
  process.exit(1);
}

const oldFile = process.argv[2];
const newFile = process.argv[3];

if (!fs.existsSync(oldFile)) {
  console.error(`Error: File not found: ${oldFile}`);
  process.exit(1);
}

if (!fs.existsSync(newFile)) {
  console.error(`Error: File not found: ${newFile}`);
  process.exit(1);
}

const oldPkg = JSON.parse(fs.readFileSync(oldFile, 'utf8'));
const newPkg = JSON.parse(fs.readFileSync(newFile, 'utf8'));

/**
 * Compare two dependency objects and return changes
 * @param {Object} oldDeps - Old dependencies
 * @param {Object} newDeps - New dependencies
 * @returns {Object} Changes object with added, removed, and updated arrays
 */
function compareDeps(oldDeps, newDeps) {
  oldDeps = oldDeps || {};
  newDeps = newDeps || {};
  
  const allKeys = new Set([...Object.keys(oldDeps), ...Object.keys(newDeps)]);
  const changes = {
    added: [],
    removed: [],
    updated: []
  };
  
  for (const key of Array.from(allKeys).sort()) {
    if (!oldDeps[key] && newDeps[key]) {
      changes.added.push({ name: key, version: newDeps[key] });
    } else if (oldDeps[key] && !newDeps[key]) {
      changes.removed.push({ name: key, version: oldDeps[key] });
    } else if (oldDeps[key] !== newDeps[key]) {
      changes.updated.push({ 
        name: key, 
        oldVersion: oldDeps[key], 
        newVersion: newDeps[key] 
      });
    }
  }
  
  return changes;
}

// Compare all dependency types
const result = {
  dependencies: compareDeps(oldPkg.dependencies, newPkg.dependencies),
  devDependencies: compareDeps(oldPkg.devDependencies, newPkg.devDependencies),
  peerDependencies: compareDeps(oldPkg.peerDependencies, newPkg.peerDependencies),
  optionalDependencies: compareDeps(oldPkg.optionalDependencies, newPkg.optionalDependencies)
};

// Output as JSON
console.log(JSON.stringify(result, null, 2));
