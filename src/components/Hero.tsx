export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-accent px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Für Immobilienmakler
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up">
            Jeden Monat neue{" "}
            <span className="text-accent">Alleinaufträge</span> – planbar und
            digital.
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl animate-fade-in-up animation-delay-200">
            Ohne auf Empfehlungen, Netzwerk oder Kaltakquise zu warten. Wir
            bauen Ihnen ein digitales System, das Sie in Ihrer Region sichtbar
            macht und Ihnen kontinuierlich neue Eigentümeranfragen liefert.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
            <a
              href="#kontakt"
              className="bg-accent hover:bg-accent-light text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:shadow-xl hover:shadow-accent/30 text-center"
            >
              Kostenloses Erstgespräch
            </a>
            <a
              href="#loesung"
              className="border-2 border-white/20 text-white hover:border-accent hover:text-accent px-8 py-4 rounded-xl text-lg font-semibold transition-all text-center"
            >
              Mehr erfahren
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center gap-8 mt-14 pt-8 border-t border-white/10 animate-fade-in-up animation-delay-600">
            <div className="text-center">
              <span className="block text-2xl font-bold text-accent">10+</span>
              <span className="text-xs text-white/50 uppercase tracking-wider">
                Jahre Erfahrung
              </span>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <span className="block text-2xl font-bold text-accent">100%</span>
              <span className="text-xs text-white/50 uppercase tracking-wider">
                Individuelle Strategie
              </span>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <span className="block text-2xl font-bold text-accent">KI</span>
              <span className="text-xs text-white/50 uppercase tracking-wider">
                Gestütztes Marketing
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/40"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
