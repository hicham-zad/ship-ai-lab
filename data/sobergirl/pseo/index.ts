import type { Article } from '../articles';
import { SOURCES } from '../sources';
import { CHALLENGE_ARTICLES } from './challenges';
import { COMPARE_ARTICLES } from './compare';
import { GOLDEN_ARTICLES } from './golden';
import { GOLDEN2_ARTICLES } from './golden2';
import { GOLDEN3_ARTICLES } from './golden3';
import { MILESTONE_ARTICLES } from './milestones';
import { checkPseoQuality } from './shared';
import { USECASE_ARTICLES } from './usecases';

const CHART_SOURCE: Record<string, string> = { gallup: 'gallup', bmj: 'bmj', dryjan: 'acuk' };

/** Source ids in order of first citation. These pages never list sources by hand. */
function citationsOf(a: Article): string[] {
  const seen: string[] = [];
  const add = (t: string) => {
    for (const m of t.matchAll(/\[\[(\w+)\]\]/g)) if (!seen.includes(m[1])) seen.push(m[1]);
  };
  add(a.quickAnswer);
  for (const s of a.sections) {
    for (const b of s.blocks) {
      if (b.t === 'p') add(b.x);
      else if (b.t === 'ul' || b.t === 'ol') b.items.forEach(add);
      else if (b.t === 'callout') add(b.x);
      else if (b.t === 'table') {
        b.rows.flat().forEach(add);
        if (b.caption) add(b.caption);
      } else if (b.t === 'chart' && !seen.includes(CHART_SOURCE[b.id])) seen.push(CHART_SOURCE[b.id]);
    }
  }
  return seen;
}

const dated = (date: string, list: Article[]) => list.map((a) => ({ updated: date, ...a }));

export const PSEO_ARTICLES: Article[] = [
  ...dated('2026-10-10', [...MILESTONE_ARTICLES, ...COMPARE_ARTICLES, ...USECASE_ARTICLES, ...CHALLENGE_ARTICLES]),
  ...dated('2026-10-11', [...GOLDEN_ARTICLES, ...GOLDEN2_ARTICLES]),
  ...dated('2026-10-13', GOLDEN3_ARTICLES),
];

for (const a of PSEO_ARTICLES) {
  a.sources = citationsOf(a);
  const unknown = a.sources.filter((id) => !SOURCES[id]);
  if (unknown.length) throw new Error(`${a.slug}: unknown source ids [${unknown}]`);
}

checkPseoQuality(PSEO_ARTICLES);
