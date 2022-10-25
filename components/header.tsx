import Link from "next/link";
import { useRouter } from "next/router";
import classnames from "classnames";
import { useSessionContext } from "@supabase/auth-helpers-react";

import type { ReactNode } from "react";

interface HeaderLinkProps {
  path: string;
  children: ReactNode;
}

const HeaderLink = (props: HeaderLinkProps) => {
  return (
    <li>
      <Link href={props.path} className="text-neutral-500 hover:text-white">
        {props.children}
      </Link>
    </li>
  );
};

interface HeaderButtonProps {
  path: string;
  primary: boolean;
  children: ReactNode;
}

const HeaderButton = (props: HeaderButtonProps) => {
  return (
    <li>
      <Link href={props.path}>
        <button
          className={classnames(
            "flex items-center h-8 px-2 rounded-md border transition-colors duration-300",
            {
              "bg-white text-black border-white hover:bg-black hover:text-white":
                props.primary,
              "bg-black text-neutral-500 border-neutral-700 hover:text-white hover:border-white":
                props.primary === false,
            }
          )}
        >
          <span className="text-sm font-semibold leading-5 inline-block">
            {props.children}
          </span>
        </button>
      </Link>
    </li>
  );
};

HeaderButton.defaultProps = {
  primary: false,
};

const SignupButton = () => {
  const current = useRouter().pathname;

  return (
    <HeaderButton path="/register" primary={current !== "/login"}>
      Sign Up
    </HeaderButton>
  );
};

export default function Header() {
  const current = useRouter().pathname;

  const { session } = useSessionContext();

  return (
    <div className="flex justify-between items-center">
      <Link href="/" className="font-bold text-xl">
        supabase+next
      </Link>
      {current.startsWith("/login") === false && (
        <ul className="flex space-x-4">
          <HeaderLink path="/features">Features</HeaderLink>
          <HeaderLink path="/pricing">Pricing</HeaderLink>
        </ul>
      )}
      {session ? (
        <Link href="/dashboard">Dashboard</Link>
      ) : (
        <ul className="flex space-x-4 items-center">
          {current !== "/login" && <HeaderLink path="/login">Login</HeaderLink>}
          <SignupButton />
        </ul>
      )}
    </div>
  );
}
