// App screenshots for ksef.shipailab.com. Files live in public/ksef/screenshots/<file>.webp (700×1518)
// with a 350×759 copy in public/ksef/screenshots/350/ for phones. Use shotSrcSet() so the browser
// picks the smaller file on narrow screens.

export const KSEF_ICON = {
  webp: '/ksef/ksef-faktury-ikona-512.webp',
  webpSmall: '/ksef/ksef-faktury-ikona-64.webp',
  png: '/ksef/ksef-faktury-ikona.png', // for JSON-LD and apple-touch-icon, which expect PNG
  alt: 'Ikona aplikacji Faktury KSeF',
};

export const KSEF_OG = {
  png: '/ksef/og/ksef-faktury-aplikacja.png',
  webp: '/ksef/og/ksef-faktury-aplikacja.webp',
  width: 1200,
  height: 630,
  alt: 'Faktury KSeF – faktury z KSeF na telefonie, bez konta, dane tylko na telefonie',
};

export interface Shot {
  file: string;
  alt: string;
  title: string;
  dark?: boolean;
}

export const SHOTS = {
  start: {
    file: 'ksef-aplikacja-faktury-do-zaplaty',
    alt: 'Ekran Start aplikacji Faktury KSeF: kwota do zapłaty, faktury po terminie i nowe faktury z KSeF',
    title: 'Pulpit: co przyszło z KSeF i ile do zapłaty',
  },
  invoices: {
    file: 'ksef-faktury-kosztowe-wyszukiwarka',
    alt: 'Lista faktur kosztowych z KSeF z wyszukiwarką po kontrahencie, NIP, numerze lub kwocie',
    title: 'Faktury otrzymane i wystawione z wyszukiwarką',
  },
  invoice: {
    file: 'ksef-podglad-faktury-dane-do-przelewu',
    alt: 'Podgląd faktury z KSeF: kwota, termin, numer rachunku i tytuł przelewu do skopiowania',
    title: 'Czytelna faktura z danymi do przelewu',
  },
  payments: {
    file: 'ksef-terminy-platnosci-faktur',
    alt: 'Kalendarz płatności faktur: zaległe, najbliższe 7 dni i późniejsze terminy',
    title: 'Terminy płatności faktur w jednym miejscu',
  },
  export: {
    file: 'ksef-zestawienie-dla-ksiegowej-pdf-csv-xml',
    alt: 'Zestawienie faktur dla księgowej za miesiąc: wysyłka PDF, CSV i plików XML w ZIP',
    title: 'Miesięczne zestawienie dla księgowej',
  },
  connect: {
    file: 'ksef-polaczenie-certyfikat-token',
    alt: 'Połączenie z KSeF certyfikatem lub tokenem, bez konta i bez serwera',
    title: 'Logowanie do KSeF certyfikatem lub tokenem',
  },
  invoiceDark: {
    file: 'ksef-faktura-tryb-ciemny',
    alt: 'Faktura z KSeF w trybie ciemnym z przyciskiem Oznacz jako opłaconą',
    title: 'Tryb ciemny',
    dark: true,
  },
  paymentsDark: {
    file: 'ksef-platnosci-tryb-ciemny',
    alt: 'Płatności faktur KSeF w trybie ciemnym',
    title: 'Płatności w trybie ciemnym',
    dark: true,
  },
} satisfies Record<string, Shot>;

export const SHOT_SIZE = { width: 700, height: 1518 };

export const shotSrc = (s: Shot) => `/ksef/screenshots/${s.file}.webp`;
export const shotSrcSet = (s: Shot) =>
  `/ksef/screenshots/350/${s.file}.webp 350w, /ksef/screenshots/${s.file}.webp 700w`;
