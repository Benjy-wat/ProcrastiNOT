create table if not exists public.study_buddy_profiles (
    user_id uuid primary key references auth.users (id) on delete cascade,
    friend_code text not null unique check (friend_code ~ '^[A-F0-9]{16}$'),
    display_name text not null,
    points integer not null default 0 check (points >= 0),
    current_level integer not null default 1 check (current_level >= 1),
    current_streak integer not null default 0 check (current_streak >= 0),
    updated_at timestamptz not null default now()
);

create table if not exists public.study_buddy_connections (
    user_id uuid not null references auth.users (id) on delete cascade,
    buddy_id uuid not null references auth.users (id) on delete cascade,
    created_at timestamptz not null default now(),
    primary key (user_id, buddy_id),
    check (user_id <> buddy_id)
);

create table if not exists public.study_buddy_requests (
    id uuid primary key default gen_random_uuid(),
    sender_id uuid not null references auth.users (id) on delete cascade,
    receiver_id uuid not null references auth.users (id) on delete cascade,
    status text not null default 'pending'
        check (status in ('pending', 'accepted', 'declined', 'cancelled')),
    created_at timestamptz not null default now(),
    check (sender_id <> receiver_id)
);

create unique index if not exists study_buddy_requests_one_pending_pair
    on public.study_buddy_requests (
        least(sender_id, receiver_id),
        greatest(sender_id, receiver_id)
    )
    where status = 'pending';

create index if not exists study_buddy_requests_receiver_pending
    on public.study_buddy_requests (receiver_id, created_at desc)
    where status = 'pending';

alter table public.study_buddy_profiles enable row level security;
alter table public.study_buddy_connections enable row level security;
alter table public.study_buddy_requests enable row level security;

drop policy if exists "Users can view their own and buddies' stats" on public.study_buddy_profiles;
create policy "Users can view their own and buddies' stats"
    on public.study_buddy_profiles for select
    to authenticated
    using (
        user_id = (select auth.uid())
        or exists (
            select 1
            from public.study_buddy_connections connection
            where connection.user_id = (select auth.uid())
              and connection.buddy_id = study_buddy_profiles.user_id
        )
    );

drop policy if exists "Users can view their own buddy connections" on public.study_buddy_connections;
create policy "Users can view their own buddy connections"
    on public.study_buddy_connections for select
    to authenticated
    using (user_id = (select auth.uid()));

drop policy if exists "Users can view their own buddy requests" on public.study_buddy_requests;
create policy "Users can view their own buddy requests"
    on public.study_buddy_requests for select
    to authenticated
    using (
        sender_id = (select auth.uid())
        or receiver_id = (select auth.uid())
    );

revoke all on public.study_buddy_profiles from anon, authenticated;
revoke all on public.study_buddy_connections from anon, authenticated;
revoke all on public.study_buddy_requests from anon, authenticated;
grant select (user_id, display_name, points, current_level, current_streak, updated_at)
    on public.study_buddy_profiles to authenticated;
grant select on public.study_buddy_connections to authenticated;
grant select on public.study_buddy_requests to authenticated;

create or replace function public.sync_study_buddy_progress(
    p_points integer,
    p_current_level integer,
    p_current_streak integer
)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
    v_user_id uuid := auth.uid();
    v_display_name text;
    v_friend_code text;
    v_attempt integer := 0;
begin
    if v_user_id is null then
        raise exception 'You must be signed in to sync buddy progress.';
    end if;
    if p_points < 0 or p_points > 10000000
        or p_current_level < 1 or p_current_level > 100000
        or p_current_streak < 0 or p_current_streak > 100000 then
        raise exception 'The progress values are outside the allowed range.';
    end if;

    select profile.display_name
    into v_display_name
    from public.student_profiles profile
    where profile.user_id = v_user_id;

    if v_display_name is null then
        raise exception 'Your student profile was not found.';
    end if;

    loop
        v_attempt := v_attempt + 1;
        v_friend_code := upper(substr(replace(gen_random_uuid()::text, '-', ''), 1, 16));
        begin
            insert into public.study_buddy_profiles (
                user_id, friend_code, display_name, points, current_level, current_streak, updated_at
            )
            values (
                v_user_id, v_friend_code, v_display_name, p_points, p_current_level, p_current_streak, now()
            )
            on conflict (user_id) do update
                set display_name = excluded.display_name,
                    points = excluded.points,
                    current_level = excluded.current_level,
                    current_streak = excluded.current_streak,
                    updated_at = now();
            exit;
        exception when unique_violation then
            if v_attempt >= 5 then
                raise exception 'Could not create a unique friend code. Please try again.';
            end if;
        end;
    end loop;
