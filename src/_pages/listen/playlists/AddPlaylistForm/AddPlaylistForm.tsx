"use client";

import { addPlaylistOnServerSide } from "@/shared/api";
import { Input } from "@/shared/components";
import { useSession } from "next-auth/react";
import { SubmitHandler, useForm } from "react-hook-form";

import { type AddPlaylistFormFields } from "./AddPlaylistForm.types";

export const AddPlaylistForm = () => {
    const {
        register,
        handleSubmit,
        formState: {
            errors: { title: titleErrors }
        }
    } = useForm<AddPlaylistFormFields>({ mode: "onBlur" });
    const { data: session } = useSession();

    const onSubmit: SubmitHandler<AddPlaylistFormFields> = async (data) => {
        try {
            await addPlaylistOnServerSide({
                ...data,
                userId: session?.user?.id as string,
                songs: []
            });
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <form
            className="flex flex-col items-center gap-2"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
        >
            <div>
                <Input
                    {...register("title", { required: true, maxLength: 20 })}
                    placeholder="title"
                    className={
                        titleErrors?.type === "required"
                            ? "placeholder:text-red-400"
                            : ""
                    }
                />
                {titleErrors?.type === "maxLength" && (
                    <p className="text-sm text-red-700">Title is too long!</p>
                )}
            </div>
            <Input
                {...register("description")}
                placeholder="description (optional)"
            />
            <button className="text-primary font-semibold border-2 border-primary py-2 px-3 rounded-sm">
                Submit
            </button>
        </form>
    );
};
