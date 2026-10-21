"use client";

import {
  AlertCircle,
  Check,
  Info,
  Loader2,
  MapPin,
  Send,
} from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import { contactSection, formServiceOptions } from "@/lib/content";
import {
  firstInvalidField,
  validateInquiry,
  type InquiryErrors,
  type InquiryField,
  type InquiryValues,
} from "@/lib/validation";

const EMPTY_VALUES: InquiryValues = {
  name: "",
  email: "",
  service: "",
  eventDate: "",
  details: "",
};

type FormStatus = "idle" | "submitting" | "success";

function todayInputValue(): string {
  const today = new Date();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${today.getFullYear()}-${month}-${day}`;
}

function inputClasses(invalid: boolean): string {
  return cn(
    "min-h-12 w-full border-0 border-b bg-transparent py-2 font-sans text-[15px] text-charcoal transition-colors duration-200 placeholder:text-stone focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-olive",
    invalid
      ? "border-clay focus:border-clay"
      : "border-charcoal/50 focus:border-olive",
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) {
    return null;
  }

  return (
    <p
      id={id}
      className="flex items-start gap-1.5 font-sans text-[13px] leading-[1.5] text-clay"
    >
      <AlertCircle
        aria-hidden="true"
        className="mt-0.5 size-3.5 shrink-0"
        strokeWidth={1.75}
      />
      {message}
    </p>
  );
}

export function Contact() {
  const [values, setValues] = useState<InquiryValues>(EMPTY_VALUES);
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [showSummary, setShowSummary] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const setDateInputRef = useCallback((node: HTMLInputElement | null) => {
    if (node) {
      node.min = todayInputValue();
    }
  }, []);

  useEffect(() => {
    if (status === "success") {
      successRef.current?.focus();
    }
  }, [status]);

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const field = event.target.name as InquiryField;
    const value = event.target.value;

    setValues((current) => ({ ...current, [field]: value }));
    setShowSummary(false);
    setErrors((current) => {
      if (!current[field]) {
        return current;
      }

      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (status === "submitting") {
      return;
    }

    const result = validateInquiry(values, { today: new Date() });
    setErrors(result.errors);
    setShowSummary(!result.valid);

    if (!result.valid) {
      const field = firstInvalidField(result.errors);

      if (field) {
        formRef.current
          ?.querySelector<HTMLElement>(`[name="${field}"]`)
          ?.focus();
      }

      return;
    }

    setStatus("submitting");
    await new Promise<void>((resolve) => {
      window.setTimeout(resolve, 900);
    });
    setStatus("success");
  };

  const handleReset = () => {
    setValues({ ...EMPTY_VALUES });
    setErrors({});
    setShowSummary(false);
    setStatus("idle");
    window.setTimeout(() => {
      formRef.current?.querySelector<HTMLElement>('[name="name"]')?.focus();
    }, 0);
  };

  const submitting = status === "submitting";
  const hasErrors = Object.keys(errors).length > 0;

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="grain relative scroll-mt-20 bg-charcoal py-20 text-ivory md:py-32 lg:py-40"
    >
      <Container className="relative z-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <SectionHeading
              id="contact-title"
              eyebrow={contactSection.eyebrow}
              title={contactSection.heading}
              description={contactSection.copy}
              tone="light"
              titleClassName="text-[clamp(2.5rem,4.8vw,4.75rem)]"
            />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-9 flex flex-col gap-5">
              <p className="flex items-start gap-2.5 font-sans text-[11px] font-medium tracking-[0.14em] text-ivory/55 uppercase">
                <MapPin
                  aria-hidden="true"
                  className="mt-px size-4 shrink-0"
                  strokeWidth={1.5}
                />
                Bali · Indonesia
              </p>
              <p className="inline-flex w-fit items-center gap-2 border border-ivory/20 px-3 py-1.5 font-sans text-[10px] font-medium tracking-[0.2em] text-ivory/55 uppercase">
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-sand"
                />
                Demo concept
              </p>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <Reveal delay={0.12} className="h-full">
            <div className="h-full border border-light-border bg-warm-white p-6 text-charcoal sm:p-8 lg:p-10">
              <p className="flex items-start gap-2.5 border border-sand/60 bg-ivory/70 px-4 py-3 font-sans text-[11px] leading-[1.6] text-charcoal/70">
                <Info
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-olive"
                  strokeWidth={1.5}
                />
                {contactSection.note}
              </p>

              {status === "success" ? (
                <div
                  ref={successRef}
                  role="status"
                  aria-live="polite"
                  tabIndex={-1}
                  className="mt-8 focus:outline-none"
                >
                  <span className="grid size-12 place-items-center rounded-full border border-olive/40 text-olive">
                    <Check
                      aria-hidden="true"
                      className="size-5"
                      strokeWidth={1.5}
                    />
                  </span>
                  <h3 className="mt-6 font-display text-[2rem] leading-[1.1] font-normal tracking-[-0.015em] text-charcoal">
                    {contactSection.successHeading}
                  </h3>
                  <p className="mt-4 max-w-md font-sans text-sm leading-[1.75] text-stone">
                    {contactSection.successCopy}
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    size="md"
                    onClick={handleReset}
                    className="mt-8"
                  >
                    {contactSection.resetLabel}
                  </Button>
                </div>
              ) : (
                <form
                  ref={formRef}
                  noValidate
                  aria-busy={submitting}
                  onSubmit={handleSubmit}
                  className="mt-8"
                >
                  {showSummary && hasErrors ? (
                    <p
                      role="alert"
                      className="mb-6 flex items-start gap-2 border-l-2 border-clay bg-clay/5 px-4 py-3 font-sans text-[13px] leading-[1.55] text-clay"
                    >
                      <AlertCircle
                        aria-hidden="true"
                        className="mt-0.5 size-4 shrink-0"
                        strokeWidth={1.75}
                      />
                      Please check the highlighted fields and try again.
                    </p>
                  ) : null}

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="inquiry-name"
                        className="block font-sans text-[13px] font-medium text-charcoal"
                      >
                        Full name
                        <span aria-hidden="true" className="ml-1 text-olive">
                          *
                        </span>
                      </label>
                      <input
                        id="inquiry-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        value={values.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={
                          errors.name ? "inquiry-name-error" : undefined
                        }
                        className={inputClasses(Boolean(errors.name))}
                      />
                      <FieldError
                        id="inquiry-name-error"
                        message={errors.name}
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="inquiry-email"
                        className="block font-sans text-[13px] font-medium text-charcoal"
                      >
                        Email
                        <span aria-hidden="true" className="ml-1 text-olive">
                          *
                        </span>
                      </label>
                      <input
                        id="inquiry-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={values.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={
                          errors.email ? "inquiry-email-error" : undefined
                        }
                        className={inputClasses(Boolean(errors.email))}
                      />
                      <FieldError
                        id="inquiry-email-error"
                        message={errors.email}
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="inquiry-service"
                        className="block font-sans text-[13px] font-medium text-charcoal"
                      >
                        Service interest
                        <span aria-hidden="true" className="ml-1 text-olive">
                          *
                        </span>
                      </label>
                      <select
                        id="inquiry-service"
                        name="service"
                        required
                        value={values.service}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.service)}
                        aria-describedby={
                          errors.service ? "inquiry-service-error" : undefined
                        }
                        className={cn(inputClasses(Boolean(errors.service)), "cursor-pointer")}
                      >
                        <option value="">Select a service</option>
                        {formServiceOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      <FieldError
                        id="inquiry-service-error"
                        message={errors.service}
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="inquiry-date"
                        className="block font-sans text-[13px] font-medium text-charcoal"
                      >
                        Event date{" "}
                        <span className="font-normal text-stone">
                          (optional)
                        </span>
                      </label>
                      <input
                        ref={setDateInputRef}
                        id="inquiry-date"
                        name="eventDate"
                        type="date"
                        value={values.eventDate}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.eventDate)}
                        aria-describedby={
                          errors.eventDate ? "inquiry-date-error" : undefined
                        }
                        className={inputClasses(Boolean(errors.eventDate))}
                      />
                      <FieldError
                        id="inquiry-date-error"
                        message={errors.eventDate}
                      />
                    </div>

                    <div className="space-y-2 sm:col-span-2">
                      <label
                        htmlFor="inquiry-details"
                        className="block font-sans text-[13px] font-medium text-charcoal"
                      >
                        Project details
                        <span aria-hidden="true" className="ml-1 text-olive">
                          *
                        </span>
                      </label>
                      <textarea
                        id="inquiry-details"
                        name="details"
                        required
                        rows={5}
                        value={values.details}
                        onChange={handleChange}
                        placeholder="Tell us about your day, your guests, and what you would love to remember."
                        aria-invalid={Boolean(errors.details)}
                        aria-describedby={
                          errors.details ? "inquiry-details-error" : undefined
                        }
                        className={cn(
                          inputClasses(Boolean(errors.details)),
                          "min-h-32 resize-y",
                        )}
                      />
                      <FieldError
                        id="inquiry-details-error"
                        message={errors.details}
                      />
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="font-sans text-[11px] leading-[1.6] text-stone">
                      No message is delivered from this demo form.
                    </p>
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={submitting}
                      aria-busy={submitting}
                      className="w-full sm:w-auto"
                    >
                      {submitting ? (
                        <Loader2
                          aria-hidden="true"
                          className="size-4 animate-spin motion-reduce:animate-none"
                          strokeWidth={1.75}
                        />
                      ) : (
                        <Send
                          aria-hidden="true"
                          className="size-4"
                          strokeWidth={1.5}
                        />
                      )}
                      {submitting
                        ? contactSection.pendingLabel
                        : contactSection.submitLabel}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
