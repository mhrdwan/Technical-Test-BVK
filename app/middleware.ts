import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  console.log(`ini tokennn`, token);
  if (!token) {
    // Redirect ke halaman login jika tidak ada token
    const loginUrl = new URL("/login", request.url);
    // Menyimpan URL yang dicoba diakses sebagai parameter
    loginUrl.searchParams.set("callbackUrl", request.url);
    return NextResponse.redirect(loginUrl);
  }

  // Lanjutkan ke request berikutnya jika ada token
  return NextResponse.next();
}

// Tentukan path mana yang harus dilindungi
export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*", "/dashboard/*"],
};
