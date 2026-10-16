// Reads measured results from the ksef-status Worker (workers/ksef-status): a cron pings the public KSeF
// endpoints every 5 minutes and keeps the latest result plus daily totals in KV. Nothing here is estimated.
export const STATUS_URL = 'https://ksef-status.shipailab.com/status.json';
/** A latest sample older than this means the monitor itself has stopped, so we say so instead of showing "up". */
export const STALE_AFTER_MS = 20 * 60 * 1000;

export interface StatusReport {
  checks: { id: string; label: string }[];
  latest: { checkedAt: string; samples: { id: string; ok: boolean; status: number; ms: number }[] } | null;
  days: { date: string; checks: Record<string, { n: number; up: number; avgMs: number | null }> }[];
}

export async function getStatus(): Promise<StatusReport | null> {
  try {
    const res = await fetch(STATUS_URL, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    return (await res.json()) as StatusReport;
  } catch {
    return null;
  }
}
