import Link from "next/link";
import { serviceAreas } from "@/app/lib/seo-pages";

const AREA_PAGES = new Map(serviceAreas.map((a) => [a.shortName, `/service-areas/${a.slug}`]));

const AREAS = [
  "Mobile, AL",
  "Saraland, AL",
  "Chickasaw, AL",
  "Creola, AL",
  "Calvert, AL",
  "Jackson, AL",
  "Bayou La Batre, AL",
  "Pascagoula, MS",
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
              Proudly Serving the Gulf Coast
            </h2>
            <p className="mt-4 leading-relaxed text-white/70">
              We serve industrial and manufacturing clients across the Gulf Coast, with
              most of our current work concentrated along the US-43 industrial
              corridor between Mobile and Jackson, AL.
            </p>
          </div>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-x-8 gap-y-4 border-t border-white/10 pt-10 sm:grid-cols-4">
          {AREAS.map((area) => (
            <li key={area} className="flex items-center gap-2 text-sm text-white/80">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
              {AREA_PAGES.has(area) ? (
                <Link href={AREA_PAGES.get(area)!} className="underline decoration-brand/60 underline-offset-4 hover:text-white">
                  {area}
                </Link>
              ) : (
                area
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
