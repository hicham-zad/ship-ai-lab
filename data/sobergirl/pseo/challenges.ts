import type { Article, Section } from '../articles';
import { SAFETY_WITHDRAWAL, figure } from './shared';

// Month-off challenges and the anniversary page. Dates are for 2027 and need updating each year.

const safety: Section = {
  id: 'safety',
  h2: 'Safety first',
  blocks: [{ t: 'callout', kind: 'safety', title: 'If you drink heavily, speak to a doctor before you stop', x: SAFETY_WITHDRAWAL }],
};

const page = (a: Omit<Article, 'sources' | 'kicker'> & { kicker?: string }): Article => ({ kicker: 'Challenge', sources: [], ...a });

export const CHALLENGE_ARTICLES: Article[] = [
  /* ------------------------------------------------------------------ 30-day challenge */
  page({
    slug: '30-day-no-alcohol-challenge',
    metaTitle: '30-Day No Alcohol Challenge: Rules, Plan and Free Calendar',
    metaDescription:
      'Start a 30-day no alcohol challenge any day of the year: set your rules, follow a week-by-week plan, print a free calendar, and see what a month off did in a study.',
    h1: '30-day no alcohol challenge: a plan you can start today',
    dek: 'You do not have to wait for January or October. Here is how to run your own month without alcohol, week by week, with a printable calendar.',
    quickAnswer:
      'A 30-day no alcohol challenge means no alcohol for 30 days in a row, starting whenever you choose. A month is the best-studied short break: in a BMJ Open study, 94 people who stopped for a month saw insulin resistance fall 25.9% and systolic blood pressure 6.6% [[bmj]]. Dry January participants reported saving money (86%), sleeping better (70%) and having more energy (66%) [[acuk]]. Plan the first weekend, decide what you will drink instead, and track the days. If you drink heavily, see a doctor first.',
    keywords: ['30 day no alcohol challenge', '30 day sober challenge', '30 days no alcohol challenge', 'one month no alcohol challenge', '30 day alcohol free challenge', 'month without alcohol'],
    heroAlt: 'A 30-day grid of circles filling with ticks from left to right, ending in a bloom',
    sections: [
      safety,
      {
        id: 'rules',
        h2: 'Set your rules before day one',
        blocks: [
          {
            t: 'ul',
            items: [
              '**Thirty days in a row, or a calendar month?** A calendar month is easy to remember. Thirty days from today lets you start now.',
              '**What counts?** Decide in advance about alcohol-free beer and wine, which can contain small amounts of alcohol, and about cooking with wine.',
              '**What happens after a slip?** Decide now, while you are calm: carry on and finish the month, or add a day at the end. Either is better than giving up.',
              '**Who knows?** One person you tell is worth more than a public post.',
            ],
          },
        ],
      },
      {
        id: 'plan',
        h2: 'Week by week',
        blocks: [
          { t: 'h3', x: 'Week 1: change the setting' },
          {
            t: 'p',
            x: 'Clear the house of alcohol, or at least move it out of sight. NIAAA suggests keeping little or no alcohol at home as a way to cope with urges [[niaaaUrges]]. Pick the drink that will replace it and buy plenty. Plan the first Friday and Saturday evening now. Read [1 week sober](/sobergirl/1-week-sober) for what to expect.',
          },
          { t: 'h3', x: 'Week 2: get through the dip' },
          {
            t: 'p',
            x: 'The novelty wears off around now. Shorten your horizon to today. Write down what you have noticed so far, even small things, such as fewer anxious mornings. See [2 weeks sober](/sobergirl/2-weeks-sober).',
          },
          { t: 'h3', x: 'Week 3: test it' },
          {
            t: 'p',
            x: 'If you have avoided a social event, try one with a plan: your own drink, a line ready, a time to leave. Our list of [what to do instead of drinking](/sobergirl/what-to-do-instead-of-drinking) has ideas for evenings.',
          },
          { t: 'h3', x: 'Week 4: decide what comes next' },
          {
            t: 'p',
            x: 'Before day 30, decide what day 31 looks like. Carrying on, a set limit, or alcohol-free weekdays. Alcohol Change UK reports that six months after Dry January, seven in ten participants were still drinking less riskily than before [[acukAbout]]. See [30 days sober](/sobergirl/30-days-sober) for what a month can change.',
          },
        ],
      },
      {
        id: 'calendar',
        h2: 'Print your 30-day calendar',
        blocks: [
          { t: 'p', x: 'Choose 30 days and your start date, then print or save as PDF. Tick off each day on the fridge. Nothing you enter is stored.' },
          { t: 'sobcal' },
          figure(
            '30-day-no-alcohol-challenge-calendar',
            'A 30-day challenge calendar with week labels and each day as a circle to tick',
            '30-day no alcohol challenge calendar',
            'Thirty circles, four weeks and a finish line. Print the real one above.',
            1200,
            760,
          ),
        ],
      },
      {
        id: 'evidence',
        h2: 'What a month off did in a study',
        blocks: [
          { t: 'chart', id: 'bmj' },
          {
            t: 'p',
            x: 'The BMJ Open study was observational, small and excluded people with liver disease or alcohol dependence [[bmj]]. The Dry January figures are self-reported [[acuk]]. Neither guarantees what you will feel. Both suggest a month is long enough to matter.',
          },
        ],
      },
    ],
    faqs: [
      { q: 'What happens if you do not drink alcohol for 30 days?', a: 'In a BMJ Open study of 94 people who stopped for a month, insulin resistance, blood pressure, weight and two cancer-related growth factors fell. Dry January participants commonly report saving money, sleeping better and having more energy.' },
      { q: 'Can I start a 30-day no alcohol challenge any time?', a: 'Yes. You do not need an organised month. Thirty days from any start date works the same way.' },
      { q: 'Does alcohol-free beer count?', a: 'Decide before you start. Some alcohol-free drinks contain small amounts of alcohol. If you are avoiding alcohol for medical reasons, ask a doctor.' },
      { q: 'What if I drink during the challenge?', a: 'Carry on. One drink does not cancel the rest of the month. Note what led to it and plan for that situation next time.' },
      { q: 'How do I track a 30-day challenge?', a: 'Print the calendar on this page, or use a tracker app. Sober Girl counts your days and money saved and unlocks a badge at 30 days.' },
    ],
    related: ['30-days-sober', 'sobriety-calendar', 'dry-january-guide'],
    shots: [
      { file: 'home', alt: 'Sober Girl home screen with a day counter and money saved, used to track a 30-day challenge', title: 'Track your 30 days', caption: 'Count the days and the money saved. Example data.' },
      { file: 'milestones', alt: 'Sober Girl milestone badges at 1, 3, 7, 14 and 30 days', title: 'Five badges in a month', caption: 'Five badges unlock during a 30-day challenge. Example data.' },
    ],
  }),

  /* ------------------------------------------------------------------ Dry February */
  page({
    slug: 'dry-february',
    metaTitle: 'Dry February 2027: Rules, Dates and How to Do Dry Feb',
    metaDescription:
      'Dry February 2027 runs from 1 to 28 February. What Dry Feb is, who runs it in Canada, how it differs from Dry January, a plan for the month and a free calendar.',
    h1: 'Dry February 2027: how to do Dry Feb',
    dek: 'Dry February is the shortest month-off challenge: 28 days in 2027. Here is where it comes from, how to plan it, and how to keep going into March.',
    quickAnswer:
      'Dry February means no alcohol from 1 to 28 February; in 2027 that is 28 days, Monday 1 to Sunday 28 February. In Canada, Dry Feb is a fundraiser run by the Canadian Cancer Society, which says it raised over $13 million between 2016 and early 2024, and that drinking any type of alcohol raises the risk of at least 9 types of cancer [[dryFeb]]. Anyone can do it, with or without signing up. A month off has measurable effects: in one study, insulin resistance fell 25.9% after a month without alcohol [[bmj]].',
    keywords: ['dry february', 'dry feb', 'dry february 2027', 'dry feb challenge', 'alcohol free february', 'dry february canada'],
    heroAlt: 'A February 2027 calendar with 28 days and a heart on the fourteenth',
    sections: [
      safety,
      {
        id: 'what',
        h2: 'What Dry February is',
        blocks: [
          {
            t: 'p',
            x: 'Dry February is a month without alcohol in February. The best-known version is Dry Feb in Canada, run by the Canadian Cancer Society as a fundraiser: participants go alcohol-free and raise money for cancer research and support. In January 2024, the society said the campaign had raised over $13 million since 2016 [[dryFeb]].',
          },
          {
            t: 'p',
            x: 'The society’s health message is about cancer: it says drinking any type of alcohol, beer, wine or spirits, raises your risk of at least 9 different types of cancer [[dryFeb]]. You do not need to sign up to do the challenge. Many people outside Canada use February as a second chance after a Dry January that did not happen.',
          },
        ],
      },
      {
        id: 'dates',
        h2: 'Dry February 2027 dates',
        blocks: [
          {
            t: 'table',
            head: ['', 'Dry February 2027'],
            rows: [
              ['Starts', 'Monday 1 February 2027'],
              ['Ends', 'Sunday 28 February 2027'],
              ['Length', '28 days (2027 is not a leap year)'],
              ['Weekends', 'Four full weekends'],
              ['Watch out for', 'Valentine’s Day, Sunday 14 February'],
            ],
          },
          figure(
            'dry-february-calendar',
            'February 2027 calendar starting on Monday 1 February, with 28 days and Valentine’s Day marked',
            'Dry February 2027 calendar',
            'February 2027 starts on a Monday and has exactly four weeks.',
            1200,
            760,
          ),
        ],
      },
      {
        id: 'plan',
        h2: 'A plan for 28 days',
        blocks: [
          {
            t: 'ol',
            items: [
              '**Late January: clear the house** and buy the drinks you will have instead.',
              '**Week 1: plan both weekends ahead.** February’s first weekend is the first test.',
              '**Week 2: plan Valentine’s Day.** A good dinner without wine, a mocktail, or a different kind of evening. Tell your partner in advance.',
              '**Week 3: notice what has changed.** Sleep, mornings, money. Write it down.',
              '**Week 4: decide about March.** Four weeks is a natural point to ask whether you want to carry on.',
            ],
          },
          {
            t: 'p',
            x: 'If you are fundraising, your weekly savings make an easy donation: work out yours with the [money saved calculator](/sobergirl/money-saved-not-drinking-calculator).',
          },
        ],
      },
      {
        id: 'vs-january',
        h2: 'Dry February or Dry January?',
        blocks: [
          {
            t: 'p',
            x: 'Dry January is the original and the most studied: it is run by Alcohol Change UK, which reports that seven in ten participants were still drinking less riskily six months later [[acukAbout]]. February has two advantages. It is shorter, and it comes after the January social calendar has quietened down. If January was not the right time, February is not second best. See our [Dry January guide](/sobergirl/dry-january-guide) for the January version.',
          },
        ],
      },
    ],
    faqs: [
      { q: 'When is Dry February 2027?', a: 'From Monday 1 February to Sunday 28 February 2027: 28 days.' },
      { q: 'Who runs Dry Feb?', a: 'In Canada, Dry Feb is a fundraiser run by the Canadian Cancer Society. Anyone can also do a dry February informally.' },
      { q: 'Is Dry February easier than Dry January?', a: 'It is shorter, with 28 days in 2027, and comes after the holiday season. Valentine’s Day is the main social test.' },
      { q: 'What are the benefits of Dry February?', a: 'A month off has measurable effects: in a BMJ Open study, insulin resistance, blood pressure and weight fell after a month without alcohol. Results vary between people.' },
    ],
    related: ['dry-january-guide', '30-day-no-alcohol-challenge', 'alcohol-free-for-lent'],
    shots: [
      { file: 'home', alt: 'Sober Girl home screen tracking a 28-day alcohol-free month with money saved', title: 'Track Dry February', caption: 'Count your 28 days and what you saved. Example data.' },
      { file: 'sos', alt: 'Sober Girl craving SOS with breathing and a timer', title: 'Craving SOS', caption: 'For the hard evenings: a breath, a timer and your reason. Example data.' },
    ],
  }),

  /* ------------------------------------------------------------------ Lent */
  page({
    slug: 'alcohol-free-for-lent',
    metaTitle: 'Giving Up Alcohol for Lent 2027: Dates, Sundays and a Plan',
    metaDescription:
      'Giving up alcohol for Lent 2027: Ash Wednesday is 10 February and Easter Sunday 28 March. Whether Sundays count, how to plan 40 or 46 days, and what to expect.',
    h1: 'Giving up alcohol for Lent 2027',
    dek: 'Lent is one of the oldest reasons people take a break from drinking. Here are the 2027 dates, the Sunday question, and a plan for six and a half weeks.',
    quickAnswer:
      'In 2027, Lent runs from Ash Wednesday, 10 February, to Holy Saturday, 27 March, the day before Easter Sunday (28 March), in Western churches. That is 46 days, or 40 if you take the six Sundays off, as many people who give something up for Lent do. Either way it is longer than a month, the best-studied break: in a BMJ Open study, a month without alcohol lowered insulin resistance by 25.9% and systolic blood pressure by 6.6% [[bmj]]. If you drink heavily, speak to a doctor before you stop.',
    keywords: ['giving up alcohol for lent', 'alcohol free lent', 'lent no alcohol', 'giving up drinking for lent', 'lent 2027', 'do sundays count in lent alcohol'],
    heroAlt: 'A simple cross of ash beside a calendar from February to an Easter flower in March',
    sections: [
      safety,
      {
        id: 'dates',
        h2: 'Lent 2027 dates',
        blocks: [
          {
            t: 'table',
            caption: 'Western (Catholic and Protestant) calendar. Orthodox Lent follows a different date for Easter.',
            head: ['', 'Lent 2027'],
            rows: [
              ['Starts', 'Ash Wednesday, 10 February 2027'],
              ['Ends', 'Holy Saturday, 27 March 2027. Easter Sunday is 28 March'],
              ['Length including Sundays', '46 days'],
              ['Length without Sundays', '40 days'],
              ['Overlaps', '19 days of Dry February (10 to 28 February)'],
            ],
          },
          figure(
            'alcohol-free-for-lent-calendar',
            'Calendar from Ash Wednesday 10 February 2027 to Holy Saturday 27 March 2027, with the six Sundays shaded and Easter marked',
            'Lent 2027 calendar',
            'Lent 2027: 46 days from Ash Wednesday to the day before Easter, with the six Sundays shaded.',
            1200,
            760,
          ),
        ],
      },
      {
        id: 'sundays',
        h2: 'Do Sundays count?',
        blocks: [
          {
            t: 'p',
            x: 'This is the question everyone asks. The 40 days of Lent traditionally leave out Sundays, which is how 46 calendar days become 40. Many people who give something up treat Sundays as a day off from it. Others keep going straight through. There is no wrong answer, but decide before Ash Wednesday.',
          },
          {
            t: 'p',
            x: 'If your reason for giving up alcohol is your health rather than your faith, going straight through is simpler: one unbroken run of 46 days, and a clean count. If it is about practice and community, follow what your church or tradition does.',
          },
        ],
      },
      {
        id: 'plan',
        h2: 'A plan for six and a half weeks',
        blocks: [
          {
            t: 'ul',
            items: [
              '**Before Ash Wednesday:** clear the house, choose the drink that replaces alcohol, and decide about Sundays.',
              '**Weeks 1 and 2:** treat it like any first fortnight. Plan evenings and weekends. See [1 week sober](/sobergirl/1-week-sober).',
              '**Around day 30:** you will pass the one-month mark, the best-studied milestone. See [30 days sober](/sobergirl/30-days-sober).',
              '**Holy Week:** the last week has its own social calendar. Plan Easter Sunday itself, especially if wine is usually on the table.',
              '**After Easter:** decide whether to carry on. Many people find the end of a fast is a good moment to keep going rather than go back.',
            ],
          },
        ],
      },
      {
        id: 'why',
        h2: 'Why Lent can be easier than a resolution',
        blocks: [
          {
            t: 'p',
            x: 'Lent has a clear start and end, a reason bigger than willpower for many people, and others doing something similar at the same time. That shared structure is a lot like what makes organised challenges such as Dry January work: Alcohol Change UK reports that most participants were still drinking less riskily six months later [[acukAbout]].',
          },
        ],
      },
    ],
    faqs: [
      { q: 'When is Lent 2027?', a: 'In Western churches, from Ash Wednesday, 10 February 2027, to Holy Saturday, 27 March 2027. Easter Sunday is 28 March.' },
      { q: 'How many days is Lent without alcohol?', a: '46 calendar days, or 40 if you take the six Sundays off.' },
      { q: 'Can I drink on Sundays during Lent?', a: 'Many people treat Sundays as a break from what they have given up, because the 40 days of Lent traditionally exclude Sundays. Others go straight through. Decide before you start.' },
      { q: 'Is giving up alcohol for Lent good for you?', a: 'A month without alcohol has measurable effects in research, including lower insulin resistance and blood pressure. Lent is longer than a month.' },
    ],
    related: ['dry-february', '30-day-no-alcohol-challenge', 'what-to-do-instead-of-drinking'],
    shots: [
      { file: 'home', alt: 'Sober Girl home screen with a day counter for a Lent alcohol fast', title: 'Count Lent', caption: 'Count the days from Ash Wednesday. Example data.' },
      { file: 'tree', alt: 'Sober Girl tree growing through its stages over six weeks', title: 'Your tree over Lent', caption: 'By Easter your tree reaches the Budding stage. Example data.' },
    ],
  }),

  /* ------------------------------------------------------------------ Dry July */
  page({
    slug: 'dry-july',
    metaTitle: 'Dry July 2027: What It Is, Dates and How to Do It',
    metaDescription:
      'Dry July 2027 runs 1 to 31 July. Where the Australian challenge came from, what it raises money for, a plan for a winter (or summer) month off, and a free calendar.',
    h1: 'Dry July 2027: how to do it',
    dek: 'Dry July started in Australia in 2008 and now runs in New Zealand too. Here is the history, the 2027 dates and a plan, whether July is winter or summer where you are.',
    quickAnswer:
      'Dry July is a month without alcohol in July that raises money for cancer services. It began in Australia in 2008, when three friends gave up alcohol for a month to raise money for their local hospital; the first year raised over $250,000, it expanded to New Zealand in 2012, and the foundation says it has raised more than $90 million [[dryJulyWiki]]. In 2027 it runs from Thursday 1 to Saturday 31 July. A month off is the best-studied break: one study found falls in insulin resistance, blood pressure and weight [[bmj]].',
    keywords: ['dry july', 'dry july 2027', 'dry july challenge', 'dry july australia', 'dry july nz', 'alcohol free july'],
    heroAlt: 'A July 2027 calendar under a winter sun with a bloom on the last day',
    sections: [
      safety,
      {
        id: 'what',
        h2: 'Where Dry July came from',
        blocks: [
          {
            t: 'p',
            x: 'Dry July started in Australia in 2008. Phil Grove, Brett Macdonald and Kenny McGilvary pledged to give up alcohol for a month to raise money for their local hospital. More than 1,000 people signed up in the first year and it raised over $250,000. It expanded to New Zealand in 2012 [[dryJulyWiki]].',
          },
          {
            t: 'p',
            x: 'Participants choose a cancer service to receive their donations, and the Dry July Foundation claimed in 2024 to have raised more than $90 million for people affected by cancer [[dryJulyWiki]]. These figures come from Wikipedia, a secondary source, because the foundation’s own site blocked our automated check. Check dryjuly.com for current figures.',
          },
        ],
      },
      {
        id: 'dates',
        h2: 'Dry July 2027 dates',
        blocks: [
          {
            t: 'table',
            head: ['', 'Dry July 2027'],
            rows: [
              ['Starts', 'Thursday 1 July 2027'],
              ['Ends', 'Saturday 31 July 2027'],
              ['Length', '31 days'],
              ['Weekends', 'Five Saturdays'],
              ['Season', 'Winter in Australia and New Zealand, summer in the northern hemisphere'],
            ],
          },
          figure(
            'dry-july-calendar',
            'July 2027 calendar starting on Thursday 1 July and ending on Saturday 31 July, with weekends shaded',
            'Dry July 2027 calendar',
            'July 2027 has five Saturdays, so plan five weekends.',
            1200,
            760,
          ),
        ],
      },
      {
        id: 'plan',
        h2: 'A plan for 31 days',
        blocks: [
          { t: 'h3', x: 'If July is winter where you are' },
          {
            t: 'p',
            x: 'Cold, dark evenings are when a warming drink feels most like a habit. Plan replacements you actually like, something hot after dinner, and one evening a week out of the house. Our [sleep after quitting alcohol](/sobergirl/sleep-after-quitting-alcohol) guide helps with the long nights.',
          },
          { t: 'h3', x: 'If July is summer where you are' },
          {
            t: 'p',
            x: 'Barbecues, holidays and long light evenings are the test. Bring your own drinks to everything, have a line ready, and plan what you will do at the time you would usually have a drink outside. See [what to do instead of drinking](/sobergirl/what-to-do-instead-of-drinking).',
          },
          { t: 'h3', x: 'Either way' },
          {
            t: 'ul',
            items: [
              'Plan the first and last weekends especially. July 2027 starts on a Thursday, so the first weekend arrives on day three.',
              'If you are fundraising, donate your weekly savings as you go.',
              'Decide about August before 31 July.',
            ],
          },
        ],
      },
      {
        id: 'evidence',
        h2: 'What a month off can do',
        blocks: [
          {
            t: 'p',
            x: 'In a BMJ Open study, 94 people who stopped drinking for a month saw insulin resistance fall 25.9%, systolic blood pressure 6.6% and weight 1.5% [[bmj]]. It was observational and excluded people with alcohol dependence. In a survey of Dry January participants, 86% said they saved money and 70% slept better [[acuk]].',
          },
        ],
      },
    ],
    faqs: [
      { q: 'When is Dry July 2027?', a: 'From Thursday 1 July to Saturday 31 July 2027: 31 days.' },
      { q: 'Who started Dry July?', a: 'Three friends in Australia in 2008, who gave up alcohol for a month to raise money for their local hospital. It expanded to New Zealand in 2012.' },
      { q: 'What does Dry July raise money for?', a: 'Cancer services. Participants choose a cancer organisation to receive their donations.' },
      { q: 'Can I do Dry July outside Australia?', a: 'Yes. Anyone can take July off alcohol. The official fundraiser is focused on Australia and New Zealand.' },
    ],
    related: ['30-day-no-alcohol-challenge', 'sober-september', 'sober-october'],
    shots: [
      { file: 'home', alt: 'Sober Girl home screen tracking a month off alcohol with days and money saved', title: 'Track Dry July', caption: 'Count 31 days and the money saved. Example data.' },
      { file: 'milestones', alt: 'Sober Girl milestone badges up to 30 days unlocked', title: 'Badges during July', caption: 'Five badges unlock by 31 July. Example data.' },
    ],
  }),

  /* ------------------------------------------------------------------ Sober September */
  page({
    slug: 'sober-september',
    metaTitle: 'Sober September 2027: How to Do It, and What to Expect',
    metaDescription:
      'Sober September 2027 runs 1 to 30 September. What it is (and what we could not verify about its origin), a plan for back-to-routine month, and a free calendar.',
    h1: 'Sober September 2027: how to do it',
    dek: 'September is a natural reset: summer is over and routines restart. Here is how to use it for a month without alcohol, and how it leads into Sober October.',
    quickAnswer:
      'Sober September means no alcohol from 1 to 30 September; in 2027 that is Wednesday 1 to Thursday 30 September. Unlike Dry January, it has no single organiser we could verify, so treat it as an informal challenge you run yourself. September suits a reset because routines restart after summer. A month off is the best-studied break: a BMJ Open study found falls in insulin resistance, blood pressure and weight after one month [[bmj]], and 70% of Dry January participants reported sleeping better [[acuk]].',
    keywords: ['sober september', 'sober september 2027', 'sober september challenge', 'dry september', 'alcohol free september', 'september no alcohol'],
    heroAlt: 'A September 2027 calendar with autumn leaves falling into a glass of sparkling water',
    sections: [
      safety,
      {
        id: 'what',
        h2: 'What Sober September is',
        blocks: [
          {
            t: 'p',
            x: 'Sober September is a month without alcohol in September. We looked for who started it and could not find an origin we could verify: there is no official organiser in the way Alcohol Change UK runs Dry January [[acukAbout]] or Macmillan runs Sober for October [[macmillan]]. That makes it flexible. You set the rules, and you do not need to sign up for anything.',
          },
        ],
      },
      {
        id: 'dates',
        h2: 'Sober September 2027 dates',
        blocks: [
          {
            t: 'table',
            head: ['', 'Sober September 2027'],
            rows: [
              ['Starts', 'Wednesday 1 September 2027'],
              ['Ends', 'Thursday 30 September 2027'],
              ['Length', '30 days'],
              ['US holiday', 'Labor Day, Monday 6 September'],
              ['Next', 'Sober October starts the day after'],
            ],
          },
          figure(
            'sober-september-calendar',
            'September 2027 calendar from Wednesday 1 to Thursday 30 September, with Labor Day marked',
            'Sober September 2027 calendar',
            'September 2027: 30 days, with Labor Day weekend early on.',
            1200,
            760,
          ),
        ],
      },
      {
        id: 'plan',
        h2: 'A plan for a back-to-routine month',
        blocks: [
          {
            t: 'ul',
            items: [
              '**Start with the routine change.** School terms, work projects and evenings restart. Build your alcohol-free evening into the new routine from day one, rather than adding it later.',
              '**Plan Labor Day weekend.** It arrives in the first week, before new habits have settled.',
              '**Use the season.** Longer evenings indoors are good for a new hobby, a class or an early night.',
              '**Watch the end-of-summer feeling.** Some people drink to stretch summer out. Name it if you notice it.',
            ],
          },
        ],
      },
      {
        id: 'rules',
        h2: 'Your rules, since nobody sets them for you',
        blocks: [
          {
            t: 'p',
            x: 'Without an organiser, Sober September is whatever you decide it is. That freedom is useful, but only if you decide before 1 September rather than in the middle of a Friday night.',
          },
          {
            t: 'ul',
            items: [
              '**All 30 days, or weekdays only?** A full month gives you a clean result. Weekdays only is a smaller step that still breaks the daily habit.',
              '**Alcohol-free drinks:** in or out? Some people find a zero-alcohol beer keeps the ritual going; others find it keeps the craving going.',
              '**A wedding or holiday in the month?** Choose now whether it is an exception, and if it is, what your limit will be that day.',
              '**What you will track.** Days, money, sleep or mood. Pick one or two so you can compare the start of the month with the end.',
            ],
          },
        ],
      },
      {
        id: 'october',
        h2: 'September into October: a 61-day run',
        blocks: [
          {
            t: 'p',
            x: 'Sober September leads straight into Sober October, so you can turn one month into two. Sixty-one days takes you past the [60-day milestone](/sobergirl/60-days-sober), which is around the point habit research suggests new routines start to feel automatic, on average [[bpsHabit]]. See our [Sober October guide](/sobergirl/sober-october) for the second month.',
          },
        ],
      },
    ],
    faqs: [
      { q: 'When is Sober September 2027?', a: 'From Wednesday 1 September to Thursday 30 September 2027: 30 days.' },
      { q: 'Who started Sober September?', a: 'We could not verify an origin or a single organiser. Treat it as an informal challenge.' },
      { q: 'What is the difference between Sober September and Sober October?', a: 'Only the month. Sober October is linked to Macmillan’s Go Sober for October fundraiser in the UK. You can do both back to back for 61 days.' },
      { q: 'What are the benefits of Sober September?', a: 'A month without alcohol has measurable effects in research, including lower insulin resistance and blood pressure, and many people report saving money and sleeping better.' },
    ],
    related: ['sober-october', '30-day-no-alcohol-challenge', 'dry-july'],
    shots: [
      { file: 'home', alt: 'Sober Girl home screen tracking a month without alcohol', title: 'Track Sober September', caption: 'Count your 30 days. Example data.' },
      { file: 'tree', alt: 'Sober Girl tree growing through stages over a month', title: 'Grow your tree', caption: 'By 30 September your tree reaches the Budding stage. Example data.' },
    ],
  }),

  /* ------------------------------------------------------------------ Anniversary messages */
  page({
    slug: 'sobriety-anniversary-messages',
    kicker: 'Guide',
    metaTitle: 'Soberversary Messages and Ideas: What to Write (2026)',
    metaDescription:
      'Happy soberversary messages for 30 days, 90 days, 1 year and beyond. What to write in a sobriety anniversary card, what not to say, cake and gift ideas, and words for your own day.',
    h1: 'Soberversary messages: what to write for every sobriety milestone',
    dek: 'A friend has hit 30 days, or a year, or ten. Here is what to write, what to avoid, and some words for your own anniversary.',
    quickAnswer:
      'A good soberversary (sobriety anniversary) message is short, specific and about the person, not about alcohol: "A year of choosing yourself. I am so proud of you." Mention the milestone, say what you have noticed, and avoid comments about their past drinking or jokes about having "just one". Many twelve-step groups mark 24 hours, 30, 60 and 90 days, then each year, with a coin [[coinWiki]], so those are natural dates for a message. Below are messages by milestone, and words for your own day.',
    keywords: ['soberversary', 'happy soberversary', 'sobriety anniversary', 'sober anniversary', 'sobriety birthday', 'sober birthday', 'sobriety cake', 'sobriety anniversary messages', 'what to write in a sobriety card'],
    heroAlt: 'A handwritten card with a golden rosette badge and a small bloom',
    sections: [
      {
        id: 'how',
        h2: 'How to write one',
        blocks: [
          {
            t: 'ol',
            items: [
              '**Name the milestone.** "Ninety days" lands harder than "well done".',
              '**Say what you have noticed.** "You seem so much more yourself" is worth more than a quote.',
              '**Keep it about them.** Not about how hard it was for you, and not about their drinking.',
              '**Keep it short.** Two or three lines is plenty.',
              '**Ask first, if it is public.** Not everyone shares their sobriety. A private message is always safe.',
            ],
          },
        ],
      },
      {
        id: 'by-milestone',
        h2: 'Happy soberversary messages by milestone',
        blocks: [
          { t: 'h3', x: '30 days' },
          {
            t: 'ul',
            items: [
              '"A whole month. That is not luck, that is you."',
              '"Thirty days of showing up for yourself. I see it, and I am proud of you."',
              '"One month down. I am in your corner for the next one."',
            ],
          },
          { t: 'h3', x: '90 days' },
          {
            t: 'ul',
            items: [
              '"Ninety days. You have built something real."',
              '"Three months of choosing you. It shows."',
              '"Happy 90 days. Whatever you need for the next 90, I am here."',
            ],
          },
          { t: 'h3', x: '6 months' },
          {
            t: 'ul',
            items: [
              '"Half a year. I love watching you become more you."',
              '"Six months of hard, quiet work. Celebrate it loudly."',
            ],
          },
          { t: 'h3', x: '1 year' },
          {
            t: 'ul',
            items: [
              '"A year of choosing yourself. I am so proud of you."',
              '"Happy first sober birthday. Here is to everything this year made room for."',
              '"365 days. You did every single one of them."',
            ],
          },
          { t: 'h3', x: 'Many years' },
          {
            t: 'ul',
            items: [
              '"Five years. You make it look easy, and I know it is not."',
              '"Ten years sober. Thank you for showing so many people it is possible."',
            ],
          },
          figure(
            'sobriety-anniversary-messages-card',
            'Four milestone badges for 30 days, 90 days, 6 months and 1 year, each with a short message underneath',
            'Sobriety anniversary messages by milestone',
            'Short and specific beats long and general.',
          ),
        ],
      },
      {
        id: 'avoid',
        h2: 'What not to say',
        blocks: [
          {
            t: 'ul',
            items: [
              '**"So you can have one drink now?"** Even as a joke.',
              '**"I never thought you had a problem."** It turns their milestone into a debate.',
              '**"Remember when you…"** stories about their drinking days.',
              '**"Let’s celebrate with a drink!"** Suggest a meal, a coffee or a walk instead.',
              '**Anything that sounds like a test,** such as asking how many days exactly in front of others.',
            ],
          },
        ],
      },
      {
        id: 'yourself',
        h2: 'Words for your own anniversary',
        blocks: [
          {
            t: 'p',
            x: 'If it is your own day, you are allowed to mark it. Some lines people use to caption a milestone card or a journal entry:',
          },
          {
            t: 'ul',
            items: [
              '"Day 365. Still choosing me."',
              '"Ninety days ago I did not think I could do one."',
              '"A year without alcohol, and a lot more of everything else."',
              '"Not counting days I have lost. Counting days I have kept."',
            ],
          },
          {
            t: 'p',
            x: 'Sober Girl Plus can turn each milestone into a shareable card, and anyone can screenshot the badge. For what each milestone means, see [90 days sober](/sobergirl/90-days-sober) and [1 year sober](/sobergirl/1-year-sober).',
          },
        ],
      },
      {
        id: 'gifts',
        h2: 'Gifts that are not about alcohol',
        blocks: [
          {
            t: 'ul',
            items: [
              'A sobriety cake. A plain cake with the number on it, or a cake topper, is a common way to mark a sober birthday.',
              'An experience: a meal, a concert, a day out.',
              'Something for the new evening routine: a good mug, tea, a book.',
              'A sobriety coin or chip, if they are in a twelve-step group and would like one. Colours and intervals vary by group [[coinWiki]].',
              'A handwritten card. Often the thing people keep.',
            ],
          },
        ],
      },
    ],
    faqs: [
      { q: 'What do you write in a sobriety anniversary card?', a: 'Name the milestone, say what you have noticed and keep it about them: "A year of choosing yourself. I am so proud of you."' },
      { q: 'What is a soberversary?', a: 'A soberversary is the anniversary of your sober date, also called a sober anniversary, sobriety anniversary or sobriety birthday. People mark it each year, and often at milestones such as 30 days, 90 days and 6 months.' },
      { q: 'What do you say on a sober birthday?', a: 'Keep it about them: "Happy soberversary. A year of choosing yourself, and I am so proud of you." Avoid jokes about drinking and stories about their past.' },
      { q: 'What should you not say to someone celebrating sobriety?', a: 'Avoid jokes about having one drink, comments about whether they had a problem, and stories about their drinking days.' },
      { q: 'What is a good gift for a sobriety anniversary?', a: 'An experience, something for their new routine, a handwritten card, or a coin if they are in a twelve-step group.' },
      { q: 'Which sobriety milestones are usually celebrated?', a: 'Many groups mark 24 hours, 30, 60 and 90 days, then each year. Sober Girl has badges at 1, 3, 7, 14, 30, 60, 90, 180 and 365 days.' },
    ],
    related: ['1-year-sober', '90-days-sober', 'sobriety-milestones'],
    shots: [
      { file: 'share', alt: 'Sober Girl milestone card reading Day 90 sober, ready to share', title: 'Shareable milestone card', caption: 'A milestone card you can save or share (Plus). Example data.' },
      { file: 'milestones', alt: 'Sober Girl milestone badges from 1 to 365 days', title: 'Nine milestones', caption: 'Nine milestones worth a message. Example data.' },
    ],
  }),
];
