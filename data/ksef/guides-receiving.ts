// Guides about receiving, finding, printing and reading invoices from KSeF, plus access (certificate,
// permissions), the 2027 deadline for small firms and outages. Keyword targets come from
// ksef-seo-content-plan.md. Facts were checked on 2026-10-15 against ksef.podatki.gov.pl, the MF KSeF 2.0
// manuals (part I and II), the official API docs (CIRFMF/ksef-docs), and cross-checked with press reports.
import type { Guide } from './guides';
import { SRC } from './sources';

export const GUIDES_RECEIVING: Guide[] = [
  {
    slug: 'odbieranie-faktur-z-ksef',
    short: 'Odbieranie faktur z KSeF',
    title: 'Odbieranie faktur w KSeF: jak to działa i jak tego nie przegapić',
    metaTitle: 'Odbieranie faktur z KSeF: data otrzymania i jak odebrać',
    description:
      'Faktura z KSeF jest otrzymana w chwili nadania numeru KSeF, a KSeF nie wysyła powiadomień. Jak odbierać faktury kosztowe: narzędzia MF, program, biuro rachunkowe, aplikacja.',
    lede:
      'Od 1 lutego 2026 r. każda firma z NIP otrzymuje faktury ustrukturyzowane przez KSeF, także jeśli sama jeszcze nie musi w nim wystawiać faktur. Faktura nie przychodzi mailem: leży w systemie i trzeba po nią sięgnąć. Poniżej, jak to działa, od kiedy liczy się termin płatności i jakie są sposoby odbioru.',
    summary: [
      'Od 1 lutego 2026 r. podatnicy z NIP otrzymują faktury od kontrahentów przez KSeF. Nie trzeba niczego akceptować.',
      'Faktura jest otrzymana w dniu nadania jej numeru KSeF, nawet jeśli nikt jej jeszcze nie otworzył.',
      'KSeF nie wysyła powiadomień o nowych fakturach. Trzeba regularnie sprawdzać system albo używać programu, który robi to sam.',
      'Faktury odbierzesz w bezpłatnych narzędziach MF (Aplikacja Podatnika KSeF, Aplikacja Mobilna KSeF, e-mikrofirma), w programie zintegrowanym z KSeF albo przez biuro rachunkowe z uprawnieniami.',
      'KSeF przechowuje faktury przez 10 lat od końca roku wystawienia.',
    ],
    keywords: ['odbieranie faktur ksef', 'jak odbierać faktury z ksef', 'ksef pobieranie faktur', 'otrzymywanie faktur ksef', 'faktury zakupowe ksef', 'jak odebrać fakturę w ksef'],
    published: '2026-10-15',
    updated: '2026-10-15',
    sections: [
      {
        id: 'kto-i-od-kiedy',
        h2: 'Kto odbiera faktury przez KSeF i od kiedy',
        blocks: [
          { p: 'Obowiązek otrzymywania faktur ustrukturyzowanych przez KSeF obowiązuje od 1 lutego 2026 r. i dotyczy wszystkich podatników z NIP, niezależnie od formy prawnej i od tego, kiedy muszą zacząć wystawiać faktury w KSeF. Mała firma, która do końca 2026 r. może jeszcze wystawiać faktury poza systemem (limit 10 000 zł miesięcznie), faktury kosztowe od kontrahentów już dziś dostaje w KSeF. Szczegóły terminów opisujemy w poradniku [KSeF od kiedy](/ksef-od-kiedy).' },
          { p: 'Fakturę otrzymujesz, jeśli Twój NIP jest wpisany w polu NIP nabywcy (Podmiot2). Jeśli sprzedawca omyłkowo wpisze go w innym polu, na przykład jako numer VAT UE, faktura do Ciebie w KSeF nie trafi, mimo że jest w systemie. Faktury widzi też podmiot trzeci wskazany na fakturze z NIP, na przykład płatnik.' },
          { note: 'Konsumenci i firmy zagraniczne bez polskiego NIP nie odbierają faktur w KSeF w zwykły sposób. Sprzedawca przekazuje im fakturę w uzgodniony sposób (np. PDF lub wydruk) z kodem QR.' },
        ],
      },
      {
        id: 'data-otrzymania',
        h2: 'Kiedy faktura jest otrzymana i dlaczego to ważne',
        blocks: [
          { figure: 'odbieranie-schemat' },
          { p: 'Faktura jest uznana za otrzymaną w momencie, gdy KSeF nada jej numer. Nie ma znaczenia, czy ją pobrałeś ani czy w ogóle zalogowałeś się do systemu. Od tej daty liczą się skutki, które dotąd zależały od dnia, w którym faktura przyszła mailem lub pocztą, na przykład termin płatności liczony od otrzymania faktury.' },
          {
            ul: [
              'Przykład z podręcznika MF: faktura wysłana do KSeF 1 lutego 2026 r. o 23:56, numer KSeF nadany 2 lutego o 00:01. Data otrzymania: 2 lutego.',
              'Dla faktur wystawionych w trybach offline datą otrzymania jest co do zasady dzień nadania numeru KSeF po dosłaniu faktury do systemu.',
              'Wyjątek: przy fakturze przekazanej poza KSeF nabywcy zagranicznemu, konsumentowi lub nabywcy bez NIP liczy się dzień faktycznego otrzymania.',
            ],
          },
          { p: 'Sprzedawca nie wie, czy pobrałeś fakturę. KSeF nie daje mu takiej informacji, a Ty nie możesz w systemie „odrzucić” faktury. Błędy wyjaśnia się poza KSeF, a sprzedawca poprawia je fakturą korygującą. Zobacz [korekta faktury w KSeF](/korekta-faktury-w-ksef).' },
        ],
      },
      {
        id: 'sposoby',
        h2: 'Cztery sposoby odbierania faktur',
        blocks: [
          {
            table: {
              head: ['Sposób', 'Dla kogo', 'Na co uważać'],
              rows: [
                ['Aplikacja Podatnika KSeF (przeglądarka)', 'kilka–kilkanaście faktur miesięcznie', 'Logowanie przy każdym wejściu; brak powiadomień'],
                ['Aplikacja Mobilna KSeF (MF)', 'JDG wystawiające i odbierające faktury z telefonu', 'Wystawia i pokazuje faktury; logowanie przez węzeł krajowy'],
                ['e-mikrofirma (e-Urząd Skarbowy)', 'JDG prowadzące tam ewidencję VAT', 'Wygodne, jeśli już korzystasz z e-mikrofirmy'],
                ['Program księgowy lub aplikacja zintegrowana z API KSeF', 'setki faktur albo potrzeba automatyzacji', 'Program loguje się tokenem lub certyfikatem i sam pobiera faktury'],
              ],
              caption: 'Narzędzia MF według: ksef.podatki.gov.pl, Krok po kroku – jak odebrać fakturę w KSeF.',
            },
          },
          { p: 'Jak działa e-mikrofirma, opisujemy w poradniku [e-mikrofirma a KSeF](/e-mikrofirma-ksef). Piąta droga to biuro rachunkowe. Jeśli nadasz mu uprawnienie do przeglądania faktur, samo pobiera Twoje faktury z KSeF. Jak to zrobić, piszemy w poradniku [uprawnienia KSeF dla księgowej](/uprawnienia-ksef-dla-ksiegowej).' },
          { p: 'Ministerstwo Finansów wprost wskazuje, że przy setkach lub tysiącach faktur miesięcznie efektywniejsze jest pobieranie ich z systemu masowo, przez program po uwierzytelnieniu, a przy niewielkiej liczbie wystarczą bezpłatne narzędzia. Masowe pobieranie przez API zwraca pliki XML.' },
        ],
      },
      {
        id: 'logowanie',
        h2: 'Co jest potrzebne, żeby odebrać fakturę',
        blocks: [
          {
            ol: [
              'Dostęp do KSeF. Osoba fizyczna z NIP (np. JDG) ma go automatycznie, jako uprawnienie właścicielskie. Obie ścieżki opisujemy w poradniku [jak zacząć z KSeF](/jak-zaczac-z-ksef), a samo wystawianie w poradniku [jak wystawić fakturę w KSeF](/jak-wystawic-fakture-w-ksef). Spółka loguje się pieczęcią kwalifikowaną albo składa zawiadomienie [ZAW-FA](/zaw-fa), w którym wskazuje osobę uprawnioną.',
              'Sposób logowania: osoby fizyczne przez login.gov.pl (Profil Zaufany, mObywatel, bankowość elektroniczna lub e-dowód) albo kwalifikowanym podpisem elektronicznym, firmy pieczęcią kwalifikowaną, a w programach także token lub [certyfikat KSeF](/certyfikat-ksef). Wszystkie metody opisujemy w poradniku [logowanie do KSeF](/logowanie-do-ksef).',
              'Zakładka z fakturami otrzymanymi. W narzędziach MF to „Lista faktur”. Szczegółowo opisujemy to w poradniku [jak pobrać fakturę z KSeF](/jak-pobrac-fakture-z-ksef).',
            ],
          },
          { p: 'Fakturę można też otworzyć bez logowania: przez kod QR z wydruku lub PDF albo przez tzw. dostęp anonimowy, podając numer KSeF i dane z faktury. Opisujemy to w poradniku [jak znaleźć fakturę w KSeF](/jak-znalezc-fakture-w-ksef).' },
        ],
      },
      {
        id: 'powiadomienia',
        h2: 'KSeF nie powiadamia o nowych fakturach',
        blocks: [
          { p: 'Ministerstwo Finansów potwierdza w podręczniku KSeF 2.0, że system nie wysyła powiadomień o otrzymaniu faktury i nie planuje ich wprowadzać, bo dla firm z dużą liczbą faktur byłoby to utrudnienie. Program, z którego korzystasz, musi sam regularnie „odpytywać” KSeF. MF zostawia powiadomienia programom.' },
          { p: 'W praktyce oznacza to jedno: jeśli odbierasz faktury ręcznie w Aplikacji Podatnika, ustal stały rytm, na przykład zaglądanie dwa razy w tygodniu i przed każdym przelewem. MF przypomina o tym na swojej stronie, bo od daty otrzymania zależy termin płatności.' },
        ],
      },
      {
        id: 'przechowywanie',
        h2: 'Czy trzeba zapisywać lub drukować otrzymane faktury',
        blocks: [
          { p: 'Nie ma takiego obowiązku. KSeF przechowuje faktury ustrukturyzowane przez 10 lat, licząc od końca roku, w którym zostały wystawione. W tym czasie nie musisz archiwizować ich samodzielnie. Jeśli zobowiązanie podatkowe przedawnia się później niż po 10 latach (na przykład przy długiej amortyzacji), pobierz fakturę z KSeF, zanim zostanie usunięta, i przechowuj ją do końca okresu przedawnienia.' },
          { p: 'Wydruk lub PDF możesz zrobić, gdy jest potrzebny, na przykład do rejestracji samochodu albo rozliczenia dotacji. Wtedy liczy się kod QR z numerem KSeF; więcej w poradniku [jak wydrukować fakturę z KSeF](/jak-wydrukowac-fakture-z-ksef).' },
        ],
      },
    ],
    faqs: [
      { q: 'Czy muszę potwierdzić odbiór faktury w KSeF?', a: 'Nie. KSeF nie wymaga akceptacji. Faktura jest otrzymana w chwili nadania jej numeru KSeF.' },
      { q: 'Czy KSeF wyśle mi e-mail o nowej fakturze?', a: 'Nie. KSeF nie wysyła powiadomień. Trzeba logować się i sprawdzać listę faktur albo używać programu lub aplikacji, która sprawdza KSeF sama.' },
      { q: 'Czy sprzedawca musi mi dodatkowo wysłać fakturę mailem?', a: 'Nie musi. Dla krajowego nabywcy z NIP KSeF jest podstawowym i wystarczającym kanałem. Mail czy PDF mogą być tylko dodatkiem.' },
      { q: 'Czy mogę odrzucić fakturę, która nie jest dla mnie?', a: 'W KSeF nie ma funkcji odrzucania faktur. Sprawę wyjaśniasz ze sprzedawcą, a on wystawia fakturę korygującą, np. do zera.' },
      { q: 'Jak długo faktury są dostępne w KSeF?', a: 'Przez 10 lat od końca roku, w którym je wystawiono. Faktura z 2026 r. będzie w KSeF do 31 grudnia 2036 r.' },
    ],
    sources: [SRC.odebrac, SRC.podrecznik2, SRC.pytania, SRC.jdg, SRC.mobilna],
    app: { shot: 'start', from: 0.17, to: 0.44, text: 'KSeF nie wysyła powiadomień. Faktury KSeF sprawdza system w tle i daje znać, gdy przyjdzie nowa faktura, a na pulpicie pokazuje, co jest do zapłaty i do kiedy.' },
    related: ['jak-pobrac-fakture-z-ksef', 'jak-znalezc-fakture-w-ksef', 'aplikacje-mobilne-ksef'],
  },
  {
    slug: 'jak-pobrac-fakture-z-ksef',
    short: 'Jak pobrać fakturę z KSeF',
    title: 'Jak pobrać fakturę z KSeF: krok po kroku (XML i PDF)',
    metaTitle: 'Jak pobrać fakturę z KSeF? Krok po kroku, XML i PDF',
    description:
      'Jak pobrać fakturę z KSeF w Aplikacji Podatnika, aplikacji mobilnej, programie lub bez logowania przez kod QR. Kiedy wybrać XML, a kiedy PDF, i jak pobrać wiele faktur naraz.',
    lede:
      'Pobranie faktury z KSeF to zalogowanie się, znalezienie jej na liście faktur otrzymanych i zapisanie jako XML albo PDF. Poniżej wszystkie drogi: przez bezpłatne narzędzia MF, przez program, bez logowania i dla wielu faktur naraz.',
    summary: [
      'W Aplikacji Podatnika KSeF: zaloguj się, otwórz „Lista faktur”, wybierz fakturę i pobierz ją jako PDF lub XML.',
      'Plik XML to właściwa faktura. PDF to jej wizualizacja z kodem QR i numerem KSeF, którą można zapisać lub wydrukować.',
      'Bez logowania pobierzesz fakturę przez kod QR z wizualizacji albo przez dostęp anonimowy (numer KSeF i dane z faktury).',
      'Wiele faktur naraz pobiera program zintegrowany z API KSeF. Masowo pobierane są pliki XML.',
    ],
    keywords: ['jak pobrać fakturę z ksef', 'jak pobrać faktury z ksef', 'pobieranie faktur z ksef', 'ksef pobierz fakturę', 'jak pobrać fakturę z ksef bez logowania', 'ksef faktury zakupowe'],
    published: '2026-10-15',
    updated: '2026-10-15',
    sections: [
      {
        id: 'aplikacja-podatnika',
        h2: 'Pobieranie w Aplikacji Podatnika KSeF',
        blocks: [
          { figure: 'pobieranie-3-drogi' },
          { p: 'To bezpłatna, przeglądarkowa aplikacja Ministerstwa Finansów dostępna z poziomu ksef.podatki.gov.pl. Kroki według instrukcji MF:' },
          {
            ol: [
              'Wejdź na ksef.podatki.gov.pl i wybierz Aplikację Podatnika KSeF 2.0 (wersja produkcyjna, nie testowa ani demo).',
              'Zaloguj się przez login.gov.pl (Profil Zaufany, mObywatel, bankowość elektroniczna lub e-dowód) albo podpisem kwalifikowanym. Spółka bez pieczęci kwalifikowanej musi wcześniej złożyć ZAW-FA, a logować się będzie osoba w nim wskazana.',
              'Jeśli działasz w imieniu firmy, a nie jako JDG, wybierz kontekst (NIP firmy), w którym chcesz pracować.',
              'Otwórz zakładkę „Lista faktur”. Znajdziesz tam faktury wystawione dla Ciebie w KSeF. Zawęź listę datą lub kontrahentem.',
              'Wybierz fakturę i pobierz ją w formacie PDF albo XML. Pobrane i wydrukowane faktury mają kod QR i numer KSeF.',
            ],
          },
          { note: 'Środowiska testowe i demo służą wyłącznie do ćwiczeń. Faktury z prawdziwych transakcji są tylko w wersji produkcyjnej.' },
        ],
      },
      {
        id: 'xml-czy-pdf',
        h2: 'XML czy PDF: który plik pobrać',
        blocks: [
          {
            table: {
              head: ['', 'XML', 'PDF (wizualizacja)'],
              rows: [
                ['Czym jest', 'Właściwa faktura ustrukturyzowana w strukturze FA(3)', 'Czytelny obraz danych z XML z kodem QR i numerem KSeF'],
                ['Do czego', 'Import do programu księgowego, archiwum, przekazanie księgowej', 'Czytanie, wydruk, przekazanie poza KSeF'],
                ['Masowe pobieranie przez API', 'Tak', 'Nie, masowo pobierane są tylko XML'],
              ],
            },
          },
          { p: 'Księgowej najczęściej przekazuje się XML, bo program księgowy wczytuje go bez przepisywania. PDF przydaje się, gdy chcesz fakturę przeczytać albo wydrukować. Różnicę między plikiem a jego obrazem wyjaśniamy w poradniku [wizualizacja faktury KSeF](/wizualizacja-faktury-ksef).' },
        ],
      },
      {
        id: 'bez-logowania',
        h2: 'Jak pobrać fakturę z KSeF bez logowania',
        blocks: [
          { p: 'KSeF ma dwie drogi dostępu do faktury bez uwierzytelnienia:' },
          { h3: '1. Przez kod QR (dostęp dwuetapowy)' },
          {
            ol: [
              'Zeskanuj kod QR z wydruku, PDF albo potwierdzenia transakcji lub kliknij link.',
              'Zobaczysz podstawowe dane faktury i informację, czy jest w KSeF.',
              'Podaj numer faktury nadany przez sprzedawcę, identyfikator podatkowy nabywcy (lub informację o jego braku) i kwotę należności ogółem.',
              'Pobierz fakturę w formacie XML lub PDF.',
            ],
          },
          { h3: '2. Dostęp anonimowy (bez kodu QR)' },
          { p: 'Działa w Aplikacji Podatnika KSeF 2.0, przed zalogowaniem. Najpierw podajesz numer KSeF faktury, potem numer faktury, NIP lub inny identyfikator nabywcy (albo informację o braku), imię i nazwisko lub nazwę nabywcy oraz kwotę należności ogółem. Wystarczy jedna błędna dana, a system nie znajdzie faktury.' },
          { note: 'Po kilku błędnych próbach z rzędu KSeF czasowo blokuje pobranie danej faktury. Dane przepisuj z dokumentu, nie z pamięci.' },
        ],
      },
      {
        id: 'wiele-faktur',
        h2: 'Jak pobrać wiele faktur z KSeF naraz',
        blocks: [
          { p: 'Aplikacja Podatnika KSeF dobrze sprawdza się przy pojedynczych fakturach. Przy dziesiątkach faktur miesięcznie lepszy jest program zintegrowany z API KSeF 2.0: loguje się tokenem lub certyfikatem KSeF i pobiera nowe faktury automatycznie. MF potwierdza, że automatyczne pobieranie przez integrację jest możliwe, a masowe pobieranie obejmuje pliki XML.' },
          { p: 'Programowi do samego pobierania wystarczy uprawnienie do przeglądania faktur. Nie dawaj mu prawa do wystawiania faktur, jeśli go nie potrzebuje. Różnicę między tokenem a certyfikatem opisujemy w poradniku [token czy certyfikat KSeF](/token-czy-certyfikat-ksef).' },
        ],
      },
      {
        id: 'problemy',
        h2: 'Nie widzę faktury: najczęstsze przyczyny',
        blocks: [
          {
            ul: [
              'Faktura nie ma jeszcze numeru KSeF, bo sprzedawca wystawił ją offline i jeszcze jej nie dosłał. Przy trybie offline24 ma na to czas do następnego dnia roboczego.',
              'Sprzedawca wpisał Twój NIP w złym polu, na przykład jako numer VAT UE. Wtedy faktura do Ciebie nie trafi i trzeba poprosić o korektę.',
              'Jesteś zalogowany w innym kontekście (np. jako osoba prywatna, a nie w kontekście firmy).',
              'Filtry daty na liście są zbyt wąskie albo patrzysz na faktury wystawione, a nie otrzymane.',
              'Masz uprawnienia tylko do jednej z firm, którymi się zajmujesz. Sprawdź je w Aplikacji Podatnika.',
            ],
          },
          { p: 'Gdy żadna z tych przyczyn nie pasuje, sprawdź komunikaty techniczne MF. Opisujemy je w poradniku [KSeF nie działa](/ksef-nie-dziala).' },
        ],
      },
    ],
    faqs: [
      { q: 'Czy pobrana z KSeF faktura w PDF jest ważna?', a: 'Formalnie fakturą jest plik XML. Wizualizacja (PDF lub wydruk) z kodem QR i numerem KSeF może być używana poza KSeF, bo kod pozwala sprawdzić jej zgodność z oryginałem w systemie.' },
      { q: 'Czy mogę pobrać fakturę z KSeF na telefon?', a: 'Tak. Aplikacja Mobilna KSeF pozwala przeglądać, pobierać i udostępniać faktury, a prywatne aplikacje zintegrowane z KSeF także zapisują je na telefonie.' },
      { q: 'Ile razy mogę pobrać tę samą fakturę?', a: 'Dowolną liczbę razy. Faktura jest w KSeF przez 10 lat od końca roku wystawienia, a sprzedawca nie widzi, czy i ile razy ją pobrałeś.' },
      { q: 'Jak pobrać fakturę z KSeF bez Profilu Zaufanego?', a: 'Przez login.gov.pl zalogujesz się też mObywatelem, bankowością elektroniczną lub e-dowodem. Możesz też użyć podpisu kwalifikowanego, w programie tokenu lub certyfikatu KSeF, albo pobrać pojedynczą fakturę bez logowania przez kod QR lub dostęp anonimowy.' },
    ],
    sources: [SRC.odebrac, SRC.podrecznik2, SRC.pytania, SRC.mobilna],
    app: { shot: 'invoice', from: 0.37, to: 0.53, text: 'Faktury KSeF pobiera faktury z KSeF automatycznie. Każdą zapiszesz jednym dotknięciem jako PDF z kodem QR, oryginalny XML albo od razu wydrukujesz.' },
    related: ['odbieranie-faktur-z-ksef', 'jak-wydrukowac-fakture-z-ksef', 'wizualizacja-faktury-ksef'],
  },
  {
    slug: 'jak-znalezc-fakture-w-ksef',
    short: 'Jak znaleźć fakturę w KSeF',
    title: 'Jak znaleźć i sprawdzić fakturę w KSeF (także bez logowania)',
    metaTitle: 'Jak znaleźć fakturę w KSeF i sprawdzić, czy jest w systemie',
    description:
      'Jak wyszukać fakturę w KSeF po dacie, kontrahencie lub numerze, jak sprawdzić, czy faktura jest w KSeF, oraz jak działa anonimowe wyszukiwanie faktury i kod QR.',
    lede:
      'Fakturę w KSeF znajdziesz na trzy sposoby: po zalogowaniu na liście faktur, bez logowania przez kod QR albo przez anonimowe wyszukiwanie, jeśli znasz numer KSeF i dane z faktury. Wyjaśniamy, kiedy który działa i co zrobić, gdy faktury nie ma.',
    summary: [
      'Po zalogowaniu faktury otrzymane są w zakładce „Lista faktur” w Aplikacji Podatnika KSeF lub w programie zintegrowanym z KSeF.',
      'Kod QR na wydruku, PDF lub potwierdzeniu transakcji pokazuje, czy faktura jest już w KSeF, bez logowania.',
      'Anonimowe wyszukiwanie wymaga numeru KSeF, numeru faktury, identyfikatora i nazwy nabywcy oraz kwoty należności ogółem.',
      'Jeśli faktury nie ma, zwykle nie została jeszcze dosłana do KSeF albo ma błędny NIP nabywcy.',
    ],
    keywords: ['jak znaleźć fakturę w ksef', 'jak sprawdzić faktury w ksef', 'jak sprawdzić czy faktura jest w ksef', 'anonimowe wyszukiwanie faktury ksef', 'ksef wyszukiwanie faktur', 'wyszukiwarka ksef'],
    published: '2026-10-15',
    updated: '2026-10-15',
    sections: [
      {
        id: 'po-zalogowaniu',
        h2: 'Wyszukiwanie po zalogowaniu',
        blocks: [
          { p: 'W Aplikacji Podatnika KSeF i w Aplikacji Mobilnej KSeF faktury otrzymane i wystawione są na liście faktur. Ministerstwo Finansów pokazuje w materiałach do aplikacji mobilnej wyszukiwanie po numerze faktury, po NIP kontrahenta i po zakresie kwot. Zawężanie datą przyspiesza szukanie przy dłuższej historii.' },
          {
            ul: [
              'Najpierw upewnij się, że patrzysz na faktury otrzymane (zakupowe), a nie wystawione.',
              'Pracując dla kilku firm, sprawdź, w jakim kontekście (NIP) jesteś zalogowany.',
              'Jeśli znasz numer KSeF, szukaj po nim. Jest unikalny w całym systemie. Jak wygląda, opisujemy w poradniku [numer KSeF](/numer-ksef).',
            ],
          },
        ],
      },
      {
        id: 'kod-qr',
        h2: 'Jak sprawdzić, czy faktura jest w KSeF: kod QR',
        blocks: [
          { p: 'Każda wizualizacja faktury przekazywana poza KSeF ma kod QR. Po zeskanowaniu telefonem zobaczysz bez logowania podstawowe dane faktury, m.in. datę wystawienia, datę nadania numeru KSeF i tryb wystawienia (online lub offline), oraz informację, czy dokument w KSeF jest zgodny z tym, dla którego wygenerowano kod.' },
          {
            table: {
              head: ['Co jest pod kodem QR', 'Co to znaczy'],
              rows: [
                ['Numer KSeF (35 znaków)', 'Faktura jest już w KSeF.'],
                ['Napis OFFLINE', 'Faktura została wystawiona offline i może jeszcze nie być w KSeF. Sprawdź ją ponownie później.'],
                ['Drugi kod z napisem CERTYFIKAT', 'Pozwala sprawdzić tożsamość wystawcy faktury offline.'],
                ['Dwa kody bez napisów, dokument „potwierdzenie transakcji”', 'To nie jest faktura, tylko potwierdzenie, że faktura trafi do KSeF.'],
              ],
              caption: 'Według: ksef.podatki.gov.pl, Kody weryfikujące QR i Potwierdzenie transakcji.',
            },
          },
          { p: 'Aby pobrać całą fakturę przez kod QR, podajesz jeszcze numer faktury, identyfikator nabywcy i kwotę należności ogółem. Kroki opisujemy w poradniku [jak pobrać fakturę z KSeF](/jak-pobrac-fakture-z-ksef).' },
        ],
      },
      {
        id: 'anonimowo',
        h2: 'Anonimowe wyszukiwanie faktury w KSeF',
        blocks: [
          { p: 'Gdy nie masz kodu QR, a znasz numer KSeF, użyj usługi dostępu anonimowego. Jest w Aplikacji Podatnika KSeF 2.0, na ekranie przed logowaniem. Zgodnie z § 8 rozporządzenia w sprawie korzystania z KSeF potrzebujesz:' },
          {
            ol: [
              'numeru KSeF faktury,',
              'numeru faktury nadanego przez sprzedawcę (pole P_2),',
              'NIP lub innego identyfikatora nabywcy albo informacji o jego braku,',
              'imienia i nazwiska lub nazwy nabywcy albo informacji o braku tych danych,',
              'kwoty należności ogółem (pole P_15).',
            ],
          },
          { p: 'Przy fakturze korygującej podajesz numer KSeF korekty, numer korekty i kwotę z korekty. Jeśli choć jedna dana się nie zgadza, system nie znajdzie faktury. Wtedy przejdź proces od początku i porównaj dane z dokumentem.' },
          { figure: 'pobieranie-3-drogi' },
        ],
      },
      {
        id: 'brak-faktury',
        h2: 'Faktury nie ma w KSeF: co sprawdzić',
        blocks: [
          {
            ul: [
              'Kod QR pokazuje „OFFLINE”: sprzedawca wystawił fakturę offline. Przy offline24 musi ją dosłać najpóźniej następnego dnia roboczego, w trybie awaryjnym w ciągu 7 dni roboczych od końca awarii.',
              'Masz potwierdzenie transakcji zamiast faktury: to normalne, faktura pojawi się po nadaniu numeru KSeF.',
              'NIP nabywcy jest w innym polu niż NIP (np. NrVatUE). Wtedy KSeF nie dostarczy faktury i potrzebna jest korekta.',
              'Faktura była wystawiona przed obowiązkiem KSeF lub poza nim (np. przez małą firmę w limicie 10 000 zł do końca 2026 r., z kasy rejestrującej albo [dla konsumenta](/faktura-dla-osoby-fizycznej-a-ksef)). Takich faktur w KSeF nie ma.',
            ],
          },
          { p: 'Jeśli dotyczy Cię termin płatności, pamiętaj, że liczy się dzień nadania numeru KSeF. Więcej w poradniku [odbieranie faktur z KSeF](/odbieranie-faktur-z-ksef).' },
        ],
      },
    ],
    faqs: [
      { q: 'Czy mogę sprawdzić fakturę w KSeF bez logowania?', a: 'Tak. Kod QR z wizualizacji pokazuje, czy faktura jest w KSeF, a dostęp anonimowy w Aplikacji Podatnika pozwala ją pobrać po podaniu numeru KSeF i danych z faktury.' },
      { q: 'Czy w KSeF można wyszukać fakturę po NIP sprzedawcy?', a: 'Tak, po zalogowaniu możesz zawęzić listę faktur kontrahentem, numerem i datą. Bez logowania wyszukiwanie wymaga numeru KSeF.' },
      { q: 'Dlaczego kod QR pokazuje napis OFFLINE?', a: 'Faktura została wystawiona w trybie offline i w chwili tworzenia kodu nie miała numeru KSeF. Po dosłaniu do systemu będzie dostępna w KSeF.' },
      { q: 'Czy faktura imienna dla osoby prywatnej jest w KSeF?', a: 'Zwykle nie. Wystawianie faktur dla konsumentów w KSeF jest dobrowolne. Jeśli sprzedawca ją tam wystawi, przekazuje kod QR i dane do jej pobrania.' },
    ],
    sources: [SRC.podrecznik2, SRC.kodyQr, SRC.potwierdzenie, SRC.mobilna, SRC.pytania],
    app: { shot: 'invoices', from: 0.13, to: 0.6, text: 'W Faktury KSeF jedno pole szuka po nazwie kontrahenta, NIP, numerze faktury, numerze KSeF i kwocie. Działa także bez internetu, bo faktury są zapisane na telefonie.' },
    related: ['jak-pobrac-fakture-z-ksef', 'numer-ksef', 'odbieranie-faktur-z-ksef'],
  },
  {
    slug: 'jak-wydrukowac-fakture-z-ksef',
    short: 'Jak wydrukować fakturę z KSeF',
    title: 'Jak wydrukować fakturę z KSeF i czy trzeba to robić',
    metaTitle: 'Jak wydrukować fakturę z KSeF? Wydruk, PDF i kod QR',
    description:
      'Faktury z KSeF nie trzeba drukować, ale można. Jak wydrukować fakturę z KSeF w Aplikacji Podatnika, kiedy wydruk jest ważny poza KSeF i dlaczego musi mieć kod QR z numerem KSeF.',
    lede:
      'Faktura w KSeF to plik XML, więc nie ma „oryginału” do wydrukowania. Możesz jednak wydrukować jej wizualizację i używać jej poza systemem, o ile ma kod QR z numerem KSeF. Wyjaśniamy, jak to zrobić i kiedy wydruk jest potrzebny.',
    summary: [
      'Nie ma obowiązku drukowania faktur z KSeF. System przechowuje je przez 10 lat.',
      'Wydruk lub PDF to wizualizacja faktury. Musi mieć kod QR z numerem KSeF, żeby można go było użyć poza KSeF.',
      'W Aplikacji Podatnika KSeF wybierz fakturę, pobierz PDF i wydrukuj go. Kod QR i numer KSeF są dodawane automatycznie.',
      'Wydruk przydaje się m.in. do rejestracji samochodu, rozliczenia dotacji, spraw urzędowych i sądowych.',
    ],
    keywords: ['jak wydrukować fakturę z ksef', 'czy faktury z ksef trzeba drukować', 'wydruk faktury ksef', 'faktura ksef pdf', 'czy wydruk faktury z ksef jest dokumentem księgowym'],
    published: '2026-10-15',
    updated: '2026-10-15',
    sections: [
      {
        id: 'czy-trzeba',
        h2: 'Czy trzeba drukować faktury z KSeF',
        blocks: [
          { p: 'Nie. Ministerstwo Finansów odpowiada wprost: faktury ustrukturyzowane są przechowywane w systemie i nie ma obowiązku ich drukowania. KSeF przechowuje je przez 10 lat od końca roku wystawienia, a w tym czasie nie musisz trzymać papierowego archiwum.' },
          { p: 'Obieg dokumentów w firmie może pozostać papierowy, jeśli tak wolisz. Krajowy nabywca z NIP odbiera faktury elektronicznie, w KSeF, ale może posługiwać się ich wydrukiem poza systemem, jeśli wydruk ma numer KSeF i kod QR. Na wizualizacji można też, tak jak dotąd, opisywać sprawdzenie merytoryczne i formalno-rachunkowe.' },
          { figure: 'wydruk-faktury' },
        ],
      },
      {
        id: 'krok-po-kroku',
        h2: 'Jak wydrukować fakturę z KSeF krok po kroku',
        blocks: [
          {
            ol: [
              'Zaloguj się do Aplikacji Podatnika KSeF 2.0 (przez login.gov.pl lub podpisem kwalifikowanym) albo do programu zintegrowanego z KSeF.',
              'Otwórz „Lista faktur” i znajdź fakturę. Wskazówki w poradniku [jak znaleźć fakturę w KSeF](/jak-znalezc-fakture-w-ksef).',
              'Pobierz fakturę jako PDF. Narzędzia MF same dodają kod QR i numer KSeF.',
              'Otwórz PDF i wydrukuj go jak każdy inny dokument.',
            ],
          },
          { p: 'Bez logowania wydrukujesz fakturę, gdy pobierzesz ją przez kod QR albo przez dostęp anonimowy. W obu przypadkach możesz wybrać format PDF. Szczegóły w poradniku [jak pobrać fakturę z KSeF](/jak-pobrac-fakture-z-ksef).' },
        ],
      },
      {
        id: 'waznosc-wydruku',
        h2: 'Kiedy wydruk faktury z KSeF jest ważny',
        blocks: [
          { p: 'Z formalnego punktu widzenia dokumentem jest plik XML. Art. 106gb ust. 5 ustawy o VAT pozwala jednak używać faktury poza KSeF pod warunkiem, że ma kod umożliwiający weryfikację jej danych. Według MF taki wydruk może być dokumentem księgowym, jeśli ma kod QR z numerem KSeF.' },
          {
            table: {
              head: ['Co jest na wydruku', 'Czy można go użyć poza KSeF'],
              rows: [
                ['Kod QR z numerem KSeF pod spodem', 'Tak. To pełnoprawna wizualizacja faktury już przyjętej do KSeF.'],
                ['Kod QR z napisem OFFLINE i drugi z napisem CERTYFIKAT', 'Tak, przy fakturach offline przekazywanych poza KSeF przed ich dosłaniem.'],
                ['Brak kodu QR', 'Nie dla faktury z KSeF. Poproś sprzedawcę o wizualizację z kodem albo pobierz ją sam.'],
                ['Dokument „potwierdzenie transakcji”', 'To nie faktura. Służy do sprawdzenia, czy faktura trafiła już do KSeF.'],
              ],
            },
          },
          { note: 'Treść wydruku musi zgadzać się z plikiem XML w KSeF. Wizualizacja może mieć inny układ, logo lub inny język, ale nie może zawierać innych warunków transakcji niż faktura w systemie.' },
        ],
      },
      {
        id: 'kiedy-sie-przyda',
        h2: 'Kiedy wydruk się przydaje',
        blocks: [
          {
            ul: [
              'Rejestracja samochodu w wydziale komunikacji.',
              'Rozliczenie dotacji lub dofinansowania.',
              'Sprawy administracyjne i sądowe.',
              'Rozliczenie wydatków pracownika: sprzedawca może wydać pracownikowi wydruk z kodem QR albo potwierdzenie transakcji, jeśli faktura nie ma jeszcze numeru KSeF.',
              'Faktury dla konsumentów i kontrahentów zagranicznych, którym faktura przekazywana jest w uzgodniony sposób.',
            ],
          },
          { p: 'Jak wygląda wizualizacja faktury i skąd się bierze jej układ, opisujemy w poradniku [wizualizacja faktury KSeF](/wizualizacja-faktury-ksef).' },
        ],
      },
    ],
    faqs: [
      { q: 'Czy faktury z KSeF trzeba drukować do archiwum?', a: 'Nie. Faktury są przechowywane w KSeF przez 10 lat od końca roku wystawienia i nie ma obowiązku ich drukowania.' },
      { q: 'Czy wydruk faktury z KSeF jest dokumentem księgowym?', a: 'Może nim być, jeśli ma kod QR z numerem KSeF, który pozwala sprawdzić jego zgodność z plikiem XML w KSeF.' },
      { q: 'Czy mogę wydrukować fakturę z KSeF jako PDF?', a: 'Tak. Pobierz fakturę jako PDF w Aplikacji Podatnika KSeF lub w programie. System doda kod QR z numerem KSeF automatycznie.' },
      { q: 'Czy mogę wydrukować fakturę z telefonu?', a: 'Tak. Aplikacja Mobilna KSeF pozwala pobrać i udostępnić fakturę, a prywatne aplikacje z obsługą KSeF mogą drukować wprost przez drukarkę sieciową.' },
    ],
    sources: [SRC.pytania, SRC.odebrac, SRC.kodyQr, SRC.podrecznik2],
    app: { shot: 'invoice', from: 0.37, to: 0.53, text: 'W Faktury KSeF przycisk „Drukuj” tworzy wizualizację z kodem QR i numerem KSeF i wysyła ją do drukarki. Ten sam plik zapiszesz jako PDF.' },
    related: ['wizualizacja-faktury-ksef', 'jak-pobrac-fakture-z-ksef', 'numer-ksef'],
  },
  {
    slug: 'wizualizacja-faktury-ksef',
    short: 'Wizualizacja faktury KSeF',
    title: 'Wizualizacja faktury KSeF: jak wygląda faktura z KSeF',
    metaTitle: 'Wizualizacja faktury KSeF – wygląd, wzór i kod QR',
    description:
      'Czym jest wizualizacja faktury KSeF, czy musi wyglądać jak wzór MF, co musi zawierać, kiedy potrzebny jest kod QR i jak otworzyć plik XML faktury z KSeF.',
    lede:
      'Faktura w KSeF to plik XML, którego człowiek wygodnie nie przeczyta. To, co widzisz jako PDF lub wydruk, to jej wizualizacja: obraz danych z pliku. Wyjaśniamy, jak może wyglądać, co musi na niej być i jak samemu otworzyć XML.',
    summary: [
      'Wizualizacja to czytelny obraz danych z pliku XML faktury, np. PDF lub wydruk.',
      'Nie musi wyglądać jak wzór Ministerstwa Finansów. Może mieć własny układ, logo i inny język, ale treść musi zgadzać się z XML.',
      'Wizualizacja przekazywana lub używana poza KSeF musi mieć kod QR z numerem KSeF (przy fakturach offline dwa kody).',
      'Bezpłatne narzędzia MF (Aplikacja Podatnika KSeF, Aplikacja Mobilna KSeF, e-mikrofirma) tworzą wizualizację automatycznie.',
    ],
    keywords: ['wizualizacja faktury ksef', 'wizualizacja faktury ksef przykład', 'faktura ksef wygląd', 'jak wygląda faktura z ksef', 'faktura ksef wzór', 'wzór faktury ksef', 'podgląd faktury xml ksef'],
    published: '2026-10-15',
    updated: '2026-10-15',
    sections: [
      {
        id: 'czym-jest',
        h2: 'Faktura a jej wizualizacja',
        blocks: [
          { p: 'Fakturą ustrukturyzowaną jest plik XML zgodny ze strukturą logiczną FA(3), któremu KSeF nadał numer. Struktura FA(3) nie jest wzorem graficznym: opisuje, jakie dane i w jakich polach się znajdują, a nie jak mają wyglądać na papierze. Więcej o samym pliku w poradniku [faktura ustrukturyzowana](/faktura-ustrukturyzowana).' },
          { p: 'Wizualizacja to przedstawienie tych danych w czytelnej formie: PDF, wydruk, widok w aplikacji. To ona przypomina dawną fakturę z sprzedawcą, nabywcą, pozycjami, sumami i danymi do przelewu.' },
          { figure: 'xml-wizualizacja' },
        ],
      },
      {
        id: 'zasady',
        h2: 'Zasady wizualizacji według Ministerstwa Finansów',
        blocks: [
          {
            ul: [
              'Wygląd jest dowolny. Programy mogą tworzyć własny układ i nie muszą kopiować wzoru MF.',
              'Treść musi odpowiadać plikowi XML w KSeF, tak by nie wprowadzać w błąd co do warunków transakcji.',
              'Język może być inny niż polski albo dwujęzyczny, jeśli po przetłumaczeniu treść zgadza się z XML.',
              'Można dodać elementy bez znaczenia dla systemu, np. logo czy kontakt do biura obsługi klienta.',
              'Nie należy umieszczać ważnych danych (termin, forma płatności, numer rachunku) tylko na wizualizacji. Powinny być w XML, w polach takich jak Platnosc czy DodatkowyOpis.',
            ],
          },
          { p: 'Dla twórców wizualizacji MF udostępniło na ePUAP transformatę dla wzoru FA(3) (ID wzoru 13775, CRDWE). Na niej opiera się widok w narzędziach MF.' },
        ],
      },
      {
        id: 'kod-qr',
        h2: 'Kod QR na wizualizacji',
        blocks: [
          { p: 'Gdy faktura jest przekazywana poza KSeF (np. konsumentowi, firmie zagranicznej) albo używana poza systemem, na wizualizacji musi być kod weryfikujący. Kod QR zawiera m.in. datę wystawienia, NIP sprzedawcy i skrót (wyróżnik) pliku faktury, dzięki czemu każdy może sprawdzić, czy obraz zgadza się z oryginałem w KSeF.' },
          {
            table: {
              head: ['Sytuacja', 'Kody na wizualizacji'],
              rows: [
                ['Faktura wystawiona online, z numerem KSeF', 'Jeden kod QR, pod nim numer KSeF'],
                ['Faktura offline, jeszcze nie w KSeF', 'Dwa kody: OFFLINE (dostęp do faktury) i CERTYFIKAT (tożsamość wystawcy, wymaga certyfikatu KSeF typu 2)'],
                ['Faktura offline już dosłana do KSeF', 'Jeden kod QR z numerem KSeF'],
                ['Faktura wystawiona w czasie awarii całkowitej', 'Bez kodów QR, bo faktura nie trafia do KSeF'],
              ],
              caption: 'Według: ksef.podatki.gov.pl, Kody weryfikujące QR i Awaria całkowita.',
            },
          },
          { p: 'Numer KSeF pod kodem ma zawsze 35 znaków. Jego budowę opisujemy w poradniku [numer KSeF](/numer-ksef), a wszystkie rodzaje kodów w poradniku [kody QR w KSeF](/kody-qr-ksef).' },
        ],
      },
      {
        id: 'jak-otworzyc-xml',
        h2: 'Jak otworzyć plik XML faktury z KSeF',
        blocks: [
          { p: 'Jeśli dostałeś sam plik XML (np. od księgowej albo z programu), masz trzy możliwości:' },
          {
            ol: [
              'Otwórz fakturę w Aplikacji Podatnika KSeF i pobierz jej PDF, jeśli jest Twoja i masz dostęp do KSeF.',
              'Pobierz PDF bez logowania przez dostęp anonimowy, jeśli znasz numer KSeF i dane z faktury. Opisujemy to w poradniku [jak znaleźć fakturę w KSeF](/jak-znalezc-fakture-w-ksef).',
              'Użyj programu lub aplikacji, która wczytuje pliki FA(3) i pokazuje je czytelnie.',
            ],
          },
          { p: 'Otwarcie XML w przeglądarce czy edytorze tekstu pokaże surowe znaczniki (np. P_1, P_2, P_15). Da się z nich odczytać dane, ale to nie jest wygodny sposób na sprawdzanie faktur.' },
        ],
      },
    ],
    faqs: [
      { q: 'Czy faktura z KSeF musi wyglądać jak wzór Ministerstwa Finansów?', a: 'Nie. Wygląd wizualizacji jest dowolny, byle jej treść zgadzała się z plikiem XML w KSeF.' },
      { q: 'Czy wizualizacja faktury musi mieć kod QR?', a: 'Tak, jeśli faktura jest przekazywana lub używana poza KSeF, np. jako PDF wysłany mailem lub wydruk.' },
      { q: 'Czy wizualizacja może być po angielsku?', a: 'Tak. Może być w innym języku lub dwujęzyczna, jeśli po przetłumaczeniu zgadza się z danymi w pliku XML.' },
      { q: 'Gdzie znajdę przykładową wizualizację faktury KSeF?', a: 'Bezpłatne narzędzia MF tworzą wizualizację z każdej faktury w KSeF, także na środowisku testowym i demo, gdzie można ćwiczyć na fikcyjnych danych.' },
    ],
    sources: [SRC.pytania, SRC.podrecznik2, SRC.kodyQr, SRC.apiQr],
    app: { shot: 'invoice', from: 0.06, to: 0.53, text: 'Faktury KSeF zamienia XML z KSeF w czytelny widok: kontrahent, kwota, termin i dane do przelewu, a na żądanie tworzy PDF z kodem QR i numerem KSeF.' },
    related: ['faktura-ustrukturyzowana', 'jak-wydrukowac-fakture-z-ksef', 'numer-ksef'],
  },
  {
    slug: 'numer-ksef',
    short: 'Numer KSeF',
    title: 'Numer KSeF: co oznacza, ile ma znaków i gdzie go wpisać',
    metaTitle: 'Numer KSeF – 35 znaków, przykład i przelew od 2027',
    description:
      'Numer KSeF ma 35 znaków: NIP sprzedawcy, datę, część techniczną i sumę kontrolną. Gdzie go znaleźć, czym różni się od numeru faktury i od kiedy trzeba go podawać w przelewie.',
    lede:
      'Każda faktura przyjęta do KSeF dostaje unikalny numer KSeF. Od niego zależy data otrzymania faktury, jest w JPK_VAT, a od 1 stycznia 2027 r. trzeba go podawać w tytule przelewu. Poniżej budowa numeru na oficjalnym przykładzie i wszystkie miejsca, gdzie jest potrzebny.',
    summary: [
      'Numer KSeF nadaje system po przyjęciu faktury. Ma zawsze 35 znaków, np. 5265877635-20250826-0100001AF629-AF.',
      'Składa się z NIP sprzedawcy, daty przyjęcia faktury, 12-znakowej części technicznej i 2-znakowej sumy kontrolnej CRC-8.',
      'To nie jest numer faktury nadany przez sprzedawcę (pole P_2). Nie ma go w pliku XML, wraca w UPO.',
      'Od 1 lutego 2026 r. numer KSeF wpisuje się w JPK_VAT, a od 1 stycznia 2027 r. podaje w przelewie za fakturę.',
    ],
    keywords: ['numer ksef', 'numer ksef co to', 'numer ksef ile znaków', 'numer ksef na fakturze', 'numer ksef w przelewie od kiedy', 'numer ksef przykład', 'skąd wziąć numer ksef'],
    published: '2026-10-15',
    updated: '2026-10-15',
    sections: [
      {
        id: 'budowa',
        h2: 'Budowa numeru KSeF',
        blocks: [
          { p: 'Numer KSeF to unikalny identyfikator faktury w całym systemie. Według dokumentacji technicznej MF zawsze ma długość 35 znaków i format 9999999999-RRRRMMDD-FFFFFFFFFFFF-FF. Oficjalny przykład: 5265877635-20250826-0100001AF629-AF.' },
          { figure: 'numer-ksef-budowa' },
          {
            table: {
              head: ['Część', 'Przykład', 'Znaczenie'],
              rows: [
                ['NIP sprzedawcy', '5265877635', '10 cyfr'],
                ['Data', '20250826', 'Dzień przyjęcia faktury do dalszego przetwarzania (RRRRMMDD)'],
                ['Część techniczna', '0100001AF629', '12 znaków szesnastkowych: cyfry 0–9 i wielkie litery A–F'],
                ['Suma kontrolna', 'AF', '2 znaki, CRC-8 liczone z pierwszych 32 znaków'],
              ],
              caption: 'Źródło: dokumentacja API KSeF 2.0, „Numer KSeF – struktura i walidacja”.',
            },
          },
          { p: 'Suma kontrolna pozwala wykryć literówkę. Liczy się ją algorytmem CRC-8 (wielomian 0x07, wartość początkowa 0x00) z 32 znaków danych i zapisuje jako dwa znaki szesnastkowe. Jeśli przepisany numer ma inną sumę, jest błędny.' },
          { note: 'Data w numerze KSeF to dzień przyjęcia faktury przez system, a nie data wystawienia z pola P_1. Przy fakturach offline te daty mogą się różnić.' },
        ],
      },
      {
        id: 'gdzie-go-znalezc',
        h2: 'Gdzie znaleźć numer KSeF',
        blocks: [
          {
            ul: [
              'W Aplikacji Podatnika KSeF i w programie: przy każdej fakturze na liście i w szczegółach.',
              'Na wizualizacji (PDF, wydruk): bezpośrednio pod kodem QR.',
              'W UPO, czyli Urzędowym Poświadczeniu Odbioru, które dostaje wystawca.',
            ],
          },
          { p: 'Numeru KSeF nie ma w samym pliku XML faktury, bo nadawany jest dopiero po jego przyjęciu. Sprzedawca nie musi wysyłać go nabywcy: faktura z numerem pojawia się u nabywcy automatycznie. Jeśli jednak szukasz faktury bez logowania, numer KSeF jest pierwszą daną, o którą zapyta [dostęp anonimowy](/jak-znalezc-fakture-w-ksef).' },
        ],
      },
      {
        id: 'numer-faktury',
        h2: 'Numer KSeF a numer faktury',
        blocks: [
          { p: 'To dwa różne numery. Numer faktury (pole P_2) nadaje sprzedawca w ramach swojej serii, np. FV/12/10/2026. Numer KSeF nadaje system. MF podkreśla, że nie należy ich utożsamiać, a KSeF nie zmienia zasad numerowania faktur przez sprzedawcę.' },
          { p: 'KSeF pilnuje jednak unikalności: duplikat to faktura z tym samym NIP sprzedawcy, rodzajem faktury i numerem P_2. Taka faktura zostanie odrzucona (kod błędu 440).' },
        ],
      },
      {
        id: 'przelew-2027',
        h2: 'Numer KSeF w przelewie od 1 stycznia 2027 r.',
        blocks: [
          { p: 'Od 1 stycznia 2027 r. nabywca będący czynnym podatnikiem VAT, płacąc przelewem za fakturę ustrukturyzowaną innemu czynnemu podatnikowi, podaje w płatności numer KSeF (art. 108g ustawy o VAT). Od tej samej daty numer KSeF trafia też do tytułu przelewu w mechanizmie podzielonej płatności (art. 108a ust. 3 pkt 3). Celem jest przeciwdziałanie zatorom płatniczym.' },
          {
            ul: [
              'Jedna faktura: podajesz jej numer KSeF.',
              'Kilka faktur od jednego sprzedawcy: podajesz identyfikator zbiorczy. Ma 35 znaków, np. 9999999999-IZ202602-FFFFFFFFFFFF-FF, i wygenerujesz go w Aplikacji Podatnika KSeF lub w programie z listy numerów KSeF.',
              'Faktura offline, której z powodu ogłoszonej awarii nie przesłano jeszcze do KSeF: obowiązek nie dotyczy.',
              'Obowiązek dotyczy też sprzedawcy przy poleceniu zapłaty i osób trzecich płacących za nabywcę.',
            ],
          },
        ],
      },
      {
        id: 'jpk-i-korekty',
        h2: 'Numer KSeF w JPK_VAT, korektach i zaliczkach',
        blocks: [
          { p: 'Od 1 lutego 2026 r. obowiązuje nowa struktura JPK_V7M(3) i JPK_V7K(3), w której numer KSeF wykazuje się w części ewidencyjnej przy sprzedaży i zakupach. Kiedy zamiast numeru stosuje się OFF, BFK lub DI, opisujemy w poradniku [oznaczenia KSeF w JPK_VAT](/oznaczenia-ksef-w-jpk). W samych fakturach FA(3) numer KSeF podaje się w fakturze korygującej (numer faktury korygowanej) oraz w fakturze rozliczającej zaliczkę (numer faktury zaliczkowej).' },
          { p: 'Rozbudowany harmonogram zmian na 2026 i 2027 r. opisujemy w poradniku [KSeF od kiedy](/ksef-od-kiedy).' },
        ],
      },
    ],
    faqs: [
      { q: 'Ile znaków ma numer KSeF?', a: 'Zawsze 35 znaków, w formacie NIP-RRRRMMDD-12 znaków technicznych-2 znaki sumy kontrolnej.' },
      { q: 'Czy numer KSeF to to samo co numer faktury?', a: 'Nie. Numer faktury nadaje sprzedawca (pole P_2), a numer KSeF nadaje system po przyjęciu faktury.' },
      { q: 'Od kiedy trzeba podawać numer KSeF w przelewie?', a: 'Od 1 stycznia 2027 r., przy płatnościach między czynnymi podatnikami VAT za faktury ustrukturyzowane, także w podzielonej płatności.' },
      { q: 'Co wpisać w przelewie, gdy płacę za kilka faktur naraz?', a: 'Identyfikator zbiorczy wygenerowany w KSeF dla co najmniej dwóch faktur od tego samego sprzedawcy.' },
      { q: 'Czy sprzedawca musi mi wysłać numer KSeF?', a: 'Nie. Faktura z numerem pojawia się w KSeF u nabywcy automatycznie.' },
    ],
    sources: [SRC.apiNumer, SRC.numer, SRC.pytania, SRC.jdg],
    app: { shot: 'export', from: 0.36, to: 0.8, text: 'W Faktury KSeF numer KSeF każdej faktury skopiujesz jednym dotknięciem, jest pod kodem QR na PDF i w osobnej kolumnie zestawienia CSV dla księgowej.' },
    related: ['wizualizacja-faktury-ksef', 'jak-znalezc-fakture-w-ksef', 'ksef-od-kiedy'],
  },
  {
    slug: 'certyfikat-ksef',
    short: 'Certyfikat KSeF',
    title: 'Certyfikat KSeF: typy, ważność i jak go uzyskać',
    metaTitle: 'Certyfikat KSeF – jak uzyskać, typ 1 i typ 2, ważność 2 lata',
    description:
      'Certyfikat KSeF: typ 1 do logowania, typ 2 do faktur offline. Jak wygenerować certyfikat w Aplikacji Podatnika KSeF 2.0, ile jest ważny, komu go nie udostępniać i co z tokenami.',
    lede:
      'Certyfikat KSeF to jedno z poświadczeń, którym Ty lub Twój program logujecie się do KSeF, a w wersji „offline” także znak, którym podpisujesz faktury wystawione bez połączenia z systemem. Poniżej, jak go uzyskać, ile jest ważny i w czym różni się od tokena.',
    summary: [
      'Są dwa typy: certyfikat typu 1 służy do logowania, typ 2 do drugiego kodu QR („CERTYFIKAT”) na fakturach offline. Generuje się je osobno.',
      'Od lutego 2026 r. certyfikat uzyskasz w Aplikacji Podatnika KSeF 2.0 lub przez API, po zalogowaniu przez login.gov.pl, podpisem lub pieczęcią kwalifikowaną.',
      'Certyfikat jest ważny maksymalnie 2 lata od wydania albo od daty wskazanej we wniosku.',
      'Certyfikat wydany na osobę fizyczną jest osobisty i nie wolno go przekazywać, np. księgowej.',
      'Według MF tokeny zostaną utrzymane bezterminowo i działają równolegle z certyfikatami.',
    ],
    keywords: ['certyfikat ksef', 'certyfikaty ksef', 'jak uzyskać certyfikat ksef', 'jak wygenerować certyfikat ksef', 'certyfikat ksef typu 2', 'certyfikat offline ksef', 'mcu ksef', 'jak pobrać certyfikat ksef'],
    published: '2026-10-15',
    updated: '2026-10-15',
    sections: [
      {
        id: 'typy',
        h2: 'Dwa typy certyfikatu KSeF',
        blocks: [
          {
            table: {
              head: ['', 'Typ 1 (uwierzytelnianie)', 'Typ 2 (offline)'],
              rows: [
                ['Do czego', 'Logowanie do KSeF w sesji interaktywnej i wsadowej', 'Drugi kod QR („CERTYFIKAT”) na fakturach offline przekazywanych poza KSeF'],
                ['Kto potrzebuje', 'Programy i aplikacje logujące się do KSeF, osoby pracujące w KSeF', 'Firmy wystawiające faktury w trybie offline24, przy niedostępności lub awarii KSeF'],
                ['Oznaczenie w certyfikacie', 'W nazwie (CN) dopisek „uwierzytelnianie”', 'W nazwie (CN) dopisek „offline”'],
              ],
              caption: 'Źródło: ksef.podatki.gov.pl, Certyfikaty KSeF.',
            },
          },
          { p: 'Nie da się wygenerować jednego certyfikatu do obu zastosowań. Firma, która loguje się certyfikatem i wystawia faktury offline, potrzebuje dwóch certyfikatów. Zasady trybów offline opisujemy w poradniku [KSeF tryb offline](/ksef-tryb-offline).' },
          { figure: 'certyfikat-typy' },
        ],
      },
      {
        id: 'jak-uzyskac',
        h2: 'Jak uzyskać certyfikat KSeF krok po kroku',
        blocks: [
          { p: 'Od listopada 2025 r. do końca stycznia 2026 r. certyfikaty wydawał Moduł Certyfikatów i Uprawnień (MCU). Od lutego 2026 r. wniosek o certyfikat i jego pobranie są w Aplikacji Podatnika KSeF 2.0 i w API KSeF 2.0, a uprawnienia nadane w MCU zostały przeniesione do KSeF 2.0.' },
          {
            ol: [
              'Zaloguj się do Aplikacji Podatnika KSeF 2.0 jako podatnik lub osoba uprawniona: przez login.gov.pl (Profil Zaufany, mObywatel, bankowość elektroniczna lub e-dowód), kwalifikowanym podpisem elektronicznym albo kwalifikowaną pieczęcią elektroniczną. Osoba zalogowana ważnym certyfikatem KSeF też może wnioskować o kolejny.',
              'Przejdź do sekcji certyfikatów i złóż wniosek. Wybierz typ: do uwierzytelniania albo offline. Dane we wniosku muszą zgadzać się z danymi osoby lub firmy, która jest zalogowana.',
              'Opcjonalnie podaj datę początkową ważności. Bez niej certyfikat jest ważny od dnia wydania.',
              'Po przetworzeniu wniosku pobierz certyfikat. Program lub aplikacja potrzebuje pliku certyfikatu i klucza prywatnego. Zapamiętaj hasło do klucza, bez niego certyfikat jest bezużyteczny.',
            ],
          },
          { p: 'Spółka uzyskuje certyfikat na swoje dane (NIP spółki) tylko po zalogowaniu pieczęcią kwalifikowaną. Osoba wskazana w ZAW-FA może wygenerować certyfikat wyłącznie dla siebie, a nie certyfikat spółki.' },
        ],
      },
      {
        id: 'waznosc',
        h2: 'Ważność, limity i unieważnienie',
        blocks: [
          {
            ul: [
              'Certyfikat jest ważny nie dłużej niż 2 lata od wydania albo od daty początkowej podanej we wniosku. Wystąp o nowy przed wygaśnięciem starego.',
              'Limit wniosków w ciągu ostatnich 30 dni: 6 dla certyfikatów na PESEL, 300 dla certyfikatów na NIP, 6 dla certyfikatów na dane podpisu lub pieczęci bez NIP i PESEL.',
              'Odebranie części uprawnień nie unieważnia certyfikatu. Nie zalogujesz się nim w kontekście firmy, jeśli odebrano Ci wszystkie uprawnienia w tej firmie.',
              'Swoje certyfikaty możesz wyszukać, pobrać i unieważnić po zalogowaniu. Cudzych nie.',
            ],
          },
          { note: 'Jeden certyfikat działa w wielu kontekstach. Księgowa z jednym certyfikatem obsługuje wszystkie firmy, które nadały jej uprawnienia. Więcej w poradniku [uprawnienia KSeF dla księgowej](/uprawnienia-ksef-dla-ksiegowej).' },
        ],
      },
      {
        id: 'udostepnianie',
        h2: 'Komu można dać certyfikat',
        blocks: [
          { p: 'Certyfikat KSeF jest elektronicznym poświadczeniem tożsamości i zawiera dane osoby lub firmy, która o niego wnioskowała. Zasady MF:' },
          {
            ul: [
              'Certyfikat na osobę fizyczną (np. właściciela JDG) może pobrać i używać tylko ta osoba. Nie przekazuj go księgowej: jej trzeba nadać uprawnienia.',
              'Certyfikat wydany na spółkę nie jest przypisany do osoby. Spółka może przekazać go pracownikom, ale odpowiada za rejestr, kontrolę i unieważnianie takich certyfikatów.',
              'Faktura wystawiona certyfikatem spółki pokazuje w KSeF dane spółki. Faktura wystawiona certyfikatem pracownika pokazuje dane tej osoby.',
            ],
          },
        ],
      },
      {
        id: 'tokeny',
        h2: 'Certyfikat a token po 2026 r.',
        blocks: [
          { p: 'Rozporządzenie w sprawie korzystania z KSeF przewidywało koniec tokenów 31 grudnia 2026 r. Ministerstwo Finansów zdecydowało jednak, że tokeny zostaną utrzymane bezterminowo, a rozporządzenie zostanie w tym zakresie znowelizowane (stan na stronie MF z 1.09.2026 i w pytaniach i odpowiedziach z 8.10.2026). Obie metody działają równolegle.' },
          { p: 'Token i certyfikat nie są jednak równoważne. Token ma wpisany zakres uprawnień w chwili wygenerowania, a certyfikat jest tylko środkiem uwierzytelnienia, jak podpis. Do kodu QR na fakturach offline token się nie nada: potrzebny jest certyfikat typu 2. Porównanie znajdziesz w poradniku [token czy certyfikat KSeF](/token-czy-certyfikat-ksef).' },
        ],
      },
    ],
    faqs: [
      { q: 'Gdzie wygenerować certyfikat KSeF?', a: 'Od lutego 2026 r. w Aplikacji Podatnika KSeF 2.0 (lub przez API KSeF 2.0), po zalogowaniu przez login.gov.pl, podpisem lub pieczęcią kwalifikowaną. MCU wydawał certyfikaty do końca stycznia 2026 r.' },
      { q: 'Ile ważny jest certyfikat KSeF?', a: 'Maksymalnie 2 lata od wydania albo od daty początkowej wskazanej we wniosku.' },
      { q: 'Czy do faktur offline wystarczy certyfikat do logowania?', a: 'Nie. Do kodu QR z napisem CERTYFIKAT potrzebny jest osobny certyfikat KSeF typu 2 (offline).' },
      { q: 'Czy mogę dać swój certyfikat KSeF księgowej?', a: 'Nie, jeśli jest wydany na Ciebie jako osobę fizyczną. Księgowej nadaj uprawnienia w KSeF.' },
      { q: 'Czy po 2026 r. trzeba przejść z tokena na certyfikat?', a: 'Według decyzji MF tokeny zostają bezterminowo. Certyfikat warto mieć, jeśli wystawiasz faktury offline albo Twój program tego wymaga.' },
    ],
    sources: [SRC.certyfikaty, SRC.podrecznik1, SRC.pytania, SRC.jdg],
    app: { shot: 'connect', from: 0.355, to: 0.645, text: 'Faktury KSeF łączy się z KSeF certyfikatem typu 1 (plik certyfikatu i klucz) albo tokenem. Klucz trafia do Keychain lub Keystore, a hasła do klucza aplikacja nie zapisuje.' },
    related: ['token-czy-certyfikat-ksef', 'ksef-tryb-offline', 'uprawnienia-ksef-dla-ksiegowej'],
  },
  {
    slug: 'uprawnienia-ksef-dla-ksiegowej',
    short: 'Uprawnienia KSeF dla księgowej',
    title: 'Uprawnienia KSeF dla księgowej i biura rachunkowego',
    metaTitle: 'Jak nadać uprawnienia KSeF księgowej lub biuru rachunkowemu',
    description:
      'Jak nadać księgowej lub biuru rachunkowemu uprawnienia w KSeF: jakie uprawnienie wybrać, nadanie dla całego biura z delegowaniem, rola ZAW-FA i trzy modele współpracy według MF.',
    lede:
      'Księgowa nie powinna logować się Twoim Profilem Zaufanym ani Twoim certyfikatem. W KSeF nadajesz jej własne uprawnienia, a ona loguje się swoimi danymi. Wyjaśniamy, jakie uprawnienia wybrać, jak nadać je całemu biuru i jak zorganizować współpracę.',
    summary: [
      'Uprawnienia nadaje właściciel (JDG ma je automatycznie) albo osoba z uprawnieniem do zarządzania uprawnieniami, w Aplikacji Podatnika KSeF lub w programie zintegrowanym z KSeF.',
      'Do pobierania i księgowania faktur wystarczy przeglądanie faktur. Wystawianie faktur nadaj tylko, jeśli biuro ma je wystawiać.',
      'Uprawnienie można nadać całemu biuru jako podmiotowi z prawem delegowania. Wtedy biuro samo wskazuje swoich pracowników.',
      'Spółka bez pieczęci kwalifikowanej musi najpierw złożyć ZAW-FA, wskazując jedną osobę, która nadaje dalsze uprawnienia elektronicznie.',
    ],
    keywords: ['ksef uprawnienia dla biura rachunkowego', 'jak nadać uprawnienia księgowej w ksef', 'ksef nadawanie uprawnień', 'uprawnienia ksef', 'nadanie uprawnień do ksef', 'zaw-fa ksef'],
    published: '2026-10-15',
    updated: '2026-10-15',
    sections: [
      {
        id: 'rodzaje',
        h2: 'Jakie uprawnienia są w KSeF',
        blocks: [
          {
            table: {
              head: ['Uprawnienie', 'Co pozwala robić', 'Dla księgowej?'],
              rows: [
                ['Przeglądanie faktur', 'Pobieranie faktur otrzymanych i wystawionych', 'Tak, to podstawa księgowania'],
                ['Wystawianie faktur', 'Wysyłanie faktur do KSeF w Twoim imieniu', 'Tylko jeśli biuro wystawia Twoje faktury'],
                ['Zarządzanie uprawnieniami', 'Nadawanie i odbieranie uprawnień innym', 'Zwykle nie'],
                ['Przeglądanie uprawnień', 'Wgląd w to, kto ma jakie uprawnienia', 'Opcjonalnie'],
                ['Przeglądanie historii sesji', 'Wgląd w historię operacji i sesji', 'Zwykle nie'],
              ],
              caption: 'Nazwy według dokumentacji API KSeF 2.0 (InvoiceRead, InvoiceWrite, CredentialsManage, CredentialsRead, Introspection).',
            },
          },
          { p: 'Uprawnienie do przeglądania faktur obejmuje wszystkie faktury, w których firma występuje jako strona: sprzedawca, nabywca lub podmiot trzeci. Nie ma osobnego uprawnienia tylko do faktur kosztowych.' },
        ],
      },
      {
        id: 'jak-nadac',
        h2: 'Jak nadać uprawnienia księgowej',
        blocks: [
          {
            ol: [
              'Zaloguj się do Aplikacji Podatnika KSeF 2.0 jako właściciel lub osoba z uprawnieniem do zarządzania uprawnieniami. JDG ma uprawnienia właścicielskie automatycznie.',
              'Wybierz nadawanie uprawnień. Zdecyduj, czy nadajesz je osobie fizycznej (po NIP lub PESEL), czy całemu biuru rachunkowemu jako podmiotowi (po NIP biura).',
              'Zaznacz zakres: przeglądanie faktur, a jeśli biuro ma wystawiać faktury, także wystawianie.',
              'Nadając uprawnienie biuru, zdecyduj, czy może je delegować swoim pracownikom.',
              'Zatwierdź. Uprawnienia nadane elektronicznie działają zwykle zaraz po przetworzeniu.',
            ],
          },
          { p: 'Księgowa loguje się potem własnymi danymi (przez login.gov.pl lub podpisem), tokenem albo certyfikatem KSeF i wybiera Twoją firmę jako kontekst. Jeden certyfikat księgowej działa u wszystkich klientów, którzy nadali jej uprawnienia. Więcej w poradniku [certyfikat KSeF](/certyfikat-ksef).' },
          { note: 'Nie przekazuj księgowej swojego certyfikatu KSeF ani loginu do Profilu Zaufanego. MF wprost wskazuje, że certyfikat osoby fizycznej jest osobisty.' },
        ],
      },
      {
        id: 'cale-biuro',
        h2: 'Uprawnienia dla całego biura rachunkowego',
        blocks: [
          { p: 'Nie musisz nadawać uprawnień każdemu pracownikowi biura osobno. Możesz nadać je biuru jako podmiotowi i zaznaczyć, że może je delegować. Wtedy to biuro wskazuje osoby, które faktycznie obsługują Twoją firmę, i samo je zmienia przy rotacji pracowników.' },
          {
            ul: [
              'Delegować można tylko przeglądanie i wystawianie faktur. Uprawnień administracyjnych biuro dalej nie przekaże.',
              'Biuro może dać pracownikowi dostęp tylko do Twojej firmy (uprawnienie selektywne) albo do wszystkich swoich klientów (uprawnienie ogólne).',
              'Uprawnienia możesz w każdej chwili odebrać w Aplikacji Podatnika KSeF, na przykład po zakończeniu współpracy z biurem.',
            ],
          },
        ],
      },
      {
        id: 'spolki',
        h2: 'Spółka: ZAW-FA i pierwsza osoba z uprawnieniami',
        blocks: [
          { p: 'Spółka z pieczęcią kwalifikowaną zawierającą NIP korzysta z KSeF od razu. Spółka bez pieczęci składa zawiadomienie [ZAW-FA](/zaw-fa) i wskazuje jedną osobę fizyczną z pełnymi uprawnieniami. Może to być członek zarządu, dyrektor finansowy albo księgowa. Ta osoba nadaje dalsze uprawnienia elektronicznie, bez kolejnych ZAW-FA.' },
          {
            ul: [
              'ZAW-FA złożysz w e-Urzędzie Skarbowym, przez e-Doręczenia albo papierowo. Od 1 stycznia 2026 r. nie przez ePUAP.',
              'Wskazanie nowej osoby w kolejnym ZAW-FA odwołuje uprawnienia nadane poprzednim ZAW-FA.',
              'Jeśli w firmie jest drugi administrator, zmiany robi się elektronicznie, bez ZAW-FA.',
            ],
          },
        ],
      },
      {
        id: 'modele',
        h2: 'Trzy modele współpracy z biurem według MF',
        blocks: [
          { figure: 'biuro-modele' },
          {
            ol: [
              'Firma sama wystawia i odbiera faktury w swoim programie, a potem przekazuje je biuru w uzgodniony sposób. Biuro nie loguje się do KSeF.',
              'Firma wystawia faktury sama, ale nadaje biuru przeglądanie faktur. Biuro samo pobiera faktury sprzedażowe i zakupowe i je księguje.',
              'Firma nie ma programu zintegrowanego z KSeF i nadaje biuru wystawianie i przeglądanie faktur. Biuro wystawia faktury w jej imieniu i księguje całość.',
            ],
          },
          { p: 'W pierwszym modelu wystarczy wygodny sposób przekazywania faktur, np. paczka XML lub zestawienie za miesiąc. W drugim i trzecim biuro potrzebuje uprawnień w KSeF. Każdy model zmienia zakres odpowiedzialności, więc warto zapisać go w umowie z biurem.' },
        ],
      },
    ],
    faqs: [
      { q: 'Jakie uprawnienie w KSeF dać księgowej?', a: 'Do pobierania i księgowania faktur wystarczy przeglądanie faktur. Wystawianie dodaj tylko wtedy, gdy księgowa ma wystawiać Twoje faktury.' },
      { q: 'Czy muszę nadawać uprawnienia każdemu pracownikowi biura?', a: 'Nie. Możesz nadać je biuru jako podmiotowi z prawem delegowania, a biuro wskaże swoich pracowników.' },
      { q: 'Czy księgowa może używać mojego certyfikatu KSeF?', a: 'Nie, jeśli certyfikat jest wydany na Ciebie jako osobę fizyczną. Nadaj jej własne uprawnienia.' },
      { q: 'Czy muszę składać ZAW-FA, żeby dać dostęp księgowej?', a: 'JDG nie. Spółka bez pieczęci kwalifikowanej składa jedno ZAW-FA dla pierwszej osoby, a ta nadaje dalsze uprawnienia elektronicznie.' },
      { q: 'Co się dzieje z certyfikatem księgowej, gdy odbiorę jej uprawnienia?', a: 'Certyfikat pozostaje ważny, ale księgowa nie zaloguje się nim już w kontekście Twojej firmy.' },
    ],
    sources: [SRC.ksiegowi, SRC.pytania, SRC.podrecznik1, SRC.apiUprawnienia],
    app: { shot: 'export', from: 0.36, to: 0.8, text: 'Model 1 w praktyce: Faktury KSeF przygotowuje zestawienie za miesiąc i wysyła księgowej PDF, CSV albo paczkę XML, bez nadawania jej uprawnień w KSeF.' },
    related: ['zaw-fa', 'certyfikat-ksef', 'odbieranie-faktur-z-ksef'],
  },
  {
    slug: 'zaw-fa',
    short: 'ZAW-FA',
    title: 'ZAW-FA: kto składa, jak wypełnić i jak złożyć (krok po kroku)',
    metaTitle: 'ZAW-FA – jak wypełnić i złożyć zawiadomienie do KSeF',
    description:
      'ZAW-FA składa spółka bez pieczęci kwalifikowanej, by wskazać osobę do KSeF. Kto musi je złożyć, jak wypełnić ZAW-FA(3) pole po polu, jak złożyć w e-US lub papierowo i ile to trwa.',
    lede:
      'ZAW-FA to zawiadomienie, którym firma niebędąca osobą fizyczną wskazuje urzędowi skarbowemu jedną osobę uprawnioną do KSeF. Bez niego spółka bez pieczęci kwalifikowanej nie wejdzie do KSeF, także po to, żeby odebrać faktury. Poniżej, kto musi je złożyć, jak wypełnić formularz ZAW-FA(3) pole po polu i jak go złożyć.',
    summary: [
      'ZAW-FA składa podatnik, który nie jest osobą fizyczną (np. spółka, fundacja, stowarzyszenie) i nie ma kwalifikowanej pieczęci elektronicznej. JDG go nie składa.',
      'W ZAW-FA wskazujesz jedną osobę fizyczną. Dostaje ona pełne uprawnienia w KSeF i dalsze uprawnienia nadaje już elektronicznie.',
      'Od 1 lutego 2026 r. obowiązuje wzór ZAW-FA(3). Złożysz go w e-Urzędzie Skarbowym, przez e-Doręczenia albo papierowo. Od 1 stycznia 2026 r. nie przez ePUAP.',
      'Zawiadomienie podpisują osoby reprezentujące firmę w wymaganej liczbie. Uprawnienia działają po wprowadzeniu ich przez urząd, o czym przychodzi e-mail.',
    ],
    keywords: ['zaw-fa', 'zaw-fa jak wypełnić', 'zaw-fa online', 'zaw-fa druk', 'zaw-fa elektronicznie', 'jak złożyć zaw-fa', 'zaw-fa ksef', 'druk zaw-fa do wypełnienia'],
    published: '2026-10-15',
    updated: '2026-10-15',
    sections: [
      {
        id: 'kto-sklada',
        h2: 'Kto musi złożyć ZAW-FA',
        blocks: [
          { figure: 'zaw-fa-kto' },
          {
            table: {
              head: ['Kto', 'Czy składa ZAW-FA', 'Jak wchodzi do KSeF'],
              rows: [
                ['Osoba fizyczna z NIP (JDG, najem)', 'Nie', 'Ma uprawnienia właścicielskie automatycznie; loguje się przez login.gov.pl lub podpisem kwalifikowanym'],
                ['Spółka, fundacja, stowarzyszenie z pieczęcią kwalifikowaną z NIP', 'Nie', 'Loguje się pieczęcią i od razu ma pełne uprawnienia'],
                ['Spółka, fundacja, stowarzyszenie bez pieczęci kwalifikowanej', 'Tak', 'Wskazuje w ZAW-FA jedną osobę, która loguje się swoimi danymi'],
                ['Organ egzekucyjny', 'Tak, zawsze', 'Nawet jeśli ma pieczęć kwalifikowaną'],
                ['JST lub grupa VAT bez pieczęci kwalifikowanej', 'Tak', 'Jednostki podrzędne JST, członkowie GV i oddziały nie składają osobnych ZAW-FA'],
              ],
              caption: 'Według: Podręcznik KSeF 2.0, cz. I, rozdz. 3.2 (Ministerstwo Finansów).',
            },
          },
          { p: 'Osoba fizyczna składa ZAW-FA tylko w jednym przypadku: gdy chce zgłosić „dane unikalne” (odcisk palca) swojego podpisu kwalifikowanego, który nie zawiera NIP ani PESEL. Opisujemy to niżej.' },
          { note: 'Jeśli spółka złożyła ZAW-FA jeszcze przed 2026 r. (dla KSeF 1.0), nie musi składać go ponownie. Uprawnienia nadane przez ZAW-FA zostały przeniesione do KSeF 2.0.' },
        ],
      },
      {
        id: 'kogo-wskazac',
        h2: 'Kogo wskazać i jakie uprawnienia dostanie',
        blocks: [
          { p: 'W jednym ZAW-FA wskazujesz dokładnie jedną osobę fizyczną. Nie musi to być członek zarządu ani osoba ujawniona w KRS. Może to być dyrektor finansowy, księgowa, wspólnik albo pracownik. Ta osoba dostaje w KSeF:' },
          {
            ul: [
              'zarządzanie uprawnieniami (nadawanie i odbieranie ich innym),',
              'wystawianie faktur i dostęp do faktur,',
              'zarządzanie jednostkami podrzędnymi,',
              'uprawnienia techniczne: przeglądanie uprawnień i historii sesji (a organ egzekucyjny także operacje egzekucyjne).',
            ],
          },
          { p: 'Każdą kolejną osobę (drugiego administratora, księgowe, pracowników, biuro rachunkowe) dodaje już ta osoba, elektronicznie w Aplikacji Podatnika KSeF lub w programie, bez kolejnych ZAW-FA. Jak to zrobić, opisujemy w poradniku [uprawnienia KSeF dla księgowej](/uprawnienia-ksef-dla-ksiegowej).' },
          { note: 'Dobra praktyka: zaraz po wejściu do KSeF osoba z ZAW-FA nadaje pełne uprawnienia drugiej zaufanej osobie. Jeśli pierwsza odejdzie z firmy, druga odbierze jej uprawnienia elektronicznie i nie trzeba składać nowego ZAW-FA.' },
        ],
      },
      {
        id: 'jak-wypelnic',
        h2: 'Jak wypełnić ZAW-FA(3) pole po polu',
        blocks: [
          { p: 'Numery pól według oficjalnego wzoru ZAW-FA(3). Na papierze wypełnia się jasne pola dużymi, drukowanymi literami, czarnym lub niebieskim kolorem. Ciemne pola (nr dokumentu, status) wypełnia urząd.' },
          {
            table: {
              head: ['Pole', 'Co wpisać'],
              rows: [
                ['1. NIP podatnika lub podmiotu', 'NIP spółki (podmiotu), który składa zawiadomienie.'],
                ['4. Kolejny nr egz. / liczba egzemplarzy', 'Tylko gdy składasz więcej niż jeden formularz, np. przy więcej niż 4 osobach podpisujących.'],
                ['5. Właściwy naczelnik urzędu skarbowego', 'Urząd skarbowy właściwy dla Twojej firmy.'],
                ['6. Cel złożenia', '1 – nadanie uprawnień (pierwsze zgłoszenie osoby); 2 – odebranie uprawnień osobie wskazanej wcześniej w ZAW-FA; 3 – odebranie wszelkich nadanych uprawnień (bez części C; uprawnień właścicielskich nie da się odebrać); 4 – zgłoszenie danych unikalnych podpisu lub pieczęci bez NIP i PESEL.'],
                ['7. Rodzaj podmiotu', 'Zwykle 1 – podmiot niebędący osobą fizyczną. Organ egzekucyjny zaznacza 1 i 2. Osoba fizyczna (3) tylko przy zgłoszeniu danych unikalnych swojego podpisu.'],
                ['8. Nazwa pełna', 'Pełna nazwa firmy, np. zgodnie z KRS.'],
                ['9. Telefon / 10. E-mail firmy', 'Telefon nieobowiązkowy. E-mail obowiązkowy: przyjdzie na niego potwierdzenie nadania lub odebrania uprawnień.'],
                ['11–12. Identyfikator osoby uprawnionej', 'NIP albo PESEL osoby wskazanej. „Brak identyfikatora” tylko dla nierezydenta bez NIP i PESEL.'],
                ['13–14. Nazwisko i imię', 'Dane osoby, która będzie korzystać z KSeF.'],
                ['15–18. Data urodzenia, dokument tożsamości, kraj wydania', 'Tylko dla nierezydenta bez identyfikatora podatkowego.'],
                ['19. Telefon / 20. E-mail osoby', 'Telefon nieobowiązkowy. E-mail obowiązkowy: osoba dostanie powiadomienie o uprawnieniach.'],
                ['21. Dane unikalne (SHA-256)', 'Tylko gdy podpis lub pieczęć nie zawiera NIP ani PESEL. Wpisujesz 64-znakowy odcisk palca certyfikatu.'],
                ['22–37. Podpisy', 'Nazwisko, imię, funkcja i podpis osób reprezentujących firmę (do 4 osób). Przy większej reprezentacji pozostałe osoby podpisują dodatkowy formularz.'],
              ],
              caption: 'Źródło: wzór ZAW-FA(3) i objaśnienia do formularza, ksef.podatki.gov.pl.',
            },
          },
          { p: 'Najczęstsze błędy: brak e-maila w polach 10 lub 20, podpis jednej osoby przy reprezentacji łącznej (np. dwóch członków zarządu), wskazanie dwóch osób w jednym formularzu i wybór złego urzędu skarbowego. Urząd sprawdza zawiadomienie formalnie i przy wątpliwościach kontaktuje się z firmą, co wydłuża czas.' },
        ],
      },
      {
        id: 'jak-zlozyc',
        h2: 'Jak złożyć ZAW-FA: online, e-Doręczenia lub papier',
        blocks: [
          { h3: 'Online w e-Urzędzie Skarbowym' },
          {
            ol: [
              'Zaloguj się do e-Urzędu Skarbowego (podatki.gov.pl).',
              'Wybierz Dokumenty › Złóż dokument › „Zawiadomienie o nadaniu lub odebraniu uprawnień do korzystania z Krajowego Systemu e-Faktur (ZAW-FA)”.',
              'Wypełnij interaktywny formularz ZAW-FA(3) i wybierz urząd skarbowy.',
              'Podpisz i wyślij. Zawiadomienie trafia elektronicznie do wybranego urzędu.',
            ],
          },
          { p: 'Za spółkę w e-US złoży je pełnomocnik ogólny tej spółki albo użytkownik konta organizacji (UKO). MF udostępniło interaktywny formularz ZAW-FA(3) w e-US 10 lutego 2026 r.' },
          { h3: 'Przez e-Doręczenia' },
          { p: 'Wyślij wypełniony formularz na adres do e-Doręczeń urzędu skarbowego. Zawiadomienie musi być podpisane elektronicznie (Profilem Zaufanym lub podpisem kwalifikowanym) przez osoby reprezentujące firmę w wymaganej liczbie.' },
          { h3: 'Papierowo' },
          { p: 'Pobierz [wzór ZAW-FA(3) w PDF](https://ksef.podatki.gov.pl/media/em1k4cmk/zaw-fa.pdf), wypełnij, podpisz odręcznie i złóż osobiście w urzędzie skarbowym albo wyślij pocztą. To jedyna droga, jeśli osoby reprezentujące nie mają ani Profilu Zaufanego, ani podpisu kwalifikowanego. Wysyłka pocztą wydłuża czas o doręczenie.' },
          { note: 'Od 1 stycznia 2026 r. ZAW-FA wysłane przez ePUAP nie jest skutecznie doręczone. Wzór ZAW-FA(2) obowiązywał do 31 stycznia 2026 r. Teraz składa się ZAW-FA(3).' },
        ],
      },
      {
        id: 'co-dalej',
        h2: 'Po złożeniu: ile to trwa i co dalej',
        blocks: [
          { figure: 'zaw-fa-proces' },
          { p: 'Uprawnienia działają dopiero, gdy pracownik urzędu skarbowego sprawdzi zawiadomienie i wprowadzi je do KSeF. Według MF robi to niezwłocznie po otrzymaniu. Potwierdzenie przychodzi automatycznym e-mailem na adresy z pól 10 i 20, z datą złożenia, numerem wniosku, NIP firmy, identyfikatorem osoby uprawnionej, celem zawiadomienia i nazwą urzędu.' },
          {
            ol: [
              'Osoba wskazana w ZAW-FA loguje się do Aplikacji Podatnika KSeF 2.0 przez login.gov.pl (np. Profilem Zaufanym lub mObywatelem) albo podpisem kwalifikowanym i wybiera kontekst spółki (jej NIP).',
              'Nadaje uprawnienia kolejnym osobom, w tym drugiemu administratorowi.',
              'Jeśli program lub aplikacja mają łączyć się z KSeF, generuje token albo [certyfikat KSeF](/certyfikat-ksef). Certyfikat wygeneruje tylko dla siebie (na swój identyfikator), a nie na NIP spółki.',
              'Od tej chwili spółka może [odbierać faktury z KSeF](/odbieranie-faktur-z-ksef) i je wystawiać.',
            ],
          },
        ],
      },
      {
        id: 'zmiana-osoby',
        h2: 'Zmiana osoby wskazanej w ZAW-FA',
        blocks: [
          {
            ul: [
              'Jeśli w KSeF jest drugi administrator, może on odebrać uprawnienia osobie z ZAW-FA elektronicznie, bez nowego zawiadomienia.',
              'Jeśli nie ma nikogo innego z pełnymi uprawnieniami, składasz ZAW-FA z celem 2 (odebranie uprawnień osobie A), a potem ZAW-FA z celem 1 (nadanie uprawnień osobie B).',
              'Zmiana osoby z ZAW-FA nie odbiera uprawnień osobom, które wcześniej nadała ona elektronicznie.',
              'Danych z ZAW-FA nie aktualizuje się (np. po zmianie e-maila), dopóki nie zmienia się NIP firmy ani NIP lub PESEL osoby uprawnionej.',
            ],
          },
        ],
      },
      {
        id: 'dane-unikalne',
        h2: 'Podpis lub pieczęć bez NIP i PESEL: dane unikalne',
        blocks: [
          { p: 'Niektóre certyfikaty kwalifikowane, np. wydane za granicą, nie zawierają NIP ani PESEL. Żeby się nimi logować do KSeF, trzeba zgłosić tzw. dane unikalne, czyli odcisk palca certyfikatu: 64-znakowy skrót SHA-256 (cyfry 0–9 i litery a–f). Wpisuje się go w polu 21 ZAW-FA, z celem 4 albo przy nadaniu uprawnień osobie, która ma wyłącznie taki podpis.' },
          { p: 'Każdą zmianę takiego podpisu lub pieczęci, także przedłużenie ważności, trzeba zgłosić ponownie. Podpisów z NIP lub PESEL to nie dotyczy: po ich odnowieniu uprawnienia pozostają ważne.' },
        ],
      },
    ],
    faqs: [
      { q: 'Czy JDG musi składać ZAW-FA?', a: 'Nie. Osoba fizyczna z NIP ma uprawnienia właścicielskie w KSeF automatycznie. ZAW-FA składa tylko wtedy, gdy zgłasza dane unikalne podpisu bez NIP i PESEL.' },
      { q: 'Czy spółka z pieczęcią kwalifikowaną musi złożyć ZAW-FA?', a: 'Nie. Po zalogowaniu pieczęcią kwalifikowaną z NIP spółka ma pełne uprawnienia i nadaje je dalej elektronicznie.' },
      { q: 'Czy w ZAW-FA mogę wskazać dwie osoby?', a: 'Nie. W jednym ZAW-FA wskazujesz jedną osobę. Kolejne osoby, także drugiego administratora, dodaje ona elektronicznie w KSeF.' },
      { q: 'Czy ZAW-FA można złożyć przez ePUAP?', a: 'Nie, od 1 stycznia 2026 r. takie zawiadomienie nie jest skutecznie doręczone. Złóż je w e-Urzędzie Skarbowym, przez e-Doręczenia albo papierowo.' },
      { q: 'Ile czeka się na uprawnienia z ZAW-FA?', a: 'Urząd wprowadza dane niezwłocznie po otrzymaniu zawiadomienia. Przy wysyłce pocztą dochodzi czas doręczenia, a błędy w formularzu wydłużają sprawę. Potwierdzenie przychodzi e-mailem.' },
      { q: 'Czy osoba z ZAW-FA musi być członkiem zarządu?', a: 'Nie. Może to być dowolna osoba fizyczna wskazana przez firmę, np. księgowa. Zawiadomienie podpisują jednak osoby uprawnione do reprezentacji.' },
    ],
    sources: [SRC.zawFaPdf, SRC.podrecznik1, SRC.zawFaEus, SRC.zawFaV2, SRC.pytania],
    app: { shot: 'connect', from: 0.355, to: 0.645, text: 'Po ZAW-FA osoba uprawniona generuje token lub certyfikat i łączy z nim Faktury KSeF. Aplikacja pobiera faktury spółki na telefon, bez zakładania konta.' },
    related: ['uprawnienia-ksef-dla-ksiegowej', 'certyfikat-ksef', 'odbieranie-faktur-z-ksef'],
  },
  {
    slug: 'ksef-demo-i-wersja-testowa',
    short: 'KSeF demo i wersja testowa',
    title: 'KSeF demo i wersja testowa: jak przetestować KSeF bez skutków prawnych',
    metaTitle: 'KSeF demo i wersja testowa – adresy, logowanie, różnice',
    description:
      'KSeF ma trzy środowiska: testowe (TE), przedprodukcyjne demo i produkcyjne. Adresy Aplikacji Podatnika, jak się zalogować do wersji testowej i demo, co można przetestować i czego unikać.',
    lede:
      'Zanim wyślesz pierwszą prawdziwą fakturę, możesz przećwiczyć KSeF w dwóch bezpłatnych środowiskach Ministerstwa Finansów: testowym i przedprodukcyjnym (demo). Faktury wystawione tam nie mają skutków prawnych ani podatkowych. Poniżej, czym się różnią, jak się do nich zalogować i jak testować bezpiecznie.',
    summary: [
      'Środowisko testowe (TE): dowolne, fikcyjne dane i logowanie testowe bez Profilu Zaufanego. Aplikacja Podatnika: ap-test.ksef.mf.gov.pl.',
      'Środowisko przedprodukcyjne (demo): fikcyjne faktury, ale prawdziwe logowanie (np. przez login.gov.pl) i prawdziwe uprawnienia. Aplikacja Podatnika: ap-demo.ksef.mf.gov.pl.',
      'Środowisko produkcyjne: ap.ksef.mf.gov.pl. Każda wysłana tu faktura jest dokumentem w obiegu prawnym.',
      'Dane w wersjach testowej i demo są okresowo usuwane. Uprawnienia i certyfikaty z wersji produkcyjnej tam nie działają.',
    ],
    keywords: ['ksef demo', 'ksef test', 'ksef testowy', 'ksef wersja testowa', 'ksef środowisko testowe', 'ksef demo logowanie', 'ksef 2.0 demo', 'ksef wersja przedprodukcyjna'],
    published: '2026-10-15',
    updated: '2026-10-15',
    sections: [
      {
        id: 'trzy-srodowiska',
        h2: 'Trzy środowiska KSeF',
        blocks: [
          { figure: 'ksef-srodowiska' },
          {
            table: {
              head: ['', 'Testowe (TE)', 'Przedprodukcyjne (demo)', 'Produkcyjne'],
              rows: [
                ['Aplikacja Podatnika', 'ap-test.ksef.mf.gov.pl', 'ap-demo.ksef.mf.gov.pl', 'ap.ksef.mf.gov.pl'],
                ['API (dla programów)', 'api-test.ksef.mf.gov.pl', 'api-demo.ksef.mf.gov.pl', 'api.ksef.mf.gov.pl'],
                ['Logowanie', 'Uwierzytelnienie testowe z dowolnym NIP; Profil Zaufany niedostępny', 'Prawdziwe dane: login.gov.pl, podpis lub pieczęć kwalifikowana', 'Prawdziwe dane'],
                ['Dane na fakturach', 'Fikcyjne', 'Fikcyjne', 'Prawdziwe'],
                ['Skutki prawne i podatkowe', 'Brak', 'Brak', 'Tak'],
                ['Dla kogo', 'Nauka obsługi, testy integracji programów', 'Próba „na sucho” na własnych uprawnieniach, końcowe testy integracji', 'Codzienna praca'],
              ],
              caption: 'Adresy według komunikatu MF „Zmiana adresów środowisk KSeF” (obowiązują od stycznia 2026 r.) i dokumentacji API KSeF 2.0.',
            },
          },
          { note: 'Stare adresy środowisk wyłączono 17 stycznia 2026 r. Jeśli zakładka w przeglądarce lub stary poradnik prowadzi gdzie indziej, korzystaj z adresów z tabeli albo wchodź przez ksef.podatki.gov.pl.' },
        ],
      },
      {
        id: 'wersja-testowa',
        h2: 'Jak zalogować się do wersji testowej',
        blocks: [
          { p: 'Na środowisku testowym nie potrzebujesz Profilu Zaufanego ani podpisu. MF przygotowało tam logowanie testowe, w którym system sam podpisuje żądanie certyfikatem testowym. Kroki według instrukcji MF:' },
          {
            ol: [
              'Wejdź na ap-test.ksef.mf.gov.pl i wybierz „Uwierzytelnij się w Krajowym Systemie e-Faktur”.',
              'Wybierz „Zaloguj uwierzytelnieniem testowym”.',
              'Na ekranie „Wprowadź kontekst logowania” wybierz rodzaj identyfikatora (zwykle NIP) i wpisz NIP firmy, w imieniu której chcesz działać.',
              'W sekcji „Podpisz testowe żądanie autoryzacyjne” wybierz typ identyfikatora i wpisz NIP lub PESEL, którym ma być „podpisane” logowanie.',
              'Kliknij „Uwierzytelnij do aplikacji testowej”. Aplikacja otworzy się w wybranym kontekście.',
            ],
          },
          { p: 'Używaj losowych, fikcyjnych numerów NIP, nie swojego. Środowisko testowe jest otwarte dla wszystkich, a MF zaznacza w dokumentacji API, że dane w nim nie są odizolowane i mogą je widzieć inni użytkownicy.' },
        ],
      },
      {
        id: 'wersja-demo',
        h2: 'Jak zalogować się do wersji demo',
        blocks: [
          { p: 'Wersja przedprodukcyjna (demo) działa jak produkcja, tylko bez skutków prawnych. Logujesz się prawdziwymi danymi zgodnymi z rejestrem informacji o właścicielach firm: przez login.gov.pl, np. Profilem Zaufanym (na NIP firmy powiązanej z Twoim PESEL), podpisem kwalifikowanym albo pieczęcią. Logowania testowego tu nie ma.' },
          {
            ul: [
              'Na fakturach wpisuj wyłącznie fikcyjne dane kontrahentów i kwoty.',
              'Uprawnienia i certyfikaty nadane w produkcji nie są dostępne w demo, i odwrotnie. To, co zrobisz w demo, nie zmienia niczego w Twoim prawdziwym KSeF.',
              'Wystawienie faktury w demo nie ma skutków podatkowych.',
            ],
          },
          { p: 'Demo przydaje się szczególnie spółkom: osoba wskazana w [ZAW-FA](/zaw-fa) może przećwiczyć nadawanie uprawnień i generowanie tokena lub [certyfikatu KSeF](/certyfikat-ksef), zanim zrobi to na produkcji.' },
        ],
      },
      {
        id: 'co-przetestujesz',
        h2: 'Co można przetestować',
        blocks: [
          { p: 'Według MF wersje testowa i demo Aplikacji Podatnika KSeF 2.0 pozwalają m.in.:' },
          {
            ul: [
              'wystawiać, odbierać i przeglądać faktury oraz korekty w strukturze FA(3),',
              'wyszukiwać i pobierać faktury jako XML, HTML lub PDF,',
              'pobierać UPO dla jednej lub wielu faktur i przeglądać historię sesji,',
              'sprawdzać kody QR i dostęp do faktury przez kod oraz dostęp anonimowy,',
              'zarządzać uprawnieniami, generować tokeny i wnioskować o certyfikaty KSeF,',
              'obsługiwać faktury wystawione offline i faktury PEF.',
            ],
          },
          { p: 'Dobry scenariusz na pierwszą próbę: wystaw fakturę z jednego fikcyjnego NIP na drugi, zaloguj się w kontekście nabywcy i [pobierz ją](/jak-pobrac-fakture-z-ksef), sprawdź jej [wizualizację z kodem QR](/wizualizacja-faktury-ksef), a na koniec wystaw do niej korektę.' },
        ],
      },
      {
        id: 'zasady',
        h2: 'Na co uważać',
        blocks: [
          {
            ul: [
              'Nie wysyłaj na testowe ani demo prawdziwych faktur. Prawdziwa faktura trafia do obiegu prawnego tylko w produkcji.',
              'Nie wpisuj na środowisku testowym prawdziwych danych firm i osób. To środowisko jest współdzielone.',
              'Dane w wersjach testowej i demo są okresowo usuwane. Nie traktuj ich jak archiwum.',
              'Od 1 października 2025 r. MF może prowadzić na środowiskach testowych codzienne prace serwisowe między 16:00 a 18:00. Utrudnienia w tych godzinach nie oznaczają awarii produkcji.',
              'Wersje testowe mogą różnić się od produkcji. Zmiany wpływające na integrację MF publikuje w changelogu API.',
            ],
          },
          { p: 'Problemy na produkcji opisujemy osobno, w poradniku [KSeF nie działa](/ksef-nie-dziala).' },
        ],
      },
    ],
    faqs: [
      { q: 'Czy jest wersja demo KSeF?', a: 'Tak. MF udostępnia bezpłatnie dwa środowiska do ćwiczeń: testowe (ap-test.ksef.mf.gov.pl) z fikcyjnym logowaniem i przedprodukcyjne demo (ap-demo.ksef.mf.gov.pl) z prawdziwym logowaniem i fikcyjnymi fakturami.' },
      { q: 'Czym różni się KSeF test od KSeF demo?', a: 'Na testowym logujesz się fikcyjnymi danymi, bez Profilu Zaufanego. W demo logujesz się prawdziwymi danymi i działasz na swoich uprawnieniach. W obu na fakturach używa się fikcyjnych danych.' },
      { q: 'Czy faktura wystawiona w KSeF demo jest ważna?', a: 'Nie. Faktury w wersjach testowej i demo nie mają skutków prawnych ani podatkowych i są okresowo usuwane.' },
      { q: 'Dlaczego nie mogę zalogować się do wersji testowej Profilem Zaufanym?', a: 'Na środowisku testowym logowanie Profilem Zaufanym nie jest dostępne. Użyj logowania testowego albo przejdź do wersji demo.' },
      { q: 'Czy uprawnienia nadane w demo działają w prawdziwym KSeF?', a: 'Nie. Uprawnienia i certyfikaty w demo są niezależne od produkcji.' },
    ],
    sources: [SRC.apTest, SRC.apDemo, SRC.adresy, SRC.apiSrodowiska, SRC.uwierzytelnienie],
    app: { shot: 'connect', from: 0.355, to: 0.645, text: 'W Faktury KSeF opcja „Wypróbuj na firmie testowej” tworzy w ok. 20 sekund fikcyjną firmę na testowym środowisku KSeF, a fikcyjni dostawcy wysyłają jej prawdziwe faktury FA(3).' },
    related: ['zaw-fa', 'certyfikat-ksef', 'jak-pobrac-fakture-z-ksef'],
  },
  {
    slug: 'jak-zaczac-z-ksef',
    short: 'Jak zacząć z KSeF',
    title: 'Jak zacząć z KSeF: dostęp krok po kroku dla JDG i spółki',
    metaTitle: 'Jak zacząć z KSeF? Dostęp krok po kroku (JDG i spółka)',
    description:
      'W KSeF nie ma rejestracji ani zakładania konta. JDG ma dostęp od razu, spółka loguje się pieczęcią albo składa ZAW-FA. Kolejne kroki: logowanie, narzędzie, uprawnienia, test.',
    lede:
      'Wiele osób szuka „rejestracji w KSeF”, ale takiej rejestracji nie ma. Każdy podatnik z NIP ma już w KSeF uprawnienia, trzeba tylko wiedzieć, jak się zalogować i czym pracować. Poniżej dwie ścieżki, dla jednoosobowej działalności i dla spółki, krok po kroku.',
    summary: [
      'W KSeF nie zakłada się konta. Osoba fizyczna z NIP (JDG) ma uprawnienia właścicielskie automatycznie.',
      'Spółka z pieczęcią kwalifikowaną loguje się nią od razu. Spółka bez pieczęci składa ZAW-FA i wskazuje osobę, która będzie korzystać z KSeF.',
      'Logowanie: przez login.gov.pl (Profil Zaufany, mObywatel, bankowość, e-dowód), podpis kwalifikowany lub pieczęć; w programach token lub certyfikat KSeF.',
      'Narzędzia: bezpłatne aplikacje MF (Aplikacja Podatnika, Aplikacja Mobilna KSeF, e-mikrofirma) albo program zintegrowany z KSeF.',
      'Przed pierwszą prawdziwą fakturą przećwicz wszystko w wersji testowej lub demo.',
    ],
    keywords: ['ksef jak zacząć', 'jak założyć ksef', 'jak zarejestrować się do ksef', 'rejestracja w ksef krok po kroku', 'jak założyć konto w ksef', 'jak uzyskać dostęp do ksef', 'ksef rejestracja jdg', 'ksef krok po kroku'],
    published: '2026-10-15',
    updated: '2026-10-15',
    sections: [
      {
        id: 'bez-rejestracji',
        h2: 'Czy trzeba się rejestrować w KSeF?',
        blocks: [
          { p: 'Nie. KSeF nie ma formularza rejestracyjnego ani konta, które trzeba założyć. Dostęp wynika z NIP: system zna podatników i przypisuje im tzw. uprawnienia właścicielskie. Pytanie nie brzmi więc „jak się zarejestrować”, tylko „jak się zalogować i kto może działać w imieniu firmy”.' },
          {
            table: {
              head: ['Kim jesteś', 'Dostęp do KSeF', 'Pierwszy krok'],
              rows: [
                ['JDG (osoba fizyczna z NIP)', 'Automatycznie, uprawnienia właścicielskie', 'Zaloguj się przez login.gov.pl lub podpisem kwalifikowanym'],
                ['Spółka, fundacja, stowarzyszenie z pieczęcią kwalifikowaną', 'Automatycznie po zalogowaniu pieczęcią', 'Zaloguj się pieczęcią i nadaj uprawnienia osobom'],
                ['Spółka, fundacja, stowarzyszenie bez pieczęci', 'Przez osobę wskazaną w ZAW-FA', 'Złóż [ZAW-FA](/zaw-fa) w urzędzie skarbowym'],
                ['Osoba bez działalności, np. najem prywatny, wystawiająca fakturę firmie', 'Potrzebny NIP', 'Złóż VAT-R i NIP-7, potem jak JDG'],
              ],
              caption: 'Według: Podręcznik KSeF 2.0, cz. I i II, oraz ksef.podatki.gov.pl, Krok po kroku – JDG i MŚP.',
            },
          },
          { figure: 'jak-zaczac-sciezki' },
        ],
      },
      {
        id: 'jdg',
        h2: 'Ścieżka dla JDG: 6 kroków',
        blocks: [
          {
            ol: [
              'Sprawdź swoje terminy. Faktury otrzymujesz przez KSeF od 1 lutego 2026 r. Wystawiasz w KSeF od 1 kwietnia 2026 r., a przy sprzedaży fakturowej do 10 000 zł brutto miesięcznie najpóźniej od 1 stycznia 2027 r. Szczegóły w poradniku [KSeF dla JDG od 2027](/ksef-dla-jdg-2027).',
              'Wybierz narzędzie: bezpłatne Aplikacja Podatnika KSeF (w przeglądarce), Aplikacja Mobilna KSeF lub e-mikrofirma, albo program do faktur zintegrowany z KSeF 2.0.',
              'Zaloguj się. Od 14 lutego 2026 r. osoby fizyczne logują się do Aplikacji Podatnika przez login.gov.pl (Profil Zaufany, mObywatel, bankowość elektroniczna lub e-dowód) albo podpisem kwalifikowanym. Na NIP firmy powiązanej z Twoim PESEL nie trzeba nic więcej ustawiać. Szczegóły w poradniku [logowanie do KSeF](/logowanie-do-ksef).',
              'Jeśli program ma łączyć się z KSeF sam, wygeneruj dla niego token albo [certyfikat KSeF](/certyfikat-ksef).',
              'Nadaj uprawnienia, jeśli ktoś ma pracować w Twoim imieniu: księgowa, biuro rachunkowe, pracownik. Zobacz [uprawnienia KSeF dla księgowej](/uprawnienia-ksef-dla-ksiegowej).',
              'Przećwicz wystawienie i odebranie faktury w [wersji testowej lub demo](/ksef-demo-i-wersja-testowa).',
            ],
          },
        ],
      },
      {
        id: 'spolka',
        h2: 'Ścieżka dla spółki: 6 kroków',
        blocks: [
          {
            ol: [
              'Sprawdź, czy spółka ma kwalifikowaną pieczęć elektroniczną z NIP. Jeśli tak, przejdź do kroku 3.',
              'Jeśli nie ma pieczęci, złóż [ZAW-FA](/zaw-fa), wskazując jedną osobę fizyczną. Uprawnienia zaczną działać po wprowadzeniu ich przez urząd skarbowy, o czym przyjdzie e-mail.',
              'Osoba z ZAW-FA (albo spółka pieczęcią) loguje się do Aplikacji Podatnika KSeF i wybiera kontekst, czyli NIP spółki.',
              'Nadaj uprawnienia: drugiemu administratorowi, osobom wystawiającym faktury, księgowości lub biuru rachunkowemu.',
              'Podłącz program: osoba uprawniona generuje token lub certyfikat KSeF. Spółka zalogowana pieczęcią może uzyskać też certyfikaty na swoje dane.',
              'Przetestuj obieg w wersji demo, zanim pierwsza faktura pójdzie na produkcję.',
            ],
          },
          { note: 'Spółka, która dostaje faktury kosztowe, potrzebuje dostępu do KSeF już od 1 lutego 2026 r., niezależnie od tego, od kiedy musi wystawiać faktury. Bez ZAW-FA lub pieczęci nikt w jej imieniu nie pobierze faktur z KSeF.' },
        ],
      },
      {
        id: 'logowanie',
        h2: 'Sposoby logowania do KSeF',
        blocks: [
          {
            table: {
              head: ['Metoda', 'Kto', 'Uwagi'],
              rows: [
                ['login.gov.pl: Profil Zaufany, mObywatel, bankowość elektroniczna, e-dowód', 'Osoby fizyczne', 'Od 14 lutego 2026 r.; nie w wersji testowej; zagraniczny eID nie jest obsługiwany'],
                ['Kwalifikowany podpis elektroniczny', 'Osoby fizyczne', 'Podpis bez NIP i PESEL trzeba zgłosić (dane unikalne)'],
                ['Kwalifikowana pieczęć elektroniczna', 'Spółki i inne podmioty', 'Pieczęć z NIP daje pełne uprawnienia bez ZAW-FA'],
                ['Token KSeF', 'Programy i aplikacje', 'Generowany w Aplikacji Podatnika; MF zdecydowało o utrzymaniu tokenów bezterminowo'],
                ['Certyfikat KSeF', 'Programy, aplikacje, osoby', 'Ważny do 2 lat; typ 2 potrzebny do faktur offline'],
              ],
            },
          },
          { p: 'Sam PESEL nie wystarczy, żeby ktoś zalogował się w Twoim imieniu: zawsze potrzebny jest jeden ze środków z tabeli. Porównanie tokena i certyfikatu znajdziesz w poradniku [token czy certyfikat KSeF](/token-czy-certyfikat-ksef).' },
        ],
      },
      {
        id: 'pierwszy-tydzien',
        h2: 'Pierwszy tydzień z KSeF: co sprawdzić',
        blocks: [
          {
            ul: [
              'Czy widzisz faktury od dostawców, którzy już wystawiają w KSeF. Zobacz [odbieranie faktur z KSeF](/odbieranie-faktur-z-ksef).',
              'Czy ustaliłeś rytm sprawdzania faktur: KSeF nie wysyła powiadomień, a termin płatności liczy się od nadania numeru KSeF.',
              'Czy księgowa ma dostęp albo dostaje od Ciebie faktury w uzgodniony sposób.',
              'Czy masz zapasowego administratora (spółki) i wiesz, gdzie sprawdzać komunikaty MF, gdy [KSeF nie działa](/ksef-nie-dziala).',
            ],
          },
        ],
      },
    ],
    faqs: [
      { q: 'Jak założyć konto w KSeF?', a: 'Nie zakłada się konta. JDG loguje się od razu przez login.gov.pl (np. Profilem Zaufanym, mObywatelem lub bankowością) albo podpisem kwalifikowanym. Spółka loguje się pieczęcią kwalifikowaną albo najpierw składa ZAW-FA.' },
      { q: 'Czy JDG musi coś zgłaszać, żeby korzystać z KSeF?', a: 'Nie. Osoba fizyczna z NIP ma uprawnienia właścicielskie automatycznie i nie składa ZAW-FA.' },
      { q: 'Czy do KSeF zalogujesz się mObywatelem?', a: 'Tak. Od 14 lutego 2026 r. osoby fizyczne logują się do KSeF przez login.gov.pl, gdzie można wybrać m.in. aplikację mObywatel. Tak samo potwierdza tożsamość Aplikacja Mobilna KSeF.' },
      { q: 'Czy do KSeF potrzebny jest płatny program?', a: 'Nie. MF udostępnia bezpłatnie Aplikację Podatnika KSeF, Aplikację Mobilną KSeF i e-mikrofirmę.' },
      { q: 'Od czego zacząć, jeśli tylko odbieram faktury?', a: 'Od zalogowania i sprawdzenia listy faktur otrzymanych. Jeśli faktur jest dużo, podłącz program lub aplikację, która pobiera je sama.' },
    ],
    sources: [SRC.jdgKrok, SRC.podrecznik1, SRC.podrecznik2, SRC.uwierzytelnienie, SRC.mobilna, SRC.jdg],
    app: { shot: 'connect', from: 0.355, to: 0.645, text: 'Faktury KSeF łączy się z KSeF tokenem lub certyfikatem w kilka minut, bez zakładania konta u nas, i od razu pobiera faktury kosztowe.' },
    related: ['zaw-fa', 'ksef-demo-i-wersja-testowa', 'ksef-dla-jdg-2027'],
  },
  {
    slug: 'faktura-dla-osoby-fizycznej-a-ksef',
    short: 'Faktura dla osoby fizycznej a KSeF',
    title: 'Faktura dla osoby fizycznej i paragon z NIP a KSeF',
    metaTitle: 'Faktura dla osoby fizycznej a KSeF – i paragon z NIP',
    description:
      'Faktury dla konsumentów w KSeF są dobrowolne. Jak konsument odbiera fakturę z KSeF (kod QR), co z paragonem z NIP do 450 zł i co z osobami bez działalności, np. przy najmie prywatnym.',
    lede:
      'KSeF dotyczy faktur między firmami. Faktury dla osób prywatnych możesz wystawiać w KSeF, ale nie musisz. Wyjaśniamy, jak wtedy konsument dostaje fakturę, co zmienia się dla paragonów z NIP i jak KSeF dotyczy osób, które nie prowadzą firmy, ale czasem wystawiają faktury.',
    summary: [
      'Wystawianie faktur dla konsumentów (B2C) w KSeF jest dobrowolne, przed 1 lutego 2026 r. i po tej dacie.',
      'Jeśli faktura dla konsumenta trafi do KSeF, sprzedawca przekazuje ją w uzgodniony sposób (np. PDF lub wydruk z kodem QR) albo daje kod QR i dane do pobrania.',
      'Faktura dla konsumenta wystawiona poza KSeF może być papierowa lub mailowa, bez kodu QR.',
      'Paragony z NIP do 450 zł (faktury uproszczone) są wyłączone z KSeF do 31 grudnia 2026 r. Potem faktury dla firm wystawia się w KSeF.',
    ],
    keywords: ['faktura dla osoby fizycznej a ksef', 'faktura na osobę fizyczną a ksef', 'ksef faktury dla osób fizycznych', 'paragon z nipem a ksef', 'czy osoba fizyczna może wystawić fakturę', 'faktura imienna a ksef', 'faktura do paragonu a ksef'],
    published: '2026-10-15',
    updated: '2026-10-15',
    sections: [
      {
        id: 'b2c',
        h2: 'Faktura dla konsumenta: w KSeF czy poza nim',
        blocks: [
          { p: 'Ministerstwo Finansów odpowiada jednoznacznie: wystawianie faktur B2C, czyli dla osób prywatnych, w KSeF jest dobrowolne, zarówno przed 1 lutego 2026 r., jak i po tej dacie. Zasady wystawiania faktur konsumentom się nie zmieniły: wystawiasz je, gdy konsument o to poprosi.' },
          {
            table: {
              head: ['', 'Poza KSeF', 'W KSeF (dobrowolnie)'],
              rows: [
                ['Forma', 'Papier albo plik (np. PDF mailem), jak dotąd', 'Plik XML w KSeF z numerem KSeF'],
                ['Jak dostaje ją konsument', 'Wydruk lub mail', 'W uzgodniony sposób: wydruk lub PDF z kodem QR, albo sam kod QR z danymi dostępowymi'],
                ['Kod QR', 'Nie jest potrzebny', 'Obowiązkowy na wizualizacji przekazanej poza KSeF'],
                ['NIP nabywcy na fakturze', 'Nie podaje się', 'Nie podaje się; w strukturze FA(3) pole BrakID = 1'],
                ['Data otrzymania', 'Faktyczne otrzymanie', 'Faktyczne otrzymanie przez konsumenta'],
              ],
              caption: 'Według: ksef.podatki.gov.pl, Pytania i odpowiedzi KSeF 2.0 oraz Podręcznik KSeF 2.0, cz. II.',
            },
          },
          { p: 'Faktury dla konsumentów nie wliczają się do limitu 10 000 zł, który do końca 2026 r. pozwala małym firmom wystawiać faktury poza KSeF. Więcej w poradniku [KSeF dla JDG od 2027](/ksef-dla-jdg-2027).' },
        ],
      },
      {
        id: 'jak-konsument-odbiera',
        h2: 'Jak konsument odbiera fakturę z KSeF',
        blocks: [
          { p: 'Osoba prywatna zwykle nie może zalogować się do KSeF jako nabywca, bo nie ma tam NIP. Dlatego sprzedawca, który wystawił jej fakturę w KSeF, musi zapewnić dostęp: przekazać wydruk lub PDF z kodem QR i numerem KSeF albo sam kod QR z danymi, które pozwalają znaleźć fakturę.' },
          { figure: 'faktura-konsument' },
          {
            ol: [
              'Zeskanuj kod QR telefonem lub kliknij link od sprzedawcy.',
              'Zobaczysz podstawowe dane faktury i informację, czy jest w KSeF.',
              'Podaj numer faktury, informację o braku identyfikatora nabywcy i kwotę należności ogółem.',
              'Pobierz fakturę jako PDF lub XML, bez logowania.',
            ],
          },
          { p: 'Jeśli masz numer KSeF, możesz też skorzystać z dostępu anonimowego w Aplikacji Podatnika KSeF. Oba sposoby opisujemy w poradniku [jak znaleźć fakturę w KSeF](/jak-znalezc-fakture-w-ksef).' },
        ],
      },
      {
        id: 'paragon-z-nip',
        h2: 'Paragon z NIP a KSeF',
        blocks: [
          { p: 'Paragon fiskalny z NIP nabywcy do 450 zł brutto (100 euro) jest fakturą uproszczoną. Do 31 grudnia 2026 r. takie paragony, podobnie jak faktury wystawiane przy użyciu kas rejestrujących, są wyłączone z obowiązku wystawiania w KSeF. Nie wliczają się też do limitu 10 000 zł.' },
          {
            ul: [
              'Do 31 grudnia 2026 r.: paragon z NIP do 450 zł i faktura z kasy mogą być wystawione poza KSeF.',
              'Od 1 stycznia 2027 r.: według MF wszystkie faktury wystawia się przy użyciu KSeF. Firma, która chce fakturę do zakupu, dostanie ją w KSeF.',
              'Faktura do paragonu dla konsumenta pozostaje dobrowolna w KSeF.',
            ],
          },
          { note: 'Jeśli sprzedajesz przy kasie i wystawiasz faktury firmom, ustal z dostawcą programu lub kasy, jak od 2027 r. będziesz wystawiać faktury do paragonów w KSeF.' },
        ],
      },
      {
        id: 'osoba-bez-firmy',
        h2: 'Osoba bez firmy, która wystawia fakturę',
        blocks: [
          { p: 'Dla VAT podatnikiem jest nie tylko JDG. MF wymienia też osoby z działalnością nierejestrowaną (np. rękodzieło, usługi kosmetyczne) i osoby prowadzące najem prywatny. Gdy firma poprosi je o fakturę, mogą musieć ją wystawić, a od 2027 r. w KSeF.' },
          {
            ul: [
              'W KSeF nie da się wystawić faktury bez NIP sprzedawcy. Osoba bez NIP składa VAT-R i NIP-7 w urzędzie skarbowym.',
              'Do końca 2026 r. przy fakturach do 10 000 zł brutto miesięcznie można wystawiać poza KSeF, więc obowiązek uzyskania NIP pojawia się w praktyce od 1 stycznia 2027 r.',
              'Kto wystawia faktury wyłącznie konsumentom, nie musi korzystać z KSeF ani mieć NIP z tego powodu.',
              'Najem prywatny od osoby prywatnej dla osoby prywatnej: nie ma obowiązku wystawienia faktury nawet na żądanie.',
              'Rachunki za czynności niepodlegające VAT nie są objęte KSeF.',
            ],
          },
        ],
      },
      {
        id: 'jdg-zakupy-prywatne',
        h2: 'Prywatne zakupy przedsiębiorcy',
        blocks: [
          { p: 'Gdy właściciel JDG kupuje coś na użytek prywatny i prosi o fakturę na siebie jako osobę prywatną, jest to w istocie transakcja B2C. MF wskazuje, że wystawienie takiej faktury w KSeF jest dobrowolne. Jeśli jednak na fakturze jest NIP firmy, faktura trafi do KSeF na ten NIP i będzie widoczna w firmie, więc przy prywatnych zakupach nie podawaj NIP.' },
        ],
      },
    ],
    faqs: [
      { q: 'Czy faktura dla osoby prywatnej musi być w KSeF?', a: 'Nie. Wystawianie faktur dla konsumentów w KSeF jest dobrowolne, także po 1 lutego 2026 r.' },
      { q: 'Czy osoba fizyczna może pobrać fakturę z KSeF?', a: 'Tak, bez logowania: przez kod QR od sprzedawcy albo dostęp anonimowy, podając numer faktury, informację o braku identyfikatora i kwotę.' },
      { q: 'Czy paragon z NIP po 2026 r. będzie fakturą?', a: 'Do 31 grudnia 2026 r. paragon z NIP do 450 zł jest fakturą uproszczoną wyłączoną z KSeF. Według MF po tym okresie wszystkie faktury wystawia się przy użyciu KSeF.' },
      { q: 'Czy osoba prywatna może wystawić fakturę firmie?', a: 'Tak, jeśli wykonuje czynności podlegające VAT, np. najem albo działalność nierejestrowaną. Do wystawienia faktury w KSeF potrzebuje NIP; do końca 2026 r. w limicie 10 000 zł może wystawić ją poza KSeF.' },
      { q: 'Czy faktura imienna dla konsumenta ma kod QR?', a: 'Tylko jeśli sprzedawca wystawił ją w KSeF i przekazuje poza systemem. Faktura wystawiona poza KSeF nie ma kodu QR.' },
    ],
    sources: [SRC.pytania, SRC.podrecznik2, SRC.kodyQr, SRC.ponizej, SRC.jdg],
    app: { shot: 'invoices', from: 0.13, to: 0.6, text: 'Faktury KSeF jest dla firm: pokazuje faktury wystawione na Twój NIP. Prywatnych faktur bez NIP w nim nie zobaczysz, tak jak nie ma ich w KSeF na Twoim koncie.' },
    related: ['jak-znalezc-fakture-w-ksef', 'ksef-dla-jdg-2027', 'wizualizacja-faktury-ksef'],
  },
  {
    slug: 'korekta-faktury-w-ksef',
    short: 'Korekta faktury w KSeF',
    title: 'Korekta faktury w KSeF: zasady, korekta do zera i błędny NIP',
    metaTitle: 'Korekta faktury w KSeF – jak wystawić, do zera, błędny NIP',
    description:
      'Faktury w KSeF nie da się edytować ani anulować. Jedyną drogą jest faktura korygująca od wystawcy, noty korygujące zniknęły. Korekta do zera przy błędnym NIP, korekty zbiorcze i co robi nabywca.',
    lede:
      'Faktura z numerem KSeF jest w obiegu prawnym i nie da się jej zmienić, anulować ani usunąć. Każdy błąd poprawia się fakturą korygującą, którą wystawia sprzedawca. Wyjaśniamy zasady, typowe sytuacje i co może zrobić nabywca, który dostał błędną fakturę.',
    summary: [
      'Wystawionej faktury nie można w KSeF edytować, anulować ani usunąć. Błąd poprawia faktura korygująca od wystawcy.',
      'Od 1 lutego 2026 r. nie ma not korygujących. Nabywca nie poprawi faktury sam.',
      'Błędny NIP nabywcy: korekta do zera i nowa faktura z prawidłowym NIP.',
      'Plik XML odrzucony przez KSeF to nie faktura. Nie koryguje się go, tylko wysyła nowy, poprawny plik.',
      'Liczba korekt do jednej faktury nie jest ograniczona. Można też korygować faktury wystawione przed KSeF.',
    ],
    keywords: ['korekta faktury w ksef', 'jak zrobić korektę faktury w ksef', 'jak wystawić korektę w ksef', 'faktura korygująca w ksef', 'ksef korekty faktur', 'korekta do zera ksef', 'nota korygująca ksef'],
    published: '2026-10-15',
    updated: '2026-10-15',
    sections: [
      {
        id: 'zasady',
        h2: 'Podstawowe zasady korekt w KSeF',
        blocks: [
          {
            ul: [
              'Faktura z nadanym numerem KSeF weszła do obrotu prawnego. Nie można jej edytować, anulować ani usunąć z systemu, nawet jeśli jest błędna.',
              'Jedyną formą poprawienia błędu lub uzupełnienia faktury jest faktura korygująca wystawiona w KSeF przez wystawcę faktury pierwotnej.',
              'Noty korygujące nie funkcjonują od 1 lutego 2026 r. Nabywca nie może ich wystawiać.',
              'Do jednej faktury można wystawić dowolnie wiele korekt.',
              'KSeF nie sprawdza obliczeń. Faktura z błędem rachunkowym zostanie przyjęta i trzeba ją skorygować.',
            ],
          },
          { note: 'Odrzucony plik to nie faktura. Jeśli KSeF odrzucił XML (np. błąd struktury, brak uprawnień, duplikat numeru z kodem 440), faktura nie powstała: nie wystawiasz korekty, tylko poprawiasz plik i wysyłasz go ponownie.' },
        ],
      },
      {
        id: 'typowe-sytuacje',
        h2: 'Typowe sytuacje',
        blocks: [
          { figure: 'korekta-decyzja' },
          {
            table: {
              head: ['Błąd', 'Co zrobić'],
              rows: [
                ['Zły NIP nabywcy', 'Korekta do zera faktury z błędnym NIP i nowa faktura z prawidłowym. Faktura z błędnym NIP pozostaje widoczna dla firmy o tym NIP, jeśli taka istnieje.'],
                ['Zła cena, ilość, stawka VAT', 'Faktura korygująca in plus lub in minus.'],
                ['Zły adres lub nazwa nabywcy (NIP poprawny)', 'Faktura korygująca z danymi przed korektą w sekcji Podmiot2K.'],
                ['Zmiana danych sprzedawcy', 'Faktura korygująca z danymi przed korektą w sekcji Podmiot1K.'],
                ['Błędny numer faktury pierwotnej', 'Faktura korygująca z poprawnym numerem w polu NrFaKorygowany.'],
                ['Rabat za okres dla jednego odbiorcy', 'Korekta zbiorcza obejmująca wiele faktur.'],
                ['Całkowity zwrot towaru', 'Korekta do zera.'],
              ],
              caption: 'Według: Podręcznik KSeF 2.0, cz. II, rozdz. 1.6 i 2.13, oraz ksef.podatki.gov.pl, Pytania i odpowiedzi.',
            },
          },
          { p: 'Korekta do zera to rozwiązanie na szczególne sytuacje: całkowity zwrot albo pomyłka w NIP nabywcy. MF wyjaśnia, że brak danych nieobowiązkowych albo zapis w formacie, który nabywcy nie odpowiada, ale jest zgodny z FA(3), nie jest błędem wymagającym korekty do zera.' },
        ],
      },
      {
        id: 'pola-fa3',
        h2: 'Co jest w fakturze korygującej FA(3)',
        blocks: [
          {
            ul: [
              'Rodzaj faktury: KOR (korekta faktury podstawowej lub uproszczonej), KOR_ZAL (korekta zaliczkowej), KOR_ROZ (korekta rozliczającej).',
              'Dane faktury korygowanej: numer, data wystawienia i numer KSeF. Przy fakturze wystawionej przed KSeF zamiast numeru KSeF zaznacza się, że była wystawiona poza KSeF.',
              'Przyczyna korekty: pole nieobowiązkowe.',
              'Typ korekty (nieobowiązkowy): 1 – skutek w dacie faktury pierwotnej, 2 – w dacie korekty, 3 – w innej dacie.',
              'Jedną korektą można objąć do 50 000 faktur pierwotnych (korekta zbiorcza), podając dane każdej z nich.',
            ],
          },
          { p: 'Numer KSeF faktury korygowanej jest w korekcie obowiązkowy dla faktur z KSeF. Jak go znaleźć, wyjaśniamy w poradniku [numer KSeF](/numer-ksef).' },
        ],
      },
      {
        id: 'jak-wystawic',
        h2: 'Jak wystawić korektę',
        blocks: [
          {
            ol: [
              'Znajdź fakturę pierwotną i jej numer KSeF.',
              'W Aplikacji Podatnika KSeF, Aplikacji Mobilnej KSeF lub w programie wystaw fakturę korygującą do tej faktury. Wszystkie te narzędzia obsługują korekty.',
              'Wpisz stan przed korektą i po korekcie, a przy zmianie danych stron wypełnij sekcję z danymi przed korektą.',
              'Wyślij korektę do KSeF. Nabywca otrzyma ją w KSeF w dniu nadania jej numeru KSeF.',
            ],
          },
          {
            ul: [
              'Korektę faktury wystawionej offline wystawia się dopiero po nadaniu fakturze pierwotnej numeru KSeF.',
              'Korekty można wystawiać także w trybach offline i awaryjnym. W czasie awarii całkowitej korektę, tak jak fakturę, wystawia się poza KSeF.',
              'Można korygować faktury z lat ubiegłych, także wystawione przed obowiązkiem KSeF.',
            ],
          },
          { p: 'Jeśli chcesz najpierw przećwiczyć korektę bez skutków prawnych, zrób to w [wersji testowej lub demo KSeF](/ksef-demo-i-wersja-testowa).' },
        ],
      },
      {
        id: 'nabywca',
        h2: 'Dostałeś błędną fakturę? Co może zrobić nabywca',
        blocks: [
          { p: 'KSeF nie ma przycisku „odrzuć fakturę”. Faktura jest otrzymana w chwili nadania numeru KSeF, nawet jeśli jest błędna albo nie dotyczy Twojej firmy. Wszystkie wyjaśnienia odbywają się poza systemem.' },
          {
            ol: [
              'Skontaktuj się ze sprzedawcą i wskaż błąd, najlepiej z numerem KSeF faktury.',
              'Poproś o fakturę korygującą. Notą korygującą nie możesz już tego zrobić sam.',
              'Korekta przyjdzie przez KSeF jak każda faktura. Sprawdzaj listę faktur otrzymanych lub korzystaj z programu, który robi to za Ciebie.',
              'Przy fakturze, która w ogóle nie jest dla Ciebie (zły NIP), poproś o korektę do zera.',
            ],
          },
          { p: 'Jeśli faktura nie ma związku z żadną transakcją (np. masowa wysyłka, niebezpieczne linki), możesz ją zgłosić w Aplikacji Podatnika KSeF 2.0: Lista faktur › faktura › „Zgłoszenie nadużycia”. Według podręcznika MF z 6.08.2026 nie jest to droga dla faktur wystawionych przez pomyłkę ani spornych co do ceny czy ilości: wtedy potrzebna jest korekta. MF zapowiada też funkcję ukrywania faktur zakupowych w wynikach wyszukiwania.' },
        ],
      },
    ],
    faqs: [
      { q: 'Czy można anulować fakturę w KSeF?', a: 'Nie. Faktury z numerem KSeF nie da się anulować ani usunąć. Błąd poprawia się fakturą korygującą, a przy złym NIP nabywcy korektą do zera i nową fakturą.' },
      { q: 'Czy nabywca może wystawić notę korygującą w KSeF?', a: 'Nie. Od 1 lutego 2026 r. noty korygujące nie funkcjonują. Nabywca prosi sprzedawcę o fakturę korygującą.' },
      { q: 'Ile korekt można wystawić do jednej faktury?', a: 'Bez ograniczeń, tyle, ile potrzeba do uzyskania prawidłowej faktury.' },
      { q: 'Czy w KSeF można skorygować fakturę z 2025 r.?', a: 'Tak. Korektę wystawia sprzedawca w KSeF, wskazując, że faktura pierwotna była wystawiona poza KSeF.' },
      { q: 'Co zrobić, gdy KSeF odrzucił fakturę?', a: 'Odrzucony plik nie jest fakturą. Popraw XML i wyślij go ponownie; korekty nie wystawiasz.' },
    ],
    sources: [SRC.podrecznik2, SRC.pytania, SRC.jdg, SRC.mobilna, SRC.awaryjny],
    app: { shot: 'invoices', from: 0.13, to: 0.6, text: 'W Faktury KSeF korekty są oznaczone na liście („Korekta”, „Korekta in minus”), a na PDF widać, którą fakturę korygują, razem z jej numerem KSeF.' },
    related: ['numer-ksef', 'jak-pobrac-fakture-z-ksef', 'odbieranie-faktur-z-ksef'],
  },
  {
    slug: 'jak-wystawic-fakture-w-ksef',
    short: 'Jak wystawić fakturę w KSeF',
    title: 'Jak wystawić fakturę w KSeF: krok po kroku w bezpłatnych narzędziach MF',
    metaTitle: 'Jak wystawić fakturę w KSeF? Krok po kroku',
    description:
      'Jak wystawić fakturę w KSeF w Aplikacji Podatnika, aplikacji mobilnej lub e-mikrofirmie: co wpisać, co sprawdza KSeF, kiedy faktura jest wystawiona i co zrobić po wysłaniu.',
    lede:
      'Fakturę w KSeF wystawiasz w narzędziu, które wysyła plik XML do systemu: w bezpłatnej aplikacji Ministerstwa Finansów albo w programie do faktur. Faktura istnieje dopiero wtedy, gdy KSeF nada jej numer. Poniżej kroki, najczęstsze błędy i to, czego KSeF nie sprawdza.',
    summary: [
      'Do wystawienia faktury potrzebujesz dostępu do KSeF i uprawnienia do wystawiania faktur.',
      'Bezpłatnie wystawisz fakturę w Aplikacji Podatnika KSeF (przeglądarka), Aplikacji Mobilnej KSeF lub e-mikrofirmie.',
      'W trybie online data wystawienia to dzień przesłania faktury do KSeF. Faktura jest wystawiona po nadaniu numeru KSeF.',
      'KSeF sprawdza strukturę pliku, uprawnienia i duplikaty, ale nie sprawdza obliczeń ani NIP nabywcy.',
      'Nabywcy z NIP nie trzeba niczego wysyłać: faktura pojawia się u niego w KSeF.',
    ],
    keywords: ['jak wystawić fakturę w ksef', 'wystawianie faktur w ksef', 'jak wystawić fakturę w ksef krok po kroku', 'ksef jak wystawić fakturę', 'jak wysłać fakturę do ksef', 'wystawianie faktur w ksef krok po kroku'],
    published: '2026-10-15',
    updated: '2026-10-15',
    sections: [
      {
        id: 'zanim-zaczniesz',
        h2: 'Zanim wystawisz pierwszą fakturę',
        blocks: [
          {
            ul: [
              'Dostęp do KSeF: JDG ma go automatycznie, spółka przez pieczęć kwalifikowaną albo osobę wskazaną w ZAW-FA. Opisujemy to w poradniku [jak zacząć z KSeF](/jak-zaczac-z-ksef).',
              'Uprawnienie do wystawiania faktur, jeśli nie działasz jako właściciel.',
              'NIP sprzedawcy. W KSeF nie da się wystawić faktury bez NIP.',
              'Narzędzie: Aplikacja Podatnika KSeF, Aplikacja Mobilna KSeF, [e-mikrofirma](/e-mikrofirma-ksef) albo program zintegrowany z KSeF 2.0.',
            ],
          },
          { note: 'Pierwszą fakturę przećwicz na fikcyjnych danych w [wersji testowej lub demo](/ksef-demo-i-wersja-testowa). Każda faktura wysłana do KSeF w wersji produkcyjnej jest dokumentem w obiegu prawnym.' },
        ],
      },
      {
        id: 'aplikacja-podatnika',
        h2: 'Wystawienie faktury w Aplikacji Podatnika KSeF',
        blocks: [
          {
            ol: [
              'Wejdź na ap.ksef.mf.gov.pl (albo przez ksef.podatki.gov.pl) i zaloguj się przez login.gov.pl (np. Profilem Zaufanym lub mObywatelem), podpisem albo pieczęcią kwalifikowaną.',
              'Wybierz kontekst, czyli NIP firmy, w której imieniu wystawiasz fakturę.',
              'Wybierz wystawienie nowej faktury. Możesz też wczytać gotowy plik XML faktury; MF udostępnia instrukcje wideo do obu ścieżek.',
              'Uzupełnij dane faktury: datę wystawienia, swój numer faktury i rodzaj faktury.',
              'Wpisz nabywcę. NIP nabywcy z Polski musi trafić do pola NIP, inaczej nabywca nie otrzyma faktury w KSeF.',
              'Dodaj pozycje (nazwa, ilość, cena, stawka VAT) i dane płatności: termin, formę i numer rachunku.',
              'Sprawdź podgląd i wyślij fakturę do KSeF. Po przyjęciu faktura dostaje numer KSeF, a Ty możesz pobrać UPO.',
            ],
          },
          { p: 'Termin płatności, rachunek bankowy i inne dane dodatkowe wpisuj do faktury, a nie tylko na jej wydruk. MF zwraca uwagę, że dane tylko na wizualizacji nie trafią do systemu nabywcy i utrudniają mu automatyczne księgowanie.' },
        ],
      },
      {
        id: 'aplikacja-mobilna',
        h2: 'Wystawienie faktury w Aplikacji Mobilnej KSeF',
        blocks: [
          { p: 'Aplikacja Mobilna KSeF 2.0 (App Store, Google Play) pozwala wystawić fakturę lub korektę z telefonu. Logujesz się biometrią lub PIN-em po pierwszym potwierdzeniu tożsamości przez węzeł krajowy. Instrukcje wideo MF prowadzą przez kolejne ekrany:' },
          {
            ol: [
              'Szczegóły faktury.',
              'Adnotacje (np. metoda kasowa, samofakturowanie, odwrotne obciążenie).',
              'Pozycje faktury.',
              'Płatność i rachunek bankowy (rachunki zapiszesz w aplikacji na stałe).',
              'Wysyłka faktury do KSeF.',
            ],
          },
          { p: 'Aplikacja zapamiętuje nabywców i rachunki, pozwala zapisać fakturę jako wersję roboczą i obsługuje kilka profili firm. Faktur z załącznikiem nie wystawisz w bezpłatnych aplikacjach MF: ta funkcja jest tylko w programach komercyjnych, po zgłoszeniu w e-Urzędzie Skarbowym.' },
        ],
      },
      {
        id: 'co-sprawdza-ksef',
        h2: 'Co KSeF sprawdza, a czego nie',
        blocks: [
          { figure: 'ksef-sprawdza' },
          {
            table: {
              head: ['KSeF sprawdza', 'KSeF nie sprawdza'],
              rows: [
                ['Zgodność pliku XML z wzorem FA(3)', 'Obliczeń: zła suma VAT czy brutto przejdzie'],
                ['Czy wysyłający ma uprawnienia', 'Czy NIP nabywcy należy do właściwej firmy'],
                ['Duplikaty: ten sam NIP sprzedawcy, rodzaj i numer faktury (błąd 440)', 'Czy kontrahent jest czynnym podatnikiem VAT'],
                ['Czy data wystawienia (P_1) nie jest z przyszłości', 'Czy sprzedaż w ogóle się odbyła'],
                ['Rozmiar: do 1 MB bez załączników, do 3 MB z załącznikiem', ''],
              ],
              caption: 'Według: ksef.podatki.gov.pl, Pytania i odpowiedzi; dokumentacja API KSeF 2.0, „Weryfikacja faktury”.',
            },
          },
          { p: 'Jeśli KSeF odrzuci plik, faktura nie powstała: poprawiasz plik i wysyłasz go ponownie. Jeśli KSeF przyjmie fakturę z błędem, poprawiasz ją fakturą korygującą. Zobacz [korekta faktury w KSeF](/korekta-faktury-w-ksef).' },
        ],
      },
      {
        id: 'daty',
        h2: 'Data wystawienia i data otrzymania',
        blocks: [
          {
            ul: [
              'Tryb online: datą wystawienia jest dzień przesłania faktury do KSeF, nawet jeśli numer KSeF zostanie nadany następnego dnia.',
              'Jeśli wyślesz fakturę później niż data wpisana w polu P_1, KSeF ją przyjmie jako fakturę w trybie offline24, z datą wystawienia z P_1. Trzeba ją przesłać najpóźniej następnego dnia roboczego.',
              'Nabywca z NIP otrzymuje fakturę w dniu nadania numeru KSeF. Od tej daty liczy się np. termin płatności liczony od otrzymania.',
            ],
          },
        ],
      },
      {
        id: 'po-wyslaniu',
        h2: 'Po wysłaniu: co dalej',
        blocks: [
          {
            ul: [
              'Nie musisz wysyłać nabywcy z NIP ani pliku, ani numeru KSeF. Faktura jest u niego w KSeF.',
              'Konsumentowi i kontrahentowi zagranicznemu przekazujesz fakturę w uzgodniony sposób, np. jako PDF z kodem QR. Zobacz [faktura dla osoby fizycznej a KSeF](/faktura-dla-osoby-fizycznej-a-ksef).',
              'Faktury nie da się anulować ani usunąć. Błąd poprawia faktura korygująca.',
              'Nie zobaczysz, czy nabywca pobrał fakturę. KSeF nie daje takiej informacji.',
              'Od 1 stycznia 2027 r. nabywca będący czynnym podatnikiem VAT poda w przelewie [numer KSeF](/numer-ksef) Twojej faktury.',
            ],
          },
        ],
      },
    ],
    faqs: [
      { q: 'Czy do wystawienia faktury w KSeF potrzebny jest płatny program?', a: 'Nie. Bezpłatnie wystawisz fakturę w Aplikacji Podatnika KSeF, Aplikacji Mobilnej KSeF lub e-mikrofirmie.' },
      { q: 'Kiedy faktura w KSeF jest wystawiona?', a: 'W trybie online w dniu przesłania jej do KSeF, pod warunkiem że system nada jej numer KSeF.' },
      { q: 'Czy muszę wysłać fakturę z KSeF kontrahentowi mailem?', a: 'Nie, jeśli kontrahent ma polski NIP. Faktura pojawia się u niego w KSeF. Mail może być tylko dodatkiem.' },
      { q: 'Co jeśli wpiszę zły NIP nabywcy?', a: 'KSeF przyjmie fakturę, bo nie sprawdza danych kontrahenta. Trzeba wystawić korektę do zera i nową fakturę z prawidłowym NIP.' },
      { q: 'Czy w KSeF wystawię fakturę z telefonu?', a: 'Tak, w bezpłatnej Aplikacji Mobilnej KSeF 2.0 z App Store lub Google Play.' },
    ],
    sources: [SRC.ap20, SRC.mobilna, SRC.podrecznik2, SRC.pytania, SRC.apiWeryfikacja],
    app: { shot: 'invoices', from: 0.13, to: 0.6, text: 'Faktury KSeF nie wystawia faktur. Pokazuje za to w zakładce „Wystawione” faktury, które wysłałeś do KSeF w innym narzędziu, a w „Otrzymane” faktury od dostawców.' },
    related: ['korekta-faktury-w-ksef', 'jak-zaczac-z-ksef', 'e-mikrofirma-ksef'],
  },
  {
    slug: 'kto-nie-musi-korzystac-z-ksef',
    short: 'Kto nie musi korzystać z KSeF',
    title: 'Zwolnienie z KSeF: kto nie musi wystawiać faktur w KSeF',
    metaTitle: 'Zwolnienie z KSeF – kto nie musi wystawiać faktur w KSeF',
    description:
      'Wyłączenia z KSeF: firmy zagraniczne bez stałego miejsca w Polsce, faktury dla konsumentów, OSS, IOSS, procedura SME, bilety i autostrady. Dlaczego odbierać faktury w KSeF i tak musi każdy z NIP.',
    lede:
      'Nie ma zwolnienia z KSeF „dla małych firm” czy „dla JDG”. Są za to konkretne wyłączenia: dla niektórych sprzedawców, nabywców i rodzajów transakcji, a do końca 2026 r. także przepisy przejściowe. Poniżej pełna lista według Ministerstwa Finansów i rozporządzenia, wraz z tym, czego wyłączenia nie obejmują.',
    summary: [
      'Nie da się zrezygnować z KSeF. Obowiązek zależy od rodzaju faktury, nie od wielkości firmy (poza przepisami przejściowymi do końca 2026 r.).',
      'Bez KSeF wystawia się faktury dla konsumentów oraz faktury podatników bez siedziby i stałego miejsca działalności w Polsce. Te można też wystawić w KSeF dobrowolnie.',
      'Faktur w procedurach OSS nieunijnej, IOSS, przewozu okazjonalnego osób i SME nie wystawia się w KSeF w ogóle.',
      'Rozporządzenie (Dz. U. 2025 poz. 1740) wyłącza m.in. bilety jednorazowe, opłaty za autostrady i niektóre polisy.',
      'Otrzymywanie faktur przez KSeF obowiązuje każdego podatnika z NIP od 1 lutego 2026 r., także tego, kto korzysta z wyłączeń.',
    ],
    keywords: ['zwolnienie z ksef', 'zwolnienia z ksef', 'kto nie musi korzystać z ksef', 'ksef kogo nie dotyczy', 'ksef dla nievatowców', 'ksef a faktury papierowe', 'czy ksef jest obowiązkowy'],
    published: '2026-10-15',
    updated: '2026-10-15',
    sections: [
      {
        id: 'zasada',
        h2: 'Zasada: KSeF dotyczy faktur, nie firm',
        blocks: [
          { p: 'Obowiązek dotyczy każdego podatnika VAT, czynnego i zwolnionego, który wystawia fakturę, niezależnie od formy prawnej. Pytanie nie brzmi więc „czy moja firma jest zwolniona”, tylko „czy ta konkretna faktura musi trafić do KSeF”. MF przypomina też, że najpierw trzeba ustalić, czy w ogóle jest obowiązek wystawienia faktury, a dopiero potem, czy musi to być faktura w KSeF.' },
          { note: 'Wyłączenia dotyczą wystawiania. Faktury od kontrahentów otrzymujesz przez KSeF od 1 lutego 2026 r., nawet jeśli sam nie wystawiasz żadnej faktury w KSeF. Zobacz [odbieranie faktur z KSeF](/odbieranie-faktur-z-ksef).' },
        ],
      },
      {
        id: 'wylaczenia',
        h2: 'Pełna lista wyłączeń',
        blocks: [
          { figure: 'ksef-wylaczenia' },
          {
            table: {
              head: ['Grupa', 'Faktury poza KSeF', 'Dobrowolnie w KSeF?'],
              rows: [
                ['Status stron', 'Wystawiane przez podatnika bez siedziby i stałego miejsca działalności w Polsce (albo gdy stałe miejsce nie uczestniczy w transakcji)', 'Tak'],
                ['Status stron', 'Wystawiane dla osoby fizycznej nieprowadzącej działalności (konsumenta)', 'Tak'],
                ['Procedury szczególne', 'OSS nieunijna, IOSS (import), międzynarodowy okazjonalny przewóz drogowy osób, procedura SME (art. 113a)', 'Nie'],
                ['Rozporządzenie (poz. 1740)', 'Autostrady płatne i bilety jednorazowe na przejazd (faktury o węższym zakresie danych)', 'Strona MF tego nie określa'],
                ['Rozporządzenie (poz. 1740)', 'Niektóre usługi zwolnione z VAT (art. 43 ust. 1 pkt 7, 37–41), np. polisy uznane za faktury', 'Strona MF tego nie określa'],
                ['Rozporządzenie (poz. 1740)', 'Samofakturowanie, gdy nabywca lub sprzedawca nie używa polskiego NIP', 'Przy WDT z nabywcą z VAT UE tak'],
                ['Przejściowe (do 31.12.2026)', 'Faktury do 10 000 zł brutto miesięcznie, faktury z kas rejestrujących, paragony z NIP do 450 zł', 'Tak'],
              ],
              caption: 'Źródło: ksef.podatki.gov.pl, Zakres obowiązkowego KSeF (zmodyfikowano 6.02.2026), oraz rozporządzenie Dz. U. 2025 poz. 1740.',
            },
          },
          { p: 'Szczegóły limitu 10 000 zł i kas rejestrujących, które kończą się 31 grudnia 2026 r., opisujemy w poradniku [KSeF dla JDG od 2027](/ksef-dla-jdg-2027). Faktury dla konsumentów i paragony z NIP omawiamy w poradniku [faktura dla osoby fizycznej a KSeF](/faktura-dla-osoby-fizycznej-a-ksef).' },
        ],
      },
      {
        id: 'nie-faktury',
        h2: 'Dokumenty, które w ogóle nie trafiają do KSeF',
        blocks: [
          {
            ul: [
              'Faktury pro forma.',
              'Faktury i dowody wewnętrzne.',
              'Noty uznaniowe i obciążeniowe.',
              'Noty korygujące: przepisy o nich uchylono 1 lutego 2026 r., nie wystawia się ich ani w KSeF, ani poza nim.',
              'Rachunki za czynności niepodlegające VAT, w tym rachunki rolników ryczałtowych zwolnionych z wystawiania faktur. Faktury VAT RR opisujemy w poradniku [rolnik ryczałtowy a KSeF](/rolnik-ryczaltowy-a-ksef).',
              'Dokumenty towarzyszące, np. list przewozowy, wysyłane jak dotąd poza KSeF.',
            ],
          },
        ],
      },
      {
        id: 'nievatowcy',
        h2: 'Zwolnieni z VAT i osoby bez firmy',
        blocks: [
          { p: 'Zwolnienie z VAT nie zwalnia z KSeF. Podatnik zwolniony podmiotowo (do 240 000 zł sprzedaży rocznie) albo przedmiotowo wystawia faktury na żądanie nabywcy i, jeśli nabywcą jest firma, robi to w KSeF: od 1 kwietnia 2026 r., a w limicie 10 000 zł miesięcznie od 1 stycznia 2027 r.' },
          {
            ul: [
              'Osoby z działalnością nierejestrowaną i najmem prywatnym też są podatnikami VAT. Do faktury w KSeF potrzebują NIP (VAT-R i NIP-7).',
              'Najem od osoby prywatnej dla osoby prywatnej: nie ma obowiązku wystawiania faktury nawet na żądanie.',
              'Kto wystawia faktury wyłącznie konsumentom, nie musi korzystać z KSeF przy wystawianiu.',
            ],
          },
        ],
      },
    ],
    faqs: [
      { q: 'Czy można zrezygnować z KSeF?', a: 'Nie. Wyłączenia dotyczą konkretnych faktur i transakcji, a nie firm. Odbieranie faktur przez KSeF obowiązuje każdego podatnika z NIP.' },
      { q: 'Kto jest zwolniony z KSeF w 2026 r.?', a: 'Do 31 grudnia 2026 r. poza KSeF można wystawiać faktury do 10 000 zł brutto miesięcznie, faktury z kas rejestrujących i paragony z NIP do 450 zł. Stałe wyłączenia to m.in. faktury dla konsumentów i podatników zagranicznych bez stałego miejsca w Polsce.' },
      { q: 'Czy KSeF dotyczy podatników zwolnionych z VAT?', a: 'Tak. Zwolnieni z VAT wystawiają faktury na żądanie nabywcy, a dla firm w KSeF, najpóźniej od 1 stycznia 2027 r.' },
      { q: 'Czy fakturę dla konsumenta mogę wystawić w KSeF?', a: 'Tak, dobrowolnie. Wtedy przekazujesz ją konsumentowi w uzgodniony sposób z kodem QR.' },
      { q: 'Czy fakturę proforma wysyła się do KSeF?', a: 'Nie. Faktury proforma, dowody wewnętrzne i noty obciążeniowe nie trafiają do KSeF.' },
    ],
    sources: [SRC.zakres, SRC.rozp1740, SRC.pytania, SRC.podrecznik2, SRC.ponizej],
    app: { shot: 'start', from: 0.17, to: 0.44, text: 'Nawet jeśli korzystasz z wyłączeń, faktury kosztowe przychodzą przez KSeF. Faktury KSeF pobiera je na telefon i pokazuje, co jest do zapłaty.' },
    related: ['ksef-dla-jdg-2027', 'faktura-dla-osoby-fizycznej-a-ksef', 'ksef-od-kiedy'],
  },
  {
    slug: 'e-mikrofirma-ksef',
    short: 'e-mikrofirma a KSeF',
    title: 'e-mikrofirma a KSeF: powiązanie, wystawianie i odbieranie faktur',
    metaTitle: 'e-mikrofirma a KSeF – powiązanie, faktury i JPK_VAT',
    description:
      'e-mikrofirma to bezpłatna aplikacja w e-Urzędzie Skarbowym dla JDG: wystawia faktury w KSeF, pobiera faktury zakupu i tworzy JPK_VAT. Jak ją powiązać z KSeF i czym różni się od Aplikacji Podatnika.',
    lede:
      'e-mikrofirma to bezpłatna aplikacja Ministerstwa Finansów dla jednoosobowych działalności, dostępna w e-Urzędzie Skarbowym. Po powiązaniu z KSeF wystawia faktury w KSeF, pobiera faktury zakupu i od razu wpisuje je do ewidencji VAT. Poniżej, jak ją połączyć z KSeF i kiedy jest lepsza od Aplikacji Podatnika.',
    summary: [
      'e-mikrofirma jest dla osób fizycznych prowadzących JDG. Działa w e-Urzędzie Skarbowym, po zalogowaniu przez login.gov.pl.',
      'Powiązanie z KSeF: przycisk „Powiąż z KSeF” i potwierdzenie tożsamości Profilem Zaufanym.',
      'Wystawia krajowe faktury sprzedaży w KSeF (bez procedur szczególnych) i korekty.',
      'Pobiera faktury zakupu z KSeF i przenosi je do ewidencji, z której tworzy JPK_VAT.',
    ],
    keywords: ['e-mikrofirma ksef', 'e-mikrofirma', 'e mikrofirma ksef', 'jak odebrać fakturę ksef w e-mikrofirma', 'e-mikrofirma logowanie', 'czy e-mikrofirma jest płatna'],
    published: '2026-10-15',
    updated: '2026-10-15',
    sections: [
      {
        id: 'co-to',
        h2: 'Czym jest e-mikrofirma',
        blocks: [
          { p: 'e-mikrofirma to bezpłatna aplikacja w e-Urzędzie Skarbowym, skierowana do osób fizycznych prowadzących jednoosobową działalność. Na podstawie wpisanych dokumentów tworzy ewidencję i deklarację VAT i pozwala wygenerować plik JPK_VAT. Po powiązaniu z KSeF wystawia faktury w KSeF i pobiera z niego faktury zakupu, bez przepisywania danych.' },
          { figure: 'narzedzia-mf' },
          {
            table: {
              head: ['', 'e-mikrofirma', 'Aplikacja Podatnika KSeF', 'Aplikacja Mobilna KSeF'],
              rows: [
                ['Dla kogo', 'JDG', 'Wszyscy podatnicy', 'Przedsiębiorcy, na telefonie'],
                ['Gdzie', 'e-Urząd Skarbowy (przeglądarka)', 'Przeglądarka', 'Telefon'],
                ['Wystawianie i odbieranie faktur', 'Tak', 'Tak', 'Tak'],
                ['Ewidencja VAT i JPK_VAT', 'Tak', 'Nie', 'Nie'],
                ['Uprawnienia, tokeny, certyfikaty', 'Nie', 'Tak', 'Nie'],
              ],
              caption: 'Według: ksef.podatki.gov.pl (Konsumenci i osoby fizyczne, Aplikacja mobilna KSeF) i materiałów szkoleniowych MF „Środy z KSeF”, moduł VIII.',
            },
          },
        ],
      },
      {
        id: 'powiazanie',
        h2: 'Jak powiązać e-mikrofirmę z KSeF',
        blocks: [
          {
            ol: [
              'Zaloguj się do e-Urzędu Skarbowego (login.gov.pl) i otwórz e-mikrofirmę. Jeśli nie masz w niej konta, najpierw się zarejestruj.',
              'Po zalogowaniu aplikacja sama pokaże komunikat o możliwości powiązania z KSeF. Wybierz „Powiąż z KSeF”. Ten sam komunikat wywołasz, wybierając Nowy dokument › Nowa e-Faktura sprzedaży (KSeF).',
              'Potwierdź tożsamość Profilem Zaufanym.',
              'Aplikacja pokaże status powiązania. Jeśli masz uprawnienia, możesz wystawiać i pobierać faktury przez KSeF.',
            ],
          },
          { note: 'Opis ekranów pochodzi z materiałów szkoleniowych MF przygotowanych przed aktualizacją e-mikrofirmy do KSeF 2.0 i struktury FA(3), zapowiadaną na luty 2026 r. Nazwy przycisków mogą się nieco różnić od obecnej wersji.' },
        ],
      },
      {
        id: 'wystawianie',
        h2: 'Wystawianie faktur w e-mikrofirmie',
        blocks: [
          {
            ol: [
              'Wybierz z menu Nowy dokument › Nowa e-Faktura sprzedaży (KSeF).',
              'Wpisz dane jak w zwykłej fakturze: dane faktury, kontrahenta, pozycje i płatność.',
              'Przed wysłaniem sprawdź podgląd PDF.',
              'Wyślij fakturę do KSeF.',
            ],
          },
          { p: 'Korektę wystawiasz z poziomu faktury pierwotnej: w części „Dane po korekcie” wpisujesz poprawne wartości i wybierasz „Wystaw korektę”. Korekta jest potem powiązana z fakturą pierwotną na liście faktur sprzedaży. Zasady korekt opisujemy w poradniku [korekta faktury w KSeF](/korekta-faktury-w-ksef).' },
        ],
      },
      {
        id: 'odbieranie',
        h2: 'Odbieranie faktur zakupu z KSeF',
        blocks: [
          {
            ol: [
              'Wybierz z menu „e-Faktury zakupu w KSeF”. Zobaczysz listę faktur otrzymanych przez KSeF.',
              'Wybierz fakturę i kliknij „Importuj” (albo „Przenieś do listy dokumentów”).',
              'Sprawdź kwotę odliczenia. Jeśli prawo do odliczenia jest ograniczone, popraw kwoty.',
              'Wpisz datę księgowania, czyli okres, w którym odliczasz VAT, i wybierz „Zapisz i przenieś”.',
            ],
          },
          { p: 'Faktura trafia do listy faktur zakupu i do ewidencji VAT. Według materiałów szkoleniowych MF aplikacja pobiera faktury z kwotą podatku większą od zera. Faktury bez VAT sprawdzisz w Aplikacji Podatnika KSeF albo w innym narzędziu. Pamiętaj, że KSeF nie powiadamia o nowych fakturach, więc listę trzeba przeglądać samemu.' },
        ],
      },
      {
        id: 'kiedy',
        h2: 'Kiedy wybrać e-mikrofirmę',
        blocks: [
          {
            ul: [
              'Prowadzisz JDG, rozliczasz VAT samodzielnie i chcesz mieć faktury, ewidencję i JPK_VAT w jednym miejscu u MF.',
              'Nie potrzebujesz zarządzać uprawnieniami ani generować tokenów: to zrobisz w Aplikacji Podatnika KSeF.',
              'Jeśli prowadzi Cię biuro rachunkowe, zwykle wygodniej jest nadać mu [uprawnienia w KSeF](/uprawnienia-ksef-dla-ksiegowej), a ewidencję zostawić biuru.',
            ],
          },
          { p: 'Problemy techniczne z e-mikrofirmą MF każe zgłaszać na adres jpk.helpdesk@mf.gov.pl. Sprawy KSeF obsługuje infolinia KAS i formularz na ksef.podatki.gov.pl.' },
        ],
      },
    ],
    faqs: [
      { q: 'Czy e-mikrofirma jest płatna?', a: 'Nie. To bezpłatna aplikacja Ministerstwa Finansów w e-Urzędzie Skarbowym.' },
      { q: 'Jak odebrać fakturę z KSeF w e-mikrofirmie?', a: 'Po powiązaniu aplikacji z KSeF wybierz „e-Faktury zakupu w KSeF”, wskaż fakturę i zaimportuj ją do ewidencji, podając okres odliczenia.' },
      { q: 'Czy e-mikrofirma jest dla spółek?', a: 'Nie. Jest skierowana do osób fizycznych prowadzących jednoosobową działalność. Spółki korzystają z Aplikacji Podatnika KSeF lub programów.' },
      { q: 'Jak zalogować się do e-mikrofirmy?', a: 'Przez e-Urząd Skarbowy, logując się przez login.gov.pl. Powiązanie z KSeF potwierdzasz Profilem Zaufanym.' },
    ],
    sources: [SRC.emikrofirma, SRC.kontakt, SRC.odebrac, SRC.jdg, SRC.podrecznik2],
    app: { shot: 'export', from: 0.36, to: 0.8, text: 'Jeśli VAT rozlicza biuro, Faktury KSeF zbiera faktury kosztowe z KSeF i wysyła księgowej zestawienie za miesiąc: PDF, CSV albo paczkę XML.' },
    related: ['jak-wystawic-fakture-w-ksef', 'odbieranie-faktur-z-ksef', 'jak-zaczac-z-ksef'],
  },
  {
    slug: 'logowanie-do-ksef',
    short: 'Logowanie do KSeF',
    title: 'Jak zalogować się do KSeF: login.gov.pl, mObywatel, bank, podpis i pieczęć',
    metaTitle: 'Jak zalogować się do KSeF? mObywatel, bank, Profil Zaufany',
    description:
      'Od 14 lutego 2026 r. do KSeF logujesz się przez login.gov.pl: Profilem Zaufanym, mObywatelem, bankowością elektroniczną lub e-dowodem. Do tego podpis i pieczęć kwalifikowana, token i certyfikat KSeF.',
    lede:
      'Do KSeF nie ma osobnego loginu ani hasła. Osoba fizyczna potwierdza tożsamość przez login.gov.pl albo podpisem kwalifikowanym, firma pieczęcią kwalifikowaną, a programy tokenem lub certyfikatem KSeF. Poniżej wszystkie metody, logowanie krok po kroku w Aplikacji Podatnika i najczęstsze problemy.',
    summary: [
      'Od 14 lutego 2026 r. osoby fizyczne logują się do KSeF przez login.gov.pl: Profilem Zaufanym, aplikacją mObywatel, bankowością elektroniczną albo e-dowodem.',
      'Druga droga to certyfikat kwalifikowany: podpis (osoby) lub pieczęć (firmy) z NIP albo PESEL.',
      'Programy i aplikacje logują się tokenem lub certyfikatem KSeF, które generujesz w Aplikacji Podatnika.',
      'Przy logowaniu wybierasz kontekst, czyli NIP firmy, w której imieniu działasz. Sam PESEL nikomu nie wystarczy do zalogowania się w Twoim imieniu.',
    ],
    keywords: ['jak zalogować się do ksef', 'ksef logowanie przez bank', 'ksef logowanie mobywatel', 'zaloguj się do ksef', 'ksef jak się zalogować', 'pierwsze logowanie do ksef', 'ksef profil zaufany', 'logowanie do ksef'],
    published: '2026-10-15',
    updated: '2026-10-15',
    sections: [
      {
        id: 'metody',
        h2: 'Metody logowania do KSeF',
        blocks: [
          { figure: 'logowanie-metody' },
          {
            table: {
              head: ['Metoda', 'Osoba fizyczna', 'Firma (np. spółka)'],
              rows: [
                ['login.gov.pl: Profil Zaufany, mObywatel, bankowość elektroniczna, e-dowód', 'Tak, od 14 lutego 2026 r.', 'Nie'],
                ['Kwalifikowany podpis elektroniczny', 'Tak', 'Nie'],
                ['Kwalifikowana pieczęć elektroniczna', 'Nie', 'Tak'],
                ['Token KSeF', 'Tak', 'Tak'],
                ['Certyfikat KSeF', 'Tak', 'Tak'],
              ],
              caption: 'Według: Podręcznik KSeF 2.0, cz. I (wersja z 6.08.2026), tabela „Metody uwierzytelnienia w KSeF”.',
            },
          },
          { p: 'Zagraniczny eID (środek identyfikacji wydany w innym kraju UE) nie jest obsługiwany przez login.gov.pl w KSeF. Spółka bez pieczęci kwalifikowanej działa przez osobę wskazaną w [ZAW-FA](/zaw-fa), która loguje się własnymi danymi.' },
        ],
      },
      {
        id: 'login-gov',
        h2: 'Logowanie przez login.gov.pl krok po kroku',
        blocks: [
          {
            ol: [
              'Wejdź na ap.ksef.mf.gov.pl albo przez ksef.podatki.gov.pl do Aplikacji Podatnika KSeF 2.0.',
              'Wybierz „Zaloguj przez login.gov.pl”.',
              'Wskaż kontekst logowania: NIP podmiotu (najczęściej), identyfikator wewnętrzny albo identyfikator złożony (samofakturowanie VAT UE), wpisz numer i przejdź dalej.',
              'Na stronie login.gov.pl wybierz metodę: Profil Zaufany, aplikacja mObywatel, bankowość elektroniczna albo e-dowód, i potwierdź tożsamość.',
              'Wrócisz do Aplikacji Podatnika w wybranym kontekście. Zobaczysz faktury i funkcje, do których masz uprawnienia.',
            ],
          },
          { p: 'Jeśli prowadzisz JDG, a NIP firmy jest powiązany z Twoim PESEL, nie musisz niczego dodatkowo ustawiać: masz uprawnienia właścicielskie. Logowanie bankiem działa przez Twój bank w login.gov.pl, tak samo jak przy innych usługach publicznych.' },
        ],
      },
      {
        id: 'certyfikat-kwalifikowany',
        h2: 'Logowanie podpisem lub pieczęcią kwalifikowaną',
        blocks: [
          {
            ol: [
              'W Aplikacji Podatnika wybierz „Zaloguj certyfikatem” i wskaż kontekst (NIP).',
              'Zaznacz, czy Twój certyfikat zawiera NIP lub PESEL.',
              'Pobierz żądanie autoryzacyjne na dysk.',
              'Podpisz je podpisem kwalifikowanym albo pieczęcią kwalifikowaną w programie dostarczonym z Twoim certyfikatem.',
              'Wczytaj podpisany plik do aplikacji.',
            ],
          },
          { note: 'Podpis lub pieczęć bez NIP i PESEL (np. wydane za granicą) zadziała dopiero po zgłoszeniu tzw. odcisku palca certyfikatu (64 znaki SHA-256): w ZAW-FA albo elektronicznie przez osobę, która nadaje uprawnienia. Po każdej zmianie takiego certyfikatu zgłoszenie trzeba powtórzyć.' },
        ],
      },
      {
        id: 'programy',
        h2: 'Logowanie programów i aplikacji',
        blocks: [
          { p: 'Program do faktur, system księgowy czy aplikacja na telefon nie loguje się Twoim Profilem Zaufanym. Używa tokena albo certyfikatu KSeF, które generujesz po zalogowaniu w Aplikacji Podatnika. Token ma wpisany zakres uprawnień (np. tylko przeglądanie faktur), a certyfikat KSeF typu 1 jest ważny do 2 lat. Ministerstwo Finansów zdecydowało, że tokeny zostają bezterminowo. Różnice opisujemy w poradniku [token czy certyfikat KSeF](/token-czy-certyfikat-ksef).' },
          { p: 'Aplikacja Mobilna KSeF przy pierwszym uruchomieniu potwierdza tożsamość przez węzeł krajowy, a potem logujesz się w niej biometrią lub PIN-em.' },
        ],
      },
      {
        id: 'problemy',
        h2: 'Nie mogę się zalogować: najczęstsze przyczyny',
        blocks: [
          {
            ul: [
              'Zły kontekst: wpisany NIP firmy, w której nie masz uprawnień. Sprawdź NIP albo poproś właściciela o nadanie uprawnień.',
              'Spółka bez pieczęci, a nikt nie został wskazany w ZAW-FA. Najpierw trzeba je złożyć.',
              'Certyfikat kwalifikowany bez NIP i PESEL, którego odcisk palca nie został zgłoszony.',
              'Chwilowe utrudnienia w login.gov.pl lub Profilu Zaufanym: wybierz inną metodę w login.gov.pl, podpis albo program z tokenem. Komunikaty MF opisujemy w poradniku [KSeF nie działa](/ksef-nie-dziala).',
              'Logowanie do wersji testowej: tam zamiast Profilu Zaufanego jest logowanie testowe na fikcyjnych danych. Zobacz [KSeF demo i wersja testowa](/ksef-demo-i-wersja-testowa).',
            ],
          },
        ],
      },
    ],
    faqs: [
      { q: 'Czy do KSeF zaloguję się przez bank?', a: 'Tak. Od 14 lutego 2026 r. osoby fizyczne logują się przez login.gov.pl, gdzie jedną z metod jest bankowość elektroniczna.' },
      { q: 'Czy do KSeF zaloguję się mObywatelem?', a: 'Tak, przez login.gov.pl. Aplikacja Mobilna KSeF też potwierdza tożsamość przez węzeł krajowy.' },
      { q: 'Czy KSeF ma własny login i hasło?', a: 'Nie. Logujesz się przez login.gov.pl, certyfikatem kwalifikowanym, a programy tokenem lub certyfikatem KSeF.' },
      { q: 'Jak zalogować się do KSeF jako spółka?', a: 'Pieczęcią kwalifikowaną z NIP spółki albo przez osobę wskazaną w ZAW-FA, która loguje się swoimi danymi w kontekście NIP spółki.' },
      { q: 'Czy ktoś zaloguje się do KSeF, znając mój PESEL?', a: 'Nie. Potrzebny jest środek uwierzytelnienia: login.gov.pl, podpis lub pieczęć kwalifikowana, token albo certyfikat KSeF.' },
    ],
    sources: [SRC.podrecznik1, SRC.apManual, SRC.mobilna, SRC.ponizej, SRC.uwierzytelnienie],
    app: { shot: 'connect', from: 0.355, to: 0.645, text: 'Faktury KSeF loguje się do KSeF tokenem lub certyfikatem KSeF, który generujesz raz w Aplikacji Podatnika. Potem pobiera faktury sama, bez ponownego logowania.' },
    related: ['jak-zaczac-z-ksef', 'token-czy-certyfikat-ksef', 'zaw-fa'],
  },
  {
    slug: 'kody-qr-ksef',
    short: 'Kody QR w KSeF',
    title: 'Kody QR w KSeF: KOD I, KOD II i potwierdzenie transakcji',
    metaTitle: 'Kod QR na fakturze KSeF – KOD I, KOD II, potwierdzenie transakcji',
    description:
      'Kiedy faktura z KSeF musi mieć kod QR, co oznacza napis pod kodem (numer KSeF, OFFLINE, CERTYFIKAT), co zawiera kod i czym jest potwierdzenie transakcji z dwoma kodami QR.',
    lede:
      'Kod QR na fakturze z KSeF łączy jej wydruk lub PDF z oryginałem w systemie. Każdy może go zeskanować i sprawdzić, czy faktura jest w KSeF. Wyjaśniamy, kiedy kod jest obowiązkowy, czym różnią się KOD I i KOD II i do czego służy potwierdzenie transakcji.',
    summary: [
      'Kod QR jest obowiązkowy, gdy faktura z KSeF jest przekazywana lub używana poza systemem, np. jako PDF lub wydruk.',
      'KOD I daje dostęp do faktury i weryfikację danych. Pod nim jest numer KSeF albo, przed dosłaniem faktury offline, napis OFFLINE.',
      'KOD II z napisem CERTYFIKAT występuje tylko na fakturach offline przed dosłaniem i potwierdza tożsamość wystawcy. Wymaga certyfikatu KSeF typu 2.',
      'Potwierdzenie transakcji to dobrowolny dokument z dwoma kodami QR dla faktury, która nie ma jeszcze numeru KSeF. Nie jest fakturą.',
    ],
    keywords: ['kod qr ksef', 'kod qr na fakturze ksef', 'kody qr ksef', 'potwierdzenie transakcji ksef', 'kod weryfikujący ksef', 'kod qr offline ksef'],
    published: '2026-10-15',
    updated: '2026-10-15',
    sections: [
      {
        id: 'kiedy',
        h2: 'Kiedy faktura musi mieć kod QR',
        blocks: [
          { p: 'Co do zasady faktura jest wystawiana i otrzymywana w KSeF i wtedy kod nie jest potrzebny. Obowiązek oznaczenia faktury kodem weryfikującym pojawia się, gdy faktura wychodzi poza system:' },
          {
            ul: [
              'nabywcą jest konsument, podmiot bez NIP, firma zagraniczna bez siedziby lub stałego miejsca działalności w Polsce albo podatnik z innego kraju UE w procedurze SME,',
              'miejsce świadczenia jest za granicą,',
              'fakturą posługujesz się poza KSeF, np. drukujesz ją do rejestracji auta albo wysyłasz PDF.',
            ],
          },
          { p: 'Kod tworzy program, w którym wizualizujesz fakturę. Bezpłatne narzędzia MF dodają go automatycznie. Graficzny kod QR jest zgodny z normą ISO/IEC 18004:2024, a gdy faktura idzie jako dane strukturalne, zamiast kodu przekazuje się link.' },
        ],
      },
      {
        id: 'kod-i-ii',
        h2: 'KOD I i KOD II',
        blocks: [
          { figure: 'kod-qr-napisy' },
          {
            table: {
              head: ['', 'KOD I', 'KOD II'],
              rows: [
                ['Do czego', 'Dostęp do faktury w KSeF i weryfikacja jej danych', 'Potwierdzenie tożsamości wystawcy faktury offline'],
                ['Kiedy', 'Na każdej wizualizacji przekazywanej lub używanej poza KSeF', 'Tylko faktury offline24, niedostępność, awaria, przed dosłaniem do KSeF'],
                ['Napis pod kodem', 'Numer KSeF albo OFFLINE', 'CERTYFIKAT'],
                ['Co zawiera', 'Adres usługi, datę wystawienia (P_1), NIP sprzedawcy, wyróżnik faktury', 'Typ i wartość identyfikatora kontekstu, NIP sprzedawcy, identyfikator certyfikatu KSeF, wyróżnik, podpis certyfikatem'],
                ['Wymaga', 'Nic dodatkowego', 'Certyfikatu KSeF typu 2'],
              ],
              caption: 'Źródło: ksef.podatki.gov.pl, Kody weryfikujące QR (zmodyfikowano 6.02.2026).',
            },
          },
          { p: 'Wyróżnik faktury, potocznie „skrót faktury”, to skrót SHA-256 pliku XML. Dzięki niemu kod wskazuje dokładnie ten dokument: jeśli ktoś zmieni treść, weryfikacja to pokaże. Po dosłaniu faktury offline do KSeF jej kolejne wizualizacje mają już tylko jeden kod, z numerem KSeF.' },
        ],
      },
      {
        id: 'skanowanie',
        h2: 'Co widzisz po zeskanowaniu kodu',
        blocks: [
          {
            ol: [
              'KOD I otwiera stronę MF z podstawowymi danymi faktury: m.in. datą wystawienia, datą nadania numeru KSeF, trybem wystawienia i informacją, czy dokument jest w KSeF i zgadza się z tym, dla którego utworzono kod.',
              'Aby pobrać całą fakturę, podajesz numer faktury, identyfikator nabywcy (lub informację o jego braku) i kwotę należności ogółem.',
              'Fakturę pobierzesz jako XML lub PDF. Po kilku błędnych próbach pobranie danej faktury jest czasowo blokowane.',
              'KOD II pokazuje, czy certyfikat wystawcy istnieje, jest aktywny i czy jego właściciel miał uprawnienia do wystawienia faktury. Danych osobowych właściciela certyfikatu nie zobaczysz.',
            ],
          },
          { p: 'To ta sama droga, którą konsument pobiera fakturę wystawioną dla niego w KSeF. Opisujemy ją w poradniku [faktura dla osoby fizycznej a KSeF](/faktura-dla-osoby-fizycznej-a-ksef).' },
        ],
      },
      {
        id: 'potwierdzenie',
        h2: 'Potwierdzenie transakcji',
        blocks: [
          { p: 'Potwierdzenie transakcji to dokument, który sprzedawca może dobrowolnie wydać nabywcy, gdy faktura nie ma jeszcze numeru KSeF, np. w sklepie czy na stacji paliw. Nie jest fakturą i nie regulują go przepisy, ale MF określiło jego wzór:' },
          {
            ul: [
              'nazwa „potwierdzenie transakcji”,',
              'dane sprzedawcy i nabywcy (nazwa, NIP lub informacja o braku identyfikatora, adres),',
              'numer faktury nadany przez sprzedawcę i kwota należności ogółem,',
              'dwa kody QR: nad pierwszym napis „sprawdź fakturę w KSeF”, nad drugim „zweryfikuj wystawcę faktury”; pod kodami żadnych napisów.',
            ],
          },
          { p: 'Po zeskanowaniu pierwszego kodu nabywca sprawdzi, czy faktura trafiła już do KSeF. Krajowy nabywca z NIP i tak dostanie fakturę w KSeF.' },
        ],
      },
    ],
    faqs: [
      { q: 'Czy każda faktura z KSeF ma kod QR?', a: 'Nie. Kod jest potrzebny, gdy faktura jest przekazywana lub używana poza KSeF. Faktura odebrana w KSeF przez firmę z NIP kodu nie wymaga.' },
      { q: 'Co znaczy napis OFFLINE pod kodem QR?', a: 'Faktura została wystawiona w trybie offline i w chwili tworzenia kodu nie miała numeru KSeF. Po dosłaniu do KSeF będzie dostępna w systemie.' },
      { q: 'Do czego potrzebny jest certyfikat przy kodzie QR?', a: 'Do drugiego kodu, z napisem CERTYFIKAT, na fakturach offline przekazywanych poza KSeF przed ich dosłaniem. Potrzebny jest certyfikat KSeF typu 2.' },
      { q: 'Czy potwierdzenie transakcji jest fakturą?', a: 'Nie. To dobrowolny dokument z dwoma kodami QR, który pozwala sprawdzić, czy faktura trafiła już do KSeF.' },
    ],
    sources: [SRC.kodyQr, SRC.potwierdzenie, SRC.podrecznik2, SRC.apiQr],
    app: { shot: 'invoice', from: 0.37, to: 0.53, text: 'Faktury KSeF tworzy PDF i wydruk z kodem QR i numerem KSeF dla każdej faktury pobranej z KSeF.' },
    related: ['wizualizacja-faktury-ksef', 'jak-znalezc-fakture-w-ksef', 'ksef-tryb-offline'],
  },
  {
    slug: 'oznaczenia-ksef-w-jpk',
    short: 'Oznaczenia KSeF w JPK_VAT',
    title: 'Oznaczenia KSeF w JPK_VAT: numer KSeF, OFF, BFK i DI',
    metaTitle: 'Oznaczenia KSeF w JPK_VAT – OFF, BFK, DI i numer KSeF',
    description:
      'Od 1 lutego 2026 r. w JPK_VAT przy każdej fakturze podaje się numer KSeF albo oznaczenie OFF, BFK lub DI. Kiedy które stosować przy sprzedaży i zakupach, według zestawienia MF.',
    lede:
      'Nowa struktura JPK_VAT z deklaracją wymaga, żeby przy każdym dokumencie w części ewidencyjnej był numer KSeF albo jedno z trzech oznaczeń: OFF, BFK lub DI. Poniżej zasady z zestawienia Ministerstwa Finansów, osobno dla sprzedaży i zakupów, oraz najczęstsze wątpliwości.',
    summary: [
      'Od 1 lutego 2026 r. obowiązuje JPK_V7M(3) i JPK_V7K(3). Numer KSeF wykazuje się w części ewidencyjnej przy sprzedaży i zakupach.',
      'NrKSeF: faktura ma numer KSeF na dzień złożenia JPK, także wystawiona w trybach offline.',
      'OFF: faktura z trybu awarii, która nie ma jeszcze numeru KSeF. Po nadaniu numeru nie trzeba korygować JPK.',
      'BFK: faktura wystawiona poza KSeF, np. z kasy, paragon z NIP, WNT, import usług, sprzed lutego 2026 r.',
      'DI: dowód inny niż faktura oraz faktury offline24 lub z niedostępności bez numeru KSeF.',
    ],
    keywords: ['oznaczenia ksef w jpk', 'oznaczenie di w jpk', 'oznaczenie bfk w jpk', 'oznaczenie off jpk', 'numer ksef w jpk vat od kiedy', 'ksef a jpk vat'],
    published: '2026-10-15',
    updated: '2026-10-15',
    sections: [
      {
        id: 'zasada',
        h2: 'Zasada: numer KSeF albo oznaczenie',
        blocks: [
          { p: 'Od 1 lutego 2026 r. podatnicy składają JPK_VAT z deklaracją w nowej strukturze: JPK_V7M(3) lub JPK_V7K(3). W części ewidencyjnej, w polu z danymi o występowaniu faktur w KSeF, przy każdym zapisie sprzedaży i zakupu podaje się numer KSeF faktury albo jedno z oznaczeń: OFF, BFK lub DI.' },
          { figure: 'jpk-oznaczenia' },
          { p: 'Jak zbudowany jest sam numer KSeF i gdzie go znaleźć, opisujemy w poradniku [numer KSeF](/numer-ksef).' },
        ],
      },
      {
        id: 'sprzedaz',
        h2: 'Oznaczenia w ewidencji sprzedaży',
        blocks: [
          {
            table: {
              head: ['Oznaczenie', 'Kiedy stosować'],
              rows: [
                ['NrKSeF', 'Faktura wystawiona w KSeF ma numer KSeF na dzień złożenia JPK. Dotyczy też faktur z trybów offline24, awarii i niedostępności, jeśli zostały już dosłane.'],
                ['OFF', 'Faktura wystawiona w trybie awarii (art. 106nf), która na dzień złożenia ewidencji nie ma numeru KSeF. Po nadaniu numeru nie trzeba korygować JPK.'],
                ['BFK', 'Faktura wystawiona poza KSeF: w czasie awarii całkowitej; przed 1 lutego 2026 r., a wykazana w JPK za okres od lutego 2026 r.; w lutym lub marcu 2026 r. przez podatników z obowiązkiem od 1 kwietnia; w 2026 r. przez podatników bez obowiązku KSeF; przy uldze na złe długi; przy WNT, imporcie usług, imporcie towarów z art. 33a i dostawach z art. 17 ust. 1 pkt 5.'],
                ['DI', 'Dowód inny niż faktura (np. dowód wewnętrzny, zbiorczy raport z kas) oraz faktury offline24 i z niedostępności, które na dzień przesłania ewidencji nie mają numeru KSeF.'],
              ],
              caption: 'Źródło: MF, „JPK_VAT z deklaracją – stosowanie znaczników” (zestawienie przypadków – sprzedaż).',
            },
          },
          { note: 'Faktura offline24 lub z niedostępności oznaczona DI i przekazana nabywcy poza KSeF: po uzyskaniu numeru KSeF należy skorygować oznaczenie w ewidencji na numer KSeF.' },
        ],
      },
      {
        id: 'zakupy',
        h2: 'Oznaczenia w ewidencji zakupów',
        blocks: [
          {
            table: {
              head: ['Oznaczenie', 'Kiedy stosować'],
              rows: [
                ['NrKSeF', 'Faktura zakupowa ma numer KSeF na dzień złożenia JPK.'],
                ['OFF', 'Faktura wystawiona przez sprzedawcę w trybie awarii, bez numeru KSeF na dzień złożenia ewidencji. Korekta JPK po nadaniu numeru nie jest wymagana.'],
                ['BFK', 'Faktura otrzymana poza KSeF: z kasy rejestrującej, paragon z NIP uznany za fakturę (oba do 31.12.2026), przy uldze na złe długi, WNT, imporcie usług i towarów, dostawach z art. 17 ust. 1 pkt 5.'],
                ['DI', 'Pozostałe dokumenty bez numeru KSeF i bez BFK lub OFF, m.in. faktury offline24 i z niedostępności bez numeru, dowody inne niż faktura przy WNT i imporcie, faktury VAT RR wystawione poza KSeF.'],
              ],
              caption: 'Źródło: MF, „JPK_VAT z deklaracją – stosowanie znaczników” (zestawienie przypadków – zakupy).',
            },
          },
          { p: 'W praktyce oznaczenie zakupu zależy od tego, jak sprzedawca wystawił fakturę. Dlatego przed zamknięciem miesiąca warto mieć listę faktur kosztowych z numerami KSeF, a przy fakturach bez numeru informację, z jakiego trybu pochodzą.' },
        ],
      },
      {
        id: 'watpliwosci',
        h2: 'Najczęstsze wątpliwości',
        blocks: [
          {
            ul: [
              'Faktura offline dostała numer KSeF przed złożeniem JPK: podajesz numer KSeF, nie OFF ani DI.',
              'Faktura z awarii dostała numer po złożeniu JPK: zostaje OFF, korekta nie jest wymagana.',
              'Paragon z NIP do 450 zł w 2026 r.: BFK po stronie zakupów. Od 2027 r. faktury dla firm będą w KSeF.',
              'Faktura z KSeF, ale numer nieznany przy księgowaniu: numer jest w Aplikacji Podatnika, pod kodem QR wizualizacji i w programie, który pobiera faktury.',
            ],
          },
          { p: 'Tryby offline i awarii, od których zależą OFF i DI, opisujemy w poradniku [KSeF tryb offline](/ksef-tryb-offline).' },
        ],
      },
    ],
    faqs: [
      { q: 'Od kiedy numer KSeF w JPK_VAT?', a: 'Od 1 lutego 2026 r., w nowej strukturze JPK_V7M(3) i JPK_V7K(3), w części ewidencyjnej przy sprzedaży i zakupach.' },
      { q: 'Kiedy stosować oznaczenie BFK?', a: 'Dla faktur wystawionych poza KSeF, np. z kas rejestrujących, paragonów z NIP, faktur sprzed lutego 2026 r., WNT i importu usług.' },
      { q: 'Kiedy stosować oznaczenie DI?', a: 'Dla dowodów innych niż faktura oraz faktur offline24 i z niedostępności KSeF, które nie mają jeszcze numeru KSeF w dniu przesłania ewidencji.' },
      { q: 'Czy po nadaniu numeru KSeF trzeba korygować JPK z oznaczeniem OFF?', a: 'Nie. MF wskazuje, że przy OFF korekta ewidencji po nadaniu numeru nie jest wymagana.' },
    ],
    sources: [SRC.jpkZnaczniki, SRC.numer, SRC.niedostepnosc, SRC.awaryjny],
    app: { shot: 'export', from: 0.36, to: 0.8, text: 'Zestawienie CSV z Faktury KSeF ma osobną kolumnę „Numer KSeF” przy każdej fakturze, więc księgowa ma numery do JPK w jednym pliku.' },
    related: ['numer-ksef', 'ksef-tryb-offline', 'uprawnienia-ksef-dla-ksiegowej'],
  },
  {
    slug: 'rolnik-ryczaltowy-a-ksef',
    short: 'Rolnik ryczałtowy a KSeF',
    title: 'Rolnik ryczałtowy a KSeF: faktury VAT RR w KSeF',
    metaTitle: 'Rolnik ryczałtowy a KSeF – faktura VAT RR w KSeF',
    description:
      'Od 1 kwietnia 2026 r. faktury VAT RR można wystawiać w KSeF, jeśli rolnik ryczałtowy wskaże nabywcę. Jak to działa, kto wystawia, struktura FA_RR(1), daty i dostęp rolnika do faktury.',
    lede:
      'Rolnik ryczałtowy zwykle nie wystawia faktur: fakturę VAT RR za zakup produktów rolnych wystawia nabywca. Od 1 kwietnia 2026 r. może to robić w KSeF, ale tylko gdy rolnik się na to zgodzi i wskaże go w systemie. Poniżej zasady według Ministerstwa Finansów.',
    summary: [
      'Faktury VAT RR w KSeF są dobrowolne od 1 kwietnia 2026 r. Decyduje rolnik ryczałtowy.',
      'Rolnik z NIP wskazuje w KSeF nabywcę jako uprawnionego i składa oświadczenie o statusie rolnika ryczałtowego.',
      'Od wskazania do jego odwołania nabywca musi wystawiać faktury VAT RR w KSeF, w strukturze FA_RR(1), z wyjątkiem awarii i niedostępności KSeF.',
      'Rolnik otrzymuje fakturę w KSeF w dniu nadania numeru KSeF. Bez wskazania faktury VAT RR wystawia się poza KSeF, jak dotąd.',
      'Rolnik będący czynnym podatnikiem VAT wystawia zwykłe faktury w KSeF jak każda firma.',
    ],
    keywords: ['rolnik ryczałtowy a ksef', 'faktura rr a ksef', 'ksef a rolnik ryczałtowy', 'faktura vat rr ksef', 'faktura rr ksef', 'ksef rolnik'],
    published: '2026-10-15',
    updated: '2026-10-15',
    sections: [
      {
        id: 'jak-dziala',
        h2: 'Jak działa faktura VAT RR w KSeF',
        blocks: [
          { figure: 'vat-rr-ksef' },
          { p: 'Fakturę VAT RR wystawia nabywca produktów rolnych lub usług rolniczych, czyli czynny podatnik VAT, np. skup czy zakład przetwórczy. W KSeF może to robić tylko wtedy, gdy rolnik ryczałtowy wskaże go w systemie jako uprawnionego. Jeśli rolnik tego nie zrobi, faktury VAT RR są wystawiane poza KSeF.' },
          { note: 'Wskazanie działa do odwołania. Dopóki rolnik go nie odwoła, nabywca jest obowiązany wystawiać mu faktury VAT RR i VAT RR KOREKTA w KSeF. Obowiązek nie dotyczy okresów ogłoszonej awarii, awarii całkowitej i niedostępności KSeF.' },
        ],
      },
      {
        id: 'rolnik',
        h2: 'Co musi zrobić rolnik',
        blocks: [
          {
            ol: [
              'Mieć NIP. To warunek konieczny, żeby zalogować się do KSeF i wskazać nabywcę.',
              'Zalogować się do Aplikacji Podatnika KSeF 2.0, np. przez login.gov.pl (także mObywatelem) albo podpisem kwalifikowanym. Jako osoba z NIP ma uprawnienia właścicielskie automatycznie.',
              'Nadać nabywcy uprawnienie do wystawiania faktur VAT RR i VAT RR KOREKTA (to jedno uprawnienie) i zaakceptować oświadczenie, że jest rolnikiem ryczałtowym korzystającym ze zwolnienia z art. 43 ust. 1 pkt 3 ustawy o VAT.',
              'W razie potrzeby odwołać wskazanie, także w KSeF.',
            ],
          },
          { p: 'Logowanie opisujemy w poradniku [logowanie do KSeF](/logowanie-do-ksef). Rolnik może też nadać komuś uprawnienie do zarządzania uprawnieniami w jego imieniu.' },
        ],
      },
      {
        id: 'nabywca',
        h2: 'Co musi wiedzieć nabywca',
        blocks: [
          {
            ul: [
              'Faktury VAT RR wystawia w strukturze FA_RR(1), np. w Aplikacji Podatnika KSeF 2.0 lub w programie zintegrowanym z API KSeF 2.0.',
              'Pracownik lub biuro rachunkowe z uprawnieniem do wystawiania faktur nabywcy może wystawiać też jego faktury VAT RR. Nie trzeba osobnego uprawnienia.',
              'Tryb online: datą wystawienia jest dzień przesłania do KSeF (gdy zgadza się z datą w polu P_4B), datą otrzymania przez rolnika dzień nadania numeru KSeF.',
              'Tryb offline24: fakturę trzeba przesłać najpóźniej następnego dnia roboczego. Datą wystawienia jest data z pola P_4B.',
              'Faktury VAT RR w KSeF są przechowywane w systemie, tak jak inne faktury.',
            ],
          },
          { p: 'Uprawnienia dla pracowników i biura opisujemy w poradniku [uprawnienia KSeF dla księgowej](/uprawnienia-ksef-dla-ksiegowej).' },
        ],
      },
      {
        id: 'dostep-rolnika',
        h2: 'Jak rolnik zobaczy swoją fakturę',
        blocks: [
          { p: 'Rolnik otrzymuje fakturę VAT RR w KSeF i zobaczy ją po zalogowaniu. Gdy nabywca posługuje się fakturą poza KSeF, ma ona kod QR z numerem KSeF. Po zeskanowaniu rolnik podaje numer faktury, NIP nabywcy i kwotę należności ogółem, i pobiera fakturę bez logowania. Możliwy jest też dostęp anonimowy, opisany w poradniku [jak znaleźć fakturę w KSeF](/jak-znalezc-fakture-w-ksef).' },
        ],
      },
      {
        id: 'jpk-i-vat',
        h2: 'Rolnik czynny podatnik VAT i JPK',
        blocks: [
          {
            ul: [
              'Rolnik, który jest czynnym podatnikiem VAT i sprzedaje firmom, wystawia zwykłe faktury w KSeF od 1 kwietnia 2026 r., jak każdy podatnik.',
              'Rolnicy ryczałtowi zwolnieni z wystawiania faktur (art. 117 ustawy o VAT) mogą wystawiać rachunki, które nie trafiają do KSeF.',
              'Nabywca, który ujmuje w JPK_VAT fakturę VAT RR wystawioną poza KSeF, stosuje oznaczenie DI. Szczegóły w poradniku [oznaczenia KSeF w JPK_VAT](/oznaczenia-ksef-w-jpk).',
            ],
          },
        ],
      },
    ],
    faqs: [
      { q: 'Czy rolnik ryczałtowy musi korzystać z KSeF?', a: 'Nie musi wystawiać faktur w KSeF. Od 1 kwietnia 2026 r. może zgodzić się, żeby nabywca wystawiał mu faktury VAT RR w KSeF, wskazując go w systemie.' },
      { q: 'Kto wystawia fakturę VAT RR w KSeF?', a: 'Nabywca produktów rolnych (czynny podatnik VAT) wskazany przez rolnika, albo jego pracownik lub biuro z uprawnieniem do wystawiania faktur.' },
      { q: 'Czy rolnik potrzebuje NIP do KSeF?', a: 'Tak. Bez NIP rolnik nie zaloguje się do KSeF i nie wskaże nabywcy.' },
      { q: 'W jakiej strukturze wystawia się fakturę VAT RR w KSeF?', a: 'W strukturze logicznej FA_RR(1).' },
      { q: 'Co jeśli KSeF ma awarię?', a: 'W czasie ogłoszonej awarii, awarii całkowitej lub niedostępności KSeF obowiązek wystawiania faktur VAT RR w KSeF nie obowiązuje.' },
    ],
    sources: [SRC.podrecznik3, SRC.rolnik, SRC.zakres, SRC.jpkZnaczniki],
    app: { shot: 'invoices', from: 0.13, to: 0.6, text: 'Faktury KSeF pobiera faktury, które przychodzą na Twój NIP w KSeF, i pokazuje je na telefonie razem z terminami płatności.' },
    related: ['kto-nie-musi-korzystac-z-ksef', 'logowanie-do-ksef', 'oznaczenia-ksef-w-jpk'],
  },
  {
    slug: 'ksef-dla-jdg-2027',
    short: 'KSeF dla JDG od 2027',
    title: 'KSeF dla JDG i małych firm od 1 stycznia 2027 r.',
    metaTitle: 'KSeF dla JDG od 2027 – limit 10 000 zł, paragony z NIP, kary',
    description:
      'Od 1 stycznia 2027 r. KSeF obejmuje najmniejsze firmy: koniec limitu 10 000 zł i wyjątku dla kas, numer KSeF w przelewach. Co musi zrobić JDG do końca 2026 r. i co z karami.',
    lede:
      'Jeśli prowadzisz jednoosobową działalność i wystawiasz faktury na niewielkie kwoty, do końca 2026 r. możesz jeszcze robić to poza KSeF. Od 1 stycznia 2027 r. to się kończy. Poniżej, kogo dotyczy zmiana, co dokładnie się zmienia i lista rzeczy do zrobienia przed końcem roku.',
    summary: [
      'Forma prawna nie ma znaczenia: JDG podlega KSeF tak samo jak spółka. Faktury od kontrahentów odbiera przez KSeF od 1 lutego 2026 r.',
      'Do 31 grudnia 2026 r. można wystawiać faktury poza KSeF, jeśli ich wartość brutto nie przekracza 10 000 zł w miesiącu. Od 1 stycznia 2027 r. ten limit znika.',
      'Do końca 2026 r. poza KSeF są też faktury z kas rejestrujących i paragony z NIP do 450 zł. Od 2027 r. faktury wystawia się w KSeF.',
      'Od 1 stycznia 2027 r. w przelewach między czynnymi podatnikami VAT trzeba podawać numer KSeF.',
      'Kary według obecnej ustawy obowiązują od 1 stycznia 2027 r. Rządowy projekt przesuwa je na 2028 r., ale do publikacji w Dzienniku Ustaw nie jest prawem.',
    ],
    keywords: ['ksef dla jdg', 'od kiedy ksef dla jdg', 'ksef od kiedy dla małych firm', 'ksef 2027', 'ksef przesunięcie terminu 2027', 'paragon z nip a ksef', 'ksef dla kogo'],
    published: '2026-10-15',
    updated: '2026-10-15',
    sections: [
      {
        id: 'kogo-dotyczy',
        h2: 'Kogo dotyczy termin 1 stycznia 2027 r.',
        blocks: [
          { p: 'Termin 1 stycznia 2027 r. dotyczy podatników, którzy do końca 2026 r. korzystają z któregoś z wyjątków przejściowych. Ministerstwo Finansów opisuje ich jako najmniejsze firmy, ze sprzedażą dokumentowaną fakturami do 10 000 zł miesięcznie. Wszyscy pozostali wystawiają faktury w KSeF od 1 lutego 2026 r. (sprzedaż w 2024 r. ponad 200 mln zł) albo od 1 kwietnia 2026 r. Pełny harmonogram jest w poradniku [KSeF od kiedy](/ksef-od-kiedy).' },
          {
            ul: [
              'Forma prawna nie ma znaczenia. Obowiązek dotyczy podatników VAT czynnych i zwolnionych, w tym JDG.',
              'Osoba prywatna, która wynajmuje lokal firmie, jest dla VAT podatnikiem i też podlega KSeF. W KSeF nie wystawi się faktury bez NIP sprzedawcy.',
              'Rachunki za czynności niepodlegające VAT nie są objęte KSeF.',
              'Faktury dla konsumentów (B2C) w KSeF są dobrowolne, także po 2026 r. Pełną listę wyłączeń znajdziesz w poradniku [kto nie musi korzystać z KSeF](/kto-nie-musi-korzystac-z-ksef).',
            ],
          },
        ],
      },
      {
        id: 'limit',
        h2: 'Limit 10 000 zł do końca 2026 r.: jak go liczyć',
        blocks: [
          { p: 'Do 31 grudnia 2026 r. możesz wystawiać faktury poza KSeF (papierowe lub elektroniczne), jeśli w danym miesiącu łączna wartość brutto tych faktur nie przekracza 10 000 zł. Zasady według MF:' },
          {
            ul: [
              'Liczy się suma brutto, czyli z VAT, faktur, które co do zasady trzeba wystawiać w KSeF.',
              'Nie wlicza się faktur dla konsumentów, faktur z kas rejestrujących ani paragonów z NIP do 450 zł uznanych za faktury uproszczone.',
              'Fakturę przypisujesz do miesiąca według daty wystawienia, nie daty sprzedaży.',
              'Fakturę, którą przekraczasz limit, i wszystkie kolejne wystawiasz już w KSeF. Spadek sprzedaży w następnym miesiącu nie przywraca wyjątku.',
            ],
          },
          { note: 'Przykład MF: kwiaciarka wystawia trzy faktury miesięcznie po 1 500–2 500 zł. W 2026 r. może to robić poza KSeF. Od 1 stycznia 2027 r. musi w KSeF.' },
        ],
      },
      {
        id: 'co-sie-zmienia',
        h2: 'Co zmienia się 1 stycznia 2027 r.',
        blocks: [
          { figure: 'jdg-2026-2027' },
          {
            table: {
              head: ['Sprawa', 'Do 31.12.2026', 'Od 1.01.2027'],
              rows: [
                ['Faktury do 10 000 zł brutto miesięcznie', 'Mogą być poza KSeF', 'W KSeF'],
                ['Faktury z kas rejestrujących, paragony z NIP do 450 zł', 'Poza KSeF', 'Faktury wystawia się w KSeF'],
                ['Numer KSeF w przelewie między czynnymi podatnikami VAT', 'Nie trzeba', 'Obowiązkowo (też w podzielonej płatności)'],
                ['Kary z art. 106ni ustawy o VAT', 'Nie stosuje się', 'Według obowiązującej ustawy tak; projekt przesuwa je na 1.01.2028'],
                ['Odbieranie faktur przez KSeF', 'Obowiązkowe od 1.02.2026', 'Bez zmian'],
              ],
              caption: 'Źródła: ksef.podatki.gov.pl (Pytania i odpowiedzi, Poniżej 10 000 zł), stan na 15.10.2026.',
            },
          },
          { p: 'Numer KSeF w przelewie opisujemy dokładniej w poradniku [numer KSeF](/numer-ksef).' },
        ],
      },
      {
        id: 'kary-2028',
        h2: 'Czy KSeF przesunięto na 2028 r.?',
        blocks: [
          { p: 'Nie, sam obowiązek nie jest przesuwany. W komunikacie z 16 września 2026 r. Ministerstwo Finansów zapowiedziało wydłużenie okresu bez kar do 31 grudnia 2027 r., a projekt nowelizacji ustawy o VAT (UD477) przesuwa stosowanie kar z art. 106ni na 1 stycznia 2028 r. Uwagi do projektu można było zgłaszać do 30 września 2026 r. Projekt musi jeszcze przyjąć Rada Ministrów, uchwalić Sejm i Senat, podpisać Prezydent, a na końcu musi zostać opublikowany.' },
          { note: 'Stan na 15 października 2026 r.: projekt nie jest jeszcze prawem. Obowiązek wystawiania faktur w KSeF od 1 stycznia 2027 r. pozostaje bez zmian niezależnie od losu projektu.' },
        ],
      },
      {
        id: 'lista-na-grudzien',
        h2: 'Lista do zrobienia przed 1 stycznia 2027 r.',
        blocks: [
          {
            ol: [
              'Wybierz narzędzie do wystawiania faktur: bezpłatne narzędzia MF (Aplikacja Podatnika KSeF, Aplikacja Mobilna KSeF, e-mikrofirma) albo program zintegrowany z KSeF 2.0.',
              'Sprawdź logowanie: jako JDG masz dostęp automatycznie i logujesz się przez login.gov.pl (Profil Zaufany, mObywatel, bankowość, e-dowód) albo podpisem kwalifikowanym. Jeśli program tego wymaga, wygeneruj token lub [certyfikat KSeF](/certyfikat-ksef).',
              'Przećwicz wystawienie faktury na fikcyjnych danych w [wersji testowej lub demo KSeF](/ksef-demo-i-wersja-testowa).',
              'Jeśli wystawiasz faktury przy kasie, ustal z dostawcą programu, jak od 2027 r. wystawisz fakturę do paragonu w KSeF. Zobacz [paragon z NIP a KSeF](/faktura-dla-osoby-fizycznej-a-ksef).',
              'Ustal z księgową, czy dostanie uprawnienia w KSeF, czy przekażesz jej faktury sam. Zobacz [uprawnienia KSeF dla księgowej](/uprawnienia-ksef-dla-ksiegowej).',
              'Przygotuj płatności: od stycznia w tytule przelewu do firmy podajesz numer KSeF faktury.',
              'Już teraz regularnie sprawdzaj faktury kosztowe w KSeF. Opisujemy to w poradniku [odbieranie faktur z KSeF](/odbieranie-faktur-z-ksef).',
            ],
          },
        ],
      },
    ],
    faqs: [
      { q: 'Od kiedy KSeF dla JDG?', a: 'Odbieranie faktur od 1 lutego 2026 r. Wystawianie od 1 kwietnia 2026 r., a przy sprzedaży fakturowej do 10 000 zł brutto miesięcznie najpóźniej od 1 stycznia 2027 r.' },
      { q: 'Czy KSeF został przesunięty na 2027 lub 2028 r.?', a: 'Obowiązek nie. Rządowy projekt przesuwa na 1 stycznia 2028 r. tylko kary, a do publikacji w Dzienniku Ustaw obowiązuje termin 1 stycznia 2027 r.' },
      { q: 'Czy paragon z NIP po 2026 r. nadal wystarczy?', a: 'Według MF paragony z NIP do 450 zł są wyłączone z KSeF do 31 grudnia 2026 r. Po tym okresie wszystkie faktury wystawia się przy użyciu KSeF.' },
      { q: 'Czy faktury dla osób prywatnych trzeba wystawiać w KSeF?', a: 'Nie. Faktury dla konsumentów w KSeF są dobrowolne, także po 2026 r.' },
      { q: 'Czy JDG potrzebuje płatnego programu do KSeF?', a: 'Nie. MF udostępnia bezpłatnie Aplikację Podatnika KSeF, Aplikację Mobilną KSeF i e-mikrofirmę.' },
    ],
    sources: [SRC.ponizej, SRC.pytania, SRC.jdg, SRC.jdgKrok, SRC.etapy, SRC.karyGp],
    app: { shot: 'start', from: 0.17, to: 0.44, text: 'Wystawiać faktury w KSeF musisz od 2027 r., ale faktury kosztowe przychodzą przez KSeF już dziś. Faktury KSeF pobiera je na telefon i pokazuje, co jest do zapłaty.' },
    related: ['ksef-od-kiedy', 'odbieranie-faktur-z-ksef', 'certyfikat-ksef'],
  },
  {
    slug: 'ksef-nie-dziala',
    short: 'KSeF nie działa',
    title: 'KSeF nie działa? Awaria, przerwa techniczna i co wtedy zrobić',
    metaTitle: 'KSeF nie działa? Awaria, przerwa techniczna, logowanie',
    description:
      'Gdy KSeF nie działa: jak sprawdzić, czy to awaria KSeF, Profilu Zaufanego czy Aplikacji Podatnika, gdzie MF ogłasza przerwy i jak wystawiać faktury w trybie offline i awaryjnym.',
    lede:
      'Komunikat o błędzie nie zawsze oznacza awarię KSeF. Często nie działa logowanie przez login.gov.pl albo sama Aplikacja Podatnika, a system przyjmuje faktury z programów. Poniżej, jak to rozróżnić, gdzie sprawdzić komunikaty MF i co zrobić z fakturami.',
    summary: [
      'Najpierw sprawdź komunikaty techniczne na ksef.podatki.gov.pl. MF ogłasza tam przerwy i utrudnienia, także w Profilu Zaufanym.',
      'Czy KSeF odpowiada w tej chwili, zobaczysz na stronie [status KSeF](/status-ksef): pomiar co 5 minut, tylko zmierzone dane.',
      'Gdy nie działa Profil Zaufany, wybierz w login.gov.pl inną metodę (np. mObywatel lub bankowość), zaloguj się podpisem kwalifikowanym albo w programie tokenem lub certyfikatem KSeF.',
      'Przy ogłoszonej niedostępności KSeF wystawiasz faktury offline i dosyłasz je najpóźniej następnego dnia roboczego. Przy ogłoszonej awarii masz 7 dni roboczych.',
      'Przy awarii całkowitej, ogłoszonej w mediach, faktury wystawia się papierowo lub elektronicznie i nie dosyła do KSeF.',
      'Infolinia KAS w sprawie KSeF (dni robocze 8:00–18:00): 801 055 055 z telefonów stacjonarnych, 22 330 03 30 z komórek i z zagranicy.',
    ],
    keywords: ['ksef nie działa', 'awaria ksef', 'ksef awaria', 'ksef problemy', 'ksef problem z logowaniem', 'ksef przerwa techniczna', 'awaria ksef dzisiaj', 'czy ksef działa'],
    published: '2026-10-15',
    updated: '2026-10-15',
    sections: [
      {
        id: 'co-nie-dziala',
        h2: 'Najpierw ustal, co dokładnie nie działa',
        blocks: [
          { figure: 'ksef-nie-dziala-diagnoza' },
          {
            table: {
              head: ['Objaw', 'Prawdopodobna przyczyna', 'Co zrobić'],
              rows: [
                ['Nie da się zalogować przez Profil Zaufany lub mObywatel', 'Utrudnienia w Profilu Zaufanym lub węźle krajowym (login.gov.pl)', 'Zaloguj się podpisem kwalifikowanym albo użyj programu z tokenem lub certyfikatem KSeF'],
                ['Aplikacja Podatnika nie ładuje się lub zwraca błędy', 'Problem samej aplikacji MF', 'Program zintegrowany z API KSeF może działać normalnie'],
                ['Wolno ładują się listy faktur, pobieranie się nie udaje', 'Zapowiedziane prace lub utrudnienia w pobieraniu', 'Spróbuj po zakończeniu prac; wysyłka faktur zwykle działa'],
                ['Faktura jest odrzucana z kodem błędu', 'Błąd w pliku XML, uprawnieniach lub duplikat numeru', 'To nie awaria; popraw fakturę i wyślij nowy plik'],
                ['Nic nie działa, komunikat MF o awarii', 'Ogłoszona awaria KSeF', 'Wystawiaj w trybie awaryjnym (niżej)'],
              ],
            },
          },
          { p: 'Przykłady z ostatnich tygodni: 25 września 2026 r. MF informowało o utrudnieniach w Aplikacji Podatnika KSeF 2.0. 13 października 2026 r. zapowiedziało możliwe utrudnienia w pobieraniu faktur przez API w nocy z 16 na 17 października (22:00–3:00), przy normalnie działającej wysyłce faktur.' },
        ],
      },
      {
        id: 'gdzie-sprawdzic',
        h2: 'Gdzie sprawdzić, czy KSeF działa',
        blocks: [
          {
            ul: [
              'Komunikaty techniczne na ksef.podatki.gov.pl: przerwy serwisowe, utrudnienia, przywrócenie działania, także Profilu Zaufanego.',
              'BIP Ministerstwa Finansów i komunikaty w programach zintegrowanych z KSeF: tam ogłaszana jest formalnie niedostępność i awaria KSeF, od których zależą tryby offline.',
              'Infolinia KAS w dni robocze 8:00–18:00: 801 055 055 z telefonów stacjonarnych, 22 330 03 30 z komórek i z zagranicy. MF udostępnia też formularz kontaktowy i czat.',
            ],
          },
          { p: 'Jeśli korzystasz ze środowiska testowego lub demo, pamiętaj, że od 1 października 2025 r. MF może prowadzić tam codzienne prace serwisowe między 16:00 a 18:00. Nie dotyczy to wersji produkcyjnej.' },
        ],
      },
      {
        id: 'tryby',
        h2: 'Wystawianie faktur, gdy KSeF nie działa',
        blocks: [
          { p: 'Prawo przewiduje kilka trybów. Różnią się tym, kto i gdzie ogłasza problem, oraz terminem dosłania faktury:' },
          { figure: 'ksef-tryby-offline' },
          {
            table: {
              head: ['Tryb', 'Kiedy', 'Termin dosłania do KSeF'],
              rows: [
                ['Offline24 (art. 106nda)', 'Zawsze, np. przy problemach z internetem', 'Najpóźniej następnego dnia roboczego'],
                ['Offline – niedostępność KSeF (art. 106nh)', 'Niedostępność ogłoszona w BIP MF, np. prace serwisowe', 'Najpóźniej następnego dnia roboczego po jej zakończeniu'],
                ['Tryb awaryjny (art. 106nf)', 'Awaria ogłoszona w BIP MF i w oprogramowaniu interfejsowym', 'W ciągu 7 dni roboczych od zakończenia awarii'],
                ['Awaria całkowita (art. 106ng)', 'Awaria ogłoszona w środkach masowego przekazu', 'Nie dosyła się; faktura papierowa lub elektroniczna'],
              ],
              caption: 'Źródło: ksef.podatki.gov.pl, Tryb offline – niedostępność KSeF, Tryb awaryjny, Awaria całkowita.',
            },
          },
          {
            ul: [
              'W trybach offline fakturę wystawiasz elektronicznie, w strukturze FA(3).',
              'Jeśli przekazujesz ją poza KSeF przed dosłaniem, potrzebne są dwa kody QR: OFFLINE i CERTYFIKAT. Do drugiego kodu potrzebny jest [certyfikat KSeF](/certyfikat-ksef) typu 2.',
              'Krajowemu nabywcy z NIP możesz zamiast tego wydać potwierdzenie transakcji z dwoma kodami QR.',
              'Jeśli w czasie niedostępności zostanie ogłoszona awaria, termin wydłuża się do 7 dni roboczych, a przy awarii całkowitej faktur się nie dosyła.',
            ],
          },
          { p: 'Szczegóły każdego trybu opisujemy w poradniku [KSeF tryb offline](/ksef-tryb-offline).' },
        ],
      },
      {
        id: 'odbiorca',
        h2: 'Gdy KSeF nie działa, a czekasz na fakturę',
        blocks: [
          { p: 'Jako nabywca nie musisz nic robić: faktura pojawi się w KSeF po dosłaniu przez sprzedawcę. Datą otrzymania jest wtedy co do zasady dzień nadania numeru KSeF. Przy trybie awaryjnym liczy się dzień faktycznego otrzymania faktury (np. PDF), a jeśli nastąpiło ono później niż nadanie numeru KSeF, dzień nadania numeru. U konsumenta lub kontrahenta zagranicznego, któremu przekazano fakturę poza KSeF, zawsze liczy się faktyczne otrzymanie. Przy awarii całkowitej faktura w ogóle nie trafia do KSeF i liczy się faktyczne otrzymanie.' },
          { p: 'Faktury pobrane wcześniej masz u siebie: w programie, w pobranych plikach XML lub PDF. Dlatego warto pobierać faktury na bieżąco, a nie dopiero przed zapłatą. Zobacz [jak pobrać fakturę z KSeF](/jak-pobrac-fakture-z-ksef).' },
        ],
      },
    ],
    faqs: [
      { q: 'Jak sprawdzić, czy KSeF ma dziś awarię?', a: 'Zajrzyj do komunikatów technicznych na ksef.podatki.gov.pl i do BIP Ministerstwa Finansów. Formalnie ogłoszona niedostępność lub awaria pojawia się też w programach zintegrowanych z KSeF.' },
      { q: 'Co zrobić, gdy nie działa logowanie Profilem Zaufanym?', a: 'Wybierz w login.gov.pl inną metodę, np. mObywatel lub bankowość elektroniczną, albo zaloguj się podpisem kwalifikowanym lub programem z tokenem albo certyfikatem KSeF. Utrudnienia Profilu Zaufanego MF ogłasza w komunikatach technicznych.' },
      { q: 'Ile mam czasu na dosłanie faktur po awarii KSeF?', a: 'Przy ogłoszonej awarii 7 dni roboczych od jej zakończenia. Przy ogłoszonej niedostępności i w trybie offline24 do następnego dnia roboczego.' },
      { q: 'Czy w czasie awarii mogę wystawić fakturę papierową?', a: 'Tylko przy awarii całkowitej ogłoszonej w mediach. W pozostałych trybach fakturę wystawia się elektronicznie w FA(3) i dosyła do KSeF.' },
    ],
    sources: [SRC.komunikaty, SRC.utrudnienia1310, SRC.niedostepnosc, SRC.awaryjny, SRC.awariaCalkowita, SRC.offline24, SRC.kontakt, SRC.apTest],
    app: { shot: 'invoices', from: 0.13, to: 0.6, text: 'Faktury pobrane przez Faktury KSeF są zapisane na telefonie. Gdy KSeF lub Aplikacja Podatnika chwilowo nie działa, nadal je przeszukasz, otworzysz i wyślesz księgowej.' },
    related: ['ksef-tryb-offline', 'certyfikat-ksef', 'odbieranie-faktur-z-ksef'],
  },
  {
    slug: 'aplikacje-mobilne-ksef',
    short: 'Aplikacje mobilne KSeF',
    title: 'Aplikacja mobilna KSeF: jaką wybrać na telefon?',
    metaTitle: 'Aplikacja mobilna KSeF – porównanie aplikacji na telefon',
    description:
      'Aplikacja mobilna KSeF na telefon: co potrafi bezpłatna aplikacja Ministerstwa Finansów, czym różnią się aplikacje od programów księgowych i kiedy wybrać aplikację do odbierania faktur.',
    lede:
      'Do KSeF możesz zajrzeć z telefonu na kilka sposobów: oficjalną aplikacją MF, aplikacją swojego programu do faktur albo aplikacją skupioną na odbieraniu faktur. Poniżej, co każda z nich robi według źródeł i jak wybrać pod to, czego potrzebujesz.',
    summary: [
      'Ministerstwo Finansów udostępnia bezpłatną Aplikację mobilną KSeF na iOS i Androida. Pozwala wystawiać faktury i korekty oraz wyszukiwać, przeglądać, pobierać i udostępniać faktury.',
      'Logujesz się do niej biometrią lub PIN-em, a tożsamość potwierdzasz przez mObywatela, mojeID, e-dowód albo Profil Zaufany. Działa tylko w środowisku produkcyjnym.',
      'Aplikacje programów księgowych i fakturowych obejmują zwykle funkcje tego programu. Zakres sprawdź u dostawcy.',
      'Aplikacja skupiona na odbieraniu faktur, jak Faktury KSeF, nie wystawia faktur. Pobiera faktury kosztowe, pokazuje terminy płatności i przygotowuje paczkę dla księgowej.',
    ],
    keywords: ['aplikacja mobilna ksef', 'aplikacja ksef na telefon', 'ksef na telefon', 'aplikacja ksef', 'aplikacja do ksef', 'jaka aplikacja do ksef', 'aplikacja mobilna ksef 2.0'],
    published: '2026-10-16',
    updated: '2026-10-16',
    sections: [
      {
        id: 'rodzaje',
        h2: 'Trzy rodzaje aplikacji KSeF na telefon',
        blocks: [
          { figure: 'aplikacje-ksef-wybor' },
          {
            table: {
              head: ['', 'Aplikacja mobilna KSeF (MF)', 'Aplikacja programu księgowego', 'Aplikacja do odbierania faktur'],
              rows: [
                ['Kto ją wydaje', 'Ministerstwo Finansów', 'Dostawca programu do faktur lub księgowości', 'Niezależny wydawca'],
                ['Koszt', 'Bezpłatna', 'Zależy od abonamentu programu', 'Zależy od wydawcy'],
                ['Najlepsza do', 'Wystawiania pojedynczych faktur i przeglądania faktur w KSeF', 'Pracy na danych, które masz już w programie', 'Przeglądania faktur kosztowych i pilnowania płatności'],
                ['Konto u wydawcy', 'Nie, logowanie przez węzeł krajowy', 'Zwykle tak', 'Zależy od aplikacji'],
              ],
              caption: 'Ogólny podział. Zakres konkretnych aplikacji programów księgowych sprawdź u ich dostawców.',
            },
          },
        ],
      },
      {
        id: 'mf',
        h2: 'Aplikacja mobilna KSeF od Ministerstwa Finansów',
        blocks: [
          { p: 'Według strony MF aplikacja jest bezpłatna i dostępna w Google Play oraz App Store. Od 1 lutego 2026 r. obowiązuje jej wersja dla KSeF 2.0. Strona MF opisuje takie funkcje:' },
          {
            ul: [
              'wystawianie faktur i korekt oraz zapisywanie wersji roboczych,',
              'wyszukiwanie, przeglądanie, pobieranie i udostępnianie faktur wysłanych do KSeF,',
              'profile firm, między którymi przełączasz się bez ponownego logowania, oraz listy nabywców i rachunków bankowych,',
              'profil jako wizytówka z kodem QR do udostępnienia kontrahentowi.',
            ],
          },
          { p: 'Do logowania służy biometria lub PIN. Tożsamość potwierdzasz przez Krajowy Węzeł Identyfikacji Elektronicznej: mObywatelem, mojeID, e-dowodem albo Profilem Zaufanym, a aplikacja sprawdza Twoje uprawnienia.' },
          {
            ul: [
              'Działa tylko w środowisku produkcyjnym. Każda faktura wysłana z niej do KSeF jest prawnie skuteczna, więc do ćwiczeń nie nadaje się.',
              'Nie pokazuje i nie pobiera szczegółów załączników do faktur, tylko informację, że załącznik istnieje.',
              'Synchronizację danych w chmurze włączasz opcjonalnie. MF podaje, że aplikacja nie gromadzi danych o aktywności użytkownika.',
            ],
          },
          { note: 'Stan na 16 października 2026 r. według strony MF „Aplikacja mobilna KSeF 2.0” (zmodyfikowana 15.10.2026). Strona nie opisuje osobno odbierania faktur ani działania offline.' },
        ],
      },
      {
        id: 'program',
        h2: 'Aplikacje programów księgowych i fakturowych',
        blocks: [
          { p: 'Wielu dostawców programów ma własne aplikacje na telefon. Ich zakres zależy od programu i abonamentu, więc nie da się ich opisać jedną tabelą. Zwykle pokazują dane z konta w programie, a faktury z KSeF trafiają tam przez integrację z API KSeF 2.0. Zapytaj dostawcę, czy aplikacja pobiera faktury kosztowe z KSeF, czy tylko pokazuje te, które wprowadzono do programu.' },
          { p: 'To dobry wybór, gdy cała księgowość jest w jednym programie i księgowa pracuje w tym samym systemie.' },
        ],
      },
      {
        id: 'odbieranie',
        h2: 'Aplikacja do odbierania faktur: Faktury KSeF',
        blocks: [
          { p: 'Faktury KSeF to skrzynka odbiorcza na faktury z KSeF. Nie wystawia faktur. Pobiera faktury, które wystawili Ci dostawcy, i zapisuje je na telefonie.' },
          {
            ul: [
              'Łączy się z KSeF [certyfikatem](/certyfikat-ksef) (pliki .crt i .key) albo tokenem z uprawnieniem do przeglądania faktur. Klucz trafia do Keychain lub Keystore, a hasła do klucza aplikacja nie zapisuje.',
              'Nie wymaga konta u wydawcy. Token i faktury zostają na urządzeniu.',
              'Pobiera faktury pakietami eksportu, tak jak zaleca KSeF, i pilnuje limitów zapytań.',
              'Pokazuje fakturę czytelnie, jako [wizualizację z kodem QR](/wizualizacja-faktury-ksef), i zapisuje ją do PDF.',
              'Przypomina o terminach płatności i powiadamia o nowych fakturach.',
              'Przygotowuje paczkę z miesiąca dla księgowej.',
            ],
          },
          { note: 'Faktury KSeF jest w przygotowaniu i nie została jeszcze opublikowana w sklepach.' },
        ],
      },
      {
        id: 'wybor',
        h2: 'Którą aplikację wybrać',
        blocks: [
          {
            table: {
              head: ['Czego potrzebujesz', 'Dobry wybór'],
              rows: [
                ['Wystawić pojedynczą fakturę z telefonu, bez programu', 'Aplikacja mobilna KSeF (MF)'],
                ['Mieć wszystko w jednym programie z księgowością', 'Aplikacja Twojego programu'],
                ['Szybko zobaczyć faktury kosztowe i zapłacić na czas', 'Aplikacja do odbierania faktur'],
                ['Pracować na komputerze i pobrać dużo faktur', 'Aplikacja Podatnika KSeF lub program z integracją'],
              ],
            },
          },
          { p: 'Aplikacje się nie wykluczają. Możesz wystawiać faktury w aplikacji MF albo programie, a odbierać je w osobnej aplikacji. Faktury i tak leżą w KSeF, więc zmiana aplikacji niczego nie kasuje. Wszystkie sposoby odbierania opisujemy w poradniku [odbieranie faktur z KSeF](/odbieranie-faktur-z-ksef).' },
        ],
      },
    ],
    faqs: [
      { q: 'Czy jest oficjalna aplikacja mobilna KSeF?', a: 'Tak. Ministerstwo Finansów udostępnia bezpłatną Aplikację mobilną KSeF na Androida (Google Play) i iOS (App Store). Wersja dla KSeF 2.0 jest dostępna od 1 lutego 2026 r.' },
      { q: 'Jak zalogować się do aplikacji mobilnej KSeF?', a: 'Biometrią lub PIN-em. Tożsamość potwierdzasz przez mObywatela, mojeID, e-dowód albo Profil Zaufany, a aplikacja sprawdza uprawnienia w KSeF.' },
      { q: 'Czy aplikacją mobilną KSeF można poćwiczyć na środowisku testowym?', a: 'Nie. Według MF działa tylko w środowisku produkcyjnym, a faktury wysłane z niej są prawnie skuteczne. Do ćwiczeń użyj [wersji testowej KSeF](/ksef-demo-i-wersja-testowa).' },
      { q: 'Czy aplikacja Faktury KSeF wystawia faktury?', a: 'Nie. Służy do odbierania i przeglądania faktur oraz pilnowania płatności. Do wystawiania użyj aplikacji MF, Aplikacji Podatnika albo programu.' },
      { q: 'Czy aplikacja mobilna KSeF jest bezpłatna?', a: 'Według strony MF aplikacja Ministerstwa Finansów jest bezpłatna. Koszt aplikacji programów i aplikacji innych wydawców ustalają ich twórcy.' },
    ],
    sources: [SRC.mobilna, SRC.mobManual, SRC.ap20, SRC.odebrac],
    app: { shot: 'start', from: 0.17, to: 0.44, text: 'Faktury KSeF to skrzynka odbiorcza: faktury kosztowe z KSeF na telefonie, z terminami płatności. Nie wystawia faktur.' },
    related: ['odbieranie-faktur-z-ksef', 'jak-pobrac-fakture-z-ksef', 'jak-wystawic-fakture-w-ksef'],
  },
];
