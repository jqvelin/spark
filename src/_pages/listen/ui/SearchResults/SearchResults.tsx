import { getSortedArtists } from "@/entities/Artist";
import { SongElement } from "@/entities/Song";
import { getSearchResults } from "@/shared/api";
import {
    Collapsible,
    CollapsibleTrigger
} from "@/shared/components/ui/collapsible";
import { paths } from "@/shared/routing";
import { CollapsibleContent } from "@radix-ui/react-collapsible";
import { ArrowUpDownIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

export const SearchResults = async ({ query }: { query: string }) => {
    const searchResultsData = await getSearchResults(query);
    const areSearchResultsEmpty =
        !searchResultsData.albums.length &&
        !searchResultsData.artists.length &&
        !searchResultsData.songs.length;

    const sortedArtists = getSortedArtists(searchResultsData.artists);

    return (
        <Fragment>
            {areSearchResultsEmpty ? (
                <Fragment>
                    <p className="text-xl text-primary">
                        Nothing found for &quot;<b>{query}</b>&quot;... 🤔
                    </p>
                    <p className="text-md text-primary">
                        Check your query for typos and try again!
                    </p>
                </Fragment>
            ) : (
                <main className="pb-[calc(var(--audio-player-height)+var(--footer-height))] md:pb-[var(--audio-player-height)]">
                    <h1 className="text-xl mb-4 font-semibold text-primary md:mb-8 md:text-2xl lg:text-3xl">
                        Search results for:{" "}
                        <span className="font-bold">{query}</span>
                    </h1>
                    {searchResultsData?.songs.length > 0 && (
                        <section>
                            <Collapsible>
                                <CollapsibleTrigger>
                                    <h2 className="mb-2 text-lg text-primary md:mb-4 md:text-xl lg:text-2xl flex items-center gap-2">
                                        Songs
                                        {searchResultsData?.songs.length >
                                            12 && <ArrowUpDownIcon />}
                                    </h2>
                                </CollapsibleTrigger>
                                <div className="grid place-items-center w-full gap-2 [grid-template-columns:repeat(auto-fill,minmax(250px,1fr))]">
                                    {searchResultsData?.songs
                                        .slice(0, 12)
                                        .map((song) => (
                                            <SongElement
                                                key={song.id}
                                                song={song}
                                                className="w-full"
                                            />
                                        ))}
                                    {searchResultsData?.songs.length > 12 && (
                                        <CollapsibleTrigger className="text-gray-400 [place-self:end] md:[place-self:end_start]">
                                            ...{" "}
                                            {searchResultsData?.songs.length -
                                                12}{" "}
                                            more
                                        </CollapsibleTrigger>
                                    )}
                                </div>
                                <CollapsibleContent>
                                    <hr className="w-full my-4" />
                                    <div className="grid place-items-center w-full gap-2 [grid-template-columns:repeat(auto-fill,minmax(250px,1fr))]">
                                        {searchResultsData?.songs
                                            .slice(12)
                                            .map((song) => (
                                                <SongElement
                                                    key={song.id}
                                                    song={song}
                                                    className="w-full"
                                                />
                                            ))}
                                    </div>
                                </CollapsibleContent>
                            </Collapsible>
                        </section>
                    )}
                    {searchResultsData?.songs.length > 0 && (
                        <hr className="w-full my-4" />
                    )}
                    {sortedArtists.length > 0 && (
                        <section>
                            <Collapsible>
                                <CollapsibleTrigger>
                                    <h2 className="mb-2 text-lg text-primary md:mb-4 md:text-xl lg:text-2xl flex items-center gap-2">
                                        Artists
                                        {searchResultsData?.songs.length >
                                            5 && <ArrowUpDownIcon />}
                                    </h2>
                                </CollapsibleTrigger>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {sortedArtists.slice(0, 5).map((artist) => (
                                        <Link
                                            href={`${paths.listen.artists}/${artist.id}`}
                                            key={artist.id}
                                            className="text-lg flex items-center gap-2"
                                        >
                                            <Image
                                                src={
                                                    artist.imageSrc ??
                                                    "/logo.svg"
                                                }
                                                height={40}
                                                width={40}
                                                alt={artist.name}
                                                className="rounded-sm"
                                            />
                                            <span>{artist.name}</span>
                                        </Link>
                                    ))}
                                    {sortedArtists.length > 5 && (
                                        <CollapsibleTrigger className="text-gray-400 ml-auto md:ml-0 [place-self:end_start]">
                                            ... {sortedArtists.length - 5} more
                                        </CollapsibleTrigger>
                                    )}
                                </ul>
                                {sortedArtists.length > 5 && (
                                    <CollapsibleContent>
                                        <hr className="w-full my-4" />
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                            {sortedArtists
                                                .slice(5)
                                                .map((artist) => (
                                                    <Link
                                                        href={`${paths.listen.artists}/${artist.id}`}
                                                        key={artist.id}
                                                        className="text-lg flex items-center gap-2"
                                                    >
                                                        <Image
                                                            src={
                                                                artist.imageSrc ??
                                                                "/logo.svg"
                                                            }
                                                            height={40}
                                                            width={40}
                                                            alt={artist.name}
                                                            className="rounded-sm"
                                                        />
                                                        <span>
                                                            {artist.name}
                                                        </span>
                                                    </Link>
                                                ))}
                                        </ul>
                                    </CollapsibleContent>
                                )}
                            </Collapsible>
                        </section>
                    )}
                    {searchResultsData?.artists.length > 0 && (
                        <hr className="w-full my-4" />
                    )}
                    {searchResultsData?.albums.length > 0 && (
                        <section>
                            <div>
                                <h2 className="mb-2 text-lg text-primary md:mb-4 md:text-xl lg:text-2xl">
                                    Albums
                                </h2>
                                <ul className="flex flex-col gap-2">
                                    {searchResultsData?.albums?.map((album) => (
                                        <Link
                                            href={`${paths.listen.albums}/${album.id}`}
                                            key={album.id}
                                            className="text-lg flex items-center gap-2"
                                        >
                                            <Image
                                                src={
                                                    album.coverSrc ??
                                                    "/logo.svg"
                                                }
                                                height={40}
                                                width={40}
                                                alt={album.title}
                                                className="rounded-sm"
                                            />
                                            {album.title}
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                        </section>
                    )}
                </main>
            )}
        </Fragment>
    );
};
