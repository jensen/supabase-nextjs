import { createSupabaseClient } from "services/supabase/server";

export const getCustomers = async () => {
  const supabase = createSupabaseClient();

  return (await supabase.from("customers").select()).data || [];
};
