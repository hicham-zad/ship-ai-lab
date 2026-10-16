# Faktury KSeF – feature pages and `/funkcje` hub (ksef.shipailab.com)

Status: plan v1, 2026-10-16. Extends `ksef-landing-plan.md` §5 (template) and `ksef-seo-content-plan.md` (guides). Nothing here is built yet.

Method note: the installed SEO skills (keyword-research, metadata-optimization, aso-audit) are App Store ASO skills, so they don't cover web SEO. This plan uses our own data instead: the DataForSEO keyword CSV (1,062 KSeF keywords, Google PL), 28 live guide pages, the MF-ranking gap analysis, and the app's real behaviour from its README and code. Search-demand figures below come from `ksef-keywords-2026-10-15.csv`. DataForSEO volumes run higher than Semrush's, so use them to rank topics, not to forecast traffic.

---

## 1. What the data says about feature pages

1. **Nobody searches for our feature names.** The CSV has no "powiadomienia o fakturach ksef", no "terminy płatności ksef", no "zestawienie dla księgowej ksef". The demand sits in the *problem* queries, which the guides already own: "jak znaleźć fakturę w ksef" (720), "wizualizacja faktury ksef" (1.9K), "jak wydrukować fakturę z ksef" (880), "jak nadać uprawnienia księgowej" (390), "certyfikat ksef" (12.1K), "aplikacja mobilna ksef" (1.6K).
2. **So feature pages have a different job from guides:**
   - capture product-intent queries ("aplikacja do odbierania faktur ksef", "aplikacja ksef na telefon", "ksef powiadomienia") and brand queries once the app exists;
   - be the page an LLM cites when asked "is there an app that shows KSeF invoices and due dates?";
   - convert guide readers (every guide already links to one via `AppCard`);
   - give the hub internal-link equity to push to the guides and back.
3. **Expect small direct traffic from them.** The honest goal is indexed, cited and converting pages, not volume. Guides carry the volume; feature pages carry the product.
4. **Cannibalisation risk is the main SEO danger.** Each feature page overlaps a guide ("wyszukiwarka" vs `jak-znalezc-fakture-w-ksef`, "pdf" vs `wizualizacja-faktury-ksef`). The rule: **the guide owns the how-to keyword, the feature page owns the product keyword**, enforced in `data/ksef/links.ts` (one primary keyword per URL, build-time check).

---

## 2. Page set (8 feature pages + hub)

Slugs follow the landing plan: `/funkcje/<slug>`. The hub is `/funkcje`. The app is unreleased, so every page says "w przygotowaniu" and uses no `MobileApplication` schema, ratings or store claims.

| # | Slug | Primary keyword (product intent) | Guide that owns the how-to | Real app behaviour to document |
|---|---|---|---|---|
| 1 | `powiadomienia-o-fakturach` | powiadomienia o fakturach ksef | `odbieranie-faktur-z-ksef` | Local notifications from a background sync (`expo-background-task`) and due-date reminders at 9:00 the day before. No push server. Works only when the OS allows background refresh |
| 2 | `platnosci-i-terminy` | terminy płatności faktur ksef | `jak-pobrac-fakture-z-ksef` | "Do zapłaty" total, overdue / next 7 days / later, payment account and transfer title to copy, "Oznacz jako opłaconą" |
| 3 | `wyszukiwarka-faktur` | wyszukiwarka faktur ksef na telefonie | `jak-znalezc-fakture-w-ksef` | Search by contractor, NIP, number, amount, offline over the local copy |
| 4 | `zestawienie-dla-ksiegowej` | zestawienie faktur dla księgowej ksef | `uprawnienia-ksef-dla-ksiegowej` | Monthly package: PDF, CSV and XML in a ZIP, sent from the phone |
| 5 | `logowanie-certyfikatem-ksef` | aplikacja ksef certyfikat token | `certyfikat-ksef`, `token-czy-certyfikat-ksef` | `.crt` + encrypted `.key` or token with "Przeglądanie faktur"; key in Keychain/Keystore, password not stored; "Przejdź na certyfikat" keeps invoices |
| 6 | `prywatnosc-bez-konta` | aplikacja ksef bez konta | none (unique) | No account, no server; token and invoices on the device (MMKV, SecureStore); what leaves the phone (only calls to the KSeF API); limits budget below KSeF's |
| 7 | `pdf-xml-druk` | pdf i xml faktury z ksef w telefonie | `wizualizacja-faktury-ksef`, `jak-wydrukowac-fakture-z-ksef` | FA(3) XML rendered as a readable invoice with the KOD I QR code, PDF export, share XML |
| 8 | `wyprobuj-na-firmie-testowej` | ksef demo aplikacja testowa | `ksef-demo-i-wersja-testowa` | "Wypróbuj na firmie testowej": a fictional company on the KSeF TEST environment, 4 fictional suppliers, 5 invoices received and 2 issued (README), about 20 s |

