export default function CTA() {
  return (
    <section id="kontakt" className="py-24 sm:py-32 bg-section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-accent/[0.06] border border-accent/15 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-16 text-center relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/8 rounded-full blur-3xl" />

          <div className="relative z-10">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Jetzt starten
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-3 mb-4 sm:mb-6 leading-tight">
              Handeln Sie jetzt, bevor sich
              <br className="hidden sm:block" /> Eigentümer & Käufer{" "}
              <span className="text-accent">für andere Makler</span>{" "}
              entscheiden!
            </h2>
            <p className="text-primary/55 text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
              Wir liefern Ihnen qualifizierte Kontaktanfragen von Verkäufern und
              Käufern. Sichern Sie sich jetzt Ihr kostenloses Erstgespräch.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+491754024912"
                className="bg-accent hover:bg-accent-light text-white px-6 sm:px-10 py-3.5 sm:py-4 rounded-xl text-base sm:text-lg font-semibold transition-all hover:shadow-xl hover:shadow-accent/30 flex items-center justify-center gap-3 w-full sm:w-auto"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Jetzt anrufen
              </a>
              <a
                href="mailto:info@marketing-gruender.de"
                className="border-2 border-accent/20 text-primary/70 hover:border-accent hover:text-accent px-6 sm:px-10 py-3.5 sm:py-4 rounded-xl text-base sm:text-lg font-semibold transition-all flex items-center justify-center gap-3 w-full sm:w-auto"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                E-Mail schreiben
              </a>
            </div>

            <p className="text-primary/30 text-sm mt-8">
              Kostenloses Erstgespräch &middot; Unverbindlich &middot; Individuelle Analyse
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
