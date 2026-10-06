import type { Metadata } from 'next';
import { BottomLinks, PCOS_UPDATED, PcosContactCard, PcosShell, Section, Toc } from '@/components/PcosLegal';

export const metadata: Metadata = {
  title: 'Terms of Service | PCOS & Endo Tracker',
  description: 'Terms of Service for PCOS & Endo Tracker.',
  alternates: { canonical: 'https://shipailab.com/pcos/terms-of-service' },
  openGraph: {
    title: 'Terms of Service | PCOS & Endo Tracker',
    description: 'Terms of Service for PCOS & Endo Tracker.',
    url: 'https://shipailab.com/pcos/terms-of-service',
    type: 'website',
  },
};

const toc = [
  { id: 't-1', label: 'Agreement' },
  { id: 't-2', label: 'Eligibility' },
  { id: 't-3', label: 'The App' },
  { id: 't-4', label: 'Medical Disclaimer' },
  { id: 't-5', label: 'Your Data' },
  { id: 't-6', label: 'Food Scores' },
  { id: 't-7', label: 'Premium Purchases' },
  { id: 't-8', label: 'Intellectual Property' },
  { id: 't-9', label: 'Acceptable Use' },
  { id: 't-10', label: 'Disclaimers' },
  { id: 't-11', label: 'Limitation of Liability' },
  { id: 't-12', label: 'Termination' },
  { id: 't-13', label: 'Governing Law' },
  { id: 't-14', label: 'Changes & Contact' },
];

export default function PcosTerms() {
  return (
    <PcosShell badge="📄 Legal" title="Terms of Service" subtitle="The rules for using PCOS & Endo Tracker">
      <div className="nr-meta">
        <span className="nr-company">PCOS &amp; Endo Tracker</span>
        <span className="nr-date">Last Updated: {PCOS_UPDATED}</span>
      </div>

      <div className="nr-disclaimer">
        Not medical advice. This App is for tracking only and does not diagnose, treat or replace professional care.
      </div>

      <Toc items={toc} />

      <Section id="t-1" title="1. Agreement">
        <p className="nr-p">
          These Terms govern your use of the PCOS &amp; Endo Tracker mobile app (the &ldquo;App&rdquo;), operated by
          Hicham Zaidi (&ldquo;we&rdquo;, &ldquo;us&rdquo;). By using the App you agree to these Terms and our{' '}
          <a href="/pcos/privacy-policy">Privacy Policy</a>. If you do not agree, do not use the App.
        </p>
      </Section>

      <Section id="t-2" title="2. Eligibility">
        <p className="nr-p">You must be at least 18 years old to use the App.</p>
      </Section>

      <Section id="t-3" title="3. The App">
        <p className="nr-p">
          The App is a personal tracking tool for symptoms, cycle, food and blood sugar. You are responsible for how
          you use the information it shows. We may change or discontinue features at any time.
        </p>
      </Section>

      <Section id="t-4" title="4. Medical Disclaimer">
        <p className="nr-p">
          The App helps you notice patterns and share them with your doctor or GP. It is not a medical device, does
          not diagnose any condition, and does not replace professional medical advice, diagnosis or treatment. Never
          ignore professional advice or delay seeking it because of something in the App. If you have severe pain,
          heavy bleeding or any urgent concern, contact a healthcare professional or emergency services.
        </p>
      </Section>

      <Section id="t-5" title="5. Your Data">
        <p className="nr-p">
          Your entries are stored only on your device, as described in our Privacy Policy. You are responsible for
          keeping your own copy using the export feature. If you delete the App or lose your device, we cannot
          recover your data.
        </p>
      </Section>

      <Section id="t-6" title="6. Food Scores">
        <p className="nr-p">
          Food scores are simple on-device rules applied to data from Open Food Facts, a community database that may
          be incomplete or out of date. They are a guide only, not dietary or medical advice. Always check product
          labels, especially if you have allergies or medical dietary needs.
        </p>
      </Section>

      <Section id="t-7" title="7. Premium Purchases">
        <p className="nr-p">
          Logging, cycle history, a limited number of daily food scans and 7-day trends are free. Premium is an
          optional, offered as an auto-renewing weekly or yearly subscription or as a one-time Lifetime purchase, with
          prices shown in the App before you buy. There is no free trial.
        </p>
        <ul className="nr-ul">
          <li>Payment is charged to your Apple Account at confirmation of purchase.</li>
          <li>Lifetime is a single payment that never renews and unlocks Premium for as long as the App is offered.</li>
          <li>
            Weekly and yearly subscriptions renew automatically unless you cancel at least 24 hours before the end of the current
            period. Your account is charged for renewal within 24 hours before the period ends.
          </li>
          <li>
            Manage or cancel subscriptions any time in Settings &rarr; your name &rarr; Subscriptions. Deleting the App does not
            cancel your subscription.
          </li>
          <li>Refunds are handled by Apple under its policies at reportaproblem.apple.com.</li>
        </ul>
      </Section>

      <Section id="t-8" title="8. Intellectual Property">
        <p className="nr-p">
          The App, its design and its content are owned by us or our licensors. We grant you a personal,
          non-exclusive, non-transferable licence to use the App on your own devices. Your entries remain yours.
        </p>
      </Section>

      <Section id="t-9" title="9. Acceptable Use">
        <p className="nr-p">You agree not to:</p>
        <ul className="nr-ul">
          <li>Use the App for any unlawful purpose</li>
          <li>Copy, reverse engineer or resell the App</li>
          <li>Interfere with the App&apos;s operation or its purchase validation</li>
        </ul>
      </Section>

      <Section id="t-10" title="10. Disclaimers">
        <p className="nr-p">
          The App is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, to
          the fullest extent permitted by law.
        </p>
      </Section>

      <Section id="t-11" title="11. Limitation of Liability">
        <p className="nr-p">
          To the fullest extent permitted by law, we are not liable for indirect, incidental, special or
          consequential damages, or for any decision you make about your health based on the App. Our total liability
          for any claim is limited to the amount you paid for the App in the twelve months before the claim. Nothing
          in these Terms limits liability that cannot be limited by law.
        </p>
      </Section>

      <Section id="t-12" title="12. Termination">
        <p className="nr-p">
          You may stop using the App at any time by deleting it. We may suspend or end access if you breach these
          Terms.
        </p>
      </Section>

      <Section id="t-13" title="13. Governing Law">
        <p className="nr-p">
          These Terms are governed by the laws of the State of Wyoming, United States, without regard to
          conflict-of-law rules. Mandatory consumer-protection rights in your country of residence remain unaffected.
        </p>
      </Section>

      <Section id="t-14" title="14. Changes & Contact">
        <p className="nr-p">
          We may update these Terms and will post changes here with a new &ldquo;Last Updated&rdquo; date. Questions?
          Contact us:
        </p>
        <PcosContactCard />
      </Section>

      <BottomLinks
        links={[
          { href: '/pcos/privacy-policy', label: '← Privacy Policy' },
          { href: '/pcos/support', label: 'Support →' },
        ]}
      />
    </PcosShell>
  );
}
