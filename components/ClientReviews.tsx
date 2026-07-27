"use client";
import { Star } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

const REVIEWS = [
  {
    author: "nathanross963",
    country: "United States",
    flag: "🇺🇸",
    platform: "Upwork",
    isRepeat: true,
    text: "Hicham went above and beyond on my project. He took time to help me lay out the real requirements versus just wasting code hours with a half baked end product. This led to a clear set project with milestones and clear expectations. Hicham was clear with communication, and extremely fast at production-level code releases. I cannot recommend Hicham higher. 5 stars ⭐⭐⭐⭐⭐ all day, every day. And the final release is beautiful and bug free!",
  },
  {
    author: "studioanrk",
    country: "United Kingdom",
    flag: "🇬🇧",
    platform: "Upwork",
    isRepeat: true,
    text: "Hicham is very patient, and very dedicated to making things work. The process if working together was smooth, and it was such a pleasure to interact with him. And the work is exactly as needed, fast and without issues. Highly recommended.",
  },
  {
    author: "Fiverr Client",
    country: "",
    flag: "",
    platform: "Fiverr",
    isRepeat: false,
    text: "Excellent work! I was extremely happy with Hicham, from both a quality perspective and timeliness. He goes well above and beyond to satisfy all the needs of the customer and follows instructions well. Highly recommend and will hire again when needed.",
    endorsed: ["Committed to Quality", "Reliable", "Accountable for Outcomes", "Clear Communicator"],
  },
  {
    author: "tmillergra",
    country: "United States",
    flag: "🇺🇸",
    platform: "Upwork",
    isRepeat: false,
    text: "Let me begin by saying that I will definitely use hicham again. I am currently building an app myself and needed an expert to help me resolve a coding issue. If I encounter another issue, I will not hesitate to seek this expert's help again.",
  },
  {
    author: "Fiverr Client",
    country: "",
    flag: "",
    platform: "Fiverr",
    isRepeat: false,
    text: "Hicham continues to impress! Great quality and timely delivery. He understands my needs perfectly and delivers every time. Highly recommend and will keep coming back!",
    endorsed: ["Committed to Quality", "Reliable", "Clear Communicator"],
  },
  {
    author: "rdavislib",
    country: "United States",
    flag: "🇺🇸",
    platform: "Upwork",
    isRepeat: true,
    text: "Great to work with and very knowledgeable. Helped with every step along the way",
  },
];

const SCREENSHOTS = [
  { src: "/reviews/review-nathanross963-upwork-1.png", alt: "5-star Upwork review from nathanross963 - Repeat client from United States praising Ship AI Lab for clear communication and production-level code releases", w: 560, h: 280 },
  { src: "/reviews/review-studioanrk-upwork-1.png", alt: "5-star Upwork review from studioanrk - Repeat client from United Kingdom praising Ship AI Lab for patience and dedication", w: 560, h: 240 },
  { src: "/reviews/review-fiverr-client-2.png", alt: "5-star Fiverr review endorsing Ship AI Lab for quality, reliability, accountability, and clear communication", w: 560, h: 220 },
  { src: "/reviews/review-tmillergra-upwork.png", alt: "5-star Upwork review from tmillergra praising Ship AI Lab as expert problem solver", w: 560, h: 240 },
  { src: "/reviews/review-andresvanryckeg-upwork.png", alt: "5-star Upwork review from andresvanryckeg - Repeat client from Belgium praising communication and flexibility", w: 560, h: 200 },
  { src: "/reviews/review-nathanross963-upwork-2.png", alt: "5-star Upwork review from nathanross963 - Fantastic engineer who goes above and beyond", w: 560, h: 200 },
  { src: "/reviews/review-christophertyas-upwork.png", alt: "5-star Upwork review from christophertyas - Repeat client from United Kingdom praising technical skills", w: 560, h: 180 },
  { src: "/reviews/review-rdavislib-upwork.png", alt: "5-star Upwork review from rdavislib - Great to work with and very knowledgeable", w: 560, h: 180 },
  { src: "/reviews/review-amandaduncan13-upwork.png", alt: "5-star Upwork review from amandaduncan13 - Fantastic service from United Kingdom", w: 560, h: 200 },
  { src: "/reviews/review-studioanrk-upwork-2.png", alt: "5-star Upwork review from studioanrk - Excellent support and instructions", w: 560, h: 180 },
  { src: "/reviews/review-shadracnicholas-upwork.png", alt: "5-star Upwork review from shadracnicholas from Kenya praising communication", w: 560, h: 180 },
  { src: "/reviews/review-fiverr-client-1.png", alt: "5-star Fiverr review endorsing Ship AI Lab for quality, reliability, and clear communication", w: 560, h: 200 },
];

