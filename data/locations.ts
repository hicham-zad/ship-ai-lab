interface Location {
  slug: string;
  name: string;
  title: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
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
  keywords?: string[];
}

const locations: Location[] = [
  {
    slug: "ai-mvp-agency-in-lagos",
    name: "Lagos",
    title: "AI App Development in Lagos | Ship AI Lab",
    metaDescription: "Lagos AI development agency for Nigerian startups. Build fintech and mobile MVPs in 15 days in Africa's tech capital.",
    h1: "AI MVP Agency in Lagos",
    subtitle: "Build Fintech and Mobile AI Apps in West Africa's Tech Hub.",
    services: [
      "Mobile-first fintech",
      "Payment integration",
      "E-commerce platforms",
      "SMS & USSD solutions"
    ],
    whyUs: [
      "Nigerian market expertise",
      "15-day sprint delivery",
      "Mobile-first approach",
      "Local payment systems"
    ],
    techStack: ["React Native", "Next.js", "OpenAI", "Firebase", "Paystack"],
    startingPrice: "$3,500",
    timeline: "15 days",
    stats: {
      satisfaction: "94%",
      timeSaved: "3x faster",
      successRate: "60+ projects"
    }
  },
{
    slug: "ai-mvp-agency-in-tel-aviv",
    name: "Tel Aviv",
    title: "AI App Development Agency in Tel Aviv | Ship AI Lab",
    metaDescription: "Tel Aviv AI development agency for Israeli startups. Build innovative MVPs in 15 days in Startup Nation.",
    h1: "AI Development Agency in Tel Aviv",
    subtitle: "Build Innovative AI Apps in the Heart of Startup Nation.",
    services: [
      "Cybersecurity AI solutions",
      "Fintech platforms",
      "Enterprise MVPs",
      "Defense tech applications"
    ],
    whyUs: [
      "Startup Nation expertise",
      "15-day delivery guarantee",
      "Security-first development",
      "Global market knowledge"
    ],
    techStack: ["Next.js", "Python", "OpenAI", "AWS", "PostgreSQL"],
    startingPrice: "$3,500",
    timeline: "15 days",
    stats: {
      satisfaction: "98%",
      timeSaved: "3.2x faster",
      successRate: "90+ MVPs"
    }
  },
{
    slug: "ai-mvp-agency-in-philadelphia",
    name: "Philadelphia",
    title: "AI App Development Agency in Philadelphia | Ship AI Lab",
    metaDescription: "Philadelphia AI development agency building healthcare and fintech MVPs. Launch in 15 days with fixed pricing.",
    h1: "AI Development Agency in Philadelphia",
    subtitle: "Build Healthcare and Fintech AI Apps with Philly's Top Team.",
    services: [
      "Healthcare AI solutions",
      "Fintech MVP development",
      "Biotech applications",
      "Startup app development"
    ],
    whyUs: [
      "Healthcare tech expertise",
      "15-day delivery sprint",
      "Competitive pricing",
      "HIPAA compliance ready"
    ],
    techStack: ["Next.js", "React", "OpenAI", "AWS", "PostgreSQL"],
    startingPrice: "$3,500",
    timeline: "15 days",
    stats: {
      satisfaction: "96%",
      timeSaved: "3x faster",
      successRate: "65+ MVPs"
    }
  },
{
    slug: "ai-mvp-agency-in-bangalore",
    name: "Bangalore",
    title: "AI App Development Agency in Bangalore | Ship AI Lab",
    metaDescription: "Bangalore AI development agency for Indian startups. Build your MVP in 15 days in India's Silicon Valley.",
    h1: "AI Development Agency in Bangalore",
    subtitle: "Build AI Apps in India's Silicon Valley with Expert Developers.",
    services: [
      "SaaS MVP development",
      "Mobile app creation",
      "AI automation tools",
      "Enterprise solutions"
    ],
    whyUs: [
      "Indian tech hub expertise",
      "15-day sprint delivery",
      "Cost-effective pricing",
      "Strong engineering team"
    ],
    techStack: ["Next.js", "React Native", "OpenAI", "AWS", "MongoDB"],
    startingPrice: "₹6,50,000",
    timeline: "15 days",
    stats: {
      satisfaction: "97%",
      timeSaved: "3.2x faster",
      successRate: "90+ MVPs"
    }
  },
{
    slug: "ai-mvp-agency-in-kuwait-city",
    name: "Kuwait City",
    title: "AI App Development Agency in Kuwait | Ship AI Lab",
    metaDescription: "Kuwait AI development agency for fintech & oil/gas. Build your MVP in 15 days with GCC expertise, Arabic support & enterprise solutions. Schedule your call!",
    h1: "AI Development Agency in Kuwait City",
    subtitle: "Build Enterprise AI Apps in Kuwait's Financial Center",
    services: [
      "Islamic fintech solutions",
      "Oil & gas automation",
      "Government digital services",
      "Enterprise AI platforms"
    ],
    whyUs: [
      "Kuwait market understanding",
      "Financial sector expertise",
      "15-day rapid delivery",
      "GCC regulatory knowledge"
    ],
    techStack: ["Next.js", "Python", "OpenAI", "AWS", "PostgreSQL"],
    startingPrice: "$3,500",
    timeline: "15 days",
    stats: {
      satisfaction: "97%",
      timeSaved: "3x faster",
      successRate: "55+ MVPs"
    }
  },
];

export default locations;
