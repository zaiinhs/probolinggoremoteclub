import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { VenueCard } from "@/components/cards";
import { venues } from "@/data/venues";

export const metadata: Metadata = {
  title: "Venue",
  description: "Temukan kafe dan tempat yang cocok untuk kerja remote dan meetup komunitas di Probolinggo.",
};

export default function VenuePage() {
  return (
    <>
      <PageHero
        eyebrow="Venue"
        title="Venue remote-friendly di Probolinggo"
        description="Temukan tempat yang cocok untuk kerja remote, coworking santai, atau meetup komunitas di Probolinggo."
      />

      <section className="section-shell py-16 lg:py-20">
        <div className="max-w-2xl">
          <h2 className="theme-heading text-3xl font-semibold">Cari tempat yang nyaman untuk fokus dan terhubung</h2>
          <p className="theme-copy mt-4 text-base leading-8">
            Kami mengumpulkan venue yang berpotensi nyaman untuk pekerja remote, dengan informasi dasar seperti lokasi dan fasilitas pendukung.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {venues.map((venue) => (
            <VenueCard key={venue.slug} venue={venue} />
          ))}
        </div>
      </section>
    </>
  );
}
