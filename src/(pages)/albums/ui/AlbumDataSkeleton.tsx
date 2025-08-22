export const AlbumDataSkeleton = () => (
  <div className='flex items-center gap-4 justify-center mb-8 animate-pulse'>
    <div className='w-[200px] h-[200px] bg-muted rounded-sm' />
    <div className='flex flex-col'>
      <div className='w-[130px] h-[40px] bg-muted rounded-sm mb-2' />
      <div>
        <div className='w-[150px] h-[36px] bg-muted rounded-sm mb-2' />
        <div className='w-[130px] h-[28px] bg-muted rounded-sm mb-2' />
        <div className='w-[85px] h-[36px] bg-muted rounded-sm mb-2' />
      </div>
    </div>
  </div>
);
