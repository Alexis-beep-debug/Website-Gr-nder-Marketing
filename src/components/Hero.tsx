export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-light min-h-screen flex items-center overflow-hidden"
    >
      {/* Very subtle green tint top-right */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-accent/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">

          {/* ── LEFT: Text ─────────────────────────────────── */}
          <div className="order-2 lg:order-1 flex flex-col justify-center">

            {/* Label */}
            <div className="flex flex-col gap-1.5 mb-10 animate-fade-in">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary/50">
                Für Immobilienmakler
              </span>
              <div className="w-10 h-0.5 bg-accent" />
            </div>

            {/* Headline – mixed typography */}
            <h1 className="text-5xl sm:text-6xl lg:text-[3.75rem] xl:text-7xl font-extrabold text-primary leading-[1.05] mb-8 animate-fade-in-up">
              Jeden Monat neue{" "}
              <br className="hidden sm:block" />
              <em
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontWeight: 600,
                }}
                className="text-accent not-italic"
              >
                Alleinaufträge
              </em>{" "}
              –
              <br className="hidden sm:block" />
              planbar und digital.
            </h1>

            {/* Subtext */}
            <p className="text-lg text-primary/55 leading-relaxed mb-10 max-w-xl animate-fade-in-up animation-delay-200">
              Ohne auf Empfehlungen, Netzwerk oder Kaltakquise zu warten.{" "}
              <span className="text-primary/80 font-medium">
                Wir bauen Ihnen ein digitales System,
              </span>{" "}
              das Sie in Ihrer Region sichtbar macht und Ihnen jeden Monat neue
              Eigentümeranfragen liefert.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
              <a
                href="#kontakt"
                className="group inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all hover:shadow-xl hover:shadow-primary/15 hover:-translate-y-0.5"
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
                className="inline-flex items-center justify-center gap-2 border border-primary/15 text-primary/70 hover:border-accent hover:text-accent px-8 py-4 rounded-xl text-base font-semibold transition-all"
              >
                Wie es funktioniert
              </a>
            </div>

            {/* Trust stats */}
            <div className="flex flex-wrap items-center gap-8 mt-14 pt-8 border-t border-primary/8 animate-fade-in-up animation-delay-600">
              {[
                { value: "10+", label: "Jahre Erfahrung" },
                { value: "100%", label: "Individuelle Strategie" },
                { value: "KI", label: "Gestütztes Marketing" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6">
                  {i > 0 && <div className="w-px h-8 bg-primary/10 hidden sm:block" />}
                  <div>
                    <span
                      className="block text-2xl font-bold text-primary"
                      style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
                    >
                      {item.value}
                    </span>
                    <span className="text-xs text-primary/40 uppercase tracking-wider">
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Visual ──────────────────────────────── */}
          <div className="order-1 lg:order-2 relative flex items-center justify-center animate-fade-in">

            {/* Main image card */}
            <div className="relative w-full max-w-sm lg:max-w-none">

              {/* Placeholder – to be replaced with real photo */}
              <div className="aspect-[3/4] bg-section-alt rounded-2xl overflow-hidden relative shadow-2xl shadow-primary/10">
                {/* Green accent stripe */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />

                {/* Inner content placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-primary/20 p-8">
                  <svg className="w-16 h-16 opacity-30" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                  <p className="text-sm text-center font-medium opacity-50">
                    Foto von Malte-Valentin Gründer
                  </p>
                </div>
              </div>

              {/* Floating card – trust indicator */}
              <div className="absolute -bottom-5 -left-5 sm:-left-10 bg-white rounded-xl shadow-xl shadow-primary/10 px-5 py-4 flex items-center gap-3 border border-primary/5">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-primary">Geprüfte Strategie</p>
                  <p className="text-xs text-primary/50">Für Immobilienmakler</p>
                </div>
              </div>

              {/* Floating card – stat */}
              <div className="absolute -top-5 -right-5 sm:-right-8 bg-white rounded-xl shadow-xl shadow-primary/10 px-5 py-4 border border-primary/5">
                <p
                  className="text-3xl font-bold text-accent"
                  style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
                >
                  +47
                </p>
                <p className="text-xs text-primary/50 mt-0.5">Neue Anfragen / Monat*</p>
              </div>

              {/* Green dot decoration */}
              <div className="absolute top-1/2 -right-6 w-3 h-3 bg-accent rounded-full hidden lg:block" />
              <div className="absolute top-1/2 -right-10 w-1.5 h-1.5 bg-accent/40 rounded-full hidden lg:block mt-5" />
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <svg className="w-5 h-5 text-primary/25" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </section>
  );
}
