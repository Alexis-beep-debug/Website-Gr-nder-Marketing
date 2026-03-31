import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-[#f7f8f7] border-t border-primary/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Logo variant="dark" />
            </div>
            <p className="text-primary/50 text-sm leading-relaxed">
              Wir geben Immobilienmaklern Stabilität im Geschäft.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Menü</h4>
            <ul className="space-y-2.5">
              {[
                ["Startseite", "#hero"],
                ["Lösung", "#loesung"],
                ["Leistungen", "#leistungen"],
                ["Über uns", "#ueber-uns"],
                ["FAQ", "#faq"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="text-primary/50 hover:text-accent transition-colors text-sm">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Öffnungszeiten */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Öffnungszeiten</h4>
            <div className="space-y-2 text-sm text-primary/50">
              <p><span className="text-primary/70 font-medium">Montag – Freitag:</span><br />09:00 – 17:00 Uhr</p>
              <p><span className="text-primary/70 font-medium">Samstag & Sonntag:</span><br />Geschlossen</p>
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Kontakt</h4>
            <div className="space-y-3 text-sm">
              <a href="tel:+491754024912" className="flex items-center gap-2 text-primary/50 hover:text-accent transition-colors">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +49 (0) 175 4024 912
              </a>
              <a href="mailto:info@marketing-gruender.de" className="flex items-center gap-2 text-primary/50 hover:text-accent transition-colors">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@marketing-gruender.de
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary/8 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-primary/35">
          <p>&copy; {new Date().getFullYear()} Gründer Marketing. Alle Rechte vorbehalten.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a href="/impressum" className="hover:text-accent transition-colors">Impressum</a>
            <a href="/datenschutz" className="hover:text-accent transition-colors">Datenschutz</a>
            <a href="/agb" className="hover:text-accent transition-colors">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
