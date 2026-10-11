import type { Article, Block, Section } from '../articles';
import { CHECKED_ON, figure } from './shared';

// Alternative and head-to-head pages. Every fact about another app comes from its own store
// listing (cited, dated). We never rate, score or quote marketing claims, and every page says
// who should stay with the other app.

const disclosure = (app: string): Section => ({
  id: 'disclosure',
  h2: 'Read this first: we make Sober Girl',
  blocks: [
    {
      t: 'callout',
      kind: 'disclosure',
      title: 'Disclosure',
      x: `We build Sober Girl, so we are not neutral about it. Facts about ${app} and the other apps come from their own App Store and Google Play listings, read on ${CHECKED_ON} and linked in the sources. We have not scored any app, and we do not repeat marketing claims. Prices, ratings and features change, so check the listing before you pay.`,
    },
  ],
});

const switching = (from: string, subscription: boolean): Section => ({
  id: 'switch',
  h2: `How to switch from ${from} without losing your count`,
  blocks: [
    {
      t: 'ol',
      items: [
        `**Write down your sober date** from ${from} before you change anything. Your day count is just that date, so any tracker can pick it up.`,
        '**Note your weekly spend** so the money-saved figure carries over.',
        '**Export anything you want to keep.** Journal entries and notes do not move between apps, so copy the ones that matter.',
        ...(subscription
          ? [
              '**Cancel the subscription in the store, not by deleting the app.** Google Play says uninstalling an app does not cancel its subscription [[playCancel]]. On iPhone, cancel in Settings under your Apple Account [[appleCancel]].',
            ]
          : []),
        '**Set the same date in the new app.** In Sober Girl, go to Settings, then "Sober since", and pick the day.',
      ],
    },
  ],
});

/* ---------------------------------------------------------------- shared store facts */

const F = {
  iamsober: {
    price: 'Free. Sober Plus is listed at $9.99 a month, $27.49 for 6 months, and $29.99 or $39.99 for 12 months [[asIAmSober]]',
    devices: 'iPhone, Mac, Apple Watch and Apple Vision [[asIAmSober]]. Android, on Google Play [[playIAmSober]]',
    rating: '4.9 from 189K App Store ratings [[asIAmSober]]. 4.7 from about 143K Google Play reviews [[playIAmSober]]',
    privacy: 'App Store label: contact info, user content, identifiers, usage data and diagnostics linked to you [[asIAmSober]]. Google Play: may share some data types with third parties [[playIAmSober]]',
  },
  reframe: {
    price: 'Free to download with a 7-day trial. Reframe Access is $13.99 a month or $79.99 a year; other listed plans run up to $119.99 a year [[asReframe]]',
    devices: 'iPhone, Apple Watch and Apple Vision [[asReframe]]. Android, as "Reframe: Cut Back on Alcohol" [[playReframe]]',
    rating: '4.7 from 45K App Store ratings [[asReframe]]. 4.5 from about 5.9K Google Play reviews [[playReframe]]',
    privacy: 'App Store label: identifiers used to track you [[asReframe]]. Google Play: no data shared with third parties [[playReframe]]',
  },
  sunflower: {
    price: 'Free to download. Listed in-app purchases run from $2.95 to $44.95, including $8.95 monthly; unlimited AI sponsor messages need a subscription [[asSunflower]]',
    devices: 'iPhone, iPad, Mac and Apple Vision [[asSunflower]]. Android, as "Sober Day Counter - Sunflower" [[playSunflower]]',
    rating: '4.8 from 6.2K App Store ratings [[asSunflower]]. 4.7 from about 6.3K Google Play reviews [[playSunflower]]',
    privacy: 'App Store label: usage data used to track you [[asSunflower]]. Google Play: no data collected and none shared [[playSunflower]]',
  },
  trydry: {
    price: 'Free, with no ads and no in-app purchases listed [[asTryDry]]',
    devices: 'iPhone, iPad, Mac and Apple Vision [[asTryDry]]. Android, as "Try Dry: Dry January® & beyond" [[playTryDry]]',
    rating: '4.8 from 2.9K App Store ratings [[asTryDry]]. 4.7 from about 4.3K Google Play reviews [[playTryDry]]',
    privacy: 'App Store label: contact info linked to you [[asTryDry]]. Google Play: no data shared with third parties [[playTryDry]]',
  },
  sobergirl: {
    price: 'Core tools free. Plus adds the journal, mood insights and shareable milestone cards. Price shown in the app',
    devices: 'Android, on Google Play, listed as "Drink Less: Alcohol Free Days" [[playSoberGirl]]. iPhone coming soon',
    rating: 'Too new to have ratings on the listing [[playSoberGirl]]. We do not rate ourselves',
    privacy: 'Your streak, reason and journal stay on your phone. Google Play: no data shared with third parties [[playSoberGirl]]',
  },
};

const glance = (rows: [string, keyof typeof F, string][]): Block => ({
  t: 'table',
  caption: `From each app’s store listings, read ${CHECKED_ON}. Check the listing before you pay.`,
  head: ['App', 'Built around', 'Cost', 'Devices', 'Store rating'],
  rows: rows.map(([name, k, around]) => [name, around, F[k].price, F[k].devices, F[k].rating]),
});

interface CompareRow {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  dek: string;
  quickAnswer: string;
  keywords: string[];
  heroAlt: string;
  other: string;
  subscription: boolean;
  sections: Section[];
  figureAlt: string;
  faqs: { q: string; a: string }[];
  related: string[];
}

