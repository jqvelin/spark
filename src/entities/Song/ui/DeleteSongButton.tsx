"use client";

import { Playlist, Song, patchPlaylist } from "@/shared/api";
import { addTodo } from "@/shared/api/requests/addTodo";
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

type Props = {
    song: Song;
    playlist: Playlist;
    // deleteHandler: (song: Song, ...args: unknown[]) => void;
};

export const DeleteSongButton = ({ song, playlist }: Props) => {
    const handleRemove = async () => {
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
