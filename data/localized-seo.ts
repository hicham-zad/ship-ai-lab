export type LocalizedSeoPage = {
  slug: string;
  locale: string;
  /** ≤ 60 chars */
  seoTitle: string;
  /** ≤ 155 chars */
  seoDescription: string;
  heroTitle: string;
  heroHighlight: string;
  heroSubtitle: string;
  introParagraph: string;
  ctaLabel: string;
  ctaSub: string;
  socialProof: string;
};

export const localizedSeoPages: LocalizedSeoPage[] = [
  // ── French ──────────────────────────────────────────────────────────────
  {
    locale: 'fr',
    slug: 'agence-developpement-ia',
    seoTitle: 'Agence Développement IA | SaaS & Apps — Ship AI Solutions',
    seoDescription:
      "Agence IA spécialisée SaaS, apps mobiles et sites web. De la stratégie au lancement pour fondateurs et entreprises — en quelques semaines.",
    heroTitle: 'Nous créons des produits IA.',
    heroHighlight: 'Vous les lancez rapidement.',
    heroSubtitle:
      "Ship AI Solutions est une agence spécialisée en produits IA. Nous développons des SaaS, apps mobiles (iOS/Android) et sites web pour fondateurs et entreprises — de la stratégie jusqu'au lancement, en quelques semaines.",
    introParagraph:
      "Que vous soyez startup ou PME, notre équipe couvre l'intégralité du cycle produit : discovery, design UX, développement full-stack, intégration IA, tests et mise en production. Pas d'intermédiaires, pas de délais inutiles.",
    ctaLabel: 'Réserver un appel gratuit',
    ctaSub: 'Consultation de 30 min · Sans engagement',
    socialProof: '+20 avis 5 étoiles sur Upwork et Fiverr',
  },

  // ── Spanish ─────────────────────────────────────────────────────────────
  {
    locale: 'es',
    slug: 'agencia-desarrollo-ia',
    seoTitle: 'Agencia Desarrollo IA | SaaS & Apps — Ship AI Solutions',
    seoDescription:
      'Agencia IA para SaaS, apps móviles y sitios web. Del concepto al lanzamiento en semanas para fundadores y empresas que quieren moverse rápido.',
    heroTitle: 'Creamos productos de IA.',
    heroHighlight: 'Tú los lanzas rápido.',
    heroSubtitle:
      'Ship AI Solutions es una agencia especializada en productos de IA. Diseñamos y construimos SaaS, apps móviles (iOS/Android) y sitios web para fundadores y empresas — desde la estrategia hasta el lanzamiento, en semanas.',
    introParagraph:
      'Tanto si eres una startup en fase temprana como una empresa consolidada, nuestro equipo cubre todo el ciclo del producto: discovery, diseño UX, desarrollo full-stack, integración de IA, pruebas y despliegue. Sin intermediarios, sin plazos interminables.',
    ctaLabel: 'Reservar llamada gratis',
    ctaSub: 'Consulta de 30 min · Sin compromiso',
    socialProof: '+20 reseñas de cinco estrellas en Upwork y Fiverr',
  },

  // ── German ──────────────────────────────────────────────────────────────
  {
    locale: 'de',
    slug: 'ki-entwicklungsagentur',
    seoTitle: 'KI-Entwicklungsagentur | SaaS & Apps — Ship AI Solutions',
    seoDescription:
      'KI-Agentur für SaaS, Apps und Webentwicklung. Von der Strategie bis zum Launch in wenigen Wochen — für Gründer und Unternehmen weltweit.',
    heroTitle: 'Wir entwickeln KI-Produkte.',
    heroHighlight: 'Sie launchen schnell.',
    heroSubtitle:
      'Ship AI Solutions ist eine Agentur, spezialisiert auf KI-gestützte Produkte. Wir entwickeln SaaS-Lösungen, mobile Apps (iOS/Android) und Webanwendungen für Gründer und Unternehmen — von der Strategie bis zum Launch, in wenigen Wochen.',
    introParagraph:
      'Ob Frühphasen-Startup oder etabliertes Unternehmen — unser Team übernimmt den gesamten Produktzyklus: Discovery, UX-Design, Full-Stack-Entwicklung, KI-Integration, Testing und Deployment. Kein Aufwand, keine unnötigen Verzögerungen.',
    ctaLabel: 'Kostenloses Gespräch buchen',
    ctaSub: '30 Min. Beratung · Keine Verpflichtung',
    socialProof: 'Mehr als 20 Fünf-Sterne-Bewertungen auf Upwork und Fiverr',
  },

  // ── Portuguese ──────────────────────────────────────────────────────────
  {
    locale: 'pt',
    slug: 'agencia-desenvolvimento-ia',
    seoTitle: 'Agência Desenvolvimento IA | SaaS & Apps — Ship AI Solutions',
    seoDescription:
      'Agência IA para SaaS, apps móveis e sites. Da estratégia ao lançamento em semanas para fundadores e empresas que precisam agir rápido.',
    heroTitle: 'Criamos produtos de IA.',
    heroHighlight: 'Você lança rápido.',
    heroSubtitle:
      'A Ship AI Solutions é uma agência especializada em produtos de IA. Criamos SaaS, apps móveis (iOS/Android) e sites para fundadores e empresas — da estratégia ao lançamento, em semanas.',
    introParagraph:
      'Seja uma startup em fase inicial ou uma empresa consolidada, nossa equipe cobre todo o ciclo do produto: descoberta, design UX, desenvolvimento full-stack, integração de IA, testes e implantação. Sem intermediários, sem prazos intermináveis.',
    ctaLabel: 'Agendar chamada gratuita',
    ctaSub: 'Consulta de 30 min · Sem compromisso',
    socialProof: '+20 avaliações cinco estrelas no Upwork e Fiverr',
  },

  // ── Italian ─────────────────────────────────────────────────────────────
  {
    locale: 'it',
    slug: 'agenzia-sviluppo-ia',
    seoTitle: 'Agenzia Sviluppo IA | SaaS & App — Ship AI Solutions',
    seoDescription:
      'Agenzia IA specializzata in SaaS, app mobile e siti web. Dalla strategia al lancio in poche settimane per founder e aziende che vogliono muoversi veloce.',
    heroTitle: 'Creiamo prodotti IA.',
    heroHighlight: 'Tu lanci veloce.',
    heroSubtitle:
      'Ship AI Solutions è un\'agenzia specializzata in prodotti basati su IA. Sviluppiamo SaaS, app mobile (iOS/Android) e siti web per founder e aziende — dalla strategia al lancio, in poche settimane.',
    introParagraph:
      'Che tu sia una startup in fase iniziale o un\'azienda consolidata, il nostro team copre l\'intero ciclo di prodotto: discovery, design UX, sviluppo full-stack, integrazione IA, test e deploy. Nessun intermediario, nessun ritardo inutile.',
    ctaLabel: 'Prenota una chiamata gratuita',
    ctaSub: 'Consulenza di 30 min · Senza impegno',
    socialProof: '+20 recensioni 5 stelle su Upwork e Fiverr',
  },

  // ── Dutch ───────────────────────────────────────────────────────────────
  {
    locale: 'nl',
    slug: 'ai-ontwikkelbureau',
    seoTitle: 'AI Ontwikkelbureau | SaaS & Apps — Ship AI Solutions',
    seoDescription:
      'Gespecialiseerd AI-bureau voor SaaS, mobiele apps en websites. Van strategie tot lancering in enkele weken voor founders en bedrijven.',
    heroTitle: 'Wij bouwen AI-producten.',
    heroHighlight: 'Jij lanceert snel.',
    heroSubtitle:
      'Ship AI Solutions is een AI-ontwikkelbureau gespecialiseerd in SaaS, mobiele apps (iOS/Android) en websites voor founders en bedrijven — van strategie tot lancering in enkele weken.',
    introParagraph:
      'Of je nu een vroegfase startup bent of een gevestigd bedrijf, ons team verzorgt de volledige productcyclus: discovery, UX-design, full-stack ontwikkeling, AI-integratie, testen en deployment. Geen tussenpersonen, geen onnodige vertragingen.',
    ctaLabel: 'Boek een gratis gesprek',
    ctaSub: '30 min. consult · Geen verplichtingen',
    socialProof: '+20 vijfsterrenreviews op Upwork en Fiverr',
  },

  // ── Russian ─────────────────────────────────────────────────────────────
  {
    locale: 'ru',
    slug: 'agentstvo-razrabotki-ii',
    seoTitle: 'Агентство разработки ИИ | SaaS & Apps — Ship AI Solutions',
    seoDescription:
      'ИИ-агентство для SaaS, мобильных приложений и сайтов. От стратегии до запуска за несколько недель — для стартапов и компаний.',
    heroTitle: 'Создаём AI-продукты.',
    heroHighlight: 'Вы запускаете быстро.',
    heroSubtitle:
      'Ship AI Solutions — агентство, специализирующееся на продуктах на базе ИИ. Разрабатываем SaaS, мобильные приложения (iOS/Android) и сайты для стартапов и компаний — от стратегии до запуска за несколько недель.',
    introParagraph:
      'Независимо от того, являетесь ли вы стартапом или устоявшейся компанией, наша команда охватывает весь цикл продукта: обнаружение, UX-дизайн, full-stack разработку, интеграцию ИИ, тестирование и деплой. Без посредников, без лишних задержек.',
    ctaLabel: 'Записаться на бесплатный звонок',
    ctaSub: 'Консультация 30 мин · Без обязательств',
    socialProof: 'Более 20 отзывов с оценкой 5 звёзд на Upwork и Fiverr',
  },

  // ── Japanese ────────────────────────────────────────────────────────────
  {
    locale: 'ja',
    slug: 'ai-kaihatsu-agency',
    seoTitle: 'AI開発エージェンシー | SaaS・アプリ・Web — Ship AI Solutions',
    seoDescription:
      'AIを活用したSaaS・モバイルアプリ・Webサービスを開発。戦略からローンチまで数週間で実現する、創業者・企業向けのAI開発会社です。',
    heroTitle: 'AIプロダクトを開発します。',
    heroHighlight: 'すばやくローンチ。',
    heroSubtitle:
      'Ship AI Solutionsは、AIを活用したSaaS・モバイルアプリ（iOS/Android）・Webサービスを開発するエージェンシーです。創業者や企業のために、戦略からローンチまで数週間でプロダクトをお届けします。',
    introParagraph:
      'スタートアップから大企業まで、私たちのチームがプロダクトサイクル全体をカバーします。ディスカバリー、UXデザイン、フルスタック開発、AI統合、テスト、デプロイまで。中間業者なし、無駄な遅延なし。',
    ctaLabel: '無料相談を予約する',
    ctaSub: '30分の無料相談 · 契約義務なし',
    socialProof: 'UpworkとFiverrで20件以上の5つ星レビュー',
  },
];
