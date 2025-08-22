import type { Track } from '@/entities/track';

const PLURAL_FORMS = {
  tracks: {
    zero: 'треков',
    one: 'трек',
    two: 'трека',
    few: 'трека',
    many: 'треков',
    other: 'треков'
  },
  hours: {
    zero: 'часов',
    one: 'час',
    two: 'часа',
    few: 'часа',
    many: 'часов',
    other: 'часов'
  },
  minutes: {
    zero: 'минут',
    one: 'минута',
    two: 'минуты',
    few: 'минуты',
    many: 'минут',
    other: 'минут'
  }
} as const;

const formatDuration = (totalSeconds: number): string => {
  const pluralRules = new Intl.PluralRules('ru-RU');

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);

  if (hours > 0) {
    const hoursForm = PLURAL_FORMS.hours[pluralRules.select(hours)];
    const minutesForm = PLURAL_FORMS.minutes[pluralRules.select(minutes)];

    if (minutes > 0) {
      return `${hours} ${hoursForm} ${minutes} ${minutesForm}`;
    } else {
      return `${hours} ${hoursForm}`;
    }
  } else {
    const minutesForm = PLURAL_FORMS.minutes[pluralRules.select(minutes)];
    return `${minutes} ${minutesForm}`;
  }
};

export const getHumanizedAlbumOverview = (tracks: Track[]) => {
  if (tracks.length === 0) return null;

  const pluralRules = new Intl.PluralRules('ru-RU');

  const tracksForm = PLURAL_FORMS.tracks[pluralRules.select(tracks.length)];
  const totalDuration = tracks.reduce((acc, track) => acc + track.duration, 0);

  const duration = formatDuration(totalDuration);

  return `${tracks.length} ${tracksForm} • ${duration}`;
};
