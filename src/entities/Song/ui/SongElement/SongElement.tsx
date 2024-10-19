"use client";

import { Song } from "@/shared/api";
import { cn } from "@/shared/components/lib/utils";
import { useTextOverflowHandler } from "@/shared/utils/hooks";
import Image from "next/image";
import { FC, HTMLAttributes } from "react";

export const SongElement: FC<
    { song: Song } & HTMLAttributes<HTMLDivElement>
> = ({ song, ...props }) => {
    const titleRef = useTextOverflowHandler();
    const artistRef = useTextOverflowHandler();

    return (
        <div
            {...props}
            className={cn(
                "flex w-song-line items-center gap-2 rounded-md bg-white px-3 py-2 shadow-md",
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
            <div className="flex w-full flex-col whitespace-nowrap overflow-hidden">
                <div
                    ref={titleRef}
                    className="overflow-hidden"
                >
                    <span>{song.title}</span>
                </div>
                <div
                    ref={artistRef}
                    className="overflow-hidden"
                >
                    <span className="text-sm text-gray-400">{song.artist}</span>
                </div>
            </div>
        </div>
    );
};
