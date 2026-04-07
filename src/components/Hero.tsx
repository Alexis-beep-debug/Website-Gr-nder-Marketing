"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
    >
      {/* Background image - desktop only */}
      <div className="absolute inset-0 hidden lg:block">
        <img
          src="/images/team/malte-deckblatt-neu.png"
          alt="Malte-Valentin Gründer"
          className="w-full h-full object-cover object-[70%_center]"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 via-45% to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="mb-8 animate-fade-in">
              <span className="inline-block bg-accent text-white text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-sm">
                Für Immobilienmakler
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-primary/85 leading-[1.12] mb-6 animate-fade-in-up">
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
            <p className="text-base sm:text-lg text-primary/50 leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0 animate-fade-in-up animation-delay-200">
              Eigentümer kommen aktiv auf Sie zu und wollen verkaufen. Unser
              digitales System macht Sie in Ihrer Region sichtbar und generiert
              qualifizierte Anfragen auf Autopilot.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400 justify-center lg:justify-start">
              <a
                href="https://calendly.com/business-gruender/analysegesprach-gruender-marketing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary/85 text-white px-7 py-4 rounded-sm text-base font-semibold transition-all hover:shadow-xl hover:shadow-primary/15 hover:-translate-y-0.5"
              >
                Kostenlose Analyse sichern
              </a>
              <a
                href="#loesung"
                className="inline-flex items-center justify-center border border-primary/15 text-primary/60 hover:border-accent hover:text-accent px-7 py-4 rounded-sm text-base font-semibold transition-all"
              >
                Mehr erfahren
              </a>
            </div>
          </div>

          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
