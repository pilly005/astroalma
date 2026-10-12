import { useState } from "react";
import type { Profile } from "../App";
import { calculateChart, type BirthData } from "../lib/astrology";
import { compatibility, type CompatibilityResult } from "../lib/sinastry";
import { shareCompatibility } from "../lib/share";
import Paywall from "./Paywall";

interface Props {
  profile: Profile;
  premium: boolean;
  onUpgrade: () => void;
}

const CITIES = [
  { name: "Santo Domingo, RD", lat: 18.4861, lon: -69.9312 },
  { name: "Ciudad de México, MX", lat: 19.4326, lon: -99.1332 },
  { name: "Bogotá, CO", lat: 4.711, lon: -74.0721 },
  { name: "Buenos Aires, AR", lat: -34.6037, lon: -58.3816 },
  { name: "Lima, PE", lat: -12.0464, lon: -77.0428 },
  { name: "Madrid, ES", lat: 40.4168, lon: -3.7038 },
  { name: "Miami, US", lat: 25.7617, lon: -80.1918 },
  { name: "Nueva York, US", lat: 40.7128, lon: -74.006 },
];

export default function CompatibilityScreen({ profile, premium, onUpgrade }: Props) {
  const [name2, setName2] = useState("");
  const [date2, setDate2] = useState("");
  const [time2, setTime2] = useState("12:00");
  const [city2, setCity2] = useState(0);
  const [result, setResult] = useState<CompatibilityResult | null>(null);
  const [sharing, setSharing] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);

  const compute = () => {
    if (!premium) {
      setShowPaywall(true);
      return;
    }
    if (!name2.trim() || !date2) return;
    const [y, m, d] = date2.split("-").map(Number);
    const [hh, mm] = time2.split(":").map(Number);
    const city = CITIES[city2];
    const birth2: BirthData = { date: new Date(y, m - 1, d, hh, mm), lat: city.lat, lon: city.lon };
    try {
      const chartA = calculateChart(profile.birth);
      const chartB = calculateChart(birth2);
      setResult(compatibility(chartA, chartB));
    } catch (e) {
      console.warn("[sinastria]", e);
    }
  };

  const share = async () => {
    if (!result) return;
    setSharing(true);
    try {
      await shareCompatibility(profile.name, name2.trim(), result);
    } finally {
      setSharing(false);
    }
  };

  return (
    <div className="px-5 pt-8">
      <h1 className="font-display text-3xl gold-text text-center">Compatibilidad</h1>
      <p className="text-center text-cosmos-muted text-sm mt-1 mb-6">
        Sinastría: cómo vibran dos cartas juntas
      </p>

      {!result ? (
        <div className="card p-6">
          <h2 className="font-display text-xl text-cosmos-cream mb-1">La otra persona</h2>
          <p className="text-cosmos-muted text-sm mb-4">
            Ingresa sus datos de nacimiento para calcular la sinastría con {profile.name}.
          </p>
          <input
            value={name2}
            onChange={(e) => setName2(e.target.value)}
            placeholder="Su nombre"
            className="w-full bg-black/30 border border-cosmos-cardline rounded-2xl px-4 py-3 mb-3 text-cosmos-cream placeholder:text-cosmos-muted/60 outline-none focus:border-cosmos-gold"
          />
          <div className="grid grid-cols-2 gap-3 mb-3">
            <input
              type="date"
              value={date2}
              onChange={(e) => setDate2(e.target.value)}
              className="bg-black/30 border border-cosmos-cardline rounded-2xl px-4 py-3 text-cosmos-cream outline-none focus:border-cosmos-gold"
            />
            <input
              type="time"
              value={time2}
              onChange={(e) => setTime2(e.target.value)}
              className="bg-black/30 border border-cosmos-cardline rounded-2xl px-4 py-3 text-cosmos-cream outline-none focus:border-cosmos-gold"
            />
          </div>
          <select
            value={city2}
            onChange={(e) => setCity2(Number(e.target.value))}
            className="w-full bg-black/30 border border-cosmos-cardline rounded-2xl px-4 py-3 mb-5 text-cosmos-cream outline-none focus:border-cosmos-gold"
          >
            {CITIES.map((c, i) => (
              <option key={c.name} value={i} className="bg-cosmos-deep">{c.name}</option>
            ))}
          </select>
          <button onClick={compute} disabled={!name2.trim() || !date2} className="btn-gold w-full disabled:opacity-40">
            Calcular compatibilidad
          </button>
          {!premium && (
            <p className="text-cosmos-muted text-xs mt-3 text-center">
              La sinastría es premium · se solicitará la suscripción
            </p>
          )}
        </div>
      ) : (
        <div>
          <div className="card p-6 text-center mb-4">
            <p className="text-cosmos-lavender text-sm mb-1">
              {profile.name} ♥ {name2.trim()}
            </p>
            <p className="font-display text-6xl gold-text my-3">{result.total}%</p>
            <p className="text-cosmos-cream italic leading-relaxed">{result.verdict}</p>
            <button onClick={share} disabled={sharing} className="btn-gold w-full mt-5 disabled:opacity-50">
              {sharing ? "Creando imagen…" : "Compartir resultado"}
            </button>
          </div>
          <div className="space-y-3 mb-4">
            {result.items.map((item) => (
              <div key={item.label} className="card p-4">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-cosmos-gold font-medium text-sm">{item.label}</span>
                  <span className="text-cosmos-cream font-display text-lg">{item.score}%</span>
                </div>
                <div className="meter mb-2"><div style={{ width: `${item.score}%` }} /></div>
                <p className="text-cosmos-lavender text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
          <button onClick={() => setResult(null)} className="w-full text-cosmos-muted text-sm mb-4">
            Calcular otra compatibilidad
          </button>
        </div>
      )}

      {showPaywall && (
        <Paywall onClose={() => setShowPaywall(false)} onPurchased={() => { setShowPaywall(false); onUpgrade(); }} />
      )}
    </div>
  );
}
