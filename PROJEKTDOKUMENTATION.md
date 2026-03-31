# Projektdokumentation – Gründer Marketing Website

## Projektübersicht

| Feld | Details |
|------|---------|
| **Projekt** | Redesign der Website für Gründer Marketing |
| **Kunde** | Malte-Valentin Gründer |
| **Firma** | Gründer Marketing |
| **Domain** | marketing-gruender.de |
| **Zielgruppe** | Immobilienmakler, Bauträger, Verwaltungen |
| **Status** | In Entwicklung |
| **Stil-Inspiration** | growmelons.de, invate-media.de |

## Tech-Stack

| Technologie | Version | Zweck |
|------------|---------|-------|
| **Next.js** | 16.x | React-Framework mit SSG |
| **React** | 19.x | UI-Bibliothek |
| **TypeScript** | 6.x | Type-Safety |
| **Tailwind CSS** | 4.x | Utility-first CSS |
| **PostCSS** | 8.x | CSS-Processing |

## Design-System

### Brandfarben

| Farbe | Hex-Code | Verwendung |
|-------|----------|------------|
| Primary (Schwarz) | `#000000` | Hauptfarbe, Überschriften, CTAs |
| Primary Light | `#1c1c1c` | Hover-States, Gradienten |
| Accent (Grün) | `#5B7D73` | Highlights, Icons, Hervorhebungen |
| Accent Light | `#7a9d94` | Hover auf Accent |
| Dark | `#0a0a0a` | Footer, dunkle Bereiche, Marquee-Banner |
| Light (Weiß) | `#ffffff` | Haupthintergrund |
| Section Alt | `#f5f5f5` | Alternative Sektionshintergründe |

### Typografie

| Font | Verwendung |
|------|-----------|
| **Inter** (Sans-Serif) | Hauptschrift – Body-Text, Navigation, UI-Elemente |
| **Playfair Display** (Serif, Italic) | Akzent-Schrift – hervorgehobene Wörter in Headlines (z.B. „Alleinaufträge", „wirken") |
| **Gewichte Inter:** | 400, 500, 600, 700, 800 |
| **Gewichte Playfair:** | 400i, 600i, 700i (nur Italic) |

**Designprinzip:** Clean, saubere Sans-Serif für Fließtext. Wichtige Schlüsselwörter werden durch Playfair Display Italic in der Akzentfarbe (Grün) hervorgehoben – inspiriert von modernen Agenturwebsites.

### Motion-Design

| Element | Beschreibung |
|---------|-------------|
| **Scrollende Pill-Tags** | Hero-Bereich oben – endlos scrollende Tags (Meta Ads, Lead-Generierung, etc.) |
| **Marquee-Banner** | Dunkler Streifen nach dem Hero – scrollende Service-Begriffe in Großbuchstaben |
| **Orbit-Showcase** | Kreisförmig rotierende Projektkarten um zentrales Logo |
| **Fade-In-Up** | Einganganimationen für Sektionsinhalte |
| **prefers-reduced-motion** | Alle Animationen respektieren Barrierefreiheits-Einstellungen |

## Seitenstruktur

### Startseite (Single-Page)

1. **Header** – Sticky Navigation, transparent → weiß beim Scrollen
2. **Hero** – Split-Layout (Text links, Foto-Placeholder rechts), scrollende Pill-Tags, Mixed Typography
3. **Marquee-Banner** – Dunkler Service-Ticker
4. **Herausforderungen** – Zwei Karten: "Zu wenig Verkaufsobjekte" + "Fehlende Kaufinteressenten"
5. **Lösung** – 3-Schritte-Prozess: Marktpräsenz → Kontaktanfragen → Wachstum
6. **Zielgruppen** – Immobilienmakler, Bauträger, Verwaltungen
7. **Leistungen** – 3 Service-Karten mit Features-Listen
8. **Vorteile** – 4 Vorteile in kompakten Karten
9. **Orbit-Showcase** – Kreisförmig rotierende Projekte (Platzhalter)
10. **Über uns** – Gründer-Profil, Mission-Statement, 3 Qualitäts-Merkmale
11. **FAQ** – 5 aufklappbare Fragen mit Antworten
12. **CTA** – Abschluss-Call-to-Action mit Telefon & E-Mail
13. **Footer** – Navigation, Öffnungszeiten, Kontakt, Legal-Links

### Unterseiten

| Route | Beschreibung | Status |
|-------|-------------|--------|
| `/impressum` | Impressum mit Unternehmensdaten | ✅ Fertig |
| `/datenschutz` | Datenschutzerklärung (DSGVO-konform) | ✅ Fertig |
| `/agb` | Allgemeine Geschäftsbedingungen (12 Klauseln) | ✅ Fertig |
| `/dashboard` | KPI-Dashboard (passwortgeschützt) | ✅ Fertig |

## Komponenten-Übersicht

