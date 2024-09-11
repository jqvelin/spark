import { SongGroups, getHomepageSongs } from "@/shared/api";

import { ProductDescription } from "./ProductDescription";
import { SignInMethods } from "./SignInMethods";
import { SongsPreviewLine } from "./songs-preview-line/SongsPreviewLine";

export const LandingSignedOut = async () => {
    let songs: SongGroups | undefined;

    try {
        const songsData = await getHomepageSongs();
        songs = songsData;
    } catch (e) {
        console.log(e);
    }

    return (
        <main className="flex h-screen animate-shine flex-col items-center justify-center overflow-x-hidden bg-[radial-gradient(circle_at_80%_80%,hsl(var(--primary)),transparent)]">
            <ProductDescription />
            {songs && <SongsPreviewLine songs={songs.bestOfToday} />}
            <SignInMethods />
        </main>
    );
};
