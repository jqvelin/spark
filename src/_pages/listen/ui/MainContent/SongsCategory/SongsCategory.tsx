import { SongElement } from "@/entities/Song";
import { Song } from "@/shared/api";
import { paths } from "@/shared/routing";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
    title: string;
    songs: Song[];
    link: string;
};

export const SongsCategory = ({ title, songs, link, ...props }: Props) => {
    if (songs.length > 0)
        return (
            <div {...props}>
                <Link
                    href={`${paths.listen.categories}/${link}`}
                    className="text-start text-xl group font-bold tracking-wide text-primary-darker md:text-2xl lg:text-3xl"
                >
                    {title}
                    <ArrowRightIcon className="inline transition-transform group-hover:translate-x-2" />
                </Link>
                <ul className="space-y-2 mt-4">
                    {songs.slice(0, 4).map((song) => (
                        <SongElement
                            key={song.id}
                            song={song}
                        />
                    ))}
                </ul>
            </div>
        );
};
