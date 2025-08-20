const PLURAL_FORMS = {
  tracks: {
    zero: 'треков',
    one: 'трек',
    two: 'трека',
    few: 'трека',
    many: 'треков',
    other: 'треков'
  },
  albums: {
    zero: 'альбомов',
    one: 'альбом',
    two: 'альбома',
    few: 'альбома',
    many: 'альбомов',
    other: 'альбомов'
  }
} as const;

export const getHumanizedArtistOverview = (tracksCount: number, albumsCount: number) => {
  const pluralRules = new Intl.PluralRules('ru-RU');

  const tracksForm = PLURAL_FORMS.tracks[pluralRules.select(tracksCount)];
  const albumsForm = PLURAL_FORMS.albums[pluralRules.select(albumsCount)];

  const tracksInfo = tracksCount > 0 ? `${tracksCount} ${tracksForm}` : null;
  const albumsInfo = albumsCount > 0 ? `${albumsCount} ${albumsForm}` : null;

  if (tracksInfo && albumsInfo) {
    return `${tracksInfo} • ${albumsInfo}`;
  }

  return tracksInfo ?? albumsInfo;
};
