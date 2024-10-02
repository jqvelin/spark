import { SongPreview } from "@/_pages/landing-signed-out/ui/songs-preview-line/SongPreview";
import { getAlbumDataById } from "@/shared/api";
import { paths } from "@/shared/routing";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

export const AlbumsPage = async ({ albumId }: { albumId: string }) => {
    const albumData = await getAlbumDataById(albumId);
    return (
        <Fragment>
            <div className="flex items-center justify-center gap-2 md:gap-4">
                <Image
                    src={albumData.coverSrc ?? "/logo.svg"}
                    width={100}
                    height={100}
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
                    <div className="flex flex-wrap gap-2">
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
            <div className="flex flex-col mx-auto items-center gap-2 w-full max-w-[500px]">
                {albumData.songs?.map((song) => (
                    <SongPreview
                        key={song.id}
                        song={song}
                        className="w-full"
                    />
                ))}
            </div>
        </Fragment>
    );
};
