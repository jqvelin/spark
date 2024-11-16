import { Song } from "@/shared/api";

export const getSongDownloadURL = ({ id, title, artist }: Song) => {
    const BASE_API_URL = process.env.BASE_API_URL ?? "http://localhost:4000";
    const searchParams = new URLSearchParams({
        title,
        artist
    });

    return new URL(
        `download/${id + "?" + searchParams}`,
        BASE_API_URL
    ).toString();
};
