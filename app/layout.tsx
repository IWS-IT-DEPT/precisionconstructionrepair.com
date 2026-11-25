import type { Metadata } from "next";
import { Inter, League_Spartan } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import ContactClickTracker from "./components/ContactClickTracker";

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
    "Industrial maintenance, machining, welding & fabrication for steel and chemical manufacturing plants across the Gulf Coast, concentrated along the US-43 corridor between Mobile and Jackson, AL.",
  keywords: [
    "industrial maintenance",
    "industrial machining",
    "industrial welding",
    "millwright services",
    "structural steel repair",
    "steel manufacturing contractor",
    "chemical plant maintenance",
    "shutdown and turnaround services",
    "Gulf Coast industrial contractor",
    "Mobile Alabama industrial contractor",
    "US-43 industrial corridor",
    "Jackson Alabama industrial contractor",
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Precision Construction Repair",
    description:
      "Industrial maintenance, machining & welding for steel and chemical manufacturing clients across the Gulf Coast, concentrated along the US-43 corridor between Mobile and Jackson, AL.",
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
      "Industrial maintenance, machining & welding for steel and chemical manufacturing clients across the Gulf Coast, concentrated along the US-43 corridor between Mobile and Jackson, AL.",
    images: ["/opengraph-image"],
  },
};

const LOCAL_BUSINESS_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": `${SITE_URL}/#organization`,
  name: "Precision Construction Repair",
  url: SITE_URL,
  telephone: "+12513957447",
  email: "sales@precisionconstructionrepair.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7111 U.S. 45",
    addressLocality: "Eight Mile",
    addressRegion: "AL",
    addressCountry: "US",
  },
  areaServed: [
    "Mobile, AL",
    "Saraland, AL",
    "Chickasaw, AL",
    "Creola, AL",
    "Calvert, AL",
    "Jackson, AL",
    "Bayou La Batre, AL",
    "Pascagoula, MS",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "07:00",
    closes: "15:30",
  },
  description:
    "Industrial maintenance, machining, welding, and fabrication services for steel and chemical manufacturing plants across the Gulf Coast, concentrated along the US-43 industrial corridor between Mobile and Jackson, Alabama.",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSON_LD) }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <ContactClickTracker />
        <Analytics />
        <SpeedInsights />
      </body>
      <GoogleAnalytics gaId="G-6B4SJM9KX4" />
    </html>
  );
}
