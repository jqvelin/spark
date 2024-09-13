import { useEffect, useRef, useState } from "react";

export const useCarousel = (scrollBy = 100) => {
    const carouselRef = useRef<HTMLElement>(null);
    const [ableToScroll, setAbleToScroll] = useState({
        backwards: false,
        forwards: true
    });

    const handleScroll = (direction: "backwards" | "forwards" = "forwards") => {
        const carousel = carouselRef.current as HTMLElement;
        const addToScroll = direction === "forwards" ? scrollBy : -scrollBy;
        const nextScrollLeft = (carousel.scrollLeft += addToScroll);

        carousel.scrollLeft = nextScrollLeft;

        if (nextScrollLeft <= 0) {
            setAbleToScroll({
                backwards: false,
                forwards: true
            });
        } else if (
            nextScrollLeft >=
            carousel.scrollWidth - carousel.clientWidth
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

    function handlePointerDown(e: PointerEvent) {
        const carousel = carouselRef.current as HTMLElement;
        carousel.setPointerCapture(e.pointerId);
        const startX = e.clientX;
        carousel.addEventListener("pointerup", handlePointerUp);
        function handlePointerUp(e: PointerEvent) {
            const endX = e.clientX;
            console.log(`END X: ${endX}, START X: ${startX}`);
            handleScroll(endX > startX ? "backwards" : "forwards");
            carousel.removeEventListener("pointerup", handlePointerUp);
        }
    }

    useEffect(() => {
        const carousel = carouselRef.current as HTMLElement;
        carousel.addEventListener("pointerdown", handlePointerDown);
        return () =>
            carousel.removeEventListener("pointerdown", handlePointerDown);
    }, []);

    return {
        carouselRef,
        ableToScrollBackwards: ableToScroll.backwards,
        scrollBackwards: () => handleScroll("backwards"),
        ableToScrollForwards: ableToScroll.forwards,
        scrollForwards: () => handleScroll()
    };
};
