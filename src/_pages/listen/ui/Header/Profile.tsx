"use client";

import {
    DropdownMenu,
    DropdownMenuContent
} from "@/shared/components/ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { DoorOpenIcon } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { Fragment } from "react";

export const Profile = () => {
    const { data } = useSession();
    const username = data?.user?.name;
    return (
        <Fragment>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <div className="relative">
                        <div
                            className="ml-auto flex h-[40px] w-[40px] items-center justify-center rounded-full border-2 border-primary font-bold text-primary shadow-sm shadow-primary"
                            title={username ?? ""}
                        >
                            {username?.slice(0, 1)}
                        </div>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="inline-flex min-w-fit justify-center">
                    <button onClick={() => signOut()}>
                        <DoorOpenIcon className="text-primary" />
                    </button>
                </DropdownMenuContent>
            </DropdownMenu>
        </Fragment>
    );
};
