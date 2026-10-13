import type { Article } from '../articles';
import { SAFETY_WITHDRAWAL, figure } from './shared';

// Third batch (2026-10-13), picked from Search Console and the 2026-10-10 keyword research: big, low-KD queries with
// no page yet. Recipes are our own. Health pages state what the sources support and what they do not.

const page = (a: Omit<Article, 'sources' | 'kicker'> & { kicker?: string }): Article => ({ kicker: 'Explainer', sources: [], ...a });

export const GOLDEN3_ARTICLES: Article[] = [
  /* ================================================================ easy mocktails */
  page({
    slug: 'easy-mocktails',
    kicker: 'Recipes',
    metaTitle: 'Easy Mocktails: 12 Alcohol-Free Drinks in 5 Minutes',
    metaDescription:
      'Twelve easy mocktail recipes with things you already have: a virgin mojito, margarita and daiquiri, a Shirley Temple, plus Halloween and holiday mocktails.',
    h1: 'Easy mocktails: 12 alcohol-free drinks you can make in five minutes',
    dek: 'No shaker, no syrups you have to order online. Each recipe makes one glass from things in a normal kitchen, and each one says what to swap if you are missing something.',
    quickAnswer:
      'An easy mocktail is three parts: something sour (lime or lemon), something sweet (juice, honey or a little sugar) and something long (soda water, ginger ale or tonic), poured over ice with a garnish. The twelve recipes below follow that pattern and take about five minutes. You are in good company: Gallup found 54% of US adults drank in 2025, down from 67% in 2022 [[gallup]]. One caution if you are in recovery: a 2026 commentary says drinks that imitate alcohol can be a cue for some people [[holmes]], so the recipes here lean on fruit and fizz rather than copies of a favourite drink.',
    keywords: ['easy mocktails', 'mocktails', 'mocktail drinks', 'best mocktails', 'virgin mojito', 'virgin margarita', 'virgin strawberry daiquiri', 'shirley temple mocktail', 'halloween mocktails', 'holiday mocktails', 'virgin drinks'],
    heroAlt: 'Three tall glasses with lime, berry and orange drinks, ice and mint, beside a small bloom',
    sections: [
      {
        id: 'formula',
        h2: 'The five-minute formula',
        blocks: [
          {
            t: 'p',
            x: 'Almost every good mocktail in a bar is a variation on one shape: **sour + sweet + long + garnish**. Squeeze the sour into the glass, add the sweet, stir, fill with ice, top up with the long part, and finish with something you can smell. Once you know the shape you can make a drink from whatever is in the fridge, which is the point: the easier it is, the more likely you are to make one at 6 pm instead of opening a bottle.',
          },
          {
            t: 'table',
            caption: 'Ratios for one tall glass (about 300 mL). Taste and adjust: limes vary a lot.',
            head: ['Part', 'Amount', 'Easy options'],
            rows: [
              ['Sour', '20 to 30 mL (half a lime or lemon)', 'Lime, lemon, grapefruit, a splash of apple cider vinegar'],
              ['Sweet', '1 to 2 teaspoons, or 60 mL juice', 'Honey, maple syrup, sugar, orange, pineapple or cranberry juice'],
              ['Long', 'Top up, about 150 mL', 'Soda water, sparkling water, ginger ale, ginger beer, tonic, cold tea'],
              ['Garnish', 'Something to smell', 'Mint, basil, rosemary, a citrus peel twist, a few berries'],
            ],
          },
          figure(
            'easy-mocktails-card',
            'Diagram of a tall glass split into four layers: sour, sweet, long and garnish, with example ingredients for each',
            'The mocktail formula: sour, sweet, long and a garnish',
            'One shape, endless drinks. Swap any part for what you have.',
          ),
        ],
      },
      {
        id: 'recipes',
        h2: '12 easy mocktail recipes',
        blocks: [
          {
            t: 'table',
            caption: 'Our own recipes, one glass each. Fill the glass with ice before you top up.',
            head: ['Mocktail', 'What you need', 'How'],
            rows: [
              ['**Virgin mojito**', '8 mint leaves, half a lime cut in wedges, 2 tsp sugar, soda water', 'Crush the mint, lime and sugar in the glass with a spoon. Add ice, top with soda, stir up from the bottom.'],
              ['**Virgin margarita**', '30 mL lime juice, 60 mL orange juice, 1 tsp honey, pinch of salt, soda water', 'Rub a lime wedge round the rim and dip it in salt. Stir the juices and honey, add ice, a splash of soda.'],
              ['**Virgin strawberry daiquiri**', '6 frozen strawberries, 20 mL lime juice, 1 tsp sugar, 4 ice cubes', 'Blend until thick. Pour into a chilled glass. A banana makes it creamier.'],
              ['**Shirley Temple**', 'Ginger ale, 15 mL grenadine (or cherry juice), a cherry', 'Pour ginger ale over ice, slide the grenadine down the side so it settles, top with the cherry.'],
              ['**Cucumber gimlet**', '4 cucumber slices, 25 mL lime juice, 2 tsp honey, tonic', 'Crush the cucumber with the lime and honey, add ice, top with tonic.'],
              ['**Grapefruit fizz**', '90 mL grapefruit juice, a sprig of rosemary, pinch of salt, sparkling water', 'Rub the rosemary between your hands, drop it in, add juice, salt, ice and sparkling water.'],
              ['**Ginger lime cooler**', 'Ginger beer, half a lime, mint', 'Squeeze the lime over ice, top with ginger beer, slap a mint sprig and add it.'],
              ['**Cranberry spritz**', '60 mL cranberry juice, 20 mL lime juice, soda water, orange peel', 'Stir juice and lime over ice, top with soda, twist the peel over the glass and drop it in.'],
              ['**Half-and-half iced tea**', 'Cold black tea, 60 mL lemonade, lemon slice', 'Half tea, half lemonade over ice. Sweeten only if it needs it.'],
              ['**Pineapple basil smash**', '90 mL pineapple juice, 4 basil leaves, 15 mL lime juice, soda', 'Crush the basil with the lime, add juice and ice, top with soda.'],
              ['**Apple cider shrub**', '15 mL apple cider vinegar, 2 tsp maple syrup, 60 mL apple juice, sparkling water', 'Stir vinegar, maple and juice until mixed, add ice and sparkling water. Sharp and grown-up.'],
              ['**Berry lemonade**', 'A handful of raspberries, 30 mL lemon juice, 2 tsp sugar, water or soda', 'Crush the berries with lemon and sugar, add ice, top up, strain if you hate seeds.'],
            ],
          },
          {
            t: 'p',
            x: 'If you only make one, make the virgin mojito: it is the one most people already know from a menu, it takes two minutes, and crushing the mint gives your hands something to do at the moment you would usually be pouring a glass of wine.',
          },
        ],
      },
      {
        id: 'halloween',
        h2: 'Halloween mocktails',
        blocks: [
          {
            t: 'p',
            x: 'Halloween is a drinking-heavy night for many adults, so it helps to have something in your hand that looks like it belongs at the party. Three that need no special shopping:',
          },
          {
            t: 'ul',
            items: [
              '**Witch’s brew.** Lime juice and green apple juice over ice, topped with soda. Drop in a few gummy worms just before serving.',
              '**Blood orange punch.** Blood orange or regular orange juice, cranberry juice and ginger ale in a jug. Freeze a few raspberries in the ice cubes.',
              '**Black cherry fizz.** Cherry juice and lime over ice, topped with cola, with a cherry on a cocktail stick.',
            ],
          },
          figure(
            'easy-mocktails-halloween',
            'Three Halloween mocktails in glasses: a green witch’s brew, a red blood orange punch and a dark cherry fizz, with a small pumpkin',
            'Three Halloween mocktails',
            'Witch’s brew, blood orange punch and black cherry fizz. Our own recipes.',
          ),
          {
            t: 'p',
            x: 'If Halloween is part of a Sober October for you, our [Sober October guide](/sobergirl/sober-october) covers the rest of the month, and [sober holidays](/sobergirl/sober-holidays) covers the parties that follow.',
          },
        ],
      },
      {
        id: 'holiday',
        h2: 'Holiday mocktails',
        blocks: [
          {
            t: 'ul',
            items: [
              '**Cranberry rosemary sparkler.** Cranberry juice, a squeeze of lime and sparkling water, with a rosemary sprig that looks like a tiny tree.',
              '**Spiced apple warmer.** Warm apple juice with a cinnamon stick, two cloves and a strip of orange peel. Serve in a mug.',
              '**Pomegranate spritz.** Pomegranate juice and soda water in a wine glass, with seeds dropped in. Good for toasts.',
            ],
          },
          {
            t: 'p',
            x: 'At a party, the hardest moment is usually the offer of a drink. Arriving with your own bottle of ginger beer or sparkling juice means you already have an answer. Our page on [what to do instead of drinking](/sobergirl/what-to-do-instead-of-drinking) has more for the evening itself.',
          },
        ],
      },
      {
        id: 'recovery',
        h2: 'Are mocktails a good idea in early sobriety?',
        blocks: [
          {
            t: 'p',
            x: 'For many people, a good mocktail keeps the ritual of an evening drink without the alcohol. For some, a drink that looks and tastes like the old one is a trigger. The research is thin: a 2026 commentary in Addiction says no and low alcohol drinks may help people who are cutting down, and may carry a real risk of relapse for people recovering from alcohol use disorder [[holmes]]. That is why the recipes on this page are fruit-and-fizz drinks you make yourself, rather than alcohol-free copies of wine, gin or beer.',
          },
          {
            t: 'p',
            x: 'Two practical points. When you order out, say clearly that you want no alcohol and look at what arrives: in a study of 153 recovery-forum posts about non-alcoholic drinks, 6.5% described being served alcohol by mistake [[acuff]]. And if you buy ready-made “0.0” drinks, read the label: an analysis summarised in Canadian Family Physician found 13 of 45 drinks sold as non-alcoholic or low-alcohol contained more alcohol than declared [[adiong]].',
          },
        ],
      },
    ],
    faqs: [
      { q: 'What is the easiest mocktail to make?', a: 'A ginger lime cooler: squeeze half a lime over ice and top with ginger beer. It takes under a minute and needs two ingredients.' },
      { q: 'What is a virgin mojito made of?', a: 'Mint, lime, a little sugar and soda water over ice. Crush the mint, lime and sugar in the glass first so the mint releases its smell.' },
      { q: 'What can I use instead of simple syrup?', a: 'Honey, maple syrup, a teaspoon of sugar stirred into the lime juice until it dissolves, or a sweet juice such as orange or pineapple.' },
      { q: 'Are mocktails OK if I am newly sober?', a: 'It depends on you. Some people find they keep the ritual without the alcohol. Others find a drink that imitates alcohol is a cue. A 2026 commentary says the evidence is limited and the risk may be higher for people recovering from alcohol use disorder. If you are in recovery, ask your clinician.' },
      { q: 'What are good Halloween mocktails?', a: 'A green witch’s brew of lime and apple juice with soda, a blood orange and cranberry punch, or a cherry and cola fizz. All three need no special ingredients.' },
    ],
    related: ['what-to-do-instead-of-drinking', 'non-alcoholic-wine', 'sober-october', 'sober-holidays'],
    shots: [
      { file: 'home', alt: 'Sober Girl home screen with alcohol-free days, money saved and a daily check-in', title: 'Count the evenings', caption: 'Every mocktail evening adds a day to the counter. Example data.' },
      { file: 'sos', alt: 'Sober Girl craving SOS with a breathing circle and a 10-minute timer', title: 'For the 6 pm craving', caption: 'A guided breath and a 10-minute timer while you make the drink. Example data.' },
    ],
  }),

  /* ================================================================ non-alcoholic beer */
  page({
    slug: 'non-alcoholic-beer',
    metaTitle: 'Non-Alcoholic Beer: Is 0.5% Really Alcohol Free?',
    metaDescription:
      'What non-alcoholic, alcohol free and 0.0 mean on a US beer label, how much alcohol NA beer can contain, and what studies say about NA beer in recovery.',
    h1: 'Non-alcoholic beer: what “NA” means, and whether it is really alcohol free',
    dek: 'NA beer is the biggest alcohol-free category by far. Here is what the label promises in the US, what lab tests have found, and what research says if you are quitting.',
    quickAnswer:
      'In the US, a beer labelled “non-alcoholic” may contain up to just under 0.5% alcohol by volume and must say so: TTB allows the term only with the statement “contains less than 0.5 percent (or .5%) alcohol by volume” beside it. Only “alcohol free” means no alcohol at all [[ttbBeer]]. Labels are not always right: an analysis summarised in Canadian Family Physician found 13 of 45 drinks sold as non-alcoholic or low-alcohol held more alcohol than declared, some labelled 0.0% up to 1.8% [[adiong]]. In recovery, the evidence is mixed: one study of men treated for alcohol dependence found one-year abstinence of 51.2% among non-users of NA beer against 15.3% among users [[yokoyama]].',
    keywords: ['non alcoholic beer', 'na beer', 'alcohol free beer', 'is non alcoholic beer alcohol free', 'zero alcohol beer', 'no alcohol beer', 'non alcoholic beer sobriety', '0.0 beer'],
    heroAlt: 'A beer glass beside three label tags reading under 0.5 percent, 0.0 and alcohol free',
    sections: [
      {
        id: 'label',
        h2: 'What the label words mean',
        blocks: [
          {
            t: 'table',
            caption: 'From TTB’s malt beverage labeling page. These rules apply to beer, not wine.',
            head: ['On the label', 'What it means in the US', 'Can it contain alcohol?'],
            rows: [
              ['“Non-alcoholic”', 'Allowed only with the statement “contains less than 0.5 percent (or .5%) alcohol by volume” right beside it [[ttbBeer]]', 'Yes, up to just under 0.5%'],
              ['“Alcohol free”', 'Allowed only on products containing no alcohol [[ttbBeer]]', 'No'],
              ['“Low alcohol” or “reduced alcohol”', 'Allowed only on products with less than 2.5% alcohol by volume [[ttbBeer]]', 'Yes, up to just under 2.5%'],
            ],
          },
          {
            t: 'p',
            x: 'So “NA beer” and “alcohol-free beer” are often used as if they mean the same thing, and on a US label they do not. A typical regular beer is several times stronger than 0.5%, so the trace in NA beer is small. Whether small is small enough is your call, and the next section explains why it is worth reading the can anyway.',
          },
          figure(
            'non-alcoholic-beer-card',
            'Scale from 0 to 5 percent alcohol by volume marking alcohol free at zero, non-alcoholic under 0.5, low alcohol under 2.5 and a regular beer above it',
            'Where NA beer sits on the alcohol scale',
            'US label terms for beer, on one scale. A regular beer sits well above the low-alcohol line.',
          ),
        ],
      },
      {
        id: 'tests',
        h2: 'Are the labels accurate?',
        blocks: [
          {
            t: 'p',
            x: 'Mostly, but not always. The Motherisk analysis summarised in Canadian Family Physician tested 45 drinks sold as non-alcoholic or low-alcohol and found 13 of them, 29%, contained more ethanol than the label declared. Some brands labelled 0.0% contained up to 1.8% alcohol [[adiong]]. That was a small sample from one market, so it does not tell you about any particular brand you buy today. It is a reason to treat the label as a claim, and to prefer brands that state a specific figure.',
          },
          {
            t: 'p',
            x: 'The same article was written for pregnant and breastfeeding women, and its caution applies there too: if you need to avoid alcohol completely for a medical reason, “non-alcoholic” is not the same as “none”, and your doctor or midwife is the right person to ask [[adiong]].',
          },
        ],
      },
      {
        id: 'recovery',
        h2: 'NA beer in recovery: what studies say',
        blocks: [
          {
            t: 'p',
            x: 'The best evidence is still thin. A 2026 commentary in Addiction argued that no and low alcohol drinks may help people who drink at higher-risk levels but do not have severe alcohol use disorder, and may carry a significant risk of relapse for people recovering from it; the authors called for better studies [[holmes]].',
          },
          {
            t: 'p',
            x: 'The one outcome study we found is from Japan: 198 men treated for alcohol dependence were followed for a year. Abstinence at one year was 51.2% among men who did not drink non-alcoholic beer and 15.3% among those who did, and the authors called NA beer a potential threat to abstinence [[yokoyama]]. It is observational and men only, so it cannot show that the beer caused relapse; men who were already struggling may have been more likely to reach for it.',
          },
          {
            t: 'p',
            x: 'In a study of 153 posts on a recovery forum, most posts about non-alcoholic drinks were positive or neutral (86.8%), while some warned about trace alcohol (9.8%) or described being served real alcohol by mistake (6.5%) [[acuff]]. That is what people say, not what happens to them, but it matches the practical risks.',
          },
          {
            t: 'callout',
            kind: 'safety',
            title: 'If you are stopping after heavy drinking',
            x: SAFETY_WITHDRAWAL,
          },
        ],
      },
      {
        id: 'decide',
        h2: 'Deciding whether NA beer is for you',
        blocks: [
          {
            t: 'ol',
            items: [
              '**Write your rule down before you buy.** “Alcohol free only”, “under 0.5% is fine”, or “not in my first 90 days” are all reasonable. Deciding in the shop is harder.',
              '**Watch the first few.** If the taste makes you want a real beer, that is useful information, not failure.',
              '**Pick the setting.** NA beer at a barbecue with friends is a different test from NA beer alone on the sofa where you used to drink.',
              '**Look at the can every time when out.** Bars sometimes keep both versions in the same fridge.',
              '**If you are in treatment, ask.** The Japanese study is a reason to raise it with your clinician, not a rule for everyone.',
            ],
          },
          {
            t: 'p',
            x: 'Sober Girl lets you set your own sober date and what it means to you; it does not decide whether a 0.4% beer counts. If you would rather avoid the question altogether, our [easy mocktails](/sobergirl/easy-mocktails) are fruit-and-fizz drinks that do not imitate beer, and [non-alcoholic wine](/sobergirl/non-alcoholic-wine) covers the wine labels.',
          },
        ],
      },
    ],
    faqs: [
      { q: 'Is non-alcoholic beer really alcohol free?', a: 'Not always. On a US label, non-alcoholic means less than 0.5% alcohol by volume, stated beside the term. Only alcohol free means no alcohol.' },
      { q: 'Can you get drunk on non-alcoholic beer?', a: 'At under 0.5%, it would take a very large amount. The bigger risk is a mislabelled product: one analysis found some drinks labelled 0.0% contained up to 1.8% alcohol.' },
      { q: 'Does NA beer break sobriety?', a: 'There is no official rule. Some people count only alcohol-free drinks, some accept under 0.5%. Decide before you start and keep to it. If you are in treatment, ask your clinician.' },
      { q: 'Is NA beer OK in early recovery?', a: 'The evidence is mixed. A 2026 commentary warned of relapse risk for people recovering from alcohol use disorder, and a Japanese study of 198 men found lower one-year abstinence among those who drank it. Neither proves cause.' },
      { q: 'What is the difference between 0.0 and 0.5 beer?', a: 'A 0.5% label in the US is under the non-alcoholic rule and can contain a trace of alcohol. 0.0 is a marketing claim of essentially none; only “alcohol free” on a US label promises no alcohol.' },
    ],
    related: ['non-alcoholic-wine', 'easy-mocktails', 'how-to-count-sober-days', 'lapse-vs-relapse'],
    shots: [
      { file: 'home', alt: 'Sober Girl home screen with a sober days counter set from your own date', title: 'Your date, your rule', caption: 'You choose the sober date and what counts. Example data.' },
      { file: 'sos', alt: 'Sober Girl craving SOS with a breathing circle and your own reason for stopping', title: 'When the taste brings a craving', caption: 'Craving SOS: a breath, a timer and your reason. Example data.' },
    ],
  }),

  /* ================================================================ alcohol and menopause */
  page({
    slug: 'alcohol-and-menopause',
    metaTitle: 'Alcohol and Menopause: Hot Flashes, Sleep and Risk',
    metaDescription:
      'Does alcohol make hot flashes worse? What studies of midlife women found (they disagree), plus what alcohol does to sleep and breast cancer risk in women.',
    h1: 'Alcohol and menopause: hot flashes, sleep and what the studies actually say',
    dek: 'Many women notice their drinking feels different in their 40s and 50s. The research on hot flashes is split, and we show both sides. On sleep and breast cancer risk it is clearer.',
    quickAnswer:
      'The evidence on alcohol and hot flashes is mixed. In 4,164 Korean women aged 42 to 52, drinking was linked to more bothersome hot flashes and night sweats, with odds 3.52 times higher at 40 g a day or more than in lifelong non-drinkers [[kwon]]. A US study of midlife women found the opposite, with current drinking linked to a lower risk of hot flashes [[schilling]]. Both are observational. Clearer: alcohol fragments sleep in the second half of the night [[sleep]], and even one drink a day can raise a woman’s breast cancer risk by 5% to 15% [[niaaaWomen]].',
    keywords: ['alcohol menopause', 'alcohol and menopause', 'does alcohol make hot flashes worse', 'alcohol hot flashes', 'menopause and alcohol intolerance', 'alcohol night sweats menopause', 'perimenopause alcohol'],
    heroAlt: 'A thermometer, a crescent moon and a small wine glass with a question mark, beside a bloom',
    sections: [
      {
        id: 'hot-flashes',
        h2: 'Does alcohol make hot flashes worse?',
        blocks: [
          {
            t: 'p',
            x: 'Two good-sized studies point in opposite directions, and we would rather show you both than pick the one that makes a tidier headline.',
          },
          {
            t: 'table',
            caption: 'Odds of moderately to severely bothersome hot flashes or night sweats, compared with lifelong non-drinkers, adjusted. Kwon et al. 2022, 4,164 premenopausal Korean women [[kwon]].',
            head: ['Alcohol per day', 'Roughly, in US standard drinks', 'Odds ratio (95% CI)'],
            rows: [
              ['Under 10 g', 'Under 1 drink', '1.42 (1.02 to 1.99)'],
              ['10 to 19 g', 'About 1 drink', '1.99 (1.27 to 3.12)'],
              ['20 to 39 g', 'About 1.5 to 3 drinks', '2.06 (1.19 to 3.57)'],
              ['40 g or more', 'About 3 or more drinks', '3.52 (1.72 to 7.20)'],
            ],
          },
          {
            t: 'p',
            x: 'In the Korean study, women were 42 to 52 and still premenopausal, and the more they drank, the more likely they were to report bothersome symptoms. In the follow-up group of 2,394 women without symptoms at the start, the risk of new symptoms was higher only at 20 g a day or more. The authors suggest that not drinking may help prevent bothersome symptoms [[kwon]]. The standard-drink column is our conversion at 14 g per US standard drink [[niaaaStandard]].',
          },
          {
            t: 'p',
            x: 'A study of midlife women in Maryland found current alcohol use was associated with a lower risk of hot flashes, and that this was not explained by differences in sex hormone levels [[schilling]]. The two studies differ in country, age, menopausal stage and how they measured drinking, and neither can prove cause.',
          },
          figure(
            'alcohol-and-menopause-card',
            'Chart of odds ratios for bothersome hot flashes rising from 1.42 under 10 grams a day to 3.52 at 40 grams or more, beside a note that a US study found the opposite',
            'Alcohol and hot flashes: two studies, two answers',
            'Odds ratios from Kwon et al. 2022, with a US study that found lower risk shown alongside.',
          ),
          {
            t: 'p',
            x: '**What to do with mixed evidence:** your own body is a better guide than an average. Two or three alcohol-free weeks, with a note each night about flushes and sleep, will tell you more about you than either study can.',
          },
        ],
      },
      {
        id: 'sleep',
        h2: 'Alcohol, night sweats and sleep',
        blocks: [
          {
            t: 'p',
            x: 'Menopause already disrupts sleep for many women. Alcohol adds its own pattern: it can make you drowsy at first, then fragment sleep in the second half of the night, and it can reduce REM sleep [[sleep]]. If you wake at 3 am hot and wide awake, a glass of wine at 9 pm may be part of the picture, whatever its effect on flushes.',
          },
          {
            t: 'p',
            x: 'Our guide to [sleep after quitting alcohol](/sobergirl/sleep-after-quitting-alcohol) covers what to expect in the first weeks without it.',
          },
        ],
      },
      {
        id: 'risk',
        h2: 'Why alcohol hits differently in midlife',
        blocks: [
          {
            t: 'ul',
            items: [
              '**Body water.** Alcohol sits mainly in body water, and pound for pound women have less water than men, so the same drink gives a higher concentration [[niaaaWomen]].',
              '**Breast cancer.** NIAAA says even one drink a day can raise a woman’s breast cancer risk by 5% to 15% [[niaaaWomen]]. The 2025 Surgeon General advisory named breast cancer in women among seven cancers linked to alcohol [[surgeon]].',
              '**Mood.** Many women notice low mood or anxiety around menopause. A review of the research judged that alcohol use more plausibly raises the risk of depression than the reverse [[boden]].',
            ],
          },
          {
            t: 'p',
            x: 'None of this means you must stop. It does explain why a habit that felt harmless at 35 can feel heavier at 50, and why many women choose this stage to cut back or take a break. See [how much is too much for women](/sobergirl/how-much-alcohol-is-too-much-for-women) for the current guideline numbers.',
          },
        ],
      },
      {
        id: 'try',
        h2: 'A simple two-week experiment',
        blocks: [
          {
            t: 'ol',
            items: [
              '**Pick 14 days** with no big events in them.',
              '**Each morning, note three things:** how many flushes you remember, how you slept (1 to 5), and your mood (1 to 5).',
              '**Replace the evening drink** with something you look forward to: a [mocktail](/sobergirl/easy-mocktails), a bath, a walk.',
              '**Compare** the second week with your usual weeks. If nothing changes, that is useful too.',
              '**Talk to your doctor** about symptoms that disrupt your life. There are treatments for menopause symptoms, and alcohol is only one factor.',
            ],
          },
        ],
      },
    ],
    faqs: [
      { q: 'Does alcohol make menopause symptoms worse?', a: 'For hot flashes the studies disagree: a Korean study of 4,164 women linked drinking to more bothersome symptoms, while a US study linked current drinking to fewer. Alcohol does fragment sleep, and many women notice they tolerate it less.' },
      { q: 'Why can’t I tolerate alcohol in perimenopause?', a: 'We did not find a study that explains this directly. Women have less body water than men, so the same drink gives a higher concentration, and alcohol disrupts sleep that menopause may already be disturbing.' },
      { q: 'Does alcohol cause night sweats?', a: 'In the Korean study, higher drinking was linked to more bothersome hot flashes or night sweats. It is an association, not proof, and another study found the opposite for hot flashes.' },
      { q: 'How much alcohol is safe during menopause?', a: 'We did not find a menopause-specific limit. NIAAA says even one drink a day can raise breast cancer risk by 5% to 15%. Ask your doctor about your own risks.' },
      { q: 'Will quitting alcohol help hot flashes?', a: 'It might, and it is easy to test. Try two alcohol-free weeks and note flushes and sleep each morning. The research cannot tell you how you personally will respond.' },
    ],
    related: ['how-much-alcohol-is-too-much-for-women', 'sleep-after-quitting-alcohol', 'alcohol-and-depression', 'sober-app-for-women'],
    shots: [
      { file: 'journal', alt: 'Sober Girl private journal with short daily entries and a mood for each day', title: 'Note flushes, sleep and mood', caption: 'A private journal for a two-week experiment. Plus. Example data.' },
      { file: 'home', alt: 'Sober Girl home screen with alcohol-free days and a daily check-in', title: 'Count the alcohol-free days', caption: 'Days, money saved and a one-tap check-in. Example data.' },
    ],
  }),

  /* ================================================================ alcohol and antidepressants */
  page({
    slug: 'alcohol-and-antidepressants',
    metaTitle: 'Alcohol and Antidepressants: Is It Safe to Drink?',
    metaDescription:
      'What NIAAA, MedlinePlus and the NHS say about drinking on antidepressants such as sertraline: drowsiness, worse depression, MAOI warnings, and what to ask.',
    h1: 'Alcohol and antidepressants: what happens if you drink',
    dek: 'Mixing the two is common and rarely discussed honestly. Here is what official medicine sources say, in plain language, and the questions to take to your prescriber.',
    quickAnswer:
      'Official sources advise caution. NIAAA lists drowsiness, dizziness, increased risk for overdose and increased feelings of depression or hopelessness as possible reactions for all the depression medicines it lists, which include sertraline (Zoloft), fluoxetine (Prozac) and bupropion (Wellbutrin) [[niaaaInteractions]]. The NHS says it is best not to drink while taking sertraline because it can stop the medicine working properly [[nhsSertraline]], and MedlinePlus says alcohol can make sertraline’s side effects worse [[medSertraline]]. Do not stop an antidepressant to drink; ask your prescriber what is safe for you.',
    keywords: ['alcohol and antidepressants', 'drinking and antidepressants', 'antidepressants and alcohol', 'sertraline and alcohol', 'can you drink on antidepressants', 'zoloft and alcohol', 'lexapro and alcohol', 'wellbutrin and alcohol'],
    heroAlt: 'A pill card and a wine glass separated by a caution sign, beside a bloom',
    sections: [
      {
        id: 'sources',
        h2: 'What the official sources say',
        blocks: [
          {
            t: 'table',
            caption: 'Quoted or closely paraphrased from each source. Brand names are as the sources list them.',
            head: ['Source', 'What it says'],
            rows: [
              ['NIAAA, Harmful Interactions', 'For depression medicines including Celexa, Cymbalta, Effexor, Lexapro, Paxil, Prozac, Remeron, Wellbutrin and Zoloft: drowsiness, dizziness, increased risk for overdose, and increased feelings of depression or hopelessness [[niaaaInteractions]]'],
              ['NIAAA, specific medicines', 'Increased alcohol effect with bupropion; impaired motor control with mirtazapine; liver damage with duloxetine [[niaaaInteractions]]'],
              ['NIAAA, MAOIs (such as Nardil)', 'Serious heart-related side effects; dangerously high blood pressure risk when MAOIs meet tyramine, found in beer and red wine [[niaaaInteractions]]'],
              ['NHS, sertraline', 'Best not to drink alcohol while taking sertraline because it can stop the medicine working properly [[nhsSertraline]]'],
              ['MedlinePlus, sertraline', 'Ask your doctor about the safe use of alcohol; alcohol can make the side effects of sertraline worse [[medSertraline]]'],
            ],
          },
          figure(
            'alcohol-and-antidepressants-card',
            'Card listing four possible effects of mixing alcohol with depression medicines: drowsiness and dizziness, overdose risk, worse depression, and a separate MAOI warning for beer and red wine',
            'What NIAAA says can happen when alcohol meets depression medicines',
            'From NIAAA’s Harmful Interactions booklet. Not a full list; ask your prescriber.',
          ),
        ],
      },
      {
        id: 'why',
        h2: 'Why the combination works against you',
        blocks: [
          {
            t: 'p',
            x: 'The first problem is simple: both can make you drowsy and slow, so together they can affect driving, balance and judgement more than either alone [[niaaaInteractions]]. The second is the one people miss. Alcohol is a depressant in its own right, and a review of the research concluded that alcohol use more plausibly increases the risk of depression than the other way round [[boden]]. Drinking to feel better tonight can work against the medicine you are taking to feel better over months.',
          },
          {
            t: 'p',
            x: 'Alcohol also changes sleep, making it lighter and more broken in the second half of the night [[sleep]], and poor sleep is hard on mood. Our page on [alcohol and depression](/sobergirl/alcohol-and-depression) covers the research in more depth.',
          },
        ],
      },
      {
        id: 'ask',
        h2: 'Questions to ask your prescriber',
        blocks: [
          {
            t: 'ol',
            items: [
              '**Is any alcohol OK with my medicine and dose?** Answers differ between medicines; MAOIs carry stricter warnings than most [[niaaaInteractions]].',
              '**Could my drinking be why the medicine is not working?** The NHS says alcohol can stop sertraline working properly [[nhsSertraline]].',
              '**What should I do if I have already been drinking?** Ask before it happens, not after.',
              '**If I want to cut down or stop drinking, is it safe to do so suddenly?** If you drink heavily, it may not be (see below).',
            ],
          },
          {
            t: 'callout',
            kind: 'safety',
            title: 'Do not stop either one suddenly',
            x: 'Do not stop or change an antidepressant on your own in order to drink; ask your prescriber. And if you drink heavily or every day, stopping alcohol suddenly can be dangerous. MedlinePlus says to go to the emergency room or call 911 if seizures, fever, severe confusion, hallucinations or an irregular heartbeat occur [[medline]]. If you are in crisis or thinking of harming yourself, call or text 988 in the US [[lifeline988]].',
          },
        ],
      },
      {
        id: 'honest',
        h2: 'If you are drinking on antidepressants now',
        blocks: [
          {
            t: 'p',
            x: 'You are not alone, and you do not need to be ashamed to raise it. Prescribers ask about alcohol because it matters to the treatment, not to judge you. If you want to cut down, counting alcohol-free days is a gentle place to start, and it gives you a concrete number to bring to your next appointment. See [alcohol-free days](/sobergirl/alcohol-free-days) and [how to quit drinking on your own](/sobergirl/how-to-quit-drinking-on-your-own).',
          },
          {
            t: 'p',
            x: 'Sober Girl is a tracker, not treatment and not medical advice. It cannot tell you whether a drink is safe with your medicine; only your prescriber or pharmacist can.',
          },
        ],
      },
    ],
    faqs: [
      { q: 'Can I drink alcohol on antidepressants?', a: 'Official sources advise caution. NIAAA lists drowsiness, dizziness, increased overdose risk and worse depression for the depression medicines it covers. Ask your prescriber what is safe for your medicine and dose.' },
      { q: 'What happens if you drink on sertraline?', a: 'The NHS says alcohol can stop sertraline working properly and advises not drinking. MedlinePlus says alcohol can make its side effects worse.' },
      { q: 'Is one drink OK on antidepressants?', a: 'We cannot say for you. It depends on the medicine, the dose and your health. MAOIs carry stricter warnings, including about beer and red wine. Ask your prescriber or pharmacist.' },
      { q: 'Should I skip my antidepressant if I am going to drink?', a: 'No. Do not stop or skip an antidepressant to drink without talking to your prescriber first.' },
      { q: 'Does alcohol make depression worse?', a: 'NIAAA lists increased feelings of depression or hopelessness as a possible reaction when alcohol is mixed with depression medicines, and a research review judged that alcohol use more plausibly raises the risk of depression than the reverse.' },
    ],
    related: ['alcohol-and-depression', 'alcohol-free-days', 'how-to-quit-drinking-on-your-own', 'hangxiety'],
    shots: [
      { file: 'home', alt: 'Sober Girl home screen with alcohol-free days and a daily check-in', title: 'A number for your appointment', caption: 'Alcohol-free days, counted for you. Example data.' },
      { file: 'journal', alt: 'Sober Girl private journal with short entries and a mood for each day', title: 'Notes on mood', caption: 'A private journal to track mood alongside your days. Plus. Example data.' },
    ],
  }),

  /* ================================================================ moderation management */
  page({
    slug: 'moderation-management',
    metaTitle: 'Moderation Management: Limits, 30 Days and Evidence',
    metaDescription:
      'Moderation Management explained: its drinking limits for women and men, the optional 30-day break, what a randomised trial found, and who it is not for.',
    h1: 'Moderation Management: what it is, its limits, and what the evidence says',
    dek: 'Not everyone who wants to change their drinking wants to quit for good. Moderation Management is the best-known peer group built for that goal. Here is what it asks, in its own words, and what one trial found.',
    quickAnswer:
      'Moderation Management (MM) is a nonprofit peer-support community for people who want to change their relationship with alcohol, with free online meetings [[mmHome]]. Its guidelines for women are no more than 9 drinks a week, no more than 3 per occasion and drinking on no more than 3 to 4 days a week; for men, 14 a week and 4 per occasion [[mmGuidelines]]. Some members start with a 30-day alcohol-free period, but it is not required, and MM says it suits people without signs of physical withdrawal [[mmHome]]. In a trial of 80 problem drinkers, adding a web program to MM resources raised alcohol-free days more than MM resources alone, though both groups improved [[hester]].',
    keywords: ['moderation management', 'moderation management guidelines', 'moderation management 30 days', 'moderation management limits', 'moderate drinking program', 'mm moderation management', 'drink moderately'],
    heroAlt: 'A calendar week with three drinking days and four alcohol-free days marked with blooms',
    sections: [
      {
        id: 'what',
        h2: 'What Moderation Management is',
        blocks: [
          {
            t: 'p',
            x: 'MM describes itself as a nonprofit that provides a non-judgmental, compassionate peer-support community, with online support around the clock through virtual meetings and online communities [[mmHome]]. Its programs are free. Researchers describe it as a mutual-help group for drinkers who want to learn to moderate, offering meetings, a forum, drinking-limit guidelines and an online drinking log, and note it tends to attract heavy drinkers who have not sought treatment before [[hester]].',
          },
          {
            t: 'p',
            x: 'The key difference from groups built around lifelong abstinence is the goal. MM leaves room for drinking within limits. It also says plainly that if moderation does not prove sustainable, a person should consider abstinence or professional treatment [[mmHome]].',
          },
        ],
      },
      {
        id: 'limits',
        h2: 'The MM drinking limits',
        blocks: [
          {
            t: 'table',
            caption: 'From Moderation Management’s guidelines page, retrieved 13 October 2026. MM calls these limits, not targets.',
            head: ['', 'Women', 'Men'],
            rows: [
              ['Per week', 'No more than 9 drinks [[mmGuidelines]]', 'No more than 14 drinks [[mmGuidelines]]'],
              ['Per occasion', 'No more than 3 [[mmGuidelines]]', 'No more than 4 [[mmGuidelines]]'],
              ['Drinking days', 'No more than 3 to 4 days a week [[mmGuidelines]]', 'No more than 3 to 4 days a week [[mmGuidelines]]'],
            ],
          },
          {
            t: 'p',
            x: 'MM also says blood alcohol charts are more accurate than counting drinks, because they account for weight, sex and how fast you drink, and it notes that NIAAA sets a lower weekly figure for women, 7 drinks with the same 3 per occasion [[mmGuidelines]]. A drink means a US standard drink, 14 g of alcohol [[niaaaStandard]]: a 5 oz glass of wine, not a large pour.',
          },
          figure(
            'moderation-management-card',
            'A week calendar with three drinking days of up to three drinks each and four alcohol-free days, adding up to nine drinks for women',
            'What the MM limits look like across a week',
            'Women’s limits: up to 9 a week, 3 per occasion, drinking on 3 to 4 days at most.',
          ),
        ],
      },
      {
        id: 'thirty',
        h2: 'The optional 30-day break',
        blocks: [
          {
            t: 'p',
            x: 'MM says some members choose a 30-day alcohol-free period early in the process, and that there is no requirement to start or end with full abstinence [[mmHome]]. A month off gives you a clean baseline: you see how you sleep, what you miss and which situations pull hardest, before you set your limits. It also tests whether stopping is harder than you expected, which is useful to know.',
          },
          {
            t: 'p',
            x: 'If you want structure for those 30 days, our [30-day no alcohol challenge](/sobergirl/30-day-no-alcohol-challenge) has a day-by-day plan, and a [printable sobriety calendar](/sobergirl/sobriety-calendar) gives you a box to tick each day.',
          },
        ],
      },
      {
        id: 'evidence',
        h2: 'Does it work? One trial',
        blocks: [
          {
            t: 'p',
            x: 'The clearest trial we found randomly assigned 80 non-dependent problem drinkers either to MM’s online resources plus a web program called Moderate Drinking, or to MM resources alone, with follow-ups at 3, 6 and 12 months. Both groups drank less and had fewer alcohol-related problems than at the start. The group with the added web program did better on the share of days they did not drink: from about 15% to 44%, against about 15% to 23% for MM resources alone [[hester]]. The authors called this partial evidence.',
          },
          {
            t: 'p',
            x: 'Two limits. Both arms used MM, so the trial does not test MM against nothing. And it included only non-dependent drinkers, which matches MM’s own advice that it suits people without signs of physical withdrawal [[mmHome]].',
          },
          {
            t: 'callout',
            kind: 'safety',
            title: 'Moderation is not for everyone',
            x: SAFETY_WITHDRAWAL,
          },
        ],
      },
      {
        id: 'track',
        h2: 'Tracking a moderation plan',
        blocks: [
          {
            t: 'p',
            x: 'A moderation plan lives or dies on counting. MM’s own resources include a drinking log [[hester]]. Sober Girl does not log individual drinks; it counts alcohol-free days in a row and money saved, with a one-tap daily check-in, and on Google Play it is listed as “Drink Less: Alcohol Free Days”. That fits the “4 alcohol-free days a week” half of the plan, or the optional 30 days. For logging each drink, a drink diary or an app built for it is the better tool. See [mindful drinking](/sobergirl/mindful-drinking) and [alcohol-free days](/sobergirl/alcohol-free-days).',
          },
        ],
      },
    ],
    faqs: [
      { q: 'What are the Moderation Management limits?', a: 'For women, no more than 9 drinks a week and 3 per occasion; for men, 14 a week and 4 per occasion; and drinking on no more than 3 to 4 days a week for both.' },
      { q: 'Does Moderation Management require 30 days of abstinence?', a: 'No. MM says some members choose a 30-day alcohol-free period early on, but there is no requirement to start or end with full abstinence.' },
      { q: 'Is Moderation Management free?', a: 'MM says its programs are free, with online meetings and communities. A few programs may have a fee, but it says fees are not required to take part.' },
      { q: 'Who is Moderation Management not for?', a: 'MM says it is best suited to people who are concerned about their drinking and are not experiencing signs of physical withdrawal. If moderation does not prove sustainable, it suggests abstinence or professional treatment.' },
      { q: 'Does Moderation Management work?', a: 'In a trial of 80 non-dependent problem drinkers, both groups using MM resources drank less after a year, and adding a web program raised alcohol-free days further. The authors called it partial evidence.' },
    ],
    related: ['mindful-drinking', 'alcohol-free-days', '30-day-no-alcohol-challenge', 'gray-area-drinking'],
    shots: [
      { file: 'home', alt: 'Sober Girl home screen with a run of alcohol-free days, money saved and a check-in', title: 'Count the alcohol-free days', caption: 'Days in a row and money saved. Example data.' },
      { file: 'milestones', alt: 'Sober Girl milestones screen with sobriety badges', title: 'The 30-day badge', caption: 'The milestone list includes a 30-day badge for an optional month off. Example data.' },
    ],
  }),
];
