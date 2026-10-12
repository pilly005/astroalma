import { useState } from "react";
import type { Profile } from "../App";
import type { NatalChart } from "../lib/astrology";
import { SIGN_META } from "../data/horoscopes";
import ChartWheel from "./ChartWheel";
import Paywall from "./Paywall";

interface Props {
  profile: Profile;
  chart: NatalChart | null;
  premium: boolean;
  onUpgrade: () => void;
}

export default function ChartScreen({ profile, chart, premium, onUpgrade }: Props) {
  const [showPaywall, setShowPaywall] = useState(false);

  if (!chart) {
    return (
      <div className="px-5 pt-10 text-center text-cosmos-muted">
        No pudimos calcular tu carta. Revisa tu fecha de nacimiento en el perfil.
      </div>
    );
  }

  const big3 = chart.positions.slice(0, 2);
  const bd = chart.birthData;

  return (
    <div className="px-5 pt-8">
      <h1 className="font-display text-3xl gold-text text-center">Tu carta astral</h1>
      <p className="text-center text-cosmos-muted text-sm mt-1 mb-5">
        {bd.date.toLocaleDateString("es", { day: "numeric", month: "long" })} ·{" "}
        {bd.date.toLocaleTimeString("es", { hour: "2-digit", minute: "2-digit" })} · {profile.name}
      </p>

      <div className={premium ? "" : "relative"}>
        <div className={premium ? "" : "blur-md select-none pointer-events-none"}>
          <ChartWheel chart={chart} />
        </div>
        {!premium && (
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="card p-6 text-center max-w-[280px]">
              <p className="font-display text-xl text-cosmos-gold mb-2">Tu mapa completo te espera</p>
              <p className="text-cosmos-lavender text-sm mb-4">
                Desbloquea tu carta astral, sinastría ilimitada, tarot diario y tránsitos.
              </p>
              <button onClick={() => setShowPaywall(true)} className="btn-gold w-full">
                Desbloquear
              </button>
            </div>
          </div>
        )}
      </div>

      <h2 className="font-display text-xl text-cosmos-cream mt-6 mb-3 text-center">
        Tus posiciones principales
      </h2>
      <div className="space-y-3">
        {big3.map((p) => (
          <div key={p.nameEs} className="card p-4">
            <p className="font-display text-lg text-cosmos-gold">
              {p.nameEs} en {SIGN_META[p.sign].name} {SIGN_META[p.sign].symbol}
            </p>
            <p className="text-cosmos-lavender text-sm">
              Casa {p.house} · {p.degreeInSign.toFixed(1)}°{p.retrograde ? " · retrógrado" : ""}
            </p>
          </div>
        ))}
        <div className="card p-4">
          <p className="font-display text-lg text-cosmos-gold">
            Ascendente en {SIGN_META[chart.ascendantSign].name} {SIGN_META[chart.ascendantSign].symbol}
          </p>
          <p className="text-cosmos-lavender text-sm">Tu máscara ante el mundo · casas de signo completo</p>
        </div>
      </div>

      {premium && (
        <>
          <h2 className="font-display text-xl text-cosmos-cream mt-6 mb-3 text-center">
            Todos tus planetas
          </h2>
          <div className="space-y-2 mb-4">
            {chart.positions.slice(2).map((p) => (
              <div key={p.nameEs} className="flex justify-between items-center px-4 py-2.5 card">
                <span className="text-cosmos-cream">{p.nameEs}</span>
                <span className="text-cosmos-lavender text-sm">
                  {SIGN_META[p.sign].name} · Casa {p.house}
                  {p.retrograde ? " ℞" : ""}
                </span>
              </div>
            ))}
          </div>
          <h2 className="font-display text-xl text-cosmos-cream mt-6 mb-3 text-center">
            Aspectos principales
          </h2>
          <div className="space-y-2 mb-6">
            {chart.aspects.slice(0, 12).map((a, i) => (
              <div key={i} className="flex justify-between px-4 py-2 text-sm">
                <span className="text-cosmos-lavender">
                  {a.bodyA} <span className="text-cosmos-gold">{a.type}</span> {a.bodyB}
                </span>
                <span className="text-cosmos-muted">{a.orb.toFixed(1)}°</span>
              </div>
            ))}
          </div>
        </>
      )}

      {showPaywall && (
        <Paywall onClose={() => setShowPaywall(false)} onPurchased={() => { setShowPaywall(false); onUpgrade(); }} />
      )}
    </div>
  );
}
