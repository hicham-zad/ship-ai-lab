export interface IndustryUseCase {
  title: string;
  description: string;
}

export interface IndustryStats {
  roi: string;
  efficiency: string;
  satisfaction: string;
}

export interface Industry {
  slug: string;
  name: string;
  title: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  painPoints: string[];
  solutions: string[];
  features: string[];
  useCases: IndustryUseCase[];
  techStack: string[];
  timeline: string;
  startingPrice: string;
  stats: IndustryStats;
}

const industries: Industry[] = [
  {
    slug: "ai-mvp-for-healthcare",
    name: "Healthcare",
    title: "AI MVP for Healthcare | Ship AI Lab",
    metaDescription:
      "Build HIPAA-compliant AI healthcare MVPs in 15 days. From telemedicine platforms to patient management systems. Fixed pricing, fast delivery.",
    h1: "AI MVP Development for Healthcare",
    subtitle: "Transform Patient Care with Custom AI Solutions",
    painPoints: [
      "Manual patient data entry consuming valuable staff time",
      "Difficulty managing appointment schedules efficiently",
      "Lack of predictive analytics for patient outcomes",
      "Inefficient prescription management systems",
    ],
    solutions: [
      "AI-powered patient intake systems",
      "Smart appointment scheduling with reminders",
      "Predictive health analytics dashboards",
      "Intelligent prescription management tools",
    ],
    features: [
      "HIPAA-compliant infrastructure",
      "EHR integration",
      "Telemedicine capabilities",
      "AI diagnosis support",
      "Patient portal",
      "Real-time monitoring",
    ],
    useCases: [
      { title: "Telemedicine Platform", description: "Connect patients with doctors through secure video consultations" },
      { title: "AI Symptom Checker", description: "Provide fast pre-diagnosis based on patient inputs" },
      { title: "Patient Management", description: "Streamline appointments, records, and billing" },
    ],
    techStack: ["Next.js", "OpenAI", "AWS", "PostgreSQL"],
    timeline: "15 days",
    startingPrice: "$8,000",
    stats: { roi: "40% reduction", efficiency: "3x faster", satisfaction: "95% satisfaction" },
  },
  {
    slug: "ai-mvp-for-finance",
    name: "Finance",
    title: "AI MVP for Finance | Ship AI Lab",
    metaDescription:
      "Launch your AI finance MVP in 15 days. From fraud detection to portfolio analytics, we build secure, compliant AI financial tools fast.",
    h1: "AI MVP Development for Finance",
    subtitle: "Automate Financial Insights with AI",
    painPoints: [
      "Manual financial reporting",
      "Slow credit risk assessments",
      "Unoptimized fraud detection",
      "Lack of real-time analytics",
    ],
    solutions: [
      "AI-driven fraud detection systems",
      "Credit scoring automation",
      "Real-time analytics dashboards",
      "Automated reporting tools",
    ],
    features: ["PCI-compliant", "Secure APIs", "Scalable infrastructure", "Automated workflows"],
    useCases: [
      { title: "Fraud Detection Engine", description: "Monitor transactions and flag anomalies instantly" },
      { title: "AI Credit Scoring", description: "Predict customer creditworthiness using AI" },
      { title: "Investment Insights", description: "Analyze portfolios with predictive analytics" },
    ],
    techStack: ["Next.js", "Python", "OpenAI", "AWS"],
    timeline: "15 days",
    startingPrice: "$9,000",
    stats: { roi: "35% faster insights", efficiency: "4x automation", satisfaction: "97% satisfaction" },
  },
  {
    slug: "ai-mvp-for-ecommerce",
    name: "E-Commerce",
    title: "AI MVP for E-Commerce | Ship AI Lab",
    metaDescription:
      "Build your AI-powered eCommerce MVP fast. From product recommendations to smart inventory, we deliver high-converting AI stores in 15 days.",
    h1: "AI MVP Development for E-Commerce",
    subtitle: "Boost Sales and Engagement with AI Automation",
    painPoints: [
      "Low conversion rates",
      "Manual inventory management",
      "Generic product recommendations",
      "Slow customer service",
    ],
    solutions: [
      "AI product recommendations",
      "Dynamic pricing systems",
      "Smart inventory tracking",
      "AI-powered chat assistants",
    ],
    features: ["SEO-ready store", "Realtime analytics", "Smart filters", "AI chatbots"],
    useCases: [
      { title: "AI Product Recommender", description: "Show personalized products for higher conversions" },
      { title: "Inventory AI Assistant", description: "Predict and restock automatically" },
      { title: "Smart Support Bot", description: "Assist customers 24/7 with instant answers" },
    ],
    techStack: ["Next.js", "Stripe", "OpenAI", "MongoDB"],
    timeline: "15 days",
    startingPrice: "$7,000",
    stats: { roi: "50% higher conversions", efficiency: "2x faster ops", satisfaction: "96% satisfaction" },
  },
  {
    slug: "ai-mvp-for-education",
    name: "Education",
    title: "AI MVP for Education | Ship AI Lab",
    metaDescription:
      "Create AI learning platforms with personalization and smart assessments — all built and delivered in 15 days.",
    h1: "AI MVP Development for Education",
    subtitle: "Empower Learning with Smart AI Tools",
    painPoints: [
      "One-size-fits-all learning paths",
      "Manual grading systems",
      "Limited student progress tracking",
      "Low engagement rates",
    ],
    solutions: [
      "AI-based personalized learning",
      "Auto-grading systems",
      "Student analytics dashboards",
      "AI-powered content recommendations",
    ],
    features: ["Adaptive learning", "Analytics dashboard", "AI tutors", "Gamified UX"],
    useCases: [
      { title: "Smart Learning App", description: "Personalized courses for every learner" },
      { title: "AI Grading System", description: "Automate assignments and feedback" },
      { title: "Student Analytics", description: "Track engagement and performance easily" },
    ],
    techStack: ["Next.js", "Python", "OpenAI", "Firebase"],
    timeline: "15 days",
    startingPrice: "$8,500",
    stats: { roi: "60% faster learning", efficiency: "3x automation", satisfaction: "94% satisfaction" },
  },
  {
    slug: "ai-mvp-for-real-estate",
    name: "Real Estate",
    title: "AI MVP for Real Estate | Ship AI Lab",
    metaDescription:
      "Launch your AI real estate MVP in 15 days. From smart listings to price predictions, we help you innovate faster.",
    h1: "AI MVP Development for Real Estate",
    subtitle: "Reinvent Property Tech with AI",
    painPoints: [
      "Manual property listings",
      "No price prediction insights",
      "Difficult lead management",
      "Slow property recommendations",
    ],
    solutions: [
      "AI property valuation",
      "Automated lead qualification",
      "Smart listing recommendations",
      "Virtual assistants for inquiries",
    ],
    features: ["Map integration", "CRM tools", "AI leads", "Virtual tours"],
    useCases: [
      { title: "AI Valuation Tool", description: "Predict property prices instantly" },
      { title: "Smart Lead Manager", description: "Prioritize leads with AI scoring" },
      { title: "Virtual Tour Assistant", description: "Offer immersive viewing experiences" },
    ],
    techStack: ["Next.js", "Mapbox", "OpenAI", "Supabase"],
    timeline: "15 days",
    startingPrice: "$8,000",
    stats: { roi: "45% faster sales", efficiency: "3x lead handling", satisfaction: "95% satisfaction" },
  },
  {
    slug: "ai-mvp-for-marketing",
    name: "Marketing",
    title: "AI MVP for Marketing | Ship AI Lab",
    metaDescription:
      "Automate campaigns, content, and lead tracking with AI. Launch your AI marketing MVP in just 15 days.",
    h1: "AI MVP Development for Marketing",
    subtitle: "Automate Campaigns and Scale Growth with AI",
    painPoints: [
      "Manual content creation",
      "Unclear ROI tracking",
      "Slow lead qualification",
      "Disjointed marketing data",
    ],
    solutions: [
      "AI copywriting tools",
      "Campaign analytics dashboards",
      "Lead scoring automation",
      "Performance tracking engines",
    ],
    features: ["SEO tools", "Social media API", "Email automation", "AI analytics"],
    useCases: [
      { title: "AI Ad Generator", description: "Create high-performing ads in seconds" },
      { title: "Campaign Analyzer", description: "Track and improve marketing results" },
      { title: "Lead Score AI", description: "Detect warm leads automatically" },
    ],
    techStack: ["Next.js", "OpenAI", "HubSpot API", "PostgreSQL"],
    timeline: "15 days",
    startingPrice: "$7,500",
    stats: { roi: "55% more leads", efficiency: "2.5x faster", satisfaction: "96% satisfaction" },
  },
  {
    slug: "ai-mvp-for-travel",
    name: "Travel",
    title: "AI MVP for Travel | Ship AI Lab",
    metaDescription:
      "Build AI-powered travel apps in 15 days. From chat assistants to smart itineraries — we craft seamless travel experiences.",
    h1: "AI MVP Development for Travel",
    subtitle: "Deliver Smart Travel Experiences with AI",
    painPoints: [
      "Complex booking processes",
      "Limited personalization",
      "Slow customer responses",
      "Unoptimized pricing models",
    ],
    solutions: [
      "AI trip planners",
      "Smart chatbots",
      "Personalized destination feeds",
      "Dynamic pricing models",
    ],
    features: ["Booking APIs", "AI chat", "Realtime updates", "Multi-language support"],
    useCases: [
      { title: "AI Trip Planner", description: "Design personalized travel experiences" },
      { title: "Smart Booking Assistant", description: "Simplify bookings with AI chat" },
      { title: "Dynamic Pricing Tool", description: "Optimize travel deals in real time" },
    ],
    techStack: ["Next.js", "OpenAI", "Google Maps API", "Firebase"],
    timeline: "15 days",
    startingPrice: "$8,000",
    stats: { roi: "30% higher bookings", efficiency: "3x faster support", satisfaction: "93% satisfaction" },
  },
  {
    slug: "ai-mvp-for-logistics",
    name: "Logistics",
    title: "AI MVP for Logistics | Ship AI Lab",
    metaDescription:
      "Optimize your logistics MVP with AI in 15 days. From delivery tracking to warehouse automation, we build smarter supply chains.",
    h1: "AI MVP Development for Logistics",
    subtitle: "Streamline Supply Chains with Intelligent Automation",
    painPoints: [
      "Manual route planning",
      "Inefficient warehouse ops",
      "Slow shipment tracking",
      "High delivery costs",
    ],
    solutions: [
      "AI route optimization",
      "Inventory management AI",
      "Fleet tracking dashboards",
      "Predictive maintenance alerts",
    ],
    features: ["GPS tracking", "AI logistics insights", "Cost optimization", "Realtime data"],
    useCases: [
      { title: "Smart Fleet Tracker", description: "Monitor vehicles in real time" },
      { title: "Warehouse AI", description: "Automate inventory and order handling" },
      { title: "Route Optimizer", description: "Reduce delivery time with AI routing" },
    ],
    techStack: ["Next.js", "Python", "OpenAI", "AWS"],
    timeline: "15 days",
    startingPrice: "$9,000",
    stats: { roi: "40% cost cut", efficiency: "3x faster ops", satisfaction: "95% satisfaction" },
  },
  {
    slug: "ai-mvp-for-fitness",
    name: "Fitness",
    title: "AI MVP for Fitness | Ship AI Lab",
    metaDescription:
      "Build AI fitness MVPs in 15 days — from smart workout tracking to nutrition planning apps.",
    h1: "AI MVP Development for Fitness",
    subtitle: "Create Smart Fitness Platforms that Motivate Users",
    painPoints: [
      "No personalization in workouts",
      "Low engagement retention",
      "Manual progress tracking",
      "Generic nutrition plans",
    ],
    solutions: [
      "AI workout generators",
      "Gamified user engagement tools",
      "Progress tracking dashboards",
      "Personalized meal planning",
    ],
    features: ["Wearable integration", "AI coach", "Progress charts", "Community features"],
    useCases: [
      { title: "AI Coach", description: "Guide users with real-time AI feedback" },
      { title: "Smart Tracker", description: "Visualize fitness data and progress" },
      { title: "Nutrition AI", description: "Suggest meals based on user goals" },
    ],
    techStack: ["Next.js", "OpenAI", "Firebase", "Stripe"],
    timeline: "15 days",
    startingPrice: "$7,500",
    stats: { roi: "3x retention", efficiency: "2x faster tracking", satisfaction: "97% satisfaction" },
  },
  {
    slug: "ai-mvp-for-legal",
    name: "Legal",
    title: "AI MVP for Legal | Ship AI Lab",
    metaDescription:
      "Automate document review, research, and compliance with AI. Build your legal MVP in 15 days.",
    h1: "AI MVP Development for Legal Firms",
    subtitle: "Bring Intelligence and Speed to Legal Workflows",
    painPoints: [
      "Manual contract review",
      "Slow legal research",
      "Compliance issues",
      "Document overload",
    ],
    solutions: [
      "AI document review",
      "Smart legal research assistants",
      "Compliance automation",
      "Case analytics dashboards",
    ],
    features: ["Data security", "Document AI", "Legal chatbot", "Audit tracking"],
    useCases: [
      { title: "AI Contract Review", description: "Detect clauses and risks automatically" },
      { title: "Smart Research Tool", description: "Summarize and analyze legal precedents" },
      { title: "Compliance Tracker", description: "Automate compliance monitoring" },
    ],
    techStack: ["Next.js", "OpenAI", "Python", "AWS"],
    timeline: "15 days",
    startingPrice: "$9,000",
    stats: { roi: "40% faster case prep", efficiency: "3x review speed", satisfaction: "96% satisfaction" },
  }
];

export default industries;
