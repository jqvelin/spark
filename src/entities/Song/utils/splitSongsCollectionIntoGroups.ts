import { Song } from "@/shared/api";

export const splitSongsCollectionIntoGroups = (
    songs: Song[],
    preferredGroupSize = 10
) => {
    const groups: Song[][] = [];
    let chunk: Song[] = [];
    for (let i = 0; i < songs.length; i++) {
        chunk.push(songs[i]);
        if ((i + 1) % preferredGroupSize === 0 || i === songs.length - 1) {
            groups.push(chunk);
            chunk = [];
        }
    }

    return groups;
};
