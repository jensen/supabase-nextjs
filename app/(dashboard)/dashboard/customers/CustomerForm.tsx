"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import TextInput from "components/shared/input/TextInput";
import Button from "components/shared/input/Button";

import { createCustomer } from "api/customers/client";

import type { FormEvent } from "react";

interface CustomerFormProps {}

export default function CustomerForm(props: CustomerFormProps) {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const customer = {
      name: (data.get("name") as string) || "",
      email: (data.get("email") as string) || "",
      phone: (data.get("phone") as string) || "",
      twitter: (data.get("twitter") as string) || "",
    };

    await createCustomer(customer);

    form.reset();

    router.refresh();
  };

  return (
    <section className="pt-8">
      <h2 className="text-zinc-400 text-2xl font-bold mb-4">Add User</h2>
      <form
        ref={formRef}
        className="flex flex-col space-y-4"
        onSubmit={handleSubmit}
      >
        <div className="flex space-x-8">
          <div className="w-1/2 space-y-4">
            <TextInput name="name" label="Name" required defaultValue="" />
            <TextInput name="email" label="Email" type="email" required />
          </div>
          <div className="w-1/2 space-y-4">
            <TextInput
              name="phone"
              label="Phone"
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
            />
            <TextInput name="twitter" label="Twitter" required />
          </div>
        </div>
        <div>
          <Button primary>Create</Button>
        </div>
      </form>
    </section>
  );
}
