import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticleShell } from '@/components/ksef/ArticleShell';
import { Icon } from '@/components/ksef/Icon';
import StructuredData from '@/components/StructuredData';
import { KSEF_NAME, ksefUrl } from '@/data/ksef/config';
import { getStatus, STALE_AFTER_MS } from '@/data/ksef/status';
import { SRC } from '@/data/ksef/sources';

export const revalidate = 60;

const url = ksefUrl('/status-ksef');
const title = 'Status KSeF: czy KSeF działa teraz? Pomiar co 5 minut';
const description =
  'Sprawdź, czy KSeF działa: pomiar co 5 minut API KSeF, Aplikacji Podatnika, strony MF i login.gov.pl, z historią 30 dni. Tylko zmierzone dane i linki do komunikatów Ministerstwa Finansów.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: KSEF_NAME, locale: 'pl_PL', type: 'website' },
};

const faqs = [
  { q: 'Czy KSeF działa teraz?', a: 'Odpowiedź jest na górze strony. Co 5 minut sprawdzamy API KSeF, Aplikację Podatnika, stronę ksef.podatki.gov.pl i login.gov.pl. Usługa działa, gdy odpowiedziała w ciągu 8 sekund kodem 2xx lub 3xx.' },
  { q: 'Skąd wiadomo, że to nie jest szacunek?', a: 'Strona pokazuje tylko wyniki pomiarów: czas odpowiedzi i to, czy usługa odpowiedziała. Gdy brakuje pomiarów, dzień jest szary, a nie zielony.' },
  { q: 'Czy zielony status oznacza, że wszystko działa?', a: 'Nie. Sprawdzamy, czy usługa odpowiada na publiczne zapytanie. Nie logujemy się do KSeF i nie wysyłamy faktur, więc problem z konkretną funkcją może się nie pokazać. Oficjalne komunikaty o przerwach publikuje Ministerstwo Finansów.' },
  { q: 'Gdzie MF ogłasza przerwy i awarie?', a: 'W komunikatach technicznych na ksef.podatki.gov.pl. Tam znajdziesz też ogłoszenia o niedostępności i awarii, które uruchamiają tryby offline.' },
];

