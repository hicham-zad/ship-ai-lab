# Faktury KSeF – site, landing page and SEO plan (ksef.shipailab.com)

Status: plan v2, 2026-10-15. Plan only, nothing built. The app is not released yet: paywall, multi-company and XML share-sheet import are still missing. Nothing on the site may claim store availability, ratings or final prices before launch.

v2 replaces v1 because the current pages look generic and template-made. Section 0 lists why; sections 1–3 are the new design, screenshot and linking systems; the rest is content, SEO, pricing and the build order.

---

## 0. Audit of the current pages (screenshots taken 2026-10-15, 1440px and 390px)

| Problem | Where | Why it hurts |
|---|---|---|
| No product shown. Zero screenshots on any page, although 8 exist | all pages | Visitors can't see what they'd get. Image search gets nothing |
| Copy is wrong: says the app *issues* invoices and has an offline mode | landing, terms | The app is an inbox. Users would feel misled |
| Borrowed look: Nerra's wellness styling (Playfair serif headings, floating pastel circles, emoji badges "💬 POMOC") recoloured navy/red | all pages | Reads as a template. A serif plus blobs says lifestyle blog, not a finance tool for businesses |
| Brand mismatch: navy and red, with a text box "KSeF" as the logo | nav, buttons | The app is soft orange on warm neutrals with a real icon. Site and app look like two companies |
| Generic 3-card feature grid with no icons, proof or links | landing | No hierarchy, nothing to click, no SEO value |
| Thin page: landing ends after two card rows | landing | Little content to rank on, no FAQ, no pricing, no comparison |
| Guides are text-only: no app tie-in, no image, no CTA. Bullets render without markers | guides | No conversion path from readers to the app |
| Two different FAQ styles (▸ native disclosure vs "+" cards) | guide vs support | Inconsistent, unfinished feel |
| Footer: one run-on line of links on a heavy navy band | all pages | Weak navigation and weak internal links |
| Fonts via CSS `@import` (render-blocking), Playfair has poor Polish diacritic rhythm | all pages | Slower LCP |
| Dark mode ignored, although the app's dark screenshots exist | all pages | Missed polish |

---

## 1. Design system: make the site look like the app

Rule: **the site is an extension of the app's UI**, not a marketing template. Every token, icon and component comes from `~/Desktop/ksef-inbox` (`theme/tokens.ts`, `components/Icon.tsx`, inset-grouped lists).

### 1.1 Tokens (copy from the app, light and dark)

| Token | Light | Dark | Use |
|---|---|---|---|
| `--bg` | `#F7F5F2` | `#0F0D0C` | page |
| `--card` | `#FFFFFF` | `#1D1A18` | grouped sections, cards |
| `--card-muted` | `#F4F1ED` | `#2A2623` | alternating bands |
| `--text` | `#1C1714` | `#F3EEEA` | headings, body |
| `--text-muted` | `#77706A` | `#A39C95` | secondary |
| `--primary` | `#EF6C30` | `#FF8A4F` | primary buttons, active states |
| `--primary-deep` | `#C4501A` | `#FFA77A` | links and orange text (contrast-safe) |
| `--primary-soft` | `#FFEDE3` | `#3B2418` | highlights, chips |
| `--accent` / `--accent-soft` | `#B7860B` / `#FCF2D2` | `#E8B23A` / `#3A2E14` | "Termin za 2 dni" pills only |
| `--danger` / `--danger-soft` | `#D9443F` / `#FCEBEA` | `#F07070` / `#3A1F23` | "Po terminie" pills only |
| `--success` | `#1E9E63` | `#4CD08F` | "Opłacona", checkmarks |
| `--border` | `rgba(40,28,18,.10)` | `rgba(243,238,234,.12)` | hairlines |
| radius | 10 / 14 / 22 / pill | same | same as app |

