import { Artist } from "@/shared/api";
import { describe, expect, test } from "vitest";

import { getSortedArtists } from "./getSortedArtists";

const artists: Artist[] = [
    { id: "test1", name: "artist3", songs: [] },
    { id: "test2", name: "artist1", songs: [] },
    { id: "test3", name: "artist2", songs: [], imageSrc: "image" }
];

describe("getSortedArtists", () => {
    test("returns empty array if collection is empty", () => {
        expect(getSortedArtists([])).toEqual([]);
    });

    test("returns artists with no images sorted alphabetically", () => {
        expect(getSortedArtists(artists.slice(0, 2))).toEqual(
            artists.slice(0, 2).sort((a, b) => a.name.localeCompare(b.name))
        );
    });

    test("places artists with image first", () => {
        expect(getSortedArtists(artists)).toEqual([
            { id: "test3", name: "artist2", songs: [], imageSrc: "image" },
            { id: "test2", name: "artist1", songs: [] },
            { id: "test1", name: "artist3", songs: [] }
        ]);
    });
});
