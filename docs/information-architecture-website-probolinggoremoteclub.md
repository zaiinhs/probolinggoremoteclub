# Information Architecture Website Probolinggo Remote Club

## Tujuan Dokumen

Dokumen ini menjabarkan struktur informasi website Probolinggo Remote Club agar kebutuhan konten, navigasi, desain, dan development memiliki acuan yang sama.

Information architecture ini disusun berdasarkan tujuan utama website komunitas:

1. Memperkenalkan komunitas secara jelas.
2. Memudahkan calon anggota untuk bergabung.
3. Menampilkan kegiatan komunitas.
4. Menyediakan referensi venue remote-friendly di Probolinggo.
5. Menjadi pusat informasi resmi komunitas.

## Prinsip Struktur Informasi

Struktur website mengikuti prinsip berikut:

1. Sederhana untuk pengunjung baru.
2. Mudah dipindai dengan cepat di mobile.
3. CTA utama selalu mengarah ke aksi `Gabung Komunitas` dan `Lihat Event`.
4. Konten komunitas dibagi berdasarkan kebutuhan pengguna, bukan berdasarkan struktur internal organisasi.
5. Navigasi utama dibuat ringkas agar pengunjung tidak bingung.

## Tipe Pengguna dan Kebutuhan Informasi

### 1. Calon Anggota

Kebutuhan utama:

1. Komunitas ini apa.
2. Untuk siapa komunitas ini dibuat.
3. Kegiatan apa saja yang ada.
4. Cara bergabung.
5. Apakah komunitas ini gratis.

### 2. Anggota atau Pengunjung yang Ingin Ikut Event

Kebutuhan utama:

1. Event terdekat.
2. Detail lokasi, waktu, dan format kegiatan.
3. Cara RSVP atau daftar.
4. Informasi venue.

### 3. Pengunjung yang Ingin Mengenal Ekosistem Komunitas

Kebutuhan utama:

1. Latar belakang komunitas.
2. Nilai dan tujuan komunitas.
3. Artikel atau update komunitas.
4. Kontak dan media sosial.

### 4. Admin

Kebutuhan utama:

1. Kelola event.
2. Kelola data anggota.
3. Kelola artikel.
4. Kelola venue.

## Struktur Navigasi Utama

Navigasi utama publik yang direkomendasikan:

1. `Beranda`
2. `Tentang`
3. `Event`
4. `Venue`
5. `Artikel`
6. `Kontak`
7. `Gabung Komunitas` sebagai tombol CTA utama

## Struktur Header

### Header Desktop

Komponen:

1. Logo Probolinggo Remote Club.
2. Menu utama.
3. Tombol CTA `Gabung Komunitas`.

### Header Mobile

Komponen:

1. Logo.
2. Hamburger menu.
3. Tombol CTA `Gabung` atau tetap ditampilkan di menu.

## Struktur Footer

Footer direkomendasikan memuat:

1. Ringkasan singkat komunitas.
2. Link halaman utama.
3. Link media sosial.
4. Email atau kontak komunitas.
5. Catatan `Non-profit` dan `Free community`.

## Sitemap Rekomendasi MVP

```text
/
|-- /tentang
|-- /event
|   |-- /event/[slug]
|-- /venue
|   |-- /venue/[slug]
|-- /artikel
|   |-- /artikel/[slug]
|-- /kontak
|-- /gabung
|-- /gabung/sukses
|-- /admin/login
|-- /admin
|   |-- /admin/members
|   |-- /admin/events
|   |-- /admin/venues
|   |-- /admin/articles
```

## Struktur Halaman Publik

### 1. `Beranda`

Tujuan halaman:

1. Menjelaskan komunitas dalam waktu singkat.
2. Menunjukkan manfaat bergabung.
3. Mengarahkan pengguna ke join form atau event.

Section yang direkomendasikan:

1. Hero section.
2. Tentang singkat komunitas.
3. Kenapa komunitas ini ada.
4. Siapa yang bisa bergabung.
5. Highlight event terdekat.
6. Highlight venue rekomendasi.
7. Highlight artikel atau update terbaru.
8. CTA akhir untuk bergabung.

### 2. `Tentang`

Tujuan halaman:

1. Memberikan penjelasan lengkap tentang komunitas.
2. Membantu calon anggota merasa yakin sebelum bergabung.

Section yang direkomendasikan:

1. Cerita singkat berdirinya komunitas.
2. Visi.
3. Misi.
4. Nilai komunitas.
5. Siapa yang bisa bergabung.
6. Bentuk kegiatan.
7. Prinsip non-profit dan gratis.
8. CTA untuk bergabung.

### 3. `Gabung Komunitas`

Tujuan halaman:

1. Mengubah pengunjung menjadi anggota terdaftar.
2. Menjaga proses pendaftaran tetap ringkas dan jelas.

Section yang direkomendasikan:

1. Judul dan penjelasan singkat.
2. Benefit menjadi bagian dari komunitas.
3. Form pendaftaran.
4. FAQ singkat tentang keanggotaan.

### 4. `Event`

Tujuan halaman:

1. Menampilkan aktivitas komunitas.
2. Mengundang pengguna untuk ikut kegiatan.

Section yang direkomendasikan:

1. Hero atau intro halaman.
2. Event mendatang.
3. Event sebelumnya.
4. Filter sederhana bila diperlukan di fase berikutnya.

### 5. `Detail Event`

Tujuan halaman:

1. Memberikan informasi lengkap tentang satu kegiatan.
2. Memfasilitasi pendaftaran atau RSVP.

Section yang direkomendasikan:

1. Judul event.
2. Ringkasan event.
3. Tanggal dan waktu.
4. Lokasi dan venue.
5. Agenda atau format kegiatan.
6. CTA `Daftar` atau `RSVP`.
7. Event lain yang relevan.

