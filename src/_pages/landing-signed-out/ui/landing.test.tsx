import { getResolvedComponent } from "@/shared/utils";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { LandingSignedOut } from "./LandingSignedOut";

describe("landing-signed-out", () => {
    test("renders correctly", async () => {
        const LandingSignedOutComponent = await getResolvedComponent(
            LandingSignedOut,
            {}
        );
        render(<LandingSignedOutComponent />);

        const pageHeading = screen.getByRole("heading", { level: 1 });
        expect(pageHeading).toBeDefined();

        const signInMethods = screen.getAllByRole("button");
        expect(signInMethods.length).toBeGreaterThan(0);
    });
});
