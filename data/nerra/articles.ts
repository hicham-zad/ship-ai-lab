import { SOURCES } from './sources';

export type Block =
  | { t: 'p'; x: string }
  | { t: 'h3'; x: string }
  | { t: 'ul'; items: string[] }
  | { t: 'ol'; items: string[] }
  | { t: 'callout'; kind: 'safety' | 'note' | 'disclosure'; title: string; x: string }
  | { t: 'table'; head: string[]; rows: string[][]; caption?: string }
  | { t: 'tool'; id: 'rotation' | 'missed' }
  | { t: 'cta'; title: string; x: string }
  | { t: 'fit' };

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
  /** A direct, self-contained, cited answer shown at the top, written so it can be quoted on its own. */
  quickAnswer: string;
  kicker: string;
  keywords: string[];
  /** Source ids from SOURCES, in the order they are first cited. Numbering follows this order. */
  sources: string[];
  sections: Section[];
  faqs: { q: string; a: string }[];
  related: string[];
}

// Inline citation syntax: [[sourceId]] renders as a numbered link to the source list. **bold** is supported.
// Never state a dose, interval or window without a citation. Nerra never calculates or suggests a dose.

const PRESCRIBER =
  'This page repeats what the manufacturer’s label says. It is not medical advice. Your prescriber sets your dose and your schedule, and their instructions come first. Nerra never calculates or suggests a dose.';

const CTA_SITES = {
  t: 'cta' as const,
  title: 'Log every site in Nerra',
  x: 'Nerra remembers where your last injections went and warns you before you log the same spot twice. No account, nothing leaves your iPhone.',
};
const CTA_DOSES = {
  t: 'cta' as const,
  title: 'Keep your own dose history in Nerra',
  x: 'You enter the dose your prescriber gave you. Nerra keeps the log, the calendar and a reminder for the next one. It never suggests a dose.',
};

