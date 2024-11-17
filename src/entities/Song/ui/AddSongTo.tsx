"use client";

import { ComposedPlaylistImage } from "@/entities/Playlist";
import { Playlist, Song, getPlaylists, patchPlaylist } from "@/shared/api";
import { DialogClose } from "@/shared/components/ui/dialog";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export const AddSongTo = ({ song }: { song: Song }) => {
    const [playlistOptions, setPlaylistOptions] = useState<Playlist[]>([]);
    const [selectedPlaylistId, setSelectedPlaylistId] = useState<
        Playlist["id"] | null
    >(null);
    const session = useSession();
    useEffect(() => {
        (async () => {
            const playlists = await getPlaylists(
                session.data?.user?.id as string
            );
            setPlaylistOptions(playlists);
        })();
    }, [session.data?.user?.id]);

    const handleAdd = async () => {
        const playlist = playlistOptions.find(
            (playlist) => playlist.id === selectedPlaylistId
        ) as Playlist;

        const response = await patchPlaylist({
            ...playlist,
            songs: [...(playlist.songs ?? []), song]
        });

        if (response) {
            // process error
        }
    };

    return (
        <div>
            <ul className="flex flex-col gap-2 mb-2 max-h-[400px] overflow-y-auto">
                {playlistOptions.map((playlist) => (
                    <li
                        key={playlist.id}
                        onClick={() => setSelectedPlaylistId(playlist.id)}
                        className={`flex items-center gap-2 cursor-pointer border-2 rounded-sm p-1 transition-colors ${selectedPlaylistId === playlist.id ? "border-primary" : "border-transparent"}`}
                    >
                        <ComposedPlaylistImage
                            className="[width:clamp(60px,12vw,100px)]"
                            playlist={playlist}
                        />
                        <span className="text-lg md:text-xl lg:text-2xl font-semibold">
                            {playlist.title}
                        </span>
                    </li>
                ))}
            </ul>
            <DialogClose
                disabled={!selectedPlaylistId}
                onClick={() => handleAdd()}
                className="text-primary disabled:border-gray-400 disabled:text-gray-400 border-2 border-primary px-3 py-2 rounded-sm w-fit self-center"
            >
                Submit
            </DialogClose>
        </div>
    );
};
