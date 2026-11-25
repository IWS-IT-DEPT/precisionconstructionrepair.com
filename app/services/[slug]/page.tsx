import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LandingPageView from "@/app/components/LandingPageView";
import { serviceAreas, servicePages } from "@/app/lib/seo-pages";
import { servicePageJsonLd } from "@/app/lib/structured-data";

export const dynamicParams = false;

const AREA_NAMES = serviceAreas.map((a) => a.shortName).join(", ");

export function generateStaticParams() {
  return servicePages.map((page) => ({ slug: page.slug }));
}

const getPage = (slug: string) => servicePages.find((p) => p.slug === slug);

export async function generateMetadata(props: PageProps<"/services/[slug]">): Promise<Metadata> {
  const page = getPage((await props.params).slug);
  if (!page) return {};
  const url = `/services/${page.slug}`;
  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    alternates: { canonical: url },
    openGraph: { title: page.metaTitle, description: page.metaDescription, url, type: "website" },
  };
}

export default async function ServicePage(props: PageProps<"/services/[slug]">) {
  const page = getPage((await props.params).slug);
  if (!page) notFound();

  const related = [
    ...servicePages
      .filter((p) => p.slug !== page.slug)
      .map((p) => ({ href: `/services/${p.slug}`, label: p.eyebrow, description: p.summary })),
    { href: "/service-areas", label: "Service areas", description: AREA_NAMES },
  ];

  return (
    <LandingPageView
      page={page}
      breadcrumbs={[
        { name: "Home", path: "" },
        { name: "Services", path: "/services" },
        { name: page.eyebrow, path: `/services/${page.slug}` },
      ]}
      structuredData={servicePageJsonLd(page)}
      related={related}
    />
  );
}
