import type { Article } from '../articles';
import { SAFETY_WITHDRAWAL, drinksTable, figure, moneyTable } from './shared';

// Pages built from the 2026-10-10 keyword research (sobergirl-traffic-plan.md). Each one targets a
// verified query cluster and sends the reader to a tool or to the app. Every claim cites a source.

const page = (a: Omit<Article, 'sources' | 'kicker'> & { kicker?: string }): Article => ({ kicker: 'Guide', sources: [], ...a });

export const GOLDEN_ARTICLES: Article[] = [
  /* ================================================================ hub: what happens */
  page({
    slug: 'what-happens-when-you-stop-drinking-alcohol',
    kicker: 'Timeline',
    metaTitle: 'What Happens When You Stop Drinking Alcohol: A Timeline',
    metaDescription:
      'What happens when you stop drinking alcohol, from 8 hours to a year: withdrawal timing, sleep, a one-month study, and where the evidence stops. Sourced.',
    h1: 'What happens when you stop drinking alcohol: a timeline from 8 hours to a year',
    dek: 'Most timelines online mix a few studies with guesswork. This one lists what each source supports, links to a page for each stage, and says where the evidence stops.',
    quickAnswer:
      'What happens depends on how much you drank and for how long. MedlinePlus says withdrawal symptoms usually start within 8 hours of the last drink and tend to peak by 24 to 72 hours, may go on for weeks, and that sleep and mood changes can last for months [[medline]]. After one month without alcohol, a BMJ Open study of 94 people found insulin resistance fell 25.9% and systolic blood pressure 6.6% [[bmj]]. After that the evidence is thin. This page covers each stage and says where it stops.',
    keywords: ['what happens when you stop drinking alcohol', 'what happens if you stop drinking alcohol', 'what happens to your body when you stop drinking', 'stop drinking alcohol benefits', 'quit drinking timeline', 'alcohol-free timeline'],
    heroAlt: 'A horizontal timeline of eight milestones from 8 hours to one year, ending in a bloom',
    sections: [
      {
        id: 'safety',
        h2: 'Before you read: a safety note',
        blocks: [{ t: 'callout', kind: 'safety', title: 'If you drink heavily or every day, speak to a doctor before you stop', x: SAFETY_WITHDRAWAL }],
      },
      {
        id: 'timeline',
        h2: 'The timeline at a glance',
        blocks: [
          {
            t: 'table',
            caption: 'Each row says what a source supports. Click through for the full page on that stage.',
            head: ['When', 'What is documented', 'Full page'],
            rows: [
              ['8 hours', 'Withdrawal symptoms usually begin within 8 hours of the last drink, though they can start days later [[medline]]', '[24 hours sober](/sobergirl/24-hours-sober)'],
              ['24 to 72 hours', 'Symptoms tend to peak [[medline]]. Delirium tremens, the severe form, most often starts 48 to 96 hours after the last drink [[medlineDT]]', '[3 days sober](/sobergirl/3-days-sober)'],
              ['1 week', 'Alcohol disrupts the second half of the night and reduces REM sleep [[sleep]], so sleep is often the first thing to shift', '[1 week sober](/sobergirl/1-week-sober)'],
              ['2 weeks', 'No trustworthy study at exactly 14 days. Sleep and mood changes can last for months [[medline]]', '[2 weeks sober](/sobergirl/2-weeks-sober)'],
              ['30 days', 'Insulin resistance, blood pressure and weight fell in 94 people after a month [[bmj]]. Dry January participants self-reported better sleep and more energy [[acuk]]', '[30 days sober](/sobergirl/30-days-sober)'],
              ['90 days', 'The end of the "initial" stage in NIAAA’s research definitions [[niaaaRecovery]]', '[90 days sober](/sobergirl/90-days-sober)'],
              ['6 months', 'Seven in ten Dry January participants were still drinking less riskily after six months [[acukAbout]]', '[6 months sober](/sobergirl/6-months-sober)'],
              ['1 year', 'The start of the "sustained" stage, which runs from 1 to 5 years [[niaaaRecovery]]', '[1 year sober](/sobergirl/1-year-sober)'],
            ],
          },
          figure(
            'what-happens-when-you-stop-drinking-alcohol-timeline',
            'Timeline of what is documented after you stop drinking alcohol: 8 hours, 3 days, 1 week, 2 weeks, 30 days, 90 days, 6 months and 1 year',
            'Timeline: what happens when you stop drinking alcohol',
            'Eight stages from 8 hours to a year, each with its own page.',
            1200,
            560,
          ),
        ],
      },
      {
        id: 'month',
        h2: 'The best-studied point: one month',
        blocks: [
          { t: 'chart', id: 'bmj' },
          {
            t: 'p',
            x: 'The BMJ Open study followed 94 healthy people who chose to abstain for a month and 47 who kept drinking. Insulin resistance, blood pressure, weight and two cancer-related growth factors all fell in the abstinence group, and the researchers found none of those changes was explained by diet, exercise or smoking [[bmj]]. It was observational, people chose their group, and it excluded people with liver disease or alcohol dependence [[bmj]]. A month is long enough for measurable changes in people who were not dependent on alcohol.',
          },
          {
            t: 'p',
            x: 'What people notice is a different list. In a 2019 Dry January evaluation, 70% said they slept better, 66% had more energy, 54% lost weight and 86% saved money [[acuk]]. These are self-reports from people who signed up, not a trial.',
          },
        ],
      },
      {
        id: 'depends',
        h2: 'Why it is different for different people',
        blocks: [
          {
            t: 'p',
            x: 'MedlinePlus says the risk of withdrawal rises with how often a person drinks, and that other medical problems can make symptoms more severe [[medline]]. Someone who drinks two glasses of wine most nights is in a different position from someone who drinks heavily every day, and a month off will look different for each. If you are unsure which group you are in, our guide to [how much alcohol is too much for a woman](/sobergirl/how-much-alcohol-is-too-much-for-women) explains the NIAAA definitions.',
          },
          {
            t: 'p',
            x: 'The liver is a good example of why dates are the wrong frame. A review in NIAAA’s journal says alcohol-related fatty liver can be reversed when drinking stops, while more advanced disease can stabilise with abstinence [[liver]]. It depends on the stage of disease, not the number of days.',
          },
        ],
      },
      {
        id: 'longer',
        h2: 'What stopping avoids over the long run',
        blocks: [
          {
            t: 'p',
            x: 'The long-run effects are risks that stop being added, not changes you can see. NIAAA says even one drink a day can raise a woman’s breast cancer risk by 5% to 15% compared with not drinking, and that women are more susceptible than men to alcohol-related heart disease [[niaaaWomen]]. No study gives a date when those risks fall back, so we do not pretend to. Our guide to the [benefits of quitting alcohol](/sobergirl/benefits-of-quitting-alcohol) covers what the evidence supports.',
          },
        ],
      },
      {
        id: 'unknown',
        h2: 'What we could not find',
        blocks: [
          {
            t: 'ul',
            items: [
              'A study that measured skin, hair or face changes at a specific day after stopping. Online "before and after" claims are anecdotes. See [alcohol face](/sobergirl/alcohol-face) for what is documented.',
              'A reliable date for when sleep returns to normal. MedlinePlus says changes can last for months [[medline]].',
              'A health change you can promise at 60 or 100 days. See [60 days sober](/sobergirl/60-days-sober) and [100 days sober](/sobergirl/100-days-sober) for what the habit research says.',
            ],
          },
        ],
      },
      {
        id: 'track',
        h2: 'See your own timeline',
        blocks: [
          {
            t: 'p',
            x: 'A published timeline cannot tell you what you will feel. Your own can: a daily check-in and, with Plus, a short journal note with a mood show how sleep and mood move, which memory does not. The [sobriety counter](/sobergirl/sobriety-counter) shows your days, hours and seconds, and the [calculator](/sobergirl/sobriety-calculator) shows what you have skipped.',
          },
        ],
      },
    ],
    faqs: [
      { q: 'What happens when you stop drinking alcohol?', a: 'It depends on how much you drank. For heavy drinkers, withdrawal symptoms usually start within 8 hours and peak by 24 to 72 hours, according to MedlinePlus. In a month-off study, insulin resistance, blood pressure and weight fell. Sleep and mood can take months to settle.' },
      { q: 'What happens to your body when you stop drinking after a month?', a: 'In a BMJ Open study of 94 people, insulin resistance fell 25.9%, systolic blood pressure 6.6% and weight 1.5% after a month without alcohol. It was observational and excluded people with alcohol dependence.' },
      { q: 'How long does it take for your body to recover from alcohol?', a: 'There is no single date. Withdrawal usually peaks within 72 hours, sleep and mood changes can last months, and the liver depends on the stage of disease: fatty liver can be reversed when drinking stops.' },
      { q: 'What are the benefits of stopping drinking alcohol?', a: 'Measured in a month-off study: lower insulin resistance, blood pressure and weight. Self-reported in Dry January: saving money, better sleep and more energy. Long term, you stop adding risks such as breast cancer, which NIAAA says rises 5% to 15% with one drink a day.' },
      { q: 'Is it safe to stop drinking suddenly?', a: 'Not always. If you drink heavily or every day, alcohol withdrawal can be dangerous and a doctor should be involved. MedlinePlus says to call 911 for seizures, fever, severe confusion, hallucinations or an irregular heartbeat.' },
    ],
    related: ['benefits-of-quitting-alcohol', 'sobriety-milestones', 'sobriety-counter'],
    shots: [
      { file: 'milestones', alt: 'Sober Girl milestones screen with badges from 1 to 365 days', title: 'Milestones in Sober Girl', caption: 'Nine badges from day 1 to day 365. Example data.' },
      { file: 'home', alt: 'Sober Girl home screen with days sober, money saved and a daily check-in', title: 'Your own timeline', caption: 'Days, savings and a one-tap daily check-in. Example data.' },
    ],
  }),

  /* ================================================================ tool: sobriety counter */
  page({
    slug: 'sobriety-counter',
    kicker: 'Tool',
    metaTitle: 'Sobriety Counter: Free Live Sober Days Counter',
    metaDescription:
      'Free live sobriety counter. Enter your sober date to see days, hours, minutes and seconds sober, weeks, money saved and your next milestone. Runs in your browser.',
    h1: 'Sobriety counter: your days, hours and seconds sober',
    dek: 'Enter your sober date and watch the count tick. It shows days, hours, minutes and seconds, what you have saved, and how far you are from your next milestone.',
    quickAnswer:
      'A sobriety counter counts the time since your sober date. Enter yours below to see days, hours, minutes and seconds ticking live, plus weeks, money saved if you add your weekly spend, and how far you are from the next of the nine milestone badges in the Sober Girl app (days 1, 3, 7, 14, 30, 60, 90, 180 and 365). It runs in your browser and stores nothing on a server. Bookmark the page after entering your date and the date is kept in the address. For a counter that lives on your phone, the app does the same with reminders and a daily check-in.',
    keywords: ['sobriety counter', 'sober counter', 'sobriety counter app', 'sober day counter', 'sober days counter', 'days sober counter', 'sober clock', 'sober streak counter'],
    heroAlt: 'Four counter tiles showing days, hours, minutes and seconds beside a small tree',
    sections: [
      {
        id: 'counter',
        h2: 'Your counter',
        blocks: [
          { t: 'p', x: 'Enter the date of your last drink, or the day you chose as day one. Add a time if you want the hours and seconds to be exact.' },
          { t: 'counter' },
          figure(
            'sobriety-counter-card',
            'Four counter tiles reading 92 days, 04 hours, 17 minutes and 38 seconds, with a progress bar toward the 180-day badge',
            'A sobriety counter in days, hours, minutes and seconds',
            'What the counter above looks like with a sober date entered. Example data.',
            1200,
            560,
          ),
        ],
      },
      {
        id: 'how',
        h2: 'How the count works',
        blocks: [
          {
            t: 'ul',
            items: [
              '**It counts the time since the date and time you enter.** A day is a full 24 hours. If you leave the time at midnight, the count starts at the beginning of that date.',
              '**Weeks are shown to one decimal place,** so the first days do not read as zero.',
              '**Money saved is weekly spend divided by 7, times your days,** and is only shown if you enter a spend.',
              '**The next milestone is the next badge in the Sober Girl app:** 1, 3, 7, 14, 30, 60, 90, 180 or 365 days.',
            ],
          },
          {
            t: 'p',
            x: 'If you are not sure which day to count from, see [how to count sober days](/sobergirl/how-to-count-sober-days). Twelve-step groups often mark 24 hours, then 30, 60 and 90 days and each year [[coinWiki]], so if you are in a group, use its convention.',
          },
        ],
      },
      {
        id: 'milestones',
        h2: 'The nine milestones in the app',
        blocks: [
          {
            t: 'table',
            caption: 'The badges and tree stages built into Sober Girl. The counter above uses the same days.',
            head: ['Day', 'Tree stage', 'What the page covers'],
            rows: [
              ['1', 'Sprout', '[24 hours sober](/sobergirl/24-hours-sober)'],
              ['3', 'Seedling', '[3 days sober](/sobergirl/3-days-sober)'],
              ['7', 'Sapling', '[1 week sober](/sobergirl/1-week-sober)'],
              ['14', 'Young tree', '[2 weeks sober](/sobergirl/2-weeks-sober)'],
              ['30', 'Budding tree', '[30 days sober](/sobergirl/30-days-sober)'],
              ['60', 'Blooming tree', '[60 days sober](/sobergirl/60-days-sober)'],
              ['90', 'Flowering tree', '[90 days sober](/sobergirl/90-days-sober)'],
              ['180', 'Grand tree', '[6 months sober](/sobergirl/6-months-sober)'],
              ['365', 'Ancient tree', '[1 year sober](/sobergirl/1-year-sober)'],
            ],
          },
        ],
      },
      {
        id: 'keep',
        h2: 'Keeping a counter',
        blocks: [
          {
            t: 'p',
            x: 'This page does not save your date on a server, which is good for privacy and bad for convenience: close the tab without bookmarking and it forgets. Three ways to keep a count:',
          },
          {
            t: 'ol',
            items: [
              '**Bookmark this page** after entering your date. The date goes into the address, on your device only.',
              '**Use the app.** Sober Girl keeps your date on your phone with no account, adds a daily check-in, a Craving SOS, money saved and the badges above. It is free to start, on Android now, with iPhone coming soon.',
              '**Write it down.** A date on a calendar or in a notes app is a counter. The number is just arithmetic.',
            ],
          },
        ],
      },
    ],
    faqs: [
      { q: 'How does a sobriety counter work?', a: 'It subtracts your sober date and time from the current time and shows the difference in days, hours, minutes and seconds. The one on this page updates every second and stores nothing on a server.' },
      { q: 'Does this counter save my sober date?', a: 'Not on a server. If you bookmark the page after entering your date, the date is kept in the web address on your own device.' },
      { q: 'Is there a free sobriety counter app?', a: 'Yes. Sober Girl’s counter, money saved, daily check-in, Craving SOS and milestone badges are free. It is on Android now, with iPhone coming soon.' },
      { q: 'What should I do if I slip and my counter has to restart?', a: 'Many people restart the count and keep a separate total of alcohol-free days. Our guide on lapse vs relapse explains why a slip is not the end of your progress.' },
      { q: 'Which day is day one?', a: 'Most people count from the first full day without a drink. Either convention works if you are consistent.' },
    ],
    related: ['how-to-count-sober-days', 'sobriety-calculator', 'sobriety-milestones'],
    shots: [
      { file: 'home', alt: 'Sober Girl home screen with a sober days counter, hours, money saved and a check-in button', title: 'The counter in Sober Girl', caption: 'The same count on your phone, with a daily check-in. Example data.' },
      { file: 'milestones', alt: 'Sober Girl milestone screen with nine badges from 1 to 365 days', title: 'Nine milestone badges', caption: 'Days 1, 3, 7, 14, 30, 60, 90, 180 and 365. Example data.' },
    ],
  }),

  /* ================================================================ relapse */
  page({
    slug: 'lapse-vs-relapse',
    kicker: 'Explainer',
    metaTitle: 'Lapse vs Relapse: What a Slip Means and What to Do Next',
    metaDescription:
      'Lapse vs relapse explained from NIAAA research: what each term means, why a slip is not an inevitable relapse, what to do in the first 24 hours, and your count.',
    h1: 'Lapse vs relapse: what a slip means, and what to do next',
    dek: 'You drank after a stretch without. Before you decide what it says about you, here is what the research distinguishes, and what NIAAA recommends doing next.',
    quickAnswer:
      'A lapse is a first violation of an abstinence goal, such as one drink. A relapse is a return to uncontrolled drinking or abandonment of the goal, according to an NIAAA journal overview of the relapse prevention model [[larimer]]. A lapse greatly raises the risk of eventual relapse, but the progression is not inevitable [[larimer]]. What seems to matter is the reaction: people who read a lapse as personal failure and feel guilt are more likely to keep drinking [[larimer]]. NIAAA’s advice is to stop right away, treat the next day as a fresh start and tell a supportive person [[niaaaEpisode]].',
    keywords: ['lapse vs relapse', 'alcohol relapse', 'i relapsed', 'slipped in sobriety', 'relapse after sobriety', 'what to do after a slip', 'drank after being sober'],
    heroAlt: 'A path that forks after one stumble: one branch dark with guilt, one lit and leading on',
    sections: [
      {
        id: 'terms',
        h2: 'Lapse and relapse, defined',
        blocks: [
          {
            t: 'table',
            caption: 'Wording from Larimer, Palmer and Marlatt, Alcohol Research & Health, NIAAA, 1999 [[larimer]].',
            head: ['', 'Lapse', 'Relapse'],
            rows: [
              ['What it is', 'The first violation of the abstinence goal [[larimer]]', 'A return to uncontrolled drinking, or abandonment of the abstinence goal [[larimer]]'],
              ['Example', 'One glass of wine at a wedding', 'Drinking as before, or deciding the attempt is over'],
              ['Does one lead to the other?', 'A lapse greatly increases the risk of eventual relapse, but the progression is not inevitable [[larimer]]', 'Not applicable'],
            ],
          },
          {
            t: 'p',
            x: 'Terminology varies between clinicians and between people in recovery, and some avoid "relapse" altogether. The distinction is useful because it separates an event from a pattern. A lapse is a thing that happened. A relapse is a path, and the path is not set by the first step.',
          },
          figure(
            'lapse-vs-relapse-card',
            'Diagram showing a single slip leading to one of two paths: guilt and more drinking, or learning from the situation and continuing',
            'Lapse vs relapse: what happens after a slip',
            'The reaction after a lapse matters, according to the relapse prevention model.',
            1200,
            560,
          ),
        ],
      },
      {
        id: 'ave',
        h2: 'Why the story you tell yourself matters',
        blocks: [
          {
            t: 'p',
            x: 'The relapse prevention model describes what it calls the abstinence violation effect: the drinker’s emotional reaction to a first lapse, and what they attribute it to [[larimer]]. People who blame personal failure feel guilt and negative emotion, which can lead to more drinking as a way to escape those feelings [[larimer]]. People who say "I have no willpower and will never stop" are more likely to abandon the attempt altogether [[larimer]].',
          },
          {
            t: 'p',
            x: 'The alternative the authors describe is attributing the lapse to not being able to cope with a specific high-risk situation. That group realises one needs to learn from one’s mistakes, and may develop more effective ways to cope [[larimer]]. In practice: "I was exhausted, it was a wedding, and I had no plan" is information. "I am a failure" is a story that makes the next drink more likely.',
          },
        ],
      },
      {
        id: 'first',
        h2: 'What NIAAA says to do next',
        blocks: [
          {
            t: 'ol',
            items: [
              '**Stop right away.** NIAAA’s advice is to get back on track, the sooner the better [[niaaaEpisode]].',
              '**Treat tomorrow as a new day.** Each day is a chance to start over [[niaaaEpisode]].',
              '**Expect setbacks.** NIAAA says setbacks are common when people undertake a major change, and not to run yourself down [[niaaaEpisode]].',
              '**Tell someone.** Contact your healthcare provider or a sober, supportive friend right away to talk about what happened [[niaaaEpisode]].',
              '**Work out why, with some distance.** Look at the timing and setting, then decide what you will do differently and write it down [[niaaaEpisode]].',
              '**Remove what makes it easy.** Get rid of alcohol at home, and keep busy with things not associated with drinking [[niaaaEpisode]].',
            ],
          },
        ],
      },
      {
        id: 'safety',
        h2: 'If you were drinking heavily',
        blocks: [{ t: 'callout', kind: 'safety', title: 'Stopping again can carry the same risks as the first time', x: SAFETY_WITHDRAWAL }],
      },
      {
        id: 'count',
        h2: 'What to do with your count',
        blocks: [
          {
            t: 'p',
            x: 'There is no rule. Some people restart on the day after the slip; others keep a running total of alcohol-free days so one drink does not erase months. Our guide on [how to count sober days](/sobergirl/how-to-count-sober-days) covers both. The count is a tool, and the useful question is which version keeps you going.',
          },
          {
            t: 'p',
            x: 'In Sober Girl, you can change your sober date in Settings under "Sober since", and your journal is not affected. The tree never dies: if you miss check-ins it fades toward olive, and a check-in brings it back. The app is built so a hard week does not punish you.',
          },
        ],
      },
      {
        id: 'long',
        h2: 'Relapse over years',
        blocks: [
          {
            t: 'p',
            x: 'A cohort of 461 people who sought help for alcohol problems was followed for 16 years. Among those in remission at three years, the likelihood of relapse by 16 years depended on factors including drinking level, self-efficacy and reliance on avoidance coping [[moos]]. The authors warned that remission achieved by cutting down on your own may be followed by a high likelihood of relapse, so preventive support may be worthwhile [[moos]]. The point is not that relapse is certain. It is that skills and support matter for years, not only the first month.',
          },
        ],
      },
      {
        id: 'help',
        h2: 'When a slip is a sign to get more help',
        blocks: [
          {
            t: 'p',
            x: 'If slips keep happening, or you cannot stop once you start, an app is not enough. NIAAA says a health professional can help and lists three FDA-approved medications for alcohol use disorder that you can discuss [[niaaaSupport]]. The NIAAA Alcohol Treatment Navigator helps adults find evidence-based care [[navigator]], and the SAMHSA National Helpline (1-800-662-4357) is free, confidential and open 24/7 [[samhsa]]. If you feel hopeless, call or text 988 in the US [[lifeline988]].',
          },
        ],
      },
    ],
    faqs: [
      { q: 'What is the difference between a lapse and a relapse?', a: 'A lapse is the first violation of an abstinence goal, such as one drink. A relapse is a return to uncontrolled drinking or abandonment of the goal. A lapse raises the risk of relapse but does not make it inevitable.' },
      { q: 'Does one drink mean I have relapsed?', a: 'Not by the research definition. One drink is a lapse. What happens next, and how you interpret it, decides whether it becomes a relapse.' },
      { q: 'I relapsed after 30 days. Did I lose all my progress?', a: 'No. What you learned, the skills you built and the days you spent without drinking remain. NIAAA says setbacks are common and advises treating the next day as a fresh start.' },
      { q: 'What should I do right after a slip?', a: 'Stop drinking right away, tell a supportive person or your healthcare provider, work out what led to it when you have some distance, remove alcohol from the house, and keep busy with other things.' },
      { q: 'Should I reset my sober counter after a slip?', a: 'It is your choice. Some people restart; others keep a running total of alcohol-free days. Choose the version that keeps you going.' },
    ],
    related: ['how-to-count-sober-days', 'urge-surfing', 'how-to-stop-alcohol-cravings'],
    shots: [
      { file: 'sos', alt: 'Sober Girl craving SOS screen with a breathing circle, a 10-minute timer and your reason', title: 'Craving SOS', caption: 'One tap to a guided breath, a timer and your reason. Example data.' },
      { file: 'tree', alt: 'Sober Girl tree screen with a tree that fades when check-ins are missed and recovers when you return', title: 'The tree never dies', caption: 'Missing days fades the tree; it never takes growth away. Example data.' },
    ],
  }),

  /* ================================================================ 100 days */
  page({
    slug: '100-days-sober',
    kicker: 'Milestone',
    metaTitle: '100 Days Sober: What Changes, What Is Known and How to Mark It',
    metaDescription:
      '100 days without alcohol: where day 100 sits between the 90-day and 6-month milestones, what research says, the drinks and money skipped, and how to mark it.',
    h1: '100 days sober: the milestone nobody marks for you',
    dek: 'Day 100 is a round number with no official meaning. It is 14 weeks and 2 days, and it falls in the quiet stretch between three months and six.',
    quickAnswer:
      '100 days is 14 weeks and 2 days, about three and a half months. It falls between the two milestones that research and apps mark, 90 days and 6 months, and NIAAA’s research definitions put 3 months to 1 year in an "early" stage [[niaaaRecovery]]. At 14 US standard drinks a week, 100 days is 200 drinks skipped, about 2,800 g of alcohol and 19,600 kcal from the alcohol alone [[niaaaStandard]] [[traversy]]. Sober Girl’s badges go from 90 days to 180, so day 100 is one you mark yourself.',
    keywords: ['100 days sober', '100 days no alcohol', 'day 100 sober', '100 day sobriety', '100 days without alcohol', 'sober 100 days'],
    heroAlt: 'A flowering tree between a 90-day badge and a 180-day badge, with day 100 marked on the path',
    sections: [
      {
        id: 'where',
        h2: 'Where day 100 sits',
        blocks: [
          {
            t: 'p',
            x: 'NIAAA’s recovery research definitions use four bands: initial (up to 3 months), early (3 months to 1 year), sustained (1 to 5 years) and stable (more than 5 years) [[niaaaRecovery]]. Day 100 is about ten days into "early". Nothing about your body or your situation changes between day 99 and day 101, and any page that tells you otherwise is guessing.',
          },
          {
            t: 'p',
            x: 'The habit research is a better lens. In a study of 96 people repeating a new daily behaviour, the average time to reach peak automaticity was 66 days, with individual times ranging from 18 days to a predicted 254 days [[bpsHabit]]. By day 100 you are past the average and well inside the range. If a routine still takes effort at 100 days, that is within normal, not a verdict [[lally]].',
          },
        ],
      },
      {
        id: 'quiet',
        h2: 'The quiet stretch between 90 and 180',
        blocks: [
          {
            t: 'p',
            x: 'After the 90-day mark there is no milestone for ninety days. This is where some people find motivation drifts: the early pride has faded and the next marker feels far away. Giving the stretch some structure of its own helps.',
          },
          {
            t: 'ul',
            items: [
              '**Mark day 100 yourself.** Pick something small and specific: a meal, a book, a walk somewhere you have never been.',
              '**Set a midpoint.** Day 135 is halfway between the 90-day and 180-day badges. Put it in the calendar now.',
              '**Review your reason.** Read the one you wrote at the start. If it no longer fits, rewrite it.',
              '**Notice what has become routine.** Name two things you do automatically now that you used to have to think about.',
            ],
          },
        ],
      },
      {
        id: 'numbers',
        h2: 'Your 100 days in numbers',
        blocks: [
          moneyTable(100, '100 days'),
          drinksTable(100, '100 days'),
          figure(
            '100-days-sober-savings',
            'Bar chart of money saved after 100 days without alcohol at $25, $50 and $100 a week',
            'Money saved after 100 days sober',
            'Money saved by 100 days at three weekly spends. Illustrative arithmetic.',
            1200,
            600,
          ),
        ],
      },
      {
        id: 'app',
        h2: 'What day 100 looks like in Sober Girl',
        blocks: [
          figure(
            '100-days-sober-card',
            'Sober Girl tree at the Flowering stage with a day 100 label and a note that the next badge is day 180',
            'Day 100 in Sober Girl',
            'Day 100 sits between the 90-day Flowering tree and the 180-day Grand tree.',
          ),
          {
            t: 'p',
            x: 'The app has no 100-day badge: its milestone list is nine badges, at 1, 3, 7, 14, 30, 60, 90, 180 and 365 days. At the calendar’s pace your tree stays a Flowering tree from day 90 until day 180, and the home screen shows days, hours and money saved as they grow. A 100-day moment is yours to name.',
          },
        ],
      },
      {
        id: 'journal',
        h2: 'Three questions for day 100',
        blocks: [
          {
            t: 'ol',
            items: [
              'What was I certain I could not do without alcohol, and have I done it?',
              'What do my evenings look like now compared with day one?',
              'What do I want the next 80 days to hold?',
            ],
          },
          { t: 'p', x: 'The next stops are [6 months sober](/sobergirl/6-months-sober) and [1 year sober](/sobergirl/1-year-sober). The one before is [90 days sober](/sobergirl/90-days-sober).' },
        ],
      },
    ],
    faqs: [
      { q: 'What happens after 100 days without alcohol?', a: 'We found no study measuring a change at exactly 100 days. NIAAA places 3 months to 1 year in an early stage of recovery, and habit research found new behaviours took 66 days on average to feel automatic, with a wide range.' },
      { q: 'How many weeks is 100 days sober?', a: '100 days is 14 weeks and 2 days, a little over three months.' },
      { q: 'Is 100 days sober a milestone?', a: 'It is a round number that many people mark, though research and most apps mark 90 days and 6 months. Sober Girl has badges at 90 and 180 days.' },
      { q: 'How much money do you save in 100 days of not drinking?', a: 'Weekly spend divided by 7, times 100. At $50 a week, about $714.' },
    ],
    related: ['90-days-sober', '6-months-sober', '60-days-sober'],
    shots: [
      { file: 'tree', alt: 'Sober Girl tree screen with a flowering tree full of pink blossoms', title: 'Flowering tree stage', caption: 'The tree stays a Flowering tree from day 90 to day 180. Example data.' },
      { file: 'home', alt: 'Sober Girl home screen with days sober and money saved', title: 'Day 100 on the home screen', caption: 'Days, hours and money saved. Example data.' },
    ],
  }),

  /* ================================================================ 2 years */
  page({
    slug: '2-years-sober',
    kicker: 'Milestone',
    metaTitle: '2 Years Sober: What Research Says and How to Mark It',
    metaDescription:
      'Two years without alcohol: the NIAAA sustained stage, what long-term follow-up studies measured, the drinks and money skipped, and how to mark two years.',
    h1: '2 years sober: past the first anniversary',
    dek: 'The first year gets the attention. Two years is the quieter milestone, and the research on it is about staying, not starting.',
    quickAnswer:
      'Two years sober is in the "sustained" stage of NIAAA’s research definitions, which runs from 1 to 5 years [[niaaaRecovery]]. Research on this period is observational. One study followed 1,162 people for 8 years and examined how the duration of abstinence related to health, relationships, housing and the odds of staying abstinent the next year [[dennis]]. At 14 US standard drinks a week, two years is 1,460 drinks skipped, about 20,440 g of alcohol and 143,080 kcal from the alcohol alone [[niaaaStandard]] [[traversy]].',
    keywords: ['2 years sober', 'two years sober', '2 year sobriety', '2 years no alcohol', '2 year sober anniversary', 'two years without alcohol'],
    heroAlt: 'A grand tree with a two-ring trunk and a two-year badge',
    sections: [
      {
        id: 'stage',
        h2: 'The sustained stage',
        blocks: [
          {
            t: 'p',
            x: 'NIAAA’s recovery research definitions divide time into initial (up to 3 months), early (3 months to 1 year), sustained (1 to 5 years) and stable (more than 5 years) [[niaaaRecovery]]. At two years you are about a quarter of the way through "sustained". The bands are research labels, not grades, but they reflect something real: the first year is about stopping, and what comes after is about building a life that holds the change in place.',
          },
          {
            t: 'p',
            x: 'NIAAA also describes recovery as more than not drinking: a process often marked by improvements in physical and mental health, quality of life and other aspects of wellbeing [[niaaaRecovery]]. Two years is a good point to ask which of those have moved, and which have not yet.',
          },
        ],
      },
      {
        id: 'research',
        h2: 'What long-term studies looked at',
        blocks: [
          {
            t: 'p',
            x: 'Dennis, Foss and Scott followed 1,162 people for 8 years after they entered treatment and examined how the duration of abstinence, from one month to five or more years, related to other parts of recovery: health, mental health, coping, legal involvement, work, housing, peers and support [[dennis]]. They also examined how abstinence at a given point related to the odds of staying abstinent in the following year [[dennis]]. The abstract does not give percentages, so we do not quote any. It is worth knowing that this research exists and that it treated recovery as a set of changes over years.',
          },
          {
            t: 'p',
            x: 'A national survey is a useful counterweight to the idea that recovery is rare. In a probability-based survey of US adults, 9.1% said they used to have a problem with alcohol or drugs but no longer did, and 46% of them identified as "in recovery" [[kelly]]. That figure covers alcohol and drugs together, so it is a sense of scale, not an alcohol-only rate.',
          },
        ],
      },
      {
        id: 'numbers',
        h2: 'Two years in numbers',
        blocks: [
          moneyTable(730, '2 years'),
          drinksTable(730, '2 years'),
          figure(
            '2-years-sober-savings',
            'Bar chart of money saved after 2 years without alcohol at $25, $50 and $100 a week',
            'Money saved after 2 years sober',
            'Money saved by 2 years at three weekly spends. Illustrative arithmetic.',
            1200,
            600,
          ),
        ],
      },
      {
        id: 'practical',
        h2: 'What to look at on a two-year anniversary',
        blocks: [
          {
            t: 'ul',
            items: [
              '**Which skills are automatic now.** The ones you no longer think about are the ones that are working.',
              '**What you stopped doing.** Any situation you still avoid completely is worth revisiting once, with a plan.',
              '**Who knows.** Sobriety held privately can feel lonely at two years. Telling one more person is a small step.',
              '**What you are spending the savings on.** If you cannot say, that is the sign to give the money a name.',
            ],
          },
        ],
      },
      {
        id: 'app',
        h2: 'Your counter after day 365',
        blocks: [
          {
            t: 'p',
            x: 'Sober Girl’s milestone list ends at 365 days, where the tree becomes an Ancient tree with golden blossoms. After that the counter, hours and money saved keep growing, and your journal and check-ins continue as before. We have not added badges beyond a year, so for years two and onwards the marker is yours. You can export your data from Settings under "Export my data". If you want to say something to someone else at this stage, see our [soberversary messages](/sobergirl/sobriety-anniversary-messages).',
          },
        ],
      },
    ],
    faqs: [
      { q: 'What happens after 2 years of sobriety?', a: 'There is no single list of changes. By NIAAA’s research definitions you are in the sustained stage, 1 to 5 years. Long-term studies describe changes across health, relationships and housing over years rather than a specific two-year effect.' },
      { q: 'Is 2 years sober a big milestone?', a: 'Yes. It is past the first-year attention and into the stage where the work is staying. Many twelve-step groups give an annual coin.' },
      { q: 'How many drinks is 2 years of not drinking?', a: 'At 14 standard drinks a week, 1,460 drinks, about 20,440 g of alcohol.' },
      { q: 'How common is it to be sober for 2 years?', a: 'In a US survey, 9.1% of adults said they used to have a problem with alcohol or drugs but no longer did. That covers alcohol and drugs together.' },
      { q: 'Does Sober Girl have a 2-year badge?', a: 'No. The milestone list ends at 365 days. The counter and money saved keep going beyond that.' },
    ],
    related: ['1-year-sober', '3-years-sober', 'sobriety-anniversary-messages'],
    shots: [
      { file: 'tree', alt: 'Sober Girl tree screen with the largest tree stage and golden blossoms', title: 'Ancient tree stage', caption: 'The tree reaches its final stage at 365 days. Example data.' },
      { file: 'private', alt: 'Sober Girl privacy screen explaining that your journal and streak stay on your phone', title: 'Private for years', caption: 'Your streak and journal stay on your phone. Example data.' },
    ],
  }),

  /* ================================================================ 3 years */
  page({
    slug: '3-years-sober',
    kicker: 'Milestone',
    metaTitle: '3 Years Sober: What Research Says About Staying Sober',
    metaDescription:
      'Three years without alcohol: why researchers use the 3-year mark, what a 16-year follow-up found about relapse after remission, and how to mark three years.',
    h1: '3 years sober: why researchers use this mark',
    dek: 'Three years is a number researchers chose on purpose. Here is why, what the longest follow-up found, and what it suggests for staying power.',
    quickAnswer:
      'Three years is a recognised checkpoint in alcohol research. A 16-year study of 461 people who sought help used three-year remission as its starting point and then tracked who relapsed [[moos]]. People remitted at three years were more or less likely to relapse by 16 years depending on drinking level, self-efficacy and reliance on avoidance coping [[moos]]. At 14 US standard drinks a week, three years is 2,190 drinks skipped, about 30,660 g of alcohol and 214,620 kcal from the alcohol alone [[niaaaStandard]] [[traversy]].',
    keywords: ['3 years sober', 'three years sober', '3 year sobriety', '3 years no alcohol', '3 years without alcohol', '3 year sober anniversary'],
    heroAlt: 'A tree with three rings and a path stretching on toward a distant horizon',
    sections: [
      {
        id: 'why',
        h2: 'Why three years',
        blocks: [
          {
            t: 'p',
            x: 'Moos and Moos followed 461 people who had started to seek help for an alcohol problem, surveying them at baseline and at 1, 3, 8 and 16 years [[moos]]. They examined who reached three-year remission and, among those who did, who relapsed over the following 13 years [[moos]]. Three years is therefore a research checkpoint: far enough from the first attempt to count as sustained, and a useful starting line for asking what keeps people there.',
          },
          {
            t: 'p',
            x: 'It sits inside NIAAA’s "sustained" band, which runs from 1 to 5 years [[niaaaRecovery]]. In that framing you are around the middle of it.',
          },
        ],
      },
      {
        id: 'findings',
        h2: 'What predicted relapse after three years',
        blocks: [
          {
            t: 'p',
            x: 'Among people who were remitted at three years, those who were more likely to relapse by 16 years had consumed more alcohol, were less likely to see their drinking as a significant problem, had less self-efficacy and relied more on avoidance coping [[moos]]. These findings held both for people who obtained help and for those who did not [[moos]]. Translated into plain language:',
          },
          {
            t: 'ul',
            items: [
              '**Self-efficacy** is believing you can handle a hard situation without drinking. It can be built by doing it, one situation at a time.',
              '**Avoidance coping** is handling feelings by not facing them. Staying away from everything hard works until it does not.',
              '**Seeing it as a problem** is the part that fades as years pass. Remembering why you stopped is not dwelling; it is maintenance.',
            ],
          },
          {
            t: 'p',
            x: 'The authors also concluded that remission achieved by cutting down without help may be followed by a high likelihood of relapse, so preventive support may be useful [[moos]]. That is the study speaking about its sample of people who had sought help, not a prediction for any one person.',
          },
        ],
      },
      {
        id: 'numbers',
        h2: 'Three years in numbers',
        blocks: [
          moneyTable(1095, '3 years'),
          drinksTable(1095, '3 years'),
          figure(
            '3-years-sober-savings',
            'Bar chart of money saved after 3 years without alcohol at $25, $50 and $100 a week',
            'Money saved after 3 years sober',
            'Money saved by 3 years at three weekly spends. Illustrative arithmetic.',
            1200,
            600,
          ),
        ],
      },
      {
        id: 'maintain',
        h2: 'Staying power: a short list',
        blocks: [
          {
            t: 'ol',
            items: [
              '**Keep one daily anchor.** A check-in, a note, a walk. One is enough.',
              '**Plan hard dates in advance,** even at year three. Birthdays, anniversaries of losses and big work events do not announce themselves.',
              '**Practise on small things.** Each hard moment handled without drinking adds to self-efficacy, which the research links with staying.',
              '**Know where help is.** NIAAA’s Alcohol Treatment Navigator [[navigator]] and the SAMHSA helpline (1-800-662-4357) [[samhsa]] are there years in, not only at the start.',
            ],
          },
          {
            t: 'p',
            x: 'If you slip, our guide to [lapse vs relapse](/sobergirl/lapse-vs-relapse) explains why one drink does not undo three years. See also [2 years sober](/sobergirl/2-years-sober) and [5 years sober](/sobergirl/5-years-sober).',
          },
        ],
      },
    ],
    faqs: [
      { q: 'What happens after 3 years of sobriety?', a: 'There is no list of body changes tied to year three. Researchers use three-year remission as a checkpoint: in a 16-year study, people remitted at three years were more or less likely to relapse depending on drinking level, self-efficacy and coping style.' },
      { q: 'Is it still possible to relapse after 3 years sober?', a: 'Yes. In the 16-year study, some people remitted at three years did relapse by 16 years. The factors linked to it include lower self-efficacy and more avoidance coping.' },
      { q: 'How much money do you save in 3 years of not drinking?', a: 'Weekly spend divided by 7, times 1,095. At $50 a week, about $7,821.' },
      { q: 'What is the 3-year sobriety coin?', a: 'Many twelve-step groups give an annual coin or chip. Colours and intervals vary by group, and there is no official AA coin.' },
    ],
    related: ['2-years-sober', '5-years-sober', 'lapse-vs-relapse'],
    shots: [
      { file: 'milestones', alt: 'Sober Girl milestones screen with all nine badges unlocked up to 365 days', title: 'All nine badges', caption: 'The milestone list ends at 365 days. Example data.' },
      { file: 'journal', alt: 'Sober Girl private journal with short entries and moods', title: 'A journal for years', caption: 'Short private notes with a mood. Plus. Example data.' },
    ],
  }),

  /* ================================================================ 5 years */
  page({
    slug: '5-years-sober',
    kicker: 'Milestone',
    metaTitle: '5 Years Sober: The Edge of the Stable Stage',
    metaDescription:
      'Five years without alcohol: where NIAAA draws the line between sustained and stable recovery, what 5 years means in research, and how to mark it.',
    h1: '5 years sober: the edge of the "stable" stage',
    dek: 'Five years is where NIAAA’s research bands change from sustained to stable. Here is what that line means, and what it does not.',
    quickAnswer:
      'Five years sober is the boundary between the "sustained" stage (1 to 5 years) and the "stable" stage (more than 5 years) in NIAAA’s research definitions [[niaaaRecovery]]. The longest long-term study we cite grouped abstinence as "1 month to 5 or more years", which is why five is the top of the scale [[dennis]]. No study makes a promise at five years, and a stage is not a guarantee. At 14 US standard drinks a week, five years is 3,650 drinks skipped, about 51,100 g of alcohol and 357,700 kcal from the alcohol alone [[niaaaStandard]] [[traversy]].',
    keywords: ['5 years sober', 'five years sober', '5 year sobriety', '5 years no alcohol', '5 years without alcohol', '5 year sober anniversary'],
    heroAlt: 'An ancient tree with golden blossoms and a five-year badge, with a path crossing a boundary line',
    sections: [
      {
        id: 'line',
        h2: 'The line NIAAA draws at five years',
        blocks: [
          {
            t: 'p',
            x: 'NIAAA’s recovery research definitions split time into initial (up to 3 months), early (3 months to 1 year), sustained (1 to 5 years) and stable (more than 5 years) [[niaaaRecovery]]. Five years is the top of "sustained". On day 1,826 you cross into "stable". These are research categories, set up so that studies can compare people at similar points, not something the body notices.',
          },
          {
            t: 'p',
            x: 'The same definitions say recovery is a process of pursuing both remission from alcohol use disorder and an end to heavy drinking, and that people are considered "recovered" if both are achieved and maintained over time [[niaaaRecovery]]. The word "maintained" is the one that matters at five years.',
          },
        ],
      },
      {
        id: 'research',
        h2: 'Five years in the research',
        blocks: [
          {
            t: 'p',
            x: 'Dennis, Foss and Scott measured abstinence in bands from one month to "five or more years" in 1,162 people followed for eight years, and looked at how the duration of abstinence related to other parts of recovery and to the odds of staying abstinent the following year [[dennis]]. The abstract does not give percentages, so we will not quote the figure that circulates online that after five years the risk of relapse falls below a fixed number. We could not verify it.',
          },
          {
            t: 'p',
            x: 'What the longer follow-up by Moos and Moos adds is a caution. Even among people in remission at three years, some relapsed over the next thirteen [[moos]]. Five years is a strong place to be, and the safest reading of the research is that the skills which got you there keep mattering [[moos]].',
          },
        ],
      },
      {
        id: 'numbers',
        h2: 'Five years in numbers',
        blocks: [
          moneyTable(1825, '5 years'),
          drinksTable(1825, '5 years'),
          figure(
            '5-years-sober-savings',
            'Bar chart of money saved after 5 years without alcohol at $25, $50 and $100 a week',
            'Money saved after 5 years sober',
            'Money saved by 5 years at three weekly spends. Illustrative arithmetic.',
            1200,
            600,
          ),
        ],
      },
      {
        id: 'mark',
        h2: 'Marking five years',
        blocks: [
          {
            t: 'ul',
            items: [
              '**Write the letter.** A short note to the person on day one, and one to the person five years from now.',
              '**Spend the number.** At $50 a week the savings come to about $13,000. Decide on one thing that is worth that amount to you.',
              '**Say thank you.** Name the people who made the first year survivable.',
              '**Help someone on day one.** If you want to give something back, that is how.',
            ],
          },
          {
            t: 'p',
            x: 'For words to send to someone at this milestone, see [soberversary messages](/sobergirl/sobriety-anniversary-messages). For the longer view, see [years sober: 4, 7 and 10 years](/sobergirl/years-sober).',
          },
        ],
      },
    ],
    faqs: [
      { q: 'What does 5 years sober mean?', a: 'In NIAAA’s research definitions, five years is the boundary between the sustained stage (1 to 5 years) and the stable stage (more than 5 years). It is a research category rather than a physical change.' },
      { q: 'Is relapse risk low after 5 years sober?', a: 'We could not verify a specific figure. Long-term studies describe recovery as a process maintained over years, and one 16-year follow-up found some people in remission at three years did relapse later.' },
      { q: 'How much money do you save in 5 years of not drinking?', a: 'Weekly spend divided by 7, times 1,825. At $50 a week, about $13,036.' },
      { q: 'Does Sober Girl have a 5-year badge?', a: 'No. The milestone list ends at 365 days. The counter, hours and money saved keep going.' },
    ],
    related: ['3-years-sober', 'years-sober', 'sobriety-anniversary-messages'],
    shots: [
      { file: 'share', alt: 'Sober Girl milestone card with a rosette badge and a share button', title: 'A milestone card', caption: 'Plus members can save or share a card for each badge. Example data.' },
      { file: 'home', alt: 'Sober Girl home screen with a long streak and money saved', title: 'Years on the counter', caption: 'Days and money saved keep growing past a year. Example data.' },
    ],
  }),

  /* ================================================================ months hub */
  page({
    slug: 'months-sober',
    kicker: 'Milestone',
    metaTitle: 'Months Sober: 2, 3, 4, 5, 9 and 18 Months Without Alcohol',
    metaDescription:
      'Months sober from 2 to 18: days and weeks for each month, which app badge is nearest, what research says at each point, and the drinks skipped.',
    h1: 'Months sober: 2, 3, 4, 5, 9 and 18 months without alcohol',
    dek: 'Searching "4 months sober" or "9 months sober" gets very little. Here is each month converted to days, with what is documented and what is not.',
    quickAnswer:
      'Months are just days under another name: 2 months is about 60 days, 3 months 90, 4 months 120, 5 months 150, 9 months 270 and 18 months 548. NIAAA’s research definitions put the first 3 months in an "initial" stage, 3 months to a year in "early", and 1 to 5 years in "sustained" [[niaaaRecovery]]. The firmest figure at the months scale is Alcohol Change UK’s: six months after Dry January, seven in ten participants were still drinking less riskily [[acukAbout]]. Apart from that, little research is dated to a specific month, and this page says so.',
    keywords: ['2 months sober', '3 months sober', '4 months sober', '5 months sober', '9 months sober', '18 months sober', 'months sober', 'how many days is 4 months sober'],
    heroAlt: 'A row of six month markers from 2 to 18 months along a growing tree path',
    sections: [
      {
        id: 'convert',
        h2: 'Months in days',
        blocks: [
          {
            t: 'table',
            caption: 'Using 30 days a month. The app’s nearest badge is the one just reached.',
            head: ['Months sober', 'Days', 'Weeks', 'NIAAA stage', 'Nearest badge in Sober Girl'],
            rows: [
              ['2 months', '60', '8.6', 'Initial [[niaaaRecovery]]', '60 days. See [60 days sober](/sobergirl/60-days-sober)'],
              ['3 months', '90', '12.9', 'Initial, ending [[niaaaRecovery]]', '90 days. See [90 days sober](/sobergirl/90-days-sober)'],
              ['4 months', '120', '17.1', 'Early [[niaaaRecovery]]', '90 days. Next badge at 180'],
              ['5 months', '150', '21.4', 'Early [[niaaaRecovery]]', '90 days. Next badge at 180'],
              ['6 months', '180', '25.7', 'Early [[niaaaRecovery]]', '180 days. See [6 months sober](/sobergirl/6-months-sober)'],
              ['9 months', '270', '38.6', 'Early [[niaaaRecovery]]', '180 days. Next badge at 365'],
              ['18 months', '540', '77.1', 'Sustained [[niaaaRecovery]]', '365 days. The list ends there'],
            ],
          },
          figure(
            'months-sober-card',
            'A strip of month markers from 2 months to 18 months mapped to days and the nearest Sober Girl badge',
            'Months sober converted to days',
            'Months converted to days, with the nearest app badge.',
            1200,
            500,
          ),
        ],
      },
      {
        id: 'four',
        h2: '4 months sober (about 120 days)',
        blocks: [
          {
            t: 'p',
            x: 'Four months puts you a month past the point where NIAAA’s "initial" stage ends [[niaaaRecovery]]. There is no study dated to this month, so the useful angle is practical: it is the stretch after the big round numbers, when attention drifts. The next marker is six months, so set a halfway point at 150 days.',
          },
        ],
      },
      {
        id: 'five',
        h2: '5 months sober (about 150 days)',
        blocks: [
          {
            t: 'p',
            x: 'Five months sits inside the window that Alcohol Change UK uses for its six-month follow-up: people who took a month off in January and were still drinking less riskily after six [[acukAbout]]. That figure is about cutting down after a month, not five months of abstinence, so it is context rather than a prediction. A month before the half-year is a good time to decide how you want to mark it. See [6 months sober](/sobergirl/6-months-sober).',
          },
        ],
      },
      {
        id: 'nine',
        h2: '9 months sober (about 270 days)',
        blocks: [
          {
            t: 'p',
            x: 'Nine months is three quarters of a year, and the first time many people can see the year ahead as achievable. It is also where early-stage research bands start to feel close to ending: the "early" stage runs to 12 months and then becomes "sustained" [[niaaaRecovery]]. Nothing changes physiologically at day 270. What you can do is draft the plan for the one-year day while there is time to make it good.',
          },
        ],
      },
      {
        id: 'eighteen',
        h2: '18 months sober (about 540 days)',
        blocks: [
          {
            t: 'p',
            x: 'At 18 months you are well into the "sustained" stage, which runs from 1 to 5 years [[niaaaRecovery]]. The first anniversary has passed, and the attention that came with it has gone. That is the point where a daily check-in, a reason you can still read, and one person who knows tend to matter more than a milestone. See [2 years sober](/sobergirl/2-years-sober) for the next marker.',
          },
        ],
      },
      {
        id: 'numbers',
        h2: 'Drinks skipped by month',
        blocks: [
          {
            t: 'table',
            caption: 'Illustrative arithmetic at 14 US standard drinks a week (2 a day). 14 g of alcohol per drink [[niaaaStandard]], 98 kcal per drink from the alcohol alone [[traversy]].',
            head: ['Months', 'Days', 'Drinks skipped', 'Alcohol skipped', 'Calories from alcohol'],
            rows: [
              ['2', '60', '120', '1,680 g', '11,760 kcal'],
              ['3', '90', '180', '2,520 g', '17,640 kcal'],
              ['4', '120', '240', '3,360 g', '23,520 kcal'],
              ['5', '150', '300', '4,200 g', '29,400 kcal'],
              ['9', '270', '540', '7,560 g', '52,920 kcal'],
              ['18', '540', '1,080', '15,120 g', '105,840 kcal'],
            ],
          },
          { t: 'p', x: 'Use the [sobriety counter](/sobergirl/sobriety-counter) to see your exact days and the [calculator](/sobergirl/sobriety-calculator) for the money.' },
        ],
      },
    ],
    faqs: [
      { q: 'How many days is 4 months sober?', a: 'About 120 days, or 17 weeks, counting 30 days a month.' },
      { q: 'How many days is 3 months sober?', a: 'About 90 days. NIAAA’s research definitions treat 3 months as the end of the initial stage.' },
      { q: 'What happens at 9 months sober?', a: 'We found no study dated to 9 months. It sits in NIAAA’s early stage, which runs from 3 months to a year.' },
      { q: 'How many days is 18 months sober?', a: 'About 540 days, counting 30 days a month, or 548 using the average month. It is in the sustained stage, which starts at one year.' },
      { q: 'Does Sober Girl track months?', a: 'It shows days, hours and weeks, and unlocks badges at 1, 3, 7, 14, 30, 60, 90, 180 and 365 days.' },
    ],
    related: ['90-days-sober', '6-months-sober', 'sobriety-counter'],
    shots: [
      { file: 'home', alt: 'Sober Girl home screen with days, hours and weeks sober', title: 'Days, hours and weeks', caption: 'Days, hours and weeks on one screen. Example data.' },
      { file: 'milestones', alt: 'Sober Girl milestones screen with the 90 and 180 day badges', title: 'Badges at 90 and 180 days', caption: 'The badges between 3 and 6 months. Example data.' },
    ],
  }),

  /* ================================================================ years hub */
  page({
    slug: 'years-sober',
    kicker: 'Milestone',
    metaTitle: 'Years Sober: 4, 7 and 10 Years Without Alcohol',
    metaDescription:
      'Years sober from 4 to 10: what NIAAA’s stable stage means, how common long-term recovery is, how groups mark each year, and how to mark yours.',
    h1: 'Years sober: 4, 7 and 10 years and beyond',
    dek: 'Past five years there are no official milestones. Here is what the research frames at this scale, how groups mark the years, and what to do with them.',
    quickAnswer:
      'Beyond five years, NIAAA’s research definitions place you in the "stable" stage (more than 5 years) [[niaaaRecovery]]. There are no further research bands. The best sense of scale is a US survey in which 9.1% of adults said they used to have a problem with alcohol or drugs but no longer did, and 46% of them called themselves "in recovery" [[kelly]]. Twelve-step groups often give a coin each year [[coinWiki]]. Beyond that, years sober are marked by what you decide they mean.',
    keywords: ['4 years sober', '7 years sober', '10 years sober', 'years sober', '8 years sober', '9 years sober', '6 years sober', 'long term sobriety'],
    heroAlt: 'A long path of years with a few tree rings, ending at a wide horizon',
    sections: [
      {
        id: 'stable',
        h2: 'The stable stage',
        blocks: [
          {
            t: 'p',
            x: 'NIAAA’s recovery research definitions end at "stable (more than 5 years)" [[niaaaRecovery]]. After that there is no band, so a ten-year anniversary and a six-year one are, as far as the research is concerned, the same stage. The definitions describe someone as "recovered" when both remission from alcohol use disorder and an end to heavy drinking are achieved and maintained over time [[niaaaRecovery]], and "maintained" is still the working word at year ten.',
          },
        ],
      },
      {
        id: 'common',
        h2: 'How common long-term recovery is',
        blocks: [
          {
            t: 'p',
            x: 'In a probability-based survey of US adults, 9.1% responded "yes" to "Did you use to have a problem with alcohol or drugs but no longer do?", and 46% of those people identified as "in recovery" [[kelly]]. The question covers alcohol and drugs together and does not give years, so it is a scale marker: tens of millions of Americans have resolved a problem [[kelly]]. If you are four, seven or ten years in, you are one of them.',
          },
        ],
      },
      {
        id: 'each',
        h2: 'The years people search for',
        blocks: [
          { t: 'h3', x: '4 years sober' },
          { t: 'p', x: 'Four years is inside the "sustained" stage, one year before the stable boundary [[niaaaRecovery]]. A useful exercise is to list what you would have to rebuild if you stopped, and to notice how much of it is simply part of your life now.' },
          { t: 'h3', x: '7 years sober' },
          { t: 'p', x: 'Seven years is well inside the stable stage [[niaaaRecovery]]. If you mark it, marking it with someone newer to sobriety can be a gift to them.' },
          { t: 'h3', x: '10 years sober' },
          { t: 'p', x: 'Ten years is a decade. If you are asked to speak or share, two honest sentences about what you do now that you could not have done at the start are more useful than a recap of what went wrong.' },
          { t: 'h3', x: '6, 8 and 9 years' },
          { t: 'p', x: 'These years get little attention and plenty of searches. They are good ones to mark quietly. A note to yourself, and the date in the calendar, is enough.' },
        ],
      },
      {
        id: 'marking',
        h2: 'How groups mark the years',
        blocks: [
          {
            t: 'p',
            x: 'In Alcoholics Anonymous and other twelve-step groups, a coin or chip marks each year, after the 24-hour, 30, 60 and 90 day coins. There is no official AA coin, the system is optional, and colours and intervals vary by group [[coinWiki]]. Outside groups, people mark years with cake, a letter, a trip or a donation. For words to say, see our [soberversary messages](/sobergirl/sobriety-anniversary-messages).',
          },
        ],
      },
      {
        id: 'counter',
        h2: 'Your own count',
        blocks: [
          {
            t: 'p',
            x: 'The [sobriety counter](/sobergirl/sobriety-counter) shows your exact days and hours, whatever the number of years. In Sober Girl, the milestone badges end at 365 days and the counter, hours and money saved keep going. See also [5 years sober](/sobergirl/5-years-sober) and [3 years sober](/sobergirl/3-years-sober).',
          },
        ],
      },
    ],
    faqs: [
      { q: 'What happens after 5 years sober?', a: 'By NIAAA’s research definitions you enter the stable stage, more than 5 years. There are no further bands. The definitions describe recovery as maintained over time.' },
      { q: 'How common is 10 years of sobriety?', a: 'We could not find a reliable figure by years. A US survey found 9.1% of adults had resolved a problem with alcohol or drugs, and 46% of them called themselves in recovery.' },
      { q: 'How many days is 7 years sober?', a: 'About 2,555 days, plus leap days.' },
      { q: 'Do you still get sobriety coins after many years?', a: 'In many twelve-step groups, yes. A coin is often given each year. Practices vary by group and are optional.' },
      { q: 'How do I celebrate 10 years sober?', a: 'However suits you: a trip, a meal, a letter, a donation, or time with someone newer in sobriety. See our soberversary messages for words.' },
    ],
    related: ['5-years-sober', 'sobriety-anniversary-messages', '2-years-sober'],
    shots: [
      { file: 'private', alt: 'Sober Girl privacy screen explaining that your streak stays on your phone', title: 'Private over the long run', caption: 'Your streak and journal stay on your phone. Example data.' },
      { file: 'tree', alt: 'Sober Girl tree at its largest stage with golden blossoms', title: 'The final tree', caption: 'The tree reaches its final stage at 365 days. Example data.' },
    ],
  }),

  /* ================================================================ mindful drinking */
  page({
    slug: 'mindful-drinking',
    kicker: 'Guide',
    metaTitle: 'Mindful Drinking: What It Is, How to Start, Apps That Help',
    metaDescription:
      'Mindful drinking means choosing when and why you drink. What it is, five questions to ask before you pour, how to track it, and when it is not enough.',
    h1: 'Mindful drinking: what it is and how to start',
    dek: 'Not a pledge to stop. A way of making drinking a choice instead of a reflex, with five questions and a way to see the pattern.',
    quickAnswer:
      'Mindful drinking means paying attention to why, when and how much you drink, so that drinking is a choice rather than a reflex. Alcohol Change UK describes it as slowing down the decision to drink so you can understand what role alcohol plays in your life, and says it may suit people who want to stay within low-risk guidelines or who feel drinking affects their mental health [[acukMindful]]. It is not treatment: if you cannot cut down, NIAAA says a health professional can help and lists three FDA-approved medications [[niaaaSupport]].',
    keywords: ['mindful drinking', 'mindful drinking app', 'how to drink mindfully', 'drink less app', 'mindful drinking for women', 'what is mindful drinking', 'drinking in moderation'],
    heroAlt: 'A single glass on a table with five small question marks drifting above it',
    sections: [
      {
        id: 'what',
        h2: 'What mindful drinking is',
        blocks: [
          {
            t: 'p',
            x: 'Mindfulness, as Alcohol Change UK puts it, is taking active steps to slow down and focus on the here and now. Applied to alcohol, it means slowing the decision to drink so you can notice what is behind it [[acukMindful]]. It is not abstinence, and it is not "moderation" as a rule. It is attention.',
          },
          {
            t: 'p',
            x: 'The charity says it may suit people who want to drink within the low-risk guidelines of 14 units a week, people who feel drinking has a negative effect on their mental health, and people who want to develop the skills to drink moderately [[acukMindful]]. For US readers, 14 UK units is roughly 8 standard drinks, since a US standard drink holds 14 g of alcohol [[niaaaStandard]] and a UK unit holds 8 g [[nhs]].',
          },
        ],
      },
      {
        id: 'questions',
        h2: 'Five questions to ask before you pour',
        blocks: [
          {
            t: 'ol',
            items: [
              '**Do I want this, or is it 6pm?** Notice whether it is a craving or a clock.',
              '**What am I feeling right now?** Tired, anxious, bored, celebrating? The answer is often not thirst.',
              '**How many will I have, and when will I stop?** Decide before the first.',
              '**Would I want this if it were alcohol-free?** If a glass of something else would do, the habit is the point.',
              '**How will I feel tomorrow morning?** Not as a lecture, as a forecast.',
            ],
          },
          {
            t: 'p',
            x: 'The point is not to answer "no" every time. It is to find out how many of your drinks are chosen. Our guide on [gray area drinking](/sobergirl/gray-area-drinking) covers the place between "fine" and "a problem".',
          },
          figure(
            'mindful-drinking-card',
            'Five question cards: do I want this, what am I feeling, how many, would I want it alcohol-free, how will I feel tomorrow',
            'Five questions before you pour',
            'Five questions to ask before you pour.',
          ),
        ],
      },
      {
        id: 'limits',
        h2: 'What the numbers say',
        blocks: [
          {
            t: 'p',
            x: 'NIAAA defines binge drinking for a woman as 4 or more drinks in about two hours, and heavy drinking as 4 or more on any day or 8 or more in a week [[niaaaPatterns]]. Mindful drinking is about the space well below those lines, where most of the choices actually happen. Our guide to [how much alcohol is too much for a woman](/sobergirl/how-much-alcohol-is-too-much-for-women) has the full definitions and standard drink sizes.',
          },
        ],
      },
      {
        id: 'track',
        h2: 'Seeing the pattern',
        blocks: [
          {
            t: 'p',
            x: 'Attention is hard to keep up without a record. Two kinds of tools help, and they do different jobs.',
          },
          {
            t: 'ul',
            items: [
              '**Logging each drink.** Try Dry logs units, calories and money against a goal, with planned and unplanned drinks, and is free [[asTryDry]]. It is built for exactly this.',
              '**Counting alcohol-free days.** Sober Girl counts days in a row from a date you choose, with money saved and a one-tap daily check-in. It does not log individual drinks. On Google Play it is listed as "Drink Less: Alcohol Free Days" [[playSoberGirl]]. If your aim is more alcohol-free days, rather than a drink-by-drink diary, a day counter is simple. See [alcohol-free days](/sobergirl/alcohol-free-days) for how to track both.',
            ],
          },
        ],
      },
      {
        id: 'limits-of',
        h2: 'When mindful drinking is not enough',
        blocks: [
          {
            t: 'p',
            x: 'If you try these questions and still cannot stop at the number you set, or you find yourself drinking to cope, that is useful information, not a failure. NIAAA says a health professional can help and lists three FDA-approved medications for alcohol use disorder [[niaaaSupport]]. The NIAAA Alcohol Treatment Navigator helps adults find evidence-based care [[navigator]]. If you drink heavily or every day, do not stop suddenly on your own.',
          },
        ],
      },
    ],
    faqs: [
      { q: 'What is mindful drinking?', a: 'Paying attention to why, when and how much you drink, so it is a choice rather than a reflex. Alcohol Change UK describes it as slowing down the decision to drink to understand the role alcohol plays in your life.' },
      { q: 'Is mindful drinking the same as moderate drinking?', a: 'Not quite. Moderation is a limit. Mindful drinking is attention to the decision, which may lead to drinking less, drinking the same, or stopping.' },
      { q: 'Is there a mindful drinking app?', a: 'Several apps help. Try Dry logs each drink against a goal and is free. Sober Girl counts alcohol-free days and money saved with a one-tap daily check-in, and is on Android as "Drink Less: Alcohol Free Days".' },
      { q: 'How do I drink less alcohol?', a: 'Decide the number before the first drink, notice what is behind the urge, keep little alcohol at home, and track your days. If you cannot cut down, speak to a doctor.' },
      { q: 'Who is mindful drinking not for?', a: 'People who drink heavily or every day, or who have had withdrawal symptoms, should speak to a doctor before changing how they drink.' },
    ],
    related: ['gray-area-drinking', 'alcohol-free-days', 'best-app-to-quit-drinking'],
    shots: [
      { file: 'home', alt: 'Sober Girl home screen with alcohol-free days, money saved and a check-in', title: 'Alcohol-free days in Sober Girl', caption: 'Days, money saved and a one-tap daily check-in. Example data.' },
      { file: 'sos', alt: 'Sober Girl craving SOS with a breathing circle and a timer', title: 'A pause before you pour', caption: 'A guided breath and a 10-minute timer. Example data.' },
    ],
  }),

  /* ================================================================ alcohol face */
  page({
    slug: 'alcohol-face',
    kicker: 'Explainer',
    metaTitle: 'Alcohol Face: What Is Proven About Drinking and Skin',
    metaDescription:
      'Alcohol face is a popular term, not a diagnosis. What dermatology research supports about flushing, rosacea and acne, and what is not proven about puffy faces.',
    h1: 'Alcohol face: what is proven about drinking and your skin',
    dek: 'Red, puffy, dull. "Alcohol face" is everywhere online. Here is what the research supports, what it does not, and what we could not find.',
    quickAnswer:
      'Alcohol face is a popular label, not a medical diagnosis. What research supports is narrower. A 2023 dermatology review proposes that alcohol increases microvascular permeability, which may directly cause flushing [[liuChen]], and a cohort of 82,737 US women followed for 14 years found alcohol intake was associated with a higher risk of rosacea [[rosacea]]. The same review calls the rosacea link controversial and finds the acne evidence inconsistent [[liuChen]]. We found no controlled study of how your face changes after you stop, so before-and-after claims are anecdotes.',
    keywords: ['alcohol face', 'alcohol puffy face', 'alcohol and skin', 'red face alcohol', 'face after quitting alcohol', 'booze face', 'does alcohol cause rosacea'],
    heroAlt: 'A face outline with a small question mark beside the cheeks, next to a skin research summary card',
    sections: [
      {
        id: 'label',
        h2: 'What "alcohol face" means',
        blocks: [
          {
            t: 'p',
            x: 'The term is used loosely for a red, flushed, puffy or dull look people attribute to drinking. There is no medical diagnosis called alcohol face, and no single mechanism that explains all of it. The research is organised around specific skin conditions and reactions instead, and that is what this page covers.',
          },
        ],
      },
      {
        id: 'flushing',
        h2: 'Flushing',
        blocks: [
          {
            t: 'p',
            x: 'A 2023 review in Clinical, Cosmetic and Investigational Dermatology proposes that alcohol increases microvascular permeability in the skin, which "may be a direct cause of skin flushing" after drinking [[liuChen]]. The review presents this as a proposed mechanism rather than a measured outcome [[liuChen]]. The review treats the precise reason as a hypothesis, so the claim here is a proposal, not a finding.',
          },
        ],
      },
      {
        id: 'rosacea',
        h2: 'Rosacea',
        blocks: [
          {
            t: 'p',
            x: 'The strongest dataset is a prospective cohort in the Nurses’ Health Study II: 82,737 US women, followed for 14 years, with 4,945 cases of rosacea. Increased alcohol intake was associated with a significantly increased risk of rosacea in women [[rosacea]]. The authors note it was an epidemiological study without examination of the mechanism [[rosacea]], which means it shows an association, not a cause.',
          },
          {
            t: 'p',
            x: 'The 2023 review is more cautious: it says whether alcohol aggravates rosacea "remains controversial", points to two epidemiological studies linking higher intake to risk, and notes that some case-control studies found no correlation [[liuChen]]. If you have persistent facial redness, it is worth asking a doctor or dermatologist whether it could be rosacea.',
          },
        ],
      },
      {
        id: 'acne',
        h2: 'Acne',
        blocks: [
          {
            t: 'p',
            x: 'The review says alcohol "appears to be a risk factor for acne" on the basis of cross-sectional studies in European and Asian populations, but that findings are inconsistent: in adults one study found no increased risk, and another linked alcohol to mild acne [[liuChen]]. Cross-sectional studies cannot show that drinking caused the acne.',
          },
        ],
      },
      {
        id: 'unproven',
        h2: 'What is not proven',
        blocks: [
          {
            t: 'ul',
            items: [
              '**Puffiness.** Searches for "alcohol puffy face" are common. We did not find a controlled study that measured facial puffiness after drinking and after stopping, so we do not state a mechanism or a timeline.',
              '**Before and after.** The dermatology review does not discuss whether skin conditions improve after stopping or reducing alcohol [[liuChen]]. Before-and-after photos online are individual cases.',
              '**A date.** There is no study that says your face changes by day 14 or day 30. In a 2019 Dry January evaluation, 70% reported better sleep and 54% lost weight [[acuk]]; skin was not among the figures on the page.',
            ],
          },
          {
            t: 'p',
            x: 'Sleep is the better-documented piece: alcohol disrupts the second half of the night and reduces REM sleep [[sleep]]. We found no study that ties that sleep disruption to a specific change in the face, so we leave it there.',
          },
        ],
      },
      {
        id: 'track',
        h2: 'How to see it for yourself',
        blocks: [
          {
            t: 'ol',
            items: [
              '**Take a photo in the same light** on day one, day 14 and day 30. A phone camera by a window is enough.',
              '**Note sleep and mood alongside it.** A daily check-in, plus a short journal note with a mood (Plus), shows whether the face follows the sleep.',
              '**See a doctor about persistent redness, swelling or acne** that does not change. Those can have causes that are not alcohol.',
            ],
          },
          {
            t: 'p',
            x: 'For what is documented at each stage, see [what happens when you stop drinking alcohol](/sobergirl/what-happens-when-you-stop-drinking-alcohol) and [sleep after quitting alcohol](/sobergirl/sleep-after-quitting-alcohol).',
          },
        ],
      },
    ],
    faqs: [
      { q: 'What is alcohol face?', a: 'A popular term for a red, puffy or dull look people link to drinking. It is not a medical diagnosis. Research covers specific things such as flushing, rosacea and acne.' },
      { q: 'Does alcohol cause rosacea?', a: 'A large US cohort of 82,737 women found alcohol intake was associated with a higher risk of rosacea over 14 years. It was observational. A 2023 review calls the link controversial because some studies found no correlation.' },
      { q: 'How long does it take for alcohol face to go away?', a: 'We found no study that measured it. A 2019 Dry January evaluation reported better sleep and weight loss, but skin was not among its figures.' },
      { q: 'Why does my face get red when I drink?', a: 'A 2023 dermatology review proposes that alcohol increases microvascular permeability in the skin, which may directly cause flushing. If it is strong, painful or persistent, speak to a doctor.' },
      { q: 'Does quitting alcohol clear acne?', a: 'The evidence is inconsistent. A review found some studies linked alcohol to acne and others found no increased risk in adults.' },
    ],
    related: ['what-happens-when-you-stop-drinking-alcohol', 'sleep-after-quitting-alcohol', 'benefits-of-quitting-alcohol'],
    shots: [
      { file: 'home', alt: 'Sober Girl home screen with a sober days counter and a daily check-in button', title: 'A daily check-in', caption: 'A daily check-in shows patterns memory misses. Example data.' },
      { file: 'journal', alt: 'Sober Girl private journal with short entries and mood faces', title: 'Private notes (Plus)', caption: 'Short notes about sleep and skin stay on your phone. Example data.' },
    ],
  }),
];