end;
$$;

create or replace function public.lookup_study_buddy_by_code(p_friend_code text)
returns text
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
    v_user_id uuid := auth.uid();
    v_target_id uuid;
    v_target_name text;
begin
    if v_user_id is null then
        raise exception 'You must be signed in to look up a study buddy.';
    end if;
    if p_friend_code is null or upper(trim(p_friend_code)) !~ '^[A-F0-9]{16}$' then
        raise exception 'Enter a valid 16-character friend code.';
    end if;

    select profile.user_id, profile.display_name
    into v_target_id, v_target_name
    from public.study_buddy_profiles profile
    where profile.friend_code = upper(trim(p_friend_code));

    if v_target_id is null then
        raise exception 'No account was found with that friend code.';
    end if;
    if v_target_id = v_user_id then
        raise exception 'That is your own friend code.';
    end if;

    return v_target_name;
end;
$$;

create or replace function public.send_study_buddy_request(p_friend_code text)
returns text
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
    v_user_id uuid := auth.uid();
    v_target_id uuid;
    v_target_name text;
begin
    if v_user_id is null then
        raise exception 'You must be signed in to add a study buddy.';
    end if;
    if p_friend_code is null or length(trim(p_friend_code)) <> 16 then
        raise exception 'Enter a valid 16-character friend code.';
    end if;

    select profile.user_id, profile.display_name
    into v_target_id, v_target_name
    from public.study_buddy_profiles profile
    where profile.friend_code = upper(trim(p_friend_code));

    if v_target_id is null then
        raise exception 'No account was found with that friend code.';
    end if;
    if v_target_id = v_user_id then
        raise exception 'You cannot add your own account as a buddy.';
    end if;
    if exists (
        select 1 from public.study_buddy_connections connection
        where connection.user_id = v_user_id and connection.buddy_id = v_target_id
    ) then
        raise exception 'You are already study buddies.';
    end if;
    if exists (
        select 1 from public.study_buddy_requests request
        where request.status = 'pending'
          and (
              (request.sender_id = v_user_id and request.receiver_id = v_target_id)
              or (request.sender_id = v_target_id and request.receiver_id = v_user_id)
          )
    ) then
        raise exception 'A buddy request is already pending between these accounts.';
    end if;
    if (
        select count(*) from public.study_buddy_requests request
        where request.sender_id = v_user_id
          and request.created_at > now() - interval '1 day'
    ) >= 20 then
        raise exception 'You have reached the daily buddy request limit. Try again tomorrow.';
    end if;

    insert into public.study_buddy_requests (sender_id, receiver_id)
    values (v_user_id, v_target_id);

    return v_target_name;
end;
$$;

create or replace function public.respond_to_study_buddy_request(
    p_request_id uuid,
    p_accept boolean
)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
    v_request public.study_buddy_requests%rowtype;
begin
    if auth.uid() is null then
        raise exception 'You must be signed in to respond to a buddy request.';
    end if;

    update public.study_buddy_requests request
    set status = case when p_accept then 'accepted' else 'declined' end
    where request.id = p_request_id
      and request.receiver_id = auth.uid()
      and request.status = 'pending'
    returning request.* into v_request;

    if not found then
        raise exception 'That pending buddy request was not found.';
    end if;

    if p_accept then
        insert into public.study_buddy_connections (user_id, buddy_id)
        values
            (v_request.sender_id, v_request.receiver_id),
            (v_request.receiver_id, v_request.sender_id)
        on conflict do nothing;
    end if;
end;
$$;

