import { Fragment } from 'react';

import { FreshAlbumsCarousel } from './FreshAlbumsCarousel';
import { getHomePageData } from '../api/getHomePageData';

export const HomePage = async () => {
  const { albums } = await getHomePageData();

  return <Fragment>
    <FreshAlbumsCarousel albums={albums} />
  </Fragment>;
};
