import { paths } from "@/shared/routing";
import { HomeIcon } from "lucide-react";
import Link from "next/link";

export const Sidebar = () => {
    // TODO: Extract sidebar routes into a separate file and
    // render each as an individual component (like <SidebarTab tab={paths.home}/>)

    return (
        <aside className="z-40 hidden h-[calc(100vh-var(--header-height))] justify-center gap-4 border-2 border-y-0 border-l-0 border-r-primary/20 px-2 py-2 transition-all hover:border-r-primary/30 md:inline-flex md:px-4">
            <div className="group w-full">
                <Link
                    href={paths.listen}
                    className="flex gap-3 rounded-md border-2 border-primary bg-primary px-4 py-1.5 tracking-wide transition-transform duration-300 group-hover:-translate-y-1"
                >
                    <HomeIcon className="text-white" />
                    <span className="hidden text-primary text-white [font-weight:500] md:inline-flex">
                        Home
                    </span>
                </Link>
            </div>
        </aside>
    );
};
