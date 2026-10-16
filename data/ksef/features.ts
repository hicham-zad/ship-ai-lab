// Feature pages served at ksef.shipailab.com/funkcje/<slug>. Every statement about the app was checked against the
// app's code (ksef-inbox) on 2026-10-16; re-check the code before editing a page. KSeF facts cite official sources.
// The app is not released: pages say "w przygotowaniu" and use no app schema or ratings.
import type { Block, Source } from './guides';
import { SRC } from './sources';
import type { SHOTS } from './screenshots';

export type FeatureBlock = Block | { crop: { shot: keyof typeof SHOTS; from: number; to: number; caption: string } };

export interface FeatureSection {
  id: string;
  h2: string;
  blocks: FeatureBlock[];
}

export interface Feature {
  slug: string;
  /** Short label for lists. */
  short: string;
  icon: 'bell' | 'calendar' | 'search' | 'table' | 'key' | 'shield' | 'file' | 'flask';
  group: 'Odbieranie i szukanie' | 'Płatności' | 'Księgowa' | 'Bezpieczeństwo i start';
  title: string;
  metaTitle: string;
  description: string;
  /** The answer box: what the feature does, in two or three sentences that stand alone. */
  answer: string;
  /** One line for the hub. */
  hub: string;
  keywords: string[];
  published: string;
  updated: string;
  shot: keyof typeof SHOTS;
  sections: FeatureSection[];
  faqs: { q: string; a: string }[];
  sources: Source[];
  /** The guide that owns the how-to keyword for this topic. */
  guide: string;
  relatedFeatures: string[];
  relatedGuides: string[];
}

const D = '2026-10-16';

