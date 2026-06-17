"use client";
import { useState, useEffect } from "react";
import Ticker from "../components/Ticker";
import StockRow from "../components/StockRow";
import AdBanner from "../components/AdBanner";
import RewardsModal from "../components/RewardsModal";
import PricingCards from "../components/PricingCards";
import { portfolioStats, stocks, sectorAllocation, topPerformers } from "../data/stocks";

type Filter = "All" | "Technology" | "Healthcare" | "Financials" | "Consumer" | "Energy";
const filters: Filter[] = ["All", "Technology", "Healthcare", "Financials", "Consumer", "Energy"];

export default function Dashboard() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const [activeTab, setActiveTab] = useState("Holdings");
  const [points, setPoints] = useState(240);
  const [showRewards, setShowRewards] = useState(false);
  const [adFreeUntil, setAdFreeUntil] = useState<number | null>(null);
  const [adFreeLeft, setAdFreeLeft] = useState(0);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const t = setInterval(() => {
      const n = Date.now();
      setNow(n);
      if (adFreeUntil) {
        setAdFreeLeft(Math.max(0, Math.round((adFreeUntil - n) / 60000)));
        if (n >= adFreeUntil) setAdFreeUntil(null);
      }
    }, 5000);
    return () => clearInterval(t);
  }, [adFreeUntil]);

  const handleEarnPoints = (pts: number) => setPoints((p) => p + pts);

  const handleAdFree = (minutes: number) => {
    setPoints((p) => p - (minutes >= 1440 ? 420 : 80));
    setAdFreeUntil(Date.now() + minutes * 60 * 1000);
    setAdFreeLeft(minutes);
  };

  const filtered = activeFilter === "All"
    ? stocks
    : stocks.filter((s) => s.sector.toLowerCase() === activeFilter.toLowerCase());

  const isAdFree = adFreeUntil && now < adFreeUntil;

  return (
    <div style={{ minHeight: "100vh", background: "var(--background)" }}>

      {/* ── Nav ── */}
      <nav className="glass sticky top-0 z-50 border-b" style={{ borderColor: "var(--border)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div className="flex items-center justify-between h-14">
            {/* Tabs */}
            <div className="hidden md:flex items-center gap-1">
              {["Holdings", "Analytics", "Transactions", "Reports"].map((tab) => (
                <button key={tab} onClick={() => setActiveTab(tab)} className="px-5 py-3 rounded-full text-sm transition-all"
                  style={{
                    background: activeTab === tab ? "var(--surface-2)" : "transparent",
                    border: activeTab === tab ? "1px solid var(--border)" : "1px solid transparent",
                    color: activeTab === tab ? "var(--text-primary)" : "var(--text-secondary)",
                    fontFamily: "'Space Grotesk', sans-serif", cursor: "pointer",
                    fontWeight: activeTab === tab ? 600 : 400,
                    lineHeight: 1.6,
                  }}>
                  {tab}
                </button>
              ))}
            </div>


            {/* Logo */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full animate-pulse-green" style={{ background: "var(--accent-green)", display: "inline-block" }} />
              <span className="font-bold text-base" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text-primary)" }}>
                Cleuves Insights Portfolio
              </span>
            </div>


            {/* Right: points + ad-free + profile */}
            <div className="flex items-center gap-3">
              {/* Ad-free badge */}
              {isAdFree && (
                <div style={{ fontSize: 11, fontWeight: 600, color: "var(--accent-green)", display: "flex", alignItems: "center", gap: 4 }}>
                  <span>✓</span> Ad-free · {adFreeLeft}m left
                </div>
              )}
              {/* Points pill */}
              <button
                onClick={() => setShowRewards(true)}
                style={{ display: "flex", alignItems: "center", gap: 6, background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 20, padding: "5px 12px", cursor: "pointer" }}
              >
                <span style={{ fontSize: 14 }}>⭐</span>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 13, color: "var(--text-primary)" }}>{points} pts</span>
              </button>
              {/* Live */}
              <div className="hidden md:flex items-center gap-2 text-sm">
                <span className="animate-pulse-green" style={{ color: "var(--accent-green)", fontSize: 12, fontWeight: 600 }}>● LIVE</span>
                <span className="muted">· NYSE</span>
              </div>
              {/* Profile avatar */}
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg, #4da6ff, #6c47ff)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: "#fff", flexShrink: 0, cursor: "pointer" }}>
                NS
              </div>
            </div>
          </div>
        </div>
      </nav>

      <Ticker />

      {/* ── Ad Banner (shows after 15s, lasts 30s) ── */}
      {!isAdFree && <AdBanner onEarnPoints={handleEarnPoints} adFreeUntil={adFreeUntil} />}

      {/* ── Hero Stats ── */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 24px 0" }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px" style={{ background: "var(--border)", borderRadius: 12, overflow: "hidden" }}>
          {[
            { label: "PORTFOLIO VALUE", value: `$${portfolioStats.value.toLocaleString("en-US", { minimumFractionDigits: 2 })}`, sub: `▲ +$${portfolioStats.dayChangeAmt.toFixed(2)} today`, subColor: "var(--accent-green)" },
            { label: "TOTAL RETURN", value: `+${portfolioStats.totalReturnPct.toFixed(2)}%`, sub: `+$${portfolioStats.totalReturnAmt.toLocaleString()} all time`, subColor: "var(--accent-green)", valueColor: "var(--accent-green)" },
            { label: "DAY CHANGE", value: `+$${portfolioStats.dayChangeAmt.toFixed(2)}`, sub: `+${portfolioStats.dayChangePct.toFixed(2)}%`, subColor: "var(--accent-green)", valueColor: "var(--accent-green)" },
            { label: "POSITIONS", value: `${portfolioStats.positions}`, sub: `${portfolioStats.gaining} gaining · ${portfolioStats.down} down`, subColor: "var(--text-secondary)" },
          ].map((stat, i) => (
            <div key={i} style={{ background: "var(--surface)", padding: "28px 24px" }}>
              <div className="text-xs font-semibold tracking-widest mb-2" style={{ color: "var(--text-secondary)", fontFamily: "'Space Grotesk', sans-serif" }}>{stat.label}</div>
              <div className="text-3xl font-bold mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif", color: (stat as { valueColor?: string }).valueColor || "var(--text-primary)", lineHeight: 1.1 }}>{stat.value}</div>
              <div className="text-sm" style={{ color: stat.subColor }}>{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Holdings Table ── */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 24px 60px" }}>
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {filters.map((f) => (
            <button key={f} onClick={() => setActiveFilter(f)} className="px-5 py-2 rounded-full text-sm transition-all"
              style={{
                background: activeFilter === f ? "var(--text-primary)" : "var(--surface)",
                color: activeFilter === f ? "var(--background)" : "var(--text-secondary)",
                border: "1px solid var(--border)", cursor: "pointer",
                fontWeight: activeFilter === f ? 700 : 400,
                fontFamily: "'Space Grotesk', sans-serif",
              }}>
              {f}
            </button>
          ))}
          <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
            {["Value", "Return"].map((btn) => (
              <button key={btn} className="px-3 py-1.5 text-xs rounded-lg muted"
                style={{ background: "var(--surface)", border: "1px solid var(--border)", cursor: "pointer", fontFamily: "'Space Grotesk', sans-serif" }}>
                ↕ {btn}
              </button>
            ))}
          </div>
        </div>

        <div className="card" style={{ overflowX: "auto", marginTop: 16 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", borderRadius: 12, overflow: "hidden" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid var(--border)", borderRadius: "12px 12px 0 0" }}>
                {["SYMBOL", "PRICE", "TODAY", "SHARES", "VALUE", "TOTAL RETURN", "7D TREND"].map((col) => (
                  <th key={col} className="py-3 px-4"
                    style={{
                      fontSize: 11, fontWeight: 600, letterSpacing: "0.08em",
                      color: "var(--text-secondary)", fontFamily: "'Space Grotesk', sans-serif",
                      textAlign: col === "SYMBOL" || col === "7D TREND" ? "left" : "right",
                    }}>
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((stock) => <StockRow key={stock.symbol} stock={stock} />)}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Analytics ── */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 0" }}>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card" style={{ padding: 28 }}>
            <div className="text-xs font-semibold tracking-widest mb-6" style={{ color: "var(--text-secondary)", fontFamily: "'Space Grotesk', sans-serif" }}>SECTOR ALLOCATION</div>
            <div className="flex flex-col gap-4">
              {sectorAllocation.map((sector) => (
                <div key={sector.name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span style={{ color: "var(--text-primary)", fontFamily: "'Space Grotesk', sans-serif" }}>{sector.name}</span>
                    <span className="font-semibold" style={{ color: "var(--text-secondary)" }}>{sector.pct}%</span>
                  </div>
                  <div style={{ background: "var(--surface-2)", borderRadius: 4, height: 6, overflow: "hidden" }}>
                    <div style={{ width: `${sector.pct}%`, height: "100%", background: sector.color, borderRadius: 4 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card" style={{ padding: 28 }}>
            <div className="text-xs font-semibold tracking-widest mb-6" style={{ color: "var(--text-secondary)", fontFamily: "'Space Grotesk', sans-serif" }}>TOP PERFORMERS</div>
            <div className="flex flex-col gap-2">
              {topPerformers.map((p) => (
                <div key={p.symbol} className="flex items-center justify-between py-3 border-b" style={{ borderColor: "var(--border)" }}>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center font-bold text-xs rounded-lg"
                      style={{ width: 34, height: 34, flexShrink: 0, background: "var(--surface-2)", color: "var(--text-secondary)", fontFamily: "'Space Grotesk', sans-serif" }}>
                      {p.abbr}
                    </div>
                    <div>
                      <div className="font-semibold text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{p.symbol}</div>
                      <div className="text-xs muted">{p.name}</div>
                    </div>
                  </div>
                  <span className="green font-bold text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>+{p.returnPct.toFixed(2)}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Pricing Cards ── */}
      <PricingCards />

      {/* ── Footer ── */}
      <footer className="border-t" style={{ borderColor: "var(--border)", padding: "24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm muted">
            <span style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Cleuves Insights Portfolio · Live market data</span>
            <span>Not financial advice. For informational purposes only.</span>
          </div>
        </div>
      </footer>

      {/* ── Rewards Modal ── */}
      {showRewards && (
        <RewardsModal
          points={points}
          onEarn={handleEarnPoints}
          onAdFree={handleAdFree}
          onClose={() => setShowRewards(false)}
        />
      )}
    </div>
  );
}
