import { PauseIcon, PlayIcon, Volume2Icon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { parseLocaleDuration } from "../lib/parseLocaleDuration";
import { type AudioPlayer } from "../model/AudioPlayer.types";

export const Controls = ({
    isPlaying,
    currentSong,
    play,
    pause,
    currentTime,
    setCurrentTime,
    volume,
    setVolume
}: AudioPlayer) => {
    const timeSliderRef = useRef<HTMLInputElement>(null);
    const volumeSliderRef = useRef<HTMLInputElement>(null);
    const [ignoreTimeUpdate, setIgnoreTimeUpdate] = useState(false);
    const [showVolumeSlider, setShowVolumeSlider] = useState(false);

    useEffect(() => {
        if (!timeSliderRef.current || ignoreTimeUpdate) return;
        timeSliderRef.current.value = currentTime.toString();
    }, [timeSliderRef.current, currentTime, ignoreTimeUpdate]);

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
    }, [timeSliderRef.current]);

    return (
        <div className="flex items-center gap-1 relative">
            <button
                onClick={isPlaying ? pause : () => play()}
                className="text-primary [&>*]:fill-primary"
            >
                {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </button>
            <input
                ref={timeSliderRef}
                type="range"
                min={0}
                max={parseLocaleDuration(currentSong?.duration ?? "01:00")}
                className="w-20 md:w-32"
                step={1}
            />
            <button
                className="md:disabled"
                onClick={() => setShowVolumeSlider(!showVolumeSlider)}
            >
                <Volume2Icon className="text-primary fill-primary" />
            </button>
            <input
                ref={volumeSliderRef}
                onChange={(e) => setVolume(Number(e.target.value))}
                className={`${showVolumeSlider ? "" : "hidden"} absolute bottom-20 left-20 -rotate-90 md:rotate-0 md:static md:inline w-20`}
                value={volume}
                type="range"
                min={0}
                max={1}
                step={0.01}
            />
        </div>
    );
};
