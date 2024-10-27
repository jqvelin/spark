// requires connection to database
import { getResolvedComponent } from "@/shared/utils";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { SearchResults } from "./SearchResults";

describe("SearchResults", () => {
    test("returns 404 when nothing is found", async () => {
        const SearchResultsComponent = await getResolvedComponent(
            SearchResults,
            { query: "0.[-)#13" }
        );
        render(<SearchResultsComponent />);
        expect(screen.getByText(/Nothing found/)).toBeDefined();
    });

    test("returns correct results", { timeout: 10000 }, async () => {
        const SearchResultsComponent = await getResolvedComponent(
            SearchResults,
            { query: "Yeat" }
        );
        render(<SearchResultsComponent />);
        expect(screen.queryAllByText(/Yeat/).length).toBeGreaterThan(0);
    });

    test("renders extra results as collapsed", { timeout: 10000 }, async () => {
        const SearchResultsComponent = await getResolvedComponent(
            SearchResults,
            { query: "a" }
        );

        render(<SearchResultsComponent />);
        const expandButtons = screen.getAllByRole("button");
        expect(expandButtons.length).toBeGreaterThan(0);
    });
});
