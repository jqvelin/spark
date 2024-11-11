import { useLayoutEffect, useRef, useState } from "react";

export const useCarousel = (scrollBy = 100) => {
    const carouselRef = useRef<HTMLUListElement>(null);

    const [ableToScroll, setAbleToScroll] = useState({
        backwards: false,
        forwards: true
    });

    const handleScroll = (direction: "backwards" | "forwards" = "forwards") => {
        if (!carouselRef.current) return;
        const addToScroll = direction === "forwards" ? scrollBy : -scrollBy;
        const nextScrollLeft = (carouselRef.current!.scrollLeft += addToScroll);

        carouselRef.current.scrollLeft = nextScrollLeft;

        if (nextScrollLeft <= 0) {
            setAbleToScroll({
                backwards: false,
                forwards: true
            });
        } else if (
            nextScrollLeft >=
            carouselRef.current!.scrollWidth - carouselRef.current!.clientWidth
        ) {
            setAbleToScroll({
                backwards: true,
                forwards: false
            });
        } else {
            setAbleToScroll({
                backwards: true,
                forwards: true
            });
        }
    };

    const handlePointerDown = (e: PointerEvent) => {
        if (!carouselRef.current) return;
        const startX = e.clientX;
        carouselRef.current.addEventListener("pointerup", handlePointerUp);
        function handlePointerUp(e: PointerEvent) {
            if (!carouselRef.current) return;
            const endX = e.clientX;
            if (endX > startX) {
                handleScroll("backwards");
            } else if (endX < startX) {
                handleScroll("forwards");
            }
            carouselRef.current.removeEventListener(
                "pointerup",
                handlePointerUp
            );
        }
    };

    const calculateCarouselWidth = () => {
        if (!carouselRef.current) return;
        const minWidth =
            Math.floor(carouselRef.current.clientWidth / scrollBy) * scrollBy;
        carouselRef.current.style.width = minWidth + "px";
    };

    useLayoutEffect(() => {
        carouselRef.current?.addEventListener("pointerdown", handlePointerDown);

        calculateCarouselWidth();
        window.addEventListener("resize", calculateCarouselWidth);

        return () => {
            carouselRef.current?.removeEventListener(
                "pointerdown",
                handlePointerDown
            );
            window.removeEventListener("resize", calculateCarouselWidth);
        };
    }, [calculateCarouselWidth, handlePointerDown]);

    return {
        carouselRef,
        ableToScrollBackwards: ableToScroll.backwards,
        scrollBackwards: () => handleScroll("backwards"),
        ableToScrollForwards: ableToScroll.forwards,
        scrollForwards: () => handleScroll("forwards")
    };
};
