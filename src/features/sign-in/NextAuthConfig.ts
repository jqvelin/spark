import NextAuth from "next-auth";

import GoogleProvider from "next-auth/providers/google";
import { type GoogleProfile } from "next-auth/providers/google";

import YandexProvider from "next-auth/providers/yandex";
import { type YandexProfile } from "next-auth/providers/yandex";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [YandexProvider({
        async profile(profile: YandexProfile) {
            return {
                id: profile.id.toString(),
                name: profile.first_name,
                email: profile.default_email,
                emailVerified: true,
                image: profile.default_avatar_id
            }
        }
    }), GoogleProvider({
        async profile(profile: GoogleProfile) {
            return {
                id: profile.sub,
                name: profile.name,
                email: profile.email,
                emailVerified: profile.email_verified,
                image: profile.picture
            }
        }
    })],
    callbacks: {
        async jwt({ token, profile }) {
            if (profile) {
                token.id = profile?.id
            }
            return token
        },
        async session({ session, token }) {
            session.user.id = token.id as string
            return session
        }
    }
});
