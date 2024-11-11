import { getResolvedComponent } from "@/shared/utils";
import { render, screen } from "@testing-library/react";
import { useRouter, useSearchParams } from "next/navigation";
import { describe, expect, test, vi } from "vitest";
import { Mock } from "vitest";

import { Header } from "./Header";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox/SearchBox";

vi.mock("next/navigation", () => ({
    useRouter: vi.fn(),
    useSearchParams: vi.fn()
}));

vi.mock("@/features/sign-in", () => {
    return {
        auth: vi.fn()
    };
});

describe("Header", () => {
    const pushMock = vi.fn();

    (useRouter as Mock).mockReturnValue({
        push: pushMock
    });

    // Mock useSearchParams to return an object with a 'get' function
    (useSearchParams as Mock).mockReturnValue({
        get: vi.fn((param) => (param === "search" ? "initial-query" : null))
    });

    test("renders Profile correctly", async () => {
        render(<Profile />);
        expect(screen.getByTitle("")).toBeDefined();
    });

    test("renders SearchBox correctly", () => {
        render(<SearchBox />);
        expect(screen.getByRole("textbox")).toBeDefined();
    });
});
