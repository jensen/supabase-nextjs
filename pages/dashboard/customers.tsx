import { withPageAuth } from "@supabase/auth-helpers-nextjs";
import DashboardLayout from "layouts/dashboard";

import { User } from "@supabase/supabase-js";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "pages/_app";

interface CustomersProps {
  user: User;
}

const Customers: NextPageWithLayout<CustomersProps> = (props) => {
  const { user } = props;

  return <div>Customers</div>;
};

Customers.getLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export const getServerSideProps = withPageAuth({
  redirectTo: "/login",
  async getServerSideProps(context, supabase) {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    return { props: { user } };
  },
});

export default Customers;