Theming: tokens on `:root`, dark under `@media (prefers-color-scheme: dark)`. Dark mode swaps every screenshot to its dark version where one exists (`<picture>` with `media="(prefers-color-scheme: dark)"`).

### 1.2 Type
- **Inter** (variable, `latin` + `latin-ext` for ą ę ł ó ś ź ż), via `next/font`, self-hosted. No serif anywhere.
- Scale: H1 52/56 px desktop, 36/40 px mobile, weight 700, tracking −0.02em. H2 34 px / 26 px. Body 17/28. Small 14/20.
- `font-variant-numeric: tabular-nums` on every amount (2 886,17 zł) and date, like the app.
- Amounts and dates in Polish format (`1 478,06 zł`, `15.10.2026`), with non-breaking spaces before `zł`.

### 1.3 Icons
- **One set: the app's own** 24×24 stroke icons from `components/Icon.tsx` (inbox, home, calendar, clock, arrows, gear…), ported to an inline-SVG `<Icon name>` server component. 1.75 px stroke, `currentColor`.
- Missing icons (bell, search, shield-lock, file-xml, file-pdf, printer, key, export) are drawn in the same grid and stroke and added to **both** the app and the site, so they stay identical.
- **No emoji, no mixed icon libraries, no filled/outline mix.** Icons sit in a 40 px rounded square (`--primary-soft` background, `--primary-deep` stroke) only in feature lists; elsewhere icons are inline at text size.

### 1.4 Logo and brand
- Nav: real app icon (`/ksef/ksef-faktury-ikona-64.webp`, 32 px, radius 8) + wordmark "Faktury KSeF" in Inter 600. Remove the text box "KSeF".
- Favicon and apple-touch-icon from the icon files (section 6).

### 1.5 Components (the only building blocks allowed)

| Component | Description |
|---|---|
| `PhoneFrame` | Screenshot inside a thin device frame (CSS only: 44 px radius, 10 px bezel, soft shadow `0 30px 60px -20px rgba(58,36,20,.25)`). Props: `shot`, `priority`, `dark`. Always with `width`/`height`, `srcset`, `sizes` |
| `ShotCrop` | A zoomed part of a screenshot (e.g. just the search field, just the 3 export buttons) using `object-position` + `object-fit: cover` on the same file, inside a card. Shows detail without new image files |
| `GroupedList` | Inset-grouped list exactly like the app: white card, rows with icon / title / muted subtitle / chevron, hairlines between rows. Used for feature lists, FAQ, navigation lists |
| `StatusPill` | The app's pills: Po terminie (danger), Termin za N dni (accent), Opłacona (success). Used in copy to echo the UI |
| `FeatureRow` | Text column (eyebrow, H2, 2–3 sentences, 3 bullet facts with checkmark icon, inline link to the feature page) + `PhoneFrame` or `ShotCrop`. Alternates left/right on desktop, stacks text-then-image on mobile |
| `AppCard` | Compact promo block for guides: icon, one line, `ShotCrop` relevant to the guide, button "Zobacz aplikację". Content chosen per guide (section 3.4) |
| `Breadcrumbs` | Visible + `BreadcrumbList` JSON-LD from the same data |
| `RelatedLinks` | 3 cards from the link graph (section 3), each with a small screenshot thumbnail |
| `Faq` | One style everywhere: `GroupedList` rows with `<details>`, chevron rotates. Feeds `FAQPage` JSON-LD |
| `ComparisonTable` | Sticky first column, ✓ / – drawn with icons (not emoji), "Faktury KSeF" column tinted `--primary-soft` |
| `PricingCards` | Free / Pro (month ↔ year toggle, no JS: two radio-styled links or CSS `:has`) / Lifetime |
| `Waitlist` | Email field + button + RODO line. Server action, no client JS beyond the form |
| `SiteFooter` | 4 columns: Aplikacja (features), Poradniki (top guides), Porównania, Firma (support, privacy, terms, shipailab.com). Light `--card-muted` band, not navy |

