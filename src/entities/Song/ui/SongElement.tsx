"use client";

import { useAudioPlayer } from "@/entities/AudioPlayer";
import { Playlist, Song } from "@/shared/api";
import { cn } from "@/shared/components/lib/utils";
import { useTextOverflowHandler } from "@/shared/utils/hooks";
import { PlayIcon } from "lucide-react";
import Image from "next/image";
import { createContext, memo } from "react";

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
    const { play } = useAudioPlayer();
    return (
        <div
            {...props}
            className={cn(
                "flex w-song-element h-song-element px-3 items-center gap-2 rounded-md bg-white shadow-md relative",
                props.className
            )}
        >
            <div className="relative flex items-center justify-center">
                <Image
                    src={song.coverSrc ?? "/logo.svg"}
                    width={40}
                    height={40}
                    alt={song.title}
                    className="rounded-sm"
                />
                <button
                    onClick={() => play(song)}
                    className="bg-white/90 rounded-full absolute p-1 transition-opacity opacity-0 hover:opacity-100"
                >
                    <PlayIcon className="text-primary fill-primary" />
                </button>
            </div>
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
