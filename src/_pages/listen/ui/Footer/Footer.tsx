"use client";

import { paths } from "@/shared/routing";
import { FoldersIcon, HomeIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Footer = () => {
    const pathname = usePathname();
    return (
        <footer className="flex h-footer items-center gap-4 md:hidden">
            <Link
                href={paths.listen.root}
                className={`flex flex-1 justify-center border-t-2 ${pathname === paths.listen.root ? "border-primary" : "border-transparent"} bg-white py-2 text-primary`}
            >
                <HomeIcon />
            </Link>
            <Link
                href={paths.listen.playlists}
                className={`flex flex-1 justify-center border-t-2 ${pathname === paths.listen.playlists ? "border-primary" : "border-transparent"} bg-white py-2 text-primary`}
            >
                <FoldersIcon />
            </Link>
        </footer>
    );
};
