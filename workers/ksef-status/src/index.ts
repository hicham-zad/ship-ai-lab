// Pings the public KSeF endpoints every 5 minutes and keeps measured results in KV.
// Nothing here is estimated: a check is "up" only when the endpoint answered 2xx/3xx within TIMEOUT_MS.
import { env } from "cloudflare:workers";

const TIMEOUT_MS = 8000;
const KEEP_DAYS = 31;
const HISTORY_DAYS = 30;

const CHECKS = [
	{ id: 'api', label: 'API KSeF 2.0 (produkcja)', url: 'https://api.ksef.mf.gov.pl/v2/security/public-key-certificates' },
	{ id: 'ap', label: 'Aplikacja Podatnika KSeF', url: 'https://ap.ksef.mf.gov.pl/' },
	{ id: 'info', label: 'ksef.podatki.gov.pl', url: 'https://ksef.podatki.gov.pl/' },
	{ id: 'login', label: 'login.gov.pl', url: 'https://login.gov.pl/' },
] as const;

interface Sample { id: string; ok: boolean; status: number; ms: number }
interface Latest { checkedAt: string; samples: Sample[] }
/** Per-day totals for one check. */
interface Day { n: number; up: number; msSum: number }
type DayRecord = Record<string, Day>;

async function probe(c: (typeof CHECKS)[number]): Promise<Sample> {
	const t0 = Date.now();
	try {
		const res = await fetch(c.url, {
			redirect: 'manual',
			signal: AbortSignal.timeout(TIMEOUT_MS),
			headers: { 'user-agent': 'ksef-status-monitor (ksef.shipailab.com/status-ksef)' },
		});
		await res.body?.cancel();
		return { id: c.id, ok: res.status >= 200 && res.status < 400, status: res.status, ms: Date.now() - t0 };
	} catch {
		return { id: c.id, ok: false, status: 0, ms: Date.now() - t0 };
	}
}

const dayKey = (d: Date) => `day:${d.toISOString().slice(0, 10)}`;

async function run() {
	const now = new Date();
	const samples = await Promise.all(CHECKS.map(probe));

	const key = dayKey(now);
	const rec = (await env.STATUS.get<DayRecord>(key, 'json')) ?? {};
	for (const s of samples) {
		const d = rec[s.id] ?? { n: 0, up: 0, msSum: 0 };
		d.n += 1;
		if (s.ok) {
			d.up += 1;
			d.msSum += s.ms;
		}
		rec[s.id] = d;
	}
	const latest: Latest = { checkedAt: now.toISOString(), samples };
	await Promise.all([
		env.STATUS.put(key, JSON.stringify(rec), { expirationTtl: KEEP_DAYS * 86400 }),
		env.STATUS.put('latest', JSON.stringify(latest)),
	]);
}

async function report(): Promise<Response> {
	const latest = await env.STATUS.get<Latest>('latest', 'json');
	const days: { date: string; checks: Record<string, { n: number; up: number; avgMs: number | null }> }[] = [];
	const today = new Date();
	for (let i = HISTORY_DAYS - 1; i >= 0; i--) {
		const d = new Date(today.getTime() - i * 86400000);
		const rec = await env.STATUS.get<DayRecord>(dayKey(d), 'json');
		if (!rec) continue;
		days.push({
			date: d.toISOString().slice(0, 10),
			checks: Object.fromEntries(
				Object.entries(rec).map(([id, v]) => [id, { n: v.n, up: v.up, avgMs: v.up ? Math.round(v.msSum / v.up) : null }]),
			),
		});
	}
	const body = { checks: CHECKS.map(({ id, label }) => ({ id, label })), latest, days };
	return new Response(JSON.stringify(body), {
		headers: {
			'content-type': 'application/json; charset=utf-8',
			'access-control-allow-origin': '*',
			'cache-control': 'public, max-age=60',
		},
	});
}

export default {
	async fetch(req) {
		const { pathname } = new URL(req.url);
		if (pathname === '/status.json') return report();
		return new Response('Not found', { status: 404 });
	},
	async scheduled(_event, _env, ctx) {
		ctx.waitUntil(run());
	},
} satisfies ExportedHandler;
