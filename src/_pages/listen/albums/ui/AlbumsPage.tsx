import { SongPreview } from "@/_pages/landing-signed-out/ui/songs-preview-line/SongPreview";
import { getAlbumDataById } from "@/shared/api";
import Image from "next/image";

export const AlbumsPage = async ({ albumId }: { albumId: string }) => {
    const albumData = await getAlbumDataById(albumId);
    return (
        <main className="calculated-height flex w-full flex-col items-center p-2 md:p-4">
            <div className="flex items-center gap-2 md:gap-4">
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
                    <h2 className="text-sm text-gray-500 md:text-lg">
                        {albumData.artist}
                    </h2>
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
            {albumData.songs?.map((song) => (
                <SongPreview
                    className="w-full max-w-[400px] md:w-auto"
                    song={song}
                />
            ))}
        </main>
    );
};
