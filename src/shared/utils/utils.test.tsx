import { renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { useCarousel } from "./hooks";

describe("useCarousel", () => {
    const { result } = renderHook(() => useCarousel());

    test("returns correct initial value", () => {
        expect(result.current.ableToScrollBackwards).toEqual(false);
        expect(result.current.ableToScrollForwards).toEqual(true);
    });
});
