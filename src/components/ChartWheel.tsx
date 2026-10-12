import { useMemo } from "react";
import type { NatalChart } from "../lib/astrology";
import { SIGN_META, type SignId } from "../data/horoscopes";

const PLANET_GLYPH: Record<string, string> = {
  Sol: "☉", Luna: "☽", Mercurio: "☿", Venus: "♀", Marte: "♂",
  Júpiter: "♃", Saturno: "♄", Urano: "♅", Neptuno: "♆", Plutón: "♇",
};

const SIGN_ORDER: SignId[] = [
  "aries", "tauro", "geminis", "cancer", "leo", "virgo",
  "libra", "escorpio", "sagitario", "capricornio", "acuario", "piscis",
];

const ASPECT_COLOR: Record<string, string> = {
  conjuncion: "#e8c874",
  oposicion: "#e86a6a",
  trigono: "#7fd08f",
  cuadratura: "#e8a06a",
  sextil: "#7fb8e8",
};

const SIZE = 360;
const C = SIZE / 2;

// 0° Aries at left, zodiac runs counterclockwise (standard chart look)
function polar(longitude: number, r: number): [number, number] {
  const t = ((180 - longitude) * Math.PI) / 180;
  return [C + r * Math.cos(t), C - r * Math.sin(t)];
}

export default function ChartWheel({ chart }: { chart: NatalChart }) {
  const planets = useMemo(() => {
    const sorted = [...chart.positions].sort((a, b) => a.longitude - b.longitude);
    const radii = [118, 140, 96, 128, 108];
    let last = -999;
    let ri = 0;
    return sorted.map((p) => {
      const sep = Math.abs(p.longitude - last);
      const r = sep < 9 ? radii[ri++ % radii.length] : 118;
      last = p.longitude;
      return { ...p, r };
    });
  }, [chart]);

  const aspectLines = useMemo(() => {
    const byName = new Map(planets.map((p) => [p.nameEs, p]));
    return chart.aspects
      .filter((a) => byName.has(a.bodyA) && byName.has(a.bodyB))
      .slice(0, 40)
      .map((a, i) => {
        const A = byName.get(a.bodyA)!;
        const B = byName.get(a.bodyB)!;
        const [x1, y1] = polar(A.longitude, 88);
        const [x2, y2] = polar(B.longitude, 88);
        return { x1, y1, x2, y2, color: ASPECT_COLOR[a.type] ?? "#888", key: i };
      });
  }, [chart, planets]);

  const [ascX, ascY] = polar(chart.ascendant, 168);

  return (
    <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="w-full max-w-[340px] mx-auto animate-floaty">
      {/* outer rings */}
      <circle cx={C} cy={C} r={172} fill="none" stroke="#e8c874" strokeWidth={1.5} opacity={0.9} />
      <circle cx={C} cy={C} r={150} fill="none" stroke="#3d2a6b" strokeWidth={1} />
      <circle cx={C} cy={C} r={88} fill="none" stroke="#3d2a6b" strokeWidth={1} opacity={0.7} />

      {/* sign dividers + glyphs */}
      {SIGN_ORDER.map((s, i) => {
        const lon = i * 30;
        const [x1, y1] = polar(lon, 150);
        const [x2, y2] = polar(lon, 172);
        const [gx, gy] = polar(lon + 15, 161);
        return (
          <g key={s}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#3d2a6b" strokeWidth={1} />
            <text x={gx} y={gy + 6} textAnchor="middle" fontSize={17} fill="#e8c874">
              {SIGN_META[s].symbol}
            </text>
          </g>
        );
      })}

      {/* aspect lines */}
      {aspectLines.map((l) => (
        <line key={l.key} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke={l.color} strokeWidth={1} opacity={0.45} />
      ))}

      {/* ASC marker */}
      <circle cx={ascX} cy={ascY} r={5} fill="#e8c874" />
      <text x={ascX} y={ascY - 12} textAnchor="middle" fontSize={11} fill="#e8c874" fontWeight="bold">
        ASC
      </text>

      {/* planets */}
      {planets.map((p) => {
        const [x, y] = polar(p.longitude, p.r);
        return (
          <g key={p.nameEs}>
            <circle cx={x} cy={y} r={13} fill="#221244" stroke="#e8c874" strokeWidth={1} />
            <text x={x} y={y + 6} textAnchor="middle" fontSize={14} fill="#f7efdd">
              {PLANET_GLYPH[p.nameEs] ?? "•"}
            </text>
            {p.retrograde && (
              <text x={x + 12} y={y - 8} fontSize={10} fill="#e86a6a" fontWeight="bold">R</text>
            )}
          </g>
        );
      })}
    </svg>
  );
}
