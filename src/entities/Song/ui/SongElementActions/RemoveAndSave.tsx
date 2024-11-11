"use client";

import { Playlist, Song, patchPlaylist } from "@/shared/api";
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
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger
} from "@/shared/components/ui/dropdown-menu";
import { DownloadIcon, TrashIcon } from "lucide-react";
import { Fragment } from "react";
import { BsThreeDots } from "react-icons/bs";

export const RemoveAndSave = ({
    song,
    playlist
}: {
    song: Song;
    playlist: Playlist;
}) => {
    const handleRemove = async () => {
        try {
            const response = await patchPlaylist({
                ...playlist,
                songs: playlist.songs?.filter((s) => s.id !== song.id)
            });
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Fragment>
            <div className="inline md:hidden">
                <DropdownMenu>
                    <DropdownMenuTrigger className="text-primary">
                        <BsThreeDots />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="text-primary flex justify-center gap-2">
                        <AlertDialog>
                            <AlertDialogTrigger>
                                <TrashIcon />
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle className="text-primary md:text-lg lg:text-xl">
                                        Remove from playlist
                                    </AlertDialogTitle>
                                    <AlertDialogDescription className="text-gray-400 text-sm">
                                        This action is irreversible.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                Are you sure you want to remove &quot;
                                {song.title}&quot; from your playlist?
                                <AlertDialogFooter>
                                    <div className="self-end space-x-1">
                                        <AlertDialogAction
                                            className="text-white border-2 border-primary px-3 py-2 rounded-sm w-fit self-center"
                                            onClick={() => handleRemove()}
                                        >
                                            Yes
                                        </AlertDialogAction>
                                        <AlertDialogCancel className="text-primary border-2 border-primary px-3 py-2 rounded-sm w-fit self-center hover:text-primary">
                                            Cancel
                                        </AlertDialogCancel>
                                    </div>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                        <button>
                            <DownloadIcon />
                        </button>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="hidden md:inline text-primary">
                <BsThreeDots />
            </div>
            <div className="absolute h-full right-1 text-primary hidden overflow-hidden md:flex items-center group visible-on-hover before:[content:''] before:h-full before:w-0 before:absolute before:right-0 before:top-0 before:bg-[linear-gradient(to_right,transparent,white_25%)] hover:before:w-full before:transition-[width] cursor-pointer">
                <div className="z-10 transition-transform translate-x-4 group-hover:translate-x-0">
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
                    <button>
                        <DownloadIcon size={20} />
                    </button>
                </div>
            </div>
        </Fragment>
    );
};
