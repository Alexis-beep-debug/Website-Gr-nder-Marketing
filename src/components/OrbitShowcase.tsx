import Logo from "@/components/Logo";

const orbitItems = [
  { label: "Website-Projekt", placeholder: "Makler\nWebsite" },
  { label: "Facebook Kampagne", placeholder: "Facebook\nAds" },
  { label: "Landing Page", placeholder: "Landing\nPage" },
  { label: "Instagram Ads", placeholder: "Instagram\nAds" },
  { label: "Lead-Funnel", placeholder: "Lead\nFunnel" },
  { label: "SEO-Strategie", placeholder: "SEO\nStrategie" },
];

export default function OrbitShowcase() {
  return (
    <section className="relative bg-[#f0f5f3] py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex flex-col items-center gap-1.5 mb-6">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary/40">
              Unsere Ergebnisse
            </span>
            <div className="w-10 h-0.5 bg-accent" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary leading-tight">
            Projekte die{" "}
            <em
              style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 600 }}
              className="text-accent"
            >
              wirken
            </em>
          </h2>
          <p className="mt-4 text-primary/50 text-lg max-w-xl mx-auto">
            Ein Blick auf unsere Arbeiten – von Webseiten über Kampagnen bis hin zu kompletten Funnels.
          </p>
        </div>

        {/* Orbit container */}
        <div className="relative w-full max-w-[320px] sm:max-w-lg md:max-w-2xl mx-auto aspect-square">

          {/* Center element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 bg-white rounded-full shadow-xl shadow-primary/8 flex items-center justify-center border border-primary/5">
              <Logo size="small" />
            </div>
          </div>

          {/* Orbit ring */}
          <div className="absolute inset-4 sm:inset-6 md:inset-10 rounded-full border border-dashed border-primary/8" />

          {/* Orbiting items */}
          <div className="absolute inset-0 animate-orbit">
            {orbitItems.map((item, i) => {
              const angle = (360 / orbitItems.length) * i;
              return (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    transform: `rotate(${angle}deg) translateX(min(36vw, 220px)) rotate(-${angle}deg)`,
                  }}
                >
                  {/* Counter-rotate to keep content upright */}
                  <div className="animate-orbit-counter -translate-x-1/2 -translate-y-1/2">
                    <div className="group relative">
                      {/* Card */}
                      <div className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white rounded-xl sm:rounded-xl shadow-lg shadow-primary/6 border border-primary/5 flex flex-col items-center justify-center gap-0.5 sm:gap-1 transition-all group-hover:shadow-xl group-hover:scale-110 group-hover:border-accent/30 cursor-pointer">
                        {/* Placeholder icon */}
                        <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-accent/10 rounded-md sm:rounded-lg flex items-center justify-center">
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            {i % 3 === 0 ? (
                              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
                            ) : i % 3 === 1 ? (
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                            ) : (
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                            )}
                          </svg>
                        </div>
                        <span className="text-[7px] sm:text-[9px] md:text-[10px] font-semibold text-primary/60 text-center leading-tight whitespace-pre-line px-0.5">
                          {item.placeholder}
                        </span>
                      </div>

                      {/* Tooltip – hidden on mobile */}
                      <div className="hidden sm:block absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        <span className="bg-primary text-white text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap">
                          {item.label}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom text */}
        <p className="text-center text-primary/30 text-sm mt-12">
          Unsere Projekte – individuell für jeden Kunden umgesetzt.
        </p>
      </div>
    </section>
  );
}
