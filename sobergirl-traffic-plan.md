# Sober Girl: golden keywords and the page plan to drive app installs (2026-10-11)

Supersedes the page selection in `sobergirl-pseo-plan.md` and `sobergirl-keyword-gaps.md`. Those stay as history.

## 1. How the keywords were found

| Step | Tool | Output |
|---|---|---|
| Expand 125 seed phrases in 8 clusters | **Google Ads Keyword Planner**, through ElixRank's own `google-ads-api` setup (free) | 5,453 ideas with monthly searches, competition and CPC |
| Remove noise (rehab, drugs, fetal alcohol, AA coins, shopping) and de-duplicate variants | Rules in the analysis, then manual review | 903 classified keywords |
| Add organic difficulty for the 680 best by volume × fit | **DataForSEO** bulk keyword difficulty (about $0.09) | KD per keyword |
| See what the competitor already ranks for | DataForSEO ranked keywords for sobergirlsociety.com, US and UK (about $0.08) | 256 keywords, none of them tracker terms |

**What counts as golden:** at least 100 searches a month, KD 35 or lower, and an intent that fits someone who would use a tracker (counter, milestone, relapse, cutting back, quitting, cravings, women, body effects). Non-alcoholic drinks are scored separately because the searcher is shopping.

Result: **320 golden keywords** in the 680 checked, of which 188 had no page of ours when the pull was run. The raw files are in `research/` (`ads-ideas-*.csv`, `ads-scored.json`, `sobergirlsociety-ranked-*.csv`).

Caveats: Google Ads volumes group close variants and are rounded. DataForSEO KD is not comparable to Ahrefs or Semrush. Nobody can promise a position, so the plan is built to rank on keywords where page one is weak, and to convert whoever arrives.

## 2. The golden clusters

| Cluster | Best queries (US monthly searches, KD) | Status |
|---|---|---|
| **What happens when you stop** | what happens when you stop drinking alcohol 5,400 (KD 41); stop drinking alcohol benefits 3,600 (37); what happens after you stop drinking 1,000 (32) | **Built** (hub) |
| **Counters and trackers** | sobriety counter 1,600 (43); sober counter 1,600 (43); sobriety counter app 1,000 (32); sober day counter 880 (22); sober streak 720 (43) | **Built** (live counter) |
| **Calculators** | sobriety calculator 6,600 (21); days sober calculator 880 (3) | Already live |
| **Milestones to a year** | 6 month sober 590 (6); 1 year sober 590 (0); 30 days sober 480 (6); 90 days sober 480 (0); 60 days sober 320 (0) | Live |
| **Milestones past a year** | 2 years 480 (5); 3 years 480 (8); 5 years 480 (0); 100 days 390 (4); 4 years 320 (4); 10 years 320 (0); 7 years 210 (2); months 110 to 210 (3 to 9) | **Built** (4 pages, 2 hubs) |
| **Relapse** | lapse vs relapse 720 (4); alcohol relapse 720 (21); i relapsed 480 (28) | **Built** |
| **Cutting back** | mindful drinking 590 (21); mindful drinking app 480 (29); drinking in moderation 720 (31); drink less app 140 (29) | **Built** |
| **Soberversary** | soberversary 480 (0); happy soberversary 320 (0); sobriety anniversary 210 (0) | Live (retitled 10 Oct) |
| **Face and skin** | alcohol face 6,600 (7); alcohol puffy face 3,600 (0); red face alcohol 2,400 (5); alcohol and skin 590 (10 to 13) | **Built**, limited by evidence (see 5) |
| **Bloating and belly** | alcohol bloating 1,900 (0); beer belly women 1,900 (12); alcohol belly 1,600 (4) | Backlog, needs sources |
| **Hair** | does alcohol cause hair loss 1,300 (0); alcohol and hair loss 720 (0) | Backlog, needs sources |
| **Lifestyle** | is red wine good for you 8,100 (13); alcohol and ADHD 3,600 (16); sober vacation 720 (10); sober activities 320 (0) | Backlog |
| **Non-alcoholic drinks** | non alcoholic wine 49,500 (13); best non alcoholic drinks 5,400 (0) | Decision needed (see 6) |

## 3. Pages built this round (11)

