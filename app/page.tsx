"use client";
import Link from "next/link";

const roles = [
  "Day traders", "Long-term investors", "Portfolio managers", "Retail investors",
  "Swing traders", "Dividend seekers", "Growth investors", "Value investors",
  "Day traders", "Long-term investors", "Portfolio managers", "Retail investors",
  "Swing traders", "Dividend seekers", "Growth investors", "Value investors",
];

export default function Hero() {
  return (
    <section style={{
      background: "linear-gradient(160deg, #0d0820 0%, #130a2e 30%, #0a0a14 70%, #080810 100%)",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* ── LV-inspired Navbar ── */}
      <nav style={{
  position: "fixed",        // ← was "relative"
  top: 0,                   // ← pin to top
  left: 0,                  // ← full width
  right: 0,                 // ← full width
  zIndex: 50,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 32px",
  height: 56,
  borderBottom: "1px solid rgba(255,255,255,0.08)",
  background: "rgba(13, 8, 32, 0.85)",   // ← was "transparent", now dark + slight opacity
  backdropFilter: "blur(12px)",           // ← frosted glass effect so it feels premium
  WebkitBackdropFilter: "blur(12px)",     // ← Safari support
}}>
        {/* Left: Menu */}
        <div style={{ display: "flex", alignItems: "center", gap: 6, cursor: "pointer" }}>
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
            <rect width="18" height="1.5" rx="0.75" fill="rgba(255,255,255,0.7)" />
            <rect y="5" width="18" height="1.5" rx="0.75" fill="rgba(255,255,255,0.7)" />
            <rect y="10" width="18" height="1.5" rx="0.75" fill="rgba(255,255,255,0.7)" />
          </svg>
          <span style={{ fontSize: 12, fontWeight: 500, color: "rgba(255,255,255,0.7)", letterSpacing: "0.08em", fontFamily: "'Space Grotesk', sans-serif", textTransform: "uppercase" }}>Menu</span>
        </div>

        {/* Center: Brand */}
        <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
          <span style={{ fontSize: 15, fontWeight: 700, color: "#fff", letterSpacing: "0.18em", fontFamily: "'Space Grotesk', sans-serif", textTransform: "uppercase" }}>
            Cleuves Insights
          </span>
        </div>

        {/* Right: Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <span style={{ fontSize: 12, fontWeight: 500, color: "rgba(255,255,255,0.7)", letterSpacing: "0.06em", fontFamily: "'Space Grotesk', sans-serif", cursor: "pointer" }}>
            Contact Us
          </span>
          {/* Wishlist */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" style={{ cursor: "pointer" }}>
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          {/* Account */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" style={{ cursor: "pointer" }}>
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          {/* Bag with count */}
          <div style={{ position: "relative", cursor: "pointer" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span style={{
              position: "absolute", top: -6, right: -6,
              width: 14, height: 14, borderRadius: "50%",
              background: "rgba(108,71,255,0.9)", color: "#fff",
              fontSize: 9, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "'Space Grotesk', sans-serif",
            }}>0</span>
          </div>
        </div>
      </nav>

      <div style={{ height: 56 }} />

      {/* Purple glow blobs */}
      <div style={{ position: "absolute", top: "15%", left: "50%", transform: "translateX(-50%)", width: 600, height: 400, background: "radial-gradient(ellipse, rgba(108,71,255,0.18) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "40%", left: "20%", width: 300, height: 300, background: "radial-gradient(ellipse, rgba(77,166,255,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

      {/* Scrolling roles bar */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "14px 0", overflow: "hidden", whiteSpace: "nowrap" }}>
        <div style={{ display: "flex", width: "max-content", animation: "ticker 30s linear infinite" }}>
          {roles.map((role, i) => (
            <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 12, padding: "0 24px" }}>
              <span style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.55)", fontFamily: "'Space Grotesk', sans-serif" }}>{role}</span>
              {i < roles.length - 1 && <span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "inline-block" }} />}
            </span>
          ))}
        </div>
      </div>

      {/* Hero content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "80px 24px", textAlign: "center" }}>

        {/* Eyebrow */}
        <div style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.5)", letterSpacing: "0.04em", marginBottom: 32, fontFamily: "'Space Grotesk', sans-serif" }}>
          Fastest growing stock picks platform in Africa
        </div>

        {/* Headline */}
        <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(48px, 8vw, 96px)", fontWeight: 700, lineHeight: 1.05, color: "#fff", maxWidth: 800, marginBottom: 12 }}>
          A{" "}
          <span style={{ position: "relative", display: "inline-block" }}>
            <span style={{
              position: "absolute", inset: "-6px -18px",
              border: "2px solid rgba(108,71,255,0.9)",
              borderRadius: "50%",
              transform: "rotate(-2deg)",
            }} />
            <span style={{ fontStyle: "italic", fontWeight: 700 }}>smarter</span>
          </span>
          {" "}way to understand 
        </h1>
        <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(48px, 8vw, 96px)", fontWeight: 700, lineHeight: 1.05, color: "#fff", maxWidth: 800, marginBottom: 40 }}>
          the true nature of the markets.
        </h1>

        {/* Subtext */}
        <p style={{ fontSize: "clamp(15px, 2vw, 18px)", color: "rgba(255,255,255,0.55)", maxWidth: 540, lineHeight: 1.7, marginBottom: 48, fontFamily: "'Inter', sans-serif" }}>
          Today&apos;s sharpest investors trust Cleuves Insights to track real picks, read live market data, and move with conviction at the speed the market demands.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
          <Link href="/dashboard"
           style={{
              padding: "14px 28px", borderRadius: 10, fontSize: 15, fontWeight: 600,
              background: "rgba(255,255,255,0.06)", color: "#fff",
              border: "1px solid rgba(255,255,255,0.2)",
              cursor: "pointer", fontFamily: "'Space Grotesk', sans-serif",
              backdropFilter: "blur(8px)", display: "flex", alignItems: "center", gap: 8,
            }}>
              View Portfolio →
          </Link>
          <button style={{
            padding: "14px 28px", borderRadius: 10, fontSize: 15, fontWeight: 600,
            background: "transparent", color: "rgba(255,255,255,0.7)",
            border: "1px solid rgba(255,255,255,0.12)",
            cursor: "pointer", fontFamily: "'Space Grotesk', sans-serif",
          }}>
            See pricing
          </button>
        </div>
      </div>

      {/* Bottom fade into main content */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 120, background: "linear-gradient(to bottom, transparent, #0a0a0f)", pointerEvents: "none" }} />
    </section>
  );
}