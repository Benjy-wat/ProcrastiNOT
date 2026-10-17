create table if not exists public.student_profiles (
    user_id uuid primary key references auth.users (id) on delete cascade,
    display_name text not null,
    focus_task text not null default '',
favorite_subject text not null default 'Science',
    study_pace text not null default 'My own pace'
        check (study_pace in ('My own pace', 'Quick sessions', 'Deep focus')),
    updated_at timestamptz not null default now()
);

alter table public.student_profiles enable row level security;

drop policy if exists "Users can view their own profile" on public.student_profiles;
drop policy if exists "Users can create their own profile" on public.student_profiles;
drop policy if exists "Users can update their own profile" on public.student_profiles;

create policy "Users can view their own profile"
    on public.student_profiles for select
    to authenticated
    using ((select auth.uid()) = user_id);

create policy "Users can create their own profile"
    on public.student_profiles for insert
    to authenticated
    with check ((select auth.uid()) = user_id);

create policy "Users can update their own profile"
    on public.student_profiles for update
    to authenticated
    using ((select auth.uid()) = user_id)
    with check ((select auth.uid()) = user_id);

grant select, insert, update on public.student_profiles to authenticated;
