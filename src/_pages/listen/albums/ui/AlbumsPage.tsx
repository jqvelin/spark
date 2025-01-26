import { SongElement, getSongsCollectionDuration } from "@/entities/Song";
import { getAlbumDataById } from "@/shared/api";
import { paths } from "@/shared/routing";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

export const AlbumsPage = async ({ params }: { params: { id: string } }) => {
    const album = await getAlbumDataById(params.id);
    const { songsCount, duration } = getSongsCollectionDuration(
        album.songs ?? []
    );

    return (
        <Fragment>
            <div className="flex flex-col items-center text-center justify-center gap-2 md:gap-4">
                <Image
                    src={album.coverSrc ?? "/logo.svg"}
                    width={150}
                    height={150}
                    sizes="400px"
                    alt={album.title}
                    className="min-w-[100px] rounded-sm"
                />
                <div className="flex flex-col justify-center gap-1">
                    <h1 className="mb-1 text-xl font-semibold leading-tight md:text-2xl">
                        {album.title}
                    </h1>
                    <Link
                        href={`${paths.listen.artists}/${album.artistId}`}
                        className="text-sm text-gray-500 md:text-lg"
                    >
                        {album.artist}
                    </Link>
                    <div className="flex justify-center flex-wrap gap-2">
                        {album.genres?.map((genre) => (
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
                {album.songs?.map((song) => (
                    <SongElement
                        key={song.id}
                        song={song}
                        className="w-9/12"
                        album={album}
                    />
                ))}
            </div>
            <span className="mx-auto text-gray-400">
                {songsCount}, {duration}
            </span>
        </Fragment>
    );
};
