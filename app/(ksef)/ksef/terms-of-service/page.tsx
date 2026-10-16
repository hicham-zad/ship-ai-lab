import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticleShell } from '@/components/ksef/ArticleShell';
import { KSEF_EMAIL, KSEF_NAME, KSEF_PUBLISHER, KSEF_UPDATED, KSEF_UPDATED_ISO, ksefUrl } from '@/data/ksef/config';

const url = ksefUrl('/terms-of-service');
const title = `Regulamin | ${KSEF_NAME}`;
const description = `Regulamin aplikacji ${KSEF_NAME}: czym jest usługa, wymagania, płatne funkcje, odpowiedzialność, dostępność KSeF i reklamacje.`;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: KSEF_NAME, locale: 'pl_PL', type: 'website' },
};

const toc = [
  { id: 'postanowienia', label: 'Postanowienia ogólne' },
  { id: 'usluga', label: 'Usługa' },
  { id: 'wymagania', label: 'Wymagania' },
  { id: 'platne', label: 'Płatne funkcje' },
  { id: 'obowiazki', label: 'Obowiązki użytkownika' },
  { id: 'ksef', label: 'Dostępność KSeF' },
  { id: 'odpowiedzialnosc', label: 'Odpowiedzialność' },
  { id: 'reklamacje', label: 'Reklamacje' },
  { id: 'zmiany', label: 'Zmiany i prawo' },
];

export default function KsefTerms() {
  return (
    <ArticleShell
      crumbs={[{ label: KSEF_NAME, href: '/' }, { label: 'Regulamin' }]}
      label="Dokumenty"
      title="Regulamin"
      lede={`Zasady korzystania z aplikacji ${KSEF_NAME}.`}
      meta={<span>Obowiązuje od: <time dateTime={KSEF_UPDATED_ISO}>{KSEF_UPDATED}</time></span>}
      toc={toc}
    >
      <section id="postanowienia">
        <h2>1. Postanowienia ogólne</h2>
        <p>Regulamin określa zasady korzystania z aplikacji {KSEF_NAME} (dalej „Aplikacja”), której wydawcą jest {KSEF_PUBLISHER}. Korzystając z Aplikacji, akceptujesz Regulamin i <Link href="/privacy-policy">Politykę prywatności</Link>.</p>
      </section>
      <section id="usluga">
        <h2>2. Usługa</h2>
        <p>Aplikacja pobiera z Krajowego Systemu e-Faktur (KSeF) faktury otrzymane i wystawione przez połączoną firmę, wyświetla je w czytelnej formie, pomaga pilnować terminów płatności i tworzy eksport faktur w formatach PDF, CSV i XML.</p>
        <p>Aplikacja nie służy do wystawiania faktur w KSeF. Nie jest produktem Ministerstwa Finansów ani nie jest z nim powiązana.</p>
      </section>
      <section id="wymagania">
        <h2>3. Wymagania</h2>
        <p>Potrzebujesz urządzenia z iOS, iPadOS lub Androidem, dostępu do internetu oraz uprawnień do przeglądania faktur firmy w KSeF: certyfikatu KSeF albo tokenu z odpowiednim uprawnieniem.</p>
      </section>
      <section id="platne">
        <h2>4. Płatne funkcje</h2>
        <p>Część funkcji może wymagać zakupu w App Store lub Google Play, w formie subskrypcji albo jednorazowej płatności. Cenę i zakres pokazuje Aplikacja przed zakupem. Subskrypcja odnawia się automatycznie, chyba że wyłączysz odnowienie co najmniej 24 godziny przed końcem okresu. Zwroty obsługuje sklep, w którym dokonano zakupu.</p>
      </section>
      <section id="obowiazki">
        <h2>5. Obowiązki użytkownika</h2>
        <ul>
          <li>Łączysz z Aplikacją tylko firmy, do których faktur masz uprawnienia w KSeF.</li>
          <li>Chronisz dostęp do urządzenia, tokenu i klucza certyfikatu.</li>
          <li>Oznaczenia w Aplikacji, na przykład „opłacona”, są Twoimi notatkami. Nie zmieniają niczego w KSeF ani w banku.</li>
        </ul>
      </section>
      <section id="ksef">
        <h2>6. Dostępność KSeF</h2>
        <p>KSeF jest systemem zewnętrznym. Nie odpowiadamy za jego przerwy, awarie, limity zapytań ani zmiany. Aplikacja ogranicza liczbę zapytań do KSeF i wznawia pobieranie po przerwie, ale nie gwarantuje pobrania faktur w czasie niedostępności systemu.</p>
      </section>
      <section id="odpowiedzialnosc">
        <h2>7. Odpowiedzialność</h2>
        <p>Aplikacja jest narzędziem i nie stanowi doradztwa podatkowego ani księgowego. Wiążące są faktury w KSeF. W granicach dozwolonych przez prawo nie odpowiadamy za szkody pośrednie ani utracone korzyści. Nie wyłączamy odpowiedzialności wobec konsumentów i przedsiębiorców na prawach konsumenta w zakresie, w jakim przepisy na to nie pozwalają.</p>
      </section>
      <section id="reklamacje">
        <h2>8. Reklamacje</h2>
        <p>Reklamacje dotyczące działania Aplikacji wyślij na <a href={`mailto:${KSEF_EMAIL}`}>{KSEF_EMAIL}</a>. Odpowiadamy w ciągu 14 dni. Reklamacje płatności kierujesz do sklepu, w którym dokonano zakupu.</p>
      </section>
      <section id="zmiany">
        <h2>9. Zmiany i prawo właściwe</h2>
        <p>Możemy zmienić Regulamin, na przykład w związku ze zmianą przepisów o KSeF. O istotnych zmianach poinformujemy z wyprzedzeniem w Aplikacji lub na tej stronie. Do Regulaminu stosuje się prawo polskie, bez uszczerbku dla bezwzględnie obowiązujących przepisów chroniących konsumentów.</p>
      </section>
    </ArticleShell>
  );
}
