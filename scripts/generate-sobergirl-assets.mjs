// Generates hero SVGs and 1200x630 Open Graph PNGs for the /sobergirl guides.
// Usage: node scripts/generate-sobergirl-assets.mjs
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const OUT = path.resolve('public/sobergirl');
const ICON = path.resolve('public/sobergirl-icon.png');
fs.mkdirSync(OUT, { recursive: true });

const C = {
  cream: '#FCF6EF', blush: '#F9E8E3', petal: '#FFFAF6', plum: '#5A2A4C', plumSoft: '#7C4B6D',
  plumTint: '#EBDCE6', sage: '#8FAE8F', sageDeep: '#5E8262', sageTint: '#E4EEE1',
  rose: '#E8928E', roseDeep: '#D2716F', roseTint: '#FBE1DD', champagne: '#E9C98F', ink: '#3A2235', line: '#EFDDD6',
};
const SERIF = "Georgia, 'Times New Roman', serif";
const SANS = "'Helvetica Neue', Arial, sans-serif";

// ---- illustrations, each drawn in a 600 x 520 box ---------------------------------------

function bloom(cx, cy, r, petal = C.rose, core = C.champagne) {
  let s = '';
  for (let i = 0; i < 8; i++) {
    s += `<ellipse cx="${cx}" cy="${cy - r * 0.62}" rx="${r * 0.3}" ry="${r * 0.55}" fill="${petal}" opacity="0.92" transform="rotate(${i * 45} ${cx} ${cy})"/>`;
  }
  return s + `<circle cx="${cx}" cy="${cy}" r="${r * 0.28}" fill="${core}"/>`;
}

function milestones() {
  const pts = [[70, 440, '1d'], [160, 350, '1w'], [275, 380, '30d'], [350, 260, '90d'], [455, 245, '6m'], [520, 105, '1y']];
  const path = 'M70 440 C 110 380, 120 360, 160 350 S 240 390, 275 380 S 330 290, 350 260 S 420 250, 455 245 S 505 160, 520 105';
  const fills = [C.plumTint, C.roseTint, C.rose, C.roseDeep, C.plumSoft, C.plum];
  let s = `<path d="${path}" fill="none" stroke="${C.plumTint}" stroke-width="16" stroke-linecap="round"/>`;
  s += `<path d="${path}" fill="none" stroke="${C.rose}" stroke-width="3" stroke-dasharray="2 12" stroke-linecap="round"/>`;
  pts.forEach(([x, y, t], i) => {
    if (i === 5) {
      s += bloom(x, y, 74);
      s += `<text x="${x}" y="${y + 7}" text-anchor="middle" font-family="${SERIF}" font-weight="700" font-size="22" fill="${C.plum}">${t}</text>`;
    } else {
      const dark = i >= 2;
      s += `<circle cx="${x}" cy="${y}" r="36" fill="${fills[i]}" stroke="#fff" stroke-width="5"/>`;
      s += `<text x="${x}" y="${y + 7}" text-anchor="middle" font-family="${SERIF}" font-weight="700" font-size="20" fill="${dark ? '#fff' : C.plum}">${t}</text>`;
    }
  });
  return s;
}

function phone(x, y, hi, k) {
  const body = hi ? C.plum : '#fff';
  const ink = hi ? 'rgba(255,255,255,0.85)' : C.plumTint;
  const accent = [C.sage, C.rose, C.champagne, C.rose][k];
  return `<g transform="translate(${x} ${y})">
    <rect x="0" y="0" width="128" height="250" rx="22" fill="${body}" stroke="${hi ? C.plum : C.line}" stroke-width="3"/>
    <rect x="46" y="12" width="36" height="6" rx="3" fill="${hi ? 'rgba(255,255,255,0.35)' : C.line}"/>
    <circle cx="64" cy="64" r="20" fill="${accent}"/>
    <rect x="22" y="104" width="84" height="9" rx="4.5" fill="${ink}"/>
    <rect x="22" y="124" width="64" height="9" rx="4.5" fill="${ink}"/>
    <rect x="22" y="144" width="74" height="9" rx="4.5" fill="${ink}"/>
    <rect x="22" y="196" width="84" height="28" rx="14" fill="${hi ? C.rose : C.plumTint}"/>
  </g>`;
}

function bestApps() {
  const xs = [14, 160, 306, 452];
  const ys = [90, 40, 120, 70];
  let s = '';
  xs.forEach((x, i) => (s += phone(x, ys[i], i === 3, i)));
  // checks
  xs.forEach((x, i) => {
    const cy = ys[i] + 280;
    s += `<circle cx="${x + 64}" cy="${cy}" r="18" fill="${i === 3 ? C.sageDeep : C.sageTint}"/>`;
    s += `<path d="M${x + 55} ${cy} l7 8 l14 -16" fill="none" stroke="${i === 3 ? '#fff' : C.sageDeep}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`;
  });
  return s;
}

