export const PAGES = {
  home: '/',
  signIn: '/sign-in',
  myPlaylists: '/my-playlists',
  myPlaylist: (playlistId: number) => `/my-playlists/${playlistId}`,
  album: (albumId: number) => `/albums/${albumId}`,
  search: (query: string) => `/search?query=${query}`
} as const;
