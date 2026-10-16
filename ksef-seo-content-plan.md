# Faktury KSeF – SEO content strategy (ksef.shipailab.com)

Status: v1, 2026-10-15. Builds on `ksef-landing-plan.md` (design, screenshots, landing, feature pages). This file covers **what to write, in what order, and how**, using real data. Raw keyword list: `ksef-keywords-2026-10-15.csv` (1,062 KSeF keywords, Google PL).

Data: DataForSEO Labs (keyword suggestions for "ksef" and "e-faktura", related keywords for "krajowy system e-faktur"), plus 12 live Google PL mobile SERPs. Pulled 2026-10-15 for about $0.23. DataForSEO's volumes run higher than Semrush's: "ksef" is 823K here and 60.5K in Semrush. Use the numbers to **rank** topics, not as traffic forecasts.

---

## 1. What the data says

1. **The head terms are navigational and the government wins them.** "ksef", "ksef logowanie", "aplikacja podatnika ksef" (22K) and "ksef podatki gov" are people looking for the government login. Don't chase them.
2. **The long tail is wide open.** Most how-to keywords have KD 0–20. Small sites rank on page 1: ekoconsultant.pl, ksefeo.pl, przemyslawklasa.pl, afaktury.pl, ksbot.pl, kotrak.com. Software vendors (inFakt, Fakturownia, wFirma, Symfonia, Insert) rank with help-centre pages, which are thin and written for their own product.
3. **The topics that are closest to our app are also the biggest gap.** These are receiving, finding, viewing and printing invoices, plus access (certificate/token):

