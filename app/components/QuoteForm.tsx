"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const TIMELINE_OPTIONS = [
  "Emergency / ASAP",
  "Within 2 weeks",
  "Within 30 days",
  "Planning ahead",
];

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("submitting");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          company: data.get("company"),
          email: data.get("email"),
          phone: data.get("phone"),
          location: data.get("location"),
          timeline: data.get("timeline"),
          description: data.get("description"),
        }),
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-brand/40 bg-brand/10 p-6 text-ink">
        <p className="font-display text-lg font-bold">Quote request received!</p>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          Our quoting team will review the details and follow up shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="q-name" className="mb-1.5 block text-sm font-medium text-ink">
            Name*
          </label>
          <input
            id="q-name"
            name="name"
            type="text"
            required
            className="w-full rounded-sm border border-line bg-paper px-3.5 py-2.5 text-ink outline-none transition-colors focus:border-brand-dark"
          />
        </div>
        <div>
          <label htmlFor="q-company" className="mb-1.5 block text-sm font-medium text-ink">
            Company
          </label>
          <input
            id="q-company"
            name="company"
            type="text"
            className="w-full rounded-sm border border-line bg-paper px-3.5 py-2.5 text-ink outline-none transition-colors focus:border-brand-dark"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="q-email" className="mb-1.5 block text-sm font-medium text-ink">
            Email*
          </label>
          <input
            id="q-email"
            name="email"
            type="email"
            required
            className="w-full rounded-sm border border-line bg-paper px-3.5 py-2.5 text-ink outline-none transition-colors focus:border-brand-dark"
          />
        </div>
        <div>
          <label htmlFor="q-phone" className="mb-1.5 block text-sm font-medium text-ink">
            Phone*
          </label>
          <input
            id="q-phone"
            name="phone"
            type="tel"
            required
            className="w-full rounded-sm border border-line bg-paper px-3.5 py-2.5 text-ink outline-none transition-colors focus:border-brand-dark"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="q-location" className="mb-1.5 block text-sm font-medium text-ink">
            Facility / Project Location
          </label>
          <input
            id="q-location"
            name="location"
            type="text"
            placeholder="City, plant, or site name"
            className="w-full rounded-sm border border-line bg-paper px-3.5 py-2.5 text-ink outline-none transition-colors focus:border-brand-dark"
          />
        </div>
        <div>
          <label htmlFor="q-timeline" className="mb-1.5 block text-sm font-medium text-ink">
            Timeline
          </label>
          <select
            id="q-timeline"
            name="timeline"
            defaultValue=""
            className="w-full rounded-sm border border-line bg-paper px-3.5 py-2.5 text-ink outline-none transition-colors focus:border-brand-dark"
          >
            <option value="" disabled>
              Select one
            </option>
            {TIMELINE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="q-description" className="mb-1.5 block text-sm font-medium text-ink">
          Describe the job*
        </label>
        <textarea
          id="q-description"
          name="description"
          required
          rows={5}
          placeholder="Scope of work, equipment involved, and anything else that helps us quote accurately"
          className="w-full rounded-sm border border-line bg-paper px-3.5 py-2.5 text-ink outline-none transition-colors focus:border-brand-dark"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong sending your request. Please try again or call us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-sm bg-night px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-deep disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Request Quote"}
      </button>
    </form>
  );
}
