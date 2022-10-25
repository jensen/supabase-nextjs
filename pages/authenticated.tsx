import { useSessionContext } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import DashboardLayout from "layouts/dashboard";

import type { ReactElement } from "react";
import type { NextPageWithLayout } from "pages/_app";

const Authenticated: NextPageWithLayout = () => {
  const { replace } = useRouter();
  const { session } = useSessionContext();

  useEffect(() => {
    if (session) {
      replace("/dashboard");
    }
  }, [session, replace]);

  return null;
};

Authenticated.getLayout = (page: ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Authenticated;
