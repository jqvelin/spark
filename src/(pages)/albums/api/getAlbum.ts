import { albumSchema, type Album } from '@/entities/album';
import { api } from '@/shared/api';

export const getAlbum = async (albumId: Album['id']) => {
  try {
    const album = await api.get(`albums/${albumId}`).json();
    return albumSchema.parse(album);
  } catch (error) {
    console.error(error);
    return null;
  }
};
