import { cn } from "@/lib/cn";

type WordmarkProps = {
  className?: string;
  onClick?: () => void;
};

export function Wordmark({ className, onClick }: WordmarkProps) {
  return (
    <a
      href="#top"
      onClick={onClick}
      className={cn(
        "inline-flex w-fit flex-col py-1 leading-none transition-opacity duration-300 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current",
        className,
      )}
    >
      <span className="font-display text-[26px] leading-none font-medium tracking-[0.2em]">
        SAGARA
      </span>{" "}
      <span className="mt-1.5 font-sans text-[8px] leading-none font-medium uppercase tracking-[0.32em] opacity-70">
        Bali Wedding Films
      </span>
      <span className="sr-only"> — back to top</span>
    </a>
  );
}
