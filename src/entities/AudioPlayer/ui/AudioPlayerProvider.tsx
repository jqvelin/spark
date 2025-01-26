"use client";

import { Song } from "@/shared/api";
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
import { PlaybackData } from "../model/PlaybackData.types";
import { AudioPlayer as Player } from "./AudioPlayer";

export const AudioPlayerContext = createContext<AudioPlayer | null>(null);

const BASE_API_URL =
    process.env.NEXT_PUBLIC_BASE_API_URL ?? "http://localhost:4000";

export const AudioPlayerProvider = ({ children }: { children: ReactNode }) => {
    const AudioElementRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [playbackQueue, setPlaybackQueue] = useState<Song[]>([]);
    const [currentSongId, setCurrentSongId] = useState(0);
    // const [currentSong, setCurrentSong] = useState<Song | null>(null);
    const [volume, _setVolume] = useState(0.5);

    const currentSong = playbackQueue[currentSongId];

    useEffect(() => {
        const controller = new AbortController();

        AudioElementRef.current?.addEventListener("play", () => play(), {
            signal: controller.signal
        });

        AudioElementRef.current?.addEventListener("pause", pause, {
            signal: controller.signal
        });

        window.addEventListener("beforeunload", savePlaybackData, {
            signal: controller.signal
        });

        const playbackData = localStorage.getItem("playbackData");
        if (playbackData) {
            const { playbackQueue, currentSongId, currentTime, volume } =
                PlaybackDataSchema.parse(JSON.parse(playbackData));
            playbackQueue && setPlaybackQueue(playbackQueue);
            currentSongId && setCurrentSongId(currentSongId);

            setCurrentTime(currentTime);
            setVolume(volume);
        }

        return () => controller.abort();
    }, []);

    useEffect(() => {
        AudioElementRef.current?.addEventListener("ended", playNextOrStop);

        function playNextOrStop() {
            if (
                playbackQueue.length > 1 &&
                currentSongId < playbackQueue.length - 1
            ) {
                setCurrentSongId(currentSongId + 1);
                play();
            } else setIsPlaying(false);
        }

        return () =>
            AudioElementRef.current?.removeEventListener(
                "ended",
                playNextOrStop
            );
    }, [playbackQueue, currentSongId]);

    useEffect(() => {
        if (AudioElementRef.current) AudioElementRef.current.volume = volume;
    }, [volume]);

    useEffect(() => {
        window.addEventListener("beforeunload", savePlaybackData);
        return () =>
            window.removeEventListener("beforeunload", savePlaybackData);
    }, [JSON.stringify(playbackQueue), currentSongId, volume]);

    const setVolume = useCallback((volume: number) => {
        if (AudioElementRef.current) AudioElementRef.current.volume = volume;
        _setVolume(volume);
    }, []);

    const savePlaybackData = useCallback(() => {
        const playbackData: PlaybackData = {
            playbackQueue,
            currentSongId,
            currentTime: AudioElementRef.current?.currentTime ?? 0,
            volume
        };
        localStorage.setItem("playbackData", JSON.stringify(playbackData));
    }, [JSON.stringify(playbackQueue), currentSongId, volume]);

    const play = useCallback(
        async (playOptions?: {
            song?: Song;
            collection?: Song[];
            collectionSongId?: number;
        }) => {
            if (!AudioElementRef.current) return;
            if (!playOptions) {
                AudioElementRef.current.play().catch((e) => console.log(e));
                setIsPlaying(true);
                return;
            }

            const { song, collection, collectionSongId } = playOptions;

            if (song) {
                setCurrentSongId(0);
                setPlaybackQueue([song]);
                AudioElementRef.current.src = `${BASE_API_URL}/songs/${song.id}`;
            } else if (collection && typeof collectionSongId === "number") {
                setCurrentSongId(collectionSongId);
                setPlaybackQueue(collection);
                AudioElementRef.current.src = `${BASE_API_URL}/songs/${collection[collectionSongId].id}`;
            }
            AudioElementRef.current.currentTime = 0;
            AudioElementRef.current.play().catch((e) => console.log(e));
            setIsPlaying(true);
        },
        [isPlaying]
    );

    const pause = useCallback(() => {
        AudioElementRef.current?.pause();
        setIsPlaying(false);
    }, [isPlaying]);

    const setCurrentTime = useCallback((currentTime: number) => {
        if (AudioElementRef.current)
            AudioElementRef.current.currentTime = currentTime;
    }, []);

    const skipForward = useCallback(() => {
        if (currentSongId === playbackQueue.length - 1) setCurrentSongId(0);
        else setCurrentSongId(currentSongId + 1);
    }, [JSON.stringify(playbackQueue), currentSongId]);

    const skipBack = useCallback(() => {
        if (currentSongId === 0) setCurrentSongId(playbackQueue.length - 1);
        else setCurrentSongId(currentSongId - 1);
    }, [JSON.stringify(playbackQueue), currentSongId]);

    const contextValue: AudioPlayer = {
        isPlaying,
        volume,
        setVolume,
        setCurrentTime,
        playbackQueue,
        currentSongId,
        skipBack,
        skipForward,
        play,
        pause
    };

    return (
        <Fragment>
            <AudioPlayerContext.Provider value={contextValue}>
                {children}
                {AudioElementRef.current && (
                    <Player audioElement={AudioElementRef.current} />
                )}
            </AudioPlayerContext.Provider>
            <audio
                ref={AudioElementRef}
                src={`${BASE_API_URL}/songs/${currentSong?.id}`}
                preload="auto"
                autoPlay
            />
        </Fragment>
    );
};