create or replace function public.cancel_study_buddy_request(p_request_id uuid)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
    if auth.uid() is null then
        raise exception 'You must be signed in to cancel a buddy request.';
    end if;

    update public.study_buddy_requests request
    set status = 'cancelled'
    where request.id = p_request_id
      and request.sender_id = auth.uid()
      and request.status = 'pending';

    if not found then
        raise exception 'That pending buddy request was not found.';
    end if;
end;
$$;

create or replace function public.remove_study_buddy(p_buddy_id uuid)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
    if auth.uid() is null or p_buddy_id = auth.uid() then
        raise exception 'Invalid buddy account.';
    end if;

    delete from public.study_buddy_connections connection
    where (connection.user_id = auth.uid() and connection.buddy_id = p_buddy_id)
       or (connection.user_id = p_buddy_id and connection.buddy_id = auth.uid());

    if not found then
        raise exception 'That study buddy was not found.';
    end if;
end;
$$;

create or replace function public.get_study_buddy_dashboard()
returns jsonb
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
    v_user_id uuid := auth.uid();
    v_result jsonb;
begin
    if v_user_id is null then
        raise exception 'You must be signed in to view study buddies.';
    end if;

    select jsonb_build_object(
        'friend_code', own_profile.friend_code,
        'friends', coalesce((
            select jsonb_agg(jsonb_build_object(
                'user_id', buddy_profile.user_id,
                'display_name', buddy_profile.display_name,
                'points', buddy_profile.points,
                'current_level', buddy_profile.current_level,
                'current_streak', buddy_profile.current_streak
            ) order by buddy_profile.display_name)
            from public.study_buddy_connections connection
            join public.study_buddy_profiles buddy_profile
                on buddy_profile.user_id = connection.buddy_id
            where connection.user_id = v_user_id
        ), '[]'::jsonb),
        'incoming', coalesce((
            select jsonb_agg(jsonb_build_object(
                'request_id', request.id,
                'user_id', request.sender_id,
                'display_name', sender.display_name,
                'created_at', request.created_at
            ) order by request.created_at)
            from public.study_buddy_requests request
            join public.study_buddy_profiles sender
                on sender.user_id = request.sender_id
            where request.receiver_id = v_user_id and request.status = 'pending'
        ), '[]'::jsonb),
        'outgoing', coalesce((
            select jsonb_agg(jsonb_build_object(
                'request_id', request.id,
                'display_name', receiver.display_name,
                'created_at', request.created_at
            ) order by request.created_at)
            from public.study_buddy_requests request
            join public.study_buddy_profiles receiver
                on receiver.user_id = request.receiver_id
            where request.sender_id = v_user_id and request.status = 'pending'
        ), '[]'::jsonb)
    )
    into v_result
    from public.study_buddy_profiles own_profile
    where own_profile.user_id = v_user_id;

    if v_result is null then
        raise exception 'Buddy profile is not ready. Reload and try again.';
    end if;

    return v_result;
end;
$$;

revoke all on function public.sync_study_buddy_progress(integer, integer, integer) from public, anon, authenticated;
revoke all on function public.lookup_study_buddy_by_code(text) from public, anon, authenticated;
revoke all on function public.send_study_buddy_request(text) from public, anon, authenticated;
revoke all on function public.respond_to_study_buddy_request(uuid, boolean) from public, anon, authenticated;
revoke all on function public.cancel_study_buddy_request(uuid) from public, anon, authenticated;
revoke all on function public.remove_study_buddy(uuid) from public, anon, authenticated;
revoke all on function public.get_study_buddy_dashboard() from public, anon, authenticated;

grant execute on function public.sync_study_buddy_progress(integer, integer, integer) to authenticated;
grant execute on function public.lookup_study_buddy_by_code(text) to authenticated;
grant execute on function public.send_study_buddy_request(text) to authenticated;
grant execute on function public.respond_to_study_buddy_request(uuid, boolean) to authenticated;
grant execute on function public.cancel_study_buddy_request(uuid) to authenticated;
grant execute on function public.remove_study_buddy(uuid) to authenticated;
grant execute on function public.get_study_buddy_dashboard() to authenticated;
