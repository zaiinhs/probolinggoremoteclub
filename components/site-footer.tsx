import Link from "next/link";

import { siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="theme-footer border-t">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.3fr_0.7fr_0.8fr] lg:px-8">
        <div className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--prc-gold)]">
            Probolinggo Remote Club
          </p>
          <h2 className="max-w-md text-2xl font-semibold text-[var(--footer-heading)]">
            Komunitas non-profit dan gratis untuk pekerja remote di Probolinggo.
          </h2>
          <p className="max-w-xl text-sm leading-7 text-[var(--footer-copy)]">
            Tempat untuk terhubung, coworking, networking, dan bertumbuh bersama dari kota sendiri.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-[var(--footer-heading)]">Navigasi</h3>
          <ul className="mt-4 space-y-3 text-sm text-[var(--footer-copy)]">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-[var(--footer-heading)]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-[var(--footer-heading)]">Kontak</h3>
          <ul className="mt-4 space-y-3 text-sm text-[var(--footer-copy)]">
            <li>
              <a href={`mailto:${siteConfig.email}`} className="transition hover:text-[var(--footer-heading)]">
                {siteConfig.email}
              </a>
            </li>
            <li>{siteConfig.domain}</li>
            <li>Free community</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
