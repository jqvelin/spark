import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import YandexProvider from "next-auth/providers/yandex";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [YandexProvider, GoogleProvider],
    callbacks: {
        async session({ session, token }) {
            session.user.id = token.id as string;
            return session;
        },
        async jwt({ token, account, profile }) {
            if (account?.provider === "google") {
                token.id = profile?.sub as string;
            } else if (account?.provider === "yandex") {
                token.id = profile?.id as string;
            }
            return token;
        }
    }
});
