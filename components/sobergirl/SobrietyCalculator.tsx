'use client';

import { useState } from 'react';

const DAY = 86_400_000;

function startOfDay(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}
function parseLocalDate(v: string) {
  const [y, m, d] = v.split('-').map(Number);
  return new Date(y, m - 1, d);
}
function addMonths(d: Date, n: number) {
  const r = new Date(d.getFullYear(), d.getMonth() + n, 1);
  const last = new Date(r.getFullYear(), r.getMonth() + 1, 0).getDate();
  r.setDate(Math.min(d.getDate(), last));
  return r;
}
function addDays(d: Date, n: number) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
}
function wholeMonths(from: Date, to: Date) {
  let m = (to.getFullYear() - from.getFullYear()) * 12 + (to.getMonth() - from.getMonth());
  if (addMonths(from, m) > to) m -= 1;
  return Math.max(0, m);
}
const plural = (n: number, w: string) => `${n} ${w}${n === 1 ? '' : 's'}`;
const fmtDate = (d: Date) => d.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });

// Milestones are our own markers, not a clinical schedule.
const MARKERS: { label: string; at: (s: Date) => Date }[] = [
  { label: '1 day', at: (s) => addDays(s, 1) },
  { label: '1 week', at: (s) => addDays(s, 7) },
  { label: '30 days', at: (s) => addDays(s, 30) },
  { label: '60 days', at: (s) => addDays(s, 60) },
  { label: '90 days', at: (s) => addDays(s, 90) },
  { label: '6 months', at: (s) => addMonths(s, 6) },
  { label: '9 months', at: (s) => addMonths(s, 9) },
  { label: '1 year', at: (s) => addMonths(s, 12) },
  { label: '2 years', at: (s) => addMonths(s, 24) },
  { label: '5 years', at: (s) => addMonths(s, 60) },
];

export default function SobrietyCalculator() {
  const [date, setDate] = useState('');
  const [weekly, setWeekly] = useState('');

  const today = startOfDay(new Date());
  const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  const start = date ? parseLocalDate(date) : null;
  const future = start ? start > today : false;
  const ok = start && !future;

  let body = null;
  if (ok && start) {
    const days = Math.round((today.getTime() - start.getTime()) / DAY);
    const weeks = Math.floor(days / 7);
    const months = wholeMonths(start, today);
    const years = Math.floor(months / 12);
    const spend = parseFloat(weekly);
    const saved = Number.isFinite(spend) && spend > 0 ? (spend / 7) * days : null;
    const reached = MARKERS.filter((m) => m.at(start) <= today);
    const next = MARKERS.find((m) => m.at(start) > today);
    const nextDate = next ? next.at(start) : null;
    body = (
      <div aria-live="polite">
        <div className="sga-big">
          <b>{days.toLocaleString()}</b>
          <span>{days === 1 ? 'day' : 'days'} sober · since {fmtDate(start)}</span>
        </div>
        <div className="sga-calc-grid">
          <div className="sga-calc-cell"><b>{plural(weeks, 'week')}</b><span>{days % 7} extra {days % 7 === 1 ? 'day' : 'days'}</span></div>
          <div className="sga-calc-cell"><b>{plural(months, 'month')}</b><span>whole calendar months</span></div>
          <div className="sga-calc-cell"><b>{years > 0 ? plural(years, 'year') : '0 years'}</b><span>complete years</span></div>
          {saved !== null && (
            <div className="sga-calc-cell"><b>{new Intl.NumberFormat(undefined, { maximumFractionDigits: 0 }).format(saved)}</b><span>saved at your weekly spend</span></div>
          )}
        </div>
        {next && nextDate ? (
          <p className="sga-next">
            <strong>Next milestone: {next.label}</strong> on {fmtDate(nextDate)}, in {plural(Math.round((nextDate.getTime() - today.getTime()) / DAY), 'day')}.
          </p>
        ) : (
          <p className="sga-next"><strong>You have passed every milestone on our list.</strong> That is a long time. Well done.</p>
        )}
        <div className="sga-chips" aria-label="Milestones">
          {MARKERS.map((m) => (
            <span key={m.label} className={`sga-chip${reached.includes(m) ? '' : ' todo'}`}>{reached.includes(m) ? '✓ ' : ''}{m.label}</span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="sga-sobcalc">
      <div className="sga-sobcalc-row">
        <div>
          <label htmlFor="sg-date">Your sobriety date (the date of your last drink)</label>
          <input id="sg-date" type="date" max={todayStr} value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div>
          <label htmlFor="sg-spend">Optional: weekly spend on alcohol</label>
          <input id="sg-spend" type="number" inputMode="decimal" min="0" placeholder="e.g. 60" value={weekly} onChange={(e) => setWeekly(e.target.value)} />
        </div>
      </div>
      {future && <p className="sga-err">That date is in the future. Enter the date of your last drink.</p>}
      {!date && <p className="sga-calc-note">Pick a date to see your days, weeks, months and next milestone. Nothing you enter is stored or sent anywhere.</p>}
      {body}
    </div>
  );
}
