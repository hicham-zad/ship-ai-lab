// Generates 1200x630 Open Graph PNGs for the /nerra guides, hub and landing page.
// Usage: node scripts/generate-nerra-og.mjs
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const OUT = path.resolve('public/nerra/og');
fs.mkdirSync(OUT, { recursive: true });

const C = { bg: '#F3F0EB', card: '#FBFAF8', peach: '#F2A27E', peachStrong: '#C9582A', peachTint: '#FBEEE3', espresso: '#47281A', ink: '#1E1E1E', soft: '#6F6D6A', line: '#E4E0D9' };
const SERIF = "Georgia, 'Times New Roman', serif";
const SANS = "'Helvetica Neue', Arial, sans-serif";

const SHORT = {
  'glp-1-injection-site-rotation': 'GLP-1 injection site rotation planner',
  'zepbound-injection-sites': 'Zepbound injection sites: where to inject',
  'mounjaro-injection-sites': 'Mounjaro injection sites: where to inject',
  'ozempic-injection-sites': 'Ozempic injection sites: where to inject',
  'tirzepatide-dose-chart': 'Tirzepatide dose chart from the labels',
  'semaglutide-dose-chart': 'Semaglutide dose chart: Ozempic',
  'wegovy-dosing-schedule': 'Wegovy dosing schedule',
  'glp-1-missed-dose': 'Missed a GLP-1 dose? Free checker',
  'how-to-inject-ozempic': 'How to inject Ozempic, step by step',
  'how-to-inject-wegovy': 'How to inject Wegovy, step by step',
  'best-glp-1-tracker-apps': 'Best GLP-1 tracker apps for iPhone',
  'shotsy-alternative': 'Shotsy alternatives compared',
  'glp-1-side-effects': 'GLP-1 side effects vs placebo',
  'glp-1-hair-loss': 'GLP-1 hair loss: what the labels say',
  'wegovy-pill': 'Wegovy pill: how to take it',
  'best-time-to-take-glp-1': 'Best time to take a GLP-1',
  'nerra-app': 'Nerra: private GLP-1 tracker',
  guides: 'GLP-1 guides, straight from the labels',
  nerra: 'Your therapy, completely in view',
};
const FOOT_APPS = new Set(['best-glp-1-tracker-apps', 'shotsy-alternative']);

const src = fs.readFileSync('data/nerra/articles.ts', 'utf8');
const items = [];
for (const m of src.matchAll(/^    slug: '([^']+)'/gm)) {
  const start = m.index;
  const next = src.indexOf("\n    slug: '", start + 10);
  const block = src.slice(start, next === -1 ? src.length : next);
  const kicker = /kicker: '([^']*)'/.exec(block)?.[1] ?? 'Guide';
  const shot = /shots: \[\n\s+\{ file: '(\w+)'/.exec(block)?.[1] ?? 'dashboard';
  items.push({ slug: m[1], kicker, shot });
}
items.push({ slug: 'guides', kicker: 'Guides', shot: 'dashboard' }, { slug: 'nerra', kicker: 'GLP-1 companion', shot: 'dashboard' });

const esc = (t) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function wrap(text, maxChars) {
  const words = text.split(' ');
  const lines = [];
  let cur = '';
  for (const w of words) {
    if ((cur + ' ' + w).trim().length > maxChars && cur) { lines.push(cur); cur = w; } else cur = (cur + ' ' + w).trim();
  }
  if (cur) lines.push(cur);
  return lines;
}

async function card({ slug, kicker, shot }) {
  const title = SHORT[slug] ?? slug;
  let size = 58, lines = wrap(title, 19);
  if (lines.length > 4) { size = 48; lines = wrap(title, 23); }
  const lh = size * 1.12;
  const startY = 266;
  const foot = slug === 'nerra' || slug === 'nerra-app' ? 'Private by design: no account, no cloud' : FOOT_APPS.has(slug) ? 'Compared from US App Store listings' : slug === 'guides' ? 'Every figure links to the manufacturer label' : 'Sourced from the US prescribing information';
  const tspans = lines.map((l, i) => `<text x="72" y="${startY + i * lh}" font-family="${SERIF}" font-weight="700" font-size="${size}" fill="${C.espresso}" letter-spacing="-1">${esc(l)}</text>`).join('');
  const kw = Math.max(120, kicker.length * 13 + 40);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <rect width="1200" height="630" fill="${C.bg}"/>
    <circle cx="1060" cy="40" r="230" fill="${C.peachTint}"/>
    <circle cx="1180" cy="520" r="140" fill="${C.peach}" opacity="0.28"/>
    <circle cx="-30" cy="640" r="170" fill="${C.peachTint}"/>
    <g transform="translate(72 160)"><rect width="${kw}" height="38" rx="19" fill="#fff" stroke="${C.line}"/><text x="${kw / 2}" y="26" text-anchor="middle" font-family="${SANS}" font-weight="700" font-size="15" fill="${C.peachStrong}" letter-spacing="1.4">${esc(kicker.toUpperCase())}</text></g>
    ${tspans}
    <text x="72" y="${startY + lines.length * lh + 24}" font-family="${SANS}" font-weight="600" font-size="24" fill="${C.soft}">${esc(foot)}</text>
    <text x="72" y="585" font-family="${SANS}" font-weight="600" font-size="20" fill="${C.soft}">shipailab.com/nerra</text>
  </svg>`;

  // phone: top of the screenshot, rounded, bleeding off the bottom edge
  const W = 360, H = Math.round(W * 1522 / 700);
  const phoneRaw = await sharp(path.resolve(`public/nerra/${shot}.png`)).resize(W, H).png().toBuffer();
  const mask = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}"><rect width="${W}" height="${H}" rx="44" fill="#fff"/></svg>`);
  const VIS = 630 - 64;
  const phone = await sharp(await sharp(phoneRaw).composite([{ input: mask, blend: 'dest-in' }]).png().toBuffer()).extract({ left: 0, top: 0, width: W, height: VIS }).png().toBuffer();
  const shadow = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W + 80}" height="${VIS + 40}"><rect x="40" y="52" width="${W}" height="${H}" rx="44" fill="#47281A" opacity="0.22" filter="url(#b)"/><defs><filter id="b"><feGaussianBlur stdDeviation="18"/></filter></defs></svg>`);
  const icon = await sharp(path.resolve('public/nerra-icon.png')).resize(56, 56).png().toBuffer();
  const iconMask = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56"><rect width="56" height="56" rx="15" fill="#fff"/></svg>`);
  const iconR = await sharp(icon).composite([{ input: iconMask, blend: 'dest-in' }]).png().toBuffer();
  const brand = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="260" height="60"><text x="0" y="42" font-family="${SERIF}" font-weight="800" font-size="40" fill="${C.espresso}">Nerra</text></svg>`);

  const px = 770, py = 64;
  await sharp(Buffer.from(svg))
    .composite([
      { input: shadow, left: px - 40, top: py - 40 },
      { input: phone, left: px, top: py },
      { input: iconR, left: 72, top: 52 },
      { input: brand, left: 142, top: 48 },
    ])
    .png({ compressionLevel: 9 })
    .toFile(path.join(OUT, `${slug}.png`));
}

for (const it of items) await card(it);
console.log(`Wrote ${items.length} cards to ${OUT}`);
