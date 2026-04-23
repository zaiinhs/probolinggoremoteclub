export const siteConfig = {
  name: "Probolinggo Remote Club",
  shortName: "PRC",
  domain: "probolinggoremoteclub.web.id",
  email: "zainalabidinhsc@gmail.com",
  description:
    "Komunitas non-profit dan gratis untuk pekerja remote di Probolinggo. Tempat berkumpul, coworking, networking, dan bertumbuh bersama.",
  tagline: "Remote, tetap terhubung dari Probolinggo.",
  socialLinks: {
    instagram: "https://instagram.com/probolinggoremoteclub",
    linkedin: "https://linkedin.com/company/probolinggoremoteclub",
  },
  navigation: [
    { href: "/", label: "Beranda" },
    { href: "/tentang", label: "Tentang" },
    { href: "/event", label: "Event" },
    { href: "/venue", label: "Venue" },
    { href: "/artikel", label: "Artikel" },
    { href: "/kontak", label: "Kontak" },
  ],
} as const;
