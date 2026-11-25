import type { Metadata } from "next";
import HubPage from "../components/HubPage";
import { servicePages } from "../lib/seo-pages";

export const metadata: Metadata = {
  title: "Industrial Services",
  description:
    "Industrial maintenance, on-site machining, welding and fabrication, R Stamp boiler and pressure vessel repair, millwright work, structural steel repair, and 24/7 emergency support across the Gulf Coast.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <HubPage
      eyebrow="Services"
      title="Industrial services"
      intro="Maintenance, machining, welding, and repair work that keeps steel and chemical manufacturing operations running across the Gulf Coast, all self-performed by our own crews."
      path="/services"
      links={servicePages.map((p) => ({ href: `/services/${p.slug}`, label: p.eyebrow, description: p.summary }))}
    />
  );
}
