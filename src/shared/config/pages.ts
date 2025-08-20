export const PAGES = {
  home: '/',
  signIn: '/sign-in',
  myPlaylists: {
    root: '/my-playlists',
    myPlaylist: (playlistId: number) => `/my-playlists/${playlistId}`
  },
  newTracks: '/new-tracks',
  bestOfToday: '/best-of-today',
  trendingInRussia: '/trending-in-russia',
  trendingWorldwide: '/trending-worldwide',
  album: (albumId: number) => `/albums/${albumId}`,
  artist: (artistId: string) => `/artists/${artistId}`,
  search: (query: string) => `/search?query=${query}`
} as const;
