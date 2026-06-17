export type Stock = {
  symbol: string;
  abbr: string;
  name: string;
  sector: "TECHNOLOGY" | "HEALTHCARE" | "FINANCIALS" | "ENERGY" | "CONSUMER";
  price: number;
  todayPct: number;
  shares: number;
  value: number;
  totalReturnPct: number;
  sparkPoints: number[];
};

export const portfolioStats = {
  name: "Cleuves Insights Portfolio",
  value: 72098.87,
  totalReturnPct: 42.93,
  totalReturnAmt: 38201,
  dayChangeAmt: 6.44,
  dayChangePct: 0.01,
  positions: 8,
  gaining: 8,
  down: 0,
};

export const stocks: Stock[] = [
  {
    symbol: "NVDA", abbr: "NV", name: "NVIDIA Corp.", sector: "TECHNOLOGY",
    price: 1039.13, todayPct: 0.12, shares: 12, value: 12470,
    totalReturnPct: 232.63,
    sparkPoints: [60, 55, 70, 65, 80, 90, 95, 88, 100, 110, 105, 120],
  },
  {
    symbol: "MSFT", abbr: "MS", name: "Microsoft Corp.", sector: "TECHNOLOGY",
    price: 410.58, todayPct: 0.11, shares: 28, value: 11496,
    totalReturnPct: 44.01,
    sparkPoints: [60, 65, 62, 70, 68, 74, 72, 78, 80, 85, 82, 90],
  },
  {
    symbol: "AAPL", abbr: "AA", name: "Apple Inc.", sector: "TECHNOLOGY",
    price: 219.93, todayPct: -0.09, shares: 45, value: 9897,
    totalReturnPct: 44.41,
    sparkPoints: [80, 82, 78, 76, 74, 70, 72, 68, 66, 64, 62, 60],
  },
  {
    symbol: "JPM", abbr: "JP", name: "JPMorgan Chase", sector: "FINANCIALS",
    price: 193.46, todayPct: 0.17, shares: 52, value: 10060,
    totalReturnPct: 30.19,
    sparkPoints: [55, 58, 60, 62, 65, 63, 68, 70, 72, 75, 78, 80],
  },
  {
    symbol: "AMZN", abbr: "AM", name: "Amazon.com Inc.", sector: "CONSUMER",
    price: 185.95, todayPct: 0.14, shares: 32, value: 5950,
    totalReturnPct: 26.91,
    sparkPoints: [50, 53, 56, 54, 58, 62, 60, 65, 68, 72, 70, 75],
  },
  {
    symbol: "UNH", abbr: "UN", name: "UnitedHealth Group", sector: "HEALTHCARE",
    price: 564.77, todayPct: 0.10, shares: 18, value: 10166,
    totalReturnPct: 17.93,
    sparkPoints: [85, 80, 78, 82, 80, 76, 74, 72, 70, 68, 66, 64],
  },
  {
    symbol: "JNJ", abbr: "JN", name: "Johnson & Johnson", sector: "HEALTHCARE",
    price: 181.36, todayPct: 0.10, shares: 32, value: 5804,
    totalReturnPct: 14.64,
    sparkPoints: [40, 44, 48, 52, 55, 58, 60, 64, 68, 72, 76, 80],
  },
  {
    symbol: "XOM", abbr: "XO", name: "Exxon Mobil", sector: "ENERGY",
    price: 125.82, todayPct: 0.16, shares: 65, value: 8178,
    totalReturnPct: 11.94,
    sparkPoints: [45, 48, 52, 56, 58, 62, 65, 68, 72, 75, 78, 82],
  },
];

export const sectorAllocation = [
  { name: "Technology", pct: 46.9, color: "#4da6ff" },
  { name: "Healthcare", pct: 22.2, color: "#00d464" },
  { name: "Financials", pct: 14.0, color: "#f5c842" },
  { name: "Energy", pct: 11.4, color: "#ff7832" },
  { name: "Consumer", pct: 5.6, color: "#b464ff" },
];

export const topPerformers = [
  { symbol: "NVDA", abbr: "NV", name: "NVIDIA Corp.", returnPct: 180.15 },
  { symbol: "MSFT", abbr: "MS", name: "Microsoft Corp.", returnPct: 46.87 },
  { symbol: "JPM", abbr: "JP", name: "JPMorgan Chase", returnPct: 33.47 },
  { symbol: "AMZN", abbr: "AM", name: "Amazon.com Inc.", returnPct: 26.91 },
  { symbol: "AAPL", abbr: "AA", name: "Apple Inc.", returnPct: 24.39 },
  { symbol: "UNH", abbr: "UN", name: "UnitedHealth Group", returnPct: 8.88 },
];

export const tickerData = [
  { symbol: "NVDA", price: 1039.13, change: 0.12 },
  { symbol: "MSFT", price: 410.58, change: 0.11 },
  { symbol: "AAPL", price: 219.93, change: -0.09 },
  { symbol: "JPM", price: 193.46, change: 0.17 },
  { symbol: "AMZN", price: 185.95, change: 0.14 },
  { symbol: "UNH", price: 564.77, change: 0.10 },
  { symbol: "XOM", price: 125.82, change: 0.16 },
  { symbol: "NASDAQ", price: 17735.53, change: 0.79 },
  { symbol: "S&P 500", price: 5240.11, change: 0.32 },
  { symbol: "FTSE 100", price: 8314.11, change: -0.25 },
  { symbol: "NIKKEI 225", price: 38599.16, change: -0.16 },
];
