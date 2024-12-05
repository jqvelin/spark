import { Suspense } from "react";

import { FreshAlbumsCarouselSkeleton } from "./FreshAlbums/FreshAlbumsCarouselSkeleton";
import { FreshAlbumsSection } from "./FreshAlbums/FreshAlbumsSection";
import { HomepageSongsSection } from "./HomepageSongs/HomepageSongsSection";
import { HomepageSongsSkeleton } from "./HomepageSongs/HomepageSongsSkeleton";

export const MainContent = () => {
    return (
        <div className="pb-[var(--audio-player-height)]">
            <Suspense fallback={<FreshAlbumsCarouselSkeleton />}>
                <FreshAlbumsSection />
            </Suspense>
            <hr className="my-4" />
            <Suspense fallback={<HomepageSongsSkeleton />}>
                <HomepageSongsSection />
            </Suspense>
        </div>
    );
};
