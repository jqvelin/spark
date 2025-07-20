import { z } from 'zod/v4';

import { albumSchema } from '@/entities/album';
import { artistSchema } from '@/entities/artist';
import { trackSchema } from '@/entities/track';

export const searchResultsSchema = z.object({
  tracks: z.array(trackSchema),
  albums: z.array(albumSchema),
  artists: z.array(artistSchema)
});
