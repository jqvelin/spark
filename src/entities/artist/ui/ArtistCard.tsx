import type { ComponentPropsWithRef } from 'react';

import { Card, CardContent } from '@/shared/ui';
import { cn } from '@/shared/utils';

import { ArtistImage } from './ArtistImage';

import type { Artist } from '../model/artist.type';

type Props = ComponentPropsWithRef<'div'> & {
  artist: Artist
};

export const ArtistCard = ({ artist, className, ...props }: Props) => (
  <Card
    className={cn('w-32 md:w-42 h-50 md:h-57 shrink-0 cursor-pointer group rounded-sm p-0', className)}
    {...props}
  >
    <CardContent className="flex flex-col p-4 overflow-hidden">
      <ArtistImage
        imageSrc={artist.imageSrc}
        alt={artist.name}
        className='mb-2'
      />
      <b className='line-clamp-2' title={artist.name}>{artist.name}</b>
    </CardContent>
  </Card>
);
