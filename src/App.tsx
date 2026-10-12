import { useEffect, useState } from "react";
import { APP_CONFIG, ENTERTAINMENT_DISCLAIMER } from "./config";
import { initRevenueCat, isPremium } from "./lib/revenuecat";
import { calculateChart, type BirthData, type NatalChart } from "./lib/astrology";
import Onboarding from "./components/Onboarding";
import Home from "./components/Home";
import ChartScreen from "./components/ChartScreen";
import TarotScreen from "./components/TarotScreen";
import CompatibilityScreen from "./components/CompatibilityScreen";

export interface Profile {
  name: string;
  birth: BirthData;
}

export type Tab = "hoy" | "carta" | "tarot" | "compatibilidad";

const PROFILE_KEY = "astroalma.profile.v1";

function loadProfile(): Profile | null {
  try {
    const raw = localStorage.getItem(PROFILE_KEY);
    if (!raw) return null;
    const p = JSON.parse(raw);
    return { name: p.name, birth: { ...p.birth, date: new Date(p.birth.date) } };
  } catch {
    return null;
  }
}

export default function App() {
  const [profile, setProfile] = useState<Profile | null>(loadProfile);
  const [tab, setTab] = useState<Tab>("hoy");
  const [premium, setPremium] = useState(false);
  const [chart, setChart] = useState<NatalChart | null>(null);

  useEffect(() => {
    initRevenueCat();
    isPremium().then(setPremium);
  }, []);

  useEffect(() => {
    if (profile) {
      try {
        setChart(calculateChart(profile.birth));
      } catch (e) {
        console.warn("[astrology] chart calc failed", e);
        setChart(null);
      }
    }
  }, [profile]);

  const saveProfile = (p: Profile) => {
    localStorage.setItem(
      PROFILE_KEY,
      JSON.stringify({ name: p.name, birth: { ...p.birth, date: p.birth.date.toISOString() } })
    );
    setProfile(p);
  };

  if (!profile) {
    return (
      <div className="min-h-full cosmos-bg">
        <Onboarding onDone={saveProfile} />
      </div>
    );
  }

  return (
    <div className="min-h-full cosmos-bg flex flex-col max-w-md mx-auto">
      <main className="flex-1 overflow-y-auto pb-4">
        {tab === "hoy" && <Home profile={profile} chart={chart} premium={premium} onUnlock={() => setTab("carta")} />}
        {tab === "carta" && <ChartScreen profile={profile} chart={chart} premium={premium} onUpgrade={() => setPremium(true)} />}
        {tab === "tarot" && <TarotScreen premium={premium} onUpgrade={() => setPremium(true)} />}
        {tab === "compatibilidad" && <CompatibilityScreen profile={profile} premium={premium} onUpgrade={() => setPremium(true)} />}
      </main>

      <footer className="px-5 pb-1">
        <p className="text-center text-[10px] text-cosmos-muted/70 leading-tight">
          {ENTERTAINMENT_DISCLAIMER}
        </p>
      </footer>

      <nav className="tabbar-safe px-4 pt-2">
        <div className="card flex justify-around py-2">
          <TabBtn active={tab === "hoy"} onClick={() => setTab("hoy")} icon="✦" label="Hoy" />
          <TabBtn active={tab === "carta"} onClick={() => setTab("carta")} icon="◈" label="Carta" />
          <TabBtn active={tab === "tarot"} onClick={() => setTab("tarot")} icon="▣" label="Tarot" />
          <TabBtn active={tab === "compatibilidad"} onClick={() => setTab("compatibilidad")} icon="♥" label="Compatibilidad" />
        </div>
      </nav>
    </div>
  );
}

function TabBtn({ active, onClick, icon, label }: { active: boolean; onClick: () => void; icon: string; label: string }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center px-4 py-1.5 rounded-2xl transition-colors ${
        active ? "bg-cosmos-gold text-cosmos-deep" : "text-cosmos-lavender"
      }`}
    >
      <span className="text-xl leading-none">{icon}</span>
      <span className="text-[11px] font-medium mt-0.5">{label}</span>
    </button>
  );
}

// Re-export for docs
export { APP_CONFIG };
