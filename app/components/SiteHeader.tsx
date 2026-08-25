"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/pcr-logo.png";

const NAV_LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/#safety", label: "Safety" },
  { href: "/#about", label: "About" },
  { href: "/#service-area", label: "Service Area" },
  { href: "/careers", label: "Careers" },
  { href: "/#contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/#top" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex items-center rounded-md bg-night p-1.5">
            <Image
              src={logo}
              alt="Precision Construction Repair"
              className="h-9 w-auto sm:h-10"
              priority
            />
          </span>
          <span className="hidden font-display text-base font-bold uppercase leading-tight tracking-tight text-ink sm:block">
            Precision
            <br />
            Construction Repair
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-brand-dark"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:12513957447"
            className="text-sm font-semibold text-ink-soft transition-colors hover:text-brand-dark"
          >
            (251) 395-7447
          </a>
          <Link
            href="/quote"
            className="rounded-sm bg-night px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-deep"
          >
            Get a Quote
          </Link>
        </div>

        <button
          type="button"
          className="flex flex-col gap-1.5 p-2 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-0.5 w-6 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-6 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-paper px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-ink-soft"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:12513957447" className="text-base font-semibold text-ink">
              (251) 395-7447
            </a>
            <Link
              href="/quote"
              className="mt-2 rounded-sm bg-night px-5 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
