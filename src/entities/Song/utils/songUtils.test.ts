import { Song } from "@/shared/api";
import { describe, expect, test } from "vitest";

import { getSongsCollectionDuration } from "./getSongsCollectionDuration";
import { splitSongsCollectionIntoGroups } from "./splitSongsCollectionIntoGroups";

const shortSongsCollection: Song[] = [
    { id: "test1", artist: "artist", title: "title", duration: "01:00" },
    { id: "test2", artist: "artist", title: "title", duration: "00:59" },
    { id: "test3", artist: "artist", title: "title", duration: "01:00" },
    { id: "test4", artist: "artist", title: "title", duration: "01:00" },
    { id: "test5", artist: "artist", title: "title", duration: "00:59" },
    { id: "test6", artist: "artist", title: "title", duration: "01:00" },
    { id: "test7", artist: "artist", title: "title", duration: "01:00" },
    { id: "test8", artist: "artist", title: "title", duration: "00:59" },
    { id: "test9", artist: "artist", title: "title", duration: "01:00" }
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

describe("getSongsCollectionDuration", () => {
    test("returns 0 if collection is empty", () => {
        expect(getSongsCollectionDuration([])).toBe(0);
    });

    test("correctly calculates and rounds short songs' total duration", () => {
        expect(getSongsCollectionDuration(shortSongsCollection)).toBe(9);
    });

    test("correctly calculates and rounds long songs' total duration", () => {
        expect(getSongsCollectionDuration(longSongsCollection)).toBe(180);
    });

    test("correctly calculates and rounds songs with different duration types' total duration", () => {
        expect(getSongsCollectionDuration(noLeadingZerosSongsCollection)).toBe(
            68
        );
    });
});

describe("splitSongsCollectionIntoGroups", () => {
    test("returns empty array if collection is empty", () => {
        expect(splitSongsCollectionIntoGroups([])).toEqual([]);
    });

    test("correctly splits songs into equal groups", () => {
        expect(splitSongsCollectionIntoGroups(shortSongsCollection, 3)).toEqual(
            [
                [
                    {
                        id: "test1",
                        artist: "artist",
                        title: "title",
                        duration: "01:00"
                    },
                    {
                        id: "test2",
                        artist: "artist",
                        title: "title",
                        duration: "00:59"
                    },
                    {
                        id: "test3",
                        artist: "artist",
                        title: "title",
                        duration: "01:00"
                    }
                ],
                [
                    {
                        id: "test4",
                        artist: "artist",
                        title: "title",
                        duration: "01:00"
                    },
                    {
                        id: "test5",
                        artist: "artist",
                        title: "title",
                        duration: "00:59"
                    },
                    {
                        id: "test6",
                        artist: "artist",
                        title: "title",
                        duration: "01:00"
                    }
                ],
                [
                    {
                        id: "test7",
                        artist: "artist",
                        title: "title",
                        duration: "01:00"
                    },
                    {
                        id: "test8",
                        artist: "artist",
                        title: "title",
                        duration: "00:59"
                    },
                    {
                        id: "test9",
                        artist: "artist",
                        title: "title",
                        duration: "01:00"
                    }
                ]
            ]
        );
    });

    test("correctly splits songs into unequal groups", () => {
        expect(splitSongsCollectionIntoGroups(shortSongsCollection, 4)).toEqual(
            [
                [
                    {
                        id: "test1",
                        artist: "artist",
                        title: "title",
                        duration: "01:00"
                    },
                    {
                        id: "test2",
                        artist: "artist",
                        title: "title",
                        duration: "00:59"
                    },
                    {
                        id: "test3",
                        artist: "artist",
                        title: "title",
                        duration: "01:00"
                    },
                    {
                        id: "test4",
                        artist: "artist",
                        title: "title",
                        duration: "01:00"
                    }
                ],
                [
                    {
                        id: "test5",
                        artist: "artist",
                        title: "title",
                        duration: "00:59"
                    },
                    {
                        id: "test6",
                        artist: "artist",
                        title: "title",
                        duration: "01:00"
                    },
                    {
                        id: "test7",
                        artist: "artist",
                        title: "title",
                        duration: "01:00"
                    },
                    {
                        id: "test8",
                        artist: "artist",
                        title: "title",
                        duration: "00:59"
                    }
                ],
                [
                    {
                        id: "test9",
                        artist: "artist",
                        title: "title",
                        duration: "01:00"
                    }
                ]
            ]
        );
    });

    test("returns nested array when prefferedGroupSize === songsCollection.length", () => {
        expect(splitSongsCollectionIntoGroups(shortSongsCollection, 9)).toEqual(
            [shortSongsCollection]
        );
    });
});
