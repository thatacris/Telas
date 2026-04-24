import { COLORS, FONTS } from "./foundation";
import type { RadarAttr, WeightEntry } from "./Base";
import Svg, {
  Path,
  Line,
  Circle,
  Text,
  G,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";

interface RadarChartProps {
  attrs: RadarAttr[];
  radius?: number;
}

export function RadarChart({ attrs, radius = 90 }: RadarChartProps) {
  const cx = 120,
    cy = 120,
    r = radius,
    n = attrs.length;

  const angleOf = (i: number) => (Math.PI * 2 * i) / n - Math.PI / 2;
  const point = (i: number, rad: number) => ({
    x: cx + rad * Math.cos(angleOf(i)),
    y: cy + rad * Math.sin(angleOf(i)),
  });
  const toPath = (pts: { x: number; y: number }[]) =>
    pts
      .map(
        (p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`,
      )
      .join(" ") + " Z";

  const outerPts = attrs.map((_, i) => point(i, r));
  const valuePts = attrs.map((a, i) => point(i, (a.value / 100) * r));
  const gridLevels = [0.25, 0.5, 0.75, 1];

  return (
    <Svg viewBox="0 0 240 240" width={220} height={220}>
      {gridLevels.map((lvl) => (
        <path
          key={lvl}
          d={toPath(attrs.map((_, i) => point(i, r * lvl)))}
          fill="none"
          stroke="rgba(180,160,100,0.25)"
          strokeWidth="1"
        />
      ))}
      {outerPts.map((p, i) => (
        <line
          key={i}
          x1={cx}
          y1={cy}
          x2={p.x}
          y2={p.y}
          stroke="rgba(180,160,100,0.2)"
          strokeWidth="1"
        />
      ))}
      <path
        d={toPath(valuePts)}
        fill="rgba(70,140,220,0.35)"
        stroke="#4a9de8"
        strokeWidth="2"
      />
      {valuePts.map((p, i) => (
        <circle
          key={i}
          cx={p.x}
          cy={p.y}
          r={4}
          fill="#4a9de8"
          stroke="#1a3a6a"
          strokeWidth="1.5"
        />
      ))}
      {outerPts.map((p, i) => {
        const dx = p.x - cx,
          dy = p.y - cy,
          mag = Math.sqrt(dx * dx + dy * dy);
        const lx = cx + ((mag + 20) / mag) * dx;
        const ly = cy + ((mag + 20) / mag) * dy;
        return (
          <text
            key={i}
            x={lx}
            y={ly}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="11"
            fontFamily={FONTS.cinzel}
            fill={COLORS.goldMid}
            fontWeight="600"
          >
            {attrs[i].label}
          </text>
        );
      })}
    </Svg>
  );
}

interface WeightChartProps {
  data: WeightEntry[];
  width?: number;
  height?: number;
}

export function WeightChart({
  data,
  width = 260,
  height = 120,
}: WeightChartProps) {
  const W = width,
    H = height;
  const pad = { t: 12, b: 28, l: 32, r: 12 };

  const vals = data.map((d) => d.kg);
  const minV = Math.min(...vals) - 2,
    maxV = Math.max(...vals) + 2;
  const xOf = (i: number) =>
    pad.l + (i / (data.length - 1)) * (W - pad.l - pad.r);
  const yOf = (v: number) =>
    pad.t + ((maxV - v) / (maxV - minV)) * (H - pad.t - pad.b);

  const pathD = data
    .map(
      (d, i) =>
        `${i === 0 ? "M" : "L"}${xOf(i).toFixed(1)},${yOf(d.kg).toFixed(1)}`,
    )
    .join(" ");
  const areaD =
    pathD +
    ` L${xOf(data.length - 1).toFixed(1)},${(H - pad.b).toFixed(1)}` +
    ` L${xOf(0).toFixed(1)},${(H - pad.b).toFixed(1)} Z`;

  const yTicks = [70, 74, 78, 82].filter((v) => v >= minV && v <= maxV);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: "block" }}>
      <defs>
        <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={COLORS.orange} stopOpacity="0.5" />
          <stop offset="100%" stopColor={COLORS.orange} stopOpacity="0.05" />
        </linearGradient>
      </defs>
      {yTicks.map((v) => (
        <g key={v}>
          <line
            x1={pad.l}
            x2={W - pad.r}
            y1={yOf(v)}
            y2={yOf(v)}
            stroke="rgba(200,169,110,0.15)"
            strokeWidth="1"
            strokeDasharray="3,3"
          />
          <text
            x={pad.l - 4}
            y={yOf(v)}
            textAnchor="end"
            dominantBaseline="middle"
            fontSize="9"
            fill={COLORS.goldDim}
            fontFamily="monospace"
          >
            {v}
          </text>
        </g>
      ))}
      <path d={areaD} fill="url(#areaGrad)" />
      <path
        d={pathD}
        fill="none"
        stroke={COLORS.orange}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {data.map((d, i) => (
        <g key={i}>
          <circle
            cx={xOf(i)}
            cy={yOf(d.kg)}
            r={4}
            fill={COLORS.orange}
            stroke="#1a1005"
            strokeWidth="1.5"
          />
          <text
            x={xOf(i)}
            y={H - pad.b + 12}
            textAnchor="middle"
            fontSize="9"
            fill={COLORS.goldDim}
            fontFamily={FONTS.cinzel}
          >
            {d.kg}kg
          </text>
        </g>
      ))}
    </svg>
  );
}

interface ImcGaugeProps {
  value: number;
}

const IMC_SEGMENTS = [
  { label: "Abaixo", color: "#3a8fc7", from: 180, to: 230 },
  { label: "Normal", color: "#4caf50", from: 230, to: 290 },
  { label: "Sobrepeso", color: "#f5a623", from: 290, to: 330 },
  { label: "Obeso", color: "#e53935", from: 330, to: 360 },
] as const;

const IMC_SCALE_LABELS = [
  { label: "Normal", x: 28, y: 105 },
  { label: "Sobrepeso", x: 100, y: 100 },
  { label: "Obeso", x: 172, y: 83 },
] as const;

function toRad(deg: number) {
  return (deg * Math.PI) / 180;
}

function arcPath(cx: number, cy: number, r: number, from: number, to: number) {
  const f = {
    x: cx + r * Math.cos(toRad(from)),
    y: cy + r * Math.sin(toRad(from)),
  };
  const t = {
    x: cx + r * Math.cos(toRad(to)),
    y: cy + r * Math.sin(toRad(to)),
  };
  return `M ${f.x} ${f.y} A ${r} ${r} 0 ${to - from > 180 ? 1 : 0} 1 ${t.x} ${t.y}`;
}

export function ImcGauge({ value }: ImcGaugeProps) {
  const cx = 100,
    cy = 80,
    R = 60,
    needleLen = R - 5;
  const angleDeg = 180 + ((value - 15) / 25) * 180;
  const nx = cx + needleLen * Math.cos(toRad(angleDeg));
  const ny = cy + needleLen * Math.sin(toRad(angleDeg));

  return (
    <svg viewBox="0 0 200 110" width="100%" style={{ display: "block" }}>
      {IMC_SEGMENTS.map((s) => (
        <path
          key={s.label}
          d={arcPath(cx, cy, R, s.from, s.to)}
          fill="none"
          stroke={s.color}
          strokeWidth="14"
          strokeLinecap="butt"
        />
      ))}
      <line
        x1={cx}
        y1={cy}
        x2={nx}
        y2={ny}
        stroke="#f0e0b0"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx={cx} cy={cy} r={5} fill="#f0e0b0" />
      <text
        x={cx}
        y={cy - 12}
        textAnchor="middle"
        fontSize="18"
        fontWeight="bold"
        fill="#f0e0b0"
        fontFamily={FONTS.cinzel}
      >
        {value}
      </text>
      {IMC_SCALE_LABELS.map((l) => (
        <text
          key={l.label}
          x={l.x}
          y={l.y}
          textAnchor="middle"
          fontSize="8.5"
          fill={COLORS.goldDim}
          fontFamily={FONTS.cinzel}
        >
          {l.label}
        </text>
      ))}
    </svg>
  );
}
