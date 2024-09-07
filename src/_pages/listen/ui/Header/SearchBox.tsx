import { Input } from "@/shared/components/ui/input";
import { SearchIcon } from "lucide-react";

export const SearchBox = () => {
    return (
        <search className="relative ml-auto w-1/2 max-w-[300px]">
            <Input className="text-primary shadow-sm shadow-primary" />
            <SearchIcon className="absolute right-2 top-1/2 h-[20px] -translate-y-1/2 text-primary" />
        </search>
    );
};