export const ARTICLES: Article[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'glp-1-injection-site-rotation',
    metaTitle: 'GLP-1 Injection Site Rotation: Free Planner + What the Labels Say',
    metaDescription:
      'Where to inject Ozempic, Wegovy, Mounjaro and Zepbound, what each label says about rotating sites, and a free printable 12-week site rotation planner.',
    h1: 'GLP-1 injection site rotation: what the labels say, and a free planner',
    dek: 'Ozempic, Wegovy, Mounjaro and Zepbound are all injected under the skin of the abdomen, thigh or upper arm, and all four labels say to rotate. Here is the exact wording, plus a planner you can print.',
    quickAnswer:
      'Inject under the skin of the abdomen, thigh or upper arm, and rotate the site. The Mounjaro and Zepbound labels say to rotate sites with each dose, and to have another person inject the back of the upper arm [[mounLabel]][[zepLabel]]. The Wegovy label also says to rotate with each dose [[wegLabel]]. The Ozempic label says to use a different injection site each week when injecting in the same body region [[ozLabel]]. None of the labels prescribe a specific rotation order, so the planner below is an example pattern, not a medical rule.',
    kicker: 'Injection sites',
    keywords: [
      'glp-1 injection site rotation',
      'glp-1 injection site rotation chart',
      'tirzepatide injection sites',
      'semaglutide injection sites',
      'where to inject ozempic',
      'injection site tracker',
    ],
    sources: ['mounLabel', 'zepLabel', 'wegLabel', 'ozLabel'],
    sections: [
      {
        id: 'labels',
        h2: 'What each label says about injection sites',
        blocks: [
          {
            t: 'callout',
            kind: 'note',
            title: 'Read this first',
            x: PRESCRIBER,
          },
          {
            t: 'table',
            head: ['Medicine', 'Where it can be injected', 'Rotation wording', 'Notes from the label'],
            rows: [
              ['Mounjaro (tirzepatide)', 'Abdomen, thigh, or back of the upper arm if another person injects [[mounLabel]]', 'Rotate injection sites with each dose [[mounLabel]]', 'With insulin: separate injections, same body region is acceptable but not adjacent [[mounLabel]]'],
              ['Zepbound (tirzepatide)', 'Abdomen, thigh, or back of the upper arm if another person injects [[zepLabel]]', 'Rotate injection sites with each dose [[zepLabel]]', 'Once weekly, any time of day, with or without meals [[zepLabel]]'],
              ['Ozempic (semaglutide)', 'Abdomen, thigh, or upper arm [[ozLabel]]', 'Use a different injection site each week when injecting in the same body region [[ozLabel]]', 'With insulin: same rule as above [[ozLabel]]'],
              ['Wegovy (semaglutide)', 'Abdomen, thigh, or upper arm [[wegLabel]]', 'Rotate injection sites with each dose [[wegLabel]]', 'Time of day and injection site can be changed without a dose change [[wegLabel]]'],
            ],
            caption: 'Wording from the US prescribing information, retrieved 6 October 2026. Your pen or vial has its own Instructions for Use, so follow those too.',
          },
          {
            t: 'p',
            x: 'The pattern is the same across all four: three body regions, and a different spot each time. The one real difference is the upper arm. For Mounjaro and Zepbound the label says another person should inject the back of the upper arm, which is hard to reach yourself [[mounLabel]][[zepLabel]].',
          },
        ],
      },
      {
        id: 'planner',
        h2: 'Free 12-week injection site planner',
        blocks: [
          { t: 'tool', id: 'rotation' },
          {
            t: 'p',
            x: 'The labels tell you to rotate but not in what order [[zepLabel]][[ozLabel]]. This planner simply cycles through your chosen regions and sides so that you never repeat a spot back to back. Nothing you enter is saved or sent anywhere.',
          },
        ],
      },
      CTA_SITES_SECTION(),
      {
        id: 'which',
        h2: 'Which medicine are you looking for?',
        blocks: [
          {
            t: 'ul',
            items: [
              'Tirzepatide: see the Mounjaro and Zepbound pages for the exact label wording on each.',
              'Semaglutide: see the Ozempic page. Wegovy follows the same three regions.',
              'Missed an injection? The window differs by medicine, so see the missed dose guide.',
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Where do you inject a GLP-1 medicine?',
        a: 'Under the skin (subcutaneously) of the abdomen, the thigh or the upper arm. For Mounjaro and Zepbound, the label says to inject the back of the upper arm only if another person does it. Rotate the site each time.',
      },
      {
        q: 'Do you have to rotate GLP-1 injection sites?',
        a: 'Yes, the labels tell you to. Mounjaro, Zepbound and Wegovy say to rotate sites with each dose. Ozempic says to use a different site each week when injecting in the same body region.',
      },
      {
        q: 'Is there an official injection site rotation chart?',
        a: 'The prescribing information does not publish a fixed order. It says to rotate. A chart or planner is a way to follow that instruction, not an official protocol.',
      },
      {
        q: 'Can I inject in the same body region every week?',
        a: 'The Ozempic label says to use a different injection site each week when injecting in the same body region, so the region can repeat but the exact spot should not. Ask your prescriber or pharmacist what they prefer.',
      },
      {
        q: 'Can I use the same area as my insulin?',
        a: 'The Mounjaro and Ozempic labels say it is acceptable to inject the medicine and insulin in the same body region, as separate injections, but they should not be adjacent to each other.',
      },
    ],
    related: ['zepbound-injection-sites', 'mounjaro-injection-sites', 'ozempic-injection-sites', 'glp-1-missed-dose'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'zepbound-injection-sites',
    metaTitle: 'Zepbound Injection Sites: Where to Inject and How to Rotate',
    metaDescription:
      'The Zepbound label says to inject the abdomen, thigh or back of the upper arm (with help) and to rotate with each dose. What that means in practice, with a free rotation planner.',
    h1: 'Zepbound injection sites: where to inject and how to rotate',
    dek: 'What the Zepbound label says about where to inject, how to rotate and what changes with the vial, pen or KwikPen, with a planner to track it.',
    quickAnswer:
      'Zepbound (tirzepatide) is injected subcutaneously once weekly in the abdomen or thigh, or in the back of the upper arm if another person gives the injection [[zepLabel]]. The label says to rotate injection sites with each dose [[zepLabel]]. It can be taken at any time of day, with or without meals [[zepLabel]]. Your pen, vial or KwikPen has its own Instructions for Use, so ask your pharmacist or prescriber to show you the technique for your presentation.',
    kicker: 'Zepbound',
    keywords: ['zepbound injection sites', 'tirzepatide injection sites', 'where to inject zepbound', 'zepbound injection site rotation', 'zepbound injection locations'],
    sources: ['zepLabel'],
    sections: [
      {
        id: 'where',
        h2: 'Where you can inject Zepbound',
        blocks: [
          { t: 'callout', kind: 'note', title: 'Read this first', x: PRESCRIBER },
          {
            t: 'ul',
            items: [
              '**Abdomen** (stomach area) [[zepLabel]]',
              '**Thigh** [[zepLabel]]',
              '**Back of the upper arm, only if another person injects it** [[zepLabel]]',
            ],
          },
          {
            t: 'p',
            x: 'The label’s instruction is to rotate injection sites with each dose [[zepLabel]]. It does not say how far apart sites should be or give a fixed order, so follow the Instructions for Use that came with your product and your prescriber’s advice.',
          },
        ],
      },
      {
        id: 'presentation',
        h2: 'Pen, KwikPen or vial: get trained on yours',
        blocks: [
          {
            t: 'p',
            x: 'Zepbound comes as a single-dose pen, a single-patient-use KwikPen, and vials. The label says patients should receive training for the specific presentation they are given, and should read the Instructions for Use again if the presentation changes [[zepLabel]]. People using vials need a suitable syringe and a new syringe and needle for every injection [[zepLabel]].',
          },
          {
            t: 'p',
            x: 'The label also says the KwikPen is not recommended for self-administration by people who are visually impaired [[zepLabel]].',
          },
        ],
      },
      {
        id: 'planner',
        h2: 'Track your rotation',
        blocks: [{ t: 'tool', id: 'rotation' }, CTA_SITES],
      },
      {
        id: 'schedule',
        h2: 'Timing facts from the same label',
        blocks: [
          {
            t: 'ul',
            items: [
              'Once weekly, at any time of day, with or without meals [[zepLabel]].',
              'You can change the day of the week if the time between two doses is at least 3 days (72 hours) [[zepLabel]].',
              'A missed dose can be taken as soon as possible within 4 days (96 hours); after that it is skipped [[zepLabel]]. See the [missed dose guide](/nerra/glp-1-missed-dose) for the checker.',
            ],
          },
        ],
      },
    ],
    faqs: [
      { q: 'Where is the best place to inject Zepbound?', a: 'The label allows the abdomen, the thigh, or the back of the upper arm if someone else injects it, and says to rotate sites with each dose. It does not rank them, so ask your prescriber if you have a preference.' },
      { q: 'Can I inject Zepbound in my arm myself?', a: 'The label says to inject the back of the upper arm only when another person gives the injection. Self-injection sites are the abdomen and thigh.' },
      { q: 'How often should I rotate Zepbound injection sites?', a: 'With each dose, according to the label. Because Zepbound is once weekly, that means a new spot every week.' },
      { q: 'Does Zepbound have to be injected at the same time every week?', a: 'It is once weekly at any time of day. The label allows changing the day if the gap between doses is at least 3 days (72 hours).' },
      { q: 'Is tirzepatide injected the same way as Mounjaro?', a: 'Yes. Zepbound and Mounjaro both contain tirzepatide, and both labels give the same injection sites and rotation instruction.' },
    ],
    related: ['mounjaro-injection-sites', 'tirzepatide-dose-chart', 'glp-1-injection-site-rotation', 'glp-1-missed-dose'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'mounjaro-injection-sites',
    metaTitle: 'Mounjaro Injection Sites: Where to Inject and How to Rotate',
    metaDescription:
      'The Mounjaro label says to inject the abdomen, thigh or back of the upper arm (with help), rotate with each dose, and keep insulin injections apart. Free rotation planner included.',
    h1: 'Mounjaro injection sites: where to inject and how to rotate',
    dek: 'What the Mounjaro label says about injection sites, rotating, and injecting alongside insulin, with a planner to keep track.',
    quickAnswer:
      'Mounjaro (tirzepatide) is injected subcutaneously once weekly in the abdomen or thigh, or in the back of the upper arm if another person gives the injection [[mounLabel]]. The label says to rotate injection sites with each dose [[mounLabel]]. If you also use insulin, inject them separately and never mix them. The same body region is acceptable but the injections should not be adjacent [[mounLabel]].',
    kicker: 'Mounjaro',
    keywords: ['mounjaro injection sites', 'where to inject mounjaro', 'tirzepatide injection sites', 'mounjaro injection site rotation', 'mounjaro injection locations'],
    sources: ['mounLabel'],
    sections: [
      {
        id: 'where',
        h2: 'Where you can inject Mounjaro',
        blocks: [
          { t: 'callout', kind: 'note', title: 'Read this first', x: PRESCRIBER },
          {
            t: 'ul',
            items: [
              '**Abdomen** [[mounLabel]]',
              '**Thigh** [[mounLabel]]',
              '**Back of the upper arm, only if another person injects it** [[mounLabel]]',
            ],
          },
          {
            t: 'p',
            x: 'Rotate injection sites with each dose [[mounLabel]]. Mounjaro is taken once weekly, any time of day, with or without meals [[mounLabel]].',
          },
        ],
      },
      {
        id: 'insulin',
        h2: 'If you also use insulin',
        blocks: [
          {
            t: 'p',
            x: 'The label says to give Mounjaro and insulin as separate injections and never to mix them. It is acceptable to inject both in the same body region, but the injections should not be adjacent to each other [[mounLabel]].',
          },
        ],
      },
      {
        id: 'planner',
        h2: 'Track your rotation',
        blocks: [{ t: 'tool', id: 'rotation' }, CTA_SITES],
      },
      {
        id: 'inspect',
        h2: 'Before you inject',
        blocks: [
          {
            t: 'ul',
            items: [
              'Look at it first. It should be clear and colorless to slightly yellow, and should not be used if particles or discoloration are seen [[mounLabel]].',
              'Mounjaro comes as pens, vials and a KwikPen, and you should be trained on the exact presentation you are prescribed [[mounLabel]].',
              'Vial users need a suitable syringe and a new syringe and needle for each injection [[mounLabel]].',
            ],
          },
        ],
      },
    ],
    faqs: [
      { q: 'Where do you inject Mounjaro?', a: 'In the abdomen or thigh, or the back of the upper arm if another person injects it, under the skin. Rotate sites with each dose.' },
      { q: 'Can I inject Mounjaro in the same spot each week?', a: 'No. The label says to rotate injection sites with each dose.' },
      { q: 'Can Mounjaro and insulin go in the same area?', a: 'The same body region is acceptable, but as separate injections that are not adjacent to each other, and never mixed.' },
      { q: 'What time of day should I inject Mounjaro?', a: 'Any time of day, with or without meals, once weekly, according to the label.' },
      { q: 'Are Mounjaro and Zepbound injected the same way?', a: 'Yes. Both are tirzepatide and both labels give the same sites and rotation instruction.' },
    ],
    related: ['zepbound-injection-sites', 'tirzepatide-dose-chart', 'glp-1-injection-site-rotation', 'glp-1-missed-dose'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'ozempic-injection-sites',
    metaTitle: 'Ozempic Injection Sites: Where to Inject and How to Rotate',
    metaDescription:
      'Where to inject Ozempic: abdomen, thigh or upper arm, with a different spot each week. What the label says, plus a free rotation planner and semaglutide timing rules.',
    h1: 'Ozempic injection sites: where to inject and how to rotate',
    dek: 'The Ozempic label names three body regions and one rotation rule. Here is what it says, and how to follow it week to week.',
    quickAnswer:
      'Ozempic (semaglutide) is injected subcutaneously in the abdomen, thigh or upper arm, once weekly on the same day each week [[ozLabel]]. The label says to use a different injection site each week when injecting in the same body region [[ozLabel]]. You can change the day of the week if the time between two doses is at least 2 days (more than 48 hours) [[ozLabel]].',
    kicker: 'Ozempic',
    keywords: ['ozempic injection sites', 'where to inject ozempic', 'semaglutide injection sites', 'ozempic injection site rotation', 'where do you inject ozempic'],
    sources: ['ozLabel'],
    sections: [
      {
        id: 'where',
        h2: 'Where you can inject Ozempic',
        blocks: [
          { t: 'callout', kind: 'note', title: 'Read this first', x: PRESCRIBER },
          {
            t: 'ul',
            items: ['**Abdomen** [[ozLabel]]', '**Thigh** [[ozLabel]]', '**Upper arm** [[ozLabel]]'],
          },
          {
            t: 'p',
            x: 'Unlike the tirzepatide labels, the Ozempic label does not say someone else has to inject the upper arm. It does say to use a different injection site each week when injecting in the same body region [[ozLabel]]. So you can keep to one region and move around within it, or move between regions.',
          },
        ],
      },
      {
        id: 'timing',
        h2: 'Same day each week, and when you can change it',
        blocks: [
          {
            t: 'ul',
            items: [
              'Ozempic is given once weekly, on the same day each week, at any time of day, with or without meals [[ozLabel]].',
              'The day can be changed if necessary, as long as the time between two doses is at least 2 days (more than 48 hours) [[ozLabel]].',
              'If a dose is missed, give it as soon as possible within 5 days. After more than 5 days, skip it and give the next dose on the regular day [[ozLabel]]. Use the [missed dose checker](/nerra/glp-1-missed-dose).',
            ],
          },
        ],
      },
      {
        id: 'planner',
        h2: 'Track your rotation',
        blocks: [{ t: 'tool', id: 'rotation' }, CTA_SITES],
      },
      {
        id: 'insulin',
        h2: 'If you also use insulin',
        blocks: [
          {
            t: 'p',
            x: 'Give Ozempic and insulin as separate injections and never mix them. Injecting both in the same body region is acceptable, but the injections should not be adjacent to each other [[ozLabel]].',
          },
        ],
      },
    ],
    faqs: [
      { q: 'Where is the best place to inject Ozempic?', a: 'The label allows the abdomen, thigh or upper arm and does not rank them. What it does say is to use a different site each week when you inject in the same body region.' },
      { q: 'Can I inject Ozempic in my arm?', a: 'Yes, the Ozempic label lists the upper arm as an injection region, alongside the abdomen and thigh.' },
      { q: 'Do I need to rotate Ozempic injection sites?', a: 'Yes. Use a different injection site each week when injecting in the same body region.' },
      { q: 'Can I change my Ozempic injection day?', a: 'Yes, if the time between two doses is at least 2 days (more than 48 hours).' },
      { q: 'Are semaglutide injection sites the same for Wegovy?', a: 'Yes. The Wegovy label also lists the abdomen, thigh or upper arm and says to rotate sites with each dose.' },
    ],
    related: ['semaglutide-dose-chart', 'glp-1-injection-site-rotation', 'glp-1-missed-dose', 'wegovy-dosing-schedule'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'tirzepatide-dose-chart',
    metaTitle: 'Tirzepatide Dose Chart: Mounjaro and Zepbound Label Doses',
    metaDescription:
      'Tirzepatide doses from the Mounjaro and Zepbound labels: starting dose, 2.5 mg steps every 4 weeks, maintenance doses, maximum, and strengths. Cited, not advice.',
    h1: 'Tirzepatide dose chart: what the Mounjaro and Zepbound labels say',
    dek: 'One table, taken straight from the two US labels: starting dose, step size, how long before an increase, maintenance doses and the maximum.',
    quickAnswer:
      'Both the Zepbound and Mounjaro labels start tirzepatide at 2.5 mg injected once weekly, and increase in 2.5 mg steps after at least 4 weeks on the current dose [[zepLabel]][[mounLabel]]. Zepbound’s maintenance doses are 5 mg, 10 mg or 15 mg (10 mg or 15 mg for sleep apnea), and 15 mg is the maximum for both medicines in adults [[zepLabel]][[mounLabel]]. Your prescriber chooses your dose, and it may differ from this table.',
    kicker: 'Dose chart',
    keywords: ['tirzepatide dose chart', 'mounjaro dosing schedule', 'zepbound dosage chart', 'tirzepatide dosage', 'zepbound dose escalation'],
    sources: ['zepLabel', 'mounLabel'],
    sections: [
      {
        id: 'warning',
        h2: 'Before you read the chart',
        blocks: [
          { t: 'callout', kind: 'safety', title: 'This is not a dosing recommendation for you', x: `${PRESCRIBER} Doses are adjusted for tolerability and response, so a person’s schedule can legitimately differ from the label’s general schedule.` },
        ],
      },
      {
        id: 'chart',
        h2: 'Tirzepatide dosing at a glance',
        blocks: [
          {
            t: 'table',
            head: ['', 'Zepbound (weight management, sleep apnea)', 'Mounjaro (type 2 diabetes)'],
            rows: [
              ['Starting dose', '2.5 mg once weekly for 4 weeks. Not a maintenance dose [[zepLabel]]', '2.5 mg once weekly [[mounLabel]]'],
              ['Step size', '2.5 mg increments [[zepLabel]]', '2.5 mg increments [[mounLabel]]'],
              ['Minimum time on a dose before increasing', 'At least 4 weeks [[zepLabel]]', 'At least 4 weeks [[mounLabel]]'],
              ['Maintenance doses', '5 mg, 10 mg or 15 mg. Sleep apnea: 10 mg or 15 mg [[zepLabel]]', 'Increase only if more glycemic control is needed [[mounLabel]]'],
              ['Maximum', '15 mg once weekly [[zepLabel]]', '15 mg once weekly in adults. 10 mg in pediatric patients [[mounLabel]]'],
              ['Available strengths', '2.5, 5, 7.5, 10, 12.5 and 15 mg [[zepLabel]]', '2.5, 5, 7.5, 10, 12.5 and 15 mg [[mounLabel]]'],
            ],
            caption: 'US prescribing information, Zepbound and Mounjaro, both revised 08/2026. Retrieved 6 October 2026.',
          },
          {
            t: 'p',
            x: 'The labels say the step schedule is designed to reduce the risk of gastrointestinal side effects [[zepLabel]][[mounLabel]]. Zepbound’s label adds that tolerability matters when choosing the maintenance dose, and that if a patient does not tolerate one, a lower maintenance dose should be considered [[zepLabel]].',
          },
        ],
      },
      {
        id: 'steps',
        h2: 'The steps as a list',
        blocks: [
          {
            t: 'p',
            x: 'Starting at 2.5 mg and adding 2.5 mg each time gives the strengths that exist: 2.5, 5, 7.5, 10, 12.5 and 15 mg [[zepLabel]]. That is arithmetic on the label’s step size, and the label says increases come after at least 4 weeks on the current dose, so reaching 15 mg takes at least 20 weeks if every step is taken at the earliest point. Many people stay on a lower dose by choice or on their prescriber’s advice.',
          },
        ],
      },
      CTA_DOSES_SECTION(),
      {
        id: 'admin',
        h2: 'Other timing rules on the labels',
        blocks: [
          {
            t: 'ul',
            items: [
              'Once weekly, any time of day, with or without meals [[zepLabel]][[mounLabel]].',
              'Missed dose: take it as soon as possible within 4 days (96 hours), otherwise skip it and use the next scheduled day [[zepLabel]][[mounLabel]].',
              'The weekly day can be changed if the time between doses is at least 3 days (72 hours) [[zepLabel]][[mounLabel]].',
            ],
          },
        ],
      },
    ],
    faqs: [
      { q: 'What is the starting dose of tirzepatide?', a: 'Both labels start at 2.5 mg injected once weekly. For Zepbound that is for 4 weeks, and it is not a maintenance dose.' },
      { q: 'How often does tirzepatide go up?', a: 'In 2.5 mg steps, after at least 4 weeks on the current dose, according to both labels. Your prescriber decides whether and when.' },
      { q: 'What is the maximum dose of tirzepatide?', a: '15 mg once weekly for adults on both labels. Mounjaro’s label gives 10 mg as the maximum in pediatric patients.' },
      { q: 'Is the Zepbound dose different from Mounjaro?', a: 'The step size, minimum time and strengths are the same. The labels differ in what they are prescribed for: Zepbound for weight and sleep apnea, Mounjaro for type 2 diabetes.' },
      { q: 'Can I stay on a lower tirzepatide dose?', a: 'The Zepbound label says to consider tolerability when choosing a maintenance dose and to consider a lower one if the dose is not tolerated. Talk to your prescriber.' },
    ],
    related: ['zepbound-injection-sites', 'mounjaro-injection-sites', 'glp-1-missed-dose', 'semaglutide-dose-chart'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'semaglutide-dose-chart',
    metaTitle: 'Semaglutide Dose Chart: Ozempic Doses From the Label',
    metaDescription:
      'Ozempic dose schedule from the label: 0.25 mg for 4 weeks, then 0.5 mg, with 1 mg and 2 mg steps after at least 4 weeks. Plus timing rules and where Wegovy differs.',
    h1: 'Semaglutide dose chart: Ozempic doses from the label',
    dek: 'The Ozempic schedule as the label gives it, with the timing rules around it and a pointer for Wegovy, which uses a different ladder.',
    quickAnswer:
      'The Ozempic label starts semaglutide at 0.25 mg once weekly for 4 weeks, then 0.5 mg once weekly [[ozLabel]]. If more glycemic control is needed after at least 4 weeks, it can go to 1 mg, and after at least 4 weeks on 1 mg, to 2 mg, which is the maximum [[ozLabel]]. Wegovy is semaglutide too but has its own schedule up to 2.4 mg, so check the Wegovy page. Your prescriber decides your dose.',
    kicker: 'Dose chart',
    keywords: ['semaglutide dose chart', 'ozempic dose schedule', 'ozempic dosage chart', 'semaglutide dosage', 'ozempic titration'],
    sources: ['ozLabel', 'wegLabel'],
    sections: [
      {
        id: 'warning',
        h2: 'Before you read the chart',
        blocks: [
          { t: 'callout', kind: 'safety', title: 'This is not a dosing recommendation for you', x: `${PRESCRIBER} The Ozempic label’s schedule is for glycemic control in type 2 diabetes.` },
        ],
      },
      {
        id: 'chart',
        h2: 'Ozempic dose schedule',
        blocks: [
          {
            t: 'table',
            head: ['Step', 'Dose, once weekly', 'What the label says'],
            rows: [
              ['Initiation', '0.25 mg for 4 weeks', 'Initiate at 0.25 mg once weekly for 4 weeks to reduce the risk of gastrointestinal side effects [[ozLabel]]'],
              ['After 4 weeks', '0.5 mg', 'Increase to 0.5 mg once weekly [[ozLabel]]'],
              ['If more control is needed, after at least 4 weeks on 0.5 mg', '1 mg', 'The dose may be increased to 1 mg [[ozLabel]]'],
              ['If more control is needed, after at least 4 weeks on 1 mg', '2 mg', 'The dose may be increased to 2 mg, the maximum [[ozLabel]]'],
            ],
            caption: 'Ozempic prescribing information, revised 05/2026. Retrieved 6 October 2026.',
          },
          {
            t: 'p',
            x: 'The recommended maintenance dose is 0.5 mg, 1 mg or 2 mg once weekly, based on glycemic control [[ozLabel]]. For people with type 2 diabetes and chronic kidney disease, the label says to increase to the 1 mg maintenance dose after at least 4 weeks on 0.5 mg [[ozLabel]].',
          },
        ],
      },
      {
        id: 'forms',
        h2: 'Pens and syringes',
        blocks: [
          {
            t: 'p',
            x: 'Ozempic comes as single-patient-use pens that hold several weekly doses, and as single-dose prefilled syringes in 0.25, 0.5 and 1 mg [[ozLabel]]. The pen strengths on the label are 2 mg per 3 mL (for 0.25 or 0.5 mg doses), 4 mg per 3 mL (1 mg) and 8 mg per 3 mL (2 mg) [[ozLabel]]. Which pen you have depends on your prescribed dose.',
          },
        ],
      },
      CTA_DOSES_SECTION(),
      {
        id: 'timing',
        h2: 'Timing rules',
        blocks: [
          {
            t: 'ul',
            items: [
              'Once weekly on the same day each week, any time of day, with or without meals [[ozLabel]].',
              'The day can be changed if the time between two doses is at least 2 days (more than 48 hours) [[ozLabel]].',
              'Missed dose: give it as soon as possible within 5 days. After more than 5 days, skip it [[ozLabel]].',
            ],
          },
        ],
      },
      {
        id: 'wegovy',
        h2: 'Wegovy is different',
        blocks: [
          {
            t: 'p',
            x: 'Wegovy (also semaglutide) starts at 0.25 mg like Ozempic but steps every 4 weeks through 0.5, 1 and 1.7 mg to a maintenance dose of 2.4 mg, and there is also a 7.2 mg strength and a daily tablet [[wegLabel]]. Do not mix the two schedules up. See the [Wegovy dosing schedule](/nerra/wegovy-dosing-schedule).',
          },
        ],
      },
    ],
    faqs: [
      { q: 'What is the starting dose of Ozempic?', a: '0.25 mg injected once weekly for 4 weeks, then 0.5 mg once weekly, according to the label.' },
      { q: 'What is the maximum Ozempic dose?', a: '2 mg once weekly.' },
      { q: 'How long should I stay on each Ozempic dose?', a: 'After the 4-week start, the label says an increase can be considered after at least 4 weeks on the current dose, if more glycemic control is needed. Your prescriber decides.' },
      { q: 'Is the Ozempic dose the same as Wegovy?', a: 'No. Both are semaglutide but they have different schedules and strengths. Wegovy’s maintenance dose is 2.4 mg, with a 7.2 mg option for some adults.' },
      { q: 'Can I change my Ozempic day?', a: 'Yes, as long as the time between two doses is at least 2 days (more than 48 hours).' },
    ],
    related: ['wegovy-dosing-schedule', 'ozempic-injection-sites', 'glp-1-missed-dose', 'tirzepatide-dose-chart'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'wegovy-dosing-schedule',
    metaTitle: 'Wegovy Dosing Schedule: Injection and Tablet Doses From the Label',
    metaDescription:
      'The Wegovy label dose ladder: 0.25, 0.5, 1 and 1.7 mg every 4 weeks, maintenance 2.4 mg, the 7.2 mg option, the daily tablet schedule, and the missed dose rule.',
    h1: 'Wegovy dosing schedule: injection and tablet doses from the label',
    dek: 'Both Wegovy forms in one place: the weekly injection ladder, the daily tablet ladder, the missed dose rules and how switching works.',
    quickAnswer:
      'Wegovy injection starts at 0.25 mg once weekly and steps every 4 weeks: 0.5 mg in weeks 5 to 8, 1 mg in weeks 9 to 12 and 1.7 mg in weeks 13 to 16, then a maintenance dose from week 17 [[wegLabel]]. For weight reduction in adults the maintenance dose is 1.7 mg or 2.4 mg (recommended), and 7.2 mg may be used after at least 4 weeks on 2.4 mg when more weight reduction is clinically indicated [[wegLabel]]. Wegovy tablets start at 1.5 mg daily and reach 25 mg from day 91 [[wegLabel]].',
    kicker: 'Dose chart',
    keywords: ['wegovy dosing schedule', 'wegovy dose chart', 'wegovy missed dose', 'wegovy tablets dose', 'wegovy 7.2 mg', 'oral wegovy'],
    sources: ['wegLabel'],
    sections: [
      {
        id: 'warning',
        h2: 'Before you read the schedule',
        blocks: [{ t: 'callout', kind: 'safety', title: 'This is not a dosing recommendation for you', x: PRESCRIBER }],
      },
      {
        id: 'injection',
        h2: 'Wegovy injection: weekly schedule',
        blocks: [
          {
            t: 'table',
            head: ['Weeks', 'Once-weekly dose'],
            rows: [
              ['1 to 4 (starting dose)', '0.25 mg [[wegLabel]]'],
              ['5 to 8', '0.5 mg [[wegLabel]]'],
              ['9 to 12', '1 mg [[wegLabel]]'],
              ['13 to 16', '1.7 mg [[wegLabel]]'],
              ['17 onward (maintenance)', 'Depends on the indication, see below [[wegLabel]]'],
            ],
            caption: 'Wegovy prescribing information, Table 1, revised 06/2026. Retrieved 6 October 2026.',
          },
          {
            t: 'ul',
            items: [
              'Weight reduction in adults: maintenance is 1.7 mg or 2.4 mg (2.4 mg recommended) once weekly [[wegLabel]].',
              'If 2.4 mg has been tolerated for at least 4 weeks and more weight reduction is clinically indicated, the dose may be increased to a maximum of 7.2 mg once weekly [[wegLabel]].',
              'Cardiovascular risk reduction in adults: 2.4 mg (recommended) or 1.7 mg [[wegLabel]].',
              'If a dose is not tolerated during escalation, the label says to consider delaying escalation for 4 weeks [[wegLabel]].',
            ],
          },
        ],
      },
      {
        id: 'tablet',
        h2: 'Wegovy tablets: daily schedule',
        blocks: [
          {
            t: 'table',
            head: ['Days', 'Once-daily tablet'],
            rows: [
              ['1 to 30 (starting dose)', '1.5 mg [[wegLabel]]'],
              ['31 to 60', '4 mg [[wegLabel]]'],
              ['61 to 90', '9 mg [[wegLabel]]'],
              ['91 onward (maintenance)', '25 mg [[wegLabel]]'],
            ],
            caption: 'Wegovy prescribing information, Table 2.',
          },
          {
            t: 'ul',
            items: [
              'Take on an empty stomach in the morning with water (up to 4 ounces). Swallow whole. Wait at least 30 minutes before eating, drinking or taking other oral medicines [[wegLabel]].',
              'Do not take more than one tablet per day [[wegLabel]].',
              'Missed tablet: skip it and take the next dose the following day [[wegLabel]].',
            ],
          },
        ],
      },
      {
        id: 'missed',
        h2: 'Missed injection rule',
        blocks: [
          {
            t: 'p',
            x: 'If one Wegovy injection is missed and the next scheduled dose is more than 2 days away, give it as soon as possible. If the next dose is less than 2 days away, skip it and resume on the regular day [[wegLabel]]. If 2 or more consecutive doses are missed, escalation should restart at a lower dose, so speak to your prescriber [[wegLabel]]. The [missed dose checker](/nerra/glp-1-missed-dose) applies this rule for you.',
          },
        ],
      },
      CTA_DOSES_SECTION(),
      {
        id: 'switch',
        h2: 'Switching between injection and tablets',
        blocks: [
          {
            t: 'ul',
            items: [
              'From 2.4 mg injection to 25 mg tablets: start the tablet one week after stopping the injection [[wegLabel]].',
              'From 25 mg tablets to injection: start 2.4 mg injection the day after stopping the tablets. If the tablets were not tolerated, the label says to consider 1.7 mg injection [[wegLabel]].',
            ],
          },
          { t: 'p', x: 'Wegovy injection sites are the abdomen, thigh or upper arm, rotated with each dose [[wegLabel]]. See the [site rotation planner](/nerra/glp-1-injection-site-rotation).' },
        ],
      },
    ],
    faqs: [
      { q: 'What is the Wegovy dose schedule?', a: '0.25 mg weekly for weeks 1 to 4, 0.5 mg for weeks 5 to 8, 1 mg for weeks 9 to 12, 1.7 mg for weeks 13 to 16, then a maintenance dose from week 17.' },
      { q: 'What is the maintenance dose of Wegovy?', a: 'For weight reduction in adults, 1.7 mg or 2.4 mg once weekly, with 2.4 mg recommended. A maximum of 7.2 mg may be used after at least 4 weeks on 2.4 mg when more weight reduction is clinically indicated.' },
      { q: 'What do I do if I miss a Wegovy injection?', a: 'If the next scheduled dose is more than 2 days away, give the missed dose as soon as possible. If it is less than 2 days away, skip it. If two or more doses in a row are missed, escalation restarts at a lower dose.' },
      { q: 'How do Wegovy tablets work in terms of dosing?', a: 'One tablet once daily: 1.5 mg for 30 days, then 4 mg, 9 mg, and 25 mg from day 91. Take it on an empty stomach with water and wait at least 30 minutes before eating or drinking.' },
      { q: 'Can I switch between Wegovy tablets and injection?', a: 'The label describes both directions with specific timing. Your prescriber manages the switch.' },
    ],
    related: ['semaglutide-dose-chart', 'glp-1-missed-dose', 'ozempic-injection-sites', 'glp-1-injection-site-rotation'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'glp-1-missed-dose',
    metaTitle: 'Missed a GLP-1 Dose? Ozempic, Wegovy, Mounjaro, Zepbound Rules',
    metaDescription:
      'What each label says if you miss a weekly GLP-1 injection: 4 days for Mounjaro and Zepbound, 5 days for Ozempic, the 2-day rule for Wegovy. Free missed dose checker.',
    h1: 'Missed a GLP-1 dose? What the Ozempic, Wegovy, Mounjaro and Zepbound labels say',
    dek: 'The four labels use three different rules. Here is each one in plain language, and a checker that applies it to your dates.',
    quickAnswer:
      'For Mounjaro and Zepbound, take a missed dose as soon as possible within 4 days (96 hours), otherwise skip it and use the next scheduled day [[mounLabel]][[zepLabel]]. For Ozempic the window is 5 days [[ozLabel]]. For Wegovy injection, take it if the next scheduled dose is more than 2 days away, and skip it if the next dose is less than 2 days away [[wegLabel]]. Missing 2 or more Wegovy doses in a row means escalation restarts at a lower dose, so call your prescriber [[wegLabel]].',
    kicker: 'Missed dose',
    keywords: ['ozempic missed dose', 'mounjaro missed dose', 'wegovy missed dose', 'zepbound missed dose', 'what to do if you miss a dose of ozempic', 'missed glp-1 injection'],
    sources: ['mounLabel', 'zepLabel', 'ozLabel', 'wegLabel'],
    sections: [
      {
        id: 'warning',
        h2: 'Before you rely on this',
        blocks: [
          {
            t: 'callout',
            kind: 'safety',
            title: 'Not medical advice',
            x: `${PRESCRIBER} If you are unsure, or you have missed more than one dose, call your prescriber or pharmacist. Never double up a dose to catch up.`,
          },
        ],
      },
      {
        id: 'rules',
        h2: 'The rule for each medicine',
        blocks: [
          {
            t: 'table',
            head: ['Medicine', 'Take it if', 'Skip it if', 'Then'],
            rows: [
              ['Mounjaro', 'Within 4 days (96 hours) of the missed dose [[mounLabel]]', 'More than 4 days have passed [[mounLabel]]', 'Resume the regular weekly schedule [[mounLabel]]'],
              ['Zepbound', 'Within 4 days (96 hours) of the missed dose [[zepLabel]]', 'More than 4 days have passed [[zepLabel]]', 'Resume the regular weekly schedule [[zepLabel]]'],
              ['Ozempic', 'Within 5 days of the missed dose [[ozLabel]]', 'More than 5 days have passed [[ozLabel]]', 'Resume the regular once-weekly schedule [[ozLabel]]'],
              ['Wegovy injection', 'The next scheduled dose is more than 2 days away [[wegLabel]]', 'The next scheduled dose is less than 2 days away [[wegLabel]]', 'If 2 or more doses in a row are missed, restart escalation at a lower dose [[wegLabel]]'],
              ['Wegovy tablets', 'Not applicable', 'Skip the missed dose', 'Take the next dose the following day [[wegLabel]]'],
            ],
            caption: 'US prescribing information: Mounjaro and Zepbound (08/2026), Ozempic (05/2026), Wegovy (06/2026). Retrieved 6 October 2026.',
          },
        ],
      },
      {
        id: 'checker',
        h2: 'Free missed dose checker',
        blocks: [
          { t: 'tool', id: 'missed' },
          {
            t: 'p',
            x: 'The checker counts calendar days between the day your dose was due and today. Because the tirzepatide limit is 96 hours and the Ozempic limit is 5 days, a result on the last day depends on the time of day you were due, so it tells you to check rather than guessing. Nothing you enter is saved or sent anywhere.',
          },
        ],
      },
      CTA_DOSES_SECTION(),
      {
        id: 'day',
        h2: 'Changing your injection day',
        blocks: [
          {
            t: 'ul',
            items: [
              'Mounjaro and Zepbound: the day can be changed as long as the time between two doses is at least 3 days (72 hours) [[mounLabel]][[zepLabel]].',
              'Ozempic: the day can be changed as long as the time between two doses is at least 2 days (more than 48 hours) [[ozLabel]].',
              'Wegovy: the label says the time of day and the injection site can be changed without a dose change [[wegLabel]]. The text we reviewed gives no minimum gap for moving the weekly day, so ask your prescriber.',
            ],
          },
        ],
      },
    ],
    faqs: [
      { q: 'What happens if I miss my Ozempic dose?', a: 'Give it as soon as possible within 5 days of the missed dose. If more than 5 days have passed, skip it and give the next dose on the regular day.' },
      { q: 'What happens if I miss my Mounjaro or Zepbound dose?', a: 'Take it as soon as possible within 4 days (96 hours). After 4 days, skip it and take the next dose on your regular day.' },
      { q: 'What if I miss a Wegovy injection?', a: 'If the next scheduled dose is more than 2 days away, take the missed dose as soon as possible. If it is less than 2 days away, skip it.' },
      { q: 'What if I miss two doses in a row?', a: 'The Wegovy label says escalation restarts at a lower dose if two or more consecutive doses are missed. For other medicines, talk to your prescriber.' },
      { q: 'Can I double up after a missed dose?', a: 'None of the rules above say to take two doses. Each tells you to take the missed dose or skip it, then resume the regular schedule.' },
    ],
    related: ['tirzepatide-dose-chart', 'semaglutide-dose-chart', 'wegovy-dosing-schedule', 'glp-1-injection-site-rotation'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'nerra-app',
    metaTitle: 'Nerra: Private GLP-1 Tracker App for iPhone (Facts and Pricing)',
    metaDescription:
      'Nerra is a private GLP-1 tracker for iPhone: doses, injection sites, weight and check-ins. No account, no cloud, one-time purchase. What it does, what it does not, and who it suits.',
    h1: 'Nerra: a private GLP-1 tracker for iPhone',
    dek: 'A plain fact sheet: what Nerra is, who makes it, what is free, what it will never do, and where it is not the right choice.',
    quickAnswer:
      'Nerra is a GLP-1 companion app for iPhone made by Hicham Zaidi. It tracks the doses you enter, injection sites, weight and body measurements, and daily check-ins for nausea, appetite and energy. It has no account and no cloud, so your data stays on your iPhone. The core logging is free and Nerra Lifetime is a single one-time purchase with no subscription. It is not a medical device and never calculates or suggests a dose. It is coming soon to the App Store, in English and German.',
    kicker: 'About Nerra',
    keywords: ['nerra app', 'glp-1 tracker app', 'private glp-1 tracker', 'glp-1 tracker no account', 'injection tracker app', 'ozempic tracker app', 'shotsy alternative'],
    sources: [],
    sections: [
      {
        id: 'facts',
        h2: 'Nerra at a glance',
        blocks: [
          {
            t: 'table',
            head: ['', 'Nerra'],
            rows: [
              ['What it is', 'A GLP-1 companion app for iPhone'],
              ['Maker', 'Hicham Zaidi, independent developer'],
              ['Status', 'Coming soon to the App Store. Not yet downloadable'],
              ['Languages', 'English and German'],
              ['Platforms', 'iPhone only. No Android version'],
              ['Account', 'None. No sign-up and no login'],
              ['Data storage', 'On your device only. No cloud, no ads and no trackers'],
              ['Price', 'Free to start. Nerra Lifetime is a single one-time purchase with no subscription'],
              ['Medical status', 'Not a medical device. Does not give medical advice'],
            ],
            caption: 'From the Nerra product page and legal pages. Check the App Store listing for the price at launch.',
          },
        ],
      },
      {
        id: 'does',
        h2: 'What Nerra does',
        blocks: [
          {
            t: 'ul',
            items: [
              '**Dose log and reminders.** You enter the dose your prescriber gave you. Nerra keeps the history, shows the next-dose date and sends a reminder with a gentle follow-up.',
              '**Injection sites.** Rotate sites easily and get a warning before you log a duplicate site.',
              '**Weight and measurements.** Track weight and body measurements and see progress over time.',
              '**Daily check-ins.** Log nausea, appetite and energy to spot patterns after a dose change.',
              '**Dose calendar and doctor report.** See logged and planned doses in a calendar, and export a PDF for an appointment.',
            ],
          },
        ],
      },
      {
        id: 'free',
        h2: 'What is free and what is Lifetime',
        blocks: [
          {
            t: 'table',
            head: ['Feature', 'Free', 'Lifetime'],
            rows: [
              ['Dose logging, reminders and next dose', 'Yes', 'Yes'],
              ['Injection site rotation and duplicate warning', 'Yes', 'Yes'],
              ['Dose history and weight entries', 'Yes', 'Yes'],
              ['Data export', 'Yes', 'Yes'],
              ['Dose calendar', 'No', 'Yes'],
              ['Daily check-ins and goals', 'No', 'Yes'],
              ['Progress charts', 'No', 'Yes'],
              ['Body measurements', 'No', 'Yes'],
              ['Doctor report as PDF', 'No', 'Yes'],
            ],
          },
        ],
      },
      {
        id: 'never',
        h2: 'What Nerra will never do',
        blocks: [
          {
            t: 'ul',
            items: [
              'Calculate, suggest or adjust a dose. You always enter the dose your prescriber gave you.',
              'Give medical advice or replace your prescriber.',
              'Ask for an account, sell your data or show ads.',
              'Claim any link to a medication manufacturer. Nerra is not affiliated with any.',
            ],
          },
        ],
      },
      {
        id: 'fit',
        h2: 'Is Nerra right for you?',
        blocks: [{ t: 'fit' }],
      },
    ],
    faqs: [
      { q: 'What is Nerra?', a: 'A private GLP-1 companion app for iPhone that tracks doses you enter, injection sites, weight and check-ins, with no account and no cloud.' },
      { q: 'Is Nerra free?', a: 'Core logging is free. Nerra Lifetime is a single one-time purchase with no subscription that unlocks the calendar, check-ins, charts, measurements and the doctor report.' },
      { q: 'Does Nerra need an account or the cloud?', a: 'No. There is no account and no cloud. Your doses, weight and check-ins stay on your iPhone.' },
      { q: 'Does Nerra tell me what dose to take?', a: 'No. You enter the dose your prescriber gave you. Nerra never calculates or suggests a dose.' },
      { q: 'Is Nerra on Android?', a: 'No. Nerra is for iPhone only and is coming soon to the App Store.' },
      { q: 'Who makes Nerra?', a: 'Hicham Zaidi, an independent developer.' },
    ],
    related: ['best-glp-1-tracker-apps', 'shotsy-alternative', 'glp-1-injection-site-rotation', 'glp-1-missed-dose'],
  },
  /* ------------------------------------------------------------------ */
  {
    slug: 'how-to-inject-ozempic',
    metaTitle: 'How to Inject Ozempic: Step-by-Step From the Official Instructions',
    metaDescription:
      'How to inject Ozempic with the pen, step by step, from Novo Nordisk’s FDA-approved Instructions for Use: new needle, flow check, dose, 6-second count, disposal and storage.',
    h1: 'How to inject Ozempic: the pen steps from the official instructions',
    dek: 'Five steps, in the manufacturer’s own order, with the details people most often get wrong: the flow check, the 6-second count, and what to do with the needle.',
    quickAnswer:
      'With the Ozempic pen: wash your hands, check the medicine is clear and colorless, attach a new needle and remove both caps; check the flow with a new pen only; turn the dose selector until the counter shows your dose; wipe the site with an alcohol swab and let it dry; insert the needle, press and hold the dose button until the counter shows 0, then count slowly to 6 before removing the needle; finally unscrew the needle without recapping it and put it in a sharps container [[ozIfu]]. Get training from your healthcare provider before your first injection [[ozIfu]].',
    kicker: 'How to inject',
    keywords: ['how to inject ozempic', 'ozempic pen how to use', 'how to use ozempic pen', 'ozempic injection steps', 'ozempic flow check'],
    sources: ['ozIfu', 'ozLabel'],
    sections: [
      {
        id: 'before',
        h2: 'Before you start',
        blocks: [
          {
            t: 'callout',
            kind: 'safety',
            title: 'Get trained first',
            x: 'The Instructions for Use say not to use the pen without proper training from your healthcare provider, and that you should make sure you know how to inject before you start treatment [[ozIfu]]. This page summarizes the manufacturer’s instructions for the 0.25 mg or 0.5 mg pen. The 1 mg and 2 mg pens have their own instructions that follow the same pattern, so read the leaflet that came with yours. It is not medical advice.',
          },
          {
            t: 'ul',
            items: [
              'You will need your Ozempic pen, a new needle, an alcohol swab, a gauze pad or cotton ball, and a sharps disposal container [[ozIfu]].',
              'A NovoFine Plus 32G 4 mm needle comes with the pen. Other compatible disposable needles up to 8 mm can be used, so ask your healthcare professional about compatibility [[ozIfu]].',
              'Do not share your pen with anyone, even if the needle has been changed [[ozIfu]].',
              'If you are blind or have poor eyesight and cannot read the dose counter, do not use the pen without help from a trained person with good eyesight [[ozIfu]].',
            ],
          },
        ],
      },
      {
        id: 'steps',
        h2: 'The five steps',
        blocks: [
          { t: 'h3', x: 'Step 1. Prepare the pen with a new needle' },
          {
            t: 'ul',
            items: [
              'Wash your hands, check the pen name and colored label, and pull off the pen cap [[ozIfu]].',
              'Look through the pen window. The medicine should be clear and colorless. If it looks cloudy or contains particles, do not use the pen [[ozIfu]].',
              'Tear the paper tab off a new needle, push it straight onto the pen and turn until it is on tight [[ozIfu]].',
              'The needle has two caps and both must come off. If you forget, no medicine will be injected [[ozIfu]]. Keep the outer cap for later and throw the inner cap away.',
              'Always use a new needle for each injection, and never a bent or damaged one [[ozIfu]].',
            ],
          },
          { t: 'h3', x: 'Step 2. Check the flow, for a new pen only' },
          {
            t: 'ul',
            items: [
              'Do this before the first injection with each new pen only. For a pen already in use, go to Step 3 [[ozIfu]].',
              'Turn the dose selector to the flow check symbol, hold the pen with the needle pointing up, and press and hold the dose button until the counter shows 0. A drop should appear at the needle tip [[ozIfu]].',
              'If no drop appears, repeat up to 6 times. If there is still no drop, change the needle and repeat once more. If a drop still does not appear, do not use the pen and contact Novo Nordisk on 1-888-693-6742 [[ozIfu]].',
            ],
          },
          { t: 'h3', x: 'Step 3. Select your dose' },
          {
            t: 'ul',
            items: [
              'Turn the dose selector until the counter stops and shows your dose, 0.25 mg or 0.5 mg for this pen [[ozIfu]].',
              'Use the dose counter and dose pointer to see the dose. Do not count the clicks [[ozIfu]].',
              'If the counter stops before your dose, there is not enough medicine left for a full dose and you should use a new pen [[ozIfu]].',
            ],
          },
          { t: 'h3', x: 'Step 4. Inject' },
          {
            t: 'ul',
            items: [
              'Choose your site, wipe the skin with an alcohol swab and let it dry [[ozIfu]]. The label’s sites are the abdomen, thigh or upper arm, with a different site each week in the same region [[ozLabel]].',
              'Insert the needle as your healthcare provider showed you. Keep the dose counter visible, since covering it with your fingers could stop the injection [[ozIfu]].',
              'Press and hold the dose button until the counter shows 0, and keep pressing with the needle in the skin [[ozIfu]].',
              '**Count slowly to 6** while keeping the button pressed. If you remove the needle earlier, the full dose will not be delivered [[ozIfu]].',
              'Remove the needle from the skin. If blood appears, press lightly with gauze or a cotton ball and do not rub [[ozIfu]]. A drop at the needle tip afterward is normal [[ozIfu]].',
            ],
          },
          { t: 'h3', x: 'Step 5. After the injection' },
          {
            t: 'ul',
            items: [
              'Unscrew the needle carefully. Do not put the caps back on it, to avoid needle sticks, and place it in a sharps container right away [[ozIfu]].',
              'Put the pen cap back on after each use to protect the medicine from light [[ozIfu]].',
              'Never try to put the inner needle cap back on, and always remove the needle from the pen after each injection [[ozIfu]].',
            ],
          },
        ],
      },
      CTA_DOSES_SECTION(),
      {
        id: 'problems',
        h2: 'If something goes wrong',
        blocks: [
          {
            t: 'ul',
            items: [
              '**The counter never reached 0.** You may have a blocked or damaged needle and not received any medicine. Change the needle and start again from Step 1 [[ozIfu]].',
              '**You dropped the pen.** Attach a new needle and check the flow before you inject [[ozIfu]].',
              '**You missed your weekly dose.** See the [missed dose guide](/nerra/glp-1-missed-dose). The label window is 5 days [[ozLabel]].',
            ],
          },
        ],
      },
      {
        id: 'storage',
        h2: 'Storing the pen',
        blocks: [
          {
            t: 'ul',
            items: [
              'New, unused pens go in the refrigerator at 36°F to 46°F (2°C to 8°C) [[ozIfu]].',
              'A pen in use can be kept for 56 days at room temperature (59°F to 86°F) or in the refrigerator, and should be thrown away after 56 days even if medicine is left [[ozIfu]].',
              'Do not freeze it or use it if it has been frozen. Keep it away from heat and light, with the cap on [[ozIfu]].',
              'Never use a syringe to withdraw medicine from the pen [[ozIfu]].',
            ],
          },
        ],
      },
    ],
    faqs: [
      { q: 'How do you inject Ozempic?', a: 'Attach a new needle, check the flow if the pen is new, select your dose on the counter, wipe the site and let it dry, insert the needle, press and hold the dose button until the counter shows 0, count slowly to 6, then remove the needle and dispose of it in a sharps container.' },
      { q: 'How long do you hold the Ozempic pen in?', a: 'Keep the dose button pressed until the counter shows 0 and then count slowly to 6 before removing the needle. If you remove it earlier, the full dose may not be delivered.' },
      { q: 'Do I need to prime a new Ozempic pen?', a: 'The instructions call it a flow check. Do it before the first injection with each new pen only. You should see a drop at the needle tip.' },
      { q: 'How long can an Ozempic pen be used once started?', a: 'Up to 56 days at room temperature (59°F to 86°F) or in the refrigerator, then throw it away even if medicine remains.' },
      { q: 'Can I reuse the needle?', a: 'No. Always use a new needle for each injection, and never share needles.' },
    ],
    related: ['ozempic-injection-sites', 'semaglutide-dose-chart', 'glp-1-missed-dose', 'how-to-inject-wegovy'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'how-to-inject-wegovy',
    metaTitle: 'How to Inject Wegovy: FlexTouch Pen Steps From the Official Instructions',
    metaDescription:
      'How to inject Wegovy with the 2.4 mg FlexTouch pen from Novo Nordisk’s Instructions for Use: injection sites, 6-second count, flow check, disposal and how long a pen lasts.',
    h1: 'How to inject Wegovy: FlexTouch pen steps from the official instructions',
    dek: 'The steps for the 2.4 mg FlexTouch pen, the places to inject, and how to store and dispose of it, in the manufacturer’s own words.',
    quickAnswer:
      'With the Wegovy FlexTouch pen (2.4 mg): attach a new needle and remove both caps, check the flow with each new pen before its first dose, choose a site on the upper arms, stomach or upper legs (keeping 2 inches or 5 cm from the belly button), wipe the skin and let it dry, press and hold the dose button until the counter shows 0, count slowly to 6, then remove the needle and put it in a sharps container [[wegIfu]]. You can inject in the same body area each week but not the same spot [[wegIfu]].',
    kicker: 'How to inject',
    keywords: ['how to inject wegovy', 'wegovy pen how to use', 'wegovy flextouch instructions', 'wegovy injection sites', 'wegovy injection steps'],
    sources: ['wegIfu', 'wegLabel'],
    sections: [
      {
        id: 'before',
        h2: 'Before you start',
        blocks: [
          {
            t: 'callout',
            kind: 'safety',
            title: 'Get trained first, and check your pen type',
            x: 'The Instructions for Use say not to use the pen without proper training from your healthcare provider [[wegIfu]]. This page follows the instructions for the single-patient-use 2.4 mg FlexTouch pen, which holds four fixed doses of 2.4 mg, one taken weekly [[wegIfu]]. Wegovy also comes as single-dose pens and syringes with their own instructions [[wegLabel]]. If yours is a different presentation, read the leaflet that came with it. It is not medical advice.',
          },
          {
            t: 'ul',
            items: [
              'You need the pen, a new needle (a NovoFine Plus 32G 4 mm needle comes with the pen), an alcohol swab, cotton or gauze, and an FDA-cleared sharps container [[wegIfu]].',
              'Do not share the pen with anyone, even with a new needle [[wegIfu]].',
              'If you cannot read the dose counter because of poor eyesight, do not use the pen without help from a trained person [[wegIfu]].',
            ],
          },
        ],
      },
      {
        id: 'sites',
        h2: 'Where to inject',
        blocks: [
          {
            t: 'ul',
            items: [
              'Choose a site on your **upper arms, stomach or upper legs** [[wegIfu]].',
              'Keep a distance of **2 inches (5 cm) from your belly button** [[wegIfu]].',
              'You may inject in the same body area each week, but not in the same spot as the last injection [[wegIfu]].',
              'The prescribing information says to rotate injection sites with each dose [[wegLabel]]. See the [site rotation planner](/nerra/glp-1-injection-site-rotation).',
            ],
          },
        ],
      },
      {
        id: 'steps',
        h2: 'The five steps',
        blocks: [
          { t: 'h3', x: 'Step 1. Prepare the pen with a new needle' },
          {
            t: 'ul',
            items: [
              'Wash your hands, check the pen contains Wegovy, and pull off the pen cap [[wegIfu]].',
              'Check through the pen window that the medicine is clear and colorless. If it looks cloudy, do not use the pen [[wegIfu]].',
              'Attach a new needle straight onto the pen and turn until tight. Remove both the outer and inner needle caps, since forgetting one means no medicine is injected [[wegIfu]].',
              'Always use a new needle for each injection, never a bent or damaged one [[wegIfu]].',
            ],
          },
          { t: 'h3', x: 'Step 2. Check the flow with each new pen' },
          { t: 'p', x: 'Before the first dose from a new pen, check the medicine flow. For the second, third and fourth doses from the same pen, go straight to Step 3 [[wegIfu]].' },
          { t: 'h3', x: 'Step 3. Set your dose' },
          { t: 'p', x: 'This pen only has the 2.4 mg dose. If the dose counter stops before it reaches your prescribed dose, there is not enough medicine left for a full dose, so throw the pen away and use a new one [[wegIfu]].' },
          { t: 'h3', x: 'Step 4. Inject' },
          {
            t: 'ul',
            items: [
              'Wipe the skin with an alcohol swab and let it dry. Insert the needle as your healthcare provider showed you, keeping the dose counter visible [[wegIfu]].',
              'Press and hold the dose button until the counter shows 0, keep pressing with the needle in your skin, and **count slowly to 6**. Removing the needle earlier means the full dose will not be delivered [[wegIfu]].',
              'Remove the needle. If blood appears, press lightly with cotton or gauze and do not rub. A drop at the needle tip is normal [[wegIfu]].',
              'If 0 never appears in the counter, you may have a blocked or damaged needle and have received no medicine. Change the needle and repeat from Step 1 [[wegIfu]].',
            ],
          },
          { t: 'h3', x: 'Step 5. After your injection' },
          {
            t: 'ul',
            items: [
              'Unscrew the needle without putting the caps back on, and place it in a sharps container right away [[wegIfu]].',
              'Put the pen cap back on to protect the medicine from light [[wegIfu]].',
              'After all four doses there may still be medicine in the pen. It should be thrown away [[wegIfu]].',
            ],
          },
        ],
      },
      CTA_DOSES_SECTION(),
      {
        id: 'storage',
        h2: 'Storing the pen',
        blocks: [
          {
            t: 'ul',
            items: [
              'Store in the refrigerator at 36°F to 46°F (2°C to 8°C) [[wegIfu]].',
              'After first use, store at 68°F to 77°F or in the refrigerator for up to 56 days [[wegIfu]].',
              'Throw it away if it has been frozen, exposed to light or temperatures above 86°F (30°C), or out of the refrigerator for 56 days or longer [[wegIfu]].',
              'Store the pen without a needle attached, and keep the cap on when not in use [[wegIfu]].',
            ],
          },
          { t: 'p', x: 'Missed an injection? The rule is about the next scheduled dose, see the [missed dose checker](/nerra/glp-1-missed-dose) and the [Wegovy dosing schedule](/nerra/wegovy-dosing-schedule).' },
        ],
      },
    ],
    faqs: [
      { q: 'Where do you inject Wegovy?', a: 'On the upper arms, stomach or upper legs, keeping 2 inches (5 cm) from the belly button. You can use the same body area each week but not the same spot.' },
      { q: 'How long do you hold the Wegovy pen in?', a: 'Press and hold the dose button until the counter shows 0, then count slowly to 6 before removing the needle.' },
      { q: 'Do I check the flow every time?', a: 'No. Check the flow with each new pen before its first dose. For the second to fourth doses from the same pen, skip it.' },
      { q: 'How long does a Wegovy pen last once started?', a: 'Up to 56 days stored at 68°F to 77°F or in the refrigerator. The 2.4 mg FlexTouch pen holds four weekly doses.' },
      { q: 'Is this the same for the Wegovy tablet?', a: 'No. The tablet is taken orally once daily on an empty stomach with water, so see the Wegovy dosing schedule page.' },
    ],
    related: ['wegovy-dosing-schedule', 'glp-1-injection-site-rotation', 'glp-1-missed-dose', 'how-to-inject-ozempic'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'best-glp-1-tracker-apps',
    metaTitle: 'Best GLP-1 Tracker Apps for iPhone (2026): Compared by Use',
    metaDescription:
      'Six GLP-1 tracker apps compared from their App Store listings: Shotsy, MeAgain, GlucoPal, Glippy, GLP-1 Logbook and Nerra. Price model, ratings, privacy labels and what each is best for.',
    h1: 'Best GLP-1 tracker apps for iPhone in 2026: which one for which person',
    dek: 'Six apps compared on price model, ratings, platforms, privacy labels and whether they show estimated medication levels. Facts come from the US App Store listings, dated and linked.',
    quickAnswer:
      'The best GLP-1 tracker depends on what you want. Shotsy has the longest list of languages and 4.8 stars from 33K ratings, with subscriptions listed from $9.99 a month [[asShotsy]]. MeAgain has 4.8 stars from 36K ratings and in-app purchases from $14.99 [[asMeAgain]]. Glippy is listed as free [[asGlippy]]. GlucoPal offers estimated medication-level forecasts in its Pro tier [[asGlucoPal]]. GLP-1 Logbook is free with a $3.99 option to remove ads [[asLogbook]]. Nerra, which we make, is a private tracker with a one-time purchase, but it is not on the App Store yet. Data is from US listings retrieved 6 October 2026.',
    kicker: 'Comparison',
    keywords: ['best glp-1 tracker app', 'glp-1 tracker app', 'glp1 tracker', 'ozempic tracker app', 'best ozempic app', 'mounjaro tracker app', 'zepbound tracker app'],
    sources: ['asShotsy', 'asMeAgain', 'asGlucoPal', 'asGlippy', 'asLogbook'],
    sections: [
      {
        id: 'disclosure',
        h2: 'Read this first: we make one of these apps',
        blocks: [
          {
            t: 'callout',
            kind: 'disclosure',
            title: 'Disclosure',
            x: 'We build Nerra, so we are not a neutral party. Every fact about the other five apps comes from that app’s own US App Store listing, retrieved 6 October 2026, and links to it. We have not tested these apps ourselves and we do not score them. The labels below say what each is best for, not which is better. Prices, ratings and privacy labels change, so check the listing before you install or pay. Nerra is not on the App Store yet, so you cannot install it today.',
          },
        ],
      },
      {
        id: 'table',
        h2: 'The apps side by side',
        blocks: [
          {
            t: 'table',
            head: ['App', 'Rating (US App Store)', 'Price model', 'Languages and devices', 'Shows estimated medication levels?'],
            rows: [
              ['Shotsy', '4.8, 33K ratings [[asShotsy]]', 'Free with in-app purchases. Listed subscriptions: monthly $9.99 to $19.99, yearly $39.99 to $59.99 [[asShotsy]]', 'English plus 16 languages. iPhone, Mac, Apple Vision [[asShotsy]]', 'Yes, charts it describes as based on peer-reviewed clinical data [[asShotsy]]'],
              ['MeAgain', '4.8, 36K ratings [[asMeAgain]]', 'Free with in-app purchases from $14.99 up to $119.99 [[asMeAgain]]', 'English. iPhone, iOS 16.4 or later [[asMeAgain]]', 'Yes, “medication-level context between doses” [[asMeAgain]]'],
              ['GlucoPal', '4.8, 3.2K ratings [[asGlucoPal]]', 'Free with in-app purchases: Pro weekly $12.99, yearly $29.99 and $49.99 [[asGlucoPal]]', 'Six languages. iPhone, Mac, Apple Vision [[asGlucoPal]]', 'Yes, in the Pro tier [[asGlucoPal]]'],
              ['Glippy', '4.8, 435 ratings [[asGlippy]]', 'Listed as free [[asGlippy]]', 'English. iPhone, iOS 16.4 or later [[asGlippy]]', 'No claim shown [[asGlippy]]'],
              ['GLP-1 Logbook', 'Not shown [[asLogbook]]', 'Free, with a $3.99 in-app purchase to remove ads [[asLogbook]]', 'English. iPhone, iPad, Mac, Apple Vision [[asLogbook]]', 'Yes, an estimated level curve, described as illustrative [[asLogbook]]'],
              ['Nerra (ours)', 'No ratings yet. Not on the App Store', 'Free core logging. Nerra Lifetime is a single one-time purchase, no subscription', 'English and German. iPhone only', 'No. You enter the dose your prescriber gave you and Nerra never calculates or suggests one'],
            ],
            caption: 'US App Store listings retrieved 6 October 2026. Nerra row is from the Nerra product page.',
          },
        ],
      },
      {
        id: 'privacy',
        h2: 'What the privacy labels say',
        blocks: [
          {
            t: 'p',
            x: 'App Store privacy labels are self-declared by each developer, so treat them as the developer’s statement. As listed on 6 October 2026: MeAgain declares data used to track you (identifiers and usage data) and a long list linked to you, including health and fitness, purchases and contact info [[asMeAgain]]. GLP-1 Logbook declares location, identifiers and usage data used to track you [[asLogbook]]. Shotsy lists health and fitness data, user content, usage data and diagnostics as not linked to you [[asShotsy]], and GlucoPal lists none linked to you, with health and fitness, usage and diagnostics data not linked [[asGlucoPal]]. Glippy’s listing declares data not linked to you across contact info, user content, usage data and diagnostics [[asGlippy]]. Open the listing’s App Privacy section yourself before you enter health data.',
          },
          {
            t: 'p',
            x: 'Nerra keeps your doses, weight and check-ins on your iPhone only. There is no account, no cloud, no ads and no trackers.',
          },
        ],
      },
      {
        id: 'best-for',
        h2: 'Best for, in one line each',
        blocks: [
          {
            t: 'ul',
            items: [
              '**Shotsy:** you want the widest language support, Mac and Vision Pro versions, and charts of estimated medication levels, and you are fine with a subscription [[asShotsy]].',
              '**MeAgain:** you want a large user base (36K ratings) and medication-level context, and you are comfortable with its declared data use [[asMeAgain]].',
              '**GlucoPal:** you want a tracker with a Pro tier that forecasts estimated medication levels [[asGlucoPal]].',
              '**Glippy:** you want a free, simple shot tracker and are fine with a newer app (435 ratings) [[asGlippy]].',
              '**GLP-1 Logbook:** you want a free body-map style tracker and accept ads unless you pay $3.99 to remove them [[asLogbook]].',
              '**Nerra:** you want data kept only on your iPhone, no account and no subscription, with no dose suggestions or level estimates. Wait for the App Store release.',
            ],
          },
        ],
      },
      {
        id: 'how',
        h2: 'How to choose',
        blocks: [
          {
            t: 'ol',
            items: [
              'Decide whether you want estimated medication levels. Several apps show them, and they are estimates, not measurements. Logbook says so itself [[asLogbook]].',
              'Check the price model. Subscriptions run monthly or yearly in some apps, while others are free or a one-time purchase.',
              'Read the App Privacy section for the app you pick. It lists what is collected and whether it is used to track you.',
              'Make sure it runs on your device and in your language.',
              'Never let an app choose your dose. Your prescriber sets it.',
            ],
          },
        ],
      },
      CTA_SITES_SECTION(),
      {
        id: 'fit',
        h2: 'Is Nerra right for you?',
        blocks: [{ t: 'fit' }],
      },
    ],
    faqs: [
      { q: 'What is the best GLP-1 tracker app?', a: 'It depends. Shotsy and MeAgain have the most ratings (33K and 36K at 4.8 stars). Glippy and GLP-1 Logbook are free. Nerra is a private, one-time-purchase option that is coming soon to the App Store.' },
      { q: 'Are GLP-1 tracker apps free?', a: 'Several are free to download with in-app purchases or subscriptions. Glippy is listed as free and GLP-1 Logbook is free with a $3.99 option to remove ads. Check each listing for current prices.' },
      { q: 'Do GLP-1 tracker apps work for Ozempic, Mounjaro, Wegovy and Zepbound?', a: 'The apps compared here describe support for these medicines. Shotsy lists Ozempic, Wegovy, Mounjaro, Zepbound and others. Check the listing for your medicine.' },
      { q: 'Is there a GLP-1 tracker with no account?', a: 'Nerra has no account and no cloud, and keeps data on your iPhone. It is not on the App Store yet.' },
      { q: 'Should an app tell me my dose?', a: 'No. Your prescriber sets your dose. Nerra never calculates or suggests one.' },
    ],
    related: ['shotsy-alternative', 'nerra-app', 'glp-1-injection-site-rotation', 'glp-1-missed-dose'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'shotsy-alternative',
    metaTitle: 'Shotsy Alternatives (2026): GLP-1 Trackers Compared',
    metaDescription:
      'Looking for a Shotsy alternative? What Shotsy costs and does, and five other GLP-1 trackers (MeAgain, GlucoPal, Glippy, GLP-1 Logbook, Nerra) compared from their App Store listings.',
    h1: 'Shotsy alternatives: GLP-1 trackers compared',
    dek: 'What Shotsy offers and what it costs, the reasons people look elsewhere, and five alternatives with price, privacy and platform facts from their listings.',
    quickAnswer:
      'Shotsy is a free-to-download GLP-1 tracker with 4.8 stars from 33K ratings, in-app subscriptions listed from $9.99 a month, and charts of estimated medication levels [[asShotsy]]. Alternatives with different trade-offs are MeAgain (more expensive tiers, 36K ratings) [[asMeAgain]], GlucoPal (Pro forecasts, 3.2K ratings) [[asGlucoPal]], Glippy (listed as free) [[asGlippy]], GLP-1 Logbook (free with ads, $3.99 to remove) [[asLogbook]], and Nerra (a one-time purchase, no account, coming soon to the App Store). Data is from US listings retrieved 6 October 2026.',
    kicker: 'Alternatives',
    keywords: ['shotsy alternative', 'shotsy app', 'shotsy alternatives', 'apps like shotsy', 'shotsy vs', 'shotsy cost'],
    sources: ['asShotsy', 'asMeAgain', 'asGlucoPal', 'asGlippy', 'asLogbook'],
    sections: [
      {
        id: 'disclosure',
        h2: 'Disclosure',
        blocks: [
          {
            t: 'callout',
            kind: 'disclosure',
            title: 'We make Nerra',
            x: 'We build Nerra, one of the alternatives, so we are not neutral. Facts about the other apps come from their US App Store listings, retrieved 6 October 2026, and link to them. We have not tested them. Check the live listing before you pay.',
          },
        ],
      },
      {
        id: 'shotsy',
        h2: 'What Shotsy is, from its listing',
        blocks: [
          {
            t: 'ul',
            items: [
              'A GLP-1 tracker for injections and pills, from Shotsy Co., rated 4.8 from 33K ratings [[asShotsy]].',
              'Free with in-app purchases. Listed subscriptions are monthly at $9.99, $14.99 and $19.99, and yearly at $39.99 and $59.99 [[asShotsy]].',
              'English plus 16 languages, on iPhone (iOS 18.0 or later), Mac and Apple Vision [[asShotsy]].',
              'Tracks medication history, side effects, weight, calories, protein and water, and shows medication level charts it describes as based on peer-reviewed clinical data [[asShotsy]].',
              'Its privacy label lists health and fitness data, user content, usage data and diagnostics as not linked to you [[asShotsy]].',
            ],
          },
          { t: 'p', x: 'Shotsy has a lot going for it: a big user base, many languages and a deep feature set. The reasons to look at alternatives are usually fit, not quality.' },
        ],
      },
      {
        id: 'reasons',
        h2: 'Reasons people look at alternatives',
        blocks: [
          {
            t: 'ul',
            items: [
              '**Price model.** Shotsy’s listed purchases are subscriptions. Some alternatives are free, ad-supported or a one-time purchase.',
              '**Estimated medication levels.** Shotsy shows level charts. If you would rather not see estimates, look for an app that does not provide them.',
              '**Data location.** If you want health entries kept on your phone only, check each app’s privacy label and policy.',
              '**Platform or language.** Check your device and language are supported.',
            ],
          },
        ],
      },
      {
        id: 'table',
        h2: 'Five alternatives side by side',
        blocks: [
          {
            t: 'table',
            head: ['App', 'Rating (US)', 'Price model', 'Estimated medication levels?', 'Privacy label note'],
            rows: [
              ['MeAgain', '4.8, 36K [[asMeAgain]]', 'Free with in-app purchases, $14.99 to $119.99 [[asMeAgain]]', 'Yes [[asMeAgain]]', 'Declares identifiers and usage data used to track you [[asMeAgain]]'],
              ['GlucoPal', '4.8, 3.2K [[asGlucoPal]]', 'Free with in-app purchases, Pro weekly $12.99, yearly $29.99 and $49.99 [[asGlucoPal]]', 'Yes, in Pro [[asGlucoPal]]', 'Lists none linked to you [[asGlucoPal]]'],
              ['Glippy', '4.8, 435 [[asGlippy]]', 'Listed as free [[asGlippy]]', 'No claim shown [[asGlippy]]', 'Data not linked to you [[asGlippy]]'],
              ['GLP-1 Logbook', 'Not shown [[asLogbook]]', 'Free, $3.99 to remove ads [[asLogbook]]', 'Yes, illustrative [[asLogbook]]', 'Declares location, identifiers and usage used to track you [[asLogbook]]'],
              ['Nerra (ours)', 'Not on the App Store yet', 'Free core logging, one-time Lifetime purchase, no subscription', 'No. Never suggests a dose', 'No account, no cloud, no ads or trackers. Data stays on the iPhone'],
            ],
            caption: 'US App Store listings retrieved 6 October 2026. Privacy labels are self-declared by developers.',
          },
        ],
      },
      CTA_SITES_SECTION(),
      {
        id: 'fit',
        h2: 'Is Nerra right for you?',
        blocks: [{ t: 'fit' }],
      },
    ],
    faqs: [
      { q: 'How much does Shotsy cost?', a: 'It is free to download with in-app purchases. The listing shows monthly subscriptions at $9.99, $14.99 and $19.99 and yearly at $39.99 and $59.99, as of 6 October 2026.' },
      { q: 'What is the best free alternative to Shotsy?', a: 'Glippy is listed as free, and GLP-1 Logbook is free with a $3.99 option to remove ads. Check the listings for current terms.' },
      { q: 'Is there a Shotsy alternative without a subscription?', a: 'Nerra uses a one-time Lifetime purchase with no subscription, and is coming soon to the App Store.' },
      { q: 'Is there a Shotsy alternative with no medication level estimates?', a: 'Glippy shows no such claim in its listing, and Nerra never estimates levels or suggests a dose.' },
      { q: 'Can Nerra import my Shotsy data?', a: 'We have not built an import. Nerra supports data export from its own app.' },
    ],
    related: ['best-glp-1-tracker-apps', 'nerra-app', 'glp-1-injection-site-rotation', 'glp-1-missed-dose'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'glp-1-side-effects',
    metaTitle: 'GLP-1 Side Effects: What the Ozempic, Wegovy, Mounjaro and Zepbound Labels Report',
    metaDescription:
      'Nausea, vomiting, diarrhea, constipation and fatigue rates from the Ozempic, Wegovy, Mounjaro and Zepbound labels, side by side with placebo, and how to track your own pattern.',
    h1: 'GLP-1 side effects: what the four labels report, with placebo numbers',
    dek: 'The most common side effects of Ozempic, Wegovy, Mounjaro and Zepbound, with the exact percentages from each label’s clinical trials and the placebo rate next to them.',
    quickAnswer:
      'The most common GLP-1 side effects are gastrointestinal: nausea, diarrhea, vomiting, constipation and abdominal pain. In the Wegovy 2.4 mg weight trials, 44% reported nausea versus 16% on placebo [[wegLabel]]. In Zepbound’s trials it was 25% to 29% versus 8% [[zepLabel]], in Mounjaro’s diabetes trials 12% to 18% versus 4% [[mounLabel]], and in Ozempic’s 15.8% to 20.3% versus 6.1% [[ozLabel]]. The trials differ in people, doses and length, so the numbers should not be compared across medicines. The labels step doses up gradually to reduce stomach side effects [[zepLabel]][[ozLabel]].',
    kicker: 'Side effects',
    keywords: ['glp-1 side effects', 'ozempic side effects', 'wegovy side effects', 'mounjaro side effects', 'zepbound side effects', 'ozempic nausea', 'glp-1 fatigue', 'glp-1 constipation'],
    sources: ['wegLabel', 'zepLabel', 'mounLabel', 'ozLabel'],
    sections: [
      {
        id: 'warning',
        h2: 'Before you read the numbers',
        blocks: [
          {
            t: 'callout',
            kind: 'safety',
            title: 'This is not a list of everything that can happen',
            x: 'The tables below only cover the most common reactions reported in clinical trials. Each label has a separate Warnings and Precautions section on serious risks, including a boxed warning. Read the one for your medicine, and call your prescriber about symptoms that are severe or do not go away. This page is not medical advice. Nerra never calculates or suggests a dose.',
          },
        ],
      },
      {
        id: 'table',
        h2: 'Most common side effects in the trials',
        blocks: [
          {
            t: 'table',
            head: ['Medicine and trial group', 'Nausea', 'Vomiting', 'Diarrhea', 'Constipation', 'Abdominal pain'],
            rows: [
              ['Wegovy 2.4 mg weekly (weight reduction, adults). Placebo: 16, 6, 16, 11, 10', '44% [[wegLabel]]', '24% [[wegLabel]]', '30% [[wegLabel]]', '24% [[wegLabel]]', '20% [[wegLabel]]'],
              ['Zepbound 5, 10, 15 mg (weight reduction). Placebo: 8, 2, 8, 5, 5', '25%, 29%, 28% [[zepLabel]]', '8%, 11%, 13% [[zepLabel]]', '19%, 21%, 23% [[zepLabel]]', '17%, 14%, 11% [[zepLabel]]', '9%, 9%, 10% [[zepLabel]]'],
              ['Mounjaro 5, 10, 15 mg (type 2 diabetes). Placebo: 4, 2, 9, 1, 4', '12%, 15%, 18% [[mounLabel]]', '5%, 5%, 9% [[mounLabel]]', '12%, 13%, 17% [[mounLabel]]', '6%, 6%, 7% [[mounLabel]]', '6%, 5%, 5% [[mounLabel]]'],
              ['Ozempic 0.5 mg, 1 mg (type 2 diabetes). Placebo: 6.1, 2.3, 1.9, 1.5, 4.6', '15.8%, 20.3% [[ozLabel]]', '5%, 9.2% [[ozLabel]]', '8.5%, 8.8% [[ozLabel]]', '5%, 3.1% [[ozLabel]]', '7.3%, 5.7% [[ozLabel]]'],
            ],
            caption: 'Percent of participants reporting each reaction. Wegovy and Zepbound label tables are for adults with obesity or overweight, Mounjaro and Ozempic for adults with type 2 diabetes. Each placebo group is listed in the first column in the same order as the columns. US labels: Zepbound and Mounjaro 08/2026, Ozempic 05/2026, Wegovy 06/2026.',
          },
          {
            t: 'p',
            x: 'Read this table down a single row, not across rows. The four trial programs enrolled different people (weight management versus type 2 diabetes), used different doses and ran for different lengths, so a higher number in one row is not evidence that one medicine causes more side effects than another.',
          },
        ],
      },
      {
        id: 'more',
        h2: 'Other common reactions the labels list',
        blocks: [
          {
            t: 'ul',
            items: [
              '**Fatigue.** Wegovy 2.4 mg: 11% versus 5% on placebo [[wegLabel]]. Zepbound: 5%, 6% and 7% at 5, 10 and 15 mg versus 3% [[zepLabel]]. The Ozempic label lists fatigue, dysgeusia and dizziness among reactions seen in more than 0.4% of patients [[ozLabel]].',
              '**Decreased appetite (Mounjaro).** 5%, 10% and 11% at 5, 10 and 15 mg versus 1% on placebo [[mounLabel]].',
              '**Headache (Wegovy).** 14% versus 10% on placebo [[wegLabel]].',
              '**Injection site reactions.** Zepbound: 6%, 8% and 8% versus 2% [[zepLabel]]. Ozempic: 0.2% of treated patients [[ozLabel]].',
              '**Hair loss.** See the [hair loss page](/nerra/glp-1-hair-loss).',
            ],
          },
          {
            t: 'p',
            x: 'The Wegovy label reports that 6.8% of people on 2.4 mg and 3.2% on placebo permanently stopped treatment because of side effects, most often nausea (1.8% versus 0.2%), vomiting (1.2% versus 0%) and diarrhea (0.7% versus 0.1%) [[wegLabel]].',
          },
        ],
      },
      {
        id: 'why',
        h2: 'Why doses step up slowly',
        blocks: [
          {
            t: 'p',
            x: 'The Zepbound and Ozempic labels say their step-up schedules are meant to reduce the risk of gastrointestinal side effects [[zepLabel]][[ozLabel]]. The Wegovy label says that if a dose is not tolerated during escalation, delaying the next step for 4 weeks should be considered [[wegLabel]]. Only your prescriber should change that schedule. See the [tirzepatide](/nerra/tirzepatide-dose-chart), [semaglutide](/nerra/semaglutide-dose-chart) and [Wegovy](/nerra/wegovy-dosing-schedule) dose charts for the label schedules.',
          },
        ],
      },
      {
        id: 'track',
        h2: 'Track your own pattern',
        blocks: [
          {
            t: 'p',
            x: 'Trial percentages tell you what is common, not what will happen to you. A simple log of the day, the dose you took and how you felt makes a dose-change conversation with your prescriber much more specific.',
          },
          {
            t: 'cta',
            title: 'Daily check-ins in Nerra',
            x: 'Log nausea, appetite and energy each day, and spot patterns after a dose change. It lives on your iPhone, with no account. You enter the dose your prescriber gave you.',
          },
        ],
      },
    ],
    faqs: [
      { q: 'What are the most common side effects of GLP-1 medicines?', a: 'Gastrointestinal ones: nausea, diarrhea, vomiting, constipation and abdominal pain, according to the Ozempic, Wegovy, Mounjaro and Zepbound labels.' },
      { q: 'How common is nausea on Wegovy?', a: '44% of adults on the 2.4 mg dose reported nausea in the label’s trials, versus 16% on placebo.' },
      { q: 'How common is nausea on Zepbound or Mounjaro?', a: 'Zepbound: 25% to 29% across doses versus 8% on placebo. Mounjaro (type 2 diabetes): 12% to 18% versus 4%.' },
      { q: 'Does fatigue come with GLP-1 medicines?', a: 'It is listed. Wegovy 2.4 mg: 11% versus 5% on placebo. Zepbound: 5% to 7% versus 3%.' },
      { q: 'Can I compare side effect rates between Ozempic and Wegovy?', a: 'Not directly. The trials enrolled different people for different conditions, used different doses and lasted different lengths.' },
      { q: 'Do the side effects go away?', a: 'The labels do not give a general time frame. The step-up schedules are designed to lower the risk of stomach side effects, so talk to your prescriber if they persist.' },
    ],
    related: ['glp-1-hair-loss', 'tirzepatide-dose-chart', 'semaglutide-dose-chart', 'glp-1-missed-dose'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'glp-1-hair-loss',
    metaTitle: 'GLP-1 Hair Loss: What the Zepbound and Wegovy Labels Say',
    metaDescription:
      'Hair loss on GLP-1 medicines, from the labels: Zepbound 4 to 5% vs 1% placebo (7.1% in women), Wegovy 3% vs 1%, and what the labels say about weight reduction and stopping.',
    h1: 'GLP-1 hair loss: what the Zepbound and Wegovy labels say',
    dek: 'Hair loss is listed on the labels. Here are the exact trial numbers, who reported it most, and what the labels say about its link to weight loss.',
    quickAnswer:
      'Hair loss is a listed reaction. In Zepbound’s trials, 4% to 5% of people on tirzepatide reported it versus 1% on placebo, and the label says it was associated with weight reduction and reported more often in women (7.1%) than men (0.5%) [[zepLabel]]. In Wegovy’s 2.4 mg trials it was 3% versus 1% on placebo [[wegLabel]]. The Ozempic and Mounjaro labels list alopecia among reactions reported after approval, where a frequency cannot be reliably estimated [[ozLabel]][[mounLabel]]. No Zepbound-treated patient stopped treatment because of hair loss [[zepLabel]].',
    kicker: 'Side effects',
    keywords: ['glp-1 hair loss', 'ozempic hair loss', 'wegovy hair loss', 'zepbound hair loss', 'mounjaro hair loss', 'does ozempic cause hair loss'],
    sources: ['zepLabel', 'wegLabel', 'ozLabel', 'mounLabel'],
    sections: [
      {
        id: 'numbers',
        h2: 'The numbers from each label',
        blocks: [
          { t: 'callout', kind: 'note', title: 'Read this first', x: 'This page repeats what the manufacturers’ labels say and is not medical advice. If hair loss worries you, talk to your prescriber or a doctor.' },
          {
            t: 'table',
            head: ['Medicine', 'What the label reports'],
            rows: [
              ['Zepbound (weight reduction)', 'Hair loss in 5% (5 mg), 4% (10 mg) and 5% (15 mg) of patients versus 1% on placebo [[zepLabel]]'],
              ['Wegovy 2.4 mg (weight reduction)', 'Hair loss in 3% of patients versus 1% on placebo [[wegLabel]]'],
              ['Ozempic', 'Alopecia listed among reactions reported after approval, reported voluntarily from a population of uncertain size, so frequency cannot be reliably estimated [[ozLabel]]'],
              ['Mounjaro', 'Alopecia listed in the reactions reported after approval [[mounLabel]]'],
            ],
            caption: 'US prescribing information: Zepbound and Mounjaro (08/2026), Ozempic (05/2026), Wegovy (06/2026). Retrieved 6 October 2026.',
          },
        ],
      },
      {
        id: 'who',
        h2: 'Who reported it most, and the weight link',
        blocks: [
          {
            t: 'ul',
            items: [
              'The Zepbound label says hair loss reactions were **associated with weight reduction** [[zepLabel]].',
              'In a pool of two Zepbound studies, hair loss was reported more often by women than men: 7.1% versus 0.5% on Zepbound, and 1.3% versus 0% on placebo [[zepLabel]].',
              'No Zepbound-treated patients, and one placebo patient, stopped treatment because of hair loss [[zepLabel]].',
            ],
          },
          {
            t: 'p',
            x: 'The labels do not say how long hair loss lasts or whether it reverses, and we did not find that in them, so we do not make a claim either way. Ask your prescriber.',
          },
        ],
      },
      {
        id: 'track',
        h2: 'Keep notes for your appointment',
        blocks: [
          { t: 'p', x: 'If you notice changes, jot down when they started and what your dose and weight were around then. That is far more useful in an appointment than a memory. A weight log and doctor report help with that.' },
          CTA_DOSES,
        ],
      },
    ],
    faqs: [
      { q: 'Does Ozempic cause hair loss?', a: 'The Ozempic label lists alopecia among reactions reported after approval, with the note that frequency cannot be reliably estimated because reports are voluntary.' },
      { q: 'Does Wegovy cause hair loss?', a: 'It is a listed reaction: 3% of adults on 2.4 mg reported hair loss versus 1% on placebo in the label’s weight reduction trials.' },
      { q: 'Does Zepbound cause hair loss?', a: 'It is listed: 4% to 5% on tirzepatide versus 1% on placebo, and the label says it was associated with weight reduction, reported more often by women (7.1%) than men (0.5%).' },
      { q: 'Do people stop treatment because of hair loss?', a: 'In Zepbound’s trials no treated patients stopped treatment because of it.' },
      { q: 'Is the hair loss permanent?', a: 'The labels we read do not say. Ask your prescriber.' },
    ],
    related: ['glp-1-side-effects', 'tirzepatide-dose-chart', 'semaglutide-dose-chart', 'nerra-app'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'wegovy-pill',
    metaTitle: 'Wegovy Pill (Oral Wegovy): How to Take It, Doses and the Label Rules',
    metaDescription:
      'The Wegovy tablet from the US label: 1.5 mg to 25 mg daily doses, take on an empty stomach with water, wait 30 minutes, missed dose rule, switching from the injection.',
    h1: 'Wegovy pill: how to take it, the dose steps and the label rules',
    dek: 'What the prescribing information says about Wegovy tablets: who they are for, how to take them, the four dose steps, the missed dose rule and how switching works.',
    quickAnswer:
      'Wegovy tablets are semaglutide taken once daily by mouth. The label says to take one tablet on an empty stomach in the morning with up to 4 ounces of water, swallow it whole, and wait at least 30 minutes before eating, drinking or taking other oral medicines [[wegLabel]]. The dose steps up from 1.5 mg for 30 days to 4 mg, 9 mg and then 25 mg from day 91 [[wegLabel]]. If a dose is missed, skip it and take the next one the following day [[wegLabel]].',
    kicker: 'Wegovy pill',
    keywords: ['wegovy pill', 'oral wegovy', 'wegovy tablets', 'wegovy pill dose', 'how to take wegovy pill', 'wegovy pill vs injection'],
    sources: ['wegLabel'],
    sections: [
      {
        id: 'what',
        h2: 'What the Wegovy tablet is',
        blocks: [
          { t: 'callout', kind: 'note', title: 'Read this first', x: PRESCRIBER },
          {
            t: 'ul',
            items: [
              'Wegovy (semaglutide) is approved as both an injection and a tablet. The same US prescribing information covers both [[wegLabel]].',
              'The tablets are indicated, with a reduced-calorie diet and increased physical activity, to reduce the risk of major cardiovascular events in adults with established cardiovascular disease and either obesity or overweight, and to reduce excess body weight and maintain weight reduction in adults with obesity or overweight with a weight-related condition [[wegLabel]].',
              'Using Wegovy tablets or injection together with other semaglutide products or any other GLP-1 receptor agonist is not recommended [[wegLabel]].',
              'Price and availability are not in the label. Ask your prescriber or pharmacy.',
            ],
          },
        ],
      },
      {
        id: 'how',
        h2: 'How to take it',
        blocks: [
          {
            t: 'ol',
            items: [
              'Take one tablet by mouth once daily, on an empty stomach, in the morning [[wegLabel]].',
              'Take it with water only, up to 4 ounces. Do not take it with other liquids [[wegLabel]].',
              'Swallow it whole. Do not split, crush, chew or dissolve it [[wegLabel]].',
              'Wait at least 30 minutes before eating, drinking or taking other oral medicines [[wegLabel]].',
              'Never take more than one tablet a day [[wegLabel]].',
            ],
          },
        ],
      },
      {
        id: 'doses',
        h2: 'The dose steps',
        blocks: [
          {
            t: 'table',
            head: ['Days', 'Once-daily tablet'],
            rows: [
              ['1 to 30 (starting dose)', '1.5 mg [[wegLabel]]'],
              ['31 to 60', '4 mg [[wegLabel]]'],
              ['61 to 90', '9 mg [[wegLabel]]'],
              ['91 onward (maintenance)', '25 mg [[wegLabel]]'],
            ],
            caption: 'Wegovy prescribing information, Table 2, revised 06/2026. Retrieved 6 October 2026.',
          },
          {
            t: 'p',
            x: 'If a dose is not tolerated during the step-up, the label says to consider delaying the next step. If the 25 mg maintenance dose is not tolerated, it says to consider switching to the 1.7 mg injection [[wegLabel]]. Those are decisions for your prescriber.',
          },
        ],
      },
      CTA_DOSES_SECTION(),
      {
        id: 'missed',
        h2: 'Missed a tablet?',
        blocks: [
          { t: 'p', x: 'Skip the missed dose and take the next one the following day [[wegLabel]]. This is different from the weekly injection, which has a 2-day rule, see the [missed dose checker](/nerra/glp-1-missed-dose).' },
        ],
      },
      {
        id: 'switch',
        h2: 'Switching between the tablet and the injection',
        blocks: [
          {
            t: 'ul',
            items: [
              'From the 2.4 mg injection to the 25 mg tablet: start the tablet one week after stopping the injection [[wegLabel]].',
              'From the 25 mg tablet to the injection: start 2.4 mg injection the day after stopping the tablet, or consider 1.7 mg if the tablet was not tolerated [[wegLabel]].',
            ],
          },
        ],
      },
      {
        id: 'meds',
        h2: 'Other medicines you take by mouth',
        blocks: [
          {
            t: 'p',
            x: 'The label says Wegovy delays gastric emptying and could affect how other oral medicines are absorbed. In a drug interaction study with the tablet, levothyroxine exposure increased 33%, and the label says to monitor the effects of oral medicines taken with Wegovy, with extra monitoring for medicines with a narrow therapeutic index [[wegLabel]]. Tell your prescriber and pharmacist everything you take.',
          },
        ],
      },
    ],
    faqs: [
      { q: 'How do you take the Wegovy pill?', a: 'One tablet by mouth once daily on an empty stomach in the morning with up to 4 ounces of water, swallowed whole, then wait at least 30 minutes before eating, drinking or taking other oral medicines.' },
      { q: 'What are the Wegovy pill doses?', a: '1.5 mg for 30 days, 4 mg for days 31 to 60, 9 mg for days 61 to 90, then 25 mg from day 91.' },
      { q: 'What if I miss a Wegovy pill?', a: 'Skip the missed dose and take the next one the following day.' },
      { q: 'Can I take the Wegovy pill with coffee?', a: 'The label says water only, up to 4 ounces, and not to take it with any other liquid.' },
      { q: 'Can I switch from the Wegovy injection to the pill?', a: 'The label allows switching from 2.4 mg injection to the 25 mg tablet, starting the tablet one week after the last injection. Your prescriber manages the switch.' },
      { q: 'How much does the Wegovy pill cost?', a: 'It is not in the prescribing information. Ask your prescriber or pharmacy.' },
    ],
    related: ['wegovy-dosing-schedule', 'how-to-inject-wegovy', 'glp-1-missed-dose', 'glp-1-side-effects'],
  },

];

export function getArticle(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}

function CTA_SITES_SECTION(): Section {
  return { id: 'track', h2: 'Keep track without a spreadsheet', blocks: [CTA_SITES] };
}
function CTA_DOSES_SECTION(): Section {
  return { id: 'track', h2: 'Keep a log of your own', blocks: [CTA_DOSES] };
}

// Build-time guard: every [[id]] must be listed in sources, and every listed source must be cited.
function validate() {
  for (const a of ARTICLES) {
    const text = JSON.stringify([a.quickAnswer, a.sections, a.faqs]);
    const used = new Set([...text.matchAll(/\[\[(\w+)\]\]/g)].map((m) => m[1]));
    for (const id of used) if (!a.sources.includes(id)) throw new Error(`Nerra "${a.slug}" cites [[${id}]] but does not list it in sources`);
    for (const id of a.sources) {
      if (!SOURCES[id]) throw new Error(`Nerra "${a.slug}" lists unknown source "${id}"`);
      if (!used.has(id)) throw new Error(`Nerra "${a.slug}" lists source "${id}" but never cites it`);
    }
    for (const r of a.related) if (!ARTICLES.some((x) => x.slug === r)) throw new Error(`Nerra "${a.slug}" relates to unknown slug "${r}"`);
  }
}
validate();
