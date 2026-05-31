import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { articles, getArticleBySlug } from "@/data/articles";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

type ArticleDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ArticleDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles.filter((item) => item.slug !== article.slug).slice(0, 2);

  return (
    <section className="section-shell py-16 lg:py-20">
      <div className="mx-auto max-w-4xl space-y-8">
        <Link href="/artikel" className="text-sm font-semibold text-[var(--prc-grape)]">
          Kembali ke Artikel
        </Link>

        <div className="space-y-5">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--prc-grape)]">
            {article.category} / {article.dateLabel}
          </p>
          <h1 className="theme-heading text-4xl font-semibold tracking-tight sm:text-5xl">
            {article.title}
          </h1>
          <p className="theme-copy text-lg leading-8">{article.excerpt}</p>
        </div>

        <article className="card-surface theme-copy space-y-5 text-base leading-8">
          {article.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>

        <div className="cta-panel px-6 py-10 sm:px-10">
          <h2 className="text-3xl font-semibold">Ingin ikut jadi bagian dari komunitas ini?</h2>
          <div className="mt-6">
            <Link href="/gabung" className="btn-secondary sm:w-fit">
              Gabung Komunitas
            </Link>
          </div>
        </div>

        <div>
          <h2 className="theme-heading text-2xl font-semibold">Artikel lainnya</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {relatedArticles.map((relatedArticle) => (
              <Link
                key={relatedArticle.slug}
                href={`/artikel/${relatedArticle.slug}`}
                className="card-surface transition hover:-translate-y-0.5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--prc-grape)]">
                  {relatedArticle.category}
                </p>
                <h3 className="theme-heading mt-3 text-xl font-semibold">{relatedArticle.title}</h3>
                <p className="theme-copy mt-3 text-sm leading-7">{relatedArticle.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
