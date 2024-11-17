"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/shared/components/ui/dialog";
import { PlusIcon } from "lucide-react";
import { useContext } from "react";

import { AddSongTo } from "./AddSongTo";
import { SongContext } from "./SongElement";

export const AddSongButton = () => {
    const songContext = useContext(SongContext);
    if (!songContext) {
        throw new Error("Song context not found");
    }

    const { song } = songContext;

    return (
        <Dialog>
            <DialogTrigger>
                <PlusIcon />
            </DialogTrigger>
            <DialogContent className="flex flex-col">
                <DialogHeader>
                    <DialogTitle className="text-primary md:text-lg lg:text-xl">
                        Add to playlist
                    </DialogTitle>
                    <DialogDescription className="text-gray-400 text-sm">
                        Select one of your playlists to add &quot;
                        <span className="text-black">{song.title}</span>
                        &quot; to:
                    </DialogDescription>
                </DialogHeader>
                <AddSongTo />
            </DialogContent>
        </Dialog>
    );
};
