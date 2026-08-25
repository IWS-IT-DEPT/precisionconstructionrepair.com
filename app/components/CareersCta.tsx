import Link from "next/link";

export default function CareersCta() {
  return (
    <section className="bg-brand">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div>
          <p className="font-display text-lg font-bold uppercase tracking-tight text-night">
            Join Our Team
          </p>
          <p className="mt-1 text-sm text-night/80">
            We&apos;re always looking for skilled welders, machinists, and millwrights
            for our Gulf Coast crews.
          </p>
        </div>
        <Link
          href="/careers"
          className="whitespace-nowrap rounded-sm bg-night px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-night"
        >
          View Openings
        </Link>
      </div>
    </section>
  );
}
