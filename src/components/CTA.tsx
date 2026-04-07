export default function CTA() {
  return (
    <section id="kontakt" className="py-24 sm:py-32 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-md overflow-hidden">
          {/* Background with gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-light" />

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/8 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/[0.03] rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/[0.05] rounded-full" />

          <div className="relative z-10 px-6 sm:px-10 md:px-16 py-16 sm:py-20 md:py-24 text-center">
            <span className="inline-block bg-white/10 text-accent-light text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
              Jetzt starten
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-6 leading-tight max-w-3xl mx-auto">
              Handeln Sie jetzt, bevor Eigentümer & Käufer{" "}
              <span className="text-accent-light">andere Makler</span>{" "}
              wählen.
            </h2>

            <p className="text-white/50 text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Qualifizierte Kontaktanfragen von Verkäufern und Käufern
              für Ihr Maklergeschäft.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://calendly.com/business-gruender/analysegesprach-gruender-marketing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent hover:bg-accent-light text-white px-8 sm:px-10 py-4 rounded-sm text-base sm:text-lg font-semibold transition-all hover:shadow-xl hover:shadow-accent/30 w-full sm:w-auto text-center"
              >
                Termin buchen
              </a>
              <a
                href="mailto:info@marketing-gruender.de"
                className="border border-white/15 text-white/70 hover:border-accent hover:text-accent px-8 sm:px-10 py-4 rounded-sm text-base sm:text-lg font-semibold transition-all w-full sm:w-auto text-center"
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
