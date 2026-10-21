import Image from "next/image";
import { Play } from "lucide-react";

import type { Film } from "@/lib/content";

type FilmCardProps = {
  film: Film;
  index: number;
  sizes: string;
  onPlay: (film: Film, trigger: HTMLButtonElement) => void;
};

export function FilmCard({ film, index, sizes, onPlay }: FilmCardProps) {
  return (
    <article className="group relative">
      <button
        type="button"
        onClick={(event) => onPlay(film, event.currentTarget)}
        aria-label={`Play ${film.title} — sample film`}
        className="absolute inset-0 z-20 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-olive"
      />

      <div className="relative aspect-[8/5] overflow-hidden border border-light-border bg-sand/25">
        <Image
          src={film.image}
          alt={film.imageAlt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03] motion-reduce:transform-none"
        />
        <span className="absolute top-4 left-4 bg-soft-black/55 px-2 py-1 font-sans text-[10px] font-medium tracking-[0.24em] text-ivory/85">
          {String(index + 1).padStart(2, "0")} / 04
        </span>
        <span className="absolute right-5 bottom-5 grid size-14 place-items-center rounded-full border border-ivory/70 bg-soft-black/40 text-ivory transition-colors duration-300 group-hover:bg-ivory group-hover:text-charcoal md:size-16">
          <Play aria-hidden="true" className="ml-0.5 size-5" strokeWidth={1.5} />
        </span>
      </div>

      <div className="mt-5 flex items-start justify-between gap-6">
        <div>
          <h3 className="font-display text-[1.65rem] leading-[1.1] font-normal tracking-[-0.015em] text-charcoal sm:text-3xl lg:text-[2rem]">
            {film.title}
          </h3>
          <p className="mt-2.5 font-sans text-[11px] font-medium tracking-[0.14em] text-stone uppercase">
            {film.location} · {film.label}
          </p>
        </div>
      </div>
      <p className="mt-3 max-w-md font-sans text-sm leading-[1.65] text-stone">
        {film.description}
      </p>
    </article>
  );
}
