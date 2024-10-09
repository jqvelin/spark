import { Album } from "@/shared/api";
import { paths } from "@/shared/routing";
import Image from "next/image";
import Link from "next/link";

export const AlbumPreviewCard = ({ album }: { album: Album }) => {
    return (
        <div className="flex flex-col text-center break-all shrink-0 w-[100px] items-center">
            <Link
                href={`${paths.listen.albums}/${album.id}`}
                draggable={false}
                className="w-[90px] overflow-hidden"
            >
                <Image
                    src={album.coverSrc ?? "logo.svg"}
                    draggable={false}
                    width={90}
                    height={90}
                    alt={album.title}
                    className="mb-2 rounded-sm aspect-square"
                />
                <p
                    className="mb-1 line-clamp-5 leading-4 text-[12px] font-semibold"
                    title={album.title}
                >
                    {album.title}
                </p>
            </Link>
            <Link
                href={`${paths.listen.artists}/${album.artistId}`}
                draggable={false}
                className="text-[11px] w-[90px] text-gray-400 leading-3"
            >
                {album.artist}
            </Link>
        </div>
    );
};
