import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type EyebrowProps = {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
};

export function Eyebrow({ children, tone = "dark", className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 font-sans text-[11px] font-medium uppercase tracking-[0.18em]",
        tone === "dark" ? "text-olive" : "text-sand",
        className,
      )}
    >
      <span aria-hidden="true" className="h-px w-6 bg-current opacity-70" />
      <span>{children}</span>
    </p>
  );
}
