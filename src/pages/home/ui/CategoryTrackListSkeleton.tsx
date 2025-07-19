import { TrackCardSkeleton } from '@/entities/track';
import { H2 } from '@/shared/ui';

type Props = {
  categoryName: string
};

export const CategoryTrackListSkeleton = ({ categoryName }: Props) => (
  <div className="space-y-4">
    <div className="flex items-center justify-between">
      <H2>{categoryName}</H2>
      <div className="w-20 h-8 bg-muted"></div>
    </div>
    <div className="space-y-2">
      <TrackCardSkeleton />
      <TrackCardSkeleton />
      <TrackCardSkeleton />
      <TrackCardSkeleton />
      <TrackCardSkeleton />
    </div>
  </div>
);
