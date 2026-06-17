# Cleuves Insights Portfolio

A modern, dynamic stock portfolio landing page built with **Next.js 15** + **TypeScript** + **Tailwind CSS**.

---

## Features

- **Live ticker** — scrolling market data bar at the top
- **Portfolio stats** — value, total return, day change, positions
- **Holdings table** — all 8 positions with sparklines, sector tags, and returns
- **Filter bar** — filter by sector (Technology, Healthcare, Financials, Energy, Consumer)
- **Sector allocation** — animated progress bars
- **Top performers** — ranked by total return
- Dark theme with green/red gain/loss coloring

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

---

## Deployment (Vercel)

1. Push to GitHub
2. Import repo at [vercel.com/new](https://vercel.com/new)
3. Click **Deploy** — no config needed

---

## Customise Your Stocks

Edit `app/data/stocks.ts`:

- `portfolioStats` — update portfolio value, returns, positions
- `stocks` array — add/remove/update each stock
- `sectorAllocation` — update sector percentages
- `topPerformers` — update ranked performers
- `tickerData` — update the top ticker bar

---

## Project Structure

```
app/
├── components/
│   ├── Ticker.tsx        # Scrolling ticker bar
│   ├── StockRow.tsx      # Table row for each stock
│   └── Sparkline.tsx     # SVG mini chart
├── data/
│   └── stocks.ts         # All stock data
├── globals.css           # CSS variables, animations
├── layout.tsx            # Root layout + fonts
└── page.tsx              # Main page
```

---

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Space Grotesk** + **Inter** fonts (Google Fonts)

---

*Not financial advice. For demonstration purposes only.*
