import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-paper-alt">
      <div className="mx-auto flex max-w-6xl flex-col items-start px-6 py-24 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-dark">
          404
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">
          The page you&apos;re looking for doesn&apos;t exist or may have moved. Here
          are a few places to go instead.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/"
            className="rounded-sm bg-night px-7 py-3.5 text-center text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-deep"
          >
            Back to Home
          </Link>
          <Link
            href="/quote"
            className="rounded-sm border border-line px-7 py-3.5 text-center text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:border-brand-dark"
          >
            Get a Quote
          </Link>
          <Link
            href="/#contact"
            className="rounded-sm border border-line px-7 py-3.5 text-center text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:border-brand-dark"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
