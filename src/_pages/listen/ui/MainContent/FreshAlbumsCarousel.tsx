"use client";

import { AlbumPreviewCard } from "@/entities/Album";
import { Album } from "@/shared/api";
import { useCarousel } from "@/shared/utils";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { RefObject } from "react";

export const FreshAlbumsCarousel = ({ albumList }: { albumList: Album[] }) => {
    const {
        carouselRef,
        ableToScrollBackwards,
        scrollBackwards,
        ableToScrollForwards,
        scrollForwards
    } = useCarousel();

    return (
        <div className="flex">
            <button
                onClick={scrollBackwards}
                disabled={!ableToScrollBackwards}
                className={`text-primary transition-[transform,opacity] duration-300 ${ableToScrollBackwards ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"}`}
            >
                <ArrowLeftIcon />
            </button>
            <ul
                className="flex select-none overflow-hidden scroll-smooth"
                ref={carouselRef as RefObject<HTMLUListElement>}
            >
                {albumList.map((album) => (
                    <AlbumPreviewCard
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
