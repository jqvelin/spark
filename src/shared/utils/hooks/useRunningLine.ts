import { useEffect, useRef } from "react";

const PX_PER_SECOND = 50;

export const useRunningLine = () => {
    const textElementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const textElement = textElementRef.current as HTMLDivElement;
        if (!textElement) return;

        const { scrollWidth, clientWidth } = textElement;
        if (scrollWidth === clientWidth) return;

        const clippedPartWidth = scrollWidth - clientWidth;
        textElement.style.transition = `transform ${clippedPartWidth / PX_PER_SECOND}s linear`;
        textElement.addEventListener("mouseover", startAnimation);

        function startAnimation() {
            const translateX = new DOMMatrix(
                window
                    .getComputedStyle(textElement)
                    .getPropertyValue("transform")
            ).m41;

            if (Math.abs(translateX) !== clippedPartWidth) {
                textElement.style.transform = `translateX(${-clippedPartWidth}px)`;
            } else {
                textElement.style.transform = `translateX(0)`;
            }
        }

        return () => {
            textElement.removeEventListener("mouseover", startAnimation);
        };
    }, []);

    return textElementRef;
};
