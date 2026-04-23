import Link from "next/link";

import { ArticleCard, EventCard, VenueCard } from "@/components/cards";
import { articles } from "@/data/articles";
import { events } from "@/data/events";
import { siteConfig } from "@/data/site";
import { venues } from "@/data/venues";

export default function HomePage() {
  const upcomingEvents = events.filter((event) => event.status === "upcoming").slice(0, 2);
  const featuredVenues = venues.filter((venue) => venue.featured).slice(0, 2);
  const latestArticles = articles.slice(0, 2);

  return (
    <>
      <section className="home-hero relative overflow-hidden border-b">
        <div className="section-shell grid gap-8 py-16 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:py-28">
          <div className="max-w-3xl space-y-8">
            <div className="space-y-5">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[var(--prc-sea)]">
                {siteConfig.tagline}
              </p>
              <h1 className="theme-heading text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                Tempat berkumpulnya pekerja remote di Probolinggo.
              </h1>
              <p className="theme-copy max-w-2xl text-base leading-8 sm:text-xl">
                Probolinggo Remote Club adalah komunitas non-profit dan gratis untuk orang-orang Probolinggo yang bekerja secara remote. Bukan hanya untuk pekerja IT, tapi untuk siapa saja yang bekerja jarak jauh dan ingin terhubung, bertemu, dan bertumbuh bersama.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link href="/gabung" className="btn-primary">
                Gabung Komunitas
              </Link>
              <Link href="/event" className="btn-secondary">
                Lihat Event
              </Link>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <div className="card-surface">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--prc-sea)]">
                Komunitas lokal
              </p>
              <h2 className="theme-heading mt-4 text-2xl font-semibold">
                Komunitas lokal untuk pekerja remote lintas profesi
              </h2>
              <p className="theme-copy mt-4 text-sm leading-7">
                Semakin banyak orang Probolinggo yang bekerja secara remote, tetapi masih banyak yang berjalan sendiri-sendiri. PRC hadir sebagai ruang untuk saling mengenal, berbagi pengalaman, coworking bareng, dan membangun koneksi yang relevan di kota sendiri.
              </p>
            </div>
            <div className="card-surface">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--prc-grape)]">
                Kenapa ada?
              </p>
              <h2 className="theme-heading mt-4 text-2xl font-semibold">
                Bekerja remote tidak harus terasa sendirian
              </h2>
              <p className="theme-copy mt-4 text-sm leading-7">
                Komunitas ini lahir untuk menjawab kebutuhan akan ruang yang santai tapi tetap produktif. Tempat untuk kerja bareng, ngobrol seperlunya, dan membangun koneksi yang terasa dekat.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-16 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-4">
          {[
            ["Koneksi lokal", "Kenal dan terhubung dengan sesama pekerja remote di Probolinggo."],
            ["Coworking bareng", "Sesekali kerja bareng di kafe atau venue yang nyaman untuk remote working."],
            ["Sharing pengalaman", "Cerita soal tantangan, peluang, tools, dan kebiasaan kerja remote yang sehat."],
            ["Komunitas gratis", "Komunitas ini non-profit dan gratis untuk diikuti."],
          ].map(([title, copy]) => (
            <div key={title} className="card-surface">
              <h2 className="theme-heading text-xl font-semibold">{title}</h2>
              <p className="theme-copy mt-3 text-sm leading-7">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-16 lg:py-20">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--prc-sea)]">
              Kegiatan komunitas
            </p>
            <h2 className="theme-heading mt-3 text-3xl font-semibold">Mulai dari meetup santai sampai coworking day.</h2>
            <p className="theme-copy mt-4 text-base leading-8">
              Kami ingin membuat ruang yang nyaman untuk saling terhubung tanpa terasa terlalu formal.
            </p>
          </div>
          <Link href="/event" className="btn-secondary">
            Lihat Semua Event
          </Link>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {upcomingEvents.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      </section>

      <section className="section-shell py-16 lg:py-20">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--prc-leaf)]">
              Venue remote-friendly
            </p>
            <h2 className="theme-heading mt-3 text-3xl font-semibold">Tempat kerja remote-friendly di Probolinggo.</h2>
            <p className="theme-copy mt-4 text-base leading-8">
              Kami juga ingin membantu anggota menemukan tempat yang nyaman untuk kerja remote atau meetup komunitas.
            </p>
          </div>
          <Link href="/venue" className="btn-secondary">
            Lihat Venue
          </Link>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {featuredVenues.map((venue) => (
            <VenueCard key={venue.slug} venue={venue} />
          ))}
        </div>
      </section>

      <section className="section-shell py-16 lg:py-20">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--prc-grape)]">
              Cerita dan update
            </p>
            <h2 className="theme-heading mt-3 text-3xl font-semibold">Insight, dokumentasi, dan cerita komunitas.</h2>
            <p className="theme-copy mt-4 text-base leading-8">
              Website ini juga menjadi ruang untuk membagikan pemikiran dan perkembangan ekosistem remote worker lokal.
            </p>
          </div>
          <Link href="/artikel" className="btn-secondary">
            Lihat Artikel
          </Link>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {latestArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      <section className="section-shell py-16 lg:py-24">
        <div className="cta-panel px-6 py-10 sm:px-10 lg:px-12 lg:py-12">
          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--prc-gold)]">
              Join the club
            </p>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Kalau kamu kerja remote di Probolinggo, mari terhubung.
            </h2>
            <p className="text-base leading-8 text-white/82">
              Gabung gratis dan jadi bagian dari komunitas pekerja remote yang tumbuh dari kota sendiri.
            </p>
            <Link href="/gabung" className="btn-secondary sm:w-fit">
              Gabung Komunitas
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
