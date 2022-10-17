import { withPageAuth } from "@supabase/auth-helpers-nextjs";
import DashboardLayout from "layouts/dashboard";

import type { ReactElement } from "react";
import type { NextPageWithLayout } from "pages/_app";

const Overview: NextPageWithLayout = () => {
  return <div>Overview</div>;
};

Overview.getLayout = (page: ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export const getServerSideProps = withPageAuth({
  redirectTo: "/login",
});

export default Overview;
