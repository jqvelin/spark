import { useEffect, useRef, useState } from "react";

export const useCarousel = (scrollBy = 100) => {
    const carouselRef = useRef<HTMLElement>(null);
    const [carouselWidth, setCarouselWidth] = useState(1000);
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
            handleScroll(endX > startX ? "backwards" : "forwards");
            carousel.removeEventListener("pointerup", handlePointerUp);
        }
    }

    useEffect(() => {
        const carousel = carouselRef.current as HTMLElement;
        carousel.addEventListener("pointerdown", handlePointerDown);

        const minWidth = Math.floor(carousel.clientWidth / 100) * 100;
        setCarouselWidth(minWidth);
        console.log(minWidth);

        return () =>
            carousel.removeEventListener("pointerdown", handlePointerDown);
    }, []);

    return {
        carouselRef,
        carouselWidth,
        ableToScrollBackwards: ableToScroll.backwards,
        scrollBackwards: () => handleScroll("backwards"),
        ableToScrollForwards: ableToScroll.forwards,
        scrollForwards: () => handleScroll()
    };
};
