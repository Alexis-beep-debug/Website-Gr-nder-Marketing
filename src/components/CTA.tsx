export default function CTA() {
  return (
    <section id="kontakt" className="py-24 sm:py-32 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-md overflow-hidden">
          {/* Green gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent via-accent to-accent-light" />

          {/* Subtle decorative elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px]" />

          {/* Geometric circles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/[0.06] rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/[0.08] rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-white/[0.10] rounded-full" />

          {/* Floating dots */}
          <div className="absolute top-[15%] right-[20%] w-2 h-2 bg-white/20 rounded-full animate-pulse" />
          <div className="absolute bottom-[25%] left-[15%] w-3 h-3 bg-white/15 rounded-full animate-pulse" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-[40%] left-[25%] w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse" style={{ animationDelay: "3s" }} />

          {/* Accent lines */}
          <div className="absolute top-0 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          <div className="absolute bottom-0 left-[25%] right-[25%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="relative z-10 px-6 sm:px-10 md:px-16 py-16 sm:py-24 md:py-32 text-center">
            <span className="inline-block bg-white/10 text-white text-xs font-semibold tracking-wider uppercase px-5 py-2 rounded-full mb-8 backdrop-blur-sm border border-white/15">
              Jetzt starten
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-6 leading-tight max-w-3xl mx-auto">
              Handeln Sie jetzt, bevor Eigentümer & Käufer andere Makler wählen.
            </h2>

            <p className="text-white/60 text-base sm:text-lg mb-12 max-w-xl mx-auto leading-relaxed">
              Qualifizierte Kontaktanfragen von Verkäufern und Käufern für Ihr Maklergeschäft.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://calendly.com/business-gruender/analysegesprach-gruender-marketing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-accent px-8 sm:px-12 py-4 sm:py-5 rounded-sm text-base sm:text-lg font-semibold transition-all hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-0.5 w-full sm:w-auto text-center"
              >
                Termin buchen
              </a>
              <a
                href="mailto:info@marketing-gruender.de"
                className="border border-white/25 text-white/80 hover:bg-white/10 px-8 sm:px-12 py-4 sm:py-5 rounded-sm text-base sm:text-lg font-semibold transition-all hover:-translate-y-0.5 w-full sm:w-auto text-center"
              >
                E-Mail schreiben
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
