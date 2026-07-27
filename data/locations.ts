interface Location {
  slug: string;
  name: string;
  title: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  intro: string;
  image: string;
  services: string[];
  whyUs: string[];
  techStack: string[];
  startingPrice: string;
  timeline: string;
  stats: {
    satisfaction: string;
    timeSaved: string;
    successRate: string;
  };
  highlights: {
    icon: string;
    title: string;
    description: string;
  }[];
  keywords?: string[];
}

const locations: Location[] = [
  {
    slug: "ai-mvp-agency-in-lagos",
    name: "Lagos",
    title: "AI App Development Agency in Lagos | Ship AI Lab",
    metaDescription: "Lagos AI development agency for Nigerian startups. Build fintech and mobile MVPs in 15 days in Africa's tech capital. Paystack & mobile-first integrations included.",
    h1: "AI MVP Agency in Lagos",
    subtitle: "Build Fintech and Mobile AI Apps in West Africa's Fastest-Growing Tech Hub.",
    intro: "Lagos is Africa's startup engine — home to a booming fintech ecosystem, a population of 22 million, and a wave of founders building the next generation of mobile-first products. We've worked with Nigerian founders to ship Paystack-integrated payments, USSD flows for unbanked users, and AI-powered mobile apps built for low-bandwidth environments. If you're building for the African market, you need a team that actually understands it.",
    image: "/location-lagos.png",
    services: [
      "Mobile-first fintech app development",
      "Paystack & Flutterwave payment integration",
      "AI chatbots in local languages",
      "USSD & SMS solutions for unbanked users",
      "E-commerce platforms for African markets",
      "WhatsApp Business API automation"
    ],
    whyUs: [
      "We understand the Nigerian market — mobile-first, data-conscious, and fast-moving",
      "We integrate local payment rails like Paystack, Flutterwave, and bank transfers natively",
      "15-day sprint delivery so you can test with real users fast",
      "We've shipped apps used by thousands of Nigerian users — not just prototypes",
      "Offline-ready and low-data architecture for real-world African connectivity"
    ],
    techStack: ["React Native", "Next.js", "OpenAI", "Firebase", "Paystack", "Flutterwave"],
    startingPrice: "$3,500",
    timeline: "15 days",
    stats: {
      satisfaction: "94%",
      timeSaved: "3x faster",
      successRate: "60+ projects"
    },
    highlights: [
      {
        icon: "📱",
        title: "Mobile-First by Default",
        description: "Over 85% of Nigerian internet users are on mobile. Every product we build is designed mobile-first, not as an afterthought."
      },
      {
        icon: "💳",
        title: "Local Payments Built In",
        description: "Paystack, Flutterwave, bank transfers, and USSD flows are native to our Lagos builds — not bolted on at the end."
      },
      {
        icon: "⚡",
        title: "15-Day Delivery",
        description: "We run focused two-week sprints. No endless planning cycles — you get working software and user feedback fast."
      }
    ],
    keywords: ["AI development Lagos", "fintech MVP Nigeria", "Paystack integration", "mobile app Lagos", "Lagos startup development", "AI agency Nigeria"]
  },
  {
    slug: "ai-mvp-agency-in-tel-aviv",
    name: "Tel Aviv",
    title: "AI App Development Agency in Tel Aviv | Ship AI Lab",
    metaDescription: "Tel Aviv AI development agency for Israeli startups. Build security-first MVPs and enterprise AI tools in 15 days. Trusted by Startup Nation founders.",
    h1: "AI Development Agency in Tel Aviv",
    subtitle: "Build Innovative AI Apps at the Speed of Startup Nation.",
    intro: "Tel Aviv punches above its weight — more startup exits per capita than almost anywhere on earth, and a technical talent pool that's second to none. Israeli founders tend to move fast, think big, and expect engineering quality to match. We've helped Tel Aviv-based teams move from whiteboard to working MVP in 15 days, without sacrificing the security rigor or architecture quality that enterprise clients demand. Whether you're raising a seed round or preparing for a Series A demo, we help you ship something investors can actually see working.",
    image: "/location-tel-aviv.png",
    services: [
      "Enterprise AI SaaS MVP development",
      "Cybersecurity-adjacent AI tooling",
      "B2B fintech platform development",
      "Defense & govtech applications",
      "Data pipeline & ML model integration",
      "Investor demo prototypes"
    ],
    whyUs: [
      "We build security-first — Israeli enterprise clients expect it and we deliver it",
      "We work with founders who need demo-ready products for fundraising timelines",
      "15-day sprints designed for the pace of Startup Nation",
      "Our architecture scales — we don't build MVPs that need to be thrown away at Series A",
      "Experienced with both B2B SaaS and deeptech product types"
    ],
    techStack: ["Next.js", "Python", "OpenAI", "AWS", "PostgreSQL", "LangChain"],
    startingPrice: "$3,500",
    timeline: "15 days",
    stats: {
      satisfaction: "98%",
      timeSaved: "3.2x faster",
      successRate: "90+ MVPs"
    },
    highlights: [
      {
        icon: "🔐",
        title: "Security-First Engineering",
        description: "Israeli enterprise clients demand security by design — not as an add-on. We architect with it baked in from day one."
      },
      {
        icon: "🚀",
        title: "Fundraising-Ready in 15 Days",
        description: "We've helped founders ship functional demos that close seed rounds. Not wireframes — working products with real data."
      },
      {
        icon: "🌐",
        title: "Global Architecture",
        description: "Tel Aviv startups go global fast. We build with multi-region deployment, internationalization, and scale in mind."
      }
    ],
    keywords: ["AI development Tel Aviv", "Israel startup MVP", "cybersecurity AI Israel", "fintech Tel Aviv", "AI agency Israel", "startup nation development"]
  },
  {
    slug: "ai-mvp-agency-in-philadelphia",
    name: "Philadelphia",
    title: "AI App Development Agency in Philadelphia | Ship AI Lab",
    metaDescription: "Philadelphia AI development agency building healthcare and biotech MVPs. HIPAA-aware architecture, 15-day delivery, fixed pricing. Trusted by Philly founders.",
    h1: "AI Development Agency in Philadelphia",
    subtitle: "Build Healthcare and Fintech AI Products with a Team That Knows the East Coast Ecosystem.",
    intro: "Philadelphia is one of the most underrated startup cities in the US — home to a massive healthcare and biotech corridor, top universities spinning out founders, and a growing fintech scene. We've worked with Philly-based founders building digital health tools, patient management platforms, and AI-powered clinical workflows. If you're building in a regulated space, you need more than just a dev shop — you need a team that thinks about compliance, data privacy, and user trust from the first line of code.",
    image: "/location-philadelphia.png",
    services: [
      "Healthcare AI and digital health MVPs",
      "HIPAA-aware application architecture",
      "Biotech data platform development",
      "Patient-facing mobile app development",
      "Fintech and insurtech MVP builds",
      "University spinout prototyping"
    ],
    whyUs: [
      "We've shipped healthcare products and understand HIPAA architectural requirements",
      "We work with academic founders and understand the university-to-startup journey",
      "15-day sprints that fit grant timelines and investor deadlines",
      "Fixed pricing — no surprise invoices mid-sprint",
      "East Coast timezone coverage with async-friendly communication"
    ],
    techStack: ["Next.js", "React", "OpenAI", "AWS", "PostgreSQL", "Supabase"],
    startingPrice: "$3,500",
    timeline: "15 days",
    stats: {
      satisfaction: "96%",
      timeSaved: "3x faster",
      successRate: "65+ MVPs"
    },
    highlights: [
      {
        icon: "🏥",
        title: "Healthcare-Native Development",
        description: "We've built clinical tools, patient portals, and digital health apps. We understand HIPAA, PHI, and what it takes to ship safely."
      },
      {
        icon: "🎓",
        title: "Built for Founder-Researchers",
        description: "Many Philly founders come from Penn, Drexel, or Jefferson. We know how to take academic IP and turn it into fundable products."
      },
      {
        icon: "📋",
        title: "Fixed Price, No Surprises",
        description: "Healthcare startups run on tight budgets. Every engagement starts with a fixed scope and fixed price — no hourly billing creep."
      }
    ],
    keywords: ["AI development Philadelphia", "healthcare MVP Philly", "HIPAA app development", "biotech startup Philadelphia", "digital health AI agency", "Philadelphia startup development"]
  },
  {
    slug: "ai-mvp-agency-in-bangalore",
    name: "Bangalore",
    title: "AI App Development Agency in Bangalore | Ship AI Lab",
    metaDescription: "Bangalore AI development agency for Indian startups. SaaS MVPs and enterprise AI tools in 15 days. Starting at ₹6,50,000. India's Silicon Valley deserves top-tier builds.",
    h1: "AI Development Agency in Bangalore",
    subtitle: "Build World-Class AI Products in India's Silicon Valley.",
    intro: "Bangalore is where serious software gets built — a city with one of the world's densest concentrations of engineering talent, a mature startup ecosystem, and founders who've already seen how global SaaS companies operate from the inside. That means the bar is high. Bangalore founders don't want to be handed a cookie-cutter template — they want architecture that scales, code they can own, and a team that moves at the pace they're used to. That's exactly what we deliver.",
    image: "/location-bangalore.png",
    services: [
      "SaaS MVP development and launch",
      "AI automation and workflow tools",
      "Enterprise platform development",
      "React Native mobile app builds",
      "OpenAI & LLM integration projects",
      "B2B product for Indian enterprise clients"
    ],
    whyUs: [
      "We ship production-ready code — not throwaway prototypes that engineers have to rewrite",
      "Our architecture is built to scale from day one — Bangalore founders expect this",
      "15-day delivery keeps pace with fast-moving Indian startup timelines",
      "We integrate with Indian enterprise stacks and government APIs where needed",
      "Pricing that makes sense for Indian market realities, without cutting corners"
    ],
    techStack: ["Next.js", "React Native", "OpenAI", "AWS", "MongoDB", "LangChain"],
    startingPrice: "₹6,50,000",
    timeline: "15 days",
    stats: {
      satisfaction: "97%",
      timeSaved: "3.2x faster",
      successRate: "90+ MVPs"
    },
    highlights: [
      {
        icon: "⚙️",
        title: "Production-Ready from Day One",
        description: "Bangalore engineers have seen bad codebases. We write clean, documented, scalable code — the kind your team can actually inherit."
      },
      {
        icon: "🤖",
        title: "Deep AI Integration",
        description: "LLM-powered workflows, RAG pipelines, AI automation — we go beyond basic GPT wrappers to build things that actually solve problems."
      },
      {
        icon: "🏗️",
        title: "Built to Scale",
        description: "From 10 users to 10,000, the architecture holds. We don't optimize for demo day — we optimize for your next funding round."
      }
    ],
    keywords: ["AI development Bangalore", "SaaS MVP India", "startup development Bangalore", "AI agency India", "LLM integration Bangalore", "enterprise AI India"]
  },
  {
    slug: "ai-mvp-agency-in-kuwait-city",
    name: "Kuwait City",
    title: "AI App Development Agency in Kuwait | Ship AI Lab",
    metaDescription: "Kuwait AI development agency for fintech, oil & gas, and government digital transformation. GCC regulatory expertise, Arabic support, 15-day delivery. Book a free call.",
    h1: "AI Development Agency in Kuwait City",
    subtitle: "Build Enterprise AI Apps for Kuwait's Financial and Energy Sectors.",
    intro: "Kuwait is one of the GCC's most active markets for digital transformation — with government mandates driving modernization across financial services, oil & gas, and public sector operations. Founders and enterprise teams here operate in a high-trust, relationship-driven environment where compliance, Arabic localization, and data sovereignty matter from day one. We've built for this context: Arabic-first interfaces, GCC regulatory alignment, and the kind of enterprise-grade reliability that major Kuwaiti institutions expect.",
    image: "/location-kuwait-city.png",
    services: [
      "Islamic fintech and digital banking platforms",
      "Oil & gas operational AI tools",
      "Government digital service applications",
      "Arabic-first mobile and web experiences",
      "Enterprise workflow automation",
      "GCC compliance-ready SaaS platforms"
    ],
    whyUs: [
      "We understand GCC regulatory requirements and build with compliance in mind",
      "Arabic-first UI/UX — not just translated, actually designed for RTL users",
      "Experience with Kuwaiti financial sector standards and Islamic finance constraints",
      "15-day delivery with full project transparency throughout",
      "We've shipped enterprise tools used by teams in Kuwait, UAE, and Saudi Arabia"
    ],
    techStack: ["Next.js", "Python", "OpenAI", "AWS", "PostgreSQL", "Arabic NLP"],
    startingPrice: "$3,500",
    timeline: "15 days",
    stats: {
      satisfaction: "97%",
      timeSaved: "3x faster",
      successRate: "55+ MVPs"
    },
    highlights: [
      {
        icon: "🕌",
        title: "Islamic Finance Compliant",
        description: "We build fintech products that adhere to Islamic finance principles — Murabaha, Ijara structures, and Sharia-compliant transaction flows."
      },
      {
        icon: "🛢️",
        title: "Oil & Gas Sector Experience",
        description: "We've built operational AI tools for energy sector teams — asset monitoring, reporting automation, and field data digitization."
      },
      {
        icon: "🌐",
        title: "Arabic-First, Not Arabic-After",
        description: "RTL layout, Arabic typography, and localized UX patterns — designed from the first wireframe, not retrofitted at the end."
      }
    ],
    keywords: ["AI development Kuwait", "fintech Kuwait City", "GCC digital transformation", "Arabic app development", "Islamic fintech Kuwait", "enterprise AI Kuwait"]
  },
];

export default locations;
