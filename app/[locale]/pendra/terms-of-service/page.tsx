import type { Metadata } from 'next';
import { BottomLinks, ContactCard, PENDRA_UPDATED, PendraShell, Section, Toc } from '@/components/PendraLegal';

export const metadata: Metadata = {
  title: 'Terms of Service | Pendra',
  description: 'Terms of Service for Pendra, the private GLP-1 companion app.',
  alternates: { canonical: 'https://shipailab.com/pendra/terms-of-service' },
  openGraph: {
    title: 'Terms of Service | Pendra',
    description: 'Terms of Service for Pendra.',
    url: 'https://shipailab.com/pendra/terms-of-service',
    type: 'website',
  },
};

const toc = [
  { id: 't-1', label: 'Agreement' },
  { id: 't-2', label: 'Eligibility' },
  { id: 't-3', label: 'The App' },
  { id: 't-4', label: 'Medical Disclaimer' },
  { id: 't-5', label: 'Your Data' },
  { id: 't-6', label: 'Pendra Lifetime' },
  { id: 't-7', label: 'Intellectual Property' },
  { id: 't-8', label: 'Acceptable Use' },
  { id: 't-9', label: 'Disclaimers' },
  { id: 't-10', label: 'Limitation of Liability' },
  { id: 't-11', label: 'Termination' },
  { id: 't-12', label: 'Governing Law' },
  { id: 't-13', label: 'Changes' },
  { id: 't-14', label: 'Contact' },
];

export default function PendraTerms() {
  return (
    <PendraShell badge="📄 Legal" title="Terms of Service" subtitle="The rules for using Pendra">
      <div className="nr-meta">
        <span className="nr-company">Ship AI Solutions, LLC — Pendra</span>
        <span className="nr-date">Last Updated: {PENDRA_UPDATED}</span>
      </div>

      <div className="nr-disclaimer">
        Pendra is not a medical device and does not give medical advice. Always follow the instructions of your
        prescriber and pharmacist for your medication and dose.
      </div>

      <Toc items={toc} />

      <Section id="t-1" title="1. Agreement">
        <p className="nr-p">
          These Terms govern your use of the Pendra mobile app (the &ldquo;App&rdquo;) provided by Ship AI
          Solutions, LLC (&ldquo;we&rdquo;, &ldquo;us&rdquo;). By downloading or using the App you agree to these
          Terms and our Privacy Policy. If you do not agree, do not use the App. Apple&apos;s standard Licensed
          Application End User License Agreement also applies unless we provide a custom one.
        </p>
      </Section>

      <Section id="t-2" title="2. Eligibility">
        <p className="nr-p">You must be at least 18 years old to use the App.</p>
      </Section>

      <Section id="t-3" title="3. The App">
        <p className="nr-p">
          Pendra helps you track GLP-1 medication: logging doses, seeing your next dose, estimating medication
          level, reminders, weight and measurements, check-ins, a dose calendar and a PDF report you can share with
          your doctor. Some features are free and others are part of Pendra Lifetime.
        </p>
      </Section>

      <Section id="t-4" title="4. Medical Disclaimer">
        <div className="nr-disclaimer">
          Pendra is for tracking and information only. It does not diagnose, treat, cure or prevent any condition
          and does not replace professional medical advice.
        </div>
        <p className="nr-p">
          The medication level chart, next-dose dates, missed-dose guidance and dose calculator are estimates based
          on general pharmacological models and the information you enter. They may be inaccurate for you. Never
          change your dose, skip a dose or take an extra dose based only on the App. Confirm everything with your
          healthcare provider. In an emergency, call your local emergency number.
        </p>
      </Section>

      <Section id="t-5" title="5. Your Data">
        <p className="nr-p">
          The App has no account. Your data is stored on your device (see the Privacy Policy). You are responsible
          for keeping your device secure and for exporting anything you want to keep, because deleting the App or
          losing your device permanently removes the data.
        </p>
      </Section>

      <Section id="t-6" title="6. Pendra Lifetime">
        <ul className="nr-ul">
          <li>Pendra Lifetime is a one-time, non-consumable in-app purchase. It is not a subscription and does not renew.</li>
          <li>Payment is charged to your Apple Account at confirmation. The price is shown in the App before you buy.</li>
          <li>The purchase unlocks the premium features of the App for as long as we offer the App. You can restore it on any device signed in to the same Apple Account using &ldquo;Restore&rdquo;.</li>
          <li>Refunds are handled by Apple under its policies. Request one at reportaproblem.apple.com.</li>
          <li>We may change which features are free or premium in future versions, but will not remove features you have already unlocked without a reasonable alternative.</li>
        </ul>
      </Section>

      <Section id="t-7" title="7. Intellectual Property">
        <p className="nr-p">
          The App, including its design, illustrations, text and code, belongs to us or our licensors. We grant you a
          limited, non-exclusive, non-transferable, revocable licence to use the App for your personal use.
        </p>
      </Section>

      <Section id="t-8" title="8. Acceptable Use">
        <p className="nr-p">You agree not to:</p>
        <ul className="nr-ul">
          <li>Reverse-engineer, decompile or modify the App, or circumvent its purchase or licensing checks</li>
          <li>Use the App for any unlawful purpose</li>
          <li>Resell, sublicence or commercially exploit the App or its content</li>
          <li>Interfere with the App&apos;s operation</li>
        </ul>
      </Section>

      <Section id="t-9" title="9. Disclaimers">
        <p className="nr-p">
          The App is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind,
          express or implied, including accuracy, fitness for a particular purpose and uninterrupted operation, to
          the fullest extent permitted by law.
        </p>
      </Section>

      <Section id="t-10" title="10. Limitation of Liability">
        <p className="nr-p">
          To the fullest extent permitted by law, we are not liable for indirect, incidental, special or
          consequential damages, or for any loss arising from your reliance on the App&apos;s estimates or your
          medication decisions. Our total liability for any claim is limited to the amount you paid for the App in
          the twelve months before the claim. Nothing in these Terms limits liability that cannot be limited by law.
        </p>
      </Section>

      <Section id="t-11" title="11. Termination">
        <p className="nr-p">
          You can stop using the App at any time by deleting it. We may suspend or end access if you breach these Terms.
        </p>
      </Section>

      <Section id="t-12" title="12. Governing Law">
        <p className="nr-p">
          These Terms are governed by the laws of the State of Wyoming, United States, without regard to
          conflict-of-law rules. Mandatory consumer-protection rights in your country of residence remain unaffected.
        </p>
      </Section>

      <Section id="t-13" title="13. Changes">
        <p className="nr-p">
          We may update these Terms and will post the new version here with a new &ldquo;Last Updated&rdquo; date.
          Continued use of the App means you accept the update.
        </p>
      </Section>

      <Section id="t-14" title="14. Contact">
        <ContactCard />
      </Section>

      <BottomLinks
        links={[
          { href: '/pendra', label: '← Pendra' },
          { href: '/pendra/privacy-policy', label: 'Privacy Policy →' },
        ]}
      />
    </PendraShell>
  );
}
