import type { Metadata } from "next";
import HubPage from "../components/HubPage";
import { serviceAreas } from "../lib/seo-pages";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Precision Construction Repair serves industrial plants across the Gulf Coast, concentrated along the US-43 corridor between Mobile and Jackson, AL, and east to Pascagoula, MS.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasPage() {
  return (
    <HubPage
      eyebrow="Service Areas"
      title="Serving the Gulf Coast"
      intro="We serve industrial and manufacturing clients across the Gulf Coast, with most of our current work concentrated along the US-43 industrial corridor between Mobile and Jackson, AL."
      path="/service-areas"
      links={serviceAreas.map((a) => ({
        href: `/service-areas/${a.slug}`,
        label: a.shortName,
        description: a.summary,
      }))}
    />
  );
}