const ROWS: CompareRow[] = [
  /* ------------------------------------------------------------------ I Am Sober alternative */
  {
    slug: 'i-am-sober-alternative',
    metaTitle: 'I Am Sober Alternative: 4 Sober Apps Compared (2026)',
    metaDescription:
      'Looking for an I Am Sober alternative? Four sober trackers compared on price, Android, privacy labels and what each is built for, from store listings.',
    h1: 'I Am Sober alternatives: four sober apps compared',
    dek: 'I Am Sober is the most widely rated sobriety app. If it is not the right fit for you, here is how four alternatives differ, using only what their store listings say.',
    quickAnswer:
      'The best I Am Sober alternative depends on why you are leaving. For a free app with no ads that also handles cutting down, Try Dry is free with no in-app purchases [[asTryDry]]. For an AI companion at any hour, Sunflower has an AI sponsor [[asSunflower]]. For a structured program, Reframe runs a 160-day course [[asReframe]]. For a quiet, private tracker for women on Android, Sober Girl keeps your streak and journal on your phone. I Am Sober itself is free, with Sober Plus from $9.99 a month [[asIAmSober]].',
    keywords: ['i am sober alternative', 'apps like i am sober', 'i am sober app alternative', 'alternative to i am sober', 'i am sober vs', 'sober app like i am sober'],
    heroAlt: 'Four app cards fanned out, one marked with a check, beside a counter reading day 1',
    other: 'I Am Sober',
    subscription: true,
    figureAlt: 'Comparison card of I Am Sober and four alternatives by cost model, Android availability and what each is built around',
    sections: [
      {
        id: 'about',
        h2: 'What I Am Sober does',
        blocks: [
          {
            t: 'p',
            x: 'I Am Sober, from I Am Sober LLC, is a sober day tracker with a daily pledge and end-of-day review, a calculator for money and time saved, trigger analysis, journaling, milestones and a withdrawal timeline [[asIAmSober]]. Its paid tier, Sober Plus, adds group creation, a Face ID or Touch ID lock, cloud backups, and tracking for more habits [[asIAmSober]]. It has 4.9 stars from 189K App Store ratings and more than 10 million Google Play downloads [[asIAmSober]] [[playIAmSober]].',
          },
          {
            t: 'p',
            x: 'In short, it is a broad, well-established app with a large community. People look elsewhere for a few common reasons: the price of Plus, wanting fewer social features, a different look, or wanting to see how an app handles their data. Each alternative below is good at a different one of those.',
          },
        ],
      },
      {
        id: 'compared',
        h2: 'I Am Sober and four alternatives at a glance',
        blocks: [
          glance([
            ['I Am Sober', 'iamsober', 'A day tracker with a daily pledge, milestones and groups'],
            ['Try Dry', 'trydry', 'Tracking dry days, units, calories and money, for cutting down or stopping'],
            ['Sunflower', 'sunflower', 'A sunflower per sober day, guided exercises and an AI sponsor'],
            ['Reframe', 'reframe', 'A 160-day education program with optional coaching'],
            ['Sober Girl', 'sobergirl', 'A calm, private tracker for women, with a growing tree'],
          ]),
        ],
      },
      {
        id: 'which',
        h2: 'Which alternative fits which reason',
        blocks: [
          { t: 'h3', x: 'If cost is the reason: Try Dry' },
          {
            t: 'p',
            x: 'Try Dry is the only app here with no paid tier at all. Its listing says there are no upfront costs, no hidden costs and no ads, and it is funded by the charity Alcohol Change UK [[asTryDry]]. It tracks units and calories as well as dry days, so it suits cutting down as much as stopping.',
          },
          { t: 'h3', x: 'If privacy is the reason: read the labels' },
          {
            t: 'p',
            x: 'The App Store label for I Am Sober lists contact info, user content, identifiers, usage data and diagnostics as data linked to you [[asIAmSober]]. Sunflower’s Google Play label says it collects no data and shares none [[playSunflower]]. Sober Girl keeps your streak, reason and journal on your phone, without an account. Our [private sobriety tracker](/sobergirl/private-sobriety-tracker) page compares every label side by side.',
          },
          { t: 'h3', x: 'If you want support at any hour: Sunflower' },
          {
            t: 'p',
            x: 'Sunflower pairs a sober-day counter with an AI sponsor named Sam that is available around the clock, plus guided exercises and a community [[asSunflower]]. An AI companion is not a person or a clinician, so decide whether that appeals.',
          },
          { t: 'h3', x: 'If you want to be taught, not just tracked: Reframe' },
          {
            t: 'p',
            x: 'Reframe is a structured program rather than a counter: 160 days of lessons, with tracking, a private community and optional one-to-one coaching [[asReframe]]. It costs more than the others, so compare plans before the trial ends.',
          },
          { t: 'h3', x: 'If you want something quieter, made for women: Sober Girl' },
          {
            t: 'p',
            x: 'Sober Girl is a calm daily companion: a day counter, money saved, a daily check-in, a Craving SOS with a breathing exercise and a 10-minute timer, and a tree that grows as you stay sober. It has no feed, no groups and no AI chat. It is on Android now, with iPhone coming soon.',
          },
        ],
      },
      {
        id: 'stay',
        h2: 'When to stay with I Am Sober',
        blocks: [
          {
            t: 'ul',
            items: [
              'You value its community and groups, which none of the quieter apps match.',
              'You use an Apple Watch or Mac, which it supports [[asIAmSober]].',
              'You want cloud backup of your data, which comes with Sober Plus [[asIAmSober]].',
              'You track more than alcohol and want one app for all of it.',
            ],
          },
        ],
      },
    ],
    faqs: [
      { q: 'What is the best alternative to I Am Sober?', a: 'It depends on your reason. Try Dry is free with no ads, Sunflower adds an AI sponsor, Reframe is a structured program and Sober Girl is a private tracker for women on Android.' },
      { q: 'Is I Am Sober free?', a: 'The download and core tracker are free. Sober Plus is listed at $9.99 a month, $27.49 for six months, and $29.99 or $39.99 for twelve months on the US App Store.' },
      { q: 'Is there a free app like I Am Sober?', a: 'Try Dry is free with no in-app purchases listed. Sober Girl and Sunflower are free to download with optional paid features.' },
      { q: 'Can I move my sober date from I Am Sober to another app?', a: 'Yes. Your count is just your start date. Write it down and set the same date in the new app. Journal entries do not transfer, so copy any you want to keep.' },
      { q: 'Does cancelling I Am Sober happen when I delete it?', a: 'No. Google Play says uninstalling an app does not cancel its subscription. Cancel in the Play Store or in your Apple Account settings.' },
    ],
    related: ['best-sober-tracker-apps', 'sunflower-alternative', 'i-am-sober-vs-reframe'],
  },

  /* ------------------------------------------------------------------ Reframe alternative */
  {
    slug: 'reframe-alternative',
    metaTitle: 'Reframe Alternative: Cheaper and Free Apps Compared (2026)',
    metaDescription:
      'Reframe alternatives compared from store listings: free and cheaper apps for cutting back or quitting, what each costs, Android availability and privacy labels.',
    h1: 'Reframe alternatives: free and cheaper apps compared',
    dek: 'Reframe is a paid, structured program. If you want something cheaper, simpler or free, here is how the alternatives differ, with prices from the listings.',
    quickAnswer:
      'If you like Reframe’s goal but not its price, the closest free alternative is Try Dry, which also supports cutting down and lists no costs at all [[asTryDry]]. I Am Sober and Sunflower are free to download with optional upgrades [[asIAmSober]] [[asSunflower]], and Sober Girl’s core tracker is free on Android. None of them offers Reframe’s 160-day course or one-to-one coaching [[asReframe]]. Reframe Access is listed at $13.99 a month or $79.99 a year, after a 7-day trial [[asReframe]].',
    keywords: ['reframe alternative', 'reframe app alternative', 'free reframe alternative', 'apps like reframe', 'cheaper than reframe', 'reframe alternative free'],
    heroAlt: 'A price tag with a strike-through next to three free app cards',
    other: 'Reframe',
    subscription: true,
    figureAlt: 'Comparison card of Reframe and four alternatives by cost model, Android availability and what each is built around',
    sections: [
      {
        id: 'about',
        h2: 'What Reframe is, and what it costs',
        blocks: [
          {
            t: 'p',
            x: 'Reframe, from Glucobit Inc., is built around a 160-day education program, with progress tracking, a private community, meditations and games [[asReframe]]. Its premium Thrive Coaching adds one-to-one access to a certified recovery coach and live coaching calls [[asReframe]]. On Android it is called "Reframe: Cut Back on Alcohol" [[playReframe]], which reflects its focus on drinking less rather than only on stopping.',
          },
          {
            t: 'table',
            caption: `US App Store in-app purchase list for Reframe, read ${CHECKED_ON}.`,
            head: ['Plan as listed', 'Price'],
            rows: [
              ['Reframe Access (monthly)', '$13.99 [[asReframe]]'],
              ['Reframe Access (yearly)', '$79.99 [[asReframe]]'],
              ['Reframe (monthly)', '$19.99 [[asReframe]]'],
              ['Reframe Silver (monthly / annual)', '$24.99 / $119.99 [[asReframe]]'],
              ['Other annual plans listed', '$59.99, $99.99 and $119.99 [[asReframe]]'],
            ],
          },
          {
            t: 'p',
            x: 'For a full price breakdown and how to cancel, see [is Reframe free?](/sobergirl/reframe-app-cost).',
          },
        ],
      },
      {
        id: 'compared',
        h2: 'Reframe and four alternatives at a glance',
        blocks: [
          glance([
            ['Reframe', 'reframe', 'A 160-day education program with optional coaching'],
            ['Try Dry', 'trydry', 'Tracking dry days, units, calories and money, for cutting down or stopping'],
            ['I Am Sober', 'iamsober', 'A day tracker with a daily pledge, milestones and groups'],
            ['Sunflower', 'sunflower', 'A sunflower per sober day, guided exercises and an AI sponsor'],
            ['Sober Girl', 'sobergirl', 'A calm, private tracker for women, with a growing tree'],
          ]),
        ],
      },
      {
        id: 'which',
        h2: 'What you give up, and what you gain',
        blocks: [
          {
            t: 'p',
            x: 'Moving from Reframe to a tracker is a change of approach, not just of price. Reframe teaches; trackers count. If the lessons were what helped, a counter alone may feel thin. If you mostly opened Reframe to see your progress, a free tracker may be all you need.',
          },
          { t: 'h3', x: 'For cutting back: Try Dry' },
          {
            t: 'p',
            x: 'Try Dry logs planned and unplanned drinks against a goal, tracks units and calories, and offers a free coaching email programme [[asTryDry]]. Of the alternatives, it is the closest to Reframe’s cut-back focus, and it costs nothing.',
          },
          { t: 'h3', x: 'For a streak with a community: I Am Sober' },
          {
            t: 'p',
            x: 'I Am Sober has the largest user base and groups for accountability [[asIAmSober]] [[playIAmSober]], which partly replaces Reframe’s community.',
          },
          { t: 'h3', x: 'For a quiet tracker with a craving tool: Sober Girl' },
          {
            t: 'p',
            x: 'Sober Girl is free to start, with a day counter, money saved, a one-tap daily check-in and a Craving SOS with a 4-7-8 breathing exercise and a 10-minute timer. It has no lessons and no coaching. It is on Android now, iPhone coming soon.',
          },
        ],
      },
      {
        id: 'stay',
        h2: 'When to stay with Reframe',
        blocks: [
          {
            t: 'ul',
            items: [
              'The daily lessons are what keep you going.',
              'You want access to a human coach, which none of the alternatives here offer [[asReframe]].',
              'You are on an annual plan you have already paid for. Use it, then decide at renewal.',
            ],
          },
        ],
      },
    ],
    faqs: [
      { q: 'Is there a free alternative to Reframe?', a: 'Yes. Try Dry is free with no in-app purchases listed and supports cutting down. I Am Sober, Sunflower and Sober Girl are free to download with optional paid features.' },
      { q: 'How much does Reframe cost?', a: 'On the US App Store, Reframe Access is listed at $13.99 a month or $79.99 a year, with other plans up to $119.99 a year. There is a 7-day free trial.' },
      { q: 'Is Reframe on Android?', a: 'Yes. It is on Google Play as "Reframe: Cut Back on Alcohol", with a 4.5 rating from about 5.9K reviews when we checked.' },
      { q: 'Which app is most like Reframe?', a: 'None of the trackers offers Reframe’s 160-day course. Try Dry is closest in goal, because it is built for cutting down as well as stopping.' },
      { q: 'Will deleting Reframe cancel my subscription?', a: 'No. Cancel in the Play Store or your Apple Account settings. Google Play says uninstalling does not cancel a subscription.' },
    ],
    related: ['reframe-app-cost', 'reframe-vs-try-dry', 'free-sobriety-tracker-app'],
  },

  /* ------------------------------------------------------------------ Sunflower alternative */
  {
    slug: 'sunflower-alternative',
    metaTitle: 'Sunflower Sober App Alternative: 4 Options Compared (2026)',
    metaDescription:
      'Alternatives to the Sunflower sober app compared from store listings: with or without AI, cost, Android, privacy labels and what each app is built for.',
    h1: 'Sunflower sober app alternatives: four options compared',
    dek: 'Sunflower combines a day counter with an AI sponsor. If you want something without AI, cheaper, or calmer, here is how the alternatives compare.',
    quickAnswer:
      'Sunflower is a sober-day tracker with an AI sponsor named Sam, guided exercises and a community, free to download with subscriptions such as $8.95 a month [[asSunflower]]. If you want the same day-counting without an AI companion, I Am Sober adds a daily pledge and groups [[asIAmSober]], Try Dry is free with no ads [[asTryDry]], and Sober Girl is a quiet, private tracker for women on Android. If you want more structure rather than less, Reframe runs a 160-day program [[asReframe]].',
    keywords: ['sunflower sober alternative', 'sunflower app alternative', 'apps like sunflower sober', 'sunflower sober app', 'sober app without ai', 'alternative to sunflower app'],
    heroAlt: 'A sunflower beside a calmer bloom, with an AI chat bubble crossed out',
    other: 'Sunflower',
    subscription: true,
    figureAlt: 'Comparison card of Sunflower and four alternatives by cost model, Android availability and what each is built around',
    sections: [
      {
        id: 'about',
        h2: 'What Sunflower does',
        blocks: [
          {
            t: 'p',
            x: 'Sunflower counts sober days from alcohol, nicotine, weed or other substances, and gives you a sunflower for each day [[asSunflower]]. Its listing describes an AI sponsor called Sam, available around the clock for cravings, advice and milestones, guided exercises for cravings and thinking patterns, journaling prompts, milestones from one second up to ten years, and a community [[asSunflower]]. Unlimited messages with the AI sponsor need a subscription [[asSunflower]].',
          },
          {
            t: 'p',
            x: 'On privacy, Sunflower’s Google Play label is one of the cleanest we saw: it says no data is collected and none is shared [[playSunflower]]. The App Store label lists usage data used to track you [[asSunflower]], so the two stores tell slightly different stories. Read both if this matters to you.',
          },
        ],
      },
      {
        id: 'compared',
        h2: 'Sunflower and four alternatives at a glance',
        blocks: [
          glance([
            ['Sunflower', 'sunflower', 'A sunflower per sober day, guided exercises and an AI sponsor'],
            ['I Am Sober', 'iamsober', 'A day tracker with a daily pledge, milestones and groups'],
            ['Try Dry', 'trydry', 'Tracking dry days, units, calories and money, for cutting down or stopping'],
            ['Reframe', 'reframe', 'A 160-day education program with optional coaching'],
            ['Sober Girl', 'sobergirl', 'A calm, private tracker for women, with a growing tree'],
          ]),
        ],
      },
      {
        id: 'which',
        h2: 'Picking an alternative',
        blocks: [
          { t: 'h3', x: 'If you do not want an AI companion' },
          {
            t: 'p',
            x: 'I Am Sober, Try Dry and Sober Girl have no AI chat in their listings. I Am Sober puts people at the centre instead, with groups [[asIAmSober]]. Try Dry uses goals, badges and a coaching email programme [[asTryDry]]. Sober Girl uses a Craving SOS: a breathing exercise, a 10-minute timer and your own reason, one tap away.',
          },
          { t: 'h3', x: 'If you like the growing-plant idea' },
          {
            t: 'p',
            x: 'Sober Girl has a similar idea in a different form: a single tree that grows through ten stages, from Seed to an Ancient tree at one year, and grows a little faster each day you check in. Missing a check-in never takes growth away, and the tree never dies.',
          },
          { t: 'h3', x: 'If you track several substances' },
          {
            t: 'p',
            x: 'Stay with Sunflower or look at I Am Sober, whose Plus tier covers more habits [[asIAmSober]]. Sober Girl and Try Dry are alcohol-only.',
          },
        ],
      },
      {
        id: 'stay',
        h2: 'When to stay with Sunflower',
        blocks: [
          {
            t: 'ul',
            items: [
              'The AI sponsor genuinely helps you through cravings at night.',
              'You want one app for alcohol and other substances [[asSunflower]].',
              'You want a store label that says no data is collected, as Sunflower’s Google Play label does [[playSunflower]].',
            ],
          },
        ],
      },
    ],
    faqs: [
      { q: 'Is the Sunflower sober app free?', a: 'It is free to download. The US listing shows in-app purchases from $2.95 to $44.95, including $8.95 monthly, and unlimited AI sponsor messages need a subscription.' },
      { q: 'Is there a sober app without AI?', a: 'Yes. I Am Sober, Try Dry and Sober Girl have no AI chat in their store listings.' },
      { q: 'Is Sunflower on Android?', a: 'Yes, as "Sober Day Counter - Sunflower" on Google Play, rated 4.7 from about 6.3K reviews when we checked.' },
      { q: 'Which app is most like Sunflower?', a: 'For the growing-plant idea, Sober Girl’s tree is the closest. For community, I Am Sober.' },
    ],
    related: ['i-am-sober-vs-sunflower', 'i-am-sober-alternative', 'best-sober-tracker-apps'],
  },

  /* ------------------------------------------------------------------ Try Dry alternative */
  {
    slug: 'try-dry-alternative',
    metaTitle: 'Try Dry Alternative: Apps After Dry January (2026)',
    metaDescription:
      'Alternatives to the Try Dry app compared from store listings: day counters for quitting, apps for cutting down, Android availability, cost and privacy.',
    h1: 'Try Dry alternatives: what to use after Dry January',
    dek: 'Try Dry is free, charity-run and good at cutting down. If you want to stop completely, or want a different kind of app, here are the options.',
    quickAnswer:
      'Try Dry is hard to beat on price: it is free with no ads, funded by the charity Alcohol Change UK, and tracks units, calories and money [[asTryDry]]. People who switch usually want a different approach rather than a cheaper one. For a streak and community, I Am Sober is the most widely rated [[asIAmSober]]. For a structured course on cutting back, Reframe runs a 160-day program [[asReframe]]. For a calm day counter with a craving tool, Sober Girl is free to start on Android.',
    keywords: ['try dry alternative', 'try dry app alternative', 'apps like try dry', 'dry january app alternative', 'try dry app android', 'after dry january app'],
    heroAlt: 'A January calendar handing over to a day counter that keeps going into February',
    other: 'Try Dry',
    subscription: false,
    figureAlt: 'Comparison card of Try Dry and four alternatives by cost model, Android availability and what each is built around',
    sections: [
      {
        id: 'about',
        h2: 'What Try Dry does well',
        blocks: [
          {
            t: 'p',
            x: 'Try Dry is the Dry January app from Alcohol Change UK, the charity that runs the challenge [[acukAbout]]. Its App Store listing is published by Alcohol Research UK and says the app is funded by Alcohol Change UK, with no upfront costs, no hidden costs and no ads [[asTryDry]]. It tracks units, calories and money saved, lets you log planned drinking against a goal, and has badges, missions, charts, reminders, a drinking risk quiz and a free coaching email programme [[asTryDry]]. It also supports Sober Spring and Sober October [[asTryDry]].',
          },
          {
            t: 'p',
            x: 'It is on Android too, as "Try Dry: Dry January® & beyond", with more than 100,000 downloads [[playTryDry]]. Units are a UK measure: one UK unit is 8 g of alcohol [[nhs]], while a US standard drink is 14 g [[niaaaStandard]], so US users may find the numbers unfamiliar.',
          },
        ],
      },
      {
        id: 'compared',
        h2: 'Try Dry and four alternatives at a glance',
        blocks: [
          glance([
            ['Try Dry', 'trydry', 'Tracking dry days, units, calories and money, for cutting down or stopping'],
            ['I Am Sober', 'iamsober', 'A day tracker with a daily pledge, milestones and groups'],
            ['Reframe', 'reframe', 'A 160-day education program with optional coaching'],
            ['Sunflower', 'sunflower', 'A sunflower per sober day, guided exercises and an AI sponsor'],
            ['Sober Girl', 'sobergirl', 'A calm, private tracker for women, with a growing tree'],
          ]),
        ],
      },
      {
        id: 'which',
        h2: 'Which way to go after Try Dry',
        blocks: [
          {
            t: 'p',
            x: 'Try Dry is built around a drinking diary: you log the days you drink and the days you do not. That is ideal for cutting down. If you have decided to stop, a day counter can feel simpler, because there is only one number to protect.',
          },
          {
            t: 'ul',
            items: [
              '**Stopping, with a community:** I Am Sober, which has groups and a daily pledge [[asIAmSober]].',
              '**Stopping, quietly:** Sober Girl, which counts days, money and hours, and gives you a Craving SOS and a tree that grows with your streak.',
              '**Cutting down with more teaching:** Reframe, if you want lessons and can pay for them [[asReframe]].',
              '**Several substances:** Sunflower, which counts alcohol, nicotine, weed and others [[asSunflower]].',
            ],
          },
        ],
      },
      {
        id: 'stay',
        h2: 'When to stay with Try Dry',
        blocks: [
          {
            t: 'ul',
            items: [
              'Your goal is to drink less, not to stop. Try Dry is designed for it.',
              'You want a completely free app with no upsell. It is the only one here [[asTryDry]].',
              'You are in the UK and think in units.',
            ],
          },
          {
            t: 'p',
            x: 'You can also use two apps: Try Dry for a drinking diary and a separate counter for your current streak. Our guide to [alcohol-free days](/sobergirl/alcohol-free-days) explains how to track both.',
          },
        ],
      },
    ],
    faqs: [
      { q: 'Is Try Dry free?', a: 'Yes. Its App Store listing says there are no upfront costs, no hidden costs and no ads. It is funded by the charity Alcohol Change UK.' },
      { q: 'Is Try Dry available on Android?', a: 'Yes, as "Try Dry: Dry January® & beyond" on Google Play, rated 4.7 from about 4.3K reviews when we checked.' },
      { q: 'What should I use after Dry January?', a: 'If you want to keep cutting down, keep Try Dry. If you want to stop completely, a day counter such as I Am Sober or Sober Girl may feel simpler.' },
      { q: 'Does Try Dry use US standard drinks?', a: 'It tracks units, a UK measure of 8 g of alcohol. A US standard drink is 14 g, so the numbers differ.' },
    ],
    related: ['reframe-vs-try-dry', 'dry-january-app', 'alcohol-free-days'],
  },

  /* ------------------------------------------------------------------ I Am Sober vs Reframe */
  {
    slug: 'i-am-sober-vs-reframe',
    metaTitle: 'I Am Sober vs Reframe: Cost, Features, Which to Pick (2026)',
    metaDescription:
      'I Am Sober vs Reframe compared from their store listings: a free day tracker against a paid 160-day program. Prices, devices, privacy labels and who each suits.',
    h1: 'I Am Sober vs Reframe: tracker or program?',
    dek: 'These two are often compared but do different jobs. One counts your days; the other teaches a course. Here is how they differ, from their own listings.',
    quickAnswer:
      'I Am Sober and Reframe do different jobs. I Am Sober is a free day tracker with a daily pledge, milestones and groups; Sober Plus is listed from $9.99 a month [[asIAmSober]]. Reframe is a 160-day education program with tracking, community and optional coaching; Reframe Access is listed at $13.99 a month or $79.99 a year after a 7-day trial [[asReframe]]. Pick I Am Sober to count days and stop; pick Reframe if you want structured lessons and are cutting back. Both run on iPhone and Android [[playIAmSober]] [[playReframe]].',
    keywords: ['i am sober vs reframe', 'reframe vs i am sober', 'i am sober or reframe', 'reframe or i am sober', 'difference between reframe and i am sober'],
    heroAlt: 'A day counter and an open course book side by side on a scale',
    other: 'I Am Sober or Reframe',
    subscription: true,
    figureAlt: 'Head-to-head card comparing I Am Sober and Reframe on cost, devices, approach and store ratings',
    sections: [
      {
        id: 'head',
        h2: 'Head to head',
        blocks: [
          {
            t: 'table',
            caption: `From each app’s US App Store and Google Play listings, read ${CHECKED_ON}.`,
            head: ['', 'I Am Sober', 'Reframe'],
            rows: [
              ['Approach', 'Day tracker with a daily pledge and end-of-day review [[asIAmSober]]', '160-day education program [[asReframe]]'],
              ['Best for', 'Stopping, and keeping a streak', 'Cutting back, and learning why you drink'],
              ['Cost', F.iamsober.price, F.reframe.price],
              ['People', 'Groups (Plus) and story sharing [[asIAmSober]]', 'Private community, optional 1:1 coach [[asReframe]]'],
              ['Devices', F.iamsober.devices, F.reframe.devices],
              ['Store rating', F.iamsober.rating, F.reframe.rating],
              ['Privacy', F.iamsober.privacy, F.reframe.privacy],
            ],
          },
        ],
      },
      {
        id: 'differences',
        h2: 'The differences that matter',
        blocks: [
          { t: 'h3', x: 'Counting versus learning' },
          {
            t: 'p',
            x: 'I Am Sober is built around a number: your days. The pledge, the review and the milestones all protect it [[asIAmSober]]. Reframe is built around a course, with daily lessons over 160 days and tracking alongside [[asReframe]]. If you know why you want to stop and need help staying stopped, a tracker fits. If you are still working out your relationship with alcohol, a program may.',
          },
          { t: 'h3', x: 'Free versus paid' },
          {
            t: 'p',
            x: 'You can use I Am Sober’s tracker without paying [[asIAmSober]]. Reframe is free to download, but its core plans are subscriptions after a 7-day trial [[asReframe]]. Over a year, Reframe Access at $79.99 costs about twice the most expensive annual I Am Sober plan listed, $39.99 [[asReframe]] [[asIAmSober]].',
          },
          { t: 'h3', x: 'Quitting versus cutting back' },
          {
            t: 'p',
            x: 'Reframe’s Android name, "Reframe: Cut Back on Alcohol", says a lot about its focus [[playReframe]]. I Am Sober counts days without, which suits stopping. Neither stops you using it the other way.',
          },
        ],
      },
      {
        id: 'third',
        h2: 'A third option',
        blocks: [
          {
            t: 'p',
            x: 'If neither fits, Try Dry is free and built for cutting down [[asTryDry]], and Sober Girl is a free-to-start, private tracker for women on Android, with a Craving SOS and a growing tree. Our [best sober tracker apps](/sobergirl/best-sober-tracker-apps) page compares six apps.',
          },
        ],
      },
    ],
    faqs: [
      { q: 'Is I Am Sober or Reframe better?', a: 'Neither is better overall. I Am Sober is a free day tracker suited to stopping; Reframe is a paid 160-day program suited to cutting back and learning. Pick by your goal.' },
      { q: 'Is Reframe more expensive than I Am Sober?', a: 'Yes, on the US listings. Reframe Access is $79.99 a year; I Am Sober’s annual Sober Plus is listed at $29.99 or $39.99, and its core tracker is free.' },
      { q: 'Can I use I Am Sober and Reframe together?', a: 'Yes. Some people use a program for lessons and a separate tracker for their streak. Just avoid paying for two subscriptions you do not need.' },
      { q: 'Are both on Android?', a: 'Yes. I Am Sober has more than 10 million Google Play downloads, and Reframe is on Google Play as "Reframe: Cut Back on Alcohol".' },
    ],
    related: ['i-am-sober-alternative', 'reframe-alternative', 'reframe-app-cost'],
  },

  /* ------------------------------------------------------------------ I Am Sober vs Sunflower */
  {
    slug: 'i-am-sober-vs-sunflower',
    metaTitle: 'I Am Sober vs Sunflower: Which Sober App to Use (2026)',
    metaDescription:
      'I Am Sober vs Sunflower compared from their store listings: community groups or an AI sponsor, cost, devices, Android, privacy labels and who each suits.',
    h1: 'I Am Sober vs Sunflower: community or AI sponsor?',
    dek: 'Both count your sober days. One leans on people, the other on an AI companion. Here is how they compare, from their listings.',
    quickAnswer:
      'I Am Sober and Sunflower both count sober days and mark milestones, and both are free to download on iPhone and Android [[asIAmSober]] [[asSunflower]] [[playIAmSober]] [[playSunflower]]. The difference is support: I Am Sober leans on people, with a daily pledge, story sharing and groups in Sober Plus [[asIAmSober]], while Sunflower offers an AI sponsor available at any hour, guided exercises and a community [[asSunflower]]. I Am Sober has far more ratings; Sunflower’s Google Play label says it collects no data [[playSunflower]].',
    keywords: ['i am sober vs sunflower', 'sunflower vs i am sober', 'i am sober or sunflower', 'sunflower sober vs i am sober'],
    heroAlt: 'A group of speech bubbles facing a single AI chat bubble, with a sunflower between them',
    other: 'I Am Sober or Sunflower',
    subscription: true,
    figureAlt: 'Head-to-head card comparing I Am Sober and Sunflower on cost, devices, support style and store ratings',
    sections: [
      {
        id: 'head',
        h2: 'Head to head',
        blocks: [
          {
            t: 'table',
            caption: `From each app’s US App Store and Google Play listings, read ${CHECKED_ON}.`,
            head: ['', 'I Am Sober', 'Sunflower'],
            rows: [
              ['Approach', 'Day tracker, daily pledge, end-of-day review [[asIAmSober]]', 'Sunflower per sober day, guided exercises [[asSunflower]]'],
              ['Support', 'Story sharing and groups (Plus) [[asIAmSober]]', 'AI sponsor at any hour, community [[asSunflower]]'],
              ['Substances', 'Alcohol, with more habits in Plus [[asIAmSober]]', 'Alcohol, nicotine, weed and others [[asSunflower]]'],
              ['Cost', F.iamsober.price, F.sunflower.price],
              ['Devices', F.iamsober.devices, F.sunflower.devices],
              ['Store rating', F.iamsober.rating, F.sunflower.rating],
              ['Privacy', F.iamsober.privacy, F.sunflower.privacy],
            ],
          },
        ],
      },
      {
        id: 'differences',
        h2: 'The differences that matter',
        blocks: [
          { t: 'h3', x: 'People or AI' },
          {
            t: 'p',
            x: 'This is the real choice. I Am Sober’s support is other people: stories, and groups you can create with Sober Plus [[asIAmSober]]. Sunflower’s is an AI sponsor called Sam, available around the clock [[asSunflower]]. An AI will answer at 3am, which a group may not. A group is made of people who have been there, which an AI has not.',
          },
          { t: 'h3', x: 'Scale' },
          {
            t: 'p',
            x: 'I Am Sober has about 189K App Store ratings and more than 10 million Google Play downloads [[asIAmSober]] [[playIAmSober]]. Sunflower has about 6.2K App Store ratings and more than 500,000 Play downloads [[asSunflower]] [[playSunflower]]. Both have high average ratings. A bigger app means a bigger community, which matters most if you want groups.',
          },
          { t: 'h3', x: 'What the privacy labels say' },
          {
            t: 'p',
            x: 'I Am Sober’s App Store label lists several kinds of data linked to you, including contact info and user content [[asIAmSober]]. Sunflower’s Google Play label says no data is collected or shared, though its App Store label lists usage data used to track you [[playSunflower]] [[asSunflower]]. Labels are the developers’ own declarations.',
          },
        ],
      },
      {
        id: 'third',
        h2: 'If you want neither',
        blocks: [
          {
            t: 'p',
            x: 'If you want a counter without a community or an AI, Sober Girl is a quiet tracker for women on Android, with a Craving SOS, a daily check-in and a tree that grows with your streak. Try Dry is free and suits cutting down [[asTryDry]]. See [Sunflower alternatives](/sobergirl/sunflower-alternative) and [I Am Sober alternatives](/sobergirl/i-am-sober-alternative).',
          },
        ],
      },
    ],
    faqs: [
      { q: 'Is I Am Sober or Sunflower better?', a: 'It depends on the support you want. I Am Sober leans on community and groups; Sunflower adds an AI sponsor available at any hour. Both count days and mark milestones.' },
      { q: 'Which is cheaper, I Am Sober or Sunflower?', a: 'Both are free to download. I Am Sober’s Sober Plus is listed from $9.99 a month; Sunflower lists $8.95 monthly among other options. Check the current listings.' },
      { q: 'Does Sunflower track more than alcohol?', a: 'Yes. Its listing says it counts days from alcohol, nicotine, weed and other substances.' },
      { q: 'Are I Am Sober and Sunflower on Android?', a: 'Yes. Both are on Google Play, each rated 4.7 when we checked.' },
    ],
    related: ['sunflower-alternative', 'i-am-sober-alternative', 'best-sober-tracker-apps'],
  },

  /* ------------------------------------------------------------------ Reframe vs Try Dry */
  {
    slug: 'reframe-vs-try-dry',
    metaTitle: 'Reframe vs Try Dry: Best App to Cut Back on Alcohol (2026)',
    metaDescription:
      'Reframe vs Try Dry for cutting back on alcohol, compared from store listings: a paid 160-day program against a free charity app. Cost, features, Android, privacy.',
    h1: 'Reframe vs Try Dry: which app to cut back on alcohol',
    dek: 'Both are built for drinking less, not only for stopping. One is a paid program, the other a free charity app. Here is how they differ.',
    quickAnswer:
      'Reframe and Try Dry both help you cut back, in different ways. Try Dry is free with no ads, funded by Alcohol Change UK, and works as a drinking diary: units, calories, money, planned drinks and goals [[asTryDry]]. Reframe is a paid 160-day education program with tracking, a community and optional coaching, from $13.99 a month after a 7-day trial [[asReframe]]. Try Dry if you want to track and you know what to do; Reframe if you want to be taught. Both are on Android [[playTryDry]] [[playReframe]].',
    keywords: ['reframe vs try dry', 'try dry vs reframe', 'best app to cut back on alcohol', 'app to drink less', 'cut back on alcohol app'],
    heroAlt: 'A free charity tag and a course book, each beside a glass with a lower fill line',
    other: 'Reframe or Try Dry',
    subscription: true,
    figureAlt: 'Head-to-head card comparing Reframe and Try Dry on cost, devices, approach and store ratings',
    sections: [
      {
        id: 'head',
        h2: 'Head to head',
        blocks: [
          {
            t: 'table',
            caption: `From each app’s US App Store and Google Play listings, read ${CHECKED_ON}.`,
            head: ['', 'Reframe', 'Try Dry'],
            rows: [
              ['Approach', '160-day education program with tracking [[asReframe]]', 'Drinking diary with goals, units, calories and money [[asTryDry]]'],
              ['Made by', 'Glucobit Inc. [[asReframe]]', 'Alcohol Research UK, funded by Alcohol Change UK [[asTryDry]]'],
              ['Cost', F.reframe.price, F.trydry.price],
              ['Extra support', 'Private community, optional 1:1 coaching [[asReframe]]', 'Free coaching email programme [[asTryDry]]'],
              ['Devices', F.reframe.devices, F.trydry.devices],
              ['Store rating', F.reframe.rating, F.trydry.rating],
              ['Privacy', F.reframe.privacy, F.trydry.privacy],
            ],
          },
        ],
      },
      {
        id: 'differences',
        h2: 'The differences that matter',
        blocks: [
          { t: 'h3', x: 'Diary or course' },
          {
            t: 'p',
            x: 'Try Dry asks you to log what you drink, plan your drinking days and watch the totals [[asTryDry]]. Reframe gives you a lesson a day, meditations and games, with tracking alongside [[asReframe]]. A diary shows you the pattern. A course tries to change how you think about it.',
          },
          { t: 'h3', x: 'Cost over a year' },
          {
            t: 'p',
            x: 'Try Dry costs nothing [[asTryDry]]. Reframe Access is listed at $79.99 a year, with other plans up to $119.99 [[asReframe]]. If money is tight, start with the free app and see whether you miss the lessons.',
          },
          { t: 'h3', x: 'Units and drinks' },
          {
            t: 'p',
            x: 'Try Dry counts UK units of 8 g of alcohol [[nhs]]. US guidance uses standard drinks of 14 g [[niaaaStandard]]. Either works if you are consistent, but be aware the numbers are not interchangeable. Our guide on [how much is too much for women](/sobergirl/how-much-alcohol-is-too-much-for-women) explains both.',
          },
          { t: 'h3', x: 'Is there evidence for either?' },
          {
            t: 'p',
            x: 'We found no published trial of either app. The largest trial of a cut-back app tested a different one, UCL’s Drink Less, and found it "may be effective" for motivated drinkers [[oldham]].',
          },
        ],
      },
      {
        id: 'third',
        h2: 'If you decide to stop instead',
        blocks: [
          {
            t: 'p',
            x: 'Cutting back sometimes turns into a decision to stop. If that happens, a day counter can be simpler than a diary. Sober Girl, our app, is free to start on Android and counts your days, money and hours, with a Craving SOS for hard moments. See also [alcohol-free days](/sobergirl/alcohol-free-days).',
          },
        ],
      },
    ],
    faqs: [
      { q: 'Is Reframe or Try Dry better for cutting back?', a: 'Try Dry is better if you want a free drinking diary with goals. Reframe is better if you want daily lessons and coaching and are willing to pay.' },
      { q: 'Is Try Dry really free?', a: 'Yes. Its listing says there are no upfront costs, no hidden costs and no ads. It is funded by the charity Alcohol Change UK.' },
      { q: 'Is there evidence that cut-back apps work?', a: 'A large UK trial of a different app, Drink Less, found it may be effective for motivated drinkers. We found no trial of Reframe or Try Dry.' },
      { q: 'Are Reframe and Try Dry on Android?', a: 'Yes. Reframe is "Reframe: Cut Back on Alcohol" and Try Dry is "Try Dry: Dry January® & beyond" on Google Play.' },
    ],
    related: ['try-dry-alternative', 'reframe-alternative', 'how-to-stop-drinking-wine-every-night'],
  },

  /* ------------------------------------------------------------------ Sober Girl vs I Am Sober */
  {
    slug: 'sober-girl-vs-i-am-sober',
    metaTitle: 'Sober Girl vs I Am Sober: An Honest Comparison (2026)',
    metaDescription:
      'Sober Girl vs I Am Sober, written by the makers of Sober Girl and limited to listed facts: features, price, Android, privacy, and who should pick I Am Sober.',
    h1: 'Sober Girl vs I Am Sober: an honest comparison',
    dek: 'We make Sober Girl, so we tried to write this the way we would want a competitor to write about us: facts from the listings, and a clear section on when I Am Sober is the better choice.',
    quickAnswer:
      'Sober Girl and I Am Sober are both sober day trackers with money saved and milestones. I Am Sober is the established choice: 4.9 from 189K App Store ratings, iPhone, Apple Watch, Mac and Android, with a daily pledge, groups and cloud backup in Sober Plus [[asIAmSober]] [[playIAmSober]]. Sober Girl, which we make, is newer and narrower: a calm, private tracker for women, on Android now with iPhone coming soon, with a Craving SOS, a daily mood check-in and a growing tree, and no community or groups [[playSoberGirl]].',
    keywords: ['sober girl vs i am sober', 'i am sober vs sober girl', 'sober girl app review', 'sober girl or i am sober'],
    heroAlt: 'A bloom-marked app card beside a classic counter card, with a balance between them',
    other: 'I Am Sober',
    subscription: true,
    figureAlt: 'Head-to-head card comparing Sober Girl and I Am Sober on cost, devices, approach and store ratings',
    sections: [
      {
        id: 'head',
        h2: 'Head to head',
        blocks: [
          {
            t: 'table',
            caption: `I Am Sober facts from its listings, read ${CHECKED_ON}. Sober Girl facts from our own app and listing.`,
            head: ['', 'Sober Girl', 'I Am Sober'],
            rows: [
              ['Built for', 'Women who want a quiet, private daily companion', 'Anyone, with a large community [[playIAmSober]]'],
              ['Core', 'Day counter, hours, weeks and money saved; one-tap daily check-in', 'Day tracker, daily pledge, end-of-day review, money and time saved [[asIAmSober]]'],
              ['Cravings', 'Craving SOS: 4-7-8 breathing, a 10-minute timer and your reason', 'Trigger analysis and a withdrawal timeline [[asIAmSober]]'],
              ['People', 'None: no feed, groups or chat', 'Story sharing; groups with Sober Plus [[asIAmSober]]'],
              ['Motivation', 'Nine milestone badges and a tree with ten stages', 'A milestone tracker [[asIAmSober]]'],
              ['Cost', F.sobergirl.price, F.iamsober.price],
              ['Devices', F.sobergirl.devices, F.iamsober.devices],
              ['Your data', 'On your phone, no account. Free export to a file from Settings', 'Cloud backup with Sober Plus [[asIAmSober]]'],
              ['Store rating', F.sobergirl.rating, F.iamsober.rating],
            ],
          },
        ],
      },
      {
        id: 'pick-iamsober',
        h2: 'Pick I Am Sober if',
        blocks: [
          {
            t: 'ul',
            items: [
              'You use an iPhone today. Sober Girl is not on the App Store yet.',
              'You want other people in the app: story sharing, or a group you create with Sober Plus [[asIAmSober]].',
              'You want your data backed up to the cloud automatically [[asIAmSober]].',
              'You want an app with a long track record and a very large number of ratings [[asIAmSober]] [[playIAmSober]].',
            ],
          },
        ],
      },
      {
        id: 'pick-sobergirl',
        h2: 'Pick Sober Girl if',
        blocks: [
          {
            t: 'ul',
            items: [
              'You are on Android and want something calm, designed with women in mind.',
              'You would rather your streak and journal stayed on your phone, with no account.',
              'You want a craving tool you can open in one tap: a guided breath, a timer and your own words.',
              'You like seeing progress as something growing, not only as a number.',
            ],
          },
          {
            t: 'p',
            x: 'Sober Girl is new, has no published trial (nor, as far as we know, do the others), and does not replace treatment. See the [Sober Girl fact sheet](/sobergirl/sober-girl-app) for everything it does and does not do.',
          },
        ],
      },
    ],
    faqs: [
      { q: 'Is Sober Girl better than I Am Sober?', a: 'Not overall. I Am Sober is more established, on more devices and has community features. Sober Girl is quieter, private by design and made for women, but is Android only for now.' },
      { q: 'Is Sober Girl free?', a: 'Yes, the core tools are free: day counter, money saved, check-in, Craving SOS, milestones and the tree. Plus adds the journal, insights and shareable milestone cards.' },
      { q: 'Is Sober Girl on iPhone?', a: 'Not yet. It is on Android through Google Play, and the iPhone version is coming soon.' },
      { q: 'Can I move from I Am Sober to Sober Girl?', a: 'Yes. Set the same sober date in Sober Girl under Settings, then "Sober since". Your count carries over; journal entries do not.' },
    ],
    related: ['sober-girl-app', 'i-am-sober-alternative', 'sober-app-for-women'],
  },
];

