import { useEffect, useState } from "react";
import { APP_CONFIG } from "../config";
import { sunSignOf, moonPhase, type NatalChart } from "../lib/astrology";
import { fetchDailyHoroscope, type DailyHoroscopeRow } from "../lib/supabase";
import { HOROSCOPE_SEEDS, SIGN_META, type DailyHoroscope } from "../data/horoscopes";
import { RITUALS } from "../data/rituals";
import type { Profile } from "../App";

interface Props {
  profile: Profile;
  chart: NatalChart | null;
  premium: boolean;
  onUnlock: () => void;
}

export default function Home({ profile, chart }: Props) {
  const [horoscope, setHoroscope] = useState<DailyHoroscope | null>(null);
  const [source, setSource] = useState<"hoy" | "semilla">("semilla");

  const sign = chart ? chart.positions[0].sign : sunSignOf(profile.birth.date);
  const meta = SIGN_META[sign];
  const moon = moonPhase(new Date());
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Buenos días" : hour < 19 ? "Buenas tardes" : "Buenas noches";

  useEffect(() => {
    let alive = true;
    (async () => {
      // 1) Try today's AI-generated horoscope from Supabase…
      const row: DailyHoroscopeRow | null = await fetchDailyHoroscope(sign).catch(() => null);
      if (!alive) return;
      if (row) {
        setHoroscope({
          text: row.text, amor: row.amor, trabajo: row.trabajo,
          bienestar: row.bienestar, ritual: row.ritual, color: row.color, numero: row.numero,
        });
        setSource("hoy");
        return;
      }
      // 2) …fallback to the bundled seed rotation (weekday) so the app
      //    NEVER shows an empty screen, even offline or pre-launch.
      const seeds = HOROSCOPE_SEEDS[sign];
      setHoroscope(seeds[new Date().getDay() % seeds.length]);
      setSource("semilla");
    })();
    return () => { alive = false; };
  }, [sign]);

  const ritual = horoscope?.ritual
    ? { title: "Ritual del día", description: horoscope.ritual }
    : pickRitual();

  return (
    <div className="px-5 pt-8 pb-2">
      <div className="flex items-start justify-between mb-5">
        <div>
          <h1 className="font-display text-3xl gold-text leading-tight">
            {greeting},
            <br />
            {profile.name}
          </h1>
          <p className="text-cosmos-muted text-sm mt-1">
            {meta.symbol} {meta.name} · {moon.nameEs}
          </p>
        </div>
        <div className="text-5xl text-cosmos-gold leading-none mt-1">{meta.symbol}</div>
      </div>

      <div className="card p-5 mb-4">
        <h2 className="font-display text-xl text-cosmos-gold mb-2">✦ Tu horóscopo de hoy</h2>
        {horoscope ? (
          <>
            <p className="text-cosmos-cream leading-relaxed mb-4">{horoscope.text}</p>
            <Meter label="Amor" value={horoscope.amor} />
            <Meter label="Trabajo" value={horoscope.trabajo} />
            <Meter label="Bienestar" value={horoscope.bienestar} />
            <div className="flex gap-4 mt-4 text-sm">
              <span className="text-cosmos-lavender">Color: <b className="text-cosmos-gold">{horoscope.color}</b></span>
              <span className="text-cosmos-lavender">Número: <b className="text-cosmos-gold">{horoscope.numero}</b></span>
            </div>
          </>
        ) : (
          <p className="text-cosmos-muted">Consultando las estrellas…</p>
        )}
        {source === "semilla" && (
          <p className="text-cosmos-muted/60 text-[11px] mt-3">Edición de la casa · se actualiza cada mañana</p>
        )}
      </div>

      <div className="card p-5">
        <h2 className="font-display text-xl text-cosmos-gold mb-2">☽ {ritual.title}</h2>
        <p className="text-cosmos-lavender leading-relaxed text-[15px]">{ritual.description}</p>
      </div>

      <p className="text-center text-cosmos-muted/70 text-xs mt-5">
        {APP_CONFIG.displayName} · {APP_CONFIG.tagline}
      </p>
    </div>
  );
}

function Meter({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center gap-3 mb-2.5">
      <span className="text-cosmos-cream text-sm w-20">{label}</span>
      <div className="meter flex-1"><div style={{ width: `${value}%` }} /></div>
      <span className="text-cosmos-gold text-sm w-10 text-right">{value}%</span>
    </div>
  );
}

function pickRitual() {
  const r = RITUALS[Math.floor(Math.random() * RITUALS.length)];
  return { title: r.title, description: r.description };
}
