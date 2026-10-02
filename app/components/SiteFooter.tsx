import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/pcr-logo.png";
import rStampSeal from "@/public/images/r-stamp-seal.svg";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-night text-white/60">
      <div className="mx-auto flex max-w-6xl items-center gap-4 border-b border-white/10 px-6 py-6 lg:px-8">
        <Image
          src={rStampSeal}
          alt="National Board of Boiler and Pressure Vessel Inspectors R Stamp"
          className="h-24 w-auto shrink-0"
        />
        <p className="max-w-xs text-sm leading-snug">
          National Board &ldquo;R&rdquo; Stamp certified for metallic repairs and alterations to boilers
          and pressure vessels
        </p>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <Image src={logo} alt="Precision Construction Repair" className="h-8 w-auto" />
          <p>&copy; {year} Precision Construction Repair &mdash; All Rights Reserved.</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 whitespace-nowrap">
          <Link href="/#top" className="transition-colors hover:text-white">
            Back to top
          </Link>
          <Link href="/#services" className="transition-colors hover:text-white">
            Services
          </Link>
          <Link href="/quote" className="transition-colors hover:text-white">
            Get a Quote
          </Link>
          <Link href="/careers" className="transition-colors hover:text-white">
            Careers
          </Link>
          <Link href="/#contact" className="transition-colors hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
