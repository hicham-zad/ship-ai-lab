// Keyword gap pull for Sober Girl against sobergirlsociety.com, using the DataForSEO API.
//
// Setup:   export DATAFORSEO_LOGIN=...  DATAFORSEO_PASSWORD=...
// Usage:   node scripts/dataforseo-keyword-gaps.mjs --dry-run        (prints the plan, no credentials needed)
//          node scripts/dataforseo-keyword-gaps.mjs --terms research/terms-x.json --skip-ranked   (volume and KD for your own list)
//          add --kd-only to skip the volume call when you already have volumes (Google Ads planner)
//          node scripts/dataforseo-keyword-gaps.mjs --budget 0.60     (default budget is 0.50 USD)
//
// Output goes to research/ as CSV. The script stops before a call that would pass the budget, and
// reads the real cost from each response. Endpoint prices change, so the estimates below are rough.
//
// What it does:
//   1. Keywords sobergirlsociety.com ranks for (US and UK), and which of them shipailab.com/sobergirl
//      already ranks for. The difference is the gap.
//   2. Search volume, CPC and keyword difficulty for the candidate terms in CANDIDATES.
import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const DRY = args.includes('--dry-run');
const budgetArg = args.indexOf('--budget');
const BUDGET = budgetArg >= 0 ? Number(args[budgetArg + 1]) : 0.5;

const termsArg = args.indexOf('--terms');
const SKIP_RANKED = args.includes('--skip-ranked');
const KD_ONLY = args.includes('--kd-only'); // skip the Google Ads volume call, keep keyword difficulty
const TAG = termsArg >= 0 ? path.basename(args[termsArg + 1], '.json') : 'candidates';

const COMPETITOR = 'sobergirlsociety.com';
const OURS = 'shipailab.com';
const OUR_PATH = '/sobergirl';
const MARKETS = [
  { name: 'us', location_code: 2840 },
  { name: 'gb', location_code: 2826 },
];

// Candidate terms from sobergirl-keyword-gaps.md. Grouped so the output can be read by cluster.
const CANDIDATES = {
  slips: ['slipped in sobriety', 'relapse after 30 days sober', 'what to do after a slip alcohol', 'drank after being sober', 'restart sober count'],
  declining: ['how to say you dont drink', 'how to decline a drink', 'what to say when offered a drink', 'how to tell people you are not drinking', 'why dont you drink anymore'],
  social: ['sober fomo', 'social anxiety without alcohol', 'sober socializing', 'how to socialize without drinking', 'introvert sober'],
  events: ['sober wedding', 'alcohol free wedding', 'alcohol free birthday party ideas', 'first christmas sober', 'sober valentines day', 'sober work party', 'sober vacation', 'alcohol free holiday'],
  mindful: ['what is mindful drinking', 'mindful drinking', 'how to drink mindfully', 'moderation management'],
  body: ['alcohol and skin', 'alcohol acne', 'face after quitting alcohol', 'alcohol and gut health', 'is red wine good for you', 'red wine heart health myth'],
  mind: ['alcohol and adhd', 'quitting alcohol anxiety', 'sober with adhd', 'grief and drinking', 'breakup without alcohol'],
  romanticising: ['romanticizing alcohol', 'stop romanticizing drinking', 'alcohol nostalgia'],
  drinks: ['non alcoholic wine', 'best non alcoholic drinks', 'non alcoholic drinks for sober women', 'alcohol free gin', 'non alcoholic aperol spritz', 'mocktail kit'],
  brand: ['sober girl society', 'sober girl society app', 'sober girl app', 'is there a sober girl society app', 'sober girl society events'],
  helplines: ['alcohol helpline', 'alcohol support helpline free', 'alcohol helpline uk', 'women for sobriety'],
  tracker: ['sobriety tracker', 'sober counter', 'sober days counter', 'quit drinking app', 'sober app for women', 'alcohol free days tracker'],
};

const AUTH = Buffer.from(`${process.env.DATAFORSEO_LOGIN ?? ''}:${process.env.DATAFORSEO_PASSWORD ?? ''}`).toString('base64');
let spent = 0;

// Rough per-call estimates, used only to refuse a call that could blow the budget.
const EST = { ranked: 0.04, volume: 0.08, difficulty: 0.03 };

async function call(endpoint, body, estimate) {
  if (spent + estimate > BUDGET) throw new Error(`Stopping: next call could pass the ${BUDGET} USD budget (spent ${spent.toFixed(3)})`);
  const res = await fetch(`https://api.dataforseo.com/v3/${endpoint}`, {
    method: 'POST',
    headers: { Authorization: `Basic ${AUTH}`, 'Content-Type': 'application/json' },
    body: JSON.stringify([body]),
  });
  if (!res.ok) throw new Error(`${endpoint}: HTTP ${res.status}`);
  const json = await res.json();
  spent += json.cost ?? estimate;
  const task = json.tasks?.[0];
  if (!task || task.status_code !== 20000) throw new Error(`${endpoint}: ${task?.status_code} ${task?.status_message}`);
  return task.result ?? [];
}

