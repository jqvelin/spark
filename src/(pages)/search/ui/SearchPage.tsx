import { Fragment } from 'react';

import { AlbumCard } from '@/entities/album';
import { ArtistCard } from '@/entities/artist';
import { TrackCard } from '@/entities/track';
import { H1, H2 } from '@/shared/ui';

import { getSearchResults } from '../api/getSearchResults';

type Props = {
  searchParams: Promise<{ query: string }>
};

export const SearchPage = async ({ searchParams }: Props) => {
  const { query } = await searchParams;
  const { albums, artists, tracks } = await getSearchResults(query);

  const nothingFound =
    !tracks.length
    && !albums.length
    && !artists.length;

  return nothingFound
    ? <H1>По запросу "<strong>{query}</strong>" ничего не найдено :(</H1>
    : <Fragment>
      <H1 className='mb-8'>Результаты поиска по запросу "<strong>{query}</strong>"</H1>
      {tracks.length > 0 && <div className='mb-4'>
        <H2>Треки</H2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
          {tracks.map(track => <TrackCard track={track} key={track.id} />)}
        </div>
      </div>}
      {albums.length > 0 && <div className='mb-4'>
        <H2>Альбомы</H2>
        <div className='flex gap-2 flex-wrap'>
          {albums.map(album => <AlbumCard album={album} key={album.id} />)}
        </div>
      </div>}
      {artists.length > 0 && <div className='mb-4'>
        <H2>Исполнители</H2>
        <div className='flex gap-2 flex-wrap'>
          {artists.map(artist => <ArtistCard artist={artist} key={artist.id} />)}
        </div>
      </div>}
    </Fragment>;
};
