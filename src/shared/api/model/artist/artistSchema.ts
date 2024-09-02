import { z } from "zod";

import { albumSchema } from "../album/albumSchema";
import { songSchema } from "../song/songSchema";

export const artistSchema = z.object({
    id: z.string(),
    name: z.string(),
    songs: z.array(songSchema),
    imageSrc: z.string().or(z.undefined()).or(z.null()),
    albums: z.array(albumSchema).or(z.undefined()).or(z.null())
});
