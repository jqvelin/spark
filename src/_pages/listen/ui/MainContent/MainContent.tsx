import { Album, SongGroups } from "@/shared/api";
import { Fragment } from "react";

import { FreshAlbumsCarousel } from "./FreshAlbumsCarousel";
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
            <section>
                <div className="mb-4 leading-4">
                    <h2 className="text-xl font-bold tracking-wide text-primary-darker md:text-2xl lg:text-3xl">
                        Fresh albums
                    </h2>
                    <p className="text-gray-400">Discover weekly</p>
                </div>
                <FreshAlbumsCarousel albumList={musicData.homepageAlbums} />
            </section>
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
