// middleware.js

import { NextResponse } from "next/server";

export default function middleware(req) {
  const AUTH_NOT_ALLOWED_PATHS = ["/login", "/signup"];
  const NO_AUTH_PATHS = ["/", "/home"];

  let loggedin = !!req.cookies.get("gemstoken");
  const { pathname } = req.nextUrl;

  console.log("===loggedin===", loggedin);

  if (loggedin && AUTH_NOT_ALLOWED_PATHS.includes(pathname)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (
    !loggedin &&
    !NO_AUTH_PATHS.includes(pathname) &&
    !AUTH_NOT_ALLOWED_PATHS.includes(pathname)
  ) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
