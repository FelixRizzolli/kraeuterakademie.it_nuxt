#!/usr/bin/env node
/**
 * Format dependency changes for console output
 * 
 * Usage: node format-deps-for-console.cjs [json-file]
 * 
 * Reads JSON from stdin or file and formats it for human-readable console output.
 * Input format should match the output from compare-package-json.cjs
 * 
 * Example:
 *   cat changes.json | node format-deps-for-console.cjs
 *   node format-deps-for-console.cjs changes.json
 */

const fs = require('fs');

/**
 * Read input from stdin or file
 * @returns {Promise<string>} Input content
 */
function readInput() {
  return new Promise((resolve, reject) => {
    // Check if input is from file argument
    if (process.argv[2]) {
      const filePath = process.argv[2];
      if (!fs.existsSync(filePath)) {
        reject(new Error(`File not found: ${filePath}`));
        return;
      }
      resolve(fs.readFileSync(filePath, 'utf8'));
      return;
    }
    
    // Read from stdin
    let data = '';
    process.stdin.setEncoding('utf8');
    
    process.stdin.on('readable', () => {
      let chunk;
      while ((chunk = process.stdin.read()) !== null) {
        data += chunk;
      }
    });
    
    process.stdin.on('end', () => {
      resolve(data);
    });
    
    process.stdin.on('error', reject);
  });
}

/**
 * Format dependency changes for console output
 * @param {Object} sectionChanges - Changes for a dependency section
 * @param {string} sectionName - Name of the section
 */
function printSection(sectionChanges, sectionName) {
  const hasChanges = sectionChanges.added.length > 0 || 
                     sectionChanges.removed.length > 0 || 
                     sectionChanges.updated.length > 0;
  
  if (!hasChanges) {
    console.log(`No changes in ${sectionName}`);
    return;
  }
  
  console.log(`\n${sectionName}:`);
  console.log('-'.repeat(sectionName.length + 1));
  
  if (sectionChanges.added.length > 0) {
    console.log('\n  Added:');
    sectionChanges.added.forEach(dep => {
      console.log(`    + ${dep.name}@${dep.version}`);
    });
  }
  
  if (sectionChanges.removed.length > 0) {
    console.log('\n  Removed:');
    sectionChanges.removed.forEach(dep => {
      console.log(`    - ${dep.name}@${dep.version}`);
    });
  }
  
  if (sectionChanges.updated.length > 0) {
    console.log('\n  Updated:');
    sectionChanges.updated.forEach(dep => {
      console.log(`    ~ ${dep.name}: ${dep.oldVersion} → ${dep.newVersion}`);
    });
  }
}

/**
 * Format all dependency changes for console
 * @param {Object} changes - Changes object from compare-package-json.cjs
 */
function formatForConsole(changes) {
  printSection(changes.dependencies, 'dependencies');
  printSection(changes.devDependencies, 'devDependencies');
  printSection(changes.peerDependencies, 'peerDependencies');
  printSection(changes.optionalDependencies, 'optionalDependencies');
  console.log('\n');
}

// Main execution
(async () => {
  try {
    const input = await readInput();
    
    if (!input.trim()) {
      console.log('No changes detected.');
      process.exit(0);
    }
    
    const changes = JSON.parse(input);
    formatForConsole(changes);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
})();
