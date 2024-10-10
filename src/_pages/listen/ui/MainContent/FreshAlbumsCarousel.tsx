"use client";

import { AlbumPreviewCard } from "@/entities/Album";
import { Album } from "@/shared/api";
import { useCarousel } from "@/shared/utils/hooks";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { RefObject } from "react";

type Props = {
    albumList: Album[];
    testingRef?: RefObject<HTMLUListElement>;
};

export const FreshAlbumsCarousel = ({ albumList, testingRef }: Props) => {
    const {
        carouselRef,
        carouselWidth,
        ableToScrollBackwards,
        scrollBackwards,
        ableToScrollForwards,
        scrollForwards
    } = useCarousel();

    return (
        <div className="flex animate-fade-in justify-center opacity-0 delay-700">
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
                ref={testingRef ?? carouselRef}
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
