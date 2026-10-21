import { ArrowUp } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

import { Wordmark } from "./Wordmark";

export function Footer() {
  return (
    <footer className="grain relative overflow-hidden bg-soft-black text-ivory">
      <Container className="relative z-10 pt-16 pb-10 md:pt-20">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr] md:gap-16">
          <div>
            <Wordmark variant="full" tone="light" />
            <p className="mt-7 max-w-sm font-sans text-sm leading-[1.7] text-ivory/60">
              Cinematic wedding films for destination celebrations in Bali,
              shaped by emotion, light, and the moments that matter most.
            </p>
            <p className="mt-8 max-w-md border-l border-sand/40 pl-4 font-sans text-[11px] leading-[1.7] text-ivory/60">
              Demo concept — brand, films, services and copy are placeholders
              pending client approval.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <nav aria-label="Footer">
              <ul>
                {site.nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="inline-flex min-h-11 items-center font-sans text-[13px] tracking-[0.03em] text-ivory/65 transition-colors duration-200 hover:text-ivory focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ivory"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-ivory/55">
                Studio
              </p>
              <p className="mt-4 font-sans text-[13px] leading-[1.7] text-ivory/65">
                {site.location}
              </p>
              <p className="mt-1 font-sans text-[13px] leading-[1.7] text-ivory/60">
                Available for destination celebrations
              </p>
              <a
                href="#top"
                className="mt-8 inline-flex min-h-11 items-center gap-2 font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-ivory/65 transition-colors duration-200 hover:text-ivory focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ivory"
              >
                <ArrowUp aria-hidden="true" className="size-4" strokeWidth={1.5} />
                Back to top
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-ivory/10 pt-6">
          <div className="flex flex-col gap-3 font-sans text-[11px] tracking-[0.04em] text-ivory/55 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Bali Wedding Films</p>
            <p>{site.tagline} · {site.location}</p>
          </div>
        </div>
      </Container>

      <div aria-hidden="true" className="relative z-10 overflow-hidden">
        <p className="translate-y-[0.12em] text-center font-display text-[clamp(4rem,17vw,15rem)] leading-none font-medium tracking-[0.2em] whitespace-nowrap text-ivory/[0.04] select-none">
          BALI
        </p>
      </div>
    </footer>
  );
}
