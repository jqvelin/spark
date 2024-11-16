import { Song } from "@/shared/api";
import { getSongDownloadURL } from "@/shared/api/requests/getSongDownloadURL";
import { DownloadIcon } from "lucide-react";
import Link from "next/link";

export const DownloadSongButton = ({ song }: { song: Song }) => {
    return (
        <Link
            download
            href={getSongDownloadURL(song)}
        >
            <DownloadIcon />
        </Link>
    );
};
