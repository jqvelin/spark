import { z } from "zod";

import { PlaybackDataSchema } from "./PlaybackData.schema";

export type PlaybackData = z.infer<typeof PlaybackDataSchema>;