export const FEATURES: Feature[] = [
  {
    slug: 'logowanie-certyfikatem-ksef',
    short: 'Logowanie certyfikatem lub tokenem',
    icon: 'key',
    group: 'Bezpieczeństwo i start',
    title: 'Logowanie do KSeF certyfikatem lub tokenem w aplikacji na telefon',
    metaTitle: 'Aplikacja KSeF: logowanie certyfikatem lub tokenem',
    description:
      'Jak aplikacja Faktury KSeF łączy się z KSeF: certyfikat (.crt i .key) lub token z uprawnieniem do przeglądania faktur. Klucz w pęku kluczy telefonu, bez konta i bez naszego serwera.',
    answer:
      'Faktury KSeF łączy się z KSeF certyfikatem (plik .crt i zaszyfrowany klucz .key) albo tokenem z uprawnieniem do przeglądania faktur. Klucz zapisuje w pęku kluczy telefonu (Keychain na iPhonie, Keystore na Androidzie), a hasła do klucza nie zapamiętuje. Nie ma konta u nas ani naszego serwera.',
    hub: 'Połączenie z KSeF certyfikatem lub tokenem, klucz w pęku kluczy telefonu.',
    keywords: ['aplikacja ksef certyfikat', 'aplikacja ksef token', 'logowanie do ksef w aplikacji', 'ksef token uprawnienie przeglądanie faktur'],
    published: D,
    updated: D,
    shot: 'connect',
    guide: 'certyfikat-ksef',
    relatedFeatures: ['prywatnosc-bez-konta', 'wyprobuj-na-firmie-testowej'],
    relatedGuides: ['certyfikat-ksef', 'token-czy-certyfikat-ksef', 'zaw-fa', 'logowanie-do-ksef'],
    sections: [
      {
        id: 'jak-dziala',
        h2: 'Jak połączyć firmę z KSeF',
        blocks: [
          { crop: { shot: 'connect', from: 0.355, to: 0.645, caption: 'Ekran połączenia w aplikacji Faktury KSeF.' } },
          {
            ol: [
              'W Aplikacji Podatnika KSeF wygeneruj [certyfikat KSeF](/certyfikat-ksef) typu „uwierzytelnianie” albo token z uprawnieniem do przeglądania faktur.',
              'W aplikacji wybierz „Połącz certyfikatem KSeF”, wskaż plik certyfikatu (.crt) i klucz prywatny (.key) i wpisz hasło do klucza. Przy tokenie wpisujesz NIP i token.',
              'Aplikacja loguje się do KSeF i pobiera faktury. Klucz trafia do pęku kluczy telefonu, a hasło do klucza nie jest zapisywane.',
            ],
          },
          { p: 'Certyfikat obsługujemy w formatach, które wydaje KSeF: klucze RSA i EC P-256, pliki PEM lub DER, klucz zaszyfrowany lub nie. Weryfikację przeprowadzamy na środowisku testowym KSeF. Import pliku .key wydanego przez Aplikację Podatnika na produkcji jest jeszcze do potwierdzenia przed premierą.' },
        ],
      },
      {
        id: 'co-dostajesz',
        h2: 'Co dokładnie dostajesz',
        blocks: [
          {
            table: {
              head: ['', 'Certyfikat KSeF', 'Token KSeF'],
              rows: [
                ['Co wskazujesz w aplikacji', 'Plik .crt, klucz .key i hasło do klucza', 'NIP i token'],
                ['Uprawnienia', 'Zależą od uprawnień osoby, której certyfikat jest', 'Zakres wybrany przy tworzeniu tokena. Aplikacji wystarczy „Przeglądanie faktur”'],
                ['Gdzie jest przechowywany', 'Klucz w pęku kluczy telefonu, hasła nie zapisujemy', 'Token w pęku kluczy telefonu'],
                ['Ważność', 'Do 2 lat od wydania', 'Do czasu unieważnienia. MF zdecydowało o utrzymaniu tokenów bezterminowo'],
              ],
              caption: 'Źródło dla ważności: ksef.podatki.gov.pl, Certyfikaty KSeF (1.09.2026) i Pytania i odpowiedzi KSeF 2.0 (8.10.2026).',
            },
          },
          { p: 'W Ustawieniach możesz przejść z tokena na certyfikat („Przejdź na certyfikat KSeF”) albo wczytać nowy certyfikat przed wygaśnięciem starego. Pobrane faktury zostają na telefonie.' },
        ],
      },
      {
        id: 'ograniczenia',
        h2: 'Czego aplikacja nie robi',
        blocks: [
          {
            ul: [
              'Nie zamieni tokena w certyfikat sama. KSeF wydaje certyfikaty tylko po zalogowaniu podpisem lub przez login.gov.pl, nigdy po zalogowaniu tokenem.',
              'Nie potrzebuje prawa do wystawiania faktur. Wystarczy przeglądanie, bo aplikacja faktury tylko odbiera i pokazuje.',
              'Nie wystawia faktur.',
            ],
          },
          { note: 'Jeśli podejrzewasz wyciek tokena lub klucza, unieważnij go w Aplikacji Podatnika KSeF. Odłączenie firmy w aplikacji usuwa token lub certyfikat z telefonu.' },
        ],
      },
    ],
    faqs: [
      { q: 'Jakie uprawnienie musi mieć token, żeby aplikacja pobierała faktury?', a: 'Uprawnienie do przeglądania faktur. Aplikacja tylko odbiera i pokazuje faktury, więc nie potrzebuje prawa do ich wystawiania.' },
      { q: 'Gdzie aplikacja przechowuje token i klucz certyfikatu?', a: 'W pęku kluczy telefonu (Keychain na iPhonie, Keystore na Androidzie). Hasła do klucza certyfikatu aplikacja nie zapisuje.' },
      { q: 'Czy po zmianie z tokena na certyfikat stracę pobrane faktury?', a: 'Nie. Zmiana metody logowania w Ustawieniach zachowuje faktury pobrane na telefon. Faktury i tak leżą w KSeF.' },
      { q: 'Czy po 2026 roku token przestanie działać?', a: 'Według decyzji Ministerstwa Finansów tokeny zostają bezterminowo, a rozporządzenie ma zostać znowelizowane. Stan na 16 października 2026 r.: nowelizacja nie została jeszcze opublikowana.' },
      { q: 'Czy muszę mieć konto w aplikacji?', a: 'Nie. Nie ma konta ani naszego serwera. Token i faktury zostają na Twoim telefonie.' },
    ],
    sources: [SRC.certyfikaty, SRC.pytania, SRC.podrecznik1, SRC.uwierzytelnienie],
  },
  {
    slug: 'platnosci-i-terminy',
    short: 'Płatności i terminy',
    icon: 'calendar',
    group: 'Płatności',
    title: 'Terminy płatności faktur z KSeF: ile i do kiedy zapłacić',
    metaTitle: 'Terminy płatności faktur z KSeF w aplikacji na telefon',
    description:
      'Faktury KSeF pokazuje, ile jest do zapłaty, co jest po terminie i co przypada w ciągu 7 dni. Dane do przelewu do skopiowania, raty, podzielona płatność i faktoring. Bez wykonywania przelewów.',
    answer:
      'Faktury KSeF czyta z faktury termin, kwotę do zapłaty i rachunek, a potem pokazuje sumę do zapłaty z podziałem na zaległe, najbliższe 7 dni i późniejsze. Dane do przelewu kopiujesz jednym dotknięciem. Aplikacja sama nie wykonuje przelewów.',
    hub: 'Suma do zapłaty, zaległe i najbliższe terminy, dane do przelewu do skopiowania.',
    keywords: ['terminy płatności faktur ksef', 'faktury do zapłaty ksef', 'kalendarz płatności faktur', 'dane do przelewu z faktury ksef'],
    published: D,
    updated: D,
    shot: 'payments',
    guide: 'jak-pobrac-fakture-z-ksef',
    relatedFeatures: ['powiadomienia-o-fakturach', 'pdf-xml-druk'],
    relatedGuides: ['jak-pobrac-fakture-z-ksef', 'numer-ksef', 'wizualizacja-faktury-ksef'],
    sections: [
      {
        id: 'jak-dziala',
        h2: 'Jak działa lista płatności',
        blocks: [
          { crop: { shot: 'payments', from: 0.03, to: 0.5, caption: 'Płatności w aplikacji Faktury KSeF (firma testowa).' } },
          {
            ul: [
              'Ekran Start i zakładka Płatności pokazują sumę „Do zapłaty” oraz podział: po terminie, najbliższe 7 dni i później.',
              'Termin i kwota pochodzą z samej faktury (pola płatności w FA(3)). Kwota do zapłaty uwzględnia rozliczenie na fakturze i wpłaty częściowe.',
              'Gdy dostawca zaznaczył na fakturze, że zapłacono, faktura nie trafia na listę do zapłaty.',
              'Fakturę, którą zapłacisz, oznaczasz przyciskiem „Oznacz jako opłaconą”. Oznaczenie możesz cofnąć.',
            ],
          },
        ],
      },
      {
        id: 'przelew',
        h2: 'Dane do przelewu w jednym miejscu',
        blocks: [
          { crop: { shot: 'invoice', from: 0.2, to: 0.62, caption: 'Podgląd faktury z danymi do przelewu.' } },
          { p: 'W podglądzie faktury skopiujesz numer rachunku albo wszystko naraz: odbiorcę, konto, kwotę i tytuł przelewu. Do banku wklejasz gotowe dane zamiast przepisywać je z PDF.' },
          {
            ul: [
              'Podzielona płatność (MPP): gdy faktura jest oznaczona do podzielonej płatności, aplikacja pokazuje komunikat, kwotę VAT i tytuł przelewu w formacie MPP.',
              'Faktoring: gdy faktura wskazuje rachunek faktora, aplikacja ostrzega, żeby płacić na rachunek faktora, a nie sprzedawcy.',
              'Raty: faktura z kilkoma terminami pokazuje „Rata 2 z 3” i osobne daty. Kwoty raty faktura nie podaje (FA(3) zawiera same daty), więc aplikacja jej nie wymyśla.',
            ],
          },
        ],
      },
      {
        id: 'ograniczenia',
        h2: 'Czego aplikacja nie robi',
        blocks: [
          {
            ul: [
              'Nie wykonuje przelewów i nie łączy się z Twoim bankiem. Kopiujesz dane i płacisz w bankowości.',
              'Sumy liczy tylko w złotych. Faktury w innej walucie są liczone osobno i oznaczone jako „w innej walucie”, bo nie można ich dodać do PLN.',
              'Korekta, która obniża cenę, nie jest prośbą o płatność, więc nie wchodzi na listę do zapłaty.',
              'Nie sprawdza, czy przelew doszedł. Oznaczenie „opłacona” ustawiasz Ty.',
            ],
          },
        ],
      },
    ],
    faqs: [
      { q: 'Skąd aplikacja zna termin płatności?', a: 'Z faktury. Termin i kwota pochodzą z pól płatności w pliku FA(3). Gdy faktura nie ma terminu, aplikacja go nie wymyśla.' },
      { q: 'Czy aplikacja zapłaci fakturę za mnie?', a: 'Nie. Aplikacja nie łączy się z bankiem. Kopiuje dane do przelewu, a płacisz w swojej bankowości.' },
      { q: 'Jak wygląda faktura płatna w ratach?', a: 'Pokazuje „Rata 2 z 3” i osobne terminy. Zaznaczasz zapłacone raty po kolei. Faktura nie podaje kwot rat, więc ich nie pokazujemy.' },
      { q: 'Czy aplikacja rozpoznaje podzieloną płatność i faktoring?', a: 'Tak. Przy podzielonej płatności pokazuje kwotę VAT i tytuł przelewu MPP, a przy fakturze z rachunkiem faktora ostrzega, żeby zapłacić faktorowi.' },
      { q: 'Co z fakturami w euro lub dolarach?', a: 'Są liczone osobno i nie wchodzą do sumy w złotych. Aplikacja zaznacza, ile faktur w innej walucie pominięto w sumie.' },
    ],
    sources: [SRC.podrecznik2, SRC.odebrac],
  },
  {
    slug: 'zestawienie-dla-ksiegowej',
    short: 'Zestawienie dla księgowej',
    icon: 'table',
    group: 'Księgowa',
    title: 'Zestawienie faktur z KSeF dla księgowej: PDF, CSV i XML',
    metaTitle: 'Zestawienie faktur z KSeF dla księgowej: PDF, CSV, XML',
    description:
      'Jak wysłać księgowej faktury z KSeF za miesiąc: PDF ze wszystkimi fakturami, zestawienie CSV do arkusza albo oryginalne pliki XML w ZIP. Bez dawania dostępu do KSeF.',
    answer:
      'W aplikacji Faktury KSeF wybierasz miesiąc i rodzaj faktur (kosztowe, sprzedażowe albo wszystkie) i wysyłasz księgowej jedną z trzech rzeczy: PDF ze wszystkimi fakturami, zestawienie CSV albo oryginalne pliki XML w archiwum ZIP. Księgowa nie potrzebuje dostępu do Twojego KSeF ani aplikacji.',
    hub: 'PDF, CSV albo pliki XML w ZIP za wybrany miesiąc, wysyłane z telefonu.',
    keywords: ['zestawienie faktur dla księgowej ksef', 'faktury z ksef dla biura rachunkowego', 'eksport faktur z ksef csv', 'xml faktur z ksef zip'],
    published: D,
    updated: D,
    shot: 'export',
    guide: 'uprawnienia-ksef-dla-ksiegowej',
    relatedFeatures: ['pdf-xml-druk', 'platnosci-i-terminy'],
    relatedGuides: ['uprawnienia-ksef-dla-ksiegowej', 'oznaczenia-ksef-w-jpk', 'odbieranie-faktur-z-ksef'],
    sections: [
      {
        id: 'jak-dziala',
        h2: 'Jak przygotować zestawienie',
        blocks: [
          { crop: { shot: 'export', from: 0.1, to: 0.6, caption: 'Ekran „Zestawienie dla księgowej” w aplikacji Faktury KSeF.' } },
          {
            ol: [
              'Otwórz „Zestawienie dla księgowej” i wybierz rodzaj faktur: kosztowe, sprzedażowe albo wszystkie.',
              'Wskaż miesiąc (domyślnie najnowszy z pobranych faktur). Aplikacja pokazuje liczbę faktur i sumę brutto w złotych.',
              'Wyślij: „PDF ze wszystkimi fakturami”, „zestawienie CSV” albo „pliki XML (ZIP)”. Plik trafia do arkusza udostępniania telefonu, skąd wysyłasz go e-mailem lub komunikatorem.',
            ],
          },
        ],
      },
      {
        id: 'co-w-plikach',
        h2: 'Co jest w każdym pliku',
        blocks: [
          {
            table: {
              head: ['Plik', 'Zawartość', 'Do czego księgowej'],
              rows: [
                ['PDF', 'Wszystkie faktury z miesiąca jako czytelne wizualizacje z kodem QR', 'Do wglądu i archiwum'],
                ['CSV', 'Wiersz na fakturę: rodzaj, numer faktury, numer KSeF, data wystawienia, kontrahent, NIP, netto, VAT, brutto, waluta, termin, data zapłaty', 'Do arkusza i uzgodnień'],
                ['XML w ZIP', 'Oryginalne pliki faktur z KSeF, jeden plik na fakturę (numer KSeF w nazwie)', 'Do importu w programie księgowym'],
              ],
              caption: 'Zakres kolumn CSV pochodzi z aplikacji w wersji z 16.10.2026.',
            },
          },
          { p: 'XML jest oryginałem faktury ustrukturyzowanej, a PDF jest jego czytelnym odwzorowaniem. Wizualizację opisujemy w poradniku [wizualizacja faktury KSeF](/wizualizacja-faktury-ksef).' },
        ],
      },
      {
        id: 'ograniczenia',
        h2: 'Granice zestawienia',
        blocks: [
          {
            ul: [
              'Sumy w zestawieniu dotyczą faktur w złotych. Faktury w innej walucie są w CSV, ale nie wchodzą do sumy.',
              'Faktura bez pliku XML na telefonie nie trafi do PDF ani ZIP. Aplikacja podaje, ile takich faktur jest, i prosi o ponowną synchronizację.',
              'To nie jest plik JPK_VAT i nie zastępuje ewidencji. Oznaczenia KSeF w JPK opisujemy w poradniku [oznaczenia KSeF w JPK_VAT](/oznaczenia-ksef-w-jpk).',
              'Dostępu księgowej do KSeF to nie zastępuje. Jeśli ma pobierać faktury sama, nadaj jej uprawnienia w KSeF: [uprawnienia KSeF dla księgowej](/uprawnienia-ksef-dla-ksiegowej).',
            ],
          },
        ],
      },
    ],
    faqs: [
      { q: 'W jakim formacie mogę wysłać faktury księgowej?', a: 'W trzech: jako jeden PDF ze wszystkimi fakturami miesiąca, jako zestawienie CSV albo jako archiwum ZIP z oryginalnymi plikami XML.' },
      { q: 'Czy księgowa musi mieć dostęp do mojego KSeF?', a: 'Nie, żeby dostać zestawienie. Dostęp do KSeF jest potrzebny, gdy księgowa ma pobierać faktury sama. Wtedy nadajesz jej uprawnienia w Aplikacji Podatnika KSeF.' },
      { q: 'Czy zestawienie zawiera faktury sprzedażowe?', a: 'Tak, jeśli wybierzesz „Sprzedażowe” albo „Wszystkie”. Domyślnie wybrane są faktury kosztowe.' },
      { q: 'Czy księgowa musi mieć aplikację?', a: 'Nie. Dostaje zwykłe pliki PDF, CSV albo ZIP z XML, które otworzy na komputerze.' },
      { q: 'Czy pliki XML można zaimportować do programu księgowego?', a: 'Pliki są oryginałami z KSeF w formacie FA(3), czyli tym, który importują programy księgowe zgodne z KSeF. Zakres importu zależy od programu.' },
    ],
    sources: [SRC.podrecznik2, SRC.ksiegowi, SRC.jpkZnaczniki],
  },
  {
    slug: 'pdf-xml-druk',
    short: 'PDF, XML i druk faktury',
    icon: 'file',
    group: 'Odbieranie i szukanie',
    title: 'Faktura z KSeF jako PDF, XML i wydruk w telefonie',
    metaTitle: 'Faktura z KSeF: PDF, XML i druk w aplikacji na telefon',
    description:
      'Aplikacja Faktury KSeF pokazuje fakturę FA(3) czytelnie, z kodem QR, i wysyła ją jako PDF, oryginalny XML albo wydruk. Otwiera też plik XML z dysku bez łączenia z KSeF.',
    answer:
      'Faktury KSeF zamienia fakturę ustrukturyzowaną FA(3) na czytelny dokument z kodem QR do weryfikacji w KSeF. Z podglądu wysyłasz PDF, oryginalny plik XML albo drukujesz. Plik XML możesz też otworzyć z dysku, bez łączenia z KSeF.',
    hub: 'Czytelna faktura z kodem QR, PDF, oryginalny XML i druk.',
    keywords: ['wizualizacja faktury ksef na telefonie', 'pdf z faktury ksef', 'otworzyć plik xml faktury ksef', 'wydruk faktury z ksef aplikacja'],
    published: D,
    updated: D,
    shot: 'invoice',
    guide: 'wizualizacja-faktury-ksef',
    relatedFeatures: ['platnosci-i-terminy', 'zestawienie-dla-ksiegowej'],
    relatedGuides: ['wizualizacja-faktury-ksef', 'jak-wydrukowac-fakture-z-ksef', 'kody-qr-ksef', 'numer-ksef'],
    sections: [
      {
        id: 'jak-dziala',
        h2: 'Jak wygląda faktura w aplikacji',
        blocks: [
          { crop: { shot: 'invoice', from: 0.0, to: 0.5, caption: 'Podgląd faktury z KSeF w aplikacji (firma testowa).' } },
          { p: 'Faktura w KSeF to plik XML. Aplikacja czyta go i pokazuje strony, pozycje, podsumowanie VAT, płatność i numer KSeF. Dane są przepisane z XML bez zmian, a na wydruku widnieje informacja, że prawnym dokumentem jest plik XML w KSeF.' },
          {
            ul: [
              'PDF: jedna faktura albo wiele naraz (z ekranu zestawienia), z kodem QR do weryfikacji faktury w KSeF.',
              'XML: wysyłasz oryginalny plik, bez przeróbek.',
              'Drukuj: wydruk z telefonu przez systemowe okno drukowania.',
            ],
          },
        ],
      },
      {
        id: 'plik-xml',
        h2: 'Plik XML z dysku, bez KSeF',
        blocks: [
          { p: 'Dostałeś plik XML faktury e-mailem? „Otwórz plik XML faktury” pokazuje go w tym samym czytelnym widoku, bez łączenia z KSeF i bez zakładania konta. To przydatne, gdy księgowa albo kontrahent przesyła XML poza systemem.' },
        ],
      },
      {
        id: 'ograniczenia',
        h2: 'Co warto wiedzieć',
        blocks: [
          {
            ul: [
              'PDF jest wizualizacją, a nie nową fakturą. Dla KSeF liczy się plik XML i numer KSeF.',
              'Kod QR na wydruku prowadzi do weryfikacji faktury w KSeF. Zasady kodów opisujemy w poradniku [kody QR w KSeF](/kody-qr-ksef).',
            ],
          },
        ],
      },
    ],
    faqs: [
      { q: 'Czy PDF z aplikacji jest fakturą?', a: 'Nie, jest czytelnym odwzorowaniem faktury. Fakturą ustrukturyzowaną jest plik XML w KSeF z numerem KSeF. Na wydruku aplikacja zaznacza, że XML jest oryginałem.' },
      { q: 'Jak otworzyć plik XML faktury z KSeF?', a: 'W aplikacji wybierz „Otwórz plik XML faktury” i wskaż plik. Faktura otworzy się w czytelnym widoku, bez łączenia z KSeF.' },
      { q: 'Czy mogę wydrukować fakturę z telefonu?', a: 'Tak, przyciskiem „Drukuj” w podglądzie faktury, przez systemowe okno drukowania iOS lub Androida.' },
      { q: 'Co oznacza kod QR na wydruku?', a: 'Prowadzi do weryfikacji faktury w KSeF. Szczegóły kodów QR opisujemy w osobnym poradniku.' },
    ],
    sources: [SRC.odebrac, SRC.kodyQr, SRC.numer, SRC.apiQr],
  },
  {
    slug: 'powiadomienia-o-fakturach',
    short: 'Powiadomienia o fakturach',
    icon: 'bell',
    group: 'Płatności',
    title: 'Powiadomienia o nowych fakturach z KSeF i terminach płatności',
    metaTitle: 'Powiadomienia o fakturach z KSeF na telefonie',
    description:
      'Aplikacja Faktury KSeF powiadamia o nowej fakturze i przypomina o terminie płatności o 9:00 dzień wcześniej. Powiadomienia są lokalne, bez serwera push.',
    answer:
      'Faktury KSeF powiadamia o nowej fakturze z KSeF i przypomina o terminie płatności o 9:00 dzień wcześniej. Powiadomienia są lokalne: aplikacja sprawdza KSeF w tle, gdy pozwala na to system telefonu, i nie używa serwera push.',
    hub: 'Nowa faktura i przypomnienie o terminie płatności, bez serwera.',
    keywords: ['powiadomienia ksef nowa faktura', 'powiadomienie o fakturze z ksef', 'przypomnienie o terminie płatności faktury', 'aplikacja ksef powiadomienia'],
    published: D,
    updated: D,
    shot: 'start',
    guide: 'odbieranie-faktur-z-ksef',
    relatedFeatures: ['platnosci-i-terminy', 'prywatnosc-bez-konta'],
    relatedGuides: ['odbieranie-faktur-z-ksef', 'jak-pobrac-fakture-z-ksef', 'ksef-nie-dziala'],
    sections: [
      {
        id: 'jak-dziala',
        h2: 'Dwa rodzaje powiadomień',
        blocks: [
          { crop: { shot: 'start', from: 0.4, to: 0.78, caption: 'Nowe faktury na ekranie Start w aplikacji Faktury KSeF (firma testowa).' } },
          {
            table: {
              head: ['', 'Nowa faktura', 'Termin płatności'],
              rows: [
                ['Kiedy', 'Po synchronizacji w tle, gdy aplikacja nie jest na ekranie', 'O 9:00 dzień przed terminem'],
                ['Treść', 'Nazwa sprzedawcy, kwota, numer faktury i termin. Przy więcej niż trzech nowych fakturach jedno zbiorcze powiadomienie', 'Nazwa sprzedawcy albo liczba faktur z terminem jutro i suma w złotych'],
                ['Raty', '—', 'Każda rata ma własne przypomnienie („Rata 2 z 3”)'],
                ['Działa offline', 'Nie, potrzebuje połączenia z KSeF', 'Tak, przypomnienia są zaplanowane na telefonie'],
              ],
            },
          },
          { p: 'Tej samej faktury aplikacja nie zgłasza dwa razy. Każde powiadomienie możesz wyłączyć osobno w zakładce „Więcej”.' },
        ],
      },
      {
        id: 'jak-sprawdza',
        h2: 'Jak często sprawdza KSeF',
        blocks: [
          { p: 'Aplikacja prosi system o synchronizację w tle co najmniej co 30 minut. To tylko prośba: o tym, kiedy zadanie faktycznie ruszy, decyduje iOS lub Android (oszczędzanie baterii, tryb niskiego zużycia, ograniczenia aplikacji w tle). Dlatego powiadomienie może przyjść z opóźnieniem, a po wymuszeniu zamknięcia aplikacji system potrafi wstrzymać zadania w tle.' },
          { note: 'Powiadomienia o nowych fakturach nie są natychmiastowe i nie zastępują okresowego zajrzenia do aplikacji. Przypomnienia o terminach działają niezależnie od tła, bo są zaplanowane na telefonie.' },
        ],
      },
      {
        id: 'ograniczenia',
        h2: 'Granice powiadomień',
        blocks: [
          {
            ul: [
              'O zgodę na powiadomienia aplikacja pyta raz. Jeśli odmówisz, zmienisz to tylko w ustawieniach telefonu, a aplikacja podpowie, gdzie.',
              'iOS trzyma najwyżej 64 zaplanowane powiadomienia na aplikację, więc aplikacja planuje przypomnienia na 40 najbliższych dni, w które przypadają terminy.',
              'Nie ma serwera push, więc nie dostaniesz powiadomienia, gdy telefon nie może uruchomić zadania w tle.',
              'Powiadomienia nie zawierają danych w chmurze: tworzy je aplikacja na podstawie faktur zapisanych na telefonie.',
            ],
          },
        ],
      },
    ],
    faqs: [
      { q: 'Czy KSeF sam wysyła powiadomienie o nowej fakturze?', a: 'Aplikacja Faktury KSeF sprawdza KSeF w tle i sama tworzy powiadomienie na telefonie. Nie opieramy się na powiadomieniach wysyłanych przez KSeF.' },
      { q: 'Jak szybko dostanę powiadomienie o nowej fakturze?', a: 'Aplikacja prosi o synchronizację w tle co najmniej co 30 minut, ale kiedy zadanie ruszy, decyduje system telefonu. Powiadomienie może więc przyjść z opóźnieniem.' },
      { q: 'Czy przypomnienie o terminie działa bez internetu?', a: 'Tak. Przypomnienia o 9:00 dzień przed terminem są zaplanowane na telefonie i nie wymagają połączenia.' },
      { q: 'Czy aplikacja potrzebuje serwera?', a: 'Nie. Nie ma serwera push ani konta. Powiadomienia tworzy sama aplikacja z faktur zapisanych na telefonie.' },
      { q: 'Czy mogę wyłączyć powiadomienia?', a: 'Tak, osobno nowe faktury i przypomnienia o terminach, w zakładce „Więcej”. Zgodę systemową cofniesz w ustawieniach telefonu.' },
    ],
    sources: [SRC.odebrac, SRC.mobilna],
  },
  {
    slug: 'wyszukiwarka-faktur',
    short: 'Wyszukiwarka faktur',
    icon: 'search',
    group: 'Odbieranie i szukanie',
    title: 'Wyszukiwarka faktur z KSeF na telefonie: po NIP, nazwie, numerze i kwocie',
    metaTitle: 'Wyszukiwarka faktur z KSeF: po NIP, nazwie, kwocie',
    description:
      'Szukaj faktur z KSeF po nazwie kontrahenta, NIP, numerze faktury, numerze KSeF lub kwocie. Wyszukiwanie działa na kopii na telefonie, także bez internetu, i ignoruje polskie znaki.',
    answer:
      'W aplikacji Faktury KSeF wpisujesz nazwę kontrahenta, NIP, numer faktury, numer KSeF albo kwotę i od razu widzisz pasujące faktury. Szukanie działa na kopii zapisanej na telefonie, więc nie potrzebuje internetu, a polskie znaki nie mają znaczenia.',
    hub: 'Szukanie po nazwie, NIP, numerze, numerze KSeF i kwocie, także offline.',
    keywords: ['wyszukiwarka faktur ksef', 'jak znaleźć fakturę w ksef po nip', 'szukanie faktur w ksef na telefonie', 'wyszukiwanie faktur ksef po kwocie'],
    published: D,
    updated: D,
    shot: 'invoices',
    guide: 'jak-znalezc-fakture-w-ksef',
    relatedFeatures: ['pdf-xml-druk', 'platnosci-i-terminy'],
    relatedGuides: ['jak-znalezc-fakture-w-ksef', 'odbieranie-faktur-z-ksef', 'numer-ksef'],
    sections: [
      {
        id: 'jak-dziala',
        h2: 'Po czym możesz szukać',
        blocks: [
          { crop: { shot: 'invoices', from: 0.05, to: 0.5, caption: 'Lista faktur z wyszukiwarką w aplikacji Faktury KSeF (firma testowa).' } },
          {
            ul: [
              'nazwa kontrahenta (sprzedawcy lub nabywcy),',
              'NIP sprzedawcy lub nabywcy, także wpisany z myślnikami,',
              'numer faktury i numer KSeF,',
              'kwota brutto, także kwota do zapłaty, z kropką lub przecinkiem.',
            ],
          },
          { p: 'Możesz wpisać kilka słów naraz: aplikacja pokaże faktury, które pasują do wszystkich. Wielkość liter i polskie znaki nie mają znaczenia, więc „zolc” znajdzie „Żółć”.' },
        ],
      },
      {
        id: 'filtry',
        h2: 'Filtry i podział',
        blocks: [
          {
            ul: [
              'Zakładki „Otrzymane” i „Wystawione” rozdzielają faktury kosztowe i sprzedażowe.',
              'Filtry: wszystkie, nowe, do zapłaty i po terminie, z licznikami.',
              'Faktury są pogrupowane według miesięcy, z sumą w złotych dla każdego miesiąca.',
            ],
          },
          { p: 'Pierwsza synchronizacja pobiera historię faktur w oknach do 90 dni. Faktur sprzed pierwszej synchronizacji w aplikacji nie ma, dopóki ich nie pobierzesz: w Ustawieniach możesz pobrać starsze faktury za wybrany okres.' },
        ],
      },
      {
        id: 'ograniczenia',
        h2: 'Granice wyszukiwarki',
        blocks: [
          {
            ul: [
              'Szuka tylko wśród faktur zapisanych na telefonie, nie w całym KSeF.',
              'Nie szuka w treści pozycji faktury, tylko w polach z listy powyżej.',
              'Bez połączenia z KSeF znajdziesz to, co zostało już pobrane. Nowe faktury pojawią się po synchronizacji.',
            ],
          },
          { note: 'Szukasz faktury, której nie masz w aplikacji ani w programie? Zobacz, jak szukać w samym KSeF: [jak znaleźć fakturę w KSeF](/jak-znalezc-fakture-w-ksef).' },
        ],
      },
    ],
    faqs: [
      { q: 'Czy mogę szukać faktur po NIP?', a: 'Tak. Aplikacja szuka po NIP sprzedawcy i nabywcy, także wpisanym z myślnikami.' },
      { q: 'Czy wyszukiwanie wymaga internetu?', a: 'Nie. Szuka w kopii faktur zapisanej na telefonie. Internet jest potrzebny tylko do pobrania nowych faktur z KSeF.' },
      { q: 'Czy znajdę faktury sprzed instalacji aplikacji?', a: 'Tak, po ich pobraniu. Pierwsza synchronizacja pobiera historię w oknach do 90 dni, a starsze okresy możesz dociągnąć w Ustawieniach.' },
      { q: 'Czy można szukać po kwocie?', a: 'Tak, po kwocie brutto i po kwocie do zapłaty, z kropką lub przecinkiem.' },
      { q: 'Czy aplikacja szuka w całym KSeF?', a: 'Nie, tylko w fakturach pobranych na telefon. Do szukania w KSeF służy Aplikacja Podatnika.' },
    ],
    sources: [SRC.odebrac, SRC.numer, SRC.podrecznik2],
  },
  {
    slug: 'prywatnosc-bez-konta',
    short: 'Prywatność, bez konta',
    icon: 'shield',
    group: 'Bezpieczeństwo i start',
    title: 'Aplikacja do KSeF bez konta: gdzie są Twoje faktury i token',
    metaTitle: 'Aplikacja do KSeF bez konta i bez serwera: prywatność',
    description:
      'Faktury KSeF działa bez konta i bez naszego serwera. Token i faktury zostają na telefonie, klucz w pęku kluczy, opcjonalna blokada Face ID. Co zostaje, co wysyłamy i jak usunąć dane.',
    answer:
      'Faktury KSeF nie ma konta ani własnego serwera. Aplikacja łączy się bezpośrednio z KSeF, token lub klucz certyfikatu trzyma w pęku kluczy telefonu, a faktury zapisuje tylko na urządzeniu. Nie mamy dostępu do Twoich danych.',
    hub: 'Bez konta i bez serwera: dane zostają na telefonie, opcjonalna blokada Face ID.',
    keywords: ['aplikacja ksef bez konta', 'czy bezpieczne podanie tokena ksef aplikacji', 'aplikacja ksef dane na telefonie', 'prywatność aplikacji ksef'],
    published: D,
    updated: D,
    shot: 'connect',
    guide: 'token-czy-certyfikat-ksef',
    relatedFeatures: ['logowanie-certyfikatem-ksef', 'powiadomienia-o-fakturach'],
    relatedGuides: ['token-czy-certyfikat-ksef', 'certyfikat-ksef', 'jak-zaczac-z-ksef'],
    sections: [
      {
        id: 'gdzie-dane',
        h2: 'Co jest gdzie',
        blocks: [
          {
            table: {
              head: ['Dane', 'Gdzie są', 'Czy opuszczają telefon'],
              rows: [
                ['Token lub klucz certyfikatu', 'Pęk kluczy telefonu (Keychain / Keystore)', 'Nie. Używany do logowania w KSeF'],
                ['Hasło do klucza certyfikatu', 'Nigdzie, nie jest zapisywane', 'Nie'],
                ['Faktury i pliki XML', 'Pamięć aplikacji na telefonie', 'Tylko, gdy je wyślesz (PDF, CSV, ZIP)'],
                ['Oznaczenia „opłacona”', 'Pamięć aplikacji na telefonie', 'Nie'],
                ['Konto u nas', 'Nie istnieje', '—'],
              ],
              caption: 'Źródło: kod aplikacji Faktury KSeF, stan z 16.10.2026.',
            },
          },
          { crop: { shot: 'connect', from: 0.355, to: 0.645, caption: 'Ekran połączenia: bez konta i bez serwera.' } },
        ],
      },
      {
        id: 'komunikacja',
        h2: 'Z kim aplikacja się łączy',
        blocks: [
          { p: 'Aplikacja wysyła zapytania bezpośrednio do API KSeF Ministerstwa Finansów, żeby pobrać faktury. Pobiera je pakietami eksportu, jak zaleca KSeF, i trzyma się poniżej limitów zapytań. Nie wysyła Twoich faktur ani tokena na nasz serwer, bo go nie mamy.' },
          { p: 'Powiadomienia są lokalne: tworzy je aplikacja na telefonie, bez serwera push.' },
        ],
      },
      {
        id: 'kontrola',
        h2: 'Twoja kontrola',
        blocks: [
          {
            ul: [
              'Blokada Face ID / Touch ID: opcjonalna, zamyka aplikację po przejściu w tło.',
              '„Odłącz firmę” usuwa z telefonu token lub certyfikat, pobrane faktury i oznaczenia zapłaty. Faktury w KSeF zostają bez zmian.',
              'Token możesz w każdej chwili unieważnić w Aplikacji Podatnika KSeF.',
              'Uprawnienie „Przeglądanie faktur” wystarcza, więc aplikacja nie może wystawić faktury w Twoim imieniu.',
            ],
          },
          { note: 'Szczegóły prawne opisuje [polityka prywatności](/privacy-policy). Jeśli zgubisz telefon, odłącz firmę zdalnie, unieważniając token lub certyfikat w Aplikacji Podatnika.' },
        ],
      },
    ],
    faqs: [
      { q: 'Czy macie dostęp do moich faktur lub tokena?', a: 'Nie. Nie mamy konta ani serwera. Aplikacja łączy się bezpośrednio z KSeF, a dane zostają na telefonie.' },
      { q: 'Co się stanie, gdy zgubię telefon?', a: 'Unieważnij token lub certyfikat w Aplikacji Podatnika KSeF. Aplikacja ma też opcjonalną blokadę Face ID lub Touch ID.' },
      { q: 'Jak usunąć dane z aplikacji?', a: '„Odłącz firmę” w zakładce „Więcej” usuwa z telefonu token lub certyfikat, faktury i oznaczenia zapłaty. Faktury w KSeF zostają.' },
      { q: 'Czy aplikacja może wystawić fakturę w moim imieniu?', a: 'Nie. Do odbierania wystarcza uprawnienie „Przeglądanie faktur”, a aplikacja nie ma funkcji wystawiania.' },
    ],
    sources: [SRC.certyfikaty, SRC.pytania, SRC.apiUprawnienia],
  },
  {
    slug: 'wyprobuj-na-firmie-testowej',
    short: 'Wypróbuj na firmie testowej',
    icon: 'flask',
    group: 'Bezpieczeństwo i start',
    title: 'Wypróbuj KSeF na firmie testowej: aplikacja bez prawdziwych danych',
    metaTitle: 'Wypróbuj KSeF na firmie testowej: demo w aplikacji',
    description:
      'Przycisk „Wypróbuj na firmie testowej” tworzy fikcyjną firmę w testowym środowisku KSeF i pobiera przykładowe faktury w około 20 sekund. Prawdziwe API, bez prawdziwych danych.',
    answer:
      'Na pierwszym ekranie wybierasz „Wypróbuj na firmie testowej”. Aplikacja tworzy fikcyjną firmę w testowym środowisku KSeF, czterech fikcyjnych dostawców wysyła jej przykładowe faktury, a firma wystawia kilka własnych. Całość trwa około 20 sekund i działa na prawdziwym API KSeF.',
    hub: 'Fikcyjna firma na środowisku testowym KSeF, przykładowe faktury w 20 sekund.',
    keywords: ['ksef demo aplikacja', 'ksef środowisko testowe aplikacja', 'wypróbuj ksef bez firmy', 'testowe faktury ksef'],
    published: D,
    updated: D,
    shot: 'connect',
    guide: 'ksef-demo-i-wersja-testowa',
    relatedFeatures: ['logowanie-certyfikatem-ksef', 'prywatnosc-bez-konta'],
    relatedGuides: ['ksef-demo-i-wersja-testowa', 'jak-zaczac-z-ksef', 'certyfikat-ksef'],
    sections: [
      {
        id: 'jak-dziala',
        h2: 'Co dzieje się po dotknięciu przycisku',
        blocks: [
          { crop: { shot: 'connect', from: 0.355, to: 0.665, caption: 'Ekran startowy: „Wypróbuj na firmie testowej” obok połączenia certyfikatem i tokenem.' } },
          { crop: { shot: 'start', from: 0.0, to: 0.45, caption: 'Pulpit aplikacji po zaimportowaniu faktur firmy testowej.' } },
          {
            ol: [
              'Aplikacja zakłada fikcyjną firmę na środowisku TEST KSeF (z losowym NIP-em i certyfikatem samopodpisanym).',
              'Czterech fikcyjnych dostawców wysyła tej firmie pięć faktur w formacie FA(3), a firma wystawia dwie własne.',
              'Aplikacja pobiera je tak samo jak zwykłe faktury: logując się certyfikatem i pobierając pakiet eksportu.',
            ],
          },
          { p: 'To prawdziwe wywołania API KSeF, tylko na środowisku testowym. Dzięki temu widzisz dokładnie to, co zobaczysz po połączeniu prawdziwej firmy: pulpit, listę, płatności, zestawienie dla księgowej i powiadomienia.' },
        ],
      },
      {
        id: 'granice',
        h2: 'Czym to jest, a czym nie',
        blocks: [
          {
            ul: [
              'Dane są fikcyjne. Środowisko testowe KSeF nie ma skutków prawnych ani podatkowych.',
              'Nie potrzebujesz ZAW-FA, certyfikatu ani żadnych uprawnień.',
              'Firma testowa jest osobna od Twojej prawdziwej firmy. Gdy ją odłączysz, dane testowe znikają z telefonu.',
              'Aplikacja MF nie ma takiego trybu, bo działa tylko na produkcji. Test w Aplikacji Podatnika opisujemy w poradniku [KSeF demo i wersja testowa](/ksef-demo-i-wersja-testowa).',
            ],
          },
        ],
      },
    ],
    faqs: [
      { q: 'Czy firma testowa to prawdziwa firma?', a: 'Nie. To fikcyjna firma z losowym NIP-em na środowisku testowym KSeF. Faktury są przykładowe i nie mają skutków prawnych.' },
      { q: 'Ile trwa przygotowanie danych testowych?', a: 'Około 20 sekund. Aplikacja zakłada firmę, odbiera faktury od fikcyjnych dostawców i pobiera je na telefon.' },
      { q: 'Czy muszę mieć certyfikat albo token, żeby wypróbować aplikację?', a: 'Nie. Aplikacja sama tworzy certyfikat dla firmy testowej i loguje się nim, tak jak będzie logować się prawdziwa firma.' },
      { q: 'Czy mogę potem połączyć prawdziwą firmę?', a: 'Tak. Odłącz firmę testową w zakładce „Więcej” i połącz prawdziwą certyfikatem albo tokenem.' },
    ],
    sources: [SRC.apTest, SRC.apiSrodowiska, SRC.adresy],
  },
];

export const getFeature = (slug: string) => FEATURES.find((f) => f.slug === slug);

export const FEATURE_GROUPS = ['Odbieranie i szukanie', 'Płatności', 'Księgowa', 'Bezpieczeństwo i start'] as const;

/** Which feature page matches a screenshot, for the card inside guides. */
export const FEATURE_FOR_SHOT: Record<string, string> = {
  start: 'powiadomienia-o-fakturach',
  invoices: 'wyszukiwarka-faktur',
  invoice: 'pdf-xml-druk',
  payments: 'platnosci-i-terminy',
  export: 'zestawienie-dla-ksiegowej',
  connect: 'logowanie-certyfikatem-ksef',
};
