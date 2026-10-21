"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

import { Wordmark } from "./Wordmark";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const hasOpened = useRef(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);

    update();
    window.addEventListener("scroll", update, { passive: true });

    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const panel = panelRef.current;
      const focusables = [
        menuButtonRef.current,
        ...(panel
          ? Array.from(
              panel.querySelectorAll<HTMLElement>(
                'a[href], button:not([disabled])',
              ),
            )
          : []),
      ].filter((element): element is HTMLElement => element !== null);

      if (focusables.length === 0) {
        return;
      }

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;
      const index = focusables.indexOf(active as HTMLElement);

      if (index === -1) {
        event.preventDefault();
        first.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      } else if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      }
    };

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const desktopQuery = window.matchMedia("(min-width: 768px)");
    const handleDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setMenuOpen(false);
      }
    };

    desktopQuery.addEventListener("change", handleDesktop);

    return () => desktopQuery.removeEventListener("change", handleDesktop);
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      hasOpened.current = true;
      const timer = window.setTimeout(() => {
        panelRef.current?.querySelector<HTMLElement>("a[href]")?.focus();
      }, 0);

      return () => window.clearTimeout(timer);
    }

    if (hasOpened.current) {
      menuButtonRef.current?.focus();
    }
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
          solid
            ? "border-light-border bg-ivory/90 text-charcoal backdrop-blur-md"
            : "border-transparent bg-transparent text-ivory",
        )}
      >
        <Container className="flex h-20 items-center justify-between gap-6">
          <Wordmark
            tone={solid ? "dark" : "light"}
            onClick={() => setMenuOpen(false)}
          />

          <div className="hidden items-center gap-8 md:flex">
            <nav aria-label="Primary">
              <ul className="flex items-center gap-8">
                {site.nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="relative py-3 font-sans text-[13px] font-medium tracking-[0.03em] after:absolute after:inset-x-0 after:bottom-2 after:h-px after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current focus-visible:after:scale-x-100"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <Button
              href={site.cta.href}
              variant={solid ? "primary" : "outline-light"}
              size="md"
            >
              {site.cta.label}
            </Button>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="inline-flex size-11 items-center justify-center border border-current/25 text-current transition-colors duration-200 hover:bg-current/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current md:hidden"
          >
            {menuOpen ? (
              <X aria-hidden="true" className="size-5" strokeWidth={1.5} />
            ) : (
              <Menu aria-hidden="true" className="size-5" strokeWidth={1.5} />
            )}
          </button>
        </Container>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            ref={panelRef}
            id="mobile-menu"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-40 overflow-y-auto bg-ivory text-charcoal md:hidden"
          >
            <div className="mx-auto flex min-h-svh w-full max-w-[1200px] flex-col px-6 pt-28 pb-10 sm:px-8">
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-stone">
                {site.location}
              </p>

              <nav aria-label="Mobile" className="mt-6">
                <ul className="border-t border-light-border">
                  {site.nav.map((item, index) => (
                    <li key={item.href} className="border-b border-light-border">
                      <a
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-baseline justify-between gap-4 py-5 font-display text-[clamp(2rem,9vw,3rem)] leading-none tracking-[-0.02em] transition-colors duration-200 hover:text-olive focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-olive"
                      >
                        <span>{item.label}</span>
                        <span className="font-sans text-[10px] font-medium tracking-[0.2em] text-stone">
                          0{index + 1}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-auto pt-10">
                <Button
                  href={site.cta.href}
                  variant="primary"
                  size="lg"
                  className="w-full"
                  onClick={() => setMenuOpen(false)}
                >
                  {site.cta.label}
                </Button>
                <p className="mt-6 max-w-xs font-sans text-[11px] leading-[1.6] text-stone">
                  Demo concept — brand, films, services and copy are placeholders
                  pending client approval.
                </p>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
