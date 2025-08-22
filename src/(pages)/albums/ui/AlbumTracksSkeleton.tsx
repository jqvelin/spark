import { TrackCardSkeleton } from '@/entities/track';

export const AlbumTracksSkeleton = () => (
  <div className='w-full max-w-screen-lg mx-auto flex flex-col gap-4'>
    {[...Array(5)].map((_, index) => (
      <TrackCardSkeleton key={index} />
    ))}
  </div>
);
