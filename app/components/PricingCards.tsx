"use client";
import { useState } from "react";

type Plan = "Daily" | "Weekly" | "Monthly";

const plans = {
  Daily: { price: 100, period: "day", label: "Daily", sub: "24 hours of access", save: null, popular: false, index: "01" },
  Weekly: { price: 500, period: "week", label: "Weekly", sub: "7 days of access", save: "SAVE 29%", popular: false, index: "02" },
  Monthly: { price: 1800, period: "month", label: "Monthly", sub: "30 days of access", save: "SAVE 40%", popular: true, index: "03" },
};

const features = [
  "Unlimited queries",
  "Advanced AI model — Jawabu V2",
  "Case law search across Kenyan courts",
  "Document drafting",
  "Plus more — new features added regularly",
];

export default function PricingCards() {
  const [phone, setPhone] = useState("");
  const [activePlan, setActivePlan] = useState<Plan>("Monthly");

  return (
    <section style={{ maxWidth: 1280, margin: "0 auto", padding: "60px 24px" }}>
      {/* Section header */}
      <div style={{ marginBottom: 40 }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "var(--text-secondary)", marginBottom: 8 }}>PRICING</div>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 700, lineHeight: 1.15, marginBottom: 10 }}>
          One platform. Three ways in.
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: 14, maxWidth: 480 }}>
          Pay daily for one session or commit monthly and save. Every plan includes full portfolio access.
        </p>
      </div>

      {/* Desktop: 3 cards side by side */}
      <div className="hidden md:grid" style={{ gridTemplateColumns: "repeat(3, 1fr)", gap: 0, border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden" }}>
        {(Object.keys(plans) as Plan[]).map((key) => {
          const p = plans[key];
          return (
            <div key={key} style={{
              padding: 32, background: "var(--surface)",
              borderRight: key !== "Monthly" ? "1px solid var(--border)" : "none",
              border: p.popular ? "2px solid var(--accent-green)" : undefined,
              position: "relative",
            }}>
              {p.popular && (
                <div style={{ position: "absolute", top: 14, right: 14, background: "#000", color: "#fff", fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", padding: "4px 10px", borderRadius: 4 }}>
                  MOST POPULAR
                </div>
              )}
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "var(--text-secondary)", marginBottom: 6 }}>[{p.index}] {p.label.toUpperCase()}</div>
              <div style={{ fontSize: 13, color: "var(--text-secondary)", marginBottom: 20 }}>{p.sub}</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: p.save ? 8 : 20 }}>
                <span style={{ fontSize: 13, color: "var(--text-secondary)" }}>KES</span>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(40px,5vw,60px)", fontWeight: 700, lineHeight: 1 }}>{p.price.toLocaleString()}</span>
              </div>
              {p.save && (
                <div style={{ marginBottom: 20 }}>
                  <span style={{ fontSize: 11, color: "var(--text-secondary)" }}>/{p.period}</span>
                  <span style={{ marginLeft: 8, background: "rgba(0,212,170,0.12)", color: "var(--accent-green)", fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 4 }}>{p.save}</span>
                </div>
              )}
              {!p.save && <div style={{ marginBottom: 20, fontSize: 11, color: "var(--text-secondary)" }}>/{p.period}</div>}
              <div style={{ height: 1, background: "var(--border)", marginBottom: 20 }} />
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
                {features.map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "var(--text-secondary)" }}>
                    <span style={{ width: 6, height: 6, background: "var(--text-secondary)", borderRadius: "50%", flexShrink: 0, marginTop: 5 }} />
                    {f}
                  </li>
                ))}
              </ul>
              <button style={{
                width: "100%", padding: "12px 0", borderRadius: 8,
                background: p.popular ? "var(--text-primary)" : "transparent",
                color: p.popular ? "var(--background)" : "var(--text-primary)",
                border: `1px solid ${p.popular ? "var(--text-primary)" : "var(--border)"}`,
                fontWeight: 700, fontSize: 14, cursor: "pointer",
                fontFamily: "'Space Grotesk', sans-serif",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
              }}>
                Choose {p.label} <span>→</span>
              </button>
            </div>
          );
        })}
      </div>

      {/* Mobile: tabbed single card */}
      <div className="md:hidden">
        {/* Tab switcher */}
        <div style={{ display: "flex", background: "var(--surface)", borderRadius: 10, padding: 4, marginBottom: 20, border: "1px solid var(--border)" }}>
          {(Object.keys(plans) as Plan[]).map((key) => {
            const p = plans[key];
            return (
              <button key={key} onClick={() => setActivePlan(key)}
                style={{
                  flex: 1, padding: "8px 0", borderRadius: 8, fontSize: 13, fontWeight: 600,
                  background: activePlan === key ? "var(--text-primary)" : "transparent",
                  color: activePlan === key ? "var(--background)" : "var(--text-secondary)",
                  border: "none", cursor: "pointer", fontFamily: "'Space Grotesk', sans-serif",
                  display: "flex", flexDirection: "column" as const, alignItems: "center", gap: 2,
                }}>
                {p.label}
                {p.save && <span style={{ fontSize: 9, color: activePlan === key ? "var(--background)" : "var(--accent-green)", fontWeight: 700 }}>{p.save}</span>}
              </button>
            );
          })}
        </div>

        {/* Active plan card */}
        {(() => {
          const p = plans[activePlan];
          return (
            <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, padding: 24 }}>
              {p.popular && (
                <div style={{ display: "inline-block", background: "#6c47ff", color: "#fff", fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 20, marginBottom: 16 }}>Most Popular</div>
              )}
              {/* Price */}
              <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 4 }}>
                <span style={{ fontSize: 14, color: "var(--text-secondary)" }}>KES</span>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 64, fontWeight: 700, lineHeight: 1 }}>{p.price.toLocaleString()}</span>
                <span style={{ fontSize: 14, color: "var(--text-secondary)" }}>/{p.period}</span>
              </div>
              {/* Social proof */}
              <div style={{ display: "inline-block", background: "rgba(0,212,100,0.1)", color: "var(--accent-green)", fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 20, marginBottom: 24 }}>
                5,000+ payments processed
              </div>
              {/* Features */}
              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 24 }}>
                {[
                  { icon: "💬", label: "Unlimited queries", sub: "Ask anything, anytime" },
                  { icon: "⭐", label: "Advanced AI model", sub: "Powered by Jawabu V2" },
                  { icon: "🔍", label: "Case law research", sub: "Access contextual legal precedents" },
                ].map((f) => (
                  <div key={f.label} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", background: "var(--surface-2)", borderRadius: 10, border: "1px solid var(--border)" }}>
                    <span style={{ fontSize: 18 }}>{f.icon}</span>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 14 }}>{f.label}</div>
                      <div style={{ fontSize: 12, color: "var(--text-secondary)" }}>{f.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Phone + Pay */}
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="0712345678"
                style={{ width: "100%", background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 10, padding: "14px 16px", color: "var(--text-primary)", fontSize: 15, marginBottom: 10, outline: "none", fontFamily: "inherit" }}
              />
              <button style={{ width: "100%", padding: "14px 0", borderRadius: 10, background: "#555", color: "#fff", fontWeight: 700, fontSize: 15, border: "none", cursor: "pointer", fontFamily: "'Space Grotesk', sans-serif" }}>
                Pay with M-Pesa
              </button>
            </div>
          );
        })()}
      </div>
    </section>
  );
}
