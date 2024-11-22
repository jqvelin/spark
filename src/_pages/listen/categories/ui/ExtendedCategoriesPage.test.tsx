import { getResolvedComponent } from "@/shared/utils";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { ExtendedCategoriesPage } from "./ExtendedCategoriesPage";

describe("ExtendedCategoriesPage", () => {
    test("renders correctly", async () => {
        const ExtendedCategoriesPageComponent = await getResolvedComponent(
            ExtendedCategoriesPage,
            {
                categoryName: "fresh",
                categoryLocaleName: "Fresh songs",
                categoryDescription: "Hottest newbies out"
            }
        );
        render(<ExtendedCategoriesPageComponent />);

        const titleElement = screen.getByRole("heading", { level: 1 });
        const descriptionElement = screen.getByText("Hottest newbies out");
        expect(titleElement.textContent).toBe("Fresh songs");
        expect(descriptionElement).toBeDefined();
    });
});
