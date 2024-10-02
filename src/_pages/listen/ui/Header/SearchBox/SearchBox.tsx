"use client";

import { Input } from "@/shared/components";
import { SearchIcon } from "lucide-react";

import { useDebouncedSearch } from "./useDebouncedSearch";

export const SearchBox = () => {
    const { isSearching, currentSearchQuery, applySearchQuery } =
        useDebouncedSearch();
    return (
        <search className="relative ml-auto w-1/2 max-w-[300px]">
            <Input
                className={`pr-[28px] ${isSearching && "animate-pulse"}`}
                value={currentSearchQuery}
                onChange={(e) => applySearchQuery(e.target.value)}
            />
            <SearchIcon className="absolute right-2 top-1/2 aspect-square h-[20px] -translate-y-1/2 text-primary" />
        </search>
    );
};
