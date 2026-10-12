# Mac build runbook — AstroAlma

Machine: 2020 Intel i3 MacBook Air, macOS Sequoia 15.8.1, Xcode ≤ 26.3.

## First build (fresh)

```bash
# 1. Download the GitHub ZIP of pilly005/astroalma, unzip, cd in
# 2. Install
npm install

# 3. Env — the ZIP never contains .env (gitignored).
#    The build FAILS LOUDLY without it (by design, never demo mode).
cp .env.example .env
# Edit .env with real values:
#   VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY, VITE_REVENUECAT_IOS_KEY (appl_...)

# 4. Web build
npm run build

# 5. VERIFY the RevenueCat key is baked into dist (do this EVERY archive):
grep -o "appl_[A-Za-z0-9]*" dist/assets/*.js | head -3
# Must print your appl_ key. If empty → STOP, .env is wrong.

# 6. iOS platform (first time only; ios/ is committed, so usually skip)
npx cap add ios
npx cap sync

# 7. Open in Xcode
npx cap open ios
```

## Xcode checklist
- Signing & Capabilities → Team: John's Apple Developer team, Bundle ID `com.astroalma.app`
  (or the FINAL bundle id once the name is picked)
- Deployment target: **15.0** (already set in the repo's project.pbxproj —
  verify: search `IPHONEOS_DEPLOYMENT_TARGET` shows 15.0)
- Product → Archive → Distribute App → App Store Connect

## Lessons baked in (from miAzucr/CronoBiblia)
- Fresh ZIP = no `.env` → build fails loudly (vite plugin). Copy + fill before building.
- `grep` the `appl_` key in `dist/assets/*.js` BEFORE every archive.
- iOS deployment target 15.0 from day one (no ITMS-90068 warning).
- RevenueCat: `@revenuecat/purchases-capacitor@^11.3.2` pinned.
- If you `rm -rf ios` + `cap add` regen: deployment target resets to 14.0 —
  set it back to 15.0 in Xcode (Build Settings → iOS Deployment Target).
