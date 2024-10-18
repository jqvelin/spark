import { SongElement } from "@/entities/Song";
import { cleanup, render, renderHook, screen } from "@testing-library/react";
import { afterAll, describe, expect, test } from "vitest";

import { Song } from "../api";
import { useCarousel } from "./hooks";

describe("useCarousel", () => {
    const { result } = renderHook(() => useCarousel());

    test("returns correct initial value", () => {
        expect(result.current.ableToScrollBackwards).toEqual(false);
        expect(result.current.ableToScrollForwards).toEqual(true);
    });
});

const testSong: Song = {
    id: "test",
    title: "This title does not fit in SongElement's width",
    artist: "test",
    duration: "01:00"
};
