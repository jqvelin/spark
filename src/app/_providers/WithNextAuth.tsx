import { auth } from "@/features/sign-in";
import { SessionProvider } from "next-auth/react";

export const WithNextAuth = async ({
    children
}: {
    children: React.ReactNode;
}) => {
    const session = await auth();
    return <SessionProvider session={session}>{children}</SessionProvider>;
};
