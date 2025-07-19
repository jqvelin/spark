import { Fragment } from 'react';

import { PAGES } from '@/shared/config';

import { CategoryTrackList } from './CategoryTrackList';
import { FreshAlbumsCarousel } from './FreshAlbumsCarousel';
import { getHomePageData } from '../api/getHomePageData';

export const HomePage = async () => {
  const { albums, trackCategories } = await getHomePageData();

  return <Fragment>
    <FreshAlbumsCarousel albums={albums} />
    <div className='mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-8'>
      <CategoryTrackList
        categoryName='Новые треки'
        categoryPage={PAGES.newTracks}
        tracks={trackCategories.fresh}
      />
      <CategoryTrackList
        categoryName='Лучшее за сегодня'
        categoryPage={PAGES.bestOfToday}
        tracks={trackCategories.bestOfToday}
      />
      <CategoryTrackList
        categoryName='Популярное в России'
        categoryPage={PAGES.trendingInRussia}
        tracks={trackCategories.trendingInRussia}
      />
      <CategoryTrackList
        categoryName='Популярное в мире'
        categoryPage={PAGES.trendingWorldwide}
        tracks={trackCategories.trendingWorldwide}
      />
    </div>
  </Fragment>;
};
