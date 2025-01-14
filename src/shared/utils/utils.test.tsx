import {
    act,
    render,
    renderHook,
    screen,
    waitFor
} from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { areApproximatelyEqual } from "./areApproximatelyEqual";
import { cloneComponents } from "./cloneComponents";
import { composeComponents } from "./composeComponents";
import { getResolvedComponent } from "./getResolvedComponent";
import { useCarousel } from "./hooks";

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
        act(() => result.current.scrollForwards());
        expect(container?.scrollLeft).toBe(SCROLL_BY);
        await waitFor(() =>
            expect(result.current.ableToScrollBackwards).toBe(true)
        );
    });

    test("correctly scrolls backwards and handles state", async () => {
        act(() => result.current.scrollBackwards());
        expect(container?.scrollLeft).toBe(0);
        await waitFor(() =>
            expect(result.current.ableToScrollBackwards).toBe(false)
        );
    });
});

describe("getResolvedComponent", () => {
    test("correctly resolves server components", async () => {
        const ServerComponent = async () => {
            await new Promise((r) => setTimeout(r, 1000));
            return <h1>Server component is successfully rendered</h1>;
        };

        const ResolvedComponent = await getResolvedComponent(
            ServerComponent,
            {}
        );
        render(<ResolvedComponent />);
        const textElement = screen.getByText(
            "Server component is successfully rendered"
        );
        expect(textElement).toBeDefined();
    });
});

describe("cloneComponents", () => {
    test("correctly handles negative components number", () => {
        const components = cloneComponents(-1, () => <div />);
        expect(components).toHaveLength(0);
    });

    test("correctly handles 0 components number", () => {
        const components = cloneComponents(0, () => <div />);
        expect(components).toHaveLength(0);
    });

    test("correctly clones components", () => {
        const components = cloneComponents(3, () => <div />);
        expect(components).toHaveLength(3);
        components.forEach((component, index) =>
            expect(component.key).toBe(index.toString())
        );
    });
});

describe("areApproximatelyEqual", () => {
    test("correctly compares numbers", () => {
        expect(
            areApproximatelyEqual({ number1: 0, number2: 0, threshold: 2 })
        ).toBe(true);
        expect(
            areApproximatelyEqual({ number1: 0, number2: 1, threshold: 2 })
        ).toBe(true);
        expect(
            areApproximatelyEqual({ number1: 3, number2: 0, threshold: 2 })
        ).toBe(false);
    });
});

describe("composeComponents", () => {
    test("correctly composes components", () => {
        const InnerComponent = ({
            children
        }: {
            children: React.ReactNode;
        }) => {
            return <div>{children}</div>;
        };

        const OuterComponent = ({
            children
        }: {
            children: React.ReactNode;
        }) => {
            return <div>{children}</div>;
        };

        const ComposedComponent = composeComponents(
            InnerComponent,
            OuterComponent
        );
        render(<ComposedComponent>Test</ComposedComponent>);
        expect(screen.getByText("Test")).toBeDefined();
    });
});

// describe("useRunningLine", () => {
//     test("correctly scrolls text", async () => {
//         const { result } = renderHook(useRunningLine);

//         render(<div style={{width: "100px", whiteSpace: "nowrap", overflow: "hidden"}} data-testid={1} ref={result.current}>
//             <span>Text that should flow over</span>
//         </div>)
//         const wrapper = screen.getByTestId(1)
//         fireEvent.mouseOver(wrapper)
//         await waitFor(() => expect(wrapper.scrollLeft).toBeGreaterThan(0))
//     });
// })
