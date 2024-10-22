import { cloneComponents } from "@/shared/utils";

export const HomepageSongsSkeleton = () => {
    return (
        <section className="flex flex-wrap items-start gap-8">
            {cloneComponents(
                4,
                <div className="mx-auto space-y-2">
                    <div className="w-song-line h-[32px] mb-4 loading-animation"></div>
                    <div className="h-[56px] w-song-line loading-animation rounded-sm"></div>
                    <div className="h-[56px] w-song-line loading-animation rounded-sm"></div>
                    <div className="h-[56px] w-song-line loading-animation rounded-sm"></div>
                    <div className="h-[56px] w-song-line loading-animation rounded-sm"></div>
                </div>
            )}
        </section>
    );
};
