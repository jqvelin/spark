import type { ComponentPropsWithRef } from 'react';

import { PlayIcon } from 'lucide-react';
import Link from 'next/link';

import { PAGES } from '@/shared/config';
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
        <Link href={PAGES.album(album.id)}>
          <AlbumCover
            coverSrc={album.coverSrc}
            alt={album.title}
          />
        </Link>
        <Button
          size="icon"
          className={'absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity'}
        >
          <PlayIcon />
        </Button>
      </div>
      <Link href={PAGES.album(album.id)} className="truncate" title={album.title}>
        <b>{album.title}</b>
      </Link>
      <Link href={PAGES.artist(album.artistId)}>
        <P className="text-muted-foreground truncate" title={album.artist}>{album.artist}</P>
      </Link>
    </CardContent>
  </Card>
);
