import { playlistSchema } from "../model/playlist/playlistSchema";

const BASE_API_URL = process.env.BASE_API_URL ?? "http://localhost:4000";
export const getPlaylistById = async (userId: string, id: string) => {
    const queryParams = new URLSearchParams({ userId, id });
    const response = await fetch(
        `${BASE_API_URL}/playlists?${queryParams.toString()}`,
        { cache: "no-store" }
    );
    const playlist = await response.json();
    return playlistSchema.parse(playlist[0]);
};
