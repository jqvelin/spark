"use client";

import { Song } from "@/shared/api";

import { useSongElementsPreviewSlides } from "../../utils/useSongElementsPreviewSlides";
import { SongElement } from "./SongElement";

export const SongElementsPreview = ({ songs }: { songs: Song[] }) => {
    const { sliceSongsFromIndex, songsPreviewLineWrapperRef } =
        useSongElementsPreviewSlides(songs);
    return (
        <ul
            className="flex min-h-[calc((var(--song-element-height)+16px)*3)] flex-col items-center gap-4 transition-opacity md:h-auto md:flex-row"
            ref={songsPreviewLineWrapperRef}
        >
            {songs
                .slice(sliceSongsFromIndex, sliceSongsFromIndex + 3)
                .map((song, i) => (
                    <li
                        className="animate-pop-up"
                        key={song.id}
                    >
                        <SongElement
                            style={{ animationDelay: `${i}00ms` }}
                            song={song}
                        />
                    </li>
                ))}
        </ul>
    );
};
