'use client';

import { useMemo, useState } from 'react';

type Region = 'abdomen' | 'thigh' | 'arm';
const LABEL: Record<Region, string> = { abdomen: 'Abdomen', thigh: 'Thigh', arm: 'Upper arm' };

function iso(d: Date) {
  return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
}

export default function RotationPlanner() {
  const [start, setStart] = useState(iso(new Date()));
  const [regions, setRegions] = useState<Record<Region, boolean>>({ abdomen: true, thigh: true, arm: false });

  const rows = useMemo(() => {
    const active = (Object.keys(regions) as Region[]).filter((r) => regions[r]);
    if (!active.length || !start) return [];
    // Cycle region first, then side, so two consecutive weeks never land in the same spot.
    const slots = ['Left', 'Right'].flatMap((side) => active.map((r) => `${LABEL[r]}, ${side.toLowerCase()}`));
    const first = new Date(start + 'T00:00:00');
    return Array.from({ length: 12 }, (_, i) => {
      const d = new Date(first);
      d.setDate(d.getDate() + i * 7);
      return { week: i + 1, date: d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }), site: slots[i % slots.length] };
    });
  }, [start, regions]);

  return (
    <div className="nra-tool">
      <div className="nra-row">
        <div>
          <label htmlFor="rp-start">First injection date</label>
          <input id="rp-start" type="date" value={start} onChange={(e) => setStart(e.target.value)} />
        </div>
        <div>
          <label>Regions to use</label>
          {(Object.keys(LABEL) as Region[]).map((r) => (
            <label key={r} className="nra-check" style={{ fontWeight: 500 }}>
              <input type="checkbox" checked={regions[r]} onChange={(e) => setRegions({ ...regions, [r]: e.target.checked })} />
              {LABEL[r]}
              {r === 'arm' ? ' (only if someone else injects it)' : ''}
            </label>
          ))}
        </div>
      </div>
      {rows.length === 0 ? (
        <p className="nra-note">Pick at least one region.</p>
      ) : (
        <div className="nra-printarea">
          <table className="nra-planner">
            <thead>
              <tr><th>Week</th><th>Date</th><th>Site</th><th>Done</th></tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.week}><td>{r.week}</td><td>{r.date}</td><td>{r.site}</td><td><span className="nra-box" /></td></tr>
              ))}
            </tbody>
          </table>
          <p className="nra-note">Example pattern only. The labels say to rotate sites, not in what order. Follow your prescriber and the Instructions for Use.</p>
        </div>
      )}
      <button type="button" className="nra-btn nra-print" onClick={() => window.print()} disabled={rows.length === 0}>Print this plan</button>
    </div>
  );
}
