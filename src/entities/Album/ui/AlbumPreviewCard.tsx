import { Album } from "@/shared/api";
import { paths } from "@/shared/routing";
import Image from "next/image";
import Link from "next/link";

export const AlbumPreviewCard = ({ album }: { album: Album }) => {
    return (
        <Link
            href={`${paths.listen.albums}/${album.id}`}
            draggable={false}
            className="flex w-[100px] flex-shrink-0 flex-col items-center overflow-hidden"
        >
            <Image
                src={album.coverSrc ?? "logo.svg"}
                draggable={false}
                width={90}
                height={90}
                alt={album.title}
                className="mb-2 rounded-sm"
            />
            <div className="w-[90px] text-center">
                <p
                    className="mb-1 line-clamp-5 leading-4 break-normal text-[12px] font-semibold"
                    title={album.title}
                >
                    {album.title}
                </p>
                <p className="text-[11px] text-gray-400 leading-3">
                    {album.artist}
                </p>
            </div>
        </Link>
    );
};
