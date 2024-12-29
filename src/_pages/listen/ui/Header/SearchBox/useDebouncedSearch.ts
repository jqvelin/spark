import { paths } from "@/shared/routing";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

export const useDebouncedSearch = (delayMs = 1000) => {
    const prevSearchParams = useSearchParams();
    const [query, setQuery] = useState(prevSearchParams.get("search") ?? "");

    const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
    const pathname = usePathname();
    const router = useRouter();

    const searchParams = new URLSearchParams(prevSearchParams);

    const search = useCallback(() => {
        if (timeout.current) clearTimeout(timeout.current);
        if (query === "") return;

        searchParams.set("search", query);
        router.push(`${paths.listen.root}?${searchParams}`);
    }, [query]);

    useEffect(() => {
        if (timeout.current) clearTimeout(timeout.current);
        timeout.current = setTimeout(() => {
            if (query !== "") {
                search();
            } else {
                router.push(pathname);
            }
        }, delayMs);
    }, [query]);

    return { query, setQuery, forceSearch: search };
};
