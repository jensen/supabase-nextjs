import { withMiddlewareAuth } from "@supabase/auth-helpers-nextjs";

export const middleware = withMiddlewareAuth({
  redirectTo: "/login",
});

export const config = {
  matcher: "/dashboard/:path*",
};
