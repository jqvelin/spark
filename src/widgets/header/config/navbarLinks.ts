import { PAGES } from '@/shared/config';

export const NAVBAR_LINKS = [
  {
    link: PAGES.home,
    label: 'Главная'
  },
  {
    link: PAGES.myPlaylists.root,
    label: 'Плейлисты'
  }
] as const;
