import type { Metadata } from "next";
import type { SVGProps } from "react";
import CareersForm from "../components/CareersForm";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Precision Construction Repair — direct-hire welding, machining, millwright, and industrial maintenance careers on the Gulf Coast. Apply today.",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Careers | Precision Construction Repair",
    description:
      "Direct-hire welding, machining, millwright, and industrial maintenance careers on the Gulf Coast.",
    url: "/careers",
    type: "website",
  },
};

function IconHandshake(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m3 12 4-4 4.5 4.5a1.5 1.5 0 0 0 2.5-1.5L11 8"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 12-4-4-5 5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m8 15 2 2a1.5 1.5 0 0 0 2-2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m11 18 1.5 1.5a1.5 1.5 0 0 0 2-2" />
    </svg>
  );
}

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

function IconTool(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.7 6.3a5 5 0 0 1-6.4 6.4L3 18l3 3 5.3-5.3a5 5 0 0 1 6.4-6.4L14.7 6.3Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="m14.7 6.3 3-3 2 2-3 3" />
    </svg>
  );
}

function IconMapPin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 10c0 5.5-7 12-7 12s-7-6.5-7-12a7 7 0 1 1 14 0Z"
      />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

const REASONS = [
  {
    icon: IconHandshake,
    title: "Direct-Hire, Not Staffed Out",
    body: "You work for Precision Construction Repair — not shuffled between agencies or subcontracted out to whoever's bidding lowest that week.",
  },
  {
    icon: IconShield,
    title: "Safety Taken Seriously",
    body: "Real job-site orientations, real hazard assessments, real PPE and lockout/tagout protocols. We'd rather slow down than send someone home hurt.",
  },
  {
    icon: IconTool,
    title: "Work That Uses Your Skills",
    body: "Welding, machining, and millwright work across steel and chemical plants — real variety, not the same repetitive task on a line all day.",
  },
  {
    icon: IconMapPin,
    title: "Close to Home, Gulf Coast Roots",
    body: "We're a Mobile-area company working the Gulf Coast, not flying crews across the country. Steady, local, industrial work.",
  },
];

const POSITIONS = [
  {
    title: "Welders",
    body: "Structural, pipe, and equipment welding for industrial and manufacturing facilities.",
  },
  {
    title: "Machinists",
    body: "Precision machining of custom parts, replacement components, and equipment rebuilds.",
  },
  {
    title: "Millwrights",
    body: "Installation, alignment, and repair of industrial machinery and process equipment.",
  },
  {
    title: "Industrial Maintenance Techs",
    body: "Routine and planned maintenance for production equipment and plant infrastructure.",
  },
];

export default function CareersPage() {
  return (
    <>
      <section className="border-b border-line bg-night text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            Careers
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-bold uppercase leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Skilled trades work that respects the trade
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            We&apos;re a direct-hire industrial contractor on the Gulf Coast looking
            for welders, machinists, millwrights, and maintenance techs who take
            pride in the work. If that&apos;s you, we want to hear from you.
          </p>
        </div>
      </section>

      <section className="border-b border-line bg-paper-alt">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-dark">
              Why Work Here
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
              Built for tradespeople who take it seriously
            </h2>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {REASONS.map((reason) => (
              <div key={reason.title} className="rounded-sm border border-line bg-paper p-6">
                <reason.icon className="h-8 w-8 text-brand-dark" />
                <h3 className="mt-4 font-display text-base font-bold text-ink">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{reason.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-dark">
              Positions
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
              What we&apos;re hiring for
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              We&apos;re always looking to add skilled tradespeople to our crews.
              Don&apos;t see your exact trade listed? Apply anyway — tell us what you
              do.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {POSITIONS.map((position) => (
              <div key={position.title} className="bg-paper p-6">
                <h3 className="font-display text-base font-bold text-ink">{position.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{position.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="bg-paper-alt">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-dark">
              Apply Now
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
              Get on our radar
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              This is a quick initial application &mdash; if it looks like a fit,
              we&apos;ll follow up to talk next steps.
            </p>
          </div>

          <div className="mt-12 max-w-3xl rounded-sm border border-line bg-paper p-6 sm:p-8">
            <CareersForm />
          </div>
        </div>
      </section>
    </>
  );
}
