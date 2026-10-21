"use client";

import { useRef, useState } from "react";

import { FilmCard } from "@/components/media/FilmCard";
import { FilmModal } from "@/components/media/FilmModal";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { films, filmsSection, type Film } from "@/lib/content";

const cardLayout = [
  "md:col-span-7",
  "md:col-span-5 md:pt-16 lg:pt-24",
  "md:col-span-5",
  "md:col-span-7 md:pt-16 lg:pt-24",
];

const cardSizes = [
  "(min-width: 768px) 50vw, 100vw",
  "(min-width: 768px) 34vw, 100vw",
  "(min-width: 768px) 34vw, 100vw",
  "(min-width: 768px) 50vw, 100vw",
];

export function FeaturedFilms() {
  const [activeFilm, setActiveFilm] = useState<Film | null>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);

  const handlePlay = (film: Film, trigger: HTMLButtonElement) => {
    lastTrigger.current = trigger;
    setActiveFilm(film);
  };

  const handleClose = () => {
    setActiveFilm(null);
    window.requestAnimationFrame(() => {
      lastTrigger.current?.focus();
    });
  };

  return (
    <section
      id="films"
      aria-labelledby="films-title"
      className="scroll-mt-20 bg-ivory py-20 md:py-32 lg:py-40"
    >
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionHeading
              id="films-title"
              eyebrow={filmsSection.eyebrow}
              title={filmsSection.heading}
              description={filmsSection.copy}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="flex max-w-xs items-start gap-2.5 font-sans text-[11px] leading-[1.65] tracking-[0.02em] text-stone">
              <span
                aria-hidden="true"
                className="mt-1.5 size-1 shrink-0 rounded-full bg-olive"
              />
              {filmsSection.note}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-14 md:mt-20 md:grid-cols-12 md:gap-x-8 md:gap-y-20">
          {films.map((film, index) => (
            <Reveal
              key={film.id}
              className={cardLayout[index] ?? "md:col-span-6"}
              delay={(index % 2) * 0.08}
            >
              <FilmCard
                film={film}
                index={index}
                sizes={cardSizes[index] ?? cardSizes[0]}
                onPlay={handlePlay}
              />
            </Reveal>
          ))}
        </div>
      </Container>

      <FilmModal film={activeFilm} onClose={handleClose} />
    </section>
  );
}
