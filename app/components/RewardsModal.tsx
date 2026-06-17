"use client";
import { useState } from "react";

type Props = {
  points: number;
  onEarn: (pts: number) => void;
  onAdFree: (minutes: number) => void;
  onClose: () => void;
};

export default function RewardsModal({ points, onEarn, onAdFree, onClose }: Props) {
  const [watching15, setWatching15] = useState(false);
  const [watching30, setWatching30] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [redeemed, setRedeemed] = useState<string | null>(null);

  const watchAd = (secs: number, pts: number, key: string) => {
    if (key === "15") setWatching15(true);
    else setWatching30(true);
    setCountdown(secs);
    const interval = setInterval(() => {
      setCountdown((c) => {
        if (c <= 1) {
          clearInterval(interval);
          if (key === "15") setWatching15(false);
          else setWatching30(false);
          onEarn(pts);
          return 0;
        }
        return c - 1;
      });
    }, 1000);
  };

  const redeem = (label: string, cost: number, minutes: number) => {
    if (points < cost) return;
    onAdFree(minutes);
    setRedeemed(label);
    setTimeout(() => setRedeemed(null), 2000);
  };

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 16, width: "100%", maxWidth: 440, padding: 28, position: "relative" }}>
        {/* Close */}
        <button onClick={onClose} style={{ position: "absolute", top: 16, right: 16, background: "var(--surface-2)", border: "none", color: "var(--text-secondary)", borderRadius: "50%", width: 28, height: 28, cursor: "pointer", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>×</button>

        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 20, marginBottom: 20 }}>Rewards &amp; Ad-Free</h2>

        {/* Balance card */}
        <div style={{ background: "linear-gradient(135deg, #0f1f3d, #1a2e50)", borderRadius: 12, padding: "20px 24px", marginBottom: 24, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em", marginBottom: 4 }}>YOUR BALANCE</div>
            <div style={{ fontSize: 32, fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif", color: "#fff" }}>{points} pts</div>
          </div>
          <span style={{ fontSize: 32 }}>⭐</span>
        </div>

        {/* Earn */}
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "var(--text-secondary)", marginBottom: 12 }}>EARN POINTS</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
          {[
            { label: "Watch 15-sec ad", pts: 25, key: "15", secs: 15, watching: watching15, icon: "🎬" },
            { label: "Watch 30-sec ad", pts: 60, key: "30", secs: 30, watching: watching30, icon: "🎥" },
          ].map((item) => (
            <div key={item.key} style={{ background: "var(--surface-2)", borderRadius: 10, padding: "14px 16px", display: "flex", alignItems: "center", gap: 12, border: "1px solid var(--border)" }}>
              <span style={{ fontSize: 20 }}>{item.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 14, fontFamily: "'Space Grotesk', sans-serif" }}>{item.label}</div>
                <div style={{ fontSize: 12, color: "var(--accent-green)" }}>+{item.pts} points</div>
              </div>
              <button
                onClick={() => watchAd(item.secs, item.pts, item.key)}
                disabled={item.watching}
                style={{ background: item.watching ? "var(--border)" : "#1a1a24", color: item.watching ? "var(--text-secondary)" : "var(--text-primary)", fontWeight: 700, fontSize: 13, padding: "8px 18px", borderRadius: 8, border: "1px solid var(--border)", cursor: item.watching ? "default" : "pointer", fontFamily: "'Space Grotesk', sans-serif", minWidth: 80, textAlign: "center" as const }}
              >
                {item.watching ? `${countdown}s` : "Watch"}
              </button>
            </div>
          ))}
        </div>

        {/* Spend */}
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "var(--text-secondary)", marginBottom: 12 }}>SPEND POINTS</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            { label: "60 minutes ad-free", sub: "No mid-roll ads", cost: 80, minutes: 60 },
            { label: "Full day ad-free", sub: "Except daily pre-roll", cost: 420, minutes: 1440 },
          ].map((item) => (
            <div key={item.label} style={{ background: "var(--surface-2)", borderRadius: 10, padding: "14px 16px", display: "flex", alignItems: "center", gap: 12, border: "1px solid var(--border)" }}>
              <span style={{ fontSize: 20 }}>⏱</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 14, fontFamily: "'Space Grotesk', sans-serif" }}>{item.label}</div>
                <div style={{ fontSize: 12, color: "var(--text-secondary)" }}>{item.sub} · {item.cost} points</div>
              </div>
              <button
                onClick={() => redeem(item.label, item.cost, item.minutes)}
                disabled={points < item.cost}
                style={{
                  background: redeemed === item.label ? "var(--accent-green)" : points >= item.cost ? "var(--accent-green)" : "var(--border)",
                  color: points >= item.cost ? "#000" : "var(--text-secondary)",
                  fontWeight: 700, fontSize: 13, padding: "8px 18px", borderRadius: 8,
                  border: "none", cursor: points >= item.cost ? "pointer" : "default",
                  fontFamily: "'Space Grotesk', sans-serif", minWidth: 80, textAlign: "center" as const,
                  opacity: points < item.cost ? 0.5 : 1,
                }}
              >
                {redeemed === item.label ? "✓" : "Redeem"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
