const vercelUrl =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000")
).replace(/\/+$/, "");

export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type SiteConfig = {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  nav: NavItem[];
  cta: NavItem;
  location: string;
  locationLine: string;
  email: string | null;
  socials: SocialLink[];
  url: string;
};

export const site: SiteConfig = {
  name: "Bali Wedding Films",
  shortName: "Bali Wedding Films",
  tagline: "Cinematic Wedding Videography & Editing",
  description:
    "Cinematic wedding films for destination celebrations in Bali, shaped by emotion, light, and the moments that matter most.",
  nav: [
    { label: "Films", href: "#films" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  cta: { label: "Inquire", href: "#contact" },
  location: "Bali, Indonesia",
  locationLine: "Based in Bali · Available for destination celebrations",
  email: null,
  socials: [],
  url: SITE_URL,
};
