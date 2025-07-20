import { Fragment } from 'react';

import { CategoryTrackListsSkeleton, FreshAlbumsCarouselSkeleton } from '@/(pages)/home';

const Loading = () => (
  <Fragment>
    <FreshAlbumsCarouselSkeleton />
    <CategoryTrackListsSkeleton />
  </Fragment>
);

export default Loading;
