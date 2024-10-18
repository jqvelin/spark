import { Song } from "@/shared/api";
import { useEffect, useRef, useState } from "react";

const ANIMATION_DURATION = 200;
const INVISIBILITY_DURATION = 100;
// This variable defines how "wide" the swipe will be
const VISIBILITY_RANGE_PX = 50;

export const useSplitSongsByPages = (songs: Song[]) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [pages, setPages] = useState<Song[][]>([]);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        if (songs.length > 10) {
            const nextPages: Song[][] = [];
            for (
                let chunkNum = 0;
                chunkNum <= songs.length / 10;
                chunkNum += 1
            ) {
                nextPages.push(songs.slice(chunkNum * 10, chunkNum * 10 + 10));
            }
            setPages(nextPages);
        } else {
            setPages([songs]);
        }
    }, []);

    function toPrevPage() {
        if (!containerRef.current) return;
        containerRef.current.style.transform = `translateX(${VISIBILITY_RANGE_PX}px)`;
        containerRef.current.style.opacity = "0";
        setTimeout(() => {
            containerRef.current!.style.transform = `translateX(-${VISIBILITY_RANGE_PX}px)`;
            setCurrentPage((prev) => Math.max(prev - 1, 0));
            setTimeout(() => {
                containerRef.current!.style.transform = "translateX(0px)";
                containerRef.current!.style.opacity = "1";
            }, INVISIBILITY_DURATION);
        }, ANIMATION_DURATION);
    }

    function toNextPage() {
        if (!containerRef.current) return;
        containerRef.current.style.transform = `translateX(-${VISIBILITY_RANGE_PX}px)`;
        containerRef.current.style.opacity = "0";
        setTimeout(() => {
            containerRef.current!.style.transform = `translateX(${VISIBILITY_RANGE_PX}px)`;
            setCurrentPage((prev) => Math.min(prev + 1, pages.length - 1));
            setTimeout(() => {
                containerRef.current!.style.transform = "translateX(0px)";
                containerRef.current!.style.opacity = "1";
            }, INVISIBILITY_DURATION);
        }, ANIMATION_DURATION);
    }

    return {
        containerRef,
        isFirstPageReached: currentPage === 0,
        toPrevPage,
        isLastPageReached: currentPage === pages.length - 1,
        toNextPage,
        page: pages[currentPage],
        pageOrder: currentPage + 1
    };
};
