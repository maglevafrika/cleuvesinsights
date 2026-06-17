type Props = { points: number[]; positive: boolean };

export default function Sparkline({ points, positive }: Props) {
  const w = 80, h = 32;
  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = max - min || 1;
  const xs = points.map((_, i) => (i / (points.length - 1)) * w);
  const ys = points.map((p) => h - ((p - min) / range) * h);
  const d = xs.map((x, i) => `${i === 0 ? "M" : "L"} ${x} ${ys[i]}`).join(" ");
  const color = positive ? "#00d4aa" : "#ff4d6d";

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ display: "block" }}>
      <path d={d} className="sparkline" stroke={color} />
    </svg>
  );
}
