import { ListenPage } from "@/_pages/listen";

export default function Page({
    searchParams
}: {
    searchParams: { [key: string]: string };
}) {
    return <ListenPage searchParams={searchParams} />;
}
