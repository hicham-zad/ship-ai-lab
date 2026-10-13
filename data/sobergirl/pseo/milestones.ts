import type { Article, Block, Section, Shot } from '../articles';
import { APP_MILESTONES, SAFETY_WITHDRAWAL, drinksTable, figure, moneyTable } from './shared';

// One page per milestone badge in the app: 1, 3, 7, 14, 30, 60, 90, 180 and 365 days.
// Each page is written by hand. The template only adds the app card, the numbers and the series links.

interface MilestoneRow {
  days: number;
  slug: string;
  /** "24 hours", "3 days", "1 week" ... used in headings. */
  label: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  dek: string;
  quickAnswer: string;
  keywords: string[];
  heroAlt: string;
  safety: boolean;
  documented: { h2: string; blocks: Block[] };
  hard: { h2: string; blocks: Block[] };
  /** One paragraph about what this stage looks like in the app. */
  inApp: string;
  /** One paragraph after the tables. */
  numbersNote: string;
  mark: string[];
  prompts: string[];
  faqs: { q: string; a: string }[];
  related: string[];
  shots: Shot[];
}

export const MILESTONE_SERIES = [
  { days: 1, slug: '24-hours-sober', label: '24 hours' },
  { days: 3, slug: '3-days-sober', label: '3 days' },
  { days: 7, slug: '1-week-sober', label: '1 week' },
  { days: 14, slug: '2-weeks-sober', label: '2 weeks' },
  { days: 30, slug: '30-days-sober', label: '30 days' },
  { days: 60, slug: '60-days-sober', label: '60 days' },
  { days: 90, slug: '90-days-sober', label: '90 days' },
  { days: 180, slug: '6-months-sober', label: '6 months' },
  { days: 365, slug: '1-year-sober', label: '1 year' },
];

