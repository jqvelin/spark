import { Footer, Header, Sidebar } from "@/_pages/listen";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <div className="h-[100svh]">
                <Header />
                <div className="flex">
                    <Sidebar />
                    {children}
                </div>
                <Footer />
            </div>
        </>
    );
}
