import { NextResponse } from "next/server";
import { auth } from "@/lib/auth"; // path to your auth file
import { headers } from "next/headers";

export async function proxy(request) {
    // console.log("request", request);
    const session = await auth.api.getSession({
        headers: await headers()
    });
    console.log("Session Data:", session);

    // const isLoggedIn = false; 
    
    if (session) {
        return NextResponse.next();
    }

  return NextResponse.redirect(new URL('/login', request.url))
}




export const config = {
  matcher: ["/contact-us", "/cars/:path*"],
}