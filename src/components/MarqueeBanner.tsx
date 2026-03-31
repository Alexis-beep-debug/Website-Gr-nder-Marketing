const items = [
  "Meta Ads",
  "Lead-Generierung",
  "Alleinaufträge",
  "Facebook Kampagnen",
  "Instagram Werbung",
  "Eigentümerakquise",
  "Landingpages",
  "Regionale Sichtbarkeit",
  "Makler Funnels",
  "Objektakquise",
  "Digitales Marketing",
  "Conversion Optimierung",
];

const Dot = () => (
  <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-accent/60 mx-1" />
);

export default function MarqueeBanner() {
  const doubled = [...items, ...items];

  return (
    <div className="relative w-full overflow-hidden bg-primary py-5 select-none border-y border-white/5">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />

      <div className="flex items-center w-max animate-marquee">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-4 shrink-0"
          >
            <span className="text-sm font-semibold text-white/70 uppercase tracking-widest whitespace-nowrap px-2">
              {item}
            </span>
            <Dot />
          </span>
        ))}
      </div>
    </div>
  );
}
