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
        // Debounce
        timeout.current && clearTimeout(timeout.current);

        const url = new URL(window.location.href);
        if (searchQuery === "") {
            clearUrl(url);
            return;
        }

        timeout.current = setTimeout(() => {
            if (!searchQuery) clearUrl(url);
            else {
                router.push(`${url.href.split("?")[0]}?search=${searchQuery}`);
            }
        }, delayMs);
        return () => {
            timeout.current && clearTimeout(timeout.current);
        };
    }, [searchQuery]);

    // Remove '?search=' from url if no search query provided
    const clearUrl = (url: URL) => {
        router.push(`${url.href.split("?")[0]}`);
    };

    return {
        currentSearchQuery: searchQuery,
        applySearchQuery: (nextSearchQuery: string) =>
            setSearchQuery(nextSearchQuery)
    };
};
