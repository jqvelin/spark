import { Song } from "@/shared/api";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/shared/components/ui/dialog";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger
} from "@/shared/components/ui/dropdown-menu";
import { DialogDescription } from "@radix-ui/react-dialog";
import { DownloadIcon, PlusIcon } from "lucide-react";
import { Fragment } from "react";
import { BsThreeDots } from "react-icons/bs";

import { AddSongTo } from "./AddSongTo";

export const AddAndSave = ({ song }: { song: Song }) => {
    return (
        <Fragment>
            <div className="inline md:hidden">
                <DropdownMenu>
                    <DropdownMenuTrigger className="text-primary">
                        <BsThreeDots />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="text-primary flex justify-center gap-2 min-w-fit">
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
                                        Select one of your playlists to add "
                                        <span className="text-black">
                                            {song.title}
                                        </span>
                                        " to:
                                    </DialogDescription>
                                </DialogHeader>
                                <AddSongTo song={song} />
                            </DialogContent>
                        </Dialog>
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
                                    Select one of your playlists to add "
                                    <span className="text-black">
                                        {song.title}
                                    </span>
                                    " to:
                                </DialogDescription>
                            </DialogHeader>
                            <AddSongTo song={song} />
                        </DialogContent>
                    </Dialog>
                    <button>
                        <DownloadIcon size={20} />
                    </button>
                </div>
            </div>
        </Fragment>
    );
};
