"use client";

import { useState } from "react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

import type { ReactNode } from "react";

interface SupabaseProps {
  children: ReactNode;
}

export default function Supabase(props: SupabaseProps) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={null}
    >
      {props.children}
    </SessionContextProvider>
  );
}
