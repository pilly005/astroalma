import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// Keys that MUST be present for a shippable build.
// Fresh GitHub ZIPs lose the gitignored .env — instead of shipping
// silently with RevenueCat in demo mode (broken paywall), the build
// stops here with a clear message.
const REQUIRED_ENV = [
  "VITE_SUPABASE_URL",
  "VITE_SUPABASE_ANON_KEY",
  "VITE_REVENUECAT_IOS_KEY",
] as const;

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const missing = REQUIRED_ENV.filter((k) => !env[k] || env[k].includes("YOUR_") || env[k].includes("your-"));

  return {
    plugins: [
      react(),
      {
        name: "astroalma-fail-loudly-on-missing-env",
        buildStart() {
          if (missing.length > 0) {
            throw new Error(
              `\n\n[AstroAlma] BUILD DETENIDO — faltan variables de entorno: ${missing.join(", ")}\n` +
                `Copia .env.example a .env y completa las claves reales (Supabase + RevenueCat).\n` +
                `Esto es intencional: la app nunca debe publicarse con RevenueCat en modo demo.\n`
            );
          }
        },
      },
    ],
    build: {
      outDir: "dist",
      sourcemap: false,
    },
    server: {
      port: 5173,
    },
  };
});
