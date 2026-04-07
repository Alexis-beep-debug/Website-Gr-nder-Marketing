# Projektdokumentation – Gründer Marketing Website

## Projektübersicht

| Feld | Details |
|------|---------|
| **Projekt** | Redesign der Website für Gründer Marketing |
| **Kunde** | Malte-Valentin Gründer |
| **Firma** | Gründer Marketing |
| **Domain** | marketing-gruender.de / www.marketing-gruender.de |
| **Zielgruppe** | Immobilienmakler, Bauträger, Verwaltungen |
| **Repository** | alexis-beep-debug/Website-Gr-nder-Marketing |
| **Branch** | claude/redesign-marketing-website-c7KKI |
| **Status** | Live auf Railway |
| **Stil-Inspiration** | growmelons.de, invate-media.de |

## Tech-Stack

| Technologie | Version | Zweck |
|------------|---------|-------|
| **Next.js** | 16.x | React-Framework (Server-Mode für Railway) |
| **React** | 19.x | UI-Bibliothek |
| **TypeScript** | 6.x | Type-Safety |
| **Tailwind CSS** | 4.x | Utility-first CSS |
| **PostCSS** | 8.x | CSS-Processing |

## Hosting & Deployment

| Bereich | Details |
|---------|---------|
| **Hosting** | Railway |
| **Railway-URL** | fkj0s59w.up.railway.app |
| **Domain-Registrar** | IONOS |
| **Deployment-Modus** | `next start` (Node-Server, kein Static Export) |
| **SSL** | Automatisch über Railway (für www-Subdomain) |

### DNS-Konfiguration (IONOS)

| Typ | Hostname | Wert | Zweck |
|-----|----------|------|-------|
| CNAME | `www` | `fkj0s59w.up.railway.app` | Hauptdomain → Railway |
| TXT | `_railway-verify.www` | `railway-verify=90c17f942d3e488550f4070ec...` | Railway-Verifizierung |

### Domain-Weiterleitung (IONOS)

- `marketing-gruender.de` → `https://www.marketing-gruender.de` (HTTP 301)
- Alte A-Record (`217.160.0.159`) und AAAA-Record mussten entfernt werden

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

### Bilder & Assets

| Datei | Beschreibung |
|-------|-------------|
| `public/images/logos/logo.png` | Firmenlogo (verwendet in Header + Footer) |
| `public/images/team/malte-gruender.jpeg` | Foto von Malte-Valentin Gründer (Hero + Über uns) |

## Seitenstruktur

### Startseite (Single-Page)

1. **Header** – Sticky Navigation mit echtem Logo, transparent → weiß beim Scrollen
2. **Hero** – Split-Layout (Text links, Foto rechts), scrollende Pill-Tags, Mixed Typography
3. **Marquee-Banner** – Dunkler Service-Ticker
4. **Herausforderungen** – Zwei Karten: "Zu wenig Verkaufsobjekte" + "Fehlende Kaufinteressenten"
5. **Lösung** – 3-Schritte-Prozess: Marktpräsenz → Kontaktanfragen → Wachstum
6. **Zielgruppen** – Immobilienmakler, Bauträger, Verwaltungen
7. **Leistungen** – 3 Service-Karten mit Features-Listen
8. **Vorteile** – 4 Vorteile in kompakten Karten
9. **Orbit-Showcase** – Kreisförmig rotierende Projekte (Platzhalter)
10. **Über uns** – Gründer-Profil mit echtem Foto, Mission-Statement, 3 Qualitäts-Merkmale
11. **FAQ** – 5 aufklappbare Fragen mit Antworten
12. **CTA** – Abschluss-Call-to-Action mit Telefon & E-Mail
13. **Footer** – Navigation, Öffnungszeiten, Kontakt, Legal-Links, echtes Logo

### Unterseiten

| Route | Beschreibung | Status |
|-------|-------------|--------|
| `/impressum` | Impressum mit Unternehmensdaten | Fertig |
| `/datenschutz` | Datenschutzerklärung (DSGVO-konform) | Fertig |
| `/agb` | Allgemeine Geschäftsbedingungen (12 Klauseln) | Fertig |
| `/dashboard` | KPI-Dashboard (passwortgeschützt) | Fertig |

## Komponenten-Übersicht