function StarRating() {
  return (
    <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

function PlatformBadge({ platform }: { platform: string }) {
  const isFiverr = platform === "Fiverr";
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
      isFiverr
        ? "bg-green-50 text-green-700 border border-green-200"
        : "bg-emerald-50 text-emerald-700 border border-emerald-200"
    }`}>
      <span className={`w-2 h-2 rounded-full ${isFiverr ? "bg-green-500" : "bg-emerald-500"}`} />
      {platform}
    </span>
  );
}

export default function ClientReviews() {
  const t = useTranslations('HomePage');
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <>
      <section
        id="client-reviews"
        className="mb-20 md:mb-32"
        aria-labelledby="reviews-heading"
        itemScope
        itemType="https://schema.org/ProfessionalService"
      >
        <meta itemProp="name" content="Ship AI Lab" />
        <meta itemProp="description" content="Ship AI Lab is a 5-star rated AI development agency with 12+ verified client reviews on Upwork and Fiverr. Specializing in SaaS, mobile apps, and AI-powered applications." />

        {/* Section Header */}
        <div className="mb-14">
          <h2
            id="reviews-heading"
            className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4"
          >
            {t('reviews.title')}
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl">
            {t('reviews.subtitle')}
          </p>

          {/* Platform Trust Badges */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://www.upwork.com/freelancers/~014be778a3616e96a3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-black rounded-full hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all"
            >
              <span className="font-bold text-sm text-gray-900">Upwork</span>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-semibold text-gray-700">5.0</span>
            </a>
            <a
              href="https://www.fiverr.com/s/jjxkjpL"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-black rounded-full hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all"
            >
              <span className="font-bold text-sm text-gray-900">Fiverr</span>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-semibold text-gray-700">5.0</span>
            </a>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {REVIEWS.map((review, index) => (
            <article
              key={index}
              className="group border-2 border-black p-6 bg-white rounded-3xl hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
              itemScope
              itemType="https://schema.org/Review"
              itemProp="review"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                    review.platform === "Fiverr" ? "bg-green-600" : "bg-emerald-700"
                  }`}>
                    {review.author[0].toUpperCase()}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm" itemProp="author" itemScope itemType="https://schema.org/Person">
                      <span itemProp="name">{review.author}</span>
                    </div>
                    {review.country && (
                      <div className="text-xs text-gray-500">
                        {review.flag} {review.country}
                        {review.isRepeat && (
                          <span className="ml-2 text-emerald-600 font-medium">↻ Repeat Client</span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                <PlatformBadge platform={review.platform} />
              </div>

              {/* Stars */}
              <div className="mb-3" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                <meta itemProp="ratingValue" content="5" />
                <meta itemProp="bestRating" content="5" />
                <StarRating />
              </div>

              {/* Review Text */}
              <blockquote className="text-sm text-gray-700 leading-relaxed" itemProp="reviewBody">
                &ldquo;{review.text}&rdquo;
              </blockquote>

              {/* Fiverr Endorsements */}
              {'endorsed' in review && review.endorsed && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {review.endorsed.map((tag, i) => (
                    <span key={i} className="px-2 py-0.5 bg-gray-100 border border-gray-200 rounded-full text-[10px] font-medium text-gray-600">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Screenshot Proof Gallery */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
            {t('reviews.proofTitle')}
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            {t('reviews.proofSubtitle')}
          </p>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {SCREENSHOTS.map((img, index) => (
              <button
                key={index}
                onClick={() => setLightboxImg(img.src)}
                className="block w-full break-inside-avoid border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all cursor-pointer bg-white"
                aria-label={`View full review: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.w}
                  height={img.h}
                  className="w-full h-auto"
                  loading="lazy"
                  quality={85}
                />
              </button>
            ))}
          </div>

          {/* View All Links */}
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <a
              href="https://www.upwork.com/freelancers/~014be778a3616e96a3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-gray-900 underline underline-offset-4 decoration-2 decoration-emerald-400 hover:decoration-emerald-600 transition-colors"
            >
              {t('reviews.viewAllUpwork')} →
            </a>
            <a
              href="https://www.fiverr.com/s/jjxkjpL"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-gray-900 underline underline-offset-4 decoration-2 decoration-green-400 hover:decoration-green-600 transition-colors"
            >
              {t('reviews.viewAllFiverr')} →
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightboxImg(null)}
          role="dialog"
          aria-label="Enlarged review screenshot"
        >
          <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors text-lg font-medium"
              aria-label="Close lightbox"
            >
              ✕ Close
            </button>
            <Image
              src={lightboxImg}
              alt="Enlarged review screenshot"
              width={1120}
              height={560}
              className="w-full h-auto rounded-2xl shadow-2xl"
              quality={95}
            />
          </div>
        </div>
      )}
    </>
  );
}
