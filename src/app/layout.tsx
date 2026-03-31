import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrackingPixel from "@/components/TrackingPixel";

export const metadata: Metadata = {
  title: "Gründer Marketing | Mehr Alleinaufträge für Immobilienmakler",
  description:
    "Wir helfen Immobilienmaklern, jeden Monat neue Alleinaufträge zu sichern – mit digitalem Marketing, Meta-Kampagnen und regionaler Sichtbarkeit.",
  keywords:
    "Immobilienmakler Marketing, Eigentümerakquise, Objektakquise, Makler Leads, Gründer Marketing, Immobilien Marketing Agentur",
  openGraph: {
    title: "Gründer Marketing | Mehr Alleinaufträge für Immobilienmakler",
    description:
      "Immobilienmakler sichern sich mit uns jeden Monat neue Alleinaufträge – ohne auf Empfehlungen oder Kaltakquise zu warten.",
    type: "website",
    locale: "de_DE",
    url: "https://marketing-gruender.de",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@1,400;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <TrackingPixel />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
