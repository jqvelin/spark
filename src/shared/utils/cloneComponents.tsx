export const cloneComponents = (
    amount = 1,
    Component: (() => JSX.Element) | JSX.Element
) => {
    // Avoiding missing keys
    if (typeof Component !== "function") {
        const ComponentResolved = () => Component;
        return Array.from({ length: amount }).map((_, index) => (
            <ComponentResolved key={index} />
        ));
    }
    return Array.from({ length: amount }).map((_, index) => (
        <Component key={index} />
    ));
};
