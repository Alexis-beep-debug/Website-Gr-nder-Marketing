import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Gründer Marketing",
  description: "Datenschutzerklärung von Gründer Marketing",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-primary tracking-tight">{title}</h2>
      <div className="text-primary/75 leading-[1.85] space-y-4">{children}</div>
    </section>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <h3 className="text-base font-semibold text-primary">{title}</h3>
      <div className="text-primary/75 leading-[1.85]">{children}</div>
    </div>
  );
}

function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-semibold text-primary">{children}</span>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block bg-accent/10 text-accent font-mono text-xs px-2 py-0.5 rounded">
      {children}
    </span>
  );
}

export default function DatenschutzPage() {
  return (
    <div className="bg-light min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20 sm:py-28">

        {/* Page Header */}
        <div className="mb-16">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            Rechtliches
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-primary tracking-tight">
            Datenschutz&shy;erklärung
          </h1>
          <p className="mt-4 text-primary/60 text-lg">
            Zuletzt aktualisiert: 7. April 2026
          </p>
        </div>

        <div className="space-y-14 divide-y divide-primary/10">

          {/* 1. Datenschutz auf einen Blick */}
          <Section title="1. Datenschutz auf einen Blick">
            <SubSection title="Allgemeine Hinweise">
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren{" "}
                <Highlight>personenbezogenen Daten</Highlight> passiert, wenn Sie diese Website besuchen.
                Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text
                aufgeführten Datenschutzerklärung.
              </p>
            </SubSection>

            <SubSection title="Datenerfassung auf dieser Website">
              <p>
                <Highlight>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</Highlight>
              </p>
              <p>
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
                Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser
                Datenschutzerklärung entnehmen.
              </p>
              <p className="mt-3">
                <Highlight>Wie erfassen wir Ihre Daten?</Highlight>
              </p>
              <p>
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Andere Daten
                werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere
                IT-Systeme erfasst – das sind vor allem technische Daten (z.{"\u00A0"}B. Internetbrowser,
                Betriebssystem oder Uhrzeit des Seitenaufrufs).
              </p>
              <p className="mt-3">
                <Highlight>Wofür nutzen wir Ihre Daten?</Highlight>
              </p>
              <p>
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
                gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>
              <p className="mt-3">
                <Highlight>Welche Rechte haben Sie bezüglich Ihrer Daten?</Highlight>
              </p>
              <p>
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Herkunft, Empfänger und
                Zweck Ihrer gespeicherten personenbezogenen Daten sowie ein Recht auf Berichtigung oder
                Löschung. Außerdem steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              </p>
            </SubSection>

            <SubSection title="Analyse-Tools und Tools von Drittanbietern">
              <p>
                Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das
                geschieht vor allem mit sogenannten <Highlight>Analyseprogrammen</Highlight>. Detaillierte
                Informationen finden Sie in der folgenden Datenschutzerklärung.
              </p>
            </SubSection>
          </Section>

          {/* 2. Hosting */}
          <div className="pt-14">
            <Section title="2. Hosting">
              <SubSection title="Railway / Vercel">
                <p>
                  Wir hosten unsere Website auf <Highlight>Railway</Highlight> (Railway Corporation, USA). Alle personenbezogenen
                  Daten, die auf dieser Seite erfasst werden, werden auf Servern von Railway verarbeitet und gespeichert.
                </p>
                <p>
                  Rechtsgrundlage:{" "}
                  <Tag>Art. 6 Abs. 1 lit. f DSGVO</Tag>.
                </p>
              </SubSection>
            </Section>
          </div>

          {/* 3. Allgemeine Hinweise */}
          <div className="pt-14">
            <Section title="3. Allgemeine Hinweise und Pflichtinformationen">
              <SubSection title="Datenschutz">
                <p>
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
                  behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
                  Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                </p>
              </SubSection>

              <SubSection title="Hinweis zur verantwortlichen Stelle">
                <p>
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                </p>
                <div className="bg-white rounded-xl border border-primary/10 p-5 mt-3 space-y-1">
                  <p className="font-semibold text-primary">Gründer Marketing</p>
                  <p>Saarstr. 45, 01189 Dresden</p>
                  <p>
                    Telefon:{" "}
                    <a href="tel:+491754024912" className="text-accent hover:underline">
                      +49 (0) 175 4024912
                    </a>
                  </p>
                  <p>
                    E-Mail:{" "}
                    <a href="mailto:info@marketing-gruender.de" className="text-accent hover:underline">
                      info@marketing-gruender.de
                    </a>
                  </p>
                </div>
              </SubSection>

              <SubSection title="Speicherdauer">
                <p>
                  Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt
                  wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die
                  Datenverarbeitung entfällt.
                </p>
              </SubSection>

              <SubSection title="Rechtsgrundlagen der Datenverarbeitung">
                <p>
                  Je nach Verarbeitungsfall stützen wir uns auf folgende Rechtsgrundlagen:
                </p>
                <ul className="mt-2 space-y-1.5 list-none">
                  {[
                    ["Einwilligung", "Art. 6 Abs. 1 lit. a DSGVO"],
                    ["Vertragserfüllung", "Art. 6 Abs. 1 lit. b DSGVO"],
                    ["Rechtliche Verpflichtung", "Art. 6 Abs. 1 lit. c DSGVO"],
                    ["Berechtigtes Interesse", "Art. 6 Abs. 1 lit. f DSGVO"],
                  ].map(([label, art]) => (
                    <li key={label} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      <span>{label}: <Tag>{art}</Tag></span>
                    </li>
                  ))}
                </ul>
              </SubSection>

              <SubSection title="Widerspruchsrecht (Art. 21 DSGVO)">
                <div className="bg-primary/5 border border-primary/15 rounded-xl p-5 text-sm">
                  <p className="font-semibold text-primary mb-2">Wichtiger Hinweis</p>
                  <p>
                    Wenn die Datenverarbeitung auf Grundlage von{" "}
                    <Tag>Art. 6 Abs. 1 lit. e oder f DSGVO</Tag> erfolgt, haben Sie jederzeit das Recht,
                    Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen. Bei
                    Direktwerbung können Sie jederzeit widersprechen – Ihre Daten werden dann nicht mehr
                    zu diesem Zweck verwendet.
                  </p>
                </div>
              </SubSection>

              <SubSection title="Ihre weiteren Rechte">
                <div className="grid sm:grid-cols-2 gap-3 mt-2">
                  {[
                    "Auskunft, Berichtigung & Löschung",
                    "Einschränkung der Verarbeitung",
                    "Datenübertragbarkeit",
                    "Widerruf der Einwilligung",
                    "Beschwerderecht bei Aufsichtsbehörde",
                  ].map((right) => (
                    <div
                      key={right}
                      className="flex items-center gap-2 bg-white rounded-lg border border-primary/10 px-4 py-3 text-sm"
                    >
                      <span className="text-accent font-bold">✓</span>
                      <span className="text-primary font-medium">{right}</span>
                    </div>
                  ))}
                </div>
              </SubSection>

              <SubSection title="SSL- / TLS-Verschlüsselung">
                <p>
                  Diese Seite nutzt aus Sicherheitsgründen eine{" "}
                  <Highlight>SSL- bzw. TLS-Verschlüsselung</Highlight>. Eine verschlüsselte Verbindung
                  erkennen Sie am <Tag>https://</Tag> in der Adresszeile und dem Schloss-Symbol im Browser.
                </p>
              </SubSection>
            </Section>
          </div>

          {/* 4. Cookies */}
          <div className="pt-14">
            <Section title="4. Datenerfassung auf dieser Website">
              <SubSection title="Cookies">
                <p>
                  Unsere Internetseiten verwenden sogenannte <Highlight>Cookies</Highlight> – kleine
                  Datenpakete, die auf Ihrem Endgerät gespeichert werden. Sie werden entweder für die Dauer
                  einer Sitzung (<Highlight>Session-Cookies</Highlight>) oder dauerhaft (
                  <Highlight>permanente Cookies</Highlight>) gespeichert.
                </p>
                <p>
                  Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert
                  werden und Cookies nur im Einzelfall erlauben. Bei der Deaktivierung von Cookies kann die
                  Funktionalität dieser Website eingeschränkt sein.
                </p>
              </SubSection>
            </Section>
          </div>

          {/* 5. Eingebundene Dienste */}
          <div className="pt-14">
            <Section title="5. Eingebundene Dienste">
              {[
                {
                  name: "Cookie Notice & Compliance",
                  desc: "Zur Einholung Ihrer Einwilligung zur Speicherung bestimmter Cookies auf Ihrem Endgerät.",
                  basis: "§ 25 Abs. 1 TDDDG, Art. 6 Abs. 1 lit. c DSGVO",
                },
                {
                  name: "WhatsApp",
                  desc: "Wenn Sie über WhatsApp mit uns kommunizieren, speichern wir Ihre Telefonnummer sowie Inhalte der Kommunikation. Anbieter: WhatsApp Ireland Limited.",
                  basis: "Art. 6 Abs. 1 lit. a DSGVO",
                },
                {
                  name: "Calendly",
                  desc: "Für die Vereinbarung von Terminen. Anbieter: Calendly LLC, USA. Dabei werden Name, E-Mail-Adresse und Terminwunsch erfasst.",
                  basis: "Art. 6 Abs. 1 lit. b DSGVO",
                },
                {
                  name: "Claude AI",
                  desc: "Zur Unterstützung bei der Erstellung von Marketinginhalten und strategischer Beratung setzen wir Claude AI von Anthropic ein. Dabei werden keine personenbezogenen Kundendaten an den Dienst übermittelt. Die Verarbeitung erfolgt ausschließlich für interne Zwecke.",
                  basis: "Art. 6 Abs. 1 lit. f DSGVO",
                },
                {
                  name: "Close CRM",
                  desc: "Zur Verwaltung von Kundenbeziehungen und Kommunikation nutzen wir Close CRM. Dabei werden Kontaktdaten wie Name, E-Mail-Adresse und Telefonnummer gespeichert. Anbieter: Elastic Inc., USA. Es besteht ein Auftragsverarbeitungsvertrag.",
                  basis: "Art. 6 Abs. 1 lit. b DSGVO",
                },
                {
                  name: "Google Docs / Sheets",
                  desc: "Für die gemeinsame Dokumentation und Projektarbeit nutzen wir Google Docs und Google Sheets. Dabei können projektbezogene Daten verarbeitet werden. Anbieter: Google Ireland Limited.",
                  basis: "Art. 6 Abs. 1 lit. b DSGVO",
                },
                {
                  name: "Google Meet",
                  desc: "Zur Durchführung von Videokonferenzen. Anbieter: Google Ireland Limited.",
                  basis: "Art. 6 Abs. 1 lit. b / a DSGVO",
                },
              ].map((service) => (
                <div
                  key={service.name}
                  className="bg-white rounded-xl border border-primary/10 p-5 space-y-2"
                >
                  <p className="font-semibold text-primary">{service.name}</p>
                  <p className="text-sm">{service.desc}</p>
                  <p className="text-xs">
                    Rechtsgrundlage: <Tag>{service.basis}</Tag>
                  </p>
                </div>
              ))}

              <SubSection title="Anfrage per E-Mail oder Telefon">
                <p>
                  Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller
                  daraus hervorgehenden personenbezogenen Daten zum Zwecke der Bearbeitung gespeichert.
                  Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
                <p>
                  Rechtsgrundlage: <Tag>Art. 6 Abs. 1 lit. b DSGVO</Tag> bzw.{" "}
                  <Tag>Art. 6 Abs. 1 lit. f DSGVO</Tag>.
                </p>
              </SubSection>
            </Section>
          </div>

          <p className="pt-10 text-sm text-muted">
            Quelle:{" "}
            <a
              href="https://www.e-recht24.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              e-recht24.de
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