| Cluster | Keywords | Sum volume | Typical KD | Fit with the app |
|---|---|---|---|---|
| Certyfikat / token / MCU / uwierzytelnienie | 107 | 83K | **0–17** | high: the app signs in with these |
| Terminy, 2027, JDG, małe firmy, przesunięcie | 92 | 84K | 0–46 | medium: audience-building, seasonal |
| Odbieranie / pobieranie faktur | 37 | 24K | 6–29 | **core**: this is what the app does |
| Programy (do fakturowania) | 40 | 20K | 53–90 | low: the app doesn't issue invoices. Skip |
| Problemy / awaria / przerwa / nie działa | 21 | 18K | **0–4** | high, through a status tool |
| Uprawnienia / księgowa / biuro rachunkowe | 41 | 14K | 0–27 | high: accountant export |
| Wizualizacja / PDF / wzór / druk | 29 | 10K | 0–16 | **core**: the app renders PDFs |
| Paragon z NIP / osoby fizyczne | 15 | 6K | 0–5 | medium |
| Korekta | 12 | 6K | 0 | low/medium (receiver's view) |
| Numer KSeF / kod QR | 12 | 4K | 0–12 | high: shown in the app |
| Znaleźć / sprawdzić / wyszukać fakturę | 7 | 3K | 19–26 | **core**: search |
| Offline / certyfikat offline | 8 | 2K | 0–1 | medium |

4. **Demand is seasonal and the next peak is close.** "ksef od kiedy" went from 110K (Jan 2026) to 1.6K (Aug 2026). "Certyfikat ksef" went from 40K to 1K, and "token ksef" from 8.1K to 390. The next spike is **Dec 2026 – Jan 2027**, when tokens end and the remaining small firms join (check both on ksef.podatki.gov.pl before publishing). Pages need about 6–10 weeks to start ranking, so the 2027 cluster must be live by **mid-November 2026**.
5. **"Jak pobrać fakturę z KSeF" is the evergreen winner.** It is back up to 8.1K in Aug 2026, every business has to receive invoices every month, and the topic is exactly our product.
6. **Every SERP shows an AI Overview, and most show People Also Ask and videos.** YouTube holds positions 1–3 for "jak pobrać / odebrać / wydrukować fakturę z KSeF". To be cited in AI Overviews, pages need a short direct answer, original screenshots and a short video.

---

## 1b. What the Ministry of Finance ranks for, and where we can beat it (2026-10-15)

Data: DataForSEO Labs `ranked_keywords` for ksef.mf.gov.pl and ksef.podatki.gov.pl (Google PL), plus 16 live mobile SERPs. Cost $0.12. Full list: `ksef-mf-ranked-keywords-2026-10-15.csv` (526 rows).

**ksef.mf.gov.pl** is the old KSeF 1.0 web app (an Angular login shell with no content). It ranks for only 14 keywords, all at positions 7–51 (e.g. "jak założyć ksef" #17, "ksef rejestracja jdg" #27). There is nothing to learn from it except that searchers still land on a dead login page.

**ksef.podatki.gov.pl** is MF's information site. It ranks for 512 keywords. About 90% of its traffic is navigational: the homepage ("ksef", "ksef logowanie") and the Aplikacja Podatnika page. Those keywords are not winnable and not worth it. The useful part is the long tail, where MF's page is **weak**:
- a bare PDF (the ZAW-FA form, manual part II, the FA(3) brochure, the JPK markers note),
- a news post or a Q&A dump,
- the homepage ranking for a how-to query,
- or a position below #3.

**How to read "easy" here:** MF holds #1 on most KSeF how-to queries. Our realistic target is **#2–5 plus the AI Overview and PAA boxes**, which is where small blogs (poradnikprzedsiebiorcy.pl, mizzox.com, seo-www.pl, bramka-ksef.pl, fillup.pl) sit today. Where MF ranks with a PDF or a news page, #1 is possible.

### Gaps: clusters MF ranks for that our 14 guides don't cover

| # | Cluster (sum PL vol/month, KD) | MF's ranking page | Who else is on page 1 (mobile SERP) | Difficulty for us | Planned page |
|---|---|---|---|---|---|
| 1 | **ZAW-FA**: zaw-fa 27.1K, online 5.4K, druk 3.6K+2.9K, elektronicznie 1.9K, jak wypełnić 1.6K+880, jak złożyć 1.3K+880, zaw-fa ksef 1.3K (≈ **50K**, KD 0) | the form as a **PDF** (#1–4) and a news post | gov.pl news, druki.gofin.pl, poradnikprzedsiebiorcy.pl, jpk.info.pl, podpisujzdalnie.pl, sokaris, **TikTok**, YouTube | **Easy–medium, biggest win** | `/zaw-fa` — what it is, who must file it (companies without a qualified seal, not JDG), field-by-field guide from the official form, e-US vs paper vs e-Doręczenia (not ePUAP since 1.01.2026), how long it takes, changing the person |
| 2 | **KSeF demo / test**: ksef demo 4.4K, test 4.4K, testowy 4.4K, wersja testowa 1.6K, środowisko testowe 880, demo 720, 2.0 demo 590, przedprodukcyjna 480+480 (≈ **18K**, KD 0–12) | thin landing pages for the test and demo apps | gov.pl news, blogs (auratech, fillup, thedy, gtakademia, fakturowo, mizzox), krajowysystemefaktur.pl | **Easy** | `/ksef-demo-i-wersja-testowa` — TEST vs DEMO vs PROD (official env table), what you can do in each, self-signed certs and shared data on TEST, daily maintenance 16–18, how to practise safely |
| 3 | **Jak zacząć / założyć / zarejestrować KSeF**: jak zacząć 3.6K, krok po kroku 2.9K, jak założyć 2.4K+1K, jak zarejestrować 1.9K, rejestracja krok po kroku 1.9K, jak założyć konto 1.3K+1K, jak uzyskać dostęp 880, rejestracja jdg 880 (≈ **17K**, KD 0–22) | `/krok-po-kroku-jdg-i-msp/` (#1, a short list) | infakt, eurocert, ksef.pl, altab, mizzox, YouTube, fakturomania | **Medium** | `/jak-zaczac-z-ksef` — there is no "registration": JDG has owner rights automatically, companies need a seal or ZAW-FA; then login method, tool, permissions, test. Separate paths for JDG and spółka |
| 4 | **Faktura dla osoby fizycznej / paragon z NIP a KSeF**: faktura na osobę fizyczną 1K, …a ksef 880+880, ksef faktury dla osób fizycznych 1K, czy osoba fizyczna może wystawić fakturę 880, faktura imienna 590, paragon z NIP 1.3K+720+590 (≈ **9K**, KD 0) | Q&A page and the consumers page (#1–7) | systim, gofin, bramka-ksef, Facebook, seo-www.pl, infakt | **Easy** | `/faktura-dla-osoby-fizycznej-a-ksef` — B2C voluntary, how a consumer gets a KSeF invoice (QR code + access data), paragon z NIP until 31.12.2026, private purchases by a JDG owner |
| 5 | **Korekta faktury w KSeF**: korekta 1.9K, jak zrobić korektę 1K, jak wystawić korektę 590+480, faktura korygująca 480+480 (≈ **5.5K**, KD 0) | the **PDF** manual (#2–3) | YouTube, fillup, morganizer, poradnikprzedsiebiorcy, worktime.expert, a law firm blog | **Easy** | `/korekta-faktury-w-ksef` — the receiver's view first (you can't reject; ask for a correction "do zera"; the KSeF number of the corrected invoice), then the issuer steps |
| 6 | **Jak wystawić fakturę w KSeF**: 9.9K + wystawianie 3.6K+3.6K + krok po kroku 1.9K+1.6K + ksef jak wystawić 2.9K + jak wysłać 880 (≈ **24K**, KD 6–19) | MF **homepage** (#1–3), no dedicated page | oscbr.pl, an IT blog, interia, YouTube, taxxo | **Medium** | `/jak-wystawic-fakture-w-ksef` — walkthrough of MF's free tools (Aplikacja Podatnika, mobile app, e-mikrofirma). We don't issue invoices, so the page is honest about that and links the receiving guides. Topical authority + traffic |
| 7 | **Zwolnienie z KSeF / kogo nie dotyczy**: zwolnienie 590+590, kogo nie dotyczy 590, ksef dla nievatowców 720+590, ksef a faktury papierowe 880 (≈ **4K**, KD 0–16) | zakres-obowiazkowego-ksef (#1–9) | poradnikprzedsiebiorcy, mbank, infor, jpk.info, insert, bramka-ksef | **Medium** | `/kto-nie-musi-korzystac-z-ksef` — exemptions per the regulation (Dz. U. 2025 poz. 1740), non-VAT activity, B2C, the 10K limit until 2026. Answer: everyone still **receives** via KSeF |
| 8 | **e-mikrofirma a KSeF**: 2.4K (KD 21) | MF tools page at **#7** | seo-www.pl **#1**, ksef.mf.gov.pl (dead app) #2, archives, forum | **Easy** | `/e-mikrofirma-ksef` — how to link it, receive invoices in it, limits; compared with the other free tools |
| 9 | **Oznaczenia OFF / BFK / DI w JPK_VAT**: DI 880, BFK 480 (+variants, KD 0) | a **PDF** note (#2) | Moore, inforlex, lex, poradnikprzedsiebiorcy, fakturomania, akademialtca | **Medium** (accountant audience) | `/oznaczenia-off-bfk-di-jpk` — later; useful to bring accountants in |
| 10 | **Rolnik ryczałtowy a KSeF**: 590 (+ VAT RR) | `/rolnik-ryczaltowy/` #2 | agri media (farmer.pl, topagrar), bs.net.pl | **Easy**, small | later, if time allows |

**Skip:**
- **"podręcznik ksef"**: MF holds 6 of the top 8.
- **"aplikacja ksef na komputer"**: MF holds the top 3, then software vendors.
- **"szkolenia ksef" / "środy z ksef"**: commercial training vendors and MF's own brand, and we don't run training.
- **"ksef infolinia" / "kontakt"**: navigational.
- **The login and "gov" terms.**

### What this changes in the backlog
- **New Wave 2 (by 2026-12-01), in this order:** ZAW-FA (1), KSeF demo/test (2), faktura dla osoby fizycznej + paragon z NIP (4), korekta (5), jak zacząć z KSeF (3). These come before the remaining Wave 2 items in §3 that are now covered. `numer-ksef`, `uprawnienia`, `jak-wydrukowac` and `jak-znalezc` are done.
- **Wave 3:** jak wystawić fakturę (6), kto nie musi (7), e-mikrofirma (8).
- **Wave 4:** JPK markers (9), rolnik ryczałtowy (10).
- **ZAW-FA is the single best opportunity on the site.** It has the highest volume, KD 0, and MF ranks with a raw PDF. Every spółka needs ZAW-FA before it can receive invoices, which ties it directly to the app. Build it next, with the real form fields cited from the official PDF.
- **Existing guides that compete with MF's #1:** certyfikat, jak pobrać, numer KSeF, nie działa. Win the AI Overview and PAA boxes with the "W skrócie" box and FAQ, and keep them fresher than MF's pages (MF's notices are dated, ours show "Stan prawny na").

---

## 2. Site architecture

Flat URLs, Polish slugs, and one pillar page per cluster. Spokes link up to their pillar and across to sibling spokes. Rename `/guides` to `/poradniki`, with a 301 redirect. The existing guides keep their root slugs, so their URLs don't change.

```
/                                   landing ("aplikacja ksef na telefon", "aplikacja mobilna ksef")
├─ /funkcje/*                       7 feature pages (landing plan §5)
├─ /poradniki                       hub: lists the 6 pillars, then the latest guides
│
├─ PILLAR A  /odbieranie-faktur-z-ksef             ← core, receives most internal links
│    spokes: jak-pobrac-fakture-z-ksef · jak-znalezc-fakture-w-ksef · pobieranie-faktury-bez-logowania
│            jak-wydrukowac-fakture-z-ksef · faktury-kosztowe-z-ksef · czy-faktury-z-ksef-trzeba-drukowac
├─ PILLAR B  /wizualizacja-faktury-ksef            ← pillar + TOOL (§4)
│    spokes: faktura-ustrukturyzowana (exists) · numer-ksef · kod-qr-na-fakturze-ksef · faktura-ksef-wzor
├─ PILLAR C  /certyfikat-ksef                      ← biggest KD-0 cluster
│    spokes: token-czy-certyfikat-ksef (exists) · token-ksef-koniec-2026 · mcu-ksef
│            jak-wygenerowac-certyfikat-ksef · certyfikat-offline-ksef · uprawnienia-ksef-dla-ksiegowej
├─ PILLAR D  /ksef-od-kiedy (exists, becomes the pillar)
│    spokes: ksef-dla-jdg-2027 · ksef-przesuniecie-terminu · kary-ksef · paragon-z-nip-a-ksef
│            faktura-dla-osoby-fizycznej-a-ksef · ksef-tryb-offline (exists)
├─ PILLAR E  /status-ksef                          ← live TOOL (§4)
│    spokes: ksef-problem-z-logowaniem · limit-zapytan-ksef · przerwa-techniczna-ksef
├─ PILLAR F  /aplikacje-mobilne-ksef               ← honest comparison: gov KSeF 2.0 app, vendor apps, ours
│    spokes: aplikacja-podatnika-ksef-alternatywa (landing plan) · aplikacja-ksef-na-komputer
└─ /narzedzia                       hub for the tools
```

Linking rules (on top of landing plan §3): every spoke links to its pillar in the first 150 words with a keyword anchor. Every pillar links to all of its spokes and to one or two `/funkcje` pages. Every page shows one `AppCard` linking to the matching feature. Keyword ownership goes in `data/ksef/links.ts`: **one primary keyword per URL**, and the build-time check fails if two pages claim the same one.

---

## 3. Content backlog (prioritised)

P = priority (1 = publish first). Vol = summed PL volume of the page's primary and secondary keywords from the CSV. The PAA questions come from the live SERPs and become H2s or FAQ entries.

### Progress (2026-10-15)
Written and live on the dev server (`data/ksef/guides-receiving.ts`): odbieranie-faktur-z-ksef, jak-pobrac-fakture-z-ksef, jak-znalezc-fakture-w-ksef, jak-wydrukowac-fakture-z-ksef, wizualizacja-faktury-ksef, numer-ksef, certyfikat-ksef, uprawnienia-ksef-dla-ksiegowej, ksef-dla-jdg-2027, ksef-nie-dziala. The token guide was updated (MF keeps tokens indefinitely, per the Q&A of 8.10.2026). "Przesunięcie terminu" is covered in ksef-od-kiedy and ksef-dla-jdg-2027 instead of a separate page. Also written: `zaw-fa` (gap #1) and `ksef-demo-i-wersja-testowa` (gap #2) from §1b. Note: some MF pages (Aplikacja Podatnika pages) still say tokens work "do 31 grudnia 2026 r." while the newer Q&A (8.10.2026) and certificates page (1.09.2026) say tokens stay indefinitely; our guides follow the newer pages. Gaps #3–#8 are also written: jak-zaczac-z-ksef, faktura-dla-osoby-fizycznej-a-ksef, korekta-faktury-w-ksef, jak-wystawic-fakture-w-ksef, kto-nie-musi-korzystac-z-ksef, e-mikrofirma-ksef (22 guides in total). Fixed: the exemptions regulation is Dz. U. 2025 poz. 1740 (not 1742; checked in the Sejm ELI register). Guide tables now render [links](/x). Gaps #9–#10 done too, plus logowanie-do-ksef (~16K vol: login.gov.pl since 14.02.2026) and kody-qr-ksef: 26 guides. Every guide has 1–2 generated diagrams (scripts/ksef-figures: WebP, wide + phone layout, light + dark, image sitemap) and its own 1200x630 social card. Facts re-checked against MF manuals v. 6.08.2026 (login.gov.pl, scam reporting live, hiding invoices announced). Still to do: real KSeF test-environment screenshots in the how-tos, the Cloudflare status checker, and confirming e-mikrofirma's KSeF 2.0 screens (our page uses MF's pre-update training material, flagged on the page).

### Wave 1: by 2026-11-10 (the 2027 peak and the core cluster)

| P | URL | Primary kw (vol, KD) | Secondary | PAA / angle |
|---|---|---|---|---|
| 1 | `/odbieranie-faktur-z-ksef` pillar | odbieranie faktur ksef (880, 12) | ksef pobieranie faktur 1.6K, jak odbierać faktury z ksef 1.3K | "Jak pobrać faktury z systemu KSeF?" All 4 ways: AP KSeF, mobile app, accounting software, our app |
| 1 | `/jak-pobrac-fakture-z-ksef` | jak pobrać fakturę z ksef (6.6K, 12) | jak pobrać faktury z ksef 1K, ksef pobierz fakturę 590 | step by step with real screenshots of the KSeF **test** environment, plus a 60-second video |
| 1 | `/certyfikat-ksef` pillar | certyfikat ksef (12.1K, 0) | certyfikaty ksef 12.1K, ksef certyfikat 5.4K, jak uzyskać 1.3K | "Ile trwa wydanie certyfikatu?", "Czy certyfikat jest konieczny?" |
| 1 | `/token-ksef-koniec-2026` | token ksef (2.4K, 0) | tokeny ksef 2.4K, co to jest token 720 | What stops working on 1.01.2027 and how to switch. Dated, sourced |
| 1 | refresh `/ksef-od-kiedy` as pillar | ksef od kiedy (33.1K, 16) | od kiedy ksef 8.1K, ksef dla kogo 2.4K | Put 2027 first; add the "Stan prawny na …" box and a change log |
| 1 | `/ksef-dla-jdg-2027` | od kiedy ksef dla jdg (1.6K, 11) | ksef dla jdg 1K, dla małych firm 1.6K | "Czy KSeF dotyczy JDG?", the 10,000 zł threshold, a checklist for December |
| 2 | `/ksef-przesuniecie-terminu` | ksef przesunięcie terminu 2027 (2.4K, 0) | przesunięcie terminu 1.3K, odroczenie 720 | What is in force vs what is only proposed (memory rule) |
| 2 | `/jak-wygenerowac-certyfikat-ksef` | jak wygenerować certyfikat ksef (1.6K, 0) | jak pobrać certyfikat 1K, generowanie 880 | MCU walkthrough with real screenshots |

### Wave 2: by 2026-12-01 (tools and the app-adjacent cluster)

| P | URL | Primary kw | Notes |
|---|---|---|---|
| 1 | `/wizualizacja-faktury-ksef` **tool + pillar** | wizualizacja faktury ksef (1.9K, 0) + przykład 880, wygląd 880, wzór 880 | §4. Highest-value page: a tool, a guide and the app's own feature |
| 1 | `/status-ksef` **tool + pillar** | ksef nie działa / awaria ksef (2.4K + 2.4K, 0–4) | §4. Repeat visits, journalists cite it, links |
| 2 | `/numer-ksef` | numer ksef (1.9K, 12) + co to 590, na fakturze 320, w przelewie 260 | Anatomy of the number with a validator widget |
| 2 | `/uprawnienia-ksef-dla-ksiegowej` | ksef uprawnienia dla biura rachunkowego (720, 0) + 6 variants ≈ 3K | Ties into the accountant export feature |
| 2 | `/jak-wydrukowac-fakture-z-ksef` | jak wydrukować fakturę z ksef (880, 16) | YouTube is at #2 here, so embed our own video |
| 2 | `/jak-znalezc-fakture-w-ksef` | jak znaleźć fakturę (720, 25) + sprawdzić 720, czy faktura jest w ksef 320 | Search feature tie-in |
| 3 | `/pobieranie-faktury-bez-logowania` | anonimowe wyszukiwanie faktury ksef (720, 22) + bez logowania 590 | Explains qr.ksef.mf.gov.pl |
| 3 | `/mcu-ksef` | mcu ksef (12.1K, 34) + moduł certyfikatów i uprawnień 1.6K | Mostly navigational; a short page that links to the MCU |

### Wave 3: December 2026 (peak month: problems and edge cases)

`/ksef-problem-z-logowaniem` (1.3K + 1K, KD 0) · `/paragon-z-nip-a-ksef` (1.3K + 720 + 590, KD 0) · `/faktura-dla-osoby-fizycznej-a-ksef` (880 + 480) · `/kary-ksef` · `/aplikacje-mobilne-ksef` comparison (aplikacja mobilna ksef 1.6K, na telefon 1K; PAA "Jaka aplikacja do KSeF?") · `/kod-qr-na-fakturze-ksef` · `/certyfikat-offline-ksef` (≈1.6K, KD 0) · `/limit-zapytan-ksef`.

### Wave 4: January 2027 onwards

`/korekta-faktury-w-ksef` (1.9K + 1K, KD 0, written from the buyer's side) · `/jak-wystawic-fakture-w-ksef` (9.9K, KD 14). This one is a free walkthrough of the government app for topical authority, and its CTA is about **receiving**, never a claim that we issue invoices · `/czy-faktury-z-ksef-trzeba-drukowac` · `/faktury-kosztowe-z-ksef`. After that, refresh every Wave 1 page with what changed on 1.01.2027.

**Skip:** "program do fakturowania ksef" (KD 53–90, and the app doesn't issue invoices), the government login keywords, and the energy-company "e-faktura logowanie" terms (tauron, pgnig, energa: a different product).

Pace: **2–3 pages a week**, about 30 pages by the end of January. Each page gets the full treatment in §5, so quality matters more than count.

---

## 4. Tools: the pages that earn links

Text guides compete with 20 vendor help centres, while tools have almost no competition. Each tool is a server-rendered page with a 600–900 word guide beneath it.

1. **Podgląd / wizualizacja faktury KSeF (XML → PDF)**: the user drops an FA(3) XML file and sees a readable invoice. The PDF includes the KSeF number and the QR code. It runs **fully in the browser** with no upload, which is the same privacy promise as the app. We can reuse the app's own XML parser and PDF layout, so the tool doubles as a live demo of the app. Targets: wizualizacja faktury ksef, faktura ksef wygląd/wzór/przykład, "jak otworzyć plik xml faktury" (check volume before building).
2. **Status KSeF (live)**: a cron (every 5 minutes, on the VPS) pings the public KSeF API endpoints and the MF status pages. It shows up/down, response time and a 30-day history, and links the official messages about planned breaks. Targets: ksef nie działa, awaria ksef (dzisiaj), przerwa techniczna (about 12K combined, KD 0–4). Only measured data goes on the page, never estimates.
3. **Walidator numeru KSeF**: paste a number and see its parts (NIP, date, technical part, checksum) checked against the official format. Supports `/numer-ksef`.
4. **Czy KSeF mnie dotyczy? (2027)**: 4 questions (VAT status, monthly sales vs 10,000 zł, B2B or B2C, receipts with NIP) lead to an answer with the date and official sources. Supports `/ksef-dla-jdg-2027`.

Build order: 2 → 1 → 3 → 4. Status is the quickest to build and is needed before the January spike.

---

## 5. What every page must have (the quality bar)

Finance and tax content counts as YMYL-adjacent, so trust signals decide rankings. Each item below is a merge requirement, not a nice-to-have.

1. **Answer first.** The H1 matches the query. A 2–3 sentence "W skrócie" box comes before any heading and answers the question directly. AI Overviews and featured snippets quote this box.
2. **Original proof.** At least 2 real screenshots per how-to: the KSeF test environment (`ksef-test.mf.gov.pl`) or our app's demo company, labelled as such. **No invented NIPs, amounts or numbers** (memory rule). No video for now (decided 2026-10-15). Where YouTube ranks in the top 3, make up for it with a numbered step strip of screenshots, one per step, plus a short silent screen-capture GIF/WebM hosted on the site. Revisit YouTube after Wave 2.
3. **Sources and dates.** Every legal claim links to ksef.podatki.gov.pl, gov.pl or the act (the `SOURCES` map in `data/ksef/guides.ts`). Show "Stan prawny na DD.MM.RRRR" plus a visible "Zmiany" log. Where something is proposed but not in force, say so.
4. **Real author, no paid reviewer (decided 2026-10-15). Fact-check by research instead.** Use a named author with a bio page. Every legal or technical claim goes through this check before publishing:
   - **Official first:** ksef.podatki.gov.pl (including Pytania i odpowiedzi), gov.pl, biznes.gov.pl, the act and the regulation texts on isap.sejm.gov.pl, and the KSeF API docs and changelog on GitHub (CIRFMF).
   - **Cross-check:** at least 2 independent professional sources: gofin.pl, inforlex.pl, podatki.biz, and help pages from the tax-software vendors. If they disagree with the official source, the official source wins and the page says what is unclear.
   - **Deep-research pass** for pillar pages and anything about 2027 dates, penalties or thresholds: the `deep-research` skill, then a claims table in the brief (claim → source URL → date checked).
   - **Re-check monthly** for pages with dates, and right after any MF announcement. Update "Stan prawny na …" and the change log.
5. **PAA coverage.** Before writing, pull the SERP (§6). Every PAA question becomes an H2 or a FAQ entry with a 40–60 word answer. Mark it up with `FAQPage`, and use `HowTo`-style numbered steps for procedures.
6. **Beat the top 3 on substance, not length.** Cover what they cover, then add what none of them have: our screenshots, the errors people actually hit, and "co zrobić, gdy…" sections. Typical length: 900–1,500 words for spokes and 1,800–2,500 for pillars.
7. **Exactly one product mention, honest and relevant.** An `AppCard` after the 2nd H2 with the matching crop (landing plan §3.4). Never claim the app issues invoices.
8. **Technical.** Unique title (≤ 60 characters, with the keyword at the front) and meta description (≤ 155), `Article` + `BreadcrumbList` JSON-LD, `dateModified` that matches the change log, LCP < 2 s, and 3+ contextual internal links in and out.

### Brief template (one per page, stored in `data/ksef/briefs/<slug>.md`)
```
Primary keyword / volume / KD:            Secondary (from CSV):
Search intent:                            Pillar + sibling spokes:
SERP top 5 (domain, type, word count):    SERP features (AIO, PAA, video):
PAA questions →  H2/FAQ mapping:
Gap: what no top-5 result shows:
Screenshots/video needed:                 Official sources:
AppCard crop + feature link:              Reviewer:
```

---

## 6. Workflow with DataForSEO (from ElixRank's credentials)

| Step | Endpoint | When | Cost |
|---|---|---|---|
| Brief | `serp/google/organic/live/advanced` (pl, 2616, mobile, depth 10) | per page, before writing | ≈ $0.002 |
| Content gap | `dataforseo_labs/google/ranked_keywords` on the top 3 URLs | per pillar | ≈ $0.02 |
| Expand a cluster | `dataforseo_labs/google/keyword_suggestions` | per pillar | ≈ $0.05–0.13 |
| Rank tracking | SERP live for the ~60 primary keywords, checking where `ksef.shipailab.com` appears | weekly | ≈ $0.12 a run |
| Trend watch | Labs `keyword_overview` for the 20 seasonal keywords | monthly, and before Dec 2026 | ≈ $0.02 |

Total is under $5 a month. A small script, `scripts/ksef-seo/brief.mjs <keyword>`, can print the brief's SERP block. Combine the rank data with GSC (`sc-domain:shipailab.com`, filtered by page prefix), since GSC is free and gives the real impressions.

---

## 7. Off-page (without spam)

- **Status page and the XML viewer** are made to be cited. Pitch them to business journalists who write about KSeF outages (businessinsider.com.pl, money.pl, fakt.pl and inforlex all ranked for "ksef nie działa").
- **YouTube channel**: on hold (decided 2026-10-15). Revisit after Wave 2.
- **Accountant communities** (Facebook groups show up in SERPs): share the tools, not ads.
- **shipailab.com** links to the subdomain from its project card and from an article about building the app.
- **At launch:** App Store / Play listings, dobreprogramy.pl (it ranks for "aplikacja mobilna ksef"), and Product Hunt PL/indie lists.

---

## 8. Measurement

| Metric | Target by 2027-02-28 |
|---|---|
| Indexed pages (GSC) | ≥ 30 |
| Primary keywords in the top 10 | ≥ 15 of 60 |
| Organic clicks a month (GSC) | First goal 5K in Jan 2027, given the peak. Re-forecast after Wave 1 is indexed |
| Waitlist / store clicks from guides | conversion ≥ 1.5% of guide sessions |
| AI Overview citations | spot-check the 10 Wave 1 queries monthly |

Review every 2 weeks: pages ranking at positions 8–20 get an internal-link boost and a content refresh, before any new pages are written.

---

## 9. Decisions needed

Decided 2026-10-15:
1. **Reviewer:** no. Replaced by the research and cross-check process in §5.4.
2. **Video:** not yet. Use screenshot step strips and short GIFs instead.
3. **Tools:** the XML viewer runs in the visitor's browser, so it uses no server RAM. The status checker sends a few HTTP pings every 5 minutes and stores tiny rows, so it needs only a few MB of RAM. It can run as a Cloudflare Worker cron with D1/KV (free tier, no VPS load), with the Next.js page reading its JSON.
4. **Domain:** keep `ksef.shipailab.com`.

Still open:
5. **Pace:** 2–3 pages a week assumes I draft and you review. Confirm.
6. Status checker: Cloudflare Worker (recommended) or the VPS.
