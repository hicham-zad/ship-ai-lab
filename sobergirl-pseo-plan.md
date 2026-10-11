# Sober Girl: 30 programmatic SEO pages (plan, 2026-10-10)

> **Status 2026-10-10: built.** The final list differs from the plan below in three ways. The milestones follow the app's real badges (24 hours and 3 days replace 100 days and 2 years). `sober-time-alternative` and `nomo-alternative` were replaced by `i-am-sober-vs-sunflower` and `sober-girl-vs-i-am-sober`, because we had verified listing data for those apps. `alcohol-free-days-tracker` became `how-to-count-sober-days`, to avoid overlapping the existing alcohol-free-days guide. Step 0 (the DataForSEO check) has **not** run yet. See `sobergirl-seo-strategy.md` (update 2026-10-10).

Goal: 30 high-quality pages, each with its own images, for searches by people who are about to download a sober tracker or are already counting days. They add to the 28 guides already live under `/sobergirl/<slug>` (see `sobergirl-seo-strategy.md`).

**Status of the numbers:** volumes marked ✓ come from the 2026-10-06 DataForSEO pull. The others still need checking. Step 0 checks every target before anything is written. No page gets built on a guessed volume.

## Why these 30

- **Intent first** (the 2026-10-06 targeting rule still applies): the searcher has to be someone who would plausibly install Sober Girl.
- **The app is on Android.** The fact sheet says Google Play now ("Drink Less: Alcohol Free Days") and iPhone "coming soon". Most competitor roundups are iPhone-first, so Android and "cut back / alcohol-free days" searches have a better fit and less competition than the old iPhone-only framing assumed.
- **Templates beat one-offs here.** sober-tracker.com gets its traffic from day-by-day timelines, and small sites rank for "alternative" and "best for" pages. Both are repeatable formats.
- **No cannibalisation.** Every new page has a primary keyword that no existing guide targets. Where the two overlap (the 1-year milestone, Reframe), the existing page becomes the hub and links down.

## The 30 pages (4 templates plus 1 one-off)

### Template A: milestone pages (9). Tracker intent: they are counting days

Slug pattern `/sobergirl/<n>-days-sober` and similar. Each page is built from a data row. Unique per page:
- What the evidence says at this stage (sourced, YMYL rules: NIAAA, MedlinePlus, peer-reviewed, with a safety callout on early days)
- Money saved at this point: a table worked out from 3 spend levels, labelled illustrative
- What the app shows at this milestone (a screenshot of that specific badge)
- A journal prompt and a celebration idea for this stage
- The usual hard moment at this stage, plus a link to urge-surfing or cravings
- Previous and next milestone links, so the series chains together

| # | Slug | Primary target | Volume |
|---|---|---|---|
| 1 | 1-week-sober | 1 week sober, 7 days no alcohol | check |
| 2 | 2-weeks-sober | 2 weeks sober, 2 weeks no alcohol | check |
| 3 | 30-days-sober | 30 days sober, 30 days no alcohol | check |
| 4 | 60-days-sober | 60 days sober | check |
| 5 | 90-days-sober | 90 days sober | check |
| 6 | 100-days-sober | 100 days sober | check |
| 7 | 6-months-sober | 6 months sober | check |
| 8 | 1-year-sober | sober for 1 year (590, KD 5) ✓, one year sober (480, KD 7) ✓ | ✓ |
| 9 | 2-years-sober | 2 years sober | check |

`sobriety-milestones` becomes the hub for this series. Its 1-year section shortens and links to page 8.

### Template B: alternatives and comparisons (8). The strongest app intent

Facts only, dated, from store listings and official sites, with a disclosure. No logos and no rating markup for us. Same layout every time: a "Best for / price / platforms / store rating (date)" table, what the other app does better, where Sober Girl fits, and who should stay with the other app.

| # | Slug | Primary target | Volume |
|---|---|---|---|
| 10 | i-am-sober-alternative | i am sober alternative (the brand term is 3,600, KD 21 ✓) | check |
| 11 | reframe-alternative | reframe app alternative, free reframe alternative | check |
| 12 | sunflower-sober-alternative | sunflower app alternative | check |
| 13 | sober-time-alternative | sober time app alternative | check |
| 14 | nomo-alternative | nomo app alternative | check |
| 15 | try-dry-alternative | try dry app alternative (UK, Dry January) | check |
| 16 | i-am-sober-vs-reframe | i am sober vs reframe | check |
| 17 | reframe-vs-sunflower | reframe vs sunflower | check |

The existing `reframe-app-cost` stays on price intent. Page 11 is about switching.

### Template C: tracker use-case pages (7). "I want a tracker that does X"

Only features the fact sheet confirms. A page goes ahead only if the app really does the X in its title.

