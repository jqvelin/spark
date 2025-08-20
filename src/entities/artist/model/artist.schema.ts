import { z } from 'zod/v4';

import { albumSchema } from '@/entities/album/@x/artist';
import { trackSchema } from '@/entities/track/@x/artist';

export const artistSchema = z.object({
  id: z.string(),
  name: z.string(),
  tracks: z.array(trackSchema),
  imageSrc: z.nullish(z.string()),
  albums: z.array(albumSchema)
});
