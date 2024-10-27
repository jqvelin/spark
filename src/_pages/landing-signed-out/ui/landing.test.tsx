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
        expect(screen.getByText("Spark")).toBeDefined();
    });

    test("renders correctly", () => {
        expect(screen.getByText("Sign in with")).toBeDefined();
    });

    test("provides correct methods", () => {
        expect(screen.getByText("Google")).toBeDefined();
        expect(screen.getByText("Yandex")).toBeDefined();
    });
});
