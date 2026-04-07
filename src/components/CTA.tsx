"use client";

const floatingIcons = [
  { icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", label: "Haus" },
  { icon: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z", label: "Schlüssel" },
  { icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z", label: "Person" },
  { icon: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941", label: "Wachstum" },
  { icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", label: "Gebäude" },
  { icon: "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z", label: "Dokument" },
  { icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z", label: "Energie" },
  { icon: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z", label: "Umsatz" },
  { icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z", label: "Vertrauen" },
  { icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z", label: "Herz" },
];

// Desktop positions: spread across the whole container
const desktopPositions = [
  { x: "5%", y: "10%" }, { x: "88%", y: "15%" }, { x: "8%", y: "70%" },
  { x: "92%", y: "65%" }, { x: "20%", y: "5%" }, { x: "78%", y: "8%" },
  { x: "15%", y: "88%" }, { x: "82%", y: "85%" }, { x: "4%", y: "40%" },
  { x: "94%", y: "42%" },
];

// Mobile positions: ONLY around headline area (top 50%), NOT over buttons
const mobilePositions = [
  { x: "3%", y: "5%" }, { x: "82%", y: "8%" }, { x: "5%", y: "38%" },
  { x: "85%", y: "35%" }, { x: "25%", y: "2%" }, { x: "68%", y: "3%" },
  { x: "10%", y: "22%" }, { x: "80%", y: "22%" }, { x: "2%", y: "50%" },
  { x: "88%", y: "48%" },
];

function IconCard({ icon, delay, position, className }: { icon: string; delay: number; position: { x: string; y: string }; className?: string }) {
  return (
    <div
      className={`absolute ${className || ""}`}
      style={{
        left: position.x,
        top: position.y,
        animation: `cta-breathe ${5 + delay * 0.6}s ease-in-out infinite`,
        animationDelay: `${delay * 0.7}s`,
      }}
    >
      <div className="w-10 h-10 sm:w-11 sm:h-11 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-[2px] border border-white/15">
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
        </svg>
      </div>
    </div>
  );
}

export default function CTA() {
  return (
    <section id="kontakt" className="py-24 sm:py-32 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-md overflow-hidden">
          {/* Green gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent via-accent to-accent-light" />

          {/* Desktop: Icons everywhere */}
          {floatingIcons.map((fi, i) => (
            <IconCard
              key={`d-${i}`}
              icon={fi.icon}
              delay={i}
              position={desktopPositions[i]}
              className="hidden sm:block opacity-[0.22]"
            />
          ))}

          {/* Mobile: Icons only around headline, not over buttons */}
          {floatingIcons.map((fi, i) => (
            <IconCard
              key={`m-${i}`}
              icon={fi.icon}
              delay={i}
              position={mobilePositions[i]}
              className="sm:hidden opacity-[0.20]"
            />
          ))}

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
                className="bg-white text-accent px-8 sm:px-12 py-4 sm:py-5 rounded-sm text-base sm:text-lg font-semibold transition-all hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-0.5 w-full sm:w-auto text-center relative z-20"
              >
                Termin buchen
              </a>
              <a
                href="mailto:info@marketing-gruender.de"
                className="border border-white/25 text-white/80 hover:bg-white/10 px-8 sm:px-12 py-4 sm:py-5 rounded-sm text-base sm:text-lg font-semibold transition-all hover:-translate-y-0.5 w-full sm:w-auto text-center relative z-20"
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
