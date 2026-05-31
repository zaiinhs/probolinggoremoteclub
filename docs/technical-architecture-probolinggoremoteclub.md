# Technical Architecture Probolinggo Remote Club

## Tujuan Dokumen

Dokumen ini menetapkan keputusan teknis awal untuk membangun website `probolinggoremoteclub.pages.dev` berdasarkan kebutuhan saat ini:

1. Website tahap awal bersifat informatif.
2. Fokus utama adalah publikasi komunitas, bukan operasional admin penuh.
3. Website harus mudah dikembangkan ke fase berikutnya, termasuk dashboard admin.
4. Branding awal masih dapat memakai logo dummy.
5. Warna brand mengikuti latar belakang identitas Probolinggo.

## Keputusan Utama

### Domain

- Domain utama: `probolinggoremoteclub.pages.dev`

### Email Komunitas

- Email kontak awal: `zainalabidinhsc@gmail.com`

### Fase Produk Saat Ini

- Fase: `Informational Website MVP`
- Dashboard admin: `Belum dibangun pada fase awal`
- Data konten awal: `Bisa di-hardcode atau berbasis file lokal`

## Rekomendasi Stack Teknologi

Stack yang paling cocok untuk kebutuhan saat ini adalah:

1. `Next.js 15`
2. `TypeScript`
3. `Tailwind CSS`
4. `shadcn/ui` untuk komponen dasar
5. `MDX` atau data lokal berbasis `TypeScript objects` untuk konten awal
6. `Vercel` untuk deployment
7. `Plausible` atau `Google Analytics` untuk analytics opsional

## Kenapa Stack Ini Paling Cocok

### 1. `Next.js`

Alasan pemilihan:

1. Sangat cocok untuk website komunitas yang butuh SEO bagus.
2. Mendukung static generation dan server rendering.
3. Cepat untuk membuat landing page, halaman event, artikel, dan venue.
4. Mudah ditingkatkan ke dashboard admin di fase berikutnya tanpa pindah stack.
5. Deployment ke Vercel sangat sederhana.

### 2. `TypeScript`

Alasan pemilihan:

1. Menjaga struktur data konten tetap rapi.
2. Mempermudah ekspansi saat nanti masuk ke database, auth, dan admin dashboard.
3. Mengurangi error saat codebase mulai tumbuh.

### 3. `Tailwind CSS`

Alasan pemilihan:

1. Cepat untuk membangun UI modern.
2. Cocok untuk iterasi desain komunitas yang masih berkembang.
3. Mudah menjaga konsistensi spacing, typography, dan warna.
4. Cocok dipadukan dengan desain ringan dan responsif.

### 4. `shadcn/ui`

Alasan pemilihan:

1. Memberi fondasi komponen yang rapi tanpa terasa terlalu template-heavy.
2. Komponen tetap berada di codebase sendiri, bukan vendor lock-in.
3. Memudahkan penambahan form, dialog, card, sheet, dan komponen dashboard nanti.

### 5. `Konten Lokal Dulu`

Untuk fase awal, konten tidak perlu database.

Pendekatan yang direkomendasikan:

1. Halaman statis ditulis langsung di komponen.
2. Data event, venue, dan artikel awal disimpan di folder `src/data`.
3. Artikel panjang bisa memakai `MDX` jika ingin mudah dikelola.

Alasannya:

1. Lebih cepat launch.
2. Tidak perlu beban operasional backend dan database sejak awal.
3. Nanti bisa dimigrasikan ke database tanpa banyak membuang struktur UI.

## Arsitektur Fase 1

### Scope Fitur

Fase awal yang direkomendasikan:

1. `Beranda`
2. `Tentang`
3. `Gabung Komunitas`
4. `Event`
5. `Detail Event`
6. `Venue`
7. `Detail Venue`
8. `Artikel`
9. `Detail Artikel`
10. `Kontak`

### Form Join

Karena dashboard admin belum dibangun, ada dua opsi ringan:

#### Opsi A: Form ke Email / Third-party

Pakai layanan seperti:

1. `Formspree`
2. `Tally`
3. `Google Form`
4. `Basin`

Keunggulan:

1. Sangat cepat.
2. Tidak perlu backend dulu.
3. Notifikasi bisa langsung ke email komunitas.

#### Opsi B: Simpan ke Backend Minimal

Pakai route handler `Next.js` lalu kirim ke email atau simpan ke storage sederhana.

Keunggulan:

1. Lebih fleksibel.
2. Lebih siap untuk transisi ke dashboard admin.

Rekomendasi untuk launch paling cepat:

- Mulai dari `Opsi A`, lalu upgrade ke `Opsi B` ketika dashboard mulai dibangun.

## Arsitektur Fase 2

Saat komunitas sudah aktif dan butuh pengelolaan internal, stack dilanjutkan dengan:

