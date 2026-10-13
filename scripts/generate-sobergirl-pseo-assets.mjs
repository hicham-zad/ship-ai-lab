// Generates every image for the Sober Girl programmatic pages (data/sobergirl/pseo):
//   public/sobergirl/<slug>-hero.svg, public/sobergirl/<slug>-og.png and public/sobergirl/pseo/*.svg
// The tree and badge art is ported from the app (src/components/tree, MilestoneBadge) so it matches.
// It reads the page data, so every figure a page references gets drawn, and an unknown one fails.
// Usage: node scripts/generate-sobergirl-pseo-assets.mjs
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import sharp from 'sharp';

const ROOT = path.resolve('.');
const require = createRequire(import.meta.url);
const jiti = require('jiti')(ROOT + '/', { alias: { '@': ROOT } });
const { PSEO_ARTICLES } = jiti('./data/sobergirl/pseo/index.ts');

const OUT = path.resolve('public/sobergirl');
const FIG = path.join(OUT, 'pseo');
fs.mkdirSync(FIG, { recursive: true });

const C = {
  cream: '#FCF6EF', blush: '#F9E8E3', petal: '#FFFAF6', plum: '#5A2A4C', plumSoft: '#7C4B6D',
  plumTint: '#EBDCE6', sage: '#8FAE8F', sageDeep: '#5E8262', sageTint: '#E4EEE1',
  rose: '#E8928E', roseDeep: '#D2716F', roseTint: '#FBE1DD', champagne: '#E9C98F', champagneDeep: '#C79A4A',
  ink: '#3A2235', inkSoft: '#6E5566', line: '#EFDDD6',
};
const T = {
  bark: '#8B5E5A', barkDeep: '#6F4A4A', leafDark: '#6F9470', leafMid: C.sage, leafLight: '#BAD2B3',
  blossom: C.rose, blossomCenter: C.champagne, gold: C.champagne, goldCenter: '#C79A4A',
  groundTop: '#A9C4A2', skyTop: '#F7DDE0', hillFar: '#DDE9D8', hillNear: '#C6DBC0',
};
const TIERS = {
  sprout: { base: C.sage, inner: C.sageTint, edge: C.sageDeep, ink: C.sageDeep },
  bloom: { base: C.rose, inner: C.roseTint, edge: C.roseDeep, ink: C.roseDeep },
  deep: { base: C.plumSoft, inner: C.plumTint, edge: C.plum, ink: C.plum },
  golden: { base: C.champagne, inner: '#FBF1DA', edge: C.champagneDeep, ink: '#9A6F27' },
};
const SERIF = "Georgia, 'Times New Roman', serif";
const SANS = "'Helvetica Neue', Arial, sans-serif";
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const txt = (x, y, s, { size = 24, weight = 700, fill = C.ink, font = SANS, anchor = 'start', ls = 0 } = {}) =>
  `<text x="${x}" y="${y}" text-anchor="${anchor}" font-family="${font}" font-weight="${weight}" font-size="${size}" fill="${fill}"${ls ? ` letter-spacing="${ls}"` : ''}>${esc(s)}</text>`;

/* ------------------------------------------------------------------ tree, ported from the app */

const STAGES = {
  0: [0, 0, 0, 0, 0, 0], 1: [18, 3, 9, 2, 0, 0], 3: [38, 4.5, 16, 4, 0, 0], 7: [62, 7, 32, 9, 2, 0],
  14: [84, 10, 48, 15, 3, 0], 30: [102, 13, 62, 21, 3, 4], 60: [116, 15, 76, 27, 4, 10],
  90: [126, 17, 88, 33, 4, 16], 180: [134, 19, 98, 39, 5, 20], 365: [142, 22, 108, 45, 5, 26],
};
const STAGE_NAMES = { 1: 'Sprout', 3: 'Seedling', 7: 'Sapling', 14: 'Young tree', 30: 'Budding tree', 60: 'Blooming tree', 90: 'Flowering tree', 180: 'Grand tree', 365: 'Ancient tree' };
const TIER_OF = { 1: 'sprout', 3: 'sprout', 7: 'sprout', 14: 'bloom', 30: 'bloom', 60: 'bloom', 90: 'deep', 180: 'deep', 365: 'golden' };
const GOLDEN_ANGLE = 2.399963229728653;
const mulberry32 = (seed) => () => {
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};
const spiral = (count, total, seed, radius) => {
  const random = mulberry32(seed);
  return Array.from({ length: count }, (_, i) => {
    const t = (i + 0.5) / total;
    const r = Math.min(1, Math.max(0, radius(t) + (random() - 0.5) * 0.08));
    const theta = i * GOLDEN_ANGLE + (random() - 0.5) * 0.4;
    return { u: r * Math.cos(theta), v: r * Math.sin(theta), size: random(), angle: random() * 180 };
  });
};
const LEAF_SPOTS = spiral(60, 60, 23, (t) => 0.3 + 0.75 * Math.sqrt(t));
const BLOSSOM_SPOTS = spiral(40, 40, 37, (t) => 0.5 + 0.45 * Math.sqrt(t));
const FLOWER = (() => {
  const steps = 60;
  return `${Array.from({ length: steps + 1 }, (_, i) => {
    const a = (i / steps) * Math.PI * 2;
    const r = 0.72 + 0.28 * Math.cos(5 * a);
    return `${i === 0 ? 'M' : 'L'}${(r * Math.cos(a)).toFixed(3)} ${(r * Math.sin(a)).toFixed(3)}`;
  }).join(' ')}Z`;
})();
const BRANCHES = [
  { along: 0.62, lean: -52, length: 0.62 }, { along: 0.7, lean: 48, length: 0.66 }, { along: 0.82, lean: -24, length: 0.55 },
  { along: 0.88, lean: 26, length: 0.5 }, { along: 0.55, lean: 70, length: 0.5 },
];
const CX = 160, GROUND = 320, H = 360;

function shapeFor(days) {
  const [trunkHeight, trunkWidth, canopyRadius, blobs, branches, blossoms] = STAGES[days];
  // A daily check-in waters the tree once a day, and each watering adds a leaf (capped at 60).
  return { trunkHeight, trunkWidth, canopyRadius, blobs, branches, blossoms, leaves: Math.min(days, 60), golden: days === 365 };
}

function treeInner(sh) {
  let s = '';
  const h = sh.trunkHeight;
  if (h < 1) {
    s += `<ellipse cx="${CX}" cy="${GROUND - 3}" rx="6.5" ry="4.6" fill="${T.barkDeep}"/><ellipse cx="${CX - 1.6}" cy="${GROUND - 4.4}" rx="2.6" ry="1.6" fill="${T.bark}"/>`;
  } else {
    const w = sh.trunkWidth / 2, base = w * 1.35, top = w * 0.62, topY = GROUND - h;
    for (let i = 0; i < Math.min(sh.branches, BRANCHES.length); i++) {
      const b = BRANCHES[i];
      const y = GROUND - h * b.along, rad = (b.lean * Math.PI) / 180, reach = sh.canopyRadius * b.length * 1.1;
      const x2 = CX + Math.sin(rad) * reach, y2 = y - Math.cos(rad) * reach * 0.9;
      s += `<path d="M${CX} ${y} Q${CX + Math.sin(rad) * reach * 0.25} ${y - reach * 0.5} ${x2} ${y2}" stroke="${T.bark}" stroke-width="${Math.max(1.4, sh.trunkWidth * 0.32 - i * 0.4)}" stroke-linecap="round" fill="none"/>`;
    }
    s += `<path d="M${CX - base} ${GROUND} C${CX - base * 0.9} ${GROUND - h * 0.35} ${CX - top * 1.1} ${GROUND - h * 0.7} ${CX - top} ${topY} L${CX + top} ${topY} C${CX + top * 1.1} ${GROUND - h * 0.7} ${CX + base * 0.9} ${GROUND - h * 0.35} ${CX + base} ${GROUND} Z" fill="${T.bark}"/>`;
    s += `<path d="M${CX - top * 0.2} ${topY + 4} L${CX - base * 0.25} ${GROUND - 2}" stroke="${T.barkDeep}" stroke-opacity="0.35" stroke-width="${Math.max(0.8, w * 0.28)}" stroke-linecap="round"/>`;
    s += `<ellipse cx="${CX}" cy="${GROUND}" rx="${base * 1.7}" ry="2.6" fill="${T.barkDeep}" fill-opacity="0.25"/>`;
  }
  const R = sh.canopyRadius;
  if (R >= 2) {
    const cy = GROUND - h - R * 0.35, rx = R * 1.15, ry = R * 0.9;
    const blobs = spiral(sh.blobs, sh.blobs, 11, (t) => Math.sqrt(t) * 0.92).map((p) => ({ x: CX + p.u * rx * 0.82, y: cy + p.v * ry * 0.82, r: R * (0.26 + 0.14 * p.size) }));
    if (R >= 14) s += `<ellipse cx="${CX}" cy="${cy}" rx="${rx * 0.78}" ry="${ry * 0.74}" fill="${T.leafDark}"/>`;
    blobs.forEach((b) => { s += `<circle cx="${b.x}" cy="${b.y + b.r * 0.12}" r="${b.r * 1.04}" fill="${T.leafDark}"/>`; });
    blobs.forEach((b) => { s += `<circle cx="${b.x - b.r * 0.05}" cy="${b.y - b.r * 0.1}" r="${b.r * 0.9}" fill="${T.leafMid}"/>`; });
    blobs.forEach((b, i) => { if (i % 2 === 0) s += `<circle cx="${b.x - b.r * 0.3}" cy="${b.y - b.r * 0.38}" r="${b.r * 0.46}" fill="${T.leafLight}" fill-opacity="0.5"/>`; });
    LEAF_SPOTS.slice(0, sh.leaves).forEach((p) => {
      const x = CX + p.u * rx * 1.02, y = cy + p.v * ry * 1.02;
      s += `<ellipse cx="${x}" cy="${y}" rx="${R * 0.05 + 1}" ry="${R * 0.095 + 1.6}" transform="rotate(${p.angle} ${x} ${y})" fill="${T.leafLight}" fill-opacity="0.95"/>`;
    });
    BLOSSOM_SPOTS.slice(0, sh.blossoms).forEach((p) => {
      const x = CX + p.u * rx * 0.92, y = cy + p.v * ry * 0.92, size = R * 0.075 + 2.2;
      s += `<path d="${FLOWER}" transform="translate(${x} ${y}) scale(${size})" fill="${sh.golden ? T.gold : T.blossom}"/><circle cx="${x}" cy="${y}" r="${size * 0.3}" fill="${sh.golden ? T.goldCenter : T.blossomCenter}"/>`;
    });
  }
  return s;
}

/** The tree at a milestone, on its patch of grass, framed like the app's TreeArt. */
function tree(days, x, y, size) {
  const sh = shapeFor(days);
  const treeHeight = sh.trunkHeight + sh.canopyRadius * 1.25;
  const view = Math.min(H, Math.max(64, treeHeight * 1.15 + 28));
  return `<svg x="${x}" y="${y}" width="${size}" height="${size}" viewBox="${CX - view / 2} ${GROUND + 14 - view} ${view} ${view}">
<ellipse cx="${CX}" cy="${GROUND + 6}" rx="${view * 0.42}" ry="18" fill="${T.groundTop}"/>${treeInner(sh)}</svg>`;
}

/* ------------------------------------------------------------------ badge, ported from the app */

const ROSETTE = (() => {
  const pts = [];
  for (let i = 0; i <= 240; i++) {
    const a = (i / 240) * Math.PI * 2, r = 44 + 4.2 * Math.cos(12 * a);
    pts.push(`${i === 0 ? 'M' : 'L'}${(50 + r * Math.cos(a)).toFixed(2)} ${(50 + r * Math.sin(a)).toFixed(2)}`);
  }
  return `${pts.join(' ')}Z`;
})();
let gradN = 0;
function badge(days, x, y, size, tier = TIER_OF[days], label = String(days)) {
  const p = TIERS[tier];
  const id = `bg${gradN++}`;
  return `<svg x="${x}" y="${y}" width="${size}" height="${size}" viewBox="0 0 100 100">
<defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${p.base}"/><stop offset="1" stop-color="${p.edge}"/></linearGradient></defs>
<path d="${ROSETTE}" fill="url(#${id})"/><circle cx="50" cy="50" r="34" fill="${p.inner}" stroke="${p.edge}" stroke-opacity="0.3" stroke-width="1.5"/>
<circle cx="50" cy="50" r="30" fill="none" stroke="${p.base}" stroke-opacity="0.55" stroke-width="1" stroke-dasharray="1.5 3.4" stroke-linecap="round"/>
<text x="50" y="${label.length >= 3 ? 59 : 61}" text-anchor="middle" font-family="${SERIF}" font-weight="700" font-size="${label.length >= 3 ? 26 : 32}" fill="${p.ink}">${label}</text></svg>`;
}

