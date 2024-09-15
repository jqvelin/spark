import { getHomepageAlbums, getHomepageSongs } from "@/shared/api";

import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { MainContent } from "./MainContent/MainContent";
import { Sidebar } from "./Sidebar/Sidebar";

export const ListenPage = async () => {
    const homepageSongs = await getHomepageSongs();
    const homepageAlbums = await getHomepageAlbums();

    const musicData = {
        homepageSongs,
        homepageAlbums
    };
    return (
        <div className="h-[100svh]">
            <Header />
            <div className="flex pt-[var(--header-height)]">
                <Sidebar />
                <MainContent musicData={musicData} />
            </div>
            <Footer />
        </div>
    );
};
