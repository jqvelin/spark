import { getResolvedComponent } from "@/shared/utils";
import { cleanup, render, screen } from "@testing-library/react";
import { afterAll, describe, expect, test } from "vitest";

import { FreshAlbumsCarouselSkeleton } from "./FreshAlbumsCarouselSkeleton";
import { FreshAlbumsSection } from "./FreshAlbumsSection";

describe("FreshAlbums", () => {
    test("renders correctly", async () => {
        const FreshAlbumsComponent = await getResolvedComponent(
            FreshAlbumsSection,
            {}
        );
        const { unmount } = render(<FreshAlbumsComponent />);

        const componentTitleElement = screen.queryByText("Fresh albums");
        const albumCovers = screen.getAllByRole("img");
        expect(componentTitleElement).toBeDefined();
        expect(albumCovers.length).toBeGreaterThan(0);
        unmount();
    });
});

describe("FreshAlbumsCarouselSkeleton", () => {
    test("renders correctly", () => {
        render(<FreshAlbumsCarouselSkeleton />);
        const titleElement = screen.getByText("Fresh albums");
        expect(titleElement).toBeDefined();
    });
});
