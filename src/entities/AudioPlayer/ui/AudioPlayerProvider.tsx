"use client";

import { Fragment, ReactNode, createContext, useState } from "react";

import { AudioPlayer } from "../model/AudioPlayer";

const { Provider } = createContext<AudioPlayer | null>(null);

export const AudioPlayerProvider = ({ children }: { children: ReactNode }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const contextValue: AudioPlayer = {
        isPlaying
    };
    return (
        <Fragment>
            <Provider value={contextValue}>{children}</Provider>
        </Fragment>
    );
};
