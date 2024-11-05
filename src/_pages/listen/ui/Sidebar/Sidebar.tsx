"use client";

import { paths } from "@/shared/routing";
import { FoldersIcon, HomeIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
    const pathname = usePathname();
    return (
        <aside className="hidden h-[calc(100vh-var(--header-height))] flex-col items-start gap-4 border-2 border-y-0 border-l-0 border-r-primary/20 px-2 py-2 transition-all hover:border-r-primary/30 md:inline-flex md:px-4">
            <div className="group w-full">
                <Link
                    href={paths.listen.root}
                    className={`flex gap-3 rounded-md border-2 border-primary ${pathname === paths.listen.root ? "bg-primary" : "bg-transparent"} bg-primary px-4 py-1.5 tracking-wide transition-transform duration-300 group-hover:-translate-y-1`}
                >
                    <HomeIcon
                        className={
                            pathname === paths.listen.root
                                ? "text-white"
                                : "text-primary"
                        }
                    />
                    <span
                        className={`hidden ${pathname === paths.listen.root ? "text-white" : "text-primary"} [font-weight:500] md:inline-flex`}
                    >
                        Home
                    </span>
                </Link>
            </div>
            <div className="group w-full">
                <Link
                    href={paths.listen.playlists}
                    className={`flex gap-3 rounded-md border-2 border-primary ${pathname === paths.listen.playlists ? "bg-primary" : "bg-transparent"} bg-primary px-4 py-1.5 tracking-wide transition-transform duration-300 group-hover:-translate-y-1`}
                >
                    <FoldersIcon
                        className={
                            pathname === paths.listen.playlists
                                ? "text-white"
                                : "text-primary"
                        }
                    />
                    <span
                        className={`hidden ${pathname === paths.listen.playlists ? "text-white" : "text-primary"} [font-weight:500] md:inline-flex`}
                    >
                        Saved
                    </span>
                </Link>
            </div>
        </aside>
    );
};
