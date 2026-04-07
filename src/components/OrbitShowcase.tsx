"use client";

const orbitItems = [
  {
    label: "Performance Marketing",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
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
    label: "Vertrauensaufbau",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    label: "Conversion Steigerung",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
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
    label: "Qualifizierte Anfragen",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
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
          <div className="flex justify-center mb-6">
            <span className="inline-block bg-accent/15 text-accent text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full">
              Unsere Methode
            </span>
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
            Sechs Faktoren für Ihren digitalen Erfolg.
          </p>
        </div>

        {/* Orbit visualization */}
        <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[480px] lg:max-w-[620px] aspect-square">
          {/* Orbit rings with green gradient */}
          <div className="absolute inset-[8%] rounded-full border border-accent/20" />
          <div className="absolute inset-[6%] rounded-full border border-dashed border-accent/8" />
          <div className="absolute inset-[22%] rounded-full border border-accent/12" />

          {/* Subtle green glow */}
          <div className="absolute inset-[30%] rounded-full bg-gradient-to-br from-accent/8 to-accent/3 blur-xl" />

          {/* Rotating container */}
          <div className="absolute inset-0 animate-orbit">
            {orbitItems.map((item, i) => {
              const angle = (i * 360) / orbitItems.length - 90;
              const rad = (angle * Math.PI) / 180;
              const radius = 46;
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
                  {/* Desktop/Tablet: full label */}
                  <div className="hidden sm:flex bg-white shadow-lg shadow-accent/5 border border-accent/15 rounded-xl px-4 py-3 items-center gap-2.5 whitespace-nowrap hover:shadow-xl hover:border-accent/40 transition-all duration-300 group cursor-default">
                    <div className="w-8 h-8 bg-gradient-to-br from-accent/15 to-accent/5 rounded-lg flex items-center justify-center text-accent shrink-0 group-hover:from-accent group-hover:to-accent-light group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <span className="text-xs font-semibold text-primary/70">{item.label}</span>
                  </div>
                  {/* Mobile: icon only */}
                  <div className="sm:hidden w-11 h-11 bg-white shadow-md border border-accent/15 rounded-full flex items-center justify-center text-accent">
                    {item.icon}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-accent/15 to-accent/5 rounded-full flex items-center justify-center border-2 border-accent/25 shadow-lg shadow-accent/10">
              <img
                src="/images/logos/logo.png"
                alt="Gründer Marketing Logo"
                className="w-14 sm:w-20 lg:w-24 h-auto"
              />
            </div>
          </div>
        </div>

        {/* Mobile labels */}
        <div className="flex flex-wrap justify-center gap-2 mt-8 sm:hidden">
          {orbitItems.map((item, i) => (
            <span key={i} className="bg-accent/10 text-accent text-[10px] font-semibold px-3 py-1.5 rounded-full">
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
