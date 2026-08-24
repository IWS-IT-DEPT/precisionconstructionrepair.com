import type { SVGProps } from "react";

function IconWrench(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.7 6.3a5 5 0 0 1-6.4 6.4L3 18l3 3 5.3-5.3a5 5 0 0 1 6.4-6.4L14.7 6.3Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="m14.7 6.3 3-3 2 2-3 3" />
    </svg>
  );
}

function IconBuilding(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 21v-6h4a1 1 0 0 1 1 1v5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 8h2M8 12h2M8 16h2" />
    </svg>
  );
}

function IconGear(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <circle cx="12" cy="12" r="3" />
      <path
        strokeLinecap="round"
        d="M12 3v2.2M12 18.8V21M21 12h-2.2M5.2 12H3M18.4 5.6l-1.6 1.6M7.2 16.8l-1.6 1.6M18.4 18.4l-1.6-1.6M7.2 7.2 5.6 5.6"
      />
    </svg>
  );
}

function IconFlame(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3s-5 4.5-5 9.5a5 5 0 0 0 10 0c0-1.5-.7-2.6-1.4-3.6.1 1-.2 1.9-.9 2.4C15.3 8.8 12 7 12 3Z"
      />
    </svg>
  );
}

function IconGauge(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path strokeLinecap="round" d="M4.9 17.1a8 8 0 1 1 14.2 0" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 13 15 9" />
      <path strokeLinecap="round" d="M12 13v.01" />
    </svg>
  );
}

function IconBolt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 3 4 14h6l-1 7 9-11h-6l1-7Z" />
    </svg>
  );
}

const SERVICES = [
  {
    icon: IconGauge,
    title: "Industrial Maintenance",
    body: "Routine and planned maintenance for production equipment, mechanical systems, and plant infrastructure — keeping steel and chemical operations running.",
  },
  {
    icon: IconGear,
    title: "Precision Machining",
    body: "In-house and on-site machining of custom parts, replacement components, and equipment rebuilds to exact tolerances.",
  },
  {
    icon: IconFlame,
    title: "Welding & Fabrication",
    body: "Structural, process piping, and equipment welding along with custom metal fabrication built to withstand demanding industrial environments.",
  },
  {
    icon: IconWrench,
    title: "Millwright & Equipment Repair",
    body: "Installation, alignment, and repair of industrial machinery, conveyors, and process equipment by experienced millwrights.",
  },
  {
    icon: IconBuilding,
    title: "Structural & Steel Repair",
    body: "Repair and reinforcement of structural steel, platforms, and plant infrastructure to restore integrity and extend service life.",
  },
  {
    icon: IconBolt,
    title: "Emergency & Turnaround Support",
    body: "24/7 emergency response and dedicated crews for planned shutdowns and turnarounds, minimizing costly downtime.",
  },
];

export default function Services() {
  return (
    <section id="services" className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-dark">
            What We Do
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 leading-relaxed text-ink-soft">
            From production equipment to the plant infrastructure around it, we handle
            the maintenance, machining, and welding work that keeps steel and chemical
            manufacturing operations running.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <div key={service.title} className="group bg-paper p-8 transition-colors hover:bg-paper-alt">
              <div className="flex items-start justify-between">
                <service.icon className="h-9 w-9 text-brand-dark" />
                <span className="font-display text-2xl font-bold text-line">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-ink">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{service.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