function bloom(cx, cy, r, petal = C.rose, core = C.champagne) {
  let s = '';
  for (let i = 0; i < 8; i++) s += `<ellipse cx="${cx}" cy="${cy - r * 0.62}" rx="${r * 0.3}" ry="${r * 0.55}" fill="${petal}" opacity="0.92" transform="rotate(${i * 45} ${cx} ${cy})"/>`;
  return s + `<circle cx="${cx}" cy="${cy}" r="${r * 0.28}" fill="${core}"/>`;
}

/* ------------------------------------------------------------------ app facts used in drawings */

const APPS = {
  iamsober: { name: 'I Am Sober', cost: 'Free + Plus', around: 'Streak and community', color: C.plumSoft },
  reframe: { name: 'Reframe', cost: 'Subscription', around: '160-day program', color: C.roseDeep },
  sunflower: { name: 'Sunflower', cost: 'Free + paid', around: 'AI sponsor', color: C.champagneDeep },
  trydry: { name: 'Try Dry', cost: 'Free, no ads', around: 'Cut-back diary', color: C.sageDeep },
  sobergirl: { name: 'Sober Girl', cost: 'Free + Plus', around: 'Private, for women', color: C.plum },
};
const COMPARE_APPS = {
  'i-am-sober-alternative': ['iamsober', 'trydry', 'sunflower', 'reframe', 'sobergirl'],
  'reframe-alternative': ['reframe', 'trydry', 'iamsober', 'sunflower', 'sobergirl'],
  'sunflower-alternative': ['sunflower', 'iamsober', 'trydry', 'reframe', 'sobergirl'],
  'try-dry-alternative': ['trydry', 'iamsober', 'reframe', 'sunflower', 'sobergirl'],
  'i-am-sober-vs-reframe': ['iamsober', 'reframe'],
  'i-am-sober-vs-sunflower': ['iamsober', 'sunflower'],
  'reframe-vs-try-dry': ['reframe', 'trydry'],
  'sober-girl-vs-i-am-sober': ['sobergirl', 'iamsober'],
};

/* ------------------------------------------------------------------ backgrounds and frames */

const bg = (w, h, id = 'bg') => `<defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${C.cream}"/><stop offset="1" stop-color="${C.blush}"/></linearGradient></defs>
<rect width="${w}" height="${h}" fill="url(#${id})"/>
<circle cx="${w * 0.85}" cy="${h * 0.12}" r="${h * 0.42}" fill="${C.rose}" opacity="0.13"/>
<circle cx="${w * 0.08}" cy="${h * 0.95}" r="${h * 0.34}" fill="${C.plumTint}" opacity="0.7"/>`;
const svg = (w, h, body, label) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-label="${esc(label)}">${body}</svg>`;
const wordmark = (x, y) => bloom(x, y - 8, 18, C.rose, C.plum) + txt(x + 30, y, 'sober girl', { size: 24, font: SERIF, fill: C.plum });

/* ------------------------------------------------------------------ hero art (600 x 520 box) */

function milestoneArt(days) {
  return `<ellipse cx="300" cy="470" rx="250" ry="30" fill="${T.hillNear}" opacity="0.8"/>${tree(days, 110, 60, 420)}${badge(days, 410, 40, 170)}`;
}
function compareArt(keys) {
  let s = '';
  const n = keys.length, w = n === 2 ? 220 : 106, gap = n === 2 ? 40 : 10, total = n * w + (n - 1) * gap, x0 = 300 - total / 2;
  keys.forEach((k, i) => {
    const a = APPS[k], x = x0 + i * (w + gap), y = 110 + (n === 2 ? 0 : Math.abs(i - (n - 1) / 2) * 22);
    const hl = k === 'sobergirl';
    s += `<rect x="${x}" y="${y}" width="${w}" height="290" rx="26" fill="${hl ? C.plum : '#fff'}" stroke="${hl ? C.plum : C.line}" stroke-width="3"/>`;
    s += `<circle cx="${x + w / 2}" cy="${y + 70}" r="${n === 2 ? 40 : 30}" fill="${a.color}" opacity="${hl ? 1 : 0.85}"/>`;
    s += hl ? bloom(x + w / 2, y + 70, n === 2 ? 34 : 26, C.rose, C.champagne) : `<path d="M${x + w / 2 - 12} ${y + 70} l9 10 l17 -20" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>`;
    s += txt(x + w / 2, y + 160, a.name, { size: n === 2 ? 30 : 15, anchor: 'middle', fill: hl ? '#fff' : C.ink, font: SERIF });
    s += `<rect x="${x + (n === 2 ? 16 : 8)}" y="${y + 190}" width="${w - (n === 2 ? 32 : 16)}" height="34" rx="17" fill="${hl ? C.plumSoft : C.plumTint}"/>`;
    s += txt(x + w / 2, y + 213, a.cost, { size: n === 2 ? 17 : 11, anchor: 'middle', fill: hl ? '#fff' : C.plum, weight: 800 });
  });
  return s;
}
function phoneArt(inner) {
  return `<rect x="190" y="30" width="220" height="440" rx="36" fill="${C.plum}"/><rect x="204" y="48" width="192" height="404" rx="26" fill="${C.petal}"/><rect x="265" y="58" width="70" height="12" rx="6" fill="${C.plum}"/>${inner}`;
}
function monthGrid(x, y, year, month, { cell = 52, mark = {}, shadeDays = [], range = null, title = true } = {}) {
  const names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const first = new Date(Date.UTC(year, month, 1)), days = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  const offset = (first.getUTCDay() + 6) % 7; // Monday first
  let s = title ? txt(x, y, `${names[month]} ${year}`, { size: cell * 0.5, font: SERIF, fill: C.plum }) : '';
  ['M', 'T', 'W', 'T', 'F', 'S', 'S'].forEach((d, i) => { s += txt(x + i * cell + cell / 2, y + cell * 0.75, d, { size: cell * 0.3, anchor: 'middle', fill: C.inkSoft, weight: 800 }); });
  for (let d = 1; d <= days; d++) {
    const idx = offset + d - 1, cx = x + (idx % 7) * cell + cell / 2, cy = y + cell * 1.35 + Math.floor(idx / 7) * cell;
    const wd = new Date(Date.UTC(year, month, d)).getUTCDay();
    const inRange = !range || range(d);
    const shade = shadeDays.includes(wd) && inRange;
    const fill = mark[d] ? mark[d].fill : !inRange ? C.petal : shade ? C.plumTint : C.sageTint;
    s += `<circle cx="${cx}" cy="${cy}" r="${cell * 0.42}" fill="${fill}" stroke="${inRange ? '#fff' : C.line}" stroke-width="2"/>`;
    s += txt(cx, cy + cell * 0.12, d, { size: cell * 0.32, anchor: 'middle', fill: mark[d]?.ink ?? (!inRange ? '#C9B7C0' : C.ink), weight: 700 });
  }
  return s;
}

const HERO_ART = {};
for (const d of [1, 3, 7, 14, 30, 60, 90, 180, 365]) {
  const slug = { 1: '24-hours-sober', 3: '3-days-sober', 7: '1-week-sober', 14: '2-weeks-sober', 30: '30-days-sober', 60: '60-days-sober', 90: '90-days-sober', 180: '6-months-sober', 365: '1-year-sober' }[d];
  HERO_ART[slug] = () => milestoneArt(d);
}
for (const [slug, keys] of Object.entries(COMPARE_APPS)) HERO_ART[slug] = () => compareArt(keys);
HERO_ART['sobriety-app-android'] = () => phoneArt(['iamsober', 'sunflower', 'reframe', 'trydry', 'sobergirl'].map((k, i) => `<rect x="218" y="${92 + i * 70}" width="164" height="56" rx="14" fill="${k === 'sobergirl' ? C.plumTint : '#fff'}" stroke="${C.line}" stroke-width="2"/><circle cx="244" cy="${120 + i * 70}" r="14" fill="${APPS[k].color}"/>${txt(266, 126 + i * 70, APPS[k].name, { size: 15, fill: C.ink })}`).join('')) + bloom(500, 420, 44, C.sage, C.champagne);
HERO_ART['free-sobriety-tracker-app'] = () => `<path d="M120 150 h250 l70 70 l-70 70 h-250 z" fill="${C.sage}"/><circle cx="160" cy="220" r="16" fill="${C.cream}"/>${txt(270, 238, 'FREE', { size: 56, anchor: 'middle', fill: '#fff', font: SERIF })}<rect x="380" y="320" width="140" height="120" rx="20" fill="#fff" stroke="${C.line}" stroke-width="4"/><path d="M420 320 v-30 a30 30 0 0 1 60 0 v30" fill="none" stroke="${C.plumSoft}" stroke-width="10"/><circle cx="450" cy="375" r="12" fill="${C.plumSoft}"/>` + bloom(110, 400, 50, C.rose, C.champagne);
HERO_ART['private-sobriety-tracker'] = () => phoneArt(`<rect x="250" y="150" width="100" height="90" rx="16" fill="${C.plum}"/><path d="M265 150 v-26 a35 35 0 0 1 70 0 v26" fill="none" stroke="${C.plum}" stroke-width="12"/><circle cx="300" cy="190" r="12" fill="${C.champagne}"/>${tree(7, 230, 260, 140)}`);
HERO_ART['money-saved-not-drinking-calculator'] = () => `<path d="M200 140 h200 v40 q40 30 40 90 v150 q0 30 -30 30 h-220 q-30 0 -30 -30 v-150 q0 -60 40 -90 z" fill="#fff" stroke="${C.plumTint}" stroke-width="8"/><rect x="190" y="110" width="220" height="40" rx="14" fill="${C.plumSoft}"/>${[0, 1, 2, 3, 4].map((i) => `<ellipse cx="${300 + (i % 2 ? 30 : -30)}" cy="${420 - i * 34}" rx="70" ry="16" fill="${C.champagne}" stroke="${C.champagneDeep}" stroke-width="3"/>`).join('')}${txt(300, 290, '$', { size: 80, anchor: 'middle', font: SERIF, fill: C.plum })}` + bloom(500, 140, 44, C.rose, C.champagne);
HERO_ART['sobriety-app-with-journal'] = () => `<rect x="110" y="90" width="380" height="330" rx="24" fill="#fff" stroke="${C.plumTint}" stroke-width="8"/><line x1="300" y1="96" x2="300" y2="414" stroke="${C.plumTint}" stroke-width="6"/>${[0, 1, 2, 3].map((i) => `<line x1="140" y1="${170 + i * 50}" x2="${270 - (i === 3 ? 60 : 0)}" y2="${170 + i * 50}" stroke="${C.line}" stroke-width="6" stroke-linecap="round"/>`).join('')}${txt(140, 150, 'Day 12: calmer today.', { size: 15, fill: C.plum, font: SERIF })}${tree(30, 320, 140, 160)}` + bloom(480, 440, 38, C.rose, C.champagne);
HERO_ART['how-to-count-sober-days'] = () => `<line x1="60" y1="280" x2="540" y2="280" stroke="${C.plumTint}" stroke-width="12" stroke-linecap="round"/>${[['Last drink', C.roseDeep], ['Midnight', C.plumSoft], ['Day 1', C.sage], ['Day 2', C.sage], ['Day 3', C.sageDeep]].map(([t, f], i) => `<circle cx="${80 + i * 110}" cy="280" r="26" fill="${f}" stroke="#fff" stroke-width="5"/>${txt(80 + i * 110, i % 2 ? 350 : 230, t, { size: 19, anchor: 'middle', weight: 800 })}`).join('')}` + bloom(300, 440, 40, C.rose, C.champagne);
HERO_ART['sober-mom'] = () => `<rect x="60" y="360" width="480" height="20" rx="10" fill="${C.plumSoft}"/><path d="M200 250 h120 v90 q0 30 -30 30 h-60 q-30 0 -30 -30 z" fill="#fff" stroke="${C.plum}" stroke-width="7"/><path d="M320 270 q40 0 40 30 q0 30 -40 30" fill="none" stroke="${C.plum}" stroke-width="7"/>${[0, 1, 2].map((i) => `<path d="M${225 + i * 30} 230 q-10 -20 0 -40 q10 -20 0 -40" fill="none" stroke="${C.plumTint}" stroke-width="5" stroke-linecap="round"/>`).join('')}<path d="M440 60 a60 60 0 1 0 50 90 a48 48 0 1 1 -50 -90 z" fill="${C.champagne}"/><rect x="390" y="230" width="120" height="120" rx="10" fill="${C.roseTint}" transform="rotate(6 450 290)"/>${bloom(450, 290, 30, C.rose, C.champagne)}${tree(14, 70, 200, 160)}`;
HERO_ART['30-day-no-alcohol-challenge'] = () => { let s = ''; for (let i = 0; i < 30; i++) { const x = 80 + (i % 6) * 88, y = 80 + Math.floor(i / 6) * 80; s += `<circle cx="${x}" cy="${y}" r="30" fill="${i < 21 ? C.sage : C.sageTint}" stroke="#fff" stroke-width="4"/>${i < 21 ? `<path d="M${x - 10} ${y} l7 8 l14 -16" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>` : txt(x, y + 7, i + 1, { size: 18, anchor: 'middle', fill: C.sageDeep })}`; } return s + bloom(520, 460, 40, C.rose, C.champagne); };
HERO_ART['dry-february'] = () => monthGrid(115, 70, 2027, 1, { cell: 53, mark: { 14: { fill: C.rose, ink: '#fff' } }, shadeDays: [0, 6] });
HERO_ART['alcohol-free-for-lent'] = () => monthGrid(10, 90, 2027, 1, { cell: 40, shadeDays: [0], range: (d) => d >= 10, mark: { 10: { fill: C.plumSoft, ink: '#fff' } } }) + monthGrid(310, 90, 2027, 2, { cell: 40, shadeDays: [0], range: (d) => d <= 28, mark: { 28: { fill: C.champagne, ink: C.plum } } });
HERO_ART['dry-july'] = () => monthGrid(115, 70, 2027, 6, { cell: 53, shadeDays: [0, 6], mark: { 31: { fill: C.roseDeep, ink: '#fff' } } });
HERO_ART['sober-september'] = () => monthGrid(115, 70, 2027, 8, { cell: 53, shadeDays: [0, 6], mark: { 6: { fill: C.champagne, ink: C.plum } } });
HERO_ART['sobriety-anniversary-messages'] = () => `<rect x="90" y="70" width="420" height="380" rx="24" fill="#fff" stroke="${C.plumTint}" stroke-width="6" transform="rotate(-3 300 260)"/>${badge(365, 225, 110, 150)}${txt(300, 320, 'A year of choosing', { size: 28, anchor: 'middle', font: SERIF, fill: C.plum })}${txt(300, 356, 'yourself.', { size: 28, anchor: 'middle', font: SERIF, fill: C.plum })}` + bloom(480, 430, 40, C.rose, C.champagne);

/* ------------------------------------------------------------------ figures (data-rich, per page) */

function milestoneCard(days, label) {
  const tier = TIERS[TIER_OF[days]];
  let s = bg(1200, 675, 'fb');
  s += `<defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${T.skyTop}"/><stop offset="1" stop-color="${C.cream}"/></linearGradient></defs>`;
  s += `<rect x="600" y="40" width="560" height="595" rx="36" fill="url(#sky)" stroke="${C.line}" stroke-width="3"/>`;
  s += `<circle cx="1050" cy="130" r="46" fill="${C.champagne}" opacity="0.7"/><path d="M600 520 q140 -60 280 -10 t280 -20 v145 h-560 z" fill="${T.hillFar}"/><path d="M600 560 q160 -40 300 0 t260 -10 v85 h-560 z" fill="${T.hillNear}"/>`;
  s += tree(days, 660, 95, 440);
  s += badge(days, 70, 90, 230);
  s += txt(70, 400, `Day ${days}`, { size: 72, font: SERIF, fill: C.plum });
  s += txt(70, 450, label === `${days} days` ? 'in Sober Girl' : `${label} in Sober Girl`, { size: 28, fill: C.inkSoft, weight: 600 });
  s += `<rect x="70" y="490" width="${(STAGE_NAMES[days].length + 6) * 12.5 + 60}" height="48" rx="24" fill="${tier.inner}" stroke="${tier.edge}" stroke-opacity="0.4" stroke-width="2"/>`;
  s += txt(98, 522, `Tree: ${STAGE_NAMES[days]}`, { size: 22, fill: tier.ink, weight: 800 });
  s += wordmark(80, 610);
  return svg(1200, 675, s, `Day ${days} badge and the ${STAGE_NAMES[days]} tree in Sober Girl`);
}

