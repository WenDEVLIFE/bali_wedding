import Image from "next/image";

import { cn } from "@/lib/cn";

type WordmarkProps = {
  className?: string;
  onClick?: () => void;
  variant?: "mark" | "full";
  tone?: "light" | "dark";
};

const assets = {
  mark: {
    src: "/images/logo-mark.png",
    width: 323,
    height: 279,
    alt: "Bali Wedding Films",
  },
  full: {
    src: "/images/logo-full.png",
    width: 1146,
    height: 461,
    alt: "Bali Wedding Films — Cinematic Wedding Videography & Editing",
  },
} as const;

export function Wordmark({
  className,
  onClick,
  variant = "mark",
  tone = "dark",
}: WordmarkProps) {
  const asset = assets[variant];

  return (
    <a
      href="#top"
      onClick={onClick}
      className={cn(
        "inline-flex w-fit items-center transition-opacity duration-300 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current",
        className,
      )}
    >
      <Image
        src={asset.src}
        alt={variant === "full" ? asset.alt : ""}
        width={asset.width}
        height={asset.height}
        loading={variant === "mark" ? "eager" : "lazy"}
        className={cn(
          "w-auto",
          variant === "mark" ? "h-10 sm:h-11" : "h-auto w-[210px] sm:w-[240px]",
          tone === "light" && "brightness-0 invert",
        )}
      />
      {variant === "mark" ? (
        <span
          className={cn(
            "ml-3 font-display text-[11px] leading-[1.2] tracking-[0.18em] sm:text-[12px]",
            tone === "light" ? "text-ivory" : "text-charcoal",
          )}
        >
          BALI
          <br />
          WEDDING FILMS
        </span>
      ) : null}
      <span className="sr-only"> — back to top</span>
    </a>
  );
}
