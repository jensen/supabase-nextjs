drop table if exists profiles;

create table profiles (
  id uuid references auth.users primary key,
  name text
);

drop table if exists profiles_private;

create table profiles_private (
  id uuid references profiles(id) primary key,
  email text,
  admin boolean default false not null
);

alter table
  profiles_private enable row level security;

create policy "Profiles are only visible by the user who owns it" on profiles_private for
select
  using (auth.uid() = id);

drop trigger if exists on_auth_user_created on auth.users;

drop function if exists handle_new_user();
create function handle_new_user() returns trigger language plpgsql security definer
set search_path = public as $$ begin
insert into
  profiles (id, name)
values
  (
    new.id,
    new.raw_user_meta_data :: json ->> 'full_name'
  );

insert into
  profiles_private (id, email)
values
  (new.id, new.email);

return new;

end;
$$;

create trigger on_auth_user_created
after
insert
  on auth.users for each row execute procedure handle_new_user();

create table customers (
  id uuid default extensions.uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,

  name text not null,
  email text not null,
  phone text not null,
  twitter text not null,

  user_id uuid default auth.uid() not null,
  constraint user_id foreign key(user_id) references profiles(id) on delete cascade
);

alter table
  customers enable row level security;

create policy "Customers are visible to the user that they belong to" on public.customers for
select
  using (auth.uid() = user_id);

create policy "Customers can be inserted by authenticated users" on public.customers for
insert
  to authenticated
  with check(true);