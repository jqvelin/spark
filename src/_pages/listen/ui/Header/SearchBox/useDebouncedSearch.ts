import { paths } from "@/shared/routing";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { set } from "zod";

export const useDebouncedSearch = (delayMs = 1000) => {
    const [isSearching, setIsSearching] = useState(false);
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

        if (searchQuery === "") {
            clearUrl();
            return;
        }

        setIsSearching(true);

        timeout.current = setTimeout(() => {
            if (!searchQuery) clearUrl();
            else {
                router.push(`${paths.listen.root}?search=${searchQuery}`);
                setIsSearching(false);
            }
        }, delayMs);
        return () => {
            timeout.current && clearTimeout(timeout.current);
        };
    }, [searchQuery]);

    // Remove '?search=' from url if no search query provided
    const clearUrl = () => {
        router.push(paths.listen.root);
    };

    return {
        isSearching,
        currentSearchQuery: searchQuery,
        applySearchQuery: (nextSearchQuery: string) =>
            setSearchQuery(nextSearchQuery)
    };
};