| Page | Primary query | Job |
|---|---|---|
| `what-happens-when-you-stop-drinking-alcohol` | what happens when you stop drinking alcohol | Hub. Links to 8 milestone pages, so they inherit its traffic. |
| `sobriety-counter` | sobriety counter, sober counter | Tool. Live second-by-second counter that remembers a date in a bookmark and hands off to the app. |
| `lapse-vs-relapse` | lapse vs relapse, alcohol relapse | The moment a tracker matters most. |
| `100-days-sober` | 100 days sober | Fills the gap between the 90 and 180 day badges. |
| `2-years-sober`, `3-years-sober`, `5-years-sober` | N years sober | Long tail with weak competition. |
| `months-sober`, `years-sober` | 4, 5, 9, 18 months; 4, 7, 10 years | Hubs for queries too small for their own page. |
| `mindful-drinking` | mindful drinking | Cutting-back audience. Honest about what the app does and does not log. |
| `alcohol-face` | alcohol face | Biggest informational pool at low KD. Says what is not proven. |

Every claim cites a source in `sources.ts` and the build fails on an uncited one. New sources this round: NIAAA's page on recovering from a drinking episode; Larimer, Palmer and Marlatt (NIAAA journal, 1999); Moos and Moos 2006; Dennis, Foss and Scott 2007; Kelly et al. 2017; Liu and Chen 2023; Li et al. 2017; Alcohol Change UK on mindful drinking.

## 4. The page structure that sends readers to the app

Every page follows the same anatomy, because reading order is the conversion path:

1. **Answer first.** A cited "Quick answer" box. It earns the click, and it is what AI answers quote.
2. **A tool or a table in the first screen where one fits.** The counter, the calculator, the milestone table. A reader who uses a tool is ready for the app.
3. **An inline app prompt after the first section.** It says what the app does for this exact topic, not a generic banner.
4. **Real screenshots of the feature that matches the topic**, with specific alt text, title and caption (relapse page shows Craving SOS and the tree; counter page shows the home screen).
5. **An honest "Is Sober Girl right for you?" block.** It says who it is not for. This is what makes the other claims believable.
6. **Hub and spoke links.** Hubs rank for the big question, spokes for specific durations, and each spoke links back.
7. **A footer prompt, plus a slim sticky bar on phones.** Nearly all Android installs start from a phone.

**New this round:**
- **Install attribution per page.** Every Play Store button now carries a `referrer` with `utm_source=shipailab`, `utm_medium=seo` and `utm_campaign=<page>-<placement>` (placements: `inline`, `footer`, `nav`, `sticky`, `guides-hub`). After the first installs, check Play Console's acquisition reports for third-party referrals to see which pages produce installs. This replaces guessing.
- **A sticky "Get the app" bar on mobile** that never appears on desktop.
- **A bookmarkable live counter**, which gives people a reason to come back to the site and see the app again.

## 5. Where the evidence ran out (and what the pages say)

- **Alcohol face.** The dermatology review we cite proposes a flushing mechanism and calls the rosacea link controversial; a large cohort found an association with rosacea; acne evidence is inconsistent. We found no controlled study of puffiness, of "before and after", or of a timeline. The page says so plainly. That makes it less exciting than competitors' pages and safer for a health topic.
- **Years sober.** The one frequently quoted figure (relapse risk falls below a fixed percentage after five years) could not be verified from the abstract, so it is not on the page.
- **Mindful drinking.** There is no outcome trial of "mindful drinking" as such. The page defines it from Alcohol Change UK and does not claim it works.

## 5b. Second batch built (2026-10-11, same day)

You said yes to the backlog, so the evidence pages were built once sources were verified (Europe PMC abstracts, TTB and MedlinePlus pages).

| Page | Primary query (searches, KD) | Key sources |
|---|---|---|
| `non-alcoholic-wine` | non alcoholic wine 49,500 (13) | TTB beer label rules; TTB wine under 7% page; Holmes 2026 (Addiction); Yokoyama 2026 (198 men); Acuff 2026 |
| `is-red-wine-good-for-you` | is red wine good for you 8,100 (13) | Stockwell 2016 (87 studies, 3,998,626 people); Semba 2014 (783 adults, 9 years); Surgeon General advisory; NIAAA |
| `alcohol-and-adhd` | alcohol and adhd 3,600 (16) | Charach 2011 (13 cohorts, OR 1.35); van Emmerik 2012 (29 studies, 23.1%); Levy 2014; Lohit 2019 |
| `alcohol-flush-reaction` | red face alcohol 2,400 (5) | Brooks 2009 (ALDH2, 36%, 540 million); Liu and Chen 2023 |
| `alcohol-belly-and-bloating` | alcohol belly 1,600 (4); beer belly women 1,900 (12); alcohol bloating 1,900 (0) | Bendsen 2013 (35 + 12 studies); MedlinePlus gastritis and ascites; Traversy 2015 |
| `alcohol-and-hair-loss` | does alcohol cause hair loss 1,300 (0) | Yang 2024 meta-analysis (OR 1.40, CI 0.95 to 2.06) |

