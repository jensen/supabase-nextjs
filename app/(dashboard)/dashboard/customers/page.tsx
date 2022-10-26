import { createSupabaseClient } from "services/supabase";

const getCustomers = async () => {
  const supabase = createSupabaseClient();

  return (await supabase.from("customers").select()).data;
};

const Customers = async () => {
  const customers = await getCustomers();

  return <pre>{JSON.stringify(customers, null, 2)}</pre>;
};

export default Customers;
