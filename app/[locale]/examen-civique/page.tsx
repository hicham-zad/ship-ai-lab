import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Blocks, ExamenFooter, Nav, basePath, langOf, pageMeta } from '@/components/ExamenLegal';
import { examenStyles } from './examen-styles';
import { LANDING } from './content';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = langOf((await params).locale);
  return pageMeta(lang, '', LANDING.metaTitle[lang], LANDING.metaDesc[lang]);
}

export default async function ExamenLanding({ params }: Props) {
  const lang = langOf((await params).locale);
  const b = basePath(lang);
  return (
    <>
      <style>{examenStyles}</style>
      <div className="ec-page" lang={lang}>
        <Nav lang={lang} />

        <section className="ec-land-hero">
          <div className="ec-land-inner">
            <div>
              <div className="ec-badge">{LANDING.badge[lang]}</div>
              <h1 className="ec-land-title">{LANDING.title[lang]}</h1>
              <p className="ec-land-sub">{LANDING.sub[lang]}</p>
              <span className="ec-soon">{LANDING.soon[lang]}</span>
              <p className="ec-soon-note">{LANDING.soonNote[lang]}</p>
            </div>
            <div>
              <div className="ec-table-wrap">
                <table className="ec-table">
                  <thead>
                    <tr><th colSpan={2}>{LANDING.formatTitle[lang]}</th></tr>
                  </thead>
                  <tbody>
                    {LANDING.format.map(([label, value]) => (
                      <tr key={label.en}><td>{label[lang]}</td><td><strong>{value}</strong></td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="ec-soon-note"><Blocks blocks={[{ p: LANDING.formatNote[lang] }]} lang={lang} /></p>
            </div>
          </div>
          <div className="ec-stats">
            {LANDING.stats.map((s) => (
              <div key={s.n} className="ec-stat"><span className="ec-stat-num">{s.n}</span><span className="ec-stat-label">{s.label[lang]}</span></div>
            ))}
          </div>
        </section>

        <section className="ec-sec">
          <div className="ec-sec-inner">
            <span className="ec-section-tag">{LANDING.featuresTag[lang]}</span>
            <h2 className="ec-section-title">{LANDING.featuresTitle[lang]}</h2>
            <div className="ec-features">
              {LANDING.features.map(([t, d]) => (
                <div key={t.en} className="ec-feature">
                  <div className="ec-feature-title">{t[lang]}</div>
                  <p className="ec-feature-desc">{d[lang]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ec-sec ec-sec-alt">
          <div className="ec-sec-inner">
            <span className="ec-section-tag">{LANDING.screensTag[lang]}</span>
            <h2 className="ec-section-title">{LANDING.screensTitle[lang]}</h2>
            <p className="ec-sec-sub">{LANDING.screensSub[lang]}</p>
            <div className="ec-screens">
              {LANDING.screens.map((sc) => (
                <figure key={sc.file} className="ec-screen">
                  <Image src={`/examen-civique/${lang}/${sc.file}.png`} alt={sc.alt[lang]} title={sc.title[lang]} width={720} height={1561} sizes="(max-width: 700px) 60vw, 240px" />
                  <figcaption>{sc.cap[lang]}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="ec-sec">
          <div className="ec-sec-inner">
            <span className="ec-section-tag">{LANDING.planTag[lang]}</span>
            <h2 className="ec-section-title">{LANDING.planTitle[lang]}</h2>
            <p className="ec-sec-sub">{LANDING.planSub[lang]}</p>
            <div className="ec-table-wrap">
              <table className="ec-table">
                <thead>
                  <tr>{LANDING.compareHead.map((h) => <th key={h.en}>{h[lang]}</th>)}</tr>
                </thead>
                <tbody>
                  {LANDING.compare.map(([label, free]) => (
                    <tr key={label.en}>
                      <td>{label[lang]}</td>
                      <td>{free ? <span className="ec-check">✓</span> : <span className="ec-dash">–</span>}</td>
                      <td><span className="ec-check">✓</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="ec-cta">
          <h2>{LANDING.ctaTitle[lang]}</h2>
          <p>{LANDING.ctaText[lang]}</p>
          <Link href={`${b}/privacy-policy`} className="ec-btn ec-btn-brand">{LANDING.ctaButton[lang]}</Link>
        </section>

        <div className="ec-legal-strip">
          <p><Blocks blocks={[{ p: LANDING.strip[lang] }]} lang={lang} /></p>
        </div>

        <ExamenFooter lang={lang} />
      </div>
    </>
  );
}
