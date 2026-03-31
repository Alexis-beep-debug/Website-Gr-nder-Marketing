export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-light min-h-screen flex flex-col overflow-hidden"
    >
      {/* Subtle green tint */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-accent/5 rounded-full blur-[160px] pointer-events-none" />

      {/* ── Main content ───────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex items-center pt-32 pb-16">
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
            <h1 className="text-5xl sm:text-6xl lg:text-[3.6rem] xl:text-7xl font-bold text-primary leading-[1.08] mb-8 animate-fade-in-up">
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
                { value: "3+", label: "Jahre am Markt" },
                { value: "100%", label: "Individuelle Strategie" },
                { value: "KI", label: "Gestütztes Marketing" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6">
                  {i > 0 && <div className="w-px h-8 bg-primary/8 hidden sm:block" />}
                  <div>
                    <span className="block text-2xl font-bold text-primary">
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

              {/* Floating card – bottom left: Google Review */}
              <div className="absolute -bottom-5 -left-5 sm:-left-8 bg-white rounded-xl shadow-lg shadow-primary/8 px-4 py-3.5 flex items-center gap-3 border border-primary/5">
                <div className="w-9 h-9 shrink-0 flex items-center justify-center">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-0.5 mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[11px] font-semibold text-primary leading-tight">5,0 auf Google</p>
                </div>
              </div>

              {/* Floating card – top right */}
              <div className="absolute -top-5 -right-5 sm:-right-8 bg-white rounded-xl shadow-lg shadow-primary/8 px-4 py-3.5 border border-primary/5 text-center z-20">
                <p className="text-2xl font-bold text-accent leading-none">
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
