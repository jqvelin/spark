import { Song } from "@/shared/api";
import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { SongElementsPreview } from "../ui/SongElement/SongElementsPreview";
import { getSongsCollectionDuration } from "./getSongsCollectionDuration";
import { splitSongsCollectionIntoGroups } from "./splitSongsCollectionIntoGroups";

const shortSongsCollection: Song[] = [
    { id: "test1", artist: "artist", title: "title1", duration: "01:00" },
    { id: "test2", artist: "artist", title: "title2", duration: "00:59" },
    { id: "test3", artist: "artist", title: "title3", duration: "01:00" },
    { id: "test4", artist: "artist", title: "title4", duration: "01:00" },
    { id: "test5", artist: "artist", title: "title5", duration: "00:59" },
    { id: "test6", artist: "artist", title: "title6", duration: "01:00" },
    { id: "test7", artist: "artist", title: "title7", duration: "01:00" },
    { id: "test8", artist: "artist", title: "title8", duration: "00:59" },
    { id: "test9", artist: "artist", title: "title9", duration: "01:00" }
];

const longSongsCollection: Song[] = [
    { id: "test1", artist: "artist", title: "title", duration: "01:00:00" },
    { id: "test2", artist: "artist", title: "title", duration: "01:00:00" },
    { id: "test3", artist: "artist", title: "title", duration: "59:59" }
];

const noLeadingZerosSongsCollection: Song[] = [
    { id: "test1", artist: "artist", title: "title", duration: "3:23" },
    { id: "test2", artist: "artist", title: "title", duration: "2:04" },
    { id: "test3", artist: "artist", title: "title", duration: "1:01:59" }
];

const SONGS_SHOULD_STAY_FOR = 4000;
const TIME_BEFORE_VISIBILITY_CHANGE = 150 + 350;

describe("useSongElementsPreviewSlides", () => {
    test("renders initial data", () => {
        render(<SongElementsPreview songs={shortSongsCollection} />);
        shortSongsCollection
            .slice(0, 3)
            .forEach((song) =>
                expect(screen.getByText(song.title)).toBeDefined()
            );
    });

    const timeBetweenSongsChange =
        SONGS_SHOULD_STAY_FOR + TIME_BEFORE_VISIBILITY_CHANGE * 2;

    test("songs change after time", async () => {
        shortSongsCollection
            .slice(0, 3)
            .forEach((song) =>
                expect(screen.getByText(song.title)).toBeDefined()
            );

        await waitFor(
            () =>
                shortSongsCollection
                    .slice(3, 6)
                    .forEach((song) =>
                        expect(screen.getByText(song.title)).toBeDefined()
                    ),
            { timeout: timeBetweenSongsChange }
        );
    });
});

describe("getSongsCollectionDuration", () => {
    test("correctly handles empty collections", () => {
        const { songsCount, duration } = getSongsCollectionDuration([]);
        expect(songsCount).toBe("0 songs");
        expect(duration).toBe("0 minutes");
    });

    test("correctly calculates and rounds short songs' total duration", () => {
        const { songsCount, duration } =
            getSongsCollectionDuration(shortSongsCollection);
        expect(songsCount).toBe("9 songs");
        expect(duration).toBe("9 minutes");
    });

    test("correctly calculates and rounds long songs' total duration", () => {
        const { songsCount, duration } =
            getSongsCollectionDuration(longSongsCollection);
        expect(songsCount).toBe("3 songs");
        expect(duration).toBe("180 minutes");
    });

    test("correctly calculates and rounds songs with different duration types' total duration", () => {
        const { songsCount, duration } = getSongsCollectionDuration(
            noLeadingZerosSongsCollection
        );
        expect(songsCount).toBe("3 songs");
        expect(duration).toBe("68 minutes");
    });
});

describe("splitSongsCollectionIntoGroups", () => {
    test("returns empty array if collection is empty", () => {
        expect(splitSongsCollectionIntoGroups([])).toEqual([]);
    });

    test("correctly splits songs into equal groups", () => {
        expect(splitSongsCollectionIntoGroups(shortSongsCollection, 3)).toEqual(
            [
                shortSongsCollection.slice(0, 3),
                shortSongsCollection.slice(3, 6),
                shortSongsCollection.slice(6)
            ]
        );
    });

    test("correctly splits songs into unequal groups", () => {
        expect(splitSongsCollectionIntoGroups(shortSongsCollection, 4)).toEqual(
            [
                shortSongsCollection.slice(0, 4),
                shortSongsCollection.slice(4, 8),
                shortSongsCollection.slice(8)
            ]
        );
    });

    test("returns nested array when prefferedGroupSize === songsCollection.length", () => {
        expect(splitSongsCollectionIntoGroups(shortSongsCollection, 9)).toEqual(
            [shortSongsCollection]
        );
    });
});
