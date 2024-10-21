"use client";

import { AlbumPreviewCard } from "@/entities/Album";
import { Album } from "@/shared/api";
import { useCarousel } from "@/shared/utils/hooks";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

export const FreshAlbumsCarousel = ({ albumList }: { albumList: Album[] }) => {
    const {
        carouselRef,
        carouselWidth,
        ableToScrollBackwards,
        scrollBackwards,
        ableToScrollForwards,
        scrollForwards
    } = useCarousel();

    return (
        <div className="flex justify-center">
            <button
                onClick={scrollBackwards}
                disabled={!ableToScrollBackwards}
                className={`text-primary transition-[transform,opacity] duration-300 ${ableToScrollBackwards ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"}`}
            >
                <ArrowLeftIcon />
            </button>
            <ul
                style={{ width: carouselWidth }}
                className="flex select-none overflow-hidden scroll-smooth"
                ref={carouselRef}
            >
                {albumList.map((album, i) => (
                    <AlbumPreviewCard
                        className="animate-fade-in opacity-0"
                        style={{ animationDelay: `${i}00ms` }}
                        key={album.id}
                        album={album}
                    />
                ))}
            </ul>
            <button
                onClick={scrollForwards}
                disabled={!ableToScrollForwards}
                className={`text-primary transition-[transform,opacity] duration-300 ${ableToScrollForwards ? "translate-x-0 opacity-100" : "translate-x-2 opacity-0"}`}
            >
                <ArrowRightIcon />
            </button>
        </div>
    );
};
