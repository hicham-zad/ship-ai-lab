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
      images: [{ url: '/nerra-icon.png', width: 512, height: 512, alt: 'Nerra app icon' }],
    },
    twitter: { card: 'summary', title: a.metaTitle, description: a.metaDescription, images: ['/nerra-icon.png'] },
  };
}

export default async function NerraArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  return <NerraArticleView article={article} />;
}
