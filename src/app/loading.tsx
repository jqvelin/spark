import { Fragment } from 'react';

import { CategoryTrackListsSkeleton, FreshAlbumsCarouselSkeleton } from '@/pages/home';

export default function Loading() {
  return <Fragment>
    <FreshAlbumsCarouselSkeleton />
    <CategoryTrackListsSkeleton />
  </Fragment>;
}
