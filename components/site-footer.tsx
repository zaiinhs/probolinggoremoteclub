import Link from "next/link";

import { siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="theme-footer border-t-2">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.3fr_0.7fr_0.8fr] lg:px-8">
        <div className="space-y-4">
          <span className="sticker sticker-gold rotate-l">✦ Probolinggo Remote Club</span>
          <h2 className="max-w-md text-2xl font-extrabold text-[var(--footer-heading)]">
            Komunitas gratis &amp; non-profit buat pekerja remote di Probolinggo.
          </h2>
          <p className="max-w-xl text-sm leading-7 text-[var(--footer-copy)]">
            Tempat buat terhubung, coworking, networking, dan tumbuh bareng dari kota sendiri.
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <a
              href={siteConfig.socialLinks.instagram}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border-2 border-[var(--footer-copy)] px-4 py-1.5 text-xs font-extrabold uppercase tracking-wide text-[var(--footer-heading)] transition hover:bg-[var(--prc-gold)] hover:text-[#15110c]"
            >
              Instagram
            </a>
            <a
              href={siteConfig.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border-2 border-[var(--footer-copy)] px-4 py-1.5 text-xs font-extrabold uppercase tracking-wide text-[var(--footer-heading)] transition hover:bg-[var(--prc-gold)] hover:text-[#15110c]"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-wide text-[var(--footer-heading)]">Navigasi</h3>
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
          <h3 className="text-sm font-extrabold uppercase tracking-wide text-[var(--footer-heading)]">Kontak</h3>
          <ul className="mt-4 space-y-3 text-sm text-[var(--footer-copy)]">
            <li>
              <a href={`mailto:${siteConfig.email}`} className="transition hover:text-[var(--footer-heading)]">
                {siteConfig.email}
              </a>
            </li>
            <li>{siteConfig.domain}</li>
            <li>Free community 💛</li>
          </ul>
        </div>
      </div>

      <div className="border-t-2 border-[var(--footer-copy)]/30">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-[var(--footer-copy)] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Probolinggo Remote Club. Semua hak santai.</p>
          <p>Dibikin dengan 💛 dari Probolinggo</p>
        </div>
      </div>
    </footer>
  );
}
