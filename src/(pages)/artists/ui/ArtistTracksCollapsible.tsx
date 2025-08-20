import { ChevronsUpDownIcon } from 'lucide-react';

import { type Track, TrackCard } from '@/entities/track';
import { Button, CollapsibleContent, CollapsibleTrigger, H2 } from '@/shared/ui';
import { Collapsible } from '@/shared/ui';

type Props = {
  tracks: Track[]
};

export const ArtistTracksCollapsible = ({ tracks }: Props) => (
  <Collapsible className='mb-4 w-full' defaultOpen={true}>
    <div className='flex items-center gap-2 mb-2'>
      <H2>Треки</H2>
      <CollapsibleTrigger asChild>
        <Button variant="ghost">
          <ChevronsUpDownIcon className='size-4' />
        </Button>
      </CollapsibleTrigger>
    </div>
    <CollapsibleContent className='grid grid-cols-1 md:grid-cols-2 gap-2'>
      {tracks.map(track => <TrackCard track={track} key={track.id} />)}
    </CollapsibleContent>
  </Collapsible>
);
