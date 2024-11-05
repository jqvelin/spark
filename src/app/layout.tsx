import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Open_Sans } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

import { WithProviders } from "./_providers";
import "./globals.css";

const inter = Open_Sans({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
    title: "Spark - Listen everytime, everywhere",
    description:
        "This is the place where music is. Discover myriads of artists, albums and songs. Download directly with no restrictions, for free."
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="icon"
                    href="/icon.ico"
                />
            </head>
            <body className={inter.className}>
                <WithProviders>
                    <NextTopLoader
                        color="hsl(var(--primary))"
                        showSpinner={false}
                    />
                    {children}
                </WithProviders>
            </body>
        </html>
    );
}
