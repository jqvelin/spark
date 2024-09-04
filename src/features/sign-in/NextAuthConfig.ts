import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import YandexProvider from "next-auth/providers/yandex";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        YandexProvider({
            clientId: process.env.YANDEX_CLIENT_ID as string,
            clientSecret: process.env.YANDEX_CLIENT_SECRET as string
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        })
    ]
});
