# RevenueCat checklist — AstroAlma (~5 min, John's dashboard)

Apple IAP only — never Stripe. Mirrors the CronoBiblia/miAzucr setup.

## 1. Project
- https://app.revenuecat.com → New project → name: `astroalma`

## 2. iOS app
- Project → Apps → Add app → iOS
- Bundle ID: `com.astroalma.app` (or FINAL bundle id once the name is picked)
- API key shown starts with `appl_` → this is `VITE_REVENUECAT_IOS_KEY` in `.env`

## 3. Products (App Store Connect FIRST, then import here)
In App Store Connect → AstroAlma → Subscriptions, create the group (e.g. "AstroAlma Premium"):
- `astroalma_premium_monthly` — $6.99/month
- `astroalma_premium_annual` — $49.99/year
Then RevenueCat → Products → Import from App Store Connect (or + New).

## 4. Entitlement + Offering
- Entitlements → New → identifier: `premium` → attach BOTH products
- Offerings → `default` → add the `premium` entitlement's packages
  (monthly + annual)

## 5. Webhook (so the backend knows subscription status)
- Project → Integrations → Webhooks → Add webhook
- URL: `https://<supabase-project-ref>.supabase.co/functions/v1/revenuecat-webhook`
- Authorization header: `Bearer <same RC_WEBHOOK_SECRET you set in Supabase>`

## 6. App wiring (already in the repo)
- `src/lib/revenuecat.ts` configures with the `appl_` key, checks the
  `premium` entitlement, purchases via Apple IAP.
- Pinned `@revenuecat/purchases-capacitor@^11.3.2` (same as his other apps).

## Verify on device
Buy the monthly in sandbox → paywall unlocks → `isPremium()` true.
