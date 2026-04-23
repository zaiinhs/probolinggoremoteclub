export type ArticleItem = {
  slug: string;
  title: string;
  excerpt: string;
  dateLabel: string;
  category: string;
  content: string[];
};

export const articles: ArticleItem[] = [
  {
    slug: "kenapa-probolinggo-butuh-komunitas-remote-worker",
    title: "Kenapa Probolinggo Butuh Komunitas Remote Worker",
    excerpt:
      "Kerja remote semakin umum, tapi ruang untuk saling terhubung secara lokal masih minim. Di situlah Probolinggo Remote Club mengambil peran.",
    dateLabel: "22 April 2026",
    category: "Update Komunitas",
    content: [
      "Pola kerja remote membuka lebih banyak peluang, tetapi juga menghadirkan tantangan sosial yang nyata. Banyak orang bekerja dari tempat masing-masing tanpa koneksi lokal yang terasa dekat.",
      "Di Probolinggo, kebutuhan itu mulai terasa. Ada pekerja remote dari berbagai bidang, tetapi belum banyak ruang yang secara khusus mempertemukan mereka secara rutin.",
      "Probolinggo Remote Club lahir untuk menjawab kebutuhan tersebut: sebuah ruang yang sederhana, gratis, dan terbuka untuk membangun koneksi yang lebih sehat antar pekerja remote di kota sendiri.",
    ],
  },
  {
    slug: "coworking-bukan-cuma-soal-tempat-duduk",
    title: "Coworking Bukan Cuma Soal Tempat Duduk",
    excerpt:
      "Coworking yang baik bukan sekadar mencari Wi-Fi dan colokan. Ada unsur energi bersama, ritme kerja, dan rasa terhubung yang sering tidak kita dapat saat kerja sendirian.",
    dateLabel: "18 April 2026",
    category: "Remote Working",
    content: [
      "Bagi banyak remote worker, masalah terbesar bukan hanya soal fasilitas, tetapi suasana. Bekerja bersama orang lain yang sama-sama sedang fokus bisa membantu menjaga ritme kerja.",
      "Coworking juga memberi ruang untuk interaksi ringan yang tidak memaksa. Kadang obrolan singkat saat break justru membuka koneksi baru yang relevan.",
      "Karena itu, komunitas seperti Probolinggo Remote Club tidak hanya bicara soal tempat, tetapi juga pengalaman bekerja bersama secara lebih manusiawi.",
    ],
  },
  {
    slug: "venue-remote-friendly-apa-yang-sebaiknya-dicari",
    title: "Venue Remote-Friendly: Apa yang Sebaiknya Dicari?",
    excerpt:
      "Tidak semua kafe nyaman untuk kerja remote. Ada beberapa indikator sederhana yang bisa membantu memilih venue yang benar-benar mendukung fokus kerja.",
    dateLabel: "12 April 2026",
    category: "Venue Spotlight",
    content: [
      "Venue remote-friendly idealnya punya kombinasi beberapa hal dasar: koneksi internet yang stabil, colokan yang cukup, pencahayaan baik, dan suasana yang tidak terlalu bising.",
      "Untuk kebutuhan komunitas, faktor tambahan seperti kemudahan akses, kapasitas tempat duduk, dan kenyamanan untuk ngobrol ringan juga penting.",
      "Di tahap awal, kami akan mengkurasi venue berdasarkan kebutuhan nyata anggota, bukan sekadar tempat yang terlihat menarik secara visual.",
    ],
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}
