import { auth } from "@/features/sign-in";
import { getPlaylists } from "@/shared/api";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger
} from "@/shared/components/ui/dialog";
import { PlusIcon } from "lucide-react";

import { AddPlaylistForm } from "./AddPlaylistForm/AddPlaylistForm";
import { PlaylistLink } from "./PlaylistLink/PlaylistLink";

export const PlaylistsPage = async () => {
    const session = await auth();
    const playlists = await getPlaylists(session?.user?.id as string);

    if (!playlists.length) {
        return (
            <div className="mx-auto my-4 flex flex-col justify-center items-center">
                <p className="text-2xl md:text-3xl lg:text-4xl text-primary font-semibold mb-8">
                    You have no playlists yet
                </p>
                <p className="text-xl md:text-2xl lg:text-3xl text-primary mb-4">
                    ...let&apos;s fix it by creating some!
                </p>
                <Dialog>
                    <DialogTrigger className="flex items-center text-primary text-xl border-2 border-primary py-2 px-3 rounded-sm">
                        <PlusIcon />
                        <span>Create a playlist</span>
                    </DialogTrigger>
                    <DialogContent className="flex flex-col items-center">
                        <DialogTitle className="text-primary md:text-lg lg:text-xl">
                            Create a playlist
                        </DialogTitle>
                        <AddPlaylistForm />
                    </DialogContent>
                </Dialog>
            </div>
        );
    } else {
        return (
            <div className="flex flex-col">
                <Dialog>
                    <DialogTrigger className="text-primary self-end border-2 border-primary inline w-fit rounded-sm">
                        <PlusIcon />
                    </DialogTrigger>
                    <DialogContent className="flex flex-col items-center">
                        <DialogTitle className="text-primary md:text-lg lg:text-xl">
                            Create a playlist
                        </DialogTitle>
                        <AddPlaylistForm />
                    </DialogContent>
                </Dialog>
                <div className="flex flex-col gap-2">
                    {playlists.map((playlist) => (
                        <PlaylistLink
                            key={playlist.id}
                            playlist={playlist}
                        />
                    ))}
                </div>
            </div>
        );
    }
};
