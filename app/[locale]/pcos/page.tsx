import type { Metadata } from 'next';
import Link from 'next/link';
import { PcosShellBare } from '@/components/PcosLegal';
import { Phone, PhoneStack } from '@/components/pcos/FeaturePage';
import CycleBars from '@/components/pcos/CycleBars';
import Reveal from '@/components/pcos/Reveal';
import ScoreCard from '@/components/pcos/ScoreCard';
import { FEATURES, SAMPLE_NOTE } from '@/data/pcos/features';
import { SCORE_EXAMPLES } from '@/data/pcos/scores';
import { pcosStyles } from './pcos-styles';

export const metadata: Metadata = {
  title: 'PCOS & Endo Tracker | Cycle, Food Scan & Symptom Log',
  description:
    'Track symptoms, cycle, food and blood sugar for PCOS and endometriosis. Irregular-cycle history, barcode food grades with reasons, a doctor report and no account. Free to log.',
  keywords: ['PCOS tracker', 'endometriosis tracker', 'irregular period tracker', 'PCOS food scanner', 'PCOS symptom log', 'period tracker no account'],
  alternates: { canonical: 'https://shipailab.com/pcos' },
  openGraph: {
    title: 'PCOS & Endo Tracker',
    description: 'Symptoms, cycle, food scans and blood sugar in one place. Your data stays on your phone.',
    url: 'https://shipailab.com/pcos',
    siteName: 'PCOS & Endo Tracker',
    images: [{ url: '/pcos/home.png', width: 720, height: 1564, alt: 'PCOS & Endo Tracker home screen' }],
    type: 'website',
  },
};

const heroShots = [
  { file: 'home.png', alt: 'PCOS & Endo Tracker home screen with cycle day, pain level, added sugar and your Bloom streak (sample data)' },
  { file: 'log-period.png', alt: 'Daily log with period flow, clots and pain from 0 to 10 (sample entry)' },
  { file: 'scan-result-e.png', alt: 'Food scan result with grade E and the reason High added sugar (real product data)' },
];

const gallery = [
  { file: 'home.png', cap: 'Home: cycle day, pain, added sugar, streak', alt: 'Home screen (sample data)' },
  { file: 'log-symptoms.png', cap: 'Daily log: symptoms, mood, energy', alt: 'Daily log symptoms section (sample entry)' },
  { file: 'scan-result-b.png', cap: 'Food scan with the reason shown', alt: 'Food scan result, grade B (real product data)' },
  { file: 'trends-top.png', cap: 'Trends: pain and weight', alt: 'Trends screen (sample data)' },
  { file: 'trends-cycles.png', cap: 'Cycle history and an honest estimate', alt: 'Cycle history (sample data)' },
  { file: 'report.png', cap: 'The report for your doctor', alt: 'Doctor report screen (sample data)' },
];

const compare: [string, string, string][] = [
  ['Daily log, unlimited days', 'Yes', 'Yes'],
  ['Cycle history and late period check', 'Yes', 'Yes'],
  ['Food scans', '3 a day', 'Unlimited'],
  ['Trends', 'Last 7 days', '7 days, 1 month, 3 months'],
  ['Doctor report on screen, with questions to ask', 'Yes', 'Yes'],
  ['Doctor report as a PDF', 'No', 'Yes'],
  ['Pattern insights', 'No', 'Yes'],
  ['CSV export', 'No', 'Yes'],
  ['Share cards without the “Made with” badge', 'No', 'Yes'],
];

