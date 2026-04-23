import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-shell py-24 lg:py-32">
      <div className="card-surface mx-auto max-w-2xl p-8 text-center sm:p-12">
        <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--prc-grape)]">
          Halaman tidak ditemukan
        </p>
        <h1 className="theme-heading mt-4 text-4xl font-semibold">Konten yang kamu cari belum tersedia.</h1>
        <p className="theme-copy mt-5 text-base leading-8">
          Halaman yang kamu cari mungkin sudah dipindahkan atau belum dipublikasikan.
        </p>
        <div className="mt-8">
          <Link href="/" className="btn-primary sm:w-fit">
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </section>
  );
}
