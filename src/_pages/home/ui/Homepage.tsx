import { getHomepageSongs } from "@/shared/api";
import { Button } from "@/shared/components/ui/button";
import Image from "next/image";

import { SongsPreviewLine } from "./songs-preview-line/SongsPreviewLine";

export const Homepage = async () => {
    const songs = await getHomepageSongs();

    return (
        <main className="flex h-screen animate-shine flex-col items-center justify-center overflow-x-hidden bg-[radial-gradient(circle_at_80%_80%,hsl(var(--primary)),transparent)]">
            <div className="mb-16 self-end pr-4 text-end">
                <Image
                    src="logo.svg"
                    width={600}
                    height={600}
                    alt="logo"
                    className="absolute right-0 top-1/2 -z-10 -translate-y-1/2 opacity-50"
                />
                <h1 className="mb-8 text-4xl font-bold leading-relaxed text-white md:text-5xl md:leading-[64px] lg:text-6xl lg:leading-[86px]">
                    ✨ It all starts
                    <br />
                    with a <span className="text-with-gradient">Spark</span>.
                </h1>
                <p className="flex flex-col text-2xl font-semibold text-white md:text-3xl lg:text-4xl">
                    <span>Listen to your favorite music with</span>
                    <ul>
                        <li>
                            <span className="text-purple-600">-</span> no ads
                        </li>
                        <li>
                            <span className="text-purple-600">-</span> no
                            memberships
                        </li>
                        <li>
                            <span className="text-purple-600">-</span> no
                            restrictions
                        </li>
                    </ul>
                </p>
            </div>
            <SongsPreviewLine songs={songs.trendingGlobal} />
            <div className="mt-8 flex items-center gap-2">
                <Button className="border-2 bg-transparent hover:bg-primary/20">
                    Sign up
                </Button>
                <Button>Log in</Button>
            </div>
        </main>
    );
};
