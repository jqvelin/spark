import { SongElement, getSongsCollectionDuration } from "@/entities/Song";
import { getAlbumDataById } from "@/shared/api";
import { paths } from "@/shared/routing";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

export const AlbumsPage = async ({ albumId }: { albumId: string }) => {
    const albumData = await getAlbumDataById(albumId);
    const albumSongsDuration = getSongsCollectionDuration(
        albumData.songs ?? []
    );

    return (
        <Fragment>
            <div className="flex flex-col items-center text-center justify-center gap-2 md:gap-4">
                <Image
                    src={albumData.coverSrc ?? "/logo.svg"}
                    width={150}
                    height={150}
                    sizes="400px"
                    alt={albumData.title}
                    className="min-w-[100px] rounded-sm"
                />
                <div className="flex flex-col justify-center gap-1">
                    <h1 className="mb-1 text-xl font-semibold leading-tight md:text-2xl">
                        {albumData.title}
                    </h1>
                    <Link
                        href={`${paths.listen.artists}/${albumData.artistId}`}
                        className="text-sm text-gray-500 md:text-lg"
                    >
                        {albumData.artist}
                    </Link>
                    <div className="flex justify-center flex-wrap gap-2">
                        {albumData.genres?.map((genre) => (
                            <span
                                className="rounded-sm bg-gray-400 px-1 py-[2px] text-[12px] text-white md:text-[14px]"
                                key={genre}
                            >
                                {genre}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <hr className="my-2 w-full md:my-4" />
            <div className="flex flex-col mx-auto items-center gap-2 w-full max-w-[500px] mb-2">
                {albumData.songs?.map((song) => (
                    <SongElement
                        key={song.id}
                        song={song}
                        className="w-full"
                    />
                ))}
            </div>
            <span className="mx-auto text-gray-400">{`${albumData.songs?.length} songs, ${albumSongsDuration} min`}</span>
        </Fragment>
    );
};