### 1.6 Bans (the template look checklist)
No floating circles or gradient blobs. No emoji badges. No centred-everything hero with text only. No three identical cards as a feature section. No stock illustrations. No "bez stresu" style slogans: concrete claims only ("Powiadomienie, gdy przyjdzie nowa faktura"). No more than one orange filled button per screen. Mobile is designed first, at 390 px.

---

## 2. Screenshot system

### 2.1 What exists (`data/ksef/screenshots.ts`, files in `public/ksef/`)

| Key | Screen | Light/Dark |
|---|---|---|
| `start` | Start dashboard: do zapłaty, nowe faktury, month totals | light |
| `invoices` | Faktury list: Otrzymane/Wystawione, search, chips | light |
| `invoice` | Invoice detail: amount, Konto/PDF/XML/Drukuj, payment data | light |
| `payments` | Płatności: day strip, overdue / 7 days / later | light |
| `export` | Zestawienie dla księgowej: PDF / CSV / XML ZIP | light |
| `connect` | Faktury z KSeF: certificate / token / demo / open XML | light |
| `invoiceDark` | Invoice detail | dark |
| `paymentsDark` | Płatności | dark |

### 2.2 Missing screenshots to capture (simulator, 9:41 status bar, demo company, iPhone 6.7")

| New key | Screen | Needed for |
|---|---|---|
| `notification` | Lock screen with "Nowa faktura od Energia Plus S.A., 432,76 zł" | landing hero support, /funkcje/powiadomienia |
| `search` | Faktury with a typed query (e.g. NIP digits) and filtered result | /funkcje/wyszukiwarka-faktur, guide "jak znaleźć fakturę" |
| `swipePaid` | Row mid-swipe "Oznacz jako opłaconą" + toast with Cofnij | /funkcje/platnosci-i-terminy |
| `pdf` | Generated PDF with KOD I QR code | /funkcje/pdf-xml-druk, guide "numer KSeF / kod QR" |
| `certificate` | Certificate import form (.crt + .key) | /funkcje/logowanie-certyfikatem, guide "token vs certyfikat" |
| `tokenSwitch` | Settings "Przejdź na certyfikat KSeF" | guide "token KSeF do 31.12.2026" |
| `demo` | Demo company syncing (progress) | landing "Wypróbuj bez firmy", FAQ |
| `error` | A plain-Polish error, e.g. limit zapytań with retry time | /funkcje/limity-i-bledy, guide "limit zapytań KSeF" |
| dark set | `start`, `invoices`, `export`, `connect` in dark | dark-mode `<picture>` pairs |

Processing (same as the existing set): PNG 1290×2796 → WebP 700w (q 82) + 350w (q 80), Polish SEO filename `ksef-<what>.webp`, entry in the manifest with `alt` (what is visible, with the keyword where natural) and `title`. Budget: ≤ 70 KB at 700w, ≤ 30 KB at 350w.

### 2.3 Placement matrix (which screenshot goes where)

| Page | Hero | In body | Related thumbnails |
|---|---|---|---|
| `/` landing | `start` in `PhoneFrame` + `notification` overlapping (desktop), `start` only on mobile | every feature row: one screenshot (section 4) | — |
| `/funkcje/powiadomienia-o-fakturach` | `notification` | `start` (Nowe faktury crop), `payments` (reminders) | `payments`, `invoices`, `export` |
| `/funkcje/platnosci-i-terminy` | `payments` | `swipePaid`, `invoice` crop (Konto + tytuł przelewu), `paymentsDark` | |
| `/funkcje/wyszukiwarka-faktur` | `invoices` | `search`, chips crop | |
| `/funkcje/zestawienie-dla-ksiegowej` | `export` | `invoice` crop (PDF/XML buttons), `pdf` | |
| `/funkcje/logowanie-certyfikatem-ksef` | `connect` | `certificate`, `tokenSwitch` | |
| `/funkcje/prywatnosc-bez-konta` | `connect` crop (local-data note) | `error` (limits handled) | |
| `/funkcje/pdf-xml-druk` | `invoice` | `pdf`, `invoiceDark` | |
| comparison page | `start` + `invoices` side by side | table, then `search` and `export` as proof | |
| each guide | none (text first, fast LCP) | one `AppCard` with a relevant crop (3.4), optional inline screenshot where the guide describes a step | 3 related, with thumbs |
| `/guides` hub | — | thumbnail per guide card (crop of the related screen) | |
| support | — | `connect` and `tokenSwitch` next to the matching FAQ | |

