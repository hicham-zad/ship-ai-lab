import type { Metadata } from 'next';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { Icon } from '@/components/ksef/Icon';
import { PhoneFrame } from '@/components/ksef/Shots';
import { SiteFooter, SiteNav } from '@/components/ksef/SiteChrome';
import StructuredData from '@/components/StructuredData';
import { KSEF_BASE, KSEF_EMAIL, KSEF_NAME, KSEF_PUBLISHER } from '@/data/ksef/config';
import { FEATURED_GUIDES } from '@/data/ksef/guides';
import { KSEF_ICON, KSEF_OG, SHOTS, type Shot } from '@/data/ksef/screenshots';

const title = 'Aplikacja KSeF na telefon – Faktury KSeF';
const description =
  'Faktury z KSeF na iPhonie i Androidzie: powiadomienia o nowych fakturach, terminy płatności, wyszukiwarka i zestawienie dla księgowej. Bez konta, dane tylko na telefonie.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: KSEF_BASE },
  openGraph: {
    title,
    description,
    url: KSEF_BASE,
    siteName: KSEF_NAME,
    locale: 'pl_PL',
    type: 'website',
    images: [{ url: KSEF_OG.png, width: KSEF_OG.width, height: KSEF_OG.height, alt: KSEF_OG.alt }],
  },
  twitter: { card: 'summary_large_image', title, description, images: [KSEF_OG.png] },
};

const WAITLIST = `mailto:${KSEF_EMAIL}?subject=${encodeURIComponent('Faktury KSeF – powiadom mnie o premierze')}`;

// Each feature is shown on its real app screen (demo company in the KSeF TEST environment).
// The ids are linked from the footer.
const FEATURES: { id: string; title: string; text: string; points: string[]; shot: Shot; dark?: Shot }[] = [
  {
    id: 'faktury',
    title: 'Każda faktura z KSeF w jednej liście',
    text: 'Kosztowe i sprzedażowe pobierają się same, pogrupowane według miesięcy, z sumą obok.',
    points: ['Szukaj po kontrahencie, NIP, numerze albo kwocie', 'Filtry: nowe, nieopłacone, po terminie', 'Otrzymane i wystawione na osobnych kartach'],
    shot: SHOTS.invoices,
  },
  {
    id: 'powiadomienia',
    title: 'Wiesz o nowej fakturze od razu',
    text: 'Aplikacja sprawdza KSeF w tle. Na ekranie Start widzisz, ile jest do zapłaty i co przyszło od ostatniego razu.',
    points: ['Powiadomienie o nowej fakturze', 'Przypomnienie o 9:00 dzień przed terminem', 'Koszty i sprzedaż miesiąca w jednym miejscu'],
    shot: SHOTS.start,
  },
  {
    id: 'platnosci',
    title: 'Terminy płatności bez arkusza',
    text: 'Faktury po terminie są na górze. Numer rachunku, kwotę i tytuł przelewu kopiujesz jednym dotknięciem.',
    points: ['Kalendarz na dwa tygodnie', 'Przesuń fakturę, aby oznaczyć ją jako opłaconą', 'Należności: kto jeszcze nie zapłacił Tobie'],
    shot: SHOTS.payments,
    dark: SHOTS.paymentsDark,
  },
  {
    id: 'ksiegowa',
    title: 'Zestawienie dla księgowej',
    text: 'Wybierz miesiąc i wyślij komplet z podsumowaniem netto, VAT i brutto. Bez pobierania faktur po jednej.',
    points: ['PDF ze wszystkimi fakturami do wglądu', 'CSV do arkusza', 'XML w ZIP do programu księgowego'],
    shot: SHOTS.export,
  },
];

const STEPS: { title: string; text: ReactNode }[] = [
  {
    title: 'Połącz firmę',
    text: (
      <>
        Wskaż pliki certyfikatu KSeF (.crt i .key) z Aplikacji Podatnika albo wklej token z uprawnieniem do
        przeglądania faktur. Nie wiesz, co wybrać? Przeczytaj{' '}
        <Link href="/token-czy-certyfikat-ksef" className="fk-text-link">Token czy certyfikat KSeF</Link>.
      </>
    ),
  },
  { title: 'Poczekaj na synchronizację', text: 'Aplikacja pobiera historię faktur w paczkach, tak jak zaleca KSeF, a potem już tylko nowe.' },
  { title: 'Płać i wysyłaj księgowej', text: 'Oznaczaj opłacone, kopiuj dane do przelewu, a na koniec miesiąca wyślij zestawienie.' },
];

