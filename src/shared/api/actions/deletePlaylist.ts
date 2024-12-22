"use server";

import { revalidateTag } from "next/cache";

import { Playlist } from "../model/playlist/playlist.types";

const BASE_API_URL =
    process.env.NEXT_PUBLIC_BASE_API_URL ?? "http://localhost:4000";

export const deletePlaylist = async (playlistId: Playlist["id"]) => {
    const response = await fetch(`${BASE_API_URL}/playlists/${playlistId}`, {
        method: "DELETE"
    });

    if (!response.ok) {
        return {
            message: response.statusText,
            code: response.status
        };
    }

    revalidateTag("playlists");
};
