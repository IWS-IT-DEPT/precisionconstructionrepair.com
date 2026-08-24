const REASONS = [
  {
    title: "Personalized Service",
    body: "Every facility is different. We tailor our repair and maintenance plans to your unique equipment, timelines, and budget — no cookie-cutter fixes.",
  },
  {
    title: "Experienced Professionals",
    body: "Our crews bring decades of combined experience in industrial, structural, and commercial repair, and stay dedicated to your long-term success.",
  },
  {
    title: "Proven Results",
    body: "From emergency callouts to planned maintenance programs, our work speaks for itself — minimal downtime and repairs done right the first time.",
  },
];

export default function WhyUs() {
  return (
    <section className="border-b border-line bg-paper-alt">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-dark">
            Why Work With Us
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
            Built on precision. Backed by results.
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason, i) => (
            <div key={reason.title} className="border-t-2 border-brand pt-6">
              <span className="font-display text-4xl font-bold text-line">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-xl font-bold text-ink">{reason.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{reason.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
