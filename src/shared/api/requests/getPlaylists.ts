import { playlistSchema } from "../model/playlist/playlistSchema";

const BASE_API_URL =
    process.env.NEXT_PUBLIC_BASE_API_URL ?? "http://localhost:4000";

export const getPlaylists = async (userId: string) => {
    const response = await fetch(`${BASE_API_URL}/playlists?userId=${userId}`, {
        next: {
            tags: ["playlists"]
        },
        cache: "no-store"
    });
    const result = await response.json();
    return playlistSchema.array().parse(result);
};
