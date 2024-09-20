import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export const useDebouncedSearch = (delayMs = 1000) => {
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();
    const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Initial params check
    const searchParams = useSearchParams();
    useEffect(() => {
        setSearchQuery(searchParams.get("search") ?? "");
    }, []);

    useEffect(() => {
        timeout.current && clearTimeout(timeout.current);
        timeout.current = setTimeout(() => {
            const url = new URL(window.location.href);

            if (!searchQuery) {
                router.push(`${url.href.split("?")[0]}`);
            } else {
                router.push(`${url.href.split("?")[0]}?search=${searchQuery}`);
            }
        }, delayMs);
        return () => {
            timeout.current && clearTimeout(timeout.current);
        };
    }, [searchQuery]);

    return {
        currentSearchQuery: searchQuery,
        applySearchQuery: (nextSearchQuery: string) =>
            setSearchQuery(nextSearchQuery)
    };
};
