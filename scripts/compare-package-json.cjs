#!/usr/bin/env node
/**
 * Compare dependencies between two package.json files
 * Usage: node compare-package-json.js <old-package.json> <new-package.json>
 */

const fs = require('fs');

if (process.argv.length < 4) {
  console.error('Usage: node compare-package-json.js <old-package.json> <new-package.json>');
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

function compareDeps(oldDeps, newDeps, type) {
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

function printChanges(changes, type) {
  if (changes.added.length === 0 && changes.removed.length === 0 && changes.updated.length === 0) {
    console.log(`No changes in ${type}`);
    return;
  }
  
  console.log(`\n${type}:`);
  console.log('-'.repeat(type.length + 1));
  
  if (changes.added.length > 0) {
    console.log('\n  Added:');
    changes.added.forEach(dep => {
      console.log(`    + ${dep.name}@${dep.version}`);
    });
  }
  
  if (changes.removed.length > 0) {
    console.log('\n  Removed:');
    changes.removed.forEach(dep => {
      console.log(`    - ${dep.name}@${dep.version}`);
    });
  }
  
  if (changes.updated.length > 0) {
    console.log('\n  Updated:');
    changes.updated.forEach(dep => {
      console.log(`    ~ ${dep.name}: ${dep.oldVersion} → ${dep.newVersion}`);
    });
  }
}

// Compare each type of dependency
const depsChanges = compareDeps(oldPkg.dependencies, newPkg.dependencies, 'dependencies');
const devDepsChanges = compareDeps(oldPkg.devDependencies, newPkg.devDependencies, 'devDependencies');
const peerDepsChanges = compareDeps(oldPkg.peerDependencies, newPkg.peerDependencies, 'peerDependencies');
const optionalDepsChanges = compareDeps(oldPkg.optionalDependencies, newPkg.optionalDependencies, 'optionalDependencies');

printChanges(depsChanges, 'dependencies');
printChanges(devDepsChanges, 'devDependencies');
printChanges(peerDepsChanges, 'peerDependencies');
printChanges(optionalDepsChanges, 'optionalDependencies');

console.log('\n');
