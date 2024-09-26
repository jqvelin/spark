import { SongPreview } from "@/_pages/landing-signed-out/ui/songs-preview-line/SongPreview";
import { AlbumPreviewCard } from "@/entities/Album";
import { Artist, getArtistDataById } from "@/shared/api";
import Image from "next/image";

export const ArtistPage = async ({ artistId }: { artistId: Artist["id"] }) => {
    const artist = await getArtistDataById(artistId);

    return (
        <main className="calculated-height flex w-full flex-col items-center p-2 md:p-4">
            <div className="flex items-center gap-2 md:gap-4">
                <Image
                    src={artist.imageSrc ?? "/logo.svg"}
                    width={100}
                    height={100}
                    alt={artist.name}
                    className="min-w-[100px] rounded-sm"
                />
                <h1 className="mb-1 text-2xl font-semibold leading-tight md:text-3xl lg:text-4xl">
                    {artist.name}
                </h1>
            </div>
            <hr className="my-2 w-full md:my-4" />
            <div className="flex flex-col justify-between md:flex-row gap-8 md:gap-16 flex-wrap">
                <div className="flex flex-col gap-2">
                    <h2 className="text-xl text-primary md:text-2xl lg:text-3xl font-semibold mb-2 md:mb-4">
                        Songs
                    </h2>
                    {artist.songs?.map((song) => (
                        <SongPreview
                            song={song}
                            key={song.id}
                        />
                    ))}
                </div>
                <div className="flex flex-col">
                    <h2 className="text-xl text-primary md:text-2xl lg:text-3xl font-semibold mb-2 md:mb-4">
                        Albums
                    </h2>
                    <div className="grid grid-cols-2 gap-4 place-items-center">
                        {artist.albums?.map((album) => (
                            <AlbumPreviewCard
                                album={album}
                                key={album.id}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};
