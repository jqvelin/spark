import { SongPreview } from "@/_pages/landing-signed-out/ui/songs-preview-line/SongPreview";
import { getSearchResults } from "@/shared/api";

export const SearchResults = async ({ query }: { query: string }) => {
    const searchResultsData = await getSearchResults(query);
    return (
        <main className="calculated-height w-full space-y-4 p-2 md:p-4">
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
                        <ul className="flex flex-col max-h-screen flex-wrap items-center w-full gap-2">
                            {searchResultsData?.songs?.map((song) => (
                                <SongPreview
                                    key={song.id}
                                    song={song}
                                />
                            ))}
                        </ul>
                    </section>
                    <hr className="w-full" />
                    <section>
                        <ul>
                            <h2 className="mb-2 text-lg text-primary md:mb-4 md:text-xl lg:text-2xl">
                                Artists
                            </h2>
                            {searchResultsData?.artists?.map((artist) => (
                                <p
                                    key={artist.id}
                                    className="text-lg"
                                >
                                    {artist.name}
                                </p>
                            ))}
                        </ul>
                    </section>
                    <hr className="w-full" />
                    <section>
                        <ul>
                            <h2 className="mb-2 text-lg text-primary md:mb-4 md:text-xl lg:text-2xl">
                                Albums
                            </h2>
                            {searchResultsData?.albums?.map((album) => (
                                <p key={album.id}>{album.title}</p>
                            ))}
                        </ul>
                    </section>
                </>
            )}
        </main>
    );
};
