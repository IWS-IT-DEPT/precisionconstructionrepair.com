import Image from "next/image";
import Link from "next/link";
import heroImage from "@/public/images/hero-welding.jpg";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-night text-white">
      <Image
        src={heroImage}
        alt="Welder repairing steel framework at a Precision Construction Repair job site"
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        className="object-cover object-[75%_50%]"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-night via-night/85 to-night/40"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night via-transparent to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-24 lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:py-32">
        <div className="max-w-2xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand">
            Mobile, AL &middot; Serving the Gulf Coast
          </p>
          <h1 className="font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Industrial Maintenance, Machining &amp; Welding
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            Precision Construction Repair keeps large-scale manufacturing running &mdash;
            trusted by steel and chemical plants across the Gulf Coast for machining,
            welding, fabrication, and industrial maintenance done right.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/quote"
              className="rounded-sm bg-brand px-7 py-3.5 text-center text-sm font-semibold uppercase tracking-wide text-night transition-colors hover:bg-white"
            >
              Get a Quote
            </Link>
            <a
              href="#services"
              className="rounded-sm border border-white/25 px-7 py-3.5 text-center text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:border-white/60"
            >
              Our Services
            </a>
          </div>
        </div>

        <dl className="grid flex-1 grid-cols-2 gap-6 border-t border-white/10 pt-10 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
          {[
            { value: "24/7", label: "Emergency response for critical failures" },
            { value: "Steel & Chemical", label: "Specialized experience in heavy manufacturing" },
            { value: "Machining", label: "In-house machining, welding & fabrication" },
            { value: "Mon–Fri", label: "7:00 AM – 3:30 PM office hours" },
          ].map((stat) => (
            <div key={stat.label}>
              <dt className="font-display text-3xl font-bold text-brand">{stat.value}</dt>
              <dd className="mt-1 text-sm leading-snug text-white/60">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
