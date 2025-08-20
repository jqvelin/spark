import { ArtistAlbumsSkeleton, ArtistDataSkeleton, ArtistTracksSkeleton } from '@/(pages)/artists';

const Loading = () => (
  <div className="flex flex-col">
    <ArtistDataSkeleton />
    <ArtistTracksSkeleton />
    <ArtistAlbumsSkeleton />
  </div>
);

export default Loading;
