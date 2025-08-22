import { notFound } from 'next/navigation';

import { getAlbum } from '@/(pages)/albums/api/getAlbum';

type Props = {
  params: Promise<{ albumId: string }>
};

export const generateMetadata = async ({ params }: Props) => {
  const { albumId } = await params;
  const album = await getAlbum(albumId);

  if (!album) {
    return notFound();
  }

  return {
    title: `${album.artist} – ${album.title}`
  };
};

export { AlbumPage as default } from '@/(pages)/albums';
