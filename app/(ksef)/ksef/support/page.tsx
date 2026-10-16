import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticleShell } from '@/components/ksef/ArticleShell';
import StructuredData from '@/components/StructuredData';
import { KSEF_EMAIL, KSEF_NAME, ksefUrl } from '@/data/ksef/config';

const url = ksefUrl('/support');
const title = `Pomoc | ${KSEF_NAME}`;
const description = `Pomoc dla ${KSEF_NAME}: połączenie z KSeF certyfikatem lub tokenem, synchronizacja, limity zapytań, powiadomienia, eksport dla księgowej i kontakt.`;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: KSEF_NAME, locale: 'pl_PL', type: 'website' },
};

const groups: { id: string; title: string; items: { q: string; a: React.ReactNode; text: string }[] }[] = [
  {
    id: 'polaczenie',
    title: 'Połączenie z KSeF',
    items: [
      {
        q: 'Jak połączyć firmę certyfikatem KSeF?',
        text: 'Wybierz „Połącz certyfikatem KSeF” i wskaż plik certyfikatu (.crt) oraz klucz prywatny (.key) z Aplikacji Podatnika KSeF, a potem wpisz hasło do klucza. Klucz trafia do sejfu systemu, a hasło nie jest zapisywane.',
        a: <>Wybierz „Połącz certyfikatem KSeF” i wskaż plik certyfikatu (.crt) oraz klucz prywatny (.key) z Aplikacji Podatnika KSeF, a potem wpisz hasło do klucza. Klucz trafia do sejfu systemu, a hasło nie jest zapisywane. Jak uzyskać certyfikat: <Link href="/token-czy-certyfikat-ksef">Token czy certyfikat KSeF</Link>.</>,
      },
      {
        q: 'Jakie uprawnienie musi mieć token?',
        text: 'Uprawnienie do przeglądania faktur. Aplikacja tylko pobiera faktury, więc nie potrzebuje prawa do ich wystawiania.',
        a: 'Uprawnienie do przeglądania faktur. Aplikacja tylko pobiera faktury, więc nie potrzebuje prawa do ich wystawiania.',
      },
      {
        q: 'Czy mogę przejść z tokenu na certyfikat?',
        text: 'Tak. W Ustawieniach wybierz „Przejdź na certyfikat KSeF”. Pobrane faktury zostają w aplikacji.',
        a: 'Tak. W Ustawieniach wybierz „Przejdź na certyfikat KSeF”. Pobrane faktury zostają w aplikacji.',
      },
      {
        q: 'Mogę najpierw wypróbować aplikację?',
        text: 'Tak. „Wypróbuj na firmie testowej” tworzy fikcyjną firmę w testowym środowisku KSeF i pobiera przykładowe faktury w około 20 sekund.',
        a: 'Tak. „Wypróbuj na firmie testowej” tworzy fikcyjną firmę w testowym środowisku KSeF i pobiera przykładowe faktury w około 20 sekund.',
      },
    ],
  },
  {
    id: 'synchronizacja',
    title: 'Synchronizacja i limity',
    items: [
      {
        q: 'Dlaczego pierwsza synchronizacja trwa dłużej?',
        text: 'Aplikacja pobiera historię faktur w paczkach eksportu, tak jak zaleca KSeF, w oknach do 90 dni. Kolejne synchronizacje pobierają tylko nowe faktury.',
        a: 'Aplikacja pobiera historię faktur w paczkach eksportu, tak jak zaleca KSeF, w oknach do 90 dni. Kolejne synchronizacje pobierają tylko nowe faktury.',
      },
      {
        q: 'KSeF pokazał limit zapytań. Co teraz?',
        text: 'Nic nie musisz robić. Aplikacja zostaje poniżej limitów KSeF, a jeśli KSeF poprosi o przerwę, poczeka wskazany czas i sama spróbuje ponownie.',
        a: 'Nic nie musisz robić. Aplikacja zostaje poniżej limitów KSeF, a jeśli KSeF poprosi o przerwę, poczeka wskazany czas i sama spróbuje ponownie.',
      },
      {
        q: 'KSeF nie odpowiada.',
        text: 'Sprawdź komunikaty o niedostępności i awariach na ksef.podatki.gov.pl. Aplikacja wznowi pobieranie, gdy system zacznie działać.',
        a: <>Sprawdź komunikaty o niedostępności i awariach na <a href="https://ksef.podatki.gov.pl" target="_blank" rel="noopener noreferrer">ksef.podatki.gov.pl</a>. Aplikacja wznowi pobieranie, gdy system zacznie działać. Więcej: <Link href="/ksef-tryb-offline">Tryb offline w KSeF</Link>.</>,
      },
    ],
  },
  {
    id: 'faktury',
    title: 'Faktury, płatności i eksport',
    items: [
      {
        q: 'Jak działają powiadomienia?',
        text: 'Aplikacja sprawdza KSeF w tle, gdy pozwala na to system, i powiadamia o nowych fakturach. Dzień przed terminem płatności o 9:00 przypomina o przelewie.',
        a: 'Aplikacja sprawdza KSeF w tle, gdy pozwala na to system, i powiadamia o nowych fakturach. Dzień przed terminem płatności o 9:00 przypomina o przelewie.',
      },
      {
        q: 'Czy oznaczenie „opłacona” zmienia coś w KSeF?',
        text: 'Nie. To Twoja notatka w aplikacji, która pomaga pilnować płatności. Możesz też odnotować wpłatę części kwoty albo kolejnej raty.',
        a: 'Nie. To Twoja notatka w aplikacji, która pomaga pilnować płatności. Możesz też odnotować wpłatę części kwoty albo kolejnej raty.',
      },
      {
        q: 'Jak wysłać faktury księgowej?',
        text: 'Otwórz Zestawienie dla księgowej, wybierz miesiąc i rodzaj faktur, a potem wyślij PDF, CSV albo pliki XML w ZIP. Nie ma limitu liczby plików.',
        a: 'Otwórz Zestawienie dla księgowej, wybierz miesiąc i rodzaj faktur, a potem wyślij PDF, CSV albo pliki XML w ZIP. Nie ma limitu liczby plików.',
      },
      {
        q: 'Czy w aplikacji wystawię fakturę?',
        text: 'Nie. Aplikacja odbiera i porządkuje faktury z KSeF. Faktury wystawiasz w swoim programie do fakturowania.',
        a: 'Nie. Aplikacja odbiera i porządkuje faktury z KSeF. Faktury wystawiasz w swoim programie do fakturowania.',
      },
    ],
  },
];

