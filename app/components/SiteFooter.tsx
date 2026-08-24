import Image from "next/image";
import logo from "@/public/images/pcr-logo.png";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-night text-white/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <Image src={logo} alt="Precision Construction Repair" className="h-8 w-auto" />
          <p>&copy; {year} Precision Construction Repair &mdash; All Rights Reserved.</p>
        </div>
        <div className="flex gap-6">
          <a href="#top" className="transition-colors hover:text-white">
            Back to top
          </a>
          <a href="#services" className="transition-colors hover:text-white">
            Services
          </a>
          <a href="#contact" className="transition-colors hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