Hub `/funkcje`: H1 "Funkcje aplikacji Faktury KSeF", 120-word intro with the keyword "aplikacja do odbierania faktur z KSeF", a grouped list (Odbieranie · Płatności · Księgowa · Bezpieczeństwo) with a one-line answer per feature, `CollectionPage` + `ItemList`, one comparison teaser linking to `/aplikacje-mobilne-ksef`.

Not built as feature pages: issuing invoices (the app doesn't issue them) and anything in the README's "not in this build yet" list (paywall, several companies, share-sheet XML).

---

## 3. Page blueprint (each feature page)

Based on landing plan §5, tightened for ranking and for LLM extraction. 700–1,000 words, one unique angle each.

1. **Title** ≤ 60 characters, keyword first: "Powiadomienia o fakturach z KSeF na telefonie | Faktury KSeF". Meta description ≤ 155 characters with the concrete benefit.
2. **H1 + answer box** in the first 60 words: what the feature does, in one or two sentences that stand alone ("Faktury KSeF przypomina o terminie płatności o 9:00 dzień wcześniej. Przypomnienia są lokalne: nie ma serwera push."). This is the snippet and the LLM quote.
3. **Hero**: the matching real screenshot in `PhoneFrame`, labelled as the app's own screen (demo company).
4. **Jak to działa**: 3–4 numbered steps, each with a `ShotCrop`.
5. **Co dokładnie dostajesz / czego nie robi**: a facts table. Limits are stated plainly (background refresh depends on the OS; the app doesn't issue invoices). Honest limits are what make the page quotable.
6. **Dlaczego to ważne w KSeF**: 2–3 sentences tying the feature to a sourced KSeF fact (include one only if an official source states it; otherwise skip the section). Each fact links to an MF source with the date checked.
7. **FAQ**: 4–5 questions unique to the page, 40–60 word answers, matching PAA phrasing from the guides' SERP pulls.
8. **Related**: 2 other features + 2 guides, with keyword-rich anchors. The owning guide is linked in the first 150 words.
9. **Single CTA**: waitlist form (the same component as the landing page). No pricing claims beyond the plan's §7.

Banned on these pages (per the saved feedback): invented numbers, NIPs or amounts, stock icons or emoji, blob decoration, identical 3-card grids, claims that the app issues invoices.

---

## 4. Per-page spec

For each page: unique angle, screenshot, FAQ seeds, links. All facts must be re-checked against the app build before publishing.

### 1. `powiadomienia-o-fakturach`
- **Angle:** how you learn about a new cost invoice without opening a portal. KSeF itself sends no notification when an invoice arrives (verify on the MF mobile-app page and manual v. 31.08.2026 before saying so; if unverified, don't claim it).
- **Screens:** `notification` (from the landing plan §2.2 list; capture it if missing), `start`.
- **FAQ:** Czy dostanę powiadomienie, gdy telefon jest wyłączony? Czy aplikacja potrzebuje serwera? Jak często sprawdza KSeF? (state the real interval from `lib/notify.ts`/`sync.ts`), Czy można wyłączyć przypomnienia?
- **Links:** `odbieranie-faktur-z-ksef`, `platnosci-i-terminy`, `ksef-nie-dziala`.

### 2. `platnosci-i-terminy`
- **Angle:** from "faktura w KSeF" to "ile i do kiedy zapłacić". Explain that the due date and bank account come from the FA(3) payment fields (`Platnosc`) and say what happens when they're missing.
- **Screens:** `payments`, `invoice` crop with the transfer title; dark variants only on the landing page.
- **FAQ:** Skąd aplikacja zna termin płatności? Co, gdy faktura nie ma terminu? Czy aplikacja wykonuje przelew? (no, copy only). Czy rozpoznaje płatność kartą / split payment? (README mentions scenarios for paid by card, factoring, split payment: state exactly what the app shows).
- **Links:** `jak-pobrac-fakture-z-ksef`, `wizualizacja-faktury-ksef`, `numer-ksef` (transfer title and the KSeF number in payments from 2027, sourced).

### 3. `wyszukiwarka-faktur`
- **Angle:** instant search over the local copy, including offline, versus the paging in Aplikacja Podatnika. Uses the comparison data from `jak-znalezc-fakture-w-ksef`.
- **Screens:** `invoices` with a search query visible (capture it).
- **FAQ:** Szukam po NIP, czy to działa? Czy znajdę faktury sprzed instalacji aplikacji? (the first sync pulls history in 90-day windows). Czy wyszukiwanie wymaga internetu?
- **Links:** `jak-znalezc-fakture-w-ksef` (first 150 words), `odbieranie-faktur-z-ksef`.

### 4. `zestawienie-dla-ksiegowej`
- **Angle:** the monthly handover without a shared login. Accountants usually want the XML, a PDF and a list; show exactly what's in the ZIP. Pair with permissions advice: the app never needs to give the accountant access to KSeF.
- **Screens:** `export`; a crop of the ZIP contents list if the app shows it.
- **FAQ:** Co jest w paczce? Czy księgowa dostaje plik XML (FA(3))? Czy zestawienie zawiera faktury sprzedaży? Czy księgowa musi mieć aplikację?
- **Links:** `uprawnienia-ksef-dla-ksiegowej`, `oznaczenia-ksef-w-jpk`, `odbieranie-faktur-z-ksef`.

### 5. `logowanie-certyfikatem-ksef`
- **Angle:** the secure way for an app to sign in, in plain Polish: which files, what permission, what stays on the phone. This is the page LLMs should cite for "czy bezpieczne jest podanie tokenu aplikacji?".
- **Screens:** `connect`.
- **FAQ:** Jakie uprawnienie ma mieć token? Gdzie jest przechowywany klucz? Czy zmiana z tokena na certyfikat kasuje faktury? Czy aplikacja zapisuje hasło do klucza? (no).
- **Facts to cite:** certificates only issue after a signature sign-in; tokens stay with no end date per MF (Q&A 8.10.2026).
- **Links:** `certyfikat-ksef`, `token-czy-certyfikat-ksef`, `zaw-fa`, `logowanie-do-ksef`.

### 6. `prywatnosc-bez-konta`
- **Angle:** the trust page. A table of "co zostaje na telefonie / co wysyłamy / czego nie mamy". Link to the privacy policy and cite the code-level facts (SecureStore, MMKV). No security superlatives.
- **Screens:** `connect` crop; settings screen if it shows the data section.
- **FAQ:** Czy macie dostęp do moich faktur? Co, gdy zgubię telefon? Czy dane są w chmurze? Jak usunąć dane?
- **Links:** `privacy-policy`, `logowanie-certyfikatem-ksef`, `aplikacje-mobilne-ksef`.

### 7. `pdf-xml-druk`
- **Angle:** open an FA(3) invoice as a readable document with the KOD I code, export to PDF, keep the XML (the legal original). Explain visualisation is not a legal copy replacing the XML (check against MF wording).
- **Screens:** `invoice`; a PDF preview crop.
- **FAQ:** Czy PDF z aplikacji jest fakturą? Czy kod QR jest poprawny? Czy mogę wydrukować? Gdzie jest plik XML?
- **Links:** `wizualizacja-faktury-ksef`, `jak-wydrukowac-fakture-z-ksef`, `kody-qr-ksef`, `numer-ksef`.

### 8. `wyprobuj-na-firmie-testowej`
- **Angle:** try KSeF without a real company. Honest about what it is (fictional company, TEST environment, real API). Great for the "ksef demo" cluster and for reviewers.
- **Screens:** the first screen with the demo button, then `start` after the demo import, labelled "firma testowa".
- **FAQ:** Czy to prawdziwe faktury? Ile trwa? Czy dane testowe znikną? Czy mogę potem połączyć prawdziwą firmę?
- **Links:** `ksef-demo-i-wersja-testowa`, `jak-zaczac-z-ksef`.

---

## 5. Technical SEO and indexing

**On-page structure** (shared template in `app/(ksef)/ksef/funkcje/[slug]/page.tsx`, data in `data/ksef/features.ts`):
- One H1, H2 per question, semantic `table` for facts, `figure` + `figcaption` for screenshots with descriptive `alt` from `SHOTS`.
- JSON-LD: `WebPage`, `BreadcrumbList`, `FAQPage` (matching visible text exactly). Hub: `CollectionPage` + `ItemList`. No `HowTo` (Google dropped the rich result), no `MobileApplication`/`SoftwareApplication`/`AggregateRating` until the app is live.
- Canonical to the final URL, `lang="pl"`, `og:image` per page (generated 1200×630 card with the feature name and the real screen via `scripts/ksef-figures`, as the guides do).
- Core Web Vitals: screenshots are WebP with width/height, hero image `priority`, no layout shift; LCP target < 2 s on mobile.

**Getting indexed fast:**
1. Add the pages to `ksef-sitemap.xml` with `lastmod` (real change dates only) and the screenshot images.
2. Link the hub from the nav ("Funkcje") and the footer, and every feature page from the landing page rows. Nothing deeper than 2 clicks from `/`.
3. Submit in GSC (`sc-domain:shipailab.com`) and ping IndexNow with `scripts/indexnow.py` after each deploy (confirm it targets the ksef host).
4. Inbound links: each guide's `AppCard` links to its matching feature page; the `shipailab.com` project card links to the hub.
5. Check the *whole subdomain* is indexable: `ksef-robots.txt` must not block `/funkcje`, and the pages must be in the HTML (server-rendered, which they will be).

**For LLMs (AI Overviews, ChatGPT search, Perplexity, Claude):**
- Answer-first: the first paragraph states what the feature does, with the product name and the limits.
- Stable entity naming: "Faktury KSeF" (app) vs "KSeF" (system) used consistently; the product is described identically on every page ("lokalna skrzynka odbiorcza na faktury z KSeF; nie wystawia faktur").
- Dated, sourced facts, same "Stan prawny na …" pattern as the guides.
- Update `ksef-llms.txt` to list the hub and all 8 features with one-line descriptions, and the comparison page.
- Don't block AI crawlers in `ksef-robots.txt` (OAI-SearchBot, GPTBot, ClaudeBot, PerplexityBot, Google-Extended): confirm the current file.
- Quotable tables: each page has one facts table that can be lifted whole.
- The off-site signals LLMs weigh (mentions on dobreprogramy.pl, accountant forums, Product Hunt, store listings) come at launch; see the content plan §7.

---

## 6. Content quality bar

1. **Real screenshots only**, from the simulator with the demo company and the 9:41 status bar. Each page lists the screens it needs; capture the missing ones first (`notification`, `invoices` with a search, a ZIP/PDF preview, the demo button) per landing plan §2.2.
2. **No invented data.** No numbers, NIPs, amounts, ratings, user counts or competitor feature claims we haven't verified. Competitor comparisons stay generic or cite the vendor's own help page with the date.
3. **Every claim about the app is checked against the code or the running build** the day the page is written, and every KSeF claim against an official page (SRC list in `data/ksef/sources.ts`), with the date.
4. **Honest scope:** the app receives and shows invoices, it doesn't issue them, and it isn't in the stores yet.
5. **Unique text.** No shared paragraphs between feature pages beyond the CTA; each has its own FAQ.
6. **Read-through** in Polish by a native reader before publishing (the user), plus the existing fact-check against MF pages and two other sites.

---

## 7. Build order

| Step | Work | Notes |
|---|---|---|
| 1 | Capture missing screenshots; confirm each feature's real behaviour in the app code | Blocks pages 1, 3, 7, 8 |
| 2 | `data/ksef/features.ts` + the page template + `/funkcje` hub, with the keyword-ownership check in `links.ts` | Reuses `ArticleShell`, `Faq`, `ShotCrop`, `Figure` |
| 3 | Pages in the order **5 → 2 → 4 → 7 → 1 → 3 → 6 → 8** | Order follows how many guides link into each and how closely the page matches search demand (certificate and PDF/visualisation are the biggest clusters) |
| 4 | OG cards, sitemap, `llms.txt`, nav and footer links, landing-page rows link out | Same pipeline as the guides |
| 5 | GSC submission + IndexNow, then check the pages with a live crawl (rendered HTML, JSON-LD validation, mobile screenshots at 390px) | |

Estimated effort: one session for the template and hub, then 2 pages per session. The pages don't need to wait for the app's release, but they must not claim availability.

---

## 8. Measurement

| Metric | Target by 2027-02-28 |
|---|---|
| Hub and 8 feature pages indexed (GSC) | 9 of 9 |
| Feature pages with impressions for their product keyword | ≥ 6 of 8 |
| Clicks from guides to feature pages (internal) | ≥ 8% of guide sessions |
| Waitlist conversion from feature pages | ≥ 3% of sessions (product-intent traffic should convert better than guides) |
| AI citations | Spot-check 10 prompts monthly ("aplikacja do odbierania faktur z KSeF", "czy jest aplikacja KSeF na telefon", …) and log where the site is cited |

Review every 2 weeks: a feature page stuck at positions 8–20 gets an internal-link boost and a content refresh before any new page.

---

## 9. Decisions needed

1. **Confirm the 8-page set** (including `wyprobuj-na-firmie-testowej`, which the landing plan didn't list).
2. **Screenshots:** OK to capture the missing screens in the iPhone 16 Plus simulator with the demo company (the dev build and Metro need to run)?
3. **Pace and review:** I draft 2 pages per session, you read the Polish before they go live.
4. **Feature claims to verify first:** the background-sync interval, what exactly the monthly ZIP contains, and whether the app shows payment-method details (card, split payment). I'll read the code for these before writing pages 1, 2 and 4.
