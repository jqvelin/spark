import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger
} from "@/shared/components/ui/dropdown-menu";
import { throttle } from "@/shared/utils";
import { PauseIcon, PlayIcon, Volume2Icon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { parseLocaleDuration } from "../lib/parseLocaleDuration";
import { type AudioPlayer } from "../model/AudioPlayer.types";

export const Controls = ({
    isPlaying,
    currentSong,
    play,
    pause,
    setCurrentTime,
    volume,
    setVolume,
    audioElement
}: AudioPlayer & { audioElement: HTMLAudioElement }) => {
    const timeSliderRef = useRef<HTMLInputElement>(null);
    const volumeSliderRef = useRef<HTMLInputElement>(null);
    const [ignoreTimeUpdate, setIgnoreTimeUpdate] = useState(false);
    const [currentTime, _setCurrentTime] = useState(
        audioElement.currentTime ?? 0
    );

    const minutesElapsed = Math.floor(currentTime / 60)
        .toString()
        .padStart(2, "0");
    const secondsElapsed = Math.floor(currentTime % 60)
        .toString()
        .padStart(2, "0");

    useEffect(() => {
        const updateTimeSlider = throttle(() => {
            _setCurrentTime(audioElement.currentTime);
            if (ignoreTimeUpdate) return;

            const timeSlider = timeSliderRef.current;
            if (timeSlider) {
                timeSlider.value = audioElement.currentTime.toString();
            }
        }, 1000);

        audioElement.addEventListener("timeupdate", updateTimeSlider);
        return () =>
            audioElement.removeEventListener("timeupdate", updateTimeSlider);
    });

    useEffect(() => {
        const controller = new AbortController();
        timeSliderRef.current?.addEventListener(
            "mousedown",
            () => {
                setIgnoreTimeUpdate(true);
                function updateTime() {
                    setCurrentTime(Number(timeSliderRef.current?.value));
                    setIgnoreTimeUpdate(false);
                    timeSliderRef.current?.removeEventListener(
                        "mouseup",
                        updateTime
                    );
                }
                timeSliderRef.current?.addEventListener("mouseup", updateTime);
            },
            { signal: controller.signal }
        );

        return () => controller.abort();
    }, []);

    return (
        <div className="flex items-center gap-1 relative">
            <button
                onClick={isPlaying ? pause : () => play()}
                className="text-primary [&>*]:fill-primary"
            >
                {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </button>
            <div className="flex flex-col">
                <input
                    ref={timeSliderRef}
                    type="range"
                    min={0}
                    max={parseLocaleDuration(currentSong?.duration ?? "01:00")}
                    className="w-24 md:w-32"
                    step={1}
                />
                <div className="w-full flex justify-between">
                    <span className="text-gray-400 text-sm">{`${minutesElapsed}:${secondsElapsed}`}</span>
                    <span className="text-gray-400 text-sm">
                        {!!currentSong && currentSong.duration}
                    </span>
                </div>
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger className="md:hidden">
                    <Volume2Icon className="text-primary fill-primary" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="grid place-content-center px-3 py-2">
                    <input
                        ref={volumeSliderRef}
                        onChange={(e) => setVolume(Number(e.target.value))}
                        className="w-20"
                        value={volume}
                        type="range"
                        min={0}
                        max={1}
                        step={0.01}
                    />
                </DropdownMenuContent>
            </DropdownMenu>
            <div className="flex items-center md:flex gap-1">
                <Volume2Icon className="text-primary fill-primary" />
                <input
                    ref={volumeSliderRef}
                    onChange={(e) => setVolume(Number(e.target.value))}
                    className={`hidden md:inline w-20`}
                    value={volume}
                    type="range"
                    min={0}
                    max={1}
                    step={0.01}
                />
            </div>
        </div>
    );
};
