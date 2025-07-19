import { DownloadIcon, MoreHorizontalIcon, PlayIcon, PlusIcon } from 'lucide-react';
import Image from 'next/image';

import { Button, Card, CardContent, H3, P } from '@/shared/ui';

import { parseTrackDuration } from '../utils/parseTrackDuration';

import type { Track } from '../model/track.type';

type Props = {
  track: Track
};

export const TrackCard = ({ track }: Props) => {
  const parsedDuration = parseTrackDuration(track.duration);

  return (
    <Card className="transition-colors group">
      <CardContent className="p-2">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="relative flex items-center justify-center">
              <Image
                src={track.coverSrc ?? '/placeholder.svg'}
                height={50}
                width={50}
                alt={track.title}
                className='rounded-sm'
              />
              <Button size="icon" variant="outline" className='absolute transition-opacity opacity-0 group-hover:opacity-100'>
                <PlayIcon />
              </Button>
            </div>
            <div className="flex-1 min-w-0">
              <H3 className="truncate">{track.title}</H3>
              <P className="text-muted-foreground truncate">{track.artist}</P>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>{parsedDuration}</span>
          </div>
          <div className='flex'>
            <Button size="icon" variant="ghost" className='hidden md:flex'>
              <PlusIcon className='size-4' />
            </Button>
            <Button size="icon" variant="ghost" className='hidden md:flex'>
              <DownloadIcon className='size-4' />
            </Button>
          </div>
          <Button size="icon" variant="ghost" className='flex md:hidden'>
            <MoreHorizontalIcon className='size-4'  />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
