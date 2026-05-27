export const siteConfig = {
  name: "Claire Goce Audio",
  tagline: "Audio Engineering Portfolio",
  description:
    "Audio engineering portfolio of Claire Anne Maxine T. Goce, featuring mixing, remixing, medley editing, beat matching, dubbing, dialogue editing, and sound-focused multimedia production work.",
  url: process.env.NEXT_PUBLIC_URL || "https://claire-goce-audio.vercel.app",
  showNavbar: true,
  navLinks: [
    { title: "Work", link: "/#work" },
    { title: "Services", link: "/#services" },
    { title: "About", link: "/#about" },
    { title: "Contact", link: "/#contact" },
  ] as { title: string; link: string }[],
  keywords: [
    "Claire Anne Maxine Goce",
    "audio engineering portfolio",
    "mixing",
    "sound design",
    "dubbing",
    "dialogue editing",
    "multimedia arts",
    "music production",
  ],
  author: "Claire Anne Maxine T. Goce",
  company: "Claire Goce Audio",
  email: "goceclaireannemaxine@gmail.com",
  location: "Manila, Philippines",
  linkedin: "https://www.linkedin.com/in/claire-anne-maxine-goce/",
  instagram: "https://www.instagram.com/",
  twitter: "",
  ogImage: "",
  ogBackground: "#070716",
  ogAccent1: "#8b5cf6",
  ogAccent2: "#06b6d4",
};

export type SiteConfig = typeof siteConfig;
