# Name vetting — AstroLuna working title (2026-10-09)

Seed candidates checked: AstroLuna, MiAstral, AstroAlma, MiLuna.
Checks: (a) App Store / web collision in the astrology category, (b) `<name>.app` DNS, (c) obvious brand conflicts.

## Findings

- **AstroLuna** — ⚠️ DIRECT COLLISION. "AstroLuna – Online Astrology, Horoscope & Kundli App"
  (v2xinnovations.com) is a live astrology app with 100k+ downloads and 4.8★.
  Same category on the App Store = confusion risk + likely rejection/trademark
  trouble. `astroluna.app` resolves (taken). TikTok @astroluna____ exists.
  → EXCLUDED from top 3. The working title must change before ASC submission.
- **MiAstral** — ⚠️ Brand conflict. `miastral.com` is "Mia Astral", an established
  Spanish-language astrology coaching brand (Mia Pineda, $39/mo memberships,
  active content). Same market, near-identical name. `miastral.app` resolves.
  → Usable only with clear differentiation; real confusion risk.
- **AstroAlma** — ✅ Cleanest. No astrology app found. Only hits: a tarot-forum
  username and @ASTROALMAGICA (different brand, spiritual oils, different spelling).
  `astroalma.app` resolves (taken/parked — verify). Low collision risk.
- **MiLuna** — ✅ No astrology-app collision. Adjacent names exist ("Mi Fase Lunar"
  moon-phase app, Moonly/moonly.app) but different product. Short, brandable.
  `miluna.app` resolves (taken/parked — verify).

## Ranked top 3 (John picks)

1. **AstroAlma** — no app collision, distinct from the oils brand by spelling;
   check `astroalma.app` / `.com` availability on Porkbun before committing.
2. **MiLuna** — no astrology collision; verify `miluna.app` / `.com`.
3. **MiAstral** — only if John accepts the miastral.com proximity risk.

**Note:** repo `pilly005/astroluna` + bundle `com.astroluna.app` are PLACEHOLDERS.
Display name lives in `src/config.ts` (one-line change). Bundle ID + RC product
IDs lock at first App Store Connect creation — set them with the FINAL name.

## Final pick (2026-10-08)
John picked **AstroAlma**. Repo: pilly005/astroalma. Bundle: com.astroalma.app.
