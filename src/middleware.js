import { NextResponse } from "next/server"

export async function middleware(request){
    const {pathname} = request.nextUrl

    if(pathname==="/"){
        return NextResponse.redirect(new URL("/home",request.url))
    }
}

export const config={
    matcher:["/"]
}