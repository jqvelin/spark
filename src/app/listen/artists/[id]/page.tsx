import { ArtistPage } from "@/_pages/listen/artists";

export default function Page({
    params
}: {
    params: { [key: string]: string };
}) {
    return <ArtistPage artistId={params.id} />;
}
