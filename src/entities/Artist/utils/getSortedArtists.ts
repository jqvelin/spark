import { Artist } from "@/shared/api";

export const getSortedArtists = (artists: Artist[]) => {
    const ruCollator = new Intl.Collator("ru-RU");
    return artists.toSorted((a, b) => {
        if (a.imageSrc && !b.imageSrc) {
            return -1;
        } else if (!a.imageSrc && b.imageSrc) {
            return 1;
        } else {
            return ruCollator.compare(a.name, b.name);
        }
    });
};
