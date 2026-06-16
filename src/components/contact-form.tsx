"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    window.setTimeout(() => setStatus("success"), 600);
  }

  if (status === "success") {
    return (
      <div className="mt-8 rounded-xl border border-brand-green/15 bg-brand-mint p-6">
        <p className="font-serif text-xl text-brand-green">Thank you.</p>
        <p className="mt-2 text-sm leading-relaxed text-brand-ink/75">
          Your message has been received. A member of the team will respond within two
          business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Full name" required />
        <Field id="email" label="Email" type="email" required />
      </div>
      <Field id="organization" label="Organisation" />
      <SelectField
        id="interest"
        label="Area of interest"
        required
        options={[
          "Wealth Management",
          "Asset / Fund Management",
          "General enquiry",
        ]}
      />
      <TextAreaField id="message" label="How can we help?" required rows={5} />

      <div className="mt-2 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-brand-ink/60">
          We will respond within two business days.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center gap-2 rounded-full bg-brand-green px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-green-dark disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send message"}
          <span aria-hidden>→</span>
        </button>
      </div>
    </form>
  );
}

type FieldProps = {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
};

function Field({ id, label, type = "text", required = false }: FieldProps) {
  return (
    <label htmlFor={id} className="block">
      <span className="block text-xs font-medium uppercase tracking-wider text-brand-ink/70">
        {label}
        {required && <span className="ml-1 text-brand-gold">*</span>}
      </span>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="mt-2 block w-full rounded-lg border border-brand-green/20 bg-white px-4 py-3 text-sm text-brand-ink shadow-sm transition focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-gold/40"
      />
    </label>
  );
}

type SelectProps = FieldProps & { options: string[] };

function SelectField({ id, label, options, required }: SelectProps) {
  return (
    <label htmlFor={id} className="block">
      <span className="block text-xs font-medium uppercase tracking-wider text-brand-ink/70">
        {label}
        {required && <span className="ml-1 text-brand-gold">*</span>}
      </span>
      <select
        id={id}
        name={id}
        required={required}
        defaultValue=""
        className="mt-2 block w-full rounded-lg border border-brand-green/20 bg-white px-4 py-3 text-sm text-brand-ink shadow-sm transition focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-gold/40"
      >
        <option value="" disabled>
          Select one
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

type TextAreaProps = FieldProps & { rows?: number };

function TextAreaField({ id, label, required, rows = 4 }: TextAreaProps) {
  return (
    <label htmlFor={id} className="block">
      <span className="block text-xs font-medium uppercase tracking-wider text-brand-ink/70">
        {label}
        {required && <span className="ml-1 text-brand-gold">*</span>}
      </span>
      <textarea
        id={id}
        name={id}
        required={required}
        rows={rows}
        className="mt-2 block w-full resize-y rounded-lg border border-brand-green/20 bg-white px-4 py-3 text-sm text-brand-ink shadow-sm transition focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-gold/40"
      />
    </label>
  );
}
