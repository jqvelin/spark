// requires connection to database
import { getResolvedComponent } from "@/shared/utils";
import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { AlbumsPage } from "./AlbumsPage";

describe("AlbumsPage", () => {
    test("renders correctly", async () => {
        const AlbumsPageComponent = await getResolvedComponent(AlbumsPage, {
            albumId: "1430"
        });
        render(<AlbumsPageComponent />);
        const titleElement = screen.getByRole("heading");
        const artistElement = screen.getByRole("link");

        await waitFor(() => expect(titleElement.textContent).toBe("143"));
        await waitFor(() =>
            expect(artistElement.textContent).toBe("Katy Perry")
        );
    });
});