Also extended: `how-to-stop-alcohol-cravings` (curb / control / avoid FAQ from NIAAA's seven strategies) and `dry-january-guide` ("what does Dry January mean" FAQ).

**Evidence caveats stated on those pages:** non-alcoholic wine has no TTB definition (the beer rule is not applied to wine); the red wine page says the mortality review's abstract does not single out red wine; the hair-loss pooled result includes no effect and no women-specific estimate was found; the ADHD abstracts give no results for women; hair and belly pages do not claim regrowth or timelines.

## 6. Decisions and backlog

1. **Still open:** `best non alcoholic drinks` (5,400, KD 0). It is a list-intent query and we do not review products. Option: fold into `non-alcoholic-wine` as a section on how to choose. Needs no new source.
2. **Puffy face in detail** (3,600, KD 0). Covered inside `alcohol-face`; no controlled study found, so a dedicated page would repeat "not proven".
3. **Sugar cravings after quitting alcohol** (390, KD 0). Needs a source; none verified.
4. **Moderate drinking definition** (590 each, KD 14 to 31). NIAAA's page does not define it; needs the Dietary Guidelines text.
5. **App badges for 2, 5 and 10 years.** Not needed for the pages to be accurate (they say the app's list ends at 365 days), but the years pages would convert better with something to unlock.

**Skip:** sober living and halfway houses (3,000+ searches, housing intent), fetal alcohol, medication interactions, AA chips and coins, dating apps, alcohol helpline (KD 66).

## 7. Rollout and review

| When | What |
|---|---|
| Deploy | Push, then `python3 scripts/indexnow.py` for the 41 new URLs, and submit the sitemap in Search Console |
| Week 1 | Confirm the pages are indexed (Search Console, Pages report). Confirm the UTM referrers appear in Play Console |
| Week 4 to 6 | Pull Search Console queries per page and re-run `node scripts/dataforseo-keyword-gaps.mjs --skip-ranked --terms research/terms-round2.json`. Compare positions against this plan |
| Prune rule | A page with no impressions after 8 weeks gets merged into its hub or rewritten, not left |
| Always | Re-read competitor store facts by 2027-01-08 (the comparison pages date them) |

## 8. Search Console check and batch 3 (2026-10-13)

**What GSC showed (API, 1 Jul to 12 Oct):** first impressions on 6 Oct; 97 impressions and 2 clicks in total, almost all US. URL Inspection on 78 Sober Girl URLs: **17 indexed, 4 discovered but not indexed, 57 unknown to Google.** The sitemap had last been read on 6 Oct (83 URLs, before the 41 new pages), and every Sober Girl `lastmod` said 2026-09-30.

| Page | Query | Position |
|---|---|---|
| sobriety-calendar | sobriety calendar | 7.5 avg |
| reframe-app-cost | is reframe app free | 10 to 15 |
| benefits-of-quitting-alcohol | (page) | 8 |
| best-sober-tracker-apps | sober tracker app, sober app | 34 to 61 |
| sobriety-calculator | sobriety calculator, how many days sober, sober date calculator, aa grapevine sobriety calculator | 50 to 87 |

**Done:**
- Sitemap resubmitted through the API. Sober Girl sitemap entries now come from `ARTICLES`, with a real `lastmod` per page (`updated` on `Article`; pSEO batches are dated in `pseo/index.ts`). The same date feeds `dateModified` and the "Updated" line.
- `sobriety-calculator`: title and H1 now target "how many days sober am I"; added a days-per-milestone table linking to each milestone page, and FAQs for "sober date calculator" and AA Grapevine (independent, not affiliated).
- `reframe-app-cost`: title now "Is Reframe Free? Reframe App Cost and Free Trial (2026)".
- 5 new pages (`pseo/golden3.ts`), each with a hero, OG image, 1 to 2 data figures and 2 screenshots: `easy-mocktails` (mocktails 90,500 KD 30; easy mocktails 8,100 KD 1; halloween mocktails 1,900 KD 1), `non-alcoholic-beer` (na beer 110,000 KD 12), `alcohol-and-antidepressants` (1,900 KD 2, ×2 variants), `alcohol-and-menopause` (480 KD 4), `moderation-management` (1,300 KD 4).
- Links into the new pages from 9 related guides.

**Next:** after deploy, IndexNow all Sober Girl URLs, and use URL Inspection's "Request indexing" in the GSC UI for the top 10 (the API cannot request indexing). Re-run the inspection script in 7 days.
