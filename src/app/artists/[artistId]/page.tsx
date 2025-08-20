import { notFound } from 'next/navigation';

import { getArtist } from '@/(pages)/artists';

type Props = {
  params: Promise<{ artistId: string }>
};

export const generateMetadata = async ({ params }: Props) => {
  const { artistId } = await params;
  const artist = await getArtist(artistId);

  if (!artist) {
    return notFound();
  }

  return {
    title: artist.name
  };
};

export { ArtistPage as default } from '@/(pages)/artists';
