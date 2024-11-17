import { getSongDownloadURL } from "@/shared/api/requests/getSongDownloadURL";
import { DownloadIcon } from "lucide-react";
import Link from "next/link";
import { useContext } from "react";

import { SongContext } from "./SongElement";

export const DownloadSongButton = () => {
    const songContext = useContext(SongContext);
    if (!songContext) {
        throw new Error("Song context not found");
    }

    const { song } = songContext;

    return (
        <Link
            download
            href={getSongDownloadURL(song)}
        >
            <DownloadIcon />
        </Link>
    );
};
