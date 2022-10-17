import { useState } from "react";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { AuthApiError } from "@supabase/supabase-js";
import { useRouter } from "next/router";
import Link from "next/link";
import AuthForm from "components/auth/form";

import type { AuthEvent } from "components/auth/form";

export default function LoginEmail() {
  const router = useRouter();
  const { supabaseClient } = useSessionContext();

  const [error, setError] = useState("");

  const handleLogin = async (event: AuthEvent) => {
    event.preventDefault();

    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email,
      password,
    });

    if (error === null) {
      router.replace("/dashboard");
    } else {
      if (error instanceof AuthApiError) {
        setError("Incorrect email or password");
      }
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col justify-center items-center">
      <div className="flex-grow flex flex-col justify-center items-center space-y-4">
        <AuthForm
          onSubmit={handleLogin}
          submitLabel="Login"
          error={error}
          resetError={() => setError("")}
        />
        <Link href="/login">
          <a className="text-sky-500">Other Login Options</a>
        </Link>
      </div>
      <div className="border-t border-neutral-800 py-12 w-full flex justify-center">
        <Link href="/register">
          <a className="text-sky-500">Don&apos;t have an account? Sign Up</a>
        </Link>
      </div>
    </div>
  );
}
