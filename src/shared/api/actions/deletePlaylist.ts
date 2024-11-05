"use server";

import { revalidateTag } from "next/cache";

import { Playlist } from "../model/playlist/playlist.types";

export const deletePlaylist = async (playlistId: Playlist["id"]) => {
    const response = await fetch(
        `${process.env.BASE_API_URL}/playlists/${playlistId}`,
        { method: "DELETE" }
    );
    revalidateTag("playlists");
    return response;
};
