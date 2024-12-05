export const parseLocaleDuration = (localeDuration: string) => {
    const [minutes, seconds] = localeDuration
        .split(":")
        .map((value) => parseInt(value));
    return minutes * 60 + seconds;
};
