import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { workflow, workflowSection } from "@/lib/content";

export function Workflow() {
  return (
    <section
      aria-labelledby="workflow-title"
      className="bg-ivory py-20 md:py-32 lg:py-40"
    >
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionHeading
              id="workflow-title"
              eyebrow={workflowSection.eyebrow}
              title={workflowSection.heading}
            />
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-xs font-sans text-[11px] leading-[1.7] text-stone md:text-right">
              {workflowSection.note}
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-0 md:mt-16 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {workflow.map((step, index) => (
            <Reveal key={step.index} delay={index * 0.06}>
              <div className="border-l border-light-border pb-10 pl-5 md:border-l-0 md:border-t md:pt-6 md:pb-0 md:pl-0">
                <span className="font-sans text-[11px] font-medium tracking-[0.2em] text-olive">
                  {step.index}
                </span>
                <h3 className="mt-3 font-display text-[1.7rem] leading-[1.15] font-normal tracking-[-0.01em] text-charcoal">
                  {step.title}
                </h3>
                <p className="mt-3 font-sans text-sm leading-[1.7] text-stone">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
