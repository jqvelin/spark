import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { Loader } from "./Loader";

describe("Loader", () => {
    test("renders correctly", async () => {
        render(<Loader data-testid="loader" />);
        expect(screen.getByTestId("loader")).toBeDefined();
    });
});
