import { z } from "zod";

import { albumSchema } from "../album/albumSchema";
import { songSchema } from "../song/songSchema";

export const artistSchema = z.object({
    id: z.string(),
    name: z.string(),
    songs: z.array(songSchema),
    imageSrc: z.string().optional().or(z.null()),
    albums: z.array(albumSchema).optional().or(z.null())
});
