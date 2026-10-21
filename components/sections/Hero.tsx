import Image from "next/image";

import { HeroVideo } from "@/components/media/HeroVideo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { heroContent } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="hero-shell grain relative isolate flex overflow-hidden bg-soft-black text-ivory"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={heroContent.image}
          alt={heroContent.imageAlt}
          fill
          preload
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <HeroVideo src={heroContent.video} poster={heroContent.image} />

      <div
        aria-hidden="true"
        className="absolute inset-0 z-[2] bg-linear-to-r from-soft-black/85 via-soft-black/45 to-soft-black/20"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[2] bg-linear-to-t from-soft-black/90 via-soft-black/20 to-soft-black/30"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 z-[2] h-40 bg-linear-to-b from-soft-black/55 to-transparent"
      />

      <Container className="relative z-10 flex w-full flex-col justify-end pt-32 pb-10 md:pb-14">
        <div className="max-w-4xl">
          <Eyebrow tone="light">{heroContent.eyebrow}</Eyebrow>

          <h1
            id="hero-title"
            className="mt-7 font-display text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.96] font-normal tracking-[-0.03em] text-ivory"
          >
            {heroContent.titleLines[0]}
            <br />
            {heroContent.titleLines[1]}
          </h1>

          <p className="mt-7 max-w-lg font-sans text-base leading-[1.7] text-ivory/80 sm:text-lg">
            {heroContent.copy}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="#films" variant="light" size="lg">
              {heroContent.primaryCta}
            </Button>
            <Button href="#contact" variant="outline-light" size="lg">
              {heroContent.secondaryCta}
            </Button>
          </div>
        </div>

        <div className="mt-14 flex items-center border-t border-ivory/20 pt-6">
          <p className="font-sans text-[10px] font-medium tracking-[0.24em] text-ivory/65">
            {heroContent.metadata}
          </p>
        </div>
      </Container>

      <a
        href="#films"
        aria-label="Scroll to films"
        className="absolute bottom-32 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 font-sans text-[9px] font-medium tracking-[0.3em] text-ivory/65 transition-colors duration-200 hover:text-ivory focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ivory lg:flex"
      >
        <span className="h-14 w-px bg-ivory/30" aria-hidden="true" />
        <span>{heroContent.scrollLabel}</span>
      </a>
    </section>
  );
}
