import { z } from 'zod/v4';

import type { trackSchema } from './track.schema';

export type Track = z.infer<typeof trackSchema>;
