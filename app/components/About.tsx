import Image from "next/image";
import machiningImage from "@/public/images/machining.jpg";
import badgeImage from "@/public/images/pcr-logo.png";

const INDUSTRIES = ["Steel Manufacturing", "Chemical Processing", "Heavy Manufacturing", "Industrial Plants"];

export default function About() {
  return (
    <section id="about" className="border-b border-line bg-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-dark">
            About Us
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
            Rooted in Mobile, built for the Gulf Coast
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-ink-soft">
            <p>
              Precision Construction Repair is an industrial service company based in
              the Mobile, Alabama area, providing maintenance, machining, and welding
              services to large manufacturing clients across the Gulf Coast &mdash;
              with the bulk of our current work concentrated along the US-43
              industrial corridor between Mobile and Jackson, AL. We bring deep
              experience serving the steel and chemical manufacturing industries.
            </p>
            <p>
              We work directly with plant managers and maintenance teams to keep
              production equipment and facility infrastructure running, pairing
              skilled trades with a straightforward, no-surprises approach to every
              job.
            </p>
          </div>

          <div className="mt-8 flex items-center gap-4 rounded-sm border border-line bg-paper-alt p-4">
            <div className="shrink-0 rounded-md bg-night p-2">
              <Image src={badgeImage} alt="Precision Construction Repair nameplate" className="h-10 w-auto" />
            </div>
            <p className="text-sm leading-snug text-ink-soft">
              Every job carries our nameplate &mdash; precision fabrication is our
              craft, not just a service we offer.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-line">
            <Image
              src={machiningImage}
              alt="Precision Construction Repair machinist performing CNC machining work"
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-dark">
              Industries We Serve
            </p>
            <ul className="mt-3 grid grid-cols-2 gap-3">
              {INDUSTRIES.map((industry) => (
                <li
                  key={industry}
                  className="rounded-sm border border-line bg-paper-alt px-4 py-3 text-sm font-medium text-ink"
                >
                  {industry}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
