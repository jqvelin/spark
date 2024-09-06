import { auth } from "@/features/sign-in";
import { NextResponse } from "next/server";
import { paths } from "./shared/routing";

export default auth(async (req) => {
    const userSignedIn = !!req.auth?.user
    const entersHomePage = req.nextUrl.pathname === paths.root
    const triesToAccessListenPage = req.nextUrl.pathname === paths.listen

    if (!userSignedIn && triesToAccessListenPage) {
        return NextResponse.redirect(req.nextUrl.origin)
    } else if (userSignedIn && entersHomePage) {
        return NextResponse.redirect(new URL(paths.listen, req.nextUrl.origin))
    }
})

export const config = {
    matcher: [paths.root, paths.listen]
}