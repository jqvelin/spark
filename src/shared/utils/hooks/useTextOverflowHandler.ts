import { RefObject, useEffect, useRef } from "react";

import { areApproximatelyEqual } from "../areApproximatelyEqual";

const SCROLL_UPDATE_RATE = 20;
const DELAY_BETWEEN_SCROLLS = 2000;

export const useTextOverflowHandler = () => {
    const textElementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const textElement = textElementRef.current as HTMLDivElement;
        if (!textElement) return;

        textElement.addEventListener("mouseover", startAnimation);
        textElement.addEventListener("mouseout", suspendAnimation);

        let textScrollingInterval: ReturnType<typeof setInterval>;
        let backwardScrollTimeout: ReturnType<typeof setTimeout>;

        function startAnimation() {
            let isScrollingBackwards = false;

            const scrollWidth = textElement.scrollWidth;
            const offsetWidth = textElement.offsetWidth;

            if (scrollWidth > offsetWidth) {
                textScrollingInterval = setInterval(() => {
                    const isScrolledUntilEnd = areApproximatelyEqual({
                        threshold: 2,
                        number1: scrollWidth,
                        number2: Math.floor(
                            offsetWidth + textElement.scrollLeft
                        )
                    });
                    if (!isScrolledUntilEnd && !isScrollingBackwards) {
                        textElement.scrollLeft += 1;
                    } else {
                        if (!isScrollingBackwards) {
                            backwardScrollTimeout = setTimeout(() => {
                                isScrollingBackwards = true;
                            }, DELAY_BETWEEN_SCROLLS);
                            return;
                        }
                        if (textElement.scrollLeft !== 0) {
                            textElement.scrollLeft -= 1;
                        } else {
                            backwardScrollTimeout = setTimeout(() => {
                                isScrollingBackwards = false;
                            }, DELAY_BETWEEN_SCROLLS);
                        }
                    }
                }, SCROLL_UPDATE_RATE);
            }
        }

        function suspendAnimation() {
            clearInterval(textScrollingInterval);
            clearTimeout(backwardScrollTimeout);
        }

        return () => {
            textElement.removeEventListener("mouseover", startAnimation);
            textElement.removeEventListener("mouseout", suspendAnimation);

            suspendAnimation();
        };
    }, [textElementRef]);

    return textElementRef;
};
