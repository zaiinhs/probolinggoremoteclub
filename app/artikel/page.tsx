import type { Metadata } from "next";

import { ArticleCard } from "@/components/cards";
import { PageHero } from "@/components/page-hero";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Artikel",
  description: "Baca update komunitas, dokumentasi event, dan insight seputar kerja remote di Probolinggo.",
};

export default function ArtikelPage() {
  return (
    <>
      <PageHero
        eyebrow="Artikel"
        title="Cerita, update, dan insight dari komunitas"
        description="Baca update komunitas, dokumentasi kegiatan, dan hal-hal menarik seputar kerja remote di Probolinggo."
      />

      <section className="section-shell py-16 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </>
  );
}