function savingsChart(days, label) {
  const spends = [25, 50, 100], vals = spends.map((w) => (w / 7) * days), max = Math.max(...vals);
  let s = bg(1200, 600, 'sb');
  s += txt(70, 95, `Money saved by ${label} without alcohol`, { size: 40, font: SERIF, fill: C.plum });
  s += txt(70, 135, 'Weekly spend ÷ 7 × days. Illustrative.', { size: 22, fill: C.inkSoft, weight: 600 });
  spends.forEach((w, i) => {
    const y = 200 + i * 115, bw = Math.max(8, (vals[i] / max) * 760);
    s += txt(70, y + 46, `$${w} a week`, { size: 26, weight: 700 });
    s += `<rect x="290" y="${y}" width="800" height="70" rx="35" fill="${C.petal}" stroke="${C.line}" stroke-width="2"/>`;
    s += `<rect x="290" y="${y}" width="${bw + 40}" height="70" rx="35" fill="${[C.sage, C.rose, C.plumSoft][i]}"/>`;
    const v = `$${Math.round(vals[i]).toLocaleString('en-US')}`;
    s += bw > 160 ? txt(290 + bw + 16, y + 46, v, { size: 30, anchor: 'end', fill: '#fff', font: SERIF }) : txt(290 + bw + 60, y + 46, v, { size: 30, fill: C.plum, font: SERIF });
  });
  s += wordmark(80, 565);
  return svg(1200, 600, s, `Money saved after ${label} at $25, $50 and $100 a week`);
}

function compareCard(slug, title) {
  const keys = COMPARE_APPS[slug];
  const n = keys.length;
  let s = bg(1200, 675, 'cb');
  s += txt(70, 90, title.length > 52 ? title.slice(0, title.lastIndexOf(':') > 0 ? title.lastIndexOf(':') : 52) : title, { size: 36, font: SERIF, fill: C.plum });
  s += txt(70, 128, 'From each app’s own store listings, October 2026', { size: 20, fill: C.inkSoft, weight: 600 });
  const rows = [['Cost', (a) => a.cost], ['Built around', (a) => a.around], ['Android', () => 'Yes'], ['iPhone', (a, k) => (k === 'sobergirl' ? 'Coming soon' : 'Yes')]];
  const colW = (1200 - 140 - 200) / n, x0 = 270;
  keys.forEach((k, i) => {
    const a = APPS[k], x = x0 + i * colW, hl = k === 'sobergirl';
    s += `<rect x="${x + 6}" y="160" width="${colW - 12}" height="${80 + rows.length * 92}" rx="22" fill="${hl ? C.plumTint : '#fff'}" stroke="${hl ? C.plumSoft : C.line}" stroke-width="${hl ? 3 : 2}"/>`;
    s += `<circle cx="${x + colW / 2}" cy="205" r="18" fill="${a.color}"/>`;
    s += txt(x + colW / 2, 250, a.name, { size: n === 2 ? 30 : 20, anchor: 'middle', font: SERIF, fill: C.plum });
    rows.forEach(([, f], r) => {
      const v = f(a, k);
      s += txt(x + colW / 2, 318 + r * 92, v, { size: n === 2 ? 24 : v.length > 14 ? 14 : 17, anchor: 'middle', weight: 700, fill: v === 'Coming soon' ? C.roseDeep : C.ink });
    });
  });
  rows.forEach(([name], r) => { s += txt(70, 318 + r * 92, name, { size: 20, fill: C.inkSoft, weight: 800 }); });
  s += wordmark(80, 645);
  return svg(1200, 675, s, title);
}

function androidChart() {
  const rows = [['I Am Sober', '10M+', 7], ['Sunflower', '500K+', 5.7], ['Reframe', '500K+', 5.7], ['Try Dry', '100K+', 5], ['Sober Girl', 'New, Oct 2026', 0.7]];
  let s = bg(1200, 675, 'ab');
  s += txt(70, 95, 'Google Play downloads', { size: 42, font: SERIF, fill: C.plum });
  s += txt(70, 135, 'Download bands from each listing, 10 October 2026. Bar length is on a log scale.', { size: 21, fill: C.inkSoft, weight: 600 });
  rows.forEach(([n, v, lg], i) => {
    const y = 190 + i * 88, w = (lg / 7) * 700;
    s += txt(70, y + 40, n, { size: 26 });
    s += `<rect x="300" y="${y}" width="${Math.max(w, 30)}" height="58" rx="29" fill="${n === 'Sober Girl' ? C.plum : [C.plumSoft, C.champagneDeep, C.roseDeep, C.sageDeep][i]}"/>`;
    s += txt(300 + Math.max(w, 30) + 20, y + 39, v, { size: 26, font: SERIF, fill: C.plum });
  });
  s += wordmark(80, 645);
  return svg(1200, 675, s, 'Android sober apps by Google Play downloads');
}

function freeChart() {
  const rows = [['Try Dry', 1, 'Everything free'], ['I Am Sober', 0.7, 'Tracker free, Sober Plus paid'], ['Sober Girl', 0.7, 'Tracker free, Plus paid'], ['Sunflower', 0.6, 'Counter free, AI sponsor paid'], ['Reframe', 0.1, '7-day trial, then paid']];
  let s = bg(1200, 675, 'frb');
  s += txt(70, 95, 'How much of each app is free', { size: 42, font: SERIF, fill: C.plum });
  s += txt(70, 135, 'A rough picture from each listing, 10 October 2026. Green is free, plum is paid.', { size: 21, fill: C.inkSoft, weight: 600 });
  rows.forEach(([n, f, note], i) => {
    const y = 185 + i * 90;
    s += txt(70, y + 40, n, { size: 26 });
    s += `<rect x="290" y="${y}" width="560" height="56" rx="28" fill="${C.plumSoft}"/><rect x="290" y="${y}" width="${560 * f}" height="56" rx="28" fill="${C.sage}"/>`;
    s += txt(870, y + 37, note, { size: 19, fill: C.ink, weight: 600 });
  });
  s += wordmark(80, 645);
  return svg(1200, 675, s, 'How much of each sober app is free');
}

function privacyGrid() {
  const rows = [['I Am Sober', true, true], ['Reframe', false, true], ['Sunflower', false, false], ['Try Dry', false, true], ['Sober Girl', false, true]];
  let s = bg(1200, 675, 'pb');
  s += txt(70, 95, 'What each Google Play label declares', { size: 40, font: SERIF, fill: C.plum });
  s += txt(70, 135, 'Developers’ own Data safety declarations, 10 October 2026.', { size: 21, fill: C.inkSoft, weight: 600 });
  s += txt(640, 190, 'Shares data with third parties', { size: 20, anchor: 'middle', fill: C.inkSoft, weight: 800 });
  s += txt(960, 190, 'Collects any data', { size: 20, anchor: 'middle', fill: C.inkSoft, weight: 800 });
  const chip = (cx, cy, yes) => `<rect x="${cx - 70}" y="${cy - 26}" width="140" height="52" rx="26" fill="${yes ? C.roseTint : C.sageTint}" stroke="${yes ? C.roseDeep : C.sageDeep}" stroke-opacity="0.5" stroke-width="2"/>${txt(cx, cy + 9, yes ? 'Yes' : 'No', { size: 24, anchor: 'middle', fill: yes ? C.roseDeep : C.sageDeep, weight: 800 })}`;
  rows.forEach(([n, share, collect], i) => {
    const y = 250 + i * 76;
    s += `<line x1="70" y1="${y + 38}" x2="1130" y2="${y + 38}" stroke="${C.line}" stroke-width="2"/>`;
    s += txt(70, y + 9, n, { size: 26 });
    s += chip(640, y, share) + chip(960, y, collect);
  });
  s += wordmark(80, 645);
  return svg(1200, 675, s, 'Sober app privacy declarations on Google Play');
}

function moneyLines() {
  const spends = [[20, C.sage], [60, C.rose], [100, C.plumSoft]];
  let s = bg(1200, 600, 'mb');
  s += txt(70, 85, 'Money saved over a year without alcohol', { size: 38, font: SERIF, fill: C.plum });
  const X = (d) => 140 + (d / 365) * 800, Y = (v) => 520 - (v / 5214) * 360;
  [0, 1000, 2000, 3000, 4000, 5000].forEach((v) => { s += `<line x1="140" y1="${Y(v)}" x2="940" y2="${Y(v)}" stroke="${C.line}" stroke-width="2"/>${txt(126, Y(v) + 7, `$${v.toLocaleString('en-US')}`, { size: 17, anchor: 'end', fill: C.inkSoft, weight: 600 })}`; });
  [[30, '30 d'], [90, '90 d'], [182, '6 mo'], [365, '1 yr']].forEach(([d, t]) => { s += txt(X(d), 552, t, { size: 18, anchor: 'middle', fill: C.inkSoft, weight: 700 }); });
  spends.forEach(([w, col]) => {
    const end = (w / 7) * 365;
    s += `<line x1="${X(0)}" y1="${Y(0)}" x2="${X(365)}" y2="${Y(end)}" stroke="${col}" stroke-width="8" stroke-linecap="round"/><circle cx="${X(365)}" cy="${Y(end)}" r="10" fill="${col}"/>`;
    s += txt(X(365) + 18, Y(end) + 8, `$${w}/wk: $${Math.round(end).toLocaleString('en-US')}`, { size: 18, fill: C.ink });
  });
  return svg(1200, 600, s, 'Money saved over a year at $20, $60 and $100 a week');
}

