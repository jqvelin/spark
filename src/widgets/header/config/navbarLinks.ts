import { PAGES } from '@/shared/config';

export const NAVBAR_LINKS = [
  {
    link: PAGES.home,
    label: 'Главная'
  },
  {
    link: PAGES.myPlaylists,
    label: 'Плейлисты'
  }
] as const;
