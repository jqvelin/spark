import { ComposedPlaylistImage } from "@/entities/Playlist";
import { SongCard, getSongsCollectionDuration } from "@/entities/Song";
import { auth } from "@/features/sign-in";
import { getPlaylistById } from "@/shared/api";
import { Fragment } from "react";

import { PlaylistTitleWithControls } from "./PlaylistTitleWithControls";

export const DedicatedPlaylistPage = async ({
    params
}: {
    params: {
        id: string;
    };
}) => {
    const session = await auth();
    const playlist = await getPlaylistById(
        session?.user?.id as string,
        params.id
    );
    const { songsCount, duration } = getSongsCollectionDuration(
        playlist.songs ?? []
    );
    return (
        <Fragment>
            <div className="flex flex-col items-center text-center justify-center gap-2 md:gap-4">
                <ComposedPlaylistImage playlist={playlist} />
                <div className="flex flex-col justify-center gap-1">
                    <PlaylistTitleWithControls playlist={playlist} />
                    <div className="text-sm text-gray-500 md:text-lg">
                        {session?.user?.name}
                    </div>
                </div>
            </div>
            <hr className="my-2 w-full md:my-4" />
            <div className="flex flex-col mx-auto items-center gap-2 w-full max-w-[500px] mb-2">
                {playlist.songs?.map((song) => (
                    <SongCard
                        key={song.id}
                        song={song}
                        playlist={playlist}
                        className="w-9/12"
                    />
                ))}
            </div>
            {playlist.songs?.length ? (
                <span className="mx-auto text-gray-400">
                    {songsCount}, {duration}
                </span>
            ) : null}
        </Fragment>
    );
};