function journalCard() {
  let s = bg(1200, 675, 'jb');
  s += txt(70, 95, 'A journal line becomes a blossom', { size: 42, font: SERIF, fill: C.plum });
  s += txt(70, 135, 'In Sober Girl Plus, each short entry adds a blossom to your tree.', { size: 22, fill: C.inkSoft, weight: 600 });
  s += `<rect x="70" y="200" width="460" height="300" rx="28" fill="#fff" stroke="${C.line}" stroke-width="3"/>`;
  s += txt(105, 255, 'Day 30', { size: 22, fill: C.inkSoft, weight: 800 });
  s += txt(105, 310, 'Calmer morning. Walked instead', { size: 26, font: SERIF, fill: C.ink });
  s += txt(105, 348, 'of the 6pm glass.', { size: 26, font: SERIF, fill: C.ink });
  s += `<rect x="105" y="390" width="150" height="46" rx="23" fill="${C.sageTint}"/>${txt(180, 421, 'Mood: good', { size: 19, anchor: 'middle', fill: C.sageDeep, weight: 800 })}`;
  s += txt(400, 470, '48 / 140', { size: 18, fill: C.inkSoft, weight: 700 });
  s += `<path d="M560 350 h90" stroke="${C.plumSoft}" stroke-width="8" stroke-linecap="round"/><path d="M640 330 l26 20 l-26 20" fill="none" stroke="${C.plumSoft}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>`;
  s += tree(30, 700, 150, 420);
  s += wordmark(80, 645);
  return svg(1200, 675, s, 'A Sober Girl journal entry adding a blossom to the tree');
}

function countTimeline() {
  let s = bg(1200, 500, 'tb');
  s += txt(70, 80, 'From sober date to day count', { size: 38, font: SERIF, fill: C.plum });
  const pts = [['Fri 9pm', 'Last drink', C.roseDeep], ['Midnight', 'Sober date starts', C.plumSoft], ['Sat midnight', 'Day 1 complete', C.sage], ['Sun midnight', 'Day 2', C.sage], ['Mon midnight', 'Day 3', C.sageDeep]];
  s += `<line x1="120" y1="270" x2="1080" y2="270" stroke="${C.plumTint}" stroke-width="14" stroke-linecap="round"/>`;
  pts.forEach(([t, d, f], i) => {
    const x = 130 + i * 235;
    s += `<circle cx="${x}" cy="270" r="30" fill="${f}" stroke="#fff" stroke-width="6"/>`;
    s += txt(x, 200, t, { size: 22, anchor: 'middle', weight: 800 });
    s += txt(x, 345, d, { size: 20, anchor: 'middle', fill: C.inkSoft, weight: 600 });
  });
  s += txt(70, 440, 'Common convention: your sober date is the first full day without a drink.', { size: 21, fill: C.inkSoft, weight: 600 });
  return svg(1200, 500, s, 'Timeline from a last drink to day three');
}

function momCard() {
  let s = bg(1200, 675, 'mo');
  s += txt(70, 95, 'An alcohol-free evening routine', { size: 42, font: SERIF, fill: C.plum });
  const steps = [['Bedtime', 'Kids down'], ['New drink', 'Same glass, same chair'], ['Check in', 'One tap, ten seconds'], ['Your tree', 'Grows with every day']];
  steps.forEach(([t, d], i) => {
    const x = 70 + i * 275;
    s += `<rect x="${x}" y="170" width="245" height="380" rx="28" fill="#fff" stroke="${C.line}" stroke-width="3"/>`;
    s += txt(x + 122, 490, t, { size: 26, anchor: 'middle', font: SERIF, fill: C.plum });
    s += txt(x + 122, 525, d, { size: 17, anchor: 'middle', fill: C.inkSoft, weight: 600 });
  });
  s += `<path d="M230 230 a55 55 0 1 0 45 80 a44 44 0 1 1 -45 -80 z" fill="${C.champagne}"/>`;
  s += `<path d="M420 260 h100 v80 q0 26 -26 26 h-48 q-26 0 -26 -26 z" fill="${C.roseTint}" stroke="${C.plum}" stroke-width="6"/><path d="M520 280 q34 0 34 26 q0 26 -34 26" fill="none" stroke="${C.plum}" stroke-width="6"/>`;
  s += `<rect x="740" y="220" width="110" height="200" rx="20" fill="${C.plum}"/><rect x="750" y="234" width="90" height="172" rx="12" fill="${C.petal}"/><circle cx="795" cy="320" r="28" fill="${C.sage}"/><path d="M782 320 l9 10 l17 -20" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`;
  s += tree(60, 905, 190, 230);
  s += wordmark(80, 645);
  return svg(1200, 675, s, 'An alcohol-free evening routine in four steps');
}

function calendarFigure(slug) {
  let s = bg(1200, 760, 'cal');
  const head = (t, sub) => txt(70, 90, t, { size: 40, font: SERIF, fill: C.plum }) + txt(70, 128, sub, { size: 21, fill: C.inkSoft, weight: 600 });
  if (slug === '30-day-no-alcohol-challenge') {
    s += head('30-day no alcohol challenge', 'Tick a circle each day. Start any day.');
    for (let i = 0; i < 30; i++) {
      const col = i % 7, row = Math.floor(i / 7), x = 230 + col * 120, y = 220 + row * 112;
      s += `<circle cx="${x}" cy="${y}" r="44" fill="${C.sageTint}" stroke="${C.sage}" stroke-width="3"/>${txt(x, y + 11, i + 1, { size: 30, anchor: 'middle', fill: C.sageDeep, font: SERIF })}`;
    }
    ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Finish'].forEach((w, r) => { s += txt(70, 228 + r * 112, w, { size: 22, fill: C.plum, weight: 800 }); });
    s += bloom(1060, 670, 50, C.rose, C.champagne);
  } else if (slug === 'dry-february') {
    s += head('Dry February 2027', 'Monday 1 to Sunday 28 February: exactly four weeks.');
    s += monthGrid(250, 190, 2027, 1, { cell: 96, title: false, shadeDays: [0, 6], mark: { 14: { fill: C.rose, ink: '#fff' } } });
    s += txt(1000, 700, '♥ 14 Feb', { size: 24, fill: C.roseDeep, weight: 800 });
  } else if (slug === 'alcohol-free-for-lent') {
    s += head('Lent 2027', 'Ash Wednesday 10 February to Holy Saturday 27 March. Sundays shaded.');
    s += monthGrid(70, 210, 2027, 1, { cell: 70, shadeDays: [0], range: (d) => d >= 10, mark: { 10: { fill: C.plumSoft, ink: '#fff' } } });
    s += monthGrid(640, 210, 2027, 2, { cell: 70, shadeDays: [0], range: (d) => d <= 27, mark: { 28: { fill: C.champagne, ink: C.plum } } });
    s += txt(640, 735, 'Easter Sunday 28 March', { size: 20, fill: C.champagneDeep, weight: 800 });
  } else if (slug === 'dry-july') {
    s += head('Dry July 2027', 'Thursday 1 to Saturday 31 July. Weekends shaded: five of them.');
    s += monthGrid(250, 175, 2027, 6, { cell: 96, title: false, shadeDays: [0, 6] });
  } else if (slug === 'sober-september') {
    s += head('Sober September 2027', 'Wednesday 1 to Thursday 30 September. Labor Day marked.');
    s += monthGrid(250, 175, 2027, 8, { cell: 96, title: false, shadeDays: [0, 6], mark: { 6: { fill: C.champagne, ink: C.plum } } });
  } else throw new Error(`No calendar for ${slug}`);
  return svg(1200, 760, s, `${slug} calendar`);
}

function anniversaryCard() {
  let s = bg(1200, 675, 'an');
  s += txt(70, 95, 'A message for every milestone', { size: 42, font: SERIF, fill: C.plum });
  const items = [[30, 'A whole month.', 'That is not luck, that is you.'], [90, 'Ninety days.', 'You have built something real.'], [180, 'Half a year.', 'Celebrate it loudly.'], [365, 'A year of choosing', 'yourself. So proud of you.']];
  items.forEach(([d, a, b], i) => {
    const x = 70 + i * 275;
    s += `<rect x="${x}" y="150" width="245" height="420" rx="28" fill="#fff" stroke="${C.line}" stroke-width="3"/>`;
    s += badge(d, x + 42, 180, 160);
    s += txt(x + 122, 410, a, { size: 22, anchor: 'middle', font: SERIF, fill: C.plum });
    s += txt(x + 122, 445, b, { size: 16, anchor: 'middle', fill: C.inkSoft, weight: 600 });
  });
  s += wordmark(80, 640);
  return svg(1200, 675, s, 'Sobriety anniversary messages by milestone');
}

/* ------------------------------------------------------------------ dispatch */

const MILESTONE_DAYS = { '24-hours-sober': [1, '24 hours'], '3-days-sober': [3, '3 days'], '1-week-sober': [7, '1 week'], '2-weeks-sober': [14, '2 weeks'], '30-days-sober': [30, '30 days'], '60-days-sober': [60, '60 days'], '90-days-sober': [90, '90 days'], '6-months-sober': [180, '6 months'], '1-year-sober': [365, '1 year'] };
const SINGLE = {
  'sobriety-app-android-card': androidChart,
  'free-sobriety-tracker-app-card': freeChart,
  'private-sobriety-tracker-card': privacyGrid,
  'money-saved-not-drinking-calculator-card': moneyLines,
  'sobriety-app-with-journal-card': journalCard,
  'how-to-count-sober-days-card': countTimeline,
  'sober-mom-card': momCard,
  'sobriety-anniversary-messages-card': anniversaryCard,
};


/* ------------------------------------------------------------------ golden pages (keyword research 2026-10-10) */

const TL = [['8 h', C.roseDeep], ['3 d', C.rose], ['1 w', C.champagne], ['2 w', C.sage], ['30 d', C.sageDeep], ['90 d', C.plumSoft], ['6 m', C.plum], ['1 y', C.champagneDeep]];

HERO_ART['what-happens-when-you-stop-drinking-alcohol'] = () =>
  `<path d="M60 330 C 160 250, 230 400, 320 300 S 480 200, 545 150" fill="none" stroke="${C.plumTint}" stroke-width="16" stroke-linecap="round"/>` +
  TL.map(([t, f], i) => { const x = 70 + i * 64, y = 330 - Math.sin(i / 7 * Math.PI) * 70 - i * 18; return `<circle cx="${x}" cy="${y}" r="24" fill="${f}" stroke="#fff" stroke-width="5"/>${txt(x, y + 6, t, { size: 15, anchor: 'middle', fill: '#fff', weight: 800 })}`; }).join('') +
  bloom(300, 450, 46, C.rose, C.champagne);

HERO_ART['sobriety-counter'] = () =>
  [['92', 'days'], ['04', 'hours'], ['17', 'min'], ['38', 'sec']].map(([n, l], i) => { const x = 60 + (i % 2) * 250, y = 90 + Math.floor(i / 2) * 190; return `<rect x="${x}" y="${y}" width="230" height="170" rx="26" fill="${C.plum}"/>${txt(x + 115, y + 98, n, { size: 78, anchor: 'middle', font: SERIF, fill: '#fff' })}${txt(x + 115, y + 140, l, { size: 20, anchor: 'middle', fill: C.plumTint, weight: 800, ls: 2 })}`; }).join('') +
  `<rect x="60" y="480" width="480" height="14" rx="7" fill="${C.plumTint}"/><rect x="60" y="480" width="250" height="14" rx="7" fill="${C.sage}"/>` + bloom(500, 70, 36, C.rose, C.champagne);

HERO_ART['lapse-vs-relapse'] = () =>
  `<path d="M70 400 H210 Q260 400 260 350 V300" fill="none" stroke="${C.plumTint}" stroke-width="18" stroke-linecap="round"/>` +
  `<circle cx="260" cy="290" r="26" fill="${C.champagne}" stroke="#fff" stroke-width="5"/>${txt(260, 297, '1', { size: 20, anchor: 'middle', weight: 800 })}` +
  `<path d="M260 264 Q 260 180 360 170 H520" fill="none" stroke="${C.rose}" stroke-width="16" stroke-linecap="round" stroke-dasharray="2 26" opacity="0.9"/>` +
  `<path d="M260 264 Q 260 380 360 395 H520" fill="none" stroke="${C.sage}" stroke-width="16" stroke-linecap="round"/>` +
  `<rect x="400" y="130" width="170" height="64" rx="32" fill="${C.roseTint}"/>${txt(485, 170, 'guilt', { size: 24, anchor: 'middle', fill: C.roseDeep, weight: 800 })}` +
  `<rect x="400" y="360" width="170" height="64" rx="32" fill="${C.sageTint}"/>${txt(485, 400, 'learn', { size: 24, anchor: 'middle', fill: C.sageDeep, weight: 800 })}` + bloom(110, 160, 40, C.rose, C.champagne);

