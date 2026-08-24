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

export const metadata: Metadata = {
  metadataBase: new URL("https://precisionconstructionrepair.com"),
  title: {
    default: "Precision Construction Repair | Industrial Maintenance, Machining & Welding",
    template: "%s | Precision Construction Repair",
  },
  description:
    "Precision Construction Repair provides industrial maintenance, machining, and welding services to large manufacturing clients, with deep experience in steel and chemical manufacturing, from Eight Mile, AL and the greater Mobile area.",
  openGraph: {
    title: "Precision Construction Repair",
    description:
      "Industrial maintenance, machining & welding for steel and chemical manufacturing clients across the Gulf Coast.",
    url: "https://precisionconstructionrepair.com",
    siteName: "Precision Construction Repair",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${leagueSpartan.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
