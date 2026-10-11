export interface Source {
  title: string;
  publisher: string;
  url: string;
  note?: string;
}

// Every external claim on a Sober Girl guide cites one of these. Retrieved 2026-10-06.
export const SOURCES: Record<string, Source> = {
  gallup: {
    title: 'U.S. Drinking Rate at New Low as Alcohol Concerns Surge',
    publisher: 'Gallup, Lydia Saad, August 2025',
    url: 'https://news.gallup.com/poll/693362/drinking-rate-new-low-alcohol-concerns-surge.aspx',
    note: 'Telephone poll, 7 to 21 July 2025, 1,002 US adults, margin of error ±4 points.',
  },
  nsduh: {
    title: 'Alcohol Use Disorder (AUD) in the United States: Age Groups and Demographic Characteristics',
    publisher: 'NIAAA, using the 2024 National Survey on Drug Use and Health',
    url: 'https://www.niaaa.nih.gov/alcohols-effects-health/alcohol-topics/alcohol-facts-and-statistics/alcohol-use-disorder-aud-united-states-age-groups-and-demographic-characteristics',
  },
  medline: {
    title: 'Alcohol withdrawal',
    publisher: 'MedlinePlus (US National Library of Medicine), reviewed 1 January 2025 by Frank D. Brodkey, MD',
    url: 'https://medlineplus.gov/ency/article/000764.htm',
  },
  bmj: {
    title: 'Short-term abstinence from alcohol and changes in cardiovascular risk factors, liver function tests and cancer-related growth factors: a prospective observational study',
    publisher: 'Mehta G, Macdonald S, Cronberg A, et al. BMJ Open 2018;8:e020673',
    url: 'https://doi.org/10.1136/bmjopen-2017-020673',
    note: 'Observational study. 94 people who chose to abstain for a month and 47 who kept drinking.',
  },
  acuk: {
    title: 'The evidence behind the Dry January challenge: benefits and long-term impact',
    publisher: 'Alcohol Change UK, summarising evaluations by Dr Richard de Visser, University of Sussex',
    url: 'https://alcoholchange.org.uk/help-and-support/managing-your-drinking/dry-january/about-dry-january/the-evidence-behind-the-dry-january-challenge-benefits-and-long-term-impact',
    note: 'Self-reported results from people who signed up to Dry January, not a controlled trial.',
  },
  acukAbout: {
    title: 'About Dry January',
    publisher: 'Alcohol Change UK',
    url: 'https://alcoholchange.org.uk/help-and-support/managing-your-drinking/dry-january/about-dry-january',
  },
  niaaaBasics: {
    title: 'The Basics: Defining How Much Alcohol Is Too Much',
    publisher: 'NIAAA',
    url: 'https://www.niaaa.nih.gov/health-professionals-communities/core-resource-on-alcohol/basics-defining-how-much-alcohol-too-much',
  },
  navigator: {
    title: 'NIAAA Alcohol Treatment Navigator',
    publisher: 'NIAAA',
    url: 'https://alcoholtreatment.niaaa.nih.gov/',
  },
  samhsa: {
    title: 'National Helpline',
    publisher: 'SAMHSA',
    url: 'https://www.samhsa.gov/find-help/helplines/national-helpline',
    note: 'Free, confidential, 24/7 treatment referral line: 1-800-662-4357.',
  },
  warrington: {
    title: 'Sober Curious: The Blissful Sleep, Greater Focus, Limitless Presence, and Deep Connection Awaiting Us All on the Other Side of Alcohol',
    publisher: 'Ruby Warrington, HarperOne, 2018',
    url: 'https://books.apple.com/us/book/sober-curious/id1335913058',
  },
  macmillan: {
    title: 'Go Sober for October',
    publisher: 'Awareness Days, describing the Macmillan Cancer Support campaign',
    url: 'https://www.awarenessdays.com/awareness-days-calendar/go-sober-for-october/',
  },
  liver: {
    title: 'Alcoholic Liver Disease: Pathogenesis and Current Management',
    publisher: 'Alcohol Research: Current Reviews, vol. 38, no. 2, NIAAA',
    url: 'https://arcr.niaaa.nih.gov/arcr382/article11.htm',
  },
  sleep: {
    title: 'Alcohol and the Sleeping Brain',
    publisher: 'PubMed Central, US National Library of Medicine',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5821259/',
  },
  surgeon: {
    title: "Surgeon General's Report Calls for Cancer Warning Labels on Alcoholic Beverages",
    publisher: 'The ASCO Post, January 2025, reporting the US Surgeon General advisory of 3 January 2025',
    note: 'Reports that alcohol contributes to nearly 100,000 US cancer cases and about 20,000 deaths a year, and names seven cancers including breast cancer in women.',
    url: 'https://ascopost.com/news/january-2025/surgeon-general-s-report-calls-for-cancer-warning-labels-on-alcoholic-beverages/',
  },
  asIAmSober: {
    title: 'I Am Sober on the App Store (US)',
    publisher: 'Apple App Store listing, retrieved 6 October 2026, re-checked 10 October 2026',
    url: 'https://apps.apple.com/us/app/i-am-sober/id672904239',
  },
  asReframe: {
    title: 'Reframe: Drink Less & Thrive on the App Store (US)',
    publisher: 'Apple App Store listing, retrieved 6 October 2026, re-checked 10 October 2026',
    url: 'https://apps.apple.com/us/app/reframe-drink-less-thrive/id1485756576',
  },
  asSunflower: {
    title: 'Sunflower: Quit Any Addiction on the App Store (US)',
    publisher: 'Apple App Store listing, retrieved 6 October 2026, re-checked 10 October 2026',
    url: 'https://apps.apple.com/us/app/sunflower-quit-any-addiction/id1547099435',
  },
  playIAmSober: {
    title: 'I Am Sober on Google Play',
    publisher: 'Google Play listing (US), retrieved 10 October 2026',
    url: 'https://play.google.com/store/apps/details?id=com.thehungrywasp.iamsober&hl=en_US',
  },
  playSunflower: {
    title: 'Sober Day Counter - Sunflower on Google Play',
    publisher: 'Google Play listing (US), retrieved 10 October 2026',
    url: 'https://play.google.com/store/apps/details?id=app.sunflowersober.com&hl=en_US',
  },
  asSober: {
    title: 'Sober: Sobriety Tracker on the App Store (US)',
    publisher: 'Apple App Store listing, retrieved 6 October 2026',
    url: 'https://apps.apple.com/us/app/sober-sobriety-tracker/id863872931',
  },
  appleCancel: {
    title: 'Cancel a subscription from Apple',
    publisher: 'Apple Support',
    url: 'https://support.apple.com/en-us/118428',
  },
  coinWiki: {
    title: 'Sobriety coin',
    publisher: 'Wikipedia (secondary source; it cites AA\u2019s own FAQ and history books)',
    url: 'https://en.wikipedia.org/wiki/Sobriety_coin',
    note: 'Coin colours and intervals vary between groups.',
  },
  greyAcuk: {
    title: 'Grey area drinking: what is it and does it add anything to the alcohol debate?',
    publisher: 'Alcohol Change UK, Mark Leyshon, April 2024',
    url: 'https://alcoholchange.org.uk/blog/grey-area-drinking-what-is-it-and-does-it-add-anything-to-the-alcohol-debate',
  },
  asTryDry: {
    title: 'TRY DRY: The Dry January App on the App Store (US)',
    publisher: 'Apple App Store listing, retrieved 6 October 2026, re-checked 10 October 2026',
    url: 'https://apps.apple.com/us/app/try-dry-the-dry-january-app/id1441293755',
  },
  oldham: {
    title: 'Effectiveness of a smartphone app (Drink Less) versus usual digital care for reducing alcohol consumption among increasing-and-higher-risk adult drinkers in the UK: a two-arm, parallel-group, double-blind, randomised controlled trial',
    publisher: 'Oldham M, Beard E, Loebenberg G, et al. eClinicalMedicine 2024;70:102534',
    url: 'https://doi.org/10.1016/j.eclinm.2024.102534',
    note: 'This tested the UCL Drink Less app, not any other app on this page.',
  },
  khairuddin: {
    title: 'The Effectiveness of Mobile Health (mHealth) in Reducing Alcohol Consumption Among Adults in Developed Countries: A Systematic Review',
    publisher: 'Khairuddin K, Lee KW. Cureus, 2025',
    url: 'https://doi.org/10.7759/cureus.90110',
  },
  wfs: {
    title: 'Women for Sobriety',
    publisher: 'Women for Sobriety (501(c)(3) nonprofit), website retrieved 6 October 2026',
    url: 'https://www.womenforsobriety.org/',
  },
  nhs: {
    title: 'Alcohol units',
    publisher: 'NHS (UK), last reviewed 27 August 2024',
    url: 'https://www.nhs.uk/live-well/alcohol-advice/calculating-alcohol-units/',
    note: 'UK guidance, which uses UK alcohol units. US guidance uses standard drinks of 14 g of alcohol.',
  },
  niaaaUrges: {
    title: 'How to Stop Alcohol Cravings',
    publisher: 'NIAAA, Rethinking Drinking',
    url: 'https://rethinkingdrinking.niaaa.nih.gov/tools/Interactive-worksheets-and-more/Stay-in-control/Coping-With-Urges-To-drink-urge-tracker.aspx',
  },
  niaaaSupport: {
    title: 'Professional support',
    publisher: 'NIAAA, Rethinking Drinking',
    url: 'https://rethinkingdrinking.niaaa.nih.gov/thinking-about-change/professional-support',
    note: 'Lists the three FDA-approved medications for alcohol use disorder and when to see a health professional.',
  },
  urgeSurf: {
    title: 'Surfing the urge: brief mindfulness-based intervention for college student smokers',
    publisher: 'Bowen S, Marlatt A. Psychology of Addictive Behaviors, 2009',
    url: 'https://doi.org/10.1037/a0017127',
    note: 'A study of 123 student smokers, not drinkers. The authors call the data preliminary.',
  },
  marsh: {
    title: 'Shyness, alcohol use disorders and \u201changxiety\u201d: a naturalistic study of social drinkers',
    publisher: 'Marsh B, Morgan CJA, et al. (UCL and University of Exeter), Personality and Individual Differences, 2018. Summarised in the EurekAlert news release',
    url: 'https://www.eurekalert.org/news-releases/461010',
    note: 'Nearly 100 social drinkers randomised to drink or stay sober. Small sample; the effect was seen in highly shy people.',
  },
  sexdiff: {
    title: 'Sex Differences in the Presence and Severity of Alcohol Hangover Symptoms',
    publisher: 'van Lawick van Pabst AE, Devenney LE, Verster JC. Journal of Clinical Medicine, 2019',
    url: 'https://doi.org/10.3390/jcm8060867',
    note: '2,446 Dutch students reporting 22 hangover symptoms.',
  },
  niaaaStandard: {
    title: 'What Is A Standard Drink?',
    publisher: 'NIAAA',
    url: 'https://www.niaaa.nih.gov/alcohols-effects-health/overview-alcohol-consumption/what-standard-drink',
  },
  niaaaPatterns: {
    title: 'Understanding Alcohol Drinking Patterns',
    publisher: 'NIAAA',
    url: 'https://www.niaaa.nih.gov/alcohols-effects-health/alcohol-drinking-patterns',
  },
  podHello: {
    title: 'The Hello Someday Podcast For Sober Curious Women',
    publisher: 'Apple Podcasts listing (host Casey McGuire Davidson), retrieved 6 October 2026',
    url: 'https://podcasts.apple.com/us/podcast/the-hello-someday-podcast-for-sober-curious-women/id1508913688',
  },
  podBubble: {
    title: 'The Bubble Hour',
    publisher: 'Apple Podcasts listing, retrieved 6 October 2026',
    url: 'https://podcasts.apple.com/us/podcast/the-bubble-hour/id580501108',
  },
  podRecovery: {
    title: 'Recovery Elevator',
    publisher: 'Apple Podcasts listing (host Paul Churchill), retrieved 6 October 2026',
    url: 'https://podcasts.apple.com/us/podcast/recovery-elevator/id971959728',
  },
  podNaked: {
    title: 'This Naked Mind Podcast',
    publisher: 'Apple Podcasts listing (host Annie Grace), retrieved 6 October 2026',
    url: 'https://podcasts.apple.com/us/podcast/this-naked-mind-podcast/id1287269357',
  },
  podPowered: {
    title: 'Sober Powered: The Neuroscience of Being Sober',
    publisher: 'Apple Podcasts listing (host Gillian Tietz), retrieved 6 October 2026',
    url: 'https://podcasts.apple.com/us/podcast/sober-powered-the-neuroscience-of-being-sober/id1520426877',
  },
  podAwkward: {
    title: 'Sober Awkward',
    publisher: 'Apple Podcasts listing, retrieved 6 October 2026',
    url: 'https://podcasts.apple.com/us/podcast/sober-awkward/id1652121224',
  },
  olQuit: {
    title: 'Quit Like a Woman: The Radical Choice to Not Drink in a Culture Obsessed with Alcohol',
    publisher: 'Holly Whitaker, Dial Press. Open Library catalog record',
    url: 'https://openlibrary.org/works/OL20641876W',
  },
  olBlackout: {
    title: 'Blackout: Remembering the Things I Drank to Forget',
    publisher: 'Sarah Hepola. Open Library catalog record',
    url: 'https://openlibrary.org/works/OL17851987W',
  },
  olNaked: {
    title: 'This Naked Mind',
    publisher: 'Annie Grace. Open Library catalog record',
    url: 'https://openlibrary.org/works/OL28621390W',
  },
  traversy: {
    title: 'Alcohol Consumption and Obesity: An Update',
    publisher: 'Traversy G, Chaput JP. Current Obesity Reports, 2015',
    url: 'https://doi.org/10.1007/s13679-014-0129-4',
    note: 'A review. It reports that alcohol provides 7 kcal per gram and that the evidence on weight is mixed.',
  },
  niaaaCalc: {
    title: 'Alcohol Calorie Calculator',
    publisher: 'NIAAA, Rethinking Drinking',
    url: 'https://rethinkingdrinking.niaaa.nih.gov/tools/calculators/alcohol-calorie-calculator',
  },
  solitary: {
    title: 'A systematic review and meta-analysis on the association between solitary drinking and alcohol problems in adults',
    publisher: 'Skrzynski CJ, Creswell KG. Addiction, 2021',
    url: 'https://doi.org/10.1111/add.15355',
    note: 'Meta-analysis of observational studies. Association, not cause.',
  },
  boden: {
    title: 'Alcohol and depression',
    publisher: 'Boden JM, Fergusson DM. Addiction, 2011',
    url: 'https://doi.org/10.1111/j.1360-0443.2010.03351.x',
    note: 'A review of studies on alcohol use disorders and major depression.',
  },
  lifeline988: {
    title: '988 Suicide & Crisis Lifeline',
    publisher: '988 Lifeline',
    url: 'https://988lifeline.org/',
    note: 'Call, text or chat, free and confidential, 24/7.',
  },
  medlineDT: {
    title: 'Delirium tremens',
    publisher: 'MedlinePlus (US National Library of Medicine), reviewed 1 January 2025',
    url: 'https://medlineplus.gov/ency/article/000766.htm',
  },
  niaaaRecovery: {
    title: 'NIAAA Recovery Research Definitions',
    publisher: 'NIAAA',
    url: 'https://www.niaaa.nih.gov/research/niaaa-recovery-from-alcohol-use-disorder/definitions',
    note: 'Research definitions for remission and recovery from alcohol use disorder, with duration bands.',
  },
  lally: {
    title: 'How are habits formed: Modelling habit formation in the real world',
    publisher: 'Lally P, van Jaarsveld CHM, Potts HWW, Wardle J. European Journal of Social Psychology 2010;40(6):998-1009',
    url: 'https://doi.org/10.1002/ejsp.674',
    note: 'Daily health behaviours such as drinking water or exercise, not stopping alcohol. Self-reported automaticity.',
  },
  bpsHabit: {
    title: 'How to form a habit',
    publisher: 'British Psychological Society Research Digest, 6 October 2010, summarising Lally et al.',
    url: 'https://www.bps.org.uk/research-digest/how-form-habit',
  },
  niaaaWomen: {
    title: 'Women and Alcohol',
    publisher: 'NIAAA fact sheet, updated December 2025',
    url: 'https://www.niaaa.nih.gov/publications/brochures-and-fact-sheets/women-and-alcohol',
  },
  dryFeb: {
    title: 'Canadian Cancer Society 9th annual Dry Feb raises funds to support people affected by cancer',
    publisher: 'Canadian Cancer Society media release, 9 January 2024',
    url: 'https://cancer.ca/en/about-us/media-releases/2024/canadian-cancer-society-9th-annual-dry-feb-raises-funds-to-support-people-affected-by-cancer',
  },
  dryJulyWiki: {
    title: 'Dry July',
    publisher: 'Wikipedia (secondary source). The Dry July Foundation site blocked our automated check',
    url: 'https://en.wikipedia.org/wiki/Dry_July',
  },
  playReframe: {
    title: 'Reframe: Cut Back on Alcohol on Google Play',
    publisher: 'Google Play listing (US), retrieved 10 October 2026',
    url: 'https://play.google.com/store/apps/details?id=com.glucobit.reframe&hl=en_US',
  },
  playTryDry: {
    title: 'Try Dry: Dry January® & beyond on Google Play',
    publisher: 'Google Play listing (US), retrieved 10 October 2026',
    url: 'https://play.google.com/store/apps/details?id=uk.org.alcoholconcern.dryjanuary&hl=en_US',
  },
  playSoberGirl: {
    title: 'Drink Less: Alcohol Free Days (Sober Girl) on Google Play',
    publisher: 'Google Play listing (US), retrieved 10 October 2026. This is our own app',
    url: 'https://play.google.com/store/apps/details?id=com.sobergirl.app&hl=en_US',
  },
  playCancel: {
    title: 'Cancel, pause, or change a subscription on Google Play',
    publisher: 'Google Play Help',
    url: 'https://support.google.com/googleplay/answer/7018481',
  },
  niaaaEpisode: {
    title: 'Recovering from a Drinking Episode When Your Goal is to Quit',
    publisher: 'NIAAA, Rethinking Drinking',
    url: 'https://rethinkingdrinking.niaaa.nih.gov/tools/worksheets-more/recovering-drinking-episode-when-your-goal-quit',
  },
  larimer: {
    title: 'Relapse Prevention: An Overview of Marlatt’s Cognitive-Behavioral Model',
    publisher: 'Larimer ME, Palmer RS, Marlatt GA. Alcohol Research & Health 1999;23(2):151-160 (NIAAA)',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6760427/',
  },
  moos: {
    title: 'Rates and predictors of relapse after natural and treated remission from alcohol use disorders',
    publisher: 'Moos RH, Moos BS. Addiction 2006',
    url: 'https://doi.org/10.1111/j.1360-0443.2006.01310.x',
    note: '461 people followed for 16 years. A cohort study of people who sought help, not a trial.',
  },
  dennis: {
    title: 'An eight-year perspective on the relationship between the duration of abstinence and other aspects of recovery',
    publisher: 'Dennis ML, Foss MA, Scott CK. Evaluation Review 2007;31(6):585-612',
    url: 'https://doi.org/10.1177/0193841X07307771',
    note: '1,162 people entering treatment, followed for 8 years. The abstract gives no percentages.',
  },
  kelly: {
    title: 'Prevalence and pathways of recovery from drug and alcohol problems in the United States population',
    publisher: 'Kelly JF, Bergman B, Hoeppner BB, Vilsaint C, White WL. Drug and Alcohol Dependence 2017',
    url: 'https://doi.org/10.1016/j.drugalcdep.2017.09.028',
    note: 'A probability-based survey of US adults. It covers alcohol and other drugs together.',
  },
  liuChen: {
    title: 'Advances in Relationship Between Alcohol Consumption and Skin Diseases',
    publisher: 'Liu L, Chen J. Clinical, Cosmetic and Investigational Dermatology 2023;16:3785-3791',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10759914/',
    note: 'A review. It does not discuss how skin changes after stopping alcohol.',
  },
  rosacea: {
    title: 'Alcohol intake and risk of rosacea in US women',
    publisher: 'Li S, Cho E, Drucker AM, Qureshi AA, Li WQ. Journal of the American Academy of Dermatology 2017',
    url: 'https://doi.org/10.1016/j.jaad.2017.02.040',
    note: 'Nurses’ Health Study II: 82,737 women, 14 years, 4,945 cases. Epidemiological, so association and not cause.',
  },
  acukMindful: {
    title: 'What is mindful drinking and is it right for me?',
    publisher: 'Alcohol Change UK, February 2024',
    url: 'https://alcoholchange.org.uk/blog/what-is-mindful-drinking-and-is-it-right-for-me',
  },
  ttbBeer: {
    title: 'Malt Beverage Labeling: Alcohol Content',
    publisher: 'US Alcohol and Tobacco Tax and Trade Bureau (TTB), page updated 2025',
    url: 'https://www.ttb.gov/regulated-commodities/beverage-alcohol/beer/labeling/malt-beverage-alcohol-content',
    note: 'Covers malt beverages (beer). It does not cover wine.',
  },
  ttbWine7: {
    title: 'Wine Labeling: Overview of Labeling Requirements for Domestic Wines, Less than 7 Percent Alcohol by Volume',
    publisher: 'US Alcohol and Tobacco Tax and Trade Bureau (TTB), updated 18 November 2025',
    url: 'https://www.ttb.gov/regulated-commodities/beverage-alcohol/wine/7percentorless',
  },
  holmes: {
    title: 'Zero tolerance for 0%? How should clinicians and other practitioners respond to the use of alcohol-free and low-alcohol products in higher risk groups',
    publisher: 'Holmes J, Oldroyd CK, Drummond C, et al. Addiction, 2026',
    url: 'https://doi.org/10.1111/add.70244',
    note: 'A commentary. It says the available evidence is limited and calls for more studies.',
  },
  acuff: {
    title: 'Characterizing sentiment and self-reported experiences with nonalcoholic beverages in the context of efforts to quit or cut down on drinking',
    publisher: 'Acuff SF, Bowdring MA, Kelly JF, Russell AM. Alcohol and Alcoholism, 2026',
    url: 'https://doi.org/10.1093/alcalc/agag049',
    note: 'A content analysis of 153 posts on an online recovery forum, so it describes what people say, not outcomes.',
  },
  yokoyama: {
    title: 'Self-help group participation, avoidance of nonalcoholic beer, and nonsmoking independently predict better drinking outcomes in Japanese alcohol-dependent men',
    publisher: 'Yokoyama A, Kimura M, Yoshimura A, et al. Alcohol: Clinical and Experimental Research, 2026',
    url: 'https://doi.org/10.1111/acer.70227',
    note: '198 men treated for alcohol dependence, followed for 12 months. Observational and men only.',
  },
  bendsen: {
    title: 'Is beer consumption related to measures of abdominal and general obesity? A systematic review and meta-analysis',
    publisher: 'Bendsen NT, Christensen R, Bartels EM, et al. Nutrition Reviews 2013',
    url: 'https://doi.org/10.1111/j.1753-4887.2012.00548.x',
    note: '35 observational and 12 experimental studies. The authors rate the experimental data as low quality.',
  },
  medAscites: {
    title: 'Ascites',
    publisher: 'MedlinePlus (US National Library of Medicine), reviewed 12 August 2024',
    url: 'https://medlineplus.gov/ency/article/000286.htm',
  },
  medGastritis: {
    title: 'Gastritis',
    publisher: 'MedlinePlus (US National Library of Medicine), reviewed 24 January 2025',
    url: 'https://medlineplus.gov/ency/article/001150.htm',
  },
  yangHair: {
    title: 'Exploring the association between alcohol consumption and androgenic alopecia: a systematic review and meta-analysis',
    publisher: 'Yang WJ, Lee JY, Ko DS, et al. Alcohol and Alcoholism, 2024',
    url: 'https://doi.org/10.1093/alcalc/agae076',
    note: 'Six studies. Heterogeneity was high (I² 77%). Androgenetic alopecia only.',
  },
  stockwell: {
    title: 'Do "Moderate" Drinkers Have Reduced Mortality Risk? A Systematic Review and Meta-Analysis of Alcohol Consumption and All-Cause Mortality',
    publisher: 'Stockwell T, Zhao J, Panwar S, et al. Journal of Studies on Alcohol and Drugs 2016;77(2):185-198',
    url: 'https://doi.org/10.15288/jsad.2016.77.185',
    note: '87 studies, 3,998,626 people, 367,103 deaths.',
  },
  semba: {
    title: 'Resveratrol levels and all-cause mortality in older community-dwelling adults',
    publisher: 'Semba RD, Ferrucci L, Bartali B, et al. JAMA Internal Medicine 2014',
    url: 'https://doi.org/10.1001/jamainternmed.2014.1582',
    note: 'InCHIANTI cohort: 783 adults aged 65 and over, followed for 9 years.',
  },
  charach: {
    title: 'Childhood attention-deficit/hyperactivity disorder and future substance use disorders: comparative meta-analyses',
    publisher: 'Charach A, Yeung E, Climans T, Lillie E. Journal of the American Academy of Child and Adolescent Psychiatry 2011',
    url: 'https://doi.org/10.1016/j.jaac.2010.09.019',
    note: '13 prospective cohort studies. Association, not cause.',
  },
  emmerik: {
    title: 'Prevalence of attention-deficit hyperactivity disorder in substance use disorder patients: a meta-analysis and meta-regression analysis',
    publisher: 'van Emmerik-van Oortmerssen K, van de Glind G, van den Brink W, et al. Drug and Alcohol Dependence 2012',
    url: 'https://doi.org/10.1016/j.drugalcdep.2011.12.007',
    note: '29 studies of people with substance use disorders.',
  },
  levy: {
    title: 'Childhood ADHD and risk for substance dependence in adulthood: a longitudinal, population-based study',
    publisher: 'Levy S, Katusic SK, Colligan RC, et al. PLoS One 2014',
    url: 'https://doi.org/10.1371/journal.pone.0105640',
    note: '232 people with childhood ADHD and 335 controls from one birth cohort.',
  },
  lohit: {
    title: 'Prevalence of adult ADHD co-morbidity in alcohol use disorders in a general hospital setup',
    publisher: 'Lohit SR, Babu GN, Sharma S, et al. Indian Journal of Psychological Medicine 2019',
    url: 'https://doi.org/10.4103/ijpsym.ijpsym_464_18',
    note: 'A small cross-sectional study of 100 inpatients in one hospital.',
  },
  brooks: {
    title: 'The alcohol flushing response: an unrecognized risk factor for esophageal cancer from alcohol consumption',
    publisher: 'Brooks PJ, Enoch MA, Goldman D, Li TK, Yokoyama A. PLoS Medicine 2009;6(3):e1000050',
    url: 'https://doi.org/10.1371/journal.pmed.1000050',
  },
};
