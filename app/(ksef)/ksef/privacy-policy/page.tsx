import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticleShell } from '@/components/ksef/ArticleShell';
import { KSEF_EMAIL, KSEF_NAME, KSEF_PUBLISHER, KSEF_UPDATED, KSEF_UPDATED_ISO, ksefUrl } from '@/data/ksef/config';

const url = ksefUrl('/privacy-policy');
const title = `Polityka prywatności | ${KSEF_NAME}`;
const description = `Jak ${KSEF_NAME} i strona ksef.shipailab.com przetwarzają dane: faktury i dane logowania zostają na telefonie, aplikacja łączy się tylko z KSeF Ministerstwa Finansów.`;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: KSEF_NAME, locale: 'pl_PL', type: 'website' },
};

const toc = [
  { id: 'administrator', label: 'Administrator' },
  { id: 'w-skrocie', label: 'W skrócie' },
  { id: 'aplikacja', label: 'Dane w aplikacji' },
  { id: 'ksef', label: 'Połączenie z KSeF' },
  { id: 'logowanie', label: 'Token i certyfikat' },
  { id: 'powiadomienia', label: 'Powiadomienia' },
  { id: 'udostepnianie', label: 'PDF, CSV i XML' },
  { id: 'platnosci', label: 'Płatności' },
  { id: 'strona', label: 'Strona internetowa' },
  { id: 'kontakt-mail', label: 'Korespondencja' },
  { id: 'prawa', label: 'Twoje prawa' },
  { id: 'zmiany', label: 'Zmiany i kontakt' },
];

