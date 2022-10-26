import Link from "next/link";
import EmailSignup from "components/auth/signup";

export default function RegisterEmail() {
  return (
    <div className="min-h-screen flex">
      <section className="w-1/2 bg-neutral-900 border-r border-neutral-800"></section>
      <section className="w-1/2 flex flex-col justify-center items-center">
        <div className="space-y-8 flex flex-col items-center">
          <EmailSignup />
          <Link href="/register" className="text-sky-500">
            Other Login Options
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