const FAQ: { q: string; a: ReactNode; text: string }[] = [
  {
    q: 'Czy potrzebuję konta w aplikacji?',
    text: 'Nie. Łączysz się bezpośrednio z KSeF certyfikatem lub tokenem. Nie zakładasz konta u nas i nie podajesz e-maila.',
    a: 'Nie. Łączysz się bezpośrednio z KSeF certyfikatem lub tokenem. Nie zakładasz konta u nas i nie podajesz e-maila.',
  },
  {
    q: 'Gdzie są przechowywane moje faktury?',
    text: 'Tylko na Twoim telefonie. Token i klucz certyfikatu trafiają do systemowego sejfu (Keychain na iPhonie, Keystore na Androidzie). Nie mamy serwera, przez który przechodziłyby faktury.',
    a: 'Tylko na Twoim telefonie. Token i klucz certyfikatu trafiają do systemowego sejfu (Keychain na iPhonie, Keystore na Androidzie). Nie mamy serwera, przez który przechodziłyby faktury.',
  },
  {
    q: 'Czy w aplikacji wystawię fakturę?',
    text: 'Nie. Faktury KSeF to skrzynka na faktury: pobiera faktury otrzymane i wystawione z KSeF, pilnuje terminów i przygotowuje zestawienia. Faktury wystawiasz dalej w swoim programie.',
    a: 'Nie. Faktury KSeF to skrzynka na faktury: pobiera faktury otrzymane i wystawione z KSeF, pilnuje terminów i przygotowuje zestawienia. Faktury wystawiasz dalej w swoim programie.',
  },
  {
    q: 'Czy aplikacja zadziała z tokenem KSeF po 2026 roku?',
    text: 'Obecne rozporządzenie przewiduje koniec tokenów 31.12.2026, ale Ministerstwo Finansów zaproponowało ich utrzymanie. Aplikacja działa z tokenem i z certyfikatem KSeF, a w Ustawieniach przejdziesz z tokenu na certyfikat bez utraty pobranych faktur.',
    a: (
      <>
        Obecne rozporządzenie przewiduje koniec tokenów 31.12.2026, ale Ministerstwo Finansów zaproponowało ich
        utrzymanie. Aplikacja działa z tokenem i z certyfikatem KSeF, a w Ustawieniach przejdziesz z tokenu na
        certyfikat bez utraty pobranych faktur. Szczegóły: <Link href="/token-czy-certyfikat-ksef">Token czy certyfikat KSeF</Link>.
      </>
    ),
  },
  {
    q: 'Co, jeśli KSeF pokaże limit zapytań?',
    text: 'Aplikacja liczy zapytania i zostaje poniżej limitów KSeF. Jeśli KSeF mimo to poprosi o przerwę, aplikacja poczeka wskazany czas i sama spróbuje ponownie.',
    a: 'Aplikacja liczy zapytania i zostaje poniżej limitów KSeF. Jeśli KSeF mimo to poprosi o przerwę, aplikacja poczeka wskazany czas i sama spróbuje ponownie.',
  },
  {
    q: 'Mogę wypróbować aplikację bez podłączania firmy?',
    text: 'Tak. Wybierz „Wypróbuj na firmie testowej”: aplikacja tworzy fikcyjną firmę w testowym środowisku KSeF i w około 20 sekund pobiera przykładowe faktury.',
    a: 'Tak. Wybierz „Wypróbuj na firmie testowej”: aplikacja tworzy fikcyjną firmę w testowym środowisku KSeF i w około 20 sekund pobiera przykładowe faktury.',
  },
  {
    q: 'Ile kosztuje aplikacja? Czy mogę zapłacić jednorazowo?',
    text: 'Podstawowe funkcje będą bezpłatne. Wersję Pro kupisz w abonamencie albo jednorazowo, bez abonamentu. Ceny ogłosimy przed premierą.',
    a: 'Podstawowe funkcje będą bezpłatne. Wersję Pro kupisz w abonamencie albo jednorazowo, bez abonamentu. Ceny ogłosimy przed premierą.',
  },
  {
    q: 'Od kiedy KSeF jest obowiązkowy?',
    text: 'Odbieranie faktur przez KSeF dotyczy wszystkich od 1 lutego 2026 r., a terminy wystawiania zależą od wielkości firmy. Szczegóły w poradniku „KSeF od kiedy”.',
    a: (
      <>
        Odbieranie faktur przez KSeF dotyczy wszystkich od 1 lutego 2026 r., a terminy wystawiania zależą od wielkości
        firmy. Szczegóły w poradniku <Link href="/ksef-od-kiedy">KSeF od kiedy – terminy</Link>.
      </>
    ),
  },
];

