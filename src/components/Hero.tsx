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

export default function Hero() {
  // Duplicate for seamless loop
  const tags = [...pillTags, ...pillTags];

  return (
    <section
      id="hero"
      className="relative bg-light min-h-screen flex flex-col overflow-hidden"
    >
      {/* Subtle green tint */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-accent/5 rounded-full blur-[160px] pointer-events-none" />

      {/* ── Scrolling pill marquee ──────────────────────── */}
      <div className="relative w-full overflow-hidden pt-24 pb-0 select-none">
        <div className="flex items-center gap-3 w-max animate-marquee-slow">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="shrink-0 inline-flex items-center gap-2 border border-primary/10 text-primary/50 bg-white px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap"
            >
              {i % 3 === 1 && (
                <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
              )}
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ── Main content ───────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex items-center py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">

          {/* LEFT: Text */}
          <div className="order-2 lg:order-1 flex flex-col justify-center">

            {/* Label */}
            <div className="flex flex-col gap-1.5 mb-8 animate-fade-in">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary/40">
                Für Immobilienmakler
              </span>
              <div className="w-10 h-0.5 bg-accent" />
            </div>

            {/* Headline – mixed typography */}
            <h1 className="text-5xl sm:text-6xl lg:text-[3.6rem] xl:text-7xl font-extrabold text-primary leading-[1.05] mb-8 animate-fade-in-up">
              Jeden Monat{" "}
              <br className="hidden sm:block" />
              neue{" "}
              <em
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontWeight: 600,
                }}
                className="text-accent not-italic"
              >
                Alleinaufträge
              </em>
              {" "}–
              <br className="hidden sm:block" />
              planbar und digital.
            </h1>

            {/* Subtext */}
            <p className="text-lg text-primary/50 leading-relaxed mb-10 max-w-xl animate-fade-in-up animation-delay-200">
              Ohne auf Empfehlungen, Netzwerk oder Kaltakquise zu warten.{" "}
              <span className="text-primary/75 font-medium">
                Wir bauen Ihnen ein digitales System,
              </span>{" "}
              das Sie in Ihrer Region sichtbar macht und Ihnen kontinuierlich
              neue Eigentümeranfragen liefert.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
              <a
                href="#kontakt"
                className="group inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/85 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all hover:shadow-xl hover:shadow-primary/15 hover:-translate-y-0.5"
              >
                Kostenloses Erstgespräch
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="#loesung"
                className="inline-flex items-center justify-center gap-2 border border-primary/12 text-primary/60 hover:border-accent hover:text-accent px-8 py-4 rounded-xl text-base font-semibold transition-all"
              >
                Wie es funktioniert
              </a>
            </div>

            {/* Trust stats */}
            <div className="flex flex-wrap items-center gap-8 mt-12 pt-8 border-t border-primary/8 animate-fade-in-up animation-delay-600">
              {[
                { value: "10+", label: "Jahre Erfahrung" },
                { value: "100%", label: "Individuelle Strategie" },
                { value: "KI", label: "Gestütztes Marketing" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6">
                  {i > 0 && <div className="w-px h-8 bg-primary/8 hidden sm:block" />}
                  <div>
                    <span
                      className="block text-2xl font-bold text-primary"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontStyle: "italic",
                      }}
                    >
                      {item.value}
                    </span>
                    <span className="text-xs text-primary/35 uppercase tracking-wider">
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Visual */}
          <div className="order-1 lg:order-2 relative flex items-center justify-center animate-fade-in">
            <div className="relative w-full max-w-sm lg:max-w-none">

              {/* Malte photo */}
              <div className="aspect-[3/4] bg-section-alt rounded-2xl overflow-hidden relative shadow-2xl shadow-primary/8">
                <div className="absolute top-0 left-0 right-0 h-1 bg-accent z-10" />
                <img
                  src="/images/team/malte-gruender.jpeg"
                  alt="Malte-Valentin Gründer – Gründer Marketing"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Floating card – bottom left */}
              <div className="absolute -bottom-5 -left-5 sm:-left-8 bg-white rounded-xl shadow-lg shadow-primary/8 px-4 py-3.5 flex items-center gap-3 border border-primary/5">
                <div className="w-9 h-9 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-primary leading-tight">Geprüfte Strategie</p>
                  <p className="text-xs text-primary/40">Für Immobilienmakler</p>
                </div>
              </div>

              {/* Floating card – top right */}
              <div className="absolute -top-5 -right-5 sm:-right-8 bg-white rounded-xl shadow-lg shadow-primary/8 px-4 py-3.5 border border-primary/5 text-center">
                <p
                  className="text-2xl font-bold text-accent leading-none"
                  style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
                >
                  +47
                </p>
                <p className="text-[11px] text-primary/40 mt-1">Anfragen/Monat*</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="pb-8 flex justify-center animate-bounce">
        <svg className="w-5 h-5 text-primary/20" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </section>
  );
}
