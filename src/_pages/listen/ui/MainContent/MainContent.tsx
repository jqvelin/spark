import { Album, SongGroups } from "@/shared/api";

import { FreshAlbumsCarousel } from "./FreshAlbumsCarousel";
import { SongPreview } from "@/_pages/landing-signed-out/ui/songs-preview-line/SongPreview";

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
        <main className="flex-1 overflow-hidden p-4">
            <section>
                <div className="mb-4 leading-4">
                    <h2 className="text-xl md:text-2xl lg:text-3xl text-primary-darker tracking-wide font-bold">Fresh albums</h2>
                    <p className="text-gray-400">Discover weekly</p>
                </div>
                <FreshAlbumsCarousel albumList={musicData.homepageAlbums} />
            </section>
            <hr className="my-4"/>
            <section className="flex justify-center">
                <div className="flex justify-center gap-8 flex-wrap">
                    <div className="mb-4 leading-4">
                        <div className="mb-4">
                            <h2 className="text-xl md:text-2xl lg:text-3xl text-primary-darker tracking-wide font-bold">Fresh songs</h2>
                        </div>
                            <ul className="space-y-2">
                                {musicData.homepageSongs.fresh.map((song) => (
                                    <SongPreview key={song.id} song={song} />
                                ))}
                            </ul>
                    </div>
                    <div className="mb-4 leading-4">
                        <div className="mb-4">
                            <h2 className="text-xl md:text-2xl lg:text-3xl text-primary-darker tracking-wide font-bold">Today's hits</h2>
                        </div>
                        <ul className="space-y-2">
                                {musicData.homepageSongs.bestOfToday.map((song) => (
                                    <SongPreview key={song.id} song={song} />
                                ))}
                        </ul>
                    </div>
                    <div className="mb-4 leading-4">
                        <div className="mb-4">
                            <h2 className="text-xl md:text-2xl lg:text-3xl text-primary-darker tracking-wide font-bold">Today's hits</h2>
                        </div>
                        <ul className="space-y-2">
                                {musicData.homepageSongs.trendingGlobal.map((song) => (
                                    <SongPreview key={song.id} song={song} />
                                ))}
                            </ul>
                    </div>
                    <div className="mb-4 leading-4">
                        <div className="mb-4">
                            <h2 className="text-xl md:text-2xl lg:text-3xl text-primary-darker tracking-wide font-bold">Trending in Russia</h2>
                        </div>
                        <ul className="space-y-2">
                                {musicData.homepageSongs.trendingRussia.map((song) => (
                                    <SongPreview key={song.id} song={song} />
                                ))}
                            </ul>
                    </div>
                </div>
            </section>
            <hr className="my-4"/>
        </main>
    );
};
