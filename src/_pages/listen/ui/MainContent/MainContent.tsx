import { AlbumPreviewCard } from "@/entities/Album";
import { Album, SongGroups } from "@/shared/api";
import { FreshAlbumsScrollableList } from "./FreshAlbumsScrollableList";

type MusicDataForMainContent = {
    homepageSongs: SongGroups,
    homepageAlbums: Album[]
}

export const MainContent = ({musicData}: {musicData: MusicDataForMainContent}) => {
    return <main className="p-4 flex-1">
        <h1 className="font-bold text-xl mb-8">Home</h1>
        <section>
            <h2 className="font-semibold mb-4">Fresh albums</h2>
            <FreshAlbumsScrollableList albumList={musicData.homepageAlbums} />
        </section>
    </main>;
};