import Link from 'next/link';
import { KSEF_NAME, KSEF_PUBLISHER } from '@/data/ksef/config';
import { FEATURED_GUIDES } from '@/data/ksef/guides';
import { KSEF_ICON } from '@/data/ksef/screenshots';

export function SiteNav() {
  return (
    <header className="fk-nav">
      <div className="fk-wrap fk-nav-in">
        <Link href="/" className="fk-brand" aria-label={`${KSEF_NAME} – strona główna`}>
          {/* eslint-disable-next-line @next/next/no-img-element -- 64px WebP icon */}
          <img src={KSEF_ICON.webpSmall} alt="" width={32} height={32} />
          {KSEF_NAME}
        </Link>
        <nav className="fk-nav-links" aria-label="Główna nawigacja">
          <Link href="/#funkcje" className="fk-hide-sm">Funkcje</Link>
          <Link href="/guides">Poradniki</Link>
          <Link href="/#cennik" className="fk-hide-sm">Cennik</Link>
          <Link href="/support" className="fk-hide-sm">Pomoc</Link>
        </nav>
        <Link href="/#zapisy" className="fk-btn fk-btn-primary fk-btn-sm">Zapisz się</Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="fk-footer">
      <div className="fk-wrap">
        <div className="fk-foot-grid">
          <div>
            <Link href="/" className="fk-brand">
              {/* eslint-disable-next-line @next/next/no-img-element -- 64px WebP icon */}
              <img src={KSEF_ICON.webpSmall} alt="" width={32} height={32} />
              {KSEF_NAME}
            </Link>
            <p className="fk-p" style={{ marginTop: 14, maxWidth: 280, fontSize: 15 }}>
              Faktury z KSeF na telefonie. Bez konta, dane tylko na Twoim telefonie.
            </p>
          </div>
          <div>
            <h4>Aplikacja</h4>
            <ul>
              <li><Link href="/#faktury">Faktury i wyszukiwarka</Link></li>
              <li><Link href="/#powiadomienia">Powiadomienia</Link></li>
              <li><Link href="/#platnosci">Płatności i terminy</Link></li>
              <li><Link href="/#ksiegowa">Zestawienie dla księgowej</Link></li>
              <li><Link href="/#prywatnosc">Prywatność</Link></li>
              <li><Link href="/#cennik">Cennik</Link></li>
            </ul>
          </div>
          <div>
            <h4>Poradniki</h4>
            <ul>
              {FEATURED_GUIDES.map((g) => (
                <li key={g.slug}><Link href={`/${g.slug}`}>{g.short}</Link></li>
              ))}
              <li><Link href="/guides">Wszystkie poradniki</Link></li>
            </ul>
          </div>
          <div>
            <h4>Firma</h4>
            <ul>
              <li><Link href="/support">Pomoc</Link></li>
              <li><Link href="/privacy-policy">Polityka prywatności</Link></li>
              <li><Link href="/terms-of-service">Regulamin</Link></li>
              <li><a href="https://shipailab.com">ShipAI Lab</a></li>
            </ul>
          </div>
        </div>
        <div className="fk-foot-bottom">
          <span>© {new Date().getFullYear()} {KSEF_PUBLISHER}</span>
          <span>Aplikacja nie jest produktem Ministerstwa Finansów.</span>
        </div>
      </div>
    </footer>
  );
}
