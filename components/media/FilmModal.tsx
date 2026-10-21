"use client";

import { motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import type { Film } from "@/lib/content";

type FilmModalProps = {
  film: Film | null;
  onClose: () => void;
};

export function FilmModal({ film, onClose }: FilmModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();
  const [failedVideoId, setFailedVideoId] = useState<string | null>(null);
  const videoError = film !== null && failedVideoId === film.id;

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (film && !dialog.open) {
      dialog.showModal();
    } else if (!film && dialog.open) {
      dialog.close();
    }
  }, [film]);

  useEffect(() => {
    if (!film) {
      return;
    }

    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.currentTime = 0;
    void video.play().catch(() => {
      // Autoplay may be blocked; native controls remain available.
    });
  }, [film]);

  useEffect(() => {
    if (!film) {
      return;
    }

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [film]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="film-modal-title"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={handleBackdropClick}
      className="film-dialog relative m-auto max-h-[calc(100svh-2rem)] w-[min(1024px,calc(100vw-2rem))] overflow-y-auto overscroll-contain border border-ivory/15 bg-soft-black p-0 text-ivory"
    >
      {film ? (
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close film"
            className="absolute top-3 right-3 z-30 grid size-11 place-items-center border border-ivory/30 bg-soft-black/70 text-ivory transition-colors duration-200 hover:bg-ivory hover:text-charcoal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ivory"
          >
            <X aria-hidden="true" className="size-5" strokeWidth={1.5} />
          </button>

          <div className="relative aspect-video w-full bg-black">
            <video
              key={film.id}
              ref={videoRef}
              src={film.video}
              poster={film.poster}
              controls
              playsInline
              preload="metadata"
              onLoadStart={() => setFailedVideoId(null)}
              onError={() => setFailedVideoId(film.id)}
              className="absolute inset-0 h-full w-full"
            >
              Your browser does not support video playback.
            </video>

            {videoError ? (
              <div className="absolute inset-0 z-10 bg-soft-black">
                <Image
                  src={film.poster}
                  alt={`Poster frame for ${film.title}`}
                  fill
                  sizes="(min-width: 1024px) 1024px, 100vw"
                  className="object-cover opacity-55"
                />
                <div className="absolute inset-0 grid place-items-center p-6">
                  <p
                    role="status"
                    className="max-w-sm border border-ivory/20 bg-soft-black/85 px-5 py-4 text-center font-sans text-sm leading-relaxed text-ivory"
                  >
                    This sample video could not be loaded. The poster frame is
                    shown instead.
                  </p>
                </div>
              </div>
            ) : null}
          </div>

          <div className="border-t border-ivory/10 p-6 md:p-8">
            <p className="font-sans text-[11px] font-medium tracking-[0.14em] text-ivory/50 uppercase">
              {film.location} · {film.label}
            </p>
            <h3
              id="film-modal-title"
              className="mt-3 font-display text-3xl leading-[1.1] font-normal tracking-[-0.015em] md:text-4xl"
            >
              {film.title}
            </h3>
            <p className="mt-3 max-w-xl font-sans text-sm leading-[1.7] text-ivory/65">
              {film.description}
            </p>
          </div>
        </motion.div>
      ) : null}
    </dialog>
  );
}
