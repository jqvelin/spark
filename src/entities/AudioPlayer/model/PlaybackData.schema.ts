import { songSchema } from "@/shared/api";
import { z } from "zod";

export const PlaybackDataSchema = z.object({
    playbackQueue: songSchema.array(),
    currentSongId: z.number().nullable(),
    currentTime: z.number(),
    volume: z.number()
});
