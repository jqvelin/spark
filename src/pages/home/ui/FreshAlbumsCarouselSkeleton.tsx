import { AlbumCardSkeleton } from '@/entities/album';
import { H2 } from '@/shared/ui';

export const FreshAlbumsCarouselSkeleton = () => {
  return (
    <div>
      <H2>Новые альбомы</H2>
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
};
