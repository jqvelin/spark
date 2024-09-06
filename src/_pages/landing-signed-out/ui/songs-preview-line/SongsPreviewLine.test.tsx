import { Song } from "@/shared/api";
import { cleanup, render, screen } from "@testing-library/react";
import { afterAll, describe, expect, test } from "vitest";

import {
    SONGS_SHOULD_STAY_FOR,
    TIME_BEFORE_VISIBILITY_CHANGE
} from "../../utils/useSongsPreviewSlides";
import { SongsPreviewLine } from "./SongsPreviewLine";

const testSongs: Song[] = [
    {
        id: "0",
        title: "song 0",
        artist: "test",
        duration: "test"
    },
    {
        id: "1",
        title: "song 1",
        artist: "test",
        duration: "test"
    },
    {
        id: "2",
        title: "song 2",
        artist: "test",
        duration: "test"
    },
    {
        id: "3",
        title: "song 3",
        artist: "test",
        duration: "test"
    },
    {
        id: "4",
        title: "song 4",
        artist: "test",
        duration: "test"
    },
    {
        id: "5",
        title: "song 5",
        artist: "test",
        duration: "test"
    }
];

describe("SongsPreviewLine behavior testing", () => {
    afterAll(() => {
        cleanup();
    });

    test("renders initial data", () => {
        render(<SongsPreviewLine songs={testSongs} />);
        testSongs
            .slice(0, 3)
            .forEach((song) =>
                expect(screen.getByText(song.title)).toBeDefined()
            );
    });

    const timeBetweenSongsChange =
        SONGS_SHOULD_STAY_FOR + TIME_BEFORE_VISIBILITY_CHANGE * 2;

    test(
        "songs change after time",
        async () => {
            testSongs
                .slice(0, 3)
                .forEach((song) =>
                    expect(screen.getByText(song.title)).toBeDefined()
                );

            // Waiting until animation completes
            await new Promise((resolve) =>
                setTimeout(resolve, timeBetweenSongsChange)
            );

            testSongs
                .slice(3, 6)
                .forEach((song) =>
                    expect(screen.getByText(song.title)).toBeDefined()
                );
        },
        { timeout: timeBetweenSongsChange }
    );
});
