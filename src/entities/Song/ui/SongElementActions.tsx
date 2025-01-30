"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger
} from "@/shared/components/ui/dropdown-menu";
import { Fragment, useContext } from "react";
import { BsThreeDots } from "react-icons/bs";

import { AddSongButton } from "./AddSongButton";
import { DeleteSongButton } from "./DeleteSongButton";
import { DownloadSongButton } from "./DownloadSongButton";
import { SongContext } from "./SongCard";

export const SongElementActions = () => {
    const songContext = useContext(SongContext);
    if (!songContext) {
        throw new Error("Song context not found");
    }

    const { song, playlist } = songContext;

    const ActionButtons = () => (
        <Fragment>
            {playlist ? <DeleteSongButton /> : <AddSongButton song={song} />}
            <DownloadSongButton song={song} />
        </Fragment>
    );

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="md:hidden text-primary">
                <BsThreeDots />
            </DropdownMenuTrigger>
            <BsThreeDots className="hidden md:inline text-primary" />
            <div className="absolute h-full right-1 text-primary overflow-hidden flex items-center group visible-on-hover before:[content:''] before:h-full before:w-0 before:absolute before:right-0 before:top-0 before:bg-[linear-gradient(to_right,transparent,white_15%)] hover:before:w-full before:transition-[width] cursor-pointer">
                <div className="z-10 hidden md:flex items-center transition-transform translate-x-4 group-hover:translate-x-0">
                    <ActionButtons />
                </div>
            </div>
            <DropdownMenuContent className="text-primary flex justify-center gap-2 w-fit">
                <ActionButtons />
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
