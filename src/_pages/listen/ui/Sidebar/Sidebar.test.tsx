import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { Sidebar } from "./Sidebar";

describe("Sidebar", () => {
    test("renders correctly", () => {
        render(<Sidebar />);
        expect(screen.getAllByRole("link").length).toBeGreaterThan(0);
    });
});
