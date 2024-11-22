import {
    SongElement,
    getSongsCollectionDuration,
    splitSongsCollectionIntoGroups
} from "@/entities/Song";
import { SongGroups, getHomepageSongs } from "@/shared/api";
import { paths } from "@/shared/routing";
import { redirect } from "next/navigation";
import { Fragment } from "react";

import { getCategoryData } from "../utlis/getCategoryData";

type Props = {
    categoryName: keyof SongGroups;
    categoryLocaleName: string;
    categoryDescription?: string;
};

export const ExtendedCategoriesPage = async ({
    params
}: {
    params: { categoryName: string };
}) => {
    const { requestName, displayedName, description } =
        getCategoryData(params.categoryName) ?? redirect(paths.listen.root);
    const { [requestName]: categorySongs } = await getHomepageSongs();
    const splittedCategorySongs = splitSongsCollectionIntoGroups(categorySongs);
    const { songsCount, duration } = getSongsCollectionDuration(categorySongs);
    return (
        <Fragment>
            <div className="mb-4">
                <h1 className="text-primary-darker font-bold text-2xl md:text-3xl lg:text-4xl">
                    {displayedName}
                </h1>
                {description && (
                    <span className="text-lg md:text-xl lg:text-2xl text-gray-400">
                        {description}
                    </span>
                )}
            </div>
            <div className="space-y-2 mx-auto w-full mb-2">
                {splittedCategorySongs.map((group, groupIndex) => (
                    <Fragment key={group.toString()}>
                        <div className="grid place-items-center w-full gap-2 [grid-template-columns:repeat(auto-fill,minmax(var(--song-element-width),1fr))]">
                            {group.map((song) => (
                                <SongElement
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
            <span className="mx-auto md:mr-0 text-gray-400">
                {songsCount}, {duration}
            </span>
        </Fragment>
    );
};
