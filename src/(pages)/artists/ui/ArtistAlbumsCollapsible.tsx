import { AlbumCard, type Album } from '@/entities/album';
import { H2 } from '@/shared/ui';

type Props = {
  albums: Album[]
};

export const ArtistAlbumsCollapsible = ({ albums }: Props) => (
  <div className='mb-4'>
    <H2 className='mb-2'>Альбомы</H2>
    <div className='flex gap-2 flex-wrap'>
      {albums.map(album => <AlbumCard album={album} key={album.id} />)}
    </div>
  </div>
);
