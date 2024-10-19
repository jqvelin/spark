import { Album } from "@/shared/api";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { AlbumPreviewCard } from "./AlbumPreviewCard";

const testAlbum: Album = {
    id: "test",
    title: "Album"
};

describe("AlbumPreviewCard", () => {
    test("renders correctly", () => {
        render(<AlbumPreviewCard album={testAlbum} />);
        expect(screen.getByText("Album")).toBeDefined();
    });
});
