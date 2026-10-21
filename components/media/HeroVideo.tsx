"use client";

import { useEffect, useState } from "react";

type HeroVideoProps = {
  src: string;
  poster: string;
};

const DESKTOP_MOTION_QUERY =
  "(min-width: 768px) and (prefers-reduced-motion: no-preference)";

export function HeroVideo({ src, poster }: HeroVideoProps) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const query = window.matchMedia(DESKTOP_MOTION_QUERY);
    const update = () => setEnabled(query.matches);

    update();
    query.addEventListener("change", update);

    return () => query.removeEventListener("change", update);
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <video
      className="absolute inset-0 z-[1] h-full w-full object-cover"
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
    />
  );
}
