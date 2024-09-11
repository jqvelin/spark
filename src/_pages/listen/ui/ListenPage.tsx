import { getHomepageAlbums, getHomepageSongs } from "@/shared/api";
import { Header } from "./Header/Header";
import { MainContent } from "./MainContent/MainContent";
import { Sidebar } from "./Sidebar/Sidebar";

export const ListenPage = async () => {
    const homepageSongs = await getHomepageSongs()
    const homepageAlbums = await getHomepageAlbums()

    const musicData = {
        homepageSongs,
        homepageAlbums
    }
    return (
        <>
            <Header />
            <div className="flex">
                <Sidebar />
                <MainContent musicData={musicData} />
            </div>
        </>
    );
};
