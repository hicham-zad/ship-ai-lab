// Guides served at ksef.shipailab.com/<slug>. Each guide has a short answer ("summary") for readers and
// AI assistants, body sections, FAQ and the official sources it relies on. Facts were checked against
// ksef.podatki.gov.pl on 2026-10-15; bump `updated` and re-check sources whenever a guide is edited.
// Inline links use [text](/path) or [text](https://...).

import type { FigureName } from './figures';
import { GUIDES_RECEIVING } from './guides-receiving';
import { SRC } from './sources';

export type Block =
  | { p: string }
  | { h3: string }
  | { ul: string[] }
  | { ol: string[] }
  | { table: { head: string[]; rows: string[][]; caption?: string } }
  | { note: string }
  /** A generated diagram from data/ksef/figures.ts (see scripts/ksef-figures). */
  | { figure: FigureName };

export interface GuideSection {
  id: string;
  h2: string;
  blocks: Block[];
}

export interface Source {
  title: string;
  url: string;
  /** Publisher and the page's own date, as shown on the source. */
  meta: string;
}

export interface Guide {
  slug: string;
  /** Short label for the footer and link lists. */
  short: string;
  title: string;
  metaTitle: string;
  description: string;
  lede: string;
  /** 3–5 one-line facts that answer the page's question on their own. */
  summary: string[];
  keywords: string[];
  published: string;
  updated: string;
  sections: GuideSection[];
  faqs: { q: string; a: string }[];
  sources: Source[];
  /** Which app screen relates to this guide, and why (shown as a card with a real screenshot crop). */
  app: { shot: 'start' | 'invoices' | 'invoice' | 'payments' | 'export' | 'connect'; from: number; to: number; text: string };
  related: string[];
}



