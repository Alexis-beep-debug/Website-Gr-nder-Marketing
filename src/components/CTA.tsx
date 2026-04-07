export default function CTA() {
  return (
    <section id="kontakt" className="py-24 sm:py-32 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-md overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-light" />

          {/* Animated decorative elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: "6s" }} />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-accent/6 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: "8s", animationDelay: "2s" }} />

          {/* Geometric lines */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-white/[0.03] rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/[0.04] rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-white/[0.05] rounded-full" />

          {/* Floating accent dots */}
          <div className="absolute top-[15%] right-[20%] w-2 h-2 bg-accent/40 rounded-full animate-pulse" />
          <div className="absolute bottom-[25%] left-[15%] w-3 h-3 bg-accent/30 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-[40%] right-[10%] w-1.5 h-1.5 bg-accent-light/50 rounded-full animate-pulse" style={{ animationDelay: "3s" }} />

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }} />

          <div className="relative z-10 px-6 sm:px-10 md:px-16 py-16 sm:py-20 md:py-28 text-center">
            <span className="inline-block bg-white/10 text-accent-light text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm border border-white/10">
              Jetzt starten
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-6 leading-tight max-w-3xl mx-auto">
              Handeln Sie jetzt, bevor Eigentümer & Käufer{" "}
              <span className="text-accent-light">andere Makler</span>{" "}
              wählen.
            </h2>

            <p className="text-white/45 text-base sm:text-lg mb-10 sm:mb-12 max-w-xl mx-auto leading-relaxed">
              Qualifizierte Kontaktanfragen von Verkäufern und Käufern
              für Ihr Maklergeschäft.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://calendly.com/business-gruender/analysegesprach-gruender-marketing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent hover:bg-accent-light text-white px-8 sm:px-10 py-4 rounded-sm text-base sm:text-lg font-semibold transition-all hover:shadow-2xl hover:shadow-accent/40 hover:-translate-y-0.5 w-full sm:w-auto text-center"
              >
                Termin buchen
              </a>
              <a
                href="mailto:info@marketing-gruender.de"
                className="border border-white/15 text-white/60 hover:border-accent hover:text-accent px-8 sm:px-10 py-4 rounded-sm text-base sm:text-lg font-semibold transition-all hover:-translate-y-0.5 w-full sm:w-auto text-center"
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
