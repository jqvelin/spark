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
                "flex flex-col text-center break-normal shrink-0 w-[100px] items-center",
                props.className
            )}
        >
            <Link
                href={`${paths.listen.albums}/${album.id}`}
                draggable={false}
                className="w-[90px] overflow-hidden"
            >
                <Image
                    src={album.coverSrc ?? "logo.svg"}
                    draggable={false}
                    width={100}
                    height={100}
                    sizes="100px"
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
