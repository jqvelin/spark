import { getHomepageSongs, SongGroups } from "@/shared/api";
import Image from "next/image";

import { SignInMethods } from "./SignInMethods";
import { SongsPreviewLine } from "./songs-preview-line/SongsPreviewLine";
import { ProductDescription } from "./ProductDescription";

export const LandingSignedOut = async () => {
    let songs: SongGroups | undefined

    try {
        const songsData = await getHomepageSongs();
        songs = songsData;
    } catch (e) {
        console.log(e)
    }

    return (
        <main className="flex h-screen animate-shine flex-col items-center justify-center overflow-x-hidden bg-[radial-gradient(circle_at_80%_80%,hsl(var(--primary)),transparent)]">
            <ProductDescription />
            {songs && <SongsPreviewLine songs={songs.trendingGlobal} />}
            <SignInMethods />
        </main>
    );
};
