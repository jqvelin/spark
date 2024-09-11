"use client"
import { Input } from "@/shared/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useSearchQuery } from "./useSearchQuery";

export const SearchBox = () => {
    const applySearchQuery = useSearchQuery()
    return (
        <search className="relative ml-auto w-1/2 max-w-[300px]">
            <Input onChange={e => applySearchQuery(e.target.value)} />
            <SearchIcon className="absolute right-2 top-1/2 h-[20px] -translate-y-1/2 text-primary" />
        </search>
    );
};