Loading rules: only the hero image is `fetchpriority="high"` + eager; all others `loading="lazy" decoding="async"`. `sizes` per slot: hero `(max-width: 860px) 70vw, 320px`, feature rows `(max-width: 860px) 60vw, 280px`, thumbnails `120px` (uses 350w). Every image has explicit `width`/`height`.

---

## 3. Internal linking system

### 3.1 Structure: hub and spoke, max 2 clicks from the landing to any page

```
                          ┌──────────── / (landing) ────────────┐
                          │                                     │
              /funkcje (features hub)                    /guides (guides hub)
      ┌──────┬──────┬─────┼─────┬──────┬──────┐      ┌──────┬──────┼──────┬──────┐
 powiad. płatn. wyszuk. zestaw. logow. prywat. pdf   od-kiedy offline token limit pobierz …
      └──────── each feature ⇄ 2 guides ──────────────────┘
                          │
        /aplikacja-podatnika-ksef-alternatywa (comparison) ⇄ landing, 3 features
```

### 3.2 Link map (source of truth: `data/ksef/links.ts`)

| Page | Must link to (in body, not only nav) | Anchor text examples |
|---|---|---|
| Landing | all 7 feature pages (from feature rows), comparison, guides hub, 3 top guides, pricing anchor | "powiadomienia o nowych fakturach z KSeF", "zestawienie faktur dla księgowej" |
| Feature page | landing (hero CTA + breadcrumb), 2 related features, 2 guides, comparison if relevant | "jak uzyskać certyfikat KSeF", "terminy płatności faktur" |
| Guide | 1 feature page (in the `AppCard` and once in text where it fits), 2–3 related guides, guides hub (breadcrumb) | "aplikacja, która pobiera faktury z KSeF", "co zrobić przy limicie zapytań" |
| Comparison | landing, 3 features, 1 guide | "wyszukiwanie faktur po NIP" |
| Support | 3 guides (token, certyfikat, limit), privacy, terms | — |
| Footer (every page) | 7 features, 4 top guides, comparison, support, privacy, terms, shipailab.com | short labels |

Each page's relations are declared once in `links.ts` (`related: { features: [...], guides: [...] }`). `RelatedLinks`, the footer, the sitemap and breadcrumbs read from it, so adding a page updates every link block.

### 3.3 Rules
1. Every page gets ≥ 3 **contextual** in-body links in, and ≥ 3 out. Nav and footer links don't count.
2. No orphans. A build-time check (`scripts/ksef-links.ts`) fails if a page in the sitemap has < 3 inbound body links or links to a 404.
3. Anchors describe the target with its keyword, varied (no "kliknij tutaj", no identical anchor everywhere).
4. One canonical URL per topic. A guide and a feature page never target the same keyword: feature = "the app does X", guide = "how X works in KSeF".
5. Every link is root-relative on the subdomain (`/funkcje/...`). One link to shipailab.com in the footer. The main site links to ksef.shipailab.com from its project card.
6. Breadcrumbs on every inner page: Faktury KSeF › Funkcje / Poradniki › page.

### 3.4 `AppCard` mapping for guides (screenshot + link)

