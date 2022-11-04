import Navigation from "components/dashboard/navigation";
import Logout from "components/dashboard/logout";

import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <div className="min-h-screen flex">
      <div className="bg-zinc-900 text-zinc-500 flex flex-col justify-between pt-12 pb-12 w-[var(--dashboard-sidebar-width)] flex-shrink-0">
        <div>
          <div className="pl-10 pr-12 pb-12">
            <span className="text-white font-bold text-xl">supabase+next</span>
          </div>
          <Navigation />
        </div>
        <Logout />
      </div>
      <section className="p-12 w-[calc(100vw-var(--dashboard-sidebar-width))] min-w-[438px]">
        {props.children}
      </section>
    </div>
  );
}