| Datei | Beschreibung |
|-------|-------------|
| `src/app/layout.tsx` | Root-Layout mit Metadata, Fonts (Inter + Playfair Display), Header, Footer, Tracking-Pixel |
| `src/app/page.tsx` | Hauptseite – bindet alle Sektionen ein |
| `src/app/globals.css` | Tailwind-Imports, Theme-Variablen, Animationen (Fade, Marquee, Orbit, Shake) |
| `src/components/Header.tsx` | Sticky Header mit echtem Logo – adaptiv hell/dunkel, Mobile-Menü |
| `src/components/Hero.tsx` | Hero mit scrollenden Pills, Mixed Typography, Split-Layout, Floating Cards |
| `src/components/MarqueeBanner.tsx` | Dunkler Service-Ticker mit Endlos-Scroll |
| `src/components/Challenges.tsx` | Problem-Karten |
| `src/components/Solution.tsx` | 3-Schritte-Lösung |
| `src/components/TargetGroup.tsx` | Zielgruppen-Karten |
| `src/components/Services.tsx` | Leistungs-Karten mit Feature-Listen |
| `src/components/Advantages.tsx` | Vorteile-Grid |
| `src/components/OrbitShowcase.tsx` | Kreisförmig rotierende Projektkarten (CSS-Animation) |
| `src/components/About.tsx` | Gründer-Profil mit echtem Foto, Mission, Qualitäten |
| `src/components/FAQ.tsx` | Akkordeon-FAQ |
| `src/components/CTA.tsx` | Call-to-Action-Sektion |
| `src/components/Footer.tsx` | Footer mit echtem Logo, Kontakt & Legal |
| `src/components/TrackingPixel.tsx` | Client-Side Tracking (Seitenaufrufe, Klicks, Leads, UTM) |
| `src/components/DashboardGuard.tsx` | Passwort-Login-Screen für Dashboard |
| `src/lib/tracking.ts` | Tracking-Logik & Demo-Daten-Generator |

### Legal-Seiten

| Datei | Beschreibung |
|-------|-------------|
| `src/app/impressum/page.tsx` | Impressum (§ 5 TMG) |
| `src/app/datenschutz/page.tsx` | Datenschutzerklärung mit Service-Übersicht (Karten), Rechtsgrundlagen (Tags) |
| `src/app/agb/page.tsx` | AGB – 12 nummerierte Klauseln mit Highlight-Typografie |

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
- Dashboard auf `noindex, nofollow` gesetzt

## Changelog

