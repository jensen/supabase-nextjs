import type { Database } from "./db";

type Tables = Database["public"]["Tables"];

export type NewCustomer = Tables["customers"]["Insert"];
