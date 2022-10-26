"use client";

import classnames from "classnames";
import { usePathname } from "next/navigation";
import Link from "next/link";

import type { ReactNode } from "react";

interface NavigationLinkProps {
  path: string;
  children: ReactNode;
}

const NavigationLink = (props: NavigationLinkProps) => {
  const current = usePathname();

  return (
    <Link href={props.path}>
      <li
        className={classnames(
          "border-l-2 pl-10 cursor-pointer hover:text-white transition-colors",
          {
            "border-transparent": current !== props.path,
          }
        )}
      >
        {props.children}
      </li>
    </Link>
  );
};

export default function Navigation() {
  return (
    <nav className="space-y-12">
      <ul className="space-y-4">
        <NavigationLink path="/dashboard">Overview</NavigationLink>
        <NavigationLink path="/dashboard/growth">Growth</NavigationLink>
        <NavigationLink path="/dashboard/customers">Customers</NavigationLink>
      </ul>
      <ul className="space-y-4">
        <NavigationLink path="/dashboard/support">Support</NavigationLink>
        <NavigationLink path="/dashboard/settings">Settings</NavigationLink>
      </ul>
    </nav>
  );
}
