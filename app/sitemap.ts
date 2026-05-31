import type { MetadataRoute } from "next";

import { articles } from "@/data/articles";
import { events } from "@/data/events";
import { siteConfig } from "@/data/site";
import { venues } from "@/data/venues";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${siteConfig.domain}`;

  const staticPages = ["", "/tentang", "/gabung", "/event", "/venue", "/artikel", "/kontak"].map(
    (path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
    }),
  );

  const eventPages = events.map((event) => ({
    url: `${baseUrl}/event/${event.slug}`,
    lastModified: new Date(),
  }));

  const venuePages = venues.map((venue) => ({
    url: `${baseUrl}/venue/${venue.slug}`,
    lastModified: new Date(),
  }));

  const articlePages = articles.map((article) => ({
    url: `${baseUrl}/artikel/${article.slug}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...eventPages, ...venuePages, ...articlePages];
}
