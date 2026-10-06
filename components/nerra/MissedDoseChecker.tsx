'use client';

import { useState } from 'react';

type Med = 'tirzepatide' | 'ozempic' | 'wegovy';
type Verdict = { kind: 'take' | 'skip' | 'check'; title: string; body: string };

function iso(d: Date) {
  return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
}

// Windows come straight from the US labels (Mounjaro and Zepbound 08/2026, Ozempic 05/2026, Wegovy 06/2026).
function evaluate(med: Med, daysLate: number): Verdict {
  if (daysLate < 0) return { kind: 'check', title: 'That date is in the future', body: 'Pick the day the dose was due, which should be today or earlier.' };
  if (daysLate === 0) return { kind: 'take', title: 'It is due today', body: 'This is your scheduled day, so it is not missed yet.' };
  if (med === 'tirzepatide') {
    if (daysLate < 4) return { kind: 'take', title: 'Within the label window', body: `The Mounjaro and Zepbound labels say to take a missed dose as soon as possible within 4 days (96 hours). It was due ${daysLate} day${daysLate > 1 ? 's' : ''} ago.` };
    if (daysLate === 4) return { kind: 'check', title: 'Right at the limit', body: 'The window is 96 hours. Whether you are inside it depends on the time of day the dose was due. Count the hours, or ask your pharmacist.' };
    return { kind: 'skip', title: 'Past the window', body: `More than 4 days have passed, so the labels say to skip the missed dose and take the next one on your regular day.` };
  }
  if (med === 'ozempic') {
    if (daysLate < 5) return { kind: 'take', title: 'Within the label window', body: `The Ozempic label says to give a missed dose as soon as possible within 5 days. It was due ${daysLate} day${daysLate > 1 ? 's' : ''} ago.` };
    if (daysLate === 5) return { kind: 'check', title: 'Right at the limit', body: 'The window is 5 days, so the answer depends on the time of day the dose was due. Ask your pharmacist if unsure.' };
    return { kind: 'skip', title: 'Past the window', body: 'More than 5 days have passed, so the label says to skip the missed dose and give the next one on your regular day.' };
  }
  const daysToNext = 7 - daysLate;
  if (daysLate >= 7) return { kind: 'check', title: 'More than one dose may be missed', body: 'If 2 or more consecutive Wegovy doses are missed, the label says escalation restarts at a lower dose. Call your prescriber before your next injection.' };
  if (daysToNext > 2) return { kind: 'take', title: 'Next dose is more than 2 days away', body: 'The Wegovy label says to give the missed injection as soon as possible when the next scheduled dose is more than 2 days away.' };
  if (daysToNext < 2) return { kind: 'skip', title: 'Next dose is less than 2 days away', body: 'The Wegovy label says not to give the missed dose when the next scheduled dose is less than 2 days away. Resume on your regular day.' };
  return { kind: 'check', title: 'Next dose is about 2 days away', body: 'The label says more than 2 days to take it and less than 2 days to skip it, and does not cover exactly 2. Ask your pharmacist or prescriber.' };
}

const NAMES: Record<Med, string> = { tirzepatide: 'Mounjaro or Zepbound (tirzepatide)', ozempic: 'Ozempic (semaglutide)', wegovy: 'Wegovy injection (semaglutide)' };

export default function MissedDoseChecker() {
  const today = iso(new Date());
  const [med, setMed] = useState<Med>('tirzepatide');
  const [due, setDue] = useState('');

  const verdict = (() => {
    if (!due) return null;
    const a = new Date(due + 'T00:00:00').getTime();
    const b = new Date(today + 'T00:00:00').getTime();
    return evaluate(med, Math.round((b - a) / 86400000));
  })();

  return (
    <div className="nra-tool">
      <div className="nra-row">
        <div>
          <label htmlFor="md-med">Medicine</label>
          <select id="md-med" value={med} onChange={(e) => setMed(e.target.value as Med)}>
            {(Object.keys(NAMES) as Med[]).map((m) => <option key={m} value={m}>{NAMES[m]}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="md-due">Day the dose was due</label>
          <input id="md-due" type="date" max={today} value={due} onChange={(e) => setDue(e.target.value)} />
        </div>
      </div>
      {verdict ? (
        <div className={`nra-result ${verdict.kind === 'take' ? 'take' : verdict.kind === 'check' ? 'check' : ''}`} role="status">
          <b>{verdict.kind === 'take' ? 'Label says: take it' : verdict.kind === 'skip' ? 'Label says: skip it' : 'Check before injecting'}: {verdict.title}</b>
          {verdict.body}
        </div>
      ) : (
        <p className="nra-note">Pick the date the dose was due to see what the label says.</p>
      )}
      <p className="nra-note">Based on the manufacturer labels, not medical advice. Never double a dose. If in doubt, call your prescriber or pharmacist.</p>
    </div>
  );
}
