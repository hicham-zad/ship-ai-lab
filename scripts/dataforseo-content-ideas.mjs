// Content ideas for Sober Girl: what sober-app and sobriety-content competitors rank for, plus keyword ideas
// from seed topics, minus what our pages already cover. Then difficulty and a page-one check for the best.
//
// Setup:  export DATAFORSEO_LOGIN=...  DATAFORSEO_PASSWORD=...
// Usage:  node scripts/dataforseo-content-ideas.mjs [--budget 1.00]
//
// Hard budget: the script reads the real cost from each response and refuses a call whose estimate would
// pass the budget. Output: research/content-ideas-<date>.csv and .json.
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const args = process.argv.slice(2);
const bi = args.indexOf('--budget');
const BUDGET = bi >= 0 ? Number(args[bi + 1]) : 1.0;
const US = 2840;
const DATE = new Date().toISOString().slice(0, 10);

// Apps and content sites whose readers would plausibly install a sober tracker.
const COMPETITORS = ['iamsober.com', 'reframeapp.com', 'sunflowersober.com', 'jointempest.com', 'soberish.co', 'sobergirlsociety.com', 'thesoberschool.com', 'loosidapp.com'];
const SEEDS = ['quit drinking', 'sober women', 'alcohol free', 'drinking every night', 'sober life', 'stop drinking wine', 'alcohol and women', 'sobriety tips'];

// Off-topic for a women's alcohol tracker.
const NOISE = /rehab|detox center|treatment center|near me|meth|cocaine|opioid|heroin|weed|marijuana|cannabis|vape|nicotine|smok|gambl|porn|fetal|dui|lawyer|insurance|jobs?\b|salary|coin|chip|aa meeting|na meeting|login|sign in|coupon|promo|stock|lyrics|song|movie|quotes? tattoo/i;

const AUTH = Buffer.from(`${process.env.DATAFORSEO_LOGIN ?? ''}:${process.env.DATAFORSEO_PASSWORD ?? ''}`).toString('base64');
let spent = 0;