export default function PcosLanding() {
  return (
    <PcosShellBare>
      <style>{pcosStyles}</style>

      <section className="pcx-hero">
        <div className="pcx-hero-inner">
          <div>
            <div className="nr-badge">Free to log</div>
            <h1 className="pcx-h1">PCOS and endometriosis, <em>tracked in one place</em></h1>
            <p className="pcx-lede">
              Log symptoms, periods, pain, meals and blood sugar in about 20 seconds a day. See your cycles for what they
              are, scan a barcode and get the reasons behind a grade, and take a clear summary to your doctor. No
              account. Your log stays on your phone.
            </p>
            <div className="pcx-tags">
              <span className="pcx-tag free">Free to log</span>
              <span className="pcx-tag">No account</span>
              <span className="pcx-tag">No ads</span>
              <span className="pcx-tag">Built for PCOS and endo</span>
            </div>
          </div>
          <PhoneStack shots={heroShots} priority />
        </div>
      </section>

      <section className="pcx-sec">
        <div className="pcx-sec-inner">
          <Reveal>
            <span className="nr-section-tag">Features</span>
            <h2 className="pcx-h2">One page for every feature</h2>
            <p className="pcx-p">Each feature below has its own page: what it does, how it works, what it does not do, and whether it is free.</p>
            <div className="pcx-more">
              {FEATURES.map((f) => (
                <Link key={f.slug} href={`/pcos/${f.slug}`}>
                  <strong>{f.name}</strong>
                  <span>{f.short}</span>
                  <span className={`pcx-tag ${f.tier === 'Free' ? 'free' : f.tier === 'Premium' ? 'premium' : ''}`} style={{ marginTop: 10, display: 'inline-block' }}>{f.tier}</span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pcx-sec alt">
        <div className="pcx-sec-inner">
          <Reveal>
            <span className="nr-section-tag">Food scanner</span>
            <h2 className="pcx-h2">A grade, and the reason for it</h2>
            <p className="pcx-p">
              Scan a barcode and the app shows sugar, fiber and protein, a grade from A to E and up to three reasons. The
              rules are short enough to read in a minute. These are real products, scored by the same code the app uses.
            </p>
            <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap', marginTop: 8 }}>
              {SCORE_EXAMPLES.map((x) => (
                <ScoreCard key={x.name} s={x} />
              ))}
            </div>
            <p className="pcx-p" style={{ marginTop: 18 }}>
              <Link href="/pcos/pcos-food-scanner" style={{ color: 'var(--peach-strong)', fontWeight: 700 }}>How the scoring works →</Link>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pcx-sec">
        <div className="pcx-sec-inner">
          <Reveal>
            <div className="pcx-split flip" style={{ gridTemplateColumns: '1fr 1fr' }}>
              <CycleBars lengths={[31, 29, 38, 33, 41, 30]} />
              <div>
                <span className="nr-section-tag">Cycles</span>
                <h2 className="pcx-h2">Built for cycles that vary</h2>
                <p className="pcx-p">
                  Every cycle length is listed, and cycles outside 21 to 35 days are marked. A prediction only appears
                  after three completed cycles and is labelled an estimate. If a cycle runs past 35 days, a calm note says what that
                  can mean and when to mention it to your doctor.
                </p>
                <p className="pcx-p">
                  <Link href="/pcos/period-cycle-tracker" style={{ color: 'var(--peach-strong)', fontWeight: 700 }}>Cycle tracker →</Link>{' '}
                  <Link href="/pcos/late-period-check" style={{ color: 'var(--peach-strong)', fontWeight: 700, marginLeft: 14 }}>Late period check →</Link>
                </p>
                <p className="pcx-sample">Sample cycle lengths from the screenshots.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pcx-sec alt">
        <div className="pcx-sec-inner">
          <Reveal>
            <span className="nr-section-tag">Screens</span>
            <h2 className="pcx-h2">The real app</h2>
            <div className="pcx-duo" style={{ marginTop: 22 }}>
              {gallery.map((g) => (
                <figure key={g.file + g.cap} style={{ margin: 0 }}>
                  <Phone shot={{ file: g.file, alt: g.alt }} />
                  <figcaption className="pcx-cap">{g.cap}</figcaption>
                </figure>
              ))}
            </div>
            <p className="pcx-sample">{SAMPLE_NOTE}</p>
          </Reveal>
        </div>
      </section>

      <section className="pcx-sec">
        <div className="pcx-sec-inner">
          <Reveal>
            <span className="nr-section-tag">Pricing</span>
            <h2 className="pcx-h2">Free to log. Premium is optional.</h2>
            <p className="pcx-p">
              Everything you need to record your days is free. Premium is a weekly or yearly subscription, or a one-time Lifetime
              purchase, and adds longer trends, insights, unlimited scans and the PDF report.
            </p>
            <div className="nr-table-wrap">
              <table className="nr-table">
                <thead>
                  <tr><th>Feature</th><th>Free</th><th>Premium</th></tr>
                </thead>
                <tbody>
                  {compare.map(([a, b, c]) => (
                    <tr key={a}><td>{a}</td><td>{b}</td><td>{c}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pcx-sec alt">
        <div className="pcx-sec-inner">
          <Reveal>
            <span className="nr-section-tag">Privacy</span>
            <h2 className="pcx-h2">No account, no cloud copy</h2>
            <p className="pcx-p">
              Your log is stored in a database on your phone. The only thing that goes online about your activity is the barcode
              number when you scan a product, to look it up on Open Food Facts. The app runs no analytics, advertising or tracking SDKs.
            </p>
            <p className="pcx-p">
              <Link href="/pcos/private-no-account" style={{ color: 'var(--peach-strong)', fontWeight: 700 }}>What stays and what does not →</Link>
            </p>
            <p className="pcx-sample">
              This app is not a medical device and does not replace professional medical advice. It records what you enter and
              never diagnoses or recommends treatment.
            </p>
            <div className="nr-bottom-links">
              <Link href="/pcos/privacy-policy">Privacy Policy</Link>
              <Link href="/pcos/terms-of-service">Terms of Service</Link>
              <Link href="/pcos/support">Support</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PcosShellBare>
  );
}
