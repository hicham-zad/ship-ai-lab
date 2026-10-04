import type { Metadata } from 'next';
import { BottomLinks, ExamenShell, basePath, langOf, pageMeta } from '@/components/ExamenLegal';
import { EMAIL, SUPPORT, UI } from '../content';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = langOf((await params).locale);
  return pageMeta(lang, '/support', SUPPORT.metaTitle[lang], SUPPORT.metaDesc[lang]);
}

export default async function ExamenSupport({ params }: Props) {
  const lang = langOf((await params).locale);
  const b = basePath(lang);
  // The response note marks bold text with <b>…</b>; render it without raw HTML.
  const response = SUPPORT.response[lang].split(/<\/?b>/);
  return (
    <ExamenShell lang={lang} badge={`💬 ${UI.support[lang]}`} title={SUPPORT.title[lang]} subtitle={SUPPORT.subtitle[lang]} wide>
      <div className="ec-contact-hero">
        <div>
          <h2>{SUPPORT.emailTitle[lang]}</h2>
          <p>{SUPPORT.emailText[lang]}</p>
        </div>
        <a className="ec-btn ec-btn-brand" href={`mailto:${EMAIL}?subject=${encodeURIComponent(SUPPORT.emailSubject[lang])}`}>
          {SUPPORT.emailButton[lang]}
        </a>
      </div>
      <div className="ec-response">
        {response.map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part))}
      </div>

      <span className="ec-section-tag">{SUPPORT.faqTag[lang]}</span>
      <h2 className="ec-section-title">{SUPPORT.faqTitle[lang]}</h2>
      <div className="ec-faq-list">
        {SUPPORT.faqs[lang].map(([q, a]) => (
          <details key={q} className="ec-faq-item">
            <summary className="ec-faq-q">
              {q}
              <span className="ec-faq-chevron">+</span>
            </summary>
            <div className="ec-faq-a">{a}</div>
          </details>
        ))}
      </div>

      <BottomLinks
        links={[
          { href: `${b}/privacy-policy`, label: UI.privacy[lang] },
          { href: `${b}/terms-of-service`, label: UI.terms[lang] },
        ]}
      />
    </ExamenShell>
  );
}
