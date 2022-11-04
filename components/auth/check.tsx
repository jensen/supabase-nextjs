"use client";

import { useSessionContext } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Check() {
  const { replace } = useRouter();
  const { session } = useSessionContext();

  useEffect(() => {
    if (session) {
      replace("/dashboard");
    }
  }, [session, replace]);

  return null;
}
