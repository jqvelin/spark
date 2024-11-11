"use client";

import { Playlist } from "@/shared/api";
import { cn } from "@/shared/components/lib/utils";
import Image from "next/image";
import { HTMLAttributes } from "react";

type Props = {
    playlist: Playlist;
} & HTMLAttributes<"div" & "img">;

export const ComposedPlaylistImage = (props: Props) => {
    if (
        Array.isArray(props.playlist.songs) &&
        props.playlist.songs?.length >= 4
    ) {
        return (
            <div
                {...props}
                className={cn(
                    "w-[150px] aspect-square rounded-sm overflow-hidden grid grid-cols-2",
                    props.className
                )}
            >
                {props.playlist.songs?.slice(0, 4).map((song) => (
                    <Image
                        key={song.id}
                        src={song.coverSrc ?? "/logo.svg"}
                        width={0}
                        height={0}
                        sizes="400px"
                        className="w-full"
                        alt={props.playlist.title}
                    />
                ))}
            </div>
        );
    } else {
        return (
            <Image
                src="/logo.svg"
                width={150}
                height={150}
                sizes="400px"
                alt={props.playlist.title}
                {...props}
            />
        );
    }
};
