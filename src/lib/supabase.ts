import { createClient } from "@supabase/supabase-js";
import { env } from "./env";

// Created lazily so the missing-env screen can render first.
let client: ReturnType<typeof createClient> | null = null;

export function supabase() {
  if (!client) {
    client = createClient(env("VITE_SUPABASE_URL"), env("VITE_SUPABASE_ANON_KEY"));
  }
  return client;
}

export interface DailyHoroscopeRow {
  date: string;
  sign: string;
  text: string;
  amor: number;
  trabajo: number;
  bienestar: number;
  ritual: string;
  color: string;
  numero: number;
}

/** Today's horoscope for a sign — from Supabase cache, null if not generated yet. */
export async function fetchDailyHoroscope(sign: string): Promise<DailyHoroscopeRow | null> {
  const today = new Date().toISOString().slice(0, 10);
  const { data, error } = await supabase()
    .from("daily_horoscopes")
    .select("*")
    .eq("date", today)
    .eq("sign", sign)
    .maybeSingle();
  if (error) {
    console.warn("[supabase] daily_horoscopes:", error.message);
    return null;
  }
  return data as DailyHoroscopeRow | null;
}
