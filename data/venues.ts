export type VenueItem = {
  slug: string;
  name: string;
  area: string;
  description: string;
  details: string[];
  address: string;
  hours: string;
  facilities: string[];
  suitableForMeetup: boolean;
  mapsUrl: string;
  featured?: boolean;
};

export const venues: VenueItem[] = [
  {
    slug: "dummy-coffee-mayangan",
    name: "Dummy Coffee Mayangan",
    area: "Mayangan",
    description:
      "Kafe dengan suasana terang, meja kerja cukup lega, dan cocok untuk sesi coworking santai skala kecil.",
    details: [
      "Venue ini dibayangkan sebagai tempat yang ramah untuk kerja remote pagi sampai siang, terutama untuk orang yang butuh suasana fokus tapi tetap santai.",
      "Karena lokasinya mudah dijangkau, tempat seperti ini cocok menjadi titik kumpul awal komunitas.",
    ],
    address: "Mayangan, Kota Probolinggo",
    hours: "08.00 - 22.00 WIB",
    facilities: ["Wi-Fi", "Colokan", "Indoor", "Makanan", "Parkir"],
    suitableForMeetup: true,
    mapsUrl: "https://maps.google.com",
    featured: true,
  },
  {
    slug: "ruang-kumpul-bayuangga",
    name: "Ruang Kumpul Bayuangga",
    area: "Kanigaran",
    description:
      "Venue semi-formal untuk meetup komunitas, sharing session, atau diskusi kelompok kecil.",
    details: [
      "Tempat seperti ini cocok untuk acara komunitas yang butuh suasana lebih tenang dan percakapan yang lebih fokus.",
      "Layout-nya mendukung format presentasi ringan sekaligus ngobrol santai.",
    ],
    address: "Kanigaran, Kota Probolinggo",
    hours: "09.00 - 21.00 WIB",
    facilities: ["Wi-Fi", "Colokan", "Indoor", "Parkir"],
    suitableForMeetup: true,
    mapsUrl: "https://maps.google.com",
    featured: true,
  },
  {
    slug: "studio-kolaborasi-pesisir",
    name: "Studio Kolaborasi Pesisir",
    area: "Kademangan",
    description:
      "Ruang kerja kecil dengan nuansa lebih tenang untuk kerja mandiri atau diskusi intensif.",
    details: [
      "Venue ini lebih cocok untuk sesi kerja fokus, brainstorming kecil, atau meetup dengan jumlah peserta terbatas.",
      "Cocok untuk anggota yang mencari tempat kerja remote selain rumah dan kafe ramai.",
    ],
    address: "Kademangan, Kota Probolinggo",
    hours: "10.00 - 20.00 WIB",
    facilities: ["Wi-Fi", "Colokan", "Indoor"],
    suitableForMeetup: false,
    mapsUrl: "https://maps.google.com",
  },
];

export function getVenueBySlug(slug: string) {
  return venues.find((venue) => venue.slug === slug);
}
