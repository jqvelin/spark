import { AlbumDataSkeleton, AlbumTracksSkeleton } from '@/(pages)/albums';

const Loading = () => (
  <div className="flex flex-col">
    <AlbumDataSkeleton />
    <AlbumTracksSkeleton />
  </div>
);

export default Loading;
