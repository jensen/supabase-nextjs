import Link from "next/link";
import Providers from "components/auth/providers";

export default function Login() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col justify-center items-center">
      <div className="flex-grow flex flex-col justify-center items-center space-y-4">
        <Providers />
        <Link href="/login/email">
          <a className="text-sky-500">Login with Email</a>
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
