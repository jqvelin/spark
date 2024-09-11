import { AlbumPreviewCard } from "@/entities/Album";
import { Album } from "@/shared/api";

export const FreshAlbumsScrollableList = ({albumList}: {albumList: Album[]}) => {
    return <div>
        <ul className="flex flex-wrap overflow-hidden">
            {albumList.map(album => <AlbumPreviewCard key={album.id} album={album} />)}
        </ul>
        <button></button>
    </div>
};