import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

import { WithNextAuth } from "./_providers/WithNextAuth";
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
                <WithNextAuth>
                    <NextTopLoader
                        color="hsl(var(--primary))"
                        showSpinner={false}
                    />
                    {children}
                </WithNextAuth>
            </body>
        </html>
    );
}
