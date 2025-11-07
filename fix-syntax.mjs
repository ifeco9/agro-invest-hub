import { readFileSync, writeFileSync } from 'fs';

// Read the file
let content = readFileSync('c:\\Users\\user\\OneDrive\\Desktop\\agro-yield-hub\\src\\pages\\Shop.tsx', 'utf8');

// Fix the syntax error
content = content.replace('            </>\\n          )\\n          )', '            </>\\n          )');

// Write the file back
writeFileSync('c:\\Users\\user\\OneDrive\\Desktop\\agro-yield-hub\\src\\pages\\Shop.tsx', content);