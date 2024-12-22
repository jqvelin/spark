import { artistSchema } from "../model/artist/artistSchema";

const BASE_API_URL =
    process.env.NEXT_PUBLIC_BASE_API_URL ?? "http://localhost:4000";

export const getArtistDataById = async (artistId: string) => {
    const response = await fetch(`${BASE_API_URL}/artists/${artistId}`, {
        cache: "no-store"
    });
    if (!response.ok) {
        throw new Error("Failed to fetch albums");
    }

    const data = await response.json();

    return artistSchema.parse(data);
};
