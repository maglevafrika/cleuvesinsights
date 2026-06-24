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
      background: "#000000",
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
        background: "rgba(13, 8, 32)",   // ← was "transparent", now dark + slight opacity
            // ← Safari support
      }}>
        {/* Left: Menu */}
        <div style={{ display: "flex", alignItems: "center", gap: 6, cursor: "pointer" }}>
          
         
        </div>

        {/* Center: Brand */}
        <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
          <span style={{ fontSize: 15, fontWeight: 700, color: "#fff", letterSpacing: "0.18em", fontFamily: "'Space Grotesk', sans-serif", textTransform: "uppercase" }}>
            Cleuves Insights
          </span>
        </div>

        {/* Right: Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          
          {/* Wishlist */}
          
          {/* Account */}
          
          {/* Bag with count */}
          <div style={{ position: "relative", cursor: "pointer" }}>
            
           
          </div>
        </div>
      </nav>

      <div style={{ height: 56 }} />

      {/* Purple glow blobs */}
      <div style={{ position: "absolute", top: "15%", left: "50%", transform: "translateX(-50%)", width: 600, height: 400, background: "radial-gradient(ellipse, rgba(108,71,255,0.18) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "40%", left: "20%", width: 300, height: 300, background: "radial-gradient(ellipse, rgba(77,166,255,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

      {/* Scrolling roles bar */}
      <div style={{
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        padding: "14px 0",
        overflow: "hidden",
        whiteSpace: "nowrap",
        display: "flex",
        alignItems: "center",
        gap: 16,
      }}>
        {/* "BUILT FOR" label */}
        <span style={{
          flexShrink: 0,
          paddingLeft: 24,
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.12em",
          color: "rgba(255,255,255,0.35)",
          fontFamily: "'Space Grotesk', sans-serif",
          textTransform: "uppercase",
        }}>
          Designed for
        </span>

        {/* Scrolling pills */}
        <div style={{ overflow: "hidden", flex: 1 }}>
          <div style={{ display: "flex", width: "max-content", animation: "ticker 30s linear infinite", gap: 8 }}>
            {roles.map((role, i) => (
              <span key={i} style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "6px 16px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.05)",
                fontSize: 13,
                fontWeight: 500,
                color: "rgba(255,255,255,0.75)",
                fontFamily: "'Space Grotesk', sans-serif",
                backdropFilter: "blur(6px)",
                WebkitBackdropFilter: "blur(6px)",
              }}>
                {role}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hero content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "80px 24px", textAlign: "center" }}>

       

        {/* Headline */}
        <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(48px, 8vw, 96px)", fontWeight: 700, lineHeight: 1.05, color: "#fff", maxWidth: 800, marginBottom: 12 }}>
          A{" "}
          <span style={{ position: "relative", display: "inline-block" }}>
            
            <span style={{ fontStyle: "italic", fontWeight: 700 }}>smarter</span>
          </span>
          {" "}way to understand 
        </h1>
        <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(48px, 8vw, 96px)", fontWeight: 700, lineHeight: 1.05, color: "#fff", maxWidth: 800, marginBottom: 40 }}>
          the true nature of the markets.
        </h1>

        {/* Subtext */}
        

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
              View 
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
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 120, background: "linear-gradient(to bottom, transparent, #000000)", pointerEvents: "none" }} />
    </section>
  );
}