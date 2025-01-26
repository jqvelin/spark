"use client";

import { useAudioPlayer } from "@/entities/AudioPlayer";
import { Album, Playlist, Song } from "@/shared/api";
import { cn } from "@/shared/components/lib/utils";
import { useRunningLine } from "@/shared/utils/hooks";
import { PlayIcon } from "lucide-react";
import Image from "next/image";
import { ComponentPropsWithoutRef, createContext, useCallback } from "react";

import { SongElementActions } from "./SongElementActions";

type Props = {
    playlist?: Playlist;
    album?: Album;
    song: Song;
} & ComponentPropsWithoutRef<"div">;

export const SongContext = createContext<Pick<
    Props,
    "song" | "playlist"
> | null>(null);

export const SongElement = ({ playlist, album, song, ...props }: Props) => {
    const titleRef = useRunningLine(),
        artistRef = useRunningLine();
    const { play: playOverload } = useAudioPlayer();

    const play = useCallback(() => {
        if (playlist ?? album) {
            const collection = (playlist ?? album)?.songs;
            if (!collection) return;

            const songInCollection = collection?.find((s) => s.id === song.id);
            if (!songInCollection) return;

            const collectionSongId = collection?.indexOf(songInCollection);
            playOverload({ collection, collectionSongId });
        } else {
            playOverload({ song });
        }
    }, [playlist, album, song]);

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
                    onClick={play}
                    className="bg-white/90 rounded-full absolute p-1 transition-opacity opacity-0 hover:opacity-100"
                >
                    <PlayIcon className="text-primary fill-primary" />
                </button>
            </div>
            <div className="flex flex-1 flex-col whitespace-nowrap overflow-hidden">
                <span
                    className="pr-[1px]"
                    ref={titleRef}
                >
                    {song.title}
                </span>
                <span
                    className="text-sm text-gray-400 pr-[1px]"
                    ref={artistRef}
                >
                    {song.artist}
                </span>
            </div>
            <SongContext.Provider value={{ song, playlist }}>
                <SongElementActions />
            </SongContext.Provider>
        </div>
    );
};
