import { SongPreview } from "@/_pages/landing-signed-out/ui/songs-preview-line/SongPreview";
import {
    getSongsCollectionDuration,
    splitSongsCollectionIntoGroups
} from "@/entities/Song";
import { SongGroups, getHomepageSongs } from "@/shared/api";
import { Fragment } from "react";

type Props = {
    categoryName: keyof SongGroups;
    categoryLocaleName: string;
    categoryDescription?: string;
};

export const ExtendedCategoriesPage = async ({
    categoryName,
    categoryLocaleName,
    categoryDescription
}: Props) => {
    const { [categoryName]: categorySongs } = await getHomepageSongs();
    const splittedCategorySongs = splitSongsCollectionIntoGroups(categorySongs);
    const categorySongsDuration = getSongsCollectionDuration(categorySongs);
    return (
        <Fragment>
            <div className="mb-4">
                <h1 className="text-primary-darker font-bold text-2xl md:text-3xl lg:text-4xl">
                    {categoryLocaleName}
                </h1>
                {categoryDescription && (
                    <span className="text-lg md:text-xl lg:text-2xl text-gray-400">
                        {categoryDescription}
                    </span>
                )}
            </div>
            <div className="space-y-2 mx-auto w-full mb-2">
                {splittedCategorySongs.map((group, groupIndex) => (
                    <Fragment>
                        <div
                            className="grid place-items-center w-full gap-2 [grid-template-columns:repeat(auto-fill,minmax(var(--song-line-width),1fr))]"
                            key={group.toString()}
                        >
                            {group.map((song) => (
                                <SongPreview
                                    song={song}
                                    key={song.id}
                                />
                            ))}
                        </div>
                        {groupIndex !== splittedCategorySongs.length - 1 && (
                            <hr
                                className="border-primary/50"
                                style={{ margin: "16px 0" }}
                            />
                        )}
                    </Fragment>
                ))}
            </div>
            <span className="mx-auto md:mr-0 text-gray-400">{`${categorySongs.length} songs, ${categorySongsDuration} min`}</span>
        </Fragment>
    );
};
