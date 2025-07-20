import { z } from 'zod/v4';

import { albumSchema } from '@/entities/album';
import { trackSchema } from '@/entities/track';

export const homePageDataSchema = z.object({
  trackCategories: z.object({
    fresh: z.array(trackSchema),
    bestOfToday: z.array(trackSchema),
    trendingInRussia: z.array(trackSchema),
    trendingWorldwide: z.array(trackSchema)
  }),
  albums: z.array(albumSchema)
});
