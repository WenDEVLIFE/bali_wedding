export type Film = {
  id: string;
  title: string;
  location: string;
  label: string;
  description: string;
  image: string;
  poster: string;
  video: string;
  imageAlt: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
};

export type WorkflowStep = {
  index: string;
  title: string;
  description: string;
};

export type ApproachPoint = {
  title: string;
  description: string;
};

export type DetailImage = {
  src: string;
  alt: string;
  caption: string;
};

export const heroContent = {
  eyebrow: "DESTINATION WEDDINGS · BALI",
  titleLines: ["Your Story,", "Beautifully Told."],
  copy: "Cinematic wedding films shaped by emotion, light, and the moments that matter most.",
  primaryCta: "Watch Our Films",
  secondaryCta: "Inquire Now",
  metadata: "BALI · INDONESIA — FILMS FOR DESTINATION WEDDINGS",
  scrollLabel: "SCROLL",
  image: "/images/hero.webp",
  imageAlt: "Sunset over the sea at Tanah Lot in Bali",
  video: "/films/hero-loop.mp4",
} as const;

export const filmsSection = {
  eyebrow: "THE COLLECTION",
  heading: "Stories Worth Remembering",
  copy: "Every celebration holds its own rhythm, emotion, and unforgettable details.",
  note: "Sample collection — demo titles and footage, not verified client projects.",
} as const;

export const films: Film[] = [
  {
    id: "above-the-ocean",
    title: "A Wedding Above the Ocean",
    location: "Uluwatu, Bali",
    label: "Sample highlight film",
    description: "Cliffside vows, salt air, and a horizon that kept opening.",
    image: "/images/film-1.webp",
    poster: "/images/poster-1.webp",
    video: "/films/film-1.mp4",
    imageAlt: "Couple walking by the sea with long veils lifted by the wind",
  },
  {
    id: "golden-hour",
    title: "Golden Hour in Uluwatu",
    location: "Uluwatu, Bali",
    label: "Sample highlight film",
    description: "The last light, held a little longer.",
    image: "/images/film-2.webp",
    poster: "/images/poster-2.webp",
    video: "/films/film-2.mp4",
    imageAlt: "Couple standing together in warm golden-hour light",
  },
  {
    id: "garden-celebration",
    title: "An Intimate Garden Celebration",
    location: "Canggu, Bali",
    label: "Sample short film",
    description: "A table of friends, warm light, and a day that moved slowly.",
    image: "/images/film-3.webp",
    poster: "/images/poster-3.webp",
    video: "/films/film-3.mp4",
    imageAlt: "Couple surrounded by bridesmaids in a lush tropical garden",
  },
  {
    id: "temple-by-the-water",
    title: "The Temple by the Water",
    location: "Bedugul, Bali",
    label: "Sample short film",
    description: "Still water, quiet ritual, and the calm between moments.",
    image: "/images/film-4.webp",
    poster: "/images/poster-4.webp",
    video: "/films/film-4.mp4",
    imageAlt: "Balinese temple standing on still water at dusk",
  },
];

export const servicesSection = {
  eyebrow: "SERVICES",
  heading: "Films made to be felt",
  intro:
    "A small, considered set of ways to preserve the day. Every engagement is shaped around the couple, the place, and the story worth keeping.",
  note: "Illustrative services — to be confirmed with the studio.",
} as const;

export const services: Service[] = [
  {
    id: "highlight",
    title: "Wedding Highlight Films",
    description:
      "A cinematic short film that distills your day into its most honest, most cinematic moments.",
  },
  {
    id: "feature",
    title: "Full-Length Wedding Films",
    description:
      "The complete celebration, from quiet preparations to the final dance, edited with care.",
  },
  {
    id: "reels",
    title: "Short-Form Wedding Reels",
    description:
      "Vertical edits made for sharing — paced for the scroll, but made to linger.",
  },
  {
    id: "post",
    title: "Colour Grading & Post-Production",
    description:
      "Cinematic colour, sound and finishing for footage filmed by your team or ours.",
  },
  {
    id: "custom",
    title: "Custom Editing Packages",
    description:
      "Already have footage? Send it to us and we will shape it into a film that feels like you.",
  },
];

export const workflowSection = {
  eyebrow: "THE PROCESS",
  heading: "From first conversation to final film",
  note: "Illustrative process — adapted to the studio's confirmed workflow.",
} as const;

export const workflow: WorkflowStep[] = [
  {
    index: "01",
    title: "Connect",
    description:
      "We talk about your day, your people, and the feeling you want to remember.",
  },
  {
    index: "02",
    title: "Prepare",
    description:
      "We agree on the film, the schedule, and the creative direction before anything is shot or cut.",
  },
  {
    index: "03",
    title: "Create",
    description:
      "Filming or footage review, then editing, colour and sound, with room for your notes.",
  },
  {
    index: "04",
    title: "Deliver",
    description:
      "You receive the finished film in the agreed formats, ready to share and keep.",
  },
];

export const aboutSection = {
  eyebrow: "THE APPROACH",
  heading: "Some moments deserve to be felt again.",
  paragraphs: [
    "We make wedding films for couples who want to remember how the day felt — not just how it looked.",
    "The work is quiet and observational: the glance before the ceremony, the laughter between photographs, the light as it changes. We shape those fragments into something that still feels alive years later.",
  ],
  quote: "A good film does not list the day. It lets you feel it again.",
  locationLine: "Based in Bali · Available for destination celebrations",
  image: "/images/about.webp",
  imageAlt: "Black-and-white portrait of a couple standing close together",
  caption: "Sample imagery",
} as const;

export const approachPoints: ApproachPoint[] = [
  {
    title: "Story first",
    description: "Every edit begins with the feeling of the day, not a shot list.",
  },
  {
    title: "Light and atmosphere",
    description: "We follow the light as it moves, letting atmosphere carry the frame.",
  },
  {
    title: "The small details",
    description: "The glance, the ring, the hand held a little tighter — details that hold the story.",
  },
];

export const detailImages: DetailImage[] = [
  {
    src: "/images/detail-1.webp",
    alt: "Two wedding rings resting on soft fabric",
    caption: "The rings",
  },
  {
    src: "/images/detail-2.webp",
    alt: "Hands wearing wedding rings held close together",
    caption: "Held close",
  },
  {
    src: "/images/detail-3.webp",
    alt: "A bridal bouquet of pale flowers and greenery",
    caption: "The bouquet",
  },
];

export const contactSection = {
  eyebrow: "INQUIRY",
  heading: "Tell us about your day.",
  copy: "Share a few details and we will come back with availability and a tailored approach.",
  note: "Demo form — no message is delivered until an email integration is connected.",
  submitLabel: "Send Inquiry",
  pendingLabel: "Sending…",
  successHeading: "Inquiry prepared — demo only",
  successCopy:
    "No message was sent and no data was stored outside this browser. This experience is ready for the studio's email integration once it is connected.",
  resetLabel: "Send another inquiry",
} as const;

export const formServiceOptions = [
  ...services.map((service) => service.title),
  "Not sure yet",
];
