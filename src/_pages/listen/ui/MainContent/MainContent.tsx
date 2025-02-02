import { getHomepageData } from "@/shared/api";

import { FreshAlbumsSection } from "./FreshAlbums/FreshAlbumsSection";
import { HomepageSongsSection } from "./HomepageSongs/HomepageSongsSection";

export const MainContent = async () => {
    const homepageData = await getHomepageData();
    return (
        <div className="pb-[calc(var(--audio-player-height)+var(--footer-height))] md:pb-[var(--audio-player-height)]">
            <FreshAlbumsSection albums={homepageData.albums} />
            <hr className="my-4" />
            <HomepageSongsSection songGroups={homepageData.songGroups} />
        </div>
    );
};
