"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSessionContext } from "@supabase/auth-helpers-react";
import Button from "components/shared/input/Button";

import type { ReactNode } from "react";

interface HeaderLinkProps {
  href: string;
  children: ReactNode;
}

const HeaderLink = (props: HeaderLinkProps) => {
  return (
    <li>
      <Link href={props.href} className="text-neutral-500 hover:text-white">
        {props.children}
      </Link>
    </li>
  );
};

interface HeaderButtonProps {
  href: string;
  primary: boolean;
  children: ReactNode;
}

const HeaderButton = (props: HeaderButtonProps) => {
  return (
    <li>
      <Link href={props.href}>
        <Button size="sm">{props.children}</Button>
      </Link>
    </li>
  );
};

HeaderButton.defaultProps = {
  primary: false,
};

const SignupButton = () => {
  const current = usePathname();

  return (
    <HeaderButton href="/register" primary={current !== "/login"}>
      Sign Up
    </HeaderButton>
  );
};

export default function Header() {
  const current = usePathname();
  const router = useRouter();
  const { session } = useSessionContext();

  return (
    <div className="flex justify-between items-center">
      <Link href="/" className="font-bold text-xl">
        supabase+next
      </Link>
      {current.startsWith("/login") === false && (
        <ul className="flex space-x-4">
          <HeaderLink href="/features">Features</HeaderLink>
          <HeaderLink href="/pricing">Pricing</HeaderLink>
        </ul>
      )}
      {session ? (
        <Link href="/dashboard">Dashboard</Link>
      ) : (
        <ul className="flex space-x-4 items-center">
          {current !== "/login" && <HeaderLink href="/login">Login</HeaderLink>}
          <SignupButton />
        </ul>
      )}
    </div>
  );
}
