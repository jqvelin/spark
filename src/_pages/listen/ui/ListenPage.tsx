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
    return <MainContent />;
};
