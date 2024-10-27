import { getResolvedComponent } from "@/shared/utils";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { HomepageSongsSection } from "./HomepageSongsSection";

describe("HomepageSongsSection", () => {
    test("renders correctly", async () => {
        const HomepageSongsComponent = await getResolvedComponent(
            HomepageSongsSection,
            {}
        );
        const { unmount } = render(<HomepageSongsComponent />);
        expect(screen.getByText("Fresh songs")).toBeDefined();
        unmount();
    });
});
