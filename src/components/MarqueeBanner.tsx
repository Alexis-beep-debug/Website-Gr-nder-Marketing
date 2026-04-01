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
  const tags = [...pillTags, ...pillTags];

  return (
    <div className="relative w-full overflow-hidden bg-[#f5f5f5] py-5 select-none border-y border-primary/5">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#f5f5f5] to-transparent z-10 pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#f5f5f5] to-transparent z-10 pointer-events-none" />

      <div className="flex items-center gap-3 w-max animate-marquee">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="shrink-0 inline-flex items-center gap-2 border border-accent/15 text-primary/50 bg-white px-4 py-1.5 rounded-sm text-sm font-medium whitespace-nowrap"
          >
            {i % 3 === 1 && (
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
            )}
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
