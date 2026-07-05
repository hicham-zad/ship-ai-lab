const fs = require('fs');
const content = fs.readFileSync('data/locations.ts', 'utf8');

const slugs = [
  'ai-mvp-agency-in-lagos',
  'ai-mvp-agency-in-tel-aviv',
  'ai-mvp-agency-in-philadelphia',
  'ai-mvp-agency-in-bangalore',
  'ai-mvp-agency-in-kuwait-city'
];

let newArrayContent = '';
for (const slug of slugs) {
  let index = content.indexOf(`slug: "${slug}"`);
  if (index === -1) {
      index = content.indexOf(`slug: '${slug}'`);
  }
  if (index === -1) {
    console.log("NOT FOUND", slug);
    continue;
  }
  
  // Find start of object '{'
  let start = index;
  while (content[start] !== '{') start--;
  
  // Find end of object '}'
  let end = start + 1;
  let braceCount = 1;
  while (braceCount > 0 && end < content.length) {
    if (content[end] === '{') braceCount++;
    if (content[end] === '}') braceCount--;
    end++;
  }
  
  newArrayContent += content.substring(start, end) + ',\n';
}

const arrayStartToken = 'const locations: Location[] = [';
const headerIndex = content.indexOf(arrayStartToken);
const header = content.substring(0, headerIndex + arrayStartToken.length);
const footer = '\n];\n\nexport default locations;\n';

fs.writeFileSync('data/locations.ts', header + '\n  ' + newArrayContent.trim() + footer);
console.log('done');
