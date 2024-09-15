import { SongPreview } from "@/_pages/landing-signed-out/ui/songs-preview-line/SongPreview";
import { Song } from "@/shared/api";

type Props = {
    title: string;
    songs: Song[];
};
export const SongsCategory = ({ title, songs }: Props) => {
    if (songs.length > 0)
        return (
            <div className="mx-auto">
                <h2 className="mb-4 text-start text-xl font-bold tracking-wide text-primary-darker md:text-2xl lg:text-3xl">
                    {title}
                </h2>
                <ul className="space-y-2">
                    {songs.map((song) => (
                        <SongPreview
                            key={song.id}
                            song={song}
                        />
                    ))}
                </ul>
            </div>
        );
};
