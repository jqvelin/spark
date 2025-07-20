import { Card, CardContent } from '@/shared/ui';

export const ArtistCardSkeleton = () => (
  <Card
    className='w-32 md:w-42 h-50 md:h-57 shrink-0 cursor-pointer group rounded-sm p-0 animate-pulse'
  >
    <CardContent className="flex flex-col p-4">
      <div className="mb-2">
        <div className='w-full aspect-square bg-muted rounded-sm'></div>
      </div>
      <div className='h-4 w-full mb-2 bg-muted rounded-sm'></div>
      <div className='h-4 w-full bg-muted rounded-sm'></div>
    </CardContent>
  </Card>
);
