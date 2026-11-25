import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LandingPageView from "@/app/components/LandingPageView";
import { serviceAreas, servicePages } from "@/app/lib/seo-pages";
import { serviceAreaJsonLd } from "@/app/lib/structured-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceAreas.map((area) => ({ area: area.slug }));
}

const getArea = (slug: string) => serviceAreas.find((a) => a.slug === slug);

export async function generateMetadata(props: PageProps<"/service-areas/[area]">): Promise<Metadata> {
  const area = getArea((await props.params).area);
  if (!area) return {};
  const url = `/service-areas/${area.slug}`;
  return {
    title: { absolute: area.metaTitle },
    description: area.metaDescription,
    alternates: { canonical: url },
    openGraph: { title: area.metaTitle, description: area.metaDescription, url, type: "website" },
  };
}

export default async function ServiceAreaPage(props: PageProps<"/service-areas/[area]">) {
  const area = getArea((await props.params).area);
  if (!area) notFound();

  const related = [
    ...area.nearby
      .map((slug) => getArea(slug)!)
      .map((a) => ({ href: `/service-areas/${a.slug}`, label: `Serving ${a.shortName}`, description: a.summary })),
    ...servicePages.map((p) => ({ href: `/services/${p.slug}`, label: p.eyebrow, description: p.summary })),
  ];

  return (
    <LandingPageView
      page={area}
      breadcrumbs={[
        { name: "Home", path: "" },
        { name: "Service Areas", path: "/service-areas" },
        { name: area.shortName, path: `/service-areas/${area.slug}` },
      ]}
      structuredData={serviceAreaJsonLd(area)}
      related={related}
    />
  );
}
