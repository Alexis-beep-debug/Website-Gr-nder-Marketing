"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#f5f5f5]"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/team/malte-deckblatt-neu.png"
          alt="Malte-Valentin Gründer"
          className="w-full h-full object-cover object-[70%_center]"
        />
      </div>

      {/* Subtle overlay for cohesion */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#f5f5f5] via-[#f5f5f5]/85 via-45% to-[#f5f5f5]/20 lg:to-transparent" />
      <div className="absolute inset-0 bg-[#f5f5f5]/10" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Badge */}
            <div className="mb-8 animate-fade-in">
              <span className="inline-block bg-accent text-white text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-sm">
                Für Immobilienmakler
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-primary/85 leading-[1.12] mb-6 animate-fade-in-up">
              Jeden Monat neue{" "}
              <em
                style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 600 }}
                className="text-accent"
              >
                Alleinaufträge
              </em>
              {" "}sichern.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-primary/50 leading-relaxed mb-10 max-w-lg animate-fade-in-up animation-delay-200">
              Eigentümer kommen aktiv auf Sie zu und wollen verkaufen. Unser
              digitales System macht Sie in Ihrer Region sichtbar und generiert
              qualifizierte Anfragen auf Autopilot.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
              <a
                href="https://calendly.com/business-gruender/analysegesprach-gruender-marketing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-primary hover:bg-primary/85 text-white px-7 py-4 rounded-sm text-base font-semibold transition-all hover:shadow-xl hover:shadow-primary/15 hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>
                Kostenlose Analyse sichern
              </a>
              <a
                href="#loesung"
                className="inline-flex items-center justify-center gap-2 border border-primary/15 text-primary/60 hover:border-accent hover:text-accent px-7 py-4 rounded-sm text-base font-semibold transition-all"
              >
                Mehr erfahren
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </a>
            </div>

            {/* Trust */}
            <div className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-primary/5 animate-fade-in-up animation-delay-600">
              <div className="text-center">
                <span className="block text-2xl font-bold text-accent">30+</span>
                <span className="text-[10px] text-primary/40 uppercase tracking-wider">Anfragen/Monat</span>
              </div>
              <div className="w-px h-8 bg-primary/10" />
              <div className="text-center">
                <span className="block text-2xl font-bold text-accent">100%</span>
                <span className="text-[10px] text-primary/40 uppercase tracking-wider">Individuell</span>
              </div>
              <div className="w-px h-8 bg-primary/10" />
              <div className="text-center">
                <span className="block text-2xl font-bold text-accent">KI</span>
                <span className="text-[10px] text-primary/40 uppercase tracking-wider">Gestützt</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
