import { Song } from "@/shared/api";
import { useEffect, useRef, useState } from "react";

// Transition takes 150ms
// Exporting for testing purpose
export const TIME_BEFORE_VISIBILITY_CHANGE = 150 + 350;
export const SONGS_SHOULD_STAY_FOR = 4000;

export const useSongElementsPreviewSlides = (songs: Song[]) => {
    const songsPreviewLineWrapperRef = useRef<
        HTMLDivElement & HTMLUListElement
    >(null);
    const [sliceSongsFromIndex, setSliceSongsFromIndex] = useState(0);
    useEffect(() => {
        const target = songsPreviewLineWrapperRef.current as HTMLElement;

        const changeSongsInterval = setInterval(() => {
            target.classList.add("opacity-0");
            setTimeout(() => {
                const newSongsSet = songs.slice(
                    sliceSongsFromIndex,
                    sliceSongsFromIndex + 3
                );
                if (newSongsSet.length < 3) {
                    setSliceSongsFromIndex(0);
                } else {
                    setSliceSongsFromIndex((prev) => prev + 3);
                }
            }, TIME_BEFORE_VISIBILITY_CHANGE);
            setTimeout(() => {
                target.classList.remove("opacity-0");
            }, TIME_BEFORE_VISIBILITY_CHANGE);
        }, SONGS_SHOULD_STAY_FOR);

        return () => {
            clearInterval(changeSongsInterval);
        };
    });

    return {
        songsPreviewLineWrapperRef,
        sliceSongsFromIndex
    };
};
