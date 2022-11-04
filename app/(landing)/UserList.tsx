"use client";

import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { use } from "react";

const getData = async (client) => {
  const result = await client.from("profiles").select();
  return result.data;
};

export default function UserList(props) {
  const data = use(getData(useSupabaseClient()));

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
