"use client";

import { SongElement } from "@/entities/Song";
import { Artist } from "@/shared/api";

import { useSplitSongsIntoPages } from "../utils/useSplitSongsIntoPages";

export const ArtistPageSongsSection = ({ artist }: { artist: Artist }) => {
    const {
        containerRef,
        page,
        pageOrder,
        isFirstPageReached,
        isLastPageReached,
        toNextPage,
        toPrevPage
    } = useSplitSongsIntoPages(artist.songs);

    return (
        <div>
            <div
                ref={containerRef}
                className="transition-all duration-100 grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center mb-4"
            >
                {page?.map((song) => (
                    <SongElement
                        song={song}
                        key={song.id}
                    />
                ))}
            </div>
            <div className="flex w-full justify-center items-center font-semibold text-xl text-primary gap-2">
                <button
                    onClick={toPrevPage}
                    disabled={isFirstPageReached}
                    className="bg-primary/40 disabled:bg-primary/20 disabled:text-primary/50 text-primary-darker w-8 aspect-square rounded-sm"
                >
                    {"<"}
                </button>
                <span>{pageOrder}</span>
                <button
                    onClick={toNextPage}
                    disabled={isLastPageReached}
                    className="bg-primary/40 disabled:bg-primary/20 disabled:text-primary/50 text-primary-darker w-8 aspect-square rounded-sm"
                >
                    {">"}
                </button>
            </div>
        </div>
    );
};
