"use client";

import { patchPlaylist } from "@/shared/api";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/shared/components/ui/alert-dialog";
import { TrashIcon } from "lucide-react";
import { useContext } from "react";

import { SongContext } from "./SongCard";

export const DeleteSongButton = () => {
    const songContext = useContext(SongContext);
    if (!songContext) {
        throw new Error("Song context not found");
    }

    const { song, playlist } = songContext;

    const handleRemove = async () => {
        if (!playlist) return;

        patchPlaylist({
            ...playlist,
            songs: playlist.songs?.filter((s) => s.id !== song.id)
        });
    };
    return (
        <AlertDialog>
            <AlertDialogTrigger>
                <TrashIcon />
            </AlertDialogTrigger>
            <AlertDialogContent className="flex flex-col">
                <AlertDialogHeader>
                    <AlertDialogTitle className="text-primary md:text-lg lg:text-xl">
                        Remove from playlist
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-gray-400 text-sm">
                        This action is irreversible.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                Are you sure you want to remove &quot;{song.title}
                &quot; from your playlist?
                <AlertDialogFooter>
                    <AlertDialogAction
                        className="text-white border-2 border-primary px-3 py-2 rounded-sm w-fit self-center"
                        onClick={() => handleRemove()}
                    >
                        Yes
                    </AlertDialogAction>
                    <AlertDialogCancel className="text-primary border-2 border-primary px-3 py-2 rounded-sm w-fit self-center hover:text-primary">
                        Cancel
                    </AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};
