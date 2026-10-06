'use client';

import { useState } from 'react';

const LENGTHS = [30, 60, 90, 100, 365];

function parseLocalDate(v: string) {
  const [y, m, d] = v.split('-').map(Number);
  return new Date(y, m - 1, d);
}

export default function SobrietyCalendar() {
  const [start, setStart] = useState('');
  const [len, setLen] = useState(30);
  const [name, setName] = useState('');

  const s = start ? parseLocalDate(start) : null;
  const cols = len <= 31 ? 7 : 10;
  const cells = Array.from({ length: len }, (_, i) => {
    const d = s ? new Date(s.getFullYear(), s.getMonth(), s.getDate() + i) : null;
    return { n: i + 1, label: d ? d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' }) : '' };
  });

  return (
    <div>
      <div className="sga-cal-ctl">
        <div>
          <label htmlFor="cal-start">First day (optional, adds dates)</label>
          <input id="cal-start" type="date" value={start} onChange={(e) => setStart(e.target.value)} />
        </div>
        <div>
          <label htmlFor="cal-len">Length</label>
          <select id="cal-len" value={len} onChange={(e) => setLen(Number(e.target.value))}>
            {LENGTHS.map((n) => (
              <option key={n} value={n}>{n} days</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="cal-name">Title (optional)</label>
          <input id="cal-name" type="text" maxLength={40} placeholder="e.g. My 90 days" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
      </div>
      <div className="sga-calprint">
        <h3>{name || `${len}-day alcohol-free calendar`}</h3>
        <p className="sub">Tick each day you do not drink. {s ? 'Dates start ' + s.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }) + '.' : ''}</p>
        <div className="sga-calgrid" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
          {cells.map((c) => (
            <div className="sga-calcell" key={c.n}>
              <b>{c.n}</b>
              <span>{c.label || ' '}</span>
              <i aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
      <button type="button" className="sga-printbtn" onClick={() => window.print()}>Print or save as PDF</button>
      <p className="sga-calc-note">Nothing you enter is stored or sent anywhere. In the print dialog, choose &ldquo;Save as PDF&rdquo; to keep a copy.</p>
    </div>
  );
}
