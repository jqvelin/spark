import { useContext } from "react";

import { AudioPlayerContext } from "../ui/AudioPlayerProvider";

export const useAudioPlayer = () => {
    const context = useContext(AudioPlayerContext);
    if (!context) {
        throw new ReferenceError(
            "Context is not found. Components that use this hook should be wrapped in AudioPlayerProvider"
        );
    }

    return context;
};
