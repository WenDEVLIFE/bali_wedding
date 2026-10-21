import type { MouseEventHandler, ReactNode } from "react";

import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "outline" | "light" | "outline-light";
type ButtonSize = "md" | "lg";

type BaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type AnchorProps = BaseProps & {
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

type ActionProps = BaseProps & {
  type?: "button" | "submit";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  "aria-busy"?: boolean;
};

type ButtonProps = AnchorProps | ActionProps;

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-charcoal text-ivory hover:bg-olive focus-visible:outline-charcoal",
  outline:
    "border border-charcoal/50 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-ivory focus-visible:outline-charcoal",
  light: "bg-ivory text-charcoal hover:bg-sand focus-visible:outline-ivory",
  "outline-light":
    "border border-ivory/50 text-ivory hover:border-ivory hover:bg-ivory hover:text-charcoal focus-visible:outline-ivory",
};

const sizes: Record<ButtonSize, string> = {
  md: "min-h-11 px-6",
  lg: "min-h-12 px-7",
};

export function Button(props: ButtonProps) {
  const { children, variant = "primary", size = "md", className } = props;

  const classes = cn(
    "inline-flex items-center justify-center gap-2.5 rounded-[2px] font-sans text-xs font-medium uppercase tracking-[0.16em] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant],
    sizes[size],
    className,
  );

  if ("href" in props) {
    return (
      <a href={props.href} onClick={props.onClick} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      aria-busy={props["aria-busy"]}
      className={classes}
    >
      {children}
    </button>
  );
}