function calendar(label, palette, snow) {
  const cw = 62, gap = 8, ox = 59, oy = 96;
  let s = `<rect x="${ox - 18}" y="30" width="${7 * cw + 6 * gap + 36}" height="${5 * cw + 4 * gap + 110}" rx="26" fill="#fff" stroke="${C.line}" stroke-width="3"/>`;
  s += `<rect x="${ox - 18}" y="30" width="${7 * cw + 6 * gap + 36}" height="56" rx="26" fill="${palette.head}"/>`;
  s += `<rect x="${ox - 18}" y="60" width="${7 * cw + 6 * gap + 36}" height="26" fill="${palette.head}"/>`;
  s += `<text x="${ox + 4}" y="68" font-family="${SERIF}" font-weight="700" font-size="26" fill="#fff" letter-spacing="3">${label}</text>`;
  for (let d = 1; d <= 35; d++) {
    const col = (d - 1) % 7, row = Math.floor((d - 1) / 7);
    const x = ox + col * (cw + gap), y = oy + 22 + row * (cw + gap);
    if (d <= 31) {
      const f = palette.cells[Math.min(palette.cells.length - 1, Math.floor(((d - 1) / 31) * palette.cells.length))];
      s += `<rect x="${x}" y="${y}" width="${cw}" height="${cw}" rx="14" fill="${f}"/>`;
      s += `<text x="${x + cw / 2}" y="${y + cw / 2 + 7}" text-anchor="middle" font-family="${SANS}" font-weight="700" font-size="20" fill="#fff">${d}</text>`;
    } else {
      s += `<rect x="${x}" y="${y}" width="${cw}" height="${cw}" rx="14" fill="none" stroke="${C.line}" stroke-width="2" stroke-dasharray="5 6"/>`;
    }
  }
  s += snow ? snowflake(528, 58, 20, '#fff') : bloom(536, 40, 40, palette.accent, C.champagne);
  return s;
}

function snowflake(cx, cy, r, col) {
  let s = '';
  for (let i = 0; i < 3; i++) {
    s += `<line x1="${cx}" y1="${cy - r}" x2="${cx}" y2="${cy + r}" stroke="${col}" stroke-width="5" stroke-linecap="round" transform="rotate(${i * 60} ${cx} ${cy})"/>`;
  }
  return s + `<circle cx="${cx}" cy="${cy}" r="6" fill="${col}"/>`;
}

function curious() {
  const x0 = 50, x1 = 550, y = 300;
  let s = `<defs><linearGradient id="spec" x1="0" x2="1"><stop offset="0" stop-color="${C.rose}"/><stop offset="0.5" stop-color="${C.plumSoft}"/><stop offset="1" stop-color="${C.sage}"/></linearGradient></defs>`;
  s += `<rect x="${x0}" y="${y - 14}" width="${x1 - x0}" height="28" rx="14" fill="url(#spec)"/>`;
  [[x0 + 8, 'autopilot'], [300, 'curious'], [x1 - 8, 'alcohol-free']].forEach(([x, t], i) => {
    s += `<circle cx="${x}" cy="${y}" r="${i === 1 ? 26 : 18}" fill="#fff" stroke="${C.plum}" stroke-width="5"/>`;
    s += `<text x="${x}" y="${y + 66}" text-anchor="middle" font-family="${SANS}" font-weight="700" font-size="20" fill="${C.ink}">${t}</text>`;
  });
  s += bloom(300, 150, 96, C.rose, C.champagne);
  s += `<text x="300" y="173" text-anchor="middle" font-family="${SERIF}" font-weight="700" font-size="66" fill="${C.plum}">?</text>`;
  s += `<line x1="300" y1="238" x2="300" y2="268" stroke="${C.plum}" stroke-width="4" stroke-dasharray="2 9" stroke-linecap="round"/>`;
  return s;
}