HERO_ART['100-days-sober'] = () =>
  `<ellipse cx="300" cy="470" rx="250" ry="30" fill="${T.hillNear}" opacity="0.8"/>${tree(90, 110, 60, 420)}${badge(100, 410, 40, 170, 'deep', '100')}`;
for (const [slug, d, lab] of [['2-years-sober', 365, '2y'], ['3-years-sober', 365, '3y'], ['5-years-sober', 365, '5y']]) {
  HERO_ART[slug] = () => `<ellipse cx="300" cy="470" rx="250" ry="30" fill="${T.hillNear}" opacity="0.8"/>${tree(d, 110, 60, 420)}${badge(365, 410, 40, 170, 'golden', lab)}`;
}
HERO_ART['months-sober'] = () =>
  [2, 3, 4, 5, 9, 18].map((m, i) => { const x = 60 + (i % 3) * 170, y = 130 + Math.floor(i / 3) * 190; return `<rect x="${x}" y="${y}" width="150" height="160" rx="24" fill="#fff" stroke="${C.line}" stroke-width="3"/>${txt(x + 75, y + 78, m, { size: 64, anchor: 'middle', font: SERIF, fill: C.plum })}${txt(x + 75, y + 118, 'months', { size: 18, anchor: 'middle', fill: C.inkSoft, weight: 800 })}`; }).join('') + bloom(300, 60, 30, C.rose, C.champagne);
HERO_ART['years-sober'] = () =>
  `<ellipse cx="300" cy="470" rx="250" ry="30" fill="${T.hillNear}" opacity="0.8"/>${tree(365, 160, 40, 420)}` +
  [4, 7, 10].map((y, i) => badge(365, 30 + i * 120, 330 + (i === 1 ? -20 : 0), 110, 'golden', `${y}y`)).join('');
HERO_ART['mindful-drinking'] = () =>
  `<path d="M220 200 h160 q6 120 -80 150 q-86 -30 -80 -150 z" fill="${C.petal}" stroke="${C.plum}" stroke-width="8"/><path d="M232 280 h136 q-14 52 -68 70 q-54 -18 -68 -70 z" fill="${C.rose}" opacity="0.85"/><line x1="300" y1="350" x2="300" y2="440" stroke="${C.plum}" stroke-width="10" stroke-linecap="round"/><ellipse cx="300" cy="446" rx="64" ry="12" fill="${C.plum}"/>` +
  [[130, 120], [250, 70], [400, 90], [480, 170], [90, 230]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="30" fill="${C.plumTint}"/>${txt(x, y + 11, '?', { size: 34, anchor: 'middle', font: SERIF, fill: C.plum })}`).join('');
HERO_ART['alcohol-face'] = () =>
  `<ellipse cx="300" cy="260" rx="150" ry="190" fill="${C.roseTint}" stroke="${C.plum}" stroke-width="8"/><circle cx="240" cy="270" r="30" fill="${C.rose}" opacity="0.55"/><circle cx="360" cy="270" r="30" fill="${C.rose}" opacity="0.55"/><path d="M250 340 Q300 380 350 340" fill="none" stroke="${C.plum}" stroke-width="8" stroke-linecap="round"/><circle cx="250" cy="210" r="10" fill="${C.plum}"/><circle cx="350" cy="210" r="10" fill="${C.plum}"/>` +
  `<circle cx="470" cy="110" r="46" fill="${C.champagne}"/>${txt(470, 128, '?', { size: 60, anchor: 'middle', font: SERIF, fill: C.plum })}` + bloom(110, 440, 34, C.sage, C.champagne);

function timelineFigure() {
  let s = bg(1200, 560, 'tl');
  s += txt(70, 85, 'What is documented after you stop drinking', { size: 40, font: SERIF, fill: C.plum });
  s += txt(70, 122, 'Each stage has its own page. Sources are on the guide.', { size: 21, fill: C.inkSoft, weight: 600 });
  const labels = ['Withdrawal can start', 'Symptoms peak', 'Sleep shifts', 'Mood may settle', 'One month studied', 'Initial stage ends', 'Early stage', 'Sustained stage'];
  s += `<line x1="110" y1="300" x2="1090" y2="300" stroke="${C.plumTint}" stroke-width="14" stroke-linecap="round"/>`;
  TL.forEach(([t, f], i) => {
    const x = 120 + i * 137, up = i % 2 === 0;
    s += `<circle cx="${x}" cy="300" r="34" fill="${f}" stroke="#fff" stroke-width="6"/>${txt(x, 310, t, { size: 21, anchor: 'middle', fill: '#fff', weight: 800 })}`;
    s += txt(x, up ? 225 : 385, labels[i], { size: 17, anchor: 'middle', fill: C.ink, weight: 700 });
  });
  s += wordmark(80, 520);
  return svg(1200, 560, s, 'Timeline of what is documented after you stop drinking alcohol');
}

function counterFigure() {
  let s = bg(1200, 560, 'cf');
  s += txt(70, 85, 'A live sober counter', { size: 40, font: SERIF, fill: C.plum });
  [['92', 'days'], ['04', 'hours'], ['17', 'minutes'], ['38', 'seconds']].forEach(([n, l], i) => {
    const x = 70 + i * 265;
    s += `<rect x="${x}" y="150" width="245" height="200" rx="30" fill="${C.plum}"/>${txt(x + 122, 270, n, { size: 100, anchor: 'middle', font: SERIF, fill: '#fff' })}${txt(x + 122, 322, l.toUpperCase(), { size: 20, anchor: 'middle', fill: C.plumTint, weight: 800, ls: 3 })}`;
  });
  s += `<rect x="70" y="400" width="1060" height="22" rx="11" fill="${C.plumTint}"/><rect x="70" y="400" width="${1060 * ((92 - 90) / 90 + 0.02)}" height="22" rx="11" fill="${C.sage}"/>`;
  s += txt(70, 460, 'Next badge in the app: day 180', { size: 22, fill: C.inkSoft, weight: 700 });
  s += wordmark(80, 530);
  return svg(1200, 560, s, 'Sobriety counter showing 92 days, 4 hours, 17 minutes and 38 seconds');
}

function relapseFigure() {
  let s = bg(1200, 560, 'rl');
  s += txt(70, 85, 'After a slip, the reaction matters', { size: 40, font: SERIF, fill: C.plum });
  s += txt(70, 122, 'Relapse prevention model, NIAAA journal, 1999', { size: 21, fill: C.inkSoft, weight: 600 });
  s += `<rect x="70" y="240" width="250" height="110" rx="26" fill="${C.champagne}"/>${txt(195, 305, 'A lapse', { size: 34, anchor: 'middle', font: SERIF, fill: C.plum })}`;
  s += `<path d="M330 295 C 420 295 440 190 520 190" fill="none" stroke="${C.rose}" stroke-width="10" stroke-linecap="round"/><path d="M330 295 C 420 295 440 400 520 400" fill="none" stroke="${C.sage}" stroke-width="10" stroke-linecap="round"/>`;
  s += `<rect x="520" y="140" width="560" height="110" rx="26" fill="${C.roseTint}" stroke="${C.roseDeep}" stroke-opacity="0.4" stroke-width="2"/>${txt(548, 186, '“I am a failure”', { size: 28, font: SERIF, fill: C.roseDeep })}${txt(548, 224, 'Guilt, then more drinking to escape it', { size: 20, fill: C.ink, weight: 600 })}`;
  s += `<rect x="520" y="350" width="560" height="110" rx="26" fill="${C.sageTint}" stroke="${C.sageDeep}" stroke-opacity="0.4" stroke-width="2"/>${txt(548, 396, '“That situation beat my plan”', { size: 28, font: SERIF, fill: C.sageDeep })}${txt(548, 434, 'Learn from it and carry on', { size: 20, fill: C.ink, weight: 600 })}`;
  s += wordmark(80, 530);
  return svg(1200, 560, s, 'Two paths after a slip: guilt and more drinking, or learning and continuing');
}

function day100Card() {
  const tier = TIERS.deep;
  let s = bg(1200, 675, 'd1');
  s += `<defs><linearGradient id="sky100" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${T.skyTop}"/><stop offset="1" stop-color="${C.cream}"/></linearGradient></defs>`;
  s += `<rect x="600" y="40" width="560" height="595" rx="36" fill="url(#sky100)" stroke="${C.line}" stroke-width="3"/><circle cx="1050" cy="130" r="46" fill="${C.champagne}" opacity="0.7"/><path d="M600 520 q140 -60 280 -10 t280 -20 v145 h-560 z" fill="${T.hillFar}"/><path d="M600 560 q160 -40 300 0 t260 -10 v85 h-560 z" fill="${T.hillNear}"/>`;
  s += tree(90, 660, 95, 440);
  s += badge(100, 70, 90, 230, 'deep', '100');
  s += txt(70, 400, 'Day 100', { size: 72, font: SERIF, fill: C.plum });
  s += txt(70, 450, 'Between the 90 and 180 day badges', { size: 26, fill: C.inkSoft, weight: 600 });
  s += `<rect x="70" y="490" width="420" height="48" rx="24" fill="${tier.inner}" stroke="${tier.edge}" stroke-opacity="0.4" stroke-width="2"/>${txt(98, 522, 'Tree: Flowering until day 180', { size: 22, fill: tier.ink, weight: 800 })}`;
  s += wordmark(80, 610);
  return svg(1200, 675, s, 'Day 100: a Flowering tree between the 90-day and 180-day badges');
}

function monthsFigure() {
  let s = bg(1200, 500, 'mf');
  s += txt(70, 80, 'Months to days, and the nearest badge', { size: 38, font: SERIF, fill: C.plum });
  const items = [[2, 60, '60'], [3, 90, '90'], [4, 120, '90'], [5, 150, '90'], [9, 270, '180'], [18, 540, '365']];
  items.forEach(([m, d, b], i) => {
    const x = 70 + i * 178;
    s += `<rect x="${x}" y="130" width="160" height="290" rx="26" fill="#fff" stroke="${C.line}" stroke-width="3"/>`;
    s += txt(x + 80, 215, m, { size: 72, anchor: 'middle', font: SERIF, fill: C.plum });
    s += txt(x + 80, 250, 'months', { size: 18, anchor: 'middle', fill: C.inkSoft, weight: 800 });
    s += txt(x + 80, 310, `${d} days`, { size: 26, anchor: 'middle', weight: 700 });
    s += `<rect x="${x + 16}" y="350" width="128" height="40" rx="20" fill="${C.plumTint}"/>${txt(x + 80, 377, `badge ${b}`, { size: 18, anchor: 'middle', fill: C.plum, weight: 800 })}`;
  });
  s += txt(70, 462, 'Using 30-day months. Sober Girl badges: 1, 3, 7, 14, 30, 60, 90, 180, 365.', { size: 19, fill: C.inkSoft, weight: 600 });
  return svg(1200, 500, s, 'Months sober converted to days with the nearest Sober Girl badge');
}

function mindfulCard() {
  let s = bg(1200, 675, 'mc');
  s += txt(70, 90, 'Five questions before you pour', { size: 42, font: SERIF, fill: C.plum });
  const qs = ['Do I want this, or is it 6pm?', 'What am I feeling right now?', 'How many, and when will I stop?', 'Would I want it alcohol-free?', 'How will I feel tomorrow?'];
  qs.forEach((q, i) => {
    const y = 150 + i * 92;
    s += `<rect x="70" y="${y}" width="1060" height="74" rx="37" fill="#fff" stroke="${C.line}" stroke-width="3"/><circle cx="116" cy="${y + 37}" r="26" fill="${[C.rose, C.champagne, C.sage, C.plumSoft, C.roseDeep][i]}"/>${txt(116, y + 47, i + 1, { size: 28, anchor: 'middle', fill: '#fff', font: SERIF })}${txt(170, y + 47, q, { size: 29, fill: C.ink, font: SERIF })}`;
  });
  s += wordmark(80, 645);
  return svg(1200, 675, s, 'Five questions to ask before you pour a drink');
}

SINGLE['what-happens-when-you-stop-drinking-alcohol-timeline'] = timelineFigure;
SINGLE['sobriety-counter-card'] = counterFigure;
SINGLE['lapse-vs-relapse-card'] = relapseFigure;
SINGLE['100-days-sober-card'] = day100Card;
SINGLE['months-sober-card'] = monthsFigure;
SINGLE['mindful-drinking-card'] = mindfulCard;
Object.assign(MILESTONE_DAYS, { '100-days-sober': [100, '100 days'], '2-years-sober': [730, '2 years'], '3-years-sober': [1095, '3 years'], '5-years-sober': [1825, '5 years'] });


