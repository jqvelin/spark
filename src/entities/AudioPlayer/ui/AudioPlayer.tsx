import { AddSongButton } from "@/entities/Song/ui/AddSongButton";
import { DownloadSongButton } from "@/entities/Song/ui/DownloadSongButton";
import {
    DropdownMenu,
    DropdownMenuContent
} from "@/shared/components/ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { BsThreeDots } from "react-icons/bs";

import { useAudioPlayer } from "../lib/useAudioPlayer";
import { Controls } from "./Controls";
import { SongInfo } from "./SongInfo";

export const AudioPlayer = ({
    audioElement
}: {
    audioElement: HTMLAudioElement;
}) => {
    const AudioPlayer = useAudioPlayer();

    if (AudioPlayer.currentSong)
        return (
            <div
                className={`fixed left-1/2 -translate-x-1/2 bottom-0 border-l-2 border-t-2 border-r-2 md:border-b-2 whitespace-nowrap w-full md:w-auto transition-transform ${!AudioPlayer.currentSong ? "translate-y-full" : "-translate-y-[var(--footer-height)] md:-translate-y-1"} border-primary bg-white flex items-center justify-between gap-1 md:rounded-full h-audio-player px-3`}
            >
                {AudioPlayer.currentSong && (
                    <SongInfo song={AudioPlayer.currentSong} />
                )}
                <Controls
                    {...AudioPlayer}
                    audioElement={audioElement}
                />
                <DropdownMenu>
                    <DropdownMenuTrigger className="md:hidden text-primary">
                        <BsThreeDots />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="flex items-center justify-center w-fit">
                        <AddSongButton song={AudioPlayer.currentSong} />
                        <DownloadSongButton song={AudioPlayer.currentSong} />
                    </DropdownMenuContent>
                </DropdownMenu>
                <div className="hidden md:flex items-center">
                    <AddSongButton song={AudioPlayer.currentSong} />
                    <DownloadSongButton song={AudioPlayer.currentSong} />
                </div>
            </div>
        );
};
