import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Tentang",
  description:
    "Kenali latar belakang, visi, misi, dan nilai komunitas Probolinggo Remote Club.",
};

export default function TentangPage() {
  return (
    <>
      <PageHero
        eyebrow="Tentang"
        title="Tentang Probolinggo Remote Club"
        description="Probolinggo Remote Club adalah komunitas untuk orang-orang Probolinggo yang bekerja secara remote. Komunitas ini dibangun sebagai ruang bertemu, berbagi, dan bertumbuh bersama, tanpa dibatasi profesi tertentu dan tanpa tujuan komersial."
      />

      <section className="section-shell grid gap-8 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
        <div className="card-surface">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--prc-sea)]">
            Berawal dari kebutuhan yang sederhana
          </p>
          <div className="theme-copy mt-6 space-y-5 text-base leading-8">
            <p>
              Semakin banyak orang di Probolinggo yang bekerja secara remote, tetapi belum banyak ruang lokal yang benar-benar mempertemukan mereka. Banyak yang punya ritme kerja serupa, tantangan yang mirip, dan kebutuhan untuk terhubung, tetapi belum punya wadah yang terasa dekat, santai, dan relevan.
            </p>
            <p>
              Probolinggo Remote Club lahir dari kebutuhan itu. Sebuah komunitas untuk menghubungkan para pekerja remote di Probolinggo agar tidak harus tumbuh sendirian.
            </p>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="card-surface">
            <h2 className="theme-heading text-2xl font-semibold">Visi</h2>
            <p className="theme-copy mt-4 text-base leading-8">
              Menjadi komunitas pekerja remote di Probolinggo yang inklusif, ramah, dan bertumbuh bersama sebagai ruang berkumpul, berjejaring, dan berkolaborasi.
            </p>
          </div>
          <div className="card-surface">
            <h2 className="theme-heading text-2xl font-semibold">Misi</h2>
            <p className="theme-copy mt-4 text-base leading-8">
              Menyediakan wadah komunitas yang terbuka bagi pekerja remote lintas profesi, mendorong koneksi dan kolaborasi antar anggota, serta menghadirkan kegiatan yang membuat kerja remote terasa lebih terhubung secara lokal.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell py-8 lg:py-12">
        <div className="grid gap-6 lg:grid-cols-4">
          {[
            ["Inklusif", "Terbuka untuk semua pekerja remote tanpa memandang profesi dan latar belakang."],
            ["Kolaboratif", "Kami ingin membangun ruang yang saling mendukung dan saling menguatkan."],
            ["Lokal", "Komunitas ini tumbuh dari konteks dan kebutuhan nyata di Probolinggo."],
            ["Gratis dan non-profit", "Komunitas ini dibangun untuk manfaat bersama, bukan untuk mencari keuntungan."],
          ].map(([title, copy]) => (
            <div key={title} className="card-surface">
              <h2 className="theme-heading text-xl font-semibold">{title}</h2>
              <p className="theme-copy mt-3 text-sm leading-7">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell grid gap-6 py-16 lg:grid-cols-2 lg:py-20">
        <div className="card-surface">
          <h2 className="theme-heading text-2xl font-semibold">Komunitas ini untuk siapa?</h2>
          <p className="theme-copy mt-4 text-base leading-8">
            Untuk siapa saja di Probolinggo yang bekerja secara remote atau hybrid. Mulai dari pekerja digital, freelancer, admin online, virtual assistant, tutor, sampai profesi non-IT lain yang menjalankan pekerjaannya dari mana saja.
          </p>
        </div>
        <div className="card-surface">
          <h2 className="theme-heading text-2xl font-semibold">Apa yang biasanya kami lakukan?</h2>
          <p className="theme-copy mt-4 text-base leading-8">
            Kegiatan komunitas bisa berupa meetup santai, coworking bareng, sharing session, diskusi ringan, sampai eksplorasi venue remote-friendly di Probolinggo.
          </p>
        </div>
      </section>

      <section className="section-shell pb-16 lg:pb-24">
        <div className="cta-panel px-6 py-10 sm:px-10">
          <h2 className="text-3xl font-semibold">Tertarik jadi bagian dari komunitas ini?</h2>
          <div className="mt-6">
            <Link href="/gabung" className="btn-primary sm:w-fit">
              Gabung Komunitas
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
