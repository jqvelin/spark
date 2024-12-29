import { getHomepageData } from "@/shared/api";
import { Suspense } from "react";

import { FreshAlbumsCarouselSkeleton } from "./FreshAlbums/FreshAlbumsCarouselSkeleton";
import { FreshAlbumsSection } from "./FreshAlbums/FreshAlbumsSection";
import { HomepageSongsSection } from "./HomepageSongs/HomepageSongsSection";
import { HomepageSongsSkeleton } from "./HomepageSongs/HomepageSongsSkeleton";

export const MainContent = async () => {
    const homepageData = await getHomepageData();
    return (
        <Suspense
            fallback={
                <>
                    <FreshAlbumsCarouselSkeleton />
                    <hr className="my-4" />
                    <HomepageSongsSkeleton />
                </>
            }
        >
            <div className="pb-[calc(var(--audio-player-height)+var(--footer-height))] md:pb-[var(--audio-player-height)]">
                <FreshAlbumsSection albums={homepageData.albums} />
                <hr className="my-4" />
                <HomepageSongsSection songGroups={homepageData.songGroups} />
            </div>
        </Suspense>
    );
};
