"use client";

import { FoldersIcon, HomeIcon } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="flex h-footer items-center gap-4 md:hidden">
            <button className="flex flex-1 justify-center border-t-2 border-primary bg-white py-2 text-primary">
                <HomeIcon />
            </button>
            <button className="flex flex-1 justify-center bg-white py-2 text-primary">
                <FoldersIcon />
            </button>
        </footer>
    );
};
