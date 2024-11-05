import { getHomepageAlbums } from "@/shared/api";
import dynamic from "next/dynamic";

import { FreshAlbumsCarousel as StaticFreshAlbumsCarousel } from "./FreshAlbumsCarousel";

// Force client-side only rendering to make useLayoutEffect work with FreshAlbumsCarousel
const FreshAlbumsCarousel = dynamic<
    React.ComponentPropsWithoutRef<typeof StaticFreshAlbumsCarousel>
>(
    () =>
        import("./FreshAlbumsCarousel").then((mod) => mod.FreshAlbumsCarousel),
    {
        ssr: false
    }
);

export const FreshAlbumsSection = async () => {
    const homepageAlbums = await getHomepageAlbums();
    return (
        <section>
            <div className="mb-4 leading-4">
                <h2 className="text-xl font-bold tracking-wide text-primary-darker md:text-2xl lg:text-3xl">
                    Fresh albums
                </h2>
                <p className="text-gray-400">Discover weekly</p>
            </div>
            <FreshAlbumsCarousel albumList={homepageAlbums} />
        </section>
    );
};
