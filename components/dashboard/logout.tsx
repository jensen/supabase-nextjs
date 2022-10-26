"use client";

import { useSessionContext } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();
  const { supabaseClient } = useSessionContext();

  const handleLogout = async () => {
    await supabaseClient.auth.signOut();
    router.replace("/");
  };

  return (
    <ul>
      <li
        className="border-l-2 border-transparent pl-10 cursor-pointer hover:text-white"
        onClick={handleLogout}
      >
        Log out
      </li>
    </ul>
  );
}
