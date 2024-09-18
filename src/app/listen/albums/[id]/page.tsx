import { AlbumsPage } from "@/_pages/listen/albums";

export default function Page({
    params
}: {
    params: { [key: string]: string };
}) {
    return <AlbumsPage albumId={params.id} />;
}
