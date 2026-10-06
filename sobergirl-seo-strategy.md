# Sober Girl SEO keyword strategy (October 2026)

Data: DataForSEO (US / English), pulled 2026-10-06. **Spend: about $0.40 of the $2.00 cap.**
KD = DataForSEO keyword difficulty (not comparable to Ahrefs or Semrush). Volumes are US monthly.

## What the data says

1. **App-intent SERPs are owned by store listings.** For "sobriety tracker app", "quit drinking app", "sober days counter" and "sober app", the top 10 is mostly apps.apple.com, play.google.com, iamsober.com, SAMHSA and roundup lists. A landing page can rank here, but only on the lower-KD long tail. The App Store listing itself is the bigger prize for these terms (see ASO below).
2. **Small sites do rank.** sobertime.app (authority 150), fellowshiphall.com, c4tbh.org, healthify.nz and hshs.org all sit on page 1 for app queries, mostly with "best sober apps" list content.
3. **shipailab.com has the authority.** DataForSEO rank: shipailab.com 240, sober-tracker.com 214, fellowshiphall.com 215, c4tbh.org 239. Traffic today is about 0, so the gap is relevance and content, not domain strength.
4. **sober-tracker.com (the reference competitor)** has 716 ranking keywords and about 340 est. monthly visits. Its homepage ranks only #24 to #37 for "sobriety tracker", "sober app" and "sober streak". Its traffic comes from blog content: liver recovery, weight loss after quitting, "face before and after", day-by-day timelines, "sober curious". So it is beatable on the head terms and its blog is the playbook to copy.
5. **"Women" modifiers have no search volume** for the app: "sober app for women", "sobriety app for women", "sober girl app" and "sober girl society" returned null or 0. The women angle is positioning and conversion copy, not a keyword to chase. ("Sober living for women" has 1,900 searches but is housing intent, so ignore it.)

## Tier 1: target on the /sobergirl landing page

| Keyword | Volume | KD | Note |
|---|---|---|---|
| sobriety counter app | 1,000 | 32 | Competitor homepages already at #16 to #30 |
| sober days counter / days sober counter | 880 | 22 | Best volume-to-KD ratio. Page 1 is stores and Reddit |
| sobriety tracking app | 320 | 21 | |
| sobriety tracker apps | 260 | 24 | |
| quit drinking app | 590 | 16 | |
| app to quit drinking | 480 | 7 | |
| best quit drinking app / app to help quit drinking | 210 / 170 | 8 / 10 | Needs the comparison page below |
| free quit drinking app | 140 | 18 | The app is free to start, so use "free" in copy |
| days sober counter app / app to count days sober | 170 | 32 | |
| sober streak app | 1,000 | 50 | Stretch term |

Head terms ("sobriety app" 2,900 / KD 50, "sober tracker" 590 / KD 52, "sober app" 2,900 / KD 50) are long-term, not first-year targets.

## Tier 2: content that can win (low KD, informational)

| Topic | Keyword (volume, KD) | Why |
|---|---|---|
| Sobriety milestones | sobriety milestones (110, 0), sobriety coins (2,900, 39), sober for 1 year (590, 5), one year sober (480, 7) | Matches the app's milestone badges directly |
| Sober October | sober october / october sober (1,900 each, KD 5 to 8) | Timely right now |
| Dry January | dry january app (590, 21, spiking from 20 to 590 monthly), benefits of dry january (3,600, 13), what is dry january (2,900, 16) | Seasonal. Publish by early December |
| Sober curious | sober curious meaning (1,000, 8), what is sober curious (1,000, 14), sober curious app (30, 2) | sober-tracker ranks #88 to #93 here, so room to beat it |
| Gray area drinking | gray area drinking (140, 8), mindful drinking app (480, 29, CPC $7.39) | Fits a women, "choosing better" audience |
| Quit drinking benefits | benefits of quit drinking alcohol (3,600, 26), weight loss after quitting alcohol (1,600, 23), how to quit drinking alcohol on your own (720, 13) | Large, but competitors are strong |
| Tools | sobriety calendar (480, 42), sober calendar (320, 28) | Possible free calculator or printable |

