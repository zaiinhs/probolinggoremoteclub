export type EventItem = {
  slug: string;
  title: string;
  summary: string;
  description: string[];
  type: string;
  status: "upcoming" | "past";
  dateLabel: string;
  timeLabel: string;
  location: string;
  venueName: string;
  agenda: string[];
};

export const events: EventItem[] = [
  {
    slug: "coworking-day-mayangan",
    title: "Coworking Day Mayangan",
    summary:
      "Sesi kerja bareng santai untuk para remote worker Probolinggo yang ingin fokus, kenalan, dan ngobrol ringan setelah jam kerja.",
    description: [
      "Coworking Day ini dirancang sebagai titik temu sederhana untuk orang-orang Probolinggo yang biasanya bekerja sendiri dari rumah, kafe, atau tempat masing-masing.",
      "Formatnya ringan: datang, kerja, ngobrol seperlunya, lalu tutup dengan sesi perkenalan singkat agar koneksi di dalam komunitas mulai tumbuh secara alami.",
    ],
    type: "Coworking Day",
    status: "upcoming",
    dateLabel: "Sabtu, 24 Mei 2026",
    timeLabel: "09.00 - 13.00 WIB",
    location: "Mayangan, Kota Probolinggo",
    venueName: "Dummy Coffee Mayangan",
    agenda: [
      "Check-in dan perkenalan ringan",
      "Focused work session",
      "Break dan networking santai",
      "Closing circle singkat",
    ],
  },
  {
    slug: "meetup-perkenalan-prc",
    title: "Meetup Perkenalan Probolinggo Remote Club",
    summary:
      "Meetup awal untuk saling kenal, membahas tujuan komunitas, dan mengumpulkan masukan dari calon anggota pertama.",
    description: [
      "Meetup ini menjadi ruang awal untuk memperkenalkan Probolinggo Remote Club ke publik lokal.",
      "Fokus utamanya adalah membangun rasa memiliki sejak awal, bukan membuat acara yang terlalu formal.",
    ],
    type: "Meetup",
    status: "upcoming",
    dateLabel: "Minggu, 7 Juni 2026",
    timeLabel: "15.30 - 17.30 WIB",
    location: "Kanigaran, Kota Probolinggo",
    venueName: "Ruang Kumpul Bayuangga",
    agenda: [
      "Opening dan cerita singkat komunitas",
      "Sesi perkenalan peserta",
      "Diskusi kebutuhan remote worker lokal",
      "Foto bersama dan networking",
    ],
  },
  {
    slug: "sharing-session-ritme-kerja-remote",
    title: "Sharing Session: Menjaga Ritme Kerja Remote",
    summary:
      "Diskusi santai tentang fokus kerja, burnout, dan cara menjaga ritme kerja remote yang sehat.",
    description: [
      "Banyak remote worker menghadapi tantangan yang serupa: sulit membatasi jam kerja, mudah terdistraksi, atau merasa terisolasi.",
      "Sesi ini dibuat untuk berbagi praktik nyata dari pengalaman sehari-hari, bukan teori yang terlalu berat.",
    ],
    type: "Sharing Session",
    status: "past",
    dateLabel: "Sabtu, 26 April 2026",
    timeLabel: "10.00 - 12.00 WIB",
    location: "Probolinggo Barat",
    venueName: "Studio Kolaborasi Pesisir",
    agenda: [
      "Opening dan pengantar topik",
      "Sesi sharing pengalaman peserta",
      "Diskusi tools dan kebiasaan kerja",
      "Rangkuman insight utama",
    ],
  },
];

export function getEventBySlug(slug: string) {
  return events.find((event) => event.slug === slug);
}
