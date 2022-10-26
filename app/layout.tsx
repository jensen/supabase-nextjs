import Supabase from "context/Supabase";

import type { ReactNode } from "react";

import "../styles/global.css";

interface RootProps {
  children: ReactNode;
}

export default function RootLayout(props: RootProps) {
  return (
    <html lang="en">
      <head>
        <title>Supabase + Next</title>
        <meta name="description" content="Supabase + Next" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Supabase>{props.children}</Supabase>
      </body>
    </html>
  );
}
