import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { measureKitStyles } from './measure-kit-styles';

export const metadata: Metadata = {
  title: 'Measure Kit — Tape Measure, Level & Ruler',
  description:
    'Ruler, bubble level, compass, protractor and decibel meter in one simple app, plus AR tape measure and magnetic field detector with Pro. No account, measurements stay on your device.',
  keywords: ['tape measure app', 'bubble level', 'ruler app', 'compass', 'protractor', 'decibel meter', 'AR measure', 'magnetic field detector'],
  alternates: { canonical: 'https://shipailab.com/measure-kit' },
  openGraph: {
    title: 'Measure Kit — Tape Measure, Level & Ruler',
    description: 'Seven measuring tools in one clean app. No account, no ads.',
    url: 'https://shipailab.com/measure-kit',
    siteName: 'Measure Kit',
    images: [{ url: '/measure-kit-icon.png', width: 512, height: 512, alt: 'Measure Kit app icon' }],
    type: 'website',
  },
};

const features = [
  ['Ruler', 'On-screen ruler in cm/mm and inches with draggable handles, plus a quick bank-card calibration.'],
  ['Bubble level', 'Surface and edge modes, live degrees, a haptic tick at 0.0° and a set-zero calibration.'],
  ['Compass', 'Heading with cardinal direction, true or magnetic north, and a hint when it needs calibrating.'],
  ['Protractor', 'Two draggable arms with angle and reflex angle readout.'],
  ['Decibel meter', 'Live dB with min, average and max on a quiet-to-dangerous scale. Nothing is recorded.'],
  ['AR tape measure', 'Tap two points on a surface to measure. Paths and rectangle areas too. Pro.'],
  ['Magnetic field detector', 'Live µT reading, graph and a beep when the field spikes, to find magnets and steel. Pro.'],
  ['History & export', 'Save measurements with notes and AR photos, then export to CSV or PDF. Pro.'],
];

const compare: [string, boolean][] = [
  ['Ruler, bubble level & compass', true],
  ['Protractor & decibel meter', true],
  ['Save up to 3 measurements', true],
  ['AR tape measure (ARKit / ARCore)', false],
  ['Magnetic field detector', false],
  ['Unlimited history with notes & AR photos', false],
  ['CSV & PDF export', false],
];

export default function MeasureKitLanding() {
  return (
    <>
      <style>{measureKitStyles}</style>
      <div className="mk-page">
        <nav className="mk-nav">
          <Link href="/measure-kit" className="mk-brand">
            <Image src="/measure-kit-icon.png" alt="Measure Kit" width={32} height={32} style={{ borderRadius: 9 }} />
            <span className="mk-wordmark">Measure Kit</span>
          </Link>
          <div className="mk-nav-links">
            <Link href="/measure-kit/support" className="mk-nav-link mk-keep">Support</Link>
            <Link href="/measure-kit/privacy-policy" className="mk-nav-link">Privacy</Link>
            <Link href="/measure-kit/terms-of-service" className="mk-nav-link">Terms</Link>
          </div>
        </nav>

        <section className="mk-land-hero">
          <div className="mk-land-inner">
            <div>
              <div className="mk-badge">Measuring toolkit</div>
              <h1 className="mk-land-title">Measure anything, <span>right from your phone.</span></h1>
              <p className="mk-land-sub">
                Ruler, bubble level, compass, protractor and decibel meter for free. Add an AR tape measure and a
                magnetic field detector with Pro. No account, no ads.
              </p>
              <span className="mk-soon">Coming soon to the App Store</span>
              <p className="mk-soon-note">For iPhone and iPad. Available in 11 languages.</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Image
                src="/measure-kit-icon.png"
                alt="Measure Kit app icon"
                width={260}
                height={260}
                priority
                style={{ borderRadius: 58, boxShadow: '0 40px 80px -20px rgba(29,74,94,.3)' }}
              />
            </div>
          </div>
          <div className="mk-stats">
            <div className="mk-stat"><span className="mk-stat-num">7</span><span className="mk-stat-label">Tools</span></div>
            <div className="mk-stat"><span className="mk-stat-num">0</span><span className="mk-stat-label">Accounts</span></div>
            <div className="mk-stat"><span className="mk-stat-num">0</span><span className="mk-stat-label">Ads or trackers</span></div>
          </div>
        </section>

        <section className="mk-sec">
          <div className="mk-sec-inner">
            <span className="mk-section-tag">Tools</span>
            <h2 className="mk-section-title">Everything in one toolbox</h2>
            <div className="mk-features">
              {features.map(([t, d]) => (
                <div key={t} className="mk-feature">
                  <div className="mk-feature-title">{t}</div>
                  <p className="mk-feature-desc">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mk-sec mk-sec-alt">
          <div className="mk-sec-inner">
            <span className="mk-section-tag">Free & Pro</span>
            <h2 className="mk-section-title">Start free. Upgrade when you need more.</h2>
            <p className="mk-sec-sub">
              Five tools are free with no limits. Measure Kit Pro is available as an annual subscription with a free
              trial or as a one-time lifetime purchase. Prices are shown in the app before you buy.
            </p>
            <div className="mk-table-wrap">
              <table className="mk-table">
                <thead>
                  <tr><th>Feature</th><th>Free</th><th>Pro</th></tr>
                </thead>
                <tbody>
                  {compare.map(([label, free]) => (
                    <tr key={label}>
                      <td>{label}</td>
                      <td>{free ? <span className="mk-check">✓</span> : <span className="mk-dash">–</span>}</td>
                      <td><span className="mk-check">✓</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mk-cta">
          <h2>Private by design</h2>
          <p>Your measurements stay on your device. The microphone is only used for live dB metering, never recording.</p>
          <Link href="/measure-kit/privacy-policy" className="mk-btn mk-btn-peach">Read the privacy policy</Link>
        </section>

        <div className="mk-legal-strip">
          <p>
            All measurements are approximate and for reference only. The decibel meter is not a certified sound level
            meter, and the magnetic field detector only reacts to magnetic materials.
          </p>
        </div>

        <footer className="mk-footer">
          <p>
            © {new Date().getFullYear()} Hicham Zaidi ·{' '}
            <Link href="/measure-kit/privacy-policy">Privacy</Link> · <Link href="/measure-kit/terms-of-service">Terms</Link> ·{' '}
            <Link href="/measure-kit/support">Support</Link>
          </p>
        </footer>
      </div>
    </>
  );
}
