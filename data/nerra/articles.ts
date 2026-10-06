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
    related: ['glp-1-injection-site-rotation', 'glp-1-missed-dose', 'tirzepatide-dose-chart', 'semaglutide-dose-chart'],
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
