"use client";

import { useEffect } from "react";
import { trackContactClick } from "@/app/lib/track";

/**
 * Sends a GA4 event for every tel: and mailto: link click on the site,
 * including links added later, without wiring each link individually.
 */
export default function ContactClickTracker() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const link = (event.target as Element | null)?.closest?.('a[href^="tel:"], a[href^="mailto:"]');
      if (!link) return;
      const kind = link.getAttribute("href")!.startsWith("tel:") ? "phone_click" : "email_click";
      const area = link.closest("header, footer, section[id]");
      const section = area ? (area.id || area.tagName.toLowerCase()) : "page";
      trackContactClick(kind, section);
    }
    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, []);

  return null;
}
