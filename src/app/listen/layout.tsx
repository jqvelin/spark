import { Footer, Header, Sidebar } from "@/_pages/listen";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <div className="h-[100svh]">
                <Header />
                <div className="flex">
                    <Sidebar />
                    <main className="calculated-height flex flex-col w-full p-2 md:p-4">
                        {children}
                    </main>
                </div>
                <Footer />
            </div>
        </>
    );
}
