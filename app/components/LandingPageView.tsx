import Image from "next/image";
import Link from "next/link";
import heroWelding from "@/public/images/hero-welding.jpg";
import machining from "@/public/images/machining.jpg";
import JsonLd from "./JsonLd";
import { PHONE_DISPLAY, PHONE_HREF, type LandingPage } from "@/app/lib/seo-pages";
import { breadcrumbJsonLd, faqJsonLd } from "@/app/lib/structured-data";

export type RelatedLink = { href: string; label: string; description: string };

const IMAGES = { welding: heroWelding, machining };

function CtaButtons({ callLabel }: { callLabel: string }) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <Link
        href="/quote"
        className="rounded-sm bg-brand px-7 py-3.5 text-center text-sm font-semibold uppercase tracking-wide text-night transition-colors hover:bg-white"
      >
        Get a Quote
      </Link>
      <a
        href={PHONE_HREF}
        className="rounded-sm border border-white/25 px-7 py-3.5 text-center text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:border-white/60"
      >
        {callLabel}
      </a>
    </div>
  );
}

/** Shared layout for SEO landing pages (services and service areas). */
export default function LandingPageView({
  page,
  breadcrumbs,
  structuredData,
  related,
}: {
  page: LandingPage;
  breadcrumbs: { name: string; path: string }[];
  structuredData: object;
  related: RelatedLink[];
}) {
  return (
    <>
      <JsonLd data={structuredData} />
      <JsonLd data={faqJsonLd(page.faqs)} />
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />

      <section className="relative overflow-hidden bg-night text-white">
        <Image
          src={IMAGES[page.image]}
          alt={page.imageAlt}
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="object-cover object-[75%_50%]"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-night via-night/90 to-night/60"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/60">
            <ol className="flex flex-wrap items-center gap-2">
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.path} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden>/</span>}
                  {i === breadcrumbs.length - 1 ? (
                    <span aria-current="page" className="text-white/80">
                      {crumb.name}
                    </span>
                  ) : (
                    <Link href={crumb.path || "/"} className="hover:text-white">
                      {crumb.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">{page.eyebrow}</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl">
            {page.h1}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">{page.intro}</p>
          <div className="mt-10">
            <CtaButtons callLabel={`Call ${PHONE_DISPLAY}`} />
          </div>
        </div>
      </section>

      {page.sections.map((section, i) => (
        <section
          key={section.heading}
          className={`border-b border-line ${i % 2 === 0 ? "bg-paper" : "bg-paper-alt"}`}
        >
          <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
            <h2 className="max-w-3xl font-display text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
              {section.heading}
            </h2>
            {section.body.map((p) => (
              <p key={p} className="mt-4 max-w-3xl leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
            {section.items && (
              <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2">
                {section.items.map((item) => (
                  <div key={item.title} className="bg-paper p-7">
                    <h3 className="font-display text-lg font-bold text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}

      <section className="border-b border-line bg-paper">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[3fr_2fr] lg:px-8 lg:py-20">
          <div>
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-ink">
              Frequently asked questions
            </h2>
            <div className="mt-8 divide-y divide-line rounded-sm border border-line bg-paper">
              {page.faqs.map((faq) => (
                <details key={faq.q} className="group p-6">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold text-ink">
                    <h3>{faq.q}</h3>
                    <span aria-hidden className="text-brand-dark transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold uppercase tracking-tight text-ink">Related</h2>
            <ul className="mt-6 space-y-3">
              {related.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-sm border border-line bg-paper-alt p-5 transition-colors hover:border-brand-dark"
                  >
                    <span className="font-semibold text-brand-dark">{link.label} &rarr;</span>
                    <span className="mt-1 block text-sm text-ink-soft">{link.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-night text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight">Need work done?</h2>
            <p className="mt-3 leading-relaxed text-white/70">
              Tell us about the job and it goes straight to our quoting team. For a critical failure,
              call us any time.
            </p>
          </div>
          <CtaButtons callLabel={PHONE_DISPLAY} />
        </div>
      </section>
    </>
  );
}
