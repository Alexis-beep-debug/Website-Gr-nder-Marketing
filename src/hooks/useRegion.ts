"use client";

import { useState, useEffect } from "react";

export function useRegion() {
  const [region, setRegion] = useState<string | null>(null);

  useEffect(() => {
    // Check sessionStorage first to avoid repeated API calls
    const cached = sessionStorage.getItem("visitor_region");
    if (cached) {
      setRegion(cached === "null" ? null : cached);
      return;
    }

    fetch("/api/geo")
      .then((res) => res.json())
      .then((data) => {
        const r = data.region || null;
        sessionStorage.setItem("visitor_region", r || "null");
        setRegion(r);
      })
      .catch(() => {
        sessionStorage.setItem("visitor_region", "null");
      });
  }, []);

  return region;
}
