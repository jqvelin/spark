import { AlbumCardSkeleton } from '@/entities/album';
import { H2 } from '@/shared/ui';

export const FreshAlbumsCarouselSkeleton = () => (
  <div>
    <H2 className='mb-2'>Новые альбомы</H2>
    <div className="flex gap-4 px-4 overflow-hidden">
      <AlbumCardSkeleton />
      <AlbumCardSkeleton />
      <AlbumCardSkeleton />
      <AlbumCardSkeleton />
      <AlbumCardSkeleton />
      <AlbumCardSkeleton />
      <AlbumCardSkeleton />
      <AlbumCardSkeleton />
      <AlbumCardSkeleton />
    </div>
  </div>
);
