import type { Metadata } from 'next';
import { BottomLinks, ContactCard, NERRA_EMAIL, NERRA_UPDATED, NerraShell, Section, Toc } from '@/components/NerraLegal';

export const metadata: Metadata = {
  title: 'Privacy Policy | Nerra',
  description:
    'Privacy Policy for Nerra, the private GLP-1 companion app. Your doses, weight and check-ins stay on your device.',
  alternates: { canonical: 'https://shipailab.com/nerra/privacy-policy' },
  openGraph: {
    title: 'Privacy Policy | Nerra',
    description: 'Your doses, weight and check-ins stay on your device.',
    url: 'https://shipailab.com/nerra/privacy-policy',
    type: 'website',
  },
};

const toc = [
  { id: 'p-1', label: 'Introduction' },
  { id: 'p-2', label: 'What Stays on Your Device' },
  { id: 'p-3', label: 'What We Do Not Collect' },
  { id: 'p-4', label: 'Apple Health' },
  { id: 'p-5', label: 'Photos & Camera' },
  { id: 'p-6', label: 'Notifications' },
  { id: 'p-7', label: 'Purchases & RevenueCat' },
  { id: 'p-8', label: 'Children' },
  { id: 'p-9', label: 'Retention & Deletion' },
  { id: 'p-10', label: 'Your Rights' },
  { id: 'p-11', label: 'Security' },
  { id: 'p-12', label: 'Changes & Contact' },
];

export default function NerraPrivacyPolicy() {
  return (
    <NerraShell badge="🔒 Legal" title="Privacy Policy" subtitle="How Nerra handles your information">
      <div className="nr-meta">
        <span className="nr-company">Nerra</span>
        <span className="nr-date">Last Updated: {NERRA_UPDATED}</span>
      </div>

      <div className="nr-highlight">
        Your therapy data is yours. Doses, weight, measurements, check-ins and photos are stored only on your
        device. Nerra has no account, no cloud and no advertising, and we never receive your health data.
      </div>

      <Toc items={toc} />

      <Section id="p-1" title="1. Introduction">
        <p className="nr-p">
          Hicham Zaidi, an independent developer (&ldquo;we&rdquo;, &ldquo;us&rdquo;), operates the Nerra mobile app (the
          &ldquo;App&rdquo;), a private companion for people who use GLP-1 medication. This Privacy Policy explains
          what information the App handles and how. By using the App you agree to this policy.
        </p>
      </Section>

      <Section id="p-2" title="2. What Stays on Your Device">
        <p className="nr-p">The following is stored locally on your device and is never sent to our servers:</p>
        <ul className="nr-ul">
          <li>Your medication, dose amounts, schedule and dose history</li>
          <li>Injection sites and reminders</li>
          <li>Weight entries and body measurements</li>
          <li>Daily check-ins (for example nausea, appetite and energy) and goals</li>
          <li>Progress photos</li>
          <li>App settings and a cached copy of your purchase status</li>
        </ul>
        <p className="nr-p">Deleting the App removes this data from your device permanently. There is no cloud backup or sync.</p>
      </Section>

      <Section id="p-3" title="3. What We Do Not Collect">
        <p className="nr-p">
          We do not run analytics, advertising or tracking SDKs, we do not create accounts, and we do not collect
          your name, email address, location or health data. We do not sell or share personal data.
        </p>
      </Section>

      <Section id="p-4" title="4. Apple Health">
        <p className="nr-p">
          Nerra does not access Apple Health (HealthKit). It does not read data from or write data to the Health app.
          Weight and other entries exist only in Nerra on your device.
        </p>
      </Section>

      <Section id="p-5" title="5. Photos & Camera">
        <p className="nr-p">
          If you add progress photos, Nerra asks for camera or photo library access. Photos are stored only on your
          device and are not uploaded anywhere.
        </p>
      </Section>

      <Section id="p-6" title="6. Notifications">
        <p className="nr-p">
          Dose and check-in reminders are local notifications scheduled on your device. They do not use a push
          notification server.
        </p>
      </Section>

      <Section id="p-7" title="7. Purchases & RevenueCat">
        <p className="nr-p">
          Nerra offers a one-time &ldquo;Nerra Lifetime&rdquo; purchase, processed by Apple. We use{' '}
          <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">RevenueCat</a> to
          validate purchases. RevenueCat receives an anonymous app user ID, your purchase receipt and basic device
          and app-version information so it can confirm what you own and restore it on request. It does not receive
          your therapy or health data. Apple handles your payment details; we never see them. See{' '}
          <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">Apple&apos;s Privacy Policy</a>.
        </p>
      </Section>

      <Section id="p-8" title="8. Children">
        <p className="nr-p">
          Nerra is intended for adults. We do not knowingly collect personal information from anyone under 18. If
          you believe a child has used the App, contact us and we will take appropriate steps.
        </p>
      </Section>

      <Section id="p-9" title="9. Retention & Deletion">
        <p className="nr-p">
          Because your data lives only on your device, it is kept as long as the App is installed. Uninstalling
          deletes it. If you email us for support, we keep your message only as long as needed to resolve your request.
        </p>
      </Section>

      <Section id="p-10" title="10. Your Rights">
        <p className="nr-p">
          Depending on where you live (for example under GDPR or CCPA), you may have rights to access, correct,
          delete or export your personal data, and to object to its processing. As we hold no personal data about you
          beyond anonymous purchase records handled by RevenueCat and Apple, deleting the App removes what is on your
          device. For any request, email <a href={`mailto:${NERRA_EMAIL}`}>{NERRA_EMAIL}</a>.
        </p>
      </Section>

      <Section id="p-11" title="11. Security">
        <p className="nr-p">
          Your data is protected by your device&apos;s security (passcode, Face ID and iOS storage protection). If
          you lose or reset your device, Nerra data cannot be recovered, which is an intentional privacy trade-off.
          Use the export feature in the App if you want a copy.
        </p>
      </Section>

      <Section id="p-12" title="12. Changes & Contact">
        <p className="nr-p">
          We may update this policy and will post changes here with a new &ldquo;Last Updated&rdquo; date. Questions?
          Contact us:
        </p>
        <ContactCard />
      </Section>

      <BottomLinks
        links={[
          { href: '/nerra', label: '← Nerra' },
          { href: '/nerra/terms-of-service', label: 'Terms of Service →' },
        ]}
      />
    </NerraShell>
  );
}