const ROWS: MilestoneRow[] = [
  /* ------------------------------------------------------------------ 1 day */
  {
    days: 1,
    slug: '24-hours-sober',
    label: '24 hours',
    metaTitle: '24 Hours Sober: What Happens on Day One Without Alcohol',
    metaDescription:
      'Your first 24 hours sober: when withdrawal can start, which signs need a doctor, and a practical plan for the first evening. Sourced, with a day counter.',
    h1: '24 hours sober: what happens on day one, and how to get through it',
    dek: 'The first day is the start of the count and, for some people, the start of withdrawal. Here is what is documented, what needs a doctor, and a plan for the first evening.',
    quickAnswer:
      'Day one is mostly about getting to bedtime without a drink and staying safe. MedlinePlus says withdrawal symptoms usually begin within 8 hours of the last drink and tend to peak by 24 to 72 hours [[medline]]. Not everyone who stops has symptoms, but people who drink heavily or every day should talk to a doctor before stopping. What helps most on day one is practical: a written reason, no alcohol in reach, a plan for the evening and one person who knows.',
    keywords: ['24 hours sober', 'first day sober', 'day 1 sober', '1 day sober', 'first 24 hours without alcohol', '24 hour chip'],
    heroAlt: 'A single sprout in soil beside a 24-hour clock face, the first stage of the Sober Girl tree',
    safety: true,
    documented: {
      h2: 'What is documented about the first 24 hours',
      blocks: [
        {
          t: 'p',
          x: 'The best source on the first day is the medical one. MedlinePlus says alcohol withdrawal symptoms usually start within 8 hours after the last drink, though they can begin days later, and that they tend to peak by 24 to 72 hours [[medline]]. The risk rises with how much and how often someone has been drinking.',
        },
        {
          t: 'p',
          x: 'The common signs it lists are anxiety or nervousness, low mood, tiredness, irritability, mood swings, nightmares and trouble thinking clearly, along with sweating, a racing heartbeat, headache, sleep problems, nausea and shaking [[medline]]. Feeling on edge on day one is common. Feeling very unwell is not something to push through alone.',
        },
        {
          t: 'callout',
          kind: 'note',
          title: 'Signs that need emergency care',
          x: 'MedlinePlus says to call 911 or your local emergency number if seizures, fever, severe confusion, hallucinations or an irregular heartbeat occur [[medline]]. Delirium tremens, the severe form of withdrawal, most often starts 48 to 96 hours after the last drink, but can appear 7 to 10 days later, and is most common in people who have had withdrawal before [[medlineDT]].',
        },
        {
          t: 'p',
          x: 'If you drink a few times a week rather than every day, day one may feel like nothing more than a quiet evening with a habit missing. That is also a valid start. The count begins either way.',
        },
      ],
    },
    hard: {
      h2: 'The hard part of day one: the evening',
      blocks: [
        {
          t: 'p',
          x: 'For most people the first test is the hour they usually pour a drink: after work, after the children are in bed, or when a friend texts about meeting up. Plan that hour before it arrives.',
        },
        {
          t: 'ol',
          items: [
            '**Name the hour.** Write down the time you usually start drinking and what you will do at that time today instead.',
            '**Change the first ten minutes.** A shower, a walk round the block, or a different drink in a glass you like. The urge tends to be strongest at the start.',
            '**Make the drink harder to reach.** Pour it out, give it away, or at least move it out of sight. NIAAA suggests keeping little or no alcohol at home as one way to cope with urges [[niaaaUrges]].',
            '**Tell one person.** It does not have to be a big announcement. "I am not drinking tonight" is enough.',
            '**Go to bed early if you need to.** Day one does not need to be productive. It needs to end without a drink.',
          ],
        },
        {
          t: 'p',
          x: 'If a craving comes, it helps to know it will pass. Our guide to [urge surfing](/sobergirl/urge-surfing) shows how to ride one out, and [how to stop alcohol cravings](/sobergirl/how-to-stop-alcohol-cravings) has more NIAAA-backed tactics.',
        },
      ],
    },
    inApp:
      'In Sober Girl, day one is when your counter starts and your tree appears as a small Sprout. The first badge unlocks after a full 24 hours. If you set your start date to today, the clock starts from the moment you set it, so the app never counts hours you have not had yet.',
    numbersNote:
      'One day of savings looks small. The point of writing it down now is that you will be able to see it grow. The [sobriety calculator](/sobergirl/sobriety-calculator) works it out for any start date.',
    mark: [
      'Write your reason in one sentence and keep it where you will see it tonight.',
      'Note how you feel at bedtime, in a word or two. Day three and day seven will want to compare.',
      'Take a screenshot of your counter at 24 hours. It is the only day-one screenshot you will ever get.',
    ],
    prompts: [
      'What made today the day, rather than some other day?',
      'What am I most worried about for tonight, and what is my plan for it?',
      'Who could I tell, and what exactly would I say?',
    ],
    faqs: [
      {
        q: 'What happens to your body in the first 24 hours without alcohol?',
        a: 'For people who drink heavily, withdrawal symptoms usually start within 8 hours of the last drink and tend to peak by 24 to 72 hours, according to MedlinePlus. For lighter drinkers there may be no symptoms at all. There is no reliable hour-by-hour timeline that applies to everyone.',
      },
      {
        q: 'Is it safe to stop drinking on day one by myself?',
        a: 'For many people, yes. If you drink heavily or every day, or you have had withdrawal symptoms before, talk to a doctor before you stop, because withdrawal can be dangerous. The SAMHSA National Helpline on 1-800-662-4357 is free and open 24/7.',
      },
      {
        q: 'What is a 24-hour chip?',
        a: 'In Alcoholics Anonymous and other twelve-step groups, a coin or chip often marks 24 hours without a drink. It is optional and varies by group. An app badge or a note in a journal does the same job if you are not in a group.',
      },
      {
        q: 'When does day one start, from my last drink or the next morning?',
        a: 'Either works if you are consistent. Many people count from the morning after their last drink. Our guide to counting sober days explains the options and how Sober Girl handles it.',
      },
      {
        q: 'What should I do if I drink on day one?',
        a: 'Note what happened and start again tomorrow. Many people take more than one attempt. If you find you cannot stop once you start, that is worth telling a doctor about.',
      },
    ],
    related: ['3-days-sober', 'how-to-quit-drinking-on-your-own', 'how-to-count-sober-days', '5-days-sober', '10-days-sober'],
    shots: [
      { file: 'home', alt: 'Sober Girl home screen with a sober days counter, money saved and a check-in button', title: 'Day counter in Sober Girl', caption: 'Your counter starts the moment you set your date. Example data.' },
      { file: 'sos', alt: 'Sober Girl craving SOS screen with a breathing circle and a 10-minute timer', title: 'Craving SOS for the first evening', caption: 'Craving SOS: a guided breath, a 10-minute timer and your reason. Example data.' },
    ],
  },

  /* ------------------------------------------------------------------ 3 days */
  {
    days: 3,
    slug: '3-days-sober',
    label: '3 days',
    metaTitle: '3 Days Sober (3 Days No Alcohol): The 72-Hour Mark',
    metaDescription:
      'Three days without alcohol: why the 24 to 72 hour window matters, which symptoms need a doctor, how sleep and cravings tend to behave, and what helps.',
    h1: '3 days sober: getting past the 72-hour mark',
    dek: 'Day three closes the window when withdrawal symptoms usually peak. Here is what that means, what is normal, and what to do with the restlessness.',
    quickAnswer:
      'Three days sober takes you to the end of the window when withdrawal symptoms usually peak: MedlinePlus says they tend to peak by 24 to 72 hours, though they may go on for weeks [[medline]]. Delirium tremens, the severe form, most often starts 48 to 96 hours after the last drink, so confusion, fever, hallucinations or a seizure at this stage need emergency care [[medlineDT]]. For many people, day three is simply restless: poor sleep, irritability and strong evening urges, which a plan and a distraction can get you through.',
    keywords: ['3 days sober', '72 hours sober', '3 days no alcohol', 'day 3 sober', '3 days without alcohol', 'what happens after 3 days of not drinking'],
    heroAlt: 'A seedling with three leaves next to three ticked calendar days',
    safety: true,
    documented: {
      h2: 'Why 72 hours matters',
      blocks: [
        {
          t: 'p',
          x: 'The 72-hour mark is not a magic number, but it is the one medical sources use. MedlinePlus says withdrawal symptoms tend to peak by 24 to 72 hours and may go on for weeks [[medline]]. So if day two was rough, day three is often the turn. If it is getting worse rather than better, call a doctor.',
        },
        {
          t: 'p',
          x: 'Day three also sits inside the window for the dangerous form of withdrawal. Delirium tremens most often begins 48 to 96 hours after the last drink, and is most common in people with a history of withdrawal [[medlineDT]]. If you have been drinking heavily, the safest version of day three is one a doctor knows about.',
        },
        {
          t: 'p',
          x: 'Sleep is usually the complaint people notice first. Alcohol can help you fall asleep but disrupts the second half of the night and reduces REM sleep [[sleep]], and MedlinePlus says sleep changes after stopping can last for months for some people [[medline]]. Three nights of broken sleep is common. It is not a sign that sobriety is not working.',
        },
      ],
    },
    hard: {
      h2: 'What day three tends to feel like, and what helps',
      blocks: [
        {
          t: 'p',
          x: 'By day three the novelty has gone and the benefits have not arrived yet. Many people describe it as restless and flat. That is the gap a plan is for.',
        },
        { t: 'h3', x: 'If you are irritable' },
        {
          t: 'p',
          x: 'Lower the bar for the day. Fewer plans, an earlier night, simple food. Irritability is on the MedlinePlus list of common withdrawal signs [[medline]], so it is not a character flaw showing through.',
        },
        { t: 'h3', x: 'If the evening urge is loud' },
        {
          t: 'p',
          x: 'NIAAA suggests reminding yourself of your reasons, distracting yourself with a healthy activity, or riding the urge out, and says it will crest like an ocean wave and pass [[niaaaUrges]]. Set a ten-minute timer and do something with your hands until it goes off. Then decide.',
        },
        { t: 'h3', x: 'If you cannot sleep' },
        {
          t: 'p',
          x: 'Get up at the same time anyway, keep the bedroom cool and dark, and avoid replacing alcohol with late caffeine. Our guide to [sleep after quitting alcohol](/sobergirl/sleep-after-quitting-alcohol) goes further. If sleep stays poor for weeks, tell a doctor.',
        },
      ],
    },
    inApp:
      'At three days, Sober Girl unlocks your second badge and your tree becomes a Seedling, with roots taking hold. If you have been checking in each evening, the tree already looks a little greener than the calendar alone would make it, because each check-in waters it.',
    numbersNote:
      'Three days is roughly half a week of what you used to spend. Most people are surprised by how fast the second column grows once it reaches a month. See the [money saved calculator](/sobergirl/money-saved-not-drinking-calculator) for your own figure.',
    mark: [
      'Notice one thing that is easier than on day one, however small.',
      'Plan a specific evening activity for day four, so tomorrow already has a shape.',
      'If you told someone on day one, tell them you made it to three.',
    ],
    prompts: [
      'What time of day was hardest today, and what was happening just before it?',
      'What did I do instead of drinking, and did it help?',
      'What would make tomorrow evening easier?',
    ],
    faqs: [
      {
        q: 'Is day 3 the worst day after quitting alcohol?',
        a: 'For people who have withdrawal symptoms, MedlinePlus says they tend to peak by 24 to 72 hours, so day two or three is often the hardest. Not everyone has symptoms. If you feel worse after day three rather than better, speak to a doctor.',
      },
      {
        q: 'What is the 72-hour rule for alcohol?',
        a: 'There is no official rule. People use 72 hours because withdrawal symptoms tend to peak by 24 to 72 hours. Severe withdrawal (delirium tremens) can still start later, most often 48 to 96 hours after the last drink.',
      },
      {
        q: 'Why can I not sleep 3 days after quitting drinking?',
        a: 'Sleep problems are a common withdrawal sign, and alcohol had been shaping your sleep. MedlinePlus says sleep changes after stopping can last for months for some people. Keep a regular wake time and tell a doctor if it persists.',
      },
      {
        q: 'Does Sober Girl have a badge for 3 days?',
        a: 'Yes. The app has nine milestone badges: 1, 3, 7, 14, 30, 60, 90, 180 and 365 days. At three days your tree reaches the Seedling stage.',
      },
    ],
    related: ['1-week-sober', 'sleep-after-quitting-alcohol', 'urge-surfing'],
    shots: [
      { file: 'milestones', alt: 'Sober Girl milestones screen with badges from 1 day to 365 days, the early ones unlocked', title: 'Milestone badges in Sober Girl', caption: 'Nine badges from day 1 to day 365. Day 3 is the second. Example data.' },
      { file: 'tree', alt: 'Sober Girl tree screen with a growing tree and a check-in to water it', title: 'Your tree in Sober Girl', caption: 'Each check-in waters your tree. Example data.' },
    ],
  },

  /* ------------------------------------------------------------------ 1 week */
  {
    days: 7,
    slug: '1-week-sober',
    label: '1 week',
    metaTitle: '1 Week Sober: What Changes After 7 Days Without Alcohol',
    metaDescription:
      'One week without alcohol: what research says about sleep, what people report, what is still hard, and how to mark your first seven days. Sourced.',
    h1: '1 week sober: what changes after 7 days without alcohol',
    dek: 'Seven days is the first milestone that feels like a run rather than a day. Here is what the evidence says about week one, and what tends to come next.',
    quickAnswer:
      'After one week without alcohol, the documented changes are mostly about sleep and withdrawal ending, not dramatic health shifts. For people who had withdrawal symptoms, the peak (24 to 72 hours) has passed, though MedlinePlus says sleep changes, mood swings and tiredness can last for months [[medline]]. Alcohol fragments the second half of the night and reduces REM sleep [[sleep]], so sleep is often the first thing to shift, sometimes worse before it is better. We found no trial measuring a specific benefit at exactly seven days.',
    keywords: ['1 week sober', '7 days sober', 'one week no alcohol', '7 days no alcohol', 'what happens after a week of not drinking', '1 week without alcohol'],
    heroAlt: 'A young sapling standing on its own beside a row of seven ticked days',
    safety: true,
    documented: {
      h2: 'What the evidence says about week one',
      blocks: [
        {
          t: 'p',
          x: 'Most of what is written about "one week sober" online is a list of benefits with no source. The honest version is shorter. For people who went through withdrawal, symptoms tend to peak by 24 to 72 hours, so by day seven the worst has usually passed [[medline]]. MedlinePlus also says some effects, such as sleep changes, rapid mood changes and tiredness, may last for months [[medline]].',
        },
        {
          t: 'p',
          x: 'Sleep is the area with the most research. A review in PubMed Central describes alcohol as sedating at first, then disrupting sleep in the second half of the night, and reducing REM sleep [[sleep]]. So the nights after you stop are a period of adjustment: some people sleep better within days, others sleep worse for a while before it settles.',
        },
        {
          t: 'p',
          x: 'What we could not find is a well-designed study that measured a specific change at exactly seven days. The best-studied short break is one month, which our [30 days sober](/sobergirl/30-days-sober) page covers. So treat week one as the point where the body stops reacting to the absence of alcohol, and the routines that will carry you to a month start forming.',
        },
      ],
    },
    hard: {
      h2: 'Why week two can feel harder than week one',
      blocks: [
        {
          t: 'p',
          x: 'Week one runs on adrenaline and novelty. The first weekend is often the first social test, and by day eight or nine some people notice the motivation dip. Knowing that in advance makes it easier to plan around.',
        },
        {
          t: 'ul',
          items: [
            '**Plan your first sober weekend now.** Decide where you will be on Friday and Saturday evening, and what you will drink there. Our list of [what to do instead of drinking](/sobergirl/what-to-do-instead-of-drinking) has ideas.',
            '**Have a line ready.** "I am not drinking this week" is enough. Most people do not ask a second question.',
            '**Watch for the "I have proved I can stop" thought.** It tends to arrive around day seven. Proving you can stop for a week is not the same as deciding whether to start again.',
            '**Keep checking in.** A daily check-in takes a tap. With Plus, a short journal note with a mood shows you a pattern that memory will not.',
          ],
        },
      ],
    },
    inApp:
      'At one week Sober Girl unlocks the 7-day badge, the last of the green sprout-tier badges, and your tree becomes a Sapling, standing on its own. This is also where most people first look at the money saved figure and notice it is no longer pocket change.',
    numbersNote:
      'A week is the first milestone where both columns become concrete: the money is one week of your old spending, exactly, and the drinks column is your old weekly total. Both double by day fourteen.',
    mark: [
      'Spend part of the week’s savings on something you can see, like flowers or a new mug for the drink that replaced alcohol.',
      'Compare your day-one note with today. Write down one thing that changed.',
      'Choose a reward for day 14 now, so the next target has a name.',
    ],
    prompts: [
      'What surprised me most about the first week?',
      'Which moment was closest to a drink, and what got me past it?',
      'What do I want the next seven days to look like?',
    ],
    faqs: [
      {
        q: 'What happens after 1 week of no alcohol?',
        a: 'For people who had withdrawal symptoms, the peak has usually passed by day seven. Sleep is often the first thing to change, though MedlinePlus notes sleep and mood changes can last for months for some people. We found no study measuring a specific benefit at exactly one week.',
      },
      {
        q: 'Will I sleep better after a week without alcohol?',
        a: 'Possibly, but not always straight away. Alcohol disrupts the second half of the night and reduces REM sleep, so stopping removes that. Some people sleep worse for a while as the body adjusts.',
      },
      {
        q: 'Do you lose weight after one week of not drinking?',
        a: 'It depends on what you drank and what replaced it. Each US standard drink holds about 98 kcal from the alcohol alone, so the calories add up, but one week is too short for a reliable answer. See our alcohol and weight guide for the research.',
      },
      {
        q: 'Is one week sober a big deal?',
        a: 'Yes. It is the first run long enough to notice patterns in sleep, mood and evenings. In Sober Girl it is the third badge, and the point where your tree becomes a Sapling.',
      },
    ],
    related: ['2-weeks-sober', '3-days-sober', 'what-to-do-instead-of-drinking'],
    shots: [
      { file: 'home', alt: 'Sober Girl home screen showing days sober, money saved and a daily check-in', title: 'One week in Sober Girl', caption: 'Days, money saved and a daily check-in on one screen. Example data.' },
      { file: 'tree', alt: 'Sober Girl tree screen with a sapling-stage tree and a watering check-in', title: 'Sapling stage', caption: 'At seven days your tree is a Sapling. Example data.' },
    ],
  },

  /* ------------------------------------------------------------------ 2 weeks */
  {
    days: 14,
    slug: '2-weeks-sober',
    label: '2 weeks',
    metaTitle: '2 Weeks Sober: What 14 Days Without Alcohol Adds Up To',
    metaDescription:
      'Two weeks without alcohol: what is known, what is not, the drinks and calories you skipped (worked out), and how to handle the mid-month dip.',
    h1: '2 weeks sober: what 14 days without alcohol adds up to',
    dek: 'Fourteen days is halfway to a month. Not much research looks at this exact point, so this page is honest about that, and shows the numbers you can work out for yourself.',
    quickAnswer:
      'At two weeks sober there is little research on what changes at exactly 14 days; the best-studied short break is one month [[bmj]]. What you can measure is what you skipped. If you used to have 14 US standard drinks a week, two weeks without alcohol is 28 drinks, about 392 g of alcohol and roughly 2,700 kcal from the alcohol alone, using NIAAA’s 14 g per drink [[niaaaStandard]] and 7 kcal per gram [[traversy]]. Sleep and mood may still be settling: MedlinePlus says those effects can last for months after stopping [[medline]].',
    keywords: ['2 weeks sober', '14 days sober', 'two weeks no alcohol', '14 days no alcohol', 'what happens after 2 weeks of not drinking', '2 weeks without alcohol'],
    heroAlt: 'A young tree with leaves everywhere beside a two-week calendar strip',
    safety: false,
    documented: {
      h2: 'What is known at 14 days, and what is not',
      blocks: [
        {
          t: 'p',
          x: 'Plenty of websites list what happens at two weeks: better skin, lower blood pressure, weight loss. We looked for studies that measured those things at 14 days and did not find any we would trust. The best-studied short break is a month, in a BMJ Open study that found insulin resistance, blood pressure, weight and two cancer-related growth factors all fell after four weeks without alcohol [[bmj]]. Two weeks is halfway there.',
        },
        {
          t: 'p',
          x: 'What is documented is that the after-effects of stopping can outlast the first fortnight. MedlinePlus says sleep changes, rapid mood changes and tiredness may last for months [[medline]]. If you still feel flat at two weeks, that fits. It is not a sign that you are getting nothing from it.',
        },
        {
          t: 'p',
          x: 'The other thing you can be sure of is arithmetic. The table below shows what two weeks without alcohol removed, in drinks, grams of alcohol and calories, at three levels of drinking. Find the row nearest your old week.',
        },
      ],
    },
    hard: {
      h2: 'The mid-month dip, and how to get through it',
      blocks: [
        {
          t: 'p',
          x: 'Somewhere between day ten and day twenty, many people hit a dip: the early pride has worn off, the one-month mark still feels far away, and an invitation arrives. It helps to treat the dip as a stage, not a verdict.',
        },
        {
          t: 'ol',
          items: [
            '**Shorten the horizon.** Stop thinking about the month. Think about tonight, then tomorrow.',
            '**Re-read your reason.** The one you wrote on day one. If it no longer fits, rewrite it. A reason that fits today is stronger than one that fitted two weeks ago.',
            '**Plan one thing you look forward to each week.** Not a reward for staying sober. Just something good that does not involve a drink.',
            '**Notice hangxiety you are not having.** If you used to wake up anxious after drinking, two weeks without those mornings is worth naming. Our [hangxiety](/sobergirl/hangxiety) guide explains what is known about it.',
          ],
        },
      ],
    },
    inApp:
      'At 14 days Sober Girl moves into the rose bloom tier of badges, and your tree becomes a Young tree with leaves everywhere. It is the first badge in a new colour, which is a small thing that many people like seeing.',
    numbersNote:
      'Two weeks is where the drinks column usually starts to feel real. If you were at 14 drinks a week, you have skipped 28, which is more than a standard bottle of spirits holds in standard drinks. The calories are from the alcohol only, before mixers.',
    mark: [
      'Work out your own row of the table and write it on your calendar.',
      'Tell someone the number of drinks you have skipped. It lands differently from "two weeks".',
      'Book something for day 30, even if it is just a nice dinner.',
    ],
    prompts: [
      'What has been easier than I expected, and what has been harder?',
      'When did I last think about drinking, and what set it off?',
      'What would I tell someone who is on day one right now?',
    ],
    faqs: [
      {
        q: 'What happens after 2 weeks of not drinking alcohol?',
        a: 'We found no trustworthy study measuring changes at exactly 14 days. The best-studied break is one month, which showed falls in insulin resistance, blood pressure and weight. At two weeks you can be sure of what you skipped: for a 14-drink week, that is 28 drinks and about 2,700 kcal from alcohol.',
      },
      {
        q: 'Why do I feel worse 2 weeks after quitting drinking?',
        a: 'MedlinePlus says mood swings, sleep changes and tiredness can last for months after stopping. The motivation dip around this time is also common. If you feel very low, talk to a doctor or call 988 in the US.',
      },
      {
        q: 'Can you lose weight in 2 weeks without alcohol?',
        a: 'Possibly, if what you ate and drank instead held fewer calories. The research on alcohol and weight is mixed, so we cannot promise a number. Our alcohol and weight guide covers what is known.',
      },
      {
        q: 'Is 14 days enough to break a drinking habit?',
        a: 'Probably not on its own. A well-known study of new daily habits found people took 66 days on average to make a behaviour automatic, with a wide range. Two weeks is a strong start.',
      },
    ],
    related: ['30-days-sober', '1-week-sober', 'hangxiety'],
    shots: [
      { file: 'milestones', alt: 'Sober Girl milestones screen with the 14-day badge in the rose bloom tier', title: '14-day badge', caption: 'The 14-day badge starts the bloom tier. Example data.' },
      { file: 'benefits', alt: 'Sober Girl screen listing the app features: day counter, money saved, craving SOS and private journal', title: 'What the app tracks', caption: 'What Sober Girl tracks for you. Example data.' },
    ],
  },

  /* ------------------------------------------------------------------ 30 days */
  {
    days: 30,
    slug: '30-days-sober',
    label: '30 days',
    metaTitle: '30 Days Sober: What a Month Without Alcohol Actually Changes',
    metaDescription:
      '30 days without alcohol: what a BMJ Open study measured after a month off, what people self-report, what it does not show, and how to mark day 30.',
    h1: '30 days sober: what a month without alcohol actually changes',
    dek: 'One month is the best-studied milestone in sobriety research. Here is what was measured, what people report, and the limits of both.',
    quickAnswer:
      'Thirty days is the milestone with the best evidence. In a BMJ Open study, 94 healthy people who stopped drinking for a month saw insulin resistance fall by 25.9%, systolic blood pressure by 6.6% and weight by 1.5%, with no matching changes in 47 people who kept drinking [[bmj]]. It was observational and excluded people with alcohol dependence. Separately, Dry January participants self-reported saving money (86%), sleeping better (70%) and having more energy (66%) [[acuk]].',
    keywords: ['30 days sober', '30 days no alcohol', 'one month sober', 'what happens after 30 days of not drinking', '1 month without alcohol', '30 day sobriety chip'],
    heroAlt: 'A budding tree with its first pink buds beside a full month calendar',
    safety: false,
    documented: {
      h2: 'What was measured after one month off',
      blocks: [
        {
          t: 'p',
          x: 'The study most often cited for a month without alcohol was published in BMJ Open in 2018. It followed 94 healthy people who chose to abstain for a month and 47 who carried on drinking. The abstainers had been drinking about 258 g of alcohol a week, roughly 18 US standard drinks [[bmj]] [[niaaaStandard]]. After the month, several measures fell from baseline:',
        },
        { t: 'chart', id: 'bmj' },
        {
          t: 'p',
          x: '**Read it with care.** People chose which group to join, the sample was small, and the study excluded people with liver disease or alcohol dependence [[bmj]]. These are blood and clinic measures, not things you feel. What the study does show is that a month off is not nothing, even in people who were not alcohol dependent.',
        },
        {
          t: 'h3',
          x: 'What people report',
        },
        {
          t: 'p',
          x: 'Alcohol Change UK summarises a 2019 evaluation of Dry January participants: 86% said they saved money, 70% slept better, 66% had more energy and 54% lost weight [[acuk]]. These are self-reports from people who chose to take part and answered a survey, not a trial. Treat them as what is common, not what is guaranteed.',
        },
      ],
    },
    hard: {
      h2: 'After day 30: the "I have done it, so I can drink" moment',
      blocks: [
        {
          t: 'p',
          x: 'The end of a month brings a decision people do not always notice they are making. If your goal was a 30-day break, decide in advance what day 31 looks like: carrying on, a set number of drinks, or a fixed plan for one occasion. If your goal is to stop, expect a voice that says a month proves you do not have a problem. That may be true, and it is still a separate question from whether you want to drink.',
        },
        {
          t: 'p',
          x: 'Alcohol Change UK reports that six months after Dry January, seven out of ten participants were still drinking less riskily than before [[acukAbout]]. A month can change the baseline even if you do drink again. If you want to keep going, the next milestones are [60 days](/sobergirl/60-days-sober) and [90 days](/sobergirl/90-days-sober).',
        },
      ],
    },
    inApp:
      'At 30 days Sober Girl unlocks the month badge and your tree becomes a Budding tree, the first stage with blossoms. Plus members can turn the milestone into a shareable card; anyone can screenshot the badge.',
    numbersNote:
      'A month is when the money becomes a real sum. At $50 a week, it is enough for something you would not normally buy. Use the [money saved calculator](/sobergirl/money-saved-not-drinking-calculator) to see yours.',
    mark: [
      'Spend part of the month’s savings on purpose, and write down what you bought.',
      'If you have a blood test due, ask your doctor whether it is worth doing now. Some people like seeing their own numbers.',
      'Write a short letter to yourself on day one, from today.',
    ],
    prompts: [
      'What is different about my mornings compared with a month ago?',
      'What do I want day 31 to look like, and why?',
      'Which situation am I still avoiding, and do I want to face it yet?',
    ],
    faqs: [
      {
        q: 'What happens to your body after 30 days without alcohol?',
        a: 'In a BMJ Open study of 94 people who abstained for a month, insulin resistance fell 25.9%, systolic blood pressure 6.6% and weight 1.5%, along with two cancer-related growth factors. It was observational and excluded people with alcohol dependence.',
      },
      {
        q: 'Does your liver heal after 30 days without alcohol?',
        a: 'There is no reliable date. A review in Alcohol Research: Current Reviews says fatty liver can be reversed when drinking stops, and more advanced disease can stabilise. A doctor can check your liver function.',
      },
      {
        q: 'Do you lose weight after a month without alcohol?',
        a: 'In the BMJ Open study, weight fell by 1.5% on average after a month. In a Dry January survey, 54% of participants said they lost weight. Results vary with what replaced the drinks.',
      },
      {
        q: 'Is there a 30-day sobriety chip?',
        a: 'In many twelve-step groups, yes: chips often mark 30, 60 and 90 days. Colours and intervals vary by group. Sober Girl marks it with a badge and the Budding tree stage.',
      },
    ],
    related: ['60-days-sober', '30-day-no-alcohol-challenge', 'benefits-of-quitting-alcohol'],
    shots: [
      { file: 'milestones', alt: 'Sober Girl milestones screen with the 30-day badge unlocked', title: '30-day badge', caption: 'The month badge, in the bloom tier. Example data.' },
      { file: 'home', alt: 'Sober Girl home screen with a sober days counter and money saved after a month', title: 'A month on the counter', caption: 'Days and money saved, side by side. Example data.' },
    ],
  },

  /* ------------------------------------------------------------------ 60 days */
  {
    days: 60,
    slug: '60-days-sober',
    label: '60 days',
    metaTitle: '60 Days Sober (2 Months): What Habit Research Says',
    metaDescription:
      'Two months without alcohol: what habit research says about the 60-day mark, how it fits NIAAA’s recovery stages, and how to keep going toward 90 days.',
    h1: '60 days sober: two months in, and habits starting to stick',
    dek: 'Sixty days is where research on habits, rather than research on alcohol, becomes the useful lens. Here is what it says, with its limits.',
    quickAnswer:
      'At 60 days sober, the most relevant research is about habits. In a study of 96 people building a new daily habit, it took 66 days on average for the behaviour to feel automatic, with individual times ranging from 18 days to a predicted 254 days, and a single missed day made little difference [[bpsHabit]] [[lally]]. That study did not look at alcohol, so treat it as a rough guide. NIAAA counts the first three months as the initial stage of remission or cessation [[niaaaRecovery]], so day 60 is still early, and well on the way.',
    keywords: ['60 days sober', '2 months sober', 'two months sober', '2 months no alcohol', '60 days no alcohol', '2 months without alcohol', '60 day chip'],
    heroAlt: 'A tree in full bloom with a habit loop arrow circling it',
    safety: false,
    documented: {
      h2: 'What habit research says about two months',
      blocks: [
        {
          t: 'p',
          x: 'There is very little alcohol research that looks at day 60 specifically. There is a useful study on habits. In 2010, researchers at UCL asked 96 people to repeat a new healthy behaviour every day, such as eating a piece of fruit with lunch or going for a 15-minute run before dinner, and to rate how automatic it felt [[lally]]. The average time to reach peak automaticity was 66 days, and individual times ranged from 18 days to a predicted 254 days [[bpsHabit]].',
        },
        {
          t: 'p',
          x: 'Two findings matter for sobriety. First, the range was huge, so if your new evening routine still feels effortful at day 60, you are not behind. Second, a single missed day had little impact on later gains [[bpsHabit]]. The study was about building a new habit rather than stopping an old one, and it relied on people rating their own automaticity [[bpsHabit]], so it is a guide, not a timeline.',
        },
        {
          t: 'p',
          x: 'NIAAA’s research definitions put the first three months in an "initial" band for remission from alcohol use disorder and for stopping heavy drinking, followed by "early" (3 months to 1 year) [[niaaaRecovery]]. Those are research categories, not grades, but they explain why 90 days is such a common next target.',
        },
      ],
    },
    hard: {
      h2: 'What tends to be hard at two months',
      blocks: [
        {
          t: 'p',
          x: 'Two months in, the daily effort often drops and new kinds of tests appear: a holiday, a wedding, a hard week at work, or simply boredom. The old reason for drinking can resurface in a new costume.',
        },
        {
          t: 'ul',
          items: [
            '**Boredom.** If evenings feel empty, that is a sign the old habit has gone but the new one has not filled its place. Pick one thing to get better at.',
            '**Big occasions.** Plan them like you planned your first weekend: what you will drink, who knows, and when you will leave. Our [sober holidays](/sobergirl/sober-holidays) plan works for any event.',
            '**Complacency.** Day 60 can feel safe enough to stop paying attention. Keep the check-in. It costs seconds.',
          ],
        },
      ],
    },
    inApp:
      'At 60 days Sober Girl unlocks the last of the rose bloom-tier badges and your tree reaches the Blooming tree stage, in full bloom. If you keep a journal in Plus, each entry adds a blossom of its own.',
    numbersNote:
      'At two months the drinks column is worth reading slowly. For someone who had 14 drinks a week, it is 120 drinks skipped. The calories are from alcohol alone.',
    mark: [
      'Name the new habit that replaced drinking, out loud or in writing. Habits you name are easier to keep.',
      'Put the next 30 days in the calendar with one thing to look forward to each week.',
      'If someone helped you get here, tell them.',
    ],
    prompts: [
      'Which part of my new routine already feels automatic?',
      'What still takes effort, and what would make it easier?',
      'What has drinking less given me room for?',
    ],
    faqs: [
      {
        q: 'What happens after 60 days without alcohol?',
        a: 'There is little research on day 60 itself. Habit research found new daily behaviours took 66 days on average to feel automatic, with a wide range. NIAAA counts the first three months as the initial stage of remission. Sleep and mood can still be settling for some people.',
      },
      {
        q: 'Does it take 66 days to break a habit?',
        a: 'Not exactly. The 66-day figure is an average from a study of people building new healthy habits, not stopping alcohol, and individual times ranged from 18 to a predicted 254 days.',
      },
      {
        q: 'Is 60 days sober a milestone?',
        a: 'Yes. Many twelve-step groups mark it with a chip, and Sober Girl marks it with a badge and the Blooming tree stage.',
      },
      {
        q: 'What if I slip after 60 days?',
        a: 'The habit study found a single missed day had little effect on long-term progress. A slip is information, not a reset of everything you have learned. If you cannot stop once you start, talk to a doctor.',
      },
    ],
    related: ['90-days-sober', '30-days-sober', 'sober-holidays'],
    shots: [
      { file: 'tree', alt: 'Sober Girl tree screen with a blooming tree full of pink blossoms', title: 'Blooming tree stage', caption: 'At 60 days your tree is in full bloom. Example data.' },
      { file: 'journal', alt: 'Sober Girl private journal with short entries and moods', title: 'Private journal (Plus)', caption: 'Short private notes that stay on your phone. Example data.' },
    ],
  },

  /* ------------------------------------------------------------------ 90 days */
  {
    days: 90,
    slug: '90-days-sober',
    label: '90 days',
    metaTitle: '90 Days Sober (3 Months): Why It Is Such a Big Milestone',
    metaDescription:
      '90 days without alcohol: why three months is a recognised milestone, what NIAAA’s recovery stages say, what is known about the liver, and how to mark it.',
    h1: '90 days sober: why three months is such a big milestone',
    dek: 'Ninety days shows up everywhere: in recovery research, in twelve-step chips, in apps. Here is where the number comes from and what it does and does not mean.',
    quickAnswer:
      'Ninety days sober is a recognised turning point because of how recovery is defined. NIAAA’s research definitions put the first 3 months in an "initial" stage and 3 months to 1 year in an "early" stage, for both remission from alcohol use disorder and stopping heavy drinking [[niaaaRecovery]]. Many twelve-step groups give a 90-day chip [[coinWiki]]. What 90 days does to your body is less clear: the liver research is stage-based rather than date-based, and fatty liver can reverse when drinking stops [[liver]].',
    keywords: ['90 days sober', '3 months sober', 'three months sober', '90 days no alcohol', '90 day sobriety', 'what happens after 90 days without alcohol'],
    heroAlt: 'A flowering tree with petals drifting and a plum 90-day rosette badge',
    safety: false,
    documented: {
      h2: 'Where the 90-day mark comes from',
      blocks: [
        {
          t: 'p',
          x: 'The clearest reason 90 days matters is in how researchers define recovery. NIAAA’s recovery research definitions describe remission from alcohol use disorder as no longer meeting any of its criteria, not counting craving, and split time into bands: initial (up to 3 months), early (3 months to 1 year), sustained (1 to 5 years) and stable (more than 5 years) [[niaaaRecovery]]. The same bands apply to stopping heavy drinking. Day 90 is where "initial" becomes "early".',
        },
        {
          t: 'p',
          x: 'Twelve-step culture marks the same point. In many AA groups, coins or chips are given at 30, 60 and 90 days, then at a year [[coinWiki]]. There is no official AA coin and the practice varies by group [[coinWiki]], but the 90-day chip is one of the most familiar.',
        },
        {
          t: 'h3',
          x: 'What about your liver?',
        },
        {
          t: 'p',
          x: 'Many timelines say the liver "heals" by 90 days. The research we trust does not put a date on it. A review in NIAAA’s journal Alcohol Research says alcohol-related fatty liver can be reversed when drinking stops, while more advanced disease can stabilise with abstinence [[liver]]. If your liver is a worry, ask a doctor for liver function tests. A calendar cannot tell you.',
        },
      ],
    },
    hard: {
      h2: 'After 90 days: keeping going when it feels normal',
      blocks: [
        {
          t: 'p',
          x: 'Three months is long enough for sobriety to start feeling ordinary, which is good and also a risk. The things that got you here, a plan for evenings, a reason you can see, a daily check-in, are easy to drop once the urgency fades.',
        },
        {
          t: 'ul',
          items: [
            '**Keep one daily anchor.** A check-in, a journal line, a walk. One is enough.',
            '**Notice what you have started avoiding.** If you still turn down every invitation, try one with a clear exit plan.',
            '**Look at the next band.** The next research band ends at one year. Our [6 months sober](/sobergirl/6-months-sober) page is the next stop.',
          ],
        },
        {
          t: 'p',
          x: 'If you are still having strong cravings at 90 days, that is worth raising with a doctor. NIAAA lists three FDA-approved medications for alcohol use disorder that a health professional can discuss [[niaaaSupport]].',
        },
      ],
    },
    inApp:
      'At 90 days Sober Girl unlocks the first plum deep-tier badge and your tree becomes a Flowering tree, with petals on the breeze. It is the milestone the app’s share card was designed around: "You reached 90 days."',
    numbersNote:
      'Ninety days of savings is about three months of your old spending. For many people it is the first time the total is large enough to plan something with.',
    mark: [
      'Make or share your 90-day card, or write the number somewhere permanent.',
      'Spend some of the savings on an experience rather than an object.',
      'Write down three things that are easier now than on day one.',
    ],
    prompts: [
      'Who am I at 90 days that I was not at day one?',
      'What still pulls at me, and when?',
      'What do I want to protect over the next three months?',
    ],
    faqs: [
      {
        q: 'Why is 90 days sober important?',
        a: 'NIAAA’s research definitions treat the first 3 months as the initial stage of remission, and 3 months to 1 year as early remission. Many twelve-step groups also give a 90-day chip. It is the point where sobriety moves from a start to a pattern.',
      },
      {
        q: 'Does your liver heal after 90 days without alcohol?',
        a: 'There is no reliable date. Alcohol-related fatty liver can be reversed when drinking stops, and more advanced disease can stabilise. A doctor can check your liver function.',
      },
      {
        q: 'What is a 90-day chip?',
        a: 'A coin or chip some twelve-step groups give for 90 days without a drink. It is optional and colours vary by group.',
      },
      {
        q: 'Does Sober Girl have a 90-day milestone card?',
        a: 'Yes. The 90-day badge unlocks for everyone, and Plus members can create a shareable milestone card for it.',
      },
    ],
    related: ['6-months-sober', '60-days-sober', 'sobriety-anniversary-messages'],
    shots: [
      { file: 'share', alt: 'Sober Girl milestone card reading Day 90 sober with a plum rosette badge and a share button', title: '90-day milestone card', caption: 'The 90-day card you can save or share (Plus). Example data.' },
      { file: 'milestones', alt: 'Sober Girl milestones screen with the 90-day badge unlocked', title: '90-day badge', caption: 'Ninety days starts the plum tier of badges. Example data.' },
    ],
  },

  /* ------------------------------------------------------------------ 6 months */
  {
    days: 180,
    slug: '6-months-sober',
    label: '6 months',
    metaTitle: '6 Month Sober Milestone: Half a Year Without Alcohol',
    metaDescription:
      'Six months without alcohol: what follow-ups of month-long breaks found at six months, NIAAA’s early remission stage, long-term risks for women, and how to mark it.',
    h1: '6 months sober: half a year without alcohol',
    dek: 'Six months is long enough that the question shifts from "can I" to "who am I now". Here is the evidence there is, and what we could not find.',
    quickAnswer:
      'Six months sober puts you in what NIAAA calls the early stage of remission or cessation, which runs from 3 months to 1 year [[niaaaRecovery]]. The nearest published number for six months is about drinking less, not stopping: Alcohol Change UK reports that seven out of ten Dry January participants were still drinking less riskily six months later [[acukAbout]]. We found no trial that measured health changes at six months of abstinence. The long-term picture is clearer: NIAAA says even one drink a day raises a woman’s breast cancer risk by 5% to 15% [[niaaaWomen]].',
    keywords: ['6 month sober', '6 months sober', 'six months sober', '180 days sober', 'half a year sober', '6 months without alcohol', 'six month sobriety'],
    heroAlt: 'A grand tree with deep roots and wide shade, with a half-filled year ring',
    safety: false,
    documented: {
      h2: 'What is known at six months',
      blocks: [
        {
          t: 'p',
          x: 'At six months you are in the middle of NIAAA’s "early" band, which runs from 3 months to 1 year for both remission from alcohol use disorder and stopping heavy drinking [[niaaaRecovery]]. The band is a research label, but it reflects something practical: the first year is where people are still building the life that holds sobriety in place.',
        },
        {
          t: 'p',
          x: 'The six-month figure people quote most comes from Dry January follow-ups. Alcohol Change UK reports that six months after the challenge, seven out of ten participants were still drinking less riskily than before [[acukAbout]]. That is about cutting down after one month off, not six months of not drinking at all, so it does not describe what you are doing. We looked for a study of health changes after six months of abstinence and did not find one we would cite.',
        },
        {
          t: 'h3',
          x: 'The long view for women',
        },
        {
          t: 'p',
          x: 'What is well documented is the long-term risk that stopping removes. NIAAA says even one drink a day can raise a woman’s breast cancer risk by 5% to 15% compared with not drinking, and that women are more susceptible than men to alcohol-related heart disease [[niaaaWomen]]. Six months does not erase past risk, and no study gives a date when it falls. But every month without alcohol is a month that risk is not being added to.',
        },
      ],
    },
    hard: {
      h2: 'What tends to come up at six months',
      blocks: [
        {
          t: 'ul',
          items: [
            '**The first anniversary of a hard date.** Six months is long enough to pass a birthday, a holiday season or a loss that used to involve drinking. Plan those days a week ahead.',
            '**Other people’s comments.** "Surely you can have one now?" A simple line works: "I like how I feel without it."',
            '**Old feelings without the cover.** If drinking was how you handled stress, anxiety or low mood, those feelings may be more noticeable now. Our [alcohol and depression](/sobergirl/alcohol-and-depression) guide covers what is known and where to get help.',
          ],
        },
        {
          t: 'p',
          x: 'If you are struggling, you do not have to wait for a crisis. The NIAAA Alcohol Treatment Navigator helps adults find evidence-based care [[navigator]], and in the US you can call or text 988 at any hour [[lifeline988]].',
        },
      ],
    },
    inApp:
      'At 180 days Sober Girl unlocks the second plum deep-tier badge and your tree becomes a Grand tree, with deep roots and wide shade. The next and last stage is reserved for the real one-year anniversary, so checking in cannot rush it.',
    numbersNote:
      'Half a year of your old spending is often a sum people are startled by. The drinks column is similar: at 14 drinks a week it is 360 drinks.',
    mark: [
      'Take a photo of something you did in the last six months that you would not have done drinking.',
      'Put a date in the calendar for your one-year mark and decide now how you want to spend it.',
      'Read your day-one reason. Write a new one for the next six months.',
    ],
    prompts: [
      'What would I have said six months ago if someone told me I would be here?',
      'What is still hard, and who could help with it?',
      'What do I want my one-year self to have?',
    ],
    faqs: [
      {
        q: 'What happens after 6 months without alcohol?',
        a: 'We found no trial that measured health changes at six months of abstinence. NIAAA counts 3 months to 1 year as the early stage of remission. Long-term, not drinking avoids adding to risks such as breast cancer, which NIAAA says rises 5% to 15% with one drink a day.',
      },
      {
        q: 'Is 6 months sober a big achievement?',
        a: 'Yes. It is long enough to have passed many of the occasions that used to involve alcohol. In Sober Girl it unlocks the Grand tree stage, the last before the one-year Ancient tree.',
      },
      {
        q: 'Why do I still have cravings at 6 months?',
        a: 'Cravings can return around old triggers long after stopping. If they are strong or frequent, talk to a doctor. NIAAA lists three FDA-approved medications for alcohol use disorder.',
      },
      {
        q: 'Do six-month chips exist?',
        a: 'Many twelve-step groups give a six-month coin or chip, though intervals and colours vary by group.',
      },
    ],
    related: ['1-year-sober', '90-days-sober', 'alcohol-and-depression'],
    shots: [
      { file: 'tree', alt: 'Sober Girl tree screen with a large tree and its growth stage', title: 'Grand tree stage', caption: 'At 180 days your tree is a Grand tree. Example data.' },
      { file: 'private', alt: 'Sober Girl privacy screen explaining that your journal and streak stay on your phone', title: 'Private by design', caption: 'Your streak and journal stay on your phone. Example data.' },
    ],
  },

  /* ------------------------------------------------------------------ 1 year */
  {
    days: 365,
    slug: '1-year-sober',
    label: '1 year',
    metaTitle: '1 Year Sober: What a Year Without Alcohol Means, and How to Mark It',
    metaDescription:
      'One year without alcohol: NIAAA’s sustained remission stage, what you saved and skipped (worked out), how to mark your sober anniversary, and what comes next.',
    h1: '1 year sober: what a year without alcohol means',
    dek: 'A year is the milestone people name when they talk about sobriety. Here is what research says about it, what you can work out yourself, and how to mark the day.',
    quickAnswer:
      'One year sober moves you into what NIAAA calls the sustained stage of remission or cessation, which runs from 1 to 5 years [[niaaaRecovery]]. In many twelve-step groups, a year earns the first annual coin [[coinWiki]]. The numbers are concrete: at 14 US standard drinks a week, a year without alcohol is 730 drinks, about 10 kg of alcohol and roughly 71,500 kcal from the alcohol alone [[niaaaStandard]] [[traversy]]. There is no study of what a year of sobriety feels like, and no need for one to mark it.',
    keywords: ['1 year sober', 'one year sober', 'sober for 1 year', '365 days sober', 'one year without alcohol', 'soberversary', 'first sober birthday'],
    heroAlt: 'An ancient tree with golden blossoms and a golden 365-day rosette badge',
    safety: false,
    documented: {
      h2: 'What a year means, by the research definitions',
      blocks: [
        {
          t: 'p',
          x: 'NIAAA’s recovery research definitions use four time bands: initial (up to 3 months), early (3 months to 1 year), sustained (1 to 5 years) and stable (more than 5 years) [[niaaaRecovery]]. A year without alcohol moves you from early to sustained, both for remission from alcohol use disorder and for stopping heavy drinking. NIAAA describes recovery as a process of pursuing both remission and an end to heavy drinking, often marked by improvements in physical and mental health and quality of life [[niaaaRecovery]].',
        },
        {
          t: 'p',
          x: 'In twelve-step groups, a year is often the first annual coin, after the 24-hour, 30, 60 and 90-day chips [[coinWiki]]. Practices vary by group and there is no official AA coin [[coinWiki]].',
        },
        {
          t: 'p',
          x: 'We could not find a study describing how a year of sobriety changes the body that applies to everyone, so we will not invent one. The research we have covers a month off in detail, the long-term risks that drinking adds, and the liver in stages rather than dates. Our [benefits of quitting alcohol](/sobergirl/benefits-of-quitting-alcohol) guide brings that together.',
        },
      ],
    },
    hard: {
      h2: 'After the anniversary',
      blocks: [
        {
          t: 'p',
          x: 'Some people find the weeks after a one-year anniversary oddly flat. The target they worked toward has gone. Setting a new kind of goal helps: not another number, but something the year made possible.',
        },
        {
          t: 'ul',
          items: [
            '**Keep the reason current.** The reason you stopped may not be the reason you stay stopped. Write the new one down.',
            '**Give some of it back.** If someone helped you, find a way to help someone on day one. Our page of [sobriety anniversary messages](/sobergirl/sobriety-anniversary-messages) has words for friends at every stage.',
            '**Keep an eye on the old triggers.** They are quieter, not gone. A plan for hard days still matters.',
          ],
        },
      ],
    },
    inApp:
      'At 365 days Sober Girl unlocks the golden one-year badge and your tree becomes the Ancient tree, with golden blossoms. It is the only stage the app reserves for the real anniversary: no amount of checking in can unlock it early.',
    numbersNote:
      'A year is where the arithmetic gets dramatic. At $50 a week, it is $2,607. At 14 drinks a week, the alcohol alone would have weighed about 10 kilograms. Those are your numbers to keep.',
    mark: [
      'Plan the day itself: who you want to see, what you want to do, and what you will drink.',
      'Write a letter to the person you were on day one.',
      'Spend some of the year’s savings on something that lasts.',
      'Share your day count with someone who knew you then, if you want to.',
    ],
    prompts: [
      'What did this year give me that I could not have planned?',
      'What am I proud of that nobody else saw?',
      'What do I want the next year to be about?',
    ],
    faqs: [
      {
        q: 'What happens after 1 year without alcohol?',
        a: 'By NIAAA’s research definitions, a year moves you from the early to the sustained stage of remission. There is no study describing a single set of changes for everyone at one year. You can be sure of what you skipped: at 14 drinks a week, 730 drinks.',
      },
      {
        q: 'What do you call one year sober?',
        a: 'A sober anniversary, sobriety birthday or "soberversary". In many twelve-step groups it is marked with a one-year coin.',
      },
      {
        q: 'How do you celebrate one year sober?',
        a: 'In whatever way feels right: a meal with people who supported you, a trip paid for with the savings, a letter to your day-one self, or a quiet day. Plan it a few weeks ahead so the day has a shape.',
      },
      {
        q: 'Does Sober Girl have a one-year badge?',
        a: 'Yes. The golden 365-day badge and the Ancient tree stage unlock on your real one-year anniversary.',
      },
      {
        q: 'What should I write in a card for someone 1 year sober?',
        a: 'Keep it about them, not about alcohol: "A year of choosing yourself. I am so proud of you." Our page of sobriety anniversary messages has more.',
      },
    ],
    related: ['sobriety-anniversary-messages', '6-months-sober', 'sobriety-milestones'],
    shots: [
      { file: 'milestones', alt: 'Sober Girl milestones screen with all nine badges up to the golden 365-day badge', title: 'All nine badges', caption: 'Nine milestones, ending with the golden one-year badge. Example data.' },
      { file: 'share', alt: 'Sober Girl shareable milestone card with a rosette badge and a share button', title: 'Milestone cards', caption: 'Plus members can save or share a card for each milestone. Example data.' },
    ],
  },
];

