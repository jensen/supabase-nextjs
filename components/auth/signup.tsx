"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { AuthApiError } from "@supabase/supabase-js";
import AuthForm from "components/auth/form";

import type { AuthEvent } from "components/auth/form";

export default function RegisterEmail() {
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
    <AuthForm
      onSubmit={handleRegister}
      submitLabel="Sign Up"
      error={error}
      resetError={() => setError("")}
    />
  );
}
