import { z } from "zod";

import { albumSchema } from "../model/album/albumSchema";
import { artistSchema } from "../model/artist/artistSchema";
import { songSchema } from "../model/song/songSchema";

const BASE_API_URL =
    process.env.NEXT_PUBLIC_BASE_API_URL ?? "http://localhost:4000";

export const getSearchResults = async (searchQuery: string) => {
    const response = await fetch(`${BASE_API_URL}/search?q=${searchQuery}`, {
        cache: "no-store"
    });
    if (!response.ok) {
        throw new Error("Failed to fetch search results");
    }

    const data = await response.json();
    return z
        .object({
            songs: songSchema.array(),
            artists: artistSchema.array(),
            albums: albumSchema.array()
        })
        .parse(data);
};
