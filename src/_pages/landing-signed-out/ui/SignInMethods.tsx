"use client";

import { Button } from "@/shared/components/ui/button";
import { signIn } from "next-auth/react";
import { FaGoogle, FaYandex } from "react-icons/fa";

export const SignInMethods = () => {
    return (
        <div className="mt-4 text-center space-x-2 space-y-2 font-semibold">
            <label className="text-white block">Continue with</label>
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
    );
};
