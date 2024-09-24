import { auth } from "@/features/sign-in";
import { NextResponse } from "next/server";

import { paths } from "./shared/routing";

export default auth(async (req) => {
    const userSignedIn = !!req.auth?.user;
    const entersHomePage = req.nextUrl.pathname === paths.root;
    const triesToAccessListenPage = req.nextUrl.pathname === paths.listen.root;

    if (!userSignedIn && triesToAccessListenPage) {
        return NextResponse.redirect(req.nextUrl.origin);
    } else if (userSignedIn && entersHomePage) {
        return NextResponse.redirect(
            new URL(paths.listen.root, req.nextUrl.origin)
        );
    }
});

// Matcher is omitted due to Next.js' inability to evaluate dynamic routes
// (such as paths.root, paths.listen, etc.)
// Read more: https://nextjs.org/docs/messages/invalid-page-config
