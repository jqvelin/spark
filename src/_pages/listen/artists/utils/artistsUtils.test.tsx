import { Song } from "@/shared/api";
import { act, render, renderHook, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";

import { useSplitSongsIntoPages } from "./useSplitSongsIntoPages";

const testSongs: Song[] = Array.from({ length: 40 }).map((_, index) => ({
    id: "test" + index,
    title: "title" + index,
    artist: "artist" + index,
    duration: "01:00"
}));

describe("useSplitSongsIntoPages", () => {
    test("returns correct initial values", () => {
        const { result } = renderHook(() => useSplitSongsIntoPages(testSongs));
        expect(result.current.isFirstPageReached).toBe(true);
        expect(result.current.isLastPageReached).toBe(false);
        expect(result.current.pageOrder).toBe(1);
        expect(result.current.page).toEqual(testSongs.slice(0, 10));
    });

    test("returns one page for less than 10 songs", () => {
        const { result } = renderHook(() =>
            useSplitSongsIntoPages(testSongs.slice(0, 10))
        );
        render(<div ref={result.current.containerRef}></div>);
        result.current.toNextPage();
        expect(result.current.isLastPageReached).toBe(true);
    });

    test("returns correct values for more than 10 pages", () => {
        const { result } = renderHook(() => useSplitSongsIntoPages(testSongs));
        render(<div ref={result.current.containerRef}></div>);
        result.current.toPrevPage();
        expect(result.current.isFirstPageReached).toBe(true);
    });
});
