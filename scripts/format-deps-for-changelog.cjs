#!/usr/bin/env node
/**
 * Format dependency changes for CHANGELOG.md
 * 
 * Usage: node format-deps-for-changelog.cjs [json-file]
 * 
 * Reads JSON from stdin or file and formats it for CHANGELOG.md.
 * Input format should match the output from compare-package-json.cjs
 * 
 * Example:
 *   cat changes.json | node format-deps-for-changelog.cjs
 *   node format-deps-for-changelog.cjs changes.json
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
 * Format section name for display
 * @param {string} section - Section name
 * @returns {string} Formatted name
 */
function formatSectionName(section) {
  return section;
}

/**
 * Format dependency changes for CHANGELOG
 * @param {Object} changes - Changes object from compare-package-json.cjs
 * @returns {string} Formatted output
 */
function formatForChangelog(changes) {
  const output = [];
  
  // Process each section type
  for (const [sectionName, sectionChanges] of Object.entries(changes)) {
    const hasChanges = sectionChanges.added.length > 0 || 
                       sectionChanges.removed.length > 0 || 
                       sectionChanges.updated.length > 0;
    
    if (!hasChanges) continue;
    
    // Add updated dependencies
    if (sectionChanges.updated.length > 0) {
      output.push(`    - updated ${formatSectionName(sectionName)}`);
      sectionChanges.updated.forEach(dep => {
        output.push(`        - ${dep.name} ${dep.oldVersion} → ${dep.newVersion}`);
      });
    }
    
    // Add added dependencies
    if (sectionChanges.added.length > 0) {
      output.push(`    - added ${formatSectionName(sectionName)}`);
      sectionChanges.added.forEach(dep => {
        output.push(`        - ${dep.name}@${dep.version}`);
      });
    }
    
    // Add removed dependencies
    if (sectionChanges.removed.length > 0) {
      output.push(`    - removed ${formatSectionName(sectionName)}`);
      sectionChanges.removed.forEach(dep => {
        output.push(`        - ${dep.name}@${dep.version}`);
      });
    }
  }
  
  return output.join('\n');
}

// Main execution
(async () => {
  try {
    const input = await readInput();
    
    if (!input.trim()) {
      process.exit(0);
    }
    
    const changes = JSON.parse(input);
    const formatted = formatForChangelog(changes);
    
    if (formatted) {
      console.log(formatted);
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
})();
