export interface Project {
  name: string;
  images: string[];
  link: string;
  technology: string[];
  description: string;
  reverse?: boolean;
  playStoreLink?: string;
  appStoreLink?: string;
  platform?: string;
  year?: string;
  role?: string;
  stats?: string[];
}

export const projects: Project[] = [
  {
    name: "Hydex",
    reverse: true,
    images: ["/gifs/hydex-1.webm", "/gifs/hydex-2.webm", "/gifs/hydex-3.webm"],
    link: "#",
    technology: ["Flutter", "Lottie"],
    description:
      "A lifestyle app connecting users to the city's most exclusive venues, sports activities, curated events, and unique adventures — all personalized to their interests",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.hyde_x.hydex&hl=en",
    appStoreLink: "https://apps.apple.com/us/app/hydex/id6751296150",
    platform: "Cross-platform",
    year: "2025",
    role: "Mobile Developer",
    stats: [
      "Offline Sync",
      "Complex Animations",
      "Deeplinks",
      "Notifications",
      "CodeMagic CI/CD",
    ],
  },
  {
    name: "AlMabarrah",
    images: ["/gifs/mabarrah.webm"],
    link: "#",
    technology: ["Flutter", "Supabase"],
    description:
      "A charity platform that lets users discover humanitarian campaigns, donate securely via electronic payments, and track the progress of each initiative in real time",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.mabarrah&hl=en",
    appStoreLink: "https://apps.apple.com/us/app/al-mabarrah/id6762282059",
    platform: "Cross-platform",
    year: "2026",
    role: "Mobile Developer",
    stats: ["Payment", "Realtime", "Notifications"],
  },
  {
    name: "Mostaqem",
    reverse: true,
    images: ["/gifs/mostaqem-1.webm"],
    link: "#",
    technology: ["Flutter"],
    platform: "Desktop",
    year: "2024",
    description:
      "An Islamic media app offering Quran and podcasts — completely free, with no ads or subscriptions",
    stats: [
      "Native OS Integration",
      "Lyrics",
      "Offline",
      "Github Actions (CI/CD)",
    ],
  },
  // {
  //   name: "Mostaqem",
  //   images: ["https://placehold.co/800x600"],
  //   link: "#",
  //   technology: ["Jetpack Compose"],
  //   platform: "Android",
  //   year: "2024",
  //   description:
  //     "An Islamic media app offering Quran and podcasts — completely free, with no ads or subscriptions",
  //   playStoreLink:
  //     "https://play.google.com/store/apps/details?id=com.mostaqem&hl=en",
  //   stats: ["Offline", "History", "Favorites"],
  // },
];