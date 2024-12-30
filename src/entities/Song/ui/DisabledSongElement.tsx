import { Song } from "@/shared/api";
import { cn } from "@/shared/components/lib/utils";
import { useTextOverflowHandler } from "@/shared/utils/hooks";
import Image from "next/image";
import { ComponentPropsWithoutRef } from "react";

type DisabledSongElementProps = {
    song: Song;
} & ComponentPropsWithoutRef<"div">;

export const DisabledSongElement = ({
    song,
    ...props
}: DisabledSongElementProps) => {
    const titleRef = useTextOverflowHandler(),
        artistRef = useTextOverflowHandler();

    return (
        <div
            {...props}
            className={cn(
                "flex w-song-element h-song-element px-3 items-center gap-2 rounded-md bg-white shadow-md relative"
            )}
        >
            <div className="relative flex items-center justify-center">
                <Image
                    src={song.coverSrc ?? "/logo.svg"}
                    width={40}
                    height={40}
                    alt={song.title}
                    className="rounded-sm"
                />
            </div>
            <div className="flex flex-1 flex-col whitespace-nowrap overflow-hidden">
                <div
                    ref={titleRef}
                    className="overflow-hidden"
                >
                    <span className="pr-[1px]">{song.title}</span>
                </div>
                <div
                    ref={artistRef}
                    className="overflow-hidden"
                >
                    <span className="text-sm text-gray-400 pr-[1px]">
                        {song.artist}
                    </span>
                </div>
            </div>
        </div>
    );
};