/* ------------------------------------------------------------------ evidence pages, batch 2 */

const glass = (cx, base, fill, rim = C.plum, scale = 1) =>
  `<g transform="translate(${cx} ${base}) scale(${scale})"><path d="M-80 -250 h160 q6 120 -80 150 q-86 -30 -80 -150 z" fill="${C.petal}" stroke="${rim}" stroke-width="8"/><path d="M-68 -170 h136 q-14 52 -68 70 q-54 -18 -68 -70 z" fill="${fill}" opacity="0.88"/><line x1="0" y1="-100" x2="0" y2="-10" stroke="${rim}" stroke-width="10" stroke-linecap="round"/><ellipse cx="0" cy="-4" rx="64" ry="12" fill="${rim}"/></g>`;

HERO_ART['non-alcoholic-wine'] = () =>
  glass(250, 470, C.rose) + `<rect x="360" y="150" width="190" height="250" rx="22" fill="#fff" stroke="${C.line}" stroke-width="4"/>${txt(455, 235, '0.0', { size: 74, anchor: 'middle', font: SERIF, fill: C.plum })}${txt(455, 280, '% ABV', { size: 22, anchor: 'middle', fill: C.inkSoft, weight: 800 })}<rect x="385" y="320" width="140" height="44" rx="22" fill="${C.sageTint}"/>${txt(455, 350, 'alcohol free', { size: 17, anchor: 'middle', fill: C.sageDeep, weight: 800 })}` + bloom(110, 110, 34, C.sage, C.champagne);
HERO_ART['alcohol-belly-and-bloating'] = () =>
  [['calories', C.champagne, '98', 'kcal / drink'], ['belly fat', C.rose, '?', 'mixed evidence'], ['swelling', C.roseDeep, '!', 'see a doctor']].map(([t, f, n, l], i) => { const x = 40 + i * 180; return `<rect x="${x}" y="140" width="165" height="270" rx="26" fill="#fff" stroke="${C.line}" stroke-width="3"/><circle cx="${x + 82}" cy="215" r="44" fill="${f}"/>${txt(x + 82, 232, n, { size: n.length > 1 ? 34 : 54, anchor: 'middle', font: SERIF, fill: '#fff' })}${txt(x + 82, 305, t, { size: 24, anchor: 'middle', font: SERIF, fill: C.plum })}${txt(x + 82, 340, l, { size: 15, anchor: 'middle', fill: C.inkSoft, weight: 700 })}`; }).join('') + bloom(300, 70, 30, C.rose, C.champagne);
HERO_ART['alcohol-and-hair-loss'] = () =>
  [[1.40, 0.95, 2.06, 'all studies'], [1.31, 0.85, 2.01, 'men only'], [1.93, 1.32, 2.82, 'cross-sectional'], [1.69, 1.33, 2.14, 'case-control']].map(([or, lo, hi, l], i) => { const X = (v) => 250 + ((v - 0.5) / 2.5) * 290, y = 150 + i * 80; return `<line x1="${X(lo)}" y1="${y}" x2="${X(hi)}" y2="${y}" stroke="${C.plumSoft}" stroke-width="8" stroke-linecap="round"/><circle cx="${X(or)}" cy="${y}" r="14" fill="${C.rose}" stroke="#fff" stroke-width="4"/>${txt(20, y + 6, l, { size: 17, fill: C.inkSoft, weight: 800 })}`; }).join('') +
  `<line x1="${250 + (0.5 / 2.5) * 290}" y1="110" x2="${250 + (0.5 / 2.5) * 290}" y2="440" stroke="${C.plum}" stroke-width="4" stroke-dasharray="8 8"/>${txt(250 + (0.5 / 2.5) * 290, 470, 'no effect', { size: 18, anchor: 'middle', fill: C.plum, weight: 800 })}`;
HERO_ART['is-red-wine-good-for-you'] = () =>
  glass(200, 460, '#9C3D5B') + [['34.4', 0.62], ['31.6', 0.57], ['33.5', 0.6], ['37.4', 0.68]].map(([v, h], i) => `<rect x="${340 + i * 56}" y="${430 - h * 300}" width="42" height="${h * 300}" rx="10" fill="${[C.sage, C.sage, C.sage, C.plumSoft][i]}"/>${txt(361 + i * 56, 420 - h * 300, v, { size: 14, anchor: 'middle', weight: 800 })}`).join('') + txt(450, 470, 'deaths over 9 years, %', { size: 16, anchor: 'middle', fill: C.inkSoft, weight: 700 });
HERO_ART['alcohol-and-adhd'] = () =>
  `<circle cx="230" cy="270" r="130" fill="${C.plumSoft}" opacity="0.8"/><circle cx="370" cy="270" r="130" fill="${C.rose}" opacity="0.7"/>${txt(170, 280, 'ADHD', { size: 30, anchor: 'middle', fill: '#fff', weight: 800 })}${txt(430, 280, 'alcohol', { size: 28, anchor: 'middle', fill: '#fff', weight: 800 })}${txt(300, 285, '?', { size: 64, anchor: 'middle', font: SERIF, fill: '#fff' })}` + bloom(300, 80, 34, C.sage, C.champagne);
HERO_ART['alcohol-flush-reaction'] = () =>
  `<ellipse cx="220" cy="270" rx="120" ry="160" fill="${C.roseTint}" stroke="${C.plum}" stroke-width="8"/><circle cx="170" cy="300" r="34" fill="${C.roseDeep}" opacity="0.6"/><circle cx="270" cy="300" r="34" fill="${C.roseDeep}" opacity="0.6"/><circle cx="185" cy="240" r="9" fill="${C.plum}"/><circle cx="255" cy="240" r="9" fill="${C.plum}"/><path d="M185 350 Q220 372 255 350" fill="none" stroke="${C.plum}" stroke-width="7" stroke-linecap="round"/>` +
  [['alcohol', C.champagne], ['acetaldehyde', C.roseDeep], ['acetate', C.sage]].map(([t, f], i) => `<rect x="400" y="${140 + i * 100}" width="170" height="64" rx="32" fill="${f}"/>${txt(485, 181 + i * 100, t, { size: 21, anchor: 'middle', fill: '#fff', weight: 800 })}`).join('') +
  `<path d="M485 206 v28 M485 306 v28" stroke="${C.plum}" stroke-width="5" stroke-linecap="round"/>`;

function labelCard() {
  let s = bg(1200, 675, 'lb');
  s += txt(70, 90, 'What the words mean on a US beer label', { size: 42, font: SERIF, fill: C.plum });
  s += txt(70, 128, 'TTB rules for malt beverages. Wine under 7% follows FDA food labeling rules.', { size: 21, fill: C.inkSoft, weight: 600 });
  const items = [
    ['Non-alcoholic', 'Under 0.5% alcohol by volume', 'with the statement beside it', C.champagne],
    ['Alcohol free', 'Contains no alcohol', 'the only wording that promises none', C.sage],
    ['Low alcohol', 'Under 2.5% alcohol by volume', 'also “reduced alcohol”', C.rose],
  ];
  items.forEach(([t, a, b, f], i) => {
    const x = 70 + i * 360;
    s += `<rect x="${x}" y="190" width="330" height="360" rx="30" fill="#fff" stroke="${C.line}" stroke-width="3"/><circle cx="${x + 165}" cy="270" r="50" fill="${f}"/>`;
    s += `<path d="M${x + 143} 270 l16 18 l30 -34" fill="none" stroke="#fff" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>`;
    s += txt(x + 165, 372, t, { size: 32, anchor: 'middle', font: SERIF, fill: C.plum });
    s += txt(x + 165, 430, a, { size: 22, anchor: 'middle', fill: C.ink, weight: 700 });
    s += txt(x + 165, 466, b, { size: 18, anchor: 'middle', fill: C.inkSoft, weight: 600 });
  });
  s += wordmark(80, 640);
  return svg(1200, 675, s, 'What non-alcoholic, alcohol free and low alcohol mean on a US beer label');
}

function bellyCard() {
  let s = bg(1200, 560, 'bl');
  s += txt(70, 85, 'Alcohol belly: three different questions', { size: 40, font: SERIF, fill: C.plum });
  const cards = [
    ['Calories', C.champagne, 'About 98 kcal per standard drink', 'from the alcohol alone (7 kcal per gram)'],
    ['Belly fat', C.rose, 'Evidence is mixed', 'Inadequate at under 500 mL beer a day; inconsistent in women'],
    ['Swelling', C.roseDeep, 'Can be gastritis or ascites', 'Persistent swelling, pain or jaundice: see a provider'],
  ];
  cards.forEach(([t, f, a, b], i) => {
    const x = 70 + i * 360;
    s += `<rect x="${x}" y="130" width="330" height="330" rx="30" fill="#fff" stroke="${C.line}" stroke-width="3"/><rect x="${x}" y="130" width="330" height="14" rx="7" fill="${f}"/>`;
    s += txt(x + 28, 205, t, { size: 34, font: SERIF, fill: C.plum });
    wrap(a, 24).forEach((l, j) => { s += txt(x + 28, 270 + j * 28, l, { size: 21, fill: C.ink, weight: 800 }); });
    wrap(b, 30).forEach((l, j) => { s += txt(x + 28, 345 + j * 26, l, { size: 18, fill: C.inkSoft, weight: 600 }); });
  });
  s += wordmark(80, 520);
  return svg(1200, 560, s, 'Alcohol belly split into calories, belly fat and swelling');
}

function hairCard() {
  let s = bg(1200, 560, 'hr');
  s += txt(70, 85, 'Alcohol and androgenetic alopecia', { size: 40, font: SERIF, fill: C.plum });
  s += txt(70, 122, 'Odds ratios with 95% confidence intervals, 2024 meta-analysis of six studies', { size: 20, fill: C.inkSoft, weight: 600 });
  const rows = [['All six studies', 1.40, 0.95, 2.06], ['Men only', 1.31, 0.85, 2.01], ['Cross-sectional', 1.93, 1.32, 2.82], ['Case-control', 1.69, 1.33, 2.14]];
  const X = (v) => 400 + ((v - 0.5) / 2.6) * 700;
  [0.5, 1, 1.5, 2, 2.5, 3].forEach((v) => { s += `<line x1="${X(v)}" y1="165" x2="${X(v)}" y2="430" stroke="${v === 1 ? C.plum : C.line}" stroke-width="${v === 1 ? 4 : 2}" ${v === 1 ? 'stroke-dasharray="8 8"' : ''}/>${txt(X(v), 458, v, { size: 18, anchor: 'middle', fill: C.inkSoft, weight: 700 })}`; });
  s += txt(X(1), 150, 'no effect', { size: 18, anchor: 'middle', fill: C.plum, weight: 800 });
  rows.forEach(([l, or, lo, hi], i) => {
    const y = 215 + i * 62, crosses = lo <= 1;
    s += txt(70, y + 7, l, { size: 24, weight: 700 });
    s += `<line x1="${X(lo)}" y1="${y}" x2="${X(hi)}" y2="${y}" stroke="${crosses ? C.plumSoft : C.roseDeep}" stroke-width="10" stroke-linecap="round"/><circle cx="${X(or)}" cy="${y}" r="16" fill="${crosses ? C.plum : C.rose}" stroke="#fff" stroke-width="5"/>`;
    s += txt(X(hi) + 18, y + 7, `${or.toFixed(2)}`, { size: 20, fill: C.ink, weight: 800 });
  });
  s += wordmark(80, 530);
  return svg(1200, 560, s, 'Forest plot of four odds ratios for alcohol and androgenetic alopecia');
}

function redWineCard() {
  let s = bg(1200, 560, 'rw');
  s += txt(70, 85, 'Does more resveratrol mean living longer?', { size: 40, font: SERIF, fill: C.plum });
  s += txt(70, 122, 'Deaths over 9 years by quartile of urinary resveratrol. 783 adults aged 65 and over.', { size: 20, fill: C.inkSoft, weight: 600 });
  [['Lowest', 34.4], ['Second', 31.6], ['Third', 33.5], ['Highest', 37.4]].forEach(([l, v], i) => {
    const x = 110 + i * 250, h = v * 7.5;
    s += `<rect x="${x}" y="${440 - h}" width="170" height="${h}" rx="18" fill="${i === 3 ? C.plumSoft : C.sage}"/>${txt(x + 85, 430 - h, `${v}%`, { size: 30, anchor: 'middle', font: SERIF, fill: C.plum })}${txt(x + 85, 480, l, { size: 20, anchor: 'middle', fill: C.inkSoft, weight: 700 })}`;
  });
  s += txt(1130, 520, 'Differences are not significant (P = .67)', { size: 22, anchor: 'end', fill: C.plum, weight: 800 });
  s += wordmark(80, 535);
  return svg(1200, 560, s, 'Deaths over nine years by quartile of urinary resveratrol, not significant');
}

