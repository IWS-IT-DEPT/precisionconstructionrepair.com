import type { Metadata } from "next";
import Link from "next/link";
import QuoteForm from "../components/QuoteForm";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Request a quote for industrial maintenance, machining, welding, or structural repair from Precision Construction Repair, serving steel and chemical plants across the Gulf Coast.",
  alternates: { canonical: "/quote" },
  openGraph: {
    title: "Get a Quote | Precision Construction Repair",
    description:
      "Request a quote for industrial maintenance, machining, welding, or structural repair work.",
    url: "/quote",
    type: "website",
  },
};

export default function QuotePage() {
  return (
    <section className="bg-paper-alt">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow text-sm font-semibold uppercase tracking-widest text-brand-dark">
            Get a Quote
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
            Tell us about the job
          </h1>
          <p className="mt-4 leading-relaxed text-ink-soft">
            Give us the details on your project or facility need and it goes straight
            to our quoting team. General question instead?{" "}
            <Link href="/#contact" className="font-medium text-brand-dark hover:underline">
              Contact us here
            </Link>
            .
          </p>
        </div>

        <div className="mt-12 max-w-3xl rounded-sm border border-line bg-paper p-6 sm:p-8">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
