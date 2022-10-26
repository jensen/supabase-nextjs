import Link from "next/link";
import Providers from "components/auth/providers";

export default function Register() {
  return (
    <div className="min-h-screen flex">
      <section className="w-1/2 bg-neutral-900 border-r border-neutral-800"></section>
      <section className="w-1/2 flex flex-col justify-center items-center">
        <div className="space-y-8 flex flex-col items-center">
          <Providers />
          <Link href="/register/email" className="text-sky-500">
            Sign Up with Email
          </Link>
          <div className="w-full border-t border-neutral-800 pt-4">
            Already have an account?{" "}
            <Link href="/login" className="text-sky-500">
              Log in
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
