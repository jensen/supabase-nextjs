import { withPageAuth } from "@supabase/auth-helpers-nextjs";
import DashboardLayout from "layouts/dashboard";

import type { User } from "@supabase/supabase-js";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "pages/_app";

interface SettingsProps {
  user: User;
}

const Settings: NextPageWithLayout<SettingsProps> = (props) => {
  return <div>Settings</div>;
};

Settings.getLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export const getServerSideProps = withPageAuth({
  redirectTo: "/login",
});

export default Settings;
