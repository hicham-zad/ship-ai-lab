// Line icons for the figures. Reads the site's own set from components/ksef/Icon.tsx (the app's icons),
// so figures, site and app share one icon language, and adds a few shapes drawn on the same 24px grid.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const src = fs.readFileSync(path.join(root, 'components/ksef/Icon.tsx'), 'utf8');
const block = src.slice(src.indexOf('const ICONS = {'), src.indexOf('} as const;'));

const ICONS = {};
for (const m of block.matchAll(/^ {2}(\w+): (\(\s*<>[\s\S]*?<\/>\s*\)|<[^\n]*\/>),$/gm)) {
  ICONS[m[1]] = m[2]
    .replace(/^\(\s*<>|<\/>\s*\)$/g, '')
    .replace(/=\{([^}]+)\}/g, '="$1"')
    .trim();
}

Object.assign(ICONS, {
  qr: '<rect x="3.5" y="3.5" width="6.5" height="6.5" rx="1.2"/><rect x="14" y="3.5" width="6.5" height="6.5" rx="1.2"/><rect x="3.5" y="14" width="6.5" height="6.5" rx="1.2"/><path d="M14 14h2.5v2.5H14zM18.5 18.5h2v2h-2zM14 20.5h2.5M20.5 14v2.5"/>',
  user: '<circle cx="12" cy="8" r="3.8"/><path d="M4.5 20.5a7.5 7.5 0 0 1 15 0"/>',
  building: '<path d="M4 20.5V5.5A1.5 1.5 0 0 1 5.5 4h8A1.5 1.5 0 0 1 15 5.5v15M15 9.5h3.5A1.5 1.5 0 0 1 20 11v9.5M2.5 20.5h19M8 8h3M8 12h3M8 16h3"/>',
  phone: '<rect x="6.5" y="2.5" width="11" height="19" rx="2.5"/><path d="M10.5 18.5h3"/>',
});

export function icon(name) {
  const body = ICONS[name];
  if (!body) throw new Error(`Unknown icon: ${name}`);
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`;
}

export const ICON_NAMES = Object.keys(ICONS);
