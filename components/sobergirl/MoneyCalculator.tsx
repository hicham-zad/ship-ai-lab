'use client';

import { useState } from 'react';

const WINDOWS = [
  { label: '1 week', days: 7 },
  { label: '30 days', days: 30 },
  { label: '90 days', days: 90 },
  { label: '6 months', days: 182 },
  { label: '1 year', days: 365 },
];

export default function MoneyCalculator() {
  const [weekly, setWeekly] = useState('');
  const amount = parseFloat(weekly);
  const valid = Number.isFinite(amount) && amount > 0;
  const fmt = (n: number) => new Intl.NumberFormat(undefined, { maximumFractionDigits: 0 }).format(n);

  return (
    <div className="sga-calc">
      <label htmlFor="sg-weekly">What you used to spend on alcohol in a typical week</label>
      <input
        id="sg-weekly"
        type="number"
        inputMode="decimal"
        min="0"
        placeholder="e.g. 60"
        value={weekly}
        onChange={(e) => setWeekly(e.target.value)}
      />
      {valid ? (
        <div className="sga-calc-grid" aria-live="polite">
          {WINDOWS.map((w) => (
            <div className="sga-calc-cell" key={w.label}>
              <b>{fmt((amount / 7) * w.days)}</b>
              <span>{w.label}</span>
            </div>
          ))}
        </div>
      ) : (
        <p className="sga-calc-note">Enter a number to see what you would save. Use your own currency.</p>
      )}
      <p className="sga-calc-note">Simple arithmetic: weekly spend ÷ 7 × days. It ignores bar tabs you would not have paid for anyway, so use your honest average.</p>
    </div>
  );
}
