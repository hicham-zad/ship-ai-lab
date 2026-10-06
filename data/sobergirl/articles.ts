export type Block =
  | { t: 'p'; x: string }
  | { t: 'h3'; x: string }
  | { t: 'ul'; items: string[] }
  | { t: 'ol'; items: string[] }
  | { t: 'callout'; kind: 'safety' | 'note' | 'disclosure'; title: string; x: string }
  | { t: 'chart'; id: 'gallup' | 'bmj' | 'dryjan' }
  | { t: 'table'; head: string[]; rows: string[][]; caption?: string }
  | { t: 'calc' }
  | { t: 'sobcalc' }
  | { t: 'sobcal' }
  | { t: 'fit' }
  | { t: 'cta'; title: string; x: string };

export interface Section {
  id: string;
  h2: string;
  blocks: Block[];
}

export interface Article {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  dek: string;
  /** A direct, self-contained, cited answer shown at the top. Written so it can be quoted on its own. */
  quickAnswer: string;
  kicker: string;
  keywords: string[];
  heroAlt: string;
  /** Shown in the meta line when an article cites no external sources. */
  metaNote?: string;
  /** Source ids from SOURCES, in the order they are first cited. Numbering follows this order. */
  sources: string[];
  sections: Section[];
  faqs: { q: string; a: string }[];
  related: string[];
}

// Inline citation syntax: [[sourceId]] renders as a numbered link to the source list.
// **bold** is supported. Never state a number here without a citation or a clear "illustrative" label.

const SAFETY_WITHDRAWAL =
  'If you drink heavily or every day, do not stop suddenly on your own. Alcohol withdrawal can be dangerous. MedlinePlus says to go to the emergency room or call 911 if seizures, fever, severe confusion, hallucinations or an irregular heartbeat occur [[medline]]. Talk to a doctor before you stop, or call the SAMHSA National Helpline on 1-800-662-4357 (free, confidential, 24/7) [[samhsa]].';

