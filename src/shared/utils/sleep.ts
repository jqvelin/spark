export const sleep = async (sleepFor = 1000, message?: unknown) => {
    return new Promise((resolve) => setTimeout(resolve, sleepFor, message));
};