function adhdCard() {
  let s = bg(1200, 560, 'ad');
  s += txt(70, 85, 'ADHD and alcohol problems: two meta-analyses', { size: 40, font: SERIF, fill: C.plum });
  s += `<rect x="70" y="140" width="520" height="320" rx="30" fill="#fff" stroke="${C.line}" stroke-width="3"/>`;
  s += txt(330, 250, '1.35', { size: 100, anchor: 'middle', font: SERIF, fill: C.plum });
  s += txt(330, 305, 'odds ratio', { size: 24, anchor: 'middle', fill: C.inkSoft, weight: 800 });
  s += txt(330, 350, 'childhood ADHD → alcohol use', { size: 22, anchor: 'middle', weight: 700 });
  s += txt(330, 380, 'disorder by young adulthood', { size: 22, anchor: 'middle', weight: 700 });
  s += txt(330, 425, '95% CI 1.11 to 1.64, 13 studies', { size: 18, anchor: 'middle', fill: C.inkSoft, weight: 600 });
  s += `<rect x="610" y="140" width="520" height="320" rx="30" fill="#fff" stroke="${C.line}" stroke-width="3"/>`;
  s += txt(870, 250, '23.1%', { size: 100, anchor: 'middle', font: SERIF, fill: C.roseDeep });
  s += txt(870, 305, 'of people with a substance', { size: 22, anchor: 'middle', weight: 700 });
  s += txt(870, 335, 'use disorder met criteria', { size: 22, anchor: 'middle', weight: 700 });
  s += txt(870, 365, 'for comorbid ADHD', { size: 22, anchor: 'middle', weight: 700 });
  s += txt(870, 425, '95% CI 19.4 to 27.2, 29 studies', { size: 18, anchor: 'middle', fill: C.inkSoft, weight: 600 });
  s += wordmark(80, 520);
  return svg(1200, 560, s, 'Two meta-analysis results linking ADHD and alcohol problems');
}

function flushCard() {
  let s = bg(1200, 560, 'fl');
  s += txt(70, 85, 'The alcohol flush reaction', { size: 40, font: SERIF, fill: C.plum });
  const steps = [['Alcohol', C.champagne, 'ADH enzyme'], ['Acetaldehyde', C.roseDeep, 'ALDH2 enzyme'], ['Acetate', C.sage, 'cleared']];
  steps.forEach(([t, f, e], i) => {
    const x = 70 + i * 380;
    s += `<rect x="${x}" y="150" width="300" height="110" rx="55" fill="${f}"/>${txt(x + 150, 217, t, { size: 32, anchor: 'middle', font: SERIF, fill: '#fff' })}`;
    if (i < 2) s += `<path d="M${x + 310} 205 h56" stroke="${C.plum}" stroke-width="7" stroke-linecap="round"/><path d="M${x + 350} 188 l18 17 l-18 17" fill="none" stroke="${C.plum}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>${txt(x + 340, 280, e, { size: 16, anchor: 'middle', fill: C.inkSoft, weight: 800 })}`;
  });
  s += `<rect x="70" y="330" width="330" height="150" rx="26" fill="#fff" stroke="${C.line}" stroke-width="3"/>${txt(235, 405, '36%', { size: 70, anchor: 'middle', font: SERIF, fill: C.plum })}${txt(235, 445, 'of East Asians flush', { size: 20, anchor: 'middle', fill: C.inkSoft, weight: 700 })}`;
  s += `<rect x="435" y="330" width="330" height="150" rx="26" fill="#fff" stroke="${C.line}" stroke-width="3"/>${txt(600, 405, '540M', { size: 70, anchor: 'middle', font: SERIF, fill: C.roseDeep })}${txt(600, 445, 'ALDH2-deficient, worldwide', { size: 20, anchor: 'middle', fill: C.inkSoft, weight: 700 })}`;
  s += `<rect x="800" y="330" width="330" height="150" rx="26" fill="${C.plumTint}"/>${txt(965, 385, 'Linked to a higher', { size: 22, anchor: 'middle', weight: 800 })}${txt(965, 415, 'esophageal cancer risk', { size: 22, anchor: 'middle', weight: 800 })}${txt(965, 450, 'from alcohol', { size: 22, anchor: 'middle', weight: 800 })}`;
  s += txt(70, 530, 'Brooks et al., PLoS Medicine 2009', { size: 17, fill: C.inkSoft, weight: 600 });
  return svg(1200, 560, s, 'Alcohol breaks down to acetaldehyde then acetate; flushing is common in ALDH2 deficiency');
}

SINGLE['non-alcoholic-wine-card'] = labelCard;
SINGLE['alcohol-belly-and-bloating-card'] = bellyCard;
SINGLE['alcohol-and-hair-loss-card'] = hairCard;
SINGLE['is-red-wine-good-for-you-card'] = redWineCard;
SINGLE['alcohol-and-adhd-card'] = adhdCard;
SINGLE['alcohol-flush-reaction-card'] = flushCard;

/* ------------------------------------------------------------------ batch 3: mocktails, NA beer, menopause, antidepressants, moderation */

const tall = (cx, base, fill, h = 260, w = 110) =>
  `<g><rect x="${cx - w / 2}" y="${base - h}" width="${w}" height="${h}" rx="14" fill="${C.petal}" stroke="${C.plum}" stroke-width="7"/><rect x="${cx - w / 2 + 10}" y="${base - h + 50}" width="${w - 20}" height="${h - 62}" rx="8" fill="${fill}" opacity="0.85"/>` +
  [0, 1, 2].map((i) => `<rect x="${cx - 30 + i * 18}" y="${base - h + 70 + i * 34}" width="26" height="26" rx="6" fill="#fff" opacity="0.6" transform="rotate(${i * 14 - 10} ${cx} ${base - h / 2})"/>`).join('') +
  `<circle cx="${cx + w / 2 - 6}" cy="${base - h + 18}" r="26" fill="${C.sage}" opacity="0.9"/><line x1="${cx + 12}" y1="${base - h - 40}" x2="${cx - 8}" y2="${base - 30}" stroke="${C.plum}" stroke-width="7" stroke-linecap="round"/></g>`;
