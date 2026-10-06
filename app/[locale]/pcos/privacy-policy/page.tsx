import type { Metadata } from 'next';
import { BottomLinks, PCOS_EMAIL, PCOS_UPDATED, PcosContactCard, PcosShell, Section, Toc } from '@/components/PcosLegal';

export const metadata: Metadata = {
  title: 'Privacy Policy | PCOS & Endo Tracker',
  description:
    'Privacy Policy for PCOS & Endo Tracker. Your symptoms, cycle, food and notes stay on your device.',
  alternates: { canonical: 'https://shipailab.com/pcos/privacy-policy' },
  openGraph: {
    title: 'Privacy Policy | PCOS & Endo Tracker',
    description: 'Your symptoms, cycle, food and notes stay on your device.',
    url: 'https://shipailab.com/pcos/privacy-policy',
    type: 'website',
  },
};

const toc = [
  { id: 'p-1', label: 'Introduction' },
  { id: 'p-2', label: 'What Stays on Your Device' },
  { id: 'p-3', label: 'What We Do Not Collect' },
  { id: 'p-4', label: 'Barcode Scanning & Open Food Facts' },
  { id: 'p-5', label: 'Camera & Photos' },
  { id: 'p-6', label: 'Notifications' },
  { id: 'p-7', label: 'Purchases & RevenueCat' },
  { id: 'p-8', label: 'Exports & Sharing' },
  { id: 'p-9', label: 'Children' },
  { id: 'p-10', label: 'Retention & Deletion' },
  { id: 'p-11', label: 'Your Rights' },
  { id: 'p-12', label: 'Security' },
  { id: 'p-13', label: 'Changes & Contact' },
];

export default function PcosPrivacyPolicy() {
  return (
    <PcosShell badge="🔒 Legal" title="Privacy Policy" subtitle="How PCOS & Endo Tracker handles your information">
      <div className="nr-meta">
        <span className="nr-company">PCOS &amp; Endo Tracker</span>
        <span className="nr-date">Last Updated: {PCOS_UPDATED}</span>
      </div>

      <div className="nr-highlight">
        Your health data is yours. Everything you log is stored only on your phone. The app has no account, no
        cloud and no advertising, and we never receive your health entries.
      </div>

      <Toc items={toc} />

      <Section id="p-1" title="1. Introduction">
        <p className="nr-p">
          Hicham Zaidi, an independent developer (&ldquo;we&rdquo;, &ldquo;us&rdquo;), operates the PCOS &amp; Endo
          Tracker mobile app (the &ldquo;App&rdquo;). This Privacy Policy explains what information the App handles
          and how. By using the App you agree to this policy.
        </p>
      </Section>

      <Section id="p-2" title="2. What Stays on Your Device">
        <p className="nr-p">The following is stored locally on your device and is never sent to our servers:</p>
        <ul className="nr-ul">
          <li>Symptoms, periods, cycle history, pain and mood entries</li>
          <li>Meals, supplements and blood sugar readings</li>
          <li>Notes and anything else you log</li>
          <li>App settings, reminders and a cached copy of your purchase status</li>
        </ul>
        <p className="nr-p">Deleting the App removes this data from your device permanently. There is no cloud backup or sync.</p>
      </Section>

      <Section id="p-3" title="3. What We Do Not Collect">
        <p className="nr-p">
          We do not run analytics, advertising or tracking SDKs, we do not create accounts, and we do not collect
          your name, email address, location or health data. We do not sell or share personal data. The App does not
          access Apple Health (HealthKit).
        </p>
      </Section>

      <Section id="p-4" title="4. Barcode Scanning & Open Food Facts">
        <p className="nr-p">
          When you scan a food barcode, the App looks the product up on{' '}
          <a href="https://world.openfoodfacts.org" target="_blank" rel="noopener noreferrer">Open Food Facts</a>, a
          public community database. This is the only network request the App makes about your activity, and only the
          barcode number is sent. Like any web request, it exposes your IP address to that service. Your health
          entries are never included. See{' '}
          <a href="https://world.openfoodfacts.org/privacy" target="_blank" rel="noopener noreferrer">Open Food Facts&apos; privacy policy</a>.
        </p>
      </Section>

      <Section id="p-5" title="5. Camera & Photos">
        <p className="nr-p">
          The App asks for camera access only to scan food barcodes. Images from the camera are processed on your
          device and are not stored or uploaded. If you choose to save a share card, the App asks for permission to
          add it to your Photos; it does not read your existing photos.
        </p>
      </Section>

      <Section id="p-6" title="6. Notifications">
        <p className="nr-p">
          Reminders are local notifications scheduled on your device. They do not use a push notification server.
        </p>
      </Section>

      <Section id="p-7" title="7. Purchases & RevenueCat">
        <p className="nr-p">
          Premium (a weekly or yearly subscription, or a one-time Lifetime purchase) is processed by Apple. We use{' '}
          <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">RevenueCat</a> to
          validate purchases. RevenueCat receives an anonymous app user ID, your purchase receipt and basic device and
          app-version information so it can confirm what you own and restore it on request. It does not receive your
          health entries. Apple handles your payment details; we never see them. See{' '}
          <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">Apple&apos;s Privacy Policy</a>.
        </p>
      </Section>

      <Section id="p-8" title="8. Exports & Sharing">
        <p className="nr-p">
          You can export your data as a CSV file or a PDF report, and share cards, using the iOS share sheet. These
          files are created on your device and go only where you choose to send them. Once you share a file, the
          recipient&apos;s handling of it is outside our control.
        </p>
      </Section>

      <Section id="p-9" title="9. Children">
        <p className="nr-p">
          The App is intended for adults. We do not knowingly collect personal information from anyone under 18. If
          you believe a child has used the App, contact us and we will take appropriate steps.
        </p>
      </Section>

      <Section id="p-10" title="10. Retention & Deletion">
        <p className="nr-p">
          Because your data lives only on your device, it is kept as long as the App is installed. You can delete all
          of it any time from Settings, and uninstalling the App also removes it. If you email us for support, we
          keep your message only as long as needed to resolve your request.
        </p>
      </Section>

      <Section id="p-11" title="11. Your Rights">
        <p className="nr-p">
          Depending on where you live (for example under GDPR, UK GDPR, the Australian Privacy Act or CCPA), you may
          have rights to access, correct, delete or export your personal data, and to object to its processing. As we
          hold no personal data about you beyond anonymous purchase records handled by RevenueCat and Apple, deleting
          the App removes what is on your device. For any request, email{' '}
          <a href={`mailto:${PCOS_EMAIL}`}>{PCOS_EMAIL}</a>.
        </p>
      </Section>

      <Section id="p-12" title="12. Security">
        <p className="nr-p">
          Your data is protected by your device&apos;s security (passcode, Face ID and iOS storage protection). If you
          lose or reset your device, App data cannot be recovered, which is an intentional privacy trade-off. Use the
          export feature if you want a copy.
        </p>
      </Section>

      <Section id="p-13" title="13. Changes & Contact">
        <p className="nr-p">
          We may update this policy and will post changes here with a new &ldquo;Last Updated&rdquo; date. Questions?
          Contact us:
        </p>
        <PcosContactCard />
      </Section>

      <BottomLinks
        links={[
          { href: '/pcos', label: '← App' },
          { href: '/pcos/terms-of-service', label: 'Terms of Service →' },
        ]}
      />
    </PcosShell>
  );
}
