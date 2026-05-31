# Design System — Probolinggo Remote Club (Kekinian / Gen-Z)

Dokumen ini mendokumentasikan arah visual baru website. PRD produk sudah ada di
`prd-website-probolinggoremoteclub.md`; dokumen ini fokus pada **bahasa desain** agar
tampilan tetap konsisten saat website dikembangkan.

## Prinsip Desain

- **Kekinian, bukan korporat.** Berani, playful, ekspresif — bukan kaku/formal.
- **Soft neo-brutalism.** Border tebal 2px berwarna tinta, *hard shadow* offset, sudut membulat besar.
- **Tipografi sebagai bintang utama.** Heading display besar dan tebal, copy yang santai dan ngobrol.
- **Mobile-first.** Semua elemen tetap rapi dan tanpa scroll horizontal di layar kecil.
- **Aksesibel.** Kontras tinggi, mendukung `prefers-reduced-motion`, dark/light/system mode.

## Tipografi

- **Display / heading:** `Bricolage Grotesque` (var `--font-display`) — ekspresif, kekinian.
- **Body / UI:** `Space Grotesk` (var `--font-body`) — modern, bersih, mudah dibaca.
- Di-load via `next/font/google` (self-hosted otomatis, tanpa request runtime ke Google).
- Heading pakai weight 700–800 dengan `letter-spacing: -0.02em` (rapat & punchy).
- Aksen teks: `.marker`, `.marker-sky`, `.marker-coral` untuk efek stabilo di balik kata kunci.

## Palet Warna

| Token        | Light      | Fungsi                         |
|--------------|------------|--------------------------------|
| `--background`| `#fdf4e6` (cream) | latar utama             |
| `--ink`      | `#15110c`  | border, shadow, teks tegas     |
| `--prc-gold` | `#f5b400`  | aksi utama, highlight, statistik |
| `--prc-sky`  | `#7cd3ff`  | aksen sejuk, hover             |
| `--prc-leaf` | `#3fb950`  | aksen venue / lokal            |
| `--prc-grape`| `#8b5cf6`  | aksen artikel / CTA panel      |
| `--prc-coral`| `#ff5d73`  | aksen kontras / "fun"          |

Dark mode: background `#0e1117`, tinta jadi terang (`#f4ecdd`), shadow jadi hitam pekat.
Semua token didefinisikan di `app/globals.css` (`:root` dan `html.dark`).

## Komponen & Utility (di `globals.css`)

- `.btn-primary` — tombol kuning, border tinta, hard shadow, animasi tekan.
- `.btn-secondary` — tombol putih, hover jadi sky.
- `.card-surface` — kartu border tebal + hard shadow, hover terangkat.
- `.sticker` (+ varian `-leaf` `-grape` `-gold` `-coral`) — badge label kapital ala stiker.
- `.rotate-l` / `.rotate-r` — kemiringan ±3° untuk kesan tempelan/playful.
- `.marker*` — highlight stabilo di balik teks.
- `.cta-panel` — panel ajakan warna grape dengan shadow besar.
- `.theme-header` / `.theme-footer` / `.theme-input` — chrome halaman, border tinta.
- `.theme-nav-shell` / `.theme-nav-link` / `.theme-nav-link-active` — pill navigasi desktop (aktif = kuning).
- `.theme-seg` / `.theme-seg-btn` / `.theme-seg-btn-active` — segmented control theme toggle (lihat Navbar).

## Navbar (`components/site-header.tsx`)

- **Logo:** badge `PRC` chunky (kotak kuning, border tinta, hard shadow, miring saat hover) + wordmark
  "Probolinggo / Remote Club" dengan badge hijau **"Gratis"** (hanya tampil ≥ `sm`).
- **Navigasi (≥ `lg`):** pill shell berisi link; halaman aktif disorot kuning.
- **Theme toggle:** **segmented control 3 ikon** (Terang ☀️ / Gelap 🌙 / Sistem 💻) di dalam pill,
  ikon aktif disorot kuning. Diimplementasikan dengan `useSyncExternalStore`
  (`components/theme-toggle.tsx`) supaya bebas flash & cocok hydration; sumber kebenaran ada di
  `localStorage` key `prc-theme`, disinkronkan ke seluruh tab via event `prc-theme-change`.
  Mode awal tetap dipasang sebelum hydration oleh `components/theme-script.tsx` (anti-flash).
- **CTA:** tombol "Gabung →" (hanya ≥ `lg`).
- **Mobile (< `lg`):** tombol hamburger (ikon `Menu`/`X`) membuka panel navigasi + CTA full-width.

## Pola Layout

- Lebar konten maksimum `80rem` via `.section-shell`.
- Hero beranda: headline raksasa + sticker + kartu miring + strip statistik kuning.
- Setiap halaman dalam memakai `PageHero` (sticker + heading display + deskripsi).
- Kartu daftar (event/venue/artikel) seragam lewat komponen `components/cards.tsx`.

## Catatan Implementasi & Gotcha

- **Penting — `hidden` vs class komponen:** class seperti `.btn-primary`/`.btn-secondary` menetapkan
  `display: inline-flex` dan dimuat **setelah** utility Tailwind, sehingga **menimpa** utility `hidden`.
  Untuk show/hide responsif pada tombol, **bungkus dengan elemen wrapper** (mis. `<div className="hidden lg:block">`),
  jangan menaruh `hidden lg:inline-flex` langsung di tombol.
- Form pendaftaran memakai `formsubmit.co` (lihat `app/gabung/page.tsx`) — data masuk ke email komunitas.
- Satu-satunya dependency baru adalah font (`next/font/google`); sisanya murni styling.
- Dev & production jalan di **port 2026** (`npm run dev` / `npm run start` — lihat `package.json`).
- Build & lint hijau, 13 route ter-generate. Diuji di viewport desktop (1280) dan mobile
  (headless Chrome memaksa lebar minimum ~500px; layout `< lg` sudah collapse dengan benar).

## Penyesuaian terhadap Dokumen Perencanaan

Beberapa rekomendasi pra-build di `technical-architecture-...md` & `build-checklist-...md` sudah berevolusi
di implementasi nyata:

- **`shadcn/ui` tidak dipakai.** UI dibangun dengan Tailwind CSS v4 + utility/komponen custom + ikon
  `lucide-react` saja, agar gaya neo-brutalism kekinian lebih leluasa.
- **Palet warna** berkembang dari rekomendasi awal (biru muda + hijau) menjadi palet kekinian penuh:
  cream + tinta + gold/sky/leaf/grape/coral (lihat tabel di atas) — tetap berakar pada identitas Probolinggo.