const beerGlass = (cx, base, scale = 1) =>
  `<g transform="translate(${cx} ${base}) scale(${scale})"><path d="M-70 -300 h140 l-14 290 h-112 z" fill="${C.petal}" stroke="${C.plum}" stroke-width="8" stroke-linejoin="round"/><path d="M-60 -230 h120 l-11 214 h-98 z" fill="${C.champagne}" opacity="0.9"/><path d="M-72 -300 q20 -40 50 -18 q22 -30 50 -6 q30 -20 44 24 z" fill="#fff" stroke="${C.plum}" stroke-width="6"/>${[[-30, -150], [10, -100], [30, -180], [-15, -60]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="6" fill="#fff" opacity="0.7"/>`).join('')}</g>`;

HERO_ART['easy-mocktails'] = () =>
  tall(170, 470, C.sage) + tall(300, 450, C.rose, 300, 120) + tall(430, 470, C.champagne) + bloom(300, 80, 30, C.rose, C.champagne);
HERO_ART['non-alcoholic-beer'] = () =>
  beerGlass(200, 470) + [['< 0.5%', C.champagne, 'non-alcoholic'], ['0.0', C.sage, 'alcohol free'], ['?', C.roseDeep, 'read the can']].map(([n, f, l], i) => `<rect x="350" y="${110 + i * 120}" width="220" height="96" rx="24" fill="#fff" stroke="${C.line}" stroke-width="3"/><circle cx="398" cy="${158 + i * 120}" r="30" fill="${f}"/>${txt(440, 152 + i * 120, n, { size: 26, font: SERIF, fill: C.plum })}${txt(440, 180 + i * 120, l, { size: 16, fill: C.inkSoft, weight: 800 })}`).join('');
HERO_ART['alcohol-and-menopause'] = () =>
  `<rect x="90" y="80" width="70" height="300" rx="35" fill="#fff" stroke="${C.plum}" stroke-width="8"/><rect x="108" y="170" width="34" height="200" rx="17" fill="${C.roseDeep}"/><circle cx="125" cy="410" r="56" fill="${C.roseDeep}" stroke="${C.plum}" stroke-width="8"/>` +
  `<path d="M330 120 a110 110 0 1 0 110 160 a90 90 0 1 1 -110 -160 z" fill="${C.plumSoft}"/>` + glass(470, 470, C.rose, C.plum, 0.7) + txt(470, 250, '?', { size: 70, anchor: 'middle', font: SERIF, fill: C.plum }) + bloom(250, 440, 30, C.sage, C.champagne);
HERO_ART['alcohol-and-antidepressants'] = () =>
  `<rect x="60" y="140" width="220" height="280" rx="26" fill="#fff" stroke="${C.plum}" stroke-width="7"/>` +
  [0, 1, 2, 3, 4, 5].map((i) => `<ellipse cx="${115 + (i % 2) * 110}" cy="${200 + Math.floor(i / 2) * 80}" rx="34" ry="22" fill="${i < 2 ? C.plumTint : C.sageTint}" stroke="${C.plumSoft}" stroke-width="4"/>`).join('') +
  `<path d="M300 200 l40 -70 l40 70 z" fill="${C.champagne}" stroke="${C.plum}" stroke-width="6" stroke-linejoin="round"/>${txt(340, 192, '!', { size: 40, anchor: 'middle', font: SERIF, fill: C.plum })}` + glass(470, 460, C.rose, C.plum, 0.8) + bloom(340, 380, 28, C.rose, C.champagne);
HERO_ART['moderation-management'] = () =>
  ['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => { const x = 30 + i * 80, drink = [1, 4, 5].includes(i); return `<rect x="${x}" y="150" width="68" height="220" rx="20" fill="${drink ? C.roseTint : C.sageTint}" stroke="${C.line}" stroke-width="3"/>${txt(x + 34, 190, d, { size: 22, anchor: 'middle', fill: C.plum, weight: 800 })}${drink ? [0, 1, 2].map((j) => `<rect x="${x + 22}" y="${220 + j * 46}" width="24" height="36" rx="5" fill="${C.rose}"/>`).join('') : bloom(x + 34, 280, 20, C.sage, C.champagne)}`; }).join('') +
  txt(300, 440, 'up to 9 a week · 3 per day · 4 days off', { size: 22, anchor: 'middle', fill: C.plum, weight: 800 });

function mocktailFormula() {
  let s = bg(1200, 675, 'mf');
  s += txt(70, 90, 'The easy mocktail formula', { size: 44, font: SERIF, fill: C.plum });
  s += txt(70, 128, 'Sour + sweet + long + garnish, over ice. One tall glass.', { size: 22, fill: C.inkSoft, weight: 600 });
  const layers = [['Garnish', C.sage, 'mint · basil · rosemary · citrus peel'], ['Long', '#CFE3EA', 'soda · ginger ale · ginger beer · tonic'], ['Sweet', C.champagne, 'honey · maple · orange or pineapple juice'], ['Sour', C.rose, 'lime · lemon · grapefruit']];
  s += `<rect x="150" y="170" width="220" height="440" rx="22" fill="${C.petal}" stroke="${C.plum}" stroke-width="8"/>`;
  layers.forEach(([t, f, ex], i) => {
    const y = 190 + i * 102;
    s += `<rect x="166" y="${y}" width="188" height="92" rx="${i === 0 ? 46 : 10}" fill="${f}" opacity="0.92"/>`;
    s += `<line x1="380" y1="${y + 46}" x2="470" y2="${y + 46}" stroke="${C.plumSoft}" stroke-width="4" stroke-dasharray="6 6"/>`;
    s += txt(490, y + 40, t, { size: 34, font: SERIF, fill: C.plum });
    s += txt(490, y + 74, ex, { size: 22, fill: C.ink, weight: 700 });
  });
  s += wordmark(880, 640);
  return svg(1200, 675, s, 'A tall glass split into sour, sweet, long and garnish layers with examples');
}

function halloweenCard() {
  let s = bg(1200, 675, 'hw');
  s += txt(70, 90, 'Three Halloween mocktails', { size: 44, font: SERIF, fill: C.plum });
  const drinks = [['Witch’s brew', '#9CC27E', 'lime · green apple · soda'], ['Blood orange punch', '#D9534F', 'orange · cranberry · ginger ale'], ['Black cherry fizz', '#5A2A4C', 'cherry · lime · cola']];
  drinks.forEach(([t, f, ex], i) => {
    const cx = 230 + i * 370;
    s += tall(cx, 520, f, 300, 130);
    s += txt(cx, 575, t, { size: 30, anchor: 'middle', font: SERIF, fill: C.plum });
    s += txt(cx, 610, ex, { size: 20, anchor: 'middle', fill: C.inkSoft, weight: 700 });
  });
  s += `<ellipse cx="1080" cy="150" rx="70" ry="56" fill="#E8913B"/><rect x="1072" y="80" width="16" height="30" rx="6" fill="${C.sageDeep}"/><path d="M1050 140 l12 -14 l12 14 z M1086 140 l12 -14 l12 14 z" fill="${C.plum}"/><path d="M1045 170 q35 26 70 0" fill="none" stroke="${C.plum}" stroke-width="6" stroke-linecap="round"/>`;
  return svg(1200, 675, s, 'Three Halloween mocktails with their ingredients and a small pumpkin');
}

function naBeerScale() {
  let s = bg(1200, 675, 'nb');
  s += txt(70, 90, 'Where NA beer sits on the alcohol scale', { size: 44, font: SERIF, fill: C.plum });
  s += txt(70, 128, 'US beer label terms (TTB). Alcohol by volume.', { size: 22, fill: C.inkSoft, weight: 600 });
  const X = (v) => 110 + (v / 6) * 980;
  s += `<rect x="${X(0)}" y="330" width="${X(6) - X(0)}" height="34" rx="17" fill="${C.plumTint}"/>`;
  s += `<rect x="${X(0)}" y="330" width="${X(0.5) - X(0)}" height="34" rx="17" fill="${C.sage}"/><rect x="${X(0.5)}" y="330" width="${X(2.5) - X(0.5)}" height="34" fill="${C.champagne}"/>`;
  [0, 0.5, 1, 2, 2.5, 3, 4, 5, 6].forEach((v) => { s += `<line x1="${X(v)}" y1="372" x2="${X(v)}" y2="388" stroke="${C.plumSoft}" stroke-width="3"/>${txt(X(v), 414, `${v}%`, { size: 18, anchor: 'middle', fill: C.inkSoft, weight: 700 })}`; });
  const marks = [[0, 'Alcohol free', 'no alcohol', C.sageDeep, 230], [0.5, 'Non-alcoholic', 'under 0.5%, stated', C.plum, 500], [2.5, 'Low alcohol', 'under 2.5%', C.champagneDeep, 230]];
  marks.forEach(([v, t, l, f, y]) => {
    const up = y < 330;
    s += `<line x1="${X(v)}" y1="${up ? y + 40 : 364}" x2="${X(v)}" y2="${up ? 330 : y - 50}" stroke="${f}" stroke-width="4"/><circle cx="${X(v)}" cy="347" r="12" fill="#fff" stroke="${f}" stroke-width="5"/>`;
    s += txt(X(v) + (v === 0 ? 0 : 0), y, t, { size: 30, anchor: v === 0 ? 'start' : 'middle', font: SERIF, fill: f });
    s += txt(X(v), y + 30, l, { size: 20, anchor: v === 0 ? 'start' : 'middle', fill: C.inkSoft, weight: 700 });
  });
  s += `<rect x="${X(4.2)}" y="470" width="240" height="80" rx="20" fill="#fff" stroke="${C.line}" stroke-width="3"/>${txt(X(4.2) + 120, 505, 'Regular beer', { size: 24, anchor: 'middle', font: SERIF, fill: C.plum })}${txt(X(4.2) + 120, 535, 'well above 2.5%', { size: 18, anchor: 'middle', fill: C.inkSoft, weight: 700 })}`;
  s += wordmark(80, 640);
  return svg(1200, 675, s, 'Alcohol scale from 0 to 6 percent marking alcohol free, non-alcoholic under 0.5 and low alcohol under 2.5');
}

function menopauseCard() {
  let s = bg(1200, 675, 'mp');
  s += txt(70, 90, 'Alcohol and bothersome hot flashes', { size: 44, font: SERIF, fill: C.plum });
  s += txt(70, 128, 'Odds vs lifelong non-drinkers, 4,164 Korean women aged 42 to 52 (Kwon 2022)', { size: 21, fill: C.inkSoft, weight: 600 });
  const rows = [['< 10 g/day', 1.42], ['10–19 g', 1.99], ['20–39 g', 2.06], ['40 g +', 3.52]];
  rows.forEach(([l, v], i) => {
    const x = 110 + i * 170, h = v * 105;
    s += `<rect x="${x}" y="${560 - h}" width="120" height="${h}" rx="16" fill="${[C.rose, C.rose, C.roseDeep, C.plumSoft][i]}"/>${txt(x + 60, 548 - h, v.toFixed(2), { size: 30, anchor: 'middle', font: SERIF, fill: C.plum })}${txt(x + 60, 595, l, { size: 19, anchor: 'middle', fill: C.inkSoft, weight: 700 })}`;
  });
  s += `<line x1="100" y1="${560 - 105}" x2="770" y2="${560 - 105}" stroke="${C.plum}" stroke-width="3" stroke-dasharray="8 8"/>${txt(775, 560 - 98, '1.0', { size: 18, fill: C.plum, weight: 800 })}`;
  s += `<rect x="830" y="190" width="300" height="300" rx="28" fill="#fff" stroke="${C.line}" stroke-width="3"/>${txt(980, 260, 'But a US study', { size: 26, anchor: 'middle', font: SERIF, fill: C.plum })}${txt(980, 300, 'of midlife women', { size: 26, anchor: 'middle', font: SERIF, fill: C.plum })}${txt(980, 355, 'linked current drinking', { size: 20, anchor: 'middle', weight: 800 })}${txt(980, 385, 'to fewer hot flashes', { size: 20, anchor: 'middle', weight: 800 })}${txt(980, 440, 'Schilling 2007', { size: 17, anchor: 'middle', fill: C.inkSoft, weight: 600 })}`;
  s += wordmark(880, 640);
  return svg(1200, 675, s, 'Odds ratios for bothersome hot flashes rising with alcohol intake, beside a US study that found the opposite');
}

function antidepressantCard() {
  let s = bg(1200, 675, 'ad3');
  s += txt(70, 90, 'Alcohol with depression medicines', { size: 44, font: SERIF, fill: C.plum });
  s += txt(70, 128, 'Possible reactions listed by NIAAA (Harmful Interactions)', { size: 22, fill: C.inkSoft, weight: 600 });
  const cards = [['Drowsiness, dizziness', 'all the medicines listed', C.champagne], ['Overdose risk', 'increased, all listed', C.roseDeep], ['Worse depression', 'or hopelessness, all listed', C.plumSoft], ['MAOIs', 'heart effects; tyramine in beer and red wine', C.rose]];
  cards.forEach(([t, l, f], i) => {
    const x = 70 + (i % 2) * 540, y = 170 + Math.floor(i / 2) * 210;
    s += `<rect x="${x}" y="${y}" width="510" height="180" rx="28" fill="#fff" stroke="${C.line}" stroke-width="3"/><rect x="${x}" y="${y}" width="16" height="180" rx="8" fill="${f}"/>`;
    s += txt(x + 44, y + 78, t, { size: 34, font: SERIF, fill: C.plum });
    wrap(l, 40).forEach((ln, j) => { s += txt(x + 44, y + 120 + j * 28, ln, { size: 21, fill: C.inkSoft, weight: 700 }); });
  });
  s += txt(70, 630, 'Not a full list. Ask your prescriber about your own medicine.', { size: 20, fill: C.plum, weight: 800 });
  return svg(1200, 675, s, 'Four cards listing possible reactions when alcohol is mixed with depression medicines');
}

function moderationCard() {
  let s = bg(1200, 675, 'mm');
  s += txt(70, 90, 'Moderation Management limits, one week', { size: 44, font: SERIF, fill: C.plum });
  s += txt(70, 128, 'Women: up to 9 a week, 3 per occasion, drinking on 3 to 4 days at most', { size: 22, fill: C.inkSoft, weight: 600 });
  ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].forEach((d, i) => {
    const x = 70 + i * 152, drink = [2, 4, 5].includes(i);
    s += `<rect x="${x}" y="170" width="136" height="360" rx="24" fill="${drink ? '#fff' : C.sageTint}" stroke="${C.line}" stroke-width="3"/>${txt(x + 68, 215, d, { size: 26, anchor: 'middle', font: SERIF, fill: C.plum })}`;
    if (drink) [0, 1, 2].forEach((j) => { s += `<rect x="${x + 44}" y="${250 + j * 86}" width="48" height="70" rx="10" fill="${C.rose}"/>`; });
    else s += bloom(x + 68, 340, 34, C.sage, C.champagne) + txt(x + 68, 440, 'alcohol-free', { size: 17, anchor: 'middle', fill: C.sageDeep, weight: 800 });
  });
  s += txt(70, 590, '3 days × 3 drinks = 9, the weekly limit. MM calls these limits, not targets.', { size: 22, fill: C.ink, weight: 800 });
  s += wordmark(880, 645);
  return svg(1200, 675, s, 'A week with three drinking days of three drinks and four alcohol-free days');
}

SINGLE['easy-mocktails-card'] = mocktailFormula;
SINGLE['easy-mocktails-halloween'] = halloweenCard;
SINGLE['non-alcoholic-beer-card'] = naBeerScale;
SINGLE['alcohol-and-menopause-card'] = menopauseCard;
SINGLE['alcohol-and-antidepressants-card'] = antidepressantCard;
SINGLE['moderation-management-card'] = moderationCard;

function renderFigure(name, article) {
  if (SINGLE[name]) return SINGLE[name]();
  const m = name.match(/^(.*)-(card|savings|calendar)$/);
  if (!m) throw new Error(`Unknown figure ${name}`);
  const [, slug, kind] = m;
  if (MILESTONE_DAYS[slug]) {
    const [d, label] = MILESTONE_DAYS[slug];
    return kind === 'card' ? milestoneCard(d, label) : savingsChart(d, label);
  }
  if (COMPARE_APPS[slug] && kind === 'card') return compareCard(slug, article.h1);
  if (kind === 'calendar') return calendarFigure(slug);
  throw new Error(`Unknown figure ${name}`);
}

/* ------------------------------------------------------------------ hero and OG, same layout as the other guides */

function wrap(text, max) {
  const lines = [];
  let cur = '';
  for (const w of text.split(' ')) {
    if ((cur + ' ' + w).trim().length > max && cur) { lines.push(cur); cur = w; } else cur = (cur + ' ' + w).trim();
  }
  return [...lines, cur];
}
const hero = (art, label) => svg(1200, 630, `${bg(1200, 630)}<g transform="translate(${600 - 300 * 1.05} ${315 - 270 * 1.05}) scale(1.05)">${art}</g>`, label);
const og = (a, art) => {
  const title = a.metaTitle.split(/[:(]/)[0].trim();
  const lines = wrap(title, 17).slice(0, 4);
  const size = lines.length > 3 ? 52 : 60;
  const text = lines.map((l, i) => txt(72, 250 + i * (size + 10), l, { size, font: SERIF, fill: C.ink })).join('');
  const kicker = a.kicker.toUpperCase();
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">${bg(1200, 630)}
<rect x="72" y="118" width="${kicker.length * 15 + 36}" height="38" rx="19" fill="${C.plumTint}"/>${txt(90, 144, kicker, { size: 17, weight: 800, ls: 2.5, fill: C.plum })}
${text}${txt(150, 560, 'sober girl', { size: 30, font: SERIF, fill: C.plum })}${txt(150, 590, 'Sourced guides from the Sober Girl team', { size: 18, weight: 400, fill: C.plumSoft })}
<g transform="translate(640 110) scale(0.9)">${art}</g></svg>`;
};

const icon = await sharp(path.resolve('public/sobergirl-icon.png')).resize(64, 64).png().toBuffer();
let figures = 0;
for (const a of PSEO_ARTICLES) {
  const artFn = HERO_ART[a.slug];
  if (!artFn) throw new Error(`No hero art for ${a.slug}`);
  const art = artFn();
  fs.writeFileSync(path.join(OUT, `${a.slug}-hero.svg`), hero(art, a.heroAlt));
  const png = await sharp(Buffer.from(og(a, art))).png().toBuffer();
  await sharp(png).composite([{ input: icon, left: 72, top: 538 }]).png({ compressionLevel: 9 }).toFile(path.join(OUT, `${a.slug}-og.png`));
  for (const b of a.sections.flatMap((s) => s.blocks)) {
    if (b.t !== 'figure') continue;
    const name = path.basename(b.src, '.svg');
    const out = renderFigure(name, a);
    if (!out.includes(`viewBox="0 0 ${b.w} ${b.h}"`)) throw new Error(`${name}: size in data (${b.w}x${b.h}) does not match the drawing`);
    fs.writeFileSync(path.join(FIG, `${name}.svg`), out);
    figures++;
  }
}
console.log(`Wrote ${PSEO_ARTICLES.length} heroes, ${PSEO_ARTICLES.length} OG images and ${figures} figures`);
