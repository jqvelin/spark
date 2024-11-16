import { Song } from "@/shared/api";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/shared/components/ui/dialog";
import { PlusIcon } from "lucide-react";

import { AddSongTo } from "./AddSongTo";

export const SaveSongButton = ({ song }: { song: Song }) => {
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
                <AddSongTo song={song} />
            </DialogContent>
        </Dialog>
    );
};
