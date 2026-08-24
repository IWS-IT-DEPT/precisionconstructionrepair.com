import type { SVGProps } from "react";

function IconShield(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3 4.5 6v5.5c0 4.6 3.2 8.4 7.5 9.5 4.3-1.1 7.5-4.9 7.5-9.5V6L12 3Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4.5" />
    </svg>
  );
}

function IconCheckBadge(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.5 12 2.3 2.3L15.5 9.5" />
    </svg>
  );
}

const SAFETY_POINTS = [
  "Site-specific safety orientation before every crew steps on-site",
  "PPE and lockout/tagout protocols followed on every job",
  "Pre-task hazard assessments before work begins",
  "Crews trained to OSHA general industry safety standards",
];

const QUALITY_POINTS = [
  "Direct-hire, skilled tradespeople — not subcontracted labor",
  "Clear scopes, schedules, and documentation on every job",
  "Work verified and inspected before we call it done",
  "Responsive communication from first call to final walkthrough",
];

export default function SafetyQuality() {
  return (
    <section id="safety" className="border-b border-line bg-paper-alt">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-dark">
            Safety &amp; Quality
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
            No shortcuts. On any job.
          </h2>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          <div className="rounded-sm border border-line bg-paper p-8">
            <IconShield className="h-9 w-9 text-brand-dark" />
            <h3 className="mt-4 font-display text-xl font-bold text-ink">Safety First</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Industrial and chemical plant environments don&apos;t leave room for error.
              Safety isn&apos;t a checkbox for us — it&apos;s how every job starts.
            </p>
            <ul className="mt-5 space-y-3">
              {SAFETY_POINTS.map((point) => (
                <li key={point} className="flex gap-3 text-sm text-ink-soft">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-sm border border-line bg-paper p-8">
            <IconCheckBadge className="h-9 w-9 text-brand-dark" />
            <h3 className="mt-4 font-display text-xl font-bold text-ink">Built on Quality</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              We self-perform our work with our own crews, so quality and accountability
              never get lost between subcontractors.
            </p>
            <ul className="mt-5 space-y-3">
              {QUALITY_POINTS.map((point) => (
                <li key={point} className="flex gap-3 text-sm text-ink-soft">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
