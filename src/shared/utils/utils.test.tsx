import {
    fireEvent,
    render,
    renderHook,
    screen,
    waitFor
} from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { useCarousel, useTextOverflowHandler } from "./hooks";

describe("useCarousel", async () => {
    const SCROLL_BY = 100;
    const { result } = renderHook(() => useCarousel(SCROLL_BY));
    render(
        <ul
            style={{
                display: "flex",
                alignItems: "center",
                height: "100px",
                width: `${SCROLL_BY * 2.5}px`,
                overflow: "hidden"
            }}
            data-testid={0}
            ref={result.current.carouselRef}
        >
            <ul style={{ height: "100px", width: `${SCROLL_BY}px` }}>Item 1</ul>
            <ul style={{ height: "100px", width: `${SCROLL_BY}px` }}>Item 2</ul>
            <ul style={{ height: "100px", width: `${SCROLL_BY}px` }}>Item 3</ul>
            <ul style={{ height: "100px", width: `${SCROLL_BY}px` }}>Item 4</ul>
            <ul style={{ height: "100px", width: `${SCROLL_BY}px` }}>Item 5</ul>
        </ul>
    );
    const container = screen.getByTestId(0);

    test("returns correct initial value", () => {
        expect(result.current.ableToScrollBackwards).toBe(false);
        expect(result.current.ableToScrollForwards).toBe(true);
    });

    test("correctly scrolls forwards and handles state", async () => {
        result.current.scrollForwards();
        expect(container?.scrollLeft).toBe(SCROLL_BY);
        await waitFor(() =>
            expect(result.current.ableToScrollBackwards).toBe(true)
        );
    });

    test("correctly scrolls backwards and handles state", async () => {
        result.current.scrollBackwards();
        expect(container?.scrollLeft).toBe(0);
        await waitFor(() =>
            expect(result.current.ableToScrollBackwards).toBe(false)
        );
    });
});

// describe("useTextOverflowHandler", () => {
//     test("correctly scrolls text", async () => {
//         const { result } = renderHook(useTextOverflowHandler);

//         render(<div style={{width: "100px", whiteSpace: "nowrap", overflow: "hidden"}} data-testid={1} ref={result.current}>
//             <span>Text that should flow over</span>
//         </div>)
//         const wrapper = screen.getByTestId(1)
//         fireEvent.mouseOver(wrapper)
//         await waitFor(() => expect(wrapper.scrollLeft).toBeGreaterThan(0))
//     });
// })
