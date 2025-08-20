import { AlbumCardSkeleton } from '@/entities/album';
import { H2 } from '@/shared/ui';

export const ArtistAlbumsSkeleton = () => (
  <div className='mb-4'>
    <H2 className='mb-2'>Альбомы</H2>
    <div className='flex gap-2 flex-wrap'>
      {[...Array(4)].map((_, i) => <AlbumCardSkeleton key={i} />)}
    </div>
  </div>
);
