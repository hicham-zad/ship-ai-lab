import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { nerraStyles } from './nerra-styles';

export const metadata: Metadata = {
  title: 'Nerra — Private GLP-1 Companion for iPhone',
  description:
    'Nerra tracks your GLP-1 doses, injection sites, weight and how you feel. Private by design: no account, no cloud. Pay once, keep it forever.',
  keywords: ['GLP-1 app', 'Ozempic tracker', 'Wegovy tracker', 'Mounjaro tracker', 'injection tracker', 'dose reminder', 'semaglutide', 'tirzepatide'],
  alternates: { canonical: 'https://shipailab.com/nerra' },
  openGraph: {
    title: 'Nerra — Private GLP-1 Companion',
    description: 'Doses, injection sites, weight and check-ins. No account, no cloud. Pay once.',
    url: 'https://shipailab.com/nerra',
    siteName: 'Nerra',
    images: [{ url: '/nerra-icon.png', width: 512, height: 512, alt: 'Nerra app icon' }],
    type: 'website',
  },
};

const features = [
  ['Never miss a dose', 'Reminders, a next-dose date and a gentle follow-up reminder, all on your device.'],
  ['Dose calendar', 'See every dose you logged and the days you planned, all in one calendar.'],
  ['Injection sites', 'Rotate sites easily and get a warning before you log a duplicate dose.'],
  ['Weight & measurements', 'Track weight and body measurements and watch your progress over time.'],
  ['Daily check-ins', 'Log nausea, appetite and energy to spot patterns after dose changes.'],
  ['Doctor report', 'Export a clean PDF of your doses and progress for your next appointment.'],
];

const shots = [
  ['dashboard.png', 'Today'],
  ['medications.png', 'Medications'],
  ['progress.png', 'Progress'],
];

const compare: [string, boolean][] = [
  ['Dose logging, reminders & next dose', true],
  ['Injection site rotation & duplicate warning', true],
  ['Dose history & weight entries', true],
  ['Data export', true],
  ['Dose calendar', false],
  ['Daily check-ins & goals', false],
  ['Progress charts', false],
  ['Body measurements', false],
  ['Doctor report as PDF', false],
];

export default function NerraLanding() {
  return (
    <>
      <style>{nerraStyles}</style>
      <div className="nr-page">
        <nav className="nr-nav">
          <Link href="/nerra" className="nr-brand">
            <Image src="/nerra-icon.png" alt="Nerra" width={32} height={32} style={{ borderRadius: 9 }} />
            <span className="nr-wordmark">Nerra</span>
          </Link>
          <div className="nr-nav-links">
            <Link href="/nerra/support" className="nr-nav-link nr-keep">Support</Link>
            <Link href="/nerra/privacy-policy" className="nr-nav-link">Privacy</Link>
            <Link href="/nerra/terms-of-service" className="nr-nav-link">Terms</Link>
          </div>
        </nav>

        <section className="nr-land-hero">
          <div className="nr-land-inner">
            <div>
              <div className="nr-badge">GLP-1 companion</div>
              <h1 className="nr-land-title">Your therapy, <span>completely in view.</span></h1>
              <p className="nr-land-sub">
                Track doses, injection sites, weight and how you feel. Private by design: no account, no cloud.
                Pay once, keep it forever.
              </p>
              <span className="nr-soon">Coming soon to the App Store</span>
              <p className="nr-soon-note">For iPhone. Available in English and German.</p>
            </div>
            <div className="nr-phone">
              <Image src="/nerra/dashboard.png" alt="Nerra dashboard" width={700} height={1522} priority />
            </div>
          </div>
          <div className="nr-stats">
            <div className="nr-stat"><span className="nr-stat-num">0</span><span className="nr-stat-label">Accounts</span></div>
            <div className="nr-stat"><span className="nr-stat-num">0</span><span className="nr-stat-label">Ads or trackers</span></div>
            <div className="nr-stat"><span className="nr-stat-num">1×</span><span className="nr-stat-label">Payment, no subscription</span></div>
          </div>
        </section>

        <section className="nr-sec">
          <div className="nr-sec-inner">
            <span className="nr-section-tag">Features</span>
            <h2 className="nr-section-title">Everything you need between doses</h2>
            <div className="nr-features">
              {features.map(([t, d]) => (
                <div key={t} className="nr-feature">
                  <div className="nr-feature-title">{t}</div>
                  <p className="nr-feature-desc">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="nr-sec nr-sec-alt">
          <div className="nr-sec-inner">
            <span className="nr-section-tag">Screens</span>
            <h2 className="nr-section-title">Calm, clear and yours</h2>
            <div className="nr-shots">
              {shots.map(([file, label]) => (
                <figure key={file}>
                  <div className="nr-phone">
                    <Image src={`/nerra/${file}`} alt={`Nerra ${label}`} width={700} height={1522} />
                  </div>
                  <figcaption>{label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="nr-sec">
          <div className="nr-sec-inner">
            <span className="nr-section-tag">Free & Lifetime</span>
            <h2 className="nr-section-title">Start free. Unlock once.</h2>
            <p className="nr-sec-sub">
              Everything needed to take a dose safely is free. Nerra Lifetime is a single one-time purchase, with no
              subscription, that unlocks the rest.
            </p>
            <div className="nr-table-wrap">
              <table className="nr-table">
                <thead>
                  <tr><th>Feature</th><th>Free</th><th>Lifetime</th></tr>
                </thead>
                <tbody>
                  {compare.map(([label, free]) => (
                    <tr key={label}>
                      <td>{label}</td>
                      <td>{free ? <span className="nr-check">✓</span> : <span className="nr-dash">–</span>}</td>
                      <td><span className="nr-check">✓</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="nr-cta">
          <h2>Private by design</h2>
          <p>Your doses, weight and check-ins never leave your iPhone.</p>
          <Link href="/nerra/privacy-policy" className="nr-btn nr-btn-peach">Read the privacy policy</Link>
        </section>

        <div className="nr-legal-strip">
          <p>
            Nerra is not a medical device and does not provide medical advice. You always enter the dose your prescriber gave you; Nerra never calculates or suggests one.
            Always follow your prescriber&apos;s instructions. Nerra is not affiliated with any medication manufacturer.
          </p>
        </div>

        <footer className="nr-footer">
          <p>
            © {new Date().getFullYear()} Hicham Zaidi ·{' '}
            <Link href="/nerra/privacy-policy">Privacy</Link> · <Link href="/nerra/terms-of-service">Terms</Link> ·{' '}
            <Link href="/nerra/support">Support</Link>
          </p>
        </footer>
      </div>
    </>
  );
}
