"use client";

import { useEffect, useId, useRef, useState, type FormEvent, type InputHTMLAttributes } from "react";
import { usePathname } from "next/navigation";
import { interestOptions, leadForm } from "@/content/site";
import { RichText } from "@/components/RichText";
import { buttonClass } from "@/components/button-styles";
import { leadsEnabled } from "@/lib/site";
import { validateLead, type LeadErrors } from "@/lib/leads";

type LeadFormProps = {
  defaultInterest?: string;
};

type Delivery = "idle" | "submitting" | "success" | "unconfigured" | "error";

const fields = ["firstName", "lastName", "company", "email", "phone", "market", "areaOfInterest"] as const;

export function LeadForm({ defaultInterest = "" }: LeadFormProps) {
  const pathname = usePathname();
  const formId = useId();
  const statusRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const lock = useRef(false);
  const [errors, setErrors] = useState<LeadErrors>({});
  const [delivery, setDelivery] = useState<Delivery>("idle");

  const initialInterest = interestOptions.includes(defaultInterest as (typeof interestOptions)[number])
    ? defaultInterest
    : "";

  useEffect(() => {
    if (delivery === "idle" || delivery === "submitting") return;
    statusRef.current?.focus();
  }, [delivery]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (lock.current) return;

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const result = validateLead({ ...data, page: pathname });
    setErrors(result.errors);

    if (!result.value) {
      const firstInvalid = fields.find((field) => result.errors[field]);
      if (firstInvalid) {
        form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      }
      return;
    }

    lock.current = true;
    setDelivery("submitting");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, page: pathname }),
      });
      const body = (await response.json().catch(() => null)) as { code?: string; errors?: LeadErrors } | null;

      if (body?.code === "invalid" && body.errors) {
        setErrors(body.errors);
        setDelivery("idle");
        return;
      }

      if (response.status === 503 || body?.code === "not_configured") {
        setDelivery("unconfigured");
        return;
      }

      if (!response.ok || body?.code !== "received") {
        setDelivery("error");
        return;
      }

      setDelivery("success");
      form.reset();
    } catch {
      setDelivery("error");
      statusRef.current?.focus();
    } finally {
      lock.current = false;
    }
  }

  function clearError(name: string) {
    setErrors((current) => {
      if (!current[name as keyof LeadErrors]) return current;
      const next = { ...current };
      delete next[name as keyof LeadErrors];
      return next;
    });
  }

  if (delivery === "success") {
    return (
      <div ref={statusRef} tabIndex={-1} role="status" className="scroll-mt-32 rounded-xl border border-ok/30 bg-ok-soft p-6 outline-none">
        <h3 className="text-lg font-semibold text-navy">{leadForm.successTitle}</h3>
        <p className="mt-2 text-sm leading-6 text-ink">{leadForm.successBody}</p>
      </div>
    );
  }

  return (
    <div>
      {!leadsEnabled ? (
        <div className="mb-5 rounded-lg border border-[#e4d3b0] bg-sand px-4 py-3 text-sm leading-6 text-navy">
          <p>{leadForm.placeholderBody}</p>
        </div>
      ) : null}

      <div ref={statusRef} tabIndex={-1} className="scroll-mt-32 outline-none">
        {delivery === "unconfigured" ? (
          <div role="alert" className="mb-5 rounded-lg border border-[#e4d3b0] bg-sand px-4 py-3 text-sm leading-6 text-navy">
            <p className="font-semibold">{leadForm.notSentTitle}</p>
            <p className="mt-1">{leadForm.notSentBody}</p>
          </div>
        ) : null}
        {delivery === "error" ? (
          <div role="alert" className="mb-5 rounded-lg border border-danger/30 bg-white px-4 py-3 text-sm leading-6 text-danger">
            <p className="font-semibold">{leadForm.errorTitle}</p>
            <p className="mt-1">{leadForm.errorBody}</p>
          </div>
        ) : null}
      </div>

      <form ref={formRef} id={formId} className="grid gap-4" noValidate onSubmit={onSubmit}>
        <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
          <label htmlFor={`${formId}-website`}>Website</label>
          <input id={`${formId}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            id={`${formId}-first-name`}
            name="firstName"
            label="First name"
            autoComplete="given-name"
            error={errors.firstName}
            onInput={() => clearError("firstName")}
          />
          <Field
            id={`${formId}-last-name`}
            name="lastName"
            label="Last name"
            autoComplete="family-name"
            error={errors.lastName}
            onInput={() => clearError("lastName")}
          />
        </div>

        <Field
          id={`${formId}-company`}
          name="company"
          label="Company"
          autoComplete="organization"
          error={errors.company}
          onInput={() => clearError("company")}
        />

        <Field
          id={`${formId}-email`}
          name="email"
          label="Email address"
          type="email"
          autoComplete="email"
          inputMode="email"
          error={errors.email}
          onInput={() => clearError("email")}
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            id={`${formId}-phone`}
            name="phone"
            label="Phone number"
            hint="Optional"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            error={errors.phone}
            onInput={() => clearError("phone")}
          />
          <Field
            id={`${formId}-market`}
            name="market"
            label="Market"
            autoComplete="off"
            placeholder="ZIPs, county, or state"
            error={errors.market}
            onInput={() => clearError("market")}
          />
        </div>

        <SelectField
          id={`${formId}-interest`}
          name="areaOfInterest"
          label="Audience"
          placeholder="Select an audience"
          options={interestOptions}
          defaultValue={initialInterest}
          required
          error={errors.areaOfInterest}
          onChange={() => clearError("areaOfInterest")}
        />

        {errors.form ? (
          <p role="alert" className="text-sm text-danger">
            {errors.form}
          </p>
        ) : null}

        <p className="text-sm leading-6 text-muted">
          <RichText text={leadForm.privacyNotice} />
        </p>

        <button type="submit" className={buttonClass.primary} disabled={delivery === "submitting"} aria-busy={delivery === "submitting"}>
          {delivery === "submitting" ? leadForm.submitting : leadForm.submit}
        </button>
      </form>

      <noscript>
        <p className="mt-4 text-sm leading-6 text-navy">Enable JavaScript to use this form. It will not submit until it is connected.</p>
      </noscript>
    </div>
  );
}

function Field({
  id,
  name,
  label,
  hint,
  error,
  onInput,
  type = "text",
  ...props
}: {
  id: string;
  name: string;
  label: string;
  hint?: string;
  error?: string;
  onInput: () => void;
  type?: string;
} & InputHTMLAttributes<HTMLInputElement>) {
  const errorId = `${id}-error`;
  const hintId = `${id}-hint`;
  const describedBy = [hint ? hintId : "", error ? errorId : ""].filter(Boolean).join(" ") || undefined;

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 flex items-baseline justify-between gap-3 text-sm font-medium text-navy">
        <span>{label}</span>
        {hint ? (
          <span id={hintId} className="text-xs font-normal text-muted">
            {hint}
          </span>
        ) : null}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy}
        onInput={onInput}
        className="min-h-11 w-full rounded-md border border-line bg-white px-3 text-base text-ink placeholder:text-muted/70"
        {...props}
      />
      {error ? (
        <p id={errorId} className="mt-1.5 text-sm text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function SelectField({
  id,
  name,
  label,
  hint,
  placeholder,
  options,
  error,
  defaultValue = "",
  required = false,
  onChange,
}: {
  id: string;
  name: string;
  label: string;
  hint?: string;
  placeholder: string;
  options: readonly string[];
  error?: string;
  defaultValue?: string;
  required?: boolean;
  onChange: () => void;
}) {
  const errorId = `${id}-error`;
  const hintId = `${id}-hint`;
  const describedBy = [hint ? hintId : "", error ? errorId : ""].filter(Boolean).join(" ") || undefined;

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 flex items-baseline justify-between gap-3 text-sm font-medium text-navy">
        <span>{label}</span>
        {hint ? (
          <span id={hintId} className="text-xs font-normal text-muted">
            {hint}
          </span>
        ) : null}
      </label>
      <select
        id={id}
        name={name}
        defaultValue={defaultValue}
        required={required}
        aria-required={required || undefined}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy}
        onChange={onChange}
        className="min-h-11 w-full rounded-md border border-line bg-white px-3 text-base text-ink"
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? (
        <p id={errorId} className="mt-1.5 text-sm text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}
