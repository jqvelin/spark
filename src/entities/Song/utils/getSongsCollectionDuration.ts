import { Song } from "@/shared/api";

export const getSongsCollectionDuration = (songs: Song[]) => {
    const durationInSeconds = songs.reduce((acc, song) => {
        // Song is longer than an hour (duration format hh:mm:ss)
        if (song.duration.length > 5) {
            const [hours, minutes, seconds] = song.duration
                .split(":")
                .map((str) => parseInt(str, 10));
            return acc + hours * 3600 + minutes * 60 + seconds;
        } else {
            const [minutes, seconds] = song.duration
                .split(":")
                .map((str) => parseInt(str, 10));
            return acc + minutes * 60 + seconds;
        }
    }, 0);

    return Math.ceil(durationInSeconds / 60);
};
