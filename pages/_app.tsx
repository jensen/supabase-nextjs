import { useState } from "react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import Head from "next/head";

import FullLayout from "layouts/full";

import type { Session } from "@supabase/supabase-js";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

import "../styles/generated.css";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface AppPropsWithLayout extends AppProps<{ initialSession: Session }> {
  Component: NextPageWithLayout<{
    initialSession: any;
  }>;
}

export default function Application({
  Component,
  pageProps,
}: AppPropsWithLayout) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  const getLayout =
    Component.getLayout ?? ((page) => <FullLayout>{page}</FullLayout>);

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <Head>
        <title>Supabase + Next</title>
        <meta name="description" content="Supabase + Next" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </SessionContextProvider>
  );
}
