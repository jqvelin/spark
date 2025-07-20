import { CategoryTrackListSkeleton } from './CategoryTrackListSkeleton';

export const CategoryTrackListsSkeleton = () => (
  <div className='mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-8'>
    <CategoryTrackListSkeleton categoryName='Новые треки' />
    <CategoryTrackListSkeleton categoryName='Лучшее за сегодня' />
    <CategoryTrackListSkeleton categoryName='Популярное в России' />
    <CategoryTrackListSkeleton categoryName='Популярное в мире' />
  </div>
);
