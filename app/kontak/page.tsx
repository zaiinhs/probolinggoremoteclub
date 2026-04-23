import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Kontak",
  description: "Hubungi Probolinggo Remote Club untuk pertanyaan atau kolaborasi.",
};

export default function KontakPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontak"
        title="Hubungi Probolinggo Remote Club"
        description="Punya pertanyaan, ingin kolaborasi, atau ingin tahu lebih banyak tentang komunitas ini? Hubungi kami lewat kanal resmi yang tersedia."
      />

      <section className="section-shell grid gap-8 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
        <div className="card-surface">
          <h2 className="theme-heading text-2xl font-semibold">Mari terhubung</h2>
          <p className="theme-copy mt-4 text-base leading-8">
            Kami terbuka untuk percakapan, kolaborasi komunitas, dan inisiatif yang sejalan dengan semangat Probolinggo Remote Club.
          </p>
        </div>

        <div className="card-surface">
          <div className="theme-copy space-y-6 text-sm leading-7">
            <div>
              <p className="theme-heading font-semibold">Email</p>
              <a href={`mailto:${siteConfig.email}`} className="text-[var(--prc-sea)]">
                {siteConfig.email}
              </a>
            </div>
            <div>
              <p className="theme-heading font-semibold">Instagram</p>
              <a href={siteConfig.socialLinks.instagram} target="_blank" rel="noreferrer" className="text-[var(--prc-sea)]">
                {siteConfig.socialLinks.instagram}
              </a>
            </div>
            <div>
              <p className="theme-heading font-semibold">LinkedIn</p>
              <a href={siteConfig.socialLinks.linkedin} target="_blank" rel="noreferrer" className="text-[var(--prc-sea)]">
                {siteConfig.socialLinks.linkedin}
              </a>
            </div>
            <div>
              <p className="theme-heading font-semibold">Kolaborasi</p>
              <p>
                Kalau kamu mewakili venue, komunitas lain, atau ingin mendukung kegiatan yang relevan dengan pekerja remote di Probolinggo, kami akan senang untuk ngobrol lebih lanjut.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
