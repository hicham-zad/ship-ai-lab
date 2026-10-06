import { SOURCES } from '@/data/sobergirl/sources';

interface Row {
  label: string;
  value: number;
  tone?: 'plum' | 'rose' | 'sage';
  display?: string;
}

interface ChartDef {
  title: string;
  sub: string;
  max: number;
  rows: Row[];
  sourceId: string;
  note: string;
}

// All values below are copied from the cited source. Do not edit without re-checking it.
const CHARTS: Record<string, ChartDef> = {
  gallup: {
    title: 'US adults who say they drink alcohol',
    sub: 'Share of adults, Gallup Consumption Habits survey',
    max: 100,
    rows: [
      { label: 'All adults, 2022', value: 67, display: '67%' },
      { label: 'All adults, 2023', value: 62, display: '62%' },
      { label: 'All adults, 2024', value: 58, display: '58%' },
      { label: 'All adults, 2025', value: 54, display: '54%' },
      { label: 'Women, 2023', value: 62, tone: 'rose', display: '62%' },
      { label: 'Women, 2025', value: 51, tone: 'rose', display: '51%' },
    ],
    sourceId: 'gallup',
    note: 'Telephone poll, 7 to 21 July 2025, 1,002 US adults, margin of error ±4 points.',
  },
  bmj: {
    title: 'What changed after one month without alcohol',
    sub: 'Reduction from baseline in people who abstained for a month (n = 94). Bars show the size of the fall.',
    max: 80,
    rows: [
      { label: 'EGF (cancer-related growth factor)', value: 73.9, display: '−73.9%' },
      { label: 'VEGF (cancer-related growth factor)', value: 41.8, display: '−41.8%' },
      { label: 'Insulin resistance (HOMA score)', value: 25.9, tone: 'sage', display: '−25.9%' },
      { label: 'Systolic blood pressure', value: 6.6, tone: 'rose', display: '−6.6%' },
      { label: 'Diastolic blood pressure', value: 6.3, tone: 'rose', display: '−6.3%' },
      { label: 'Body weight', value: 1.5, tone: 'rose', display: '−1.5%' },
    ],
    sourceId: 'bmj',
    note: 'All changes p < 0.001. The control group (n = 47, kept drinking) showed no significant change. Observational study; participants chose their group.',
  },
  dryjan: {
    title: 'What Dry January participants reported',
    sub: 'Share of participants who said so, 2019 evaluation',
    max: 100,
    rows: [
      { label: 'Saved money', value: 86, tone: 'sage', display: '86%' },
      { label: 'Slept better', value: 70, tone: 'sage', display: '70%' },
      { label: 'Had more energy', value: 66, tone: 'sage', display: '66%' },
      { label: 'Lost weight', value: 54, tone: 'sage', display: '54%' },
    ],
    sourceId: 'acuk',
    note: 'Self-reported by people who chose to take part. Not a controlled trial.',
  },
};

export const chartSourceId = (id: string) => CHARTS[id]?.sourceId;

export default function Chart({ id, num }: { id: string; num: number }) {
  const c = CHARTS[id];
  if (!c) return null;
  const src = SOURCES[c.sourceId];
  return (
    <figure className="sga-chart" aria-label={c.title} style={{ marginInline: 0 }}>
      <h4>{c.title}</h4>
      <p className="sga-chart-sub">{c.sub}</p>
      {c.rows.map((r) => (
        <div className="sga-bar" key={r.label}>
          <span>{r.label}</span>
          <div className="sga-bar-track" role="img" aria-label={`${r.label}: ${r.display ?? r.value}`}>
            <div className={`sga-bar-fill ${r.tone ?? ''}`} style={{ width: `${(r.value / c.max) * 100}%` }}>
              {r.display ?? r.value}
            </div>
          </div>
        </div>
      ))}
      <figcaption className="sga-chart-src">
        Source: <a href={`#src-${num}`}>{src.publisher}</a>. {c.note}
      </figcaption>
    </figure>
  );
}
