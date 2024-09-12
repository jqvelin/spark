import { Album, SongGroups } from "@/shared/api";

import { FreshAlbumsCarousel } from "./FreshAlbumsCarousel";

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
            <h1 className="mb-8 text-xl font-bold">Home</h1>
            <section>
                <h2 className="mb-4 font-semibold">Fresh albums</h2>
                <FreshAlbumsCarousel albumList={musicData.homepageAlbums} />
            </section>
        </main>
    );
};
