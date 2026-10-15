import { interestOptions } from "@/content/site";

export type LeadErrors = Partial<
  Record<"firstName" | "lastName" | "company" | "email" | "phone" | "market" | "areaOfInterest" | "form", string>
>;

export type LeadPayload = {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string | null;
  market: string;
  areaOfInterest: (typeof interestOptions)[number];
  page: string;
  source: "amerilist-website";
  submittedAt: string;
};

const namePattern = /^[\p{L}][\p{L}\s.'’-]{0,59}$/u;
const companyPattern = /^[\p{L}0-9][\p{L}0-9\s.&,'’-]{1,79}$/u;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown) {
  return typeof value === "string" ? value.trim().replace(/\s+/g, " ") : "";
}

export function validateLead(input: Record<string, unknown>): { errors: LeadErrors; value?: LeadPayload } {
  const errors: LeadErrors = {};
  const firstName = clean(input.firstName);
  const lastName = clean(input.lastName);
  const company = clean(input.company);
  const email = clean(input.email);
  const phone = clean(input.phone);
  const market = clean(input.market);
  const areaOfInterest = clean(input.areaOfInterest);
  const website = clean(input.website);
  const page = clean(input.page).slice(0, 120) || "/";

  if (website) {
    errors.form = "We could not submit this request.";
  }

  if (!firstName) errors.firstName = "Enter your first name.";
  else if (!namePattern.test(firstName)) errors.firstName = "Use letters in your first name.";

  if (!lastName) errors.lastName = "Enter your last name.";
  else if (!namePattern.test(lastName)) errors.lastName = "Use letters in your last name.";

  if (!email) errors.email = "Enter your email address.";
  else if (email.length > 120 || !emailPattern.test(email)) errors.email = "Enter a valid email address.";

  if (!company) errors.company = "Enter your company name.";
  else if (!companyPattern.test(company)) errors.company = "Use the company name without unusual symbols.";

  if (phone) {
    const digits = phone.replace(/\D/g, "");
    const validLength = digits.length === 10 || (digits.length === 11 && digits.startsWith("1"));
    if (!validLength || phone.length > 20) errors.phone = "Enter a 10-digit phone number, or leave this blank.";
  }

  if (!market) errors.market = "Enter the ZIP codes, county, or state.";
  else if (market.length < 2 || market.length > 160) errors.market = "Keep the market to 160 characters or fewer.";

  if (!areaOfInterest) errors.areaOfInterest = "Choose an audience.";
  else if (!interestOptions.includes(areaOfInterest as (typeof interestOptions)[number])) {
    errors.areaOfInterest = "Choose an audience from the list.";
  }

  if (Object.keys(errors).length > 0) return { errors };

  return {
    errors,
    value: {
      firstName,
      lastName,
      company,
      email,
      phone: phone || null,
      market,
      areaOfInterest: areaOfInterest as (typeof interestOptions)[number],
      page: page.startsWith("/") ? page : "/",
      source: "amerilist-website",
      submittedAt: new Date().toISOString(),
    },
  };
}

export function isAllowedWebhook(rawUrl: string) {
  try {
    const url = new URL(rawUrl);
    if (url.protocol === "https:") return true;
    const local = url.hostname === "localhost" || url.hostname === "127.0.0.1";
    return url.protocol === "http:" && local;
  } catch {
    return false;
  }
}