const csv = (rows) => rows.map((r) => r.map((c) => `"${String(c ?? '').replace(/"/g, '""')}"`).join(',')).join('\n');
const SET = termsArg >= 0 ? JSON.parse(fs.readFileSync(args[termsArg + 1], 'utf8')) : CANDIDATES;
const flat = Object.entries(SET).flatMap(([cluster, ks]) => ks.map((k) => [cluster, k]));

if (DRY) {
  console.log(`Competitor: ${COMPETITOR}   Ours: ${OURS}${OUR_PATH}`);
  console.log(`Markets: ${MARKETS.map((m) => m.name).join(', ')}   Budget: ${BUDGET} USD`);
  console.log(`Calls: ${SKIP_RANKED ? 0 : MARKETS.length * 2} ranked-keyword pulls, 1 volume call (${flat.length} terms), 1 difficulty call (US)`);
  const est = (SKIP_RANKED ? 0 : MARKETS.length * 2 * EST.ranked) + EST.volume + EST.difficulty;
  console.log(`Rough cost: ${est.toFixed(2)} USD (the real cost is read from each response)`);
  process.exit(0);
}

if (!process.env.DATAFORSEO_LOGIN || !process.env.DATAFORSEO_PASSWORD) {
  console.error('Set DATAFORSEO_LOGIN and DATAFORSEO_PASSWORD first (see the header of this file).');
  process.exit(1);
}

const stamp = new Date().toISOString().slice(0, 10);
fs.mkdirSync('research', { recursive: true });

// 1. What the competitor ranks for, and what we already rank for.
const rankedRows = [['market', 'keyword', 'volume', 'competitor_position', 'competitor_url', 'we_rank', 'our_position']];
for (const m of SKIP_RANKED ? [] : MARKETS) {
  const common = { location_code: m.location_code, language_code: 'en', limit: 500, order_by: ['keyword_data.keyword_info.search_volume,desc'] };
  const theirs = await call('dataforseo_labs/google/ranked_keywords/live', { ...common, target: COMPETITOR, filters: [['ranked_serp_element.serp_item.rank_group', '<=', 30]] }, EST.ranked);
  const ours = await call('dataforseo_labs/google/ranked_keywords/live', { ...common, target: OURS, filters: [['ranked_serp_element.serp_item.relative_url', 'like', `${OUR_PATH}%`]] }, EST.ranked);
  const mine = new Map((ours[0]?.items ?? []).map((i) => [i.keyword_data.keyword, i.ranked_serp_element.serp_item.rank_group]));
  for (const i of theirs[0]?.items ?? []) {
    const k = i.keyword_data.keyword;
    rankedRows.push([m.name, k, i.keyword_data.keyword_info?.search_volume ?? '', i.ranked_serp_element.serp_item.rank_group, i.ranked_serp_element.serp_item.url, mine.has(k) ? 'yes' : 'no', mine.get(k) ?? '']);
  }
}
if (!SKIP_RANKED) {
  fs.writeFileSync(path.join('research', `sobergirlsociety-ranked-${stamp}.csv`), csv(rankedRows));
  console.log(`Competitor keywords: ${rankedRows.length - 1} rows, spent ${spent.toFixed(3)} USD`);
}

// 2. Volume, CPC and difficulty for the candidate terms.
const terms = flat.map(([, k]) => k);
const volumes = KD_ONLY ? [] : await call('keywords_data/google_ads/search_volume/live', { keywords: terms, location_code: 2840, language_code: 'en' }, EST.volume);
const vol = new Map(volumes.map((r) => [r.keyword, r]));
const diff = new Map();
for (const m of MARKETS.slice(0, 1)) {
  for (let i = 0; i < terms.length; i += 1000) {
    const r = await call('dataforseo_labs/google/bulk_keyword_difficulty/live', { keywords: terms.slice(i, i + 1000), location_code: m.location_code, language_code: 'en' }, EST.difficulty);
    for (const it of r[0]?.items ?? []) diff.set(it.keyword, it.keyword_difficulty);
  }
}
const candRows = [['cluster', 'keyword', 'us_volume', 'cpc', 'competition', 'kd']];
for (const [cluster, k] of flat) candRows.push([cluster, k, vol.get(k)?.search_volume ?? '', vol.get(k)?.cpc ?? '', vol.get(k)?.competition ?? '', diff.get(k) ?? '']);
fs.writeFileSync(path.join('research', `sobergirl-${TAG}-${stamp}.csv`), csv(candRows));
console.log(`Candidates: ${candRows.length - 1} rows. Total spent ${spent.toFixed(3)} USD of ${BUDGET}`);
