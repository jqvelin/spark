"use client";

import { Button } from "@/shared/components/ui/button";
import { signIn } from "next-auth/react";
import { FaGoogle, FaYandex } from "react-icons/fa";

export const SignInMethods = () => {
    return (
        <div className="mt-4 flex flex-col items-center gap-2 font-semibold">
            <span className="text-white">Sign in with</span>
            <div className="flex flex-col items-center gap-2 md:flex-row">
                <Button
                    variant="outline"
                    className="gap-4"
                    onClick={() => signIn("google")}
                >
                    <FaGoogle />
                    <span>Google</span>
                </Button>
                <Button
                    variant="outline"
                    className="gap-4"
                    onClick={() => signIn("yandex")}
                >
                    <FaYandex />
                    <span>Yandex</span>
                </Button>
            </div>
        </div>
    );
};
