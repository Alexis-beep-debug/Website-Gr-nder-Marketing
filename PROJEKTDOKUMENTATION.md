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

## Changelog

| Datum | Änderung |
|-------|----------|
| 31.03.2026 | Initiales Projekt-Setup: Next.js 16, React 19, TypeScript, Tailwind CSS 4 |
| 31.03.2026 | Alle Sektionen erstellt (Hero, Challenges, Solution, TargetGroup, Services, Advantages, About, FAQ, CTA, Footer) |
| 31.03.2026 | Fix: `output: "export"` aus `next.config.ts` entfernt – Railway benötigt Node-Server (`next start`) statt Static Export |
| 31.03.2026 | DNS-Konfiguration bei IONOS: CNAME für www → Railway, TXT für Railway-Verifizierung |
| 31.03.2026 | Domain-Weiterleitung bei IONOS: marketing-gruender.de → https://www.marketing-gruender.de (301) |
| 31.03.2026 | SSL-Hinweis: Weiterleitung muss auf https:// zeigen, Railway stellt SSL-Zertifikat automatisch aus |

## Offene Punkte / TODOs

- [ ] SSL: Weiterleitung bei IONOS auf `https://www.marketing-gruender.de` prüfen
- [ ] Alte A-Record und AAAA-Record bei IONOS löschen (falls noch nicht geschehen)
- [ ] Echtes Foto von Malte-Valentin Gründer einbinden
- [ ] Firmenlogo einbinden (aktuell Text-Logo)
- [ ] Impressum-Seite erstellen
- [ ] Datenschutzerklärung-Seite erstellen
- [ ] AGB-Seite erstellen
- [ ] Kontaktformular integrieren (optional)
- [ ] Google Analytics / Tracking einrichten
- [ ] Favicon erstellen und einbinden

---

*Letzte Aktualisierung: 31.03.2026*
