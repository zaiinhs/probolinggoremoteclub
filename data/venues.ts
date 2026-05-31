export type VenueItem = {
  slug: string;
  name: string;
  area: string;
  description: string;
  details: string[];
  address: string;
  hours: string;
  facilities: string[];
  wifiMbps: number;
  wifiInfo: string;
  suitableForMeetup: boolean;
  mapsUrl: string;
  featured?: boolean;
};

export const venues: VenueItem[] = [
  {
    slug: "simposium-coffee",
    name: "Simposium Coffee",
    area: "Mayangan",
    description:
      "Kafe modern dengan ruangan luas, pencahayaan alami, dan konsep industrial yang nyaman untuk work-from-cafe maupun nongkrong santai.",
    details: [
      "Simposium Coffee adalah kafe modern di pusat Kota Probolinggo yang populer di kalangan remote worker. Dengan jendela besar dan tata ruang lapang, tempat ini menawarkan suasana yang adem dan cocok untuk bekerja.",
      "Menu kopi kreatif seperti affogato dan salted caramel popcorn latte menjadi andalan. Tersedia juga pilihan makanan ringan dan berat dengan harga terjangkau.",
      "WiFi tersedia dengan kecepatan cukup, mayoritas meja dekat dengan stop kontak. Musik latar yang pelan membuatnya ideal untuk sesi kerja yang fokus.",
    ],
    address: "Jl. Dr. Moch Saleh No.12, Sukabumi, Kec. Mayangan, Kota Probolinggo 67219",
    hours: "09.00 - 21.30 WIB",
    facilities: ["Wi-Fi", "Colokan", "Indoor", "Outdoor", "Makanan", "Parkir"],
    wifiMbps: 10,
    wifiInfo: "⬇⬆ ±10 Mbps — Cukup untuk browsing, email, dan chatting. Kurang ideal untuk video call berat.",
    suitableForMeetup: true,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Simposium+Coffee,+Jl.+Dr.+Moch+Saleh+No.12,+Probolinggo",
    featured: true,
  },
  {
    slug: "oikia-cafe-eatery",
    name: "Oikia Cafe & Eatery",
    area: "Mayangan",
    description:
      "Kafe bertema Santorini dengan ruang VIP untuk meeting, area lesehan, dan suasana hangat yang Instagramable.",
    details: [
      "Oikia Cafe & Eatery mengusung konsep Santorini dengan sentuhan bohemian mediterania yang unik di Probolinggo. Lampu kuning hangat dan dekorasi estetik menciptakan suasana cozy sepanjang hari.",
      "Tersedia ruang VIP untuk meeting atau diskusi kelompok, area lesehan dengan beanbag, serta spot-spot foto yang menarik. Cocok untuk meetup komunitas skala kecil hingga menengah.",
      "Menu mencakup kopi, non-kopi, spaghetti, nasi goreng, gyoza, dan aneka pastry. Harga makanan berkisar Rp25.000 hingga Rp50.000.",
    ],
    address: "Jl. Suyoso No.39, Sukabumi, Kec. Mayangan, Kota Probolinggo",
    hours: "10.00 - 21.00 WIB",
    facilities: ["Wi-Fi", "Colokan", "Indoor", "Outdoor", "VIP Room", "Makanan", "Parkir", "Mushola"],
    wifiMbps: 15,
    wifiInfo: "⬇⬆ ±15 Mbps — Lumayan kencang. Cocok untuk browsing, streaming, dan video call sesekali.",
    suitableForMeetup: true,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Oikia+Cafe+Eatery,+Jl.+Suyoso+No.39,+Probolinggo",
    featured: true,
  },
  {
    slug: "quatro-coffee-eatery",
    name: "Quatro Coffee & Eatery",
    area: "Mayangan",
    description:
      "Kafe dengan suasana tenang, meja panjang menghadap jalan, dan stop kontak di setiap sudut — favorit para pekerja remote.",
    details: [
      "Quatro Coffee & Eatery memiliki atmosfer yang cenderung tenang dengan alunan musik lembut. Meja panjang menghadap ke jalan menjadi spot favorit untuk bekerja sambil menikmati pemandangan.",
      "Menu andalan meliputi Sweet Popcorn, Hojicha, Aglio E Olio, dan Chicken Parmigiana. Minuman dan makanan kekinian dengan rasa yang konsisten.",
      "Tersedia WiFi gratis dan banyak stop kontak di area duduk. Suasananya mendukung untuk WFC (Work From Cafe) maupun pertemuan santai.",
    ],
    address: "Jl. Raya Panglima Sudirman No.237, Jati, Kec. Mayangan, Kota Probolinggo",
    hours: "09.00 - 22.00 WIB",
    facilities: ["Wi-Fi", "Colokan", "Indoor", "Makanan", "Parkir"],
    wifiMbps: 5,
    wifiInfo: "⬇⬆ ±5 Mbps — Lumayan untuk browsing dan chatting. Kurang stabil untuk video call.",
    suitableForMeetup: true,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Quatro+Coffee+Eatery,+Jl.+Panglima+Sudirman+No.237,+Probolinggo",
    featured: true,
  },
  {
    slug: "pesenkopi-plus",
    name: "Pesenkopi Plus Probolinggo",
    area: "Kanigaran",
    description:
      "Kafe dengan konsep modern yang nyaman untuk nongkrong, bekerja, atau meetup, terletak strategis di Jl. Suroyo.",
    details: [
      "Pesenkopi Plus adalah jaringan kafe populer asal Malang yang kini hadir di Probolinggo. Berlokasi di Jl. Suroyo, tempat ini menawarkan suasana modern dan casual yang cocok untuk berbagai aktivitas.",
      "Menu andalan meliputi aneka kopi spesial, minuman kekinian, dan makanan ringan hingga berat. Harganya terjangkau dan porsinya memuaskan.",
      "Fasilitas WiFi dan stop kontak tersedia. Suasananya yang santai membuat tempat ini cocok untuk WFC (Work From Cafe) maupun kumpul bareng teman.",
    ],
    address: "Jl. Suroyo No.9, Tisnonegaran, Kec. Kanigaran, Kota Probolinggo",
    hours: "11.00 - 22.45 WIB",
    facilities: ["Wi-Fi", "Colokan", "Indoor", "Makanan", "Parkir"],
    wifiMbps: 30,
    wifiInfo: "⬇⬆ ±30 Mbps — Sangat kencang. Cocok untuk video conference, streaming, dan upload/download file besar.",
    suitableForMeetup: true,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Pesenkopi+Plus,+Jl.+Suroyo+No.9,+Probolinggo",
    featured: false,
  },
  {
    slug: "kopi-kenangan-suroyo",
    name: "Kopikenangan - Suroyo",
    area: "Kanigaran",
    description:
      "Gerai Kopi Kenangan di Jl. Suroyo — jaringan kopi nasional dengan kopi susu gula aren legendaris dan harga terjangkau.",
    details: [
      "Kopi Kenangan adalah jaringan kopi terbesar di Indonesia yang kini hadir di Probolinggo. Dengan konsep grab-and-go yang praktis, tempat ini cocok untuk ngopi cepat atau takeaway.",
      "Menu signature-nya adalah Kopi Susu Gula Aren yang creamy dan legit. Tersedia juga varian kopi lainnya, minuman non-kopi, dan roti Selembut Awan.",
      "Suasananya casual dan modern. Cocok untuk meeting singkat, nongkrong santai, atau sekadar mengisi energi di sela aktivitas.",
    ],
    address: "Jl. Suroyo, Tisnonegaran, Kec. Kanigaran, Kota Probolinggo",
    hours: "08.00 - 22.00 WIB",
    facilities: ["Wi-Fi", "Indoor", "Makanan", "Takeaway"],
    wifiMbps: 25,
    wifiInfo: "⬇⬆ ±25 Mbps — Kencang dan stabil. Cocok untuk browsing cepat, video call, dan streaming lancar.",
    suitableForMeetup: false,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Kopi+Kenangan,+Jl.+Suroyo,+Probolinggo",
    featured: false,
  },
  {
    slug: "pinus-coffee",
    name: "Pinus Coffee",
    area: "Mayangan",
    description:
      "Coffee shop dengan area indoor-outdoor, koleksi board game, dan meja besar yang cocok untuk kerja kelompok atau ngobrol santai.",
    details: [
      "Pinus Coffee adalah coffee shop yang nyaman di Jalan WR. Supratman dengan perpaduan desain modern dan sentuhan hangat. Tempat ini punya area indoor dan outdoor yang luas.",
      "Koleksi board game dan meja besar tersedia untuk bersosialisasi. Banyak pengunjung memanfaatkannya untuk bekerja sambil menikmati kopi spesial.",
      "Staf yang ramah dan fasilitas stop kontak di banyak meja menjadi nilai tambah. Menu kopi dan non-kopi tersedia dengan rentang harga Rp10.000 hingga Rp60.000.",
    ],
    address: "Jl. WR. Supratman No.28A, Jati, Kec. Mayangan, Kota Probolinggo 67217",
    hours: "10.00 - 22.00 WIB",
    facilities: ["Wi-Fi", "Colokan", "Indoor", "Outdoor", "Board Game", "Makanan", "Parkir"],
    wifiMbps: 10,
    wifiInfo: "⬇⬆ ±10 Mbps — Cukup stabil. Cocok untuk browsing, streaming ringan, dan kerja ringan.",
    suitableForMeetup: true,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Pinus+Coffee,+Jl.+WR.+Supratman+No.28A,+Probolinggo",
    featured: false,
  },
  {
    slug: "join-coffetaria",
    name: "Join Coffetaria",
    area: "Mayangan",
    description:
      "Tempat nongkrong ternyaman di Probolinggo dengan konsep inklusif, WiFi stabil, dan menu kopi spesial yang lengkap.",
    details: [
      "Join Coffetaria hadir sebagai ruang inklusif bagi para pecinta kopi, pekerja lepas, dan komunitas di Probolinggo. Setiap detail dari kursi empuk hingga pencahayaan hangat dirancang untuk kenyamanan.",
      "Terletak strategis di Jl. Hayam Wuruk, tempat ini mudah diakses dan memiliki WiFi stabil. Cocok untuk sesi kerja, rapat kecil, atau sekadar bersantai.",
      "Menu unggulan mencakup kopi manual brew, espresso based, dan iced menu yang menyegarkan. Tersedia juga makanan ringan dan berat.",
    ],
    address: "Jl. Hayam Wuruk, Jati, Kec. Mayangan, Kota Probolinggo 67217",
    hours: "09.00 - 22.00 WIB",
    facilities: ["Wi-Fi", "Colokan", "Indoor", "Makanan", "Parkir", "Mushola"],
    wifiMbps: 20,
    wifiInfo: "⬇⬆ ±20 Mbps — Kencang dan stabil. Cocok untuk video call, streaming, dan kerja remote tanpa hambatan.",
    suitableForMeetup: true,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Join+Coffetaria,+Jl.+Hayam+Wuruk,+Probolinggo",
    featured: false,
  },
  {
    slug: "daily-dose-coffee",
    name: "Daily Dose Coffee",
    area: "Mayangan",
    description:
      "Kafe industrial modern yang buka sejak pagi, cocok untuk sesi kerja awal hari dengan suasana tenang dan kopi berkualitas.",
    details: [
      "Daily Dose Coffee mengusung konsep industrial minimalis dengan ruangan ber-AC yang nyaman. Buka sejak pukul 07.00, tempat ini menjadi pilihan tepat untuk memulai hari kerja.",
      "Meja-meja kecil yang tersedia cocok untuk bekerja sendiri atau berdua. Suasana yang tenang di pagi hari membantu meningkatkan fokus.",
      "Menu kopi dan satay menjadi ciri khas tempat ini. Pelayanan cepat dan harga yang bersahabat membuatnya ramai dikunjungi.",
    ],
    address: "Jl. D.I. Panjaitan No.90, Sukabumi, Kec. Mayangan, Kota Probolinggo 67219",
    hours: "07.00 - 21.00 WIB",
    facilities: ["Wi-Fi", "Colokan", "Indoor", "Makanan", "Parkir"],
    wifiMbps: 15,
    wifiInfo: "⬇⬆ ±15 Mbps — Lumayan kencang. Cocok untuk browsing dan streaming, cukup untuk kerja ringan.",
    suitableForMeetup: false,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Daily+Dose+Coffee,+Jl.+Panjaitan+No.90,+Probolinggo",
    featured: false,
  },
  {
    slug: "jong-java-coffee",
    name: "Jong Java Coffee",
    area: "Kedopok",
    description:
      "Kafe dengan konsep tradisional tropis yang homey, dikelilingi tanaman segar dan suasana perkampungan yang tenang.",
    details: [
      "Jong Java Coffee menawarkan pengalaman berbeda dengan konsep tradisional tropis yang memadukan perabot kayu, tanaman segar, dan ruangan terbuka yang asri.",
      "Berada di tengah perkampungan, suasananya sangat tenang dan rileks — ideal untuk bekerja tanpa gangguan atau sekadar menikmati waktu sendiri.",
      "Menu andalan meliputi kopi tradisional dan modern. Tempat ini cocok bagi yang mencari alternatif kafe yang lebih tenang dan alami.",
    ],
    address: "Gg. Nanas No.4-2, Jrebeng Wetan, Kec. Kedopok, Kota Probolinggo",
    hours: "10.00 - 22.00 WIB",
    facilities: ["Wi-Fi", "Indoor", "Outdoor", "Makanan", "Parkir"],
    wifiMbps: 3,
    wifiInfo: "⬇⬆ ±3 Mbps — Lumayan untuk browsing dan chat saja. Kurang cocok untuk video call atau streaming.",
    suitableForMeetup: false,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Jong+Java+Coffee,+Gg.+Nanas+No.4-2,+Jrebeng+Wetan,+Probolinggo",
    featured: false,
  },
  {
    slug: "alibi-cafe",
    name: "ALIBI CAFE",
    area: "Mayangan",
    description:
      "Kafe di pusat kota dengan rating tinggi, kopi spesial dari biji lokal, dan suasana hangat untuk bekerja atau bersantai.",
    details: [
      "ALIBI CAFE berlokasi strategis di Jl. R.A. Kartini dengan rating 4.7 dari pengunjung. Tempat ini mengutamakan biji kopi lokal Indonesia seperti Java dan Toraja.",
      "Menu andalan meliputi Espresso racikan manual, Kopi Susu Gula Aren, dan Cold Brew yang diseduh lambat. Tersedia juga aneka kue segar.",
      "Suasana nyaman dan pelayanan ramah menjadikannya pilihan ideal untuk pertemuan bisnis santai atau sekadar menikmati waktu luang.",
    ],
    address: "Jl. R.A. Kartini No.88, Sukabumi, Kec. Mayangan, Kota Probolinggo",
    hours: "08.00 - 22.00 WIB",
    facilities: ["Wi-Fi", "Colokan", "Indoor", "Makanan", "Parkir"],
    wifiMbps: 8,
    wifiInfo: "⬇⬆ ±8 Mbps — Cukup untuk browsing dan email. Lumayan untuk kerja ringan, kurang ideal untuk video call.",
    suitableForMeetup: true,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=ALIBI+CAFE,+Jl.+R.A.+Kartini+No.88,+Probolinggo",
    featured: false,
  },
];

export function getVenueBySlug(slug: string) {
  return venues.find((venue) => venue.slug === slug);
}