| Guide | Crop shown | Links to |
|---|---|---|
| ksef-od-kiedy | `start` (Nowe faktury) | /funkcje/powiadomienia-o-fakturach |
| ksef-tryb-offline | `invoice` (PDF with QR) | /funkcje/pdf-xml-druk |
| faktura-ustrukturyzowana | `invoice` (XML / PDF buttons) | /funkcje/pdf-xml-druk |
| token-ksef-31-12-2026 (new) | `tokenSwitch` | /funkcje/logowanie-certyfikatem-ksef |
| certyfikat-ksef-jak-uzyskac (new) | `certificate` | /funkcje/logowanie-certyfikatem-ksef |
| limit-zapytan-ksef (new) | `error` | /funkcje/prywatnosc-bez-konta (limits section) |
| jak-pobrac-fakture-z-ksef (new) | `invoices` | /funkcje/wyszukiwarka-faktur |
| numer-ksef (new) | `invoice` | /funkcje/pdf-xml-druk |

---

## 4. Landing page `/`, section by section

Target: "aplikacja KSeF", "KSeF na telefon". About 1,200–1,500 words of real content.

| # | Section | Layout | Content | Screenshot | Links out |
|---|---|---|---|---|---|
| 1 | Nav | sticky, blur on scroll | icon + "Faktury KSeF"; Funkcje · Poradniki · Cennik · Pomoc; button "Zapisz się" | — | hubs |
| 2 | Hero | 2 columns desktop, stacked mobile | H1 "Faktury z KSeF na telefonie". Sub: "Widzisz, co przyszło, ile zapłacić i do kiedy. Bez konta, dane tylko na Twoim telefonie." `Waitlist` inline + "Wkrótce w App Store i Google Play" (muted, no badges yet). 3 proof chips with icons: Bez konta · Dane na telefonie · iPhone i Android | `start` + `notification` | — |
| 3 | Proof strip | 4 facts in a row | "Faktury otrzymane i wystawione" · "Szukaj po NIP, nazwie, kwocie" · "Eksport PDF, CSV, XML" · "Certyfikat lub token KSeF" | — | — |
| 4 | Feature row: inbox + search | text left, phone right | H2 "Wszystkie faktury z KSeF w jednym miejscu" | `invoices` | /funkcje/wyszukiwarka-faktur |
| 5 | Feature row: notifications | phone left | H2 "Powiadomienie, gdy przyjdzie nowa faktura" | `notification` | /funkcje/powiadomienia-o-fakturach |
| 6 | Feature row: payments | text left | H2 "Terminy płatności bez arkusza" + StatusPills inline | `payments` + `ShotCrop` of `invoice` payment data | /funkcje/platnosci-i-terminy |
| 7 | Feature row: accountant | phone left | H2 "Zestawienie dla księgowej jednym przyciskiem" | `export` | /funkcje/zestawienie-dla-ksiegowej |
| 8 | Privacy band | full-width `--card-muted`, `GroupedList` of 4 rows | "Bez konta", "Bez naszego serwera", "Token w Keychain / Keystore", "Limity KSeF pod kontrolą" | `connect` crop | /funkcje/prywatnosc-bez-konta, /funkcje/logowanie-certyfikatem-ksef |
| 9 | How it works | 3 numbered steps with small crops | Połącz (certyfikat/token) → Synchronizuj → Płać i wysyłaj księgowej. "Bez firmy? Wypróbuj na firmie testowej." | `connect`, `start`, `export` crops | guide token/certyfikat |
| 10 | Dark mode | 2 phones side by side | short line | `invoiceDark`, `paymentsDark` | — |
| 11 | Comparison teaser | `ComparisonTable` (5 rows) | vs Aplikacja Podatnika / KSeF 2.0: powiadomienia, szukanie po NIP, oznaczanie opłaconych, eksport XML, gdzie są dane | — | comparison page |
| 12 | Pricing (`id="cennik"`) | `PricingCards` | Free / Pro / Lifetime "Jednorazowo, bez abonamentu" (section 7) | — | — |
| 13 | FAQ | `Faq` | 8 questions (incl. "Czy wystawię fakturę?" → honest no, "Czy mogę zapłacić jednorazowo?") | — | guides inside answers |
| 14 | Guides | 3 cards with thumbnails | latest guides | crops | 3 guides + hub |
| 15 | Final CTA | `--primary-soft` band | waitlist again | small `start` | — |
| 16 | Footer | `SiteFooter` | | | all |

