import Header from "components/header";
import Footer from "components/footer";

import type { ReactNode } from "react";

interface RootProps {
  children: ReactNode;
}

export default function LandingLayout(props: RootProps) {
  return (
    <div className="relative min-h-screen">
      <div className="sticky top-0 w-full">
        <header className="px-8 py-4 border-b border-neutral-800 bg-black/50 backdrop-blur-sm backdrop-saturate-150 z-10 min-h-[64px]">
          <Header />
        </header>
      </div>
      <main className="min-h-[calc(100vh-64px)] ">{props.children}</main>
      <Footer />
    </div>
  );
}
