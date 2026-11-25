import { SITE_URL, type Faq, type LandingPage, type ServiceArea } from "./seo-pages";

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export function faqJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbJsonLd(crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path}`,
    })),
  };
}

export function servicePageJsonLd(page: LandingPage) {
  const url = `${SITE_URL}/services/${page.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: page.eyebrow,
    serviceType: page.eyebrow,
    description: page.metaDescription,
    url,
    provider: { "@id": ORGANIZATION_ID },
    areaServed: "Gulf Coast (Alabama and Mississippi)",
  };
}

export function serviceAreaJsonLd(area: ServiceArea) {
  const url = `${SITE_URL}/service-areas/${area.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: `Industrial maintenance, machining and welding in ${area.shortName}`,
    serviceType: "Industrial maintenance, machining, welding and fabrication",
    description: area.metaDescription,
    url,
    provider: { "@id": ORGANIZATION_ID },
    areaServed: { "@type": "City", name: `${area.city}, ${area.stateName}` },
  };
}
