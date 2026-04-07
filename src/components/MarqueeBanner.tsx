"use client";

const pillTags = [
  "Meta Ads",
  "Lead-Generierung",
  "Alleinaufträge",
  "Immobilienmakler",
  "Facebook Kampagnen",
  "Eigentümerakquise",
  "Instagram Werbung",
  "Landingpages",
  "Regionale Sichtbarkeit",
  "Digitales Marketing",
  "Makler Funnels",
  "Objektakquise",
];

export default function MarqueeBanner() {
  return (
    <div className="relative w-full overflow-hidden bg-[#f5f5f5] py-5 select-none border-y border-primary/5">
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-20 bg-gradient-to-r from-[#f5f5f5] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-20 bg-gradient-to-l from-[#f5f5f5] to-transparent z-10 pointer-events-none" />

      <div
        style={{
          display: "flex",
          gap: "8px",
          width: "max-content",
          animation: "marquee 30s linear infinite",
        }}
      >
        {[...pillTags, ...pillTags].map((tag, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
            <span className="w-1.5 h-1.5 rounded-full bg-accent/40" />
            <span className="border border-accent/15 text-primary/55 bg-white px-4 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap">
              {tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
