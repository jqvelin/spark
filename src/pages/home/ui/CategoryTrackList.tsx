import Link from 'next/link';

import { TrackCard, type Track } from '@/entities/track';
import { Button, H2 } from '@/shared/ui';

type Props = {
  categoryName: string,
  categoryPage: string,
  tracks: Track[]
};

export const CategoryTrackList = ({ categoryName, categoryPage, tracks }: Props) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <H2>{categoryName}</H2>
        <Link href={categoryPage}>
          <Button variant="ghost">
            View All
          </Button>
        </Link>
      </div>
      <div className="space-y-2">
        {tracks.slice(0, 5).map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </div>
    </div>
  );
};
