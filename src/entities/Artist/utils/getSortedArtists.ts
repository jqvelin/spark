import { Artist } from "@/shared/api";

export const getSortedArtists = (artists: Artist[]) => {
    return artists.toSorted((a, b) => {
        if (a.imageSrc && !b.imageSrc) {
            return -1;
        } else if (!a.imageSrc && b.imageSrc) {
            return 1;
        } else {
            return a.name.localeCompare(b.name);
        }
    });
};
