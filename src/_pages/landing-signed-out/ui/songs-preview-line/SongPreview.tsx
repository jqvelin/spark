import { Song } from "@/shared/api";
import Image from "next/image";
import { FC, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

import { useSongDataOverflowHandler } from "../../utils/useSongDataOverflowHandler";

export const SongPreview: FC<
    { song: Song } & HTMLAttributes<HTMLDivElement>
> = ({ song, ...props }) => {
    const { songDataWrapperRef, songTitleRef, songArtistRef } =
        useSongDataOverflowHandler();

    return (
        <div
            {...props}
            className={twMerge(
                "flex w-[250px] items-center shadow-md gap-2 rounded-md bg-white px-3 py-2",
                props.className
            )}
        >
            <Image
                src={song.coverSrc ?? "logo.svg"}
                width={40}
                height={40}
                alt={song.title}
                className="rounded-sm"
            />
            <div
                ref={songDataWrapperRef}
                className="relative flex w-full flex-col overflow-hidden whitespace-nowrap"
            >
                <span
                    ref={songTitleRef}
                    className="relative text-ellipsis hover:[animation-play-state:paused]"
                >
                    {song.title}
                </span>
                <span
                    ref={songArtistRef}
                    className="text-sm text-gray-400"
                >
                    {song.artist}
                </span>
            </div>
        </div>
    );
};
