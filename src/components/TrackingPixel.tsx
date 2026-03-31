"use client";

import { useEffect } from "react";
import { trackPageView, trackClick, trackLead } from "@/lib/tracking";

export default function TrackingPixel() {
  useEffect(() => {
    // Track initial page view
    trackPageView();

    // Track hash changes (single-page navigation)
    const handleHashChange = () => trackPageView();
    window.addEventListener("hashchange", handleHashChange);

    // Track CTA clicks
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");
      const button = target.closest("button");
      const el = link || button;
      if (!el) return;

      // Determine section
      const section = el.closest("section")?.id || el.closest("[id]")?.id || "unknown";
      const label = el.textContent?.trim().slice(0, 50) || "unknown";

      // Track phone clicks
      if (link?.href?.startsWith("tel:")) {
        trackLead(section, "phone");
        trackClick("phone-link", section, label);
        return;
      }

      // Track email clicks
      if (link?.href?.startsWith("mailto:")) {
        trackLead(section, "email");
        trackClick("email-link", section, label);
        return;
      }

      // Track CTA button clicks
      if (
        el.classList.contains("bg-accent") ||
        el.classList.contains("bg-white") ||
        el.tagName === "BUTTON" ||
        (link?.href?.includes("#"))
      ) {
        trackClick(el.tagName.toLowerCase(), section, label);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  // Invisible tracking pixel
  return (
    <img
      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
      alt=""
      width={1}
      height={1}
      style={{ position: "absolute", top: 0, left: 0, opacity: 0, pointerEvents: "none" }}
      aria-hidden="true"
    />
  );
}
