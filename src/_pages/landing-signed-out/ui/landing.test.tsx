import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { ProductDescription } from "./ProductDescription";
import { SignInMethods } from "./SignInMethods";

describe("ProductDescription", () => {
    test("renders correctly", () => {
        render(<ProductDescription />);
        expect(screen.getByText("Spark")).toBeDefined();
    });
});

describe("SignInMethods", () => {
    render(<SignInMethods />);

    test("renders correctly", () => {
        expect(screen.getByText("Sign in with")).toBeDefined();
    });

    test("provides correct methods", () => {
        expect(screen.getByText("Google")).toBeDefined();
        expect(screen.getByText("Yandex")).toBeDefined();
    });
});
