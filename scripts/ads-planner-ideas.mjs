// Expands seed keywords with the Google Ads Keyword Planner (free) and writes research/ads-ideas-<date>.csv.
//
// Uses the google-ads-api package and the Google Ads credentials from the ElixRank project, the same way
// ElixRank's own src/lib/googleAds.ts calls the planner. Credentials are read by Node itself:
//
//   node --env-file=$HOME/Desktop/ElixRank/elixrank/.env.local scripts/ads-planner-ideas.mjs [--seeds research/seeds.json] [--geo 2840]
//
// seeds.json is { "cluster name": ["seed phrase", ...] }. Up to 20 seeds go in each request.
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { createRequire } from 'node:module';

const args = process.argv.slice(2);
const arg = (n, d) => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : d; };
const SEEDS_FILE = arg('--seeds', 'research/seeds-ads.json');
const GEO = arg('--geo', '2840'); // 2840 US, 2826 UK
const ELIXRANK = path.join(os.homedir(), 'Desktop/ElixRank/elixrank/package.json');

const need = ['GOOGLE_ADS_CUSTOMER_ID', 'GOOGLE_ADS_DEVELOPER_TOKEN', 'GOOGLE_ADS_REFRESH_TOKEN', 'GOOGLE_CLIENT_ID', 'GOOGLE_CLIENT_SECRET'];
const missing = need.filter((k) => !process.env[k]);
if (missing.length) {
  console.error(`Missing: ${missing.join(', ')}. Run with --env-file pointing at the ElixRank .env.local (see the header).`);
  process.exit(1);
}

const { GoogleAdsApi } = createRequire(ELIXRANK)('google-ads-api');
const customerId = process.env.GOOGLE_ADS_CUSTOMER_ID.replace(/-/g, '');
const client = new GoogleAdsApi({
  client_id: process.env.GOOGLE_CLIENT_ID,
  client_secret: process.env.GOOGLE_CLIENT_SECRET,
  developer_token: process.env.GOOGLE_ADS_DEVELOPER_TOKEN,
});
const customer = client.Customer({
  customer_id: customerId,
  refresh_token: process.env.GOOGLE_ADS_REFRESH_TOKEN,
  ...(process.env.GOOGLE_ADS_LOGIN_CUSTOMER_ID ? { login_customer_id: process.env.GOOGLE_ADS_LOGIN_CUSTOMER_ID.replace(/-/g, '') } : {}),
});

const clusters = JSON.parse(fs.readFileSync(SEEDS_FILE, 'utf8'));
const ideas = new Map(); // keyword -> row
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

for (const [cluster, seeds] of Object.entries(clusters)) {
  for (let i = 0; i < seeds.length; i += 20) {
    const batch = seeds.slice(i, i + 20);
    let res;
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        res = await customer.keywordPlanIdeas.generateKeywordIdeas({
          customer_id: customerId,
          keyword_plan_network: 2,
          geo_target_constants: [`geoTargetConstants/${GEO}`],
          language: 'languageConstants/1000',
          include_adult_keywords: false,
          keyword_seed: { keywords: batch },
          page_size: 1000,
        });
        break;
      } catch (e) {
        const msg = String(e?.message ?? e);
        if (attempt === 3 || /PERMISSION_DENIED|UNAUTHENTICATED/.test(msg)) { console.error(`${cluster}: ${msg.slice(0, 200)}`); res = []; break; }
        await sleep(attempt * 1500);
      }
    }
    for (const r of res) {
      const m = r.keyword_idea_metrics ?? {};
      const k = r.text;
      if (!k || ideas.has(k)) continue;
      ideas.set(k, {
        keyword: k,
        seed_cluster: cluster,
        volume: Number(m.avg_monthly_searches ?? 0),
        competition: m.competition ?? '',
        competition_index: m.competition_index ?? '',
        low_cpc: m.low_top_of_page_bid_micros ? Number(m.low_top_of_page_bid_micros) / 1e6 : '',
        high_cpc: m.high_top_of_page_bid_micros ? Number(m.high_top_of_page_bid_micros) / 1e6 : '',
      });
    }
    console.log(`${cluster}: ${batch.length} seeds, ${ideas.size} unique ideas so far`);
    await sleep(500);
  }
}

const rows = [...ideas.values()].sort((a, b) => b.volume - a.volume);
const head = ['keyword', 'seed_cluster', 'volume', 'competition', 'competition_index', 'low_cpc', 'high_cpc'];
const csv = [head, ...rows.map((r) => head.map((h) => r[h]))].map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(',')).join('\n');
fs.mkdirSync('research', { recursive: true });
const out = path.join('research', `ads-ideas-${new Date().toISOString().slice(0, 10)}-geo${GEO}.csv`);
fs.writeFileSync(out, csv);
console.log(`Wrote ${rows.length} ideas to ${out}`);
