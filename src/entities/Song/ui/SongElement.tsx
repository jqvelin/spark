"use client";

import { Playlist, Song } from "@/shared/api";
import { cn } from "@/shared/components/lib/utils";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger
} from "@/shared/components/ui/dropdown-menu";
import { useTextOverflowHandler } from "@/shared/utils/hooks";
import Image from "next/image";
import { Fragment } from "react";
import { BsThreeDots } from "react-icons/bs";

import { DeleteSongButton } from "./DeleteSongButton";
import { DownloadSongButton } from "./DownloadSongButton";
import { SaveSongButton } from "./SaveSongButton";

type Props = {
    noActions?: boolean;
    belongsToPlaylist?: Playlist;
    song: Song;
} & React.ComponentPropsWithoutRef<"div">;

export const SongElement = ({
    noActions = false,
    belongsToPlaylist,
    song,
    ...props
}: Props) => {
    const titleRef = useTextOverflowHandler(),
        artistRef = useTextOverflowHandler();

    const actionButtons = noActions ? null : (
        <Fragment>
            {belongsToPlaylist ? (
                <DeleteSongButton
                    song={song}
                    playlist={belongsToPlaylist}
                />
            ) : (
                <SaveSongButton song={song} />
            )}
            <DownloadSongButton song={song} />
        </Fragment>
    );

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
                <div className="hidden md:inline text-primary">
                    <BsThreeDots />
                </div>
            )}
            <div className="absolute h-full right-1 text-primary overflow-hidden flex items-center group visible-on-hover before:[content:''] before:h-full before:w-0 before:absolute before:right-0 before:top-0 before:bg-[linear-gradient(to_right,transparent,white_25%)] hover:before:w-full before:transition-[width] cursor-pointer">
                <div className="z-10 hidden md:flex items-center transition-transform translate-x-4 group-hover:translate-x-0">
                    {actionButtons}
                </div>
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger className="md:hidden text-primary">
                    <BsThreeDots />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="text-primary flex justify-center gap-2">
                    {actionButtons}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};
