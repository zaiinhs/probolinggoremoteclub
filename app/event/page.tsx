import type { Metadata } from "next";

import { EventCard } from "@/components/cards";
import { PageHero } from "@/components/page-hero";
import { events } from "@/data/events";

export const metadata: Metadata = {
  title: "Event",
  description: "Lihat meetup, coworking day, dan kegiatan komunitas pekerja remote di Probolinggo.",
};

export default function EventPage() {
  const upcomingEvents = events.filter((event) => event.status === "upcoming");
  const pastEvents = events.filter((event) => event.status === "past");

  return (
    <>
      <PageHero
        eyebrow="Event"
        title="Event dan kegiatan komunitas"
        description="Lihat meetup, coworking day, dan aktivitas lain dari Probolinggo Remote Club. Kegiatan kami dibuat santai, relevan, dan terbuka untuk anggota komunitas."
      />

      <section className="section-shell py-16 lg:py-20">
        <div>
          <h2 className="theme-heading text-3xl font-semibold">Event mendatang</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {upcomingEvents.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="theme-heading text-3xl font-semibold">Event sebelumnya</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {pastEvents.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
