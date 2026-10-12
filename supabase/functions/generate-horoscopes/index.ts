// generate-horoscopes — runs DAILY (Supabase cron) to write fresh
// Spanish horoscopes for all 12 signs into `daily_horoscopes`.
// The app reads today's row; if missing it falls back to bundled seeds.
//
// Secrets to set: OPENAI_API_KEY, SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
// Schedule: Supabase Dashboard → Edge Functions → generate-horoscopes → Cron: "0 9 * * *"

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SIGNS = [
  { id: "aries", name: "Aries" }, { id: "tauro", name: "Tauro" },
  { id: "geminis", name: "Géminis" }, { id: "cancer", name: "Cáncer" },
  { id: "leo", name: "Leo" }, { id: "virgo", name: "Virgo" },
  { id: "libra", name: "Libra" }, { id: "escorpio", name: "Escorpio" },
  { id: "sagitario", name: "Sagitario" }, { id: "capricornio", name: "Capricornio" },
  { id: "acuario", name: "Acuario" }, { id: "piscis", name: "Piscis" },
];

const SYSTEM = `Eres una astróloga latina querida y sabia que escribe horóscopos diarios en español neutro latinoamericano, en segunda persona (tú), cálidos y específicos.
NUNCA des consejo médico, legal o financiero específico. Incluye variedad: amor, trabajo, familia, dinero, bienestar.
Responde SOLO con JSON válido, sin markdown, con exactamente estas claves:
{"text": "2-3 oraciones", "amor": 50-99, "trabajo": 50-99, "bienestar": 50-99, "ritual": "1 oración con un ritual concreto y seguro", "color": "color en español", "numero": 1-99}`;

Deno.serve(async () => {
  const openaiKey = Deno.env.get("OPENAI_API_KEY")!;
  const supabase = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
  const today = new Date().toISOString().slice(0, 10);

  const rows = [];
  for (const sign of SIGNS) {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${openaiKey}` },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: SYSTEM },
          { role: "user", content: `Horóscopo de hoy (${today}) para ${sign.name}. Que se sienta escrito solo para este signo.` },
        ],
        temperature: 0.9,
        max_tokens: 400,
      }),
    });
    const json = await res.json();
    const raw = json.choices?.[0]?.message?.content ?? "{}";
    let parsed: Record<string, unknown> = {};
    try { parsed = JSON.parse(raw); } catch { /* keep defaults */ }
    rows.push({
      date: today,
      sign: sign.id,
      text: String(parsed.text ?? `Hoy las estrellas te acompañan, ${sign.name}.`),
      amor: clamp(parsed.amor), trabajo: clamp(parsed.trabajo), bienestar: clamp(parsed.bienestar),
      ritual: String(parsed.ritual ?? "Enciende una vela y escribe una intención."),
      color: String(parsed.color ?? "dorado"),
      numero: clampNum(parsed.numero),
      generated_by: "generate-horoscopes",
    });
  }

  const { error } = await supabase.from("daily_horoscopes").upsert(rows, { onConflict: "date,sign" });
  if (error) return Response.json({ ok: false, error: error.message }, { status: 500 });
  return Response.json({ ok: true, date: today, count: rows.length });
});

function clamp(v: unknown): number {
  const n = Number(v);
  return Number.isFinite(n) ? Math.min(99, Math.max(50, Math.round(n))) : 70;
}
function clampNum(v: unknown): number {
  const n = Number(v);
  return Number.isFinite(n) ? Math.min(99, Math.max(1, Math.round(n))) : 7;
}
