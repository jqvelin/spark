import { Footer, Header, Sidebar } from "@/_pages/listen";
import { ReactNode } from "react";

import { WithAudioPlayer } from "../_providers/WithAudioPlayer";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <div className="h-[100svh]">
                <WithAudioPlayer>
                    <Header />
                    <div className="flex">
                        <Sidebar />
                        <main className="calculated-height flex flex-col w-full p-2 pb-[calc(var(--audio-player-height)+0.2rem)]">
                            {children}
                        </main>
                    </div>
                    <Footer />
                </WithAudioPlayer>
            </div>
        </>
    );
}
