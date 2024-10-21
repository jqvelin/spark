import { Album, SongGroups } from "@/shared/api";
import { Fragment } from "react";

import { FreshAlbumsCarousel } from "./FreshAlbums/FreshAlbumsCarousel";
import { FreshAlbumsSection } from "./FreshAlbums/FreshAlbumsSection";
import { SongsCategory } from "./SongsCategory/SongsCategory";

type MusicDataForMainContent = {
    homepageSongs: SongGroups;
    homepageAlbums: Album[];
};

export const MainContent = ({
    musicData
}: {
    musicData: MusicDataForMainContent;
}) => {
    return (
        <Fragment>
            <FreshAlbumsSection />
            <hr className="my-4" />
            <section className="flex flex-wrap items-start gap-8">
                <SongsCategory
                    title="Fresh songs"
                    songs={musicData.homepageSongs.fresh}
                    link="fresh"
                    className="mx-auto"
                />
                <SongsCategory
                    title="Today's hits"
                    songs={musicData.homepageSongs.bestOfToday}
                    link="best-of-today"
                    className="mx-auto"
                />
                <SongsCategory
                    title="Trending worldwide"
                    songs={musicData.homepageSongs.trendingGlobal}
                    link="trending-worldwide"
                    className="mx-auto"
                />
                <SongsCategory
                    title="Trending in Russia"
                    songs={musicData.homepageSongs.trendingRussia}
                    link="trending-russia"
                    className="mx-auto"
                />
            </section>
        </Fragment>
    );
};