Commercial value is high: CPCs for the app terms run $2.50 to $7.39, so these are valuable searches.

## Brand and competitor-brand terms (cheap wins)

sober-tracker.com gets traffic from "reframe app cost" (320, KD 0, #17), "is reframe app free" (320, KD 9, #21) and "i am sober app" (3,600, KD 21). Alternative or comparison pages can capture the same:
- "I Am Sober alternative", "Reframe app free alternative", "Sunflower Sober vs I Am Sober"
- "is I Am Sober free" (50), "i am sober app reviews" (70)

## Recommended pages to build next (in order)

1. `/sobergirl/best-sobriety-apps` : honest comparison of I Am Sober, Reframe, Sunflower, Sober Time, Sober Girl. Targets "best sobriety app", "best quit drinking app", "best sober app" (480 each, KD 43 / 8 to 10). This page type is what ranks for small sites right now.
2. `/sobergirl/sobriety-milestones` : milestone guide (1 week to 1 year), linking to the app's badges.
3. `/sobergirl/sober-october` and `/sobergirl/dry-january-app` : seasonal, publish before the spike.
4. `/sobergirl/sober-curious` : "what is sober curious" explainer.
5. `/sobergirl/i-am-sober-alternative` and `/sobergirl/reframe-alternative`.
6. A free "money saved not drinking" calculator (the app feature as a web tool, with a download CTA).

## Done in code (app/[locale]/sobergirl/page.tsx)

- New title: "Sober Girl: Sobriety Tracker & Sober Days Counter App". New description and keyword list built from Tier 1.
- MobileApplication and FAQPage JSON-LD. **No rating or review markup**, deliberately (see below).
- New Milestones section and a 7-question FAQ using the PAA-style questions, with answers taken only from what the app does.
- Hero copy, H2 and icon alt text now include "sobriety tracker" and "sober days counter".
- Sitemap already lists /sobergirl and its subpages. New pages above need adding to `app/sitemap.ts`.

## Outside the website (likely the biggest lever)

For these queries, App Store and Play Store listings rank above everything else. Put the Tier 1 terms into the App Store title, subtitle and keyword field (e.g. "Sober Girl: Sobriety Tracker" / "Sober Days Counter for Women"). The existing `metadata-optimization` and `keyword-research` skills cover that. The Android answer on the page is "not yet", so an Android release would open Play Store ranking.

## Risks and gaps

- **The three testimonials on /sobergirl (Sarah M., Rachel T., Amara K.) look fabricated.** If they are not real user quotes, remove them or replace them with real ones. They are presented as "real words from women on their journey", which is a Google trust and FTC issue. I did not add review schema for this reason.
- Medical claims: sobriety and "quit drinking" are YMYL topics. Anything on withdrawal timelines or liver recovery needs a medical reviewer and sources. The FAQ already points to a doctor for withdrawal.
- Volumes for women-specific and "sober girl" terms were null, so this is data from the US only. Other markets were not checked.
- No GSC or ranking history exists for /sobergirl yet. Once indexed, pull Search Console queries after about 4 weeks and re-prioritise.
- Pages on shipailab.com are under a general "AI agency" site. A dedicated domain or at least internal links from the homepage would help topical relevance.

## Update 2026-10-06: guides shipped (DataForSEO total about $0.49 of $2)

Live at `/sobergirl/<slug>`, built from `data/sobergirl/articles.ts` (sources in `data/sobergirl/sources.ts`, images from `scripts/generate-sobergirl-assets.mjs`):

| Slug | Main keywords (US volume, KD) |
|---|---|
| best-sobriety-apps | best sobriety / sober app (480, 43), best quit drinking app (210, 8) |
| sobriety-milestones | sobriety milestones (110, 0), sober for 1 year (590, 5), plus a short sourced section on sobriety coins |
| sober-october | sober october (1,900, 8) |
| dry-january-app | dry january app (590, 21, seasonal) |
| sober-curious | sober curious meaning (1,000, 8) |
| reframe-app-cost | reframe app cost / is reframe app free (320 each, KD 0 to 9), how much is reframe app (140, 2) |
| gray-area-drinking | gray area drinking (140, 8), mindful drinking app (480, 29) |

Not built yet: "reframe app reviews" (1,600, KD 8) and "i am sober app" (3,600, KD 21). Both need evidence we can cite, so they are held back until we have it. "Sober anniversary" gift and quote queries (about 390 and 210, KD 0 to 6) are a cheap later addition.

Rules for new guides: every figure cites a source in `sources.ts`; the build fails on an uncited or unused source; label self-reported and observational findings; say so where evidence is missing.

## Targeting rule (decided 2026-10-06)

A page is only worth building if the searcher is someone who would plausibly use Sober Girl: a woman who wants to track sobriety, cut down or take a break from alcohol, on iPhone. Volume alone is not a reason.

- **Dropped:** a standalone "sobriety coins" page. Searchers mostly want to buy AA chips (transactional, wrong audience). The sourced useful part now sits inside the milestones guide.
- **Skip:** sober-living housing, rehab and treatment-centre terms, dating apps, "how to stop drinking soda", hangover cures, and anything medical we cannot cite.
- **Competitor names** appear only factually (price, features, ratings from store listings, dated) with a disclosure, never as bait.
- **Every guide** carries an inline "Track it in Sober Girl" prompt after its first section and ends with an honest "Is Sober Girl right for you?" block, including who it is not for (Android, community, coaching, treatment).

## Update 2026-10-06 (later): AI-answer optimisation (DataForSEO about $0.52 of $2)

What Google's AI Overview did for our target queries (pulled 2026-10-06, US):

| Query | AI Overview? | What it cited |
|---|---|---|
| best sober tracker app | Yes | iamsober.com, App Store, and "best apps" roundups (choosingtherapy.com, fellowshiphall.com, habitbox.app, affect.com) written as "Best for / Features" |
| sober app for women | Yes | Said no major app is built solely for women; cited womenforsobriety.org, store listings and recovery blogs |
| best app for dry january | Yes | Try Dry (official Alcohol Change UK app), store listings, patient.info |
| what is sober curious | Yes | Health systems (Penn Medicine, Henry Ford, Atlantic Health) |
| best sobriety app, best app to quit drinking | No | Organic: SAMHSA, NPR, roundups, PMC |

What we built on that basis:
- Every guide opens with a "Quick answer" box: a short, cited, self-contained summary an AI can quote.
- The comparison uses "Best for / cost / devices / rating" per app, dated, with sources.
- A fact-sheet page (`/sobergirl/sober-girl-app`) so models have one clear page about what the app is, who makes it, price, platforms and privacy.
- A "sober app for women" page that states plainly what exists and what does not, including where Sober Girl is not the answer.
- Evidence sections with real trial data (Drink Less RCT, eClinicalMedicine 2024; 2025 systematic review) and the caveat that we found no trial of Sober Girl.
- `public/llms.txt` and `llms-full.txt` now describe the app and link every guide. `robots.txt` already allows all crawlers.

Honest limits: nobody can promise citations. The Princeton GEO paper reports visibility gains of up to 40% from tactics such as adding statistics and citations, but results vary by domain (arXiv 2311.09735). Re-run the AI Overview pull (about $0.03 for 6 queries) four to six weeks after indexing to see whether we are cited.

## Update 2026-10-06 (third round): seven high-intent pages

Chosen from DataForSEO volumes (US) for people who are about to need a tracker or help with cravings, not for volume alone.

| Slug | Targets (monthly searches, KD) |
|---|---|
| sobriety-calculator (interactive tool) | sobriety calculator and sobriety date calculator (6,600 each, KD 21), days sober calculator (880, KD 3), sober date calculator (260, KD 7) |
| urge-surfing | urge surfing (6,600, KD 4) |
| how-to-stop-alcohol-cravings | how to stop alcohol cravings (1,000, KD 22), alcohol cravings (880, KD 14), why do i crave alcohol (170, KD 20) |
| how-to-quit-drinking-on-your-own | how to stop drinking alcohol (8,100, KD 43, long term), how to quit drinking on your own (590, KD 23) |
| benefits-of-quitting-alcohol | benefits of quitting alcohol (3,600, KD 37) |
| sober-journal-prompts | sobriety journal prompts (50, KD 0). Supports the Plus journal feature |
| what-to-do-instead-of-drinking | sober activities (320, KD 0), what to drink instead of alcohol (260, KD 0) |

Deliberately skipped: sober dating (720, KD 23; dating-app intent), alcohol calorie calculator (weight-loss intent), "weight loss after quitting alcohol" (880; can be revisited if we find a citable source beyond the one BMJ Open weight result).

Verified evidence added: Bowen and Marlatt 2009 urge-surfing trial (123 student smokers, preliminary), NIAAA Rethinking Drinking pages on urges and professional support (three FDA-approved medications), Drink Less RCT and 2025 systematic review. Claims are limited to what those sources state.

## Update 2026-10-06 (fourth round): five more guides and a hub (23 guides total)

| Slug | Targets (monthly US searches, KD) |
|---|---|
| hangxiety | hangxiety (18,100, KD 11), why do i feel anxious after drinking (110, KD 15). The audience that moves from gray-area drinking to sober curious |
| sober-books-and-podcasts | this naked mind (4,400, KD 23), quit like a woman (1,900, KD 15), sober podcasts (590, KD 15), sober curious books (320, KD 3), books about quitting drinking (320, KD 6). Facts-only directory, no reviews |
| dry-january-guide | dry january benefits (3,600, KD 13), dry january tips (170, KD 8), how to do dry january (70). Publish well before December |
| sobriety-calendar (printable tool) | sobriety calendar (480, KD 42), sober calendar (320, KD 28), printable sobriety calendar (50) |
| how-much-alcohol-is-too-much-for-women | low volume but the exact question AI answers get asked; NIAAA definitions and standard drink sizes |
| guides (hub) | Internal links to all guides, grouped by topic. `data/sobergirl/groups.ts` controls the grouping |

Evidence added: Marsh and Morgan et al. hangxiety study (about 100 social drinkers, shy subgroup), van Lawick van Pabst 2019 sex-differences hangover study (no claim that women get worse hangxiety), NIAAA standard drink and drinking-pattern pages, Apple Podcasts listings and Open Library records for the directory.

Rules that still apply: no reviews of content we have not consumed, no figures without a source, say where evidence is missing.

## Update 2026-10-06 (fifth round): six more guides (28 guides + hub)

| Slug | Targets (monthly US searches, KD) |
|---|---|
| alcohol-and-depression | alcohol and depression (1,600, KD 21) |
| drinking-alone | drinking alone (1,300, KD 5) |
| alcohol-and-weight | alcohol and weight gain (880, KD 19), weight loss after quitting alcohol (880, KD 22) |
| how-to-stop-drinking-wine-every-night | how to stop drinking wine (260), is drinking wine every night bad (170, KD 4), wine every night (70) |
| sleep-after-quitting-alcohol | can't sleep after quitting drinking (170, KD 8), insomnia after quitting alcohol |
| sober-holidays | sober holidays, sober thanksgiving/christmas/new years eve/halloween (about 270 combined). Seasonal: publish before Halloween |

Evidence added: Skrzynski and Creswell 2021 solitary-drinking meta-analysis (small association, not cause), Boden and Fergusson 2011 alcohol and depression review (pooled odds ratios 2.00 to 2.09), Traversy and Chaput 2015 alcohol and obesity review (mixed evidence), 988 Lifeline. The wine page's pour-size table and the weight page's calorie table are arithmetic on sourced figures (14 g per drink, 7 kcal per gram), labelled as illustrative.

Deliberately skipped (no source we could verify): alcohol and your period (590, KD 0), alcohol and skin, sugar cravings after quitting alcohol (390, KD 0). Revisit if citable studies turn up.
