"use client";

import { Button } from "@/shared/components/ui/button";
import { signIn } from "next-auth/react";
import { FaGoogle, FaYandex } from "react-icons/fa";

export const SignInMethods = () => {
    return (
        <div className="mt-4 flex flex-col items-center gap-2 font-semibold">
            <span className="text-white">Sign in with</span>
            <div className="flex items-center gap-2">
                <Button
                    variant="outline"
                    onClick={() => signIn("google")}
                >
                    <FaGoogle />
                </Button>
                <Button
                    variant="outline"
                    onClick={() => signIn("yandex")}
                >
                    <FaYandex />
                </Button>
            </div>
        </div>
    );
};
