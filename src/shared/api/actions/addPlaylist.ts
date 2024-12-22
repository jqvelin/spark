"use server";

import { revalidateTag } from "next/cache";

import { Playlist } from "../model/playlist/playlist.types";

const BASE_API_URL =
    process.env.NEXT_PUBLIC_BASE_API_URL ?? "http://localhost:4000";

// Will be assigned by the server
type CreatedPlaylist = Omit<Playlist, "id">;

export const addPlaylistOnServerSide = async (playlist: CreatedPlaylist) => {
    const response = await fetch(`${BASE_API_URL}/playlists/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(playlist)
    });

    if (!response.ok) {
        return {
            message: response.statusText,
            code: response.status
        };
    }

    revalidateTag("playlists");
};
