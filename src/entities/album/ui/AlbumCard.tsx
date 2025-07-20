import type { ComponentPropsWithRef } from 'react';

import { PlayIcon } from 'lucide-react';

import { Button, Card, CardContent, P } from '@/shared/ui';
import { cn } from '@/shared/utils';

import { AlbumCover } from './AlbumCover';

import type { Album } from '../model/album.type';

type Props = ComponentPropsWithRef<'div'> & {
  album: Album
};

export const AlbumCard = ({ album, className, ...props }: Props) => (
  <Card
    className={cn('w-32 md:w-42 h-50 md:h-57 shrink-0 cursor-pointer group rounded-sm p-0', className)}
    {...props}
  >
    <CardContent className="flex flex-col p-4">
      <div className="relative mb-2">
        <AlbumCover
          coverSrc={album.coverSrc}
          alt={album.title}
        />
        <Button
          size="icon"
          className={'absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity'}
        >
          <PlayIcon />
        </Button>
      </div>
      <b className="truncate" title={album.title}>{album.title}</b>
      <P className="text-muted-foreground truncate" title={album.artist}>{album.artist}</P>
    </CardContent>
  </Card>
);
