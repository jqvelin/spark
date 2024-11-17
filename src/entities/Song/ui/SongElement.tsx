"use client";

import { Playlist, Song } from "@/shared/api";
import { cn } from "@/shared/components/lib/utils";
import { useTextOverflowHandler } from "@/shared/utils/hooks";
import Image from "next/image";
import { createContext } from "react";

import { SongElementActions } from "./SongElementActions";

type Props = {
    noActions?: boolean;
    belongsToPlaylist?: Playlist;
    song: Song;
} & React.ComponentPropsWithoutRef<"div">;

export const SongContext = createContext<Pick<
    Props,
    "song" | "belongsToPlaylist"
> | null>(null);

export const SongElement = ({
    noActions = false,
    belongsToPlaylist,
    song,
    ...props
}: Props) => {
    const titleRef = useTextOverflowHandler(),
        artistRef = useTextOverflowHandler();

    return (
        <div
            {...props}
            className={cn(
                "flex w-song-element h-song-element px-3 items-center gap-2 rounded-md bg-white shadow-md relative",
                props.className
            )}
        >
            <Image
                src={song.coverSrc ?? "/logo.svg"}
                width={40}
                height={40}
                alt={song.title}
                className="rounded-sm"
            />
            <div className="flex flex-1 flex-col whitespace-nowrap overflow-hidden">
                <div
                    ref={titleRef}
                    className="overflow-hidden"
                >
                    <span className="pr-[1px]">{song.title}</span>
                </div>
                <div
                    ref={artistRef}
                    className="overflow-hidden"
                >
                    <span className="text-sm text-gray-400 pr-[1px]">
                        {song.artist}
                    </span>
                </div>
            </div>
            {!noActions && (
                <SongContext.Provider value={{ song, belongsToPlaylist }}>
                    <SongElementActions />
                </SongContext.Provider>
            )}
        </div>
    );
};
