"use client";

import { useState, type FormEvent } from "react";
import { trackFormEvent } from "@/app/lib/track";

type Status = "idle" | "submitting" | "success" | "error";

const POSITIONS = ["Welder", "Machinist", "Millwright", "Industrial Maintenance", "Other"];
const EXPERIENCE_OPTIONS = ["Less than 1 year", "1–3 years", "3–5 years", "5–10 years", "10+ years"];

export default function CareersForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("submitting");

    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          position: data.get("position"),
          experience: data.get("experience"),
          certifications: data.get("certifications"),
          startDate: data.get("startDate"),
          notes: data.get("notes"),
        }),
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      trackFormEvent("job_application", "careers");
      form.reset();
    } catch {
      setStatus("error");
      trackFormEvent("form_error", "careers");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-brand/40 bg-brand/10 p-6 text-ink">
        <p className="font-display text-lg font-bold">Application received!</p>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          Thanks for your interest in Precision Construction Repair. We&apos;ll review
          your application and reach out if it&apos;s a fit.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="c-name" className="mb-1.5 block text-sm font-medium text-ink">
            Name*
          </label>
          <input
            id="c-name"
            name="name"
            type="text"
            required
            className="w-full rounded-sm border border-line bg-paper px-3.5 py-2.5 text-ink outline-none transition-colors focus:border-brand-dark"
          />
        </div>
        <div>
          <label htmlFor="c-phone" className="mb-1.5 block text-sm font-medium text-ink">
            Phone*
          </label>
          <input
            id="c-phone"
            name="phone"
            type="tel"
            required
            className="w-full rounded-sm border border-line bg-paper px-3.5 py-2.5 text-ink outline-none transition-colors focus:border-brand-dark"
          />
        </div>
      </div>

      <div>
        <label htmlFor="c-email" className="mb-1.5 block text-sm font-medium text-ink">
          Email*
        </label>
        <input
          id="c-email"
          name="email"
          type="email"
          required
          className="w-full rounded-sm border border-line bg-paper px-3.5 py-2.5 text-ink outline-none transition-colors focus:border-brand-dark"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="c-position" className="mb-1.5 block text-sm font-medium text-ink">
            Position Interested In*
          </label>
          <select
            id="c-position"
            name="position"
            required
            defaultValue=""
            className="w-full rounded-sm border border-line bg-paper px-3.5 py-2.5 text-ink outline-none transition-colors focus:border-brand-dark"
          >
            <option value="" disabled>
              Select one
            </option>
            {POSITIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="c-experience" className="mb-1.5 block text-sm font-medium text-ink">
            Years of Experience
          </label>
          <select
            id="c-experience"
            name="experience"
            defaultValue=""
            className="w-full rounded-sm border border-line bg-paper px-3.5 py-2.5 text-ink outline-none transition-colors focus:border-brand-dark"
          >
            <option value="" disabled>
              Select one
            </option>
            {EXPERIENCE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="c-certifications" className="mb-1.5 block text-sm font-medium text-ink">
            Certifications / Licenses
          </label>
          <input
            id="c-certifications"
            name="certifications"
            type="text"
            placeholder="e.g. AWS certified welder, CDL"
            className="w-full rounded-sm border border-line bg-paper px-3.5 py-2.5 text-ink outline-none transition-colors focus:border-brand-dark"
          />
        </div>
        <div>
          <label htmlFor="c-startDate" className="mb-1.5 block text-sm font-medium text-ink">
            Available Start Date
          </label>
          <input
            id="c-startDate"
            name="startDate"
            type="text"
            placeholder="e.g. Immediately, 2 weeks notice"
            className="w-full rounded-sm border border-line bg-paper px-3.5 py-2.5 text-ink outline-none transition-colors focus:border-brand-dark"
          />
        </div>
      </div>

      <div>
        <label htmlFor="c-notes" className="mb-1.5 block text-sm font-medium text-ink">
          Tell us about your experience
        </label>
        <textarea
          id="c-notes"
          name="notes"
          rows={5}
          placeholder="Shops or plants you've worked in, equipment you're comfortable with, anything else worth knowing"
          className="w-full rounded-sm border border-line bg-paper px-3.5 py-2.5 text-ink outline-none transition-colors focus:border-brand-dark"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong sending your application. Please try again or call us
          directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-sm bg-night px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-deep disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Submit Application"}
      </button>
    </form>
  );
}
