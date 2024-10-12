"use client";

import { Song } from "@/shared/api";

import { useSongElementsPreviewSlides } from "../../utils/useSongElementsPreviewSlides";
import { SongElement } from "./SongElement";

export const SongElementsPreview = ({ songs }: { songs: Song[] }) => {
    const { sliceSongsFromIndex, songsPreviewLineWrapperRef } =
        useSongElementsPreviewSlides(songs);
    return (
        <div
            className="flex h-[220px] flex-col items-center gap-4 transition-opacity md:h-auto md:flex-row"
            ref={songsPreviewLineWrapperRef}
        >
            {songs
                .slice(sliceSongsFromIndex, sliceSongsFromIndex + 3)
                .map((song, i) => (
                    <SongElement
                        className="animate-pop-up"
                        style={{ animationDelay: `${i}00ms` }}
                        key={song.id}
                        song={song}
                    />
                ))}
        </div>
    );
};
