import { useMemo, useState } from "react";
import { TAROT_DECK, type TarotCard } from "../data/tarot";
import Paywall from "./Paywall";

interface Props {
  premium: boolean;
  onUpgrade: () => void;
}

const POSITIONS = [
  { key: "pasado", label: "Pasado", hint: "Lo que te trajo hasta aquí" },
  { key: "presente", label: "Presente", hint: "La energía de hoy" },
  { key: "futuro", label: "Futuro", hint: "Hacia dónde fluye" },
] as const;

interface Drawn {
  card: TarotCard;
  reversed: boolean;
}

function drawThree(): Drawn[] {
  const deck = [...TAROT_DECK];
  const out: Drawn[] = [];
  for (let i = 0; i < 3; i++) {
    const idx = Math.floor(Math.random() * deck.length);
    const [card] = deck.splice(idx, 1);
    out.push({ card, reversed: Math.random() < 0.28 });
  }
  return out;
}

export default function TarotScreen({ premium, onUpgrade }: Props) {
  const [spread, setSpread] = useState<Drawn[] | null>(null);
  const [flipped, setFlipped] = useState<boolean[]>([false, false, false]);
  const [showPaywall, setShowPaywall] = useState(false);
  const [drawsUsed] = useState(0);

  const canDraw = useMemo(() => {
    if (premium) return true;
    // Free: 1 spread per day (tracked in localStorage)
    const key = "astroalma.tarot." + new Date().toISOString().slice(0, 10);
    return !localStorage.getItem(key);
  }, [premium, drawsUsed]);

  const doDraw = () => {
    if (!canDraw) {
      setShowPaywall(true);
      return;
    }
    setSpread(drawThree());
    setFlipped([false, false, false]);
    if (!premium) {
      localStorage.setItem("astroalma.tarot." + new Date().toISOString().slice(0, 10), "1");
    }
  };

  return (
    <div className="px-5 pt-8">
      <h1 className="font-display text-3xl gold-text text-center">Tarot del día</h1>
      <p className="text-center text-cosmos-muted text-sm mt-1 mb-6">
        Tres cartas: pasado, presente y futuro
      </p>

      {!spread ? (
        <div className="card p-8 text-center">
          <div className="text-6xl mb-4">▣</div>
          <p className="text-cosmos-lavender mb-6">
            Concéntrate en tu pregunta y toca para revelar tu tirada.
          </p>
          <button onClick={doDraw} className="btn-gold w-full">
            Tirar las cartas
          </button>
          {!premium && (
            <p className="text-cosmos-muted text-xs mt-3">
              Gratis: 1 tirada al día · Premium: tiradas ilimitadas
            </p>
          )}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-3 gap-3 mb-6">
            {spread.map((d, i) => (
              <button
                key={i}
                onClick={() => setFlipped((f) => f.map((x, j) => (j === i ? true : x)))}
                className={`tarot-card ${flipped[i] ? "flipped" : ""}`}
              >
                <div className="tarot-inner aspect-[2/3.4]">
                  <div className="tarot-face absolute inset-0 card flex flex-col items-center justify-center p-2">
                    <span className="text-3xl text-cosmos-gold">✦</span>
                    <span className="text-cosmos-muted text-[10px] mt-1">{POSITIONS[i].label}</span>
                  </div>
                  <div className="tarot-face tarot-back-face absolute inset-0 card border-cosmos-gold flex flex-col items-center justify-center p-2 text-center">
                    {d.reversed && <span className="text-cosmos-muted text-[10px] mb-1">INVERTIDA</span>}
                    <span className="font-display text-cosmos-gold text-sm leading-tight">{d.card.name}</span>
                    <span className="text-cosmos-muted text-[10px] mt-1">{d.card.arcana === "major" ? "Arcano mayor" : "Arcano menor"}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {flipped.every(Boolean) && (
            <div className="space-y-4 mb-6">
              {spread.map((d, i) => (
                <div key={i} className="card p-5">
                  <p className="text-cosmos-gold text-xs uppercase tracking-wide mb-1">
                    {POSITIONS[i].label} · {POSITIONS[i].hint}
                  </p>
                  <h3 className="font-display text-xl text-cosmos-cream mb-2">
                    {d.card.name} {d.reversed && <span className="text-sm text-cosmos-muted">(invertida)</span>}
                  </h3>
                  <p className="text-cosmos-lavender text-[15px] leading-relaxed">
                    {d.reversed ? d.card.reversed : d.card.upright}
                  </p>
                  <p className="text-cosmos-muted text-xs mt-2">
                    Palabras clave: {d.card.keywords.join(" · ")}
                  </p>
                </div>
              ))}
              <button onClick={() => { setSpread(null); }} className="btn-gold w-full">
                Nueva tirada
              </button>
            </div>
          )}
        </>
      )}

      {showPaywall && (
        <Paywall onClose={() => setShowPaywall(false)} onPurchased={() => { setShowPaywall(false); onUpgrade(); }} />
      )}
    </div>
  );
}
