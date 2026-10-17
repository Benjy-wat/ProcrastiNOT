create table if not exists public.app_feedback (
    id uuid primary key default gen_random_uuid(),
    user_id uuid references auth.users (id) on delete set null,
    feedback_type text not null
        check (feedback_type in ('bug', 'feature', 'praise', 'other')),
    message text not null
        check (char_length(btrim(message)) between 1 and 500),
    created_at timestamptz not null default now()
);

alter table public.app_feedback enable row level security;

revoke all on table public.app_feedback from public, anon, authenticated;
grant insert on table public.app_feedback to authenticated;

drop policy if exists "Signed-in users can submit feedback" on public.app_feedback;

create policy "Signed-in users can submit feedback"
    on public.app_feedback for insert
    to authenticated
    with check (
        user_id = (select auth.uid())
        and feedback_type in ('bug', 'feature', 'praise', 'other')
        and char_length(btrim(message)) between 1 and 500
    );
