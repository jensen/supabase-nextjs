import CustomerTable from "./CustomerTable";
import CustomerForm from "./CustomerForm";

import { getCustomers } from "api/customers/server";

const Customers = async () => {
  const customers = await getCustomers();

  return (
    <>
      <CustomerTable customers={customers} />
      <CustomerForm />
    </>
  );
};

export default Customers;
