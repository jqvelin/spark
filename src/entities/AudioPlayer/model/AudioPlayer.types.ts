import { Song } from "@/shared/api";

export type AudioPlayer = {
    isPlaying: boolean;
    currentSong: Song | null;
    currentTime: number;
    play: (song?: Song) => Promise<void>;
    pause: () => void;
    volume: number;
    setVolume: (volume: number) => void;
    setCurrentTime: (timestamp: number) => void;
};