export const GUIDES: Guide[] = [
  {
    slug: 'ksef-od-kiedy',
    short: 'KSeF od kiedy',
    title: 'KSeF od kiedy? Terminy, limit 10 000 zł i kary',
    metaTitle: 'KSeF od kiedy? Terminy 2026–2027, limit 10 000 zł i kary',
    description:
      'Obowiązkowy KSeF: 1 lutego 2026 dla firm ze sprzedażą ponad 200 mln zł, 1 kwietnia 2026 dla pozostałych, 1 stycznia 2027 dla najmniejszych. Jak liczyć limit 10 000 zł i od kiedy kary.',
    lede:
      'KSeF wchodzi etapami. Odbieranie faktur przez KSeF dotyczy wszystkich od 1 lutego 2026 r., a termin wystawiania zależy od wielkości sprzedaży. Poniżej wszystkie daty z podstawą prawną, zasady limitu 10 000 zł i aktualny stan prac nad karami.',
    summary: [
      'Od 1 lutego 2026 r. każdy podatnik otrzymuje faktury ustrukturyzowane przez KSeF.',
      'Wystawianie w KSeF: od 1 lutego 2026 r. przy sprzedaży w 2024 r. ponad 200 mln zł (z VAT), od 1 kwietnia 2026 r. dla pozostałych.',
      'Do końca 2026 r. można wystawiać faktury poza KSeF, jeśli ich łączna wartość brutto w miesiącu nie przekracza 10 000 zł. Od 1 stycznia 2027 r. obowiązek dotyczy wszystkich.',
      'Kary z art. 106ni ustawy o VAT według obowiązującej ustawy stosuje się od 1 stycznia 2027 r. Rządowy projekt przesuwa je na 1 stycznia 2028 r., ale do czasu publikacji w Dzienniku Ustaw obowiązuje data 2027 r.',
    ],
    keywords: ['ksef od kiedy', 'ksef terminy', 'obowiązkowy ksef', 'ksef 2026', 'ksef 2027', 'limit 10000 zł ksef', 'kary ksef', 'ksef przesunięcie terminu', 'ksef przesunięcie terminu 2027'],
    published: '2026-10-15',
    updated: '2026-10-15',
    sections: [
      {
        id: 'terminy',
        h2: 'Terminy obowiązkowego KSeF',
        blocks: [
          { p: 'Harmonogram wynika z ustawy z 5 sierpnia 2025 r. o zmianie ustawy o VAT (Dz. U. 2025 poz. 1203), która rozłożyła obowiązek na etapy. Najważniejsze daty:' },
          { figure: 'ksef-harmonogram' },
          {
            table: {
              head: ['Data', 'Kogo dotyczy', 'Co się zmienia'],
              rows: [
                ['1 lutego 2026 r.', 'Wszyscy podatnicy', 'Otrzymywanie faktur ustrukturyzowanych przez KSeF. Start produkcyjnej wersji KSeF 2.0 i struktury FA(3).'],
                ['1 lutego 2026 r.', 'Sprzedaż w 2024 r. powyżej 200 mln zł (z VAT)', 'Obowiązek wystawiania faktur w KSeF.'],
                ['1 kwietnia 2026 r.', 'Pozostali podatnicy', 'Obowiązek wystawiania faktur w KSeF, z wyjątkami przejściowymi do końca 2026 r.'],
                ['1 stycznia 2027 r.', 'Wszyscy, także korzystający z wyjątków', 'Koniec limitu 10 000 zł i wyjątku dla kas rejestrujących.'],
              ],
              caption: 'Źródło: ksef.podatki.gov.pl, Etapy wdrożenia KSeF 2.0 oraz Podstawy prawne i kluczowe terminy.',
            },
          },
          { p: 'Otrzymywanie faktur przez KSeF nie ma osobnego terminu dla małych firm. Jeśli kontrahent wystawia fakturę w KSeF, otrzymujesz ją przez KSeF niezależnie od tego, kiedy Ty musisz zacząć wystawiać faktury w systemie.' },
        ],
      },
      {
        id: 'limit-10000',
        h2: 'Jak liczyć limit 10 000 zł',
        blocks: [
          { p: 'Do końca 2026 r. podatnik może wystawiać faktury poza KSeF (papierowe lub elektroniczne), jeśli łączna wartość sprzedaży udokumentowanej takimi fakturami nie przekracza 10 000 zł brutto w danym miesiącu. Zasady według Ministerstwa Finansów:' },
          {
            ul: [
              'Limit liczy się miesięcznie, w kwotach brutto, czyli z VAT.',
              'Do limitu wlicza się tylko faktury, które co do zasady trzeba wystawiać w KSeF. Faktury wyłączone z obowiązku, na przykład z kas rejestrujących, się nie wliczają.',
              'Fakturę, którą przekroczysz limit, wystawiasz już w KSeF, tak jak wszystkie kolejne.',
              'Po przekroczeniu limitu nie wracasz do poprzednich zasad, nawet jeśli w następnym miesiącu sprzedaż będzie niższa.',
            ],
          },
          { note: 'Przykład: w maju wystawiasz poza KSeF faktury na 9 200 zł brutto. Kolejna faktura na 1 500 zł przekroczyłaby limit, więc trzeba ją wystawić w KSeF. Od tej chwili wszystkie faktury objęte obowiązkiem wystawiasz w KSeF.' },
        ],
      },
      {
        id: 'kasy',
        h2: 'Faktury z kas rejestrujących i inne wyjątki',
        blocks: [
          { p: 'Do końca 2026 r. faktury wystawiane przy użyciu kas rejestrujących nie muszą trafiać do KSeF. Przypadki, w których nie ma obowiązku wystawiania faktur ustrukturyzowanych, określa rozporządzenie Ministra Finansów i Gospodarki z 7 grudnia 2025 r. (Dz. U. 2025 poz. 1740).' },
          { p: 'Okres przejściowy obejmuje też odroczenie obowiązku podawania numeru KSeF w płatnościach. Do końca 2026 r. obowiązują więc trzy uproszczenia: limit 10 000 zł, faktury z kas oraz numer KSeF w przelewach.' },
        ],
      },
      {
        id: 'kary',
        h2: 'Kary za brak KSeF: 2027 czy 2028?',
        blocks: [
          { p: 'Sankcje opisuje art. 106ni ustawy o VAT. Za wystawienie faktury poza KSeF, gdy był obowiązek, naczelnik urzędu skarbowego może nałożyć karę do 100% kwoty VAT z faktury, a przy fakturze bez VAT do 18,7% kwoty należności ogółem. Przepisy przewidują miarkowanie kary.' },
          { p: 'Według obowiązującej ustawy główne przepisy o karach stosuje się od 1 stycznia 2027 r. Ministerstwo Finansów opublikowało jednak projekt nowelizacji, który przesuwa ten termin na 1 stycznia 2028 r. Projekt nie zmienia samego obowiązku wystawiania faktur w KSeF. Uwagi do projektu można było zgłaszać do 30 września 2026 r., a potem musi go przyjąć rząd, Sejm i Senat, podpisać Prezydent i trzeba go opublikować.' },
          { note: 'Stan na 15 października 2026 r.: projekt przesunięcia kar nie jest jeszcze prawem. Dopóki nowelizacja nie ukaże się w Dzienniku Ustaw, obowiązuje data 1 stycznia 2027 r.' },
        ],
      },
      {
        id: 'podstawa-prawna',
        h2: 'Podstawa prawna',
        blocks: [
          {
            ul: [
              'Ustawa z 11 marca 2004 r. o podatku od towarów i usług, w brzmieniu nadanym m.in. ustawą z 16 czerwca 2023 r. (Dz. U. 2023 poz. 1598) i ustawą z 5 sierpnia 2025 r. (Dz. U. 2025 poz. 1203).',
              'Rozporządzenie Ministra Finansów i Gospodarki z 12 grudnia 2025 r. w sprawie korzystania z KSeF (Dz. U. 2025 poz. 1815).',
              'Rozporządzenie Ministra Finansów i Gospodarki z 7 grudnia 2025 r. w sprawie przypadków, w których nie ma obowiązku wystawiania faktur ustrukturyzowanych (Dz. U. 2025 poz. 1740).',
            ],
          },
        ],
      },
    ],
    faqs: [
      { q: 'Czy muszę odbierać faktury przez KSeF, jeśli sam jeszcze nie wystawiam faktur w systemie?', a: 'Tak. Od 1 lutego 2026 r. faktury od kontrahentów, którzy wystawiają je w KSeF, otrzymujesz właśnie przez KSeF. Za datę otrzymania uznaje się datę nadania fakturze numeru KSeF.' },
      { q: 'Czy limit 10 000 zł dotyczy jednej faktury?', a: 'Nie. To łączna wartość brutto wszystkich faktur wystawionych poza KSeF w danym miesiącu, które co do zasady powinny trafić do KSeF.' },
      { q: 'Czy mogę zacząć korzystać z KSeF przed swoim terminem?', a: 'Tak. Wystawianie faktur w KSeF przed datą obowiązku jest dobrowolne i dopuszczalne.' },
      { q: 'Czy KSeF został przesunięty?', a: 'Nie. Obowiązek wystawiania faktur w KSeF obowiązuje od 1 lutego i 1 kwietnia 2026 r., a dla najmniejszych firm od 1 stycznia 2027 r. Rządowy projekt z września 2026 r. przesuwa na 1 stycznia 2028 r. tylko kary, i to dopiero po jego uchwaleniu i publikacji.' },
      { q: 'Czy w 2026 r. grożą kary za błędy w KSeF?', a: 'Kary z art. 106ni nie są stosowane w 2026 r. Według obowiązującej ustawy zaczną obowiązywać 1 stycznia 2027 r., a rządowy projekt przesuwa je na 1 stycznia 2028 r.' },
    ],
    sources: [SRC.etapy, SRC.podstawy, SRC.zakres, SRC.pytania],
    app: { shot: 'start', from: 0.17, to: 0.44, text: 'Od 1 lutego 2026 r. faktury kosztowe przychodzą przez KSeF. Faktury KSeF pobiera je na telefon i pokazuje, co jest do zapłaty i do kiedy.' },
    related: ['ksef-dla-jdg-2027', 'odbieranie-faktur-z-ksef', 'token-czy-certyfikat-ksef'],
  },
  {
    slug: 'ksef-tryb-offline',
    short: 'Tryb offline w KSeF',
    title: 'Tryb offline w KSeF: offline24, niedostępność i awaria',
    metaTitle: 'Tryb offline KSeF: offline24, niedostępność, awaria i kody QR',
    description:
      'Cztery sytuacje, w których wystawiasz fakturę poza połączeniem z KSeF: offline24, niedostępność, awaria i awaria całkowita. Terminy przesłania, data wystawienia, data otrzymania i dwa kody QR.',
    lede:
      'Brak internetu albo przerwa w działaniu KSeF nie wstrzymuje sprzedaży. Ustawa o VAT przewiduje tryby, w których wystawiasz fakturę bez połączenia z systemem i przesyłasz ją później. Różnią się tym, kto o nich decyduje, i terminem przesłania faktury.',
    summary: [
      'Offline24 może stosować każdy podatnik, z dowolnej przyczyny. Fakturę przesyłasz do KSeF najpóźniej w następnym dniu roboczym po jej wystawieniu.',
      'Przy niedostępności KSeF ogłoszonej w BIP MF masz czas do następnego dnia roboczego po zakończeniu niedostępności, a przy awarii KSeF 7 dni roboczych od jej zakończenia.',
      'Przy awarii całkowitej ogłoszonej w środkach przekazu faktur nie przesyła się później do KSeF.',
      'Datą wystawienia jest data z pola P_1 faktury. Faktura przekazana nabywcy przed nadaniem numeru KSeF musi mieć dwa kody QR: OFFLINE i CERTYFIKAT.',
    ],
    keywords: ['ksef offline', 'offline24', 'ksef awaria', 'ksef niedostępność', 'kod qr ksef', 'certyfikat ksef typu 2'],
    published: '2026-10-15',
    updated: '2026-10-15',
    sections: [
      {
        id: 'tryby',
        h2: 'Cztery tryby w jednej tabeli',
        blocks: [
          {
            table: {
              head: ['Tryb', 'Kiedy', 'Termin przesłania do KSeF'],
              rows: [
                ['Offline24', 'Z dowolnej przyczyny po stronie podatnika, np. słaby internet. Bez ograniczeń w ustawie.', 'Niezwłocznie, najpóźniej w następnym dniu roboczym po dniu wystawienia.'],
                ['Niedostępność KSeF', 'Okres niedostępności ogłoszony w BIP MF i w oprogramowaniu interfejsowym, np. prace serwisowe.', 'Najpóźniej w następnym dniu roboczym po zakończeniu niedostępności.'],
                ['Awaria KSeF', 'Awaria ogłoszona w BIP MF i w oprogramowaniu interfejsowym.', 'W ciągu 7 dni roboczych od zakończenia awarii.'],
                ['Awaria całkowita', 'Awaria ogłoszona w środkach społecznego przekazu.', 'Faktur nie przesyła się do KSeF.'],
              ],
              caption: 'Źródło: ksef.podatki.gov.pl, strony Tryb offline24 oraz Tryb offline – niedostępność KSeF (stan z 06.02.2026).',
            },
          },
          { figure: 'ksef-tryby-offline' },
          { p: 'Jeśli w trakcie trybu offline24 KSeF ogłosi awarię, termin przesłania faktury wydłuża się do 7 dni roboczych od zakończenia awarii.' },
        ],
      },
      {
        id: 'offline24',
        h2: 'Offline24 krok po kroku',
        blocks: [
          { p: 'Procedurę opisuje art. 106nda ustawy o VAT. Każdy podatnik może z niej skorzystać, gdy nie może w danej chwili wystawić faktury w KSeF.' },
          {
            ol: [
              'Wystaw fakturę w strukturze FA(3) w swoim programie, bez wysyłania jej do KSeF.',
              'Jeśli przekazujesz fakturę nabywcy od razu, na przykład jako PDF, umieść na niej dwa kody QR (opis niżej).',
              'Prześlij fakturę do KSeF najpóźniej w następnym dniu roboczym.',
              'Po przyjęciu faktura dostaje numer KSeF, a nabywca z NIP ma ją w KSeF.',
            ],
          },
        ],
      },
      {
        id: 'daty',
        h2: 'Data wystawienia i data otrzymania',
        blocks: [
          { p: 'Datą wystawienia faktury jest data wskazana w polu P_1 struktury FA(3), także wtedy, gdy faktura trafi do KSeF dzień albo kilka dni później.' },
          { p: 'Data otrzymania zależy od nabywcy. Krajowy podatnik VAT otrzymuje fakturę w dniu nadania jej numeru KSeF. Nabywca, któremu fakturę udostępnia się poza KSeF (konsument, podmiot zagraniczny, firma bez NIP), otrzymuje ją w dniu faktycznego otrzymania.' },
        ],
      },
      {
        id: 'kody-qr',
        h2: 'Dwa kody QR na fakturze offline',
        blocks: [
          { p: 'Faktura udostępniona nabywcy poza KSeF, zanim zostanie przesłana do systemu, musi mieć dwa kody QR:' },
          {
            ul: [
              'Kod z oznaczeniem OFFLINE daje dostęp do faktury w KSeF i pozwala zweryfikować jej dane.',
              'Kod z oznaczeniem CERTYFIKAT potwierdza tożsamość wystawcy. Do jego wygenerowania potrzebny jest certyfikat KSeF typu 2.',
            ],
          },
          { p: 'Faktura, która trafiła już do KSeF i dopiero potem jest udostępniana poza systemem, ma jeden kod QR, pod którym umieszcza się numer KSeF.' },
          { note: 'Certyfikat typu 2 warto mieć przed pierwszą awarią. Bez niego nie wygenerujesz kodu CERTYFIKAT, a więc nie przekażesz nabywcy poprawnej faktury offline przed jej wysłaniem do KSeF.' },
        ],
      },
      {
        id: 'korekty',
        h2: 'Faktury korygujące w trybie offline',
        blocks: [
          { p: 'Fakturę korygującą też można wystawić w trybie offline24, z tym samym terminem przesłania. Jeśli korygujesz fakturę wystawioną offline, najpierw musi ona trafić do KSeF i dostać numer. Korektę wystawiasz dopiero potem.' },
          { p: 'Krajowemu nabywcy z NIP, który czeka na fakturę z numerem KSeF, możesz wydać potwierdzenie transakcji.' },
        ],
      },
    ],
    faqs: [
      { q: 'Czy w trybie offline24 mogę wysłać klientowi PDF?', a: 'Tak, jeśli wizualizacja ma dwa kody QR: OFFLINE i CERTYFIKAT. Fakturę i tak musisz przesłać do KSeF najpóźniej w następnym dniu roboczym.' },
      { q: 'Kto ogłasza niedostępność albo awarię KSeF?', a: 'Ministerstwo Finansów, w Biuletynie Informacji Publicznej i w oprogramowaniu interfejsowym KSeF. Awarię całkowitą ogłasza się w środkach społecznego przekazu.' },
      { q: 'Czy przy awarii całkowitej trzeba później wysłać faktury do KSeF?', a: 'Nie. Przy awarii całkowitej ogłoszonej w środkach społecznego przekazu faktur nie dosyła się do KSeF.' },
      { q: 'Jaki certyfikat jest potrzebny do kodu QR CERTYFIKAT?', a: 'Certyfikat KSeF typu 2. Certyfikat do logowania (uwierzytelniania) to inny typ.' },
    ],
    sources: [SRC.offline24, SRC.niedostepnosc, SRC.podrecznik2],
    app: { shot: 'invoice', from: 0.37, to: 0.53, text: 'Faktury KSeF pokazuje faktury, które już mają numer KSeF, i tworzy z nich PDF z kodem QR do weryfikacji.' },
    related: ['faktura-ustrukturyzowana', 'token-czy-certyfikat-ksef', 'ksef-od-kiedy'],
  },
  {
    slug: 'faktura-ustrukturyzowana',
    short: 'Faktura ustrukturyzowana',
    title: 'Faktura ustrukturyzowana i numer KSeF: jak to działa',
    metaTitle: 'Faktura ustrukturyzowana i numer KSeF – co to jest i jak działa',
    description:
      'Faktura ustrukturyzowana to plik XML w strukturze FA(3) wystawiony w KSeF. Czym różni się od PDF, kiedy powstaje numer KSeF, jak go czytać i jak nabywca otrzymuje fakturę.',
    lede:
      'W KSeF faktura jest plikiem XML o ściśle określonej strukturze, a nie dokumentem PDF. Fakturą w rozumieniu przepisów staje się po przyjęciu przez system, który nadaje jej numer KSeF.',
    summary: [
      'Faktura ustrukturyzowana to plik XML zgodny ze strukturą logiczną FA(3), obowiązującą od 1 lutego 2026 r.',
      'Numer KSeF nadaje system po przyjęciu faktury i zwraca go w UPO. Nie jest częścią pliku XML i różni się od numeru nadanego przez wystawcę (pole P_2).',
      'Numer KSeF ma 35 znaków: NIP wystawcy (10), datę (8), część techniczną (12) i sumę kontrolną (2), rozdzielone myślnikami.',
      'Krajowy podatnik VAT otrzymuje fakturę w dniu nadania jej numeru KSeF.',
    ],
    keywords: ['faktura ustrukturyzowana', 'numer ksef', 'fa(3)', 'faktura xml', 'e-faktura', 'zbiorczy identyfikator ksef'],
    published: '2026-10-15',
    updated: '2026-10-15',
    sections: [
      {
        id: 'xml',
        h2: 'XML zamiast PDF',
        blocks: [
          { p: 'Faktura ustrukturyzowana jest plikiem XML zgodnym ze strukturą logiczną FA(3), którą publikuje Ministerstwo Finansów. Każda dana ma swoje pole: NIP stron, data wystawienia (P_1), numer nadany przez wystawcę (P_2), pozycje, stawki i kwoty VAT. Dzięki temu programy księgowe odczytują fakturę bez przepisywania.' },
          { p: 'PDF albo wydruk jest tylko wizualizacją. Możesz ją przekazać klientowi, ale wiążąca jest faktura w KSeF. Na wizualizacji faktury z numerem KSeF umieszcza się kod QR, który prowadzi do faktury w systemie.' },
          { figure: 'fa3-struktura' },
        ],
      },
      {
        id: 'numer-ksef',
        h2: 'Numer KSeF: kiedy powstaje i jak go czytać',
        blocks: [
          { p: 'Numer KSeF nadaje system automatycznie, po przesłaniu i przyjęciu faktury. Wystawca dostaje go w Urzędowym Poświadczeniu Odbioru (UPO). Numer nie jest elementem pliku XML i nie zastępuje numeru faktury nadanego przez wystawcę w polu P_2. Faktura ma więc dwa numery.' },
          {
            table: {
              head: ['Część numeru', 'Długość', 'Zawartość'],
              rows: [
                ['1', '10 znaków', 'NIP wystawcy'],
                ['2', '8 znaków', 'Data w formacie RRRRMMDD'],
                ['3', '12 znaków', 'Część techniczna'],
                ['4', '2 znaki', 'Suma kontrolna'],
              ],
              caption: 'Części rozdziela myślnik, razem 35 znaków.',
            },
          },
          { p: 'Numer KSeF przydaje się przy fakturze korygującej, w korespondencji z kontrahentem i przy płatnościach. Obowiązek podawania numeru KSeF w przelewach jest odroczony do końca 2026 r.' },
        ],
      },
      {
        id: 'zbiorczy',
        h2: 'Zbiorczy identyfikator (IZ)',
        blocks: [
          { p: 'Gdy jednym przelewem płacisz kilka faktur, zamiast wielu numerów KSeF możesz użyć zbiorczego identyfikatora. Według Ministerstwa Finansów ma on również 35 znaków i zawiera m.in. NIP, oznaczenie IZ z rokiem i miesiącem, 12-znakowy ciąg i dwie cyfry kontrolne.' },
        ],
      },
      {
        id: 'otrzymanie',
        h2: 'Jak nabywca otrzymuje fakturę',
        blocks: [
          { p: 'Nabywca będący krajowym podatnikiem VAT nie dostaje faktury e-mailem. Pobiera ją z KSeF samodzielnie, przez program księgowy albo przez osobę z nadanym uprawnieniem, na przykład biuro rachunkowe. Za datę otrzymania uznaje się dzień nadania numeru KSeF.' },
          { p: 'Konsumentom, podmiotom zagranicznym i firmom bez NIP fakturę udostępnia się w uzgodniony sposób, zwykle jako PDF z kodem QR. Wtedy datą otrzymania jest dzień, w którym nabywca faktycznie ją dostał.' },
        ],
      },
      {
        id: 'zalaczniki',
        h2: 'Faktury z załącznikiem',
        blocks: [
          { p: 'Od 1 lutego 2026 r. można wystawiać w KSeF faktury z załącznikiem, na przykład z rozbudowaną specyfikacją. Zamiar korzystania z tej możliwości zgłasza się w e-Urzędzie Skarbowym. Zgłoszenia przyjmowane są od 1 stycznia 2026 r.' },
        ],
      },
    ],
    faqs: [
      { q: 'Czy muszę umieć edytować XML?', a: 'Nie. Program do faktur wypełnia strukturę FA(3) na podstawie danych z formularza i wysyła plik do KSeF.' },
      { q: 'Czy numer KSeF jest na fakturze w XML?', a: 'Nie. System nadaje go po przyjęciu faktury i zwraca w UPO. Na wizualizacji faktury umieszcza się kod QR z numerem KSeF.' },
      { q: 'Czy numer KSeF zastępuje mój numer faktury?', a: 'Nie. Numer nadany przez wystawcę (pole P_2) zostaje, a numer KSeF jest dodatkowym identyfikatorem nadanym przez system.' },
      { q: 'Kiedy nabywca otrzymuje fakturę z KSeF?', a: 'Krajowy podatnik VAT otrzymuje ją w dniu nadania numeru KSeF, nawet jeśli pobierze ją z systemu później.' },
    ],
    sources: [SRC.numer, SRC.podstawy, SRC.podrecznik2],
    app: { shot: 'invoice', from: 0.06, to: 0.53, text: 'Faktury KSeF zamienia XML z KSeF w czytelny widok: kontrahent, kwota, termin, pozycje i dane do przelewu, a na żądanie PDF lub oryginalny XML.' },
    related: ['ksef-tryb-offline', 'token-czy-certyfikat-ksef', 'ksef-od-kiedy'],
  },
  {
    slug: 'token-czy-certyfikat-ksef',
    short: 'Token czy certyfikat KSeF',
    title: 'Token czy certyfikat KSeF? Logowanie po 2026 roku',
    metaTitle: 'Token czy certyfikat KSeF? Tokeny zostają po 2026 roku',
    description:
      'Ministerstwo Finansów zdecydowało, że tokeny KSeF zostaną bezterminowo, a nie tylko do 31.12.2026. Czym różni się token od certyfikatu KSeF i który wybrać do programu lub aplikacji.',
    lede:
      'Do KSeF logujesz się tokenem albo certyfikatem KSeF. Pierwotnie tokeny miały działać tylko do 31 grudnia 2026 r., ale Ministerstwo Finansów zdecydowało o ich utrzymaniu bezterminowo. Oto co wiadomo i jak przygotować firmę.',
    summary: [
      'Token i certyfikat KSeF to dwa sposoby, w jakie program lub aplikacja loguje się do KSeF w Twoim imieniu.',
      'Rozporządzenie przewidywało koniec tokenów 31 grudnia 2026 r. Ministerstwo Finansów zdecydowało jednak, że tokeny zostaną bezterminowo, a rozporządzenie zostanie znowelizowane.',
      'Tokeny i certyfikaty działają równolegle. Token ma zakres uprawnień ustalony przy jego wygenerowaniu i jest ważny do czasu unieważnienia.',
      'Certyfikat KSeF jest docelową metodą. Certyfikat typu 2 jest też potrzebny do kodu QR na fakturach offline.',
    ],
    keywords: ['token ksef', 'certyfikat ksef', 'token ksef 2027', 'logowanie ksef', 'certyfikat ksef typu 2', 'aplikacja podatnika ksef'],
    published: '2026-10-15',
    updated: '2026-10-15',
    sections: [
      {
        id: 'roznice',
        h2: 'Token a certyfikat: różnice',
        blocks: [
          { figure: 'token-vs-certyfikat' },
          {
            table: {
              head: ['', 'Token KSeF', 'Certyfikat KSeF'],
              rows: [
                ['Czym jest', 'Ciąg znaków wygenerowany w KSeF z wybranymi uprawnieniami', 'Para plików: certyfikat (.crt) i klucz prywatny (.key) chroniony hasłem'],
                ['Skąd go wziąć', 'Aplikacja Podatnika KSeF, po zalogowaniu', 'Aplikacja Podatnika KSeF, po zalogowaniu podpisem'],
                ['Do czego służy', 'Logowanie programu lub aplikacji', 'Logowanie (certyfikat do uwierzytelniania) albo kod QR CERTYFIKAT na fakturach offline (certyfikat typu 2)'],
                ['Po 31.12.2026', 'Zostaje bezterminowo (decyzja MF, rozporządzenie do nowelizacji)', 'Działa dalej, ważny do 2 lat od wydania'],
              ],
            },
          },
          { p: 'Token przypisujesz do konkretnych uprawnień. Programowi, który ma tylko pobierać faktury, wystarczy token z uprawnieniem do przeglądania faktur. Token można w każdej chwili unieważnić.' },
        ],
      },
      {
        id: 'po-2026',
        h2: 'Co z tokenami po 31 grudnia 2026 r.',
        blocks: [
          { p: 'Rozporządzenie w sprawie korzystania z KSeF przewidywało, że od 1 stycznia 2027 r. do KSeF zalogujesz się już tylko certyfikatem. Na konsultacjach po wdrożeniu KSeF (9 czerwca 2026 r.) Ministerstwo Finansów zaproponowało utrzymanie tokenów, a następnie podjęło decyzję: tokeny zostają jako metoda uwierzytelnienia bezterminowo. MF zapowiada nowelizację rozporządzenia w tym zakresie.' },
          {
            ul: [
              'Tokeny i certyfikaty działają równolegle.',
              'Token jest ważny do czasu jego unieważnienia przez użytkownika.',
              'Token ma wpisany zakres uprawnień. Zmiana uprawnień wymaga wygenerowania nowego tokena.',
            ],
          },
          { note: 'Stan na 15 października 2026 r.: decyzję MF potwierdzają strona „Certyfikaty KSeF” (zmodyfikowana 1.09.2026) i „Pytania i odpowiedzi KSeF 2.0” (8.10.2026). Nowelizacja rozporządzenia nie została jeszcze opublikowana. Do faktur offline i tak potrzebny jest certyfikat KSeF typu 2.' },
        ],
      },
      {
        id: 'jak-uzyskac',
        h2: 'Jak uzyskać certyfikat KSeF',
        blocks: [
          {
            ol: [
              'Zaloguj się do Aplikacji Podatnika KSeF przez login.gov.pl (Profil Zaufany, mObywatel, bankowość elektroniczna lub e-dowód) albo certyfikatem kwalifikowanym (podpisem lub pieczęcią). Logowanie tokenem nie pozwala złożyć wniosku o certyfikat.',
              'W sekcji Certyfikaty wybierz „Wnioskuj o certyfikat”. Do logowania programów potrzebny jest certyfikat do uwierzytelniania, do kodów QR na fakturach offline certyfikat typu 2.',
              'Pobierz plik certyfikatu (.crt) i zapisz klucz prywatny (.key). Zapamiętaj hasło do klucza, bo bez niego certyfikat jest bezużyteczny.',
              'Wskaż oba pliki w programie lub aplikacji, która ma logować się do KSeF.',
            ],
          },
          { p: 'KSeF wydaje certyfikat tylko po logowaniu podpisem. Po zalogowaniu samym tokenem nie da się go uzyskać, dlatego program nie zamieni Twojego tokena w certyfikat sam z siebie.' },
        ],
      },
      {
        id: 'bezpieczenstwo',
        h2: 'Bezpieczeństwo tokena i klucza',
        blocks: [
          {
            ul: [
              'Dawaj programom tylko potrzebne uprawnienia. Do odbierania faktur wystarczy przeglądanie.',
              'Nie wysyłaj tokena ani klucza e-mailem i nie wklejaj ich do czatów.',
              'Przechowuj klucz w bezpiecznym miejscu. W telefonie najlepiej w systemowym sejfie (Keychain na iPhonie, Keystore na Androidzie).',
              'Jeśli podejrzewasz wyciek, unieważnij token lub certyfikat w Aplikacji Podatnika KSeF.',
            ],
          },
        ],
      },
    ],
    faqs: [
      { q: 'Czy mój token przestanie działać 1 stycznia 2027 r.?', a: 'Nie powinien. Ministerstwo Finansów zdecydowało o utrzymaniu tokenów bezterminowo i zapowiedziało nowelizację rozporządzenia. Token działa do czasu, aż go unieważnisz.' },
      { q: 'Jakie uprawnienie musi mieć token do pobierania faktur?', a: 'Uprawnienie do przeglądania faktur. Nie musisz dawać aplikacji prawa do wystawiania faktur, jeśli ma je tylko odbierać.' },
      { q: 'Czy jeden certyfikat wystarczy do logowania i do faktur offline?', a: 'Nie zawsze. Do kodu QR CERTYFIKAT na fakturach offline potrzebny jest certyfikat KSeF typu 2, a do logowania certyfikat do uwierzytelniania.' },
      { q: 'Czy po przejściu z tokena na certyfikat stracę pobrane faktury?', a: 'Faktury są przechowywane w KSeF niezależnie od sposobu logowania. Czy program zachowa lokalną kopię, zależy od programu. Faktury KSeF zachowuje pobrane faktury przy zmianie metody logowania.' },
    ],
    sources: [SRC.certyfikaty, SRC.pytania, SRC.konsultacje, SRC.uwierzytelnienie, SRC.podrecznik1],
    app: { shot: 'connect', from: 0.355, to: 0.645, text: 'Faktury KSeF łączy się z KSeF certyfikatem (.crt i .key) albo tokenem. Klucz trafia do Keychain lub Keystore, a hasła do klucza aplikacja nie zapisuje.' },
    related: ['certyfikat-ksef', 'ksef-od-kiedy', 'ksef-tryb-offline'],
  },
  ...GUIDES_RECEIVING,
];

