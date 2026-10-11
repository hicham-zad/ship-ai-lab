import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import FeaturePage from '@/components/pcos/FeaturePage';
import { FEATURES, PCOS_BASE, PCOS_FEATURES_UPDATED, getFeature } from '@/data/pcos/features';

export const dynamicParams = false;

export function generateStaticParams() {
  return FEATURES.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const f = getFeature(slug);
  if (!f) return {};
  const url = `${PCOS_BASE}/${f.slug}`;
  const og = `/pcos/${f.hero[0].file}`;
  return {
    title: f.metaTitle,
    description: f.metaDescription,
    keywords: f.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: f.metaTitle,
      description: f.metaDescription,
      url,
      siteName: 'PCOS & Endo Tracker',
      type: 'article',
      modifiedTime: PCOS_FEATURES_UPDATED,
      images: [{ url: og, width: 720, height: 1564, alt: f.hero[0].alt }],
    },
    twitter: { card: 'summary_large_image', title: f.metaTitle, description: f.metaDescription, images: [og] },
  };
}

export default async function PcosFeaturePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const f = getFeature(slug);
  if (!f) notFound();
  return <FeaturePage f={f} />;
}
