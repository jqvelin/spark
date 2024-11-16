"use server";

import { revalidateTag } from "next/cache";

import { Playlist } from "../model/playlist/playlist.types";

const BASE_API_URL = process.env.BASE_API_URL ?? "http://localhost:4000";

export const patchPlaylist = async (playlist: Playlist) => {
    const response = await fetch(`${BASE_API_URL}/playlists/${playlist.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(playlist)
    });
    revalidateTag("playlists");
    return JSON.stringify(response);
};