### 6. `Venue`

Tujuan halaman:

1. Menyediakan daftar tempat remote-friendly di Probolinggo.
2. Membantu anggota menemukan lokasi untuk kerja atau meetup.

Section yang direkomendasikan:

1. Intro halaman.
2. Daftar venue unggulan.
3. Seluruh venue.
4. Informasi fasilitas utama.

### 7. `Detail Venue`

Tujuan halaman:

1. Menjelaskan venue secara lengkap.
2. Membantu anggota menilai apakah tempat cocok untuk kerja remote.

Section yang direkomendasikan:

1. Nama venue.
2. Deskripsi singkat.
3. Alamat.
4. Link peta.
5. Fasilitas.
6. Jam operasional.
7. Status cocok untuk meetup komunitas atau tidak.

### 8. `Artikel`

Tujuan halaman:

1. Menjadi pusat update komunitas.
2. Mendukung SEO dasar.
3. Menunjukkan komunitas aktif dan bertumbuh.

Section yang direkomendasikan:

1. Artikel terbaru.
2. Artikel unggulan.
3. Arsip artikel.

### 9. `Detail Artikel`

Tujuan halaman:

1. Menyampaikan update, cerita, atau insight dengan format panjang.
2. Mendorong engagement lebih dalam.

Section yang direkomendasikan:

1. Judul.
2. Tanggal publikasi.
3. Isi artikel.
4. CTA menuju event atau join community.
5. Artikel terkait.

### 10. `Kontak`

Tujuan halaman:

1. Menyediakan saluran komunikasi resmi komunitas.
2. Menjadi jembatan untuk kolaborasi atau pertanyaan.

Section yang direkomendasikan:

1. Email komunitas.
2. Link media sosial.
3. Link grup komunitas bila sudah ada.
4. Form kontak opsional.
5. Penjelasan singkat untuk ajakan kolaborasi.

## Taksonomi Konten

### Jenis Konten Utama

1. `Static Pages`
2. `Events`
3. `Venues`
4. `Articles`
5. `Members` untuk kebutuhan internal admin

### Kategori Konten Artikel yang Direkomendasikan

1. Update komunitas
2. Dokumentasi event
3. Tips remote working
4. Venue spotlight
5. Cerita anggota

### Kategori Event yang Direkomendasikan

1. Meetup
2. Coworking Day
3. Sharing Session
4. Networking Session
5. Community Hangout

## Prioritas CTA

CTA utama yang harus konsisten muncul di berbagai halaman:

1. `Gabung Komunitas`
2. `Lihat Event`
3. `Lihat Venue`

CTA sekunder:

1. `Baca Cerita Kami`
2. `Lihat Artikel`
3. `Hubungi Kami`

## Label Navigasi yang Disarankan

Gunakan label yang singkat dan mudah dipahami:

1. `Beranda`
2. `Tentang`
3. `Event`
4. `Venue`
5. `Artikel`
6. `Kontak`
7. `Gabung Komunitas`

Hindari label yang terlalu abstrak seperti:

1. `Eksplorasi`
2. `Insight`
3. `Aktivitas Kami` jika masih bisa digantikan dengan `Event`

## Rekomendasi Metadata SEO Dasar

### Beranda

- Title: `Probolinggo Remote Club | Komunitas Pekerja Remote di Probolinggo`
- Description: `Komunitas non-profit dan gratis untuk para pekerja remote di Probolinggo. Tempat berkumpul, coworking, networking, dan bertumbuh bersama.`

### Tentang

- Title: `Tentang Probolinggo Remote Club`
- Description: `Kenali latar belakang, visi, misi, dan nilai komunitas Probolinggo Remote Club.`

### Event

- Title: `Event Probolinggo Remote Club`
- Description: `Lihat meetup, coworking day, dan kegiatan komunitas pekerja remote di Probolinggo.`

### Venue

- Title: `Venue Remote-Friendly di Probolinggo`
- Description: `Temukan kafe dan tempat yang cocok untuk kerja remote dan meetup komunitas di Probolinggo.`

### Artikel

- Title: `Artikel Probolinggo Remote Club`
- Description: `Baca update komunitas, dokumentasi event, dan insight seputar kerja remote di Probolinggo.`

### Gabung

- Title: `Gabung Probolinggo Remote Club`
- Description: `Bergabung gratis dengan komunitas pekerja remote di Probolinggo.`

## Alur Navigasi Utama Pengguna

### Flow A: Baru kenal komunitas

1. Masuk ke `Beranda`.
2. Pindah ke `Tentang` untuk validasi.
3. Pindah ke `Gabung Komunitas`.
4. Submit form.

### Flow B: Ingin ikut kegiatan

1. Masuk ke `Beranda` atau `Event`.
2. Pilih event.
3. Buka `Detail Event`.
4. RSVP atau daftar.

### Flow C: Ingin cari tempat kerja remote

1. Masuk ke `Venue`.
2. Buka `Detail Venue`.
3. Cek fasilitas dan lokasi.

## Catatan Implementasi

1. Untuk tahap awal, halaman `Beranda`, `Tentang`, `Gabung`, `Event`, `Venue`, `Artikel`, dan `Kontak` sudah cukup sebagai fondasi website.
2. Halaman `Anggota` tidak perlu dipublikasikan pada MVP bila belum ada kebutuhan eksplisit.
3. Bila resource terbatas, `Venue` dan `Artikel` bisa dirilis setelah `Beranda`, `Tentang`, `Gabung`, dan `Event` selesai.
4. Struktur URL sebaiknya singkat, konsisten, dan mudah diingat.
