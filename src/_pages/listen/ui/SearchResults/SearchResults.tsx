import { SongPreview } from "@/_pages/landing-signed-out/ui/songs-preview-line/SongPreview";
import { getSearchResults } from "@/shared/api";
import { paths } from "@/shared/routing";
import Link from "next/link";
import { Fragment } from "react";

export const SearchResults = async ({ query }: { query: string }) => {
    const searchResultsData = await getSearchResults(query);
    return (
        <Fragment>
            {!searchResultsData.albums.length &&
            !searchResultsData.artists.length &&
            !searchResultsData.songs.length ? (
                <>
                    <p className="text-xl text-primary">
                        Nothing found for "<b>{query}</b>"... 🤔
                    </p>
                    <p className="text-md text-primary">
                        Check your query for typos and try again!
                    </p>
                </>
            ) : (
                <>
                    <h1 className="text-xl mb-4 font-semibold text-primary md:mb-8 md:text-2xl lg:text-3xl">
                        Search results for:{" "}
                        <span className="font-bold">{query}</span>
                    </h1>
                    <section>
                        <h2 className="mb-2 text-lg text-primary md:mb-4 md:text-xl lg:text-2xl">
                            Songs
                        </h2>
                        <div className="grid place-items-center w-full gap-2 [grid-template-columns:repeat(auto-fill,minmax(250px,1fr))]">
                            {searchResultsData?.songs?.map((song) => (
                                <SongPreview
                                    key={song.id}
                                    song={song}
                                    className="w-full"
                                />
                            ))}
                        </div>
                    </section>
                    <hr className="w-full my-4" />
                    <section>
                        <ul>
                            <h2 className="mb-2 text-lg text-primary md:mb-4 md:text-xl lg:text-2xl">
                                Artists
                            </h2>
                            {searchResultsData?.artists?.map((artist) => (
                                <Link
                                    href={`${paths.listen.artists}/${artist.id}`}
                                    key={artist.id}
                                    className="text-lg block"
                                >
                                    {artist.name}
                                </Link>
                            ))}
                        </ul>
                    </section>
                    <hr className="w-full my-4" />
                    <section>
                        <ul>
                            <h2 className="mb-2 text-lg text-primary md:mb-4 md:text-xl lg:text-2xl">
                                Albums
                            </h2>
                            {searchResultsData?.albums?.map((album) => (
                                <Link
                                    href={`${paths.listen.albums}/${album.id}`}
                                    key={album.id}
                                    className="block"
                                >
                                    {album.title}
                                </Link>
                            ))}
                        </ul>
                    </section>
                </>
            )}
        </Fragment>
    );
};
