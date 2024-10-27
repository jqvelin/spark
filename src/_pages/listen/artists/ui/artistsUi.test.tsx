import { Artist } from "@/shared/api";
import "@/shared/mocks/intersectionObserverMock";
import { getResolvedComponent } from "@/shared/utils";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { ArtistPage } from "./ArtistPage";
import { ArtistPageSongsSection } from "./ArtistPageSongsSection";

const testArtist: Artist = {
    id: "test",
    name: "Artist",
    songs: [
        {
            id: "testSong",
            title: "Song",
            artist: "Artist",
            duration: "03:00"
        }
    ]
};

describe("ArtistPageSongsSection", () => {
    test("renders correctly", () => {
        render(<ArtistPageSongsSection artist={testArtist} />);
        const songTitleElement = screen.getByText("Song");
        const controlButtons = screen.getAllByRole("button");
        expect(songTitleElement).toBeDefined();
        controlButtons.forEach((btn) => {
            expect((btn as HTMLButtonElement).disabled).toBe(true);
        });
    });
});

describe("ArtistPage", { timeout: 10000 }, async () => {
    test("renders correctly", async () => {
        const ArtistPageComponent = await getResolvedComponent(ArtistPage, {
            artistId: "626"
        });
        render(<ArtistPageComponent />);
        const artistTitleElement = screen.getByRole("heading", { level: 1 });
        expect(artistTitleElement.textContent).toBe("Skrillex");
    });

    test(
        "doesn't display empty albums section",
        { timeout: 10000 },
        async () => {
            const ArtistPageComponent = await getResolvedComponent(ArtistPage, {
                artistId: "28385"
            });
            render(<ArtistPageComponent />);
            const albumSectionTitles = screen.queryAllByText("Albums");
            // one of them was mountet by previous test with artistId 626
            expect(albumSectionTitles.length).toBe(1);
        }
    );
});
