// Renders the KSeF guide figures (scripts/ksef-figures/figures.mjs) to WebP with headless Chrome.
// Style: white background, the page keyword as the title, 3–4 items of line icon + short label + one line,
// optionally a small real screenshot of the Faktury KSeF app in a phone frame. Each figure is drawn twice:
// wide (1200x675, 16:9, desktop; also scaled to the 640x360 hub thumbnail) and narrow (480 CSS px at 2x,
// phones). Writes public/ksef/figures/*.webp, the manifest data/ksef/figures.ts, and a 1200x630 PNG share
// card per guide in public/ksef/og/.
// Usage: node scripts/ksef-figures/render.mjs [figure-name ...]
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer-core';
import sharp from 'sharp';
import { FIGURES, OG_CARDS } from './figures.mjs';
import { icon } from './icons.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const outFig = path.join(root, 'public/ksef/figures');
const outOg = path.join(root, 'public/ksef/og');
fs.mkdirSync(outFig, { recursive: true });
fs.mkdirSync(outOg, { recursive: true });

const CHROME = process.env.CHROME_PATH ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const dataUri = (rel) => `data:image/webp;base64,${fs.readFileSync(path.join(root, 'public/ksef', rel)).toString('base64')}`;
const APP_ICON = dataUri('ksef-faktury-ikona-64.webp');
const SHOT_FILES = {
  start: 'screenshots/ksef-aplikacja-faktury-do-zaplaty.webp',
  invoices: 'screenshots/ksef-faktury-kosztowe-wyszukiwarka.webp',
  invoice: 'screenshots/ksef-podglad-faktury-dane-do-przelewu.webp',
  payments: 'screenshots/ksef-terminy-platnosci-faktur.webp',
  export: 'screenshots/ksef-zestawienie-dla-ksiegowej-pdf-csv-xml.webp',
  connect: 'screenshots/ksef-polaczenie-certyfikat-token.webp',
};

const CSS = `
:root{--ink:#1C1714;--ink2:#5F5852;--ink3:#9A938C;--line:#ECE7E1;--tile:#F7F5F2;--orange:#EF6C30;--od:#C4501A;--os:#FFEDE3;--green:#1E9E63;--gs:#E4F5EC;--red:#D9443F;--rs:#FCEBEA}
*{box-sizing:border-box}html,body{margin:0;background:#fff}
body{font-family:'Onest',system-ui,sans-serif;color:var(--ink);-webkit-font-smoothing:antialiased}
.fig{background:#fff;width:var(--w);padding:var(--pad);display:flex;flex-direction:column}
.wide{--w:1200px;height:675px;--pad:56px 64px 40px;--t:46px;--b:20px;--s:15px;--ic:52px;--gap:26px}
.wide:not(.has-shot){--t:54px;--b:22px;--ic:62px;--gap:30px}
.wide:not(.has-shot) .items{margin-top:44px}
.narrow{--w:480px;--pad:28px 24px 22px;--t:28px;--b:16px;--s:12px;--ic:42px;--gap:18px}
.brand{display:flex;align-items:center;gap:10px;font-size:var(--s);font-weight:600;color:var(--ink2)}
.brand img{width:26px;height:26px;border-radius:7px}
h1{font-size:var(--t);line-height:1.08;letter-spacing:-.03em;font-weight:700;margin:18px 0 0;text-wrap:balance;max-width:26ch}
.wide.has-shot h1{max-width:16ch}
.sub{font-size:calc(var(--b)*1.05);color:var(--ink2);margin:12px 0 0;line-height:1.4;max-width:46ch}
.main{flex:1;display:flex;gap:48px;align-items:center;min-height:0}
.narrow .main{flex-direction:column;align-items:stretch;gap:22px;margin-top:22px}
.content{flex:1;min-width:0;display:flex;flex-direction:column;justify-content:center}
.items{display:grid;gap:var(--gap) 34px;margin-top:34px}
.narrow .items{margin-top:22px}
.cols-1{grid-template-columns:1fr}.cols-2{grid-template-columns:1fr 1fr}.cols-3{grid-template-columns:repeat(3,1fr)}.cols-4{grid-template-columns:repeat(4,1fr)}
.narrow .items{grid-template-columns:1fr!important}
.item{display:flex;gap:16px;align-items:flex-start}
.ic{width:var(--ic);height:var(--ic);border-radius:14px;background:var(--os);color:var(--od);display:grid;place-items:center;flex:none}
.ic svg{width:55%;height:55%}
.ic.ok{background:var(--gs);color:var(--green)}.ic.no{background:var(--rs);color:var(--red)}.ic.mute{background:var(--tile);color:var(--ink2)}
.ic.num{background:var(--orange);color:#fff;font-weight:700;font-size:calc(var(--b)*1.1)}
.label{font-size:calc(var(--b)*1.12);font-weight:700;line-height:1.2;letter-spacing:-.01em}
.text{font-size:var(--b);color:var(--ink2);line-height:1.38;margin-top:5px}
.mono{font-family:'JetBrains Mono',ui-monospace,monospace;letter-spacing:0}
.chip{display:inline-block;font-size:var(--s);font-weight:600;padding:3px 10px;border-radius:999px;background:var(--os);color:var(--od);margin-bottom:8px}
.steps .item{position:relative}
.wide .steps .item{flex-direction:column}
.wide .steps.cols-3 .item:not(:last-child)::after,.wide .steps.cols-4 .item:not(:last-child)::after{content:'';position:absolute;top:calc(var(--ic)/2);left:calc(var(--ic) + 14px);right:-20px;border-top:2px dashed var(--line)}
.phone{flex:none;width:230px;display:flex;flex-direction:column;align-items:center;gap:10px}
.narrow .phone{width:100%}
.phone .frame{width:230px;border-radius:30px;border:7px solid #1C1714;overflow:hidden;box-shadow:0 22px 40px -18px rgba(58,36,20,.35);background:#fff}
.narrow .phone .frame{width:200px}
.phone .frame img{display:block;width:100%;object-fit:cover;object-position:top;height:100%}
.phone .cap{font-size:var(--s);color:var(--ink3);font-weight:500}
.wide .phone .frame{height:470px}
.narrow .phone .frame{height:330px}
.foot{display:flex;justify-content:space-between;gap:16px;font-size:var(--s);color:var(--ink3);border-top:1px solid var(--line);padding-top:14px;margin-top:22px}
.narrow .foot{flex-direction:column;gap:3px}
.foot b{color:var(--ink2);font-weight:600}
.big{font-size:calc(var(--b)*2.1);font-weight:700;letter-spacing:-.01em;line-height:1.1}
`;

