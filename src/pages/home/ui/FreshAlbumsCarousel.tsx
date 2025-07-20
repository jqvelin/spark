import { AlbumCard, type Album } from '@/entities/album';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, H2 } from '@/shared/ui';

type Props = {
  albums: Album[]
};

export const FreshAlbumsCarousel = ({ albums }: Props) => (
  <div>
    <H2 className='mb-2'>Новые альбомы</H2>
    <Carousel
      opts={{
        dragFree: true,
        slidesToScroll: 2
      }}
    >
      <CarouselContent>
        {albums.map(album => <CarouselItem className='max-w-fit' key={album.id}>
          <AlbumCard album={album} key={album.id} />
        </CarouselItem>)}
      </CarouselContent>
      <CarouselPrevious className='h-20 w-10 rounded-sm' />
      <CarouselNext className='h-20 w-10 rounded-sm' />
    </Carousel>
  </div>
);
