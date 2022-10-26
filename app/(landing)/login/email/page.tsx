import Link from "next/link";
import EmailSignin from "components/auth/signin";

export default function LoginEmail() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col justify-center items-center">
      <div className="flex-grow flex flex-col justify-center items-center space-y-4">
        <EmailSignin />
        <Link href="/login" className="text-sky-500">
          Other Login Options
        </Link>
      </div>
      <div className="border-t border-neutral-800 py-12 w-full flex justify-center">
        <Link href="/register" className="text-sky-500">
          Don&apos;t have an account? Sign Up
        </Link>
      </div>
    </div>
  );
}
