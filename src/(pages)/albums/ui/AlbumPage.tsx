import { PlayIcon } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import type { Album } from '@/entities/album';
import { TrackCard } from '@/entities/track/ui/TrackCard';
import { PAGES } from '@/shared/config';
import { H1, H2 } from '@/shared/ui';
import { Button } from '@/shared/ui';
import { P } from '@/shared/ui';

import { AlbumCover } from './AlbumCover';
import { getAlbum } from '../api/getAlbum';
import { getHumanizedAlbumOverview } from '../utils/getHumanizedAlbumOverview';

type Props = {
  params: Promise<{ albumId: Album['id'] }>
};

export const AlbumPage = async ({ params }: Props) => {
  const { albumId } = await params;

  const album = await getAlbum(albumId);

  if (!album) {
    return notFound();
  }

  const { title, coverSrc, tracks, artist, artistId } = album;

  const albumOverview = getHumanizedAlbumOverview(tracks);

  return <div className="flex flex-col">
    <div className='flex items-center gap-4 justify-center mb-8'>
      <AlbumCover coverSrc={coverSrc} alt={title} />
      <div className='flex flex-col'>
        <H1 className='mb-2'>{title}</H1>
        <div>
          <Link href={PAGES.artist(artistId)}>
            <H2 className='text-muted-foreground'>{artist}</H2>
          </Link>
          <P className='text-muted-foreground'>{albumOverview}</P>
          <div className='flex items-center gap-2'>
            <Button>
              <PlayIcon className='size-4' />
              <span>Слушать</span>
            </Button>
          </div>
        </div>
      </div>
    </div>

    <div className='w-full max-w-screen-lg mx-auto flex flex-col gap-4'>
      {tracks.map(track => (
        <TrackCard key={track.id} track={track} />
      ))}
    </div>
  </div>;
};
