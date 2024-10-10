import { FreshAlbumsCarousel } from "@/_pages/listen/ui/MainContent/FreshAlbumsCarousel";
import { render, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { Album, Song } from "../api";
import { getSongsCollectionDuration } from "./getSongsCollectionDuration";
import { useCarousel } from "./hooks";

const testSongsCollection: Song[] = [
    { id: "test1", artist: "artist", title: "title", duration: "01:00" },
    { id: "test2", artist: "artist", title: "title", duration: "00:59" },
    { id: "test3", artist: "artist", title: "title", duration: "01:00" }
];

const testAlbumsCollection: Album[] = [
    {
        id: "1459",
        coverSrc:
            "https://i.mp3party.net/store/r/350x100/store/album/000/001/1459/1459.jpg",
        title: "Supercharged",
        artist: "The Offspring",
        artistId: "1500"
    },
    {
        id: "1458",
        coverSrc:
            "https://i.mp3party.net/store/r/350x100/store/album/000/001/1458/1458.jpg",
        title: "Brat and it’s completely different but also still brat",
        artist: "Charli XCX",
        artistId: "819"
    },
    {
        id: "1457",
        coverSrc:
            "https://i.mp3party.net/store/r/350x100/store/album/000/001/1457/1457.jpg",
        title: "THE ONE YOU WANTED",
        artist: "Jay Park",
        artistId: "920843"
    },
    {
        id: "1456",
        coverSrc:
            "https://i.mp3party.net/store/r/350x100/store/album/000/001/1456/1456.jpg",
        title: "Ki-Se-I Rush",
        artist: "Maximum the Hormone",
        artistId: "5019072"
    },
    {
        id: "1455",
        coverSrc:
            "https://i.mp3party.net/store/r/350x100/store/album/000/001/1455/1455.jpg",
        title: "Moon Music (Full Moon Edition)",
        artist: "Coldplay",
        artistId: "86"
    },
    {
        id: "1454",
        coverSrc:
            "https://i.mp3party.net/store/r/350x100/store/album/000/001/1454/1454.jpg",
        title: "Moon Music",
        artist: "Coldplay",
        artistId: "86"
    },
    {
        id: "1453",
        coverSrc:
            "https://i.mp3party.net/store/r/350x100/store/album/000/001/1453/1453.jpg",
        title: "Foundations",
        artist: "Serj Tankian",
        artistId: "197368"
    },
    {
        id: "1450",
        coverSrc:
            "https://i.mp3party.net/store/r/350x100/store/album/000/001/1450/1450.jpg",
        title: "Harlequin",
        artist: "Lady Gaga",
        artistId: "10"
    },
    {
        id: "1452",
        coverSrc:
            "https://i.mp3party.net/store/r/350x100/store/album/000/001/1452/1452.jpg",
        title: "HOW TF IS THIS A MIXTAPE?",
        artist: "DaBaby",
        artistId: "4728683"
    },
    {
        id: "1451",
        coverSrc:
            "https://i.mp3party.net/store/r/350x100/store/album/000/001/1451/1451.jpg",
        title: "COYOTE",
        artist: "Tommy Richman",
        artistId: "5200385"
    },
    {
        id: "1430",
        coverSrc:
            "https://i.mp3party.net/store/r/350x100/store/album/000/001/1430/1430.jpg",
        title: "143",
        artist: "Katy Perry",
        artistId: "16"
    },
    {
        id: "1449",
        coverSrc:
            "https://i.mp3party.net/store/r/350x100/store/album/000/001/1449/1449.jpg",
        title: "SOPHIE",
        artist: "Sophie",
        artistId: "655081"
    },
    {
        id: "1448",
        coverSrc:
            "https://i.mp3party.net/store/r/350x100/store/album/000/001/1448/1448.jpg",
        title: "SAD SONG",
        artist: "P1harmony",
        artistId: "5153206"
    },
    {
        id: "1447",
        coverSrc:
            "https://i.mp3party.net/store/r/350x100/store/album/000/001/1447/1447.jpg",
        title: "Love Tune",
        artist: "Fifty Fifty",
        artistId: "4776724"
    },
    {
        id: "1446",
        coverSrc:
            "https://i.mp3party.net/store/r/350x100/store/album/000/001/1446/1446.jpg",
        title: "FLUDDALITY",
        artist: "Gone.Fludd",
        artistId: "4635086"
    },
    {
        id: "1445",
        coverSrc:
            "https://i.mp3party.net/store/r/350x100/store/album/000/001/1445/1445.jpg",
        title: "Перевоплотиться",
        artist: "Zoloto",
        artistId: "4616888"
    }
];

describe("getSongsCollectionDuration", () => {
    test("correctly calculates and rounds total duration of short songs", () => {
        expect(getSongsCollectionDuration(testSongsCollection)).toEqual(3);
    });

    test("correctly calculates a collection with songs longer than 1 hour", () => {
        const extendedTestSongsCollection = [
            ...testSongsCollection,
            {
                id: "test4",
                artist: "artist",
                title: "title",
                duration: "01:00:02"
            }
        ];
        expect(getSongsCollectionDuration(extendedTestSongsCollection)).toEqual(
            64
        );
    });
});

describe("useCarousel", () => {
    const { result } = renderHook(() => useCarousel(1000));

    test("returns correct initial value", () => {
        expect(result.current.ableToScrollBackwards).toEqual(false);
        expect(result.current.ableToScrollForwards).toEqual(true);
    });
});
