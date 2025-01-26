import { Song } from "@/shared/api";

export type AudioPlayer = {
    isPlaying: boolean;
    playbackQueue: Song[];
    currentSongId: number;
    play: (playOptions?: {
        song?: Song;
        collection?: Song[];
        collectionSongId?: number;
    }) => Promise<void>;
    pause: () => void;
    skipForward: () => void;
    skipBack: () => void;
    volume: number;
    setVolume: (volume: number) => void;
    setCurrentTime: (timestamp: number) => void;
};