const fmtTime = (iso: string) =>
  new Date(iso).toLocaleString('pl-PL', { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Warsaw' });

const pct = (up: number, n: number) => (n ? Math.round((up / n) * 1000) / 10 : null);

function dayClass(c?: { n: number; up: number }) {
  if (!c || c.n === 0) return 'none';
  const p = c.up / c.n;
  return p === 1 ? 'up' : p >= 0.95 ? 'part' : 'down';
}

export default async function Page() {
  const data = await getStatus();
  const latest = data?.latest ?? null;
  const age = latest ? Date.now() - new Date(latest.checkedAt).getTime() : Infinity;
  const stale = !latest || age > STALE_AFTER_MS;
  const downIds = latest ? latest.samples.filter((s) => !s.ok).map((s) => s.id) : [];
  const state: 'unknown' | 'ok' | 'issue' = stale ? 'unknown' : downIds.length === 0 ? 'ok' : 'issue';
  const label = (id: string) => data?.checks.find((c) => c.id === id)?.label ?? id;
  const headline =
    state === 'ok' ? 'Wszystkie sprawdzane usługi odpowiadają' :
    state === 'issue' ? `Nie odpowiada: ${downIds.map(label).join(', ')}` :
    'Brak świeżych pomiarów';
  const sub =
    state === 'unknown'
      ? 'Monitor nie zapisał wyniku w ostatnich 20 minutach, więc nie podajemy statusu. Sprawdź komunikaty MF poniżej.'
      : `Ostatni pomiar: ${fmtTime(latest!.checkedAt)} (czas polski).`;
  const days = data?.days ?? [];
  const firstDay = days[0]?.date;

  return (
    <>
      <StructuredData
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: title,
            description,
            url,
            inLanguage: 'pl-PL',
            dateModified: latest?.checkedAt,
            publisher: { '@type': 'Organization', name: KSEF_NAME },
          },
          { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: KSEF_NAME, item: ksefUrl('/') },
              { '@type': 'ListItem', position: 2, name: 'Status KSeF', item: url },
            ],
          },
        ]}
      />
      <ArticleShell
        crumbs={[{ label: KSEF_NAME, href: '/' }, { label: 'Status KSeF' }]}
        label="Status na żywo"
        title="Status KSeF: czy KSeF działa teraz?"
        lede="Co 5 minut sprawdzamy, czy odpowiadają: API KSeF, Aplikacja Podatnika, strona Ministerstwa Finansów i login.gov.pl. Strona pokazuje tylko wyniki pomiarów, bez szacunków."
        toc={[
          { id: 'teraz', label: 'Status teraz' },
          { id: 'historia', label: 'Ostatnie 30 dni' },
          { id: 'co-robic', label: 'Co robić, gdy nie działa' },
          { id: 'jak-mierzymy', label: 'Jak mierzymy' },
          { id: 'faq', label: 'Pytania' },
        ]}
      >
        <section id="teraz" aria-labelledby="teraz-h">
          <h2 id="teraz-h">Status teraz</h2>
          <div className={`fk-status fk-status-${state}`} role="status">
            <Icon name={state === 'ok' ? 'check' : 'info'} size={22} />
            <div>
              <p className="fk-status-head">{headline}</p>
              <p className="fk-status-sub">{sub}</p>
            </div>
          </div>

          {latest && (
            <figure className="fk-table">
              <div className="fk-table-scroll">
                <table>
                  <thead>
                    <tr><th scope="col">Usługa</th><th scope="col">Teraz</th><th scope="col">Czas odpowiedzi</th><th scope="col">Dostępność 30 dni</th></tr>
                  </thead>
                  <tbody>
                    {latest.samples.map((s) => {
                      const n = days.reduce((a, d) => a + (d.checks[s.id]?.n ?? 0), 0);
                      const up = days.reduce((a, d) => a + (d.checks[s.id]?.up ?? 0), 0);
                      const p = pct(up, n);
                      return (
                        <tr key={s.id}>
                          <th scope="row">{label(s.id)}</th>
                          <td>{stale ? 'brak danych' : s.ok ? 'odpowiada' : s.status ? `błąd ${s.status}` : 'brak odpowiedzi'}</td>
                          <td>{s.ok ? `${s.ms} ms` : '—'}</td>
                          <td>{p === null ? '—' : `${p}% (${n} pomiarów)`}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <figcaption>Pomiar z sieci Cloudflare. Czas odpowiedzi to jedno zapytanie, więc waha się z minuty na minutę.</figcaption>
            </figure>
          )}
        </section>

        <section id="historia" aria-labelledby="hist-h">
          <h2 id="hist-h">Ostatnie 30 dni</h2>
          {firstDay ? (
            <>
              <p>
                Każdy słupek to jeden dzień: zielony, gdy wszystkie pomiary były udane, żółty poniżej 100%, czerwony poniżej 95%, szary, gdy nie mamy pomiarów. Monitoring działa od {new Date(firstDay).toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })}, więc starszej historii nie ma.
              </p>
              {data!.checks.map((c) => {
                const byDate = new Map(days.map((d) => [d.date, d.checks[c.id]]));
                const cells = Array.from({ length: 30 }, (_, i) => {
                  const d = new Date(Date.now() - (29 - i) * 86400000).toISOString().slice(0, 10);
                  const rec = byDate.get(d);
                  const p = rec ? pct(rec.up, rec.n) : null;
                  return { d, rec, cls: dayClass(rec), text: rec ? `${d}: ${p}% z ${rec.n} pomiarów` : `${d}: brak pomiarów` };
                });
                return (
                  <div className="fk-hist" key={c.id}>
                    <p className="fk-hist-name">{c.label}</p>
                    <ul className="fk-hist-bar" aria-label={`Dostępność ${c.label} w ostatnich 30 dniach`}>
                      {cells.map((x) => <li key={x.d} className={`fk-hist-${x.cls}`} title={x.text}><span className="fk-sr">{x.text}</span></li>)}
                    </ul>
                  </div>
                );
              })}
            </>
          ) : (
            <p>Historia pojawi się po pierwszych pomiarach.</p>
          )}
        </section>

        <section id="co-robic" aria-labelledby="co-h">
          <h2 id="co-h">Co robić, gdy KSeF nie działa</h2>
          <ul>
            <li>Sprawdź <a href={SRC.komunikaty.url} target="_blank" rel="noopener noreferrer">komunikaty techniczne MF</a>: tam ogłaszane są przerwy, utrudnienia i awarie.</li>
            <li>Jeśli nie działa logowanie, a API odpowiada, przyczyną bywa login.gov.pl albo Profil Zaufany. Wybierz inną metodę logowania.</li>
            <li>Wystawiasz faktury? Przy ogłoszonej niedostępności lub awarii obowiązują tryby offline. Opisujemy je w poradniku <Link href="/ksef-tryb-offline">tryb offline w KSeF</Link>.</li>
            <li>Szczegółowy przewodnik krok po kroku: <Link href="/ksef-nie-dziala">KSeF nie działa? Co zrobić</Link>.</li>
            <li>Faktury pobrane wcześniej masz na miejscu. Zobacz, <Link href="/jak-pobrac-fakture-z-ksef">jak pobrać fakturę z KSeF</Link>.</li>
          </ul>
        </section>

        <section id="jak-mierzymy" aria-labelledby="jak-h">
          <h2 id="jak-h">Jak mierzymy</h2>
          <p>Zadanie na platformie Cloudflare Workers wysyła co 5 minut jedno zapytanie GET do każdej z czterech usług. Usługa „odpowiada”, gdy zwróci kod 2xx lub 3xx w ciągu 8 sekund. Dla API KSeF używamy publicznego punktu z certyfikatami kluczy, który nie wymaga logowania.</p>
          <ul>
            <li>Nie logujemy się do KSeF i nie wysyłamy faktur, więc nie sprawdzamy, czy działa konkretna funkcja.</li>
            <li>Pomiary pochodzą z sieci Cloudflare, nie z Twojego połączenia.</li>
            <li>Zapisujemy wynik ostatniego pomiaru oraz dzienne sumy: liczbę pomiarów, udanych i średni czas odpowiedzi.</li>
            <li>Gdy sam monitor przestanie zapisywać wyniki, strona pisze „brak świeżych pomiarów”.</li>
          </ul>
          <aside className="fk-note"><Icon name="info" size={20} /><p>Oficjalne informacje o dostępności KSeF publikuje Ministerstwo Finansów. Ta strona jest niezależnym pomiarem i nie jest produktem MF.</p></aside>
        </section>

        <section id="faq" aria-labelledby="faq-h">
          <h2 id="faq-h">Pytania</h2>
          <div className="fk-faq">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}<i aria-hidden="true" /></summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </ArticleShell>
    </>
  );
}
