import { Album } from "@/shared/api";
import { cn } from "@/shared/components/lib/utils";
import { paths } from "@/shared/routing";
import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes } from "react";

type Props = {
    album: Album;
} & HTMLAttributes<HTMLDivElement>;

export const AlbumPreviewCard = ({ album, ...props }: Props) => {
    return (
        <div
            {...props}
            className={cn(
                "flex flex-col text-center break-normal shrink-0 w-album-card items-center",
                props.className
            )}
        >
            <Link
                href={`${paths.listen.albums}/${album.id}`}
                draggable={false}
                className="w-[calc(var(--album-card-width)-4px)] overflow-hidden"
            >
                <Image
                    src={album.coverSrc ?? "logo.svg"}
                    draggable={false}
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt={album.title}
                    className="mb-2 rounded-sm aspect-square w-full"
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
