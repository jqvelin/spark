"use server";

import { revalidateTag } from "next/cache";

import { Playlist } from "../model/playlist/playlist.types";

const BASE_API_URL =
    process.env.NEXT_PUBLIC_BASE_API_URL ?? "http://localhost:4000";

export const patchPlaylist = async (playlist: Playlist) => {
    const response = await fetch(`${BASE_API_URL}/playlists/${playlist.id}`, {
        method: "PATCH",
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
