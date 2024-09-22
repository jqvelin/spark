import { useEffect, useRef, useState } from "react";

export const useCarousel = (scrollBy = 100) => {
    const carouselRef = useRef<HTMLElement>(null);
    let carousel: HTMLElement;

    const [carouselWidth, setCarouselWidth] = useState(1000);
    const [ableToScroll, setAbleToScroll] = useState({
        backwards: false,
        forwards: true
    });

    useEffect(() => {
       carousel = carouselRef.current as HTMLElement; 
    }, [])

    const handleScroll = (direction: "backwards" | "forwards" = "forwards") => {
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
        const startX = e.clientX;
        carousel.addEventListener("pointerup", handlePointerUp);
        function handlePointerUp(e: PointerEvent) {
            const endX = e.clientX;
            if (endX > startX) {
                handleScroll("backwards");
            } else if (endX < startX) {
                handleScroll("forwards");
            }
            carousel.removeEventListener("pointerup", handlePointerUp);
        }
    }

    function calculateCarouselWidth() {
        const minWidth = Math.floor(carousel.clientWidth / 100) * 100;
        setCarouselWidth(minWidth);
    }

    useEffect(() => {
        carousel.addEventListener("pointerdown", handlePointerDown);

        calculateCarouselWidth()
        window.addEventListener("resize", calculateCarouselWidth);

        return () =>
            {
                carousel.removeEventListener("pointerdown", handlePointerDown);
                window.removeEventListener("resize", calculateCarouselWidth);
            }
    }, []);

    return {
        carouselRef,
        carouselWidth,
        ableToScrollBackwards: ableToScroll.backwards,
        scrollBackwards: () => handleScroll("backwards"),
        ableToScrollForwards: ableToScroll.forwards,
        scrollForwards: () => handleScroll("forwards")
    };
};
