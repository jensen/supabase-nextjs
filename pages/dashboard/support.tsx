import { withPageAuth } from "@supabase/auth-helpers-nextjs";
import DashboardLayout from "layouts/dashboard";

import type { ReactElement } from "react";
import type { NextPageWithLayout } from "pages/_app";

const Support: NextPageWithLayout = () => {
  return <div>Support</div>;
};

Support.getLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export const getServerSideProps = withPageAuth({
  redirectTo: "/login",
});

export default Support;
