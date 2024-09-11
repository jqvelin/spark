import { z } from "zod";

import { songSchema } from "../model/song/songSchema";

const BASE_API_URL = process.env.BASE_API_URL ?? "http://localhost:4000";

export const getHomepageSongs = async () => {
    const response = await fetch(`${BASE_API_URL}/songs`);
    if (!response.ok) {
        throw new Error("Failed to fetch songs");
    }

    const data = await response.json();
    return z
        .object({
            fresh: songSchema.array(),
            trendingGlobal: songSchema.array(),
            bestOfToday: songSchema.array(),
            trendingRussia: songSchema.array()
        })
        .parse(data);
};