export const getGuide = (slug: string) => GUIDES.find((g) => g.slug === slug);

/** Diagrams shown in a guide, in reading order (for JSON-LD and the image sitemap). */
export const guideFigures = (g: Guide): FigureName[] =>
  g.sections.flatMap((s) => s.blocks.flatMap((b) => ('figure' in b ? [b.figure] : [])));

/** Per-guide social card, generated by scripts/ksef-figures/render.mjs. */
export const guideOgImage = (slug: string) => `/ksef/og/${slug}.png`;

/** The guides linked from the footer and the landing page; the hub lists all of them. */
export const FEATURED_GUIDES = ['odbieranie-faktur-z-ksef', 'jak-pobrac-fakture-z-ksef', 'ksef-od-kiedy', 'ksef-dla-jdg-2027', 'certyfikat-ksef', 'zaw-fa']
  .map(getGuide)
  .filter((g) => g !== undefined);

/** Rough reading time for the article header (Polish, ~190 words a minute). */
export function readingMinutes(g: Guide): number {
  const text = [g.lede, ...g.summary, ...g.sections.flatMap((s) => s.blocks.map((b) => JSON.stringify(b))), ...g.faqs.map((f) => f.q + f.a)].join(' ');
  return Math.max(3, Math.round(text.split(/\s+/).length / 190));
}
