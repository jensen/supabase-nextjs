import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { AuthApiError } from "@supabase/supabase-js";
import Footer from "components/footer";
import AuthForm from "components/auth/form";

import type { AuthEvent } from "components/auth/form";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "pages/_app";

const RegisterEmail: NextPageWithLayout = () => {
  const router = useRouter();
  const { supabaseClient } = useSessionContext();

  const [error, setError] = useState("");

  const handleRegister = async (event: AuthEvent) => {
    event.preventDefault();

    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    const { data, error } = await supabaseClient.auth.signUp({
      email,
      password,
    });

    if (error === null) {
      router.replace("/");
    } else {
      if (error instanceof AuthApiError) {
        setError(error.message);
      }
    }
  };

  return (
    <div className="min-h-screen flex">
      <section className="w-1/2 bg-neutral-900 border-r border-neutral-800"></section>
      <section className="w-1/2 flex flex-col justify-center items-center">
        <div className="space-y-8 flex flex-col items-center">
          <AuthForm
            onSubmit={handleRegister}
            submitLabel="Sign Up"
            error={error}
            resetError={() => setError("")}
          />
          <Link href="/register">
            <a className="text-sky-500">Other Login Options</a>
          </Link>
          <div className="w-full border-t border-neutral-800 pt-4">
            Already have an account?{" "}
            <Link href="/login">
              <a className="text-sky-500">Log in</a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

RegisterEmail.getLayout = (page: ReactElement) => (
  <>
    {page}
    <Footer />
  </>
);

export default RegisterEmail;
