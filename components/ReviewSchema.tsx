export default function ReviewSchema() {
  const reviews = [
    { author: "nathanross963", date: "2025-11-01", body: "Hicham went above and beyond on my project. He took time to help me lay out the real requirements versus just wasting code hours with a half baked end product. This led to a clear set project with milestones and clear expectations. Hicham was clear with communication, and extremely fast at production-level code releases. I cannot recommend Hicham higher. 5 stars all day, every day. And the final release is beautiful and bug free!", publisher: "Upwork" },
    { author: "studioanrk", date: "2023-07-01", body: "Hicham is very patient, and very dedicated to making things work. The process if working together was smooth, and it was such a pleasure to interact with him. And the work is exactly as needed, fast and without issues. Highly recommended.", publisher: "Upwork" },
    { author: "tmillergra", date: "2025-07-01", body: "Let me begin by saying that I will definitely use hicham again. I am currently building an app myself and needed an expert to help me resolve a coding issue. If I encounter another issue, I will not hesitate to seek this expert's help again.", publisher: "Upwork" },
    { author: "Fiverr Client", date: "2024-08-19", body: "Hicham continues to impress! Great quality and timely delivery. He understands my needs perfectly and delivers every time. Highly recommend and will keep coming back!", publisher: "Fiverr" },
    { author: "Fiverr Client", date: "2024-08-06", body: "Excellent work! I was extremely happy with Hicham, from both a quality perspective and timeliness. He goes well above and beyond to satisfy all the needs of the customer and follows instructions well. Highly recommend and will hire again when needed.", publisher: "Fiverr" },
    { author: "rdavislib", date: "2023-07-01", body: "Great to work with and very knowledgeable. Helped with every step along the way", publisher: "Upwork" },
    { author: "andresvanryckeg", date: "2024-07-01", body: "Communication was great and very flexible on adjustments!", publisher: "Upwork" },
    { author: "christophertyas", date: "2023-07-01", body: "Great worth. Great technical skills. Good as finding solutions to complex problems.", publisher: "Upwork" },
    { author: "amandaduncan13", date: "2024-07-01", body: "Fantastic service and polite and enjoyable to work with!", publisher: "Upwork" },
    { author: "studioanrk", date: "2023-07-01", body: "So great to work with, and really worked hard very to provide excellent with with detailed support and instructions.Thank you so much.", publisher: "Upwork" },
    { author: "shadracnicholas", date: "2023-07-01", body: "Great communication and willingness to adapt to changes.", publisher: "Upwork" },
    { author: "nathanross963", date: "2024-07-01", body: "Fantastic engineer who goes above and beyond in understand project needs.", publisher: "Upwork" },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Ship AI Lab",
    description: "Ship AI Lab is a 5-star rated AI development agency specializing in SaaS platforms, mobile apps, and AI-powered applications. Trusted by clients worldwide with 100% five-star reviews on Upwork and Fiverr.",
    url: "https://shipailab.com",
    telephone: "251-332-3311",
    email: "contact@shipailab.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "30 N Gould St Ste R",
      addressLocality: "Sheridan",
      addressRegion: "WY",
      postalCode: "82801",
      addressCountry: "US",
    },
    sameAs: [
      "https://www.upwork.com/freelancers/~014be778a3616e96a3",
      "https://www.fiverr.com/s/jjxkjpL",
    ],
    priceRange: "$$",
    serviceType: ["AI Development", "SaaS Development", "Mobile App Development", "Web Application Development"],
    areaServed: "Worldwide",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "12",
      reviewCount: "12",
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      datePublished: r.date,
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: r.body,
      publisher: { "@type": "Organization", name: r.publisher },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
