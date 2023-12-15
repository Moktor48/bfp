
export { default } from "next-auth/middleware"
import { withAuth, NextRequestWithAuth } from "next-auth/middleware"

export const config = { matcher: ["/dashboard/:path*"] }
