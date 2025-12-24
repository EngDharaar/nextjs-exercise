import { NextRequest, NextResponse } from "next/server";

export function middleware (request:NextRequest){
    // console.log("middleware is running...")
    // console.log(request.nextUrl.pathname)
    const auth=request.cookies.get('auth')
    const role=request.cookies.get('role')?.value
    if(request.nextUrl.pathname.startsWith('/dashboard')&& !auth){
        return NextResponse.redirect(new URL('/login',request.url))
    }
    if(request.nextUrl.pathname.startsWith('/admin')&& role!=='admin'){
        return NextResponse.redirect(new URL('/dashboard',request.url))
    }
    if(request.nextUrl.pathname.startsWith('/post')){
        const slug=request.nextUrl.pathname.split('/')[2]
        return NextResponse.redirect(new URL(`/blog/${slug}`,request.url))
    }
 
    return NextResponse.next()
}
// export const config={
//     matcher:['/about','/blog/:path*','/products']
// }