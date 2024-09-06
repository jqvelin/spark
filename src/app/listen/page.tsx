import { auth } from "@/features/sign-in";

export default async function Page() {
    const session = await auth()
    console.log(session?.user)
    return <div>Listen here </div>;
};