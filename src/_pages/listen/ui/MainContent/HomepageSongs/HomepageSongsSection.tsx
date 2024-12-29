import { SongGroups } from "@/shared/api";

import { SongsCategory } from "../SongsCategory/SongsCategory";

export const HomepageSongsSection = ({
    songGroups
}: {
    songGroups: SongGroups;
}) => {
    return (
        <section className="flex flex-wrap items-start gap-8">
            <SongsCategory
                title="Fresh songs"
                songs={songGroups.fresh}
                link="fresh"
                className="mx-auto"
            />
            <SongsCategory
                title="Today's hits"
                songs={songGroups.bestOfToday}
                link="best-of-today"
                className="mx-auto"
            />
            <SongsCategory
                title="Trending worldwide"
                songs={songGroups.trendingWorldwide}
                link="trending-worldwide"
                className="mx-auto"
            />
            <SongsCategory
                title="Trending in Russia"
                songs={songGroups.trendingRussia}
                link="trending-russia"
                className="mx-auto"
            />
        </section>
    );
};
