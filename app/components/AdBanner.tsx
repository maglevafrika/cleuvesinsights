"use client";
import { useState, useEffect, useCallback } from "react";

const ADS = [
  {
    sponsor: "GOLDMAN SACHS",
    headline: "Marcus savings. High-yield returns.",
    sub: "Earn more with no fees, no minimums, and FDIC protection.",
    cta: "Open Account",
    bg: "#1a1208",
    accent: "#f5c842",
    index: "10 / 15",
  },
  {
    sponsor: "MORGAN STANLEY",
    headline: "Global investment opportunities.",
    sub: "Access emerging markets, private equity, and alternative investments.",
    cta: "Explore Strategies",
    bg: "#0d1a2e",
    accent: "#4da6ff",
    index: "14 / 15",
  },
  {
    sponsor: "VANGUARD",
    headline: "The lowest expense ratios in the industry.",
    sub: "Keep more of what you earn — Vanguard funds average 0.08% expense ratio.",
    cta: "Compare Funds",
    bg: "#1a0d2e",
    accent: "#b464ff",
    index: "5 / 15",
  },
  {
    sponsor: "BETTERMENT",
    headline: "AI-powered wealth management.",
    sub: "Automated rebalancing, tax-loss harvesting, and expert guidance.",
    cta: "Learn More",
    bg: "#0d1a12",
    accent: "#00d4aa",
    index: "12 / 15",
  },
];

type Props = { onEarnPoints: (pts: number) => void; adFreeUntil: number | null };

export default function AdBanner({ onEarnPoints, adFreeUntil }: Props) {
  const [visible, setVisible] = useState(false);
  const [countdown, setCountdown] = useState(15);
  const [adIndex, setAdIndex] = useState(0);
  const [nextIn, setNextIn] = useState(15);
  const [adDuration, setAdDuration] = useState(30);
  const ad = ADS[adIndex % ADS.length];

  // Count down to next ad
  useEffect(() => {
    if (adFreeUntil && Date.now() < adFreeUntil) return;
    const t = setInterval(() => {
      setNextIn((n) => {
        if (n <= 1) {
          setVisible(true);
          setAdDuration(30);
          setCountdown(30);
          return 15;
        }
        return n - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [adFreeUntil]);

  // Count down ad duration
  useEffect(() => {
    if (!visible) return;
    const t = setInterval(() => {
      setAdDuration((n) => {
        if (n <= 1) {
          setVisible(false);
          setAdIndex((i) => i + 1);
          return 30;
        }
        return n - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [visible]);

  const dismiss = useCallback(() => {
    setVisible(false);
    setAdIndex((i) => i + 1);
    onEarnPoints(10);
  }, [onEarnPoints]);

  if (!visible) return (
    <div style={{ textAlign: "center", padding: "6px 0", fontSize: 11, color: "var(--text-secondary)" }}>
      Next ad in <span style={{ color: "var(--accent-green)", fontWeight: 600 }}>{nextIn}s</span>
    </div>
  );

  return (
    <div style={{ position: "relative", margin: "0", borderBottom: "1px solid var(--border)" }}>
      <div style={{ background: ad.bg, padding: "16px 24px", display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
        {/* Icon */}
        <div style={{ width: 48, height: 48, borderRadius: 10, background: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 20 }}>
          🏦
        </div>
        {/* Text */}
        <div style={{ flex: 1, minWidth: 200 }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", color: "rgba(255,255,255,0.5)", marginBottom: 2 }}>
            SPONSORED · {ad.sponsor}
          </div>
          <div style={{ fontWeight: 700, fontSize: 15, color: "#fff", fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.3 }}>
            {ad.headline}
          </div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", marginTop: 2 }}>{ad.sub}</div>
        </div>
        {/* CTA */}
        <button style={{ background: ad.accent, color: "#000", fontWeight: 700, fontSize: 12, padding: "8px 16px", borderRadius: 8, border: "none", cursor: "pointer", fontFamily: "'Space Grotesk', sans-serif", flexShrink: 0 }}>
          {ad.cta}
        </button>
        {/* AD badge + countdown + close */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4, flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ background: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.7)", fontSize: 10, fontWeight: 700, padding: "2px 6px", borderRadius: 4 }}>AD</span>
            <button onClick={dismiss} style={{ background: "rgba(255,255,255,0.15)", border: "none", color: "#fff", borderRadius: 4, width: 22, height: 22, cursor: "pointer", fontSize: 13, display: "flex", alignItems: "center", justifyContent: "center" }}>×</button>
          </div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>
            {adDuration}s remaining · {ad.index}
          </div>
        </div>
      </div>
    </div>
  );
}
