import { withPageAuth } from "@supabase/auth-helpers-nextjs";
import DashboardLayout from "layouts/dashboard";

import type { ReactElement } from "react";
import type { NextPageWithLayout } from "pages/_app";

const Settings: NextPageWithLayout = () => {
  return <div>Settings</div>;
};

Settings.getLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export const getServerSideProps = withPageAuth({
  redirectTo: "/login",
});

export default Settings;
