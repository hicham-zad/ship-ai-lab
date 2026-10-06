// How guides are grouped on the hub page. Every article slug should appear exactly once.
export const GUIDE_GROUPS: { title: string; blurb: string; slugs: string[] }[] = [
  {
    title: 'Free tools',
    blurb: 'Work out your days, your savings, or print a calendar. Nothing you enter is stored.',
    slugs: ['sobriety-calculator', 'sobriety-calendar'],
  },
  {
    title: 'Choosing an app',
    blurb: 'Compared from store listings, dated and linked.',
    slugs: ['best-sober-tracker-apps', 'best-app-to-quit-drinking', 'sober-app-for-women', 'reframe-app-cost', 'sober-girl-app'],
  },
  {
    title: 'Getting started and cravings',
    blurb: 'Practical help, grounded in NIAAA and MedlinePlus guidance.',
    slugs: ['how-to-quit-drinking-on-your-own', 'how-to-stop-alcohol-cravings', 'urge-surfing', 'what-to-do-instead-of-drinking', 'sober-journal-prompts', 'how-to-stop-drinking-wine-every-night', 'sleep-after-quitting-alcohol'],
  },
  {
    title: 'Understanding your drinking',
    blurb: 'Definitions, numbers and the research behind them.',
    slugs: ['sober-curious', 'gray-area-drinking', 'hangxiety', 'how-much-alcohol-is-too-much-for-women', 'alcohol-free-days', 'drinking-alone', 'alcohol-and-weight', 'alcohol-and-depression'],
  },
  {
    title: 'Challenges and milestones',
    blurb: 'A month off, and what the evidence says about each stage.',
    slugs: ['sober-october', 'dry-january-guide', 'dry-january-app', 'sobriety-milestones', 'benefits-of-quitting-alcohol', 'sober-holidays'],
  },
  {
    title: 'Resources',
    blurb: 'A facts-only directory.',
    slugs: ['sober-books-and-podcasts'],
  },
];

export const FEATURED_SLUGS = [
  'sobriety-calculator',
  'best-sober-tracker-apps',
  'sober-app-for-women',
  'urge-surfing',
  'sobriety-milestones',
  'sober-curious',
];
