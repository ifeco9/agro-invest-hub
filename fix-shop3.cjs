const fs = require('fs');

// Read the file
let content = fs.readFileSync('src/pages/Shop.tsx', 'utf8');

// Fix the syntax error by replacing the exact problematic content
// The issue is on line 1033 with the stray </> tag
content = content.replace(/\s*<\/>\s*
\s*\)\s*
\s*\)\s*
\s*<\/TabsContent>/, '
          )
        </TabsContent>');

// Write the fixed content back to the file
fs.writeFileSync('src/pages/Shop.tsx', content);

console.log('Fixed the syntax error in Shop.tsx');