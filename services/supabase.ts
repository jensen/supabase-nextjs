import { cookies } from "next/headers";
import { createClient } from "@supabase/supabase-js";

export const createSupabaseClient = () => {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    throw new Error(`Must define process.env.NEXT_PUBLIC_SUPABASE_URL`);
  }

  if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    throw new Error(`Must define process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY`);
  }

  const cookie = JSON.parse(cookies().get("supabase-auth-token") || "{}");

  const authorization = cookie?.access_token
    ? {
        global: {
          headers: {
            Authorization: `Bearer ${cookie.access_token}`,
          },
        },
      }
    : {};

  return createClient(
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
