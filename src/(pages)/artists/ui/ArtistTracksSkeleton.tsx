import { ChevronsUpDownIcon } from 'lucide-react';

import { TrackCardSkeleton } from '@/entities/track';
import { Button, H2 } from '@/shared/ui';

export const ArtistTracksSkeleton = () => (
  <div className='mb-4 w-full'>
    <div className='flex items-center gap-2 mb-2'>
      <H2>Треки</H2>
      <Button variant="ghost">
        <ChevronsUpDownIcon className='size-4' />
      </Button>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
      {[...Array(10)].map((_, i) => <TrackCardSkeleton key={i} />)}
    </div>
  </div>
);
