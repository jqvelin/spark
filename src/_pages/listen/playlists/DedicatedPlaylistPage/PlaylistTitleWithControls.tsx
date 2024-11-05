"use client";

import { Playlist, patchPlaylist } from "@/shared/api";
import { Input } from "@/shared/components";
import { CheckIcon, EditIcon, PencilIcon } from "lucide-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type NewPlaylistDataForm = {
    newTitle: string;
};

export const PlaylistTitleWithControls = ({
    playlist
}: {
    playlist: Playlist;
}) => {
    const [isEditing, setIsEditing] = useState(false);
    const {
        handleSubmit,
        register,
        formState: {
            errors: { newTitle: newTitleErrors }
        }
    } = useForm<NewPlaylistDataForm>({
        defaultValues: { newTitle: playlist.title },
        mode: "onChange"
    });

    const onSubmit: SubmitHandler<NewPlaylistDataForm> = async (data) => {
        if (data.newTitle === playlist.title) return;
        try {
            setIsEditing(false);
            await patchPlaylist({ ...playlist, title: data.newTitle });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="relative">
            {isEditing ? (
                <form
                    noValidate
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col"
                >
                    <Input {...register("newTitle", { maxLength: 20 })} />
                    {newTitleErrors?.type === "maxLength" && (
                        <p className="text-sm text-red-700">
                            Title is too long!
                        </p>
                    )}
                </form>
            ) : (
                <h1 className="mb-1 text-xl font-semibold leading-tight md:text-2xl">
                    {playlist.title}
                </h1>
            )}
            <div className="text-primary absolute -right-1 top-1/2 -translate-y-1/2 translate-x-full">
                {isEditing ? (
                    <button
                        disabled={!!newTitleErrors}
                        onClick={() => {
                            handleSubmit(onSubmit)();
                            setIsEditing(false);
                        }}
                        className="disabled:text-gray-400"
                    >
                        <CheckIcon />
                    </button>
                ) : (
                    <button onClick={() => setIsEditing(true)}>
                        <PencilIcon className="size-5" />
                    </button>
                )}
            </div>
        </div>
    );
};
