import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function middleware(request){
    const {pathname} = request.nextUrl

    if(pathname==="/"){
        return NextResponse.redirect(new URL("/home",request.url))
    }

    const token = await cookies().get('Authorization')
    
    if (!token && pathname==="/tambah"){
        return NextResponse.redirect(new URL("/login",request.url))
    }
}

export const config={
    matcher:["/","/tambah"]
}