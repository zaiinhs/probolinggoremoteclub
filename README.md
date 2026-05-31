# Probolinggo Remote Club

Komunitas gratis dan non-profit untuk pekerja remote di Probolinggo. Tempat berkumpul, coworking, networking, dan bertumbuh bersama.

Website: [probolinggoremoteclub.pages.dev](https://probolinggoremoteclub.pages.dev)

## Tech Stack

- **Framework:** Next.js 16 + Turbopack
- **Bahasa:** TypeScript
- **Styling:** Tailwind CSS 4
- **Font:** Bricolage Grotesque & Space Grotesk via Next.js Font
- **Ikon:** Lucide React
- **Deploy:** Cloudflare Pages (static export)

## Memulai

```bash
npm install
npm run dev
```

Buka [http://localhost:2026](http://localhost:2026) di browser.

## Scripts

| Perintah | Deskripsi |
|----------|-----------|
| `npm run dev` | Jalankan development server (port 2026) |
| `npm run build` | Build static site ke `out/` |
| `npm run start` | Jalankan production server (port 2026) |
| `npm run lint` | Jalankan ESLint |

## Struktur Proyek

```
app/           — Halaman dan routing (Next.js App Router)
components/    — Komponen bersama (footer, header, hero, dll.)
data/          — Data statis (artikel, event, venue, site config)
docs/          — Dokumentasi proyek
public/        — Aset statis
```

## Berkontribusi

Project ini open source. Lihat source code dan kontribusi di [GitHub](https://github.com/zaiinhs/probolinggoremoteclub).