// Keeps short hyphenated tokens (ZAW-FA, A–F, 0–9, e-US) on one line.
const keep = (t = '') => t.replace(/(^|[\s(])([^\s(),.]{1,9}[-–][^\s(),.]{1,9})/g, '$1<span style="white-space:nowrap">$2</span>');

function shot(key) {
  if (!key) return '';
  return `<div class="phone"><div class="frame"><img src="${dataUri(SHOT_FILES[key])}"></div><div class="cap">Aplikacja Faktury KSeF</div></div>`;
}

// Renders a list of items: { icon, label, text, tone, chip }. kind 'steps' numbers them instead of icons.
function items(list, { cols = list.length, kind = 'list' } = {}) {
  return `<div class="items ${kind} cols-${cols}">${list
    .map((it, i) => {
      const badge = kind === 'steps' ? `<span class="ic num">${i + 1}</span>` : `<span class="ic ${it.tone ?? ''}">${icon(it.icon)}</span>`;
      return `<div class="item">${badge}<div>${it.chip ? `<span class="chip">${it.chip}</span><br>` : ''}<div class="label">${keep(it.label)}</div>${it.text ? `<div class="text">${keep(it.text)}</div>` : ''}</div></div>`;
    })
    .join('')}</div>`;
}

function page(fig, layout) {
  const body = fig.body ? fig.body({ items, layout }) : items(fig.items, { cols: fig.cols, kind: fig.kind });
  return `<!doctype html><html lang="pl"><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600&display=block" rel="stylesheet">
<style>${CSS}</style></head><body><div class="fig ${layout} ${fig.shot ? 'has-shot' : ''}" id="fig">
<div class="brand"><img src="${APP_ICON}">Faktury KSeF · poradnik</div>
<div class="main"><div class="content"><h1>${keep(fig.title)}</h1>${fig.subtitle ? `<p class="sub">${fig.subtitle}</p>` : ''}${body}</div>${shot(fig.shot)}</div>
<div class="foot"><span>${fig.source}</span><b>ksef.shipailab.com</b></div>
</div></body></html>`;
}

function ogPage(card) {
  return `<!doctype html><html lang="pl"><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Onest:wght@500;600;700&display=block" rel="stylesheet">
<style>${CSS}
.og{width:1200px;height:630px;padding:60px 72px;background:#fff;display:flex;gap:56px;align-items:center}
.og .l{flex:1;display:flex;flex-direction:column;height:100%}
.og h1{font-size:${card.title.length > 58 ? 54 : 62}px;max-width:none;margin:auto 0}
.og .eyebrow{font-size:21px;font-weight:600;color:var(--od)}
.og .bar{display:flex;justify-content:space-between;font-size:21px;color:var(--ink3);border-top:1px solid var(--line);padding-top:18px}
.og .bar b{color:var(--ink2)}
.og .phone .frame{height:500px}
</style></head><body><div class="og" id="fig">
<div class="l"><div class="brand" style="font-size:20px"><img src="${APP_ICON}" style="width:34px;height:34px;border-radius:9px">Faktury KSeF</div>
<h1>${keep(card.title)}</h1>
<div class="bar"><span class="eyebrow">Poradnik KSeF · ${card.eyebrow}</span><b>ksef.shipailab.com</b></div></div>
${card.shot ? shot(card.shot) : ''}
</div></body></html>`;
}

async function capture(browser, html, width, scale) {
  const p = await browser.newPage();
  await p.setViewport({ width, height: 700, deviceScaleFactor: scale });
  await p.setContent(html, { waitUntil: 'networkidle0' });
  await p.evaluate(() => document.fonts.ready);
  const el = await p.$('#fig');
  const png = await el.screenshot({ type: 'png' });
  await p.close();
  return png;
}

const only = new Set(process.argv.slice(2));
const browser = await puppeteer.launch({ executablePath: CHROME, headless: true, args: ['--font-render-hinting=none'] });
const manifest = {};
for (const fig of FIGURES) {
  if (only.size && !only.has(fig.name)) continue;
  const entry = { alt: fig.alt, caption: fig.caption };
  for (const layout of ['wide', 'narrow']) {
    const png = await capture(browser, page(fig, layout), layout === 'wide' ? 1200 : 480, 2);
    const buf = await sharp(png).resize({ width: layout === 'wide' ? 1200 : 960 }).webp({ quality: 84, effort: 6 }).toBuffer();
    const meta = await sharp(buf).metadata();
    const key = layout === 'wide' ? 'w' : 'n';
    fs.writeFileSync(path.join(outFig, `${fig.name}-${key}.webp`), buf);
    entry[key] = { width: meta.width, height: meta.height };
    console.log(`${fig.name}-${key}.webp  ${meta.width}x${meta.height}  ${(buf.length / 1024).toFixed(0)} KB`);
    if (layout === 'wide') {
      const thumb = await sharp(png).resize({ width: 640, height: 360 }).webp({ quality: 72, effort: 6 }).toBuffer();
      fs.writeFileSync(path.join(outFig, `${fig.name}-t.webp`), thumb);
    }
  }
  manifest[fig.name] = entry;
}
if (!only.size) {
  for (const card of OG_CARDS) {
    const png = await capture(browser, ogPage(card), 1200, 1);
    const out = await sharp(png).png({ compressionLevel: 9, palette: true, quality: 92 }).toBuffer();
    fs.writeFileSync(path.join(outOg, `${card.slug}.png`), out);
    console.log(`og/${card.slug}.png  ${(out.length / 1024).toFixed(0)} KB`);
  }
}
await browser.close();

// Remove files from the previous style (dark variants) so public/ stays clean.
for (const f of fs.readdirSync(outFig)) if (f.endsWith('-dark.webp')) fs.unlinkSync(path.join(outFig, f));

const manifestPath = path.join(root, 'data/ksef/figures.ts');
let existing = {};
if (only.size && fs.existsSync(manifestPath)) {
  const m = fs.readFileSync(manifestPath, 'utf8').match(/= (\{[\s\S]*\}) satisfies/);
  if (m) existing = JSON.parse(m[1]);
}
const merged = { ...existing, ...manifest };
fs.writeFileSync(
  manifestPath,
  `// Generated by scripts/ksef-figures/render.mjs. Do not edit by hand: change figures.mjs and re-run.
// Files: /ksef/figures/<name>-w.webp (1200x675), -n.webp (phones), -t.webp (640x360 hub thumbnail).
export interface Figure { alt: string; caption: string; w: { width: number; height: number }; n: { width: number; height: number } }

export const FIGURES = ${JSON.stringify(merged, null, 2)} satisfies Record<string, Figure>;

export type FigureName = keyof typeof FIGURES;
`,
);
console.log(`manifest: ${Object.keys(merged).length} figures`);
