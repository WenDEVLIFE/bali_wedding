export const INQUIRY_FIELD_ORDER = [
  "name",
  "email",
  "service",
  "eventDate",
  "details",
] as const;

export type InquiryField = (typeof INQUIRY_FIELD_ORDER)[number];

export type InquiryValues = Record<InquiryField, string>;

export type InquiryErrors = Partial<Record<InquiryField, string>>;

export type ValidationOptions = {
  today?: Date;
};

export type ValidationResult = {
  valid: boolean;
  errors: InquiryErrors;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

function startOfDay(date: Date): number {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
}

function parseLocalDate(value: string): Date | null {
  if (!DATE_PATTERN.test(value)) {
    return null;
  }

  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(year, month - 1, day);

  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return null;
  }

  return date;
}

export function validateInquiry(
  values: InquiryValues,
  options: ValidationOptions = {},
): ValidationResult {
  const errors: InquiryErrors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const service = values.service.trim();
  const eventDate = values.eventDate.trim();
  const details = values.details.trim();
  const today = options.today ?? new Date();

  if (name.length < 2) {
    errors.name = "Please enter your full name (at least 2 characters).";
  }

  if (!email) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!service) {
    errors.service = "Please choose a service, or select “Not sure yet”.";
  }

  if (eventDate) {
    const parsed = parseLocalDate(eventDate);

    if (!parsed) {
      errors.eventDate = "Please enter the date in YYYY-MM-DD format.";
    } else if (startOfDay(parsed) < startOfDay(today)) {
      errors.eventDate = "The event date cannot be in the past.";
    }
  }

  if (details.length < 10) {
    errors.details = "Please share at least 10 characters about your day.";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function firstInvalidField(errors: InquiryErrors): InquiryField | null {
  return INQUIRY_FIELD_ORDER.find((field) => Boolean(errors[field])) ?? null;
}
