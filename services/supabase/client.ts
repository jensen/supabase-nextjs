import { createBrowserSupabaseClient } from "@supabase/auth-helpers-shared";

import type { Database } from "./types/db";

export const createSupabaseClient = () => {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    throw new Error(`Must define process.env.NEXT_PUBLIC_SUPABASE_URL`);
  }

  if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    throw new Error(`Must define process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY`);
  }

  return createBrowserSupabaseClient<Database>({
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  });
};
