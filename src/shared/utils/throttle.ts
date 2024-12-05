export const throttle = <T extends any[]>(
    callback: (...args: T) => void,
    delay: number
): ((...args: T) => void) => {
    let wait = false;
    return function (this: any, ...args: T) {
        if (!wait) {
            callback.apply(this, args);
            wait = true;
            setTimeout(() => (wait = false), delay);
        }
    };
};
