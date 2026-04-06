"use client";

const orbitItems = [
  {
    label: "Zielgruppenanalyse",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    label: "Zielgruppenverständnis",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    label: "Emotionale Ansprache",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    label: "Performance Marketing",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    label: "Funnel-Optimierung",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
      </svg>
    ),
  },
  {
    label: "Conversion-Steigerung",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
];

export default function OrbitShowcase() {
  return (
    <section className="py-24 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex flex-col items-center gap-1.5 mb-6">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary/40">
              Unsere Methode
            </span>
            <div className="w-10 h-0.5 bg-accent" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary leading-tight">
            So{" "}
            <em
              style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 600 }}
              className="text-accent"
            >
              arbeiten
            </em>
            {" "}wir
          </h2>
          <p className="mt-4 text-primary/50 text-lg max-w-xl mx-auto">
            Sechs Faktoren, die Ihren Erfolg im digitalen Marketing sichern.
          </p>
        </div>

        {/* Orbit visualization - desktop only */}
        <div className="relative mx-auto w-full max-w-[600px] aspect-square hidden lg:block">
          {/* Orbit rings */}
          <div className="absolute inset-[10%] rounded-full border border-dashed border-accent/15" />
          <div className="absolute inset-[25%] rounded-full border border-dashed border-accent/10" />

          {/* Rotating container */}
          <div className="absolute inset-0 animate-orbit">
            {orbitItems.map((item, i) => {
              const angle = (i * 360) / orbitItems.length - 90;
              const rad = (angle * Math.PI) / 180;
              const radius = 44;
              const x = 50 + radius * Math.cos(rad);
              const y = 50 + radius * Math.sin(rad);

              return (
                <div
                  key={i}
                  className="absolute animate-orbit-counter"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                  }}
                >
                  <div className="bg-white shadow-lg shadow-black/5 border border-black/5 rounded-xl px-4 py-3 flex items-center gap-2.5 whitespace-nowrap hover:shadow-xl hover:border-accent/30 transition-all duration-300 group cursor-default">
                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <span className="text-xs font-semibold text-primary/70">{item.label}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-32 h-32 sm:w-40 sm:h-40 bg-accent/10 rounded-full flex items-center justify-center border-2 border-accent/20">
              <img
                src="/images/logos/logo.png"
                alt="Gründer Marketing Logo"
                className="w-20 sm:w-24 h-auto"
              />
            </div>
          </div>
        </div>

        {/* Mobile/Tablet fallback: Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:hidden">
          {orbitItems.map((item, i) => (
            <div
              key={i}
              className="bg-white shadow-sm border border-black/5 rounded-xl p-4 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent shrink-0">
                {item.icon}
              </div>
              <span className="text-xs font-semibold text-primary/70">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
