import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Gabung Komunitas",
  description: "Bergabung gratis dengan komunitas pekerja remote di Probolinggo.",
};

export default function GabungPage() {
  return (
    <>
      <PageHero
        eyebrow="Gabung"
        title="Gabung Probolinggo Remote Club"
        description="Gratis, non-profit, dan terbuka untuk semua pekerja remote di Probolinggo. Isi form singkat di bawah untuk bergabung dan mulai terhubung dengan komunitas."
      />

      <section className="section-shell grid gap-8 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
        <div className="space-y-6">
          <div className="card-surface">
            <h2 className="theme-heading text-2xl font-semibold">Kenapa ikut komunitas ini?</h2>
            <p className="theme-copy mt-4 text-base leading-8">
              Karena kerja remote akan terasa lebih sehat kalau kamu punya ruang untuk terhubung, bertanya, berbagi, dan sesekali bertemu dengan orang-orang yang punya ritme kerja serupa.
            </p>
          </div>

          <div className="card-surface">
            <h2 className="theme-heading text-2xl font-semibold">FAQ singkat</h2>
            <div className="theme-copy mt-5 space-y-5 text-sm leading-7">
              <div>
                <p className="theme-heading font-semibold">Apakah komunitas ini berbayar?</p>
                <p>Tidak. Probolinggo Remote Club adalah komunitas gratis dan non-profit.</p>
              </div>
              <div>
                <p className="theme-heading font-semibold">Apakah komunitas ini hanya untuk orang IT?</p>
                <p>Bukan. Komunitas ini terbuka untuk semua profesi yang bekerja secara remote atau hybrid.</p>
              </div>
              <div>
                <p className="theme-heading font-semibold">Kalau saya baru mulai kerja remote, apakah bisa ikut?</p>
                <p>Bisa. Komunitas ini juga terbuka untuk orang yang sedang menuju atau baru masuk ke dunia kerja remote.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card-surface">
          <h2 className="theme-heading text-2xl font-semibold">Isi data singkatmu</h2>
          <p className="theme-copy mt-4 text-base leading-8">
            Kami hanya meminta informasi dasar untuk mengenalmu lebih baik dan membangun komunitas yang relevan.
          </p>

          <form
            action={`https://formsubmit.co/${siteConfig.email}`}
            method="POST"
            className="mt-8 grid gap-5"
          >
            <input type="hidden" name="_subject" value="Pendaftaran baru Probolinggo Remote Club" />
            <input
              type="hidden"
              name="_next"
              value={`https://${siteConfig.domain}/gabung/sukses`}
            />
            <input type="hidden" name="_captcha" value="false" />

            <label className="theme-copy grid gap-2 text-sm font-medium">
              Nama Lengkap
              <input required name="nama_lengkap" className="theme-input" />
            </label>

            <label className="theme-copy grid gap-2 text-sm font-medium">
              Email
              <input required type="email" name="email" className="theme-input" />
            </label>

            <label className="theme-copy grid gap-2 text-sm font-medium">
              Nomor WhatsApp
              <input name="whatsapp" className="theme-input" />
            </label>

            <label className="theme-copy grid gap-2 text-sm font-medium">
              Domisili atau Kecamatan
              <input required name="domisili" className="theme-input" />
            </label>

            <label className="theme-copy grid gap-2 text-sm font-medium">
              Profesi / Pekerjaan
              <input required name="profesi" className="theme-input" />
            </label>

            <label className="theme-copy grid gap-2 text-sm font-medium">
              Status Kerja
              <input
                required
                name="status_kerja"
                placeholder="Misalnya remote, hybrid, freelancer, atau sedang menuju kerja remote"
                className="theme-input"
              />
            </label>

            <label className="theme-copy grid gap-2 text-sm font-medium">
              Alasan Ingin Bergabung
              <textarea
                name="alasan_bergabung"
                rows={4}
                placeholder="Opsional, tapi akan membantu kami memahami kebutuhanmu"
                className="theme-input"
              />
            </label>

            <p className="theme-muted text-xs leading-6">
              Dengan mengirim form ini, kamu setuju datamu digunakan untuk kebutuhan komunikasi komunitas Probolinggo Remote Club.
            </p>

            <button type="submit" className="btn-primary w-full sm:w-fit">
              Gabung Sekarang
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
