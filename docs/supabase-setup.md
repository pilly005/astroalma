# Supabase setup — AstroAlma

John creates the project (Muse can't — it's his account). ~15 minutes.

## 1. Create the project
1. https://supabase.com/dashboard → New project
2. Name: `astroalma`, region: US East (closest to NC), free tier is fine
3. Save the DB password somewhere safe

## 2. Apply the migration
1. SQL Editor → New query
2. Paste the ENTIRE contents of `supabase/migrations/001_init.sql` from this repo
3. Run. Creates: `profiles`, `birth_charts`, `daily_horoscopes`,
   `ritual_library` (+ 4 seed rituals), `subscriptions`, and all RLS policies.

## 3. Get the keys for `.env`
Project Settings → Data API:
- `VITE_SUPABASE_URL` = Project URL
- `VITE_SUPABASE_ANON_KEY` = anon public key

## 4. Deploy edge functions
```bash
npm i -g supabase
supabase login
supabase link --project-ref <your-project-ref>
supabase functions deploy generate-horoscopes
supabase functions deploy revenuecat-webhook
supabase secrets set OPENAI_API_KEY=sk-... RC_WEBHOOK_SECRET=<random-string>
```
(`SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are auto-provided to functions.)

## 5. Schedule the daily horoscope job
Dashboard → Edge Functions → `generate-horoscopes` → Cron triggers → add:
- Schedule: `0 9 * * *` (daily 9am UTC ≈ 5am EDT)
- It writes all 12 signs into `daily_horoscopes`; the app reads today's row
  and falls back to bundled seeds if the job hasn't run yet.

## 6. Verify
SQL Editor:
```sql
select date, sign, left(text, 40) from daily_horoscopes order by date desc limit 3;
```
After the first cron run (or manual invoke), you should see 12 rows for today.