export default function KsefPrivacyPolicy() {
  return (
    <ArticleShell
      crumbs={[{ label: KSEF_NAME, href: '/' }, { label: 'Polityka prywatności' }]}
      label="Dokumenty"
      title="Polityka prywatności"
      lede={`Dotyczy aplikacji ${KSEF_NAME} na iPhone, iPad i Androida oraz strony ksef.shipailab.com.`}
      meta={<span>Obowiązuje od: <time dateTime={KSEF_UPDATED_ISO}>{KSEF_UPDATED}</time></span>}
      toc={toc}
    >
      <section id="administrator">
        <h2>Administrator</h2>
        <p>Administratorem danych jest {KSEF_PUBLISHER}, wydawca aplikacji {KSEF_NAME} (dalej „Aplikacja”) i strony ksef.shipailab.com. Kontakt: <a href={`mailto:${KSEF_EMAIL}`}>{KSEF_EMAIL}</a>.</p>
      </section>

      <section id="w-skrocie" className="fk-summary">
        <h2>W skrócie</h2>
        <ul>
          <li>Aplikacja nie ma kont użytkowników ani naszego serwera. Faktury, token i certyfikat KSeF są przechowywane tylko na Twoim urządzeniu.</li>
          <li>Aplikacja łączy się wyłącznie z KSeF Ministerstwa Finansów.</li>
          <li>Aplikacja nie zawiera narzędzi analitycznych, reklam ani modułów śledzących.</li>
          <li>Strona ksef.shipailab.com używa Google Tag Manager, a e-mail od Ciebie przetwarzamy, aby odpowiedzieć.</li>
        </ul>
      </section>

      <section id="aplikacja">
        <h2>Dane przechowywane w aplikacji</h2>
        <p>Na Twoim urządzeniu Aplikacja przechowuje:</p>
        <ul>
          <li>faktury pobrane z KSeF (pliki XML i dane z nich odczytane: kontrahenci, kwoty, terminy, rachunki bankowe),</li>
          <li>dane firmy, którą połączyłeś z KSeF (NIP, nazwa),</li>
          <li>Twoje oznaczenia, na przykład opłacone faktury i wpłacone raty,</li>
          <li>ustawienia, w tym powiadomienia.</li>
        </ul>
        <p>Nie otrzymujemy tych danych. Usunięcie Aplikacji usuwa je z urządzenia. Faktury pozostają w KSeF i możesz pobrać je ponownie.</p>
      </section>

      <section id="ksef">
        <h2>Połączenie z KSeF</h2>
        <p>Aby pobrać faktury, Aplikacja łączy się bezpośrednio z API KSeF (api.ksef.mf.gov.pl) prowadzonym przez Ministra Finansów. Połączenie jest szyfrowane. Ministerstwo Finansów przetwarza dane faktur na podstawie ustawy o VAT, na zasadach opisanych na <a href="https://ksef.podatki.gov.pl" target="_blank" rel="noopener noreferrer">ksef.podatki.gov.pl</a>.</p>
        <p>Opcja „Wypróbuj na firmie testowej” tworzy fikcyjną firmę w testowym środowisku KSeF (api-test.ksef.mf.gov.pl). Nie wysyła tam Twoich danych.</p>
      </section>

      <section id="logowanie">
        <h2>Token i certyfikat KSeF</h2>
        <p>Token albo klucz prywatny certyfikatu KSeF jest zapisywany w systemowym magazynie kluczy urządzenia: Keychain na iPhonie i iPadzie, Keystore na Androidzie. Hasła do klucza prywatnego nie zapisujemy. Dane logowania służą wyłącznie do łączenia się z KSeF w Twoim imieniu.</p>
      </section>

      <section id="powiadomienia">
        <h2>Powiadomienia</h2>
        <p>Powiadomienia o nowych fakturach i przypomnienia o terminach są tworzone na urządzeniu. Aplikacja sprawdza KSeF w tle, gdy pozwala na to system. Nie korzystamy z serwera powiadomień push.</p>
      </section>

      <section id="udostepnianie">
        <h2>PDF, CSV i XML</h2>
        <p>Gdy eksportujesz faktury, na przykład zestawienie dla księgowej, Aplikacja tworzy plik na urządzeniu i przekazuje go do systemowego okna udostępniania. Odbiorcę i sposób wysyłki wybierasz Ty. Kod QR na wizualizacji faktury prowadzi do weryfikacji faktury w KSeF (qr.ksef.mf.gov.pl).</p>
      </section>

      <section id="platnosci">
        <h2>Płatności</h2>
        <p>Płatne funkcje, gdy będą dostępne, kupisz przez App Store lub Google Play. Płatność obsługuje sklep. Nie otrzymujemy danych Twojej karty, a jedynie informację o tym, czy zakup jest aktywny.</p>
      </section>

      <section id="strona">
        <h2>Strona ksef.shipailab.com</h2>
        <p>Strona korzysta z Google Tag Manager (Google Ireland Limited), który może zapisywać pliki cookie i zbierać dane o odwiedzinach, takie jak odwiedzone podstrony, przybliżona lokalizacja i typ urządzenia. Ruch do strony przechodzi przez sieć Cloudflare, która przetwarza adres IP w celu dostarczenia strony i ochrony przed nadużyciami. Pliki cookie możesz zablokować w ustawieniach przeglądarki.</p>
      </section>

      <section id="kontakt-mail">
        <h2>Korespondencja</h2>
        <p>Gdy piszesz na {KSEF_EMAIL}, w tym gdy prosisz o powiadomienie o premierze, przetwarzamy Twój adres e-mail i treść wiadomości, aby odpowiedzieć i wysłać informację, o którą prosisz. Podstawą jest Twoja zgoda lub nasz prawnie uzasadniony interes (art. 6 ust. 1 lit. a i f RODO). Wiadomości przechowujemy do zakończenia sprawy, a adresy z listy premiery do czasu wysłania informacji o premierze lub do Twojej rezygnacji.</p>
      </section>

      <section id="prawa">
        <h2>Twoje prawa</h2>
        <p>Masz prawo dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia oraz sprzeciwu, a także prawo do wycofania zgody. Możesz złożyć skargę do Prezesa Urzędu Ochrony Danych Osobowych (<a href="https://uodo.gov.pl" target="_blank" rel="noopener noreferrer">uodo.gov.pl</a>). Dane przechowywane tylko w Aplikacji usuniesz sam, usuwając Aplikację.</p>
      </section>

      <section id="zmiany">
        <h2>Zmiany i kontakt</h2>
        <p>O istotnych zmianach poinformujemy w Aplikacji lub na tej stronie. Pytania o dane: <a href={`mailto:${KSEF_EMAIL}`}>{KSEF_EMAIL}</a>. Zobacz też <Link href="/terms-of-service">Regulamin</Link> i <Link href="/support">Pomoc</Link>.</p>
      </section>
    </ArticleShell>
  );
}
