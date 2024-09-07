import { auth } from "@/features/sign-in";

export const Profile = async () => {
    const session = await auth();
    const username = session?.user?.name;
    return (
        <div
            className="ml-auto flex h-[40px] w-[40px] items-center justify-center rounded-full border-2 border-primary font-bold text-primary shadow-sm shadow-primary"
            title={username ?? ""}
        >
            {username?.slice(0, 1)}
        </div>
    );
};
