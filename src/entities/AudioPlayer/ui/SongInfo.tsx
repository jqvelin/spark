import { Song } from "@/shared/api";
import { useRunningLine } from "@/shared/utils/hooks";
import Image from "next/image";

export const SongInfo = ({ song }: { song: Song }) => {
    const titleRef = useRunningLine(),
        artistRef = useRunningLine();
    return (
        <div className="flex items-center overflow-hidden max-w-64">
            <Image
                src={song.coverSrc ?? "logo.svg"}
                className="rounded-sm mr-1 flex-shrink-0"
                width={40}
                height={40}
                alt="song"
            />
            <div className="flex flex-col overflow-hidden">
                <h3 ref={titleRef}>{song.title}</h3>
                <h4
                    className="text-gray-400"
                    ref={artistRef}
                >
                    {song.artist}
                </h4>
            </div>
        </div>
    );
};
