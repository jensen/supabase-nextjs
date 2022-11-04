import { createSupabaseClient } from "services/supabase/client";
import { NewCustomer } from "services/supabase/types/entities";

export const createCustomer = async (customer: NewCustomer) => {
  const supabase = createSupabaseClient();

  return await supabase.from("customers").insert(customer);
};