function seriesNav(days: number): Block {
  const i = MILESTONE_SERIES.findIndex((m) => m.days === days);
  const prev = MILESTONE_SERIES[i - 1];
  const next = MILESTONE_SERIES[i + 1];
  const parts: string[] = [];
  if (prev) parts.push(`Previous milestone: [${prev.label} sober](/sobergirl/${prev.slug}).`);
  if (next) parts.push(`Next milestone: [${next.label} sober](/sobergirl/${next.slug}).`);
  parts.push('All nine on one page: [sobriety milestones](/sobergirl/sobriety-milestones).');
  return { t: 'p', x: parts.join(' ') };
}

function build(r: MilestoneRow): Article {
  const app = APP_MILESTONES[r.days];
  const sections: Section[] = [];
  if (r.safety) {
    sections.push({ id: 'safety', h2: 'Safety first', blocks: [{ t: 'callout', kind: 'safety', title: 'If you drink heavily, speak to a doctor before you stop', x: SAFETY_WITHDRAWAL }] });
  }
  sections.push(
    { id: 'documented', h2: r.documented.h2, blocks: r.documented.blocks },
    { id: 'hard', h2: r.hard.h2, blocks: r.hard.blocks },
    {
      id: 'in-the-app',
      h2: `What ${r.label} looks like in Sober Girl`,
      blocks: [
        figure(
          `${r.slug}-card`,
          `Illustration of the Sober Girl ${r.days}-day badge and the ${app.stage} stage of the app’s tree, drawn from the app’s own artwork`,
          `Day ${r.days} in Sober Girl: ${app.stage}`,
          `Day ${r.days}: the ${r.label} badge and the ${app.stage} stage. “${app.stageLine}”`,
        ),
        { t: 'p', x: r.inApp },
      ],
    },
    {
      id: 'numbers',
      h2: `Your ${r.label} in numbers`,
      blocks: [
        moneyTable(r.days, r.label),
        drinksTable(r.days, r.label),
        figure(
          `${r.slug}-savings`,
          `Bar chart of money saved after ${r.label} without alcohol at $25, $50 and $100 a week`,
          `Money saved after ${r.label} sober`,
          `Money saved by ${r.label} at three weekly spends. Illustrative arithmetic.`,
          1200,
          600,
        ),
        { t: 'p', x: r.numbersNote },
      ],
    },
    { id: 'mark', h2: `How to mark ${r.label}`, blocks: [{ t: 'ul', items: r.mark }] },
    {
      id: 'journal',
      h2: `Journal prompts for ${r.label}`,
      blocks: [
        { t: 'ol', items: r.prompts },
        { t: 'p', x: 'For more, see our [sober journal prompts](/sobergirl/sober-journal-prompts), grouped by moment.' },
      ],
    },
    { id: 'next', h2: 'The other milestones', blocks: [seriesNav(r.days)] },
  );
  return {
    slug: r.slug,
    metaTitle: r.metaTitle,
    metaDescription: r.metaDescription,
    h1: r.h1,
    dek: r.dek,
    quickAnswer: r.quickAnswer,
    kicker: 'Milestone',
    keywords: r.keywords,
    heroAlt: r.heroAlt,
    sources: [],
    sections,
    faqs: r.faqs,
    related: r.related,
    shots: r.shots,
  };
}

export const MILESTONE_ARTICLES: Article[] = ROWS.map(build);
