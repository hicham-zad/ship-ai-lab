export const PCOS_BASE = 'https://shipailab.com/pcos';
export const PCOS_FEATURES_UPDATED = '2026-10-07';

export interface Shot {
  file: string; // file name in /public/pcos
  alt: string;
}

export interface Section {
  h2: string;
  paras: string[];
  shots?: Shot[];
  caption?: string;
  flip?: boolean;
  demo?: 'score' | 'cycles' | 'pdf' | 'rules';
  /** an animated horizontal track: label on top, small text below */
  timeline?: { label: string; sub: string }[];
}

export interface Feature {
  slug: string;
  name: string;
  short: string; // one line for cards
  tier: 'Free' | 'Free + Premium' | 'Premium';
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  h1: [string, string]; // [plain, highlighted]
  lede: string;
  hero: Shot[]; // 1 to 3, crossfades when more than one
  tags: string[];
  sections: Section[];
  steps?: { title: string; body: string }[];
  stepsH2?: string;
  facts?: { t: string; d: string }[];
  factsH2?: string;
  not: { t: string; p: string };
  faq: { q: string; a: string }[];
  related: string[];
}

export const SAMPLE_NOTE =
  'The screenshots on this page are from the real app, filled with sample entries made for this page. They are not anyone’s health data.';

