-- Champions of Terestalia — Supabase schema
-- Execute no SQL Editor do Supabase, em um projeto novo.

create extension if not exists pgcrypto;

create table if not exists public.campaigns (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  invite_code text not null unique,
  gm_id uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

create table if not exists public.campaign_members (
  id uuid primary key default gen_random_uuid(),
  campaign_id uuid not null references public.campaigns(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null check (role in ('gm','player')),
  created_at timestamptz not null default now(),
  unique(campaign_id,user_id)
);

create table if not exists public.characters (
  id uuid primary key default gen_random_uuid(),
  campaign_id uuid not null references public.campaigns(id) on delete cascade,
  owner_id uuid not null references auth.users(id) on delete cascade,
  name text not null default 'Novo personagem',
  level integer not null default 1 check(level between 1 and 10),
  xp integer not null default 0,
  origin text,
  concept text,
  focus_levels jsonb not null default '{"Físico":1}'::jsonb,
  attributes jsonb not null default '{"FOR":2,"DES":2,"INT":2,"SAB":2,"VIG":2}'::jsonb,
  hp_current integer not null default 24,
  charges jsonb not null default '{"Físico":0,"Precisão":0,"Mágico":0,"Saber":0}'::jsonb,
  armor_defense integer not null default 0,
  shield_defense integer not null default 0,
  armor_type text not null default 'Nenhuma',
  shield_type text not null default 'Nenhum',
  backpack_bonus integer not null default 0,
  inventory jsonb not null default '[]'::jsonb,
  active_skills jsonb not null default '[]'::jsonb,
  passive_skills jsonb not null default '[]'::jsonb,
  traits jsonb not null default '[]'::jsonb,
  notes text not null default '',
  updated_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

create table if not exists public.monsters (
  id uuid primary key default gen_random_uuid(),
  campaign_id uuid not null references public.campaigns(id) on delete cascade,
  created_by uuid not null references auth.users(id) on delete cascade,
  name text not null,
  pv integer not null default 20,
  def integer not null default 10,
  movement integer not null default 4,
  xp integer not null default 30,
  attributes jsonb not null default '{"FOR":2,"DES":2,"INT":0,"SAB":1,"VIG":2}'::jsonb,
  description text not null default '',
  attacks text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end; $$;

drop trigger if exists characters_updated_at on public.characters;
create trigger characters_updated_at before update on public.characters
for each row execute function public.set_updated_at();
drop trigger if exists monsters_updated_at on public.monsters;
create trigger monsters_updated_at before update on public.monsters
for each row execute function public.set_updated_at();

-- SECURITY DEFINER evita recursão nas políticas de campaign_members.
create or replace function public.is_campaign_member(cid uuid)
returns boolean language sql stable security definer set search_path=public as $$
  select exists(select 1 from public.campaign_members
    where campaign_id=cid and user_id=auth.uid());
$$;
create or replace function public.is_campaign_gm(cid uuid)
returns boolean language sql stable security definer set search_path=public as $$
  select exists(select 1 from public.campaign_members
    where campaign_id=cid and user_id=auth.uid() and role='gm');
$$;

create or replace function public.create_campaign(campaign_name text)
returns public.campaigns
language plpgsql security definer set search_path=public as $$
declare c public.campaigns;
declare code text;
begin
  if auth.uid() is null then raise exception 'É necessário entrar na conta.'; end if;
  code := upper(substr(encode(gen_random_bytes(8),'hex'),1,8));
  insert into public.campaigns(name,invite_code,gm_id)
    values(trim(campaign_name),code,auth.uid()) returning * into c;
  insert into public.campaign_members(campaign_id,user_id,role)
    values(c.id,auth.uid(),'gm');
  return c;
end; $$;

create or replace function public.join_campaign(invite_code_input text)
returns uuid language plpgsql security definer set search_path=public as $$
declare c public.campaigns;
begin
  if auth.uid() is null then raise exception 'É necessário entrar na conta.'; end if;
  select * into c from public.campaigns
    where invite_code=upper(trim(invite_code_input));
  if c.id is null then raise exception 'Código de convite inválido.'; end if;
  insert into public.campaign_members(campaign_id,user_id,role)
    values(c.id,auth.uid(),'player')
    on conflict(campaign_id,user_id) do nothing;
  return c.id;
end; $$;

alter table public.campaigns enable row level security;
alter table public.campaign_members enable row level security;
alter table public.characters enable row level security;
alter table public.monsters enable row level security;

drop policy if exists "campaigns_select_members" on public.campaigns;
create policy "campaigns_select_members" on public.campaigns
for select using (public.is_campaign_member(id));
drop policy if exists "campaigns_update_gm" on public.campaigns;
create policy "campaigns_update_gm" on public.campaigns
for update using (public.is_campaign_gm(id)) with check (public.is_campaign_gm(id));

drop policy if exists "members_select_self_or_gm" on public.campaign_members;
create policy "members_select_self_or_gm" on public.campaign_members
for select using (user_id=auth.uid() or public.is_campaign_gm(campaign_id));

drop policy if exists "characters_select_owner_or_gm" on public.characters;
create policy "characters_select_owner_or_gm" on public.characters
for select using (owner_id=auth.uid() or public.is_campaign_gm(campaign_id));
drop policy if exists "characters_insert_owner" on public.characters;
create policy "characters_insert_owner" on public.characters
for insert with check (
  owner_id=auth.uid() and public.is_campaign_member(campaign_id)
  and exists(select 1 from public.campaign_members m
    where m.campaign_id=characters.campaign_id and m.user_id=auth.uid() and m.role in ('player','gm'))
);
drop policy if exists "characters_update_owner_or_gm" on public.characters;
create policy "characters_update_owner_or_gm" on public.characters
for update using (owner_id=auth.uid() or public.is_campaign_gm(campaign_id))
with check (owner_id=auth.uid() or public.is_campaign_gm(campaign_id));
drop policy if exists "characters_delete_owner_or_gm" on public.characters;
create policy "characters_delete_owner_or_gm" on public.characters
for delete using (owner_id=auth.uid() or public.is_campaign_gm(campaign_id));

-- Monstros só podem ser lidos e alterados pelo mestre da campanha.
drop policy if exists "monsters_gm_all" on public.monsters;
create policy "monsters_gm_all" on public.monsters
for all using (public.is_campaign_gm(campaign_id))
with check (public.is_campaign_gm(campaign_id) and created_by=auth.uid());

grant execute on function public.create_campaign(text) to authenticated;
grant execute on function public.join_campaign(text) to authenticated;
grant execute on function public.is_campaign_member(uuid) to authenticated;
grant execute on function public.is_campaign_gm(uuid) to authenticated;

-- Ative Realtime para characters e monsters no painel Database > Publications.
-- Inclua as duas tabelas na publicação supabase_realtime.
ALTER TABLE public.characters ADD COLUMN IF NOT EXISTS shield_catalog_name text;
