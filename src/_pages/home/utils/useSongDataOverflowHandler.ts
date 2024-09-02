import { useEffect, useRef } from "react";

export const useSongDataOverflowHandler = () => {
    const songDataWrapperRef = useRef<HTMLDivElement>(null);
    const songTitleRef = useRef<HTMLSpanElement>(null);
    const songArtistRef = useRef<HTMLSpanElement>(null);
    useEffect(() => {
        const wrapper = songDataWrapperRef.current as HTMLDivElement;
        const title = songTitleRef.current as HTMLSpanElement;
        const artist = songArtistRef.current as HTMLSpanElement;

        for (const dataElement of [title, artist]) {
            if (dataElement.scrollWidth > wrapper.clientWidth) {
                dataElement.classList.add("animate-running-line");
            }
        }
    }, []);

    return { songDataWrapperRef, songTitleRef, songArtistRef };
};
