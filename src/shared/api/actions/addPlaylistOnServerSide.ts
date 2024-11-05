"use server";

import { revalidateTag } from "next/cache";

import { Playlist } from "../model/playlist/playlist.types";

const BASE_API_URL = process.env.BASE_API_URL ?? "http://localhost:4000";

type CreatedPlaylist = Omit<Playlist, "id">;

export const addPlaylistOnServerSide = async (playlist: CreatedPlaylist) => {
    const response = await fetch(`${BASE_API_URL}/playlists/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(playlist)
    });
    revalidateTag("playlists");
    return response;
};
