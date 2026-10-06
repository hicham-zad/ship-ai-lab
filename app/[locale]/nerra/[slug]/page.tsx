import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import NerraArticleView from '@/components/nerra/NerraArticleView';
import { ARTICLES, getArticle } from '@/data/nerra/articles';
import { NR_BASE, NR_UPDATED } from '@/data/nerra/config';

export const dynamicParams = false;

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  const url = `${NR_BASE}/${a.slug}`;
  const og = `/nerra/og/${a.slug}.png`;
  return {
    title: a.metaTitle,
    description: a.metaDescription,
    keywords: a.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: a.metaTitle,
      description: a.metaDescription,
      url,
      siteName: 'Nerra',
      type: 'article',
      publishedTime: NR_UPDATED,
      modifiedTime: NR_UPDATED,
      images: [{ url: og, width: 1200, height: 630, alt: `${a.h1} (Nerra)` }],
    },
    twitter: { card: 'summary_large_image', title: a.metaTitle, description: a.metaDescription, images: [og] },
  };
}

export default async function NerraArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  return <NerraArticleView article={article} />;
}
