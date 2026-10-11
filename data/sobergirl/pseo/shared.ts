import type { Article, Block } from '../articles';

export const SAFETY_WITHDRAWAL =
  'If you drink heavily or every day, do not stop suddenly on your own. Alcohol withdrawal can be dangerous. MedlinePlus says to go to the emergency room or call 911 if seizures, fever, severe confusion, hallucinations or an irregular heartbeat occur [[medline]]. Talk to a doctor before you stop, or call the SAMHSA National Helpline on 1-800-662-4357 (free, confidential, 24/7) [[samhsa]].';

/** Store facts on the comparison pages were read from the listings on this date. */
export const CHECKED_ON = '10 October 2026';

/** Where the generated images for these pages live (see scripts/generate-sobergirl-pseo-assets.mjs). */
export const img = (name: string) => `/sobergirl/pseo/${name}.svg`;

export function figure(name: string, alt: string, title: string, caption: string, w = 1200, h = 675): Block {
  return { t: 'figure', src: img(name), alt, title, caption, w, h };
}

/**
 * The milestones and tree stages built into the app (MilestoneCatalog and TreeStageCatalog in the
 * app source). Keep in sync with the app. We show the badge and stage names, not the encouragement
 * text, because that text is not sourced.
 */
export const APP_MILESTONES: Record<number, { stage: string; stageLine: string; tier: 'sprout' | 'bloom' | 'deep' | 'golden' }> = {
  1: { stage: 'Sprout', stageLine: 'Your first green.', tier: 'sprout' },
  3: { stage: 'Seedling', stageLine: 'Roots are taking hold.', tier: 'sprout' },
  7: { stage: 'Sapling', stageLine: 'Standing on its own.', tier: 'sprout' },
  14: { stage: 'Young tree', stageLine: 'Leaves everywhere.', tier: 'bloom' },
  30: { stage: 'Budding tree', stageLine: 'The first buds appear.', tier: 'bloom' },
  60: { stage: 'Blooming tree', stageLine: 'In full bloom.', tier: 'bloom' },
  90: { stage: 'Flowering tree', stageLine: 'Petals on the breeze.', tier: 'deep' },
  180: { stage: 'Grand tree', stageLine: 'Deep roots, wide shade.', tier: 'deep' },
  365: { stage: 'Ancient tree', stageLine: 'Golden blossoms. A whole year of you.', tier: 'golden' },
};

const usd = (n: number) => `$${Math.round(n).toLocaleString('en-US')}`;
const num = (n: number) => Math.round(n).toLocaleString('en-US');

/** Money saved after `days` at three weekly spends. Plain arithmetic, labelled as illustrative. */
export function moneyTable(days: number, label: string): Block {
  const spends = [25, 50, 100];
  return {
    t: 'table',
    caption: `Illustrative arithmetic: weekly spend ÷ 7 × ${days} days. Use your own number in the calculator or the app.`,
    head: ['If you used to spend', `Saved by ${label}`],
    rows: spends.map((w) => [`${usd(w)} a week`, usd((w / 7) * days)]),
  };
}

/**
 * Standard drinks not drunk after `days`, with the alcohol and calories they would have held.
 * 14 g of alcohol per US standard drink (NIAAA) and 7 kcal per gram (Traversy and Chaput).
 */
export function drinksTable(days: number, label: string): Block {
  const weekly = [7, 14, 21];
  return {
    t: 'table',
    caption: `Illustrative arithmetic. A US standard drink holds 14 g of alcohol [[niaaaStandard]], and alcohol provides 7 kcal per gram [[traversy]], so one standard drink is about 98 kcal from the alcohol alone. Mixers and sugar add more.`,
    head: ['If you used to drink', `Drinks skipped by ${label}`, 'Alcohol skipped', 'Calories from alcohol skipped'],
    rows: weekly.map((w) => {
      const drinks = (w / 7) * days;
      return [`${w} standard drinks a week`, num(drinks), `${num(drinks * 14)} g`, `${num(drinks * 98)} kcal`];
    }),
  };
}

/* ---------------------------------------------------------------- quality gate */

// Every programmatic page must stand on its own. The build fails when one does not.
const MIN_UNIQUE_WORDS = 450;
const MIN_FAQS = 4;
const MIN_IMAGES = 3; // hero + at least two of: generated figures, app screenshots

function textOf(a: Article): string[] {
  const out: string[] = [a.quickAnswer, a.dek];
  for (const s of a.sections) {
    for (const b of s.blocks) {
      if (b.t === 'p' || b.t === 'h3') out.push(b.x);
      else if (b.t === 'ul' || b.t === 'ol') out.push(...b.items);
      else if (b.t === 'callout') out.push(b.x);
      else if (b.t === 'table') out.push(...b.rows.flat());
    }
  }
  out.push(...a.faqs.flatMap((f) => [f.q, f.a]));
  return out;
}

const sentences = (t: string) =>
  t
    .replace(/\[\[\w+\]\]/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .split(/(?<=[.!?])\s+/)
    .map((x) => x.trim().toLowerCase())
    .filter(Boolean);

export function checkPseoQuality(pages: Article[]) {
  const owners = new Map<string, Set<string>>();
  for (const a of pages) {
    for (const s of textOf(a).flatMap(sentences)) {
      if (!owners.has(s)) owners.set(s, new Set());
      owners.get(s)!.add(a.slug);
    }
  }
  const problems: string[] = [];
  const slugs = new Set<string>();
  for (const a of pages) {
    if (slugs.has(a.slug)) problems.push(`${a.slug}: duplicate slug`);
    slugs.add(a.slug);
    const unique = textOf(a)
      .flatMap(sentences)
      .filter((s) => owners.get(s)!.size === 1)
      .join(' ')
      .split(/\s+/).length;
    if (unique < MIN_UNIQUE_WORDS) problems.push(`${a.slug}: only ${unique} words of text unique to this page (need ${MIN_UNIQUE_WORDS})`);
    if (a.faqs.length < MIN_FAQS) problems.push(`${a.slug}: ${a.faqs.length} FAQs (need ${MIN_FAQS})`);
    const figures = a.sections.flatMap((s) => s.blocks).filter((b) => b.t === 'figure').length;
    const images = 1 + figures + (a.shots?.length ?? 0);
    if (images < MIN_IMAGES) problems.push(`${a.slug}: ${images} images (need ${MIN_IMAGES})`);
    if (a.sources.length === 0) problems.push(`${a.slug}: cites no sources`);
    if (a.related.length < 3) problems.push(`${a.slug}: fewer than 3 related links`);
  }
  if (problems.length) throw new Error(`Sober Girl pSEO quality gate failed:\n${problems.join('\n')}`);
}