---

## 5. Other page templates

**Feature page `/funkcje/[slug]`** (data: `data/ksef/features.ts`, pattern like `data/pcos/features.ts`)
1. Breadcrumbs. Hero: H1 with the feature keyword, 2-sentence lede, `PhoneFrame` hero screenshot, waitlist.
2. "Jak to działa": 3–4 steps, each with a `ShotCrop`.
3. "Co dokładnie dostajesz": `GroupedList` of facts.
4. Limits and honesty box (e.g. "Powiadomienia działają, gdy system pozwala na odświeżanie w tle").
5. FAQ (3–5, unique per page).
6. Related: 2 features + 2 guides (`RelatedLinks`).
Length 600–900 words. Unique title/description. No `MobileApplication` schema before launch.

Feature slugs (7): powiadomienia-o-fakturach, platnosci-i-terminy, wyszukiwarka-faktur, zestawienie-dla-ksiegowej, logowanie-certyfikatem-ksef, prywatnosc-bez-konta, pdf-xml-druk. Hub `/funkcje` lists them as a `GroupedList` with icons.

**Guide `/[slug]`**: breadcrumbs, H1, lede, "W skrócie" box (answer in 2–3 sentences, for featured snippets), body with H2 per sub-question, inline screenshots only when a step happens in the app, `AppCard` after the 2nd H2, FAQ, legal-status note with date, related guides. Fix the missing bullet markers. 900–1,500 words.

**Comparison `/aplikacja-podatnika-ksef-alternatywa`**: neutral, factual table (sourced, dated), "kiedy wybrać Aplikację Podatnika, kiedy Faktury KSeF", screenshots as proof, FAQ.

**Hubs** `/funkcje`, `/guides`: intro paragraph (150 words, keyword), cards with thumbnails, `ItemList` JSON-LD.

**Legal and support**: same shell, no hero art; plain readable column, `GroupedList` table of contents. Support FAQ shows `connect`/`tokenSwitch` next to the matching answers.

---

## 6. Technical SEO

