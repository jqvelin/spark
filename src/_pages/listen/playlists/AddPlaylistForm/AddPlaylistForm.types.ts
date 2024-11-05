import { Playlist } from "@/shared/api";

export type AddPlaylistFormFields = Pick<Playlist, "title" | "description">;
