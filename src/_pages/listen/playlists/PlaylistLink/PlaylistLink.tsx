"use client";

import { ComposedPlaylistImage } from "@/entities/Playlist";
import { getSongsCollectionDuration } from "@/entities/Song";
import { Playlist, deletePlaylist } from "@/shared/api";
import { paths } from "@/shared/routing";
import { TrashIcon } from "lucide-react";
import Link from "next/link";

export const PlaylistLink = ({ playlist }: { playlist: Playlist }) => {
    const handleDelete = async (playlistId: string) => {
        const response = await deletePlaylist(playlistId);
        if (response) {
            // process error
        }
    };

    const { songsCount, duration } = getSongsCollectionDuration(
        playlist.songs ?? []
    );

    return (
        <div className="flex items-center justify-between">
            <Link
                href={`${paths.listen.playlists}/${playlist.id}`}
                className="flex flex-grow items-center gap-2"
            >
                <ComposedPlaylistImage
                    className="[width:clamp(60px,12vw,100px)]"
                    playlist={playlist}
                />
                <div className="flex flex-col">
                    <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
                        {playlist.title}
                    </h2>
                    <p className="text-gray-400">{playlist.description}</p>
                    {playlist.songs?.length ? (
                        <p className="text-gray-400 text-sm">
                            {songsCount}, {duration}
                        </p>
                    ) : null}
                </div>
            </Link>
            <button
                className="text-primary border-2 border-primary rounded-sm p-1"
                onClick={() => handleDelete(playlist.id)}
            >
                <TrashIcon />
            </button>
        </div>
    );
};
