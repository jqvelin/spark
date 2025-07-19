export const parseTrackDuration = (durationSeconds: number) => {
  const minutes = Math.floor(durationSeconds / 60).toString();
  const seconds = (durationSeconds % 60).toString();

  return `${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
};
