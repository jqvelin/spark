import { Card, CardContent } from '@/shared/ui';

export const TrackCardSkeleton = () => (
  <Card>
    <CardContent className="p-2">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="w-[50px] h-[50px] bg-muted rounded-sm"></div>
          <div className="flex-1 min-w-0">
            <div className='w-40 h-4 bg-muted mb-2'></div>
            <div className='w-20 h-4 bg-muted'></div>
          </div>
        </div>
        <div className='flex gap-4'>
          <div className='w-6 aspect-square bg-muted rounded-sm'></div>
          <div className='w-6 aspect-square bg-muted rounded-sm'></div>
        </div>
      </div>
    </CardContent>
  </Card>
);
