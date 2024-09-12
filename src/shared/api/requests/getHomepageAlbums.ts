import { z } from "zod";

import { songSchema } from "../model/song/songSchema";

const BASE_API_URL = process.env.BASE_API_URL ?? "http://localhost:4000";

export const getHomepageAlbums = async () => {
    const response = await fetch(`${BASE_API_URL}/albums`);
    if (!response.ok) {
        throw new Error("Failed to fetch albums");
    }

    const data = await response.json();
    return z
        .object({
            id: z.string(),
            coverSrc: z.string().or(z.undefined()).or(z.null()),
            title: z.string(),
            artist: z.string().or(z.undefined()).or(z.null()),
            genres: z.array(z.string()).or(z.null()).or(z.undefined()),
            songs: z.array(songSchema).or(z.null()).or(z.undefined())
        })
        .array()
        .parse(data);
};
