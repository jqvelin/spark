import { getResolvedComponent } from "@/shared/utils";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { FreshAlbumsSection } from "./FreshAlbumsSection";

describe("FreshAlbums", () => {
    test("renders correctly", async () => {
        const FreshAlbumsComponent = await getResolvedComponent(
            FreshAlbumsSection,
            {}
        );
        render(<FreshAlbumsComponent />);

        const componentTitleElement = screen.getByText("Fresh albums");
        const albumCovers = screen.getAllByRole("img");
        expect(componentTitleElement).toBeDefined();
        expect(albumCovers.length).toBeGreaterThan(0);
    });
});
