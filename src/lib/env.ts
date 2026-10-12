// Runtime env validation. The BUILD already fails loudly if keys are
// missing (vite.config.ts) — this covers `npm run dev` and gives a
// human-readable on-screen error instead of a silent demo-mode app.

const REQUIRED = [
  "VITE_SUPABASE_URL",
  "VITE_SUPABASE_ANON_KEY",
  "VITE_REVENUECAT_IOS_KEY",
] as const;

export function getMissingEnv(): string[] {
  return REQUIRED.filter((k) => {
    const v = (import.meta.env as Record<string, string | undefined>)[k];
    return !v || v.includes("YOUR_") || v.includes("your-");
  });
}

export function env(key: (typeof REQUIRED)[number]): string {
  return (import.meta.env as Record<string, string>)[key];
}
