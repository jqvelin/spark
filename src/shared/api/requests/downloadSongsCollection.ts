import { sleep } from "@/shared/utils";

import { Song } from "../model/song/song.types";
import { getSongDownloadURL } from "./getSongDownloadURL";

export const downloadSongsCollection = (songs: Song[]) => {
    if (!songs.length) return;

    songs.forEach(async (song, i) => {
        const downloadUrl = getSongDownloadURL(song);
        const anchor = document.createElement("a") as HTMLAnchorElement;
        anchor.setAttribute("href", downloadUrl);
        anchor.setAttribute("download", "true");
        await sleep(300 * i);
        anchor.click();
        anchor.remove();
    });
};
