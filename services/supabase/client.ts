import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types/db";

export const createSupabaseClient = () => {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    throw new Error(`Must define process.env.NEXT_PUBLIC_SUPABASE_URL`);
  }

  if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    throw new Error(`Must define process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY`);
  }

  const cookie = JSON.parse(
    document.cookie
      .split(";")
      .map((v) => v.split("="))
      .reduce((acc, v) => {
        acc[decodeURIComponent(v[0].trim()) as "supabase-auth-token"] =
          decodeURIComponent(v[1].trim());
        return acc;
      }, {} as { "supabase-auth-token": string })["supabase-auth-token"]
  );

  const authorization = cookie?.access_token
    ? {
        global: {
          headers: {
            Authorization: `Bearer ${cookie.access_token}`,
          },
        },
      }
    : {};

  return createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      auth: {
        persistSession: false,
      },
      ...authorization,
    }
  );
};
