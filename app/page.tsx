import Link from "next/link";

import { ArticleCard, EventCard, VenueCard } from "@/components/cards";
import { articles } from "@/data/articles";
import { events } from "@/data/events";
import { siteConfig } from "@/data/site";
import { venues } from "@/data/venues";

export default function HomePage() {
  const upcomingEvents = events.filter((event) => event.status === "upcoming").slice(0, 2);
  const featuredVenues = [...venues].sort((a, b) => b.wifiMbps - a.wifiMbps).slice(0, 2);
  const latestArticles = articles.slice(0, 2);

  return (
    <>
      <section className="home-hero relative overflow-hidden border-b-2">
        <div className="section-shell grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:py-28">
          <div className="max-w-3xl space-y-7">
            <span className="sticker rotate-l">
              ✦ {siteConfig.tagline}
            </span>
            <h1 className="theme-heading text-[2.6rem] font-extrabold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
              Kerja remote di Probolinggo? <span className="marker">Gas bareng</span> di sini.
            </h1>
            <p className="theme-copy max-w-2xl text-base leading-8 sm:text-lg">
              Probolinggo Remote Club itu komunitas <strong>gratis &amp; non-profit</strong> buat siapa aja
              yang kerja jarak jauh dari Probolinggo. Bukan cuma anak IT — semua profesi yang WFH/WFA
              boleh nimbrung, kenalan, coworking, dan tumbuh bareng.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link href="/gabung" className="btn-primary">
                Gabung Komunitas →
              </Link>
              <Link href="/event" className="btn-secondary">
                Intip Event
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="theme-pill px-3 py-1 text-xs">100% gratis</span>
              <span className="theme-pill px-3 py-1 text-xs">Lintas profesi</span>
              <span className="theme-pill px-3 py-1 text-xs">Buatan anak Probolinggo</span>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <div className="card-surface rotate-r">
              <span className="sticker sticker-leaf">🌿 Komunitas lokal</span>
              <h2 className="theme-heading mt-4 text-2xl font-bold">
                Ruang buat yang biasanya kerja sendirian
              </h2>
              <p className="theme-copy mt-3 text-sm leading-7">
                Makin banyak orang Probolinggo kerja remote, tapi jalan sendiri-sendiri. PRC jadi tempat
                saling kenal, sharing, coworking, dan bangun koneksi di kota sendiri.
              </p>
            </div>
            <div className="card-surface rotate-l">
              <span className="sticker sticker-grape">💜 Kenapa ada?</span>
              <h2 className="theme-heading mt-4 text-2xl font-bold">
                Remote nggak harus berasa sepi
              </h2>
              <p className="theme-copy mt-3 text-sm leading-7">
                Komunitas ini lahir buat ngasih ruang yang santai tapi tetap produktif — kerja bareng,
                ngobrol seperlunya, koneksi yang berasa dekat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* stats strip */}
      <section className="border-b-2 border-[var(--ink)] bg-[var(--prc-gold)] text-[#15110c]">
        <div className="section-shell grid grid-cols-2 gap-6 py-8 sm:grid-cols-4">
          {[
            ["Gratis", "Selamanya"],
            ["Lintas", "Profesi"],
            ["Santai", "Tapi produktif"],
            ["Probolinggo", "Tercinta"],
          ].map(([big, small]) => (
            <div key={big} className="text-center">
              <p className="text-2xl font-extrabold sm:text-3xl">{big}</p>
              <p className="text-xs font-bold uppercase tracking-[0.12em] opacity-80">{small}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-16 lg:py-20">
        <span className="sticker sticker-coral rotate-l">✌️ Yang kamu dapet</span>
        <div className="mt-7 grid gap-6 lg:grid-cols-4">
          {[
            ["Koneksi lokal", "Kenal & terhubung sama sesama pekerja remote di Probolinggo."],
            ["Coworking bareng", "Sesekali kerja bareng di kafe atau venue yang nyaman buat remote working."],
            ["Sharing pengalaman", "Cerita soal tantangan, peluang, tools, dan kebiasaan kerja remote yang sehat."],
            ["Gratis tis tis", "Komunitas ini non-profit dan gratis buat diikuti. Beneran."],
          ].map(([title, copy]) => (
            <div key={title} className="card-surface">
              <h2 className="theme-heading text-xl font-bold">{title}</h2>
              <p className="theme-copy mt-3 text-sm leading-7">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-16 lg:py-20">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <div className="max-w-2xl">
            <span className="sticker">📅 Kegiatan komunitas</span>
            <h2 className="theme-heading mt-4 text-3xl font-extrabold sm:text-4xl">
              Dari meetup santai sampai coworking day.
            </h2>
            <p className="theme-copy mt-4 text-base leading-8">
              Kami pengen bikin ruang yang nyaman buat saling terhubung tanpa kerasa terlalu formal.
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
            <span className="sticker sticker-leaf">📶 WiFi paling kencang</span>
            <h2 className="theme-heading mt-4 text-3xl font-extrabold sm:text-4xl">
              Venue dengan internet paling ngebut.
            </h2>
            <p className="theme-copy mt-4 text-base leading-8">
              Ini dia tempat kerja remote di Probolinggo dengan WiFi paling kencang — aman buat video call,
              upload file, sampai streaming tanpa lemot.
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
            <span className="sticker sticker-grape">📝 Cerita &amp; update</span>
            <h2 className="theme-heading mt-4 text-3xl font-extrabold sm:text-4xl">
              Insight, dokumentasi, dan cerita komunitas.
            </h2>
            <p className="theme-copy mt-4 text-base leading-8">
              Website ini juga jadi ruang buat berbagi pemikiran dan perkembangan ekosistem remote worker lokal.
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
        <div className="cta-panel px-6 py-10 sm:px-10 lg:px-12 lg:py-14">
          <div className="max-w-3xl space-y-5">
            <span className="sticker sticker-gold rotate-l">🚀 Join the club</span>
            <h2 className="text-3xl font-extrabold sm:text-5xl">
              Kerja remote di Probolinggo? Yuk <span className="marker-sky">connect</span>.
            </h2>
            <p className="text-base leading-8 text-white/85">
              Gabung gratis dan jadi bagian dari komunitas pekerja remote yang tumbuh dari kota sendiri.
            </p>
            <Link href="/gabung" className="btn-primary sm:w-fit">
              Gabung Komunitas →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
