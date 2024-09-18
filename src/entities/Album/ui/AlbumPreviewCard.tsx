import { Album } from "@/shared/api";
import { paths } from "@/shared/routing";
import Image from "next/image";
import Link from "next/link";

export const AlbumPreviewCard = ({ album }: { album: Album }) => {
    return (
        <div className="flex w-[100px] flex-shrink-0 flex-col items-center overflow-hidden px-1">
            <Link href={`${paths.albums}/${album.id}`}>
                <Image
                    src={album.coverSrc ?? "logo.svg"}
                    draggable={false}
                    width={90}
                    height={90}
                    alt={album.title}
                    className="mb-2 rounded-sm"
                />
            </Link>
            <div className="w-[90px] text-center leading-3">
                <p
                    className="mb-1 line-clamp-5 break-normal text-[12px] font-semibold"
                    title={album.title}
                >
                    {album.title}
                </p>
                <p className="text-[11px] text-gray-400">{album.artist}</p>
            </div>
        </div>
    );
};