| Datum | Änderung |
|-------|----------|
| 31.03.2026 | Initiales Projekt-Setup: Next.js 16, React 19, TypeScript, Tailwind CSS 4 |
| 31.03.2026 | Alle Sektionen erstellt (Hero, Challenges, Solution, TargetGroup, Services, Advantages, About, FAQ, CTA, Footer) |
| 31.03.2026 | Fix: `output: "export"` aus `next.config.ts` entfernt – Railway benötigt Node-Server (`next start`) statt Static Export |
| 31.03.2026 | DNS-Konfiguration bei IONOS: CNAME für www → Railway, TXT für Railway-Verifizierung |
| 31.03.2026 | Domain-Weiterleitung bei IONOS: marketing-gruender.de → https://www.marketing-gruender.de (301) |
| 31.03.2026 | SSL-Hinweis: Weiterleitung muss auf https:// zeigen, Railway stellt SSL-Zertifikat automatisch aus |
| 31.03.2026 | Logo und Foto von Malte-Valentin Gründer eingebunden |
| 31.03.2026 | Brandfarben aktualisiert: Schwarz/Grün/Weiß (vorher Navy/Gold) |
| 31.03.2026 | Playfair Display als Akzent-Schrift für hervorgehobene Wörter |
| 31.03.2026 | Hero-Redesign: Split-Layout, scrollende Pills, Mixed Typography |
| 31.03.2026 | Motion-Design: Marquee-Banner, Orbit-Showcase |
| 31.03.2026 | Legal-Seiten: Impressum, Datenschutz, AGB erstellt |
| 31.03.2026 | KPI-Dashboard mit Passwortschutz und Tracking-Pixel |
| 06.04.2026 | Navbar: Dauerhaft weiß + Schatten (nicht nur beim Scrollen) |
| 06.04.2026 | Hero: Malte-Deckblatt als Hintergrund, Gradient links→rechts, ergebnisorientierte Headline |
| 06.04.2026 | Timeline: Scroll-Animation (Linie wächst mit Scroll), Timeline1-3 Bilder abwechselnd links/rechts |
| 06.04.2026 | KPI-Bereich: Neue Werte (4 Kampagnen, 30+ Anfragen, 100% Zufriedenheit, 25 Partnermakler) |
| 06.04.2026 | Orbit-Sektion: Komplett neu – Logo zentral, 6 rotierende Marketing-Methoden-Elemente |
| 06.04.2026 | Über-uns: Neues Foto (malte-ueber-uns.png) eingebunden |
| 06.04.2026 | Alle Bilder umbenannt (URL-sicher) und in /public/images/team/ organisiert |
| 06.04.2026 | Section-Labels: Alle zu Pill-Badge-Style (rounded-full, bg-accent/15) |
| 06.04.2026 | Navigation-Fix: Header/Footer nutzen absolute Pfade (/#section), Logo → /, funktioniert auf Unterseiten |
| 06.04.2026 | Challenges-Hintergrund auf #f5f5f5 (einheitlich mit Rest der Seite) |
| 06.04.2026 | Timeline: Scroll-Sync direkt an Timeline-Bereich gekoppelt (schneller), Mobile links ausgerichtet |
| 06.04.2026 | Orbit: Mobile zeigt echten Kreis (verkleinert, Icons only) statt Grid-Fallback |
| 07.04.2026 | Hero: Neues Bild (malte-deckblatt-neu.png), harmonisches Layout, Eigentümer-fokussierte Subheadline |
| 07.04.2026 | Neue Vergleichssektion: Andere Agenturen vs. Gründer Marketing |
| 07.04.2026 | Orbit: Neue Begriffe (Performance Marketing, Vertrauensaufbau, Qualifizierte Anfragen), mehr Grün/Verläufe |
| 07.04.2026 | Timeline: Neues Bild 1 (timeline1-neu.avif), dickere Linie (3px), exakter Scroll-Sync |
| 07.04.2026 | KPI: 25 → 15 Partnermakler |
| 07.04.2026 | Datenschutz: Google Ads/ChatGPT entfernt, Claude AI/Close CRM/Google Docs ergänzt, Hosting auf Railway |
| 07.04.2026 | AGB: Lead-Definition präzisiert, Garantieumfang klargestellt, Nachbesserung konkretisiert |
| 07.04.2026 | Texte: Alle Subheadlines gekürzt, Bindestriche entfernt, natürlichere Formulierungen |

### Bilder-Inventar

| Datei | Verwendung |
|-------|-----------|
| `public/images/team/malte-deckblatt-neu.png` | Hero-Hintergrundbild (aktuell) |
| `public/images/team/malte-deckblatt.png` | Hero-Hintergrundbild (alt) |
| `public/images/team/malte-ueber-uns.png` | Über-uns-Sektion |
| `public/images/team/timeline1-neu.avif` | Timeline Step 01 (aktuell) |
| `public/images/team/timeline1.png` | Timeline Step 01 (alt) |
| `public/images/team/timeline2.jpg` | Timeline Step 02 |
| `public/images/team/timeline3.jpg` | Timeline Step 03 |
| `public/images/logos/logo.png` | Header, Footer, Orbit-Zentrum |

## Offene Punkte / TODOs

- [x] SSL: Weiterleitung bei IONOS auf `https://www.marketing-gruender.de` prüfen
- [x] Echte Projektbilder für Orbit-Showcase nachliefern → durch Methoden-Orbit ersetzt
- [x] Echtes Foto von Malte-Valentin Gründer einbinden
- [x] Firmenlogo einbinden
- [x] Impressum-Seite erstellen
- [x] Datenschutzerklärung-Seite erstellen
- [x] AGB-Seite erstellen
- [x] Dashboard mit KPI-Tracking erstellen
- [x] Tracking-Pixel installieren
- [x] Dashboard passwortschützen
- [x] Brandfarben aktualisieren (Schwarz/Grün/Weiß)
- [x] Akzent-Schrift (Playfair Display) für Hervorhebungen
- [x] Motion-Design: Scrollende Pills, Marquee-Banner, Orbit-Showcase
- [x] Navbar dauerhaft weiß + Schatten
- [x] Hero ergebnisorientiert umformuliert
- [x] Timeline Scroll-Animation + echte Bilder
- [x] KPI-Bereich aktualisiert
- [x] Orbit-Sektion → Methoden-Darstellung mit 6 Faktoren
- [x] Section-Labels als Pill-Badges (Screenshot-Referenz)
- [x] Navigation auf Unterseiten (Impressum etc.) funktioniert jetzt korrekt
- [x] Hintergrundfarbe unter Hero vereinheitlicht
- [x] Timeline Mobile: links ausgerichtet mit vertikaler Linie
- [x] Orbit Mobile: Kreis-Darstellung statt Grid
- [x] Vergleichssektion: Andere Agenturen vs. Gründer Marketing
- [x] Datenschutz: Claude AI, Close CRM, Google Docs statt Google Ads/ChatGPT
- [x] AGB: Lead-Definition, Garantieumfang, Nachbesserung präzisiert
- [x] Alle Subheadlines gekürzt und Bindestriche entfernt
- [ ] Kontaktformular integrieren (optional)
- [ ] Google Analytics / Meta Pixel einrichten (produktiv)
- [ ] Cookie-Banner implementieren

---

*Letzte Aktualisierung: 07.04.2026*
