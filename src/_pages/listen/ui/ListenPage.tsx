import { getHomepageAlbums, getHomepageSongs } from "@/shared/api";

import { MainContent } from "./MainContent/MainContent";
import { SearchResults } from "./SearchResults/SearchResults";

export const ListenPage = async ({
    searchParams
}: {
    searchParams: { [key: string]: string };
}) => {
    if (searchParams.search) {
        return <SearchResults query={searchParams.search} />;
    }

    const homepageSongs = await getHomepageSongs();
    const homepageAlbums = await getHomepageAlbums();

    const musicData = {
        homepageSongs,
        homepageAlbums
    };
    return <MainContent musicData={musicData} />;
};
