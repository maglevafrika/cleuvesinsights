"use client";
import { tickerData } from "../data/stocks";

export default function Ticker() {
  const items = [...tickerData, ...tickerData];

  return (
    <div className="ticker-wrap py-2 border-b" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
      <div className="flex animate-ticker" style={{ width: "max-content" }}>
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2 px-6 text-sm">
            <span className="font-semibold" style={{ color: "var(--text-primary)", fontFamily: "'Space Grotesk', sans-serif" }}>
              {item.symbol}
            </span>
            <span style={{ color: "var(--text-secondary)" }}>{item.price.toLocaleString()}</span>
            <span className={item.change >= 0 ? "green" : "red"} style={{ fontSize: 12 }}>
              {item.change >= 0 ? "▲" : "▼"} {Math.abs(item.change).toFixed(2)}%
            </span>
            <span className="mx-2" style={{ color: "var(--border)" }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