export const FEATURES: Feature[] = [
  {
    slug: 'daily-symptom-log',
    name: 'Daily symptom log',
    short: 'Period, pain, symptoms, mood, energy, weight and blood sugar in about 20 seconds.',
    tier: 'Free',
    metaTitle: 'PCOS & Endo Symptom Log: Track Period, Pain and Symptoms Daily',
    metaDescription:
      'One daily check-in for PCOS and endometriosis: flow, clots, pain 0 to 10 and where, 12 symptoms, mood, energy, weight, blood sugar, supplements and notes. Free, stored on your phone.',
    keywords: ['PCOS symptom tracker', 'endometriosis symptom log', 'PCOS daily log app', 'period and pain tracker', 'PCOS journal app'],
    h1: ['One daily check-in, ', 'built for PCOS and endo'],
    lede:
      'Most period apps ask when you bled. PCOS and endometriosis need more: how heavy, how much pain and where, which symptoms, what you took. The daily log covers all of it on one screen and says honestly that it takes about 20 seconds.',
    hero: [
      { file: 'log-period.png', alt: 'PCOS & Endo Tracker daily log showing the period flow, clot size and pain 0 to 10 sections (sample entry)' },
      { file: 'log-symptoms.png', alt: 'Daily log symptom chips, mood faces and energy scale (sample entry)' },
      { file: 'log-optional.png', alt: 'Daily log optional section with weight, blood sugar, supplements and notes (sample entry)' },
    ],
    tags: ['Free, unlimited', 'No account'],
    sections: [
      {
        h2: 'What you can record',
        paras: [
          'The log has six sections, and you only fill in what applies that day. Skip a section and nothing is saved for it.',
          'Period: flow as none, spotting, light, medium or heavy. When you pick a bleeding day, two more questions appear: clot size (none, small, large) and how many pads or tampons you changed. Spotting is recorded, but it does not start a new cycle in the cycle history.',
          'Pain: a 0 to 10 scale with a face that changes as you slide, then where it hurts: pelvis, lower back, legs, stomach, during sex or during a bowel movement.',
          'Symptoms: 12 to choose from, including cramps, pelvic pain, bloating, acne, hair loss, excess hair, fatigue, mood swings, cravings, irregular period, heavy bleeding and headache. You pick which ones appear in your own list under Settings, so the screen is not 12 chips of noise.',
          'Mood on five faces and energy on a 1 to 5 scale.',
        ],
        shots: [
          { file: 'log-period.png', alt: 'Period and pain sections of the daily log (sample entry)' },
          { file: 'log-symptoms.png', alt: 'Symptoms, mood and energy sections of the daily log (sample entry)' },
        ],
        caption: 'Period and pain on top. Symptoms, mood and energy below.',
      },
      {
        h2: 'The optional part: weight, blood sugar, supplements, notes',
        paras: [
          'Weight and blood sugar are plain number fields. Enter them only on days you measure. Units follow your Settings: kg or lb, mg/dL or mmol/L. They are stored in one unit internally, so switching later does not break your history.',
          'Supplements and medication are a checklist you write yourself, for example inositol or vitamin D. The app never suggests what to take.',
          'The notes box is for anything you want to remember or tell your doctor. Notes are included in the doctor report.',
        ],
        shots: [{ file: 'log-optional.png', alt: 'Optional section with weight, blood sugar, supplements checklist and notes (sample entry)' }],
        flip: true,
      },
    ],
    stepsH2: 'How a check-in goes',
    steps: [
      { title: 'Open the log', body: 'Tap the + in the tab bar, or the “Log today” button on Home. It opens as a sheet over whatever you were doing.' },
      { title: 'Fill in what applies', body: 'Flow, pain, symptoms, mood, energy. Leave the rest blank. Logging a day you felt fine is useful too, because patterns need the good days.' },
      { title: 'Save', body: 'You land on a short done screen. It offers a progress card to share and, once you have logged at least two days, “See what to tell your doctor”, which opens the report.' },
    ],
    facts: [
      { t: 'One entry per day', d: 'The log records today. Saving again later the same day replaces that day’s entry, so you can add the evening to a morning check-in.' },
      { t: 'Works offline', d: 'Everything is written to a database on your phone. No connection is needed to log.' },
      { t: 'Reminders you control', d: 'One daily reminder at the time you choose. Skip it entirely during setup if you prefer.' },
      { t: 'Export', d: 'A CSV export of every log and food entry is available with Premium.' },
    ],
    factsH2: 'Small details',
    not: {
      t: 'What the log does not do',
      p: 'It does not score your symptoms, tell you what they mean or suggest treatment. It records what you tell it and shows it back to you, in the trends, the cycle history and the doctor report.',
    },
    faq: [
      { q: 'Is the daily log free?', a: 'Yes. Logging is unlimited and free. Premium adds the PDF report, longer trend ranges, insights, unlimited food scans and CSV export.' },
      { q: 'Do I have to log every day?', a: 'No. Missing days is normal. The app never penalises it, and the cycle history works from the days you did log.' },
      { q: 'Can I add symptoms that are not in the list?', a: 'You can choose which of the built-in symptoms show up in your list. Anything else goes in the notes box.' },
      { q: 'Where is my data stored?', a: 'On your phone, in a local database. There is no account and no cloud copy. Delete all data in Settings removes it.' },
    ],
    related: ['period-cycle-tracker', 'symptom-trends', 'endometriosis-pain-tracker'],
  },

  {
    slug: 'period-cycle-tracker',
    name: 'Cycle tracker for irregular periods',
    short: 'Cycle history, period length and flags for cycles outside 21 to 35 days.',
    tier: 'Free',
    metaTitle: 'Irregular Period Tracker for PCOS: Cycle History and Cycle Length',
    metaDescription:
      'See every cycle length and period length, with cycles outside 21 to 35 days marked. Estimates only appear after 3 logged cycles. Free, private, built for PCOS and endometriosis.',
    keywords: ['irregular period tracker', 'PCOS cycle tracker', 'cycle length tracker', 'period tracker for PCOS', 'long cycle tracker'],
    h1: ['A cycle tracker that expects ', 'your cycles to vary'],
    lede:
      'Standard period apps predict the next date from the last one and are wrong constantly when cycles run 30, 41, then 33 days. This one records what happened, shows it plainly, and only offers an estimate once there is enough data to justify one.',
    hero: [
      { file: 'trends-cycles.png', alt: 'Cycle history in PCOS & Endo Tracker listing each cycle length and bleeding days with an estimate for the next period (sample data)' },
      { file: 'home.png', alt: 'Home screen showing cycle day 12 among the day tiles (sample data)' },
    ],
    tags: ['Free, unlimited history', 'Estimates after 3 cycles'],
    sections: [
      {
        h2: 'How a cycle is counted',
        paras: [
          'A cycle starts on a bleeding day (light, medium or heavy) whose previous day was not a bleeding day. Spotting does not start a cycle. The length of a cycle is the number of days until the next one starts.',
          'During setup you enter when your last period began, so there is a starting point on day one. If your logged days already show a period start within three days of that date, the app uses your logged days instead of counting it twice.',
          'For each cycle the app also counts bleeding days, so you can see period length next to cycle length.',
        ],
      },
      {
        h2: 'Cycle history, with the outliers marked',
        paras: [
          'Trends shows each cycle: start date, length, and bleeding days. A cycle shorter than 21 or longer than 35 days is flagged, because those are the usual limits clinicians use when talking about regular cycles. Being flagged is information, not a warning.',
          'The chart on the right uses the same lengths as the screenshot: 31, 29, 38, 33, 41 and 30 days. Bars outside the dashed 21 and 35 day lines are marked in pink.',
        ],
        demo: 'cycles',
        shots: [{ file: 'trends-cycles.png', alt: 'Cycle history list with lengths, bleeding days and an estimate line (sample data)' }],
      },
    ],
    stepsH2: 'When you will see a prediction',
    steps: [
      { title: 'Under 3 completed cycles', body: 'No prediction. The screen says “Estimates appear after 3 logged cycles.” A guess from one or two cycles would mostly be noise.' },
      { title: '3 or more completed cycles', body: 'The app averages your most recent cycles (up to six) and shows a date labelled “Estimate”. It also reminds you that your cycles can vary.' },
      { title: 'A cycle runs long', body: 'Once the current cycle passes 35 days, the late period check takes over. It is a separate page of this site.' },
    ],
    facts: [
      { t: 'Cycle day on Home', d: 'Home shows today’s cycle day once a cycle start is known.' },
      { t: 'No fertile-window claims', d: 'It does not predict ovulation or fertile days. With irregular cycles, date-based ovulation predictions are unreliable, so the app does not make them.' },
      { t: 'Unlimited history', d: 'Cycle history is not limited by plan. Premium does not gate it.' },
      { t: 'Feeds the doctor report', d: 'Cycle lengths and the count outside 21 to 35 days appear in the report and in the PDF table.' },
    ],
    factsH2: 'What else it touches',
    not: {
      t: 'What it does not do',
      p: 'It does not diagnose PCOS, call a cycle abnormal or tell you what to do about one. Cycle length alone does not diagnose anything. If your cycles worry you, the report is there to make that conversation easier.',
    },
    faq: [
      { q: 'What counts as a regular cycle here?', a: '21 to 35 days. Anything outside that is marked. The thresholds are fixed, not personalised.' },
      { q: 'Why is there no prediction yet?', a: 'Predictions appear after three completed cycles. A completed cycle needs two logged period starts, so log your period days as they happen.' },
      { q: 'Does spotting count as a period?', a: 'It is recorded, but it does not start a cycle. Light, medium and heavy flow do.' },
      { q: 'Can I add periods from before I installed the app?', a: 'You can set when your last period started during setup. After that the log records each day as you go, so history builds from the day you start.' },
    ],
    related: ['late-period-check', 'daily-symptom-log', 'doctor-report'],
  },

  {
    slug: 'late-period-check',
    name: 'Late period check',
    short: 'A straight answer to “my period is late, is that a problem?” without predicting or diagnosing.',
    tier: 'Free',
    metaTitle: 'Late Period with PCOS: What a Long Cycle Can Mean',
    metaDescription:
      'When your cycle passes 35 days, the app shows a calm, honest note: long cycles are common with PCOS, when to mention it to your doctor, and when to take a pregnancy test. Free.',
    keywords: ['late period PCOS', 'period late PCOS', 'long cycle PCOS', 'no period for 3 months PCOS', 'how long can a PCOS cycle be'],
    h1: ['When your period is late, ', 'a straight answer'],
    lede:
      'A late period with PCOS is stressful because it could mean several things. The app does not guess. Once your current cycle is longer than 35 days it shows one card on Home that says what a long cycle can mean and when it is worth speaking to your doctor.',
    hero: [
      { file: 'late-calm.png', alt: 'Home screen late period card for a cycle between day 36 and 45, with a calm message (sample data)' },
      { file: 'late-doctor.png', alt: 'Home screen late period card for a cycle past day 45, suggesting you mention it to your doctor (sample data)' },
    ],
    tags: ['Free', 'Never predicts', 'Never diagnoses'],
    sections: [
      {
        h2: 'Three stages, three different messages',
        paras: [
          'The card appears only when the current cycle is longer than the usual 35 days. What it says depends on how long it has been.',
          'Day 36 to 45: a calm card titled “Day N, no period yet”. It says cycles longer than 35 days are common with PCOS and a late period is not always a problem, suggests you keep logging how you feel, and says to take a pregnancy test if you could be pregnant.',
          'Day 46 to 89: the tone changes. Long gaps are common with PCOS, but cycles over 45 days are worth mentioning to your doctor, and the pregnancy test reminder stays.',
          'Day 90 or more: “Day N with no period”. Three months or more without a period is worth a visit to your doctor, even if you feel fine.',
        ],
        timeline: [
          { label: 'Day 35', sub: 'Still within the usual range. No card.' },
          { label: 'Day 36', sub: 'Calm card: common with PCOS, keep logging.' },
          { label: 'Day 46', sub: 'Mention it to your doctor.' },
          { label: 'Day 90', sub: 'Worth a visit, even if you feel fine.' },
        ],
        shots: [
          { file: 'late-calm.png', alt: 'Late period card, calm stage (sample data)' },
          { file: 'late-doctor.png', alt: 'Late period card, doctor stage (sample data)' },
        ],
        caption: 'Left: the calm stage. Right: after day 45.',
      },
      {
        h2: 'Your own usual range, next to it',
        paras: [
          'If you have at least two completed cycles logged, the card also shows your usual range, for example “Your usual cycle: 29 to 41 days”. That is your own history, which is a better yardstick than a textbook number.',
          'The button on the card opens the doctor report, so what you tell your doctor is already written down: your cycle lengths, bleeding days and symptoms.',
        ],
      },
    ],
    facts: [
      { t: 'On-device only', d: 'The card is worked out from your own log on your phone. Nothing is sent anywhere.' },
      { t: 'Wording is fixed', d: 'The messages are written once and do not change based on a model or an ad. Every stage is listed on this page.' },
      { t: 'Needs your period days logged', d: 'It works from the last period start the app knows about: the date from setup, or the bleeding days you logged since.' },
    ],
    factsH2: 'Good to know',
    not: {
      t: 'What it will never say',
      p: 'It will not tell you when your period will arrive, will not say you are pregnant or not pregnant, and will not say your cycle is a symptom of any condition. A long cycle is a reason to look, not a conclusion.',
    },
    faq: [
      { q: 'Why 35 days?', a: '21 to 35 days is the commonly used range for a regular cycle. The card only appears after day 35.' },
      { q: 'Can the app tell me if I am pregnant?', a: 'No. If you could be pregnant, take a pregnancy test. The card says so at every stage.' },
      { q: 'I had a period but did not log it. Will the card be wrong?', a: 'It counts from the last period start the app knows about, so it can run ahead of reality. Log flow on the days it happens and the history stays accurate.' },
      { q: 'Does it replace seeing a doctor?', a: 'No. Its job is to say when a visit is worth it and to help you prepare for one.' },
    ],
    related: ['period-cycle-tracker', 'doctor-report', 'daily-symptom-log'],
  },

  {
    slug: 'pcos-food-scanner',
    name: 'PCOS food scanner',
    short: 'Scan a barcode and get an A to E grade with the reasons behind it.',
    tier: 'Free + Premium',
    metaTitle: 'PCOS Food Scanner: Barcode Grades A to E With the Reasons',
    metaDescription:
      'Scan a barcode and see why a product scores the way it does for PCOS: added sugar, fiber, protein, refined flour, syrups and seed oils. 3 scans a day free. Rules shown on this page.',
    keywords: ['PCOS food scanner', 'PCOS barcode scanner app', 'is this food good for PCOS', 'PCOS grocery app', 'added sugar scanner'],
    h1: ['Scan the barcode, ', 'see why it scores that way'],
    lede:
      'Most food apps give a number and no explanation. This one gives a grade from A to E and the one to three reasons that moved it. The scoring rules are simple enough that they are written out below, so you can disagree with them.',
    hero: [
      { file: 'scan-result-e.png', alt: 'Scan result for a cola showing grade E, sugar, fiber and protein and the reason High added sugar (real product data from Open Food Facts)' },
      { file: 'scan-result-b.png', alt: 'Scan result for sandwich bread showing grade B and the reason Low added sugar (real product data from Open Food Facts)' },
      { file: 'scan-recent.png', alt: 'Scan tab with a list of recent scans and their grades' },
    ],
    tags: ['3 scans a day free', 'Unlimited with Premium', 'Rules published'],
    sections: [
      {
        h2: 'What a result looks like',
        paras: [
          'Point the camera at a barcode. The app looks the product up on Open Food Facts, a free, community-built food database, and shows the name, photo, sugar, fiber and protein, the grade, and the top reasons for it.',
          'All the numbers use one basis: per serving when the product lists serving values, otherwise per 100 g. The result states which. Mixing a per-serving sugar figure with a per-100 g fiber figure used to make scores jump around, so the app no longer does that.',
          'The cards on this page are real results: products from Open Food Facts, run through the same scoring code as the app.',
        ],
        demo: 'score',
        shots: [{ file: 'scan-result-mars.png', alt: 'Scan result for a chocolate bar showing grade E with three reasons: high added sugar, contains syrup and includes seed oils (real product data from Open Food Facts)' }],
        caption: 'A result with three reasons.',
      },
      {
        h2: 'The scoring rules, written out',
        paras: [
          'Every product starts at zero and moves up or down. Added sugar over 10 g takes away 2 points. Under 5 g adds 1. Fiber of 3 g or more adds 1. Protein of 10 g or more adds 1. An ingredient list that names refined flour, white rice or a syrup takes away 2. Seed oils such as sunflower, soybean, canola or rapeseed take away 0.5, and so does an ingredient list longer than 15 items.',
          'The final score becomes a grade: 2 or more is A, 1 or more is B, 0 or more is C, down to minus 1.5 is D, and anything lower is E. The screen shows at most three reasons, ordered by how much they moved the score.',
          'Added sugar is used when the product lists it. Otherwise the app uses total sugars. That means a product with natural sugars, such as dried fruit, can be read as higher in sugar than the “added” label would say. If a number looks wrong, tap “Fix the numbers” and correct it.',
        ],
        demo: 'rules',
      },
    ],
    stepsH2: 'When a product is not found',
    steps: [
      { title: 'Not in the database', body: 'You see “We couldn’t find that one”. Open Food Facts is built by volunteers, so smaller or local products can be missing.' },
      { title: 'Enter it by hand', body: 'Type the name and the sugar, fiber and protein in grams. The same rules score it, and the result says it was entered by hand.' },
      { title: 'Add to today', body: '“Add to today” puts the food into your day. Its sugar shows up in the added sugar chart in Trends.' },
    ],
    facts: [
      { t: 'Free: 3 scans a day', d: 'Free accounts can scan three products per day. Premium removes the limit. Recent scans stay in a list you can reopen without using a scan.' },
      { t: 'What leaves your phone', d: 'Only the barcode number is sent to Open Food Facts to find the product. Your log, your cycle and your scan history stay on the phone.' },
      { t: 'Needs a connection', d: 'Looking up a barcode needs internet. Entering a food by hand does not.' },
    ],
    factsH2: 'Limits worth knowing',
    not: {
      t: 'What the grade is not',
      p: 'It is a rule-based score, not a medical rating. It does not know your medication, your glucose or your diet, and it does not say a food is forbidden. It is one quick way to see sugar, fiber, protein and ingredients at a glance. A grade E snack is not a failure.',
    },
    faq: [
      { q: 'Where does the product data come from?', a: 'Open Food Facts, an open database maintained by volunteers. Data quality varies by product.' },
      { q: 'Why does a product with fruit show a very low sugar figure?', a: 'The app uses the database’s added-sugar value when one is listed, and that can be lower than total sugars. If a number looks wrong, correct it by hand and the grade updates.' },
      { q: 'Can I scan without internet?', a: 'Not by barcode. You can still enter a food by hand and get a score offline.' },
      { q: 'Is the grade personalised?', a: 'No. Every user gets the same grade for the same numbers.' },
    ],
    related: ['blood-sugar-weight-log', 'symptom-trends', 'pattern-insights'],
  },

  {
    slug: 'blood-sugar-weight-log',
    name: 'Blood sugar and weight log',
    short: 'Log readings and weight when you take them, in your own units, and see them over time.',
    tier: 'Free',
    metaTitle: 'PCOS Blood Sugar and Weight Log: mg/dL or mmol/L, kg or lb',
    metaDescription:
      'Add blood sugar and weight to your daily PCOS log, in mg/dL or mmol/L and kg or lb. See weight change in Trends and averages in the doctor report. Manual entry, private, free.',
    keywords: ['PCOS blood sugar tracker', 'insulin resistance tracker app', 'PCOS weight tracker', 'blood glucose log app', 'mmol/L mg/dL tracker'],
    h1: ['Blood sugar and weight, ', 'logged on your terms'],
    lede:
      'Insulin resistance is common with PCOS, so many people measure glucose and watch weight. This is a place to write those numbers down next to your symptoms, so you can see them together. It is a log, not a glucose monitor.',
    hero: [{ file: 'log-optional.png', alt: 'Optional section of the daily log with weight and blood sugar fields (sample entry)' }],
    tags: ['Free', 'Manual entry', 'mg/dL or mmol/L'],
    sections: [
      {
        h2: 'Two fields, in your units',
        paras: [
          'Blood sugar and weight are in the optional section of the daily log. Leave them empty on days you do not measure. Nothing is required.',
          'Pick kg or lb for weight and mg/dL or mmol/L for blood sugar in Settings. Values are converted for display and for the report, and stored in one unit internally, so changing the setting later does not alter or lose past entries.',
          'There is no integration with a glucose meter or smart scale. You type the number.',
        ],
        shots: [{ file: 'log-optional.png', alt: 'Weight and blood sugar entry fields (sample entry)' }],
      },
      {
        h2: 'Where the numbers show up',
        paras: [
          'Trends draws weight as a line over the selected range and shows the change in your unit. It also shows added sugar from foods you scanned and added to a day, so you can see what you ate next to what you measured.',
          'The doctor report mentions your average entered blood sugar once there are at least three readings, and a weight change of 2 kg or more over the period. The PDF lists the individual weights and readings by date.',
        ],
        shots: [{ file: 'trends-top.png', alt: 'Trends screen with pain summary and a weight line chart (sample data)' }],
        flip: true,
      },
    ],
    facts: [
      { t: 'No interpretation', d: 'The app does not say a reading is high, low or in range. Your doctor or diabetes team sets targets, not a log.' },
      { t: 'Doctor-ready', d: 'Readings and weights appear in the PDF table with dates, in the unit you chose.' },
      { t: 'CSV export', d: 'Premium includes a CSV export of every entry if you want to analyse it yourself.' },
    ],
    factsH2: 'Details',
    not: {
      t: 'What this is not',
      p: 'It is not a continuous glucose monitor, not a medical device and not advice about insulin, medication or diet. If a reading worries you, contact your doctor.',
    },
    faq: [
      { q: 'Can I connect a glucose meter or Apple Health?', a: 'No. Entry is manual.' },
      { q: 'Can I switch between kg and lb later?', a: 'Yes. Your history is kept and shown in the unit you pick.' },
      { q: 'Does it tell me if my blood sugar is high?', a: 'No. It records and charts the numbers you enter and leaves the judgement to your doctor.' },
    ],
    related: ['daily-symptom-log', 'symptom-trends', 'doctor-report'],
  },

  {
    slug: 'symptom-trends',
    name: 'Symptom trends',
    short: 'Pain, weight, added sugar, symptom frequency and cycle history over a week, month or 3 months.',
    tier: 'Free + Premium',
    metaTitle: 'PCOS Symptom Trends: Pain, Weight, Sugar and Symptom Frequency',
    metaDescription:
      'See average and highest pain, weight change, added sugar and how often each symptom shows up, over 7 days free or 1 to 3 months with Premium. Computed on your phone.',
    keywords: ['PCOS symptom trends', 'symptom frequency tracker', 'pain tracker chart', 'PCOS progress tracker', 'period pain chart'],
    h1: ['See what actually ', 'shows up, and how often'],
    lede:
      'Memory is unreliable when you are in pain, and doctors ask “how often?”. Trends turns your daily logs into counts and charts: how bad, how often, what changed. Nothing here is inferred. It is your own entries, added up.',
    hero: [
      { file: 'trends-top.png', alt: 'Trends screen: pain summary with average, highest and days logged, and a weight chart (sample data)' },
      { file: 'trends-symptoms.png', alt: 'Trends screen: added sugar and symptom frequency such as cramps 14 of 30 days (sample data)' },
    ],
    tags: ['7 days free', '1 and 3 months with Premium'],
    sections: [
      {
        h2: 'What each block shows',
        paras: [
          'Pain: your average, your highest, and how many days you logged in the range, with a chart. Weight: a line over the range and the change in kg or lb. Added sugar: the average per day, from foods you added.',
          'Symptoms: each symptom with the number of days it appeared out of the days in the range, for example “14 of 30 days”. That is the kind of figure a doctor can use, and it takes the guesswork out of “most days”.',
          'Cycle history sits at the bottom of the same screen and has its own page on this site.',
        ],
        shots: [
          { file: 'trends-top.png', alt: 'Pain and weight blocks of Trends (sample data)' },
          { file: 'trends-symptoms.png', alt: 'Added sugar and symptom frequency blocks of Trends (sample data)' },
        ],
        caption: 'Counts out of the days in the range, not impressions.',
      },
      {
        h2: 'Week, month, 3 months',
        paras: [
          'A segmented control at the top switches the range. The last 7 days are free. The 1-month and 3-month ranges are part of Premium, and tapping them without Premium opens the paywall instead of showing a half-empty screen.',
          'Everything on the screen, including the symptom counts and charts, is calculated on your phone from your logs.',
        ],
      },
    ],
    facts: [
      { t: 'Share with your doctor', d: 'Two buttons at the bottom: the doctor report, and a monthly recap card to share as an image.' },
      { t: 'Honest empty states', d: 'With no data the screen says so, for example “Log symptoms and they’ll show up here”, instead of drawing a fake chart.' },
      { t: 'Insights are separate', d: 'Pattern insights are a Premium block further down this screen. They have their own page.' },
    ],
    factsH2: 'Also on this screen',
    not: {
      t: 'What Trends does not claim',
      p: 'It shows frequency, not cause. A symptom appearing on 14 days of 30 does not say why. Insights add observations on top, worded as observations, never as advice.',
    },
    faq: [
      { q: 'Which ranges are free?', a: 'The last 7 days. One month and three months need Premium.' },
      { q: 'Can I export the data behind the charts?', a: 'Yes, as a CSV with Premium.' },
      { q: 'Why are some charts empty?', a: 'Weight and blood sugar are optional. A chart only appears if you have entered values in the range.' },
    ],
    related: ['pattern-insights', 'doctor-report', 'blood-sugar-weight-log'],
  },

  {
    slug: 'pattern-insights',
    name: 'Pattern insights',
    short: 'Plain-language observations from your own entries: pain by cycle day, sugar days, energy and pain.',
    tier: 'Premium',
    metaTitle: 'PCOS Pattern Insights: What Your Own Logs Show',
    metaDescription:
      'Observations computed on your phone from your logs: which cycle days hurt most, symptoms on high-sugar days, energy on high-pain days. Observational wording, never medical advice.',
    keywords: ['PCOS symptom triggers', 'PCOS pattern tracker', 'what triggers my PCOS symptoms', 'cycle day pain pattern', 'sugar and symptoms tracker'],
    h1: ['What your own logs ', 'say, in plain words'],
    lede:
      'After about five days of entries the app starts looking for patterns, and it only says something when the numbers back it up. There are five kinds of insight. They are all listed here, with the conditions that have to be met before one appears.',
    hero: [{ file: 'insights.png', alt: 'Insights block in Trends listing observations such as the cycle days with the highest pain and symptoms on high-sugar days (sample data)' }],
    tags: ['Premium', 'On-device', 'Observational'],
    sections: [
      {
        h2: 'The five insights and when each one appears',
        paras: [
          'Pain by cycle day. Your pain is averaged in four bands: days 1 to 3, 4 to 7, 8 to 14 and 15 onward. If one band is more than half a point above your overall average, you see which one. It needs at least three logs in a band and at least two bands to compare.',
          'Symptoms on high-sugar days. If you added foods with 25 g or more of sugar on at least three days, the app checks which symptom appeared on those days. It reports one only if it showed up on at least half of them and more often than on your other days.',
          'Energy and pain. If you have at least six days with an energy rating, it compares your energy on days with pain of 6 or more with days of 3 or less. It reports a gap of 0.8 points or more.',
          'Period length: how long your bleeding usually lasts, once you have two cycles. Irregular cycles: how many of your logged cycles fell outside 21 to 35 days, with a nudge to share that with your doctor.',
        ],
        shots: [{ file: 'insights.png', alt: 'Insights block with five observation rows (sample data)' }],
      },
      {
        h2: 'Why the wording is careful',
        paras: [
          'Each line states a count or an average from your entries. For example: “Cramps showed up on 9 of 12 high-sugar days (25g+).” It does not say the sugar caused the cramps, because it cannot know that. Two things happening on the same days is a prompt to look closer, not a finding.',
          'If there is not enough data, there is no insight. The block says “Keep logging. Insights appear once there’s enough to notice a pattern.” An empty list is the correct answer early on.',
        ],
        flip: true,
      },
    ],
    facts: [
      { t: 'Computed on your phone', d: 'The calculations run locally on your entries. No model, no upload.' },
      { t: 'Needs food entries for the sugar insight', d: 'It uses foods you added to a day from the scanner, so scanning and adding foods makes that insight possible.' },
      { t: 'The rest of Trends is free', d: 'The symptom counts, charts and cycle history in Trends are not gated, except the longer ranges. Insights are the Premium block.' },
    ],
    factsH2: 'Details',
    not: {
      t: 'What an insight is not',
      p: 'It is not a diagnosis, a trigger list or advice to change what you eat or take. It is a sentence about your own numbers, to take to someone who can interpret them.',
    },
    faq: [
      { q: 'How many days do I need before I see one?', a: 'At least five logged days to start. Each insight then has its own minimum, listed above.' },
      { q: 'Is this AI?', a: 'No. They are fixed rules over your entries, so the same data always gives the same sentence.' },
      { q: 'Are insights included in the doctor report?', a: 'The report has its own “What your logs show” list. It overlaps in spirit but uses different rules, described on the doctor report page.' },
    ],
    related: ['symptom-trends', 'pcos-food-scanner', 'doctor-report'],
  },

  {
    slug: 'doctor-report',
    name: 'Doctor report',
    short: 'What your logs show, questions to ask, and a PDF to take to the appointment.',
    tier: 'Free + Premium',
    metaTitle: 'PCOS Doctor Report: Symptom and Cycle Summary PDF',
    metaDescription:
      'Turn months of logs into a one-page summary for your doctor or GP: cycle lengths, bleeding, pain, symptoms, weight, blood sugar and questions to ask. PDF export with Premium.',
    keywords: ['PCOS doctor report', 'symptom summary for doctor', 'period tracker PDF export', 'PCOS appointment preparation', 'questions to ask doctor PCOS'],
    h1: ['Walk into the appointment ', 'with the facts written down'],
    lede:
      'Appointments are short, and “my periods are irregular” is hard to act on. The report turns your logs into specifics: how many cycles, how long, how much pain, which symptoms, and four to five questions worth asking.',
    hero: [
      { file: 'report.png', alt: 'For your doctor screen listing what your logs show, such as cycle count and pain days (sample data)' },
      { file: 'report-questions.png', alt: 'Questions to ask section of the doctor report (sample data)' },
    ],
    tags: ['On-screen summary free', 'PDF with Premium', '1, 3 or 6 months'],
    sections: [
      {
        h2: 'What your logs show',
        paras: [
          'Choose 1, 3 or 6 months. The first card, “What your logs show”, lists only things that are true of your entries and notable. For example: how many cycles you logged and their range, how many fell outside 21 to 35 days, heavy bleeding days (if two or more), days with large clots, days with pain of 7 or more, androgen-related symptoms you logged (acne, excess hair, hair loss), your average entered blood sugar (three or more readings) and a weight change of 2 kg or more.',
          'If there is nothing notable, it says to log for a few days, rather than inventing a finding.',
          'This part is free. You can read it, screenshot it or show it on your phone.',
        ],
        shots: [{ file: 'report.png', alt: 'What your logs show card (sample data)' }],
      },
      {
        h2: 'Questions to ask',
        paras: [
          'Below the facts is a short list of questions: whether your symptoms could point to PCOS or something else, which tests make sense (hormones, blood sugar or insulin, ultrasound), whether your cycle length is a concern, and whether lifestyle changes or medication would help.',
          'If you set your condition to endometriosis or both, a fifth question about pain and further imaging or a referral is added. The wording says “doctor”, or “GP” if your device region is the UK, Australia, New Zealand or Ireland.',
        ],
        shots: [{ file: 'report-questions.png', alt: 'Questions to ask card (sample data)' }],
        flip: true,
      },
      {
        h2: 'The PDF',
        paras: [
          'With Premium, “Create PDF to share” builds a document and opens the share sheet, so you can print it, email it or save it to Files. It contains: average pain, bleeding days and cycles recorded; the worth-discussing list and questions; a table of cycles with lengths and period days; bleeding and clots; pain with locations; top symptoms as “N of M days”; weight and blood sugar by date; meds and supplements with days taken; and your notes with dates.',
          'The PDF is generated on your phone. It is not uploaded anywhere before you share it.',
          'The preview below is the real output: the app’s own report code, run on the sample entries used for the screenshots. You can open the PDF itself to see exactly what a doctor would receive.',
        ],
        demo: 'pdf',
      },
    ],
    facts: [
      { t: 'Free vs Premium', d: 'Reading the summary and questions is free. Creating the PDF needs Premium. The free button is labelled “Get the PDF with Premium” so it is not a surprise.' },
      { t: 'Neutral wording', d: 'Statements describe your logs. Nothing says “you have PCOS” or “this is abnormal”.' },
      { t: 'Always current', d: 'Everything is built from your entries at the moment you open it, so it reflects what you logged up to today.' },
    ],
    factsH2: 'Details',
    not: {
      t: 'What the report is not',
      p: 'It is not a diagnosis and not a medical record. It is a summary of what you entered, formatted for a short conversation. Your doctor decides what it means.',
    },
    faq: [
      { q: 'Is the report free?', a: 'The on-screen summary and questions are free. The PDF export is a Premium feature.' },
      { q: 'How far back does it go?', a: 'You choose 1, 3 or 6 months.' },
      { q: 'Does it work for endometriosis?', a: 'Yes. It includes pain levels and locations, clots and bleeding, and adds an endometriosis question when your condition is endo or both.' },
      { q: 'Who sees my report?', a: 'Only whoever you share it with. It is created on your phone.' },
    ],
    related: ['period-cycle-tracker', 'endometriosis-pain-tracker', 'symptom-trends'],
  },

  {
    slug: 'endometriosis-pain-tracker',
    name: 'Endometriosis pain tracker',
    short: 'Pain 0 to 10 with locations, clots and heavy bleeding, ready to hand to a specialist.',
    tier: 'Free',
    metaTitle: 'Endometriosis Pain Tracker: Pain Locations, Clots and Bleeding',
    metaDescription:
      'Log pain from 0 to 10 and where it hurts, including during sex and bowel movements, plus flow, clots and pad changes. Counts of high-pain days go straight into your doctor report. Free.',
    keywords: ['endometriosis pain tracker', 'endo symptom tracker app', 'pelvic pain diary', 'endometriosis diary app', 'pain during sex tracker'],
    h1: ['A pain diary that ', 'a specialist can use'],
    lede:
      'Endometriosis is often diagnosed years late, and the evidence people bring is “it hurts a lot”. A diary with dates, scores and locations is more concrete. This is that diary, with the questions endometriosis care actually asks.',
    hero: [{ file: 'log-period.png', alt: 'Daily log with flow, clots and a pain slider from 0 to 10 (sample entry)' }],
    tags: ['Free', 'Pain locations', 'Works with PCOS too'],
    sections: [
      {
        h2: 'What gets recorded',
        paras: [
          'Pain from 0 to 10, with a slider that shows a face as you move it. Where it hurts: pelvis, lower back, legs, stomach, during sex and during a bowel movement. Those last two are the ones people tend to leave out in appointments because they are awkward to say aloud, and both are recognised endometriosis symptoms.',
          'Flow and clots: choose spotting, light, medium or heavy, then clot size (none, small or large) and how many pads or tampons you changed that day. The count helps put “heavy” into numbers.',
          'Add the symptoms you track, such as bloating, fatigue, pelvic pain or headache, and mood and energy, because pain rarely arrives alone.',
        ],
        shots: [{ file: 'log-period.png', alt: 'Period and pain sections including pain locations (sample entry)' }],
      },
      {
        h2: 'What it adds up for you',
        paras: [
          'The report counts days with pain of 7 or more, days with heavy bleeding (if two or more), and days with large clots, and lists the locations by how many days you logged them. If you chose endometriosis or both during setup, it also adds a question about pain management and further imaging or a referral.',
          'Pattern insights (Premium) can tell you which part of your cycle your pain is highest, when you have enough days logged.',
        ],
        flip: true,
      },
    ],
    facts: [
      { t: 'Set during onboarding', d: 'You choose PCOS, endometriosis, both or not sure yet. “Both” and “endo” change the report questions. Everything else is the same.' },
      { t: 'Works for flare days', d: 'Logging with high pain takes the same few taps. You can come back and fill the rest later.' },
      { t: 'Private by default', d: 'Pain entries, locations and notes are stored on your phone, with no account.' },
    ],
    factsH2: 'Details',
    not: {
      t: 'What it does not do',
      p: 'It cannot diagnose endometriosis, and it will not tell you pain is normal. Pain that disrupts your life is worth taking seriously whatever a log says. The diary is there so you can describe it with dates and numbers.',
    },
    faq: [
      { q: 'Can the app diagnose endometriosis?', a: 'No. Endometriosis needs a clinician’s assessment. The app records what you experience.' },
      { q: 'Is it only for endometriosis?', a: 'No. It is built for PCOS and endometriosis together, which often overlap in symptoms.' },
      { q: 'Can I record pain during sex or bowel movements?', a: 'Yes. Both are options under “Where?” when you log pain.' },
    ],
    related: ['doctor-report', 'daily-symptom-log', 'pattern-insights'],
  },

  {
    slug: 'bloom-streak-plant',
    name: 'Bloom, the streak plant',
    short: 'A plant that grows with the days you log, droops when you miss, and never dies.',
    tier: 'Free',
    metaTitle: 'Bloom: A Gentle Streak Plant for Your Symptom Log',
    metaDescription:
      'Bloom grows from seed to full bloom as you log, droops if you miss a day, and never dies or loses a stage. A kinder streak for people whose bodies do not run on schedule.',
    keywords: ['gentle habit tracker', 'streak without guilt', 'symptom log habit', 'PCOS app motivation', 'plant streak app'],
    h1: ['A streak that doesn’t ', 'punish a bad week'],
    lede:
      'Daily-streak apps punish you for being ill, which is the worst possible design for a chronic condition. Bloom is a plant that grows with the total days you have logged, droops if you disappear for a day, and cannot die.',
    hero: [
      { file: 'bloom.png', alt: 'Bloom screen showing the plant in full bloom with a streak counter (sample data)' },
      { file: 'bloom-week.png', alt: 'Bloom screen with this week and growth progress (sample data)' },
    ],
    tags: ['Free', 'Never dies', 'Never loses a stage'],
    sections: [
      {
        h2: 'Five stages, counted in total days',
        paras: [
          'Bloom grows by how many days you have logged in total, not how many in a row. Seed at the start, Sprout at 3 days, Bud at 7, Flower at 14 and Full bloom at 30. A bad month can pause her, it cannot reset her.',
          'The streak, the current run of logged days, is shown separately on Home, and the longest run is remembered. Milestones at 7, 14, 30, 60 and 90 days get a small celebration.',
          'If you miss yesterday and have not logged today, Bloom droops. Log, and she perks up. She never dies, and you never lose a stage.',
        ],
        timeline: [
          { label: 'Seed', sub: 'Day 0' },
          { label: 'Sprout', sub: '3 days logged' },
          { label: 'Bud', sub: '7 days' },
          { label: 'Flower', sub: '14 days' },
          { label: 'Full bloom', sub: '30 days' },
        ],
        shots: [{ file: 'bloom.png', alt: 'Bloom in full bloom (sample data)' }],
      },
      {
        h2: 'Water her, once a day',
        paras: [
          'There is a “Water Bloom” button you can use once a day, which gives a bit of motion and a reason to open the screen. It changes nothing about your data. The “This week” row shows which days you logged, and the Growth bar shows how many more days until the next stage, for example “7 more days logged to reach Flower”.',
          'Reminders follow the same philosophy. One daily reminder at the time you choose, and a single 9 pm nudge in the evenings that is skipped once you have logged that day. Reminders are optional and you can turn them off.',
        ],
        shots: [{ file: 'bloom-week.png', alt: 'This week and Growth sections of Bloom (sample data)' }],
        flip: true,
      },
    ],
    facts: [
      { t: 'Why it exists', d: 'People with PCOS and endometriosis have flare days. A tracker that needs perfection stops being used. Bloom is there to make the habit pleasant, not strict.' },
      { t: 'No data cost', d: 'Bloom is drawn from your log count. It does not collect anything extra.' },
      { t: 'Shareable', d: 'You can share a progress card from the done screen after logging, with Premium removing the small “Made with” badge.' },
    ],
    factsH2: 'Details',
    not: {
      t: 'What it is not',
      p: 'It is not a health score and not a measure of how well you are managing your condition. A small plant is a nudge to write things down, nothing more.',
    },
    faq: [
      { q: 'Does Bloom die if I stop logging?', a: 'No. She droops after a missed day and recovers when you log. She never dies and never loses a stage.' },
      { q: 'Do I need Bloom?', a: 'No. It is on by default, but you can ignore it. Logging works the same either way.' },
      { q: 'Is Bloom free?', a: 'Yes.' },
    ],
    related: ['daily-symptom-log', 'monthly-recap-card', 'private-no-account'],
  },

  {
    slug: 'monthly-recap-card',
    name: 'Share and recap cards',
    short: 'Turn a day, a month or a food scan into an image to share or keep.',
    tier: 'Free + Premium',
    metaTitle: 'Shareable Recap Cards for Your PCOS and Endo Log',
    metaDescription:
      'Create a daily progress card or a monthly recap image from your logs and share it to Stories or Messages, or save it to Photos. Premium removes the badge. Made on your phone.',
    keywords: ['monthly recap card', 'share PCOS progress', 'health recap image', 'period app share card', 'symptom recap'],
    h1: ['A recap you can ', 'share or keep to yourself'],
    lede:
      'Some people like to share their progress, with a friend or a support group, and some like a private monthly snapshot. Recap cards are images the app draws from your log. You choose whether they leave your phone.',
    hero: [
      { file: 'share.png', alt: 'Share screen with a monthly recap card for September showing average pain, period days, top symptom and days logged (sample data)' },
      { file: 'share-day.png', alt: 'Share screen with a day card reading Day 216 of tracking, with Bloom and a 32 day streak (sample data)' },
      { file: 'share-scan.png', alt: 'Share screen with a scan card for a cola, grade E, with the reason High added sugar (real product data)' },
    ],
    tags: ['Free', 'Badge removal with Premium'],
    sections: [
      {
        h2: 'Three kinds of card',
        paras: [
          'There are three. The day card (“My tracking journey”) shows how many days you have been tracking, your Bloom and your current streak, and is offered on the done screen after you log and from the share button on Home. The monthly recap is a button at the bottom of Trends and shows the month’s average pain, period days, your top symptom and days logged.',
          'The third is a scan card. After you scan a food, “Share card” turns the result into an image with the grade and the reason, headed “Rating my snacks for PCOS”. The preview on the share screen is the exact image that will be shared, and every number on it comes from your own log or scan.',
        ],
        shots: [
          { file: 'share.png', alt: 'Monthly recap card preview on the share screen (sample data)' },
          { file: 'share-scan.png', alt: 'Scan card preview on the share screen (real product data)' },
        ],
        caption: 'The monthly recap and a scan card.',
      },
      {
        h2: 'Sharing and saving',
        paras: [
          'Two buttons. “Share to Stories, TikTok & more” opens the system share sheet, so Instagram Stories, TikTok, Messages and anything else you have installed appear as usual. “Save to Photos” just saves the image to your library, if you want it for yourself.',
          'Without Premium, cards carry a small “Made with” badge. Premium removes it.',
          'If you would rather never share anything, ignore this feature. Nothing is sent unless you press a button.',
        ],
        flip: true,
      },
    ],
    facts: [
      { t: 'Nothing is posted for you', d: 'The app has no social features and no accounts. It makes an image, and the share sheet is yours.' },
      { t: 'Review before sharing', d: 'The preview is what gets shared. Check it, since it is your health data.' },
      { t: 'Saved images are yours', d: 'Once saved to Photos, the image is a normal photo. The app keeps no copy beyond what you create.' },
    ],
    factsH2: 'Details',
    not: {
      t: 'A note on privacy',
      p: 'A recap card shows summary numbers from your log. Think about who you are sending it to before you share. The app cannot unshare an image once it has left your phone.',
    },
    faq: [
      { q: 'Does sharing make my data public?', a: 'No. You are only sharing the image you choose to send, to the place you choose.' },
      { q: 'What does Premium change here?', a: 'It removes the small “Made with” badge on the cards.' },
    ],
    related: ['bloom-streak-plant', 'symptom-trends', 'private-no-account'],
  },

  {
    slug: 'private-no-account',
    name: 'Private by design',
    short: 'No account, no cloud copy. Your log lives in a database on your phone.',
    tier: 'Free',
    metaTitle: 'Private PCOS Tracker: No Account, Data Stays on Your Phone',
    metaDescription:
      'PCOS & Endo Tracker needs no account and keeps your log in a local database on your phone. What stays, what is sent (barcode lookups, purchases), and how to delete everything.',
    keywords: ['private period tracker', 'period tracker no account', 'PCOS app privacy', 'offline period tracker', 'health app no cloud'],
    h1: ['Your health log stays ', 'on your phone'],
    lede:
      'Period and symptom data is sensitive. The simplest way to protect it is not to collect it. There is no sign-up, no login, no profile and no cloud database. Here is exactly what stays on the phone and the few things that do go online.',
    hero: [{ file: 'settings.png', alt: 'Settings screen with reminders, tracking lists, units and a Your data section including Delete all data (sample data)' }],
    tags: ['No account', 'Local database', 'Delete anytime'],
    sections: [
      {
        h2: 'What stays on your phone',
        paras: [
          'Every log entry, cycle, symptom, note, weight, blood sugar reading, food entry and scan result is stored in a database on your device. There is no copy on our servers, because there are no servers for it.',
          'The tradeoff is real. Without an account, there is no sync between devices and no recovery if you lose the phone and have no phone backup. If that matters to you, the CSV export (Premium) is a copy you can keep elsewhere.',
        ],
        shots: [{ file: 'settings.png', alt: 'Settings, with the Your data section (sample data)' }],
      },
      {
        h2: 'What does go online',
        paras: [
          'Barcode lookups. When you scan a product, its barcode number is sent to Open Food Facts to fetch the product details. No log data goes with it. Entering a food by hand sends nothing.',
          'Purchases. If you subscribe, Apple handles payment and the app uses RevenueCat to confirm your Premium status. The app does not get your card details.',
          'Everything else, including reports, charts and insights, is computed on your phone. The PDF is built on your phone and only leaves it when you share it.',
          'The full detail is in the privacy policy and in “How your data works” inside Settings.',
        ],
        flip: true,
      },
    ],
    steps: [
      { title: 'Open Settings', body: 'The last tab.' },
      { title: 'Scroll to “Your data”', body: 'You will find the doctor report, “Export data as CSV” (Premium) and “Delete all data”.' },
      { title: 'Delete all data', body: 'Confirm and every log, food entry, scan and setting is removed from the phone.' },
    ],
    stepsH2: 'Deleting everything',
    not: {
      t: 'What this does not make it',
      p: 'It is not a medical device, and local storage is not a substitute for a backup. If you delete the app or lose the phone without a device backup, your log goes with it.',
    },
    faq: [
      { q: 'Do I need an account?', a: 'No. There is no sign-up and no login.' },
      { q: 'Is anything sold or shared for advertising?', a: 'No. There are no ads and no ad trackers in the app.' },
      { q: 'Can I move my data to a new phone?', a: 'A normal iPhone backup and restore moves the app with its data. You can also export a CSV with Premium.' },
      { q: 'What happens to my data if I delete the app?', a: 'It is removed with the app, unless it is in a phone backup you restore.' },
    ],
    facts: [
      { t: 'No analytics or ad SDKs', d: 'The privacy policy states the app runs no analytics, advertising or tracking SDKs, and does not access Apple Health.' },
      { t: 'Standard storage', d: 'The log is kept in SQLite, a widely used on-device database, inside the app’s private storage.' },
    ],
    factsH2: 'Two more facts',
    related: ['daily-symptom-log', 'doctor-report', 'pcos-food-scanner'],
  },
];

export const getFeature = (slug: string) => FEATURES.find((f) => f.slug === slug);
