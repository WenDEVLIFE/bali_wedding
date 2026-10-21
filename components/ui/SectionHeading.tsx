import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

import { Eyebrow } from "./Eyebrow";

type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  tone = "dark",
  align = "left",
  className,
  titleClassName,
  descriptionClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === "center" && "mx-auto max-w-2xl text-center",
        className,
      )}
    >
      {eyebrow ? (
        <Eyebrow tone={tone} className={cn(align === "center" && "justify-center")}>
          {eyebrow}
        </Eyebrow>
      ) : null}
      <h2
        id={id}
        className={cn(
          "mt-5 font-display text-[clamp(2.125rem,4.2vw,4rem)] leading-[1.04] font-normal tracking-[-0.02em]",
          tone === "light" ? "text-ivory" : "text-charcoal",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 max-w-xl text-[15px] leading-[1.7] sm:text-base",
            tone === "light" ? "text-ivory/65" : "text-stone",
            align === "center" && "mx-auto",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
