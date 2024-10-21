export const FreshAlbumsCarouselSkeleton = () => {
    return (
        <ul className="flex justify-center gap-2">
            <li className="flex flex-col items-center gap-1">
                <div className="w-[100px] aspect-square rounded-md mb-1 loading-animation"></div>
                <div className="w-full h-[16px] loading-animation"></div>
                <div className="w-full h-[16px] loading-animation"></div>
            </li>
            <li className="flex flex-col items-center gap-1">
                <div className="w-[100px] aspect-square rounded-md mb-1 loading-animation"></div>
                <div className="w-full h-[16px] loading-animation"></div>
                <div className="w-full h-[16px] loading-animation"></div>
            </li>
            <li className="flex flex-col items-center gap-1">
                <div className="w-[100px] aspect-square loading-animation rounded-md mb-1"></div>
                <div className="w-full h-[16px] loading-animation"></div>
                <div className="w-full h-[16px] loading-animation"></div>
            </li>
        </ul>
    );
};
