import { MapPin } from "lucide-react";
import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  aboutSection,
  approachPoints,
  detailImages,
} from "@/lib/content";

const detailFrames = [
  "relative aspect-[9/11] overflow-hidden border border-light-border bg-sand/20",
  "relative aspect-[4/5] overflow-hidden border border-light-border bg-sand/20",
  "relative aspect-[3/4] overflow-hidden border border-light-border bg-sand/20",
];

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="scroll-mt-20 bg-warm-white py-20 md:py-32 lg:py-40"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="relative p-3 sm:p-4">
              <div
                aria-hidden="true"
                className="absolute inset-0 border border-sand/80"
              />
              <div className="relative aspect-[4/3] overflow-hidden border border-light-border bg-sand/20">
                <Image
                  src={aboutSection.image}
                  alt={aboutSection.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <p className="mt-4 font-sans text-[10px] font-medium tracking-[0.2em] text-stone uppercase">
              {aboutSection.caption}
            </p>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7 lg:pt-6">
            <Reveal>
              <SectionHeading
                id="about-title"
                eyebrow={aboutSection.eyebrow}
                title={aboutSection.heading}
                titleClassName="text-[clamp(2.25rem,4.6vw,4.5rem)] leading-[1.02]"
              />
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-8 space-y-5">
                <p className="max-w-xl font-sans text-lg leading-[1.7] text-charcoal/85">
                  {aboutSection.paragraphs[0]}
                </p>
                <p className="max-w-xl font-sans text-[15px] leading-[1.75] text-stone">
                  {aboutSection.paragraphs[1]}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <blockquote className="mt-10 border-l border-olive pl-6 font-display text-[clamp(1.5rem,2.5vw,2.25rem)] leading-[1.25] font-normal tracking-[-0.015em] text-charcoal">
                {aboutSection.quote}
              </blockquote>
            </Reveal>

            <Reveal delay={0.16}>
              <ul className="mt-10 border-y border-light-border">
                {approachPoints.map((point) => (
                  <li
                    key={point.title}
                    className="grid gap-2 border-b border-light-border py-5 last:border-b-0 sm:grid-cols-[140px_1fr] sm:gap-6"
                  >
                    <h3 className="font-display text-[1.35rem] leading-[1.2] font-normal text-charcoal">
                      {point.title}
                    </h3>
                    <p className="font-sans text-sm leading-[1.7] text-stone">
                      {point.description}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-8 flex items-start gap-2.5 font-sans text-[11px] font-medium tracking-[0.14em] text-olive uppercase">
                <MapPin
                  aria-hidden="true"
                  className="mt-px size-4 shrink-0"
                  strokeWidth={1.5}
                />
                {aboutSection.locationLine}
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-4 md:mt-24 md:gap-6 lg:mt-32">
          {detailImages.map((image, index) => (
            <Reveal
              key={image.src}
              delay={index * 0.08}
              className={
                index === 1
                  ? "mt-8 md:mt-16"
                  : index === 2
                    ? "mt-4 md:mt-8"
                    : undefined
              }
            >
              <figure>
                <div className={detailFrames[index]}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 768px) 30vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 font-sans text-[10px] font-medium tracking-[0.16em] text-stone uppercase">
                  {image.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
