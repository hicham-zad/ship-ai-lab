import type { Metadata } from 'next';
import { BottomLinks, ContactCard, MK_UPDATED, MeasureKitShell, Section, Toc } from '@/components/MeasureKitLegal';

export const metadata: Metadata = {
  title: 'Terms of Service | Measure Kit',
  description: 'Terms of Service for Measure Kit, including Measure Kit Pro subscription and lifetime purchase terms.',
  alternates: { canonical: 'https://shipailab.com/measure-kit/terms-of-service' },
  openGraph: {
    title: 'Terms of Service | Measure Kit',
    description: 'Terms for using Measure Kit and Measure Kit Pro.',
    url: 'https://shipailab.com/measure-kit/terms-of-service',
    type: 'website',
  },
};

const toc = [
  { id: 't-1', label: 'Agreement' },
  { id: 't-2', label: 'For Reference Only' },
  { id: 't-3', label: 'Measure Kit Pro' },
  { id: 't-4', label: 'Subscriptions & Free Trial' },
  { id: 't-5', label: 'Lifetime Purchase' },
  { id: 't-6', label: 'Refunds & Restoring' },
  { id: 't-7', label: 'License' },
  { id: 't-8', label: 'Disclaimer & Liability' },
  { id: 't-9', label: 'Changes & Contact' },
];

export default function MeasureKitTerms() {
  return (
    <MeasureKitShell badge="📄 Legal" title="Terms of Service" subtitle="The rules for using Measure Kit">
      <div className="mk-meta">
        <span className="mk-company">Measure Kit</span>
        <span className="mk-date">Last Updated: {MK_UPDATED}</span>
      </div>

      <Toc items={toc} />

      <Section id="t-1" title="1. Agreement">
        <p className="mk-p">
          By downloading or using Measure Kit (the &ldquo;App&rdquo;), operated by Hicham Zaidi, an independent
          developer, you agree to these terms. If you obtained the App from the Apple App Store, Apple&apos;s{' '}
          <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer">
            Standard Licensed Application End User License Agreement
          </a>{' '}
          also applies. If you obtained it from Google Play, the Google Play Terms of Service also apply.
        </p>
      </Section>

      <Section id="t-2" title="2. For Reference Only">
        <div className="mk-disclaimer">
          All measurements are approximate and provided for reference only. Accuracy depends on your device&apos;s
          sensors, screen, camera and surroundings.
        </div>
        <ul className="mk-ul">
          <li>The decibel meter is not a certified sound level meter.</li>
          <li>The magnetic field detector only reacts to magnetic materials and is not a professional metal detector.</li>
          <li>The compass is not intended for navigation.</li>
          <li>Do not rely on the App for medical, legal, safety-critical or professional purposes.</li>
        </ul>
      </Section>

      <Section id="t-3" title="3. Measure Kit Pro">
        <p className="mk-p">
          The ruler, bubble level, compass, protractor and decibel meter are free. Measure Kit Pro unlocks the AR tape
          measure, the magnetic field detector, unlimited history with notes and AR photos, CSV and PDF export, and
          removes the Pro banner. Prices are shown in the App before you buy and may vary by country.
        </p>
      </Section>

      <Section id="t-4" title="4. Subscriptions & Free Trial">
        <ul className="mk-ul">
          <li>The annual subscription may include a free trial for eligible new subscribers.</li>
          <li>Payment is charged to your App Store or Google Play account at confirmation of purchase, or at the end of the free trial.</li>
          <li>The subscription renews automatically unless cancelled at least 24 hours before the end of the current period. Your account is charged for renewal within 24 hours before the end of the period.</li>
          <li>Any unused portion of a free trial is forfeited when you purchase a subscription.</li>
          <li>You can manage or cancel your subscription in your store account settings, or from Settings → Manage subscription in the App.</li>
        </ul>
      </Section>

      <Section id="t-5" title="5. Lifetime Purchase">
        <p className="mk-p">
          The lifetime option is a one-time, non-consumable purchase that unlocks Pro permanently for your store
          account. It never renews and there is nothing to cancel.
        </p>
      </Section>

      <Section id="t-6" title="6. Refunds & Restoring">
        <p className="mk-p">
          Refunds are handled by Apple or Google according to their policies. Use &ldquo;Restore purchases&rdquo; in the
          App to unlock Pro on a new device signed in to the same store account.
        </p>
      </Section>

      <Section id="t-7" title="7. License">
        <p className="mk-p">
          We grant you a personal, non-exclusive, non-transferable license to use the App on devices you own or
          control. You may not reverse engineer, resell or redistribute the App.
        </p>
      </Section>

      <Section id="t-8" title="8. Disclaimer & Liability">
        <p className="mk-p">
          The App is provided &ldquo;as is&rdquo; without warranties of any kind. To the maximum extent permitted by law,
          we are not liable for any indirect, incidental or consequential damages, or for any loss arising from
          reliance on measurements made with the App. Nothing in these terms limits rights you have under mandatory
          consumer law.
        </p>
      </Section>

      <Section id="t-9" title="9. Changes & Contact">
        <p className="mk-p">
          We may update these terms and will post changes here with a new &ldquo;Last Updated&rdquo; date. Continued use
          after changes means you accept them. Questions? Contact us:
        </p>
        <ContactCard />
      </Section>

      <BottomLinks
        links={[
          { href: '/measure-kit/privacy-policy', label: '← Privacy Policy' },
          { href: '/measure-kit/support', label: 'Support →' },
        ]}
      />
    </MeasureKitShell>
  );
}
