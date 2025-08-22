import { PlayIcon } from 'lucide-react';
import { notFound } from 'next/navigation';

import type { Artist } from '@/entities/artist';
import { Button, H1, P } from '@/shared/ui';

import { ArtistAlbumsSection } from './ArtistAlbumsSection';
import { ArtistImage } from './ArtistImage';
import { ArtistTracksCollapsible } from './ArtistTracksCollapsible';
import { getArtist } from '../api/getArtist';
import { getHumanizedArtistOverview } from '../utils/getHumanizedArtistOverview';

type Props = {
  params: Promise<{ artistId: Artist['id'] }>
};

export const ArtistPage = async ({ params }: Props) => {
  const { artistId } = await params;
  const artist = await getArtist(artistId);

  if (!artist) {
    return notFound();
  }

  const { name, tracks, albums, imageSrc } = artist;

  const artistOverview = getHumanizedArtistOverview(tracks.length, albums.length);

  return <div className="flex flex-col">
    <div className='flex items-center gap-4 justify-center mb-8'>
      <ArtistImage imageSrc={imageSrc} alt={name} />
      <div className='flex flex-col'>
        <H1 className='mb-2'>{name}</H1>
        <div>
          <P className='text-muted-foreground'>{artistOverview}</P>
          <div className='flex items-center gap-2'>
            <Button>
              <PlayIcon className='size-4' />
              <span>Слушать</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
    {tracks.length > 0 && <ArtistTracksCollapsible tracks={tracks} />}
    {albums.length > 0 && <ArtistAlbumsSection albums={albums} />}
  </div>;
};
