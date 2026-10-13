import type { Article } from '../articles';
import { SAFETY_WITHDRAWAL, drinksTable, figure, moneyTable } from './shared';

// Fourth batch (2026-10-13), from the DataForSEO content-ideas pull (sobergirl-traffic-plan.md section 9).
// Wine arithmetic uses a 750 mL bottle, US standard drinks of 14 g and ethanol at about 0.79 g per mL.

const page = (a: Omit<Article, 'sources' | 'kicker'> & { kicker?: string }): Article => ({ kicker: 'Explainer', sources: [], ...a });

export const GOLDEN4_ARTICLES: Article[] = [
  /* ================================================================ glasses in a bottle */
  page({
    slug: 'how-many-glasses-of-wine-in-a-bottle',
    kicker: 'Numbers',
    metaTitle: 'How Many Glasses of Wine in a Bottle? (By Pour Size)',
    metaDescription:
      'A 750 mL bottle holds about 5 glasses at a 5 oz pour, but 3 at a large pour. Glasses, standard drinks and calories per bottle by pour size and ABV.',
    h1: 'How many glasses of wine are in a bottle?',
    dek: 'The answer depends on the glass. Here it is for every common pour, plus the number that matters more for your health: how many standard drinks a bottle really holds.',
    quickAnswer:
      'A standard 750 mL bottle of wine holds about 5 glasses at a 5 oz (148 mL) pour, which is the size NIAAA uses for one standard drink of 12% wine [[niaaaStandard]]. At a 6 oz pour you get about 4 glasses, and at a large 8 oz pour about 3. Because most wine today is stronger than 12%, a bottle usually holds more than 5 standard drinks: about 5.7 at 13.5% and 6.3 at 15%. A bottle at 12% carries about 500 calories from the alcohol alone [[traversy]].',
    keywords: ['how many glasses of wine in a bottle', 'how many glasses in a bottle of wine', 'bottle of wine how many glasses', 'how many standard drinks in a bottle of wine', 'how many ounces in a bottle of wine', 'calories in a bottle of wine', 'how many glasses of wine to get drunk'],
    heroAlt: 'A wine bottle beside five small glasses, with the fifth glass half filled',
    sections: [
      {
        id: 'by-pour',
        h2: 'Glasses per bottle, by pour size',
        blocks: [
          {
            t: 'table',
            caption: 'Arithmetic for a 750 mL (25.4 fl oz) bottle. Rounded to the nearest tenth.',
            head: ['Pour', 'Millilitres', 'Glasses per 750 mL bottle'],
            rows: [
              ['Tasting pour, 2 oz', '59 mL', '12.7'],
              ['Standard drink pour, 5 oz', '148 mL', '5.1'],
              ['Restaurant pour, 6 oz', '177 mL', '4.2'],
              ['Large pour, 8 oz', '237 mL', '3.2'],
              ['UK large glass', '250 mL', '3.0'],
              ['Very large pour, 9 oz', '266 mL', '2.8'],
            ],
          },
          {
            t: 'p',
            x: 'The 5 oz pour is the one in official guidance: NIAAA counts a 5-ounce glass of 12% wine as one standard drink, and notes that standard drink amounts may not reflect customary serving sizes [[niaaaStandard]]. At home, few people measure. A big modern wine glass filled to the widest point can easily hold 8 oz, which turns a bottle into three glasses, not five.',
          },
          figure(
            'how-many-glasses-of-wine-in-a-bottle-card',
            'A wine bottle divided into glasses at three pour sizes: five glasses at 5 ounces, four at 6 ounces and three at 8 ounces',
            'The same bottle at three pour sizes',
            '750 mL at 5, 6 and 8 oz. Bigger glasses mean fewer glasses, not less wine.',
          ),
        ],
      },
      {
        id: 'standard-drinks',
        h2: 'How many standard drinks in a bottle of wine',
        blocks: [
          {
            t: 'p',
            x: 'A “glass” is a volume. A standard drink is an amount of alcohol: in the US, about 14 grams of pure alcohol [[niaaaStandard]]. Stronger wine packs more alcohol into the same glass, so the bottle count changes with the percentage on the label.',
          },
          {
            t: 'table',
            caption: 'Illustrative arithmetic: 750 mL × ABV × 0.79 g of alcohol per mL ÷ 14 g per standard drink. Calories are from the alcohol alone, at 7 kcal per gram.',
            head: ['Wine strength (ABV)', 'Alcohol in the bottle', 'US standard drinks', 'Calories from the alcohol'],
            rows: [
              ['11% (many light whites)', '65 g', '4.7', 'about 455 kcal'],
              ['12% (NIAAA’s reference wine)', '71 g', '5.1', 'about 500 kcal'],
              ['13.5% (a common red)', '80 g', '5.7', 'about 560 kcal'],
              ['14.5% (a big red)', '86 g', '6.1', 'about 600 kcal'],
              ['15% (the strongest table wines)', '89 g', '6.3', 'about 620 kcal'],
            ],
          },
          {
            t: 'p',
            x: 'The calorie column uses the 7 kcal per gram that alcohol provides [[traversy]]; sugar in the wine adds more, especially in sweet and dessert wines. NIAAA’s calculator lets you check a specific drink [[niaaaCalc]].',
          },
        ],
      },
      {
        id: 'sizes',
        h2: 'Other bottle sizes',
        blocks: [
          {
            t: 'table',
            caption: 'Glasses at a 5 oz (148 mL) pour. Same arithmetic as above.',
            head: ['Bottle', 'Volume', 'Glasses at 5 oz'],
            rows: [
              ['Split (single serve)', '187.5 mL', '1.3'],
              ['Half bottle', '375 mL', '2.5'],
              ['Standard bottle', '750 mL', '5.1'],
              ['Litre bottle', '1 L', '6.8'],
              ['Magnum', '1.5 L', '10.1'],
              ['Box or bag-in-box', '3 L', '20.3'],
            ],
          },
          {
            t: 'p',
            x: 'Boxes deserve a note. A 3 litre box is four bottles, and because there is no empty bottle at the end of the night, it is easy to lose count. If you are trying to drink less, a box is the hardest format to track.',
          },
        ],
      },
      {
        id: 'drunk',
        h2: 'How many glasses of wine does it take to get drunk?',
        blocks: [
          {
            t: 'p',
            x: 'There is no single number. Blood alcohol depends on body size, sex, food, speed of drinking and the strength of the wine. Women generally reach a higher concentration from the same drink, because alcohol sits mainly in body water and, pound for pound, women have less water than men [[niaaaWomen]].',
          },
          {
            t: 'p',
            x: 'What is defined is the pattern. NIAAA defines binge drinking as drinking that brings blood alcohol to 0.08%, and heavy drinking for women as 4 or more drinks on any day or 8 or more in a week [[niaaaPatterns]]. On the table above, a single 750 mL bottle of 13.5% wine shared between two women is nearly three standard drinks each.',
          },
          {
            t: 'p',
            x: 'If a bottle is a normal evening for you, our page [is a bottle of wine a day too much?](/sobergirl/is-a-bottle-of-wine-a-day-too-much) puts it against the guidelines, and [how to stop drinking wine every night](/sobergirl/how-to-stop-drinking-wine-every-night) is the practical next step.',
          },
        ],
      },
    ],
    faqs: [
      { q: 'How many glasses of wine are in a bottle?', a: 'About 5 at a 5 oz pour, 4 at a 6 oz pour and 3 at an 8 oz pour, from a standard 750 mL bottle.' },
      { q: 'How many ounces are in a bottle of wine?', a: 'A standard 750 mL bottle holds about 25.4 US fluid ounces.' },
      { q: 'How many standard drinks are in a bottle of wine?', a: 'About 5 at 12% alcohol, 5.7 at 13.5% and 6.3 at 15%. A US standard drink is about 14 grams of pure alcohol.' },
      { q: 'How many calories are in a bottle of wine?', a: 'About 500 calories from the alcohol alone in a 12% bottle, and about 560 at 13.5%. Residual sugar adds more, especially in sweet wines.' },
      { q: 'Is half a bottle of wine a lot?', a: 'Half a 13.5% bottle is nearly three US standard drinks. NIAAA defines heavy drinking for women as 4 or more drinks on any day or 8 or more in a week.' },
    ],
    related: ['is-a-bottle-of-wine-a-day-too-much', 'how-to-stop-drinking-wine-every-night', 'how-much-alcohol-is-too-much-for-women', 'non-alcoholic-wine'],
    shots: [
      { file: 'home', alt: 'Sober Girl home screen with alcohol-free days and money saved', title: 'Wine-free evenings, counted', caption: 'Days and money saved from the evenings you skip. Example data.' },
      { file: 'benefits', alt: 'Sober Girl screen listing benefits people notice after stopping drinking', title: 'What changes', caption: 'Benefits to look for as the days add up. Example data.' },
    ],
  }),

  /* ================================================================ bottle a day */
  page({
    slug: 'is-a-bottle-of-wine-a-day-too-much',
    metaTitle: 'Is a Bottle of Wine a Day Too Much? What NIAAA Says',
    metaDescription:
      'A bottle of wine a day is about 5 to 6 standard drinks, above NIAAA’s heavy-drinking line for women every single day. What that means and how to cut back safely.',
    h1: 'Is a bottle of wine a day too much?',
    dek: 'It is a very common habit and a question many women type quietly at night. Here is the plain answer with the numbers behind it, and what to do next without stopping dangerously.',
    quickAnswer:
      'Yes, by US guidelines. A 750 mL bottle of 12% wine is about 5 standard drinks, and closer to 6 at 13.5% [[niaaaStandard]]. NIAAA defines heavy drinking for women as 4 or more drinks on any day or 8 or more in a week [[niaaaPatterns]], so a bottle a day passes the daily line every day and the weekly line by the second evening, at about 35 to 40 drinks a week. NIAAA also says even one drink a day can raise a woman’s breast cancer risk by 5% to 15% [[niaaaWomen]]. If you drink this much every day, do not stop suddenly without talking to a doctor.',
    keywords: ['is a bottle of wine a day too much', 'bottle of wine a day', 'drinking a bottle of wine every night', 'is drinking a bottle of wine a day bad', 'how much wine is too much', 'is 2 glasses of wine a day too much', 'am i an alcoholic if i drink a bottle of wine a day'],
    heroAlt: 'A wine bottle beside a week calendar with every evening filled, and a line marking the weekly limit',
    sections: [
      {
        id: 'numbers',
        h2: 'A bottle a day against the guidelines',
        blocks: [
          {
            t: 'table',
            caption: 'Standard drinks from our bottle arithmetic (750 mL, US standard drink of 14 g). Heavy drinking line from NIAAA [[niaaaPatterns]].',
            head: ['Habit', 'Standard drinks a day', 'Standard drinks a week', 'NIAAA heavy drinking for women: 4+ a day or 8+ a week'],
            rows: [
              ['One 5 oz glass of 12% wine a night', '1', '7', 'Under both lines'],
              ['Two large 8 oz glasses of 13.5% wine', 'about 3.6', 'about 25', 'Over the weekly line'],
              ['Half a bottle of 13.5% wine', 'about 2.9', 'about 20', 'Over the weekly line'],
              ['A bottle of 12% wine', 'about 5.1', 'about 35', 'Over both, every day'],
              ['A bottle of 14.5% wine', 'about 6.1', 'about 43', 'Over both, every day'],
            ],
          },
          figure(
            'is-a-bottle-of-wine-a-day-too-much-card',
            'Bar chart of standard drinks per week: 7 for a glass a night, 20 for half a bottle, 35 for a bottle a day, against a line at 8 marking heavy drinking for women',
            'A bottle a day is over four times the weekly heavy-drinking line',
            'Weekly standard drinks for three wine habits, against NIAAA’s line for women.',
          ),
          {
            t: 'p',
            x: 'Two glasses a night sounds moderate, but modern glasses are big and modern wines are strong. Two 8 oz pours of a 13.5% red add up to about 25 standard drinks a week, three times the weekly line. See [how many glasses of wine in a bottle](/sobergirl/how-many-glasses-of-wine-in-a-bottle) for the arithmetic.',
          },
        ],
      },
      {
        id: 'body',
        h2: 'What a bottle a day does over time',
        blocks: [
          {
            t: 'ul',
            items: [
              '**Breast cancer.** Even one drink a day can raise a woman’s risk by 5% to 15%, according to NIAAA [[niaaaWomen]]. The 2025 Surgeon General advisory named breast cancer in women among seven cancers linked to alcohol [[surgeon]].',
              '**Liver.** Heavy drinking can cause fatty liver. The good news in the research is that fatty liver can be reversed when drinking stops [[liver]].',
              '**Sleep.** Alcohol can sedate at first, then fragment sleep in the second half of the night and reduce REM sleep [[sleep]]. A bottle at 9 pm is often why you wake at 3 am.',
              '**Mood.** A review judged that alcohol use more plausibly increases the risk of depression than the reverse [[boden]].',
              '**Calories.** A bottle of 12% wine carries about 500 calories from the alcohol alone [[traversy]], so a bottle a day is roughly 3,500 a week.',
            ],
          },
        ],
      },
      {
        id: 'am-i',
        h2: 'Does a bottle a day mean I am an alcoholic?',
        blocks: [
          {
            t: 'p',
            x: 'A label is not something a web page can give you, and it is not the most useful question. A diagnosis of alcohol use disorder depends on symptoms, not just amounts. The useful questions are practical: have you tried to cut down and found it hard? Do you feel shaky, sweaty or anxious on mornings after a night off? Do evenings feel impossible without it? If the answer to any of these is yes, it is worth talking to a doctor, and NIAAA’s Alcohol Treatment Navigator helps adults find evidence-based care [[navigator]].',
          },
          {
            t: 'p',
            x: 'Many women who drink a bottle a night are not in crisis; they are in a habit that crept up one glass at a time. That is also exactly the habit that is easiest to see once you count it. The less alcohol, the better, as NIAAA puts it [[niaaaBasics]].',
          },
        ],
      },
      {
        id: 'cut',
        h2: 'Cutting back from a bottle a day, safely',
        blocks: [
          {
            t: 'callout',
            kind: 'safety',
            title: 'Daily drinking at this level can mean withdrawal',
            x: SAFETY_WITHDRAWAL,
          },
          {
            t: 'ol',
            items: [
              '**Talk to a doctor first** if you drink a bottle or more every day. They can tell you whether to taper and how.',
              '**Measure for a week before you change anything.** Pour into a measuring jug once to see what your usual glass holds.',
              '**Pick your first alcohol-free night** for an evening with a plan in it, not a quiet one at home.',
              '**Change the ritual, not just the drink.** A [mocktail](/sobergirl/easy-mocktails), a bath, a walk at the time you would open the bottle.',
              '**Count the nights you do not drink.** A run of alcohol-free days is easier to protect than a vague intention. See [alcohol-free days](/sobergirl/alcohol-free-days).',
            ],
          },
          {
            t: 'p',
            x: 'When a craving comes, NIAAA suggests riding it out, reminding yourself of your reasons, or distracting yourself with a healthy activity [[niaaaUrges]]. Our [wine every night guide](/sobergirl/how-to-stop-drinking-wine-every-night) has a fuller plan.',
          },
        ],
      },
    ],
    faqs: [
      { q: 'Is a bottle of wine a day too much?', a: 'Yes, by US guidelines. A bottle is about 5 to 6 standard drinks, and NIAAA defines heavy drinking for women as 4 or more drinks on any day or 8 or more in a week.' },
      { q: 'Is 2 glasses of wine a night too much?', a: 'It depends on the glass. Two 5 oz glasses of 12% wine is 2 standard drinks a day and 14 a week, which is over the 8-a-week heavy-drinking line for women. Two large 8 oz glasses of a strong red is about 25 a week.' },
      { q: 'Can I stop drinking a bottle of wine a day on my own?', a: 'Talk to a doctor first. Stopping suddenly after heavy daily drinking can cause withdrawal, which can be dangerous. A doctor can help you taper or stop safely.' },
      { q: 'How long after stopping wine does the liver recover?', a: 'We did not find a reliable timeline. The research says fatty liver can be reversed when drinking stops, while more advanced disease can stabilise. A doctor can check your liver.' },
      { q: 'How many calories is a bottle of wine a day?', a: 'About 500 calories from the alcohol in a 12% bottle, so about 3,500 a week, before any sugar in the wine.' },
    ],
    related: ['how-many-glasses-of-wine-in-a-bottle', 'how-to-stop-drinking-wine-every-night', 'gray-area-drinking', 'how-much-alcohol-is-too-much-for-women'],
    shots: [
      { file: 'home', alt: 'Sober Girl home screen with alcohol-free days, money saved and a daily check-in', title: 'Count the nights off', caption: 'Each night without the bottle adds a day and the money you kept. Example data.' },
      { file: 'sos', alt: 'Sober Girl craving SOS with a breathing circle and a 10-minute timer', title: 'For the moment you reach for the bottle', caption: 'A breath, a timer and your own reason. Example data.' },
    ],
  }),

  /* ================================================================ 5 days sober */
  page({
    slug: '5-days-sober',
    kicker: 'Milestone',
    metaTitle: '5 Days Sober: Days 4 to 6 Without Alcohol, What Is Normal',
    metaDescription:
      'Days 4, 5 and 6 without alcohol: past the usual withdrawal peak, why sleep can still be rough, the late warning signs, and how to reach your first week.',
    h1: '5 days sober: days 4 to 6 without alcohol',
    dek: 'You are past the 72-hour mark and not yet at a week. For many people this is the stretch where the body settles and the habit pushes back hardest.',
    quickAnswer:
      'By days 4 to 6 without alcohol you are usually past the worst of withdrawal: MedlinePlus says symptoms tend to peak by 24 to 72 hours, though they may go on for weeks [[medline]]. Two things still matter. Delirium tremens most often starts 48 to 96 hours after the last drink, so day 4 is still inside that window, and it can start as late as 7 to 10 days [[medlineDT]]. And sleep is often still poor: across studies, 36% to 91% of people in treatment report insomnia while drinking or within several weeks of stopping [[sleep]]. At 14 drinks a week, five days is 10 drinks skipped.',
    keywords: ['5 days sober', '5 days no alcohol', '4 days no alcohol', '6 days no alcohol', 'no alcohol for 5 days', 'day 5 no alcohol', '4 days sober', '6 days sober', 'what happens after 5 days of not drinking'],
    heroAlt: 'A seedling growing taller beside five ticked calendar days and a sixth almost ticked',
    sections: [
      {
        id: 'body',
        h2: 'What is happening on days 4, 5 and 6',
        blocks: [
          {
            t: 'table',
            caption: 'Timing from MedlinePlus [[medline]] [[medlineDT]] and a review of sleep research [[sleep]]. Not everyone has withdrawal symptoms.',
            head: ['Day', 'Where you are', 'What to watch'],
            rows: [
              ['Day 4', 'Past the usual 24 to 72 hour peak of withdrawal symptoms', 'Still inside the 48 to 96 hour window when delirium tremens most often starts'],
              ['Day 5', 'For most people, physical symptoms easing', 'Broken sleep and vivid dreams are common'],
              ['Day 6', 'One day from the first week', 'Severe withdrawal can, less often, start as late as 7 to 10 days'],
            ],
          },
          {
            t: 'p',
            x: 'If you felt rough on days two and three and you are feeling a little clearer now, that is the usual pattern. If you are feeling worse, not better, that is the signal to call a doctor today. MedlinePlus says to get emergency help for seizures, fever, severe confusion, hallucinations or an irregular heartbeat [[medline]].',
          },
          figure(
            '5-days-sober-card',
            'Day 5 card showing a Seedling tree and a path from the 3-day badge to the 7-day badge with day 5 marked',
            'Day 5: between the 3-day and 1-week badges',
            'In Sober Girl the tree stays a Seedling until the 7-day badge. Example illustration.',
          ),
        ],
      },
      {
        id: 'sleep',
        h2: 'Why sleep can still be rough',
        blocks: [
          {
            t: 'p',
            x: 'Sleep is the complaint that outlasts the rest. A review of sleep research found that between 36% and 91% of patients report insomnia while drinking or within several weeks of stopping, and that insomnia and vivid dreams are common complaints after people stop [[sleep]]. Night five of lying awake does not mean something is wrong. It means your brain is relearning how to sleep without a sedative.',
          },
          {
            t: 'ul',
            items: [
              'Get up at the same time every day, even after a bad night.',
              'Keep caffeine to the morning; it is tempting to swap one crutch for another.',
              'If dreams about drinking wake you, write them down. They are common and they do not mean you want to drink.',
              'Read [sleep after quitting alcohol](/sobergirl/sleep-after-quitting-alcohol) for more.',
            ],
          },
        ],
      },
      {
        id: 'habit',
        h2: 'Why days 4 to 6 can feel harder than day 1',
        blocks: [
          {
            t: 'p',
            x: 'Day one runs on resolve. By day five, the resolve has worn thin and the routine is still there: the same kitchen at 6 pm, the same Friday, the same stressful call. Many people find the first weekend lands in this stretch. NIAAA suggests reminding yourself of your reasons, distracting yourself with a healthy activity, or riding the urge out, accepting it as normal and temporary [[niaaaUrges]].',
          },
          {
            t: 'ol',
            items: [
              '**Name the hour.** Write down the time the urge is strongest. Put something specific in that slot for days 5, 6 and 7.',
              '**Plan the weekend first.** If day 5 or 6 is a Friday or Saturday, decide tonight where you will be and what you will drink instead.',
              '**Use ten minutes.** Set a timer and do something with your hands. Most urges crest and fall inside it. See [urge surfing](/sobergirl/urge-surfing).',
              '**Tell one person** you are on day five. Saying it out loud makes day six more likely.',
            ],
          },
        ],
      },
      {
        id: 'numbers',
        h2: 'What five days adds up to',
        blocks: [
          moneyTable(5, '5 days'),
          drinksTable(5, '5 days'),
          figure(
            '5-days-sober-savings',
            'Bar chart of money saved after five days without alcohol at 25, 50 and 100 dollars a week',
            'Money saved by day 5',
            'Weekly spend divided by seven, times five. Illustrative.',
            1200,
            600,
          ),
          {
            t: 'p',
            x: 'Five days is a small number on a money chart and a big one in practice: it is the first point where most people can say “most of a week”. Your [first full week](/sobergirl/1-week-sober) is two days away.',
          },
        ],
      },
      {
        id: 'safety',
        h2: 'When to get help',
        blocks: [{ t: 'callout', kind: 'safety', title: 'If you drank heavily before day one', x: SAFETY_WITHDRAWAL }],
      },
    ],
    faqs: [
      { q: 'What happens after 5 days of not drinking?', a: 'For most people, withdrawal symptoms have passed their peak, which MedlinePlus puts at 24 to 72 hours. Sleep is often still broken, and urges can feel stronger as the routine pushes back.' },
      { q: 'Is 4 days without alcohol enough to detox?', a: 'There is no fixed detox length. Physical symptoms often ease after 72 hours, but delirium tremens can start 48 to 96 hours after the last drink, and sometimes 7 to 10 days. If you drank heavily, a doctor should guide this stage.' },
      { q: 'Why can I not sleep 5 days after quitting alcohol?', a: 'Insomnia is one of the most common complaints after stopping. A review found 36% to 91% of people in treatment report insomnia while drinking or within several weeks of stopping. It usually improves; tell a doctor if it does not.' },
      { q: 'Does Sober Girl have a 5-day badge?', a: 'No. The badges are at 1, 3, 7, 14, 30, 60, 90, 180 and 365 days. Day 5 is between the 3-day and 7-day badges, and the counter shows every day.' },
    ],
    related: ['3-days-sober', '1-week-sober', '10-days-sober', 'sleep-after-quitting-alcohol'],
    shots: [
      { file: 'home', alt: 'Sober Girl home screen with a five-day streak, money saved and a check-in', title: 'Day 5 on the counter', caption: 'Days, hours and money saved. Example data.' },
      { file: 'sos', alt: 'Sober Girl craving SOS with a breathing circle and a 10-minute timer', title: 'The 6 pm urge', caption: 'A guided breath and a 10-minute timer. Example data.' },
    ],
  }),

  /* ================================================================ 10 days sober */
  page({
    slug: '10-days-sober',
    kicker: 'Milestone',
    metaTitle: '10 Days Sober: Days 8 to 12 Without Alcohol',
    metaDescription:
      'Days 8 to 12 without alcohol: what is usually settled, what is not (sleep, mood, cravings), the last late withdrawal window, and how to reach two weeks.',
    h1: '10 days sober: days 8 to 12 without alcohol',
    dek: 'Past the first week and before the two-week badge. Many people feel better here, and many feel strangely flat. Both are common.',
    quickAnswer:
      'At 8 to 12 days without alcohol, most people are past acute withdrawal: MedlinePlus says symptoms tend to peak by 24 to 72 hours [[medline]], and delirium tremens, which most often starts within 48 to 96 hours, can occasionally appear as late as 7 to 10 days [[medlineDT]]. What often lingers is sleep: sleep problems can persist for months after stopping [[sleep]], and MedlinePlus notes some withdrawal symptoms can last a year or more [[medlineDT]]. At 14 drinks a week, ten days is 20 standard drinks and about 280 g of alcohol skipped [[niaaaStandard]].',
    keywords: ['10 days sober', '10 days no alcohol', '8 days no alcohol', '9 days no alcohol', '11 days no alcohol', '12 days no alcohol', 'day 10 no alcohol', 'day 8 no alcohol', 'what happens after 10 days of not drinking'],
    heroAlt: 'A sapling with new leaves beside a calendar with ten days ticked and the two-week mark ahead',
    sections: [
      {
        id: 'where',
        h2: 'Where you are at days 8 to 12',
        blocks: [
          {
            t: 'table',
            caption: 'Timing from MedlinePlus [[medline]] [[medlineDT]] and a sleep research review [[sleep]]. Individual experience varies a lot.',
            head: ['Day', 'Usually settled', 'Often still going on'],
            rows: [
              ['8 and 9', 'Acute withdrawal for most people', 'Broken sleep, vivid dreams, evening urges'],
              ['10', 'The late window for delirium tremens (7 to 10 days) closing', 'Low mood or flatness as the novelty fades'],
              ['11 and 12', 'Routine starting to bend around not drinking', 'Weekend and social situations testing the plan'],
            ],
          },
          {
            t: 'p',
            x: 'The physical side is usually quieter by now. That is why the second week often feels like it should be easy, and why it is surprising when it is not. The work at this stage is mostly about habits and evenings, not withdrawal.',
          },
          figure(
            '10-days-sober-card',
            'Day 10 card showing a Sapling tree and a path from the 1-week badge to the 2-week badge with day 10 marked',
            'Day 10: between the 1-week and 2-week badges',
            'In Sober Girl the tree is a Sapling from day 7 and a Young tree at day 14. Example illustration.',
          ),
        ],
      },
      {
        id: 'flat',
        h2: 'Why day 10 can feel flat',
        blocks: [
          {
            t: 'p',
            x: 'A common description of the second week is “fine, but grey”. The relief of the first week has worn off and the benefits people talk about at a month have not fully arrived. Sleep is part of it: a review found sleep problems can persist even after several months of abstinence, and that insomnia can interfere with recovery [[sleep]]. Tired people feel flat.',
          },
          {
            t: 'p',
            x: 'Flat is not the same as failing. If low mood is heavy, lasts, or comes with thoughts of harming yourself, talk to a doctor, and in the US you can call or text 988 at any hour [[lifeline988]]. Our page on [alcohol and depression](/sobergirl/alcohol-and-depression) covers the research.',
          },
        ],
      },
      {
        id: 'plan',
        h2: 'A plan for days 8 to 14',
        blocks: [
          {
            t: 'ol',
            items: [
              '**Replace, do not just remove.** By now you know your hardest hour. Fill it on purpose: a walk, a call, a [mocktail](/sobergirl/easy-mocktails), a class.',
              '**Rehearse the offer.** Week two is often the first social invitation. Decide your line before you go. NIAAA lists leaving a tempting situation quickly as a valid option [[niaaaUrges]].',
              '**Write down one change.** Morning clarity, a lower bank balance shock, one fewer argument. Small changes are easy to forget by day 30.',
              '**Protect sleep.** Same wake time, cool room, no late caffeine.',
              '**Aim at day 14.** Two weeks is the next badge in the app and a natural checkpoint.',
            ],
          },
          {
            t: 'callout',
            kind: 'safety',
            title: 'If you were a heavy drinker',
            x: SAFETY_WITHDRAWAL,
          },
        ],
      },
      {
        id: 'numbers',
        h2: 'What ten days adds up to',
        blocks: [
          moneyTable(10, '10 days'),
          drinksTable(10, '10 days'),
          figure(
            '10-days-sober-savings',
            'Bar chart of money saved after ten days without alcohol at 25, 50 and 100 dollars a week',
            'Money saved by day 10',
            'Weekly spend divided by seven, times ten. Illustrative.',
            1200,
            600,
          ),
          {
            t: 'p',
            x: 'Ten days is the first double-digit number on the counter. People often say it is the first time the count feels like theirs rather than a dare. Next stop: [2 weeks sober](/sobergirl/2-weeks-sober).',
          },
        ],
      },
    ],
    faqs: [
      { q: 'What happens after 10 days of not drinking?', a: 'Most people are past acute withdrawal, which tends to peak by 24 to 72 hours. Sleep, mood and evening urges are what usually remain, and they tend to improve with time.' },
      { q: 'Can withdrawal start after 7 days?', a: 'Rarely, yes. MedlinePlus says delirium tremens most often begins 48 to 96 hours after the last drink but may occur 7 to 10 days after. Confusion, fever, hallucinations or a seizure need emergency care.' },
      { q: 'Why do I feel worse at day 10 than day 5?', a: 'Often because the novelty has gone and sleep is still catching up. A review found sleep problems can persist for months after stopping. If low mood is heavy or lasts, talk to a doctor.' },
      { q: 'Does Sober Girl have a 10-day badge?', a: 'No. Day 10 sits between the 7-day and 14-day badges. The counter shows every day, and the tree is a Sapling until the 14-day badge.' },
    ],
    related: ['1-week-sober', '2-weeks-sober', '5-days-sober', 'alcohol-and-depression'],
    shots: [
      { file: 'tree', alt: 'Sober Girl tree screen showing a young tree growing with each check-in', title: 'The tree at week two', caption: 'Each daily check-in waters the tree. Example data.' },
      { file: 'journal', alt: 'Sober Girl private journal with short entries and a mood for each day', title: 'Note one change', caption: 'A private journal for the small changes. Plus. Example data.' },
    ],
  }),

  /* ================================================================ sobriety quotes */
  page({
    slug: 'sobriety-quotes',
    kicker: 'Words',
    metaTitle: 'Sobriety Quotes: 60 Short, Funny and Inspiring Lines',
    metaDescription:
      '60 original sobriety quotes and affirmations, free to share: short ones, funny ones, lines for day one, cravings and milestones, plus image cards.',
    h1: 'Sobriety quotes: 60 short, funny and inspiring lines to keep going',
    dek: 'Every line here is original, written by the Sober Girl team, so you can share it without wondering who really said it. Free to use, no credit needed.',
    quickAnswer:
      'Here are 60 original sobriety quotes and affirmations, sorted by moment: short lines, day one, cravings, milestones, proud-of-you messages and funny ones. They are free to share. A quote is most useful at the moment of an urge, and that matches NIAAA’s advice to remind yourself of your reasons for changing when a craving hits [[niaaaUrges]]. Save the one that fits you as your phone wallpaper or as the reason in your tracker, so it is in front of you when you need it.',
    keywords: ['sobriety quotes', 'quotes about sobriety', 'short sobriety quotes', 'funny sobriety quotes', 'inspirational sobriety quotes', 'sober quotes', 'recovery affirmations', 'proud of your sobriety quotes', 'motivational sobriety quotes', 'sobriety affirmations'],
    heroAlt: 'Three quote cards in blush, sage and plum with short lines about staying sober',
    sections: [
      {
        id: 'short',
        h2: 'Short sobriety quotes',
        blocks: [
          {
            t: 'ul',
            items: [
              'Clear head, full heart.',
              'Not tonight. Not because I can’t. Because I don’t want to.',
              'One evening at a time.',
              'I remember everything now. That is the gift.',
              'Sober is my soft place to land.',
              'The craving is a wave. I am the shore.',
              'My mornings are mine again.',
              'Less wine, more me.',
              'Choosing myself, daily.',
              'Quiet mind, loud life.',
            ],
          },
          figure(
            'sobriety-quotes-card-1',
            'Blush quote card reading: The craving is a wave. I am the shore.',
            'The craving is a wave. I am the shore.',
            'Original quote card. Free to share.',
            1080,
            1080,
          ),
        ],
      },
      {
        id: 'day-one',
        h2: 'Quotes for day one',
        blocks: [
          {
            t: 'ul',
            items: [
              'Day one is not a failure. It is a door.',
              'Everyone with a long streak started with a day one.',
              'I only have to not drink today.',
              'Starting again is still starting.',
              'The hardest day is the one I am already in.',
              'Today I stop arguing with myself and just begin.',
              'Day one: the bravest number on the counter.',
              'I do not need to see the whole year. Just tonight.',
            ],
          },
          {
            t: 'p',
            x: 'If today is day one after a slip, our page on [lapse vs relapse](/sobergirl/lapse-vs-relapse) is worth reading before tonight.',
          },
        ],
      },
      {
        id: 'cravings',
        h2: 'Quotes for a craving',
        blocks: [
          {
            t: 'p',
            x: 'NIAAA’s advice for an urge includes reminding yourself of your reasons and riding it out, accepting it as normal and temporary, like a wave that crests and passes [[niaaaUrges]]. These lines are written for that ten minutes.',
          },
          {
            t: 'ul',
            items: [
              'This feeling has a shelf life of ten minutes.',
              'I have survived every craving so far. Every single one.',
              'The drink will not fix what I am feeling. It will only postpone it.',
              'Play the tape forward to tomorrow morning.',
              'I can want it and still not have it.',
              'Ride the wave. Do not drink the wave.',
              'Urges are loud and temporary. My reasons are quiet and permanent.',
              'What I really want is to feel better. Wine never once delivered that.',
            ],
          },
          figure(
            'sobriety-quotes-card-2',
            'Sage quote card reading: I can want it and still not have it.',
            'I can want it and still not have it.',
            'Original quote card. Free to share.',
            1080,
            1080,
          ),
        ],
      },
      {
        id: 'milestones',
        h2: 'Quotes for milestones',
        blocks: [
          {
            t: 'ul',
            items: [
              'One week of mornings I fully remember.',
              'Thirty days ago I did not believe this was possible.',
              'Ninety days: the version of me I was waiting for showed up.',
              'Six months of keeping a promise to myself.',
              'One year. Three hundred and sixty-five times I chose me.',
              'The number on the counter is just proof. The change is in me.',
              'Every badge is a day I did the hard thing.',
              'Not a streak. A life.',
            ],
          },
          {
            t: 'p',
            x: 'For milestone cards and messages to send someone else, see [sobriety anniversary messages](/sobergirl/sobriety-anniversary-messages) and the [milestones series](/sobergirl/sobriety-milestones).',
          },
        ],
      },
      {
        id: 'proud',
        h2: 'Proud of your sobriety: lines to send someone',
        blocks: [
          {
            t: 'ul',
            items: [
              'I see how hard you are working, and I am so proud of you.',
              'You chose yourself again today. That matters.',
              'I love the clear-eyed you. I always loved you, but this is special.',
              'Every day you stay sober is a gift to the people who love you, and mostly to you.',
              'You do not have to be perfect. You just have to keep going, and you are.',
              'Watching you come back to yourself has been beautiful.',
              'Whatever day you are on, I am on your side.',
              'You make brave look ordinary.',
            ],
          },
        ],
      },
      {
        id: 'affirmations',
        h2: 'Sobriety affirmations',
        blocks: [
          {
            t: 'ul',
            items: [
              'I am allowed to change.',
              'I can handle hard feelings without numbing them.',
              'My body is healing every day I do not drink.',
              'I deserve to wake up feeling well.',
              'I am the kind of woman who keeps promises to herself.',
              'I do not owe anyone an explanation for not drinking.',
              'Rest is my reward now.',
              'I am becoming someone I trust.',
            ],
          },
          figure(
            'sobriety-quotes-card-3',
            'Plum quote card reading: I am becoming someone I trust.',
            'I am becoming someone I trust.',
            'Original affirmation card. Free to share.',
            1080,
            1080,
          ),
        ],
      },
      {
        id: 'funny',
        h2: 'Funny sobriety quotes',
        blocks: [
          {
            t: 'ul',
            items: [
              'My hangover and I broke up. It is not getting the house.',
              'Sober me texts back at a reasonable hour and with full sentences.',
              'Turns out I am not a morning person. I was just a hungover person.',
              'I used to wake up and check my phone in fear. Now I just check the weather.',
              'Still the life of the party. Now I also remember the party.',
              'My new drink order is a sparkling water and a smug expression.',
              'I tried moderation. It did not try me back.',
              'The only thing I am pouring now is my heart. And oat milk.',
              'Zero hangovers this year. My couch misses our Sundays.',
              'Sober girls leave the party at 10 and still win the next day.',
            ],
          },
        ],
      },
      {
        id: 'use',
        h2: 'How to make a quote actually work',
        blocks: [
          {
            t: 'p',
            x: 'A quote helps most when it is in front of you at the moment you need it, not in a saved folder. Three ways to do that:',
          },
          {
            t: 'ol',
            items: [
              '**Pick one, not ten.** Choose the line that hits hardest today and use only that one for a week.',
              '**Put it where the craving happens.** A sticky note on the wine cabinet, the lock screen, the fridge.',
              '**Make it your reason.** In Sober Girl, the reason you write in Craving SOS is shown when you open it, so your own words are there during an urge.',
            ],
          },
        ],
      },
    ],
    faqs: [
      { q: 'Can I share these sobriety quotes?', a: 'Yes. Every quote on this page is original, written by the Sober Girl team, and free to share without credit.' },
      { q: 'What is a good short sobriety quote?', a: 'Try “One evening at a time” or “The craving is a wave. I am the shore.” Short lines are easier to remember during an urge.' },
      { q: 'What do you say to someone proud of their sobriety?', a: 'Keep it simple and personal, for example: “I see how hard you are working, and I am so proud of you.” Name what you have noticed in them.' },
      { q: 'Do affirmations help with sobriety?', a: 'We did not find a trial of affirmations for drinking. NIAAA does suggest reminding yourself of your reasons for changing when an urge hits, which is what a well-chosen line can do.' },
      { q: 'What is a funny sober quote?', a: '“My hangover and I broke up. It is not getting the house.” There are ten more in the funny section above.' },
    ],
    related: ['sobriety-anniversary-messages', 'sober-journal-prompts', 'urge-surfing', 'sobriety-milestones'],
    shots: [
      { file: 'sos', alt: 'Sober Girl craving SOS showing your own written reason for staying sober', title: 'Your own line, during an urge', caption: 'Write your reason once; it shows in Craving SOS. Example data.' },
      { file: 'share', alt: 'Sober Girl milestone card with a rosette badge and a share button', title: 'Milestone cards to share', caption: 'Plus members can save or share a card for each badge. Example data.' },
    ],
  }),
];
