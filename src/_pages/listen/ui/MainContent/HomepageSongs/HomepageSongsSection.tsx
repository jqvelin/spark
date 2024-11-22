import { getHomepageSongs } from "@/shared/api";

import { SongsCategory } from "../SongsCategory/SongsCategory";

export const HomepageSongsSection = async () => {
    const homepageSongs = await getHomepageSongs();
    return (
        <section className="flex flex-wrap items-start gap-8">
            <SongsCategory
                title="Fresh songs"
                songs={homepageSongs.fresh}
                link="fresh"
                className="mx-auto"
            />
            <SongsCategory
                title="Today's hits"
                songs={homepageSongs.bestOfToday}
                link="best-of-today"
                className="mx-auto"
            />
            <SongsCategory
                title="Trending worldwide"
                songs={homepageSongs.trendingWorldwide}
                link="trending-worldwide"
                className="mx-auto"
            />
            <SongsCategory
                title="Trending in Russia"
                songs={homepageSongs.trendingRussia}
                link="trending-russia"
                className="mx-auto"
            />
        </section>
    );
};
