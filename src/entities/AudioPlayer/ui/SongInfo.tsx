import { Song } from "@/shared/api";
import { useTextOverflowHandler } from "@/shared/utils/hooks";
import Image from "next/image";

export const SongInfo = ({ song }: { song: Song }) => {
    const titleRef = useTextOverflowHandler(),
        artistRef = useTextOverflowHandler();
    return (
        <div className="flex items-center">
            <Image
                src={song.coverSrc ?? "logo.svg"}
                className="rounded-sm mr-1"
                width={40}
                height={40}
                alt="song"
            />
            <div className="flex flex-col">
                <div
                    className="whitespace-nowrap overflow-hidden"
                    ref={titleRef}
                >
                    <h3 className="w-32 overflow-hidden text-ellipsis md:overflow-visible">
                        {song.title}
                    </h3>
                </div>
                <div
                    className="whitespace-nowrap overflow-hidden"
                    ref={artistRef}
                >
                    <h4 className="text-gray-400 w-32 overflow-hidden text-ellipsis md:overflow-visible text-sm">
                        {song.artist}
                    </h4>
                </div>
            </div>
        </div>
    );
};
