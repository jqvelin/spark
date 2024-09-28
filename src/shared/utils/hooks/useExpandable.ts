import { useEffect, useRef, useState } from "react";

export const useExpandable = (maxHeight = 720) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const targetRef = useRef<HTMLDivElement>(null);
    // TODO
    useEffect(() => {
        const target = targetRef.current as HTMLDivElement;
        const mutationObserver = new MutationObserver(() => {});
        const targetHeight = target.scrollHeight;

        if (targetHeight > maxHeight) {
            setIsExpanded(false);
        }
    }, []);

    return {
        targetRef,
        isExpanded
    };
};
