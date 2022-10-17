import classnames from "classnames";

import type { FormEvent } from "react";

export interface AuthEvent extends FormEvent<HTMLFormElement> {
  target: HTMLFormElement & {
    elements: {
      email: HTMLInputElement;
      password: HTMLInputElement;
    };
  };
}

interface AuthInputProps {
  label: string;
  type: string;
  name: string;
  error: boolean;
  resetError: () => void;
}

const AuthInput = (props: AuthInputProps) => {
  return (
    <label className="">
      <span className="hidden">{props.label}</span>
      <input
        className={classnames(
          "text-white bg-black border placeholder:text-neutral-700 focus:border-neutral-500 px-4 py-2 rounded-sm w-full",
          {
            "border-neutral-800": props.error === false,
            "border-red-800": props.error,
          }
        )}
        type={props.type}
        name={props.name}
        placeholder={props.label}
        onChange={props.resetError}
      />
    </label>
  );
};

interface AuthFormProps {
  onSubmit: (event: AuthEvent) => void;
  submitLabel: string;
  error: string;
  resetError: () => void;
}

export default function AuthForm(props: AuthFormProps) {
  return (
    <form
      className="w-64 flex flex-col justify-center space-y-4"
      onSubmit={props.onSubmit}
    >
      <div className="flex flex-col space-y-2">
        <AuthInput
          label="Email Address"
          type="email"
          name="email"
          error={props.error !== ""}
          resetError={props.resetError}
        />
        <AuthInput
          label="Password"
          type="password"
          name="password"
          error={props.error !== ""}
          resetError={props.resetError}
        />
      </div>
      <div className="text-sm text-red-800">{props.error}&nbsp;</div>
      <button className="p-2 bg-sky-500 border border-transparent text-white rounded-md hover:bg-black hover:border-sky-500 hover:text-sky-500 transition-colors">
        {props.submitLabel}
      </button>
    </form>
  );
}
