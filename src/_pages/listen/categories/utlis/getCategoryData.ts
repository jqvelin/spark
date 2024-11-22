import { SongGroups } from "@/shared/api";

type CategoryData = {
    requestName: keyof SongGroups;
    displayedName: string;
    description?: string;
};

export const getCategoryData = (categoryName: string): CategoryData | null => {
    switch (categoryName) {
        case "fresh":
            return {
                requestName: "fresh",
                displayedName: "Fresh songs",
                description: "Hottest newbies out"
            };
        case "best-of-today":
            return {
                requestName: "bestOfToday",
                displayedName: "Best of today",
                description: "Feel the rhythm"
            };
        case "trending-russia":
            return {
                requestName: "trendingRussia",
                displayedName: "Trending in Russia"
            };
        case "trending-worldwide":
            return {
                requestName: "trendingWorldwide",
                displayedName: "Trending worldwide"
            };
        default:
            return null;
    }
};
