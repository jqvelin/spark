import { Song } from "@/shared/api";

const BASE_API_URL =
    process.env.NEXT_PUBLIC_BASE_API_URL ?? "http://localhost:4000";

export const getSongDownloadURL = ({ id, title, artist }: Song) => {
    const searchParams = new URLSearchParams({
        title,
        artist
    });

    return new URL(
        `download/${id + "?" + searchParams}`,
        BASE_API_URL
    ).toString();
};
