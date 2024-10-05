"use client";

import { SongPreview } from "@/_pages/landing-signed-out/ui/songs-preview-line/SongPreview";
import { Artist } from "@/shared/api";

import { useSplitSongsByPages } from "../utils/ArtistPageSongsSection/useSplitSongsByPages";

export const ArtistPageSongsSection = ({ artist }: { artist: Artist }) => {
    const {
        page,
        pageOrder,
        isFirstPageReached,
        isLastPageReached,
        toNextPage,
        toPrevPage
    } = useSplitSongsByPages(artist.songs);

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center mb-4">
                {page?.map((song) => (
                    <SongPreview
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
                <div>{pageOrder}</div>
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
