import { auth } from "@/features/sign-in";

export default async function Page() {
    const session = await auth();
    return <div>Welcome back, {session?.user?.name}!</div>;
}
