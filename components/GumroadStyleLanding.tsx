"use client";
import { Code, Smartphone, Brain, ArrowRight, ArrowLeft, Star, Zap, Shield, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import ClientReviews from './ClientReviews';
import ReviewSchema from './ReviewSchema';
import StructuredData from './StructuredData';
import { generateFAQSchema, generateImageSchema } from '@/lib/seo';

type Props = {
  heroTitle?: string;
  heroHighlight?: string;
  heroSubtitle?: string;
  ctaLabel?: string;
  ctaSub?: string;
  /** Override for the CTA section headline */
  ctaTitle?: string;
  socialProof?: string;
  introParagraph?: string;
  /** When provided, replaces translation-based FAQs with city-specific questions */
  faqOverride?: { question: string; answer: string }[];
};

export default function GumroadLandingWithProjects({
  heroTitle,
  heroHighlight,
  heroSubtitle,
  ctaLabel,
  ctaSub,
  ctaTitle,
  socialProof,
  introParagraph,
  faqOverride,
}: Props = {}) {
  const t = useTranslations('HomePage');
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const faqs = faqOverride ?? [
    { question: t('faq.q1'), answer: t('faq.a1') },
    { question: t('faq.q2'), answer: t('faq.a2') },
    { question: t('faq.q3'), answer: t('faq.a3') },
    { question: t('faq.q4'), answer: t('faq.a4') },
  ];

  const schemas = [
    generateFAQSchema(faqs),
    generateImageSchema({ url: '/logoooo.png', caption: 'Ship AI Lab Logo' }),
    generateImageSchema({ url: '/logo-tikonote.png', caption: 'TikoNote AI Study App built by Ship AI Solutions' }),
    generateImageSchema({ url: '/seenandfeel-logo.png', caption: 'SeenAndFeel AI Movie Recommendation App built by Ship AI Solutions' }),
    generateImageSchema({ url: '/namely-logo.png', caption: 'Namely AI Baby Naming App built by Ship AI Solutions' })
  ];

  return (
    <main className="min-h-screen text-gray-900 relative selection:bg-black selection:text-white overflow-hidden">
      
      {/* Schemas for AI crawlers and SEO */}
      <StructuredData data={schemas} />

      {/* Original Background Gradient */}
      <div className="absolute inset-0 -z-10 h-[120vh] w-full bg-white bg-[linear-gradient(to_right,#f5c4c4,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#fcaeae,transparent)]"></div>
      </div>

      {/* Navbar */}
      <nav className="w-full max-w-7xl mx-auto px-5 py-6 flex items-center justify-between z-50 relative" aria-label="Main Navigation">
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="relative">
            <div className="absolute inset-0 rounded-xl bg-[#ff5859]/15 scale-110 group-hover:scale-125 transition-transform" />
            <Image src="/logoooo.png" alt={t('images.logoAlt')} width={48} height={48} className="relative w-12 h-12 hover:opacity-90 transition-opacity" />
          </div>
          <span className="font-bold text-lg tracking-tight hidden sm:block ms-2">Ship AI Lab</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
          <a href="#services" className="hover:text-black transition-colors">{t('nav.services')}</a>
          <a href="#work" className="hover:text-black transition-colors">{t('nav.ourWork')}</a>
          <a href="#reviews" className="hover:text-black transition-colors">{t('nav.reviews')}</a>
          <a href="#faq" className="hover:text-black transition-colors">{t('nav.faq')}</a>
        </div>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <a
            href="https://calendly.com/hzaydi24/codeblend"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex px-4 py-2 bg-black text-white rounded-full font-semibold text-sm hover:bg-gray-800 hover:shadow-lg transition-all"
          >
            {t('nav.bookCall')}
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <article className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Hero Section */}
        <header className="flex flex-col items-center text-center pt-20 pb-12 md:pt-28 md:pb-20">
          {/* Service Tags */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {["SaaS", "Mobile Apps", "AI Tools", "Web Apps"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 bg-white/70 backdrop-blur-sm border border-gray-200 text-gray-500 rounded-full text-xs font-semibold tracking-widest uppercase shadow-sm cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] mb-7 tracking-tight text-black max-w-5xl mx-auto">
            {heroTitle ?? t('hero.title')}
            <br />
            <span className="text-[#ff5859] whitespace-nowrap">{heroHighlight ?? t('hero.titleHighlight')}</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mb-12 leading-relaxed mx-auto">
            {heroSubtitle ?? t('hero.subtitle')}
          </p>

          <div className="flex flex-col items-center gap-5 mb-16">
            <a
              href="https://calendly.com/hzaydi24/codeblend"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-10 py-5 bg-black text-white rounded-full font-semibold text-xl hover:bg-gray-800 hover:scale-105 hover:shadow-[0_10px_40px_rgba(0,0,0,0.15)] transition-all inline-flex items-center gap-2"
            >
              {ctaLabel ?? t('hero.cta')}
              <Arrow className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#ff5859] text-[#ff5859]" />
                ))}
              </div>
              <span>{socialProof ?? t('hero.socialProof')}</span>
            </div>
          </div>

          {/* SEO intro paragraph — only rendered on localized SEO pages for content differentiation */}
          {introParagraph && (
            <div className="w-full max-w-2xl mx-auto mb-10 px-6 py-5 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-2xl text-gray-500 text-base leading-relaxed text-center">
              {introParagraph}
            </div>
          )}

          {/* Trust Logos Strip */}
          <div className="w-full max-w-4xl mx-auto border-t border-gray-200/80 pt-6" aria-label="Companies that trust Ship AI Lab">
            <p className="text-[10px] text-gray-400 font-bold mb-4 uppercase tracking-[0.25em]">
              {t('hero.proof')}
            </p>
            <div className="overflow-hidden w-full">
              <div className={`flex items-center whitespace-nowrap w-max ${isRTL ? 'animate-marquee-rtl' : 'animate-marquee'}`}>
                {[...Array(2)].map((_, setIndex) => (
                  ["NoMoreCopyRight", "Studio Anrk", "Jarviximo", "RobotTizia AI", "SASGPT", "Reisknaller", "TikoNote", "Namely", "SeenAndFeel"].map((name) => (
                    <span key={`${setIndex}-${name}`} className="inline-flex items-center">
                      <span className="text-gray-400 hover:text-gray-800 transition-colors duration-200 font-semibold text-base select-none tracking-wide px-8">
                        {name}
                      </span>
                    </span>
                  ))
                ))}
              </div>
            </div>
          </div>
        </header>


        {/* Mobile Apps Section */}
        <section id="work" className="mb-24 mt-20" aria-labelledby="mobile-apps-title">
          <div className="flex flex-col mb-10">
            <h2 id="mobile-apps-title" className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-3">
              {t('mobileApps.title')}
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl">
              {t('mobileApps.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* TikoNote */}
            <a
              href="https://tikonote.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-[#fff9eb] rounded-[2rem] p-8 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center p-2 flex-shrink-0">
                  <Image src="/logo-tikonote.png" alt={t('images.tikonoteAlt')} width={48} height={48} className="w-full h-full object-cover rounded-xl" />
                </div>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <Arrow className="w-4 h-4 text-gray-400 group-hover:text-orange-500 group-hover:-rotate-45 transition-all" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-bold text-orange-500 uppercase tracking-widest mb-2">{t('mobileApps.tikonote.tagline')}</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('mobileApps.tikonote.name')}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">{t('mobileApps.tikonote.description')}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {(["iOS & Android", "AI-Powered"].map(tag => (
                  <span key={tag} className="px-3 py-1.5 bg-white shadow-sm rounded-full text-[10px] font-semibold text-gray-600">{tag}</span>
                )))}
              </div>
            </a>

            {/* SeenAndFeel */}
            <a
              href="https://apps.apple.com/us/app/seenandfeel-films-séries-tv/id6755637666"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-[#eff4ff] rounded-[2rem] p-8 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center p-2 flex-shrink-0">
                  <Image src="/seenandfeel-logo.png" alt={t('images.seenandfeelAlt')} width={48} height={48} className="w-full h-full object-contain" />
                </div>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <Arrow className="w-4 h-4 text-gray-400 group-hover:text-blue-500 group-hover:-rotate-45 transition-all" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-2">{t('mobileApps.seenandfeel.tagline')}</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('mobileApps.seenandfeel.name')}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">{t('mobileApps.seenandfeel.description')}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {(["iOS App", "Entertainment", "AI Recs"].map(tag => (
                  <span key={tag} className="px-3 py-1.5 bg-white shadow-sm rounded-full text-[10px] font-semibold text-gray-600">{tag}</span>
                )))}
              </div>
            </a>

            {/* Namely */}
            <a
              href="https://matchbabynames.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-[#fff0f5] rounded-[2rem] p-8 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 overflow-hidden p-1.5">
                  <Image src="/namely-logo.png" alt={t('images.namelyAlt')} width={48} height={48} className="w-full h-full object-cover rounded-xl" />
                </div>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <Arrow className="w-4 h-4 text-gray-400 group-hover:text-pink-500 group-hover:-rotate-45 transition-all" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-bold text-pink-500 uppercase tracking-widest mb-2">{t('mobileApps.namely.tagline')}</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('mobileApps.namely.name')}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">{t('mobileApps.namely.description')}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {(["iOS & Android", "Parenting"].map(tag => (
                  <span key={tag} className="px-3 py-1.5 bg-white shadow-sm rounded-full text-[10px] font-semibold text-gray-600">{tag}</span>
                )))}
              </div>
            </a>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-10" aria-label="Client Reviews">
          <ReviewSchema />
          <ClientReviews />
        </section>

        {/* Services Section */}
        <section id="services" className="mb-24 mt-16" aria-labelledby="services-title">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <h2 id="services-title" className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-2">
                {t('services.title')}
              </h2>
              <p className="text-gray-500 text-lg">{t('services.subtitle')}</p>
            </div>
            <p className="px-5 py-2.5 bg-white shadow-sm rounded-full text-gray-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
              <Zap className="w-4 h-4 text-gray-400" />
              {t('services.badge')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Code className="w-6 h-6 text-gray-700" />,
                title: t('services.saas.title'),
                desc: t('services.saas.description'),
                tags: ["Auth", "Payments", "Dashboard", "API"],
                bg: "bg-[#f0f9ff]",
              },
              {
                icon: <Smartphone className="w-6 h-6 text-gray-700" />,
                title: t('services.mobile.title'),
                desc: t('services.mobile.description'),
                tags: ["React Native", "iOS & Android", "App Store"],
                bg: "bg-[#f5f3ff]",
              },
              {
                icon: <Brain className="w-6 h-6 text-gray-700" />,
                title: t('services.ai.title'),
                desc: t('services.ai.description'),
                tags: ["OpenAI", "Claude", "RAG pipelines"],
                bg: "bg-[#ecfdf5]",
              }
            ].map((service, i) => (
              <div key={i} className={`group flex flex-col p-8 rounded-[2rem] hover:-translate-y-1 transition-transform duration-300 ${service.bg}`}>
                <div className="flex items-start justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-1">{service.desc}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.tags.map(tag => (
                    <span key={tag} className="px-3 py-1.5 bg-white shadow-sm rounded-full text-[10px] font-semibold text-gray-600">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects Grid */}
        <section className="mb-32 mt-16" aria-labelledby="featured-work-title">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <h2 id="featured-work-title" className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              {t('work.title')}
            </h2>
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{t('work.liveBadge')}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "NoMoreCopyRight",
                url: "https://nomorecopyright.com",
                desc: t('work.nomorecopyright'),
                tag: "AI · SaaS",
                bg: "bg-[#f0fdf4]",
                accent: "text-green-500"
              },
              {
                name: "Reisknaller",
                url: "https://www.reisknaller.nl",
                desc: t('work.reisknaller'),
                tag: "Web · Travel",
                bg: "bg-[#fffbeb]",
                accent: "text-amber-500"
              },
              {
                name: "StoryTyme",
                url: "https://storytyme.ai",
                desc: t('work.storytyme'),
                tag: "AI · Consumer",
                bg: "bg-[#faf5ff]",
                accent: "text-fuchsia-500"
              },
              {
                name: "GetsweetAI",
                url: "https://getsweet.ai",
                desc: t('work.getsweetai'),
                tag: "AI · SaaS",
                bg: "bg-[#fff1f2]",
                accent: "text-rose-500"
              }
            ].map(({ name, url, desc, tag, bg, accent }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-8 rounded-[2rem] hover:-translate-y-1 transition-transform duration-300 flex flex-col justify-between ${bg}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${accent}`}>{tag}</span>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      <Arrow className={`w-4 h-4 text-gray-400 group-hover:-rotate-45 transition-all`} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{desc}</p>
                </div>
                <span className="text-xs text-gray-400 font-medium flex items-center gap-2 group-hover:text-black transition-colors">
                  <Shield className="w-3.5 h-3.5" />
                  {url.replace(/^https?:\/\//, '')}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-24 mt-16 py-16 bg-[#fafafa] rounded-[2rem]" aria-label="Company Statistics">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-2 group-hover:text-[#ff5859] transition-colors">15</div>
              <div className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{t('stats.delivery')}</div>
            </div>
            <div className="group">
              <div className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-2 group-hover:text-[#ff5859] transition-colors">12+</div>
              <div className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{t('stats.projects')}</div>
            </div>
            <div className="group">
              <div className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-2 group-hover:text-[#ff5859] transition-colors">5.0</div>
              <div className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{t('stats.rating')} ⭐</div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="mb-32 max-w-4xl mx-auto" aria-labelledby="faq-title">
          <div className="text-center mb-12">
            <h2 id="faq-title" className="text-4xl font-bold text-gray-900 mb-4">{t('faq.title')}</h2>
            <p className="text-gray-500 text-lg">{t('faq.subtitle')}</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-white border border-gray-200 rounded-[1.5rem] p-6 shadow-sm cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between font-bold text-lg text-gray-900 outline-none">
                  {faq.question}
                  <span className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-open:-rotate-180 transition-transform duration-300 flex-shrink-0 ms-4">
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </span>
                </summary>
                <div className="mt-4 text-gray-500 leading-relaxed pe-8">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-black text-white p-12 md:p-20 rounded-[3rem] text-center mb-20 shadow-2xl relative overflow-hidden group" aria-label="Call to Action">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -mr-20 -mt-20 group-hover:bg-white/10 transition-colors" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ff5859]/20 rounded-full blur-[80px] -ml-20 -mb-20 group-hover:bg-[#ff5859]/30 transition-colors" />
          
          <div className="max-w-2xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white tracking-tight">
              {ctaTitle ?? t('cta.title')}
            </h2>
            <p className="text-lg text-gray-400 mb-10 leading-relaxed">
              {t('cta.subtitle')}
            </p>
            <a
              href="https://calendly.com/hzaydi24/codeblend"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:scale-105 shadow-xl transition-all inline-flex items-center gap-2"
            >
              {t('cta.button')}
              <Arrow className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>
        </section>

      </article>

      {/* Footer */}
      <footer className="py-12 bg-gray-50/50 mt-10" role="contentinfo">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-8 text-center md:text-start">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <Image src="/logoooo.png" alt={t('images.logoAlt')} width={24} height={24} className="opacity-80" />
              <span className="font-bold text-gray-900">{t('footer.brand')}</span>
            </div>
            <p className="text-sm text-gray-500 mb-2">{t('footer.copyright')}</p>
            <p className="text-xs text-gray-400">{t('footer.address')}</p>
            <p className="text-xs text-gray-400">{t('footer.contact')}</p>
          </div>
          <div className="flex flex-col gap-3 md:items-end items-center">
            <a href="/privacy-policy" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors">{t('footer.privacyPolicy')}</a>
            <a href="/terms-of-service" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors">{t('footer.termsOfService')}</a>
          </div>
        </div>
      </footer>
    </main>
  );
}