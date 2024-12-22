import { albumSchema } from "../model/album/albumSchema";

const BASE_API_URL =
    process.env.NEXT_PUBLIC_BASE_API_URL ?? "http://localhost:4000";

export const getHomepageAlbums = async () => {
    const response = await fetch(`${BASE_API_URL}/albums`, {
        cache: "no-store"
    });
    if (!response.ok) {
        throw new Error("Failed to fetch albums");
    }

    const data = await response.json();
    return albumSchema.array().parse(data);
};
