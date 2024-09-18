import { getAlbumDataById } from "@/shared/api";

export const AlbumsPage = async ({ albumId }: { albumId: string }) => {
    const albumData = await getAlbumDataById(albumId);
    return (
        <main className="h-[calc(100svh-var(--header-height)-var(--footer-height))]">
            <h1 className="text-">{albumData.title}</h1>
        </main>
    );
};
