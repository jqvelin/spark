"use client";

import { Song } from "@/shared/api";
import { throttle } from "@/shared/utils";
import {
    Fragment,
    ReactNode,
    createContext,
    useCallback,
    useEffect,
    useRef,
    useState
} from "react";

import { type AudioPlayer } from "../model/AudioPlayer.types";
import { PlaybackDataSchema } from "../model/PlaybackData.schema";
import { AudioPlayer as Player } from "./AudioPlayer";

export const AudioPlayerContext = createContext<AudioPlayer | null>(null);

const BASE_API_URL = process.env.BASE_API_URL ?? "http://localhost:4000";

export const AudioPlayerProvider = ({ children }: { children: ReactNode }) => {
    const AudioElementRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSong, setCurrentSong] = useState<Song | null>(null);
    const [currentTime, _setCurrentTime] = useState(0);
    const [volume, _setVolume] = useState(0.5);

    useEffect(() => {
        const controller = new AbortController();
        const updateTimeThrottled = throttle(
            () => _setCurrentTime(AudioElementRef.current?.currentTime ?? 0),
            1000
        );

        AudioElementRef.current?.addEventListener(
            "timeupdate",
            updateTimeThrottled,
            {
                signal: controller.signal
            }
        );

        AudioElementRef.current?.addEventListener(
            "ended",
            () => setIsPlaying(false),
            { signal: controller.signal }
        );

        window.addEventListener("beforeunload", savePlaybackData, {
            signal: controller.signal
        });

        const playbackDataItem = localStorage.getItem("playbackData");
        if (playbackDataItem) {
            const playbackData = PlaybackDataSchema.parse(
                JSON.parse(playbackDataItem)
            );
            playbackData.currentSong &&
                setCurrentSong(playbackData.currentSong);

            setCurrentTime(playbackData.currentTime);
            setVolume(playbackData.volume);
        }

        return () => controller.abort();
    }, [AudioElementRef.current]);

    useEffect(() => {
        if (AudioElementRef.current) AudioElementRef.current.volume = volume;
    }, [volume]);

    useEffect(() => {
        window.addEventListener("beforeunload", savePlaybackData);
        return () =>
            window.removeEventListener("beforeunload", savePlaybackData);
    }, [currentSong, currentTime, AudioElementRef.current?.volume]);

    const setVolume = useCallback(
        (volume: number) => {
            if (AudioElementRef.current)
                AudioElementRef.current.volume = volume;
            _setVolume(volume);
        },
        [AudioElementRef.current]
    );

    const savePlaybackData = useCallback(() => {
        const playbackData = {
            currentSong,
            currentTime,
            volume
        };
        localStorage.setItem("playbackData", JSON.stringify(playbackData));
    }, [currentSong, currentTime, volume]);

    const play = useCallback(
        async (song?: Song) => {
            if (song && AudioElementRef.current) {
                _setCurrentTime(0);
                setCurrentSong(song);
                AudioElementRef.current.src = `${BASE_API_URL}/songs/${song.id}`;
                AudioElementRef.current.currentTime = 0;
            }
            AudioElementRef.current?.play().catch((e) => console.log(e));
            setIsPlaying(true);
        },
        [AudioElementRef.current, isPlaying]
    );

    const pause = useCallback(() => {
        AudioElementRef.current?.pause();
        setIsPlaying(false);
    }, [AudioElementRef.current, isPlaying]);

    const setCurrentTime = useCallback(
        (currentTime: number) => {
            if (AudioElementRef.current)
                AudioElementRef.current.currentTime = currentTime;
        },
        [AudioElementRef.current]
    );
    const contextValue: AudioPlayer = {
        isPlaying,
        currentSong,
        currentTime,
        volume,
        setVolume,
        setCurrentTime,
        play,
        pause
    };

    return (
        <Fragment>
            <AudioPlayerContext.Provider value={contextValue}>
                {children}
                <Player />
            </AudioPlayerContext.Provider>
            <audio
                ref={AudioElementRef}
                src={`${BASE_API_URL}/songs/${currentSong?.id}`}
                preload="auto"
                autoPlay
            >
                Audio element is not supported in your browser
            </audio>
        </Fragment>
    );
};
