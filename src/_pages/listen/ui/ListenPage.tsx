import { Loader } from "@/shared/components";
import { Suspense } from "react";

import { MainContent } from "./MainContent/MainContent";
import { SearchResults } from "./SearchResults/SearchResults";

export const ListenPage = async ({
    searchParams
}: {
    searchParams: { [key: string]: string };
}) => {
    if (searchParams.search) {
        return (
            <Suspense fallback={<Loader />}>
                <SearchResults query={searchParams.search} />
            </Suspense>
        );
    }
    return <MainContent />;
};
