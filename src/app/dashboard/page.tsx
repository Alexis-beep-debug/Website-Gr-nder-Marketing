"use client";

import { useState, useEffect, useMemo } from "react";
import { getTrackingData, generateDemoData, type TrackingData } from "@/lib/tracking";

type TimeRange = "7d" | "14d" | "30d";

export default function DashboardPage() {
  const [data, setData] = useState<TrackingData | null>(null);
  const [range, setRange] = useState<TimeRange>("30d");
  const [useDemoData, setUseDemoData] = useState(false);

  useEffect(() => {
    const real = getTrackingData();
    const hasData = real.pageViews.length > 10;
    if (!hasData) {
      setUseDemoData(true);
      setData(generateDemoData());
    } else {
      setData(real);
    }
  }, []);

  const rangeDays = range === "7d" ? 7 : range === "14d" ? 14 : 30;
  const cutoff = Date.now() - rangeDays * 86400000;

  const filtered = useMemo(() => {
    if (!data) return null;
    return {
      pageViews: data.pageViews.filter((v) => v.timestamp >= cutoff),
      clicks: data.clicks.filter((c) => c.timestamp >= cutoff),
      leads: data.leads.filter((l) => l.timestamp >= cutoff),
      sessions: data.sessions.filter((s) => s.start >= cutoff),
    };
  }, [data, cutoff]);

  if (!data || !filtered) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <div className="text-white text-xl">Dashboard wird geladen...</div>
      </div>
    );
  }

  const totalViews = filtered.pageViews.length;
  const uniqueVisitors = new Set(filtered.sessions.map((s) => s.id)).size;
  const totalClicks = filtered.clicks.length;
  const totalLeads = filtered.leads.length;
  const conversionRate = totalViews > 0 ? ((totalLeads / totalViews) * 100).toFixed(1) : "0";
  const avgPagesPerSession =
    filtered.sessions.length > 0
      ? (filtered.sessions.reduce((sum, s) => sum + s.pages, 0) / filtered.sessions.length).toFixed(1)
      : "0";
  const avgSessionDuration =
    filtered.sessions.length > 0
      ? Math.round(
          filtered.sessions.reduce((sum, s) => sum + (s.end - s.start), 0) /
            filtered.sessions.length /
            1000
        )
      : 0;
  const bounceRate =
    filtered.sessions.length > 0
      ? ((filtered.sessions.filter((s) => s.pages <= 1).length / filtered.sessions.length) * 100).toFixed(0)
      : "0";

  // Traffic sources
  const sourceMap: Record<string, number> = {};
  filtered.pageViews.forEach((v) => {
    const src = v.utm_source || (v.referrer ? new URL(v.referrer).hostname.replace("www.", "") : "direct");
    sourceMap[src] = (sourceMap[src] || 0) + 1;
  });
  const topSources = Object.entries(sourceMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);
  const maxSourceCount = topSources[0]?.[1] || 1;

  // Keywords
  const keywordMap: Record<string, number> = {};
  filtered.pageViews.forEach((v) => {
    if (v.utm_term) {
      keywordMap[v.utm_term] = (keywordMap[v.utm_term] || 0) + 1;
    }
  });
  const topKeywords = Object.entries(keywordMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8);

  // Clicks by section
  const sectionClickMap: Record<string, number> = {};
  filtered.clicks.forEach((c) => {
    sectionClickMap[c.section] = (sectionClickMap[c.section] || 0) + 1;
  });
  const clicksBySectionArr = Object.entries(sectionClickMap)
    .sort((a, b) => b[1] - a[1]);
  const maxSectionClicks = clicksBySectionArr[0]?.[1] || 1;

  // Clicks by label (CTA)
  const ctaMap: Record<string, number> = {};
  filtered.clicks.forEach((c) => {
    ctaMap[c.label] = (ctaMap[c.label] || 0) + 1;
  });
  const topCTAs = Object.entries(ctaMap).sort((a, b) => b[1] - a[1]).slice(0, 5);

  // Leads by type
  const leadsByType: Record<string, number> = { phone: 0, email: 0, form: 0 };
  filtered.leads.forEach((l) => {
    leadsByType[l.type] = (leadsByType[l.type] || 0) + 1;
  });

  // Lead sources
  const leadSourceMap: Record<string, number> = {};
  filtered.leads.forEach((l) => {
    leadSourceMap[l.source] = (leadSourceMap[l.source] || 0) + 1;
  });
  const topLeadSources = Object.entries(leadSourceMap).sort((a, b) => b[1] - a[1]);

  // Daily views for chart
  const dailyViews: { date: string; views: number; clicks: number }[] = [];
  for (let d = rangeDays - 1; d >= 0; d--) {
    const dayStart = Date.now() - (d + 1) * 86400000;
    const dayEnd = Date.now() - d * 86400000;
    const dateStr = new Date(dayEnd).toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit" });
    dailyViews.push({
      date: dateStr,
      views: filtered.pageViews.filter((v) => v.timestamp >= dayStart && v.timestamp < dayEnd).length,
      clicks: filtered.clicks.filter((c) => c.timestamp >= dayStart && c.timestamp < dayEnd).length,
    });
  }
  const maxDailyViews = Math.max(...dailyViews.map((d) => d.views), 1);

  // Top pages
  const pageMap: Record<string, number> = {};
  filtered.pageViews.forEach((v) => {
    pageMap[v.path] = (pageMap[v.path] || 0) + 1;
  });
  const topPages = Object.entries(pageMap).sort((a, b) => b[1] - a[1]).slice(0, 5);

  const sourceColors: Record<string, string> = {
    google: "bg-blue-500",
    direct: "bg-accent",
    facebook: "bg-indigo-500",
    instagram: "bg-pink-500",
    referral: "bg-green-500",
    "google.com": "bg-blue-500",
    "facebook.com": "bg-indigo-500",
    "instagram.com": "bg-pink-500",
    "immoscout24.de": "bg-green-500",
  };

  const sectionLabels: Record<string, string> = {
    hero: "Hero",
    services: "Leistungen",
    cta: "CTA-Sektion",
    header: "Header/Nav",
    challenges: "Herausforderungen",
    solution: "Lösung",
    unknown: "Sonstige",
    faq: "FAQ",
    about: "Über uns",
    advantages: "Vorteile",
  };

  const refreshData = () => {
    if (useDemoData) {
      setData(generateDemoData());
    } else {
      setData(getTrackingData());
    }
  };

  const toggleDemoData = () => {
    if (useDemoData) {
      setData(getTrackingData());
      setUseDemoData(false);
    } else {
      setData(generateDemoData());
      setUseDemoData(true);
    }
  };

  return (
    <div className="min-h-screen bg-dark">
      {/* Dashboard Header */}
      <div className="bg-primary border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white">
                Website Dashboard
              </h1>
              <p className="text-white/60 text-sm mt-1">
                marketing-gruender.de — KPI-Übersicht
              </p>
            </div>
            <div className="flex items-center gap-3">
              {useDemoData && (
                <span className="bg-accent/20 text-accent text-xs font-medium px-3 py-1 rounded-full">
                  Demo-Daten
                </span>
              )}
              <div className="flex bg-white/10 rounded-lg p-0.5">
                {(["7d", "14d", "30d"] as TimeRange[]).map((r) => (
                  <button
                    key={r}
                    onClick={() => setRange(r)}
                    className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
                      range === r
                        ? "bg-accent text-white"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {r === "7d" ? "7 Tage" : r === "14d" ? "14 Tage" : "30 Tage"}
                  </button>
                ))}
              </div>
              <button
                onClick={refreshData}
                className="p-2 text-white/60 hover:text-white transition-colors"
                title="Aktualisieren"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182" />
                </svg>
              </button>
              <button
                onClick={toggleDemoData}
                className="text-xs text-white/40 hover:text-white/70 transition-colors"
              >
                {useDemoData ? "Live-Daten" : "Demo-Daten"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <KPICard
            title="Seitenaufrufe"
            value={totalViews.toLocaleString("de-DE")}
            icon={
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.64 0 8.577 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.64 0-8.577-3.007-9.963-7.178Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            }
          />
          <KPICard
            title="Besucher"
            value={uniqueVisitors.toLocaleString("de-DE")}
            icon={
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
              </svg>
            }
          />
          <KPICard
            title="Klicks"
            value={totalClicks.toLocaleString("de-DE")}
            icon={
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
              </svg>
            }
          />
          <KPICard
            title="Leads"
            value={totalLeads.toString()}
            subtitle={`${conversionRate}% CR`}
            icon={
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
              </svg>
            }
            highlight
          />
        </div>

        {/* Secondary KPIs */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-primary/80 rounded-xl p-4 border border-white/10">
            <p className="text-white/50 text-xs font-medium uppercase tracking-wider">Seiten / Sitzung</p>
            <p className="text-white text-2xl font-bold mt-1">{avgPagesPerSession}</p>
          </div>
          <div className="bg-primary/80 rounded-xl p-4 border border-white/10">
            <p className="text-white/50 text-xs font-medium uppercase tracking-wider">Verweildauer</p>
            <p className="text-white text-2xl font-bold mt-1">
              {avgSessionDuration > 60
                ? `${Math.floor(avgSessionDuration / 60)}m ${avgSessionDuration % 60}s`
                : `${avgSessionDuration}s`}
            </p>
          </div>
          <div className="bg-primary/80 rounded-xl p-4 border border-white/10">
            <p className="text-white/50 text-xs font-medium uppercase tracking-wider">Absprungrate</p>
            <p className="text-white text-2xl font-bold mt-1">{bounceRate}%</p>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Daily Views Chart */}
          <div className="lg:col-span-2 bg-primary/80 rounded-2xl p-6 border border-white/10">
            <h2 className="text-white font-semibold text-lg mb-4">Besucher-Verlauf</h2>
            <div className="flex items-end gap-[2px] h-48">
              {dailyViews.map((d, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1 group relative">
                  <div className="absolute -top-8 bg-dark text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                    {d.date}: {d.views} Aufrufe, {d.clicks} Klicks
                  </div>
                  <div className="w-full flex flex-col justify-end h-40 gap-0.5">
                    <div
                      className="w-full bg-accent/80 rounded-t-sm transition-all group-hover:bg-accent"
                      style={{ height: `${(d.views / maxDailyViews) * 100}%`, minHeight: d.views > 0 ? "2px" : 0 }}
                    />
                  </div>
                  {(i % Math.ceil(rangeDays / 10) === 0 || i === dailyViews.length - 1) && (
                    <span className="text-white/30 text-[9px]">{d.date}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Lead Types */}
          <div className="bg-primary/80 rounded-2xl p-6 border border-white/10">
            <h2 className="text-white font-semibold text-lg mb-4">Lead-Typen</h2>
            <div className="space-y-4">
              {[
                { label: "Telefon", value: leadsByType.phone, icon: "phone", color: "bg-green-500" },
                { label: "E-Mail", value: leadsByType.email, icon: "email", color: "bg-blue-500" },
                { label: "Formular", value: leadsByType.form, icon: "form", color: "bg-purple-500" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${item.color}`} />
                  <span className="text-white/70 text-sm flex-1">{item.label}</span>
                  <span className="text-white font-bold text-lg">{item.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-white/10">
              <p className="text-white/40 text-xs uppercase tracking-wider mb-3">Leadquellen</p>
              {topLeadSources.length === 0 ? (
                <p className="text-white/30 text-sm">Noch keine Daten</p>
              ) : (
                <div className="space-y-2">
                  {topLeadSources.map(([source, count]) => (
                    <div key={source} className="flex items-center justify-between">
                      <span className="text-white/60 text-sm capitalize">{source}</span>
                      <span className="text-white font-medium text-sm">{count}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Middle Row */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Traffic Sources */}
          <div className="bg-primary/80 rounded-2xl p-6 border border-white/10">
            <h2 className="text-white font-semibold text-lg mb-4">Traffic-Quellen</h2>
            <div className="space-y-3">
              {topSources.map(([source, count]) => (
                <div key={source} className="group">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white/80 text-sm capitalize font-medium">{source}</span>
                    <span className="text-white/50 text-sm">
                      {count} <span className="text-white/30">({((count / totalViews) * 100).toFixed(0)}%)</span>
                    </span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-2.5">
                    <div
                      className={`${sourceColors[source] || "bg-accent"} h-2.5 rounded-full transition-all group-hover:opacity-80`}
                      style={{ width: `${(count / maxSourceCount) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Keywords */}
          <div className="bg-primary/80 rounded-2xl p-6 border border-white/10">
            <h2 className="text-white font-semibold text-lg mb-4">Top Keywords</h2>
            {topKeywords.length === 0 ? (
              <p className="text-white/30 text-sm">Noch keine Keyword-Daten vorhanden</p>
            ) : (
              <div className="space-y-2.5">
                {topKeywords.map(([kw, count], i) => (
                  <div key={kw} className="flex items-center gap-3">
                    <span className="text-accent font-bold text-sm w-5">{i + 1}</span>
                    <span className="text-white/80 text-sm flex-1 truncate">{kw}</span>
                    <span className="text-white/50 text-sm font-medium">{count}x</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Click Analysis by Section */}
          <div className="bg-primary/80 rounded-2xl p-6 border border-white/10">
            <h2 className="text-white font-semibold text-lg mb-4">Klicks nach Sektion</h2>
            <div className="space-y-3">
              {clicksBySectionArr.map(([section, count]) => (
                <div key={section} className="group">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white/80 text-sm font-medium">
                      {sectionLabels[section] || section}
                    </span>
                    <span className="text-white/50 text-sm">{count} Klicks</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-2">
                    <div
                      className="bg-accent h-2 rounded-full transition-all"
                      style={{ width: `${(count / maxSectionClicks) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Performance + Top Pages */}
          <div className="space-y-6">
            <div className="bg-primary/80 rounded-2xl p-6 border border-white/10">
              <h2 className="text-white font-semibold text-lg mb-4">CTA-Performance</h2>
              {topCTAs.length === 0 ? (
                <p className="text-white/30 text-sm">Noch keine Klick-Daten</p>
              ) : (
                <div className="space-y-2">
                  {topCTAs.map(([label, count]) => (
                    <div key={label} className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-2.5">
                      <span className="text-white/80 text-sm truncate mr-3">&ldquo;{label}&rdquo;</span>
                      <span className="text-accent font-bold text-sm whitespace-nowrap">{count}x</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="bg-primary/80 rounded-2xl p-6 border border-white/10">
              <h2 className="text-white font-semibold text-lg mb-4">Top Seiten</h2>
              <div className="space-y-2">
                {topPages.map(([page, count]) => (
                  <div key={page} className="flex items-center justify-between">
                    <span className="text-white/70 text-sm font-mono truncate mr-3">{page}</span>
                    <span className="text-white/50 text-sm">{count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-center text-white/20 text-xs pb-8 pt-4">
          Daten werden lokal im Browser gespeichert. Für produktives Tracking empfehlen wir die Anbindung an Google Analytics, Meta Pixel oder ein eigenes Backend.
        </div>
      </div>
    </div>
  );
}

function KPICard({
  title,
  value,
  subtitle,
  icon,
  highlight,
}: {
  title: string;
  value: string;
  subtitle?: string;
  icon: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-5 border transition-all hover:scale-[1.02] ${
        highlight
          ? "bg-accent/20 border-accent/30"
          : "bg-primary/80 border-white/10"
      }`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-white/50 text-xs font-medium uppercase tracking-wider">{title}</p>
          <p className="text-white text-3xl font-bold mt-1">{value}</p>
          {subtitle && <p className="text-accent text-sm font-medium mt-0.5">{subtitle}</p>}
        </div>
        <div className={`${highlight ? "text-accent" : "text-white/30"}`}>{icon}</div>
      </div>
    </div>
  );
}
