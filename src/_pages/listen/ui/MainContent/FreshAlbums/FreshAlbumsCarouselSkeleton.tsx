import { cloneComponents } from "@/shared/utils";

export const FreshAlbumsCarouselSkeleton = () => {
    return (
        <section>
            <div className="mb-4 leading-4">
                <h2 className="text-xl font-bold tracking-wide text-primary-darker md:text-2xl lg:text-3xl">
                    Fresh albums
                </h2>
                <p className="text-gray-400">Discover weekly</p>
            </div>
            <ul className="flex justify-center gap-2">
                {cloneComponents(
                    3,
                    <li className="flex flex-col items-center gap-1">
                        <div className="w-[100px] aspect-square rounded-md mb-1 loading-animation"></div>
                        <div className="w-full h-[16px] loading-animation"></div>
                        <div className="w-full h-[16px] loading-animation"></div>
                    </li>
                )}
                {cloneComponents(
                    2,
                    <li className="hidden md:flex flex-col items-center gap-1">
                        <div className="w-[100px] aspect-square rounded-md mb-1 loading-animation"></div>
                        <div className="w-full h-[16px] loading-animation"></div>
                        <div className="w-full h-[16px] loading-animation"></div>
                    </li>
                )}
                <li className="hidden lg:flex flex-col items-center gap-1">
                    <div className="w-[100px] aspect-square loading-animation rounded-md mb-1"></div>
                    <div className="w-full h-[16px] loading-animation"></div>
                    <div className="w-full h-[16px] loading-animation"></div>
                </li>
            </ul>
        </section>
    );
};
