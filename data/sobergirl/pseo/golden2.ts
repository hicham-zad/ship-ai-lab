import type { Article } from '../articles';
import { figure } from './shared';

// Second batch from the 2026-10-10 keyword research. Body, label and evidence pages. Each states what the
// sources support and what they do not, because these are health topics and the searcher is often worried.

const page = (a: Omit<Article, 'sources' | 'kicker'> & { kicker?: string }): Article => ({ kicker: 'Explainer', sources: [], ...a });

export const GOLDEN2_ARTICLES: Article[] = [
  /* ================================================================ non-alcoholic wine */
  page({
    slug: 'non-alcoholic-wine',
    metaTitle: 'Non-Alcoholic Wine: What the Label Means and Early Sobriety',
    metaDescription:
      'Non-alcoholic wine explained: what US labels mean, what “alcohol free” can and cannot claim, and what recent studies say about no-alcohol drinks in recovery.',
    h1: 'Non-alcoholic wine: what the label means, and whether it fits early sobriety',
    dek: 'It looks like wine, pours like wine and costs like wine. Here is what the words on the bottle promise, what they do not, and what research says about people who are cutting down or quitting.',
    quickAnswer:
      'Non-alcoholic wine is a drink made to resemble wine with little or no alcohol. The US label rules are clearest for beer: TTB says “non-alcoholic” may be used only with the statement “contains less than 0.5 percent (or .5%) alcohol by volume” next to it, and “alcohol free” only on products with no alcohol [[ttbBeer]]. For wine, TTB says wines under 7% alcohol by volume fall outside its labeling provisions and follow FDA food labeling rules [[ttbWine7]]. We found no TTB definition of “non-alcoholic wine” itself, so read the stated percentage. Whether it suits early sobriety is unsettled: a 2026 commentary says no/lo drinks may help people cutting down, and may carry a real risk of relapse for people recovering from alcohol use disorder [[holmes]].',
    keywords: ['non alcoholic wine', 'alcohol free wine', 'is non alcoholic wine alcohol free', 'non alcoholic wine early sobriety', 'non alcoholic wine label', 'zero alcohol wine'],
    heroAlt: 'A wine glass with a small 0.0 tag beside a label showing the words non-alcoholic and alcohol free',
    sections: [
      {
        id: 'what',
        h2: 'What it is',
        blocks: [
          {
            t: 'p',
            x: 'Researchers describe non-alcoholic beverages as drinks that emulate characteristics of their alcoholic counterparts while containing little or no alcohol [[acuff]]. “Non-alcoholic wine” is one of those: a drink built to look and taste enough like wine to take its place at a table. The important phrase is “little or no”. The two are not the same thing, and the label words are what separate them.',
          },
        ],
      },
      {
        id: 'label',
        h2: 'What the label words mean in the US',
        blocks: [
          {
            t: 'table',
            caption: 'Beer rules are from TTB’s malt beverage page. TTB’s wine page covers a different threshold and does not define these terms for wine.',
            head: ['Label wording', 'What the rule says', 'Applies to'],
            rows: [
              ['“Non-alcoholic”', 'May be used only with the statement “contains less than 0.5 percent (or .5%) alcohol by volume” immediately adjacent [[ttbBeer]]', 'Malt beverages (beer)'],
              ['“Alcohol free”', 'May be used only on products containing no alcohol [[ttbBeer]]', 'Malt beverages (beer)'],
              ['“Low alcohol” or “reduced alcohol”', 'May be used only on products containing less than 2.5% alcohol by volume [[ttbBeer]]', 'Malt beverages (beer)'],
              ['Wine under 7% alcohol by volume', 'The labeling provisions of the Federal Alcohol Administration Act do not apply, and FDA food labeling and packaging requirements apply instead [[ttbWine7]]', 'Wine'],
              ['Health warning statement', 'Required on wines containing at least 0.5% alcohol by volume that are intended for human consumption [[ttbWine7]]', 'Wine'],
            ],
          },
          {
            t: 'p',
            x: 'In plain terms: a beer labelled “non-alcoholic” can still contain up to just under 0.5% alcohol, and only “alcohol free” promises none [[ttbBeer]]. For wine, we could not find a TTB definition of “non-alcoholic”, and we will not present the beer rule as if it applied. If it matters to you, the percentage printed on the bottle is the number to read.',
          },
          figure(
            'non-alcoholic-wine-card',
            'Card showing three US label terms for beer: non-alcoholic means less than 0.5 percent alcohol by volume with a statement, alcohol free means no alcohol, low alcohol means under 2.5 percent',
            'What “non-alcoholic” and “alcohol free” mean on a US beer label',
            'TTB rules for malt beverages. Wine under 7% follows FDA food labeling rules.',
          ),
        ],
      },
      {
        id: 'evidence',
        h2: 'What research says about no-alcohol drinks and recovery',
        blocks: [
          {
            t: 'p',
            x: 'The evidence is new and thin, and it points two ways. A 2026 commentary in Addiction argues that no/lo drinks may be useful for people who drink at higher-risk levels but do not have severe alcohol use disorder, and may carry significant risk of relapse for people recovering from it. The authors say experimental and longitudinal studies are still needed [[holmes]].',
          },
          {
            t: 'p',
            x: 'One follow-up study of 198 Japanese men treated for alcohol dependence found one-year abstinence was higher among non-users of non-alcoholic beer than users (51.2% against 15.3%), and the authors urged caution about non-alcoholic beer as a potential threat to abstinence [[yokoyama]]. It was observational and men only, so it shows an association, not that the drink caused the relapse.',
          },
          {
            t: 'p',
            x: 'A content analysis of 153 posts on a recovery forum found most were positive or neutral about these drinks (86.8%), and also noted warnings that some contain low amounts of alcohol (9.8% of posts) and cases of being served alcohol by mistake after ordering one (6.5%) [[acuff]]. It describes what people say, not what happens to them.',
          },
          {
            t: 'p',
            x: 'The honest summary: for some people a drink in a wine glass keeps the ritual without the alcohol. For others the taste, the glass and the label are a cue. Research cannot yet tell you which group you are in.',
          },
        ],
      },
      {
        id: 'checklist',
        h2: 'Before you buy: a short checklist',
        blocks: [
          {
            t: 'ol',
            items: [
              '**Read the percentage, not just the name.** “Non-alcoholic” and “0.0%” are different promises.',
              '**Decide what your count means.** Whether a drink under 0.5% breaks your streak is a personal rule. Settle it before the first bottle, not after.',
              '**Notice the cue.** If pouring it into a wine glass makes you want the real thing, that is information.',
              '**Be careful when ordering out.** Some recovery-forum posters report being served alcohol by mistake [[acuff]]. Ask, and look at the bottle.',
              '**If you are recovering from alcohol use disorder, ask your clinician.** The evidence above is a reason to ask, not a rule.',
            ],
          },
        ],
      },
      {
        id: 'count',
        h2: 'Does it break your sober count?',
        blocks: [
          {
            t: 'p',
            x: 'There is no official answer. Some people count only alcohol-free days and treat anything under 0.5% as fine; others keep a stricter line and use only drinks labelled “alcohol free”. In Sober Girl you choose your own sober date and what it means to you, and the app counts from the date you set. See our [guide to counting sober days](/sobergirl/how-to-count-sober-days) and [what to do instead of drinking](/sobergirl/what-to-do-instead-of-drinking).',
          },
        ],
      },
    ],
    faqs: [
      { q: 'Is non-alcoholic wine really alcohol-free?', a: 'Not necessarily. Under TTB’s beer rules, “non-alcoholic” means less than 0.5% alcohol by volume with a statement beside it, and only “alcohol free” means none. We found no TTB definition of non-alcoholic wine, so check the stated percentage.' },
      { q: 'Can I drink non-alcoholic wine in early sobriety?', a: 'The evidence is unsettled. A 2026 commentary says no/lo drinks may carry a real risk of relapse for people recovering from alcohol use disorder, and may help some people who are cutting down. Ask your clinician if you are in recovery.' },
      { q: 'Does non-alcoholic wine break sobriety?', a: 'That is a personal rule. Some people accept drinks under 0.5% alcohol by volume; others use only drinks labelled alcohol free. Decide before you start and keep to it.' },
      { q: 'Is non-alcoholic wine safe in pregnancy?', a: 'We did not find a source on this that we could cite. Ask your doctor or midwife, and note that non-alcoholic does not mean zero alcohol.' },
      { q: 'What is the difference between non-alcoholic and alcohol free?', a: 'On US beer labels, non-alcoholic means under 0.5% alcohol by volume with a statement, and alcohol free means no alcohol at all.' },
    ],
    related: ['what-to-do-instead-of-drinking', 'how-to-count-sober-days', 'best-app-to-quit-drinking', 'non-alcoholic-beer'],
    shots: [
      { file: 'home', alt: 'Sober Girl home screen with a sober days counter, money saved and a check-in', title: 'Count the days you choose', caption: 'You set the sober date and what it means. Example data.' },
      { file: 'sos', alt: 'Sober Girl craving SOS with a breathing circle and a 10-minute timer', title: 'For the glass-in-hand moment', caption: 'A guided breath and a 10-minute timer. Example data.' },
    ],
  }),

  /* ================================================================ belly and bloating */
  page({
    slug: 'alcohol-belly-and-bloating',
    metaTitle: 'Alcohol Belly and Bloating: Causes and When to See a Doctor',
    metaDescription:
      'Alcohol belly and bloating explained: the calories, what research says about beer and belly fat in women, and the signs of gastritis or fluid that need a doctor.',
    h1: 'Alcohol belly and bloating: what causes it, and when it needs a doctor',
    dek: '“Alcohol belly” covers three different things: calories, fat, and swelling. They have different causes and different warning signs.',
    quickAnswer:
      'Alcohol belly is not a medical term. Calories: alcohol provides 7 kcal per gram [[traversy]], so a US standard drink holds about 98 kcal from the alcohol alone [[niaaaStandard]]. Belly fat: a systematic review found inadequate evidence that beer under 500 mL a day is linked to abdominal obesity, said higher intake may be, and found results for women inconsistent [[bendsen]]. Bloating and swelling: heavy alcohol drinking is among the most common causes of gastritis [[medGastritis]], and long-term alcohol overuse can cause ascites, fluid in the abdomen [[medAscites]]. Persistent swelling, belly pain, vomiting blood or yellowing skin needs a provider.',
    keywords: ['alcohol belly', 'beer belly women', 'alcohol bloating', 'swollen belly from alcohol', 'alcohol and belly bloat', 'why does alcohol make me bloated', 'beer belly female'],
    heroAlt: 'Three cards showing calories, belly fat and swelling as separate things with a warning sign on the last one',
    sections: [
      {
        id: 'three',
        h2: 'Three different things',
        blocks: [
          {
            t: 'p',
            x: 'Most pages treat “alcohol belly” as one thing. It is easier to think about as three questions: how many calories you took in, whether alcohol is linked to belly fat, and whether what you are seeing is swelling or bloating rather than fat. The last one is the one that can matter medically.',
          },
          figure(
            'alcohol-belly-and-bloating-card',
            'Three cards: calories from alcohol, belly fat evidence in beer drinkers, and swelling or bloating with signs that need a doctor',
            'Alcohol belly: calories, fat and swelling are different things',
            'Three different questions, with different evidence.',
            1200,
            560,
          ),
        ],
      },
      {
        id: 'calories',
        h2: 'Calories: the arithmetic',
        blocks: [
          {
            t: 'p',
            x: 'Alcohol provides 7 kcal per gram [[traversy]]. A US standard drink holds 14 g of alcohol [[niaaaStandard]], so about 98 kcal from the alcohol alone, before any sugar or mixer. NIAAA has a calculator for the full figure for a given drink [[niaaaCalc]].',
          },
          {
            t: 'table',
            caption: 'Illustrative arithmetic: standard drinks × 98 kcal. Alcohol only; mixers and food are extra.',
            head: ['Standard drinks a week', 'Calories from the alcohol', 'Per year (52 weeks)'],
            rows: [
              ['7', '686 kcal', '35,672 kcal'],
              ['14', '1,372 kcal', '71,344 kcal'],
              ['21', '2,058 kcal', '107,016 kcal'],
            ],
          },
          {
            t: 'p',
            x: 'Whether those calories become belly fat depends on the rest of your diet and body, which this arithmetic cannot know. Our guide to [alcohol and weight](/sobergirl/alcohol-and-weight) covers what the weight research does and does not show.',
          },
        ],
      },
      {
        id: 'fat',
        h2: 'Beer belly: what the evidence supports',
        blocks: [
          {
            t: 'p',
            x: 'A systematic review of 35 observational and 12 experimental studies looked at beer and measures of abdominal and general obesity [[bendsen]]. For abdominal obesity, most observational data showed a positive association or none between beer intake and waist measures in men, while results for women were inconsistent [[bendsen]]. For general obesity in women, most observational studies pointed to an inverse association or none between beer intake and body weight [[bendsen]].',
          },
          {
            t: 'p',
            x: 'The authors’ conclusion was careful: the data provide inadequate evidence to assess whether beer at moderate levels (under 500 mL a day) is linked to general or abdominal obesity, while higher intake may be positively associated with abdominal obesity [[bendsen]]. They also rated the experimental studies as generally low quality [[bendsen]]. In short: not proven at moderate levels, plausible at higher ones, and the evidence in women is mixed. The review is about beer; we found no equivalent for wine or spirits in the sources we cite.',
          },
        ],
      },
      {
        id: 'bloat',
        h2: 'Bloating and swelling',
        blocks: [
          {
            t: 'p',
            x: 'Bloating is what many people search for, but the causes vary and we did not find one source that explains all of it. What medical sources do document are two conditions to know about.',
          },
          { t: 'h3', x: 'Gastritis' },
          {
            t: 'p',
            x: 'Gastritis is an inflamed or swollen stomach lining. MedlinePlus lists heavy alcohol drinking among the most common causes, alongside medicines such as aspirin and ibuprofen and H. pylori infection [[medGastritis]]. Many people have no symptoms; when they occur they can include loss of appetite, nausea and vomiting, and pain in the upper belly [[medGastritis]]. MedlinePlus says to contact a provider for upper belly pain that does not go away, black or tarry stools, or vomiting blood [[medGastritis]].',
          },
          { t: 'h3', x: 'Ascites' },
          {
            t: 'p',
            x: 'Ascites is a build-up of fluid in the space between the lining of the abdomen and the organs. MedlinePlus lists alcohol overuse over many years among the causes of the liver damage that can lead to it [[medAscites]]. Small amounts of fluid may cause no symptoms; as more collects there can be abdominal pain and bloating, and large amounts can cause shortness of breath [[medAscites]].',
          },
          {
            t: 'callout',
            kind: 'safety',
            title: 'When swelling or belly pain needs a provider',
            x: 'MedlinePlus says to contact your provider right away for fever above 100.5°F, belly pain, black or bloody stools, blood in vomit, breathing problems, confusion or jaundice [[medAscites]]. A belly that is swollen and does not settle, especially with a history of heavy or long-term drinking, is worth a doctor’s visit rather than a guess.',
          },
        ],
      },
      {
        id: 'track',
        h2: 'What to track if you stop or cut back',
        blocks: [
          {
            t: 'ul',
            items: [
              '**Note the days, not only the belly.** A daily check-in, plus a short journal note with a mood and a line about how your stomach feels (Plus), shows a pattern in two weeks that memory will not.',
              '**Take a photo in the same light** at day one and day 30, if it helps you. One photo proves little, but a series is a record.',
              '**Do not diagnose yourself.** Persistent bloating, pain or swelling is for a clinician, not a calendar.',
            ],
          },
          { t: 'p', x: 'For what is documented at each stage, see [what happens when you stop drinking alcohol](/sobergirl/what-happens-when-you-stop-drinking-alcohol).' },
        ],
      },
    ],
    faqs: [
      { q: 'What is alcohol belly?', a: 'It is not a medical term. It usually refers to extra calories, belly fat linked with heavy drinking, or bloating and swelling. Each has different evidence and different warning signs.' },
      { q: 'Does beer cause belly fat in women?', a: 'A systematic review found results for women inconsistent, and inadequate evidence that beer under 500 mL a day is linked to abdominal obesity. Higher intake may be.' },
      { q: 'Why does alcohol make me bloated?', a: 'It varies. Heavy drinking is among the most common causes of gastritis, which can cause nausea and upper belly pain. We did not find one source explaining all bloating.' },
      { q: 'What is a swollen belly from alcohol?', a: 'It can be ascites, fluid in the abdomen, which long-term alcohol overuse can cause by damaging the liver. Persistent swelling, belly pain or breathing problems need a provider.' },
      { q: 'How long does alcohol belly take to go away?', a: 'We found no study that measured it. A month-off study found weight fell on average by 1.5%, but that is not specific to the belly.' },
    ],
    related: ['alcohol-and-weight', 'what-happens-when-you-stop-drinking-alcohol', 'alcohol-face'],
    shots: [
      { file: 'home', alt: 'Sober Girl home screen with days sober and a daily check-in to note how you feel', title: 'A daily check-in', caption: 'A daily check-in and, with Plus, journal notes with a mood show patterns memory misses. Example data.' },
      { file: 'journal', alt: 'Sober Girl private journal with short notes and moods', title: 'Private notes (Plus)', caption: 'Short notes about sleep, stomach and mood stay on your phone. Example data.' },
    ],
  }),

  /* ================================================================ hair loss */
  page({
    slug: 'alcohol-and-hair-loss',
    metaTitle: 'Does Alcohol Cause Hair Loss? What the Meta-Analysis Found',
    metaDescription:
      'Does alcohol cause hair loss? A 2024 meta-analysis of six studies found a possible link with wide uncertainty. What the numbers mean and what they cannot show.',
    h1: 'Does alcohol cause hair loss? What the research actually found',
    dek: 'Search results say yes with confidence. The best summary of the studies says: maybe, a little, and the data are inconsistent.',
    quickAnswer:
      'A 2024 systematic review and meta-analysis of six studies found people who drink had 1.40 times the odds of androgenetic alopecia, the most common form of hair loss, compared with people who do not, but the 95% confidence interval ran from 0.95 to 2.06, which includes no effect [[yangHair]]. Cross-sectional and case-control studies showed larger associations, the studies disagreed with each other (heterogeneity 77%), and the authors concluded alcohol’s effect on this kind of hair loss may be less than initially assumed [[yangHair]]. It covers one type of hair loss and does not speak to other kinds.',
    keywords: ['alcohol and hair loss', 'does alcohol cause hair loss', 'can drinking cause hair loss', 'does drinking affect hair loss', 'alcohol and hair thinning', 'quit drinking hair growth'],
    heroAlt: 'A small forest plot with dots and lines for odds ratios crossing a vertical line at 1',
    sections: [
      {
        id: 'found',
        h2: 'What the review found',
        blocks: [
          {
            t: 'p',
            x: 'Yang and colleagues searched five databases up to March 2024 for studies of alcohol consumption and clinically diagnosed androgenetic alopecia, and pooled six of them [[yangHair]]. The authors describe the association between alcohol and this kind of hair loss as uncertain and controversial before their analysis [[yangHair]].',
          },
          {
            t: 'table',
            caption: 'Odds ratios for androgenetic alopecia in people who drink compared with people who do not. An odds ratio of 1 means no difference. From the review’s abstract [[yangHair]].',
            head: ['Group of studies', 'Odds ratio', '95% confidence interval', 'Includes 1 (no effect)?'],
            rows: [
              ['All six studies', '1.40', '0.95 to 2.06', 'Yes'],
              ['Men only (four studies)', '1.31', '0.85 to 2.01', 'Yes'],
              ['Cross-sectional studies (three)', '1.93', '1.32 to 2.82', 'No'],
              ['Case-control studies (two)', '1.69', '1.33 to 2.14', 'No'],
            ],
          },
          figure(
            'alcohol-and-hair-loss-card',
            'Chart of four odds ratios with confidence intervals for alcohol and androgenetic alopecia, with a line at 1 showing no effect',
            'Alcohol and androgenetic alopecia: odds ratios from a 2024 meta-analysis',
            'Dots are odds ratios and lines are 95% confidence intervals. The line at 1 is no effect.',
            1200,
            560,
          ),
        ],
      },
      {
        id: 'read',
        h2: 'How to read those numbers',
        blocks: [
          {
            t: 'ul',
            items: [
              '**Odds ratio 1.40** means that, across the studies, the odds of this hair loss were about 40% higher in drinkers than in non-drinkers. It does not mean 40% more hair loss.',
              '**A confidence interval that includes 1** means the data are compatible with no effect. The overall result and the men-only result both do.',
              '**Two sets of studies did not include 1,** but cross-sectional and case-control designs are the weaker ones for showing cause: they look at one moment, or compare people with and without the condition, and cannot show what came first.',
              '**Heterogeneity of 77%** is high. It means the studies disagreed with each other more than chance would explain, so a single pooled number should be held loosely [[yangHair]].',
            ],
          },
        ],
      },
      {
        id: 'cannot',
        h2: 'What this does not show',
        blocks: [
          {
            t: 'p',
            x: 'The review covered androgenetic alopecia only [[yangHair]]. It does not tell you whether heavy drinking affects other kinds of hair loss, whether alcohol-related nutrient problems matter, or whether your hair will regrow if you stop. We found no study that measured regrowth after stopping alcohol.',
          },
          {
            t: 'p',
            x: 'The male subgroup was reported in the abstract; we found no separate pooled estimate for women [[yangHair]]. So for a woman asking this question, the answer is that the best summary is mostly about men and does not establish a woman-specific effect either way.',
          },
        ],
      },
      {
        id: 'worried',
        h2: 'If you are worried about your hair',
        blocks: [
          {
            t: 'p',
            x: 'Hair loss has many possible causes and a dermatologist or doctor can check for them, which is more useful than changing one habit and waiting. If you are cutting down for other reasons, your hair is one more thing you can watch: a photo of your parting each month in the same light is a record you can show a clinician. See our pages on [what happens when you stop drinking](/sobergirl/what-happens-when-you-stop-drinking-alcohol) and [alcohol face](/sobergirl/alcohol-face) for what is documented about your body and skin.',
          },
        ],
      },
    ],
    faqs: [
      { q: 'Does alcohol cause hair loss?', a: 'The best summary we found, a 2024 meta-analysis of six studies, found a possible association with androgenetic alopecia (odds ratio 1.40) but the confidence interval, 0.95 to 2.06, includes no effect.' },
      { q: 'Will my hair grow back if I stop drinking?', a: 'We found no study that measured regrowth after stopping alcohol. If you are worried about hair loss, a doctor or dermatologist can look for causes.' },
      { q: 'Does alcohol cause hair loss in women?', a: 'The meta-analysis abstract reports a subgroup for men and we found no separate estimate for women, so a woman-specific effect is not established.' },
      { q: 'Why do some studies show a stronger link?', a: 'Cross-sectional and case-control studies showed larger associations, but they are weaker designs for showing cause, and the studies disagreed with each other.' },
    ],
    related: ['alcohol-face', 'what-happens-when-you-stop-drinking-alcohol', 'benefits-of-quitting-alcohol'],
    shots: [
      { file: 'home', alt: 'Sober Girl home screen with sober days and a daily check-in', title: 'Track your own timeline', caption: 'Days and a daily check-in on one screen. Example data.' },
      { file: 'milestones', alt: 'Sober Girl milestone screen with badges from 1 to 365 days', title: 'Milestones', caption: 'Nine badges from day 1 to day 365. Example data.' },
    ],
  }),

  /* ================================================================ red wine */
  page({
    slug: 'is-red-wine-good-for-you',
    metaTitle: 'Is Red Wine Good for You? What the Evidence Shows',
    metaDescription:
      'Is red wine good for you? A review of 87 studies, a resveratrol cohort and the Surgeon General’s cancer advisory, in plain language, with what remains unproven.',
    h1: 'Is red wine good for you? What the evidence shows',
    dek: 'The idea that a glass of red a night is protective is everywhere. Here is where it came from, why it has fallen apart, and what is left.',
    quickAnswer:
      'Not in a way research has been able to show. A systematic review of 87 studies and nearly 4 million people found low-volume drinkers had lower mortality before adjustment (relative risk 0.86), but studies that corrected design flaws, such as counting former drinkers as abstainers, found no net mortality benefit compared with lifetime abstention or occasional drinking [[stockwell]]. For red wine’s antioxidant resveratrol, a study of 783 adults aged 65 and over found urinary resveratrol levels were not significantly associated with all-cause mortality over nine years [[semba]]. Meanwhile the 2025 US Surgeon General advisory said alcohol contributes to nearly 100,000 cancer cases a year [[surgeon]].',
    keywords: ['is red wine good for you', 'is red wine healthy', 'red wine health benefits', 'red wine heart health', 'is a glass of red wine a day good for you', 'red wine resveratrol'],
    heroAlt: 'A glass of red wine beside two small bar charts, one marked adjusted and one unadjusted',
    sections: [
      {
        id: 'origin',
        h2: 'Where the idea comes from',
        blocks: [
          {
            t: 'p',
            x: 'Older meta-analyses of cohort studies found a J-shaped curve: people who drank a little had lower all-cause mortality than people who drank nothing, and people who drank a lot did worst [[stockwell]]. Red wine became the poster drink for that curve, helped by the finding that grapes contain resveratrol, a polyphenol thought to have antioxidant and anti-inflammatory effects [[semba]].',
          },
        ],
      },
      {
        id: 'bias',
        h2: 'Why the curve does not hold up',
        blocks: [
          {
            t: 'p',
            x: 'Stockwell and colleagues pointed out the problem: low-volume drinkers may look healthy only because the “abstainers” they are compared with are skewed towards ill health. Former drinkers, who may have stopped because they got sick, were often counted as abstainers [[stockwell]].',
          },
          {
            t: 'p',
            x: 'Their review pooled 87 studies covering 3,998,626 people and 367,103 deaths. Without adjustment it reproduced the classic curve, with low-volume drinkers (1.3 to 24.9 g of alcohol a day) at relative risk 0.86 [[stockwell]]. Once they controlled for study characteristics such as misclassified abstainers, they found that low-volume drinking had no net mortality benefit compared with lifetime abstention or occasional drinking [[stockwell]]. The review’s abstract does not single out red wine, but it addresses the claim at the root: the apparent protection of moderate drinking.',
          },
          figure(
            'is-red-wine-good-for-you-card',
            'Bar chart of the share of older adults who died over nine years by resveratrol quartile: 34.4, 31.6, 33.5 and 37.4 percent, with a note that the difference was not significant',
            'Resveratrol levels and mortality over nine years',
            'Deaths over nine years by quartile of urinary resveratrol, 783 adults aged 65 and over. Not significant (P = .67).',
            1200,
            560,
          ),
        ],
      },
      {
        id: 'resveratrol',
        h2: 'What about resveratrol?',
        blocks: [
          {
            t: 'p',
            x: 'The InCHIANTI study tested the idea directly. Researchers measured urinary resveratrol metabolites in 783 adults aged 65 and over in the Chianti region of Italy, and followed them for nine years. Across quartiles from lowest to highest resveratrol, 34.4%, 31.6%, 33.5% and 37.4% of participants died, a difference that was not significant (P = .67) [[semba]]. Those in the lowest quartile had a hazard ratio for mortality of 0.80 (95% CI 0.54 to 1.17) against the highest, which is compatible with no difference [[semba]].',
          },
          {
            t: 'p',
            x: 'The study is observational and in older adults in one region, so it cannot close the question. It does show that, among people who eat and drink in the Chianti way, higher resveratrol levels achieved with diet did not go with longer life [[semba]].',
          },
        ],
      },
      {
        id: 'cancer',
        h2: 'What the same drink costs',
        blocks: [
          {
            t: 'p',
            x: 'The US Surgeon General’s January 2025 advisory reported that alcohol contributes to nearly 100,000 US cancer cases and about 20,000 deaths a year, and named seven cancers including breast cancer in women [[surgeon]]. NIAAA says even one drink a day can raise a woman’s breast cancer risk by 5% to 15% compared with not drinking [[niaaaWomen]]. NIAAA’s overall message on health is that for those who drink, the less, the better [[niaaaBasics]].',
          },
        ],
      },
      {
        id: 'bottom',
        h2: 'The honest bottom line',
        blocks: [
          {
            t: 'ul',
            items: [
              '**No good evidence that red wine protects,** and a careful review of the whole question found no net mortality benefit for low-volume drinking.',
              '**Resveratrol from diet did not predict longer life** in the one cohort that measured it.',
              '**Alcohol raises some cancer risks,** including breast cancer, at low levels of drinking.',
              '**None of this is a reason to feel guilty** about the glass you had. It is a reason not to start for health, or to keep one going on that basis.',
            ],
          },
          {
            t: 'p',
            x: 'If you are thinking about the nightly glass, our guide on [how to stop drinking wine every night](/sobergirl/how-to-stop-drinking-wine-every-night) has a practical plan, and [how much alcohol is too much for a woman](/sobergirl/how-much-alcohol-is-too-much-for-women) has the NIAAA definitions.',
          },
        ],
      },
    ],
    faqs: [
      { q: 'Is a glass of red wine a day good for you?', a: 'Research has not been able to show it. A review of 87 studies found no net mortality benefit for low-volume drinking once design flaws were corrected, and alcohol raises some cancer risks, including breast cancer.' },
      { q: 'Does resveratrol in red wine help you live longer?', a: 'In a nine-year study of 783 older adults, resveratrol levels from diet were not significantly associated with all-cause mortality.' },
      { q: 'Is red wine better for your heart than other alcohol?', a: 'We did not find a source that supports it. A review of low-volume drinking found no net mortality benefit once design flaws were corrected, and its abstract does not single out red wine.' },
      { q: 'Does red wine cause cancer?', a: 'Alcohol, in any form, is linked with cancers. The US Surgeon General named seven, including breast cancer, and NIAAA says one drink a day can raise a woman’s breast cancer risk by 5% to 15%.' },
      { q: 'What if I already drink red wine every night?', a: 'You do not need to feel guilty, but the health case for it is weak. If you want to cut back, a plan helps more than willpower.' },
    ],
    related: ['how-to-stop-drinking-wine-every-night', 'benefits-of-quitting-alcohol', 'how-much-alcohol-is-too-much-for-women'],
    shots: [
      { file: 'home', alt: 'Sober Girl home screen with days without alcohol and money saved', title: 'Count alcohol-free days', caption: 'Days, money saved and a daily check-in. Example data.' },
      { file: 'benefits', alt: 'Sober Girl screen listing what the app tracks: days, money saved, craving SOS and journal', title: 'What the app tracks', caption: 'What Sober Girl tracks for you. Example data.' },
    ],
  }),

  /* ================================================================ ADHD */
  page({
    slug: 'alcohol-and-adhd',
    metaTitle: 'Alcohol and ADHD: What the Research Shows About the Link',
    metaDescription:
      'Alcohol and ADHD: what meta-analyses found about childhood ADHD and later alcohol problems, how common ADHD is in people with substance use disorders, and limits.',
    h1: 'Alcohol and ADHD: what the research shows about the link',
    dek: 'The link between ADHD and alcohol problems is well documented at group level. What it means for any one person is a different question.',
    quickAnswer:
      'ADHD and alcohol problems are linked in research, but the link is an association, not proof of cause. A meta-analysis of 13 prospective studies found childhood ADHD was associated with alcohol use disorder by young adulthood (odds ratio 1.35, 95% CI 1.11 to 1.64) [[charach]]. A separate meta-analysis of 29 studies found 23.1% of people with substance use disorders met criteria for comorbid ADHD, with alcohol dependence higher than cocaine dependence [[emmerik]]. These are results for groups, not predictions for you, and the abstracts we reviewed did not report results for women separately.',
    keywords: ['alcohol and adhd', 'adhd and drinking', 'sober with adhd', 'adhd alcohol use disorder', 'adhd and alcohol addiction', 'quit drinking with adhd'],
    heroAlt: 'Two overlapping circles labelled ADHD and alcohol problems, with a small question mark in the overlap',
    sections: [
      {
        id: 'link',
        h2: 'Two things the research shows',
        blocks: [
          {
            t: 'table',
            caption: 'Both are meta-analyses of observational studies. They show association, not cause.',
            head: ['Study', 'What it measured', 'Result'],
            rows: [
              ['Charach et al. 2011, 13 prospective cohorts [[charach]]', 'Whether children with ADHD developed alcohol use disorder by young adulthood, compared with children without', 'Odds ratio 1.35 (95% CI 1.11 to 1.64) for alcohol use disorder'],
              ['van Emmerik-van Oortmerssen et al. 2012, 29 studies [[emmerik]]', 'How common ADHD was among people with substance use disorders', '23.1% (95% CI 19.4% to 27.2%) met criteria for ADHD. Lower with cocaine dependence than with alcohol or opioid dependence'],
            ],
          },
          figure(
            'alcohol-and-adhd-card',
            'Two panels: childhood ADHD and alcohol use disorder odds ratio 1.35, and 23.1 percent of people with substance use disorders meeting criteria for ADHD',
            'ADHD and alcohol problems in two meta-analyses',
            'Two meta-analyses of observational studies. Association, not cause.',
            1200,
            560,
          ),
        ],
      },
      {
        id: 'limits',
        h2: 'What those numbers cannot tell you',
        blocks: [
          {
            t: 'ul',
            items: [
              '**An odds ratio of 1.35 is a modest increase in odds, not a certainty.** It was one of five associations the authors tested, and only two, alcohol use disorder and nicotine use, held up in sensitivity analyses [[charach]].',
              '**The 23.1% figure is among people in treatment** for a substance use disorder, so it describes that group, not everyone who has ADHD [[emmerik]].',
              '**The studies describe groups, mostly children followed into young adulthood.** They do not predict your own risk, and they do not say how any particular treatment works.',
              '**We did not find results for women separately** in the abstracts, so we cannot say whether the link differs by sex.',
            ],
          },
          {
            t: 'p',
            x: 'On why the association exists, the authors of a population-based study of 232 people with childhood ADHD and 335 controls point to impulsivity, a known symptom of ADHD, as likely accounting for part of the relationship, and say other factors may play a role [[levy]]. That is a proposal in the study’s background, not a finding.',
          },
        ],
      },
      {
        id: 'quit',
        h2: 'Is it harder to stop with ADHD?',
        blocks: [
          {
            t: 'p',
            x: 'We did not find a well-designed study that answers this directly. One small cross-sectional study of 100 inpatients with alcohol use disorder in a single hospital found 19% had comorbid adult ADHD and reported that those patients showed faster progression to dependence and early relapses [[lohit]]. It was one hospital and a small sample, so it is a signal to ask about, not a conclusion.',
          },
          {
            t: 'p',
            x: 'The practical takeaway is to mention ADHD to whoever is helping you with alcohol, and to mention alcohol to whoever treats your ADHD. Each can change how the other is handled, and neither professional can account for what they do not know.',
          },
        ],
      },
      {
        id: 'tracking',
        h2: 'What helps when attention is scattered',
        blocks: [
          {
            t: 'p',
            x: 'We cannot claim an app treats anything, and we know of no trial of tracker apps in people with ADHD. What we can say is how Sober Girl is built, because friction matters for anyone who finds routines hard to keep:',
          },
          {
            t: 'ul',
            items: [
              '**The daily check-in takes seconds,** one tap, not a form.',
              '**You choose the reminder time,** so it can sit where you will actually see it.',
              '**Craving SOS is one tap away,** a guided breath, a 10-minute timer and your own reason, with no setup at the moment you need it.',
              '**A missed day does not punish you.** Your tree fades toward olive when you skip check-ins and recovers when you return. It never dies.',
            ],
          },
          { t: 'p', x: 'If you are drinking to cope with focus, mood or sleep, see [alcohol and depression](/sobergirl/alcohol-and-depression) and [how to stop alcohol cravings](/sobergirl/how-to-stop-alcohol-cravings).' },
        ],
      },
    ],
    faqs: [
      { q: 'Does ADHD make you more likely to develop an alcohol problem?', a: 'In a meta-analysis of 13 prospective studies, childhood ADHD was associated with alcohol use disorder by young adulthood (odds ratio 1.35). That is an association at group level, not a prediction for any one person.' },
      { q: 'How common is ADHD in people with alcohol problems?', a: 'In a meta-analysis of 29 studies of people with substance use disorders, 23.1% met criteria for ADHD, with alcohol dependence higher than cocaine dependence.' },
      { q: 'Is it harder to quit drinking with ADHD?', a: 'We did not find a well-designed study that answers this. One small hospital study of 100 inpatients reported earlier relapses in those with ADHD, so it is worth telling your clinician about both.' },
      { q: 'Are there sober apps designed for ADHD?', a: 'We know of no trial of tracker apps in people with ADHD. Sober Girl uses a seconds-long check-in, a reminder time you choose and a one-tap craving tool, but we make no treatment claims.' },
    ],
    related: ['alcohol-and-depression', 'how-to-stop-alcohol-cravings', 'lapse-vs-relapse'],
    shots: [
      { file: 'home', alt: 'Sober Girl home screen with a one-tap daily check-in and a sober days counter', title: 'A one-tap check-in', caption: 'The daily check-in takes seconds. Example data.' },
      { file: 'sos', alt: 'Sober Girl craving SOS with a breathing circle, a timer and your reason', title: 'Craving SOS', caption: 'One tap, no setup. Example data.' },
    ],
  }),

  /* ================================================================ flush reaction */
  page({
    slug: 'alcohol-flush-reaction',
    metaTitle: 'Red Face When Drinking: The Alcohol Flush Reaction Explained',
    metaDescription:
      'Why your face goes red when you drink: the alcohol flush reaction, the ALDH2 enzyme behind it, who gets it, and why researchers link it to esophageal cancer risk.',
    h1: 'Red face when you drink: the alcohol flush reaction explained',
    dek: 'A hot, red face after a drink is not just embarrassing. In many people it is a sign of how the body handles alcohol, and it carries a documented health risk.',
    quickAnswer:
      'A red, hot face after a drink is the alcohol flushing response, and it is predominantly caused by an inherited deficiency in the enzyme ALDH2 [[brooks]]. About 36% of East Asians (Japanese, Chinese and Koreans) show it, with nausea and a fast heartbeat, and an estimated 540 million people worldwide are ALDH2-deficient [[brooks]]. The review links the deficiency with a much higher risk of esophageal cancer from alcohol, and says doctors should counsel those patients to limit drinking [[brooks]]. Facial redness can also relate to skin conditions such as rosacea [[liuChen]].',
    keywords: ['red face alcohol', 'red face from drinking', 'alcohol flush reaction', 'asian flush', 'alcohol flushing', 'why does my face go red when i drink'],
    heroAlt: 'A face with a red flushed cheek beside a simple diagram of alcohol breaking down into acetaldehyde and acetate',
    sections: [
      {
        id: 'what',
        h2: 'What is happening in your body',
        blocks: [
          {
            t: 'p',
            x: 'The body breaks alcohol down in two main steps. Ethanol is first metabolised mainly by alcohol dehydrogenase into acetaldehyde, which the review describes as a mutagen and an animal carcinogen that causes DNA damage. Acetaldehyde is then broken down to acetate, mainly by the enzyme ALDH2 [[brooks]].',
          },
          {
            t: 'p',
            x: 'In East Asian populations there are two main variants of the ALDH2 gene. The common one makes a working enzyme. The other, ALDH2*2, makes an inactive one. People with two copies have no detectable ALDH2 activity, and people with one copy have far less than half of normal activity, a reduction the review puts at more than 100-fold in heterozygotes [[brooks]]. When acetaldehyde cannot be cleared quickly, it builds up. Facial flushing, nausea and a racing heart follow [[brooks]].',
          },
          figure(
            'alcohol-flush-reaction-card',
            'Diagram of alcohol breaking down to acetaldehyde then acetate, with the ALDH2 step marked and facts about flushing prevalence',
            'The alcohol flush reaction and the ALDH2 enzyme',
            'Acetaldehyde builds up when the ALDH2 step is slow. Facts from Brooks et al. 2009.',
            1200,
            560,
          ),
        ],
      },
      {
        id: 'who',
        h2: 'Who gets it',
        blocks: [
          {
            t: 'p',
            x: 'The review estimates that about 36% of East Asians show the characteristic response, and that there are at least 540 million ALDH2-deficient people worldwide, roughly 8% of the population [[brooks]]. It is often called “Asian flush” or “Asian glow”, though the review notes many people with the deficiency now live in Western countries [[brooks]]. Not everyone who flushes has the deficiency, and we did not find a source that covers every other cause.',
          },
        ],
      },
      {
        id: 'why',
        h2: 'Why it matters beyond the blush',
        blocks: [
          {
            t: 'p',
            x: 'The review’s central point is that the flushing response is an unrecognised risk factor. ALDH2 deficiency contributes both to the flushing and to an elevated risk of squamous cell esophageal cancer from alcohol [[brooks]]. It argues that knowing about the flush lets doctors identify affected patients simply and cheaply, and that those patients should be counselled to limit alcohol consumption to reduce the risk [[brooks]].',
          },
          {
            t: 'p',
            x: 'In plain terms: the review treats a flush as a signal to limit drinking, not a quirk to push through. That is its recommendation to clinicians, and we cannot give you a personal risk figure.',
          },
        ],
      },
      {
        id: 'other',
        h2: 'Other reasons your face goes red',
        blocks: [
          {
            t: 'p',
            x: 'A 2023 dermatology review proposes that alcohol increases microvascular permeability in the skin, which may directly cause flushing [[liuChen]]. It also notes that whether alcohol aggravates rosacea “remains controversial”, though two epidemiological studies linked higher intake with a higher risk [[liuChen]]. If your redness is persistent rather than a response to drinks, it is worth asking a doctor or dermatologist. See our page on [alcohol face](/sobergirl/alcohol-face) for what the skin research supports.',
          },
        ],
      },
      {
        id: 'do',
        h2: 'What to do if you flush',
        blocks: [
          {
            t: 'ul',
            items: [
              '**Take it as information.** A strong flush after a small amount is a reason to talk to a doctor about your drinking, not to drink through it.',
              '**Mention it to your clinician** if you drink regularly and flush. The review says doctors can use the response to identify risk [[brooks]].',
              '**Do not rely on flushing as a limit.** Not flushing does not mean your drinking is safe.',
              '**Track your days.** If you are cutting back, a daily count shows the pattern. See our [sobriety counter](/sobergirl/sobriety-counter).',
            ],
          },
        ],
      },
    ],
    faqs: [
      { q: 'Why does my face turn red when I drink alcohol?', a: 'Often because of an inherited deficiency in the ALDH2 enzyme, which lets acetaldehyde build up. This is the alcohol flushing response, which also causes nausea and a fast heartbeat.' },
      { q: 'What is Asian flush?', a: 'A common name for the alcohol flushing response, seen in about 36% of East Asians in one review. It is predominantly due to an inherited ALDH2 deficiency.' },
      { q: 'Is alcohol flush dangerous?', a: 'A review links ALDH2 deficiency with a much higher risk of esophageal cancer from alcohol and recommends doctors counsel patients to limit drinking. It is not just a cosmetic effect.' },
      { q: 'Can you build tolerance to alcohol flush?', a: 'The review does not discuss building tolerance. Its recommendation is that affected people limit alcohol to reduce cancer risk. Ask your doctor.' },
      { q: 'Can rosacea cause a red face with alcohol?', a: 'Alcohol is associated with rosacea in cohort studies, though a 2023 review calls the link controversial. If redness is persistent, ask a doctor or dermatologist.' },
    ],
    related: ['alcohol-face', 'benefits-of-quitting-alcohol', 'what-happens-when-you-stop-drinking-alcohol'],
    shots: [
      { file: 'home', alt: 'Sober Girl home screen with a sober days counter and daily check-in', title: 'Count your alcohol-free days', caption: 'A daily count shows the pattern. Example data.' },
      { file: 'benefits', alt: 'Sober Girl screen listing the app features', title: 'What the app tracks', caption: 'Days, money saved, craving SOS and a private journal. Example data.' },
    ],
  }),
];
