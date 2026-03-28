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

## Tech-Stack

| Technologie | Version | Zweck |
|------------|---------|-------|
| **Next.js** | 16.x | React-Framework mit SSG |
| **React** | 19.x | UI-Bibliothek |
| **TypeScript** | 6.x | Type-Safety |
| **Tailwind CSS** | 4.x | Utility-first CSS |
| **PostCSS** | 8.x | CSS-Processing |

## Design-System

### Farbpalette

| Farbe | Hex-Code | Verwendung |
|-------|----------|------------|
| Primary | `#1a2b4a` | Hauptfarbe, Überschriften, dunkle Sektionen |
| Primary Light | `#2a3f6a` | Hover-States, Gradienten |
| Accent (Gold) | `#c8a45c` | CTAs, Highlights, Icons |
| Accent Light | `#dbb86e` | Hover auf Accent |
| Dark | `#0f1826` | Footer, dunkle Bereiche |
| Light | `#f8f7f4` | Hintergründe |
| Section Alt | `#f1f0ec` | Alternative Sektionshintergründe |

### Typografie

- **Font:** Inter (Google Fonts)
- **Gewichte:** 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold), 800 (Extrabold)

## Seitenstruktur

### Startseite (Single-Page)

1. **Header** – Sticky Navigation mit Logo, Menü-Links und CTA-Button
2. **Hero** – Vollbild-Hero mit Headline, Subtext, zwei CTAs und Trust-Indikatoren
3. **Herausforderungen** – Zwei Karten: "Zu wenig Verkaufsobjekte" + "Fehlende Kaufinteressenten"
4. **Lösung** – 3-Schritte-Prozess: Marktpräsenz → Kontaktanfragen → Wachstum
5. **Zielgruppen** – Immobilienmakler, Bauträger, Verwaltungen
6. **Leistungen** – 3 Service-Karten mit Features-Listen
7. **Vorteile** – 4 Vorteile in kompakten Karten
8. **Über uns** – Gründer-Profil, Mission-Statement, 3 Qualitäts-Merkmale
9. **FAQ** – 5 aufklappbare Fragen mit Antworten
10. **CTA** – Abschluss-Call-to-Action mit Telefon & E-Mail
11. **Footer** – Navigation, Öffnungszeiten, Kontakt, Legal-Links

## Komponenten-Übersicht

| Datei | Beschreibung |
|-------|-------------|
| `src/app/layout.tsx` | Root-Layout mit Metadata, Fonts, Header, Footer |
| `src/app/page.tsx` | Hauptseite – bindet alle Sektionen ein |
| `src/app/globals.css` | Tailwind-Imports, Theme-Variablen, Animationen |
| `src/components/Header.tsx` | Sticky Header mit Mobile-Menü |
| `src/components/Hero.tsx` | Hero-Section mit Gradient-Background |
| `src/components/Challenges.tsx` | Problem-Karten |
| `src/components/Solution.tsx` | 3-Schritte-Lösung |
| `src/components/TargetGroup.tsx` | Zielgruppen-Karten |
| `src/components/Services.tsx` | Leistungs-Karten mit Feature-Listen |
| `src/components/Advantages.tsx` | Vorteile-Grid |
| `src/components/About.tsx` | Gründer-Profil, Mission, Qualitäten |
| `src/components/FAQ.tsx` | Akkordeon-FAQ |
| `src/components/CTA.tsx` | Call-to-Action-Sektion |
| `src/components/Footer.tsx` | Footer mit Kontakt & Legal |

## Kontaktdaten (auf der Website)

- **Telefon:** +49 (0) 175 4024 912
- **E-Mail:** info@marketing-gruender.de
- **Öffnungszeiten:** Mo–Fr 09:00–17:00 Uhr

## SEO-Optimierung

- Semantische HTML-Struktur (h1, h2, h3 Hierarchie)
- OpenGraph Meta-Tags für Social Sharing
- Beschreibende Meta-Description
- Keywords für Immobilienmakler-Marketing
- Responsive Design (Mobile-first)
- Performante Ladezeiten durch Static Export

## Deployment

- **Output:** Static Export (`next build` → `/out`)
- **Konfiguration:** `next.config.ts` mit `output: "export"`

## Offene Punkte / TODOs

- [ ] Echtes Foto von Malte-Valentin Gründer einbinden
- [ ] Firmenlogo einbinden (aktuell Text-Logo)
- [ ] Impressum-Seite erstellen
- [ ] Datenschutzerklärung-Seite erstellen
- [ ] AGB-Seite erstellen
- [ ] Kontaktformular integrieren (optional)
- [ ] Google Analytics / Tracking einrichten
- [ ] Favicon erstellen und einbinden

---

*Letzte Aktualisierung: 28.03.2026*
