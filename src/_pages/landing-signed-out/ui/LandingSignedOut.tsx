import { SongElementsPreview } from "@/entities/Song";
import { SongGroups, getHomepageSongs } from "@/shared/api";

import { ProductDescription } from "./ProductDescription";
import { SignInMethods } from "./SignInMethods";

export const LandingSignedOut = async () => {
    let songs: SongGroups | undefined;

    try {
        const songsData = await getHomepageSongs();
        songs = songsData;
    } catch (e) {
        console.log(e);
    }

    return (
        <main className="flex h-[100svh] animate-shine flex-col items-center justify-center overflow-x-hidden bg-[radial-gradient(circle_at_80%_80%,hsl(var(--primary)),transparent)]">
            <ProductDescription />
            {songs && <SongElementsPreview songs={songs.bestOfToday} />}
            <SignInMethods />
        </main>
    );
};
