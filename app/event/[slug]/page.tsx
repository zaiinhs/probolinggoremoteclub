import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { events, getEventBySlug } from "@/data/events";

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

type EventDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: EventDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    return {};
  }

  return {
    title: event.title,
    description: event.summary,
  };
}

export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  return (
    <section className="section-shell py-16 lg:py-20">
      <div className="max-w-4xl space-y-8">
        <Link href="/event" className="text-sm font-semibold text-[var(--prc-sea)]">
          Kembali ke Event
        </Link>

        <div className="space-y-5">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--prc-sea)]">
            {event.type}
          </p>
          <h1 className="theme-heading text-4xl font-semibold tracking-tight sm:text-5xl">
            {event.title}
          </h1>
          <p className="theme-copy text-lg leading-8">{event.summary}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="card-surface space-y-6">
            <div>
              <h2 className="theme-heading text-2xl font-semibold">Tentang Event</h2>
              <div className="theme-copy mt-4 space-y-4 text-base leading-8">
                {event.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div>
              <h2 className="theme-heading text-2xl font-semibold">Agenda</h2>
              <ul className="theme-copy mt-4 space-y-3 text-base leading-7">
                {event.agenda.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </article>

          <aside className="card-surface space-y-6">
            <div>
              <h2 className="theme-heading text-2xl font-semibold">Waktu dan Lokasi</h2>
              <div className="theme-copy mt-4 space-y-2 text-sm leading-7">
                <p>{event.dateLabel}</p>
                <p>{event.timeLabel}</p>
                <p>{event.location}</p>
                <p>{event.venueName}</p>
              </div>
            </div>

            <div>
              <h2 className="theme-heading text-2xl font-semibold">Cara Ikut</h2>
              <p className="theme-copy mt-4 text-sm leading-7">
                Kalau kamu tertarik ikut, isi pendaftaran komunitas lebih dulu atau hubungi kami melalui halaman kontak untuk mendapatkan detail berikutnya.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/gabung" className="btn-primary">
                Saya Ingin Ikut
              </Link>
              <Link href="/kontak" className="btn-secondary">
                Hubungi Kami
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