const PLANS = [
  { name: 'Free', mark: '0 zł', how: 'bezpłatnie', items: ['Połączenie certyfikatem lub tokenem', 'Faktury otrzymane i wystawione', 'Wyszukiwarka i podgląd faktur', 'Firma testowa'] },
  { name: 'Pro', mark: 'abonament', how: 'miesięcznie lub rocznie', items: ['Wszystko z Free', 'Powiadomienia o nowych fakturach', 'Płatności i przypomnienia', 'Zestawienie dla księgowej'] },
  { name: 'Pro na zawsze', mark: '1×', how: 'jedna płatność, na zawsze', items: ['Wszystko z Pro', 'Płacisz raz, bez odnawiania', 'Możliwe, bo nie utrzymujemy serwera'], life: true },
];

export default function KsefLanding() {
  return (
    <>
      <StructuredData
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: KSEF_NAME,
            url: KSEF_BASE,
            inLanguage: 'pl-PL',
            publisher: { '@type': 'Organization', name: KSEF_PUBLISHER, url: 'https://shipailab.com', logo: `${KSEF_BASE}${KSEF_ICON.png}` },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.text } })),
          },
        ]}
      />
      <SiteNav />

      <main id="main">
        <section className="fk-hero">
          <div className="fk-wrap fk-hero-in">
            <div className="fk-hero-copy">
              <p className="fk-eyebrow"><Icon name="check" size={16} strokeWidth={2.25} />Bez konta · dane tylko na telefonie</p>
              <h1 className="fk-h1">Faktury z <em>KSeF</em> prosto na telefon</h1>
              <p className="fk-lede">
                Co przyszło, ile zapłacić i do kiedy. Powiadomienia o nowych fakturach, terminy płatności i zestawienie
                dla księgowej w jednej aplikacji.
              </p>
              <div className="fk-hero-actions" id="zapisy">
                <a href={WAITLIST} className="fk-btn fk-btn-primary fk-btn-lg">Powiadom mnie o premierze</a>
                <a href="#funkcje" className="fk-btn fk-btn-line fk-btn-lg">Zobacz funkcje</a>
              </div>
              <ul className="fk-hero-meta">
                <li><b>iPhone, iPad i Android</b><span>Wkrótce w App Store i Google Play</span></li>
                <li><b>Certyfikat lub token KSeF</b><span>Działa obok Twojego programu do faktur</span></li>
              </ul>
            </div>
            <figure className="fk-hero-art">
              <div className="fk-hero-phones">
                <PhoneFrame shot={SHOTS.invoices} sizes="(max-width: 1000px) 170px, 210px" className="fk-hero-side fk-hero-left" />
                <PhoneFrame shot={SHOTS.payments} sizes="(max-width: 1000px) 170px, 210px" className="fk-hero-side fk-hero-right" />
                <PhoneFrame shot={SHOTS.start} sizes="(max-width: 1000px) 220px, 260px" priority className="fk-hero-main" />
              </div>
              <figcaption>Zrzuty ekranu na firmie testowej w środowisku testowym KSeF</figcaption>
            </figure>
          </div>
        </section>

        <section className="fk-sec fk-sec-ground" id="funkcje">
          <div className="fk-wrap">
            <div className="fk-sec-head fk-center">
              <h2 className="fk-h2">KSeF przysyła faktury. Aplikacja mówi, co z nimi zrobić</h2>
            </div>
            <div className="fk-features">
              {FEATURES.map((f) => (
                <article key={f.id} id={f.id} className="fk-feature">
                  <PhoneFrame shot={f.shot} dark={f.dark} sizes="(max-width: 1000px) 240px, 280px" />
                  <div className="fk-feature-text">
                    <h3 className="fk-h3">{f.title}</h3>
                    <p className="fk-p">{f.text}</p>
                    <ul className="fk-checks">
                      {f.points.map((p) => (
                        <li key={p}><Icon name="check" size={16} strokeWidth={2.25} />{p}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="fk-sec" id="prywatnosc">
          <div className="fk-wrap fk-split">
            <div className="fk-sec-head">
              <h2 className="fk-h2">Między Tobą a KSeF nie ma nikogo</h2>
              <p className="fk-p">
                Aplikacja łączy się z KSeF bezpośrednio. Nie zakładasz u nas konta, a my nie mamy serwera, przez który
                przechodziłyby Twoje faktury czy dane logowania.
              </p>
            </div>
            <ul className="fk-points">
              <li><b>Token i certyfikat w sejfie telefonu</b><span>Keychain na iPhonie, Keystore na Androidzie. Hasła do klucza nie zapisujemy.</span></li>
              <li><b>Limity KSeF pod kontrolą</b><span>Aplikacja zostaje poniżej limitów zapytań, a po przerwie wznawia pobieranie sama.</span></li>
              <li><b>Błędy po polsku</b><span>Każdy komunikat KSeF zamieniony na wskazówkę, co zrobić.</span></li>
            </ul>
          </div>
        </section>

        <section className="fk-sec fk-sec-ground" id="jak-zaczac">
          <div className="fk-wrap">
            <div className="fk-sec-head">
              <h2 className="fk-h2">Jak zacząć</h2>
            </div>
            <ol className="fk-steps">
              {STEPS.map((st, i) => (
                <li key={st.title}>
                  <span className="fk-step-num">{i + 1}</span>
                  <h3 className="fk-h3">{st.title}</h3>
                  <p className="fk-p">{st.text}</p>
                </li>
              ))}
            </ol>
            <p className="fk-p fk-after">
              Nie masz certyfikatu pod ręką? Wybierz „Wypróbuj na firmie testowej”, a aplikacja pokaże wszystko na
              fikcyjnej firmie w testowym środowisku KSeF.
            </p>
          </div>
        </section>

        <section className="fk-sec" id="cennik">
          <div className="fk-wrap">
            <div className="fk-sec-head">
              <h2 className="fk-h2">Cennik</h2>
              <p className="fk-p">Za darmo na start. Pro w abonamencie albo jednorazowo. Ceny ogłosimy przed premierą.</p>
            </div>
            <div className="fk-plans">
              {PLANS.map((p) => (
                <div key={p.name} className={p.life ? 'fk-plan fk-plan-life' : 'fk-plan'}>
                  <h3 className="fk-h3">{p.name}</h3>
                  <p className="fk-plan-how">{p.how}</p>
                  <ul className="fk-checks">
                    {p.items.map((it) => (
                      <li key={it}><Icon name="check" size={16} strokeWidth={2.25} />{it}</li>
                    ))}
                  </ul>
                  <a href={WAITLIST} className={p.life ? 'fk-btn fk-btn-primary' : 'fk-btn fk-btn-line'}>Powiadom mnie</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="fk-sec fk-sec-ground" id="faq">
          <div className="fk-wrap fk-split">
            <div className="fk-sec-head">
              <h2 className="fk-h2">Pytania</h2>
              <p className="fk-p">
                Nie ma tu odpowiedzi? Napisz na <a href={`mailto:${KSEF_EMAIL}`} className="fk-text-link">{KSEF_EMAIL}</a>.
              </p>
            </div>
            <div className="fk-faq">
              {FAQ.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}<i aria-hidden="true" /></summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="fk-sec">
          <div className="fk-wrap">
            <div className="fk-sec-head fk-sec-head-row">
              <h2 className="fk-h2">Poradniki KSeF</h2>
              <Link href="/guides" className="fk-text-link">Wszystkie poradniki</Link>
            </div>
            <ul className="fk-guides">
              {FEATURED_GUIDES.map((g) => (
                <li key={g.slug}>
                  <Link href={`/${g.slug}`}>
                    <div><h3>{g.title}</h3><p>{g.description}</p></div>
                    <Icon name="chevron" size={20} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="fk-wrap">
          <div className="fk-final">
            <h2 className="fk-h2">Dowiedz się pierwszy o premierze</h2>
            <p className="fk-p">Napisz do nas, a damy znać, gdy aplikacja będzie w App Store i Google Play.</p>
            <a href={WAITLIST} className="fk-btn fk-btn-primary">Powiadom mnie o premierze</a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
