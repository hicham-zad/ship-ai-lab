import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ArticleView from '@/components/sobergirl/ArticleView';
import { ARTICLES, getArticle } from '@/data/sobergirl/articles';
import { SG_BASE, SG_UPDATED } from '@/data/sobergirl/config';

export const dynamicParams = false;

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  const url = `${SG_BASE}/${a.slug}`;
  const og = `/sobergirl/${a.slug}-og.png`;
  return {
    title: a.metaTitle,
    description: a.metaDescription,
    keywords: a.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: a.metaTitle,
      description: a.metaDescription,
      url,
      siteName: 'Sober Girl',
      type: 'article',
      publishedTime: SG_UPDATED,
      modifiedTime: SG_UPDATED,
      images: [{ url: og, width: 1200, height: 630, alt: a.heroAlt }],
    },
    twitter: { card: 'summary_large_image', title: a.metaTitle, description: a.metaDescription, images: [og] },
  };
}

export default async function SoberGirlArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  return <ArticleView article={article} />;
}
