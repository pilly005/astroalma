# AstroAlma (working title) — Tu guía astral en español

Spanish-first astrology & spiritual guidance app. Capacitor iOS + React + Supabase + RevenueCat.

> **Name not finalized.** See `docs/name-vetting.md` for the ranked top 3.
> Display name lives in `src/config.ts` (one-line change). Bundle ID
> (`com.astroalma.app`) and RevenueCat product IDs lock at first App Store
> Connect creation — set them with the FINAL name.

## Stack
- Vite + React 18 + TypeScript + Tailwind 3
- Capacitor 7 (iOS, deployment target **15.0** — pre-set in `ios/`)
- Supabase (schema in `supabase/migrations/`, edge functions in `supabase/functions/`)
- RevenueCat Apple IAP: `astroalma_premium_monthly` ($6.99) + `astroalma_premium_annual` ($49.99) → `premium` entitlement

## Quick start
```bash
npm install
cp .env.example .env   # fill real keys — build FAILS LOUDLY without them
npm run build           # tsc + vite
npx cap sync            # copy dist → ios
npx cap open ios        # archive from Xcode
```

## Project layout
- `src/config.ts` — app identity (rename here), products, paywall rules
- `src/lib/astrology.ts` — REAL natal-chart engine (astronomy-engine, geocentric;
  13/13 accuracy checks pass). Whole-sign houses, aspects, ASC/MC.
- `src/lib/sinastry.ts` + `src/lib/share.ts` — compatibility scoring + shareable cards
- `src/components/` — Onboarding, Home, ChartWheel (SVG), ChartScreen, TarotScreen,
  CompatibilityScreen, Paywall
- `src/data/` — `tarot.ts` (78 cards), `horoscopes.ts` (84 seed horoscopes),
  `rituals.ts` (30 rituals) — all Latin American Spanish
- `supabase/` — migration + `generate-horoscopes` + `revenuecat-webhook` edge functions
- `docs/` — name vetting, App Store listing (EULA link included), Mac build runbook,
  Supabase setup, RevenueCat checklist

## Key behaviors
- **Fail loudly, never demo mode:** `vite.config.ts` stops the build if Supabase /
  RevenueCat keys are missing. `.env` is gitignored and absent from ZIPs by design.
- **Free vs premium:** daily horoscope + ritual free forever; full chart, unlimited
  sinastry, daily tarot, transits behind the `premium` entitlement.
- **Entertainment disclaimer** rendered in-app (footer) and in the listing —
  App Review requirement for psychic content.
- **Offline-first:** horoscope falls back to bundled seeds when the edge function
  hasn't generated today's row yet.