export default function KsefSupport() {
  return (
    <>
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          url,
          mainEntity: groups.flatMap((g) => g.items).map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.text } })),
        }}
      />
      <ArticleShell
        crumbs={[{ label: KSEF_NAME, href: '/' }, { label: 'Pomoc' }]}
        label="Pomoc"
        title="W czym możemy pomóc?"
        lede="Odpowiedzi na pytania o połączenie z KSeF, synchronizację, płatności i eksport. Nie ma tu odpowiedzi? Napisz do nas."
        toc={[...groups.map((g) => ({ id: g.id, label: g.title })), { id: 'kontakt', label: 'Kontakt' }]}
      >
        {groups.map((g) => (
          <section key={g.id} id={g.id}>
            <h2>{g.title}</h2>
            <div className="fk-faq">
              {g.items.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}<i aria-hidden="true" /></summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        ))}
        <section id="kontakt" className="fk-contact">
          <h2>Kontakt</h2>
          <p>Napisz na <a href={`mailto:${KSEF_EMAIL}?subject=${encodeURIComponent(`${KSEF_NAME} – pomoc`)}`}>{KSEF_EMAIL}</a>. Odpowiadamy zwykle w ciągu 1–2 dni roboczych. Podaj model urządzenia i wersję aplikacji.</p>
          <p className="fk-disclaimer">Nigdy nie wysyłaj nam tokenu KSeF, klucza certyfikatu ani hasła. Nie są nam potrzebne do pomocy.</p>
        </section>
      </ArticleShell>
    </>
  );
}
