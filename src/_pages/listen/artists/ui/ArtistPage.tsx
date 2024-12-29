import { AlbumPreviewCard } from "@/entities/Album";
import { getArtistDataById } from "@/shared/api";
import Image from "next/image";

import { ArtistPageSongsSection } from "./ArtistPageSongsSection";

export const ArtistPage = async ({ params }: { params: { id: string } }) => {
    const artist = await getArtistDataById(params.id);
    if (artist)
        return (
            <main className="pb-[calc(var(--audio-player-height)+var(--footer-height))] w-full flex flex-col items-center">
                <div className="flex justify-center items-center gap-2 md:gap-4">
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
                <div className="flex flex-col mx-auto md:flex-row gap-8 md:gap-16 flex-wrap">
                    {artist.songs?.length ? (
                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl text-primary md:text-2xl lg:text-3xl font-semibold mb-2 md:mb-4">
                                Songs
                            </h2>
                            <ArtistPageSongsSection artist={artist} />
                        </div>
                    ) : null}
                    {artist.albums?.length ? (
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
                    ) : null}
                </div>
            </main>
        );
};