- **Metadata**: unique title ≤ 60 and description ≤ 155 per page, canonical on the subdomain, OG/Twitter with `KSEF_OG` PNG, `pl_PL`, `lang="pl"` (done).
- **Icons**: `icons` metadata in `app/(ksef)/layout.tsx`: 64 WebP + PNG favicon, `apple-touch-icon` 180 PNG (generate from the 512 PNG).
- **JSON-LD**: Organization + WebSite (layout), BreadcrumbList (inner pages), FAQPage (pages with FAQ), ItemList (hubs), Article (guides, with `image` = the guide's thumbnail). `SoftwareApplication` with `offers` only at launch; ratings only once they exist (GSC flagged missing ratings before, commit ac08256).
- **Image SEO**: descriptive filenames and alt (manifest), `<figure>` + `<figcaption>` for in-body screenshots, image entries in `ksef-sitemap.xml` (`image:image`) for landing and feature pages.
- **Performance budget** (mobile, 4G): LCP < 2.0 s (hero screenshot 350w ≈ 26 KB, preloaded), CLS < 0.05, JS ≈ 0 on content pages (server components; FAQ and pricing toggle without client JS), fonts self-hosted with `display: swap` and the latin-ext subset.
- **Indexing**: submit `https://ksef.shipailab.com/sitemap.xml` in GSC (`sc-domain:shipailab.com` already covers it). Request indexing for landing, hubs and guides after deploy.
- **Analytics** (GTM): waitlist submit, feature-row link clicks, pricing plan hover/click, comparison-table view.

---

## 7. Product facts, keywords and pricing (unchanged from v1, kept short)

**What the app is**: a local-first KSeF **inbox**. It pulls received and issued invoices, notifies about new ones, tracks payments, shows readable invoices with transfer data, exports PDF/CSV/XML for the accountant, and signs in with a KSeF certificate or token. No account, no server. It does **not** issue invoices.

**Keywords** (volumes still to measure; DataForSEO is paid, ask first):

| Target | Pages |
|---|---|
| aplikacja KSeF, KSeF na telefon, KSeF aplikacja mobilna, faktury KSeF aplikacja | landing |
| powiadomienia KSeF, terminy płatności faktur, wyszukiwanie faktur po NIP, eksport faktur do księgowej, certyfikat KSeF w aplikacji, KSeF bez konta, faktura KSeF PDF/XML | 7 feature pages |
| aplikacja podatnika KSeF, KSeF 2.0 aplikacja opinie | comparison |
| KSeF od kiedy, tryb offline, faktura ustrukturyzowana, token KSeF 31.12.2026, certyfikat KSeF jak uzyskać, limit zapytań KSeF, jak pobrać fakturę z KSeF, numer KSeF | guides |

**Pricing** (competitor check 2026-10-15: inFakt free KSeF; Fakturownia subscriptions 13.49–299.99 zł; gov app free; Monitor KSeF 9.99 zł a month / 79.99 zł a year; no KSeF app sells a one-time licence):

| Plan | Price | Includes |
|---|---|---|
| Free | 0 zł | connect, sync, inbox, search, invoice view, single PDF, open XML, demo |
| Pro | 12.99 zł a month / 89.99 zł a year | + notifications, reminders, mark paid, Płatności, accountant package, print |
| **Pro lifetime** | **199.99 zł**, launch **149.99 zł** for 2–3 months | same, one payment, no subscription |

Lifetime is sustainable because there is no server cost per user. Landing line: "Płacisz raz. Bez konta, bez serwera, bez abonamentu." Prices appear on the site only once they are set in App Store Connect / Play Console; before that the pricing section says "Cennik ogłosimy przed premierą" and keeps the lifetime promise.

---

## 8. Build order

1. **Design system** (section 1): tokens light/dark, Inter via `next/font`, `Icon` set ported from the app, components in `components/ksef/`. Delete the Nerra style dependency and `ksef-styles.ts` blob/emoji styles.
2. **Screenshots** (section 2.2): capture the 8 missing screens + dark set, process to WebP, extend the manifest.
3. **Link graph** `data/ksef/links.ts` + `scripts/ksef-links.ts` check (section 3).
4. **Landing** (section 4) with corrected copy.
5. **Feature pages** (7) + `/funkcje` hub.
6. **Guides**: restyle the 3 existing ones (template, `AppCard`, bullets), then the 5 new guides.
7. **Comparison page**.
8. **Support / legal** in the new shell; fix the copy that says the app issues invoices; add the waitlist and notifications to the privacy policy.
9. **QA**: 390 px and 1440 px in light and dark, Lighthouse ≥ 95 on mobile for landing, a feature page and a guide, link check passes, GSC rich-results test for FAQ and breadcrumbs.
10. **Deploy**, submit the sitemap, request indexing.
11. **At store launch**: store badges with real URLs, `SoftwareApplication` + `offers`, live prices.

## 9. Decided
- Publisher everywhere (legal pages, footer, JSON-LD Organization, store listings): **Ship AI Solutions LLC** only (2026-10-15). Already set as `KSEF_PUBLISHER` in `data/ksef/config.ts`.

## 10. Open decisions for you
- Confirm prices and the Free/Pro split (section 7).
- Waitlist storage: small DB on the VPS, or an email tool you already use.
- Approval to pull keyword volumes from DataForSEO (paid).
- OK to add the missing icons (bell, search, shield, file, printer, key) to the app too, so both use one set.
