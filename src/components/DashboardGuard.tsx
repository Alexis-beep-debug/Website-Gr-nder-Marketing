"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "gm_dashboard_auth";
const CORRECT_PASSWORD = "gruender2026";

export default function DashboardGuard({ children }: { children: React.ReactNode }) {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    setAuthenticated(stored === "true");
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === CORRECT_PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, "true");
      setAuthenticated(true);
    } else {
      setError(true);
      setShake(true);
      setInput("");
      setTimeout(() => setShake(false), 500);
    }
  };

  // Still checking
  if (authenticated === null) return null;

  // Authenticated – show dashboard
  if (authenticated) return <>{children}</>;

  // Login screen
  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-4">
      <div className={`w-full max-w-sm ${shake ? "animate-shake" : ""}`}>

        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-white font-bold text-lg">
            G
          </div>
          <div className="leading-tight">
            <span className="font-bold text-lg text-white block">Gründer</span>
            <span className="text-accent text-xs font-semibold tracking-wider uppercase">Marketing</span>
          </div>
        </div>

        <div className="bg-primary/80 border border-white/10 rounded-2xl p-8 shadow-2xl">
          <h1 className="text-white font-bold text-xl mb-1">Dashboard</h1>
          <p className="text-white/50 text-sm mb-8">Bitte Passwort eingeben</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                value={input}
                onChange={(e) => { setInput(e.target.value); setError(false); }}
                placeholder="Passwort"
                autoFocus
                className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none transition-all focus:ring-2 focus:ring-accent/50 ${
                  error ? "border-red-500/60 bg-red-500/5" : "border-white/10 focus:border-accent/50"
                }`}
              />
              {error && (
                <p className="text-red-400 text-xs mt-2">Falsches Passwort. Bitte erneut versuchen.</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-accent hover:bg-accent-light text-white font-semibold py-3 rounded-xl transition-colors"
            >
              Anmelden
            </button>
          </form>
        </div>

        <p className="text-center text-white/20 text-xs mt-6">
          Nur für interne Nutzung
        </p>
      </div>
    </div>
  );
}