| Datei | Beschreibung |
|-------|-------------|
| `src/app/layout.tsx` | Root-Layout mit Metadata, Fonts (Inter + Playfair Display), Header, Footer, Tracking-Pixel |
| `src/app/page.tsx` | Hauptseite – bindet alle Sektionen ein |
| `src/app/globals.css` | Tailwind-Imports, Theme-Variablen, Animationen (Fade, Marquee, Orbit, Shake) |
| `src/components/Header.tsx` | Sticky Header – weiß/transparent adaptiv, Mobile-Menü |
| `src/components/Hero.tsx` | Hero mit scrollenden Pills, Mixed Typography, Split-Layout, Floating Cards |
| `src/components/MarqueeBanner.tsx` | Dunkler Service-Ticker mit Endlos-Scroll |
| `src/components/Challenges.tsx` | Problem-Karten |
| `src/components/Solution.tsx` | 3-Schritte-Lösung |
| `src/components/TargetGroup.tsx` | Zielgruppen-Karten |
| `src/components/Services.tsx` | Leistungs-Karten mit Feature-Listen |
| `src/components/Advantages.tsx` | Vorteile-Grid |
| `src/components/OrbitShowcase.tsx` | Kreisförmig rotierende Projektkarten (CSS-Animation) |
| `src/components/About.tsx` | Gründer-Profil, Mission, Qualitäten |
| `src/components/FAQ.tsx` | Akkordeon-FAQ |
| `src/components/CTA.tsx` | Call-to-Action-Sektion |
| `src/components/Footer.tsx` | Footer mit Kontakt & Legal |
| `src/components/TrackingPixel.tsx` | Client-Side Tracking (Seitenaufrufe, Klicks, Leads, UTM) |
| `src/components/DashboardGuard.tsx` | Passwort-Login-Screen für Dashboard |
| `src/lib/tracking.ts` | Tracking-Logik & Demo-Daten-Generator |

### Legal-Seiten

| Datei | Beschreibung |
|-------|-------------|
| `src/app/impressum/page.tsx` | Impressum (§ 5 TMG) |
| `src/app/datenschutz/page.tsx` | Datenschutzerklärung mit Service-Übersicht (Karten), Rechtsgrundlagen (Tags) |
| `src/app/agb/page.tsx` | AGB – 12 nummerierte Klauseln mit Gold-Nummern und Highlight-Typografie |

### Dashboard

| Datei | Beschreibung |
|-------|-------------|
| `src/app/dashboard/page.tsx` | KPI-Dashboard mit Charts, Traffic-Quellen, Keywords, Leads |
| `src/app/dashboard/layout.tsx` | Dashboard-Layout mit Passwortschutz (noindex) |

**Dashboard-URL:** `/dashboard`
**Dashboard-Passwort:** `gruender2026`

## Dashboard KPIs

| KPI | Beschreibung |
|-----|-------------|
| Seitenaufrufe | Gesamtzahl Page Views im Zeitraum |
| Besucher | Unique Visitors (Session-basiert) |
| Klicks | CTA-Klicks, Telefon-Klicks, E-Mail-Klicks |
| Leads | Kontaktanfragen (Telefon, E-Mail, Formular) |
| Conversion Rate | Leads / Seitenaufrufe in % |
| Seiten/Sitzung | Durchschnittliche Seitenanzahl pro Session |
| Verweildauer | Durchschnittliche Session-Dauer |
| Absprungrate | Sessions mit nur 1 Seite in % |
| Traffic-Quellen | Google, Direct, Facebook, Instagram, Referral |
| Top Keywords | UTM-Term basierte Keyword-Analyse |
| Klicks/Sektion | Welche Sektion generiert die meisten Klicks |
| CTA-Performance | Welche Buttons werden am meisten geklickt |

## Kontaktdaten (auf der Website)

- **Telefon:** +49 (0) 175 4024 912
- **E-Mail:** info@marketing-gruender.de
- **Adresse:** Saarstr. 45, 01189 Dresden
- **Steuernummer:** 203/226/04778
- **Öffnungszeiten:** Mo–Fr 09:00–17:00 Uhr

## SEO-Optimierung

- Semantische HTML-Struktur (h1, h2, h3 Hierarchie)
- OpenGraph Meta-Tags für Social Sharing
- Beschreibende Meta-Description
- Keywords für Immobilienmakler-Marketing
- Responsive Design (Mobile-first)
- Performante Ladezeiten durch Static Export
- Dashboard auf `noindex, nofollow` gesetzt

## Deployment

- **Output:** Static Export (`next build` → `/out`)
- **Konfiguration:** `next.config.ts`

## Offene Punkte / TODOs

- [ ] Echtes Foto von Malte-Valentin Gründer einbinden (Hero + Über uns)
- [ ] Echte Projektbilder für Orbit-Showcase nachliefern
- [ ] Firmenlogo einbinden (aktuell Text-Logo)
- [x] Impressum-Seite erstellen
- [x] Datenschutzerklärung-Seite erstellen
- [x] AGB-Seite erstellen
- [x] Dashboard mit KPI-Tracking erstellen
- [x] Tracking-Pixel installieren
- [x] Dashboard passwortschützen
- [x] Brandfarben aktualisieren (Schwarz/Grün/Weiß)
- [x] Akzent-Schrift (Playfair Display) für Hervorhebungen
- [x] Motion-Design: Scrollende Pills, Marquee-Banner, Orbit-Showcase
- [ ] Kontaktformular integrieren (optional)
- [ ] Google Analytics / Meta Pixel einrichten (produktiv)
- [ ] Favicon erstellen und einbinden
- [ ] Cookie-Banner implementieren

---

*Letzte Aktualisierung: 31.03.2026*
