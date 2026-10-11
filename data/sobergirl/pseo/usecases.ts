import type { Article } from '../articles';
import { CHECKED_ON, SAFETY_WITHDRAWAL, figure } from './shared';

// "I want a tracker that does X" pages. Only claims the app source or store listings support.

const page = (a: Omit<Article, 'sources' | 'kicker'> & { kicker?: string }): Article => ({ kicker: 'Guide', sources: [], ...a });

export const USECASE_ARTICLES: Article[] = [
  /* ------------------------------------------------------------------ Android */
  page({
    slug: 'sobriety-app-android',
    kicker: 'Comparison',
    metaTitle: 'Best Sobriety Apps for Android (2026): 5 Compared',
    metaDescription:
      'Sobriety and sober tracker apps on Android compared from their Google Play listings: ratings, downloads, cost and what each Data safety label says.',
    h1: 'Sobriety apps for Android: five compared from Google Play',
    dek: 'Most “best sober app” lists are written for iPhone. This one uses Google Play listings only, so every rating, download count and Data safety summary is the Android one.',
    quickAnswer:
      'Five sober tracker apps with Android versions: I Am Sober has the most users, with over 10 million downloads and a 4.7 rating from about 143K reviews [[playIAmSober]]. Sunflower (4.7, 500K+ downloads) says it collects no data [[playSunflower]]. Reframe (4.5, 500K+) is a paid program for cutting back [[playReframe]]. Try Dry (4.7, 100K+) is free from a charity [[playTryDry]]. Sober Girl, which we make, launched on Google Play in October 2026 as a private tracker for women [[playSoberGirl]]. All figures are from Google Play, read on 10 October 2026.',
    keywords: ['sobriety app android', 'sober tracker android', 'best sober app for android', 'sobriety counter android', 'quit drinking app android', 'sober app google play'],
    heroAlt: 'An Android phone showing a list of five sober app cards with star ratings',
    sections: [
      {
        id: 'disclosure',
        h2: 'Read this first',
        blocks: [
          {
            t: 'callout',
            kind: 'disclosure',
            title: 'Disclosure',
            x: `We make Sober Girl, one of the apps below. Figures come from each app’s US Google Play listing, read on ${CHECKED_ON}. We do not rate the apps ourselves. Store numbers change, so check before you install.`,
          },
        ],
      },
      {
        id: 'compared',
        h2: 'Five Android sober apps at a glance',
        blocks: [
          {
            t: 'table',
            caption: `US Google Play listings, read ${CHECKED_ON}. "Shared" and "collected" are the developer’s own Data safety declarations.`,
            head: ['App (name on Google Play)', 'Rating', 'Downloads', 'Data safety: shared', 'Data safety: collected'],
            rows: [
              ['I Am Sober', '4.7, about 143K reviews [[playIAmSober]]', '10M+ [[playIAmSober]]', 'May share some data types with third parties [[playIAmSober]]', 'Personal info, photos and videos, and others [[playIAmSober]]'],
              ['Sober Day Counter - Sunflower', '4.7, about 6.3K reviews [[playSunflower]]', '500K+ [[playSunflower]]', 'None [[playSunflower]]', 'None [[playSunflower]]'],
              ['Reframe: Cut Back on Alcohol', '4.5, about 5.9K reviews [[playReframe]]', '500K+ [[playReframe]]', 'None [[playReframe]]', 'Personal info, photos and videos, and others [[playReframe]]'],
              ['Try Dry: Dry January® & beyond', '4.7, about 4.3K reviews [[playTryDry]]', '100K+ [[playTryDry]]', 'None [[playTryDry]]', 'Personal info, financial info, and others [[playTryDry]]'],
              ['Drink Less: Alcohol Free Days (Sober Girl)', 'Too new for a rating [[playSoberGirl]]', '5+, launched October 2026 [[playSoberGirl]]', 'None [[playSoberGirl]]', 'Financial info and device or other IDs [[playSoberGirl]]'],
            ],
          },
          figure(
            'sobriety-app-android-card',
            'Chart of five Android sober apps by Google Play download band, from 100K+ to 10M+, with Sober Girl marked as new',
            'Android sober apps by Google Play downloads',
            `Google Play download bands, ${CHECKED_ON}.`,
          ),
        ],
      },
      {
        id: 'each',
        h2: 'What each one is for',
        blocks: [
          { t: 'h3', x: 'I Am Sober: the biggest community' },
          {
            t: 'p',
            x: 'The most downloaded of the five by a wide margin [[playIAmSober]]. A day tracker with a daily pledge, milestones and, with Sober Plus, groups [[asIAmSober]]. Pick it if you want other people around.',
          },
          { t: 'h3', x: 'Sunflower: AI sponsor, minimal data' },
          {
            t: 'p',
            x: 'A sunflower for every sober day, guided exercises and an AI sponsor [[asSunflower]]. Its Google Play Data safety section says it collects no data and shares none [[playSunflower]].',
          },
          { t: 'h3', x: 'Reframe: a paid course for cutting back' },
          {
            t: 'p',
            x: 'The Android name says it: "Cut Back on Alcohol" [[playReframe]]. A 160-day program with optional coaching, on subscription after a 7-day trial [[asReframe]].',
          },
          { t: 'h3', x: 'Try Dry: free, from a charity' },
          {
            t: 'p',
            x: 'A drinking diary with units, calories, money and goals, published by Alcohol Change UK and free [[playTryDry]] [[asTryDry]]. Good for cutting down or a month off.',
          },
          { t: 'h3', x: 'Sober Girl: quiet and private, for women' },
          {
            t: 'p',
            x: 'Our app. A day counter with hours, weeks and money saved, a one-tap daily check-in, a Craving SOS with a breathing exercise and a 10-minute timer, nine milestone badges and a tree that grows with your streak. No account and no feed. It is listed on Google Play as "Drink Less: Alcohol Free Days" [[playSoberGirl]], which is why you may not find it by searching "Sober Girl".',
          },
        ],
      },
      {
        id: 'check',
        h2: 'How to check an Android app before you install it',
        blocks: [
          {
            t: 'ol',
            items: [
              '**Scroll to Data safety** on the listing. It shows whether data is shared with third parties, what is collected, and whether you can ask for it to be deleted.',
              '**Tap "See details"** for the data types. "Collected" can mean purchase records for a subscription, not your diary.',
              '**Look at "In-app purchases".** It tells you the app has something to sell, not what or how much. Open the app’s paywall before the trial starts.',
              '**Check the developer name** under the title, and search it. On Android, two apps can have similar names.',
              '**Remember that uninstalling does not cancel a subscription.** Google Play says so explicitly [[playCancel]].',
            ],
          },
        ],
      },
    ],
    faqs: [
      { q: 'What is the best sobriety app for Android?', a: 'I Am Sober has the most users on Google Play. Try Dry is free from a charity, Sunflower says it collects no data, Reframe is a paid program for cutting back, and Sober Girl is a private tracker for women. Pick by what you need.' },
      { q: 'Is there a free sober tracker on Android?', a: 'Yes. Try Dry is free. I Am Sober, Sunflower and Sober Girl have free trackers with optional paid features.' },
      { q: 'Why can I not find Sober Girl on Google Play?', a: 'It is listed as "Drink Less: Alcohol Free Days", published under package com.sobergirl.app. The link on this page goes straight to it.' },
      { q: 'Is Sober Girl on iPhone?', a: 'Not yet. The iPhone version is coming soon. It is on Android now.' },
      { q: 'Do Android sober apps work offline?', a: 'Day counters generally work offline because the count is based on your start date. Sober Girl stores your streak and journal on the phone, so it works without a connection.' },
    ],
    related: ['best-sober-tracker-apps', 'private-sobriety-tracker', 'free-sobriety-tracker-app'],
    shots: [
      { file: 'home', alt: 'Sober Girl Android home screen with a sober days counter, money saved and a check-in button', title: 'Sober Girl on Android', caption: 'Sober Girl home screen. Example data.' },
      { file: 'sos', alt: 'Sober Girl craving SOS screen with a breathing circle and a 10-minute timer', title: 'Craving SOS', caption: 'One tap to a guided breath and a 10-minute timer. Example data.' },
    ],
  }),

  /* ------------------------------------------------------------------ Free */
  page({
    slug: 'free-sobriety-tracker-app',
    kicker: 'Comparison',
    metaTitle: 'Free Sobriety Tracker Apps: What Is Actually Free (2026)',
    metaDescription:
      'Which sobriety tracker apps are free, and what each puts behind a paywall. Taken from store listings, with how to avoid being charged after a free trial.',
    h1: 'Free sobriety tracker apps: what is actually free',
    dek: '“Free” on an app store usually means free to download. Here is what each sober tracker lets you do without paying, from its own listing.',
    quickAnswer:
      'Only one popular sober app is free with nothing to buy: Try Dry, which lists no upfront costs, no hidden costs and no ads [[asTryDry]]. I Am Sober’s day tracker is free, with Sober Plus for groups, a Face ID lock and cloud backup [[asIAmSober]]. Sunflower is free to download, but unlimited AI sponsor messages need a subscription [[asSunflower]]. Reframe is a subscription after a 7-day trial [[asReframe]]. Sober Girl’s counter, money saved, check-in, Craving SOS, milestones and tree are free; Plus adds the journal, insights and cards.',
    keywords: ['free sobriety tracker app', 'free sober tracker app', 'free quit drinking app', 'free sobriety app', 'free sober counter app', 'sobriety app no subscription'],
    heroAlt: 'A free tag tied to a day counter, with a small padlock on a separate premium card',
    sections: [
      {
        id: 'compared',
        h2: 'What each app gives you for free',
        blocks: [
          {
            t: 'table',
            caption: `From US store listings, read ${CHECKED_ON}. Sober Girl from our own app.`,
            head: ['App', 'Free', 'Paid'],
            rows: [
              ['Try Dry', 'Everything: tracking units, calories and money, goals, badges, insights, reminders [[asTryDry]]', 'Nothing listed [[asTryDry]]'],
              ['I Am Sober', 'Day tracker, pledge, money and time saved, milestones, journaling [[asIAmSober]]', 'Sober Plus: groups, Face ID lock, cloud backup, more habits; from $9.99 a month [[asIAmSober]]'],
              ['Sunflower', 'Day counter, sunflowers, milestones, exercises [[asSunflower]]', 'Subscriptions including $8.95 monthly; needed for unlimited AI sponsor messages [[asSunflower]]'],
              ['Reframe', 'A 7-day free trial [[asReframe]]', 'Reframe Access $13.99 a month or $79.99 a year, other plans up to $119.99 [[asReframe]]'],
              ['Sober Girl', 'Day counter, money saved, daily check-in, Craving SOS, milestone badges, the tree, reminders, data export', 'Plus: private journal, mood insights, shareable milestone cards. Price shown in the app'],
            ],
          },
          figure(
            'free-sobriety-tracker-app-card',
            'Diagram showing how much of each sober app is free, from fully free Try Dry to trial-only Reframe',
            'How much of each sober app is free',
            `What each app lets you do without paying, from the listings, ${CHECKED_ON}.`,
          ),
        ],
      },
      {
        id: 'enough',
        h2: 'Is the free version enough?',
        blocks: [
          {
            t: 'p',
            x: 'For most people starting out, yes. What makes a tracker useful is a clear count, money saved and something to do when a craving hits. All of the trackers above give you a counter for free, and Try Dry gives you everything [[asTryDry]]. Paid tiers add things that are nice but not essential: community features, backups, journals, AI chat or lessons.',
          },
          {
            t: 'p',
            x: 'One useful test: use the free version for a week before you look at an upgrade. If you have not missed the paid feature by then, you probably do not need it.',
          },
        ],
      },
      {
        id: 'trial',
        h2: 'How not to be charged after a free trial',
        blocks: [
          {
            t: 'ol',
            items: [
              '**Read the plan before you tap Start.** Look for the price after the trial, and whether it is monthly or yearly.',
              '**Put a reminder in your calendar** a day before the trial ends.',
              '**Cancel in the store, not in the app.** On Android, open your subscriptions in Google Play and tap Cancel subscription [[playCancel]]. On iPhone, cancel in Settings under your Apple Account [[appleCancel]].',
              '**Do not rely on deleting the app.** Google Play says uninstalling does not cancel a subscription [[playCancel]].',
            ],
          },
        ],
      },
    ],
    faqs: [
      { q: 'What is the best free sobriety app?', a: 'Try Dry is the only one fully free with no in-app purchases listed. For a free day counter with optional extras, I Am Sober and Sober Girl both offer their core tracker free.' },
      { q: 'Is I Am Sober free?', a: 'The tracker is free. Sober Plus, which adds groups, a Face ID lock and cloud backup, is listed from $9.99 a month on the US App Store.' },
      { q: 'Is Sober Girl free?', a: 'Yes. The day counter, money saved, check-in, Craving SOS, milestones and tree are free. Plus adds the journal, insights and milestone cards.' },
      { q: 'Is there a sobriety app with no ads?', a: 'Try Dry’s listing says it has no ads. Sober Girl has no ads either.' },
      { q: 'Does deleting an app cancel the subscription?', a: 'No. Google Play says uninstalling does not cancel a subscription. Cancel in the store.' },
    ],
    related: ['sobriety-app-android', 'reframe-app-cost', 'best-sober-tracker-apps'],
    shots: [
      { file: 'home', alt: 'Sober Girl free home screen with sober days, money saved and a daily check-in', title: 'Free in Sober Girl', caption: 'The counter, money saved and check-in are free. Example data.' },
      { file: 'benefits', alt: 'Sober Girl screen listing free features and what Plus adds', title: 'Free and Plus', caption: 'What is free and what Plus adds. Example data.' },
    ],
  }),

  /* ------------------------------------------------------------------ Private */
  page({
    slug: 'private-sobriety-tracker',
    kicker: 'Guide',
    metaTitle: 'Private Sobriety Tracker: Apps and Their Privacy Labels',
    metaDescription:
      'What “private” means for a sobriety app, how to read App Store privacy labels and Google Play Data safety, and what five sober apps declare. Dated and sourced.',
    h1: 'Private sobriety tracker apps: what the privacy labels say',
    dek: 'Sobriety is personal. Here is how to read an app’s privacy labels, and what five sober trackers declare about your data, in their own words.',
    quickAnswer:
      'A private sobriety tracker is one that collects as little as possible and keeps your streak and notes on your phone. Store labels are the quickest check. Sunflower’s Google Play label says it collects no data and shares none [[playSunflower]]. I Am Sober’s App Store label lists contact info, user content, identifiers, usage data and diagnostics linked to you [[asIAmSober]]. Reframe’s lists identifiers used to track you [[asReframe]]. Sober Girl keeps your streak, reason and journal on your phone with no account; its Google Play label lists financial info and device IDs collected, and nothing shared [[playSoberGirl]].',
    keywords: ['private sobriety tracker', 'private sobriety app', 'sobriety app privacy', 'anonymous sober tracker', 'sobriety app without account', 'sober app no sign up'],
    heroAlt: 'A phone with a small padlock and a sprout growing inside it',
    sections: [
      {
        id: 'labels',
        h2: 'What five sober apps declare',
        blocks: [
          {
            t: 'table',
            caption: `Developers’ own declarations on the US App Store and Google Play, read ${CHECKED_ON}. Not verified by Apple or Google.`,
            head: ['App', 'App Store privacy label', 'Google Play Data safety'],
            rows: [
              ['I Am Sober', 'Data linked to you: contact info, user content, identifiers, usage data, diagnostics [[asIAmSober]]', 'May share some data types with third parties; collects personal info, photos and videos and others; deletion can be requested [[playIAmSober]]'],
              ['Reframe', 'Data used to track you: identifiers [[asReframe]]', 'No data shared; collects personal info, photos and videos and others; deletion can be requested [[playReframe]]'],
              ['Sunflower', 'Data used to track you: usage data [[asSunflower]]', 'No data shared and no data collected [[playSunflower]]'],
              ['Try Dry', 'Data linked to you: contact info (physical address) [[asTryDry]]', 'No data shared; collects personal info, financial info and others; deletion can be requested [[playTryDry]]'],
              ['Sober Girl', 'Not on the App Store yet', 'No data shared; collects financial info and device or other IDs; data cannot be deleted on request [[playSoberGirl]]'],
            ],
          },
          figure(
            'private-sobriety-tracker-card',
            'Grid of five sober apps showing whether each Google Play label declares data shared and data collected',
            'Sober app privacy declarations',
            `Google Play Data safety declarations, ${CHECKED_ON}.`,
          ),
        ],
      },
      {
        id: 'read',
        h2: 'How to read the labels',
        blocks: [
          {
            t: 'ul',
            items: [
              '**"Used to track you"** (App Store) means data is linked with other companies’ data for advertising or shared with data brokers. It is the strongest flag.',
              '**"Linked to you"** means the data is tied to your identity, such as an account or email.',
              '**"Shared"** (Google Play) means passed to a third party. **"Collected"** means sent off your device to the developer.',
              '**Labels are declarations.** Apple and Google say the developer provides them. They are a starting point, not an audit.',
            ],
          },
        ],
      },
      {
        id: 'sobergirl',
        h2: 'What Sober Girl keeps, and where',
        blocks: [
          {
            t: 'p',
            x: 'Sober Girl has no account and no sign-up. Your start date, weekly spend, reason, check-ins and journal are stored on your phone. Subscriptions for Plus go through Google Play and RevenueCat, which is why our Data safety label lists financial info and device or other IDs [[playSoberGirl]], as our [privacy policy](/sobergirl/privacy-policy) explains.',
          },
          {
            t: 'p',
            x: 'The label also says that data cannot be deleted on request [[playSoberGirl]]. Your own records are on your phone, so deleting the app removes them; there is no copy on our side to delete. The trade-off is that there is no cloud backup either. Settings has a free "Export my data" option that saves your journey and journal as a file you can keep wherever you like.',
          },
        ],
      },
      {
        id: 'habits',
        h2: 'Privacy habits that matter more than the app',
        blocks: [
          {
            t: 'ul',
            items: [
              'Use a screen lock. An app on an unlocked phone is not private, whatever its label says.',
              'Turn off notification previews on the lock screen if you share a space.',
              'Think before you post a milestone card publicly. You can always save it just for yourself.',
              'If you use a family-shared Google or Apple account, check what purchases show up for others.',
            ],
          },
        ],
      },
    ],
    faqs: [
      { q: 'What is the most private sobriety app?', a: 'By the labels: Sunflower’s Google Play label says no data collected or shared. Sober Girl stores your streak and journal on your phone with no account. Read each app’s current label, since they can change.' },
      { q: 'Do I need an account to use Sober Girl?', a: 'No. There is no sign-up. Your data stays on your phone.' },
      { q: 'Can a sobriety app share my data with advertisers?', a: 'Some declare data "used to track you" on the App Store, which covers advertising use. Check the label before you install.' },
      { q: 'How do I back up a private sober app?', a: 'In Sober Girl, use "Export my data" in Settings to save a file. Without an account, there is no automatic cloud backup.' },
    ],
    related: ['sober-girl-app', 'sobriety-app-android', 'sobriety-app-with-journal'],
    shots: [
      { file: 'private', alt: 'Sober Girl privacy screen saying your journal and streak stay on your phone and are never shared', title: 'Private by design', caption: 'Your streak and journal stay on your phone. Example data.' },
      { file: 'journal', alt: 'Sober Girl private journal with short entries and mood faces', title: 'Private journal (Plus)', caption: 'Journal entries stay on the device. Example data.' },
    ],
  }),

  /* ------------------------------------------------------------------ Money calculator */
  page({
    slug: 'money-saved-not-drinking-calculator',
    kicker: 'Tool',
    metaTitle: 'Money Saved Not Drinking Calculator: Free, No Sign-Up',
    metaDescription:
      'Free calculator: how much money you save by not drinking, by week, month and year. Enter your weekly spend. Runs in your browser and stores nothing.',
    h1: 'Money saved not drinking calculator',
    dek: 'Enter what you used to spend on alcohol in a typical week to see what you save after a week, a month, three months, six months and a year.',
    quickAnswer:
      'Money saved by not drinking is your old weekly spend divided by 7, times the days you have not drunk. At $50 a week that is about $214 after 30 days, $643 after 90 days and $2,607 after a year. Saving money is the most common benefit people report: in a 2019 evaluation of Dry January, 86% of participants said they saved money [[acuk]]. The calculator below does the sum for you and stores nothing.',
    keywords: ['money saved not drinking calculator', 'how much money will i save if i stop drinking', 'alcohol money saved calculator', 'quit drinking savings calculator', 'sober savings calculator', 'money saved quitting alcohol'],
    heroAlt: 'A jar filling with coins as a day counter rises beside it',
    metaNote: 'Arithmetic tool',
    sections: [
      {
        id: 'calculator',
        h2: 'Work out your savings',
        blocks: [
          { t: 'p', x: 'Use an honest weekly average, including drinks out, takeaway with wine, and rounds you bought. Use your own currency.' },
          { t: 'calc' },
        ],
      },
      {
        id: 'table',
        h2: 'Savings at common weekly spends',
        blocks: [
          {
            t: 'table',
            caption: 'Weekly spend ÷ 7 × days, rounded to the nearest dollar. Works the same in any currency.',
            head: ['Weekly spend', '30 days', '90 days', '6 months (182 days)', '1 year'],
            rows: [
              ['$20', '$86', '$257', '$520', '$1,043'],
              ['$40', '$171', '$514', '$1,040', '$2,086'],
              ['$60', '$257', '$771', '$1,560', '$3,129'],
              ['$80', '$343', '$1,029', '$2,080', '$4,171'],
              ['$100', '$429', '$1,286', '$2,600', '$5,214'],
              ['$150', '$643', '$1,929', '$3,900', '$7,821'],
            ],
          },
          figure(
            'money-saved-not-drinking-calculator-card',
            'Line chart of money saved over a year without alcohol at $20, $60 and $100 a week',
            'Money saved over a year without alcohol',
            'Savings grow in a straight line: the same amount every week.',
            1200,
            600,
          ),
        ],
      },
      {
        id: 'estimate',
        h2: 'How to estimate your old weekly spend',
        blocks: [
          {
            t: 'ol',
            items: [
              '**Look at two ordinary weeks of bank statements.** Shops, bars, delivery apps. Ordinary weeks, not birthdays.',
              '**Add the drinks you bought for others,** if buying rounds was part of it.',
              '**Add the knock-on spending if you like:** taxis home, late-night food, the next-day coffee and breakfast. Leave it out if you want a cautious figure.',
              '**Pick the lower number if unsure.** It is more satisfying to beat an estimate than to fall short of one.',
            ],
          },
          {
            t: 'p',
            x: 'Money is only one of the numbers. Our [sobriety calculator](/sobergirl/sobriety-calculator) shows days, weeks and your next milestone from your start date.',
          },
        ],
      },
      {
        id: 'app',
        h2: 'How Sober Girl counts it',
        blocks: [
          {
            t: 'p',
            x: 'In Sober Girl you enter your weekly drink spend once, in one of 17 currencies, and the home screen keeps a running total that grows continuously, not just once a day. You can change the amount any time in Settings under "Weekly drink spend", and the total recalculates from your start date.',
          },
        ],
      },
      {
        id: 'spend',
        h2: 'What to do with the money',
        blocks: [
          {
            t: 'ul',
            items: [
              '**Move it.** Transfer the weekly amount to a separate savings pot each week, so the number on screen becomes real.',
              '**Name a goal.** A trip, a course, a piece of furniture. Goals with a name are easier to protect.',
              '**Spend some at milestones.** A small treat at a week, something bigger at 30 and 90 days.',
              '**Give some away,** if that matters to you. Several month-off challenges raise money for cancer charities; see [Dry July](/sobergirl/dry-july) and [Dry February](/sobergirl/dry-february).',
            ],
          },
        ],
      },
    ],
    faqs: [
      { q: 'How much money will I save if I stop drinking?', a: 'Your weekly spend divided by 7, times the days you do not drink. At $50 a week, about $214 a month and $2,607 a year.' },
      { q: 'Does the calculator store what I enter?', a: 'No. It runs in your browser and nothing is saved or sent.' },
      { q: 'How much does the average person spend on alcohol?', a: 'We have not found a recent source we trust for a single average, and it varies widely. Use your own bank statements for the most useful number.' },
      { q: 'Can Sober Girl track money saved in my currency?', a: 'Yes. It supports 17 currencies, including US, Canadian and Australian dollars, pounds, euros and rupees.' },
      { q: 'Do people really save money when they stop drinking?', a: 'It is the most commonly reported benefit. In a 2019 Dry January evaluation, 86% of participants said they saved money.' },
    ],
    related: ['sobriety-calculator', '30-days-sober', 'alcohol-free-days'],
    shots: [
      { file: 'home', alt: 'Sober Girl home screen showing money saved alongside days sober', title: 'Money saved in Sober Girl', caption: 'Money saved grows on the home screen as the hours pass. Example data.' },
    ],
  }),

  /* ------------------------------------------------------------------ Journal */
  page({
    slug: 'sobriety-app-with-journal',
    kicker: 'Guide',
    metaTitle: 'Sobriety App With a Journal: What to Look For (2026)',
    metaDescription:
      'Sober tracker apps with a built-in journal: which ones have one, how private the entries are, and how to keep a short daily sobriety journal you will stick with.',
    h1: 'Sobriety apps with a journal: what to look for',
    dek: 'A journal turns a day count into a record of what actually happened. Here is which sober apps include one, and how to keep a journal that lasts longer than a week.',
    quickAnswer:
      'Several sober trackers include a journal. I Am Sober lists journaling and story sharing [[asIAmSober]]. Sunflower offers journaling prompts alongside its exercises [[asSunflower]]. Sober Girl’s private journal, part of Plus, keeps short notes of up to 140 characters with a mood, stored on your phone, and each entry adds a blossom to your tree. A short daily line tends to be easier to keep than a long entry. For prompts, see our 30 sober journal prompts.',
    keywords: ['sobriety app with journal', 'sobriety journal app', 'sober journal app', 'recovery journal app', 'sobriety diary app', 'private journal sobriety'],
    heroAlt: 'An open notebook with a short handwritten line and a small blossom beside it',
    sections: [
      {
        id: 'which',
        h2: 'Which sober apps have a journal',
        blocks: [
          {
            t: 'table',
            caption: `From store listings, read ${CHECKED_ON}. Sober Girl from our own app.`,
            head: ['App', 'Journal', 'Where it is stored'],
            rows: [
              ['I Am Sober', 'Journaling and story sharing [[asIAmSober]]', 'Cloud backup with Sober Plus [[asIAmSober]]'],
              ['Sunflower', 'Journaling prompts with guided exercises [[asSunflower]]', 'Google Play label says no data collected [[playSunflower]]'],
              ['Reframe', 'Not described as a journal; progress tracking within the program [[asReframe]]', 'Not stated on the listing'],
              ['Try Dry', 'Drinking diary with goals and insights, rather than free text [[asTryDry]]', 'Not stated on the listing'],
              ['Sober Girl', 'Private journal (Plus): short notes up to 140 characters, with a mood', 'On your phone only. Free export from Settings'],
            ],
          },
          figure(
            'sobriety-app-with-journal-card',
            'Illustration of a short journal entry in Sober Girl turning into a blossom on the tree',
            'Journal entries become blossoms',
            'In Sober Girl, each journal entry adds a blossom to your tree.',
          ),
        ],
      },
      {
        id: 'why-short',
        h2: 'Why a short journal is easier to keep',
        blocks: [
          {
            t: 'p',
            x: 'Most journals stop in the first fortnight because each entry feels like homework. A single line is different: it takes less than a minute, so it survives tired evenings. Over a month, thirty short lines show patterns that a few long entries miss, such as which days are hardest or what you were doing before a craving.',
          },
          {
            t: 'p',
            x: 'Sober Girl’s journal is deliberately short for that reason. Each note holds up to 140 characters and a mood, and the Plus insights screen shows your moods and check-ins over time. If you want to write more, a paper notebook alongside the app works well.',
          },
        ],
      },
      {
        id: 'what',
        h2: 'What to write, in one line',
        blocks: [
          {
            t: 'ul',
            items: [
              '**The hardest moment today, and what got you past it.**',
              '**One thing that was better than it would have been after drinking.**',
              '**What you are looking forward to tomorrow.**',
              '**A craving, rated out of ten, and where you were.**',
            ],
          },
          {
            t: 'p',
            x: 'Our [sober journal prompts](/sobergirl/sober-journal-prompts) has 30 more, grouped by moment, and each [milestone page](/sobergirl/30-days-sober) has three prompts for that stage.',
          },
        ],
      },
      {
        id: 'private',
        h2: 'Keeping it private',
        blocks: [
          {
            t: 'p',
            x: 'A sobriety journal can hold things you would not tell anyone. Before you start, check where the app stores entries. In Sober Girl they never leave your phone unless you export them yourself. In apps with cloud backup, such as I Am Sober with Sober Plus [[asIAmSober]], entries are copied off your phone, which protects them if you lose it but means a copy exists elsewhere. Our [private sobriety tracker](/sobergirl/private-sobriety-tracker) page compares the labels.',
          },
        ],
      },
    ],
    faqs: [
      { q: 'Is there a sobriety app with a journal?', a: 'Yes. I Am Sober lists journaling, Sunflower has journaling prompts, and Sober Girl has a private journal in Plus.' },
      { q: 'Is the Sober Girl journal free?', a: 'The journal is part of Plus. The day counter, money saved, check-in, Craving SOS, milestones and tree are free.' },
      { q: 'Where are Sober Girl journal entries stored?', a: 'On your phone only. They are not synced or shared. You can export them to a file from Settings.' },
      { q: 'How long should a sobriety journal entry be?', a: 'As short as you will keep doing. A single line a day is enough to spot patterns over a month.' },
    ],
    related: ['sober-journal-prompts', 'private-sobriety-tracker', 'sober-girl-app'],
    shots: [
      { file: 'journal', alt: 'Sober Girl journal screen with short private entries, each with a mood face', title: 'Sober Girl journal', caption: 'Short private notes with a mood. Plus. Example data.' },
      { file: 'tree', alt: 'Sober Girl tree with blossoms added by journal entries', title: 'Journal blossoms', caption: 'Each entry adds a blossom to your tree. Example data.' },
    ],
  }),

  /* ------------------------------------------------------------------ Counting days */
  page({
    slug: 'how-to-count-sober-days',
    kicker: 'Guide',
    metaTitle: 'How to Count Sober Days: When Day 1 Starts, and Slips',
    metaDescription:
      'How to count sober days: whether day one is the day of your last drink or the day after, how apps count, what to do after a slip, and a free calculator.',
    h1: 'How to count sober days',
    dek: 'Does day one start the morning after your last drink? What if you slip? Here are the common conventions, how Sober Girl counts, and a calculator.',
    quickAnswer:
      'Most people count sober days from the first full day without a drink, so if your last drink was on Friday evening, Saturday is day one. Twelve-step groups often mark 24 hours, then 30, 60 and 90 days and a year [[coinWiki]]. Sober Girl counts from midnight at the start of the date you pick, or from the moment you set it if you pick today, and a day is a full 24 hours. After a slip, you can restart the count or keep a separate tally of alcohol-free days. Neither erases what you have done.',
    keywords: ['how to count sober days', 'how to count days sober', 'when does day 1 of sobriety start', 'sober date', 'days sober count', 'how do you count sobriety'],
    heroAlt: 'A timeline from a last drink to midnight, then day one, day two and day three ticks',
    sections: [
      {
        id: 'day-one',
        h2: 'When does day one start?',
        blocks: [
          {
            t: 'p',
            x: 'There is no official rule. The two common conventions are:',
          },
          {
            t: 'ul',
            items: [
              '**From the morning after your last drink.** If you last drank on Friday night, Saturday is day one. This is the most common way people count, and it means your sober date is the first whole day without alcohol.',
              '**From the moment of your last drink.** Counting hours from your last drink. Day one ends 24 hours later.',
            ],
          },
          {
            t: 'p',
            x: 'Either is fine if you stick with it. What matters is that the number means the same thing to you every day.',
          },
          figure(
            'how-to-count-sober-days-card',
            'Timeline showing a last drink on Friday evening, midnight, and Saturday as day one, with the count ticking up each 24 hours',
            'How a sober date becomes a day count',
            'The common convention: your sober date is the first full day without a drink.',
            1200,
            500,
          ),
        ],
      },
      {
        id: 'app',
        h2: 'How Sober Girl counts',
        blocks: [
          {
            t: 'ol',
            items: [
              '**You pick your sober date** during setup, or later in Settings under "Sober since".',
              '**If you pick a past date,** the count starts at midnight at the beginning of that day.',
              '**If you pick today,** the count starts from the moment you set it, so the app never claims hours you have not had.',
              '**A day is a full 24 hours.** The home screen also shows hours and weeks, so the first days do not read as zero.',
              '**Badges unlock at 1, 3, 7, 14, 30, 60, 90, 180 and 365 days.**',
            ],
          },
        ],
      },
      {
        id: 'calc',
        h2: 'Count yours now',
        blocks: [
          { t: 'p', x: 'Enter the date of your last drink. The calculator runs in your browser and stores nothing.' },
          { t: 'sobcalc' },
        ],
      },
      {
        id: 'slip',
        h2: 'What to do after a slip',
        blocks: [
          {
            t: 'p',
            x: 'This is the part people find hardest. Three common approaches:',
          },
          {
            t: 'ul',
            items: [
              '**Restart the count.** Set a new sober date. This is what twelve-step groups traditionally do, and what most streak counters expect. In Sober Girl, change "Sober since" in Settings. Your journal stays.',
              '**Keep the count and log the slip.** Some people prefer a running total of alcohol-free days, which a slip only pauses. A drinking diary such as Try Dry works this way [[asTryDry]], and our [alcohol-free days](/sobergirl/alcohol-free-days) guide explains how to track it.',
              '**Do both.** A streak for motivation, and a total for perspective.',
            ],
          },
          {
            t: 'p',
            x: 'Research on recovery treats it as a process rather than a single unbroken line: NIAAA’s definitions describe stages of remission over months and years [[niaaaRecovery]]. A slip does not undo what you learned. If slips keep happening, or you cannot stop once you start, that is worth telling a doctor about.',
          },
        ],
      },
      {
        id: 'chips',
        h2: 'Counting in twelve-step groups',
        blocks: [
          {
            t: 'p',
            x: 'In AA and similar groups, coins or chips often mark 24 hours, 30, 60 and 90 days, then a year and each year after. There is no official AA coin, the system is optional, and colours and intervals vary by group [[coinWiki]]. If you are in a group, use its convention so your date matches.',
          },
        ],
      },
    ],
    faqs: [
      { q: 'Is the day of my last drink day one or day zero?', a: 'Most people treat it as day zero and count the next full day as day one. Some count hours from the last drink instead. Pick one and stick to it.' },
      { q: 'How does Sober Girl count days?', a: 'From midnight at the start of the date you choose, or from the moment you set it if you choose today. Each full 24 hours is a day.' },
      { q: 'Do I have to restart my count after a slip?', a: 'It is your choice. Many people restart; others keep a running total of alcohol-free days. Both are valid.' },
      { q: 'How do I change my sober date in Sober Girl?', a: 'Go to Settings and tap "Sober since". The counter, money saved and milestones update from the new date.' },
      { q: 'How many days is 3 months sober?', a: 'About 90 days, which is why apps and many groups use 90 as the three-month milestone.' },
    ],
    related: ['sobriety-counter', 'lapse-vs-relapse', 'sobriety-calculator'],
    shots: [
      { file: 'home', alt: 'Sober Girl home screen with days, hours and weeks sober from the chosen sober date', title: 'Your count in Sober Girl', caption: 'Days, hours and weeks from your sober date. Example data.' },
      { file: 'milestones', alt: 'Sober Girl milestones from 1 to 365 days with locked and unlocked badges', title: 'Milestones', caption: 'Badges at 1, 3, 7, 14, 30, 60, 90, 180 and 365 days. Example data.' },
    ],
  }),

  /* ------------------------------------------------------------------ Sober mom */
  page({
    slug: 'sober-mom',
    kicker: 'Guide',
    metaTitle: 'Sober Mom: Quitting or Cutting Back on Drinking as a Parent',
    metaDescription:
      'A practical guide for moms who want to drink less or stop: the evening wine habit, kids’ parties, what NIAAA says about women and alcohol, and where to get help.',
    h1: 'Sober mom: drinking less or stopping as a parent',
    dek: 'Wine after bedtime, a glass at the playdate, a drink to get through the evening. If you want to change that, here is a practical plan, with the facts behind it.',
    quickAnswer:
      'For many moms who want to drink less, the drink is tied to the hardest times of day: after bedtime, at playdates, at the end of the shift. NIAAA says alcohol use among women is increasing, that women reach higher blood alcohol levels than men of the same weight, and that even one drink a day raises breast cancer risk by 5% to 15% [[niaaaWomen]]. The most useful changes are practical: a new end-of-day ritual, a drink you like in your hand at parties, and a way to see your progress. If you drink heavily, speak to a doctor before you stop.',
    keywords: ['sober mom', 'sober moms', 'sober mom life', 'mom quit drinking', 'moms who stopped drinking', 'mommy wine culture'],
    heroAlt: 'A mug of tea on a kitchen table at night beside a small growing plant and a child’s drawing',
    sections: [
      {
        id: 'safety',
        h2: 'Safety first',
        blocks: [{ t: 'callout', kind: 'safety', title: 'If you drink heavily, speak to a doctor before you stop', x: SAFETY_WITHDRAWAL }],
      },
      {
        id: 'facts',
        h2: 'What NIAAA says about women and alcohol',
        blocks: [
          {
            t: 'p',
            x: 'NIAAA’s fact sheet on women and alcohol, updated in December 2025, makes three points that matter here [[niaaaWomen]]. Alcohol use and misuse among women are increasing. Women have less water in their bodies than men pound for pound, so the same drink produces a higher blood alcohol level. And even one drink a day can raise a woman’s breast cancer risk by 5% to 15% compared with not drinking.',
          },
          {
            t: 'p',
            x: 'It also says there is no known safe amount of alcohol during pregnancy, or for women who might become pregnant [[niaaaWomen]]. For a plain explanation of what counts as a standard drink and where the limits are, see [how much alcohol is too much for women](/sobergirl/how-much-alcohol-is-too-much-for-women).',
          },
        ],
      },
      {
        id: 'evening',
        h2: 'The evening glass: replacing the ritual',
        blocks: [
          {
            t: 'p',
            x: 'For many parents the drink is not really about alcohol. It marks the end of the shift: the children are down, the kitchen is quiet, and the glass says "this time is mine". If you take the drink away and leave a gap, the gap pulls hard. Replace the ritual instead.',
          },
          {
            t: 'ul',
            items: [
              '**Keep the moment, change the drink.** A good glass, something cold or warm that you like, the same chair.',
              '**Mark the end of the day another way.** A shower, a walk round the block, ten minutes with a book before anything else.',
              '**Move the wine.** NIAAA suggests keeping little or no alcohol at home as a way to cope with urges [[niaaaUrges]]. Out of sight helps.',
              '**Plan the hardest night of the week.** For many it is Friday. Have something to look forward to that evening.',
            ],
          },
          {
            t: 'p',
            x: 'Our guide on [how to stop drinking wine every night](/sobergirl/how-to-stop-drinking-wine-every-night) has a step-by-step plan.',
          },
        ],
      },
      {
        id: 'social',
        h2: 'Playdates, kids’ parties and other parents',
        blocks: [
          {
            t: 'ul',
            items: [
              '**Bring your own drink.** Holding something removes most questions.',
              '**Have one line ready.** "I am not drinking at the moment" is enough. You do not owe anyone a reason.',
              '**Find one other parent.** Saying it to one person who gets it makes the next party easier.',
              '**Leave when you want to.** You have the perfect excuse: someone needs to go to bed.',
            ],
          },
        ],
      },
      {
        id: 'track',
        h2: 'Seeing your progress',
        blocks: [
          {
            t: 'p',
            x: 'Busy parents do not have time for a complicated app. What helps is a number you can glance at, a daily check-in that takes seconds, and something for the moment a craving hits. That is what we built Sober Girl to do: a day counter, money saved, a mood check-in and a Craving SOS with a breathing exercise and a 10-minute timer, with your streak and journal kept private on your phone.',
          },
          figure(
            'sober-mom-card',
            'Illustration of an evening routine: bedtime, a mug of tea, a quick check-in on the phone and a growing tree',
            'An alcohol-free evening routine',
            'Replace the ritual, not just the drink.',
          ),
        ],
      },
      {
        id: 'help',
        h2: 'When to get more help',
        blocks: [
          {
            t: 'p',
            x: 'If you are drinking to cope with low mood or anxiety, or you cannot stop once you start, you deserve more than an app. The NIAAA Alcohol Treatment Navigator helps adults find evidence-based care [[navigator]], and the SAMHSA National Helpline (1-800-662-4357) is free, confidential and open 24/7 [[samhsa]]. Women for Sobriety runs peer support groups specifically for women [[wfs]].',
          },
        ],
      },
    ],
    faqs: [
      { q: 'How do I stop drinking wine every night as a mom?', a: 'Replace the end-of-day ritual rather than just removing the wine: a drink you enjoy in the same glass and chair, a different way to mark the end of the day, and less alcohol in the house.' },
      { q: 'Is a glass of wine a night too much for a woman?', a: 'It depends on the size of the glass and your health. NIAAA says even one drink a day raises breast cancer risk by 5% to 15% for women. See our guide to how much alcohol is too much for women.' },
      { q: 'Are there support groups for sober moms?', a: 'Women for Sobriety runs peer support groups for women. Many twelve-step and online groups also have parents’ meetings.' },
      { q: 'What do I say at kids’ parties when I am not drinking?', a: 'A short line is enough: "I am not drinking at the moment." Holding your own drink removes most questions.' },
      { q: 'Is Sober Girl good for busy moms?', a: 'It is designed to take seconds a day: a glance at your count, a one-tap check-in, and a Craving SOS for hard moments. It is on Android now, with iPhone coming soon.' },
    ],
    related: ['how-to-stop-drinking-wine-every-night', 'sober-app-for-women', 'gray-area-drinking'],
    shots: [
      { file: 'home', alt: 'Sober Girl home screen with sober days, money saved and a one-tap check-in', title: 'A glance a day', caption: 'Your count, savings and check-in at a glance. Example data.' },
      { file: 'sos', alt: 'Sober Girl craving SOS with a breathing circle and 10-minute timer', title: 'Craving SOS', caption: 'For the 7pm moment: a breath, a timer and your reason. Example data.' },
    ],
  }),
];
