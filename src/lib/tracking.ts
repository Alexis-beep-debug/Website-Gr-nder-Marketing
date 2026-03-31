export interface PageView {
  path: string;
  referrer: string;
  timestamp: number;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  userAgent: string;
  sessionId: string;
}

export interface ClickEvent {
  element: string;
  section: string;
  label: string;
  timestamp: number;
  sessionId: string;
}

export interface LeadEvent {
  source: string;
  type: "phone" | "email" | "form";
  timestamp: number;
  sessionId: string;
}

export interface TrackingData {
  pageViews: PageView[];
  clicks: ClickEvent[];
  leads: LeadEvent[];
  sessions: { id: string; start: number; end: number; pages: number }[];
}

const STORAGE_KEY = "gm_tracking_data";

function getSessionId(): string {
  let sessionId = sessionStorage.getItem("gm_session_id");
  if (!sessionId) {
    sessionId = `s_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
    sessionStorage.setItem("gm_session_id", sessionId);
  }
  return sessionId;
}

function getUTMParams(): Record<string, string> {
  const params = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};
  for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_term"]) {
    const val = params.get(key);
    if (val) utm[key] = val;
  }
  return utm;
}

export function getTrackingData(): TrackingData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    // ignore parse errors
  }
  return { pageViews: [], clicks: [], leads: [], sessions: [] };
}

function saveTrackingData(data: TrackingData): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // storage full - remove oldest entries
    data.pageViews = data.pageViews.slice(-500);
    data.clicks = data.clicks.slice(-500);
    data.leads = data.leads.slice(-200);
    data.sessions = data.sessions.slice(-200);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }
}

export function trackPageView(): void {
  const data = getTrackingData();
  const sessionId = getSessionId();
  const utm = getUTMParams();

  data.pageViews.push({
    path: window.location.pathname + window.location.hash,
    referrer: document.referrer,
    timestamp: Date.now(),
    ...utm,
    userAgent: navigator.userAgent,
    sessionId,
  });

  // Update session
  const existingSession = data.sessions.find((s) => s.id === sessionId);
  if (existingSession) {
    existingSession.end = Date.now();
    existingSession.pages += 1;
  } else {
    data.sessions.push({
      id: sessionId,
      start: Date.now(),
      end: Date.now(),
      pages: 1,
    });
  }

  saveTrackingData(data);
}

export function trackClick(element: string, section: string, label: string): void {
  const data = getTrackingData();
  data.clicks.push({
    element,
    section,
    label,
    timestamp: Date.now(),
    sessionId: getSessionId(),
  });
  saveTrackingData(data);
}

export function trackLead(source: string, type: LeadEvent["type"]): void {
  const data = getTrackingData();
  data.leads.push({
    source,
    type,
    timestamp: Date.now(),
    sessionId: getSessionId(),
  });
  saveTrackingData(data);
}

// Demo data generator for dashboard preview
export function generateDemoData(): TrackingData {
  const now = Date.now();
  const day = 86400000;
  const sources = ["google", "direct", "facebook", "instagram", "referral"];
  const pages = ["/", "/#leistungen", "/#kontakt", "/#ueber-uns", "/#faq"];
  const sections = ["hero", "services", "cta", "header", "challenges", "solution"];
  const keywords = [
    "immobilienmakler marketing",
    "makler leads generieren",
    "objektakquise digital",
    "immobilien marketing agentur",
    "eigentümer leads",
    "makler sichtbarkeit",
    "immobilienmakler werbung",
    "alleinaufträge gewinnen",
  ];

  const data: TrackingData = { pageViews: [], clicks: [], leads: [], sessions: [] };

  // Generate 30 days of data
  for (let d = 29; d >= 0; d--) {
    const dayStart = now - d * day;
    const viewsPerDay = Math.floor(Math.random() * 40) + 15;

    for (let v = 0; v < viewsPerDay; v++) {
      const sessionId = `demo_${d}_${v}`;
      const source = sources[Math.floor(Math.random() * sources.length)];
      const timestamp = dayStart + Math.floor(Math.random() * day);

      data.pageViews.push({
        path: pages[Math.floor(Math.random() * pages.length)],
        referrer: source === "google" ? "https://www.google.com/" :
                  source === "facebook" ? "https://www.facebook.com/" :
                  source === "instagram" ? "https://www.instagram.com/" :
                  source === "referral" ? "https://immoscout24.de/" : "",
        timestamp,
        utm_source: source !== "direct" ? source : undefined,
        utm_medium: source === "google" ? "organic" :
                    source === "facebook" || source === "instagram" ? "social" :
                    source === "referral" ? "referral" : undefined,
        utm_campaign: Math.random() > 0.7 ? "spring_2026" : undefined,
        utm_term: source === "google" ? keywords[Math.floor(Math.random() * keywords.length)] : undefined,
        userAgent: "Mozilla/5.0 (Demo)",
        sessionId,
      });

      if (Math.random() > 0.5) {
        data.clicks.push({
          element: "button",
          section: sections[Math.floor(Math.random() * sections.length)],
          label: Math.random() > 0.5 ? "Erstgespräch vereinbaren" : "Jetzt anrufen",
          timestamp: timestamp + 5000,
          sessionId,
        });
      }

      if (v < 2 && !data.sessions.find((s) => s.id === sessionId)) {
        data.sessions.push({
          id: sessionId,
          start: timestamp,
          end: timestamp + Math.floor(Math.random() * 300000),
          pages: Math.floor(Math.random() * 5) + 1,
        });
      }
    }

    // 1-3 leads per day
    const leadsPerDay = Math.floor(Math.random() * 3);
    for (let l = 0; l < leadsPerDay; l++) {
      data.leads.push({
        source: sources[Math.floor(Math.random() * sources.length)],
        type: (["phone", "email", "form"] as const)[Math.floor(Math.random() * 3)],
        timestamp: dayStart + Math.floor(Math.random() * day),
        sessionId: `demo_${d}_lead_${l}`,
      });
    }
  }

  return data;
}
