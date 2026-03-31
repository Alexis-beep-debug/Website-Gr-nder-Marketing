import { NextRequest, NextResponse } from "next/server";

const BUNDESLAND_MAP: Record<string, string> = {
  "Baden-Württemberg": "Baden-Württemberg",
  "Bavaria": "Bayern",
  "Bayern": "Bayern",
  "Berlin": "Berlin",
  "Brandenburg": "Brandenburg",
  "Bremen": "Bremen",
  "Hamburg": "Hamburg",
  "Hesse": "Hessen",
  "Hessen": "Hessen",
  "Lower Saxony": "Niedersachsen",
  "Niedersachsen": "Niedersachsen",
  "Mecklenburg-Western Pomerania": "Mecklenburg-Vorpommern",
  "Mecklenburg-Vorpommern": "Mecklenburg-Vorpommern",
  "North Rhine-Westphalia": "Nordrhein-Westfalen",
  "Nordrhein-Westfalen": "Nordrhein-Westfalen",
  "Rhineland-Palatinate": "Rheinland-Pfalz",
  "Rheinland-Pfalz": "Rheinland-Pfalz",
  "Saarland": "Saarland",
  "Saxony": "Sachsen",
  "Sachsen": "Sachsen",
  "Saxony-Anhalt": "Sachsen-Anhalt",
  "Sachsen-Anhalt": "Sachsen-Anhalt",
  "Schleswig-Holstein": "Schleswig-Holstein",
  "Thuringia": "Thüringen",
  "Thüringen": "Thüringen",
};

export async function GET(request: NextRequest) {
  try {
    // Get visitor IP from headers
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() || "auto";

    // Call free GeoIP API (server-to-server, no CORS issues)
    const url =
      ip === "auto" || ip === "127.0.0.1" || ip === "::1"
        ? "http://ip-api.com/json/?fields=status,country,regionName"
        : `http://ip-api.com/json/${ip}?fields=status,country,regionName`;

    const res = await fetch(url, { next: { revalidate: 3600 } });
    const data = await res.json();

    if (data.status !== "success" || data.country !== "Germany") {
      return NextResponse.json({ region: null });
    }

    const region = BUNDESLAND_MAP[data.regionName] || data.regionName;
    return NextResponse.json({ region });
  } catch {
    return NextResponse.json({ region: null });
  }
}
