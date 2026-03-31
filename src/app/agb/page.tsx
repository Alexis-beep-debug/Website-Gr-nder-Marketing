import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGB | Gründer Marketing",
  description: "Allgemeine Geschäftsbedingungen von Gründer Marketing",
};

function Clause({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <div className="flex items-baseline gap-3">
        <span className="text-accent font-extrabold text-xl shrink-0">{number}</span>
        <h2 className="text-xl font-bold text-primary tracking-tight">{title}</h2>
      </div>
      <div className="pl-8 text-primary/75 leading-[1.85] space-y-3">{children}</div>
    </section>
  );
}

function Highlight({ children }: { children: React.ReactNode }) {
  return <span className="font-semibold text-primary">{children}</span>;
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 mt-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function AGBPage() {
  return (
    <div className="bg-light min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20 sm:py-28">

        {/* Page Header */}
        <div className="mb-16">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            Rechtliches
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-primary tracking-tight">
            Allgemeine Geschäfts&shy;bedingungen
          </h1>
          <p className="mt-4 text-primary/60 text-lg">
            Stand: 18. Juli 2025
          </p>
        </div>

        {/* Intro */}
        <div className="bg-white border border-primary/10 rounded-2xl p-6 mb-14 text-primary/75 leading-relaxed">
          <p>
            Diese AGB bilden zusammen mit dem Angebot oder der Auftragsbestätigung einen verbindlichen
            Vertrag zwischen dem Kunden und{" "}
            <Highlight>
              Gründer Marketing, Malte-Valentin Gründer, Auftragswerk (Einzelunternehmen), Saarstr.{"\u00A0"}45,
              01189 Dresden
            </Highlight>
            {" "}(nachfolgend „Gründer Marketing"). Der Vertrag kommt zustande, sobald der Kunde das
            Angebot schriftlich oder per E-Mail bestätigt.
          </p>
        </div>

        <div className="space-y-12 divide-y divide-primary/10">

          <Clause number="1." title="Geltungsbereich">
            <p>
              Diese AGB gelten unter Ausschluss aller anderen Vertragsbedingungen und dürfen nicht
              geändert oder ergänzt werden, es sei denn, sie wurden schriftlich vereinbart und von
              Gründer Marketing unterzeichnet.
            </p>
          </Clause>

          <div className="pt-12">
            <Clause number="2." title="Leistungen von Gründer Marketing">
              <p>
                Gründer Marketing erbringt Dienstleistungen im Bereich des{" "}
                <Highlight>Online-Marketings</Highlight>, insbesondere:
              </p>
              <BulletList
                items={[
                  "Schaltung und Betreuung von Werbekampagnen (Facebook/Instagram)",
                  "Erstellung von Webseiten, Funnels und Landingpages",
                  "Generierung von Anfragen für Immobilienmakler zur Objektakquise und -vermarktung",
                  "Bau von Maklerwebsites",
                ]}
              />
              <p>
                Die Umsetzung beginnt nach Annahme des Angebots, vollständigem Zahlungseingang und
                Bereitstellung aller erforderlichen Informationen und Zugänge durch den Kunden.
              </p>
              <p>
                Gründer Marketing haftet nicht für Änderungen durch den Kunden oder Dritte sowie
                daraus entstehende Folgen für Website oder Google-Ranking.
              </p>
            </Clause>
          </div>

          <div className="pt-12">
            <Clause number="3." title="Pflichten des Kunden">
              <p>
                Der Kunde ist verpflichtet, <Highlight>vollständig mitzuwirken</Highlight> und alle
                notwendigen Informationen, Medien, Login-Daten und Dateien bereitzustellen.
              </p>
              <p>
                Stellt der Kunde benötigte Unterlagen nicht innerhalb von{" "}
                <Highlight>14 Tagen</Highlight> bereit, ist Gründer Marketing berechtigt, die
                verbleibenden Arbeiten trotzdem in Rechnung zu stellen.
              </p>
              <p>
                Während der Zusammenarbeit darf der Kunde{" "}
                <Highlight>keine konkurrierenden Anbieter</Highlight> für Facebook/Instagram-Kampagnen
                zur Objektakquise oder -vermarktung beauftragen.
              </p>
              <p>Der Kunde erteilt Gründer Marketing ausdrücklich die Erlaubnis zu:</p>
              <BulletList
                items={[
                  "Änderungen an Social-Media-Konten (Facebook, Instagram, ggf. TikTok, LinkedIn)",
                  "Erstellen oder Verwalten von Werbekonten",
                  "Nutzen und Verknüpfen von Drittanbieter-Tools",
                  "Anlegen oder Ändern von Webseiten, Domains oder Landingpages",
                ]}
              />
            </Clause>
          </div>

          <div className="pt-12">
            <Clause number="4." title="Entschädigung und Rechnungsstellung">
              <p>
                Rechnungen sind <Highlight>sofort nach Erhalt</Highlight> ohne Abzug fällig. Beanstandungen
                müssen innerhalb von <Highlight>7 Tagen</Highlight> schriftlich eingereicht werden.
              </p>
              <p>
                Bei Zahlungsverzug fallen Verzugszinsen von{" "}
                <Highlight>9 Prozentpunkten über dem Basiszinssatz</Highlight> (§ 288 Abs. 2 BGB) sowie eine
                Verzugspauschale von <Highlight>40 €</Highlight> (§ 288 Abs. 5 BGB) an.
              </p>
            </Clause>
          </div>

          <div className="pt-12">
            <Clause number="5." title="Vertraulichkeit">
              <p>
                Der Kunde verpflichtet sich, alle Informationen über die Zusammenarbeit und die
                Geschäftstätigkeit von Gründer Marketing{" "}
                <Highlight>vertraulich zu behandeln</Highlight> und ohne vorherige schriftliche Zustimmung
                nicht an Dritte weiterzugeben.
              </p>
            </Clause>
          </div>

          <div className="pt-12">
            <Clause number="6." title="Haftung von Gründer Marketing">
              <p>
                Gründer Marketing haftet für die sorgfältige und fachgerechte Erbringung seiner
                Dienstleistungen, nicht jedoch für:
              </p>
              <BulletList
                items={[
                  "Einschränkungen oder Sperrungen durch Meta oder andere Plattformbetreiber",
                  "Technische Ausfälle von Servern oder Netzwerken Dritter",
                  "Änderungen durch den Kunden oder Dritte und deren Folgen",
                  "Algorithmus-bedingte Schwankungen in Sichtbarkeit oder Ranking",
                  "Reputationsverlust des Kunden (online oder offline)",
                ]}
              />
            </Clause>
          </div>

          <div className="pt-12">
            <Clause number="7." title="Garantie">
              <p>
                Grundsätzlich übernimmt Gründer Marketing{" "}
                <Highlight>keine Ergebnisgarantie</Highlight>. Sofern im Angebot ausdrücklich eine Garantie
                vereinbart wird, gilt:
              </p>
              <BulletList
                items={[
                  "Als qualifizierter Lead gilt nur eine Anfrage mit vollständig ausgefüllten Pflichtfragen.",
                  "Bei Nichterreichen des Ziels arbeitet Gründer Marketing ohne zusätzliches Honorar weiter.",
                  "Das Werbebudget trägt weiterhin der Kunde.",
                ]}
              />
              <div className="bg-primary/5 border border-primary/15 rounded-xl p-5 mt-3">
                <p className="font-semibold text-primary text-sm mb-2">Garantieausfall</p>
                <p className="text-sm">
                  Die Garantie entfällt bei Account-Sperrungen durch Meta, technischen Störungen durch
                  Dritte, Plattformänderungen oder fehlerhafter Mitwirkung des Kunden.
                </p>
              </div>
            </Clause>
          </div>

          <div className="pt-12">
            <Clause number="8." title="Haftung des Kunden">
              <p>
                Der Kunde ist verpflichtet, alle anwendbaren Gesetze in Bezug auf die Nutzung der Werke
                einzuhalten und garantiert, dass bereitgestellte Inhalte{" "}
                <Highlight>keine Rechte Dritter verletzen</Highlight>.
              </p>
            </Clause>
          </div>

          <div className="pt-12">
            <Clause number="9." title="Rechteeinräumung">
              <p>
                Die Urheber- und Nutzungsrechte an den erstellten Werken verbleiben beim{" "}
                <Highlight>Kunden</Highlight>. Nach Vertragsende werden alle Rechte an den Kunden
                übertragen, sofern nichts anderes vereinbart wurde.
              </p>
            </Clause>
          </div>

          <div className="pt-12">
            <Clause number="10." title="Beendigung">
              <p>
                Die Parteien können den Vertrag jederzeit beenden. Eine vorzeitige Kündigung durch den
                Kunden vor Ablauf der vereinbarten Laufzeit gilt als{" "}
                <Highlight>Kündigung zur Unzeit</Highlight> – das vereinbarte Entgelt gilt als
                pauschalierter Schadenersatz.
              </p>
              <p>
                Bricht der Kunde die Zusammenarbeit während eines laufenden Verlängerungszeitraums vor
                Erreichung des Ziels eigenständig ab, entfällt jeglicher Anspruch auf die
                Zielgarantie.
              </p>
            </Clause>
          </div>

          <div className="pt-12">
            <Clause number="11." title="Anwendbares Recht und Gerichtsstand">
              <p>
                Es gilt deutsches Recht. Als ausschließlicher{" "}
                <Highlight>Gerichtsstand</Highlight> wird der Sitz von Gründer Marketing (Dresden)
                vereinbart.
              </p>
            </Clause>
          </div>

          <div className="pt-12">
            <Clause number="12." title="Referenznutzung">
              <p>
                Der Kunde erklärt sich damit einverstanden, in <Highlight>anonymisierter und nicht
                anonymisierter Form</Highlight> als Referenz genannt zu werden. Dies kann jederzeit
                schriftlich widerrufen werden.
              </p>
            </Clause>
          </div>

        </div>

        <p className="mt-14 pt-8 border-t border-primary/10 text-sm text-muted">
          Stand dieser Fassung der AGB: <span className="font-medium text-primary">18. Juli 2025</span>
        </p>
      </div>
    </div>
  );
}