function coins() {
  const items = [['24h', C.plumTint, C.plum], ['30d', '#E88B8B', '#fff'], ['60d', C.champagne, C.plum], ['90d', C.sage, '#fff'], ['6m', C.plumSoft, '#fff'], ['1y', '#C99A5B', '#fff']];
  let s = '';
  items.forEach(([t, fill, ink], i) => {
    const col = i % 3, row = Math.floor(i / 3);
    const cx = 120 + col * 180, cy = 190 + row * 190, r = 78;
    s += `<circle cx="${cx}" cy="${cy + 6}" r="${r}" fill="rgba(90,42,76,0.12)"/>`;
    s += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="#fff" stroke-width="6"/>`;
    s += `<circle cx="${cx}" cy="${cy}" r="${r - 16}" fill="none" stroke="${ink}" stroke-width="2" stroke-dasharray="3 7" opacity="0.7"/>`;
    s += `<text x="${cx}" y="${cy + 12}" text-anchor="middle" font-family="${SERIF}" font-weight="700" font-size="34" fill="${ink}">${t}</text>`;
  });
  return s;
}

function priceTags() {
  const cols = [C.sageTint, C.roseTint, C.plumTint, C.plum];
  let s = '';
  cols.forEach((f, i) => {
    const x = 40 + (i % 2) * 270, y = 70 + Math.floor(i / 2) * 210;
    const dark = i === 3;
    s += `<g transform="translate(${x} ${y})">
      <path d="M0 26 Q0 0 26 0 H210 Q236 0 236 26 V150 Q236 176 210 176 H26 Q0 176 0 150 Z" fill="${f}" stroke="#fff" stroke-width="4"/>
      <circle cx="30" cy="30" r="9" fill="${dark ? C.cream : '#fff'}"/>
      <rect x="28" y="70" width="${120 - i * 10}" height="14" rx="7" fill="${dark ? 'rgba(255,255,255,0.8)' : C.plum}" opacity="${dark ? 1 : 0.8}"/>
      <rect x="28" y="98" width="${150 - i * 14}" height="9" rx="4.5" fill="${dark ? 'rgba(255,255,255,0.45)' : C.plumSoft}" opacity="0.5"/>
      <rect x="28" y="122" width="${90}" height="9" rx="4.5" fill="${dark ? 'rgba(255,255,255,0.45)' : C.plumSoft}" opacity="0.5"/>
      <circle cx="198" cy="136" r="18" fill="${dark ? C.rose : C.sageDeep}"/>
      <path d="M189 136 l7 8 l13 -15" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    </g>`;
  });
  return s;
}

function grayArea() {
  let s = `<defs><linearGradient id="gz" x1="0" x2="1"><stop offset="0" stop-color="${C.sageTint}"/><stop offset="0.5" stop-color="#C9C2C8"/><stop offset="1" stop-color="${C.rose}"/></linearGradient></defs>`;
  s += `<rect x="40" y="250" width="520" height="56" rx="28" fill="url(#gz)"/>`;
  s += `<rect x="170" y="226" width="260" height="104" rx="30" fill="none" stroke="${C.plum}" stroke-width="4" stroke-dasharray="3 10" stroke-linecap="round"/>`;
  s += `<text x="300" y="282" text-anchor="middle" font-family="${SERIF}" font-weight="700" font-size="30" fill="${C.plum}">gray area</text>`;
  [[58, 'occasional'], [542, 'dependence']].forEach(([x, t]) => {
    s += `<circle cx="${x}" cy="278" r="16" fill="#fff" stroke="${C.plum}" stroke-width="5"/>`;
  });
  s += `<text x="58" y="360" text-anchor="start" font-family="${SANS}" font-weight="700" font-size="20" fill="${C.ink}">occasional</text>`;
  s += `<text x="542" y="360" text-anchor="end" font-family="${SANS}" font-weight="700" font-size="20" fill="${C.ink}">dependence</text>`;
  s += bloom(300, 130, 78, C.rose, C.champagne);
  s += `<text x="300" y="150" text-anchor="middle" font-family="${SERIF}" font-weight="700" font-size="52" fill="${C.plum}">?</text>`;
  return s;
}

function signposts() {
  const rows = [['stop completely', C.plum, '#fff', 90], ['cut down', C.rose, '#fff', 210], ['a month off', C.sage, '#fff', 330]];
  let s = `<rect x="296" y="60" width="16" height="400" rx="8" fill="${C.plumTint}"/>`;
  rows.forEach(([t, f, ink, y], i) => {
    const x0 = i === 1 ? 120 : 140;
    s += `<path d="M${x0} ${y} H470 L520 ${y + 36} L470 ${y + 72} H${x0} Q${x0 - 14} ${y + 72} ${x0 - 14} ${y + 58} V${y + 14} Q${x0 - 14} ${y} ${x0} ${y} Z" fill="${f}" stroke="#fff" stroke-width="4"/>`;
    s += `<text x="${x0 + 14}" y="${y + 45}" font-family="${SERIF}" font-weight="700" font-size="28" fill="${ink}">${t}</text>`;
  });
  s += bloom(304, 30, 34, C.champagne, C.plum);
  return s;
}

function womenPhone() {
  let s = '';
  s += `<circle cx="120" cy="150" r="70" fill="${C.roseTint}"/><circle cx="500" cy="380" r="86" fill="${C.sageTint}"/><circle cx="470" cy="110" r="38" fill="${C.plumTint}"/>`;
  s += `<g transform="translate(190 30)"><rect width="220" height="440" rx="36" fill="${C.plum}" stroke="#fff" stroke-width="5"/><rect x="14" y="14" width="192" height="412" rx="26" fill="${C.cream}"/><rect x="84" y="24" width="52" height="9" rx="4.5" fill="${C.plumTint}"/>${bloom(110, 150, 70, C.rose, C.champagne)}<rect x="46" y="260" width="128" height="14" rx="7" fill="${C.plum}" opacity="0.85"/><rect x="62" y="288" width="96" height="9" rx="4.5" fill="${C.plumSoft}" opacity="0.45"/><rect x="40" y="350" width="140" height="40" rx="20" fill="${C.plum}"/></g>`;
  return s;
}

function appCard() {
  const chips = [['day counter', 60, 90, C.roseTint], ['money saved', 360, 120, C.sageTint], ['craving SOS', 40, 380, C.plumTint], ['private journal', 330, 400, C.blush]];
  let s = `<rect x="190" y="150" width="220" height="220" rx="52" fill="${C.petal}" stroke="#fff" stroke-width="6"/>` + `<rect x="190" y="150" width="220" height="220" rx="52" fill="none" stroke="${C.line}" stroke-width="2"/>` + bloom(300, 260, 100, C.plumSoft, C.champagne);
  chips.forEach(([t, x, y, f]) => {
    s += `<rect x="${x}" y="${y}" width="${t.length * 12 + 36}" height="46" rx="23" fill="${f}" stroke="#fff" stroke-width="3"/><text x="${x + 18}" y="${y + 30}" font-family="${SANS}" font-weight="700" font-size="20" fill="${C.ink}">${t}</text>`;
  });
  return s;
}

function weekDots() {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const filled = [1, 0, 1, 1, 0, 1, 1];
  let s = `<rect x="20" y="170" width="560" height="180" rx="40" fill="#fff" stroke="${C.line}" stroke-width="3"/>`;
  days.forEach((d, i) => {
    const cx = 62 + i * 79, cy = 260;
    s += filled[i] ? `<circle cx="${cx}" cy="${cy}" r="30" fill="${C.sageDeep}"/><path d="M${cx - 12} ${cy} l9 10 l17 -19" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>` : `<circle cx="${cx}" cy="${cy}" r="30" fill="none" stroke="${C.plumTint}" stroke-width="4" stroke-dasharray="3 7"/>`;
    s += `<text x="${cx}" y="${cy + 62}" text-anchor="middle" font-family="${SANS}" font-weight="700" font-size="20" fill="${C.ink}">${d}</text>`;
  });
  s += bloom(300, 100, 56, C.rose, C.champagne);
  return s;
}

function calcRing() {
  const cx = 300, cy = 250, r = 150;
  const a = (deg) => [cx + r * Math.cos((deg - 90) * Math.PI / 180), cy + r * Math.sin((deg - 90) * Math.PI / 180)];
  const [x1, y1] = a(0), [x2, y2] = a(250);
  let s = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#fff" stroke="${C.plumTint}" stroke-width="26"/>`;
  s += `<path d="M${x1} ${y1} A${r} ${r} 0 1 1 ${x2} ${y2}" fill="none" stroke="${C.plum}" stroke-width="26" stroke-linecap="round"/>`;
  s += bloom(x2, y2, 38, C.rose, C.champagne);
  s += `<text x="${cx}" y="${cy + 6}" text-anchor="middle" font-family="${SERIF}" font-weight="700" font-size="56" fill="${C.plum}">days</text>`;
  s += `<text x="${cx}" y="${cy + 46}" text-anchor="middle" font-family="${SANS}" font-weight="700" font-size="22" fill="${C.plumSoft}">sober</text>`;
  [['weeks', 30, 440, C.roseTint], ['money saved', 170, 448, C.sageTint], ['next milestone', 340, 440, C.plumTint]].forEach(([t, x, y, f]) => {
    s += `<rect x="${x}" y="${y}" width="${t.length * 11 + 30}" height="40" rx="20" fill="${f}" stroke="#fff" stroke-width="3"/><text x="${x + 15}" y="${y + 26}" font-family="${SANS}" font-weight="700" font-size="17" fill="${C.ink}">${t}</text>`;
  });
  return s;
}

function wave() {
  let s = `<path d="M20 380 C 120 380, 150 150, 300 130 S 480 380, 580 380 V470 H20 Z" fill="${C.plumTint}"/>`;
  s += `<path d="M20 380 C 120 380, 150 150, 300 130 S 480 380, 580 380" fill="none" stroke="${C.plum}" stroke-width="10" stroke-linecap="round"/>`;
  s += `<path d="M20 430 C 140 430, 170 300, 300 290 S 460 430, 580 430 V470 H20 Z" fill="${C.rose}" opacity="0.35"/>`;
  s += `<circle cx="300" cy="112" r="24" fill="${C.rose}" stroke="#fff" stroke-width="5"/>` + `<text x="300" y="60" text-anchor="middle" font-family="${SERIF}" font-weight="700" font-size="30" fill="${C.plum}">urge</text>`;
  s += bloom(520, 130, 46, C.champagne, C.plum);
  return s;
}

function craveChips() {
  const items = [['ride it out', C.plum, '#fff'], ['talk it through', C.rose, '#fff'], ['distract', C.sage, '#fff'], ['leave', C.champagne, C.plum]];
  let s = '';
  items.forEach(([t, f, ink], i) => {
    const x = 50 + (i % 2) * 260, y = 120 + Math.floor(i / 2) * 170;
    s += `<rect x="${x}" y="${y}" width="240" height="120" rx="60" fill="${f}" stroke="#fff" stroke-width="5"/><circle cx="${x + 48}" cy="${y + 60}" r="20" fill="${ink}" opacity="0.9"/><text x="${x + 82}" y="${y + 70}" font-family="${SERIF}" font-weight="700" font-size="24" fill="${ink}">${t}</text>`;
  });
  return s;
}

function stairs() {
  let s = '';
  for (let i = 0; i < 5; i++) {
    const x = 40 + i * 104, h = 70 + i * 62, y = 460 - h;
    s += `<rect x="${x}" y="${y}" width="100" height="${h}" rx="14" fill="${i === 0 ? C.rose : [C.plumTint, C.roseTint, C.sageTint, C.plum][i - 1]}" stroke="#fff" stroke-width="4"/>`;
    s += `<text x="${x + 50}" y="${y + 46}" text-anchor="middle" font-family="${SERIF}" font-weight="700" font-size="34" fill="${i === 4 ? '#fff' : C.plum}">${i + 1}</text>`;
  }
  s += `<circle cx="90" cy="298" r="34" fill="#fff" stroke="${C.rose}" stroke-width="5"/><path d="M90 280 v36 M72 298 h36" stroke="${C.roseDeep}" stroke-width="8" stroke-linecap="round"/>`;
  s += bloom(540, 70, 44, C.champagne, C.plum);
  return s;
}

function benefitBars() {
  const bars = [['sleep', 150, C.plumSoft], ['money', 240, C.sageDeep], ['blood pressure', 190, C.rose], ['liver', 290, C.plum]];
  let s = `<line x1="40" y1="440" x2="570" y2="440" stroke="${C.line}" stroke-width="4" stroke-linecap="round"/>`;
  bars.forEach(([t, h, f], i) => {
    const x = 60 + i * 128;
    s += `<rect x="${x}" y="${440 - h}" width="96" height="${h}" rx="20" fill="${f}" stroke="#fff" stroke-width="4"/>`;
    s += `<text x="${x + 48}" y="${440 - h - 14}" text-anchor="middle" font-family="${SERIF}" font-weight="700" font-size="30" fill="${C.plum}">↑</text>`;
    s += `<text x="${x + 48}" y="478" text-anchor="middle" font-family="${SANS}" font-weight="700" font-size="${t.length > 8 ? 15 : 19}" fill="${C.ink}">${t}</text>`;
  });
  s += bloom(540, 70, 40, C.rose, C.champagne);
  return s;
}

function notebook() {
  let s = `<g transform="rotate(-6 300 260)"><rect x="110" y="50" width="380" height="420" rx="26" fill="#fff" stroke="${C.line}" stroke-width="4"/><rect x="110" y="50" width="48" height="420" rx="24" fill="${C.plum}"/>`;
  for (let i = 0; i < 8; i++) s += `<line x1="190" y1="${130 + i * 42}" x2="460" y2="${130 + i * 42}" stroke="${C.plumTint}" stroke-width="3" stroke-linecap="round"/>`;
  s += `<rect x="190" y="80" width="170" height="16" rx="8" fill="${C.plum}" opacity="0.8"/><path d="M440 50 v70 l18 -16 l18 16 v-70" fill="${C.rose}"/></g>`;
  s += `<g transform="rotate(38 470 400)"><rect x="440" y="330" width="22" height="150" rx="10" fill="${C.champagne}" stroke="#fff" stroke-width="3"/><path d="M440 480 l11 28 l11 -28 z" fill="${C.plum}"/></g>`;
  return s;
}

function activities() {
  const g = (cx, cy, inner) => `<g transform="translate(${cx} ${cy}) scale(0.78) translate(${-cx} ${-cy})">${inner}</g>`;
  let s = '';
  s += `<circle cx="120" cy="250" r="82" fill="${C.roseTint}" stroke="#fff" stroke-width="5"/>` + g(130, 250, `<rect x="95" y="225" width="64" height="58" rx="12" fill="${C.rose}"/><path d="M159 238 q28 0 28 20 q0 20 -28 20" fill="none" stroke="${C.rose}" stroke-width="9"/><path d="M110 200 q6 -16 0 -28 M130 200 q6 -16 0 -28" fill="none" stroke="${C.plum}" stroke-width="5" stroke-linecap="round"/>`);
  s += `<circle cx="300" cy="250" r="82" fill="${C.sageTint}" stroke="#fff" stroke-width="5"/>` + `<g fill="${C.sageDeep}"><ellipse cx="282" cy="268" rx="17" ry="30" transform="rotate(-12 282 268)"/><ellipse cx="282" cy="224" rx="12" ry="14" transform="rotate(-12 282 224)"/><ellipse cx="322" cy="246" rx="17" ry="30" transform="rotate(10 322 246)"/><ellipse cx="322" cy="202" rx="12" ry="14" transform="rotate(10 322 202)"/></g>`;
  s += `<circle cx="480" cy="250" r="82" fill="${C.plumTint}" stroke="#fff" stroke-width="5"/>` + g(480, 250, `<path d="M430 210 q50 -16 50 10 v70 q0 -26 -50 -10 z M530 210 q-50 -16 -50 10 v70 q0 -26 50 -10 z" fill="${C.plum}" opacity="0.9"/>`);
  s += bloom(300, 420, 36, C.rose, C.champagne);
  return s;
}

function sunCloud() {
  let s = `<circle cx="300" cy="190" r="120" fill="${C.champagne}" opacity="0.55"/><circle cx="300" cy="190" r="78" fill="${C.champagne}"/>`;
  for (let i = 0; i < 12; i++) s += `<line x1="300" y1="50" x2="300" y2="68" stroke="${C.champagne}" stroke-width="8" stroke-linecap="round" transform="rotate(${i * 30} 300 190)"/>`;
  s += `<g><ellipse cx="400" cy="250" rx="86" ry="46" fill="#C9C2C8"/><ellipse cx="340" cy="270" rx="70" ry="40" fill="#C9C2C8"/><ellipse cx="450" cy="278" rx="70" ry="36" fill="#C9C2C8"/><circle cx="395" cy="258" r="5" fill="${C.plum}"/><circle cx="425" cy="258" r="5" fill="${C.plum}"/><path d="M392 280 q18 -12 36 0" fill="none" stroke="${C.plum}" stroke-width="4" stroke-linecap="round"/></g>`;
  s += `<rect x="60" y="400" width="480" height="70" rx="35" fill="#fff" stroke="${C.line}" stroke-width="3"/>` + bloom(130, 435, 30, C.rose, C.champagne);
  s += `<text x="190" y="443" font-family="${SANS}" font-weight="700" font-size="24" fill="${C.plum}">morning after: just a feeling</text>`;
  return s;
}

function booksPhones() {
  const bk = [['#7C4B6D', 300, 170, 0], [C.rose, 120, 200, -4], [C.sageDeep, 190, 120, 3]];
  let s = '';
  [[60, 330, 360, 64, C.plum], [90, 262, 320, 64, C.rose], [70, 194, 340, 64, C.sageDeep]].forEach(([x, y, w, h, f]) => {
    s += `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${f}" stroke="#fff" stroke-width="4"/><rect x="${x + 22}" y="${y + 24}" width="${w * 0.5}" height="12" rx="6" fill="rgba(255,255,255,0.75)"/>`;
  });
  s += `<path d="M360 140 q-12 -110 90 -110 q102 0 90 110" fill="none" stroke="${C.plum}" stroke-width="16" stroke-linecap="round"/><rect x="340" y="130" width="46" height="84" rx="22" fill="${C.plum}" stroke="#fff" stroke-width="4"/><rect x="514" y="130" width="46" height="84" rx="22" fill="${C.plum}" stroke="#fff" stroke-width="4"/>`;
  s += bloom(450, 330, 44, C.rose, C.champagne);
  return s;
}

function janChecks() {
  let s = `<rect x="30" y="90" width="540" height="340" rx="30" fill="#fff" stroke="${C.line}" stroke-width="3"/><rect x="30" y="90" width="540" height="70" rx="30" fill="${C.plum}"/><rect x="30" y="130" width="540" height="30" fill="${C.plum}"/>`;
  s += `<text x="60" y="138" font-family="${SERIF}" font-weight="700" font-size="30" fill="#fff" letter-spacing="3">DRY JANUARY</text>`;
  s += snowflake(520, 125, 22, '#fff');
  for (let i = 0; i < 21; i++) {
    const col = i % 7, row = Math.floor(i / 7), x = 62 + col * 74, y = 190 + row * 74;
    s += `<circle cx="${x + 22}" cy="${y + 22}" r="24" fill="${i < 17 ? C.sageDeep : 'none'}" ${i < 17 ? '' : `stroke="${C.plumTint}" stroke-width="3" stroke-dasharray="3 7"`}/>`;
    if (i < 17) s += `<path d="M${x + 11} ${y + 22} l8 9 l15 -17" fill="none" stroke="#fff" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>`;
  }
  return s;
}

function calGrid() {
  let s = `<rect x="30" y="50" width="540" height="420" rx="28" fill="#fff" stroke="${C.line}" stroke-width="3"/>`;
  for (let i = 0; i < 31; i++) {
    const col = i % 7, row = Math.floor(i / 7), x = 52 + col * 71, y = 76 + row * 76;
    s += `<rect x="${x}" y="${y}" width="62" height="64" rx="12" fill="${i < 18 ? C.sageTint : 'none'}" stroke="${C.plumTint}" stroke-width="2.5"/><text x="${x + 31}" y="${y + 26}" text-anchor="middle" font-family="${SERIF}" font-weight="700" font-size="17" fill="${C.plum}">${i + 1}</text>`;
    s += i < 18 ? `<circle cx="${x + 31}" cy="${y + 46}" r="9" fill="${C.sageDeep}"/>` : `<circle cx="${x + 31}" cy="${y + 46}" r="9" fill="none" stroke="${C.plumSoft}" stroke-width="2"/>`;
  }
  s += bloom(540, 480, 40, C.rose, C.champagne);
  return s;
}

function glasses() {
  let s = `<line x1="40" y1="440" x2="570" y2="440" stroke="${C.line}" stroke-width="4" stroke-linecap="round"/>`;
  // beer
  s += `<path d="M70 190 h110 l-10 250 h-90 z" fill="${C.champagne}" stroke="#fff" stroke-width="4"/><rect x="62" y="170" width="126" height="34" rx="16" fill="#fff" stroke="${C.line}" stroke-width="3"/><path d="M180 230 h24 q22 0 22 40 q0 40 -22 40 h-28" fill="none" stroke="${C.champagne}" stroke-width="12" stroke-linecap="round"/>`;
  // wine
  s += `<path d="M285 220 h90 q4 90 -45 110 q-49 -20 -45 -110 z" fill="${C.rose}" stroke="#fff" stroke-width="4" opacity="0.9"/><line x1="330" y1="330" x2="330" y2="430" stroke="${C.plumSoft}" stroke-width="8" stroke-linecap="round"/><ellipse cx="330" cy="436" rx="44" ry="8" fill="${C.plumSoft}"/>`;
  // shot
  s += `<path d="M470 340 h80 l-12 100 h-56 z" fill="${C.plumTint}" stroke="#fff" stroke-width="4"/><path d="M473 370 h74 l-8 70 h-58 z" fill="${C.plumSoft}" opacity="0.75"/>`;
  [['beer', 125], ['wine', 330], ['shot', 510]].forEach(([t, x]) => { s += `<text x="${x}" y="478" text-anchor="middle" font-family="${SANS}" font-weight="700" font-size="20" fill="${C.ink}">${t}</text>`; });
  s += `<text x="300" y="90" text-anchor="middle" font-family="${SERIF}" font-weight="700" font-size="34" fill="${C.plum}">1 standard drink each</text>` + bloom(300, 140, 0, C.rose, C.champagne);
  return s;
}

function wineGlass() {
  let s = `<path d="M210 70 h180 q10 190 -90 230 q-100 -40 -90 -230 z" fill="${C.petal}" stroke="${C.plum}" stroke-width="7"/>`;
  s += `<path d="M222 200 h156 q-12 78 -78 100 q-66 -22 -78 -100 z" fill="${C.rose}" opacity="0.9"/>`;
  s += `<line x1="300" y1="300" x2="300" y2="420" stroke="${C.plum}" stroke-width="10" stroke-linecap="round"/><ellipse cx="300" cy="428" rx="76" ry="14" fill="${C.plum}"/>`;
  s += `<line x1="380" y1="200" x2="440" y2="200" stroke="${C.sageDeep}" stroke-width="5" stroke-dasharray="4 8" stroke-linecap="round"/><text x="450" y="207" font-family="${SANS}" font-weight="800" font-size="22" fill="${C.sageDeep}">5 oz = 1 drink</text>`;
  s += bloom(110, 150, 50, C.champagne, C.plum);
  return s;
}

function scale() {
  let s = `<line x1="300" y1="110" x2="300" y2="420" stroke="${C.plum}" stroke-width="12" stroke-linecap="round"/><rect x="220" y="410" width="160" height="26" rx="13" fill="${C.plum}"/><rect x="60" y="120" width="480" height="12" rx="6" fill="${C.plumSoft}" transform="rotate(-6 300 126)"/>`;
  s += `<path d="M96 156 q60 70 140 0" fill="none" stroke="${C.plum}" stroke-width="6"/><path d="M370 126 q60 70 140 0" fill="none" stroke="${C.plum}" stroke-width="6"/>`;
  s += `<path d="M130 262 h72 q4 62 -36 78 q-40 -16 -36 -78 z" fill="${C.rose}" stroke="#fff" stroke-width="4" transform="translate(0 -80)"/>`;
  s += bloom(440, 160, 46, C.sage, C.champagne);
  s += `<circle cx="300" cy="106" r="16" fill="${C.champagne}" stroke="${C.plum}" stroke-width="5"/>`;
  return s;
}

function window() {
  let s = `<rect x="110" y="60" width="380" height="330" rx="28" fill="${C.blush}" stroke="${C.plumTint}" stroke-width="10"/><line x1="300" y1="60" x2="300" y2="390" stroke="${C.plumTint}" stroke-width="8"/><line x1="110" y1="225" x2="490" y2="225" stroke="${C.plumTint}" stroke-width="8"/>`;
  s += `<circle cx="400" cy="130" r="36" fill="${C.champagne}" opacity="0.8"/><rect x="90" y="388" width="420" height="26" rx="13" fill="${C.plumSoft}"/>`;
  s += `<path d="M180 460 v-70 h90 v70 M180 420 h90" fill="none" stroke="${C.plum}" stroke-width="10" stroke-linecap="round"/>`;
  s += `<path d="M360 388 h40 l-6 -44 h-28 z" fill="${C.rose}" stroke="#fff" stroke-width="3"/>` + bloom(450, 360, 26, C.rose, C.champagne);
  return s;
}

function moonBed() {
  let s = `<path d="M400 60 a110 110 0 1 0 90 160 a90 90 0 1 1 -90 -160 z" fill="${C.champagne}"/>`;
  [[130, 90], [220, 150], [90, 200], [320, 70], [260, 40]].forEach(([x, y]) => { s += `<circle cx="${x}" cy="${y}" r="7" fill="${C.champagne}"/>`; });
  s += `<rect x="60" y="330" width="480" height="110" rx="26" fill="${C.plumTint}" stroke="#fff" stroke-width="4"/><rect x="60" y="300" width="130" height="70" rx="26" fill="#fff" stroke="${C.line}" stroke-width="3"/><rect x="60" y="360" width="480" height="80" rx="26" fill="${C.plumSoft}"/>`;
  s += bloom(125, 330, 30, C.rose, C.champagne);
  s += `<text x="420" y="260" font-family="${SERIF}" font-weight="700" font-size="40" fill="${C.plum}">z z</text>`;
  return s;
}

function overlap() {
  let s = `<circle cx="230" cy="260" r="150" fill="${C.plumSoft}" opacity="0.8"/><circle cx="370" cy="260" r="150" fill="${C.rose}" opacity="0.7"/>`;
  s += bloom(300, 260, 60, '#fff', C.champagne);
  s += `<text x="170" y="270" text-anchor="middle" font-family="${SANS}" font-weight="800" font-size="22" fill="#fff">alcohol</text><text x="430" y="270" text-anchor="middle" font-family="${SANS}" font-weight="800" font-size="22" fill="#fff">mood</text>`;
  return s;
}

function holidayRow() {
  const items = [['Oct 31', C.roseDeep], ['Nov 26', C.champagne], ['Parties', C.sageDeep], ['Dec 25', C.rose], ['Dec 31', C.plum]];
  let s = `<line x1="60" y1="260" x2="540" y2="260" stroke="${C.plumTint}" stroke-width="10" stroke-linecap="round"/>`;
  items.forEach(([t, f], i) => {
    const x = 70 + i * 115, up = i % 2 === 0;
    s += `<circle cx="${x}" cy="260" r="26" fill="${f}" stroke="#fff" stroke-width="5"/><path d="M${x - 8} 260 l6 7 l12 -13" fill="none" stroke="#fff" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>`;
    s += `<text x="${x}" y="${up ? 205 : 330}" text-anchor="middle" font-family="${SANS}" font-weight="800" font-size="19" fill="${C.ink}">${t}</text>`;
  });
  s += bloom(300, 440, 44, C.rose, C.champagne);
  return s;
}

const ASSETS = [
  { slug: 'best-sober-tracker-apps', og: 'Best sober tracker apps, compared', kicker: 'COMPARISON', art: bestApps, wrapAt: 14, artScale: 0.9, artX: 625 },
  { slug: 'sobriety-milestones', og: 'Sobriety milestones: what is known', kicker: 'GUIDE', art: milestones },
  {
    slug: 'sober-october', og: 'Sober October: a practical guide', kicker: 'GUIDE',
    art: () => calendar('OCTOBER', { head: C.roseDeep, accent: C.rose, cells: [C.champagne, '#E2A877', C.rose, C.roseDeep, '#B2565B', C.plumSoft] }, false),
  },
  {
    slug: 'dry-january-app', og: 'The best apps for Dry January', kicker: 'GUIDE',
    art: () => calendar('JANUARY', { head: C.plum, accent: C.sage, cells: ['#9BB8C9', '#8FAE8F', '#7C9CA8', C.sageDeep, '#6F7FA6', C.plumSoft] }, true),
  },
  { slug: 'sober-curious', og: 'What does sober curious mean?', kicker: 'EXPLAINER', art: curious },
  { slug: 'reframe-app-cost', og: 'Is Reframe free? Costs compared', kicker: 'PRICING', art: priceTags, wrapAt: 16, artScale: 0.92, artX: 640 },
  { slug: 'best-app-to-quit-drinking', og: 'Best app to quit drinking: how to choose', kicker: 'GUIDE', art: signposts, wrapAt: 16 },
  { slug: 'sober-app-for-women', og: 'Is there a sober app for women?', kicker: 'GUIDE', art: womenPhone, wrapAt: 16, artScale: 0.95, artX: 640 },
  { slug: 'sober-girl-app', og: 'Sober Girl app: features, price, privacy', kicker: 'FACT SHEET', art: appCard, wrapAt: 16 },
  { slug: 'alcohol-free-days', og: 'Alcohol-free days: how many and how to track', kicker: 'GUIDE', art: weekDots, wrapAt: 14, artScale: 0.92, artX: 640 },
  { slug: 'sobriety-calculator', og: 'Sobriety calculator: days sober', kicker: 'TOOL', art: calcRing, wrapAt: 18 },
  { slug: 'urge-surfing', og: 'Urge surfing: ride out a craving', kicker: 'GUIDE', art: wave, wrapAt: 16 },
  { slug: 'how-to-stop-alcohol-cravings', og: 'How to stop alcohol cravings', kicker: 'GUIDE', art: craveChips, wrapAt: 16 },
  { slug: 'how-to-quit-drinking-on-your-own', og: 'How to quit drinking on your own, safely', kicker: 'GUIDE', art: stairs, wrapAt: 16 },
  { slug: 'benefits-of-quitting-alcohol', og: 'Benefits of quitting alcohol: the evidence', kicker: 'GUIDE', art: benefitBars, wrapAt: 16 },
  { slug: 'sober-journal-prompts', og: 'Sober journal prompts for early sobriety', kicker: 'GUIDE', art: notebook, wrapAt: 16 },
  { slug: 'what-to-do-instead-of-drinking', og: 'What to do instead of drinking', kicker: 'GUIDE', art: activities, wrapAt: 16 },
  { slug: 'hangxiety', og: 'Hangxiety: why you feel anxious after drinking', kicker: 'EXPLAINER', art: sunCloud, wrapAt: 16 },
  { slug: 'sober-books-and-podcasts', og: 'Sober books and podcasts for women', kicker: 'DIRECTORY', art: booksPhones, wrapAt: 16 },
  { slug: 'dry-january-guide', og: 'Dry January: benefits, rules and tips', kicker: 'GUIDE', art: janChecks, wrapAt: 16 },
  { slug: 'sobriety-calendar', og: 'Printable sobriety calendar', kicker: 'TOOL', art: calGrid, wrapAt: 16 },
  { slug: 'how-much-alcohol-is-too-much-for-women', og: 'How much alcohol is too much for a woman?', kicker: 'EXPLAINER', art: glasses, wrapAt: 15, artScale: 0.88, artX: 660 },
  { slug: 'how-to-stop-drinking-wine-every-night', og: 'How to stop drinking wine every night', kicker: 'GUIDE', art: wineGlass, wrapAt: 16 },
  { slug: 'alcohol-and-weight', og: 'Alcohol and weight: the evidence', kicker: 'EXPLAINER', art: scale, wrapAt: 16 },
  { slug: 'drinking-alone', og: 'Is drinking alone a problem?', kicker: 'EXPLAINER', art: window, wrapAt: 16 },
  { slug: 'sleep-after-quitting-alcohol', og: 'Sleep after quitting alcohol', kicker: 'GUIDE', art: moonBed, wrapAt: 16 },
  { slug: 'alcohol-and-depression', og: 'Alcohol and depression: what research says', kicker: 'EXPLAINER', art: overlap, wrapAt: 16 },
  { slug: 'sober-holidays', og: 'Sober holidays: Halloween to New Year', kicker: 'GUIDE', art: holidayRow, wrapAt: 14, artScale: 0.88, artX: 650 },
  { slug: 'gray-area-drinking', og: 'Gray area drinking: what it means', kicker: 'EXPLAINER', art: grayArea },
];

// ---- composition --------------------------------------------------------------------------

const bg = (w, h) => `<defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${C.cream}"/><stop offset="1" stop-color="${C.blush}"/></linearGradient></defs>
<rect width="${w}" height="${h}" fill="url(#bg)"/>
<circle cx="${w * 0.85}" cy="${h * 0.12}" r="${h * 0.42}" fill="${C.rose}" opacity="0.13"/>
<circle cx="${w * 0.08}" cy="${h * 0.95}" r="${h * 0.34}" fill="${C.plumTint}" opacity="0.7"/>`;

function wrap(text, max) {
  const lines = [];
  let cur = '';
  for (const w of text.split(' ')) {
    if ((cur + ' ' + w).trim().length > max && cur) { lines.push(cur); cur = w; } else cur = (cur + ' ' + w).trim();
  }
  return [...lines, cur];
}

const hero = (a) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630" role="img">${bg(1200, 630)}
<g transform="translate(${600 - 300 * 1.05} ${315 - 270 * 1.05}) scale(1.05)">${a.art()}</g></svg>`;

const og = (a) => {
  const lines = wrap(a.og, a.wrapAt ?? 19);
  const text = lines.map((l, i) => `<text x="72" y="${250 + i * 70}" font-family="${SERIF}" font-weight="700" font-size="60" fill="${C.ink}">${l.replace(/&/g, '&amp;')}</text>`).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">${bg(1200, 630)}
<rect x="72" y="118" width="${a.kicker.length * 15 + 36}" height="38" rx="19" fill="${C.plumTint}"/>
<text x="90" y="144" font-family="${SANS}" font-weight="800" font-size="17" letter-spacing="2.5" fill="${C.plum}">${a.kicker}</text>
${text}
<text x="150" y="560" font-family="${SERIF}" font-weight="700" font-size="30" fill="${C.plum}">sober girl</text>
<text x="150" y="590" font-family="${SANS}" font-size="18" fill="${C.plumSoft}">Sourced guides from the Sober Girl team</text>
<g transform="translate(${a.artX ?? 590} ${a.artScale ? 110 : 85}) scale(${a.artScale ?? 0.98})">${a.art()}</g></svg>`;
};

const icon = await sharp(ICON).resize(64, 64).png().toBuffer();
for (const a of ASSETS) {
  fs.writeFileSync(path.join(OUT, `${a.slug}-hero.svg`), hero(a));
  const png = await sharp(Buffer.from(og(a))).png().toBuffer();
  // brand icon beside the wordmark, bottom-left
  await sharp(png).composite([{ input: icon, left: 72, top: 538 }]).png({ compressionLevel: 9 }).toFile(path.join(OUT, `${a.slug}-og.png`));
  console.log('wrote', a.slug);
}