1. `PostgreSQL`
2. `Prisma`
3. `NextAuth` atau `Auth.js`
4. Dashboard admin custom di dalam aplikasi `Next.js`

Fitur fase 2:

1. Login admin.
2. CRUD event.
3. CRUD venue.
4. CRUD artikel.
5. Manajemen data pendaftar komunitas.
6. RSVP event.

## Struktur Teknis yang Direkomendasikan

```text
src/
|-- app/
|   |-- page.tsx
|   |-- tentang/page.tsx
|   |-- gabung/page.tsx
|   |-- event/page.tsx
|   |-- event/[slug]/page.tsx
|   |-- venue/page.tsx
|   |-- venue/[slug]/page.tsx
|   |-- artikel/page.tsx
|   |-- artikel/[slug]/page.tsx
|   |-- kontak/page.tsx
|-- components/
|   |-- layout/
|   |-- sections/
|   |-- ui/
|-- data/
|   |-- site.ts
|   |-- events.ts
|   |-- venues.ts
|   |-- articles.ts
|-- content/
|   |-- articles/
|-- lib/
|   |-- utils.ts
|-- styles/
```

## Strategi Data Fase Awal

### `site.ts`

Berisi data global seperti:

1. Nama komunitas.
2. Domain.
3. Email kontak.
4. Link sosial media.
5. Tagline.

### `events.ts`

Berisi array event awal.

### `venues.ts`

Berisi daftar venue yang direkomendasikan.

### `articles.ts` atau `MDX`

Berisi artikel atau update komunitas.

## Rekomendasi Visual dan Branding

Karena warna brand diminta mengikuti latar belakang Probolinggo, palet awal yang direkomendasikan:

1. `Biru muda` sebagai warna utama yang merujuk identitas pantai dan lambang kota.
2. `Hijau` sebagai warna pendukung yang merujuk daun dan unsur mangga.
3. `Ungu` sebagai aksen yang merujuk anggur.
4. `Emas` sebagai aksen sekunder untuk memberi nuansa hangat dan identitas sinar atau cahaya.

### Rekomendasi Peran Warna

1. Primary: `Biru muda`
2. Secondary: `Hijau`
3. Accent: `Ungu`
4. Warm accent: `Emas`
5. Neutral text/background: abu-abu slate dan putih

### Arah Visual

1. Bersih dan modern.
2. Tidak terlalu korporat.
3. Terasa lokal, hangat, dan ramah.
4. Banyak whitespace.
5. Card layout sederhana untuk event, venue, dan artikel.

## Logo Awal

Karena logo masih dummy, rekomendasi sementara:

1. Gunakan wordmark `Probolinggo Remote Club`.
2. Tambahkan monogram `PRC` untuk favicon atau avatar sementara.
3. Hindari logo terlalu kompleks di fase awal.

## SEO dan Performance

Prioritas teknis untuk fase 1:

1. Static-first rendering.
2. Metadata halaman yang rapi.
3. Open Graph dasar.
4. Image optimization.
5. Struktur heading yang benar.
6. URL yang singkat dan jelas.

## Deployment yang Direkomendasikan

### Hosting

- `Vercel`

Alasannya:

1. Sangat cocok untuk Next.js.
2. Setup deployment sederhana.
3. Mudah integrasi custom domain.
4. Cocok untuk website komunitas dengan traffic awal rendah sampai menengah.

### Domain Setup

Setelah website siap:

1. Hubungkan domain `probolinggoremoteclub.pages.dev` ke Vercel.
2. Aktifkan HTTPS.
3. Pastikan redirect root domain berjalan benar.

## Analytics dan Monitoring

Untuk fase awal, cukup pilih salah satu:

1. `Plausible` jika ingin lebih ringan dan privacy-friendly.
2. `Google Analytics` jika ingin tools yang umum dipakai.

Yang dilacak:

1. Jumlah pengunjung.
2. Halaman paling sering dibuka.
3. Klik `Gabung Komunitas`.
4. Klik `Lihat Event`.
5. Submit form join.

## Yang Belum Perlu di Fase 1

Belum perlu dibangun sekarang:

1. Database production.
2. Login admin.
3. Dashboard internal.
4. Sistem member area.
5. Sistem RSVP kompleks.
6. Job board.
7. Forum komunitas.

## Kesimpulan Rekomendasi

Stack terbaik dan paling cocok untuk case ini adalah:

1. `Next.js + TypeScript + Tailwind CSS + shadcn/ui`
2. Konten statis atau file-based terlebih dahulu
3. Deploy di `Vercel`
4. Form join pakai solusi ringan terlebih dahulu
5. Siapkan arsitektur agar mudah naik ke `PostgreSQL + Prisma + Auth + Admin Dashboard` di fase berikutnya

Pendekatan ini memberi keseimbangan terbaik antara:

1. Cepat launch.
2. Mudah dikelola.
3. SEO bagus.
4. Mudah dikembangkan.
5. Tidak over-engineered untuk tahap awal.
