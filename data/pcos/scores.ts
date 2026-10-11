import type { ScoreData } from '@/components/pcos/ScoreCard';

/**
 * Real results. Products come from Open Food Facts (retrieved 7 Oct 2026) and were scored with the app's own
 * scoreFood() on the numbers the app's lookup returns. Nothing here is invented.
 */
export const SCORE_EXAMPLES: ScoreData[] = [
  { name: 'Coca-Cola Original', brand: 'Coca-Cola', grade: 'E', basis: 'per serving', sugar: 35, fiber: 0, protein: 0, reasons: [{ text: 'High added sugar: 35g', tone: 'bad' }] },
  { name: 'Pain de mie 100% mie nature', brand: 'Harrys', grade: 'B', basis: 'per serving', sugar: 1.5, fiber: 1, protein: 1.8, reasons: [{ text: 'Low added sugar: 1.5g', tone: 'good' }] },
  { name: 'Mars', brand: 'Mars', grade: 'E', basis: 'per serving', sugar: 39.3, fiber: 1.2, protein: 4, reasons: [{ text: 'High added sugar: 39.3g', tone: 'bad' }, { text: 'Contains syrup', tone: 'bad' }, { text: 'Includes seed oils', tone: 'bad' }] },
];

/** The rules in src/lib/pcosScore.ts, in the order the code applies them. */
export const SCORE_RULES: [string, string][] = [
  ['Added sugar over 10 g', '−2'],
  ['Added sugar under 5 g', '+1'],
  ['Fiber 3 g or more', '+1'],
  ['Protein 10 g or more', '+1'],
  ['Ingredients name refined flour, white rice or a syrup', '−2'],
  ['Ingredients include a seed oil (sunflower, soybean, canola, rapeseed and similar)', '−0.5'],
  ['More than 15 items in the ingredient list', '−0.5'],
];

/** Score to grade, as in gradeFromScore(). */
export const GRADE_SCALE: [string, string, string][] = [
  ['A', '2 or more', '#8FD9A8'],
  ['B', '1 to 1.9', '#C5E8A5'],
  ['C', '0 to 0.9', '#FBE3A0'],
  ['D', '−1.5 to −0.1', '#F9C79A'],
  ['E', 'below −1.5', '#F3A0B5'],
];
