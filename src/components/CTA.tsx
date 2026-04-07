export default function CTA() {
  return (
    <section id="kontakt" className="py-24 sm:py-32 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-md overflow-hidden">
          {/* Dark gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#1a1a1a]" />

          {/* Animated accent glow */}
          <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-accent/12 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: "5s" }} />
          <div className="absolute bottom-[-30%] left-[-15%] w-[400px] h-[400px] bg-accent/8 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: "7s", animationDelay: "2s" }} />

          {/* Geometric circles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/[0.02] rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/[0.03] rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/[0.04] rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-white/[0.05] rounded-full" />

          {/* Floating dots */}
          <div className="absolute top-[12%] right-[18%] w-2 h-2 bg-accent/50 rounded-full animate-pulse" />
          <div className="absolute bottom-[20%] left-[12%] w-3 h-3 bg-accent/30 rounded-full animate-pulse" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-[35%] left-[25%] w-1.5 h-1.5 bg-accent-light/40 rounded-full animate-pulse" style={{ animationDelay: "3s" }} />
          <div className="absolute bottom-[35%] right-[22%] w-2 h-2 bg-accent/35 rounded-full animate-pulse" style={{ animationDelay: "2s" }} />

          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-[0.015]" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px"
          }} />

          {/* Accent line decorations */}
          <div className="absolute top-0 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
          <div className="absolute bottom-0 left-[30%] right-[30%] h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />

          <div className="relative z-10 px-6 sm:px-10 md:px-16 py-16 sm:py-24 md:py-32 text-center">
            <span className="inline-block bg-white/[0.07] text-accent-light text-xs font-semibold tracking-wider uppercase px-5 py-2 rounded-full mb-8 backdrop-blur-sm border border-white/[0.08]">
              Jetzt starten
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-6 leading-tight max-w-3xl mx-auto">
              Handeln Sie jetzt, bevor Eigentümer & Käufer{" "}
              <span className="text-accent-light">andere Makler</span>{" "}
              wählen.
            </h2>

            <p className="text-white/40 text-base sm:text-lg mb-12 max-w-xl mx-auto leading-relaxed">
              Qualifizierte Kontaktanfragen von Verkäufern und Käufern
              für Ihr Maklergeschäft.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://calendly.com/business-gruender/analysegesprach-gruender-marketing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent hover:bg-accent-light text-white px-8 sm:px-12 py-4 sm:py-5 rounded-sm text-base sm:text-lg font-semibold transition-all hover:shadow-2xl hover:shadow-accent/30 hover:-translate-y-0.5 w-full sm:w-auto text-center"
              >
                Termin buchen
              </a>
              <a
                href="mailto:info@marketing-gruender.de"
                className="border border-white/10 text-white/50 hover:border-accent hover:text-accent px-8 sm:px-12 py-4 sm:py-5 rounded-sm text-base sm:text-lg font-semibold transition-all hover:-translate-y-0.5 w-full sm:w-auto text-center"
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
