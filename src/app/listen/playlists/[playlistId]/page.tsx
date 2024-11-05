import { DedicatedPlaylistPage } from "@/_pages/listen/playlists";

export default function Page({ params }: { params: { playlistId: string } }) {
    return <DedicatedPlaylistPage playlistId={params.playlistId} />;
}
