// Sinastría (compatibility) — compares two natal charts and produces
// a 0-100 score with a Spanish breakdown. Element harmony + key
// inter-aspects (Sol-Sol, Luna-Luna, Venus-Marte...). Shareable.

import type { NatalChart } from "./astrology";
import { SIGN_META, type SignId } from "../data/horoscopes";

export interface CompatibilityItem {
  label: string;   // "Sol – Sol"
  detail: string;  // Spanish explanation
  score: number;   // 0-100 for this axis
}

export interface CompatibilityResult {
  total: number; // 0-100
  verdict: string;
  items: CompatibilityItem[];
}

const ELEMENT_OF: Record<SignId, string> = {
  aries: "Fuego", tauro: "Tierra", geminis: "Aire", cancer: "Agua",
  leo: "Fuego", virgo: "Tierra", libra: "Aire", escorpio: "Agua",
  sagitario: "Fuego", capricornio: "Tierra", acuario: "Aire", piscis: "Agua",
};

function elementScore(e1: string, e2: string): number {
  if (e1 === e2) return 95; // mismo elemento
  const pair = [e1, e2].sort().join("+");
  if (pair === "Aire+Fuego") return 88; // trígono natural
  if (pair === "Agua+Tierra") return 88;
  if (pair === "Aire+Agua" || pair === "Fuego+Tierra") return 62;
  return 70; // Fuego+Agua, Aire+Tierra
}

function elementText(e1: string, e2: string): string {
  if (e1 === e2) return `Los dos son ${e1}: hablan el mismo idioma emocional sin traducir nada.`;
  const pair = [e1, e2].sort().join("+");
  if (pair === "Aire+Fuego") return "Aire aviva al Fuego: una conexión que se enciende con ideas y deseo.";
  if (pair === "Agua+Tierra") return "El Agua nutre a la Tierra: contención, cuidado y planes que crecen.";
  return `${e1} y ${e2} se atraen por contraste: hay chispa, pero pide paciencia mutua.`;
}

function planetSign(chart: NatalChart, nameEs: string): SignId {
  const p = chart.positions.find((x) => x.nameEs === nameEs);
  if (!p) throw new Error(`Planeta no encontrado: ${nameEs}`);
  return p.sign;
}

export function compatibility(a: NatalChart, b: NatalChart): CompatibilityResult {
  const axes: [string, SignId, SignId, string][] = [
    ["Sol – Sol", planetSign(a, "Sol"), planetSign(b, "Sol"), "identidad y propósito"],
    ["Luna – Luna", planetSign(a, "Luna"), planetSign(b, "Luna"), "mundo emocional"],
    ["Venus – Venus", planetSign(a, "Venus"), planetSign(b, "Venus"), "cómo aman"],
    ["Venus – Marte", planetSign(a, "Venus"), planetSign(b, "Marte"), "deseo y atracción"],
    ["Mercurio – Mercurio", planetSign(a, "Mercurio"), planetSign(b, "Mercurio"), "comunicación"],
  ];

  const items: CompatibilityItem[] = axes.map(([label, s1, s2, tema]) => {
    const e1 = ELEMENT_OF[s1];
    const e2 = ELEMENT_OF[s2];
    const score = elementScore(e1, e2);
    const sameSign = s1 === s2;
    return {
      label,
      detail:
        `${SIGN_META[s1].name} y ${SIGN_META[s2].name} en ${tema.toLowerCase()}: ` +
        elementText(e1, e2) +
        (sameSign ? " Mismo signo: se reconocen al instante." : ""),
      score,
    };
  });

  // Ascendant axis
  const ascScore = elementScore(ELEMENT_OF[a.ascendantSign], ELEMENT_OF[b.ascendantSign]);
  items.push({
    label: "Ascendente – Ascendente",
    detail:
      `Cómo se muestran al mundo: ${elementText(ELEMENT_OF[a.ascendantSign], ELEMENT_OF[b.ascendantSign])}`,
    score: ascScore,
  });

  const total = Math.round(items.reduce((s, i) => s + i.score, 0) / items.length);

  const verdict =
    total >= 85
      ? "Conexión excepcional: el cielo los puso en la misma frecuencia."
      : total >= 70
        ? "Compatibilidad alta: hay magia real, con un poco de trabajo consciente."
        : total >= 55
          ? "Atracción con fricción: la chispa existe, la paciencia la convierte en oro."
          : "Desafío kármico: se atraen por lo que cada uno necesita aprender.";

  return { total, verdict, items };
}
