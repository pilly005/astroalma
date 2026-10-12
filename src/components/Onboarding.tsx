import { useState } from "react";
import { APP_CONFIG } from "../config";
import { calculateChart, type BirthData } from "../lib/astrology";
import { SIGN_META } from "../data/horoscopes";
import type { Profile } from "../App";

type Step = "nombre" | "nacimiento" | "revelacion";

// A small set of well-known cities for quick place picking (lat, lon).
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

export default function Onboarding({ onDone }: { onDone: (p: Profile) => void }) {
  const [step, setStep] = useState<Step>("nombre");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("12:00");
  const [knowTime, setKnowTime] = useState(true);
  const [cityIdx, setCityIdx] = useState(0);
  const [reveal, setReveal] = useState<null | { sol: string; luna: string; asc: string }>(null);
  const [pendingProfile, setPendingProfile] = useState<Profile | null>(null);

  const canNextNombre = name.trim().length >= 2;
  const canNextNac = !!date;

  const finish = () => {
    const city = CITIES[cityIdx];
    const [y, m, d] = date.split("-").map(Number);
    const [hh, mm] = (knowTime ? time : "12:00").split(":").map(Number);
    const birth: BirthData = {
      date: new Date(y, m - 1, d, hh, mm),
      lat: city.lat,
      lon: city.lon,
    };
    const chart = calculateChart(birth);
    const sol = chart.positions[0];
    const luna = chart.positions[1];
    setReveal({
      sol: `${SIGN_META[sol.sign].name} ${SIGN_META[sol.sign].symbol}`,
      luna: `${SIGN_META[luna.sign].name} ${SIGN_META[luna.sign].symbol}`,
      asc: `${SIGN_META[chart.ascendantSign].name} ${SIGN_META[chart.ascendantSign].symbol}`,
    });
    setStep("revelacion");
    setPendingProfile({ name: name.trim(), birth });
  };

  const done = () => {
    if (pendingProfile) onDone(pendingProfile);
  };

  return (
    <div className="min-h-full flex flex-col px-6 py-10 max-w-md mx-auto">
      {step !== "revelacion" && (
        <p className="font-display text-3xl gold-text text-center mt-6 mb-2">{APP_CONFIG.displayName}</p>
      )}
      {step !== "revelacion" && (
        <p className="text-center text-cosmos-lavender mb-8">{APP_CONFIG.tagline}</p>
      )}

      {step === "nombre" && (
        <div className="card p-6">
          <h2 className="font-display text-xl text-cosmos-cream mb-2">¿Cómo te llamas?</h2>
          <p className="text-cosmos-muted text-sm mb-4">Tu nombre personaliza tus lecturas diarias.</p>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tu nombre"
            className="w-full bg-black/30 border border-cosmos-cardline rounded-2xl px-4 py-3 text-cosmos-cream placeholder:text-cosmos-muted/60 outline-none focus:border-cosmos-gold"
          />
          <button disabled={!canNextNombre} onClick={() => setStep("nacimiento")} className="btn-gold w-full mt-5 disabled:opacity-40">
            Continuar
          </button>
        </div>
      )}

      {step === "nacimiento" && (
        <div className="card p-6">
          <h2 className="font-display text-xl text-cosmos-cream mb-2">Tu nacimiento</h2>
          <p className="text-cosmos-muted text-sm mb-4">
            Con tu fecha, hora y lugar calculamos tu carta astral real.
          </p>
          <label className="text-cosmos-lavender text-sm">Fecha de nacimiento</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full bg-black/30 border border-cosmos-cardline rounded-2xl px-4 py-3 mt-1 mb-4 text-cosmos-cream outline-none focus:border-cosmos-gold"
          />
          <label className="flex items-center gap-2 text-cosmos-lavender text-sm mb-2">
            <input type="checkbox" checked={knowTime} onChange={(e) => setKnowTime(e.target.checked)} className="accent-[#e8c874]" />
            Sé mi hora de nacimiento
          </label>
          {knowTime && (
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full bg-black/30 border border-cosmos-cardline rounded-2xl px-4 py-3 mb-4 text-cosmos-cream outline-none focus:border-cosmos-gold"
            />
          )}
          {!knowTime && (
            <p className="text-cosmos-muted text-xs mb-4">Sin la hora, el Ascendente será aproximado.</p>
          )}
          <label className="text-cosmos-lavender text-sm">Ciudad de nacimiento</label>
          <select
            value={cityIdx}
            onChange={(e) => setCityIdx(Number(e.target.value))}
            className="w-full bg-black/30 border border-cosmos-cardline rounded-2xl px-4 py-3 mt-1 text-cosmos-cream outline-none focus:border-cosmos-gold"
          >
            {CITIES.map((c, i) => (
              <option key={c.name} value={i} className="bg-cosmos-deep">
                {c.name}
              </option>
            ))}
          </select>
          <button disabled={!canNextNac} onClick={finish} className="btn-gold w-full mt-5 disabled:opacity-40">
            Revelar mi carta
          </button>
        </div>
      )}

      {step === "revelacion" && reveal && (
        <div className="flex-1 flex flex-col justify-center">
          <p className="text-center text-cosmos-muted text-sm mb-2">El cielo al momento de tu llegada…</p>
          <h2 className="font-display text-3xl gold-text text-center mb-8">Tu firma cósmica</h2>
          <div className="space-y-3">
            <RevealRow label="Sol · tu esencia" value={reveal.sol} />
            <RevealRow label="Luna · tu mundo interior" value={reveal.luna} />
            <RevealRow label="Ascendente · tu máscara" value={reveal.asc} />
          </div>
          <button onClick={done} className="btn-gold w-full mt-8">
            Entrar a {APP_CONFIG.displayName}
          </button>
        </div>
      )}
    </div>
  );
}

function RevealRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="card p-4 flex items-center justify-between animate-floaty">
      <span className="text-cosmos-lavender text-sm">{label}</span>
      <span className="font-display text-xl text-cosmos-gold">{value}</span>
    </div>
  );
}
