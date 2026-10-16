import { KSEF_EMAIL, KSEF_NAME, KSEF_PUBLISHER, ksefUrl } from '@/data/ksef/config';
import { GUIDES } from '@/data/ksef/guides';

// ksef.shipailab.com/llms.txt (proxy.ts rewrites it here): a plain summary of the app and the guides
// for AI assistants. Built from the same data as the pages, so it never drifts from them.
export function GET() {
  const guides = GUIDES.map(
    (g) => `### [${g.title}](${ksefUrl(`/${g.slug}`)})\nAktualizacja: ${g.updated}\n${g.summary.map((s) => `- ${s}`).join('\n')}\nŹródła: ${g.sources.map((s) => s.url).join(', ')}`,
  ).join('\n\n');

  const body = `# ${KSEF_NAME}

> ${KSEF_NAME} to aplikacja na iPhone, iPad i Androida do odbierania faktur z Krajowego Systemu e-Faktur (KSeF). Pobiera faktury otrzymane i wystawione, powiadamia o nowych, pilnuje terminów płatności i tworzy zestawienie dla księgowej (PDF, CSV, XML). Nie ma kont ani własnego serwera: faktury, token i certyfikat zostają na telefonie. Aplikacja nie wystawia faktur. Status: przed premierą w App Store i Google Play (stan na październik 2026).

Wydawca: ${KSEF_PUBLISHER}. Kontakt: ${KSEF_EMAIL}. Język treści: polski.

## Aplikacja
- [Strona główna](${ksefUrl()}): funkcje, prywatność, cennik (wersja bezpłatna, Pro w abonamencie lub jednorazowo), FAQ.
- Logowanie do KSeF: certyfikat KSeF (.crt + .key) albo token z uprawnieniem do przeglądania faktur.
- Synchronizacja: paczki eksportu KSeF w oknach do 90 dni, z limitem zapytań poniżej limitów KSeF.
- Powiadomienia: nowe faktury (sprawdzanie w tle) i przypomnienie o 9:00 dzień przed terminem płatności.
- Płatności: oznaczanie opłaconych, wpłaty częściowe i raty, kalendarz płatności, należności.
- Dane: przechowywane lokalnie (Keychain/Keystore dla danych logowania), połączenie wyłącznie z api.ksef.mf.gov.pl.

## Poradniki KSeF
${guides}

## Dokumenty
- [Pomoc](${ksefUrl('/support')})
- [Polityka prywatności](${ksefUrl('/privacy-policy')})
- [Regulamin](${ksefUrl('/terms-of-service')})
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
