import Link from "next/link";

import type { ArticleItem } from "@/data/articles";
import type { EventItem } from "@/data/events";
import type { VenueItem } from "@/data/venues";

export function EventCard({ event }: { event: EventItem }) {
  return (
    <article className="card-surface flex h-full flex-col">
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="sticker">{event.type}</span>
          <span className="theme-pill px-3 py-1 text-xs">{event.dateLabel}</span>
        </div>
        <div>
          <h3 className="theme-heading text-xl font-bold">{event.title}</h3>
          <p className="theme-copy mt-3 text-sm leading-7">{event.summary}</p>
        </div>
      </div>
      <div className="theme-muted mt-6 space-y-1.5 text-sm font-medium">
        <p>🕒 {event.timeLabel}</p>
        <p>📍 {event.location}</p>
      </div>
      <div className="mt-8">
        <Link href={`/event/${event.slug}`} className="btn-secondary">
          Lihat Detail →
        </Link>
      </div>
    </article>
  );
}

export function VenueCard({ venue }: { venue: VenueItem }) {
  return (
    <article className="card-surface flex h-full flex-col">
      <div className="space-y-4">
        <span className="sticker sticker-leaf">📍 {venue.area}</span>
        <div>
          <h3 className="theme-heading text-xl font-bold">{venue.name}</h3>
          <p className="theme-copy mt-3 text-sm leading-7">{venue.description}</p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {venue.facilities.slice(0, 4).map((facility) => (
          <span key={facility} className="theme-pill px-3 py-1 text-xs">
            {facility}
          </span>
        ))}
      </div>
      <p className="theme-muted mt-3 text-xs leading-5">{venue.wifiInfo}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href={venue.mapsUrl} className="btn-secondary" target="_blank">
          Lihat Detail Venue →
        </Link>
        {/* <a href={venue.mapsUrl} target="_blank" rel="noreferrer" className="btn-secondary !border-[var(--prc-sea)] !text-[var(--prc-sea)]">
          Buka Maps
        </a> */}
      </div>
    </article>
  );
}

export function ArticleCard({ article }: { article: ArticleItem }) {
  return (
    <article className="card-surface flex h-full flex-col">
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="sticker sticker-grape">{article.category}</span>
          <span className="theme-pill px-3 py-1 text-xs">{article.dateLabel}</span>
        </div>
        <div>
          <h3 className="theme-heading text-xl font-bold">{article.title}</h3>
          <p className="theme-copy mt-3 text-sm leading-7">{article.excerpt}</p>
        </div>
      </div>
      <div className="mt-8">
        <Link href={`/artikel/${article.slug}`} className="btn-secondary">
          Baca Selengkapnya →
        </Link>
      </div>
    </article>
  );
}