| # | Slug | Primary target | Volume |
|---|---|---|---|
| 18 | sobriety-app-android | sobriety app android, sober tracker android | check |
| 19 | free-sobriety-tracker-app | free quit drinking app (140, KD 18) ✓, free sobriety app | partly ✓ |
| 20 | alcohol-free-days-tracker | alcohol free days app, drink less app (matches the Play listing name) | check |
| 21 | private-sobriety-tracker | private sobriety app, sobriety app without account (data stays on the device) | check |
| 22 | money-saved-not-drinking-calculator | money saved not drinking calculator (interactive tool, reuses `MoneyCalculator.tsx`) | check |
| 23 | sobriety-app-with-journal | sobriety journal app (Plus feature, stated plainly) | check |
| 24 | sober-mom-app | sober mom, sober moms app (women's angle with a real query behind it) | check |

### Template D: challenges (5). Time-boxed, with a tracker at the centre

Same layout as `sober-october` and `dry-january-guide`: rules, dates for that year, a 30-day plan, a printable calendar (reuses `SobrietyCalendar.tsx`) and the app prompt.

| # | Slug | Primary target | Publish by |
|---|---|---|---|
| 25 | 30-day-no-alcohol-challenge | 30 day no alcohol challenge, 30 day sober challenge | now (all year) |
| 26 | dry-february | dry february, dry feb | early January 2027 |
| 27 | alcohol-free-for-lent | giving up alcohol for lent (Lent 2027 starts 10 Feb) | mid-January 2027 |
| 28 | dry-july | dry july (AU and UK demand) | early June 2027 |
| 29 | sober-september | sober september | early August 2027 |

### One-off (1)

| # | Slug | Target | Volume |
|---|---|---|---|
| 30 | sobriety-anniversary-messages | sober anniversary quotes and messages (about 390 / 210, KD 0 to 6 ✓) | ✓ |

## Images (each page gets 4 to 6 of its own)

1. **Hero SVG and 1200x630 OG PNG** from `scripts/generate-sobergirl-assets.mjs`, with one illustration function per template that takes the page's data. Milestone pages draw that day count in the bloom. Comparison pages draw two text cards with the app names (no competitor logos). Challenge pages draw a calendar of that month. 30 different heroes, not one reused.
2. **Real app screenshots for each milestone.** Export from the Android app on a device or emulator with sample data at 7, 14, 30, 60, 90, 100, 180, 365 and 730 days (badge unlocked, tree stage, money saved). This is the strongest unique image on each page and the best image-search asset. It needs about 1 hour of exports. Run through `scripts/prepare-app-screens.mjs`.
3. **A data chart per page** from `Charts.tsx`: money saved over time on milestone pages, a feature matrix on comparison pages.
4. **Alt, title and caption written for each page** (the `Shot` type already supports this), plus `ImageObject` in JSON-LD.
5. Every image goes through sharp to WebP or AVIF with fixed width and height, so CLS stays at 0 and the image weight stays small.

## Build approach (fits the current code)

- New data files: `data/sobergirl/pseo/milestones.ts`, `competitors.ts`, `usecases.ts`, `challenges.ts`. Each one holds typed rows and a `build*()` function that returns `Article` objects. They are merged into `ARTICLES`, so `[slug]/page.tsx`, the hub, `llms.txt` and the source check all work unchanged.
- Generate the sitemap from `ARTICLES` instead of the hand-written list in `app/sitemap.ts`.
- Add hub groups in `groups.ts`: "Milestones by day", "Compare apps", "Challenges".
- **Quality gates in the build** (the same style as the existing uncited-source check):
  - each page needs at least 600 words of text that appears on no other page (no sentence of 12 or more words shared with another page)
  - each page needs at least 1 cited source, at least 4 FAQs written for that page, and at least 3 images with their own alt text
  - competitor rows need a `checkedOn` date. The build warns when that date is more than 90 days old
- Schema: Article plus BreadcrumbList plus FAQPage on every page, `ItemList` on the comparison pages. No `aggregateRating` for Sober Girl.

## Ranking plan (honest version)

Nobody can promise position 1. What gets these pages to the top 3 on low-KD terms:
- Pick only terms where page 1 already includes small sites or Reddit (the SERP check in step 0).
- Internal links: hub, then the series, then the money pages (`best-sober-tracker-apps`, `sober-girl-app`, the Play link). Every new page gets at least 3 links in and 3 out.
- Answer first: the "Quick answer" box at the top, which works for AI Overviews.
- Submit via IndexNow and Google Search Console after each wave. Re-check positions 4 weeks later.
- Off-page: the Play Store listing links back to `/sobergirl`. The shipailab.com homepage should link to the Sober Girl hub (topical relevance, see the risks in the strategy doc).

## Rollout

| Step | What | Pages |
|---|---|---|
| 0 | DataForSEO: volumes and KD for about 150 candidate keywords, plus a SERP and AI-Overview check on the 30 primary terms. Drop or swap anything under about 50 searches a month or with an all-big-site page 1 | estimated cost $0.30 to $0.60 |
| 1 (this week) | Templates and quality gates, then the highest-intent pages | 10 to 17, 18, 19, 3, 5, 8 (13 pages) |
| 2 (+1 week) | The rest of the milestones, use-cases, the 30-day challenge, anniversary | 1, 2, 4, 6, 7, 9, 20 to 25, 30 (13 pages) |
| 3 (seasonal) | Dry Feb and Lent in December. Dry July and Sober September in spring 2027 | 26 to 29 |
| Review | 4 to 6 weeks after each wave: GSC and Bing queries, re-run the AI Overview check, prune or merge any page with 0 impressions | |

## Needed from you

1. **DataForSEO access for step 0.** Export `DATAFORSEO_LOGIN` and `DATAFORSEO_PASSWORD` in the shell (`! export ...`), or tell me where they are kept. I did not search for them on my own.
2. **The milestone screenshots** (image item 2), or tell me to build in-app style mockups instead.
3. **Confirmation on the competitor pages.** They name real apps (factual, dated, disclosed). Agree before they go live.
