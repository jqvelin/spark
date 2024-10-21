export const getResolvedComponent = async (
    Component: (props: any) => Promise<JSX.Element>,
    props: { [key: string]: any }
) => {
    const ComponentResolved = await Component(props);
    return () => ComponentResolved;
};
