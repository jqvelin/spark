"use client";

import { AlbumPreviewCard } from "@/entities/Album";
import { Album } from "@/shared/api";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const FreshAlbumsCarousel = ({ albumList }: { albumList: Album[] }) => {
    const [scrollLeft, setScrollLeft] = useState({
        current: 0,
        maximum: 0
    });
    const carouselRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const target = carouselRef?.current as HTMLUListElement;
        setScrollLeft({
            current: target?.scrollLeft ?? 0,
            maximum: target.scrollWidth - target.clientWidth
        });
    }, []);

    const handleScroll = (direction: "left" | "right") => {
        const target = carouselRef?.current as HTMLUListElement;
        target.scrollLeft += direction === "right" ? 100 : -100;
        setScrollLeft({
            ...scrollLeft,
            current: target?.scrollLeft
        });
    };

    return (
        <div className="flex">
            {scrollLeft.current !== 0 && (
                <button>
                    <ArrowLeftIcon />
                </button>
            )}
            <ul
                className="flex overflow-hidden scroll-smooth"
                ref={carouselRef}
            >
                {albumList.map((album) => (
                    <AlbumPreviewCard
                        key={album.id}
                        album={album}
                    />
                ))}
            </ul>
            <button
                onClick={() => handleScroll("right")}
                className={
                    scrollLeft.current === scrollLeft.maximum
                        ? "hidden"
                        : "inline"
                }
            >
                <ArrowRightIcon />
            </button>
        </div>
    );
};
