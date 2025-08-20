import { artistSchema, type Artist } from '@/entities/artist';
import { api } from '@/shared/api';

export const getArtist = async (artistId: Artist['id']) => {
  try {
    const artist = await api.get(`artists/${artistId}`).json();
    return artistSchema.parse(artist);
  } catch (error) {
    console.error(error);
    return null;
  }
};
