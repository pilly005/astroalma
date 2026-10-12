// ============================================================
// APP IDENTITY — rename the app by editing THIS file.
// - displayName: shown in the app + App Store. Freely changeable.
// - bundleId / productIds: LOCKED once created in App Store Connect.
//   (Apple ties them to the app record + IAPs; a rename later keeps them.)
// capacitor.config.ts reads appId/appName from here.
// ============================================================

export const APP_CONFIG = {
  // FINAL NAME — AstroAlma, picked by John 2026-10-08 (vetting in docs/name-vetting.md)
  displayName: "AstroAlma",
  // Bundle ID — set with the final name; LOCKS at first App Store Connect creation
  bundleId: "com.astroalma.app",
  tagline: "Tu guía astral en español",
} as const;

// RevenueCat — created in the RevenueCat dashboard (docs/revenuecat-checklist.md)
export const RC_PRODUCTS = {
  monthly: "astroalma_premium_monthly", // $6.99/mes
  annual: "astroalma_premium_annual",   // $49.99/año
  entitlement: "premium",
} as const;

// What's free vs premium
export const PAYWALL_RULES = {
  free: ["Horóscopo diario", "Ritual del día"],
  premium: [
    "Carta astral completa",
    "Sinastría ilimitada",
    "Tarot diario",
    "Tránsitos y predicciones",
  ],
} as const;

// Visible everywhere in-app (App Review requirement for psychic content)
export const ENTERTAINMENT_DISCLAIMER =
  "Contenido solo con fines de entretenimiento. No sustituye consejo profesional médico, legal o financiero.";
