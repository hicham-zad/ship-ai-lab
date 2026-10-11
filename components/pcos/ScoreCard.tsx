import type { CSSProperties } from 'react';

export const GRADE_COLORS: Record<string, string> = { A: '#8FD9A8', B: '#C5E8A5', C: '#FBE3A0', D: '#F9C79A', E: '#F3A0B5' };

export interface ScoreData {
  name: string;
  brand: string;
  grade: string;
  basis: string;
  sugar: number;
  fiber: number;
  protein: number;
  reasons: { text: string; tone: 'good' | 'bad' | 'neutral' }[];
}

/** A result card in the same shape as the app's scan result. The numbers come from Open Food Facts and the app's own scoring code. */
export default function ScoreCard({ s }: { s: ScoreData }) {
  return (
    <div className="pcx-score">
      <div className="pcx-score-top">
        <div className="pcx-grade" style={{ background: GRADE_COLORS[s.grade] }}>{s.grade}</div>
        <div>
          <div className="pcx-score-name">{s.name}</div>
          <div className="pcx-score-brand">{s.brand} · {s.basis}</div>
        </div>
      </div>
      <div className="pcx-bars">
        <div className="pcx-bar"><b>{s.sugar}g</b>sugar</div>
        <div className="pcx-bar"><b>{s.fiber}g</b>fiber</div>
        <div className="pcx-bar"><b>{s.protein}g</b>protein</div>
      </div>
      <div style={{ marginTop: 10 }}>
        {s.reasons.map((r, i) => (
          <div key={r.text} className={`pcx-reason ${r.tone}`} style={{ animationDelay: `${0.5 + i * 0.35}s` } as CSSProperties}>
            <i /> {r.text}
          </div>
        ))}
      </div>
    </div>
  );
}
