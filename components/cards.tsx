import Link from "next/link";

import type { ArticleItem } from "@/data/articles";
import type { EventItem } from "@/data/events";
import type { VenueItem } from "@/data/venues";

export function EventCard({ event }: { event: EventItem }) {
  return (
    <article className="card-surface flex h-full flex-col">
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--prc-sea)]">
          <span>{event.type}</span>
          <span className="text-slate-300">/</span>
          <span>{event.dateLabel}</span>
        </div>
        <div>
          <h3 className="theme-heading text-xl font-semibold">{event.title}</h3>
          <p className="theme-copy mt-3 text-sm leading-7">{event.summary}</p>
        </div>
      </div>
      <div className="theme-muted mt-6 space-y-2 text-sm">
        <p>{event.timeLabel}</p>
        <p>{event.location}</p>
      </div>
      <div className="mt-8">
        <Link href={`/event/${event.slug}`} className="btn-secondary">
          Lihat Detail
        </Link>
      </div>
    </article>
  );
}

export function VenueCard({ venue }: { venue: VenueItem }) {
  return (
    <article className="card-surface flex h-full flex-col">
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--prc-leaf)]">
          {venue.area}
        </p>
        <div>
          <h3 className="theme-heading text-xl font-semibold">{venue.name}</h3>
          <p className="theme-copy mt-3 text-sm leading-7">{venue.description}</p>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {venue.facilities.slice(0, 4).map((facility) => (
          <span
            key={facility}
            className="theme-pill px-3 py-1 text-xs font-medium"
          >
            {facility}
          </span>
        ))}
      </div>
      <div className="mt-8">
        <Link href={`/venue/${venue.slug}`} className="btn-secondary">
          Lihat Detail Venue
        </Link>
      </div>
    </article>
  );
}

export function ArticleCard({ article }: { article: ArticleItem }) {
  return (
    <article className="card-surface flex h-full flex-col">
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--prc-grape)]">
          <span>{article.category}</span>
          <span className="text-slate-300">/</span>
          <span>{article.dateLabel}</span>
        </div>
        <div>
          <h3 className="theme-heading text-xl font-semibold">{article.title}</h3>
          <p className="theme-copy mt-3 text-sm leading-7">{article.excerpt}</p>
        </div>
      </div>
      <div className="mt-8">
        <Link href={`/artikel/${article.slug}`} className="btn-secondary">
          Baca Selengkapnya
        </Link>
      </div>
    </article>
  );
}
