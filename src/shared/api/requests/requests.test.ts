import { describe, expect, test } from "vitest";

import { getAlbumDataById } from "./getAlbumDataById";
import { getArtistDataById } from "./getArtistDataById";
import { getHomepageAlbums } from "./getHomepageAlbums";
import { getHomepageSongs } from "./getHomepageSongs";
import { getSearchResults } from "./getSearchResults";

describe(
    "api requests",
    () => {
        test("return correct data", async () => {
            const requests = await Promise.all([
                getAlbumDataById("1430"),
                getArtistDataById("76"),
                getHomepageAlbums(),
                getHomepageSongs(),
                getSearchResults("charli xcx")
            ]);

            expect(requests[0].title).toBe("143");

            expect(requests[1].name).toBe("Nirvana");

            expect(requests[2][0].title).not.toBe("");

            expect(requests[3]).not.toBe({
                fresh: [],
                bestOfToday: [],
                trendingGlobal: [],
                trendingRussia: []
            });

            expect(
                requests[4].albums.find((album) => album.id === "1286")?.title
            ).toBe("brat");
        });
    },
    { timeout: 10000 }
);
