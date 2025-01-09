import { SongElementsPreview } from "@/entities/Song";
import { getHomepageData } from "@/shared/api";
import Image from "next/image";

import { SignInMethods } from "./SignInMethods";

export const LandingSignedOut = async () => {
    const songsGroups = (await getHomepageData()).songGroups;

    return (
        <main className="flex h-[100svh] animate-shine flex-col items-center justify-center overflow-x-hidden bg-[radial-gradient(circle_at_80%_80%,hsl(var(--primary)),transparent)]">
            <div className="mb-8 self-end pr-4 text-end">
                <Image
                    src="logo.svg"
                    width={1000}
                    height={1000}
                    alt="logo"
                    className="fixed right-0 top-1/2 -z-10 -translate-y-1/2 translate-x-1/2 opacity-50"
                />
                <h1 className="mb-8 text-3xl font-bold leading-relaxed text-white md:text-4xl md:leading-[48px] lg:text-5xl lg:leading-[64px]">
                    ✨ It all starts
                    <br />
                    with a <span className="text-with-gradient">Spark</span>.
                </h1>
                <h2 className="text-white font-semibold text-xl md:text-2xl lg:text-3xl [&>span]:block [&>span]:first-letter:text-purple-600">
                    Listen to your favorite music with
                    <span>- no ads</span>
                    <span>- no memberships</span>
                    <span>- no restrictions</span>
                </h2>
            </div>
            <SongElementsPreview songs={songsGroups.bestOfToday} />
            <SignInMethods />
        </main>
    );
};
