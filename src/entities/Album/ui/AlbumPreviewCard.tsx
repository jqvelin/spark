import { Album } from "@/shared/api";
import Image from "next/image";

export const AlbumPreviewCard = ({album}: {album: Album}) => {
    return <div className="flex flex-shrink-0 flex-col items-center overflow-hidden px-1 w-[100px]">
        <Image src={album.coverSrc ?? "logo.svg"} width={90} height={90} alt={album.title} className="rounded-sm mb-2" />
        <div className="text-center w-[90px] leading-3">
            <p className="font-semibold text-[12px] break-normal mb-1 line-clamp-5" title={album.title}>{album.title}</p>
            <p className="text-[11px] text-gray-400">{album.artist}</p>
        </div>
    </div>;
};