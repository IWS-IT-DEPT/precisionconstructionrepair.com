const AREAS = [
  "Mobile, AL",
  "Saraland, AL",
  "Chickasaw, AL",
  "Creola, AL",
  "Axis, AL",
  "McIntosh, AL",
  "Calvert, AL",
  "Jackson, AL",
];

export default function ServiceArea() {
  return (
    <section id="service-area" className="border-b border-line bg-night text-white">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">
              Service Area
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
              The Mobile Area &amp; the US-43 Industrial Corridor
            </h2>
            <p className="mt-4 leading-relaxed text-white/70">
              Most of our work is along the US-43 industrial corridor between Jackson
              and Mobile, AL &mdash; but we serve the greater Mobile area and beyond.
            </p>
          </div>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-x-8 gap-y-4 border-t border-white/10 pt-10 sm:grid-cols-4">
          {AREAS.map((area) => (
            <li key={area} className="flex items-center gap-2 text-sm text-white/80">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
              {area}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
