import type { Metadata } from "next";
import { Inter, League_Spartan } from "next/font/google";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const SITE_URL = "https://precisionconstructionrepair.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Precision Construction Repair | Industrial Maintenance, Machining & Welding",
    template: "%s | Precision Construction Repair",
  },
  description:
    "Industrial maintenance, machining, welding & fabrication for steel and chemical manufacturing plants across the Gulf Coast. Based in Eight Mile, AL, serving Mobile and beyond.",
  keywords: [
    "industrial maintenance",
    "industrial machining",
    "industrial welding",
    "millwright services",
    "structural steel repair",
    "steel manufacturing contractor",
    "chemical plant maintenance",
    "shutdown and turnaround services",
    "Mobile Alabama industrial contractor",
    "Eight Mile Alabama",
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Precision Construction Repair",
    description:
      "Industrial maintenance, machining & welding for steel and chemical manufacturing clients across the Gulf Coast.",
    url: SITE_URL,
    siteName: "Precision Construction Repair",
    locale: "en_US",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Precision Construction Repair",
    description:
      "Industrial maintenance, machining & welding for steel and chemical manufacturing clients across the Gulf Coast.",
    images: ["/opengraph-image"],
  },
};

const LOCAL_BUSINESS_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "Precision Construction Repair",
  url: SITE_URL,
  telephone: "+12514632089",
  email: "sales@precisionconstructionrepair.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7111 U.S. 45",
    addressLocality: "Eight Mile",
    addressRegion: "AL",
    addressCountry: "US",
  },
  areaServed: [
    "Eight Mile, AL",
    "Mobile, AL",
    "Prichard, AL",
    "Saraland, AL",
    "Chickasaw, AL",
    "Bayou La Batre, AL",
    "Pascagoula, MS",
    "Theodore, AL",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "07:00",
    closes: "15:30",
  },
  description:
    "Industrial maintenance, machining, welding, and fabrication services for steel and chemical manufacturing plants across the Gulf Coast.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${leagueSpartan.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSON_LD) }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
