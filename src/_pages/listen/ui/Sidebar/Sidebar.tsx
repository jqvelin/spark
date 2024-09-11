import { HomeIcon } from "lucide-react";
import Link from "next/link";

export const Sidebar = () => {
    // TODO: Extract sidebar routes into a separate file and
    // render each as an individual component (like <SidebarTab tab={paths.home}/>)

    return (
        <aside className="h-[calc(100vh-var(--header-height))] py-2 px-2 md:px-4 inline-flex flex-col gap-4 border-y-0 border-l-0 border-r-primary/20 hover:border-r-primary/30 transition-all border-2">
            <div className="group">
                <Link
                    href="?tab=asd"
                    className="transition-transform bg-primary duration-300 group-hover:-translate-y-1 flex gap-3 border-2 border-primary py-1.5 px-4 rounded-md tracking-wide"
                >
                    <HomeIcon className="text-white" />
                    <span className="hidden md:inline-flex text-primary [font-weight:500] text-white">
                        Home
                    </span>
                </Link>
            </div>
        </aside>
    );
};
