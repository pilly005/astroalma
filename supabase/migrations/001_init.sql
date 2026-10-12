-- AstroAlma initial schema
-- Apply in Supabase Dashboard → SQL Editor (or `supabase db push`).
-- Tables: profiles, birth_charts, daily_horoscopes, ritual_library, subscriptions.

-- ---------- profiles ----------
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  birth_date date,
  birth_time text,
  birth_lat double precision,
  birth_lon double precision,
  created_at timestamptz default now()
);

-- ---------- birth_charts (saved charts: self + partners for sinastry) ----------
create table if not exists public.birth_charts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  label text not null,
  birth_date date not null,
  birth_time text,
  lat double precision not null,
  lon double precision not null,
  chart_json jsonb,
  created_at timestamptz default now()
);

-- ---------- daily_horoscopes (written by edge function generate-horoscopes) ----------
create table if not exists public.daily_horoscopes (
  date date not null,
  sign text not null,
  text text not null,
  amor int not null check (amor between 0 and 100),
  trabajo int not null check (trabajo between 0 and 100),
  bienestar int not null check (bienestar between 0 and 100),
  ritual text not null,
  color text not null,
  numero int not null,
  generated_by text default 'edge-function',
  created_at timestamptz default now(),
  primary key (date, sign)
);

-- ---------- ritual_library ----------
create table if not exists public.ritual_library (
  id text primary key,
  title text not null,
  description text not null,
  moon_phase text not null default 'cualquiera',
  tags text[] not null default '{}',
  seasonal text
);

-- ---------- subscriptions (RevenueCat webhook writes) ----------
create table if not exists public.subscriptions (
  user_id uuid primary key references auth.users(id) on delete cascade,
  rc_app_user_id text,
  entitlement text not null default 'premium',
  status text not null default 'active',
  expires_at timestamptz,
  updated_at timestamptz default now()
);

-- ---------- RLS ----------
alter table public.profiles enable row level security;
alter table public.birth_charts enable row level security;
alter table public.daily_horoscopes enable row level security;
alter table public.ritual_library enable row level security;
alter table public.subscriptions enable row level security;

-- Own rows only
create policy "profiles_own" on public.profiles
  for all using (auth.uid() = id) with check (auth.uid() = id);

create policy "charts_own" on public.birth_charts
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "subs_own_read" on public.subscriptions
  for select using (auth.uid() = user_id);

-- Service role (edge functions) bypasses RLS; webhook uses service key.

-- Public content readable by everyone (anon included)
create policy "horoscopes_public_read" on public.daily_horoscopes
  for select using (true);

create policy "rituals_public_read" on public.ritual_library
  for select using (true);

-- ---------- seed: ritual library (starter set; app also bundles rituals) ----------
insert into public.ritual_library (id, title, description, moon_phase, tags) values
('luna-nueva-intenciones', 'Siembra de intenciones en luna nueva',
 'En una hoja escribe 3 intenciones en presente, como si ya fueran realidad. Dóblala y guárdala en un lugar especial hasta la luna llena. La luna nueva es tierra fértil.',
 'nueva', array['intenciones','manifestación']),
('luna-llena-liberacion', 'Ritual de liberación en luna llena',
 'Escribe en un papel lo que quieres soltar. Léelo en voz alta bajo la luna llena y quémalo con cuidado en un recipiente seguro. La luna llena ilumina lo que ya cumplió su ciclo.',
 'llena', array['liberación','limpieza']),
('sal-marina-creciente', 'Baño de sal marina en luna creciente',
 'Disuelve un puñado de sal marina en tu baño o en un recipiente con agua tibia. Mientras te enjuagas, visualiza que la energía estancada se va por el desagüe. La luna creciente impulsa lo nuevo.',
 'creciente', array['limpieza','energía']),
('vela-blanca-menguante', 'Vela blanca de cierre en luna menguante',
 'Enciende una vela blanca y dedica 5 minutos a agradecer lo que termina. Apágala con los dedos o un apagavelas, nunca soplando. La menguante nos enseña a soltar con gratitud.',
 'menguante', array['gratitud','cierre'])
on conflict (id) do nothing;
