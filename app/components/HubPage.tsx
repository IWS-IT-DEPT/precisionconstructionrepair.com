import Link from "next/link";
import JsonLd from "./JsonLd";
import { breadcrumbJsonLd } from "@/app/lib/structured-data";

/** Index page listing landing pages (all services, or all service areas). */
export default function HubPage({
  eyebrow,
  title,
  intro,
  path,
  links,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  path: string;
  links: { href: string; label: string; description: string }[];
}) {
  return (
    <section className="bg-paper-alt">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "" },
          { name: eyebrow, path },
        ])}
      />
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-dark">{eyebrow}</p>
          <h1 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
            {title}
          </h1>
          <p className="mt-4 leading-relaxed text-ink-soft">{intro}</p>
        </div>
        <ul className="mt-12 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <li key={link.href} className="bg-paper">
              <Link href={link.href} className="block h-full p-8 transition-colors hover:bg-paper-alt">
                <h2 className="font-display text-lg font-bold text-ink">{link.label}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{link.description}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-brand-dark">Learn more &rarr;</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-ink-soft">
          Don&apos;t see what you need?{" "}
          <Link href="/quote" className="font-medium text-brand-dark hover:underline">
            Tell us about the job
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
