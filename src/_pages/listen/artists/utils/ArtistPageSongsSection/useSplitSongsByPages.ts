import { Song } from "@/shared/api";
import { useEffect, useState } from "react";

export const useSplitSongsByPages = (songs: Song[]) => {
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
        setCurrentPage((prev) => Math.max(prev - 1, 0));
    }

    function toNextPage() {
        setCurrentPage((prev) => Math.min(prev + 1, pages.length - 1));
    }

    return {
        isFirstPageReached: currentPage === 0,
        toPrevPage,
        isLastPageReached: currentPage === pages.length - 1,
        toNextPage,
        page: pages[currentPage],
        pageOrder: currentPage + 1
    };
};
