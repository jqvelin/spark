"use client";

import { FoldersIcon, HomeIcon } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="flex h-[var(--footer-height)] items-center gap-4 bg-white md:hidden">
            <button className="flex flex-1 justify-center border-t-2 border-primary py-2 text-primary">
                <HomeIcon />
            </button>
            <button className="flex flex-1 justify-center py-2 text-primary">
                <FoldersIcon />
            </button>
        </footer>
    );
};
