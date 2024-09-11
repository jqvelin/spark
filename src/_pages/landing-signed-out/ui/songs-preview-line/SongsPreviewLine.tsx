"use client";

import { Song } from "@/shared/api";

import { useSongsPreviewSlides } from "../../utils/useSongsPreviewSlides";
import { SongPreview } from "./SongPreview";

export const SongsPreviewLine = ({ songs }: { songs: Song[] }) => {
    const { sliceSongsFromIndex, songsPreviewLineWrapperRef } =
        useSongsPreviewSlides(songs);
    return (
        <div
            className="flex h-[220px] flex-col items-center gap-4 transition-opacity md:h-auto md:flex-row"
            ref={songsPreviewLineWrapperRef}
        >
            {songs
                .slice(sliceSongsFromIndex, sliceSongsFromIndex + 3)
                .map((song, i) => (
                    <SongPreview
                        className="animate-pop-up"
                        style={{ animationDelay: `${i}00ms` }}
                        key={song.id}
                        song={song}
                    />
                ))}
        </div>
    );
};