async function call(endpoint, body, estimate) {
  if (spent + estimate > BUDGET) throw new Error(`Budget stop before ${endpoint}: spent ${spent.toFixed(3)} of ${BUDGET}`);
  const res = await fetch(`https://api.dataforseo.com/v3/${endpoint}`, {
    method: 'POST',
    headers: { Authorization: `Basic ${AUTH}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`${endpoint}: HTTP ${res.status}`);
  const json = await res.json();
  spent += json.cost ?? 0;
  const tasks = json.tasks ?? [];
  for (const t of tasks) if (t.status_code !== 20000) console.warn(`${endpoint}: ${t.status_code} ${t.status_message}`);
  console.log(`${endpoint.padEnd(52)} cost ${(json.cost ?? 0).toFixed(4)}  total ${spent.toFixed(4)}`);
  return tasks;
}

if (!process.env.DATAFORSEO_LOGIN || !process.env.DATAFORSEO_PASSWORD) {
  console.error('Set DATAFORSEO_LOGIN and DATAFORSEO_PASSWORD');
  process.exit(1);
}

// Text of every Sober Girl page, to drop keywords we already cover.
const ROOT = path.resolve('.');
const jiti = createRequire(import.meta.url)('jiti')(ROOT + '/', { alias: { '@': ROOT } });
const { ARTICLES } = jiti('./data/sobergirl/articles.ts');
const ourText = JSON.stringify(ARTICLES).toLowerCase();
const ourKeywords = new Set(ARTICLES.flatMap((a) => a.keywords.map((k) => k.toLowerCase())));
const covered = (k) => ourKeywords.has(k) || ourText.includes(k);

const pool = new Map(); // keyword -> row
const add = (k, vol, source, extra = {}) => {
  k = k.toLowerCase().trim();
  if (!k || NOISE.test(k) || (vol ?? 0) < 100) return;
  const row = pool.get(k) ?? { keyword: k, volume: vol, sources: new Set(), ...extra };
  row.volume = Math.max(row.volume ?? 0, vol ?? 0);
  row.sources.add(source);
  Object.assign(row, Object.fromEntries(Object.entries(extra).filter(([, v]) => v != null)));
  pool.set(k, row);
};

// 1. Competitor ranked keywords (top 20 positions, US), one task per call.
for (const domain of COMPETITORS) {
  const [t] = await call('dataforseo_labs/google/ranked_keywords/live', [{
    target: domain, location_code: US, language_code: 'en', limit: 400,
    filters: [['ranked_serp_element.serp_item.rank_group', '<=', 20], 'and', ['keyword_data.keyword_info.search_volume', '>=', 100]],
    order_by: ['keyword_data.keyword_info.search_volume,desc'],
  }], 0.06);
  for (const it of t?.result?.[0]?.items ?? []) {
    const kd = it.keyword_data;
    add(kd.keyword, kd.keyword_info?.search_volume, domain, {
      cpc: kd.keyword_info?.cpc,
      kd: kd.keyword_properties?.keyword_difficulty,
      intent: kd.search_intent_info?.main_intent,
      [`pos_${domain}`]: it.ranked_serp_element?.serp_item?.rank_group,
      url: it.ranked_serp_element?.serp_item?.relative_url,
    });
  }
}

// 2. Keyword ideas from seed topics.
{
  const [t] = await call('dataforseo_labs/google/keyword_ideas/live', [{
    keywords: SEEDS, location_code: US, language_code: 'en', limit: 700,
    filters: [['keyword_info.search_volume', '>=', 100]],
    order_by: ['keyword_info.search_volume,desc'],
  }], 0.09);
  for (const it of t?.result?.[0]?.items ?? []) add(it.keyword, it.keyword_info?.search_volume, 'ideas', { cpc: it.keyword_info?.cpc, intent: it.search_intent_info?.main_intent, kd: it.keyword_properties?.keyword_difficulty });
}

// 3. Keep what we do not cover yet, then fill keyword difficulty where it is missing.
let rows = [...pool.values()].filter((r) => !covered(r.keyword));
const needKd = rows.filter((r) => r.kd == null).sort((a, b) => b.volume - a.volume).slice(0, 1000).map((r) => r.keyword);
if (needKd.length) {
  const [t] = await call('dataforseo_labs/google/bulk_keyword_difficulty/live', [{ keywords: needKd, location_code: US, language_code: 'en' }], 0.01 + needKd.length * 0.0001 + 0.02);
  const kd = new Map((t?.result?.[0]?.items ?? []).map((i) => [i.keyword, i.keyword_difficulty]));
  for (const r of rows) if (r.kd == null && kd.has(r.keyword)) r.kd = kd.get(r.keyword);
}
rows = rows.map((r) => ({ ...r, sources: [...r.sources].join(' ') }));

// 4. Page-one check for the 25 best opportunities (volume weighted by low KD).
const score = (r) => (r.volume ?? 0) / (1 + Math.max(0, r.kd ?? 50) / 10);
const top = rows.filter((r) => (r.kd ?? 100) <= 35).sort((a, b) => score(b) - score(a)).slice(0, 25);
const WEAK = /reddit\.com|quora\.com|medium\.com|substack\.com|blogspot|wordpress\.com|pinterest|facebook\.com|tiktok\.com|youtube\.com/;
for (const r of top) {
  try {
    const [t] = await call('serp/google/organic/live/regular', [{ keyword: r.keyword, location_code: US, language_code: 'en', depth: 10 }], 0.004);
    const items = (t?.result?.[0]?.items ?? []).filter((i) => i.type === 'organic');
    r.serp_top10 = items.map((i) => i.domain).join(' ');
    r.serp_weak = items.filter((i) => WEAK.test(i.domain)).length;
  } catch (e) {
    console.warn(e.message);
    break;
  }
}

rows.sort((a, b) => score(b) - score(a));
fs.mkdirSync('research', { recursive: true });
const cols = ['keyword', 'volume', 'kd', 'cpc', 'intent', 'sources', 'url', 'serp_weak', 'serp_top10'];
const csv = [cols.join(','), ...rows.map((r) => cols.map((c) => JSON.stringify(r[c] ?? '')).join(','))].join('\n');
fs.writeFileSync(`research/content-ideas-${DATE}.csv`, csv);
fs.writeFileSync(`research/content-ideas-${DATE}.json`, JSON.stringify(rows, null, 1));
console.log(`\n${pool.size} keywords pooled, ${rows.length} not yet covered. Spent ${spent.toFixed(4)} USD.`);
console.log(`Wrote research/content-ideas-${DATE}.csv`);
