import { Stock } from "../data/stocks";
import Sparkline from "./Sparkline";

const sectorClass: Record<string, string> = {
  TECHNOLOGY: "tag-tech",
  HEALTHCARE: "tag-health",
  FINANCIALS: "tag-finance",
  ENERGY: "tag-energy",
  CONSUMER: "tag-consumer",
};

export default function StockRow({ stock }: { stock: Stock }) {
  const positive = stock.todayPct >= 0;
  return (
    <tr
      className="border-b card-hover"
      style={{ borderColor: "var(--border)", transition: "background 0.15s" }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "var(--surface-2)")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "")}
    >
      {/* Symbol */}
      <td className="py-4 px-4">
        <div className="flex items-center gap-3">
          <div
            className="flex items-center justify-center font-bold text-sm rounded-lg"
            style={{
              width: 36, height: 36, flexShrink: 0,
              background: "var(--surface-2)",
              color: "var(--text-secondary)",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            {stock.abbr}
          </div>
          <div>
            <div className="font-semibold text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {stock.symbol}
            </div>
            <div className="text-xs muted">{stock.name}</div>
            <span className={`tag ${sectorClass[stock.sector]} mt-1`}>{stock.sector}</span>
          </div>
        </div>
      </td>
      {/* Price */}
      <td className="py-4 px-4 text-right">
        <span className="font-semibold text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          ${stock.price.toFixed(2)}
        </span>
      </td>
      {/* Today */}
      <td className="py-4 px-4 text-right">
        <span className={`text-sm font-medium ${positive ? "green" : "red"}`}>
          {positive ? "+" : ""}{stock.todayPct.toFixed(2)}%
        </span>
      </td>
      {/* Shares */}
      <td className="py-4 px-4 text-right muted text-sm">{stock.shares}</td>
      {/* Value */}
      <td className="py-4 px-4 text-right text-sm font-medium">
        ${stock.value.toLocaleString()}
      </td>
      {/* Return */}
      <td className="py-4 px-4 text-right">
        <span className="green font-semibold text-sm">+{stock.totalReturnPct.toFixed(2)}%</span>
      </td>
      {/* Sparkline */}
      <td className="py-4 px-4">
        <Sparkline points={stock.sparkPoints} positive={stock.todayPct >= 0} />
      </td>
    </tr>
  );
}
