import type { Metadata } from 'next';
import Link from 'next/link';
import { PcosShell } from '@/components/PcosLegal';

export const metadata: Metadata = {
  title: 'PCOS & Endo Tracker | Cycle, Food Scan & Symptom Log',
  description:
    'Track symptoms, cycle, food and blood sugar for PCOS and endometriosis. Your data stays on your phone. Free to log.',
  alternates: { canonical: 'https://shipailab.com/pcos' },
  openGraph: {
    title: 'PCOS & Endo Tracker',
    description: 'Symptoms, cycle, food scans and blood sugar in one place. Your data stays on your phone.',
    url: 'https://shipailab.com/pcos',
    siteName: 'PCOS & Endo Tracker',
    images: [{ url: '/pcos-icon.png', width: 512, height: 512, alt: 'PCOS & Endo Tracker app icon' }],
    type: 'website',
  },
};

const features = [
  ['Daily log', 'Symptoms, periods, pain, mood, meals, supplements and blood sugar in under a minute a day.'],
  ['Cycle history', 'Unlimited history, plus a late-period check that tells you honestly what a long cycle can mean.'],
  ['Food scan', 'Scan a barcode and see why a product scores the way it does for PCOS.'],
  ['Trends', 'Spot patterns over time, with 7-day trends free.'],
  ['Report for your appointment', 'Export a clean PDF of your history to take to your doctor or GP.'],
  ['Private by design', 'No account and no cloud. Everything you log stays on your phone.'],
];

export default function PcosLanding() {
  return (
    <PcosShell badge="Free to log" title="PCOS & Endo Tracker" subtitle="Cycle, food, glucose and symptoms in one place" wide>
      <span className="nr-section-tag">Features</span>
      <h2 className="nr-section-title">Built for PCOS and endometriosis</h2>
      <div className="pc-plans">
        {features.map(([t, d]) => (
          <div key={t} className="pc-plan">
            <strong>{t}</strong>
            <span>{d}</span>
          </div>
        ))}
      </div>

      <span className="nr-section-tag">Pricing</span>
      <h2 className="nr-section-title">Free to log. Premium is optional.</h2>
      <p className="nr-p">
        Logging, cycle history, 3 food scans a day and 7-day trends are free. Premium adds the appointment PDF
        report, insights from your full history and unlimited food scans, as a weekly or yearly subscription, or a one-time Lifetime purchase.
      </p>

      <p className="nr-p">
        This app is not a medical device and does not replace professional medical advice.
      </p>

      <div className="nr-bottom-links">
        <Link href="/pcos/privacy-policy">Privacy Policy</Link>
        <Link href="/pcos/terms-of-service">Terms of Service</Link>
        <Link href="/pcos/support">Support</Link>
      </div>
    </PcosShell>
  );
}
