import { AudioPlayerProvider } from "@/entities/AudioPlayer";
import { ReactNode } from "react";

export const WithAudioPlayer = ({ children }: { children: ReactNode }) => {
    return <AudioPlayerProvider>{children}</AudioPlayerProvider>;
};
