'use client';

import { useEffect, useMemo, useState } from 'react';

// The app's milestone badges (MilestoneCatalog in the app source).
const MILESTONES = [1, 3, 7, 14, 30, 60, 90, 180, 365];
const MS_DAY = 86_400_000;

const pad = (n: number) => String(n).padStart(2, '0');
const fmt = (n: number) => new Intl.NumberFormat('en-US').format(Math.floor(n));

/** A sober day counter that ticks every second. Runs in the browser and stores nothing. */
export default function LiveCounter() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('00:00');
  const [weekly, setWeekly] = useState('');
  const [now, setNow] = useState<number | null>(null);

  // A bookmark keeps the date in the address (?d=YYYY-MM-DD&t=HH:MM). Nothing goes to a server.
  useEffect(() => {
    // Deferred, so the read happens after hydration and not synchronously inside the effect.
    const id = setTimeout(() => {
      try {
        const q = new URLSearchParams(window.location.search);
        const d = q.get('d');
        const t = q.get('t');
        if (d && /^\d{4}-\d{2}-\d{2}$/.test(d)) setDate(d);
        if (t && /^\d{2}:\d{2}$/.test(t)) setTime(t);
      } catch {
        /* ignore */
      }
    }, 0);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    // Only write once there is a date. Writing an empty state on load would erase a bookmarked date
    // before the read above has run.
    if (!date) return;
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('d', date);
      url.searchParams.set('t', time || '00:00');
      window.history.replaceState(null, '', url.toString());
    } catch {
      /* ignore */
    }
  }, [date, time]);

  useEffect(() => {
    const first = setTimeout(() => setNow(Date.now()), 0);
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => {
      clearTimeout(first);
      clearInterval(id);
    };
  }, []);

  const start = useMemo(() => {
    if (!date) return null;
    const d = new Date(`${date}T${time || '00:00'}:00`);
    return Number.isNaN(d.getTime()) ? null : d.getTime();
  }, [date, time]);

  const today = now ? new Date(now).toLocaleDateString('en-CA') : undefined;
  const future = start !== null && now !== null && start > now;
  const live = start !== null && now !== null && !future;

  let body: React.ReactNode = <p className="sga-calc-note">Enter the date of your last drink, or the day you chose as day one, to start the counter.</p>;
  if (future) body = <p className="sga-calc-note" role="alert">That date is in the future. Pick today or an earlier date.</p>;
  if (live) {
    const ms = (now as number) - (start as number);
    const days = Math.floor(ms / MS_DAY);
    const h = Math.floor((ms % MS_DAY) / 3_600_000);
    const m = Math.floor((ms % 3_600_000) / 60_000);
    const s = Math.floor((ms % 60_000) / 1000);
    const weeks = Math.floor((ms / MS_DAY / 7) * 10) / 10;
    const spend = parseFloat(weekly);
    const saved = Number.isFinite(spend) && spend > 0 ? (spend * ms) / (7 * MS_DAY) : null;
    const next = MILESTONES.find((x) => x > days);
    const prev = [...MILESTONES].reverse().find((x) => x <= days) ?? 0;
    const pct = next ? Math.min(100, Math.max(0, ((ms / MS_DAY - prev) / (next - prev)) * 100)) : 100;
    body = (
      <div aria-live="off">
        <div className="sga-live" role="timer" aria-label={`${days} days, ${h} hours, ${m} minutes and ${s} seconds`}>
          <div><b>{fmt(days)}</b><span>{days === 1 ? 'day' : 'days'}</span></div>
          <div><b>{pad(h)}</b><span>hours</span></div>
          <div><b>{pad(m)}</b><span>minutes</span></div>
          <div><b>{pad(s)}</b><span>seconds</span></div>
        </div>
        <div className="sga-calc-grid">
          <div className="sga-calc-cell"><b>{fmt(ms / 3_600_000)}</b><span>hours in total</span></div>
          <div className="sga-calc-cell"><b>{weeks}</b><span>weeks</span></div>
          {saved !== null && <div className="sga-calc-cell"><b>{saved.toLocaleString('en-US', { maximumFractionDigits: 2, minimumFractionDigits: 2 })}</b><span>saved so far</span></div>}
          {next ? (
            <div className="sga-calc-cell"><b>{next - days}</b><span>{next - days === 1 ? 'day' : 'days'} to day {next}</span></div>
          ) : (
            <div className="sga-calc-cell"><b>9 of 9</b><span>app badges reached</span></div>
          )}
        </div>
        <div className="sga-prog" aria-hidden="true"><i style={{ width: `${pct}%` }} /></div>
        <p className="sga-calc-note">{next ? `Next badge in the app: day ${next}.` : 'You have passed every milestone badge in the app.'}</p>
      </div>
    );
  }

  return (
    <div className="sga-calc">
      <div className="sga-counter-inputs">
        <label>
          Sober date
          <input type="date" value={date} max={today} onChange={(e) => setDate(e.target.value)} />
        </label>
        <label>
          Time (optional)
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </label>
        <label>
          Weekly drink spend (optional)
          <input type="number" inputMode="decimal" min="0" placeholder="e.g. 60" value={weekly} onChange={(e) => setWeekly(e.target.value)} />
        </label>
      </div>
      {body}
      <p className="sga-calc-note">Runs in your browser. Nothing you enter is stored or sent. To keep a counter on your phone, with reminders and milestone badges, use the app.</p>
    </div>
  );
}