export const ARTICLES: Article[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'best-sober-tracker-apps',
    metaTitle: 'Best Sober Tracker Apps (2026): Compared by Use',
    metaDescription:
      'Six sober tracker apps compared by what each is best for, cost, devices and ratings, from their store listings, plus what trials say about whether apps work.',
    h1: 'Best sober tracker apps in 2026: which one for which person',
    dek: 'Six apps compared on what each is best for, what it costs and where it runs. Facts come from store listings, dated and linked, with a plain summary of what the research says about apps.',
    quickAnswer:
      'The best sober tracker app depends on the job. I Am Sober has the widest reach (4.9 from 188K App Store ratings) and runs on iPhone and Android [[asIAmSober]]. Try Dry is free with no ads and suits cutting down or a month off [[asTryDry]]. Reframe is a structured 160-day program from $13.99 a month [[asReframe]]. Sunflower adds an AI sponsor [[asSunflower]]. Sober: Sobriety Tracker handles several substances [[asSober]]. Sober Girl, which we make, is a private tracker for women, on Android now with iPhone coming soon. Prices are from US listings retrieved 6 October 2026.',
    kicker: 'Comparison',
    keywords: [
      'best sober tracker app',
      'best sobriety app',
      'best sober app',
      'sobriety tracker apps',
      'best quit drinking app',
      'free sober tracker app',
      'I Am Sober alternative',
    ],
    heroAlt: 'Four stylised app cards in a row, one highlighted, with check marks',
    sources: ['asIAmSober', 'playIAmSober', 'asTryDry', 'asSober', 'asReframe', 'asSunflower', 'playSunflower', 'oldham', 'khairuddin', 'nsduh', 'navigator', 'samhsa'],
    sections: [
      {
        id: 'disclosure',
        h2: 'Read this first: we make one of these apps',
        blocks: [
          {
            t: 'callout',
            kind: 'disclosure',
            title: 'Disclosure',
            x: 'We build Sober Girl, so we are not a neutral party. Every fact about the other five apps comes from that app’s own store listing (US App Store, retrieved 6 October 2026) and links to it. We do not repeat the marketing claims on their websites, and we have not scored the apps. The labels below say what each is best for, not which is better. Prices and ratings change, so check the listing before you pay.',
          },
        ],
      },
      {
        id: 'compared',
        h2: 'The six apps at a glance',
        blocks: [
          {
            t: 'table',
            caption: 'US App Store listings retrieved 6 October 2026. Android availability is from Google Play listings where we could confirm one.',
            head: ['App', 'Best for', 'Cost', 'Devices', 'Rating'],
            rows: [
              [
                'I Am Sober',
                'A long-running streak tracker with a daily pledge, money and time saved, milestones and private groups [[asIAmSober]]',
                'Free. Sober Plus is listed at $9.99 a month, $27.49 for 6 months or $39.99 a year [[asIAmSober]]',
                'iPhone, iPad, Mac, Apple Watch and Apple Vision [[asIAmSober]]. Also on Android [[playIAmSober]]',
                '4.9 from 188K ratings [[asIAmSober]]',
              ],
              [
                'Try Dry',
                'Cutting down or taking a month off: tracks units, calories, money, mood and sleep, with planned versus unplanned drinks [[asTryDry]]',
                'Free, no ads [[asTryDry]]',
                'iPhone, iPad, Mac and Apple Vision [[asTryDry]]',
                '4.8 from 2.9K ratings [[asTryDry]]',
              ],
              [
                'Sober: Sobriety Tracker',
                'Tracking several substances, with urge tools, mood and sleep check-ins, a forum and a meeting finder [[asSober]]',
                'Free. Sober Premium has $39.99 a year listed [[asSober]]',
                'iPhone listing [[asSober]]',
                '4.8 from 7.8K ratings [[asSober]]',
              ],
              [
                'Reframe',
                'A structured 160-day education program with tracking, community and optional coaching [[asReframe]]',
                'Free to download with a 7-day trial. Reframe Access is $13.99 a month or $79.99 a year, with higher coaching tiers [[asReframe]]',
                'iPhone listing [[asReframe]]. Check the store for Android',
                '4.7 from 45K ratings [[asReframe]]',
              ],
              [
                'Sunflower',
                'Guided exercises, a sunflower for each sober day and an AI sponsor available at any hour [[asSunflower]]',
                'Free to download with subscriptions, including $8.95 monthly [[asSunflower]]',
                'iPhone listing [[asSunflower]]. Also on Android [[playSunflower]]',
                '4.8 from 6.2K ratings [[asSunflower]]',
              ],
              [
                'Sober Girl',
                'A calm, private tracker for women: day counter, money saved, daily check-in, Craving SOS and a growing tree',
                'Core tools free. Plus adds the journal, mood insights and shareable milestone cards. Price shown in the app',
                'Android, on Google Play. iPhone coming soon',
                'Not shown here. We do not rate ourselves',
              ],
            ],
          },
        ],
      },
      {
        id: 'which',
        h2: 'Best for: how to pick one',
        blocks: [
          { t: 'h3', x: 'Best for the widest reach: I Am Sober' },
          {
            t: 'p',
            x: 'It is the most widely rated of the six and runs on the most devices [[asIAmSober]]. It centres on a day tracker, a daily pledge, a sobriety calculator for money and time saved, milestones, and private groups for accountability. The App Store privacy label lists several kinds of data linked to you, including contact info and identifiers [[asIAmSober]], so read it if privacy matters.',
          },
          { t: 'h3', x: 'Best for cutting down or a month off: Try Dry' },
          {
            t: 'p',
            x: 'It is free with no ads, and unusual in tracking units and calories as well as dry days, with a drinking goal, a drinking risk quiz and a free coaching email program [[asTryDry]]. If your aim is to drink less rather than stop, this is built for it.',
          },
          { t: 'h3', x: 'Best for several substances: Sober: Sobriety Tracker' },
          {
            t: 'p',
            x: 'The listing describes separate counters for multiple substances, urge-management tools, mood and sleep check-ins, an anonymous forum and a meeting finder [[asSober]].',
          },
          { t: 'h3', x: 'Best for a structured program: Reframe' },
          {
            t: 'p',
            x: 'A 160-day education program with tracking, community and optional coaching [[asReframe]]. It costs more than the others and lists a wide range of plans, so compare plans before the free trial ends.',
          },
          { t: 'h3', x: 'Best for round-the-clock prompts: Sunflower' },
          {
            t: 'p',
            x: 'It pairs a sober-day tracker with guided exercises, community features and an AI sponsor available at any hour [[asSunflower]]. An AI sponsor is not a person or a clinician, so decide whether that appeals.',
          },
          { t: 'h3', x: 'Best for a quiet, private tracker for women: Sober Girl' },
          {
            t: 'p',
            x: 'Sober Girl is designed for women who want a quiet daily companion: a day counter, money saved, Craving SOS with a breathing exercise and a 10-minute timer, and a tree that grows as you stay sober. The journal stays on your device. It is on Android now with an iPhone version coming soon, it has no coaching and no community feed, and as a newer app it lacks the track record of the others.',
          },
        ],
      },
      {
        id: 'work',
        h2: 'Do sober tracker apps work?',
        blocks: [
          {
            t: 'p',
            x: 'It depends on the app, and the honest answer is “sometimes, modestly, for people who are motivated”. The largest trial we found tested the UCL Drink Less app, which is a different product from every app above. It randomised 5,602 UK drinkers who wanted to cut down. The strict pre-registered analysis found a non-significant 0.98-unit greater weekly reduction at six months than the NHS alcohol advice webpage. A pre-registered analysis that imputed missing data found a 2.00-unit greater reduction (95% CI −3.76 to −0.24). The authors concluded the app “may be effective” for motivated drinkers [[oldham]].',
          },
          {
            t: 'p',
            x: 'A 2025 systematic review of 10 randomised trials with 11,269 participants found people using mobile apps tended to drink less than control groups, but said the trials varied too much in theory and measures to say which features work, and that more evidence is needed [[khairuddin]]. We did not find a published trial of any app in the table above, including ours. A tracker shows your streak and money saved reliably. Whether it helps you drink less is something to test on yourself.',
          },
        ],
      },
      {
        id: 'choose',
        h2: 'How to choose in five minutes',
        blocks: [
          {
            t: 'ol',
            items: [
              '**Decide your goal.** Stopping completely, cutting down and taking a month off need different tools. Try Dry is built for the last two, and day counters for the first.',
              '**Read the price after the trial.** Open the in-app purchases list and look at the yearly cost, not the trial.',
              '**Read the privacy label.** The App Store shows which data is collected and whether it is linked to you.',
              '**Test the craving tool.** Open it before you need it. If it does not help when you are calm, it will not help when you are not.',
              '**Check your devices.** Some of these apps are iPhone only, some are on Android too.',
            ],
          },
        ],
      },
      {
        id: 'limits',
        h2: 'What an app can and cannot do',
        blocks: [
          {
            t: 'p',
            x: 'A tracking app can make progress visible and give you a tool for a hard moment. It is not treatment. In the 2024 National Survey on Drug Use and Health, 8.0% of women aged 18 and over (10.7 million) had alcohol use disorder in the past year [[nsduh]]. If you think that could include you, the NIAAA Alcohol Treatment Navigator helps adults find evidence-based care and has no commercial sponsors [[navigator]]. The SAMHSA National Helpline (1-800-662-4357) is free, confidential and open 24/7 [[samhsa]].',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'What is the best sober tracker app?',
        a: 'There is no single best. I Am Sober has the widest reach and ratings, Try Dry is free and suits cutting down, Reframe is a structured program, Sunflower adds an AI sponsor and Sober Girl is a private tracker for women. Pick by your goal, cost and device.',
      },
      {
        q: 'Is there a free sober tracker app?',
        a: 'Yes. Try Dry is free with no ads. I Am Sober, Sober: Sobriety Tracker, Reframe, Sunflower and Sober Girl are free to download but put some features behind a paid plan.',
      },
      {
        q: 'Do sobriety apps work?',
        a: 'Evidence is mixed but encouraging. A 5,602-person trial of the Drink Less app found a non-significant reduction in its strictest analysis and a significant one in another, and a 2025 review of 10 trials found app users tended to drink less. We found no trial of the other apps compared here.',
      },
      {
        q: 'Which sober app is best for women?',
        a: 'Most are built for everyone. Sober Girl is designed for women, but compare it against the others using the table above. See our guide to sober apps for women for more.',
      },
      {
        q: 'Is a sobriety app a substitute for treatment?',
        a: 'No. If you drink heavily or have withdrawal symptoms, speak to a doctor first. The NIAAA Alcohol Treatment Navigator and the SAMHSA National Helpline can help you find care.',
      },
    ],
    related: ['best-app-to-quit-drinking', 'sober-app-for-women', 'sobriety-milestones'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'sobriety-milestones',
    metaTitle: 'Sobriety Milestones: 1 Day to 1 Year, What Is Known',
    metaDescription:
      'What research does and does not say at 1 day, 1 week, 30 days, 90 days, 6 months and 1 year without alcohol. Sourced, with a money-saved calculator.',
    h1: 'Sobriety milestones: what the research says from day 1 to year 1',
    dek: 'Most day-by-day timelines online mix a few studies with guesswork. This one only states what a source supports, and says plainly where the evidence stops.',
    quickAnswer:
      'There is no universal sobriety timeline. MedlinePlus says alcohol withdrawal symptoms tend to start within 8 hours of the last drink and peak between 24 and 72 hours [[medline]]. The best-studied milestone is one month: in a BMJ Open study of 94 people, insulin resistance fell 25.9% and systolic blood pressure 6.6% after a month without alcohol [[bmj]]. Beyond a month, we found no study we trust for specific dates, so this guide says so.',
    kicker: 'Guide',
    keywords: [
      'sobriety milestones',
      'sober milestones',
      'sobriety timeline',
      'sober for 1 year',
      'one year sober',
      '30 days no alcohol',
      'sobriety counter app',
      'sobriety coins',
    ],
    heroAlt: 'A winding path with six stepping stones from 1 day to 1 year, ending in a bloom',
    sources: ['medline', 'samhsa', 'sleep', 'bmj', 'acuk', 'acukAbout', 'liver', 'niaaaBasics', 'coinWiki'],
    sections: [
      {
        id: 'before',
        h2: 'Before day one: a safety note',
        blocks: [{ t: 'callout', kind: 'safety', title: 'Stopping suddenly can be dangerous', x: SAFETY_WITHDRAWAL }],
      },
      {
        id: 'no-timeline',
        h2: 'There is no universal timeline',
        blocks: [
          {
            t: 'p',
            x: 'Bodies differ, and so does how much and how long someone has been drinking. The studies we can cite measure specific things over specific windows, usually a month. They do not describe what you will feel on day 47. So below, each milestone has two parts: what is documented, and ways to mark it. Where nothing is documented, we say so.',
          },
        ],
      },
      {
        id: 'day-1',
        h2: 'Day 1: the first 24 hours',
        blocks: [
          {
            t: 'p',
            x: '**Documented.** MedlinePlus says withdrawal symptoms tend to occur within 8 hours after the last drink, but can occur days later [[medline]]. Not everyone who stops drinking has withdrawal symptoms. If you drink heavily, see the safety note above.',
          },
          {
            t: 'p',
            x: '**Mark it.** Write down your reason in one sentence. Tell one person. Pour out or move what is in the house, if that is a realistic step for you.',
          },
        ],
      },
      {
        id: 'week-1',
        h2: 'Week 1: sleep and mood are often the hardest part',
        blocks: [
          {
            t: 'p',
            x: '**Documented.** For people who go through withdrawal, symptoms peak between 24 and 72 hours but may persist for weeks, and effects such as sleep disturbance and mood changes can last for months [[medline]]. Alcohol also shapes sleep itself: it can sedate at first, then fragment sleep in the second half of the night, and it can reduce REM sleep [[sleep]]. So broken sleep early on is a known part of stopping. It does not mean you are doing it wrong.',
          },
          {
            t: 'p',
            x: '**Mark it.** A first full week is worth a small, specific reward that is not alcohol. Log a daily check-in so you can see how mood and sleep move over time instead of relying on memory.',
          },
        ],
      },
      {
        id: 'day-30',
        h2: '30 days: the best-studied milestone',
        blocks: [
          {
            t: 'p',
            x: '**Documented.** A BMJ Open study followed 94 healthy people who chose to abstain from alcohol for a month, alongside 47 who kept drinking. The abstainers had been drinking about 258 g of alcohol a week on average, which is roughly 18 standard drinks if you count 14 g per drink [[bmj]] [[niaaaBasics]]. After a month, all of the following fell significantly from baseline (p < 0.001), and the researchers found none of the changes were explained by diet, exercise or smoking [[bmj]]:',
          },
          { t: 'chart', id: 'bmj' },
          {
            t: 'p',
            x: '**Read it with care.** This was an observational study. People chose which group to join, the sample was small, and it excluded people with liver disease or alcohol dependence, so you cannot assume the same changes for them [[bmj]]. Blood measures like these are not things you can feel, either. What it shows is that a month off is not nothing.',
          },
          {
            t: 'p',
            x: '**What people report.** Separately, Alcohol Change UK summarises a 2019 evaluation of Dry January participants, who reported that 86% saved money, 70% slept better, 66% had more energy and 54% lost weight [[acuk]]. These are self-reported results from people who chose to take part, not a controlled trial.',
          },
        ],
      },
      {
        id: 'day-90',
        h2: '90 days: where the evidence runs thin',
        blocks: [
          {
            t: 'p',
            x: '**Documented.** We could not find a study we trust that describes a specific change at day 90, so we will not invent one. What the literature does say about the liver is stage-based rather than date-based: fatty liver can be reversed when drinking stops, while more advanced disease can stabilise with abstinence [[liver]]. If you are worried about your liver, ask a doctor about liver function tests. A calendar milestone cannot tell you.',
          },
          {
            t: 'p',
            x: '**Mark it.** Ninety days is a natural point to look back. Check what you have saved, reread the reason you wrote on day one, and note what has got easier.',
          },
        ],
      },
      {
        id: 'month-6',
        h2: '6 months and 1 year',
        blocks: [
          {
            t: 'p',
            x: '**Documented.** The nearest solid number is about reduced drinking, not abstinence. Alcohol Change UK reports that six months after Dry January, seven out of ten participants continued to drink less riskily than before [[acukAbout]]. That describes people who tried a month off, so it does not tell you how a year of sobriety will feel.',
          },
          {
            t: 'p',
            x: '**Mark it.** A year is worth marking properly. In Sober Girl, the 1 year milestone unlocks a badge, and Plus members can share a milestone card. Whatever app you use, take a screenshot of the day count and write what you would tell yourself on day one.',
          },
        ],
      },
      {
        id: 'coins',
        h2: 'What about sobriety coins?',
        blocks: [
          {
            t: 'p',
            x: 'In Alcoholics Anonymous and other twelve-step groups, a coin or chip marks continuous time without drinking, often at 24 hours, 30, 60 and 90 days, then a year and each year after. There is no official AA coin: they are part of AA culture, not conference-approved, the system is optional, and colours and intervals vary by group [[coinWiki]]. You do not need a coin to mark a milestone. A written note, a small purchase with the money you saved, or a badge in a tracker does the same job.',
          },
        ],
      },
      {
        id: 'calculator',
        h2: 'Work out your own money saved',
        blocks: [
          {
            t: 'p',
            x: 'Money saved is one milestone you can calculate exactly, because it is your own spending. Enter what you used to spend on alcohol in a typical week. Nothing is stored or sent anywhere.',
          },
          { t: 'calc' },
        ],
      },
    ],
    faqs: [
      {
        q: 'When do alcohol withdrawal symptoms start?',
        a: 'MedlinePlus says withdrawal symptoms tend to occur within 8 hours after the last drink, but can occur days later. They peak between 24 and 72 hours and may persist for weeks. Seizures, fever, severe confusion, hallucinations or an irregular heartbeat need emergency care.',
      },
      {
        q: 'What changes after one month without alcohol?',
        a: 'In a BMJ Open study of 94 people who abstained for a month, insulin resistance, blood pressure, weight and two cancer-related growth factors all fell significantly. It was observational and excluded people with liver disease or alcohol dependence.',
      },
      {
        q: 'How long does the liver take to recover?',
        a: 'There is no single date. Recovery depends on the stage of liver disease: fatty liver can be reversed when drinking stops, and more advanced disease can stabilise. A doctor can check your liver function.',
      },
      {
        q: 'How long until my sleep improves?',
        a: 'We cannot give a reliable number. MedlinePlus notes that sleep disturbance after stopping can last for months for some people. If sleep stays poor, tell a doctor.',
      },
    ],
    related: ['sober-october', 'dry-january-app', 'best-sober-tracker-apps'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'sober-october',
    metaTitle: 'Sober October: How to Do It, and What the Evidence Says',
    metaDescription:
      'A practical guide to Sober October: pick your rules, plan for Halloween, and see what a month without alcohol did in a published study. Sourced.',
    h1: 'Sober October: a practical guide, with the evidence',
    dek: 'Thirty-one days without alcohol. How to set the rules, what to plan for, and what a month off has actually been shown to do.',
    quickAnswer:
      'Sober October is a 31-day alcohol-free challenge; in the UK it runs as Macmillan Cancer Support’s Go Sober for October fundraiser [[macmillan]]. In a BMJ Open study, 94 people who abstained for a month saw significant falls in insulin resistance, blood pressure, weight and two cancer-related growth factors, though it was observational [[bmj]]. If you drink heavily, speak to a doctor before stopping suddenly [[medline]].',
    kicker: 'Guide',
    keywords: ['sober october', 'october sober', 'sober in october', 'sober for october', 'go sober for october'],
    heroAlt: 'A 31-day calendar grid in autumn colours with one leaf-shaped marker',
    sources: ['macmillan', 'medline', 'samhsa', 'bmj', 'acuk', 'acukAbout'],
    sections: [
      {
        id: 'what',
        h2: 'What Sober October is',
        blocks: [
          {
            t: 'p',
            x: 'Sober October is a 31-day alcohol-free challenge. In the UK it is run by Macmillan Cancer Support as Go Sober for October, a fundraiser that began in 2013, and the money goes to Macmillan’s nurses, helplines and home visits [[macmillan]]. Many people also do it on their own, with no fundraising, as a one-month reset.',
          },
          {
            t: 'p',
            x: 'If you are reading this partway through the month, you do not need to wait for next October. Day one is whenever you start, and you can count 31 days from there.',
          },
        ],
      },
      {
        id: 'safety',
        h2: 'Check this before you start',
        blocks: [{ t: 'callout', kind: 'safety', title: 'Heavy drinkers: speak to a doctor first', x: SAFETY_WITHDRAWAL }],
      },
      {
        id: 'rules',
        h2: 'Pick your rules before day one',
        blocks: [
          {
            t: 'p',
            x: 'Challenges fail on vague rules. Decide these in advance and write them down:',
          },
          {
            t: 'ul',
            items: [
              '**Full month or the rest of the month.** Decide whether you are doing all 31 days or 31 days from today.',
              '**What counts.** Be explicit about low-alcohol and alcohol-free drinks. Some people want them, others find they keep the habit alive.',
              '**What a slip means.** Decide now. The most useful rule is that a slip is information about what to plan for, not a verdict. Log it, note the trigger, and carry on.',
              '**Who knows.** Tell one person who will ask how it is going.',
            ],
          },
        ],
      },
      {
        id: 'plan',
        h2: 'Plan for the days that are hard',
        blocks: [
          {
            t: 'p',
            x: 'This is general advice rather than research. Look at the October calendar and mark the dates that carry a drink with them: weddings, work events, Halloween parties, a weekend away. For each one, decide what you will order, who you will tell and when you will leave. A script for the first offer of a drink makes the moment smaller.',
          },
          {
            t: 'p',
            x: 'Keep a craving plan on your phone. Decide what you will do in the moment, so you are not improvising. Sober Girl’s Craving SOS combines a breathing exercise, a 10-minute timer and the reason you wrote for yourself.',
          },
        ],
      },
      {
        id: 'evidence',
        h2: 'What a month off has been shown to do',
        blocks: [
          {
            t: 'p',
            x: 'A BMJ Open study followed 94 healthy people who chose to stop drinking for a month, with 47 who kept drinking for comparison. After the month, insulin resistance, systolic and diastolic blood pressure, weight and two cancer-related growth factors had all fallen significantly [[bmj]]. It was observational, the groups chose themselves and it excluded people with liver disease or alcohol dependence [[bmj]].',
          },
          { t: 'chart', id: 'bmj' },
          {
            t: 'p',
            x: 'On what participants report, Alcohol Change UK summarises Dry January evaluations in which 70% said they slept better and 86% said they saved money [[acuk]]. That is January rather than October, and people who sign up for challenges are not a random sample, but the experience of a month off is the same kind of thing.',
          },
        ],
      },
      {
        id: 'after',
        h2: 'What happens in November',
        blocks: [
          {
            t: 'p',
            x: 'Alcohol Change UK reports that six months after Dry January, seven out of ten participants were still drinking less riskily than before [[acukAbout]]. We do not have equivalent figures for October. The practical point is the same, though: decide before day 31 what you will do on day 32, whether that is another month, a set number of drinking days or staying off.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Is Sober October the same as Dry January?',
        a: 'They are the same idea in different months. Dry January is run by Alcohol Change UK, and Go Sober for October by Macmillan Cancer Support as a fundraiser. Both ask you to go a month without alcohol.',
      },
      {
        q: 'Can I start Sober October late?',
        a: 'Yes. Nothing makes the first of the month special. You can count 31 days from the day you start.',
      },
      {
        q: 'What if I slip?',
        a: 'Log it, note what led to it and carry on. A slip does not erase the days you already did. If you find you cannot stop once you start, or stopping makes you feel unwell, speak to a doctor.',
      },
      {
        q: 'Is it safe to stop drinking for a month?',
        a: 'For many people yes, but if you drink heavily or daily, withdrawal can be dangerous. Speak to a doctor before you stop.',
      },
    ],
    related: ['sobriety-milestones', 'dry-january-app', 'sober-curious'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'dry-january-app',
    metaTitle: 'Dry January App: Free Options and What to Look For',
    metaDescription:
      'Which apps help you track Dry January, including the free Try Dry app. A checklist for choosing one, plus what the research on a month off shows.',
    h1: 'The best apps for Dry January, and what to look for',
    dek: 'A free option from the people who run Dry January, a few paid ones, and a checklist for choosing. With the research on what a month off does.',
    quickAnswer:
      'The main free Dry January app is Try Dry from Alcohol Change UK, which tracks dry days, units, calories and money saved [[acukAbout]]. Other options include I Am Sober, Reframe, Sunflower and Sober Girl. In Alcohol Change UK’s summary of a 2019 evaluation, 86% of participants reported saving money and 70% sleeping better, though these are self-reported [[acuk]].',
    kicker: 'Guide',
    keywords: ['dry january app', 'dry january apps', 'try dry app', 'free dry january app', 'alcohol free month app'],
    heroAlt: 'A 31-day January calendar grid with a frosted snowflake marker',
    sources: ['acukAbout', 'acuk', 'bmj', 'asTryDry', 'asIAmSober', 'asReframe', 'asSunflower', 'medline', 'samhsa'],
    sections: [
      {
        id: 'about',
        h2: 'Where Dry January comes from',
        blocks: [
          {
            t: 'p',
            x: 'Dry January began in 2013 with Alcohol Change UK. It grew from 4,000 participants that year to 200,000 people using its app and tools worldwide in 2025 [[acukAbout]]. The charity says 17.5 million people were planning a month off alcohol in January 2026 [[acuk]].',
          },
        ],
      },
      {
        id: 'options',
        h2: 'The apps worth knowing',
        blocks: [
          {
            t: 'h3',
            x: 'Try Dry (free, from Alcohol Change UK)',
          },
          {
            t: 'p',
            x: 'Try Dry is the charity\u2019s own app, launched in 2019 and now usable all year, and Alcohol Change UK reports 196,000 app users worldwide in 2024 [[acukAbout]]. The App Store listing says it is free with no ads. It tracks units, calories and money saved, lets you set drinking goals, separates planned from unplanned drinks, logs mood and sleep, sends daily reminders, and has dry-day streaks, a calendar, badges, a drinking risk quiz and a free coaching email program. It is rated 4.8 from 2.9K ratings [[asTryDry]].',
          },
          { t: 'h3', x: 'I Am Sober' },
          {
            t: 'p',
            x: 'A day tracker with a daily pledge, sobriety calculator and milestones, free with in-app purchases [[asIAmSober]].',
          },
          { t: 'h3', x: 'Reframe' },
          {
            t: 'p',
            x: 'A 160-day education program with tracking and community, with a 7-day free trial and paid plans after that [[asReframe]].',
          },
          { t: 'h3', x: 'Sunflower' },
          {
            t: 'p',
            x: 'A sober-day tracker with guided exercises and an AI sponsor, free to download with subscriptions [[asSunflower]].',
          },
          { t: 'h3', x: 'Sober Girl (ours)' },
          {
            t: 'p',
            x: 'A private tracker, on Android now and coming soon to iPhone, with a day counter, money saved, craving SOS and a tree that grows as you go. Core tools are free. We make it, so see our full comparison for how it differs from the others.',
          },
        ],
      },
      {
        id: 'checklist',
        h2: 'What to look for in a Dry January app',
        blocks: [
          {
            t: 'ul',
            items: [
              '**It counts days and money.** Seeing both is the point of a tracker.',
              '**It lets you record a slip without wiping your history.** A single slip should not erase a month of days. Check what the app does when you log one.',
              '**It has a tool for a hard moment.** A breathing exercise, a timer or a prompt to read your reason.',
              '**It does not paywall the basics.** Check the in-app purchases list before you rely on a feature.',
              '**You are comfortable with its data practices.** Read the privacy label on the store page.',
              '**It works on your phone.** Some apps are only on iPhone or only on Android.',
            ],
          },
        ],
      },
      {
        id: 'evidence',
        h2: 'What the research says about a month off',
        blocks: [
          {
            t: 'p',
            x: 'In Alcohol Change UK’s summary of the 2019 evaluation by Dr Richard de Visser at the University of Sussex, Dry January participants reported these benefits [[acuk]]:',
          },
          { t: 'chart', id: 'dryjan' },
          {
            t: 'p',
            x: 'These figures are self-reported and come from people who chose to take part. For measured changes, a BMJ Open study of 94 people who abstained for a month found significant falls in insulin resistance, blood pressure, weight and cancer-related growth factors, compared with 47 people who kept drinking. It was observational and excluded people with liver disease or alcohol dependence [[bmj]].',
          },
        ],
      },
      {
        id: 'safety',
        h2: 'A note on safety',
        blocks: [{ t: 'callout', kind: 'safety', title: 'Heavy drinkers: speak to a doctor first', x: SAFETY_WITHDRAWAL }],
      },
    ],
    faqs: [
      {
        q: 'Is there a free Dry January app?',
        a: 'Yes. Try Dry, from Alcohol Change UK, is free and tracks dry days, units, calories and money saved. Several other apps have free tiers, including I Am Sober and Sober Girl.',
      },
      {
        q: 'Do I need an app to do Dry January?',
        a: 'No. An app makes your streak and savings visible, which some people find motivating. A calendar and a notes app work too.',
      },
      {
        q: 'When did Dry January start?',
        a: 'In 2013, with Alcohol Change UK, growing from 4,000 participants that year.',
      },
      {
        q: 'What if I break Dry January?',
        a: 'Many people still report benefits, and Alcohol Change UK says six months after the campaign, seven in ten participants were drinking less riskily. Log the slip, note what led to it and carry on.',
      },
    ],
    related: ['best-sober-tracker-apps', 'sober-october', 'sobriety-milestones'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'sober-curious',
    metaTitle: 'Sober Curious: Meaning, Origins and How to Start',
    metaDescription:
      'What sober curious means, where the term comes from, why more Americans are drinking less, and how to run a low-pressure experiment. With sources.',
    h1: 'What does “sober curious” mean?',
    dek: 'It means questioning your drinking without committing to never drinking again. Here is where the idea comes from, what the data shows and how to try it.',
    quickAnswer:
      'Sober curious means questioning your drinking and trying time without alcohol, without committing to quit for good. The phrase was popularised by Ruby Warrington’s 2018 book Sober Curious [[warrington]]. Gallup found 54% of US adults drank in 2025, down from 67% in 2022, and 51% of women, down from 62% in 2023 [[gallup]].',
    kicker: 'Explainer',
    keywords: ['sober curious', 'sober curious meaning', 'what is sober curious', 'what does sober curious mean', 'sober curious app'],
    heroAlt: 'A spectrum line from autopilot drinking to alcohol-free with a marker and a question mark bloom',
    sources: ['warrington', 'gallup', 'niaaaBasics', 'surgeon', 'bmj', 'nsduh', 'medline', 'navigator', 'samhsa'],
    sections: [
      {
        id: 'meaning',
        h2: 'The short answer',
        blocks: [
          {
            t: 'p',
            x: '“Sober curious” describes someone who is questioning their relationship with alcohol, and trying time without it, without necessarily committing to quitting for good. The phrase was popularised by Ruby Warrington’s 2018 book *Sober Curious*, published by HarperOne [[warrington]]. It sits between drinking on autopilot and permanent sobriety, and it is a personal choice rather than a diagnosis.',
          },
        ],
      },
      {
        id: 'why-now',
        h2: 'Why so many people are asking the question',
        blocks: [
          {
            t: 'p',
            x: 'Gallup’s 2025 poll found 54% of US adults say they drink alcohol, down from 67% in 2022. Among women the figure fell from 62% in 2023 to 51% in 2025. For the first time a majority, 53%, said moderate drinking is bad for health, up from 28% in 2018 [[gallup]].',
          },
          { t: 'chart', id: 'gallup' },
          {
            t: 'p',
            x: 'This is a telephone poll of 1,002 adults with a margin of error of about 4 points, so small year-to-year changes should be read loosely. The direction across four years is clear, though [[gallup]].',
          },
        ],
      },
      {
        id: 'compare',
        h2: 'Sober curious, sober and moderating',
        blocks: [
          {
            t: 'table',
            caption: 'Editorial definitions for orientation. These are not clinical categories.',
            head: ['', 'Sober curious', 'Sober', 'Moderating'],
            rows: [
              ['The idea', 'Testing time without alcohol and noticing what changes', 'Not drinking, often long term', 'Drinking less, with limits you set'],
              ['Commitment', 'Open-ended, can be a 30-day experiment', 'A firm line', 'Rules like a weekly cap or drinking days'],
              ['A tracker helps by', 'Showing days, money saved and mood changes', 'Counting the streak and marking milestones', 'Logging each drink against your limit'],
            ],
          },
          {
            t: 'p',
            x: 'It helps to know how the numbers are defined. In the US a standard drink contains 14 grams of pure alcohol. NIAAA defines binge drinking for women as 4 or more drinks within about 2 hours, and heavy drinking as 4 or more on any day or 8 or more in a week. It also says the less alcohol, the better [[niaaaBasics]].',
          },
        ],
      },
      {
        id: 'health',
        h2: 'The health context, honestly',
        blocks: [
          {
            t: 'p',
            x: 'On 3 January 2025 the US Surgeon General issued an advisory identifying alcohol as the third leading preventable cause of cancer in the US, after smoking and obesity [[surgeon]]. And a BMJ Open study of 94 people who abstained for a month found significant falls in insulin resistance, blood pressure, weight and two cancer-related growth factors, against 47 who kept drinking. It was observational and excluded people with liver disease or alcohol dependence, so it is suggestive and not proof [[bmj]].',
          },
        ],
      },
      {
        id: 'start',
        h2: 'How to run a low-pressure experiment',
        blocks: [
          {
            t: 'ol',
            items: [
              '**Choose a window.** Thirty days is long enough to notice things and short enough to feel doable.',
              '**Write your question.** “How do I sleep without alcohol?” is easier to answer than “Should I quit?”',
              '**Track it.** Count the days, note your mood in a daily check-in and record what you spend. Memory edits the story.',
              '**Plan the social parts.** Decide in advance what you will order and when you will leave.',
              '**Review at the end.** What changed? What did not? Then decide what comes next, whether that is more time off, drinking less or carrying on.',
            ],
          },
        ],
      },
      {
        id: 'enough',
        h2: 'When curiosity is not enough',
        blocks: [
          {
            t: 'p',
            x: 'Alcohol use disorder is common. In 2024, 8.0% of US women aged 18 and over had it in the past year [[nsduh]]. If you have tried to cut down and could not, or you feel unwell when you stop, speak to a doctor, and do not stop suddenly if you drink heavily [[medline]]. The NIAAA Alcohol Treatment Navigator helps adults find evidence-based care [[navigator]], and the SAMHSA National Helpline (1-800-662-4357) is free, confidential and open 24/7 [[samhsa]].',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'What does sober curious mean?',
        a: 'It means questioning your drinking and trying time without alcohol, without committing to quit permanently. The term was popularised by Ruby Warrington’s 2018 book Sober Curious.',
      },
      {
        q: 'Is sober curious the same as being sober?',
        a: 'No. Sober means not drinking. Sober curious is the experimental stage: you are exploring what life is like with less or no alcohol.',
      },
      {
        q: 'Are fewer Americans really drinking?',
        a: 'Gallup’s 2025 poll found 54% of US adults drink, down from 67% in 2022, and 51% of women, down from 62% in 2023. It is a poll with a margin of error of about 4 points.',
      },
      {
        q: 'Do I need an app to be sober curious?',
        a: 'No, but a tracker makes the experiment concrete by showing the days and money saved. Sober Girl is a free option built around that, on Android now and coming soon to iPhone.',
      },
    ],
    related: ['sobriety-milestones', 'sober-october', 'best-sober-tracker-apps'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'reframe-app-cost',
    metaTitle: 'Is Reframe Free? Reframe vs I Am Sober Cost',
    metaDescription:
      'What the Reframe, I Am Sober, Sunflower and Sober apps cost, taken from their App Store listings and dated, plus how to cancel a subscription.',
    h1: 'Is the Reframe app free? Reframe and I Am Sober costs, compared',
    dek: 'Both apps are free to download, but both charge for the full experience. Here are the prices from each App Store listing, dated, and how to avoid paying for something you did not mean to.',
    quickAnswer:
      'Reframe is free to download with a 7-day free trial. The US App Store listing shows Reframe Access at $13.99 a month or $79.99 a year, with higher coaching tiers [[asReframe]]. I Am Sober is free, with its Sober Plus tier listed at $9.99 a month or $39.99 a year [[asIAmSober]]. Prices are from listings retrieved 6 October 2026 and change.',
    kicker: 'Pricing',
    keywords: ['reframe app cost', 'is reframe app free', 'how much is reframe app', 'reframe app subscription', 'i am sober app free', 'is i am sober app free'],
    heroAlt: 'Four price tags in a row, each with a different shape and a small tick',
    sources: ['asReframe', 'asIAmSober', 'asSunflower', 'asSober', 'appleCancel', 'oldham', 'khairuddin', 'samhsa'],
    sections: [
      {
        id: 'short',
        h2: 'The short answer',
        blocks: [
          {
            t: 'p',
            x: 'Reframe is free to download, with in-app purchases and a 7-day free trial. After the trial you need a paid plan: the listing shows Reframe Access at $13.99 a month or $79.99 a year, with higher tiers that add coaching [[asReframe]]. I Am Sober is also free to download, and its paid tier, Sober Plus, is listed at $9.99 a month, $27.49 for 6 months or $39.99 a year [[asIAmSober]].',
          },
          {
            t: 'callout',
            kind: 'disclosure',
            title: 'Disclosure and date',
            x: 'We make Sober Girl, a competitor. Prices below are copied from US App Store listings retrieved on 6 October 2026. They change, and prices outside the US differ, so check the listing before you buy.',
          },
        ],
      },
      {
        id: 'table',
        h2: 'What each app lists',
        blocks: [
          {
            t: 'table',
            caption: 'US App Store in-app purchase lists, retrieved 6 October 2026.',
            head: ['', 'Reframe', 'I Am Sober', 'Sunflower', 'Sober: Sobriety Tracker'],
            rows: [
              [
                'Download',
                'Free [[asReframe]]',
                'Free [[asIAmSober]]',
                'Free [[asSunflower]]',
                'Free [[asSober]]',
              ],
              [
                'Paid plans listed',
                'Reframe Access $13.99 a month or $79.99 a year, plus higher coaching tiers [[asReframe]]',
                'Sober Plus $9.99 a month, $27.49 for 6 months, $39.99 a year. Motivation packs $0.99 each [[asIAmSober]]',
                'Several, including $8.95 monthly [[asSunflower]]',
                'Sober Premium, with $39.99 a year listed [[asSober]]',
              ],
              [
                'Free trial',
                '7-day free trial [[asReframe]]',
                'Check the listing',
                'Check the listing',
                'Check the listing',
              ],
            ],
          },
        ],
      },
      {
        id: 'read',
        h2: 'How to read an in-app purchase list',
        blocks: [
          {
            t: 'ul',
            items: [
              '**Look at the yearly price, not the monthly one.** A monthly price looks small. Multiply it by twelve to compare.',
              '**Find the trial and the date it ends.** A free trial usually converts to a paid plan automatically unless you cancel first.',
              '**Check which tier you are on.** Some apps list several tiers, and the higher ones add coaching, which is a separate service from the tracker.',
              '**Decide what you actually need.** If you only want a day counter and money saved, a free tier may be enough.',
            ],
          },
          {
            t: 'p',
            x: 'To cancel on an iPhone, open Settings, tap your name, choose Subscriptions, pick the subscription and tap Cancel Subscription [[appleCancel]].',
          },
        ],
      },
      {
        id: 'work',
        h2: 'Does Reframe work?',
        blocks: [
          {
            t: 'p',
            x: 'This is a common search, and we do not want to guess. We did not find a published trial of Reframe, and the claims on an app\u2019s own website are not independent evidence, so we have not repeated them. What the listing shows is a 4.7 average from about 45,000 ratings [[asReframe]]. That tells you users broadly like it, not whether it changes how much anyone drinks. For context, the largest trial of any alcohol-reduction app we found tested a different app, UCL\u2019s Drink Less, in 5,602 UK drinkers: one pre-registered analysis found a 2.00-unit greater weekly reduction than the NHS webpage, while the strictest found a non-significant 0.98 units [[oldham]]. A 2025 review of 10 trials found app users tended to drink less than controls but called for more evidence [[khairuddin]].',
          },
        ],
      },
      {
        id: 'free',
        h2: 'If you want something free',
        blocks: [
          {
            t: 'p',
            x: 'Sober Girl’s day counter, money saved, daily check-in, Craving SOS and tree are free, with Plus adding the journal, mood insights and shareable milestone cards. It is on Android now, with an iPhone version coming soon. For a longer comparison, read our guide to the best sober tracker apps. If you are worried about your drinking, an app is not treatment: the SAMHSA National Helpline (1-800-662-4357) is free, confidential and open 24/7 [[samhsa]].',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Is the Reframe app free?',
        a: 'It is free to download and comes with a 7-day free trial, but the full program needs a paid plan afterwards. The US App Store listing shows Reframe Access at $13.99 a month or $79.99 a year, as of 6 October 2026.',
      },
      {
        q: 'How much does Reframe cost?',
        a: 'The listing shows $13.99 a month or $79.99 a year for Reframe Access, with higher coaching tiers priced above that. Check the live listing for current prices.',
      },
      {
        q: 'Is the I Am Sober app free?',
        a: 'Yes, you can download and use it free. Sober Plus is the paid tier, listed at $9.99 a month, $27.49 for 6 months or $39.99 a year.',
      },
      {
        q: 'How do I cancel a subscription on iPhone?',
        a: 'Open Settings, tap your name, choose Subscriptions, select the subscription and tap Cancel Subscription.',
      },
    ],
    related: ['best-sober-tracker-apps', 'best-app-to-quit-drinking', 'dry-january-app'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'gray-area-drinking',
    metaTitle: 'Gray Area Drinking: What It Means and What to Do',
    metaDescription:
      'What gray area drinking means, who popularised the term, why some experts question the label, how NIAAA defines heavy and binge drinking, and where to get help.',
    h1: 'Gray area drinking: what it means, and what to do with the question',
    dek: 'It describes drinking that is not at rock bottom but that you are not comfortable with. Here is where the term comes from, the measurable lines, and a better question than “which label am I?”.',
    quickAnswer:
      'Gray area drinking is a popular label for drinking between occasional and dependent, popularised by Jolene Park; it is not a clinical diagnosis [[greyAcuk]]. NIAAA defines binge drinking for women as 4 or more drinks within about 2 hours, and heavy drinking as 4 or more on any day or 8 or more in a week [[niaaaBasics]]. Alcohol Change UK suggests a simpler question than a label: are you happy with how much you drink?',
    kicker: 'Explainer',
    keywords: ['gray area drinking', 'grey area drinking', 'gray-area drinking', 'mindful drinking', 'am i drinking too much'],
    heroAlt: 'A spectrum bar from occasional drinking to dependence with a wide gray zone in the middle',
    sources: ['greyAcuk', 'niaaaBasics', 'bmj', 'nsduh', 'medline', 'navigator', 'samhsa'],
    sections: [
      {
        id: 'what',
        h2: 'What gray area drinking means',
        blocks: [
          {
            t: 'p',
            x: '“Gray area drinking”, or “grey area” in British spelling, is a popular label for the space between occasional drinking and physical alcohol dependence. Alcohol Change UK describes it as a middle ground on a spectrum, noting that for some people in that space drinking appears to cause few problems, while for others it feels far less manageable [[greyAcuk]]. Jolene Park, a self-described functional nutritionist, popularised the term through a TEDx talk [[greyAcuk]].',
          },
          {
            t: 'p',
            x: 'It is a description people use, not a clinical category.',
          },
        ],
      },
      {
        id: 'critique',
        h2: 'Does the label help?',
        blocks: [
          {
            t: 'p',
            x: 'Alcohol Change UK questions whether sorting drinking into categories is useful at all. It suggests a simpler question: are you happy with how much you drink? It also reminds readers there is no such thing as risk-free drinking, and that individual risk varies a lot [[greyAcuk]]. We agree with the spirit of that. A label can feel like relief or like judgement. What helps is the pattern you can actually see.',
          },
        ],
      },
      {
        id: 'numbers',
        h2: 'The measurable lines',
        blocks: [
          {
            t: 'p',
            x: 'These are the definitions NIAAA uses. A standard drink holds 14 grams of pure alcohol. For women, binge drinking is 4 or more drinks within about 2 hours, and heavy drinking is 4 or more drinks on any day or 8 or more in a week. NIAAA also says the less alcohol, the better [[niaaaBasics]].',
          },
          {
            t: 'p',
            x: 'Counting is harder than it sounds, because a generous pour can hold more than one standard drink. If you have never counted, a week of honest tracking is informative on its own.',
          },
        ],
      },
      {
        id: 'questions',
        h2: 'Questions that are more useful than a label',
        blocks: [
          {
            t: 'ul',
            items: [
              'Am I happy with how much I drink?',
              'Do I use alcohol to manage anxiety, stress or sleep?',
              'Do I regret how much or how often I drank, more than occasionally?',
              'Have I made rules about drinking and broken them?',
              'What would I notice if I did not drink for a month?',
            ],
          },
          {
            t: 'p',
            x: 'These are prompts, not a screening tool and not a diagnosis. The last one can be tested. In one BMJ Open study, 94 people who abstained for a month saw significant falls in insulin resistance, blood pressure, weight and two cancer-related growth factors. It was observational and excluded people with liver disease or alcohol dependence [[bmj]]. A month off is also a way to learn how you feel without it.',
          },
        ],
      },
      {
        id: 'help',
        h2: 'When to talk to someone',
        blocks: [
          {
            t: 'p',
            x: 'In 2024, 8.0% of US women aged 18 and over had alcohol use disorder in the past year [[nsduh]]. If you have tried to cut down and could not, or you feel unwell when you stop, speak to a doctor. If you drink heavily, do not stop suddenly on your own, because withdrawal can be dangerous [[medline]]. The NIAAA Alcohol Treatment Navigator helps adults find evidence-based care [[navigator]], and the SAMHSA National Helpline (1-800-662-4357) is free, confidential and open 24/7 [[samhsa]].',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'What is gray area drinking?',
        a: 'A popular label for drinking that sits between occasional drinking and physical dependence: not at rock bottom, but not something you feel comfortable with. It is not a clinical diagnosis.',
      },
      {
        q: 'Who coined the term gray area drinking?',
        a: 'Jolene Park, a self-described functional nutritionist, popularised it through a TEDx talk, according to Alcohol Change UK.',
      },
      {
        q: 'How much is too much for a woman?',
        a: 'NIAAA defines binge drinking for women as 4 or more drinks in about 2 hours, and heavy drinking as 4 or more on any day or 8 or more in a week. It also says the less alcohol, the better.',
      },
      {
        q: 'Is gray area drinking the same as sober curious?',
        a: 'They overlap. Gray area drinking describes a pattern people are uneasy about, while sober curious describes the choice to question it and try time without alcohol.',
      },
    ],
    related: ['sober-curious', 'sobriety-milestones', 'sober-october'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'best-app-to-quit-drinking',
    metaTitle: 'Best App to Quit Drinking: How to Choose (2026)',
    metaDescription:
      'Whether you want to stop, cut down or take a month off, which kind of app fits, what a large trial found, and when an app is not enough.',
    h1: 'The best app to quit drinking depends on your goal',
    dek: 'Stopping completely, cutting down and taking a month off are different goals with different tools. Here is how to match the app to the goal, what the evidence says, and when to get real help.',
    quickAnswer:
      'There is no single best app to quit drinking, and an app is a support tool rather than treatment. To stop completely, look for a day counter with a craving tool, such as I Am Sober [[asIAmSober]] or Sober Girl. To cut down, look for unit tracking and goals, as in Try Dry [[asTryDry]]. A 5,602-person trial of the Drink Less app found a 2.00-unit greater weekly reduction than the NHS web page in one pre-registered analysis, but a non-significant 0.98 units in the strictest one [[oldham]]. If you drink heavily, see a doctor before stopping [[medline]].',
    kicker: 'Guide',
    keywords: ['best app to quit drinking', 'app to quit drinking', 'quit drinking app', 'app to help quit drinking', 'best quit drinking app', 'free quit drinking app'],
    heroAlt: 'Three signposts pointing to stop completely, cut down and take a month off',
    sources: ['medline', 'samhsa', 'asIAmSober', 'asTryDry', 'asSober', 'asReframe', 'oldham', 'khairuddin', 'navigator', 'nsduh'],
    sections: [
      {
        id: 'safety',
        h2: 'First: if you drink heavily, an app is not the first step',
        blocks: [{ t: 'callout', kind: 'safety', title: 'Do not stop suddenly on your own if you drink heavily or daily', x: SAFETY_WITHDRAWAL }],
      },
      {
        id: 'goal',
        h2: 'Match the app to your goal',
        blocks: [
          {
            t: 'table',
            caption: 'Features are as described in US App Store listings retrieved 6 October 2026. This is a guide to the type of tool, not a ranking.',
            head: ['Your goal', 'What to look for', 'Examples from the listings'],
            rows: [
              [
                'Stop completely',
                'A day counter, milestones, a tool for cravings, and a reason you can read back',
                'I Am Sober: day tracker, daily pledge, milestones [[asIAmSober]]. Sober: Sobriety Tracker: urge tools and a forum [[asSober]]. Sober Girl: day counter and Craving SOS',
              ],
              [
                'Cut down',
                'Logging units or drinks, goals, and a way to separate planned from unplanned drinking',
                'Try Dry: tracks units, calories and money, with drinking goals and planned versus unplanned drinks [[asTryDry]]',
              ],
              [
                'Take a month off',
                'A simple streak, reminders and a calendar',
                'Try Dry has dry-day streaks and a calendar view [[asTryDry]]. See our Dry January guide',
              ],
              [
                'Follow a structured program',
                'A multi-week plan with education and optional coaching',
                'Reframe: a 160-day education program with optional coaching [[asReframe]]',
              ],
              [
                'You may need treatment',
                'A person, not an app',
                'The NIAAA Alcohol Treatment Navigator [[navigator]] and the SAMHSA National Helpline [[samhsa]]',
              ],
            ],
          },
        ],
      },
      {
        id: 'evidence',
        h2: 'What the evidence says about apps',
        blocks: [
          {
            t: 'p',
            x: 'The largest trial we found tested the UCL Drink Less app, which is a different product from the apps in the table. It randomised 5,602 UK drinkers who wanted to cut down, to the app or to the NHS alcohol advice webpage. The strictest pre-registered analysis found a non-significant 0.98-unit greater reduction in weekly drinking at six months, and the data were too weak to settle the question. A second pre-registered analysis that imputed missing responses found a 2.00-unit greater reduction (95% CI −3.76 to −0.24). The authors concluded the app “may be effective” for people who are motivated to cut down [[oldham]].',
          },
          {
            t: 'p',
            x: 'A 2025 systematic review of 10 randomised trials (11,269 participants) found that people using mobile apps tended to drink less than controls, while noting that differences between trials mean more evidence is needed [[khairuddin]]. Two things follow. The evidence is about cutting down among motivated people, not about quitting. And we did not find a trial of the specific apps in this guide, so treat any claim that a particular app “works” with caution, including ours.',
          },
        ],
      },
      {
        id: 'questions',
        h2: 'Five questions before you download',
        blocks: [
          {
            t: 'ol',
            items: [
              '**What is my goal?** Stopping, cutting down and a month off need different features.',
              '**Will I use it daily?** The best feature is the one you open. A simple counter beats a complicated app you abandon.',
              '**What does it cost after the trial?** Look at the yearly price in the in-app purchases list.',
              '**What does it do with my data?** Read the App Store privacy label or the Play data safety section.',
              '**Who can I talk to?** An app does not replace a doctor, a counsellor or a person you trust.',
            ],
          },
        ],
      },
      {
        id: 'help',
        h2: 'When an app is not enough',
        blocks: [
          {
            t: 'p',
            x: 'In 2024, 8.0% of US women aged 18 and over had alcohol use disorder in the past year [[nsduh]]. If you have tried to cut down and could not, or you feel unwell when you stop, speak to a doctor. The NIAAA Alcohol Treatment Navigator helps adults find evidence-based care [[navigator]], and the SAMHSA National Helpline (1-800-662-4357) is free, confidential and open 24/7 [[samhsa]].',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'What is the best app to quit drinking?',
        a: 'It depends on whether you want to stop, cut down or take a month off. Day counters such as I Am Sober and Sober Girl suit stopping, Try Dry suits cutting down, and Reframe is a structured program. None replaces treatment.',
      },
      {
        q: 'Is there a free app to quit drinking?',
        a: 'Yes. Try Dry is free with no ads. Several others have free tiers, including I Am Sober and Sober Girl, with paid plans for extra features.',
      },
      {
        q: 'Do apps help you drink less?',
        a: 'Often modestly, and mainly for motivated people. A 5,602-person trial of one app found a significant reduction in one analysis and a non-significant one in the strictest analysis, and a 2025 review of 10 trials found app users tended to drink less.',
      },
      {
        q: 'Can I quit drinking safely on my own?',
        a: 'If you drink heavily or every day, no. Withdrawal can be dangerous, so speak to a doctor first.',
      },
    ],
    related: ['best-sober-tracker-apps', 'sober-october', 'sobriety-milestones'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'sober-app-for-women',
    metaTitle: 'Sober App for Women: What Exists and What to Look For',
    metaDescription:
      'Most sobriety apps are built for everyone. What exists for women, why women-specific support matters, the numbers behind it, and what to look for.',
    h1: 'Is there a sober app for women? What exists and what to look for',
    dek: 'Most sobriety apps are built for everyone. Here is what is available for women, the numbers that explain why it matters, and an honest look at the options.',
    quickAnswer:
      'Most sobriety apps are built for everyone, and we found few designed specifically for women. Women-specific support mostly exists outside apps: Women for Sobriety is a nonprofit founded in 1975 that runs free weekly meetings for women [[wfs]]. Sober Girl, which we make, is a tracker designed for women, on Android now with iPhone coming soon. It has no community or coaching, and it has not been tested in a trial.',
    kicker: 'Guide',
    keywords: ['sober app for women', 'sobriety app for women', 'best sobriety app for women', 'quit drinking app for women', 'alcohol free app for women', 'sober girl app'],
    heroAlt: 'A phone card with a bloom on its screen, surrounded by soft circles',
    sources: ['wfs', 'gallup', 'niaaaBasics', 'nsduh', 'surgeon', 'asIAmSober', 'asSunflower', 'asTryDry', 'navigator', 'samhsa'],
    sections: [
      {
        id: 'answer',
        h2: 'The short answer, honestly',
        blocks: [
          {
            t: 'p',
            x: 'Sober Girl is designed for women, so we are not neutral here. But the wider picture is worth stating plainly. The big sobriety apps, such as I Am Sober [[asIAmSober]] and Sunflower [[asSunflower]], are general: they serve anyone quitting alcohol or other substances. Try Dry is built for anyone cutting down [[asTryDry]]. Support designed specifically for women is more often a program or a community than an app.',
          },
          {
            t: 'callout',
            kind: 'disclosure',
            title: 'Disclosure',
            x: 'We make Sober Girl. Facts about other products are taken from their own store listings or websites and linked. We have not scored anything.',
          },
        ],
      },
      {
        id: 'why',
        h2: 'Why women-specific support gets asked for',
        blocks: [
          {
            t: 'p',
            x: 'The reasons are mostly about context, not a different kind of person. A few facts from sources we trust:',
          },
          {
            t: 'ul',
            items: [
              '**Fewer women are drinking.** Gallup’s 2025 poll found 51% of US women drink, down from 62% in 2023 [[gallup]]. More women are asking the question.',
              '**The thresholds are lower for women.** NIAAA defines binge drinking as 4 or more drinks within about 2 hours for a woman, and 5 or more for a man [[niaaaBasics]].',
              '**The health picture includes cancer.** The US Surgeon General’s January 2025 advisory names breast cancer among seven cancers linked to alcohol, and says alcohol contributes to nearly 100,000 US cancer cases and about 20,000 deaths a year [[surgeon]].',
              '**It is common.** In 2024, 8.0% of US women aged 18 and over (10.7 million) had alcohol use disorder in the past year [[nsduh]].',
            ],
          },
          { t: 'chart', id: 'gallup' },
        ],
      },
      {
        id: 'options',
        h2: 'What exists',
        blocks: [
          {
            t: 'table',
            caption: 'Descriptions come from the store listings and websites linked. This is not a ranking.',
            head: ['Option', 'What it is', 'Built for women?'],
            rows: [
              [
                'Women for Sobriety',
                'A 501(c)(3) nonprofit offering abstinence-based support, founded in 1975 by Jean Kirkpatrick, PhD. Its New Life Program rests on 13 Acceptance Statements, with over 95 free weekly meetings in person and online [[wfs]]. It is not an app',
                'Yes',
              ],
              [
                'I Am Sober',
                'A general day tracker with a daily pledge, milestones and private groups [[asIAmSober]]',
                'No, general',
              ],
              [
                'Sunflower',
                'A general sober-day tracker with guided exercises, community and an AI sponsor [[asSunflower]]',
                'No, general',
              ],
              [
                'Try Dry',
                'A free app for cutting down or a month off, tracking units, calories and money [[asTryDry]]',
                'No, general',
              ],
              [
                'Sober Girl',
                'A private tracker with a day counter, money saved, daily check-in, Craving SOS and a growing tree. The journal stays on your device. Android now, iPhone coming soon',
                'Yes, designed for women',
              ],
            ],
          },
        ],
      },
      {
        id: 'look',
        h2: 'What to look for',
        blocks: [
          {
            t: 'ul',
            items: [
              '**Privacy you can verify.** Read the data safety section or privacy label. Sober Girl keeps your journal on your device.',
              '**A tone that does not shame.** You will use an app you feel good opening.',
              '**A tool for hard moments.** Craving help you have tried when you are calm.',
              '**Honest pricing.** Know what is free and what is not before you invest in a streak.',
              '**Human support if you want it.** An app cannot be your community. A program like Women for Sobriety, or a counsellor, can.',
            ],
          },
        ],
      },
      {
        id: 'limits',
        h2: 'Where Sober Girl is not the answer',
        blocks: [
          {
            t: 'p',
            x: 'Sober Girl has no community feed, no coaching and no AI chat. It is new, so it lacks the track record of older apps, and we are not aware of a published trial of it. It is a calm tracker, not treatment. If you drink heavily or feel unwell when you stop, speak to a doctor, and use the NIAAA Alcohol Treatment Navigator [[navigator]] or the SAMHSA National Helpline (1-800-662-4357, free, confidential, 24/7) [[samhsa]].',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Is there a sober app made for women?',
        a: 'Most sobriety apps are general. Sober Girl is a tracker designed for women, on Android now and coming soon to iPhone. Women-specific support also exists as programs, such as Women for Sobriety.',
      },
      {
        q: 'What is Women for Sobriety?',
        a: 'A nonprofit founded in 1975 by Jean Kirkpatrick, PhD, offering abstinence-based support for women, including over 95 free weekly meetings in person and online. It is not an app.',
      },
      {
        q: 'Why do thresholds differ for women?',
        a: 'NIAAA defines binge drinking as 4 or more drinks in about 2 hours for a woman and 5 or more for a man.',
      },
      {
        q: 'Is Sober Girl a substitute for treatment or a support group?',
        a: 'No. It is a private tracker. For treatment, use the NIAAA Alcohol Treatment Navigator or the SAMHSA National Helpline.',
      },
    ],
    related: ['best-sober-tracker-apps', 'sober-curious', 'gray-area-drinking'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'sober-girl-app',
    metaTitle: 'Sober Girl App: Features, Price, Privacy, Platforms',
    metaDescription:
      'What the Sober Girl app is, who makes it, what is free and what is Plus, how it handles privacy, where it runs, and what it is not.',
    h1: 'Sober Girl app: features, price, privacy and platforms',
    dek: 'A plain fact sheet on the Sober Girl app: what it does, what is free, how it treats your data, where it runs and what it is not.',
    quickAnswer:
      'Sober Girl is a private sobriety tracker for women, made by ShipAI Lab (Ship AI Solutions, LLC). It counts sober days and money saved, has a daily check-in, a Craving SOS with a breathing exercise and a 10-minute timer, milestone badges and a tree that grows as you stay sober. Core tools are free; Plus adds the private journal, mood insights and shareable milestone cards. It is on Google Play for Android now, and an iPhone version is coming soon.',
    kicker: 'Fact sheet',
    keywords: ['sober girl app', 'sober girl sobriety app', 'sober girl app review', 'is sober girl app free'],
    heroAlt: 'The Sober Girl bloom mark inside a rounded app icon with four feature chips around it',
    sources: [],
    sections: [
      {
        id: 'glance',
        h2: 'At a glance',
        blocks: [
          {
            t: 'table',
            head: ['', 'Sober Girl'],
            rows: [
              ['What it is', 'A private sobriety tracker for women'],
              ['Made by', 'ShipAI Lab (Ship AI Solutions, LLC)'],
              ['Platforms', 'Android, on Google Play. iPhone coming soon'],
              ['Name on Google Play', 'Drink Less: Alcohol Free Days'],
              ['Price', 'Core tools free. Plus is an optional upgrade. Prices are shown in the app'],
              ['Privacy', 'Your journal, streak and personal reasons stay on your device and are not synced or shared'],
              ['Treatment', 'Not treatment and not a medical device'],
              ['Contact', 'integrateopenai@gmail.com'],
            ],
          },
        ],
      },
      {
        id: 'features',
        h2: 'What it does',
        blocks: [
          {
            t: 'ul',
            items: [
              '**Day counter.** Days, hours and weeks sober, with a running total of money saved from what you used to spend.',
              '**Daily check-in** with mood tracking.',
              '**Craving SOS.** A breathing exercise, a 10-minute timer and your own reason, one tap away.',
              '**Milestone badges** at 1 day, 1 week, 30 days, 1 year and beyond, with locked and unlocked states.',
              '**A living tree** that grows as you water it daily and unlocks new stages.',
              '**Gentle reminders** at the time you choose.',
              '**Private journal** (Plus), with journal blossoms on your tree.',
              '**Mood and check-in insights** (Plus), and **shareable milestone cards** (Plus).',
            ],
          },
        ],
      },
      {
        id: 'price',
        h2: 'Free versus Plus',
        blocks: [
          {
            t: 'table',
            head: ['Feature', 'Free', 'Plus'],
            rows: [
              ['Day counter, money saved, hours and weeks', 'Yes', 'Yes'],
              ['Daily check-in', 'Yes', 'Yes'],
              ['Craving SOS (breathing, timer, your reason)', 'Yes', 'Yes'],
              ['Milestone list with locked and unlocked states', 'Yes', 'Yes'],
              ['Your tree: growth, watering, stage collection', 'Yes', 'Yes'],
              ['Shareable milestone cards', 'No', 'Yes'],
              ['Private journal', 'No', 'Yes'],
              ['Mood and check-in insights', 'No', 'Yes'],
              ['Journal blossoms on your tree', 'No', 'Yes'],
            ],
          },
          {
            t: 'p',
            x: 'Plan prices are shown in the app and can change, so we do not list them here. You can cancel anytime from your store account.',
          },
        ],
      },
      {
        id: 'privacy',
        h2: 'Privacy',
        blocks: [
          {
            t: 'p',
            x: 'Sober Girl was built so your data lives on your device. We never see your journal entries, your streak or your personal reasons. For the full details, read the privacy policy and terms linked in the footer of this page.',
          },
        ],
      },
      {
        id: 'not',
        h2: 'What Sober Girl is not',
        blocks: [
          {
            t: 'ul',
            items: [
              '**Not treatment.** If you drink heavily or feel unwell when you stop, speak to a doctor first.',
              '**No community feed, coaching or AI chat.** It is a quiet, private tracker.',
              '**Not tested in a trial.** We are not aware of a published trial of Sober Girl, so we do not claim it helps people drink less.',
              '**Not on iPhone yet.** The App Store version is coming soon.',
            ],
          },
          {
            t: 'p',
            x: 'To see how it compares with other apps, read our comparison of the best sober tracker apps.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'What is the Sober Girl app?',
        a: 'A private sobriety tracker for women with a day counter, money saved, a daily check-in, Craving SOS, milestone badges and a tree that grows as you stay sober.',
      },
      {
        q: 'Is Sober Girl free?',
        a: 'The core tools are free: the day counter, money saved, daily check-in, Craving SOS and the tree. Plus is optional and adds the private journal, mood insights and shareable milestone cards.',
      },
      {
        q: 'Is Sober Girl on iPhone?',
        a: 'Not yet. It is on Google Play for Android now, and the iPhone version is coming soon.',
      },
      {
        q: 'Who makes Sober Girl?',
        a: 'ShipAI Lab, a product of Ship AI Solutions, LLC.',
      },
      {
        q: 'Is my data private?',
        a: 'Your journal, streak and personal reasons stay on your device and are never synced or shared.',
      },
    ],
    related: ['best-sober-tracker-apps', 'sober-app-for-women', 'sobriety-milestones'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'alcohol-free-days',
    metaTitle: 'Alcohol-Free Days: How Many a Week and How to Track',
    metaDescription:
      'What counts as an alcohol-free day, what NHS and NIAAA guidance says, and a simple way to track your drinking pattern, with an app or without.',
    h1: 'Alcohol-free days: how many to aim for, and how to track them',
    dek: 'Counting alcohol-free days is the simplest way to see your pattern. Here is what official guidance says and how to track it, with an app or on paper.',
    quickAnswer:
      'The NHS advises people not to drink more than 14 units a week on a regular basis, to spread drinking over 3 or more days if they drink that much, and, to cut down, to have several drink-free days each week [[nhs]]. In the US, NIAAA defines heavy drinking for women as 4 or more drinks on any day or 8 or more in a week, and says the less alcohol, the better [[niaaaBasics]]. Tracking alcohol-free days takes one tick a day.',
    kicker: 'Guide',
    keywords: ['alcohol free days', 'alcohol free days per week', 'how to drink less', 'drink less app', 'days without alcohol', 'alcohol tracker'],
    heroAlt: 'A week of seven circles, some filled and some outlined, labelled by day',
    sources: ['nhs', 'niaaaBasics', 'bmj', 'asTryDry', 'medline', 'samhsa'],
    sections: [
      {
        id: 'what',
        h2: 'What counts as an alcohol-free day',
        blocks: [
          {
            t: 'p',
            x: 'A day with no alcohol at all. That is the whole definition, and its simplicity is the point: you do not need to measure anything to know whether a day was alcohol-free, which makes it the easiest thing to track honestly.',
          },
        ],
      },
      {
        id: 'guidance',
        h2: 'What the guidance says',
        blocks: [
          {
            t: 'p',
            x: 'The NHS says men and women are advised not to drink more than 14 units a week on a regular basis, to spread drinking over 3 or more days if they regularly drink as much as 14 units, and, if they want to cut down, to try to have several drink-free days each week [[nhs]]. That is UK guidance, and it uses UK alcohol units.',
          },
          {
            t: 'p',
            x: 'US guidance is expressed in standard drinks, each holding 14 grams of pure alcohol. For women, NIAAA defines binge drinking as 4 or more drinks within about 2 hours, and heavy drinking as 4 or more drinks on any day or 8 or more in a week. It also says the less alcohol, the better [[niaaaBasics]]. We have not converted between the two systems because the definitions differ, so use the one that matches your country.',
          },
        ],
      },
      {
        id: 'how',
        h2: 'A simple way to track',
        blocks: [
          {
            t: 'ol',
            items: [
              '**Count a baseline week.** Do not change anything. Tick each day you did not drink. This tells you where you are starting.',
              '**Set a small target.** Add one alcohol-free day, or pick specific days. A target you can hit beats an ambitious one you cannot.',
              '**Tick it daily.** Do it in the evening, in the same place every time.',
              '**Note the hard days.** Beside any day you drank, write what led to it. Patterns show up within a few weeks.',
              '**Review monthly.** Count the days, notice the trend, and adjust the target.',
            ],
          },
        ],
      },
      {
        id: 'month',
        h2: 'Why a longer run is informative',
        blocks: [
          {
            t: 'p',
            x: 'If you want to learn what alcohol does for you, a longer run of alcohol-free days is more informative than isolated ones. In a BMJ Open study, 94 people who abstained for a month saw significant falls in insulin resistance, blood pressure, weight and two cancer-related growth factors. It was observational and excluded people with liver disease or alcohol dependence, so it is suggestive rather than proof [[bmj]].',
          },
        ],
      },
      {
        id: 'apps',
        h2: 'Tools for tracking',
        blocks: [
          {
            t: 'p',
            x: 'A calendar and a pen work. If you want an app, two kinds exist. Apps that count units and drinks suit cutting down: Try Dry is free, with no ads, and tracks units, calories and money, with drinking goals and dry-day streaks [[asTryDry]]. Day counters suit stretches of alcohol-free days: Sober Girl counts your days and money saved, with a daily check-in, on Android now and iPhone coming soon. For a full comparison, see our guide to the best sober tracker apps.',
          },
        ],
      },
      {
        id: 'safety',
        h2: 'A note on safety',
        blocks: [{ t: 'callout', kind: 'safety', title: 'If you drink heavily, speak to a doctor before changing how you drink', x: SAFETY_WITHDRAWAL }],
      },
    ],
    faqs: [
      {
        q: 'How many alcohol-free days a week should I have?',
        a: 'The NHS advises that if you want to cut down you try to have several drink-free days each week, and to spread drinking over 3 or more days if you regularly drink as much as 14 units. There is no single US number; NIAAA says the less alcohol, the better.',
      },
      {
        q: 'What is the NHS weekly limit?',
        a: 'The NHS advises men and women not to drink more than 14 units a week on a regular basis. UK units differ from US standard drinks.',
      },
      {
        q: 'How do I track alcohol-free days?',
        a: 'Tick each day you did not drink on a calendar or in an app. Count a baseline week first, then set a small target and review monthly.',
      },
      {
        q: 'Is there a free app for tracking alcohol-free days?',
        a: 'Yes. Try Dry is free with no ads, and Sober Girl’s day counter is free.',
      },
    ],
    related: ['sober-october', 'dry-january-app', 'gray-area-drinking'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'sobriety-calculator',
    metaTitle: 'Sobriety Calculator: Days Sober, Money Saved, Milestones',
    metaDescription:
      'Free sobriety date calculator. Enter your last drink date to see days sober, weeks, months, money saved and your next milestone. Runs in your browser and stores nothing.',
    h1: 'Sobriety calculator: count your days sober and money saved',
    dek: 'Enter the date of your last drink. See your days, weeks and months sober, what you have saved, and when your next milestone falls.',
    quickAnswer:
      'To work out how many days sober you are, count the days from the date of your last drink to today. Enter that date below to see your days, weeks, whole months and complete years, an optional money-saved total, and your next milestone. It runs in your browser and nothing you enter is stored or sent anywhere. Counting conventions vary, so this calculator counts whole days since the date you enter.',
    kicker: 'Tool',
    metaNote: 'A calculator, no external sources needed',
    keywords: ['sobriety calculator', 'sobriety date calculator', 'days sober calculator', 'sober date calculator', 'how many days sober', 'sober days counter'],
    heroAlt: 'A progress ring with a small bloom at its end and chips for weeks, money saved and next milestone',
    sources: [],
    sections: [
      {
        id: 'calculator',
        h2: 'Your sobriety calculator',
        blocks: [{ t: 'sobcalc' }],
      },
      {
        id: 'how',
        h2: 'How it counts',
        blocks: [
          {
            t: 'ul',
            items: [
              '**Days.** The number of whole calendar days between your sobriety date and today. If your last drink was yesterday, you are on day 1.',
              '**Weeks and months.** Weeks are days divided by seven. Months are whole calendar months, so a date on the 31st rolls to the last day of shorter months.',
              '**Money saved.** Your weekly spend divided by seven, times your days. Use an honest average of what you really spent, not your best week.',
              '**Milestones.** The markers are ours (1 day, 1 week, 30 days, 60, 90, 6 months, 9 months, 1 year and beyond). They are a reason to pause and notice, not a clinical schedule.',
            ],
          },
        ],
      },
      {
        id: 'slip',
        h2: 'What if you slip?',
        blocks: [
          {
            t: 'p',
            x: 'This is your call, and people do it differently. Some restart the count from the new date. Others keep the original streak and also note the slip. A useful middle path is to record two numbers: days since your last drink, and total alcohol-free days this year. Whatever you choose, write down what led to the slip, because that is the part you can plan around.',
          },
        ],
      },
      {
        id: 'more',
        h2: 'Keep it somewhere you will see it',
        blocks: [
          {
            t: 'p',
            x: 'A calculator is a snapshot. Sober Girl is a private tracker for women that keeps the count for you, with money saved, a daily check-in, Craving SOS and milestone badges. It is on Android now, and an iPhone version is coming soon. For what research does and does not say about each stage, read our guide to sobriety milestones.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'How do I calculate how many days sober I am?',
        a: 'Count the whole days between the date of your last drink and today. If your last drink was yesterday, you are on day 1. The calculator on this page does it for you.',
      },
      {
        q: 'What counts as my sobriety date?',
        a: 'Most people use the date of their last drink. Pick one convention and keep to it, because consistency matters more than which one you choose.',
      },
      {
        q: 'Does this calculator store my date?',
        a: 'No. It runs in your browser, and nothing you enter is stored or sent anywhere.',
      },
      {
        q: 'How is money saved calculated?',
        a: 'Your weekly spend divided by seven and multiplied by your days sober. It is simple arithmetic based on your own estimate.',
      },
    ],
    related: ['sobriety-milestones', 'best-sober-tracker-apps', 'alcohol-free-days'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'urge-surfing',
    metaTitle: 'Urge Surfing: What It Is and How to Do It',
    metaDescription:
      'Urge surfing means watching a craving rise and fall without acting on it. What it is, how to do it step by step, and what the evidence does and does not show.',
    h1: 'Urge surfing: how to ride out a craving without giving in',
    dek: 'A craving is not a command. Urge surfing is a way to watch one rise and fall without acting on it. Here is how it works, how to try it, and what the research does and does not show.',
    quickAnswer:
      'Urge surfing is a relapse-prevention technique in which you notice a craving, observe it like a wave as it rises and falls, and do not act on it. NIAAA’s Rethinking Drinking advises accepting an urge as normal and temporary, and says urges to drink are short-lived, predictable and controllable [[niaaaUrges]]. The research is early: in a randomised study of 123 student smokers, a brief urge-surfing instruction did not reduce urges but reduced cigarettes smoked over seven days [[urgeSurf]].',
    kicker: 'Guide',
    keywords: ['urge surfing', 'urge surfing alcohol', 'how to stop alcohol cravings', 'craving technique', 'ride out a craving'],
    heroAlt: 'A single wave rising to a crest and falling, with a small marker riding the top',
    sources: ['niaaaUrges', 'urgeSurf', 'niaaaSupport', 'samhsa'],
    sections: [
      {
        id: 'what',
        h2: 'What urge surfing is',
        blocks: [
          {
            t: 'p',
            x: 'The technique comes from the relapse-prevention work of the psychologist Alan Marlatt, who described it as treating an urge like a wave. You do not fight it and you do not feed it. You watch it build, crest and fall [[urgeSurf]]. NIAAA’s Rethinking Drinking puts it this way: instead of fighting an urge, accept it as normal and temporary, and keep in mind that it will soon crest like an ocean wave and pass [[niaaaUrges]].',
          },
        ],
      },
      {
        id: 'how',
        h2: 'How to do it, step by step',
        blocks: [
          {
            t: 'p',
            x: 'This is a practical adaptation of the idea, not a clinical protocol:',
          },
          {
            t: 'ol',
            items: [
              '**Notice and name it.** Say to yourself, “This is an urge to drink.” Naming it creates a little distance.',
              '**Find it in your body.** Where do you feel it: chest, throat, hands, stomach? Describe it as if to someone who has never felt it.',
              '**Breathe slowly.** A few slow breaths in and out while you keep watching.',
              '**Watch it change.** Urges move. Notice whether it gets stronger, shifts or fades. You are an observer, not a participant.',
              '**Set a timer.** Ten minutes is a workable length. You are not promising never to drink, only to wait for the wave to pass first.',
              '**Then do something else.** Move, call someone, make tea. Do not sit and wait for the urge to be gone before you do anything.',
            ],
          },
          {
            t: 'p',
            x: 'Sober Girl’s Craving SOS is built around the same idea: a breathing exercise, a 10-minute timer and the reason you wrote for yourself.',
          },
        ],
      },
      {
        id: 'evidence',
        h2: 'What the evidence shows',
        blocks: [
          {
            t: 'p',
            x: 'Be clear about how much is known. The best-known study of urge surfing, by Bowen and Marlatt, randomised 123 undergraduate smokers to brief mindfulness instructions based on urge surfing or to no instructions. The two groups did not differ significantly in their urges. But the mindfulness group smoked significantly fewer cigarettes over the following 7 days. The authors concluded the technique may not reduce urges at first, but may change how people respond to them, and called the data preliminary [[urgeSurf]].',
          },
          {
            t: 'p',
            x: 'That study was about smoking, in students, over a week. We did not find a trial that tests urge surfing for alcohol on its own, so we do not claim it works for drinking. What we can say is that NIAAA recommends riding out urges as one of several strategies [[niaaaUrges]].',
          },
        ],
      },
      {
        id: 'others',
        h2: 'Other strategies NIAAA lists',
        blocks: [
          {
            t: 'ul',
            items: [
              'Remind yourself of your reasons for change.',
              'Talk it through with someone you trust.',
              'Distract yourself with a healthy activity.',
              'Challenge the thought that is driving the urge.',
              'Leave a tempting situation quickly [[niaaaUrges]].',
            ],
          },
          {
            t: 'p',
            x: 'See our guide to stopping alcohol cravings for how to combine these.',
          },
        ],
      },
      {
        id: 'enough',
        h2: 'When it is not enough',
        blocks: [
          {
            t: 'p',
            x: 'If urges are frequent, strong or hard to manage, that is worth telling a doctor. NIAAA notes that three medications are FDA-approved for alcohol use disorder [[niaaaSupport]]. The SAMHSA National Helpline (1-800-662-4357) is free, confidential and open 24/7 [[samhsa]].',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'What is urge surfing?',
        a: 'A technique in which you notice a craving, watch it rise and fall like a wave, and do not act on it. It comes from the relapse-prevention work of Alan Marlatt.',
      },
      {
        q: 'Does urge surfing work for alcohol cravings?',
        a: 'NIAAA recommends riding out urges as a strategy. In the main study we found, with student smokers, brief urge-surfing instructions did not reduce urges but did reduce cigarettes smoked over seven days. We found no trial of it for alcohol alone.',
      },
      {
        q: 'How long does an alcohol craving last?',
        a: 'NIAAA says urges to drink are short-lived, predictable and controllable, and that an urge will soon crest like a wave and pass. It does not give a fixed number of minutes, so we do not either.',
      },
      {
        q: 'What if the craving does not pass?',
        a: 'Talk to a doctor. Medications are available for alcohol use disorder, and the SAMHSA National Helpline can point you to help.',
      },
    ],
    related: ['how-to-stop-alcohol-cravings', 'how-to-quit-drinking-on-your-own', 'sobriety-milestones'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'how-to-stop-alcohol-cravings',
    metaTitle: 'How to Stop Alcohol Cravings: What Helps, and When',
    metaDescription:
      'NIAAA-backed strategies for alcohol cravings, how to build a plan for your triggers, the medications a doctor can discuss, and when to get help.',
    h1: 'How to stop alcohol cravings: what helps, and when to get help',
    dek: 'Cravings feel urgent, but they follow patterns you can plan for. Here are the strategies NIAAA recommends, how to turn them into a plan, and when to bring in a doctor.',
    quickAnswer:
      'NIAAA says urges to drink are short-lived, predictable and controllable, and recommends riding the urge out, reminding yourself of your reasons, talking it through with someone, distracting yourself, challenging the thought behind the urge, and leaving a tempting situation quickly [[niaaaUrges]]. If cravings are strong or frequent, a doctor can discuss the three FDA-approved medications for alcohol use disorder: naltrexone, acamprosate and disulfiram [[niaaaSupport]].',
    kicker: 'Guide',
    keywords: ['how to stop alcohol cravings', 'alcohol cravings', 'why do i crave alcohol', 'alcohol craving help', 'cravings for alcohol'],
    heroAlt: 'Four rounded buttons labelled ride it out, talk it through, distract, and leave',
    sources: ['niaaaUrges', 'urgeSurf', 'niaaaSupport', 'medline', 'samhsa', 'navigator'],
    sections: [
      {
        id: 'what',
        h2: 'What a craving is',
        blocks: [
          {
            t: 'p',
            x: 'A craving is a strong urge to drink. Most people recognise the usual triggers: a certain time of day, a certain place, a feeling such as stress, boredom or loneliness, or a person or event you associate with drinking. NIAAA describes urges as short-lived, predictable and controllable [[niaaaUrges]]. Predictable is the useful word. If you can predict a craving, you can prepare for it.',
          },
        ],
      },
      {
        id: 'strategies',
        h2: 'Six strategies from NIAAA',
        blocks: [
          { t: 'h3', x: '1. Ride it out' },
          {
            t: 'p',
            x: 'Instead of fighting the urge, accept it as normal and temporary, and remember that it will soon crest like a wave and pass [[niaaaUrges]]. Our urge surfing guide has a step-by-step version.',
          },
          { t: 'h3', x: '2. Remind yourself of your reasons' },
          {
            t: 'p',
            x: 'Write your reasons for change down when you feel good, so they are there when you do not. Keep them where you will see them, such as a note on your phone.',
          },
          { t: 'h3', x: '3. Talk it through' },
          {
            t: 'p',
            x: 'Tell someone you trust that you are having an urge. Saying it out loud takes some of its force away, and it makes it harder to hide.',
          },
          { t: 'h3', x: '4. Distract yourself' },
          {
            t: 'p',
            x: 'NIAAA lists distracting yourself with a healthy activity [[niaaaUrges]]. Good options use your hands or body: a walk, a shower, a workout, a task or a hobby. The goal is to give the urge time to pass.',
          },
          { t: 'h3', x: '5. Challenge the thought' },
          {
            t: 'p',
            x: 'Cravings come with a story: “One won’t hurt”, “I deserve this”, “I cannot cope without it.” NIAAA lists challenging the thought that is driving the urge [[niaaaUrges]]. Ask whether it is true, and what you would say to a friend who believed it.',
          },
          { t: 'h3', x: '6. Leave the situation' },
          {
            t: 'p',
            x: 'NIAAA lists leaving a tempting situation quickly [[niaaaUrges]]. It helps to plan your exit in advance, so you are not inventing an excuse in the moment.',
          },
        ],
      },
      {
        id: 'plan',
        h2: 'Turn it into a plan',
        blocks: [
          {
            t: 'p',
            x: 'This is practical advice, not a clinical protocol. Spend ten minutes now, while you feel steady:',
          },
          {
            t: 'ol',
            items: [
              '**List your three most common triggers.** Time of day, place, feeling, person.',
              '**Pick one response for each.** Make it specific: “At 6pm, I walk round the block.”',
              '**Write one reason** you can read in a few seconds.',
              '**Choose one person** you will message when an urge is strong.',
              '**Put it somewhere you will see it.** Not in a drawer.',
            ],
          },
        ],
      },
      {
        id: 'evidence',
        h2: 'What we know about the techniques',
        blocks: [
          {
            t: 'p',
            x: 'The evidence for any single technique is modest. In a randomised study of 123 student smokers, brief urge-surfing instructions did not reduce urges, but those students smoked fewer cigarettes over the next seven days. The authors suggested it may change how people respond to urges [[urgeSurf]]. That was smoking, not alcohol, and it was preliminary. NIAAA recommends the strategies above as practical tools [[niaaaUrges]].',
          },
        ],
      },
      {
        id: 'doctor',
        h2: 'When to talk to a doctor',
        blocks: [
          {
            t: 'p',
            x: 'If cravings are strong, frequent or keep pulling you back to drinking, tell a doctor. NIAAA says the US FDA has approved three medications for alcohol use disorder, naltrexone, acamprosate and disulfiram, and that none of them is addictive [[niaaaSupport]]. A doctor can tell you whether one fits your situation. If you drink heavily, do not stop suddenly on your own, because withdrawal can be dangerous [[medline]].',
          },
          {
            t: 'p',
            x: 'The NIAAA Alcohol Treatment Navigator helps adults find evidence-based care [[navigator]], and the SAMHSA National Helpline (1-800-662-4357) is free, confidential and open 24/7 [[samhsa]].',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'How do I stop alcohol cravings?',
        a: 'NIAAA recommends riding out the urge, reminding yourself of your reasons, talking it through with someone, distracting yourself, challenging the thought behind it, and leaving a tempting situation quickly.',
      },
      {
        q: 'Why do I crave alcohol?',
        a: 'Cravings are usually tied to triggers such as time of day, place, stress, boredom or people you associate with drinking. NIAAA describes urges as short-lived, predictable and controllable.',
      },
      {
        q: 'Are there medications for alcohol cravings?',
        a: 'NIAAA says the FDA has approved three medications for alcohol use disorder: naltrexone, acamprosate and disulfiram. None is addictive. Ask a doctor whether one is right for you.',
      },
      {
        q: 'Is it safe to stop drinking suddenly?',
        a: 'Not if you drink heavily or every day. Withdrawal can be dangerous, so speak to a doctor first.',
      },
    ],
    related: ['urge-surfing', 'how-to-quit-drinking-on-your-own', 'what-to-do-instead-of-drinking'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'how-to-quit-drinking-on-your-own',
    metaTitle: 'How to Quit Drinking on Your Own: Safe Steps',
    metaDescription:
      'When you can quit drinking on your own, when you should not, and a practical plan: pick a date, remove alcohol, plan for urges, and line up support.',
    h1: 'How to quit drinking on your own: what is safe, and what is not',
    dek: 'Some people can stop without medical help, and some cannot do so safely. Here is how to tell which applies, and a practical plan if it is you.',
    quickAnswer:
      'Whether you can quit drinking on your own depends on how much and how often you drink. If you drink heavily or every day, stopping suddenly can cause dangerous withdrawal, so speak to a doctor first [[medline]]. If you drink less and want to stop, the practical steps are to pick a date, tell someone, remove alcohol from home, plan for urges using strategies such as riding them out [[niaaaUrges]], and track your days. Medication is available through a doctor [[niaaaSupport]], and the SAMHSA helpline (1-800-662-4357) is free and open 24/7 [[samhsa]].',
    kicker: 'Guide',
    keywords: ['how to quit drinking on your own', 'how to stop drinking alcohol', 'how to quit drinking alcohol', 'how to stop drinking', 'quit drinking alone'],
    heroAlt: 'A staircase of five steps with a first step marked by a medical cross',
    sources: ['medline', 'samhsa', 'niaaaUrges', 'niaaaSupport', 'navigator', 'wfs', 'bmj'],
    sections: [
      {
        id: 'safety',
        h2: 'Start here: is it safe to stop on your own?',
        blocks: [
          { t: 'callout', kind: 'safety', title: 'Do not stop suddenly if you drink heavily or every day', x: SAFETY_WITHDRAWAL },
          {
            t: 'p',
            x: 'MedlinePlus lists the symptoms of withdrawal as including anxiety, shakiness, sweating, headaches, insomnia, nausea, a rapid heart rate and hand tremors, with severe cases involving confusion, fever, hallucinations and seizures [[medline]]. If you recognise those from past attempts, or you drink most days, make a call to your doctor your first step. That is not failure. It is the safe way to do this.',
          },
        ],
      },
      {
        id: 'plan',
        h2: 'A practical plan if it is safe for you',
        blocks: [
          {
            t: 'p',
            x: 'This is general advice, not medical guidance:',
          },
          {
            t: 'ol',
            items: [
              '**Pick a date.** Soon, but not tonight in a panic. A date makes it real.',
              '**Write your reason.** One sentence you can read in a few seconds.',
              '**Tell someone.** One person who will ask how it is going.',
              '**Clear the house.** Remove or give away what is there.',
              '**Plan your evenings.** Most people drink at set times. Decide what you will do instead for the first two weeks.',
              '**Prepare for urges.** NIAAA recommends riding the urge out, reminding yourself of your reasons, talking it through, distracting yourself and leaving tempting situations [[niaaaUrges]].',
              '**Track your days.** A visible count turns “I am trying” into a streak you can protect.',
            ],
          },
        ],
      },
      {
        id: 'expect',
        h2: 'What to expect',
        blocks: [
          {
            t: 'p',
            x: 'We cannot promise a timeline. For people who go through withdrawal, symptoms peak between 24 and 72 hours but may persist for weeks, and sleep and mood effects can last for months [[medline]]. In one BMJ Open study of 94 people who abstained for a month, insulin resistance, blood pressure and weight fell significantly, though it was observational and excluded people with alcohol dependence [[bmj]].',
          },
        ],
      },
      {
        id: 'support',
        h2: 'Lining up support',
        blocks: [
          {
            t: 'ul',
            items: [
              '**A doctor.** NIAAA says three medications are FDA-approved for alcohol use disorder, and none is addictive [[niaaaSupport]].',
              '**Find treatment.** The NIAAA Alcohol Treatment Navigator helps adults find evidence-based care [[navigator]].',
              '**A helpline.** The SAMHSA National Helpline: 1-800-662-4357, free, confidential, 24/7 [[samhsa]].',
              '**A women’s program.** Women for Sobriety is a nonprofit offering free weekly meetings for women, in person and online [[wfs]].',
              '**A tracker.** An app can keep your count and give you a tool for hard moments, but it does not replace any of the above. See our guide to the best app to quit drinking.',
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Can I quit drinking on my own?',
        a: 'If you drink lightly or moderately, many people can. If you drink heavily or every day, stopping suddenly can be dangerous, so speak to a doctor first.',
      },
      {
        q: 'How do I stop drinking alcohol?',
        a: 'Pick a date, write your reason, tell someone, clear alcohol from your home, plan your evenings, prepare for urges and track your days. If you drink heavily, involve a doctor.',
      },
      {
        q: 'What are the signs of alcohol withdrawal?',
        a: 'MedlinePlus lists anxiety, shakiness, sweating, headaches, insomnia, nausea, rapid heart rate and tremors, with severe cases involving confusion, fever, hallucinations and seizures. Seek emergency care for the severe signs.',
      },
      {
        q: 'Where can I get help?',
        a: 'The SAMHSA National Helpline (1-800-662-4357) is free, confidential and open 24/7. The NIAAA Alcohol Treatment Navigator helps you find care.',
      },
    ],
    related: ['how-to-stop-alcohol-cravings', 'best-app-to-quit-drinking', 'sobriety-milestones'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'benefits-of-quitting-alcohol',
    metaTitle: 'Benefits of Quitting Alcohol: What the Evidence Supports',
    metaDescription:
      'The measured benefits of a month without alcohol, what people self-report, and what the evidence says about sleep, liver and cancer risk. With sources and limits.',
    h1: 'Benefits of quitting alcohol: what the evidence supports',
    dek: 'Plenty of lists promise dramatic changes. This one sticks to what studies measured, separates it from what people report, and says where the evidence stops.',
    quickAnswer:
      'The best-measured benefits come from a BMJ Open study of 94 people who abstained for a month: insulin resistance fell 25.9%, systolic blood pressure 6.6% and weight 1.5% [[bmj]]. Dry January participants self-reported saving money (86%), sleeping better (70%) and having more energy (66%) [[acuk]]. Fatty liver can be reversed when drinking stops [[liver]], and the US Surgeon General names alcohol the third leading preventable cause of cancer [[surgeon]].',
    kicker: 'Guide',
    keywords: ['benefits of quitting alcohol', 'benefits of not drinking', 'what happens when you quit drinking', 'reasons to quit drinking', 'benefits of stopping drinking'],
    heroAlt: 'Four rising bars labelled sleep, money, blood pressure and liver',
    sources: ['bmj', 'acuk', 'sleep', 'liver', 'surgeon', 'medline', 'samhsa'],
    sections: [
      {
        id: 'measured',
        h2: 'What was measured after a month',
        blocks: [
          {
            t: 'p',
            x: 'In a BMJ Open study, 94 healthy people who chose to abstain for a month were compared with 47 who kept drinking. After the month, the abstaining group had significant falls (all p < 0.001) in insulin resistance, blood pressure, weight and two cancer-related growth factors. The researchers found none of the changes was explained by diet, exercise or smoking [[bmj]].',
          },
          { t: 'chart', id: 'bmj' },
          {
            t: 'p',
            x: '**The limits.** It was observational, people chose their own group, the sample was small, and it excluded people with liver disease or alcohol dependence. These are lab and clinic measurements that you would not feel [[bmj]].',
          },
        ],
      },
      {
        id: 'reported',
        h2: 'What people say they notice',
        blocks: [
          {
            t: 'p',
            x: 'Alcohol Change UK summarises a 2019 evaluation of Dry January participants. These are self-reported results from people who chose to take part, so treat them as experience rather than proof:',
          },
          { t: 'chart', id: 'dryjan' },
        ],
      },
      {
        id: 'sleep',
        h2: 'Sleep',
        blocks: [
          {
            t: 'p',
            x: 'Alcohol can make you drowsy at first and then fragment sleep in the second half of the night, and it can reduce REM sleep [[sleep]]. For people who stop, MedlinePlus notes that sleep disturbance can last for months in some cases [[medline]]. So sleep may get worse before it gets better, and it is not a guaranteed quick win.',
          },
        ],
      },
      {
        id: 'liver',
        h2: 'Liver',
        blocks: [
          {
            t: 'p',
            x: 'The evidence is stage-based rather than date-based. Fatty liver can be reversed when drinking stops, and more advanced alcohol-related liver disease can stabilise with abstinence [[liver]]. If you are worried about your liver, ask a doctor about liver function tests.',
          },
        ],
      },
      {
        id: 'cancer',
        h2: 'Cancer risk',
        blocks: [
          {
            t: 'p',
            x: 'The US Surgeon General’s January 2025 advisory identifies alcohol as the third leading preventable cause of cancer in the US, contributing to nearly 100,000 cases and about 20,000 deaths a year, and names seven cancers, including breast cancer in women [[surgeon]]. That is why many people cut down. We have not cited a figure for how quickly risk falls after quitting, because we did not find one we trust.',
          },
        ],
      },
      {
        id: 'money',
        h2: 'Money',
        blocks: [
          {
            t: 'p',
            x: 'This one you can calculate exactly. Try our sobriety calculator: enter your sobriety date and weekly spend and it shows what you have saved.',
          },
        ],
      },
      {
        id: 'safety',
        h2: 'Before you stop',
        blocks: [{ t: 'callout', kind: 'safety', title: 'Heavy drinkers: speak to a doctor first', x: SAFETY_WITHDRAWAL }],
      },
    ],
    faqs: [
      {
        q: 'What are the benefits of quitting alcohol?',
        a: 'In a BMJ Open study, a month without alcohol lowered insulin resistance (25.9%), systolic blood pressure (6.6%) and weight (1.5%) in 94 people. People also self-report better sleep, savings and energy, and fatty liver can be reversed when drinking stops.',
      },
      {
        q: 'What happens to your body after a month without alcohol?',
        a: 'In one observational study of 94 people, insulin resistance, blood pressure, weight and two cancer-related growth factors all fell significantly. The study excluded people with liver disease or alcohol dependence.',
      },
      {
        q: 'Will I sleep better if I stop drinking?',
        a: 'Alcohol disrupts sleep, so many people report better sleep, but MedlinePlus notes sleep disturbance after stopping can last for months in some cases. It is not guaranteed.',
      },
      {
        q: 'Does quitting alcohol lower cancer risk?',
        a: 'The Surgeon General names alcohol a cause of seven cancers. We did not find a trustworthy figure for how quickly risk falls after quitting, so we do not state one.',
      },
    ],
    related: ['sobriety-milestones', 'sober-october', 'sobriety-calculator'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'sober-journal-prompts',
    metaTitle: 'Sober Journal Prompts: 30 Questions for Early Sobriety',
    metaDescription:
      '30 journal prompts for early sobriety, grouped by moment: day one, cravings, social events, mood, and milestones. Plus how to keep a sober journal that you will stick with.',
    h1: 'Sober journal prompts: 30 questions for the first months',
    dek: 'A sober journal turns a vague feeling into something you can see and learn from. These prompts are grouped by the moment you are in, with a few tips on keeping the habit.',
    quickAnswer:
      'A sober journal is a place to write your reasons, track cravings and moods, and notice patterns. Start with one prompt a day and a few minutes. The 30 prompts below are grouped by moment: day one, cravings, social events, mood, slips, and milestones. These are our own editorial prompts, not a clinical program or a treatment. If writing brings up distress that does not ease, speak to a health professional.',
    kicker: 'Guide',
    metaNote: 'Original prompts. The safety note cites NIAAA',
    keywords: ['sober journal prompts', 'sobriety journal prompts', 'sobriety journal', 'sober journal', 'journal prompts for sobriety', 'recovery journal prompts'],
    heroAlt: 'An open notebook with lines, a pen and a bloom bookmark',
    sources: ['niaaaSupport'],
    sections: [
      {
        id: 'why',
        h2: 'Why keep a sober journal',
        blocks: [
          {
            t: 'p',
            x: 'Memory is generous to drinking and harsh on early sobriety. A journal gives you an honest record: how many days, how you felt, what triggered an urge, what helped. When a hard day arrives, you can read back what you wrote on a better one. We are not citing a study to claim journaling makes you stay sober. It is a practical habit that many people find useful.',
          },
        ],
      },
      {
        id: 'day-one',
        h2: 'Day one and the first week',
        blocks: [
          {
            t: 'ol',
            items: [
              'Why am I doing this, in one honest sentence?',
              'What do I hope will be different in 30 days?',
              'What did I drink and when, in a normal week? (Just notice. No judgement.)',
              'What am I afraid will be hard?',
              'Who knows, and who could I tell?',
            ],
          },
        ],
      },
      {
        id: 'cravings',
        h2: 'When you have a craving',
        blocks: [
          {
            t: 'ol',
            items: [
              'What am I feeling right now, in my body and in my head?',
              'What happened in the hour before this urge?',
              'What is the story the craving is telling me? Is it true?',
              'What did I do last time this urge came, and what happened after?',
              'What would I do if I knew this would pass in ten minutes?',
            ],
          },
        ],
      },
      {
        id: 'social',
        h2: 'Before and after social events',
        blocks: [
          {
            t: 'ol',
            items: [
              'What is my plan for the first drink offer?',
              'What will I order, and what will I say?',
              'When will I leave, and how will I get home?',
              'Afterwards: what went well? What would I do differently?',
              'Who made it easier, and who made it harder?',
            ],
          },
        ],
      },
      {
        id: 'mood',
        h2: 'Mood, sleep and energy',
        blocks: [
          {
            t: 'ol',
            items: [
              'How did I sleep, and what do I think affected it?',
              'What is my energy like today compared with last week?',
              'What am I using drinking to manage, such as stress, loneliness or boredom?',
              'What could I do for that need instead?',
              'What small thing felt good today?',
            ],
          },
        ],
      },
      {
        id: 'slips',
        h2: 'If you slip',
        blocks: [
          {
            t: 'ol',
            items: [
              'What happened, without blame?',
              'What was the trigger, and what was I feeling before it?',
              'What is one thing I will do differently next time?',
              'What is one thing I did right that day?',
              'What do I need today to carry on?',
            ],
          },
        ],
      },
      {
        id: 'milestones',
        h2: 'At a milestone',
        blocks: [
          {
            t: 'ol',
            items: [
              'What have I learned about myself since I started?',
              'What would I tell the person I was on day one?',
              'What have I saved, in money, time or energy?',
              'What do I want the next stretch to look like?',
              'Who do I want to thank?',
            ],
          },
        ],
      },
      {
        id: 'habit',
        h2: 'Making it a habit',
        blocks: [
          {
            t: 'ul',
            items: [
              '**Keep it small.** Two or three minutes beats a long entry you skip.',
              '**Same time, same place.** Evening works for many people, since evenings are when drinking often happens.',
              '**Write freely.** Nobody is grading it. Spelling does not matter.',
              '**Keep it private.** Sober Girl’s journal (a Plus feature) stays on your device and is never synced or shared. A notebook in a drawer works too.',
            ],
          },
          { t: 'callout', kind: 'safety', title: 'If writing stirs up more than you can manage', x: 'NIAAA advises seeing a doctor or mental health professional if symptoms of depression or anxiety persist or get worse, and, if you are having suicidal thoughts, calling your health care provider or going to the nearest emergency room right away [[niaaaSupport]].' },
        ],
      },
    ],
    faqs: [
      {
        q: 'What should I write in a sober journal?',
        a: 'Your reasons for stopping, how you feel each day, what triggered any cravings, what helped, and how you handled social events. Short and honest is better than long and rare.',
      },
      {
        q: 'How often should I journal in early sobriety?',
        a: 'Daily if you can, for a few minutes. Evening is a common choice because that is when many people used to drink.',
      },
      {
        q: 'Is a sober journal private?',
        a: 'A paper notebook is private if you keep it so. In the Sober Girl app, the journal (a Plus feature) stays on your device and is never synced or shared.',
      },
      {
        q: 'Does journaling help you stay sober?',
        a: 'We have not cited a study showing that, so we do not claim it. Many people find it a useful way to notice patterns and remember their reasons.',
      },
    ],
    related: ['sobriety-milestones', 'how-to-stop-alcohol-cravings', 'sober-girl-app'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'what-to-do-instead-of-drinking',
    metaTitle: 'What to Do Instead of Drinking: Evenings, Events, Drinks',
    metaDescription:
      'Practical ideas for what to do instead of drinking: evening routines, social plans, alcohol-free drinks, and how to fill the time you used to spend drinking.',
    h1: 'What to do instead of drinking: evenings, events and drinks',
    dek: 'The hardest part of not drinking is often the time and ritual it leaves empty. Here are practical ideas by situation, so you are not inventing a plan in the moment.',
    quickAnswer:
      'The simplest way to not drink is to have something specific to do at the times you usually would. NIAAA recommends distracting yourself with a healthy activity when you feel an urge [[niaaaUrges]]. Below are ideas by situation: evenings at home, after work, social events and alcohol-free drinks. These are practical suggestions, not research findings.',
    kicker: 'Guide',
    keywords: ['what to do instead of drinking', 'sober activities', 'what to drink instead of alcohol', 'alcohol free drinks', 'things to do when sober'],
    heroAlt: 'Three round icons: a mug, a walking path and an open book',
    sources: ['niaaaUrges'],
    sections: [
      {
        id: 'why',
        h2: 'Why a plan beats willpower',
        blocks: [
          {
            t: 'p',
            x: 'Drinking is usually tied to time and place: the glass of wine while cooking, the drink to unwind after work, the weekend bar. When you stop, you are not only removing alcohol but a ritual. NIAAA’s advice for an urge is to distract yourself with a healthy activity [[niaaaUrges]]. Deciding the activity in advance makes that easy to do.',
          },
        ],
      },
      {
        id: 'evenings',
        h2: 'Evenings at home',
        blocks: [
          {
            t: 'ul',
            items: [
              '**Replace the ritual, not just the drink.** If you poured a glass while cooking, pour something else: sparkling water with lime, tea, a mocktail.',
              '**Move the first hour.** A walk, a stretch or a short workout right after work, before you reach for anything.',
              '**Cook something that takes effort.** It fills time and gives you a reward at the end.',
              '**Start a small project.** A puzzle, a craft, a language app, a book you have meant to read.',
              '**Take a long shower or bath.** Cheap, calming, and hard to do with a drink.',
              '**Go to bed earlier.** Sleep is often shaky early on, so a calm wind-down helps.',
            ],
          },
        ],
      },
      {
        id: 'work',
        h2: 'After work and when stressed',
        blocks: [
          {
            t: 'ul',
            items: [
              'Take a ten-minute walk before you go home, to mark the end of the workday.',
              'Call or message a friend while you walk.',
              'Write three lines in a journal about the day. Our sober journal prompts can help.',
              'Do a short breathing exercise. Sober Girl’s Craving SOS has one with a 10-minute timer.',
            ],
          },
        ],
      },
      {
        id: 'social',
        h2: 'Social events',
        blocks: [
          {
            t: 'ul',
            items: [
              '**Have a drink in your hand.** A glass of sparkling water with lime stops the offers.',
              '**Drive yourself.** It gives you an exit and a clear reason.',
              '**Arrive with an end time.** “I can stay till 9.”',
              '**Suggest the plan.** A coffee, a walk, a class, a meal. You choose the venue.',
              '**Tell the host in advance** if it helps, and ask what alcohol-free options they will have.',
            ],
          },
        ],
      },
      {
        id: 'drinks',
        h2: 'What to drink instead of alcohol',
        blocks: [
          {
            t: 'ul',
            items: [
              'Sparkling water with citrus, ice and herbs.',
              'Herbal or iced tea.',
              'A mocktail you make at home, so it feels like an occasion.',
              'Alcohol-free beer, wine or spirits, if you like the taste. **Check the label.** Some products described as alcohol-free or non-alcoholic still contain a small amount of alcohol, which matters if you want to avoid it completely. Some people also find these keep the ritual alive, so use your judgement.',
            ],
          },
        ],
      },
      {
        id: 'weekends',
        h2: 'Weekends and the empty hours',
        blocks: [
          {
            t: 'ul',
            items: [
              'Book something for the time you used to drink: a class, a hike, a market, a long breakfast.',
              'Spend part of the money you save. Our sobriety calculator shows how much that is.',
              'Make one plan with another person each weekend.',
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'What can I do instead of drinking?',
        a: 'Replace the ritual: a walk after work, a mocktail while cooking, a call to a friend, a project, an earlier bedtime. NIAAA recommends distracting yourself with a healthy activity when you have an urge.',
      },
      {
        q: 'What should I drink instead of alcohol?',
        a: 'Sparkling water with citrus, tea, or a mocktail. If you choose alcohol-free beer or wine, check the label, because some contain a small amount of alcohol.',
      },
      {
        q: 'How do I fill the time I used to spend drinking?',
        a: 'Plan it. Book something for the usual drinking times, spend part of what you save, and make at least one plan with another person each week.',
      },
      {
        q: 'How do I go to social events without drinking?',
        a: 'Have an alcohol-free drink in your hand, decide an end time, drive yourself and suggest plans that are not built around alcohol.',
      },
    ],
    related: ['how-to-stop-alcohol-cravings', 'sober-journal-prompts', 'sober-october'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'hangxiety',
    metaTitle: 'Hangxiety: Why You Feel Anxious After Drinking',
    metaDescription:
      'What hangxiety is, what a UCL and Exeter study found about next-day anxiety, how it differs from withdrawal, what to do, and when to get help.',
    h1: 'Hangxiety: why you feel anxious after drinking, and what to do',
    dek: 'Anxiety the morning after a night out is common enough to have its own nickname. Here is what the research actually shows, what it does not, and how to use the pattern.',
    quickAnswer:
      'Hangxiety is the anxiety some people feel the day after drinking. In a study led by UCL and the University of Exeter, nearly 100 social drinkers were randomised to drink or stay sober: highly shy people felt less anxious while drinking but significantly more anxious the next morning, and next-day anxiety was linked to alcohol use disorder symptoms [[marsh]]. Anxiety is also a recognised symptom of alcohol withdrawal [[medline]]. If it keeps happening, tracking your mood on drinking and alcohol-free days shows the pattern.',
    kicker: 'Explainer',
    keywords: ['hangxiety', 'hangover anxiety', 'why do i feel anxious after drinking', 'anxiety after drinking', 'alcohol anxiety next day'],
    heroAlt: 'A morning sun with a small anxious cloud and a calm bloom beneath it',
    sources: ['marsh', 'sexdiff', 'medline', 'asTryDry', 'niaaaSupport', 'samhsa'],
    sections: [
      {
        id: 'what',
        h2: 'What hangxiety is',
        blocks: [
          {
            t: 'p',
            x: '“Hangxiety” is an informal word for anxiety that shows up during a hangover, the day after drinking. It is not a diagnosis. People describe a racing mind, dread, replaying what they said or did, and a sense that something is wrong. It is common enough that the word has stuck, and searches for it are high, which says something about how many people recognise it.',
          },
        ],
      },
      {
        id: 'research',
        h2: 'What the research found',
        blocks: [
          {
            t: 'p',
            x: 'The best-known study was led by Beth Marsh at UCL with Celia Morgan at the University of Exeter. Nearly 100 social drinkers were randomly assigned to drink (about six units) or to stay sober, and anxiety was measured at baseline, after the drinking or sober period, and the next morning. Highly shy people felt somewhat less anxious while drinking, but showed a significant increase in anxiety the following day. Among highly shy people, higher next-day anxiety was associated with more alcohol use disorder symptoms, which the researchers suggested could be a marker of risk [[marsh]].',
          },
          {
            t: 'p',
            x: '**The limits.** The sample was small, the effect was seen in highly shy people rather than drinkers in general, and an association with symptoms is not proof that anything causes anything. It tells you that hangover anxiety is real and measurable. It does not tell you that everyone who feels it has a problem.',
          },
        ],
      },
      {
        id: 'women',
        h2: 'Does it hit women harder?',
        blocks: [
          {
            t: 'p',
            x: 'We did not find a study that shows hangxiety is worse in women. A study of 2,446 Dutch students compared 22 hangover symptoms after a heavy night. Women reported higher severity of nausea and tiredness in several groups, but the authors said the differences were small and of little clinical relevance [[sexdiff]]. It did not single out anxiety, so we will not claim a difference.',
          },
        ],
      },
      {
        id: 'withdrawal',
        h2: 'Hangxiety versus withdrawal',
        blocks: [
          {
            t: 'p',
            x: 'They overlap, and it matters to know the difference. MedlinePlus lists anxiety among the symptoms of alcohol withdrawal, along with shakiness, sweating, insomnia and a rapid heart rate, and notes that symptoms can start within 8 hours of the last drink and, in severe cases, involve confusion, fever, hallucinations or seizures [[medline]]. If your anxiety comes with those, or you feel you need a drink to settle it, speak to a doctor.',
          },
        ],
      },
      {
        id: 'do',
        h2: 'What to do about it',
        blocks: [
          {
            t: 'p',
            x: 'This is general advice, not medical guidance:',
          },
          {
            t: 'ul',
            items: [
              '**Do not drink more to calm it.** It can feel like it works, but it sets up the same cycle again.',
              '**Look after the basics.** Food, water, a shower, fresh air and rest.',
              '**Name it.** “This is a hangover feeling and it will pass” is more accurate than “I have done something terrible.”',
              '**Avoid big decisions or confrontations** until you feel steadier.',
              '**Note it.** Write down your mood the morning after, and compare it with mornings after alcohol-free days.',
            ],
          },
        ],
      },
      {
        id: 'track',
        h2: 'Turn it into information',
        blocks: [
          {
            t: 'p',
            x: 'The most useful thing you can do with hangxiety is count it. For two or three weeks, rate your mood each morning from 1 to 5 and mark whether you drank the night before. Most people see a pattern within a few weeks. Try Dry, the free app from Alcohol Change UK, logs mood and sleep alongside your drinking [[asTryDry]], and Sober Girl has a daily check-in alongside its day counter. If a month without alcohol sounds worth testing, our Sober October and Dry January guides explain how.',
          },
        ],
      },
      {
        id: 'help',
        h2: 'When to get help',
        blocks: [
          {
            t: 'p',
            x: 'NIAAA advises seeing a doctor or mental health professional if symptoms of anxiety or depression persist or get worse [[niaaaSupport]]. If you drink heavily, do not stop suddenly on your own, because withdrawal can be dangerous [[medline]]. The SAMHSA National Helpline (1-800-662-4357) is free, confidential and open 24/7 [[samhsa]].',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'What is hangxiety?',
        a: 'An informal word for anxiety during a hangover, the day after drinking. It is not a diagnosis. In a UCL and Exeter study, highly shy people felt less anxious while drinking but significantly more anxious the next morning.',
      },
      {
        q: 'Why do I feel anxious after drinking?',
        a: 'Research shows next-day anxiety is real and can be measured, and anxiety is also a symptom of alcohol withdrawal. A study of nearly 100 social drinkers found highly shy people had a significant increase in anxiety the day after drinking.',
      },
      {
        q: 'Is hangxiety a sign of a drinking problem?',
        a: 'Not on its own. In that study, higher next-day anxiety was associated with more alcohol use disorder symptoms in highly shy people, which researchers suggested could be a marker of risk, but the sample was small. If you are worried, talk to a doctor.',
      },
      {
        q: 'How long does hangxiety last?',
        a: 'We did not find a reliable figure, so we do not give one. If anxiety persists or gets worse, speak to a doctor or mental health professional.',
      },
    ],
    related: ['gray-area-drinking', 'benefits-of-quitting-alcohol', 'how-much-alcohol-is-too-much-for-women'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'sober-books-and-podcasts',
    metaTitle: 'Sober Books and Podcasts for Women: What Exists',
    metaDescription:
      'A facts-only directory of sober podcasts and books, including Quit Like a Woman, This Naked Mind and Sober Curious, with hosts, episode counts and listing dates.',
    h1: 'Sober books and podcasts for women: a facts-only directory',
    dek: 'Podcasts and books can add company and ideas to a tracker. This is a directory of what exists, with details taken from Apple Podcasts and library catalogues, not a set of reviews.',
    quickAnswer:
      'Sober podcasts listed on Apple Podcasts on 6 October 2026 include The Hello Someday Podcast For Sober Curious Women (339 episodes) [[podHello]], Recovery Elevator (611) [[podRecovery]], This Naked Mind Podcast (948) [[podNaked]], Sober Powered (371) [[podPowered]] and Sober Awkward (444) [[podAwkward]]. Popular books include Quit Like a Woman by Holly Whitaker [[olQuit]], Sober Curious by Ruby Warrington [[warrington]] and Blackout by Sarah Hepola [[olBlackout]]. We have not reviewed their content, and none is a substitute for treatment.',
    kicker: 'Directory',
    keywords: ['sober podcasts', 'sober curious books', 'books about quitting drinking', 'quit like a woman', 'this naked mind', 'sober books for women'],
    heroAlt: 'A stack of three books beside a pair of headphones',
    sources: ['podHello', 'podBubble', 'podRecovery', 'podNaked', 'podPowered', 'podAwkward', 'olQuit', 'warrington', 'olBlackout', 'olNaked', 'samhsa'],
    sections: [
      {
        id: 'how',
        h2: 'How we made this list',
        blocks: [
          {
            t: 'callout',
            kind: 'note',
            title: 'Facts only, and no reviews',
            x: 'We list titles, hosts and authors, episode counts and dates from Apple Podcasts and library catalogue records. We have not listened to or read all of these in full, we have no commercial relationship with any of them, and we are not recommending any one as treatment. Counts and dates were retrieved on 6 October 2026 and change.',
          },
        ],
      },
      {
        id: 'podcasts',
        h2: 'Podcasts',
        blocks: [
          {
            t: 'table',
            caption: 'From Apple Podcasts listings, US store, retrieved 6 October 2026. Episode counts are as listed.',
            head: ['Podcast', 'Host', 'Episodes listed', 'Latest episode listed'],
            rows: [
              ['The Hello Someday Podcast For Sober Curious Women', 'Casey McGuire Davidson [[podHello]]', '339', '24 September 2026'],
              ['Recovery Elevator', 'Paul Churchill [[podRecovery]]', '611', '28 September 2026'],
              ['This Naked Mind Podcast', 'Annie Grace [[podNaked]]', '948', '3 October 2026'],
              ['Sober Powered: The Neuroscience of Being Sober', 'Gillian Tietz [[podPowered]]', '371', '2 October 2026'],
              ['Sober Awkward', 'listed as soberawkward [[podAwkward]]', '444', '30 September 2026'],
              ['The Bubble Hour', 'listed as The Bubble Hour [[podBubble]]', '200', '22 November 2022. It appears to be no longer releasing'],
            ],
          },
        ],
      },
      {
        id: 'books',
        h2: 'Books',
        blocks: [
          {
            t: 'table',
            caption: 'Titles, authors and publishers from Open Library catalogue records and Apple Books, retrieved 6 October 2026.',
            head: ['Book', 'Author', 'Publication details'],
            rows: [
              ['Quit Like a Woman: The Radical Choice to Not Drink in a Culture Obsessed with Alcohol [[olQuit]]', 'Holly Whitaker', 'Dial Press, 2019'],
              ['Sober Curious: The Blissful Sleep, Greater Focus, Limitless Presence, and Deep Connection Awaiting Us All on the Other Side of Alcohol [[warrington]]', 'Ruby Warrington', 'HarperOne, 2018'],
              ['Blackout: Remembering the Things I Drank to Forget [[olBlackout]]', 'Sarah Hepola', 'First published 2015'],
              ['This Naked Mind [[olNaked]]', 'Annie Grace', 'Editions vary by publisher and year'],
            ],
          },
        ],
      },
      {
        id: 'choose',
        h2: 'How to choose',
        blocks: [
          {
            t: 'ul',
            items: [
              '**Pick the tone you can stand.** Some people want science, some want memoir, some want humour. If one voice grates, drop it.',
              '**Treat claims with care.** A book or podcast may promote a method that has not been tested in a trial. We did not evaluate the evidence behind any of them.',
              '**Use them as company, not treatment.** They can make the early days less lonely. They do not replace a doctor if you drink heavily.',
              '**Check the format.** Podcasts with hundreds of episodes can be intimidating. Start with a recent one.',
            ],
          },
        ],
      },
      {
        id: 'help',
        h2: 'If you need more than a podcast',
        blocks: [
          {
            t: 'p',
            x: 'If you drink heavily or feel unwell when you stop, speak to a doctor. The SAMHSA National Helpline (1-800-662-4357) is free, confidential and open 24/7 [[samhsa]]. A tracker can sit alongside listening or reading: see our guide to the best sober tracker apps.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'What are good sober podcasts for women?',
        a: 'The Hello Someday Podcast For Sober Curious Women is aimed at women, according to its title and listing. Others listed include Recovery Elevator, This Naked Mind Podcast, Sober Powered and Sober Awkward. We have not reviewed them.',
      },
      {
        q: 'What is Quit Like a Woman?',
        a: 'A book by Holly Whitaker, published by Dial Press in 2019, subtitled The Radical Choice to Not Drink in a Culture Obsessed with Alcohol.',
      },
      {
        q: 'What is Sober Curious by Ruby Warrington?',
        a: 'A 2018 book published by HarperOne that popularised the phrase sober curious, subtitled The Blissful Sleep, Greater Focus, Limitless Presence, and Deep Connection Awaiting Us All on the Other Side of Alcohol.',
      },
      {
        q: 'Are sober books and podcasts a substitute for treatment?',
        a: 'No. They can add ideas and company. If you drink heavily or feel unwell when you stop, speak to a doctor.',
      },
    ],
    related: ['sober-curious', 'sober-app-for-women', 'best-sober-tracker-apps'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'dry-january-guide',
    metaTitle: 'Dry January: Benefits, Rules and Tips for 2027',
    metaDescription:
      'What Dry January is, the benefits people report and what a study measured, how to set your rules, tips to get through the month, and what to do if you slip.',
    h1: 'Dry January: benefits, rules and tips',
    dek: 'A month off alcohol is simple to describe and harder to do. Here is where it comes from, what it has been shown to do, how to set your rules, and what to do if you slip.',
    quickAnswer:
      'Dry January is a month without alcohol that began in 2013 with Alcohol Change UK and has grown from 4,000 participants to 200,000 app and tool users worldwide in 2025 [[acukAbout]]. Participants in a 2019 evaluation self-reported saving money (86%), sleeping better (70%) and having more energy (66%) [[acuk]]. In a BMJ Open study of 94 people, a month off cut insulin resistance by 25.9% and systolic blood pressure by 6.6% [[bmj]]. If you drink heavily, speak to a doctor before stopping suddenly [[medline]].',
    kicker: 'Guide',
    keywords: ['dry january', 'dry january benefits', 'how to do dry january', 'dry january tips', 'dry january rules', 'what is dry january'],
    heroAlt: 'A January calendar page with a frosted snowflake and a row of ticked days',
    sources: ['acukAbout', 'acuk', 'bmj', 'medline', 'samhsa'],
    sections: [
      {
        id: 'what',
        h2: 'What Dry January is',
        blocks: [
          {
            t: 'p',
            x: 'Dry January is a challenge to go the month without alcohol. It began in 2013 with Emily Robinson, who had given up alcohol in January 2011 while training for a half marathon and later joined Alcohol Change UK, where the campaign was developed. It started with 4,000 participants and reached 200,000 people using its app and tools worldwide in 2025 [[acukAbout]]. The charity reports that 17.5 million people were planning a month off alcohol in January 2026 [[acuk]].',
          },
        ],
      },
      {
        id: 'benefits',
        h2: 'The benefits, in two kinds of evidence',
        blocks: [
          {
            t: 'p',
            x: '**What people report.** In Alcohol Change UK’s summary of a 2019 evaluation by Dr Richard de Visser at the University of Sussex, participants said:',
          },
          { t: 'chart', id: 'dryjan' },
          {
            t: 'p',
            x: '**What was measured.** A BMJ Open study followed 94 healthy people who abstained for a month, with 47 who kept drinking for comparison. The abstainers had significant falls in insulin resistance, blood pressure, weight and two cancer-related growth factors [[bmj]].',
          },
          { t: 'chart', id: 'bmj' },
          {
            t: 'p',
            x: 'Both come with limits. The first is self-reported by people who chose to take part. The second was observational and excluded people with liver disease or alcohol dependence [[bmj]]. Neither proves a month off will do the same for you.',
          },
        ],
      },
      {
        id: 'safety',
        h2: 'Before you start',
        blocks: [{ t: 'callout', kind: 'safety', title: 'Heavy drinkers: speak to a doctor first', x: SAFETY_WITHDRAWAL }],
      },
      {
        id: 'rules',
        h2: 'Set your rules before the 1st',
        blocks: [
          {
            t: 'ul',
            items: [
              '**All 31 days or the rest of the month.** If you start late, count 31 days from your start.',
              '**What counts.** Decide in advance about alcohol-free drinks. Some people want them, some find they keep the habit alive.',
              '**What a slip means.** Decide now. A slip is information about what to plan for, not a verdict.',
              '**Who knows.** Tell one person who will ask how it is going.',
            ],
          },
        ],
      },
      {
        id: 'tips',
        h2: 'Tips for getting through it',
        blocks: [
          {
            t: 'p',
            x: 'These are practical suggestions, not research findings:',
          },
          {
            t: 'ul',
            items: [
              '**Clear the house** before the 1st.',
              '**Mark the hard dates.** Look at January for birthdays, dinners and weekends away, and decide what you will drink and when you will leave.',
              '**Have a replacement ritual.** If you pour a glass while cooking, pour something else. See our guide to what to do instead of drinking.',
              '**Make a craving plan.** Our guides to urge surfing and to stopping alcohol cravings help.',
              '**Make it visible.** Use a calendar or a tracker so you can see the streak. Our printable sobriety calendar and sobriety calculator are free.',
            ],
          },
        ],
      },
      {
        id: 'slip',
        h2: 'If you slip',
        blocks: [
          {
            t: 'p',
            x: 'Log it, note what led to it, and carry on. Alcohol Change UK reports that six months after the campaign, seven out of ten participants were still drinking less riskily than before, which suggests a month, even an imperfect one, can leave a mark [[acukAbout]]. For the full list of tracking apps, see our guide to apps for Dry January.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'What is Dry January?',
        a: 'A challenge to go the month of January without alcohol, started in 2013 by Alcohol Change UK. It grew from 4,000 participants that year to 200,000 app and tool users worldwide in 2025.',
      },
      {
        q: 'What are the benefits of Dry January?',
        a: 'Participants in a 2019 evaluation self-reported saving money (86%), better sleep (70%) and more energy (66%). In a BMJ Open study, 94 people who abstained for a month saw significant falls in insulin resistance, blood pressure and weight.',
      },
      {
        q: 'What are the rules of Dry January?',
        a: 'There are no official penalties. Decide whether you are doing all 31 days, what counts as alcohol, and what a slip means, and tell one person.',
      },
      {
        q: 'What if I break Dry January?',
        a: 'Log it and carry on. Alcohol Change UK reports that six months after the campaign, seven in ten participants were still drinking less riskily.',
      },
    ],
    related: ['dry-january-app', 'sober-october', 'sobriety-calendar'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'sobriety-calendar',
    metaTitle: 'Printable Sobriety Calendar: 30, 60, 90, 100, 365 Days',
    metaDescription:
      'Free printable sobriety calendar. Choose 30, 60, 90, 100 or 365 days, add your start date, and print or save as PDF. Runs in your browser and stores nothing.',
    h1: 'Printable sobriety calendar: 30, 60, 90, 100 or 365 days',
    dek: 'A paper calendar you can stick on the fridge and tick each day. Choose a length, add a start date if you like, then print it or save it as a PDF.',
    quickAnswer:
      'This is a free printable sobriety calendar. Choose 30, 60, 90, 100 or 365 days, optionally add your first day so each box shows its date, then print it or save it as a PDF. Tick one circle each day you do not drink. It runs in your browser and nothing you enter is stored or sent anywhere.',
    kicker: 'Tool',
    metaNote: 'A printable tool, no external sources needed',
    keywords: ['sobriety calendar', 'sober calendar', 'printable sobriety calendar', '90 day sobriety calendar', '30 day sober calendar', 'alcohol free calendar'],
    heroAlt: 'A grid of day boxes, some ticked, with a bloom marking the final day',
    sources: [],
    sections: [
      {
        id: 'calendar',
        h2: 'Make your calendar',
        blocks: [{ t: 'sobcal' }],
      },
      {
        id: 'use',
        h2: 'How to use it',
        blocks: [
          {
            t: 'ol',
            items: [
              '**Print it** and put it where you will see it daily, such as the fridge or by the bathroom mirror.',
              '**Tick each night.** Do it at the same time every day, so the habit is easy.',
              '**Write on it.** In the date box or margin, note a hard day, a win or a trigger.',
              '**Mark the milestones.** Circle day 7, 30 and 90, and plan something small for each.',
              '**If you slip,** note it and carry on, or restart a fresh calendar. Either is fine. Our sobriety calculator shows days since your last drink.',
            ],
          },
        ],
      },
      {
        id: 'which',
        h2: 'Which length?',
        blocks: [
          {
            t: 'ul',
            items: [
              '**30 days** suits Dry January or Sober October. See our Dry January guide.',
              '**60 and 90 days** are common early targets in recovery.',
              '**100 days** is a round number some people prefer.',
              '**365 days** gives you a full year on a set of pages.',
            ],
          },
        ],
      },
      {
        id: 'app',
        h2: 'Prefer it on your phone?',
        blocks: [
          {
            t: 'p',
            x: 'Sober Girl is a private tracker for women with a day counter, money saved, a daily check-in and milestone badges, on Android now with iPhone coming soon. For other options, see our comparison of the best sober tracker apps.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Is there a free printable sobriety calendar?',
        a: 'Yes, the one on this page. Choose 30, 60, 90, 100 or 365 days, add a start date if you like, and print or save it as a PDF.',
      },
      {
        q: 'Does this calendar store my information?',
        a: 'No. It runs in your browser, and nothing you enter is stored or sent anywhere.',
      },
      {
        q: 'How do I save the calendar as a PDF?',
        a: 'Press Print, then choose Save as PDF as the destination in your browser’s print dialog.',
      },
      {
        q: 'Can I start the calendar on any date?',
        a: 'Yes. Enter any first day and each box shows its date, or leave the date blank for numbered days only.',
      },
    ],
    related: ['sobriety-calculator', 'dry-january-guide', 'sobriety-milestones'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'how-much-alcohol-is-too-much-for-women',
    metaTitle: 'How Much Alcohol Is Too Much for a Woman? NIAAA Limits',
    metaDescription:
      'What counts as a standard drink, how NIAAA defines binge and heavy drinking for women, what the NHS advises, and how to count your own week.',
    h1: 'How much alcohol is too much for a woman?',
    dek: 'The numbers in official guidance are lower for women than for men, and they are easy to miscount. Here are the definitions from NIAAA and the NHS, and how to count your own week.',
    quickAnswer:
      'NIAAA defines binge drinking for a woman as 4 or more drinks in about two hours, and heavy drinking as 4 or more on any day or 8 or more in a week, with the figures higher for men [[niaaaPatterns]]. A US standard drink holds 14 grams of pure alcohol: a 12-ounce regular beer, a 5-ounce glass of wine or a 1.5-ounce shot of spirits [[niaaaStandard]]. NIAAA also says the less alcohol, the better [[niaaaBasics]]. The NHS advises not regularly drinking more than 14 UK units a week [[nhs]].',
    kicker: 'Explainer',
    keywords: ['how much alcohol is too much for a woman', 'how much alcohol is safe for women', 'standard drink', 'binge drinking women', 'heavy drinking women', 'how many drinks a week for a woman'],
    heroAlt: 'Three glasses showing a beer, a glass of wine and a shot, each labelled as one standard drink',
    sources: ['niaaaStandard', 'niaaaPatterns', 'niaaaBasics', 'nhs', 'surgeon', 'nsduh', 'navigator', 'samhsa'],
    sections: [
      {
        id: 'standard',
        h2: 'What counts as one drink',
        blocks: [
          {
            t: 'p',
            x: 'In the US, one standard drink contains about 14 grams, or about 0.6 fluid ounces, of pure alcohol [[niaaaStandard]]. The amounts that match are:',
          },
          {
            t: 'table',
            caption: 'NIAAA, What Is A Standard Drink?',
            head: ['Drink', 'Amount in one standard drink'],
            rows: [
              ['Regular beer', '12 fl oz at about 5% alcohol by volume [[niaaaStandard]]'],
              ['Table wine', '5 fl oz at about 12% [[niaaaStandard]]'],
              ['Malt liquor or hard seltzer', '8 to 10 fl oz at about 7% [[niaaaStandard]]'],
              ['80-proof spirits', '1.5 fl oz (a shot) at about 40% [[niaaaStandard]]'],
            ],
          },
          {
            t: 'p',
            x: 'This is where counting goes wrong. A generous pour at home, a large wine glass or a strong craft beer can hold more than one standard drink, so your real count may be higher than the number of glasses.',
          },
        ],
      },
      {
        id: 'limits',
        h2: 'What NIAAA calls binge and heavy drinking',
        blocks: [
          {
            t: 'table',
            caption: 'NIAAA, Understanding Alcohol Drinking Patterns.',
            head: ['Pattern', 'Women', 'Men'],
            rows: [
              ['Binge drinking', '4 or more drinks in about 2 hours [[niaaaPatterns]]', '5 or more drinks in about 2 hours [[niaaaPatterns]]'],
              ['Heavy drinking', '4 or more drinks on any day, or 8 or more in a week [[niaaaPatterns]]', '5 or more on any day, or 15 or more in a week [[niaaaPatterns]]'],
            ],
          },
          {
            t: 'p',
            x: 'NIAAA also states that the less alcohol, the better [[niaaaBasics]]. So these are lines to stay under, not targets, and being under them does not mean drinking is risk-free.',
          },
        ],
      },
      {
        id: 'nhs',
        h2: 'What the NHS advises',
        blocks: [
          {
            t: 'p',
            x: 'UK guidance differs because it counts UK units. The NHS advises men and women not to drink more than 14 units a week on a regular basis, to spread drinking over 3 or more days if they regularly drink that much, and to have several drink-free days each week if they want to cut down [[nhs]]. Because units and US standard drinks are defined differently, we have not converted between them.',
          },
        ],
      },
      {
        id: 'health',
        h2: 'Why many women ask the question',
        blocks: [
          {
            t: 'p',
            x: 'The US Surgeon General’s January 2025 advisory identifies alcohol as the third leading preventable cause of cancer in the US and names seven cancers, including breast cancer in women [[surgeon]]. In 2024, 8.0% of US women aged 18 and over (10.7 million) had alcohol use disorder in the past year [[nsduh]].',
          },
        ],
      },
      {
        id: 'count',
        h2: 'Count your own week',
        blocks: [
          {
            t: 'ol',
            items: [
              '**Write down every drink for seven days,** with the size of the pour.',
              '**Convert to standard drinks.** Use the table above.',
              '**Add them up** and compare with the lines above.',
              '**Note the alcohol-free days.** See our guide to alcohol-free days.',
              '**Repeat for a month** if you want a real picture. A tracker makes this easier.',
            ],
          },
        ],
      },
      {
        id: 'help',
        h2: 'If the numbers worry you',
        blocks: [
          {
            t: 'p',
            x: 'If you have tried to cut down and could not, or you feel unwell when you stop, speak to a doctor. The NIAAA Alcohol Treatment Navigator helps adults find evidence-based care [[navigator]], and the SAMHSA National Helpline (1-800-662-4357) is free, confidential and open 24/7 [[samhsa]].',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'How much alcohol is too much for a woman?',
        a: 'NIAAA defines binge drinking for women as 4 or more drinks in about 2 hours and heavy drinking as 4 or more on any day or 8 or more in a week. It also says the less alcohol, the better.',
      },
      {
        q: 'What is one standard drink?',
        a: 'About 14 grams of pure alcohol: a 12-ounce regular beer at 5%, a 5-ounce glass of wine at 12%, or a 1.5-ounce shot of 80-proof spirits.',
      },
      {
        q: 'What is the NHS weekly limit?',
        a: 'The NHS advises not regularly drinking more than 14 units a week, spreading it over 3 or more days, and having several drink-free days. UK units differ from US standard drinks.',
      },
      {
        q: 'Is it safe to drink every night?',
        a: 'NIAAA says the less alcohol, the better, and the NHS advises several drink-free days each week for people who want to cut down. If you cannot skip a night, speak to a doctor.',
      },
    ],
    related: ['alcohol-free-days', 'gray-area-drinking', 'sober-curious'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'how-to-stop-drinking-wine-every-night',
    metaTitle: 'How to Stop Drinking Wine Every Night: A Practical Plan',
    metaDescription:
      'Is a glass of wine every night too much? What one glass really counts as, how it compares with NIAAA and NHS guidance, and a practical plan to cut back or stop.',
    h1: 'How to stop drinking wine every night: what it counts as, and a plan',
    dek: 'A glass of wine most nights can feel ordinary. Here is how to count what you actually pour, how that compares with official guidance, and how to break the nightly habit.',
    quickAnswer:
      'One standard US drink is 5 ounces of 12% wine, which holds 14 grams of alcohol [[niaaaStandard]]. Seven of those a week is 7 drinks. NIAAA defines heavy drinking for women as 4 or more drinks on any day or 8 or more in a week [[niaaaPatterns]], and a larger pour, such as 8 ounces, is 1.6 drinks, so nightly it comes to about 11 a week. The NHS advises several drink-free days each week for people cutting down [[nhs]]. If you drink every night and feel shaky or anxious when you skip, speak to a doctor before stopping [[medline]].',
    kicker: 'Guide',
    keywords: ['how to stop drinking wine every night', 'how to stop drinking wine', 'is drinking wine every night bad', 'wine every night', 'drinking wine every night', 'how to cut back on wine'],
    heroAlt: 'A single wine glass with a measuring line marking one standard pour',
    sources: ['niaaaStandard', 'niaaaPatterns', 'nhs', 'medline', 'niaaaUrges', 'samhsa', 'navigator'],
    sections: [
      {
        id: 'count',
        h2: 'What your nightly glass actually counts as',
        blocks: [
          {
            t: 'p',
            x: 'NIAAA defines one US standard drink as about 14 grams of pure alcohol, which is 5 fluid ounces of wine at 12% alcohol by volume [[niaaaStandard]]. Most home pours are bigger than that. This is arithmetic on those figures, with illustrative pour sizes:',
          },
          {
            t: 'table',
            caption: 'Illustrative. Based on 5 fl oz of 12% wine being one standard drink [[niaaaStandard]]. Your wine’s strength and your glass will differ.',
            head: ['Your pour', 'Standard drinks per glass', 'Per week, one glass nightly'],
            rows: [
              ['5 fl oz', '1.0', '7'],
              ['8 fl oz', '1.6', 'about 11'],
              ['10 fl oz', '2.0', '14'],
            ],
          },
          {
            t: 'p',
            x: 'For women, NIAAA defines heavy drinking as 4 or more drinks on any day or 8 or more in a week [[niaaaPatterns]]. So a precisely measured 5-ounce glass every night sits just under that line, and a more generous pour is over it. NIAAA also says the less alcohol, the better, so being under a line is not the same as being risk-free.',
          },
        ],
      },
      {
        id: 'guidance',
        h2: 'What the NHS adds',
        blocks: [
          {
            t: 'p',
            x: 'The NHS advises not regularly drinking more than 14 units a week, spreading drinking over 3 or more days if you drink that much, and, if you want to cut down, trying to have several drink-free days each week [[nhs]]. Drinking every night is the opposite of that last point. It is UK guidance and uses UK units, so use it for the pattern, not the number.',
          },
        ],
      },
      {
        id: 'safety',
        h2: 'Before you stop: can you skip a night?',
        blocks: [
          {
            t: 'p',
            x: 'A useful test is to skip one night and see how you feel. If you feel shaky, sweaty, anxious or cannot sleep, that is worth taking seriously. MedlinePlus lists those among alcohol withdrawal symptoms, which can start within 8 hours of the last drink [[medline]].',
          },
          { t: 'callout', kind: 'safety', title: 'If you drink every night and feel unwell when you skip, see a doctor first', x: SAFETY_WITHDRAWAL },
        ],
      },
      {
        id: 'plan',
        h2: 'A practical plan',
        blocks: [
          {
            t: 'p',
            x: 'This is general advice, not medical guidance:',
          },
          {
            t: 'ol',
            items: [
              '**Measure for a week.** Pour your usual glass into a measuring jug once and see what it really is. Many people are surprised.',
              '**Pick drink-free nights.** Start with two a week, then three. Choose nights that are easiest, such as a busy evening.',
              '**Swap the ritual.** The cue is usually cooking or the end of the workday. Keep the ritual and change the drink: sparkling water with citrus, tea, a mocktail. See our guide to what to do instead of drinking.',
              '**Do not stock the extras.** Buy the bottle you will drink, not a box.',
              '**Plan for the urge.** NIAAA lists riding the urge out, distracting yourself with a healthy activity and leaving the situation [[niaaaUrges]]. Our urge surfing guide has a step-by-step version.',
              '**Track the nights.** Tick each drink-free night on a calendar or in an app. Our printable sobriety calendar and alcohol-free days guide help.',
            ],
          },
        ],
      },
      {
        id: 'help',
        h2: 'When to get help',
        blocks: [
          {
            t: 'p',
            x: 'If you have tried to cut down and could not, or you cannot skip a night, talk to a doctor. The NIAAA Alcohol Treatment Navigator helps adults find evidence-based care [[navigator]], and the SAMHSA National Helpline (1-800-662-4357) is free, confidential and open 24/7 [[samhsa]].',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Is a glass of wine every night too much?',
        a: 'A measured 5-ounce glass is one standard drink, so seven a week is under NIAAA’s heavy-drinking line for women of 8 a week. A larger pour exceeds it, and NIAAA says the less alcohol, the better. The NHS advises several drink-free days a week.',
      },
      {
        q: 'How many standard drinks is a large glass of wine?',
        a: 'About 1.6 for an 8-ounce pour of 12% wine, and 2 for 10 ounces, based on NIAAA’s definition of 5 ounces as one standard drink. Wine strength varies.',
      },
      {
        q: 'How do I stop drinking wine every night?',
        a: 'Measure your real pour, pick drink-free nights, swap the ritual for another drink, do not stock extra bottles, plan for urges and track your nights. If you feel unwell when you skip a night, see a doctor first.',
      },
      {
        q: 'Is it dangerous to stop drinking wine suddenly?',
        a: 'It can be if you drink heavily or every night. Withdrawal symptoms include shakiness, sweating, anxiety and, in severe cases, seizures. Speak to a doctor before stopping.',
      },
    ],
    related: ['how-much-alcohol-is-too-much-for-women', 'alcohol-free-days', 'what-to-do-instead-of-drinking'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'alcohol-and-weight',
    metaTitle: 'Alcohol and Weight: Calories, Gain and Quitting',
    metaDescription:
      'How many calories are in a standard drink, what research says about alcohol and weight gain, and what a month without alcohol did to weight in one study.',
    h1: 'Alcohol and weight: calories, weight gain, and what quitting does',
    dek: 'Alcohol has calories, but the research on weight is less simple than the headlines. Here is the arithmetic, what studies found, and what quitting can and cannot do.',
    quickAnswer:
      'Alcohol provides 7 calories per gram [[traversy]], and a US standard drink holds 14 grams of alcohol [[niaaaStandard]], so a standard drink has about 98 calories before any mixer. Research is mixed: a review found light-to-moderate drinking is not consistently linked to weight gain, while heavy drinking is more consistently linked to it [[traversy]]. In a BMJ Open study, 94 people who abstained for a month had a 1.5% fall in body weight, and 54% of Dry January participants self-reported losing weight [[bmj]] [[acuk]].',
    kicker: 'Explainer',
    keywords: ['alcohol and weight gain', 'weight loss after quitting alcohol', 'quit drinking weight loss', 'calories in alcohol', 'lose weight by not drinking', 'does alcohol make you gain weight'],
    heroAlt: 'A simple balance scale with a wine glass on one side and a bloom on the other',
    sources: ['traversy', 'niaaaStandard', 'niaaaCalc', 'bmj', 'acuk', 'niaaaPatterns', 'medline', 'samhsa'],
    sections: [
      {
        id: 'calories',
        h2: 'The calorie arithmetic',
        blocks: [
          {
            t: 'p',
            x: 'A review on alcohol and obesity reports that alcohol carries 7 kilocalories per gram [[traversy]]. NIAAA defines a US standard drink as about 14 grams of pure alcohol [[niaaaStandard]]. Multiply the two and one standard drink has about 98 calories from the alcohol alone. That is arithmetic on those two figures, and it leaves out sugar and mixers, which add more. NIAAA offers a free calorie calculator that counts the calories in the drinks you have each week [[niaaaCalc]].',
          },
          {
            t: 'table',
            caption: 'Alcohol calories only, using 14 g per standard drink and 7 kcal per gram. Mixers and sugar are extra.',
            head: ['Standard drinks per week', 'Alcohol calories per week'],
            rows: [
              ['3', 'about 294'],
              ['7', 'about 686'],
              ['14', 'about 1,372'],
            ],
          },
        ],
      },
      {
        id: 'evidence',
        h2: 'What the research says about weight gain',
        blocks: [
          {
            t: 'p',
            x: 'Calories in does not automatically mean weight gained. The review found recent prospective studies generally show light-to-moderate alcohol intake is not associated with gaining body fat, while heavy drinking is more consistently related to weight gain. Experimental evidence is mixed. The authors concluded alcohol may be a risk factor for obesity in some people, and noted that people who drink moderate amounts often have healthier lifestyles overall, which can muddy the picture [[traversy]].',
          },
          {
            t: 'p',
            x: 'In plain terms: the effect varies by person and by how much they drink. If you drink heavily, which NIAAA defines for women as 4 or more drinks on any day or 8 or more a week [[niaaaPatterns]], cutting down is more likely to show up on the scale.',
          },
        ],
      },
      {
        id: 'quitting',
        h2: 'What happened when people quit for a month',
        blocks: [
          {
            t: 'p',
            x: 'In a BMJ Open study, 94 people who had been drinking about 18 standard drinks a week abstained for a month. Their weight fell by 1.5%, a significant change [[bmj]]. That is small: for someone who weighs 70 kg (about 154 lb), 1.5% is roughly 1 kg. It was observational, and the group excluded people with liver disease or alcohol dependence [[bmj]].',
          },
          { t: 'chart', id: 'bmj' },
          {
            t: 'p',
            x: 'On what people say, Alcohol Change UK’s summary of a 2019 Dry January evaluation reports that 54% of participants lost weight [[acuk]]. That is self-reported by people who chose to take part, so treat it as experience, not a measurement.',
          },
        ],
      },
      {
        id: 'honest',
        h2: 'The honest takeaway',
        blocks: [
          {
            t: 'ul',
            items: [
              '**Quitting alcohol is not a weight-loss plan.** The change in the one study we cite was small.',
              '**The more you drink, the more it may show.** The evidence links heavy drinking most consistently to weight gain.',
              '**The effects are not only on the scale.** The same study found falls in insulin resistance and blood pressure.',
              '**Watch what replaces the drink.** If an evening drink becomes an evening snack, the calories can move rather than disappear. That is a practical observation, not a research finding.',
            ],
          },
          { t: 'callout', kind: 'safety', title: 'Heavy drinkers: speak to a doctor before stopping', x: SAFETY_WITHDRAWAL },
        ],
      },
    ],
    faqs: [
      {
        q: 'How many calories are in a standard drink?',
        a: 'About 98 from the alcohol alone: alcohol has 7 calories per gram and a US standard drink holds 14 grams. Sugar and mixers add more.',
      },
      {
        q: 'Does alcohol make you gain weight?',
        a: 'It can, in some people. A review found light-to-moderate drinking is not consistently linked to weight gain, while heavy drinking is more consistently linked to it, and noted that findings are mixed.',
      },
      {
        q: 'Will I lose weight if I quit drinking?',
        a: 'Maybe a little. In a BMJ Open study, 94 people who abstained for a month had a 1.5% fall in body weight. It varies, and quitting alcohol is not a weight-loss plan.',
      },
      {
        q: 'How much weight do people lose in Dry January?',
        a: 'In a 2019 evaluation summarised by Alcohol Change UK, 54% of participants self-reported losing weight. The amount was not stated in our source.',
      },
    ],
    related: ['benefits-of-quitting-alcohol', 'how-to-stop-drinking-wine-every-night', 'dry-january-guide'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'drinking-alone',
    metaTitle: 'Is Drinking Alone a Problem? What Research Shows',
    metaDescription:
      'Is it bad to drink alone? What a meta-analysis found about solitary drinking and alcohol problems, why context matters, and questions to ask yourself.',
    h1: 'Is drinking alone a problem? What the research shows',
    dek: 'Drinking alone is common, and it is not a diagnosis. But research does link it to drinking more and drinking to cope. Here is what the evidence says, and what to ask yourself.',
    quickAnswer:
      'Drinking alone is common: in a meta-analysis of studies of adults, its prevalence was generally in the 30 to 40% range. It found a small positive association between solitary drinking and alcohol problems (r = 0.15), a larger one with how much people drink (r = 0.25) and with drinking to cope (r = 0.24), and no link to drinking for enjoyment [[solitary]]. It is an association, not proof of cause, and it is not a diagnosis. If it is part of a pattern you are uneasy about, speak to a doctor.',
    kicker: 'Explainer',
    keywords: ['drinking alone', 'is drinking alone bad', 'is it ok to drink alone', 'solitary drinking', 'drinking alone at home', 'drinking alone alcoholic'],
    heroAlt: 'A single chair and glass beside a window, with a small bloom on the sill',
    sources: ['solitary', 'niaaaPatterns', 'niaaaSupport', 'medline', 'samhsa', 'navigator'],
    sections: [
      {
        id: 'common',
        h2: 'How common it is',
        blocks: [
          {
            t: 'p',
            x: 'A systematic review and meta-analysis of adult solitary drinking, by Skrzynski and Creswell in Addiction, found that nearly all studies defined it as drinking while physically alone, and that prevalence was generally in the 30 to 40% range. Men were more likely than women to report drinking alone, and married people were less likely than unmarried people [[solitary]]. So if you sometimes pour a glass at home alone, you are in large company.',
          },
        ],
      },
      {
        id: 'research',
        h2: 'What the link to problems looks like',
        blocks: [
          {
            t: 'table',
            caption: 'Meta-analytic correlations (r) from Skrzynski and Creswell. Higher means a stronger association. Pooled across studies that varied a lot.',
            head: ['What solitary drinking was linked to', 'Correlation (r)', 'Plain meaning'],
            rows: [
              ['How much people drink', '0.25 [[solitary]]', 'A modest link'],
              ['Alcohol problems', '0.15 [[solitary]]', 'A small link'],
              ['Drinking to cope (negative reinforcement)', '0.24 [[solitary]]', 'A modest link'],
              ['Drinking for enjoyment (positive reinforcement)', '0.02 [[solitary]]', 'No meaningful link'],
            ],
          },
          {
            t: 'p',
            x: 'The authors concluded that solitary drinking appears to have a small positive association with alcohol problems [[solitary]]. Two cautions. These are correlations from observational studies, so they do not show that drinking alone causes problems. And the studies differed a lot from one another, so the numbers are rough. What the pattern suggests is that the reason matters more than the setting: drinking alone to cope tracks with more trouble than drinking alone because you enjoy a glass of wine.',
          },
        ],
      },
      {
        id: 'questions',
        h2: 'Questions worth asking yourself',
        blocks: [
          {
            t: 'ul',
            items: [
              'Do I drink alone to switch off stress, anxiety or loneliness, or because I enjoy it?',
              'Do I drink more when I am alone than with other people?',
              'Do I hide how much I drink, or feel guilty afterwards?',
              'Could I skip a night without feeling anxious or unwell?',
              'What would I do instead if the glass was not an option?',
            ],
          },
          {
            t: 'p',
            x: 'These are prompts, not a screening tool. Several “yes” answers are a reason to look closer at your pattern. Our guides to gray area drinking and counting your week can help.',
          },
        ],
      },
      {
        id: 'steps',
        h2: 'If you want to change it',
        blocks: [
          {
            t: 'ul',
            items: [
              '**Notice the trigger.** What time is it, how are you feeling, what happened before?',
              '**Plan the first hour.** Call someone, walk, cook, take a bath. See what to do instead of drinking.',
              '**Make solo evenings less empty.** A standing call, a class, a project.',
              '**Track it.** A few weeks of notes on when and why you drink alone is informative.',
            ],
          },
        ],
      },
      {
        id: 'help',
        h2: 'When to talk to someone',
        blocks: [
          {
            t: 'p',
            x: 'NIAAA defines heavy drinking for women as 4 or more drinks on any day or 8 or more in a week [[niaaaPatterns]]. If you are over that, or you feel unwell when you stop, speak to a doctor, and do not stop suddenly if you drink heavily [[medline]]. NIAAA advises seeing a doctor or mental health professional if anxiety or depression persists or gets worse [[niaaaSupport]]. The NIAAA Alcohol Treatment Navigator [[navigator]] and the SAMHSA National Helpline (1-800-662-4357, free, confidential, 24/7) [[samhsa]] can point you to help.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Is drinking alone a sign of alcoholism?',
        a: 'Not by itself. A meta-analysis found solitary drinking has a small positive association with alcohol problems, and that prevalence among adults is generally 30 to 40%. The reason you drink alone matters more than the setting.',
      },
      {
        q: 'Is it bad to drink alone at home?',
        a: 'Research links drinking alone with drinking more and with drinking to cope, but not with drinking for enjoyment. It is an association, not proof of cause. If you are uneasy about your pattern, talk to a doctor.',
      },
      {
        q: 'Do more men or women drink alone?',
        a: 'The meta-analysis found men were generally more likely than women to report drinking alone.',
      },
      {
        q: 'How do I stop drinking alone?',
        a: 'Notice the trigger, plan the first hour of the evening, make solo evenings less empty and track when and why you drink. If you cannot cut down, speak to a doctor.',
      },
    ],
    related: ['gray-area-drinking', 'how-to-stop-drinking-wine-every-night', 'hangxiety'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'sleep-after-quitting-alcohol',
    metaTitle: "Can't Sleep After Quitting Drinking? What to Know",
    metaDescription:
      'Why sleep can get worse before it gets better after you stop drinking, how long it can last according to MedlinePlus, what helps, and when to see a doctor.',
    h1: 'Sleep after quitting alcohol: why it can get worse first',
    dek: 'Many people expect better sleep the moment they stop drinking, then lie awake. Here is why that happens, what the sources say about how long, and what is worth trying.',
    quickAnswer:
      'Sleep problems are common after stopping drinking. Alcohol can make you drowsy at first and then fragment sleep later in the night, and it can reduce REM sleep [[sleep]]. MedlinePlus says sleep disturbance after stopping can last for months for some people [[medline]]. Many people do report better sleep eventually: 70% of Dry January participants said they slept better, though that is self-reported [[acuk]]. If insomnia persists, tell a doctor.',
    kicker: 'Guide',
    keywords: ['sleep after quitting alcohol', "can't sleep after quitting drinking", 'insomnia after quitting alcohol', 'alcohol and sleep', 'sleep problems after stopping drinking'],
    heroAlt: 'A crescent moon over a calm bed with a small bloom on the pillow',
    sources: ['sleep', 'medline', 'acuk', 'niaaaSupport', 'samhsa'],
    sections: [
      {
        id: 'why',
        h2: 'Why alcohol and sleep are tangled',
        blocks: [
          {
            t: 'p',
            x: 'Alcohol is a sedative, so many people use it to fall asleep. But the benefit does not last the night: a review of alcohol and the sleeping brain reports that alcohol can fragment sleep in the second half of the night and can reduce REM sleep [[sleep]]. That means regular evening drinking can quietly damage your sleep while feeling like it helps. When you stop, your body is adjusting to sleeping without it.',
          },
        ],
      },
      {
        id: 'how-long',
        h2: 'How long can poor sleep last?',
        blocks: [
          {
            t: 'p',
            x: 'We cannot give a reliable number, and we will not invent one. MedlinePlus says that for people who go through alcohol withdrawal, symptoms peak between 24 and 72 hours but may persist for weeks, and that sleep disturbance and mood changes can last for months [[medline]]. That is the honest range: for some people a few nights, for others much longer.',
          },
          {
            t: 'p',
            x: 'The good news is about direction. In Alcohol Change UK’s summary of a 2019 Dry January evaluation, 70% of participants said they slept better [[acuk]]. This is self-reported by people who chose to take part, so it is not a guarantee, but it matches what many people describe: it gets worse, then it gets better.',
          },
        ],
      },
      {
        id: 'try',
        h2: 'What is worth trying',
        blocks: [
          {
            t: 'p',
            x: 'This is general advice, not medical guidance:',
          },
          {
            t: 'ul',
            items: [
              '**Keep a steady schedule.** Same bedtime and wake time, including weekends.',
              '**Make the evening ritual do the job the drink did.** A bath, tea, a book, gentle stretching, a fixed wind-down hour. See what to do instead of drinking.',
              '**Watch caffeine and screens late in the day.**',
              '**Move during the day.** A walk or workout helps many people sleep.',
              '**Do not fight the clock.** If you are awake for a long time, get up, do something quiet, and go back when you feel sleepy.',
              '**Track it.** A short daily check-in on sleep and mood shows whether things are moving. Sober Girl has one, and our sobriety calculator shows how many days in you are.',
            ],
          },
          { t: 'callout', kind: 'safety', title: 'If you drink heavily, do not stop suddenly on your own', x: SAFETY_WITHDRAWAL },
        ],
      },
      {
        id: 'help',
        h2: 'When to see a doctor',
        blocks: [
          {
            t: 'p',
            x: 'If sleep problems persist or are affecting your mood or your day, tell a doctor. NIAAA advises seeing a doctor or mental health professional if symptoms such as depression or anxiety persist or get worse [[niaaaSupport]]. The SAMHSA National Helpline (1-800-662-4357) is free, confidential and open 24/7 [[samhsa]].',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Why can’t I sleep after quitting drinking?',
        a: 'Alcohol disrupts sleep, and your body has to adjust to sleeping without it. MedlinePlus notes sleep disturbance after stopping can last for months in some people.',
      },
      {
        q: 'How long does insomnia last after quitting alcohol?',
        a: 'There is no reliable single figure. MedlinePlus says withdrawal symptoms peak at 24 to 72 hours and may persist for weeks, and sleep disturbance can last months. If it persists, see a doctor.',
      },
      {
        q: 'Does sleep get better after you stop drinking?',
        a: 'Many people say so. In a 2019 Dry January evaluation, 70% of participants self-reported better sleep. It can get worse before it gets better.',
      },
      {
        q: 'Does alcohol help you sleep?',
        a: 'It can make you drowsy at first, but it can fragment sleep later in the night and reduce REM sleep.',
      },
    ],
    related: ['benefits-of-quitting-alcohol', 'sobriety-milestones', 'what-to-do-instead-of-drinking'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'alcohol-and-depression',
    metaTitle: 'Alcohol and Depression: What the Research Says',
    metaDescription:
      'How alcohol and depression are linked, what a review found about the direction of the link, what it means if you drink to cope, and where to get help.',
    h1: 'Alcohol and depression: what the research says',
    dek: 'Alcohol and low mood often show up together. Here is what the research says about the link, what it does not settle, and where to turn if you are struggling.',
    quickAnswer:
      'A review in Addiction found that having either alcohol use disorder or major depression roughly doubled the risk of the other, with pooled odds ratios from 2.00 to 2.09. It judged that the evidence points to a causal link, and that the more plausible direction is alcohol use increasing the risk of depression rather than the reverse [[boden]]. This is about alcohol use disorder, not a drink now and then. If you are struggling, speak to a doctor, and if you are in crisis, call or text 988 in the US [[lifeline988]].',
    kicker: 'Explainer',
    keywords: ['alcohol and depression', 'drinking and depression', 'does alcohol cause depression', 'depression after quitting drinking', 'drinking to cope'],
    heroAlt: 'Two overlapping circles representing alcohol and mood, with a small bloom in the overlap',
    sources: ['boden', 'medline', 'niaaaSupport', 'lifeline988', 'samhsa', 'navigator'],
    sections: [
      {
        id: 'crisis',
        h2: 'If you need help right now',
        blocks: [
          {
            t: 'callout',
            kind: 'safety',
            title: 'In crisis or thinking about harming yourself?',
            x: 'In the US, call or text 988 to reach the 988 Suicide & Crisis Lifeline, free, confidential, and open 24/7 [[lifeline988]]. NIAAA advises that if you are having suicidal thoughts you call your health care provider or go to the nearest emergency room right away [[niaaaSupport]].',
          },
        ],
      },
      {
        id: 'link',
        h2: 'What the research found',
        blocks: [
          {
            t: 'p',
            x: 'Boden and Fergusson reviewed the literature on alcohol use disorders (AUD) and major depression in the journal Addiction. They found that the presence of either disorder doubled the risk of the second, with pooled adjusted odds ratios from 2.00 to 2.09. They concluded that common causes could not fully account for the link, and that the disorders appear to be linked causally. The more plausible direction, they said, is that alcohol use increases the risk of depression rather than depression increasing alcohol use, with possible mechanisms including neurophysiological and metabolic changes from alcohol [[boden]].',
          },
        ],
      },
      {
        id: 'limits',
        h2: 'What that does and does not tell you',
        blocks: [
          {
            t: 'ul',
            items: [
              '**It is about alcohol use disorder and major depression**, not about an occasional drink or low mood. It does not show that every drinker will become depressed.',
              '**It is a review of observational studies.** The authors call for more research, including on gender differences [[boden]].',
              '**Both directions can be true for different people.** Some people drink to cope with low mood, and alcohol can then deepen it.',
              '**Depression is treatable**, and so is alcohol use disorder, including when they occur together.',
            ],
          },
        ],
      },
      {
        id: 'cope',
        h2: 'If you drink to cope',
        blocks: [
          {
            t: 'p',
            x: 'If a drink is how you get through low moods, stress or loneliness, that is worth noticing, because relief that works in the evening can leave you lower the next day. Tracking helps: note your mood each morning and whether you drank the night before. After a few weeks you can see whether the two move together. Try a month off to compare, with the guidance in our Dry January and Sober October guides.',
          },
          {
            t: 'p',
            x: 'Anxiety is also a recognised symptom of alcohol withdrawal, and sleep and mood changes can last for months after stopping [[medline]]. So feeling low or anxious early on does not mean it will not get better, but it is a good reason to tell a doctor.',
          },
        ],
      },
      {
        id: 'help',
        h2: 'Where to get help',
        blocks: [
          {
            t: 'ul',
            items: [
              '**A doctor or mental health professional.** NIAAA advises seeing one if symptoms of depression or anxiety persist or get worse [[niaaaSupport]].',
              '**If you drink heavily,** do not stop suddenly on your own, because withdrawal can be dangerous [[medline]].',
              '**Find treatment.** The NIAAA Alcohol Treatment Navigator helps adults find evidence-based care [[navigator]].',
              '**The SAMHSA National Helpline:** 1-800-662-4357, free, confidential, 24/7 [[samhsa]].',
              '**988 Suicide & Crisis Lifeline:** call or text 988 [[lifeline988]].',
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Does alcohol cause depression?',
        a: 'A review in Addiction found alcohol use disorder and major depression roughly double each other’s risk, and judged the more plausible direction to be that alcohol use increases the risk of depression. It concerns alcohol use disorder rather than occasional drinking.',
      },
      {
        q: 'Why do I feel depressed after quitting drinking?',
        a: 'Mood and sleep changes can occur after stopping, and MedlinePlus says they can last for months in some people. If they persist or get worse, see a doctor or mental health professional.',
      },
      {
        q: 'What should I do if I am thinking about suicide?',
        a: 'In the US, call or text 988, the 988 Suicide & Crisis Lifeline, or go to the nearest emergency room. It is free, confidential and open 24/7.',
      },
      {
        q: 'Can I treat depression and drinking together?',
        a: 'Yes, and a doctor can help with both. Do not stop suddenly on your own if you drink heavily.',
      },
    ],
    related: ['hangxiety', 'sleep-after-quitting-alcohol', 'gray-area-drinking'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'sober-holidays',
    metaTitle: 'Sober Holidays: Halloween to New Year’s Eve Plan',
    metaDescription:
      'A practical plan for staying alcohol-free through Halloween, Thanksgiving, December parties and New Year’s Eve: what to say, what to bring, how to leave.',
    h1: 'Sober holidays: a plan from Halloween to New Year’s Eve',
    dek: 'The holiday season is the hardest stretch of the year for many people who are not drinking. Here is a plan by event, with scripts, and what to do when you are caught off guard.',
    quickAnswer:
      'The simplest way to get through holiday events without drinking is to plan each one in advance: what you will drink, what you will say, who knows, and when you will leave. NIAAA recommends riding out urges, reminding yourself of your reasons, talking to someone, distracting yourself and leaving a tempting situation quickly [[niaaaUrges]]. These are practical suggestions rather than research findings. If you drink heavily, speak to a doctor before stopping suddenly [[medline]].',
    kicker: 'Guide',
    keywords: ['sober holidays', 'sober thanksgiving', 'sober christmas', 'sober new years eve', 'sober halloween', 'how to stay sober during the holidays'],
    heroAlt: 'A row of five holiday calendar markers from Halloween to New Year with a bloom at the end',
    sources: ['niaaaUrges', 'medline', 'samhsa'],
    sections: [
      {
        id: 'why',
        h2: 'Why the holidays are hard',
        blocks: [
          {
            t: 'p',
            x: 'Holidays stack the usual triggers: more social events, more alcohol on offer, family tension, tiredness and the sense that everyone else is drinking. We are not citing a statistic on how much this affects people. The practical point is that it is predictable, and what is predictable can be planned for. NIAAA describes urges to drink as short-lived, predictable and controllable [[niaaaUrges]].',
          },
        ],
      },
      {
        id: 'before',
        h2: 'Before the season starts',
        blocks: [
          {
            t: 'ol',
            items: [
              '**Open the calendar.** List every event from now to January 2.',
              '**Mark the three hardest.** Usually a family dinner, a work party and a New Year’s Eve.',
              '**Write your reason** in one sentence and keep it on your phone.',
              '**Tell one person** who will check in after the events.',
              '**Start your count.** Use our sobriety calculator or printable calendar to make the streak visible.',
            ],
          },
        ],
      },
      {
        id: 'events',
        h2: 'Event by event',
        blocks: [
          { t: 'h3', x: 'Halloween' },
          {
            t: 'p',
            x: 'Parties and trick-or-treating with drinks are the classic case. Bring your own alcohol-free drink in a festive glass, and go in costume as someone who has a reason to leave by 10.',
          },
          { t: 'h3', x: 'Thanksgiving and family dinners' },
          {
            t: 'p',
            x: 'Decide beforehand who you will tell, and what you will say if someone pours you a glass. Offer to help in the kitchen, which keeps your hands busy. Drive yourself, so you can leave when you need to.',
          },
          { t: 'h3', x: 'December parties and work events' },
          {
            t: 'p',
            x: 'Arrive with a drink in your hand, such as sparkling water with lime, so you are not offered one. Decide an end time. Eat before you go.',
          },
          { t: 'h3', x: 'Christmas and family stays' },
          {
            t: 'p',
            x: 'Plan time on your own: a walk, a call, an early night. If you are staying with family, find your own space and keep your phone in reach so you can message your person.',
          },
          { t: 'h3', x: 'New Year’s Eve' },
          {
            t: 'p',
            x: 'Midnight toasts are the hard moment. Pick your glass in advance, so you are holding something. Consider hosting a small gathering of your own, or a plan that ends well before the late hours. January 1 is also a natural start for a month off: see our Dry January guide.',
          },
        ],
      },
      {
        id: 'say',
        h2: 'What to say when you are offered a drink',
        blocks: [
          {
            t: 'ul',
            items: [
              '“No thanks, I am good with this.” (Hold up your glass.)',
              '“I am not drinking tonight.” Short and calm. You do not owe an explanation.',
              '“I am taking a break from alcohol.” Honest and usually ends the conversation.',
              'If someone pushes: “I would rather not. Can we talk about something else?”',
            ],
          },
          {
            t: 'p',
            x: 'You are allowed to leave. Plan the exit, such as “I have an early start”, so you are not inventing one under pressure.',
          },
        ],
      },
      {
        id: 'urge',
        h2: 'If the urge hits mid-event',
        blocks: [
          {
            t: 'p',
            x: 'Use the strategies NIAAA lists: ride the urge out, remind yourself of your reasons, talk it through with someone you trust, distract yourself with a healthy activity, challenge the thought behind it, or leave quickly [[niaaaUrges]]. Step outside for ten minutes. Our urge surfing guide has a step-by-step version, and Sober Girl’s Craving SOS has a breathing exercise and a 10-minute timer.',
          },
        ],
      },
      {
        id: 'help',
        h2: 'If it goes wrong, or you need support',
        blocks: [
          {
            t: 'p',
            x: 'A slip is information, not a verdict. Note what led to it and carry on. If you drink heavily, do not stop suddenly on your own [[medline]]. The SAMHSA National Helpline (1-800-662-4357) is free, confidential and open 24/7 [[samhsa]].',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'How do I stay sober during the holidays?',
        a: 'Plan each event in advance: what you will drink, what you will say, who knows and when you will leave. Drive yourself, arrive with an alcohol-free drink and have a plan for urges.',
      },
      {
        q: 'What do I say when someone offers me a drink?',
        a: 'Something short and calm, such as “No thanks, I am good with this” or “I am not drinking tonight.” You do not owe an explanation.',
      },
      {
        q: 'How do I get through New Year’s Eve sober?',
        a: 'Choose your midnight glass in advance, so you are holding something, keep the plan to a manageable length, and consider starting a month off on January 1.',
      },
      {
        q: 'What if I slip over the holidays?',
        a: 'Note what led to it and carry on. A slip does not erase your days. If you cannot stop once you start, speak to a doctor.',
      },
    ],
    related: ['dry-january-guide', 'how-to-stop-alcohol-cravings', 'what-to-do-instead-of-drinking'],
  },
];

/** Which source each chart cites. Charts.tsx holds the data; this keeps numbering in sync. */
export const CHART_SOURCE: Record<string, string> = { gallup: 'gallup', bmj: 'bmj', dryjan: 'acuk' };

function citedIds(a: Article): string[] {
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
      else if (b.t === 'table') b.rows.flat().forEach(add);
      else if (b.t === 'chart') {
        const id = CHART_SOURCE[b.id];
        if (!seen.includes(id)) seen.push(id);
      }
    }
  }
  return seen;
}


// Every guide ends with an honest "is it for you" block and carries one inline prompt after its first section.
for (const a of ARTICLES) {
  a.sections.splice(1, 0, {
    id: 'try-it',
    h2: 'Track it in Sober Girl',
    blocks: [
      {
        t: 'cta',
        title: 'A calm, private place to count your days',
        x: 'Sober Girl is an app for women, on Android now and coming soon to iPhone: a day counter, money saved, a daily check-in, Craving SOS and a tree that grows as you stay sober. Core tools are free.',
      },
    ],
  });
  a.sections.push({ id: 'is-it-for-you', h2: 'Is Sober Girl right for you?', blocks: [{ t: 'fit' }] });
}

// Number sources by first appearance, and fail the build on uncited or missing ones.
for (const a of ARTICLES) {
  const cited = citedIds(a);
  const missing = cited.filter((id) => !a.sources.includes(id));
  const unused = a.sources.filter((id) => !cited.includes(id));
  if (missing.length || unused.length) {
    throw new Error(`${a.slug}: missing sources [${missing}] unused sources [${unused}]`);
  }
  a.sources = cited;
}

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
