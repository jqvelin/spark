import { Album, SongGroups } from "@/shared/api";

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
        <main className="flex-1 overflow-hidden p-2 pb-[var(--footer-height)] md:p-4 md:pb-0">
            <section>
                <div className="mb-4 leading-4">
                    <h2 className="text-xl md:text-2xl lg:text-3xl text-primary-darker tracking-wide font-bold">Fresh albums</h2>
                    <p className="text-gray-400">Discover weekly</p>
                </div>
                <FreshAlbumsCarousel albumList={musicData.homepageAlbums} />
            </section>
            <hr className="my-4"/>
            <section className="flex justify-between gap-8 flex-wrap">
                <SongsCategory title="Fresh songs" songs={musicData.homepageSongs.fresh} />
                <SongsCategory title="Today's hits" songs={musicData.homepageSongs.bestOfToday} />
                <SongsCategory title="Trending worldwide" songs={musicData.homepageSongs.trendingGlobal} />
                <SongsCategory title="Trending in Russia" songs={musicData.homepageSongs.trendingRussia} />
            </section>
            <hr className="my-4"/>
        </main>
    );
};