function build(r: CompareRow): Article {
  const sections: Section[] = [disclosure(r.other), ...r.sections];
  // The comparison card sits after the first comparison table.
  const tableAt = sections.findIndex((s) => s.blocks.some((b) => b.t === 'table'));
  sections[tableAt] = {
    ...sections[tableAt],
    blocks: [...sections[tableAt].blocks, figure(`${r.slug}-card`, r.figureAlt, r.h1, `Summary of the listings, ${CHECKED_ON}. Full details and sources in the table above.`)],
  };
  sections.push(switching(r.other.includes(' or ') ? 'another app' : r.other, r.subscription));
  return {
    slug: r.slug,
    metaTitle: r.metaTitle,
    metaDescription: r.metaDescription,
    h1: r.h1,
    dek: r.dek,
    quickAnswer: r.quickAnswer,
    kicker: 'Comparison',
    keywords: r.keywords,
    heroAlt: r.heroAlt,
    sources: [],
    sections,
    faqs: r.faqs,
    related: r.related,
    shots: [
      { file: 'home', alt: 'Sober Girl home screen with a sober days counter, money saved and a daily check-in', title: 'Sober Girl home screen', caption: 'Sober Girl: days, money saved and a daily check-in. Example data.' },
      { file: 'private', alt: 'Sober Girl privacy screen explaining that your journal and streak stay on your phone', title: 'Sober Girl privacy', caption: 'Your journal and streak stay on your phone. Example data.' },
    ],
  };
}

export const COMPARE_ARTICLES: Article[] = ROWS.map(build);
