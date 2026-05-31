import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getVenueBySlug } from "@/data/venues";

type VenueDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: VenueDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const venue = getVenueBySlug(slug);

  if (!venue) {
    return {};
  }

  return {
    title: venue.name,
    description: venue.description,
  };
}

export default async function VenueDetailPage({ params }: VenueDetailPageProps) {
  const { slug } = await params;
  const venue = getVenueBySlug(slug);

  if (!venue) {
    notFound();
  }

  return (
    <section className="section-shell py-16 lg:py-20">
      <div className="max-w-4xl space-y-8">
        <Link href="/venue" className="text-sm font-semibold text-[var(--prc-leaf)]">
          Kembali ke Venue
        </Link>

        <div className="space-y-5">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--prc-leaf)]">{venue.area}</p>
          <h1 className="theme-heading text-4xl font-semibold tracking-tight sm:text-5xl">{venue.name}</h1>
          <p className="theme-copy text-lg leading-8">{venue.description}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="card-surface space-y-6">
            <div>
              <h2 className="theme-heading text-2xl font-semibold">Tentang Venue</h2>
              <div className="theme-copy mt-4 space-y-4 text-base leading-8">
                {venue.details.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div>
              <h2 className="theme-heading text-2xl font-semibold">Fasilitas</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {venue.facilities.map((facility) => (
                  <span
                    key={facility}
                    className="theme-pill px-3 py-1 text-sm font-medium"
                  >
                    {facility}
                  </span>
                ))}
              </div>
            </div>
          </article>

          <aside className="card-surface space-y-6">
            <div>
              <h2 className="theme-heading text-2xl font-semibold">Lokasi</h2>
              <p className="theme-copy mt-4 text-sm leading-7">{venue.address}</p>
              <a href={venue.mapsUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex text-sm font-semibold text-[var(--prc-sea)]">
                Buka di Maps
              </a>
            </div>

            <div>
              <h2 className="theme-heading text-2xl font-semibold">Jam Operasional</h2>
              <p className="theme-copy mt-4 text-sm leading-7">{venue.hours}</p>
            </div>

            <div>
              <h2 className="theme-heading text-2xl font-semibold">Kecepatan WiFi</h2>
              <p className="theme-copy mt-4 text-sm leading-7">{venue.wifiInfo}</p>
            </div>

            <div>
              <h2 className="theme-heading text-2xl font-semibold">Cocok untuk Meetup?</h2>
              <p className="theme-copy mt-4 text-sm leading-7">
                {venue.suitableForMeetup
                  ? "Ya, venue ini cocok untuk meetup komunitas skala kecil sampai menengah."
                  : "Lebih cocok untuk kerja mandiri atau diskusi kecil dibanding meetup komunitas yang lebih ramai."}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
