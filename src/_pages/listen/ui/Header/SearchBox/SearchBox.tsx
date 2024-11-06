"use client";

import { Input } from "@/shared/components";
import { cn } from "@/shared/components/lib/utils";
import { SearchIcon } from "lucide-react";

import { useDebouncedSearch } from "./useDebouncedSearch";

export const SearchBox = (props: React.ComponentPropsWithoutRef<"div">) => {
    const { currentSearchQuery, applySearchQuery } = useDebouncedSearch();
    return (
        <div
            {...props}
            className={cn("relative w-1/2 max-w-[300px]", props.className)}
        >
            <Input
                className="pr-[28px]"
                value={currentSearchQuery}
                onChange={(e) => applySearchQuery(e.target.value)}
            />
            <SearchIcon className="absolute right-2 top-1/2 aspect-square h-[20px] -translate-y-1/2 text-primary" />
        </div>
    );
};
