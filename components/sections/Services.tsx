import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services, servicesSection } from "@/lib/content";

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="grain relative scroll-mt-20 bg-soft-black py-20 text-ivory md:py-32 lg:py-40"
    >
      <Container className="relative z-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <SectionHeading
              id="services-title"
              eyebrow={servicesSection.eyebrow}
              title={servicesSection.heading}
              description={servicesSection.intro}
              tone="light"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-sm border-l border-ivory/15 pl-4 font-sans text-[11px] leading-[1.7] text-ivory/60">
              {servicesSection.note}
            </p>
          </Reveal>
        </div>

        <div className="border-t border-ivory/15 lg:col-span-7">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.05}>
              <a
                href="#contact"
                className="group relative block border-b border-ivory/15 py-7 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ivory"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px w-0 bg-olive transition-[width] duration-500 group-hover:w-full"
                />
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="flex items-baseline gap-4">
                      <span className="font-sans text-[10px] font-medium tracking-[0.2em] text-ivory/50">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-2xl leading-[1.15] font-normal tracking-[-0.01em] transition-colors duration-300 group-hover:text-sand sm:text-[1.75rem]">
                        {service.title}
                      </h3>
                    </div>
                    <p className="mt-3 max-w-lg font-sans text-sm leading-[1.7] text-ivory/55 sm:pl-9">
                      {service.description}
                    </p>
                  </div>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="mt-1 size-5 shrink-0 text-ivory/50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-sand"
                    strokeWidth={1.5}
                  />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
