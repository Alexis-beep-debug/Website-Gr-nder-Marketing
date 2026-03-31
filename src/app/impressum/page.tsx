import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Gründer Marketing",
  description: "Impressum der Gründer Marketing Website",
};

export default function ImpressumPage() {
  return (
    <div className="bg-light min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-primary mb-12 tracking-tight">
          Impressum
        </h1>

        <div className="space-y-10 text-primary/80 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-primary mb-3">
              Angaben gemäß § 5 TMG
            </h2>
            <p className="text-lg">
              <span className="font-semibold text-primary">Gründer Marketing</span>
              <br />
              Saarstr. 45
              <br />
              01189 Dresden
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">
              Vertreten durch
            </h2>
            <p className="text-lg">Malte-Valentin Gründer</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">Kontakt</h2>
            <p className="text-lg">
              Telefon:{" "}
              <a
                href="tel:+491754024912"
                className="text-accent font-medium hover:underline"
              >
                +49 (0) 175 4024 912
              </a>
              <br />
              E-Mail:{" "}
              <a
                href="mailto:info@marketing-gruender.de"
                className="text-accent font-medium hover:underline"
              >
                info@marketing-gruender.de
              </a>
              <br />
              Website:{" "}
              <span className="font-medium text-primary">
                www.marketing-gruender.de
              </span>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">
              Steuernummer
            </h2>
            <p className="text-lg font-mono">203/226/04778</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">
              Redaktionell verantwortlich
            </h2>
            <p className="text-lg">
              Malte-Valentin Gründer
              <br />
              Saarstr. 45
              <br />
              01189 Dresden
            </p>
          </section>

          <section className="border-t border-primary/10 pt-10">
            <h2 className="text-xl font-bold text-primary mb-3">
              EU-Streitschlichtung
            </h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent font-medium hover:underline break-all"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p className="mt-2">
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">
              Verbraucherstreitbeilegung / Universalschlichtungsstelle
            </h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <p className="text-sm text-muted pt-6 border-t border-primary/10">
            Quelle: e-recht24.de
          </p>
        </div>
      </div>
    </div>
  );
}
