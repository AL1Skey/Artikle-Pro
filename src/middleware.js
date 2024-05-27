"use server";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { joseReadPaylater } from "./app/helper/jwt";

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  const access_token = await cookies().get("Authorization");

  if (pathname.startsWith("/profile")) {
    if (!access_token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    const auth = await cookies().get("Authorization")?.value;
    const [type, token] = auth.split(" ");
    const { payload } = await joseReadPaylater(token);
    request.locals = "payload"
    
    return NextResponse.next();
  }
  if (pathname.startsWith("/tambah")) {
    if (!access_token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    
  }
}

export const config = {
  matcher: ["/", "/tambah", "/profile"],
};
