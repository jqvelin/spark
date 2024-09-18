import { getHomepageAlbums, getHomepageSongs } from "@/shared/api";

import { MainContent } from "./MainContent/MainContent";

export const ListenPage = async () => {
    const homepageSongs = await getHomepageSongs();
    const homepageAlbums = await getHomepageAlbums();

    const musicData = {
        homepageSongs,
        homepageAlbums
    };
    return <MainContent musicData={musicData} />;
};
