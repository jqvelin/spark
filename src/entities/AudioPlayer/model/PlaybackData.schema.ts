import { songSchema } from "@/shared/api";
import { z } from "zod";

export const PlaybackDataSchema = z.object({
    currentSong: songSchema.optional(),
    currentTime: z.number(),
    volume: z.number()
});
